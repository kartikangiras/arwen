import '@arena/shared-config';
import Redis from 'ioredis';
import { randomUUID } from 'node:crypto';
import { EventType, type NormalizedMatchEvent, type TxLINERawEvent } from '@arena/shared-types';
import { mapEventType, RedisChannels, createLogger } from '@arena/shared-utils';

const logger = createLogger('simulate-match');
const FIXTURE_ID = 1; // matches a seeded fixture; consumer creates fixtures from this
const INTERVAL_MS = parseInt(process.env.SIM_INTERVAL_MS ?? '500', 10);

function normalize(raw: TxLINERawEvent, fixtureId: number): NormalizedMatchEvent {
  const data = raw.data;
  const oddsRaw = (data['odds'] as Record<string, unknown>) ?? null;
  const odds =
    oddsRaw && (oddsRaw['home'] || oddsRaw['draw'] || oddsRaw['away'])
      ? {
          home: Number(oddsRaw['home'] ?? 0),
          draw: Number(oddsRaw['draw'] ?? 0),
          away: Number(oddsRaw['away'] ?? 0),
          marketType: String(oddsRaw['market_type'] ?? 'match_winner'),
        }
      : null;
  return {
    id: randomUUID(),
    fixtureId,
    eventType: mapEventType(raw.event_type),
    team: (data['team'] as 'home' | 'away' | null) ?? null,
    playerName: (data['player'] as string) ?? null,
    minute: (data['minute'] as number) ?? null,
    period: 1,
    odds,
    rawPayload: data,
    sequenceNumber: raw.sequence,
    receivedAt: new Date().toISOString(),
  };
}

function generateScript(): TxLINERawEvent[] {
  let seq = 1;
  const events: TxLINERawEvent[] = [];
  const mk = (type: string, data: Record<string, unknown>): TxLINERawEvent => ({
    match_id: 'wc2026_sim',
    event_type: type,
    sequence: seq++,
    data: { home_team: 'Brazil', away_team: 'Argentina', competition: 'FIFA World Cup 2026', ...data },
  });

  let odds = { home: 2.5, draw: 3.2, away: 2.8 };
  const j = (o: number, p = 0.04) => Math.round(o * (1 + (Math.random() * 2 - 1) * p) * 100) / 100;

  events.push(mk('match.kick_off', { minute: 0, score: { home: 0, away: 0 } }));
  for (let m = 2; m <= 22; m += 4) {
    odds = { home: j(odds.home), draw: j(odds.draw), away: j(odds.away) };
    events.push(mk('match.odds_change', { minute: m, odds: { ...odds, market_type: 'match_winner' } }));
  }
  odds = { home: 1.9, draw: 3.3, away: 3.6 };
  events.push(mk('match.goal', { minute: 24, team: 'home', player: 'Vinicius Jr', score: { home: 1, away: 0 }, odds: { ...odds, market_type: 'match_winner' } }));
  events.push(mk('match.half_time', { minute: 45, score: { home: 1, away: 0 } }));
  events.push(mk('match.second_half_start', { minute: 46, score: { home: 1, away: 0 } }));
  odds = { home: 2.9, draw: 3.3, away: 2.3 };
  events.push(mk('match.goal', { minute: 58, team: 'away', player: 'Messi', score: { home: 1, away: 1 }, odds: { ...odds, market_type: 'match_winner' } }));
  odds = { home: 1.65, draw: 3.6, away: 5.2 };
  events.push(mk('match.goal', { minute: 82, team: 'home', player: 'Neymar', score: { home: 2, away: 1 }, odds: { ...odds, market_type: 'match_winner' } }));
  events.push(mk('match.red_card', { minute: 85, team: 'away', player: 'Otamendi' }));
  events.push(mk('match.full_time', { minute: 90, score: { home: 2, away: 1 } }));
  return events;
}

async function main(): Promise<void> {
  const redisUrl = process.env.REDIS_URL ?? 'redis://localhost:6379';
  const redis = new Redis(redisUrl, { maxRetriesPerRequest: 3 });
  await redis.ping();

  const script = generateScript();
  logger.info({ fixtureId: FIXTURE_ID, totalEvents: script.length, intervalMs: INTERVAL_MS }, 'starting simulation');

  for (const raw of script) {
    const event = normalize(raw, FIXTURE_ID);
    await redis.publish(RedisChannels.NORMALIZED_EVENTS, JSON.stringify(event));
    if (event.eventType === EventType.GOAL || event.eventType === EventType.FULL_TIME || event.eventType === EventType.KICK_OFF) {
      logger.info({ seq: event.sequenceNumber, type: event.eventType, minute: event.minute }, 'published event');
    }
    await new Promise((r) => setTimeout(r, INTERVAL_MS));
  }

  logger.info('simulation complete');
  redis.disconnect();
}

main().catch((err) => {
  console.error('simulation failed:', err);
  process.exit(1);
});
