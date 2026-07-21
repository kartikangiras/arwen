// agents.md §2 — the 7 football agent strategy archetypes.
// All agents share ONE LLM key (OPENAI_API_KEY); differentiation is via prompts (§9).

export enum AgentStrategy {
  MOMENTUM = 'momentum', // Messi Mania — momentum rider
  MEAN_REVERSION = 'mean-reversion', // Ronaldo Rumble — over-reaction fader
  EDGE_HUNTER = 'edge-hunter', // Mbappé Mayhem — mathematical edge hunter
  SETTLED_MARKET = 'settled-market', // Neymar Charisma — settled market trader
  STRUCTURAL_EVENT = 'structural-event', // Haaland Havoc — structural event trader
  LATE_GAME = 'late-game', // Zlatan Genesis — late-game specialist
  ADAPTIVE = 'adaptive', // Yamal Nitro — adaptive chaos trader
}

export const AGENT_STRATEGIES: readonly {
  slug: string;
  name: string;
  strategy: AgentStrategy;
  model: string;
  avatarPresetId: number;
  signalTriggers: string[];
  maxStakePercent: number;
  maxOpenBets: number;
  promptSlug: string;
}[] = [
  {
    slug: 'messi-mania',
    name: 'Messi Mania',
    strategy: AgentStrategy.MOMENTUM,
    model: 'gpt-4o',
    avatarPresetId: 1,
    signalTriggers: ['ODDS_VELOCITY_SPIKE'],
    maxStakePercent: 15,
    maxOpenBets: 3,
    promptSlug: 'messi-mania',
  },
  {
    slug: 'ronaldo-rumble',
    name: 'Ronaldo Rumble',
    strategy: AgentStrategy.MEAN_REVERSION,
    model: 'gpt-4o',
    avatarPresetId: 2,
    signalTriggers: ['GOAL_SCORED', 'ODDS_VELOCITY_SPIKE', 'ODDS_REVERSION'],
    maxStakePercent: 12,
    maxOpenBets: 4,
    promptSlug: 'ronaldo-rumble',
  },
  {
    slug: 'mbappe-mayhem',
    name: 'Mbappé Mayhem',
    strategy: AgentStrategy.EDGE_HUNTER,
    model: 'gpt-4o',
    avatarPresetId: 3,
    signalTriggers: ['ODDS_VELOCITY_SPIKE', 'ODDS_COMPRESSION', 'HIGH_VOLATILITY'],
    maxStakePercent: 10,
    maxOpenBets: 5,
    promptSlug: 'mbappe-mayhem',
  },
  {
    slug: 'neymar-charisma',
    name: 'Neymar Charisma',
    strategy: AgentStrategy.SETTLED_MARKET,
    model: 'gpt-4o',
    avatarPresetId: 4,
    signalTriggers: ['ODDS_REVERSION', 'PHASE_TRANSITION'],
    maxStakePercent: 8,
    maxOpenBets: 3,
    promptSlug: 'neymar-charisma',
  },
  {
    slug: 'haaland-havoc',
    name: 'Haaland Havoc',
    strategy: AgentStrategy.STRUCTURAL_EVENT,
    model: 'gpt-4o',
    avatarPresetId: 5,
    signalTriggers: ['GOAL_SCORED', 'ODDS_VELOCITY_SPIKE', 'RED_CARD'],
    maxStakePercent: 15,
    maxOpenBets: 6,
    promptSlug: 'haaland-havoc',
  },
  {
    slug: 'zlatan-genesis',
    name: 'Zlatan Genesis',
    strategy: AgentStrategy.LATE_GAME,
    model: 'gpt-4o',
    avatarPresetId: 6,
    signalTriggers: ['ODDS_COMPRESSION', 'LATE_GAME'],
    maxStakePercent: 10,
    maxOpenBets: 2,
    promptSlug: 'zlatan-genesis',
  },
  {
    slug: 'yamal-nitro',
    name: 'Yamal Nitro',
    strategy: AgentStrategy.ADAPTIVE,
    model: 'gpt-4o',
    avatarPresetId: 7,
    signalTriggers: ['ALL'],
    maxStakePercent: 12,
    maxOpenBets: 5,
    promptSlug: 'yamal-nitro',
  },
];

export interface AgentRuntimeConfig {
  id: number;
  slug: string;
  name: string;
  strategy: AgentStrategy;
  model: string;
  baseUrl: string;
  apiKey?: string | null;
  avatarPresetId: number | null;
  initialCapital: number;
  currentCash: number;
  frozenCash: number;
  maxStakePercent: number;
  maxOpenBets: number;
  isActive: boolean;
  autoTradingEnabled: boolean;
}

