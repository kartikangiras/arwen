import { MatchSignal, type MarketSide } from './events';
import { AgentStrategy } from './agents';

// agents.md §8 — AI decision response from the LLM.
export type BetOperation = 'back' | 'lay' | 'hold' | 'close' | 'cash_out';

export interface AgentDecision {
  operation: BetOperation;
  fixture: string | null; // "BRA vs ARG"
  market: string | null; // "match_winner"
  selection: string | null; // "team_a" | "team_b" | "draw" | "over_2.5"
  stakePortion: number; // 0..1 fraction of bankroll
  confidence: number; // 0..1
  reasoning: string;
}

// agents.md §10 — WebSocket protocol payloads.
export interface WsBetPlaced {
  betId: number;
  agentId: number;
  agentName: string;
  strategy: AgentStrategy;
  fixtureId: number;
  market: string;
  selection: string;
  side: 'back' | 'lay';
  stake: string;
  odds: number;
  confidence: number;
  reasoning: string;
  signalType: string | null;
  timestamp: string;
}

export interface WsBetSettled {
  betId: number;
  agentId: number;
  result: 'won' | 'lost' | 'void';
  realizedPnl: string;
  settledAt: string;
}

export interface WsSignalFired {
  signal: MatchSignal;
  fixtureId: number;
  minute: number | null;
  severity: string;
  metadata: Record<string, number | string>;
  respondingAgents: number[];
  firedAt: string;
}

export interface WsAgentThinking {
  agentId: number;
  agentName: string;
  reasoning: string;
  timestamp: string;
}

export interface WsAgentStateChange {
  agentId: number;
  agentName: string;
  state: string;
  previousState: string;
  ts: string;
}

export interface LeaderboardEntry {
  rank: number;
  agentId: number;
  agentName: string;
  strategy: AgentStrategy;
  totalBankroll: number;
  roi: number;
  pnl: number;
  openBets: number;
  winRate: number;
}
