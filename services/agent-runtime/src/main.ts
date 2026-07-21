import '@arena/shared-config';
import { PrismaClient } from '@arena/db';
import {
  AGENT_STRATEGIES,
  AgentStrategy,
  MatchSignal,
  type AgentDecision,
  type SignalRecord,
  type WsAgentStateChange,
  type WsAgentThinking,
  type WsBetPlaced,
} from '@arena/shared-types';
import { RedisChannels, RedisKeys, createLogger, clamp, kellyFraction, roundTo } from '@arena/shared-utils';
import Redis from 'ioredis';
import { randomUUID } from 'node:crypto';
import { LlmClient } from './llm/llm-client';

const logger = createLogger('agent-runtime');

type TeamSelection = 'team_a' | 'team_b' | 'draw';
type RuntimeAgent = {
  id: number;
  name: string;
  slug: string;
  model: string;
  baseUrl: string;
  apiKey: string | null;
  strategy: string;
  currentCash: { toString(): string };
  maxStakePercent: number;
  maxOpenBets: number;
  isActive: boolean;
  autoTradingEnabled: boolean;
  strategyConfig: { signalPoolIds: string | null } | null;
};

type MarketSnapshot = {
  home: number;
  draw: number;
  away: number;
  marketType: string;
};

function selectionToLabel(selection: TeamSelection): string {
  switch (selection) {
    case 'team_a':
      return 'team_a';
    case 'team_b':
      return 'team_b';
    case 'draw':
      return 'draw';
  }
}

function signalMatches(agent: RuntimeAgent, signalType: string): boolean {
  const configured = agent.strategyConfig?.signalPoolIds
    ?.split(',')
    .map((value: string) => value.trim())
    .filter(Boolean);
  if (!configured || configured.length === 0) return false;
  return configured.includes('ALL') || configured.includes(signalType);
}

function scoreFromSignal(signal: SignalRecord): { home: number; away: number } {
  return {
    home: Number(signal.metadata.scoreHome ?? 0),
    away: Number(signal.metadata.scoreAway ?? 0),
  };
}

function getCurrentOdds(latestOdds: MarketSnapshot, selection: TeamSelection): number {
  if (selection === 'team_a') return latestOdds.home;
  if (selection === 'team_b') return latestOdds.away;
  return latestOdds.draw;
}

function deriveHeuristicDecision(
  agent: RuntimeAgent,
  signal: SignalRecord,
  latestOdds: MarketSnapshot,
): AgentDecision {
  const score = scoreFromSignal(signal);
  const minute = Number(signal.metadata.minute ?? 0);

  let operation: AgentDecision['operation'] = 'hold';
  let selection: TeamSelection | null = null;
  let stakePortion = 0;
  let confidence = 0.5;
  let reasoning = `${agent.name} observed ${signal.type} but found no edge.`;

  switch (agent.strategy as AgentStrategy) {
    case AgentStrategy.MOMENTUM:
      if (signal.type === MatchSignal.ODDS_VELOCITY_SPIKE) {
        const direction = Number(signal.metadata.percentChange ?? 0) > 0.25 ? 'team_b' : 'team_a';
        operation = 'back';
        selection = direction;
        confidence = clamp(0.6 + Number(signal.metadata.percentChange ?? 0) / 2, 0.6, 0.92);
        stakePortion = clamp(confidence * 0.14, 0.05, agent.maxStakePercent / 100);
        reasoning = `Momentum spike detected, so ${agent.name} rides the move on ${direction}.`;
      }
      break;
    case AgentStrategy.MEAN_REVERSION:
      if (signal.type === MatchSignal.GOAL_SCORED) {
        operation = 'lay';
        selection = signal.metadata.team === 'home' ? 'team_a' : 'team_b';
        confidence = 0.69;
        stakePortion = 0.08;
        reasoning = `${agent.name} expects the goal reaction to overshoot and is fading the scorer.`;
      } else if (signal.type === MatchSignal.ODDS_REVERSION) {
        operation = 'back';
        selection = Number(signal.metadata.priorMove ?? 0) > 0.3 ? 'team_a' : 'draw';
        confidence = 0.63;
        stakePortion = 0.06;
        reasoning = `${agent.name} sees reversion confirming equilibrium and backs the snap-back.`;
      } else if (signal.type === MatchSignal.ODDS_VELOCITY_SPIKE) {
        operation = 'lay';
        selection = latestOdds.home < latestOdds.away ? 'team_a' : 'team_b';
        confidence = 0.58;
        stakePortion = 0.05;
        reasoning = `${agent.name} fades an overextended odds spike.`;
      }
      break;
    case AgentStrategy.EDGE_HUNTER:
      if (signal.type === MatchSignal.ODDS_COMPRESSION) {
        operation = 'back';
        selection = latestOdds.draw >= latestOdds.home && latestOdds.draw >= latestOdds.away ? 'draw' : 'team_b';
        confidence = 0.64;
        stakePortion = clamp(kellyFraction(0.42, getCurrentOdds(latestOdds, selection)) / 2, 0.03, 0.1);
        reasoning = `${agent.name} finds value in compressed prices and takes the widest edge.`;
      } else if (signal.type === MatchSignal.HIGH_VOLATILITY) {
        operation = 'back';
        selection = latestOdds.away > latestOdds.home ? 'team_b' : 'team_a';
        confidence = 0.57;
        stakePortion = 0.04;
        reasoning = `${agent.name} buys the statistically attractive side during volatility.`;
      } else if (signal.type === MatchSignal.ODDS_VELOCITY_SPIKE) {
        operation = 'back';
        selection = latestOdds.home > latestOdds.away ? 'team_a' : 'team_b';
        confidence = 0.55;
        stakePortion = 0.03;
        reasoning = `${agent.name} sees a small but tradable pricing gap after the spike.`;
      }
      break;
    case AgentStrategy.SETTLED_MARKET:
      if (signal.type === MatchSignal.PHASE_TRANSITION) {
        operation = 'back';
        selection = score.home > score.away ? 'team_a' : score.away > score.home ? 'team_b' : 'draw';
        confidence = signal.metadata.phase === 'full_time' ? 0.4 : 0.66;
        stakePortion = signal.metadata.phase === 'full_time' ? 0 : 0.05;
        reasoning = `${agent.name} waits for the market to settle at the phase break before entering.`;
      } else if (signal.type === MatchSignal.ODDS_REVERSION) {
        operation = 'back';
        selection = latestOdds.home < latestOdds.away ? 'team_a' : 'team_b';
        confidence = 0.62;
        stakePortion = 0.04;
        reasoning = `${agent.name} prefers the stabilized side after reversion.`;
      }
      break;
    case AgentStrategy.STRUCTURAL_EVENT:
      if (signal.type === MatchSignal.RED_CARD) {
        operation = 'back';
        selection = signal.metadata.team === 'home' ? 'team_b' : 'team_a';
        confidence = 0.82;
        stakePortion = 0.12;
        reasoning = `${agent.name} attacks the red-card structural edge immediately.`;
      } else if (signal.type === MatchSignal.GOAL_SCORED) {
        operation = 'back';
        selection = signal.metadata.team === 'home' ? 'team_a' : 'team_b';
        confidence = 0.73;
        stakePortion = 0.1;
        reasoning = `${agent.name} follows the scoring side while the match state is repricing.`;
      } else if (signal.type === MatchSignal.ODDS_VELOCITY_SPIKE) {
        operation = 'back';
        selection = latestOdds.home < latestOdds.away ? 'team_a' : 'team_b';
        confidence = 0.65;
        stakePortion = 0.09;
        reasoning = `${agent.name} treats the spike as confirmation of a structural change.`;
      }
      break;
    case AgentStrategy.LATE_GAME:
      if (signal.type === MatchSignal.LATE_GAME) {
        operation = 'back';
        selection = score.home === score.away ? 'draw' : score.home > score.away ? 'team_a' : 'team_b';
        confidence = 0.68;
        stakePortion = 0.07;
        reasoning = `${agent.name} specializes in late-game game-state pricing and commits here.`;
      } else if (signal.type === MatchSignal.ODDS_COMPRESSION && minute >= 75) {
        operation = 'back';
        selection = 'draw';
        confidence = 0.61;
        stakePortion = 0.05;
        reasoning = `${agent.name} reads late compression as a draw/value setup.`;
      }
      break;
    case AgentStrategy.ADAPTIVE:
      if (signal.type === MatchSignal.RED_CARD) {
        operation = 'back';
        selection = signal.metadata.team === 'home' ? 'team_b' : 'team_a';
        confidence = 0.77;
        stakePortion = 0.09;
      } else if (signal.type === MatchSignal.GOAL_SCORED) {
        operation = minute >= 75 ? 'lay' : 'back';
        selection = signal.metadata.team === 'home' ? 'team_a' : 'team_b';
        confidence = minute >= 75 ? 0.66 : 0.72;
        stakePortion = minute >= 75 ? 0.06 : 0.08;
      } else if (signal.type === MatchSignal.ODDS_COMPRESSION) {
        operation = 'back';
        selection = 'draw';
        confidence = 0.58;
        stakePortion = 0.04;
      } else if (signal.type === MatchSignal.ODDS_VELOCITY_SPIKE) {
        operation = 'back';
        selection = latestOdds.home < latestOdds.away ? 'team_a' : 'team_b';
        confidence = 0.63;
        stakePortion = 0.07;
      } else if (signal.type === MatchSignal.LATE_GAME) {
        operation = 'back';
        selection = score.home === score.away ? 'draw' : score.home > score.away ? 'team_a' : 'team_b';
        confidence = 0.65;
        stakePortion = 0.05;
      }
      reasoning = `${agent.name} switches modes dynamically for ${signal.type}.`;
      break;
  }

  if (!selection || stakePortion <= 0) {
    return {
      operation: 'hold',
      fixture: null,
      market: latestOdds.marketType,
      selection: null,
      stakePortion: 0,
      confidence,
      reasoning,
    };
  }

  return {
    operation,
    fixture: null,
    market: latestOdds.marketType,
    selection,
    stakePortion: clamp(stakePortion, 0.02, agent.maxStakePercent / 100),
    confidence,
    reasoning,
  };
}

async function publishState(
  redis: Redis,
  agent: RuntimeAgent,
  state: string,
  previousState: string,
): Promise<void> {
  const payload: WsAgentStateChange = {
    agentId: agent.id,
    agentName: agent.name,
    state,
    previousState,
    ts: new Date().toISOString(),
  };
  await redis.set(RedisKeys.agentState(agent.id), JSON.stringify(state));
  await redis.publish(RedisChannels.AGENT_STATE, JSON.stringify(payload));
}

async function publishThinking(
  redis: Redis,
  agent: RuntimeAgent,
  reasoning: string,
): Promise<void> {
  const payload: WsAgentThinking = {
    agentId: agent.id,
    agentName: agent.name,
    reasoning,
    timestamp: new Date().toISOString(),
  };
  await redis.publish(RedisChannels.AGENT_THINKING, JSON.stringify(payload));
}

async function loadLatestOdds(redis: Redis, fixtureId: number): Promise<MarketSnapshot | null> {
  const raw = await redis.get(RedisKeys.latestOdds(fixtureId));
  if (!raw) return null;
  return JSON.parse(raw) as MarketSnapshot;
}

async function shouldSkip(
  prisma: PrismaClient,
  agent: RuntimeAgent,
  signal: SignalRecord,
): Promise<string | null> {
  if (!agent.autoTradingEnabled || !agent.isActive) return 'agent disabled';

  const openCount = await prisma.bet.count({
    where: { agentId: agent.id, status: 'open' },
  });
  if (openCount >= agent.maxOpenBets) return 'max open bets reached';

  const existing = await prisma.decisionLog.findFirst({
    where: {
      agentId: agent.id,
      fixtureId: signal.fixtureId,
      signalType: signal.type,
      createdAt: { gte: new Date(Date.now() - 60 * 1000) },
    },
    orderBy: { createdAt: 'desc' },
  });
  if (existing) return 'recent decision already recorded';

  return null;
}

async function executeDecision(
  prisma: PrismaClient,
  redis: Redis,
  agent: RuntimeAgent,
  signal: SignalRecord,
  latestOdds: MarketSnapshot,
): Promise<void> {
  const skipReason = await shouldSkip(prisma, agent, signal);
  if (skipReason) {
    logger.info({ agent: agent.slug, signal: signal.type, skipReason }, 'skipping decision');
    return;
  }

  const previousState = 'idle';
  await publishState(redis, agent, 'thinking', previousState);

  const llm = new LlmClient(agent.model, agent.baseUrl, agent.apiKey);
  const context = JSON.stringify({
    signal,
    latestOdds,
    bankroll: Number(agent.currentCash),
    strategy: agent.strategy,
  });
  let decision = deriveHeuristicDecision(agent, signal, latestOdds);

  if (llm.enabled) {
    const llmDecision = await llm.decide(agent.slug, agent.strategy as AgentStrategy, context);
    if (llmDecision.operation !== 'hold' && llmDecision.selection) {
      decision = llmDecision;
    }
  }

  await publishThinking(redis, agent, decision.reasoning);

  const decisionLog = await prisma.decisionLog.create({
    data: {
      agentId: agent.id,
      reasoning: decision.reasoning,
      operation: decision.operation,
      fixtureId: signal.fixtureId,
      market: decision.market,
      selection: decision.selection,
      stakePortion: decision.stakePortion,
      confidence: decision.confidence,
      totalBankroll: Number(agent.currentCash),
      executed: decision.operation === 'back' || decision.operation === 'lay',
      signalType: signal.type,
      promptSnapshot: context,
      reasoningSnapshot: decision.reasoning,
      decisionSnapshot: JSON.stringify(decision),
    },
  });

  if ((decision.operation !== 'back' && decision.operation !== 'lay') || !decision.selection) {
    await publishState(redis, agent, 'idle', 'thinking');
    return;
  }

  const bankroll = Number(agent.currentCash);
  const stake = roundTo(
    clamp(bankroll * decision.stakePortion, 25, bankroll * (agent.maxStakePercent / 100)),
    2,
  );

  if (stake <= 0 || stake >= bankroll) {
    await publishState(redis, agent, 'idle', 'thinking');
    return;
  }

  const odds = getCurrentOdds(latestOdds, decision.selection as TeamSelection);
  const potentialProfit =
    decision.operation === 'back' ? roundTo(stake * (odds - 1), 2) : roundTo(stake, 2);
  const potentialLoss =
    decision.operation === 'back' ? roundTo(stake, 2) : roundTo(stake * (odds - 1), 2);

  const updatedAgent = await prisma.agent.update({
    where: { id: agent.id },
    data: {
      currentCash: { decrement: stake },
      frozenCash: { increment: stake },
    },
  });

  const bet = await prisma.bet.create({
    data: {
      agentId: agent.id,
      fixtureId: signal.fixtureId,
      betNo: `BET-${randomUUID()}`,
      market: decision.market ?? latestOdds.marketType,
      selection: selectionToLabel(decision.selection as TeamSelection),
      side: decision.operation,
      odds,
      stake,
      potentialProfit,
      potentialLoss,
      confidence: decision.confidence,
      signalType: signal.type,
      decisionLogId: decisionLog.id,
    },
  });

  await prisma.decisionLog.update({
    where: { id: decisionLog.id },
    data: { betId: bet.id, executed: true },
  });

  await redis.set(
    RedisKeys.agentBankroll(agent.id),
    JSON.stringify({
      currentCash: Number(updatedAgent.currentCash),
      frozenCash: Number(updatedAgent.frozenCash),
    }),
  );

  const payload: WsBetPlaced = {
    betId: bet.id,
    agentId: agent.id,
    agentName: agent.name,
    strategy: agent.strategy as AgentStrategy,
    fixtureId: signal.fixtureId,
    market: bet.market,
    selection: bet.selection,
    side: bet.side as 'back' | 'lay',
    stake: String(bet.stake),
    odds: bet.odds,
    confidence: decision.confidence,
    reasoning: decision.reasoning,
    signalType: signal.type,
    timestamp: new Date().toISOString(),
  };
  await redis.publish(RedisChannels.BETS_EXECUTED, JSON.stringify(payload));
  await redis.publish(RedisChannels.BANKROLL_UPDATE, JSON.stringify(payload));
  await redis.publish(RedisChannels.LEADERBOARD_UPDATED, JSON.stringify({ fixtureId: signal.fixtureId }));
  await publishState(redis, agent, 'just_bet', 'thinking');

  logger.info(
    {
      agent: agent.slug,
      signal: signal.type,
      side: bet.side,
      selection: bet.selection,
      stake,
      odds,
    },
    'placed virtual bet',
  );
}

async function main(): Promise<void> {
  const prisma = new PrismaClient();
  await prisma.$connect();

  const redisUrl = process.env.REDIS_URL ?? 'redis://localhost:6379';
  const redis = new Redis(redisUrl, { maxRetriesPerRequest: 3 });
  const subscriber = new Redis(redisUrl, { maxRetriesPerRequest: 3 });
  await redis.ping();
  await subscriber.ping();

  const agents = await prisma.agent.findMany({
    where: { isActive: true },
    include: { strategyConfig: true, promptBinding: { include: { promptTemplate: true } } },
    orderBy: { id: 'asc' },
  });
  logger.info({ count: agents.length }, 'loaded agents');

  await subscriber.subscribe(RedisChannels.SIGNAL_FIRED);
  subscriber.on('message', async (channel, message) => {
    if (channel !== RedisChannels.SIGNAL_FIRED) return;

    const signal = JSON.parse(message) as SignalRecord;
    const latestOdds = await loadLatestOdds(redis, signal.fixtureId);
    if (!latestOdds) {
      logger.warn({ fixtureId: signal.fixtureId, signal: signal.type }, 'no latest odds available');
      return;
    }

    for (const agent of agents) {
      if (!signalMatches(agent, signal.type)) continue;
      try {
        await executeDecision(prisma, redis, agent, signal, latestOdds);
      } catch (err) {
        logger.error(
          { err: (err as Error).message, agent: agent.slug, signal: signal.type },
          'failed to execute decision',
        );
      }
    }
  });

  logger.info('agent-runtime listening for signals');

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
  console.error('agent-runtime failed:', err);
  process.exit(1);
});
