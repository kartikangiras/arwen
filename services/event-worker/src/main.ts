import '@arena/shared-config';
import { PrismaClient } from '@arena/db';
import { RedisChannels, createLogger, computeBackPnL, computeLayPnL } from '@arena/shared-utils';
import type { EventType, WsBetSettled } from '@arena/shared-types';
import Redis from 'ioredis';

const logger = createLogger('event-worker');

function selectionWins(selection: string, scoreA: number, scoreB: number): boolean {
  if (selection === 'team_a') return scoreA > scoreB;
  if (selection === 'team_b') return scoreB > scoreA;
  if (selection === 'draw') return scoreA === scoreB;
  return false;
}

async function settleFixture(prisma: PrismaClient, redis: Redis, fixtureId: number): Promise<void> {
  const fixture = await prisma.fixture.findUnique({
    where: { id: fixtureId },
    include: {
      bets: {
        where: { status: 'open' },
        include: { agent: true },
      },
    },
  });
  if (!fixture || fixture.bets.length === 0) {
    logger.info({ fixtureId }, 'no open bets to settle');
    return;
  }

  for (const bet of fixture.bets) {
    const wonSelection = selectionWins(bet.selection, fixture.scoreA, fixture.scoreB);
    const realizedPnl =
      bet.side === 'back'
        ? computeBackPnL(Number(bet.stake), bet.odds, wonSelection)
        : computeLayPnL(Number(bet.stake), bet.odds, wonSelection);

    const status = realizedPnl > 0 ? 'won' : realizedPnl < 0 ? 'lost' : 'void';
    const settledAt = new Date();

    await prisma.bet.update({
      where: { id: bet.id },
      data: {
        status,
        result: status,
        realizedPnl,
        settledAt,
      },
    });

    const updatedAgent = await prisma.agent.update({
      where: { id: bet.agentId },
      data: {
        currentCash: { increment: Number(bet.stake) + realizedPnl },
        frozenCash: { decrement: Number(bet.stake) },
      },
    });

    await prisma.bankrollSnapshot.create({
      data: {
        agentId: bet.agentId,
        totalBankroll: Number(updatedAgent.currentCash) + Number(updatedAgent.frozenCash),
        cash: Number(updatedAgent.currentCash),
        openBetsValue: Number(updatedAgent.frozenCash),
        unrealizedPnl: 0,
        snapshotTime: settledAt,
      },
    });

    const payload: WsBetSettled = {
      betId: bet.id,
      agentId: bet.agentId,
      result: status as 'won' | 'lost' | 'void',
      realizedPnl: String(realizedPnl),
      settledAt: settledAt.toISOString(),
    };

    await redis.publish(RedisChannels.BETS_SETTLED, JSON.stringify(payload));
    await redis.publish(
      RedisChannels.BANKROLL_UPDATE,
      JSON.stringify({
        agentId: bet.agentId,
        currentCash: Number(updatedAgent.currentCash),
        frozenCash: Number(updatedAgent.frozenCash),
      }),
    );
    await redis.publish(
      RedisChannels.AGENT_STATE,
      JSON.stringify({
        agentId: bet.agentId,
        agentName: bet.agent.name,
        state: realizedPnl > 0 ? 'celebrating' : realizedPnl < 0 ? 'dejected' : 'idle',
        previousState: 'just_bet',
        ts: settledAt.toISOString(),
      }),
    );
  }

  await redis.publish(RedisChannels.LEADERBOARD_UPDATED, JSON.stringify({ fixtureId }));
  logger.info({ fixtureId, settled: fixture.bets.length }, 'settled open bets for fixture');
}

async function main(): Promise<void> {
  const prisma = new PrismaClient();
  await prisma.$connect();

  const redisUrl = process.env.REDIS_URL ?? 'redis://localhost:6379';
  const redis = new Redis(redisUrl, { maxRetriesPerRequest: 3 });
  const subscriber = new Redis(redisUrl, { maxRetriesPerRequest: 3 });
  await redis.ping();
  await subscriber.ping();

  await subscriber.subscribe(RedisChannels.NORMALIZED_EVENTS);
  subscriber.on('message', async (channel, message) => {
    if (channel !== RedisChannels.NORMALIZED_EVENTS) return;

    try {
      const evt = JSON.parse(message) as { eventType?: EventType; fixtureId?: number };
      if (evt.eventType === 'full_time' && evt.fixtureId) {
        await settleFixture(prisma, redis, evt.fixtureId);
      }
    } catch (err) {
      logger.error({ err: (err as Error).message }, 'failed to handle settlement event');
    }
  });

  logger.info('event-worker listening for settlement events');

  const shutdown = async () => {
    logger.info('shutting down');
    redis.disconnect();
    subscriber.disconnect();
    await prisma.$disconnect();
    process.exit(0);
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

main().catch((err) => {
  console.error('event-worker failed:', err);
  process.exit(1);
});
