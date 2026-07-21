import '@arena/shared-config';
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { createLogger } from '@arena/shared-utils';
import type { TxLINERawEvent } from '@arena/shared-types';

const logger = createLogger('mock-txline');
const PORT = parseInt(process.env.TXLINE_BASE_URL?.match(/:(\d+)/)?.[1] ?? '4000', 10);
const MATCH_ID = 'wc2026_final_mock';
const INTERVAL_MS = parseInt(process.env.MOCK_INTERVAL_MS ?? '800', 10);

interface MockState {
  minute: number;
  homeScore: number;
  awayScore: number;
  home: string;
  away: string;
  odds: { home: number; draw: number; away: number };
  sequence: number;
}

function buildEvent(state: MockState, type: string, data: Record<string, unknown>): TxLINERawEvent {
  return {
    match_id: MATCH_ID,
    event_type: type,
    sequence: state.sequence++,
    data: {
      home_team: state.home,
      away_team: state.away,
      competition: 'FIFA World Cup 2026',
      minute: state.minute,
      ...data,
    },
  };
}

function jitter(base: number, pct = 0.03): number {
  return Math.round((base * (1 + (Math.random() * 2 - 1) * pct)) * 100) / 100;
}

function generateMatchScript(): TxLINERawEvent[] {
  const state: MockState = {
    minute: 0,
    homeScore: 0,
    awayScore: 0,
    home: 'Brazil',
    away: 'Argentina',
    odds: { home: 2.5, draw: 3.2, away: 2.8 },
    sequence: 1,
  };
  const events: TxLINERawEvent[] = [];

  events.push(buildEvent(state, 'match.kick_off', { score: { home: 0, away: 0 } }));

  for (let m = 5; m <= 22; m += 4) {
    state.minute = m;
    state.odds = { home: jitter(state.odds.home), draw: jitter(state.odds.draw), away: jitter(state.odds.away) };
    events.push(buildEvent(state, 'match.odds_change', { odds: { ...state.odds, market_type: 'match_winner' } }));
  }

  state.minute = 23;
  state.homeScore = 1;
  state.odds = { home: 1.85, draw: 3.4, away: 3.9 };
  events.push(buildEvent(state, 'match.goal', {
    team: 'home', player: 'Vinicius Jr',
    score: { home: state.homeScore, away: state.awayScore },
    odds: { ...state.odds, market_type: 'match_winner' },
  }));

  state.minute = 45;
  events.push(buildEvent(state, 'match.half_time', { score: { home: 1, away: 0 } }));
  events.push(buildEvent(state, 'match.second_half_start', { score: { home: 1, away: 0 }, minute: 46 }));

  state.minute = 58;
  state.awayScore = 1;
  state.odds = { home: 2.8, draw: 3.3, away: 2.4 };
  events.push(buildEvent(state, 'match.goal', {
    team: 'away', player: 'Messi',
    score: { home: state.homeScore, away: state.awayScore },
    odds: { ...state.odds, market_type: 'match_winner' },
  }));

  state.minute = 81;
  state.homeScore = 2;
  state.odds = { home: 1.6, draw: 3.6, away: 5.5 };
  events.push(buildEvent(state, 'match.goal', {
    team: 'home', player: 'Neymar',
    score: { home: state.homeScore, away: state.awayScore },
    odds: { ...state.odds, market_type: 'match_winner' },
  }));

  state.minute = 85;
  events.push(buildEvent(state, 'match.red_card', { team: 'away', player: 'Otamendi' }));

  state.minute = 90;
  events.push(buildEvent(state, 'match.full_time', { score: { home: state.homeScore, away: state.awayScore } }));

  return events;
}

const script = generateMatchScript();
let clients = new Set<ServerResponse>();

function broadcast(event: TxLINERawEvent): void {
  const payload = `data: ${JSON.stringify(event)}\n\n`;
  for (const res of clients) {
    try {
      res.write(payload);
    } catch {
      clients.delete(res);
    }
  }
}

function startReplay(): void {
  let i = 0;
  logger.info({ totalEvents: script.length, intervalMs: INTERVAL_MS }, 'starting mock replay');
  const timer = setInterval(() => {
    if (i >= script.length) {
      clearInterval(timer);
      logger.info('mock replay complete');
      return;
    }
    const event = script[i];
    if (clients.size > 0) broadcast(event);
    i++;
  }, INTERVAL_MS);
}

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', clients: clients.size, service: 'mock-txline' }));
    return;
  }
  if (req.url === '/stream') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'Access-Control-Allow-Origin': '*',
    });
    res.write(`event: connected\ndata: ${JSON.stringify({ match_id: MATCH_ID, event_type: 'match.kick_off', sequence: 0, data: { home_team: 'Brazil', away_team: 'Argentina' } })}\n\n`);
    clients.add(res);
    startReplay();
    req.on('close', () => clients.delete(res));
    return;
  }
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'not found', hint: 'use /stream for SSE or /health' }));
});

server.listen(PORT, () => {
  logger.info({ port: PORT, matchId: MATCH_ID }, 'mock TxLINE server listening at /stream');
  startReplay();
});

process.on('SIGINT', () => {
  logger.info('shutting down mock TxLINE server');
  server.close();
  process.exit(0);
});
