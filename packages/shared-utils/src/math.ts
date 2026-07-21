// Betting math helpers — odds conversion, Kelly, PnL (agents.md §4.6 / §9).

export function impliedProbability(decimalOdds: number): number {
  if (decimalOdds <= 1) return 0;
  return 1 / decimalOdds;
}

export function decimalOddsFromProbability(prob: number): number {
  if (prob <= 0) return 0;
  return 1 / prob;
}

/** Back bet profit if won; stake lost if lost (agents.md §4 portfolio). */
export function computeBackPnL(stake: number, odds: number, won: boolean): number {
  return won ? stake * (odds - 1) : -stake;
}

/** Lay bet PnL: wins the stake if selection loses; pays out at odds if it wins. */
export function computeLayPnL(stake: number, odds: number, won: boolean): number {
  return won ? -stake * (odds - 1) : stake;
}

/** Unrealized PnL for an open back bet given current live odds. */
export function computeUnrealizedBackPnL(
  stake: number,
  entryOdds: number,
  currentOdds: number,
): number {
  if (currentOdds <= 0) return 0;
  const currentValue = (stake * entryOdds) / currentOdds;
  return currentValue - stake;
}

/** Unrealized PnL for an open lay bet marked against current live odds. */
export function computeUnrealizedLayPnL(
  stake: number,
  entryOdds: number,
  currentOdds: number,
): number {
  if (currentOdds <= 0) return 0;
  return stake - (stake * entryOdds) / currentOdds;
}

export function computeOpenBetUnrealizedPnl(
  side: 'back' | 'lay',
  stake: number,
  entryOdds: number,
  currentOdds: number,
): number {
  return side === 'lay'
    ? computeUnrealizedLayPnL(stake, entryOdds, currentOdds)
    : computeUnrealizedBackPnL(stake, entryOdds, currentOdds);
}

export function computeRoi(currentBankroll: number, initialCapital: number): number {
  if (initialCapital === 0) return 0;
  return ((currentBankroll - initialCapital) / initialCapital) * 100;
}

export function computeWinRate(won: number, total: number): number {
  if (total === 0) return 0;
  return won / total;
}

export function computeSharpeRatio(returns: number[]): number {
  if (returns.length < 2) return 0;
  const n = returns.length;
  const mean = returns.reduce((a, b) => a + b, 0) / n;
  const variance =
    returns.reduce((acc, r) => acc + Math.pow(r - mean, 2), 0) / (n - 1);
  const std = Math.sqrt(variance);
  if (std === 0) return 0;
  return (mean / std) * Math.sqrt(n);
}

export function computeMaxDrawdown(peak: number, current: number): number {
  if (peak === 0) return 0;
  return Math.max(0, (peak - current) / peak);
}

/** Kelly criterion fraction (agents.md §9.3 Mbappé Mayhem). */
export function kellyFraction(winProbability: number, decimalOdds: number): number {
  const b = decimalOdds - 1;
  if (b <= 0) return 0;
  const q = 1 - winProbability;
  const f = (b * winProbability - q) / b;
  return Math.max(0, f);
}

/** Commission/fee simulation (agents.md §4 portfolio: 0.1% per bet). */
export function applyCommission(stake: number, rate = 0.001): number {
  return stake * (1 - rate);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function normalize(value: number, min: number, max: number): number {
  if (max === min) return 0;
  return (value - min) / (max - min);
}

export function roundTo(value: number, decimals = 4): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

