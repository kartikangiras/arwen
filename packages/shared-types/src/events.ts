// agents.md §4.4 / §4.6 — TxLINE feed types + signal taxonomy.

export enum EventType {
  GOAL = 'goal',
  RED_CARD = 'red_card',
  YELLOW_CARD = 'yellow_card',
  SUBSTITUTION = 'substitution',
  KICK_OFF = 'kick_off',
  HALF_TIME = 'half_time',
  SECOND_HALF_START = 'second_half_start',
  FULL_TIME = 'full_time',
  ODDS_CHANGE = 'odds_change',
  VAR_DECISION = 'var_decision',
}

export enum MatchPhase {
  PRE_MATCH = 'pre_match',
  FIRST_HALF = 'first_half',
  HALF_TIME = 'half_time',
  SECOND_HALF = 'second_half',
  EXTRA_TIME = 'extra_time',
  PENALTIES = 'penalties',
  FINISHED = 'finished',
}

export type MarketSide = 'home' | 'draw' | 'away';

export interface OddsOutcome {
  selection: string;
  odds: number;
  impliedProbability: number;
}

export interface OddsUpdate {
  fixtureId: string;
  market: string;
  outcomes: OddsOutcome[];
  timestamp: number;
  stablePriceId?: string;
}

export interface ScoreEvent {
  fixtureId: string;
  action: string; // goal | yellow_card | red_card | substitution | penalty | game_finalised
  team: 'home' | 'away';
  player?: string;
  minute: number;
  period: number;
  statusId: number;
  score: { home: number; away: number };
  timestamp: number;
  statKey?: string;
}

export interface NormalizedMatchEvent {
  id: string;
  fixtureId: number;
  eventType: EventType;
  team: MarketSide | null;
  playerName: string | null;
  minute: number | null;
  period: number;
  odds: { home: number; draw: number; away: number; marketType: string } | null;
  rawPayload: Record<string, unknown>;
  sequenceNumber: number;
  receivedAt: string;
}

// agents.md §4.6 — signal types detected by the txline-consumer.
export enum MatchSignal {
  ODDS_VELOCITY_SPIKE = 'ODDS_VELOCITY_SPIKE',
  ODDS_COMPRESSION = 'ODDS_COMPRESSION',
  ODDS_REVERSION = 'ODDS_REVERSION',
  GOAL_SCORED = 'GOAL_SCORED',
  RED_CARD = 'RED_CARD',
  PHASE_TRANSITION = 'PHASE_TRANSITION',
  HIGH_VOLATILITY = 'HIGH_VOLATILITY',
  LATE_GAME = 'LATE_GAME',
}

export type SignalSeverity = 'low' | 'medium' | 'high' | 'critical';

export interface SignalRecord {
  type: MatchSignal;
  severity: SignalSeverity;
  fixtureId: number;
  metadata: Record<string, number | string>;
  timestamp: string;
}

export interface TxLINERawEvent {
  match_id: string;
  event_type: string;
  sequence: number;
  data: Record<string, unknown>;
}

export interface MatchState {
  fixtureId: number;
  teamA: string;
  teamB: string;
  score: { home: number; away: number };
  minute: number;
  phase: MatchPhase;
}

// agents.md §11 — agent pixel states shown on the press-box floor.
export type CharacterState =
  | 'idle'
  | 'thinking'
  | 'just_bet'
  | 'holding_profit'
  | 'holding_loss'
  | 'celebrating'
  | 'dejected'
  | 'offline'
  | 'signal_active';

