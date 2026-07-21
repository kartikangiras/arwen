import Redis, { type Redis as RedisClient } from 'ioredis';

let connection: RedisClient | null = null;

export function getRedisClient(url?: string): RedisClient {
  const redisUrl = url ?? process.env.REDIS_URL ?? 'redis://localhost:6379';
  if (!connection) {
    connection = new Redis(redisUrl, {
      maxRetriesPerRequest: 3,
      enableReadyCheck: true,
      retryStrategy: (times) => Math.min(times * 500, 2000),
    });
    connection.on('error', (err) => {
      // eslint-disable-next-line no-console
      console.error('[redis] error:', err.message);
    });
  }
  return connection;
}

export function createRedisClient(url?: string): RedisClient {
  const redisUrl = url ?? process.env.REDIS_URL ?? 'redis://localhost:6379';
  const client = new Redis(redisUrl, {
    maxRetriesPerRequest: 3,
    enableReadyCheck: true,
    retryStrategy: (times) => Math.min(times * 500, 2000),
  });
  client.on('error', (err) => {
    // eslint-disable-next-line no-console
    console.error('[redis] error:', err.message);
  });
  return client;
}

export type { RedisClient };

// agents.md §4.7 — Redis PubSub channel map + key helpers.
export const RedisChannels = {
  RAW_EVENTS: 'txline:events:raw',
  NORMALIZED_EVENTS: 'txline:events:normalized',
  BETS_EXECUTED: 'arena:bets:executed',
  BETS_SETTLED: 'arena:bets:settled',
  LEADERBOARD_UPDATED: 'arena:leaderboard:updated',
  MATCH_STATUS: 'arena:match:status',
  SIGNAL_FIRED: 'arena:signal:fired',
  AGENT_STATE: 'arena:agent:state',
  AGENT_THINKING: 'arena:agent:thinking',
  BANKROLL_UPDATE: 'arena:agent:bankroll',
  ODDS_UPDATE: 'arena:odds:update',
  MATCH_EVENT: 'arena:match:event',
  PHASE_TRANSITION: 'arena:match:phase',
} as const;

export const RedisKeys = {
  txlineStatus: 'arena:txline:status',
  fixtureScore: (fixtureId: number) => `arena:fixture:score:${fixtureId}`,
  fixtureState: (fixtureId: number) => `arena:fixture:state:${fixtureId}`,
  latestOdds: (fixtureId: number) => `arena:odds:latest:${fixtureId}`,
  oddsHistory: (fixtureId: number) => `arena:odds:history:${fixtureId}`,
  signalHistory: (fixtureId: number) => `arena:signals:history:${fixtureId}`,
  lastSignal: (fixtureId: number, signal: string) =>
    `arena:signal:last:${fixtureId}:${signal}`,
  agentBankroll: (agentId: number) => `arena:agent:bankroll:${agentId}`,
  agentState: (agentId: number) => `arena:agent:state:${agentId}`,
  agentCooldown: (agentId: number) => `arena:agent:cooldown:${agentId}`,
  leaderboard: 'arena:leaderboard:live',
} as const;

export const Queues = {
  BET_EXECUTION: 'bet-execution',
  BANKROLL_SNAPSHOT: 'bankroll-snapshot',
  LEADERBOARD_UPDATE: 'leaderboard-update',
  LLM_REASONING: 'llm-reasoning',
  SETTLEMENT: 'settlement',
  ODDS_SNAPSHOT: 'odds-snapshot',
} as const;

