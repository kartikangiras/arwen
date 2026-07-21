import '@arena/shared-config';
import { Prisma, PrismaClient } from '@arena/db';
import {
  EventType,
  MatchSignal,
  type NormalizedMatchEvent,
  type SignalRecord,
  type TxLINERawEvent,
} from '@arena/shared-types';
import {
  RedisChannels,
  RedisKeys,
  createLogger,
  impliedProbability,
  mapEventType,
  roundTo,
} from '@arena/shared-utils';
import Redis from 'ioredis';

const logger = createLogger('txline-consumer');
const DEFAULT_STREAM_URL = 'http://localhost:4000/stream';
const DEFAULT_KICKOFF = new Date('2026-07-19T19:00:00.000Z');
const TXLINE_SEQUENCE_KEY = (matchId: string) => `arena:txline:last-sequence:${matchId}`;

type OddsPoint = {
  home: number;
  draw: number;
  away: number;
  marketType: string;
  timestamp: number;
};

type FixtureContext = {
  fixtureId: number;
  teamA: string;
  teamB: string;
};

type ScoreState = {
  home: number;
  away: number;
};

type OddsTracker = {
  last?: OddsPoint;
  previous?: OddsPoint;
  recentTimestamps: number[];
  lateGameFired: boolean;
};

const fixtureCache = new Map<string, FixtureContext>();
const tournamentCache = new Map<string, number>();
const oddsTrackers = new Map<number, OddsTracker>();

function asString(value: unknown, fallback = ''): string {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback;
}

function asNumber(value: unknown, fallback = 0): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function teamCode(name: string): string {
  const letters = name.replace(/[^A-Za-z]/g, '').toUpperCase();
  return letters.slice(0, 3).padEnd(3, 'X');
}

function deriveStatus(eventType: EventType, minute: number | null): string {
  switch (eventType) {
    case EventType.KICK_OFF:
    case EventType.GOAL:
    case EventType.RED_CARD:
    case EventType.YELLOW_CARD:
    case EventType.SUBSTITUTION:
    case EventType.ODDS_CHANGE:
      return minute !== null && minute >= 0 ? 'live' : 'scheduled';
    case EventType.HALF_TIME:
      return 'halftime';
    case EventType.SECOND_HALF_START:
      return 'live';
    case EventType.FULL_TIME:
      return 'finished';
    default:
      return 'live';
  }
}

function derivePeriod(eventType: EventType, minute: number | null): number {
  switch (eventType) {
    case EventType.HALF_TIME:
      return 1;
    case EventType.SECOND_HALF_START:
    case EventType.FULL_TIME:
      return 2;
    default:
      if (minute !== null && minute > 45) return 2;
      return 1;
  }
}

function extractScore(data: Record<string, unknown>): ScoreState | null {
  const score = data['score'];
  if (!score || typeof score !== 'object') return null;
  const scoreRecord = score as Record<string, unknown>;
  return {
    home: asNumber(scoreRecord['home']),
    away: asNumber(scoreRecord['away']),
  };
}

function extractOdds(data: Record<string, unknown>) {
  const oddsRaw = data['odds'];
  if (!oddsRaw || typeof oddsRaw !== 'object') return null;
  const oddsRecord = oddsRaw as Record<string, unknown>;
  const home = asNumber(oddsRecord['home']);
  const draw = asNumber(oddsRecord['draw']);
  const away = asNumber(oddsRecord['away']);
  if (!home && !draw && !away) return null;
  return {
    home,
    draw,
    away,
    marketType: asString(oddsRecord['market_type'], 'match_winner'),
  };
}

function normalize(raw: TxLINERawEvent, fixtureId: number): NormalizedMatchEvent {
  const data = raw.data;
  const minute =
    data['minute'] === undefined || data['minute'] === null ? null : asNumber(data['minute']);
  const eventType = mapEventType(raw.event_type);
  return {
    id: `${raw.match_id}:${raw.sequence}`,
    fixtureId,
    eventType,
    team: ((data['team'] as 'home' | 'draw' | 'away' | null) ?? null) as
      | 'home'
      | 'draw'
      | 'away'
      | null,
    playerName: asString(data['player'], '') || null,
    minute,
    period: derivePeriod(eventType, minute),
    odds: extractOdds(data),
    rawPayload: data,
    sequenceNumber: raw.sequence,
    receivedAt: new Date().toISOString(),
  };
}

async function ensureTournament(
  prisma: PrismaClient,
  competition: string,
  year: number,
): Promise<number> {
  const cacheKey = `${competition}:${year}`;
  const cached = tournamentCache.get(cacheKey);
  if (cached) return cached;

  const existing = await prisma.tournament.findFirst({
    where: { name: competition, year },
    select: { id: true },
  });
  if (existing) {
    tournamentCache.set(cacheKey, existing.id);
    return existing.id;
  }

  const created = await prisma.tournament.create({
    data: {
      name: competition,
      year,
      hostCountry: 'United States',
      startDate: DEFAULT_KICKOFF,
      endDate: new Date(DEFAULT_KICKOFF.getTime() + 28 * 24 * 60 * 60 * 1000),
      status: 'live',
    },
    select: { id: true },
  });
  tournamentCache.set(cacheKey, created.id);
  return created.id;
}

async function ensureFixture(
  prisma: PrismaClient,
  raw: TxLINERawEvent,
): Promise<FixtureContext> {
  const cached = fixtureCache.get(raw.match_id);
  if (cached) return cached;

  const data = raw.data;
  const teamA = asString(data['home_team'], 'Home');
  const teamB = asString(data['away_team'], 'Away');
  const competition = asString(data['competition'], 'FIFA World Cup 2026');
  const yearMatch = competition.match(/\b(20\d{2})\b/);
  const year = yearMatch ? Number(yearMatch[1]) : 2026;
  const tournamentId = await ensureTournament(prisma, competition, year);

  const existing = await prisma.fixture.findUnique({
    where: { txlineFixtureId: raw.match_id },
    select: { id: true, teamA: true, teamB: true },
  });

  if (existing) {
    const context = { fixtureId: existing.id, teamA: existing.teamA, teamB: existing.teamB };
    fixtureCache.set(raw.match_id, context);
    return context;
  }

  const created = await prisma.fixture.create({
    data: {
      txlineFixtureId: raw.match_id,
      tournamentId,
      teamA,
      teamB,
      teamACode: teamCode(teamA),
      teamBCode: teamCode(teamB),
      stage: asString(data['stage'], 'Knockout'),
      venue: asString(data['venue'], 'World Cup Arena'),
      kickoff: DEFAULT_KICKOFF,
      status: 'scheduled',
      currentPeriod: 0,
    },
    select: { id: true, teamA: true, teamB: true },
  });

  const context = { fixtureId: created.id, teamA: created.teamA, teamB: created.teamB };
  fixtureCache.set(raw.match_id, context);
  return context;
}

async function persistFixtureState(
  prisma: PrismaClient,
  event: NormalizedMatchEvent,
): Promise<void> {
  const score = extractScore(event.rawPayload);
  await prisma.fixture.update({
    where: { id: event.fixtureId },
    data: {
      status: deriveStatus(event.eventType, event.minute),
      scoreA: score?.home ?? undefined,
      scoreB: score?.away ?? undefined,
      currentMinute: event.minute ?? undefined,
      currentPeriod: event.period,
    },
  });
}

async function persistMatchEvent(
  prisma: PrismaClient,
  event: NormalizedMatchEvent,
): Promise<void> {
  if (event.eventType === EventType.ODDS_CHANGE) return;

  const statKey = event.id;
  const existing = await prisma.matchEvent.findFirst({
    where: { fixtureId: event.fixtureId, statKey },
    select: { id: true },
  });
  if (existing) return;

  await prisma.matchEvent.create({
    data: {
      fixtureId: event.fixtureId,
      eventType: event.eventType,
      minute: event.minute ?? 0,
      period: event.period,
      team: event.team ?? 'neutral',
      player: event.playerName,
      description: `${event.eventType} @ ${event.minute ?? 0}'`,
      statKey,
      occurredAt: new Date(event.receivedAt),
    },
  });
}

async function persistOddsSnapshot(
  prisma: PrismaClient,
  event: NormalizedMatchEvent,
): Promise<void> {
  if (!event.odds) return;

  const timestamp = new Date(event.receivedAt);
  const allOutcomes: Prisma.InputJsonValue = [
    {
      selection: 'home',
      odds: event.odds.home,
      impliedProbability: roundTo(impliedProbability(event.odds.home), 6),
    },
    {
      selection: 'draw',
      odds: event.odds.draw,
      impliedProbability: roundTo(impliedProbability(event.odds.draw), 6),
    },
    {
      selection: 'away',
      odds: event.odds.away,
      impliedProbability: roundTo(impliedProbability(event.odds.away), 6),
    },
  ];

  await prisma.oddsSnapshot.create({
    data: {
      fixtureId: event.fixtureId,
      source: 'txline',
      market: event.odds.marketType,
      teamAOdds: event.odds.home,
      drawOdds: event.odds.draw,
      teamBOdds: event.odds.away,
      allOutcomes,
      timestamp,
    },
  });
}

function getTracker(fixtureId: number): OddsTracker {
  const tracker = oddsTrackers.get(fixtureId);
  if (tracker) return tracker;
  const created: OddsTracker = { recentTimestamps: [], lateGameFired: false };
  oddsTrackers.set(fixtureId, created);
  return created;
}

function buildOddsPoint(event: NormalizedMatchEvent): OddsPoint | null {
  if (!event.odds) return null;
  return {
    home: event.odds.home,
    draw: event.odds.draw,
    away: event.odds.away,
    marketType: event.odds.marketType,
    timestamp: new Date(event.receivedAt).getTime(),
  };
}

function detectSignals(
  event: NormalizedMatchEvent,
  context: FixtureContext,
): SignalRecord[] {
  const signals: SignalRecord[] = [];
  const tracker = getTracker(event.fixtureId);
  const nowMs = new Date(event.receivedAt).getTime();
  const score = extractScore(event.rawPayload);

  if (event.eventType === EventType.GOAL) {
    signals.push({
      type: MatchSignal.GOAL_SCORED,
      severity: 'high',
      fixtureId: event.fixtureId,
      metadata: {
        team: event.team ?? 'unknown',
        minute: event.minute ?? 0,
        scoreHome: score?.home ?? 0,
        scoreAway: score?.away ?? 0,
      },
      timestamp: event.receivedAt,
    });
  }

  if (event.eventType === EventType.RED_CARD) {
    signals.push({
      type: MatchSignal.RED_CARD,
      severity: 'critical',
      fixtureId: event.fixtureId,
      metadata: {
        team: event.team ?? 'unknown',
        minute: event.minute ?? 0,
      },
      timestamp: event.receivedAt,
    });
  }

  if (
    event.eventType === EventType.HALF_TIME ||
    event.eventType === EventType.SECOND_HALF_START ||
    event.eventType === EventType.FULL_TIME
  ) {
    signals.push({
      type: MatchSignal.PHASE_TRANSITION,
      severity: event.eventType === EventType.FULL_TIME ? 'high' : 'medium',
      fixtureId: event.fixtureId,
      metadata: {
        phase: event.eventType,
        minute: event.minute ?? 0,
      },
      timestamp: event.receivedAt,
    });
  }

  if ((event.minute ?? 0) >= 75 && !tracker.lateGameFired) {
    tracker.lateGameFired = true;
    signals.push({
      type: MatchSignal.LATE_GAME,
      severity: 'medium',
      fixtureId: event.fixtureId,
      metadata: {
        minute: event.minute ?? 75,
        matchup: `${context.teamA} vs ${context.teamB}`,
      },
      timestamp: event.receivedAt,
    });
  }

  const point = buildOddsPoint(event);
  if (!point) return signals;

  tracker.recentTimestamps.push(point.timestamp);
  tracker.recentTimestamps = tracker.recentTimestamps.filter((t) => point.timestamp - t <= 5 * 60_000);

  if (tracker.recentTimestamps.length >= 3) {
    signals.push({
      type: MatchSignal.HIGH_VOLATILITY,
      severity: tracker.recentTimestamps.length >= 5 ? 'high' : 'medium',
      fixtureId: event.fixtureId,
      metadata: {
        changesInWindow: tracker.recentTimestamps.length,
        windowSeconds: 300,
      },
      timestamp: event.receivedAt,
    });
  }

  const probabilities = [
    impliedProbability(point.home),
    impliedProbability(point.draw),
    impliedProbability(point.away),
  ];
  const spread = Math.max(...probabilities) - Math.min(...probabilities);
  if (spread < 0.05) {
    signals.push({
      type: MatchSignal.ODDS_COMPRESSION,
      severity: spread < 0.02 ? 'high' : 'medium',
      fixtureId: event.fixtureId,
      metadata: {
        market: point.marketType,
        spread: roundTo(spread, 6),
        homeProbability: roundTo(probabilities[0], 6),
        drawProbability: roundTo(probabilities[1], 6),
        awayProbability: roundTo(probabilities[2], 6),
      },
      timestamp: event.receivedAt,
    });
  }

  if (tracker.last) {
    const deltas = [
      Math.abs(point.home - tracker.last.home) / tracker.last.home,
      Math.abs(point.draw - tracker.last.draw) / tracker.last.draw,
      Math.abs(point.away - tracker.last.away) / tracker.last.away,
    ];
    const maxDelta = Math.max(...deltas);
    const seconds = Math.max((point.timestamp - tracker.last.timestamp) / 1000, 1);
    if (maxDelta > 0.1 && seconds < 120) {
      signals.push({
        type: MatchSignal.ODDS_VELOCITY_SPIKE,
        severity: maxDelta > 0.25 ? 'critical' : maxDelta > 0.15 ? 'high' : 'medium',
        fixtureId: event.fixtureId,
        metadata: {
          market: point.marketType,
          percentChange: roundTo(maxDelta, 6),
          timeDeltaSeconds: roundTo(seconds, 2),
        },
        timestamp: event.receivedAt,
      });
    }
  }

  if (tracker.previous && tracker.last) {
    const priorMove = Math.abs(tracker.last.home - tracker.previous.home) / tracker.previous.home;
    const reversion = Math.abs(point.home - tracker.previous.home) / tracker.previous.home;
    if (priorMove > 0.1 && reversion < priorMove * 0.5 && point.timestamp - tracker.previous.timestamp < 600_000) {
      signals.push({
        type: MatchSignal.ODDS_REVERSION,
        severity: 'medium',
        fixtureId: event.fixtureId,
        metadata: {
          market: point.marketType,
          priorMove: roundTo(priorMove, 6),
          reversionPercent: roundTo(reversion, 6),
        },
        timestamp: event.receivedAt,
      });
    }
  }

  tracker.previous = tracker.last;
  tracker.last = point;

  return signals;
}

async function persistSignal(
  prisma: PrismaClient,
  redis: Redis,
  signal: SignalRecord,
): Promise<void> {
  const dedupeKey = `${signal.fixtureId}:${signal.type}:${signal.metadata['minute'] ?? signal.timestamp}:${signal.metadata['market'] ?? ''}`;
  const redisKey = RedisKeys.lastSignal(signal.fixtureId, dedupeKey);
  const seen = await redis.get(redisKey);
  if (seen) return;

  await prisma.signal.create({
    data: {
      fixtureId: signal.fixtureId,
      type: signal.type,
      severity: signal.severity,
      description: `${signal.type} detected`,
      metadata: signal.metadata as Prisma.InputJsonValue,
      triggeredAt: new Date(signal.timestamp),
    },
  });
  await redis.set(redisKey, signal.timestamp, 'EX', 60 * 60 * 6);
  await redis.publish(RedisChannels.SIGNAL_FIRED, JSON.stringify(signal));
}

async function publishDerivedState(
  redis: Redis,
  event: NormalizedMatchEvent,
  signals: SignalRecord[],
): Promise<void> {
  const score = extractScore(event.rawPayload);
  if (score) {
    await redis.set(
      RedisKeys.fixtureScore(event.fixtureId),
      JSON.stringify(score),
    );
  }

  await redis.set(
    RedisKeys.fixtureState(event.fixtureId),
    JSON.stringify({
      fixtureId: event.fixtureId,
      eventType: event.eventType,
      minute: event.minute,
      period: event.period,
      receivedAt: event.receivedAt,
    }),
  );

  if (event.odds) {
    await redis.set(
      RedisKeys.latestOdds(event.fixtureId),
      JSON.stringify(event.odds),
    );
    await redis.publish(RedisChannels.ODDS_UPDATE, JSON.stringify(event));
  } else {
    await redis.publish(RedisChannels.MATCH_EVENT, JSON.stringify(event));
  }

  if (event.eventType === EventType.HALF_TIME || event.eventType === EventType.SECOND_HALF_START || event.eventType === EventType.FULL_TIME) {
    await redis.publish(RedisChannels.PHASE_TRANSITION, JSON.stringify(event));
  }

  await redis.publish(RedisChannels.MATCH_STATUS, JSON.stringify(event));

  for (const signal of signals) {
    await persistSignal(prismaSingleton, redis, signal);
  }
}

const prismaSingleton = new PrismaClient();

async function processRawEvent(redis: Redis, raw: TxLINERawEvent): Promise<void> {
  const lastSequence = asNumber(await redis.get(TXLINE_SEQUENCE_KEY(raw.match_id)), -1);
  if (raw.sequence <= lastSequence) {
    return;
  }

  const context = await ensureFixture(prismaSingleton, raw);
  const event = normalize(raw, context.fixtureId);

  await persistFixtureState(prismaSingleton, event);
  await persistMatchEvent(prismaSingleton, event);
  await persistOddsSnapshot(prismaSingleton, event);

  const signals = detectSignals(event, context);

  await redis.publish(RedisChannels.NORMALIZED_EVENTS, JSON.stringify(event));
  await publishDerivedState(redis, event, signals);
  await redis.set(TXLINE_SEQUENCE_KEY(raw.match_id), String(raw.sequence));

  logger.info(
    {
      fixtureId: event.fixtureId,
      eventType: event.eventType,
      minute: event.minute,
      signalCount: signals.length,
    },
    'processed TxLINE event',
  );
}

async function consumeStream(redis: Redis, streamUrl: string): Promise<void> {
  logger.info({ streamUrl }, 'connecting to TxLINE SSE stream');
  const res = await fetch(streamUrl, {
    headers: { Accept: 'text/event-stream' },
  });
  if (!res.ok || !res.body) {
    throw new Error(`SSE connection failed: ${res.status}`);
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const events = buffer.split('\n\n');
    buffer = events.pop() ?? '';

    for (const chunk of events) {
      const dataLine = chunk
        .split('\n')
        .find((line) => line.startsWith('data: '));
      if (!dataLine) continue;

      try {
        const raw = JSON.parse(dataLine.slice(6)) as TxLINERawEvent;
        await processRawEvent(redis, raw);
      } catch (err) {
        logger.error({ err: (err as Error).message }, 'failed to parse SSE event');
      }
    }
  }
}

async function main(): Promise<void> {
  await prismaSingleton.$connect();

  const redisUrl = process.env.REDIS_URL ?? 'redis://localhost:6379';
  const redis = new Redis(redisUrl, { maxRetriesPerRequest: 3 });
  await redis.ping();

  const streamUrl = process.env.TXLINE_BASE_URL ?? DEFAULT_STREAM_URL;
  await redis.set(RedisKeys.txlineStatus, JSON.stringify('1'));

  const shutdown = async () => {
    logger.info('shutting down');
    await redis.set(RedisKeys.txlineStatus, JSON.stringify('0'));
    redis.disconnect();
    await prismaSingleton.$disconnect();
    process.exit(0);
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);

  while (true) {
    try {
      await consumeStream(redis, streamUrl);
      logger.warn('SSE stream ended — reconnecting in 3s');
    } catch (err) {
      logger.error({ err: (err as Error).message }, 'stream error — reconnecting in 3s');
    }
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
}

main().catch((err) => {
  console.error('txline-consumer failed:', err);
  process.exit(1);
});
