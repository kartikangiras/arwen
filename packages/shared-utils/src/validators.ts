import { z } from 'zod';
import { EventType, MatchPhase, type TxLINERawEvent } from '@arena/shared-types';

export const TxLINERawEventSchema = z.object({
  match_id: z.string().min(1),
  event_type: z.string().min(1),
  sequence: z.number().int().nonnegative(),
  data: z.record(z.unknown()),
}) satisfies z.ZodType<TxLINERawEvent>;

export const eventTypeMap: Record<string, EventType> = {
  'match.odds_change': EventType.ODDS_CHANGE,
  'match.goal': EventType.GOAL,
  'match.red_card': EventType.RED_CARD,
  'match.yellow_card': EventType.YELLOW_CARD,
  'match.substitution': EventType.SUBSTITUTION,
  'match.kick_off': EventType.KICK_OFF,
  'match.half_time': EventType.HALF_TIME,
  'match.second_half_start': EventType.SECOND_HALF_START,
  'match.full_time': EventType.FULL_TIME,
  'match.game_finalised': EventType.FULL_TIME,
  game_finalised: EventType.FULL_TIME,
  'match.var_decision': EventType.VAR_DECISION,
};

export function mapEventType(raw: string): EventType {
  return eventTypeMap[raw] ?? EventType.ODDS_CHANGE;
}

export const matchPhaseMap: Record<string, MatchPhase> = {
  pre_match: MatchPhase.PRE_MATCH,
  first_half: MatchPhase.FIRST_HALF,
  half_time: MatchPhase.HALF_TIME,
  second_half: MatchPhase.SECOND_HALF,
  extra_time: MatchPhase.EXTRA_TIME,
  penalties: MatchPhase.PENALTIES,
  finished: MatchPhase.FINISHED,
};

