import '@arena/shared-config';
import Redis from 'ioredis';
import { PrismaClient } from '@arena/db';
import { RedisKeys, createLogger } from '@arena/shared-utils';

const logger = createLogger('reset-arena');

async function main(): Promise<void> {
  const redisUrl = process.env.REDIS_URL ?? 'redis://localhost:6379';
  const redis = new Redis(redisUrl, { maxRetriesPerRequest: 3 });
  const prisma = new PrismaClient();

  await redis.ping();
  await prisma.$connect();

  logger.info('resetting arena state...');

  // Wipe transactional/derived data; keep agents, prompts, strategy bindings, and tournaments.
  const order = [
    'bankrollSnapshot',
    'decisionLog',
    'bet',
    'signal',
    'matchEvent',
    'oddsSnapshot',
    'fixture',
    'newsItem',
  ] as const;

  for (const model of order) {
    const r = await (prisma[model] as { deleteMany: (args?: object) => Promise<{ count: number }> }).deleteMany();
    logger.info({ model, count: r.count }, 'deleted');
  }

  // Reset agent bankrolls + re-create strategy configs (re-seed will rebuild).
  await prisma.agent.updateMany({
    data: { currentCash: 10000, frozenCash: 0, autoTradingEnabled: true, isActive: true },
  });
  logger.info('reset all agent bankrolls to 10000');

  // Clear Redis arena keys.
  const keys = await redis.keys('arena:*');
  if (keys.length > 0) {
    await redis.del(...keys);
    logger.info({ count: keys.length }, 'cleared Redis keys');
  } else {
    logger.info('no Redis keys to clear');
  }
  await redis.set(RedisKeys.txlineStatus, JSON.stringify('0'));

  logger.info('arena reset complete');
  redis.disconnect();
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error('reset failed:', err);
  process.exit(1);
});
