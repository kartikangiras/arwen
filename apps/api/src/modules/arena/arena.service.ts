import { Injectable } from '@nestjs/common';
import {
  computeOpenBetUnrealizedPnl,
  computeRoi,
  computeWinRate,
} from '@arena/shared-utils';
import { PrismaService } from '../../common/prisma/prisma.service';

type SelectionKey = 'team_a' | 'draw' | 'team_b';

type FixtureShape = {
  id: number;
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
  currentMinute: number | null;
  status: string;
  stage: string;
  venue: string | null;
  tournament?: { name: string; year: number } | null;
};

function selectionLabel(selection: string, fixture: Pick<FixtureShape, 'teamA' | 'teamB'>): string {
  if (selection === 'team_a') return fixture.teamA;
  if (selection === 'team_b') return fixture.teamB;
  return 'Draw';
}

function selectionOdds(
  selection: string,
  odds: { teamA: number | null; draw: number | null; teamB: number | null } | null,
): number | null {
  if (!odds) return null;
  if (selection === 'team_a') return odds.teamA;
  if (selection === 'team_b') return odds.teamB;
  return odds.draw;
}

function winningSelection(scoreA: number, scoreB: number): SelectionKey {
  if (scoreA > scoreB) return 'team_a';
  if (scoreB > scoreA) return 'team_b';
  return 'draw';
}

function computeVelocity(history: Array<{ teamA: number; draw: number | null; teamB: number }>): number | null {
  if (history.length < 2) return null;
  const previous = history[history.length - 2];
  const current = history[history.length - 1];
  const candidates = [
    previous.teamA > 0 ? Math.abs((current.teamA - previous.teamA) / previous.teamA) : 0,
    previous.teamB > 0 ? Math.abs((current.teamB - previous.teamB) / previous.teamB) : 0,
    previous.draw && current.draw && previous.draw > 0
      ? Math.abs((current.draw - previous.draw) / previous.draw)
      : 0,
  ];
  return Math.max(...candidates);
}

@Injectable()
export class ArenaService {
  constructor(private readonly prisma: PrismaService) {}

  /** All open bets across agents (agents.md §5.1 /positions). */
  openPositions() {
    return this.prisma.bet.findMany({
      where: { status: 'open' },
      include: { agent: true, fixture: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  /** Recent executed bets (agents.md §5.1 /trades). */
  recentBets(limit = 50) {
    return this.prisma.bet.findMany({
      include: { agent: true, fixture: true },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }

  /** Recent AI decision reasoning logs (agents.md §5.1 /model-chat). */
  recentDecisions(limit = 50) {
    return this.prisma.decisionLog.findMany({
      include: { agent: true },
      orderBy: { decisionTime: 'desc' },
      take: limit,
    });
  }

  /** Full snapshot for the analytics dashboard. */
  async snapshot() {
    const [agents, openBets, recentBets] = await Promise.all([
      this.prisma.agent.findMany({
        where: { showOnDashboard: true },
        include: { strategyConfig: true, promptBinding: { include: { promptTemplate: true } } },
        orderBy: { id: 'asc' },
      }),
      this.openPositions(),
      this.recentBets(20),
    ]);
    const liveFixtures = await this.prisma.fixture.findMany({
      where: { status: 'live' },
      include: { tournament: true },
      orderBy: { kickoff: 'asc' },
    });
    return { agents, openBets, recentBets, liveFixtures };
  }

  /** Rich arena-floor snapshot for the live press-box experience. */
  async floor() {
    const [agents, liveFixtures, recentBets] = await Promise.all([
      this.prisma.agent.findMany({
        where: { showOnDashboard: true },
        include: {
          strategyConfig: true,
          promptBinding: { include: { promptTemplate: true } },
          bets: {
            select: {
              id: true,
              fixtureId: true,
              status: true,
              stake: true,
              realizedPnl: true,
              side: true,
              selection: true,
              odds: true,
            },
          },
        },
        orderBy: { id: 'asc' },
      }),
      this.prisma.fixture.findMany({
        where: { status: 'live' },
        include: { tournament: true },
        orderBy: { kickoff: 'asc' },
      }),
      this.recentBets(20),
    ]);

    const primaryFixture =
      liveFixtures[0] ??
      (await this.prisma.fixture.findFirst({
        where: { status: 'finished' },
        include: { tournament: true },
        orderBy: { updatedAt: 'desc' },
      }));

    let latestOdds: {
      market: string | null;
      teamA: number | null;
      draw: number | null;
      teamB: number | null;
      updatedAt: string | null;
      velocity: number | null;
    } | null = null;
    let oddsHistory: Array<{ timestamp: string; teamA: number; draw: number | null; teamB: number }> = [];
    let recentEvents: Array<{
      id: number;
      eventType: string;
      minute: number;
      team: string;
      description: string | null;
      occurredAt: string;
    }> = [];
    let fixtureOpenBets: Awaited<ReturnType<typeof this.openPositions>> = [];
    let recentSettlement: {
      fixtureId: number;
      settledAt: string;
      winningSelection: SelectionKey;
      results: Array<{
        agentId: number;
        agentName: string;
        realizedPnl: number;
        state: 'celebrating' | 'dejected' | 'idle';
      }>;
    } | null = null;

    if (primaryFixture) {
      const [historyRows, events, openBets, settledBets] = await Promise.all([
        this.prisma.oddsSnapshot.findMany({
          where: { fixtureId: primaryFixture.id },
          orderBy: { timestamp: 'desc' },
          take: 24,
        }),
        this.prisma.matchEvent.findMany({
          where: { fixtureId: primaryFixture.id },
          orderBy: { occurredAt: 'desc' },
          take: 8,
        }),
        this.prisma.bet.findMany({
          where: { fixtureId: primaryFixture.id, status: 'open' },
          include: { agent: true, fixture: true },
          orderBy: { createdAt: 'desc' },
        }),
        this.prisma.bet.findMany({
          where: {
            fixtureId: primaryFixture.id,
            status: { in: ['won', 'lost', 'void'] },
          },
          include: { agent: true },
          orderBy: { settledAt: 'desc' },
          take: 50,
        }),
      ]);

      oddsHistory = [...historyRows]
        .reverse()
        .map((row) => ({
          timestamp: row.timestamp.toISOString(),
          teamA: row.teamAOdds,
          draw: row.drawOdds,
          teamB: row.teamBOdds,
        }));
      const velocity = computeVelocity(oddsHistory);
      const latestRow = historyRows[0] ?? null;
      latestOdds = latestRow
        ? {
            market: latestRow.market,
            teamA: latestRow.teamAOdds,
            draw: latestRow.drawOdds,
            teamB: latestRow.teamBOdds,
            updatedAt: latestRow.timestamp.toISOString(),
            velocity,
          }
        : {
            market: 'match_winner',
            teamA: null,
            draw: null,
            teamB: null,
            updatedAt: null,
            velocity: null,
          };

      recentEvents = events.reverse().map((event) => ({
        id: event.id,
        eventType: event.eventType,
        minute: event.minute,
        team: event.team,
        description: event.description,
        occurredAt: event.occurredAt.toISOString(),
      }));
      fixtureOpenBets = openBets;

      if (settledBets.length > 0) {
        const aggregate = new Map<
          number,
          { agentId: number; agentName: string; realizedPnl: number; state: 'celebrating' | 'dejected' | 'idle' }
        >();

        for (const bet of settledBets) {
          const realized = Number(bet.realizedPnl ?? 0);
          const current =
            aggregate.get(bet.agentId) ?? {
              agentId: bet.agentId,
              agentName: bet.agent.name,
              realizedPnl: 0,
              state: 'idle' as const,
            };
          current.realizedPnl += realized;
          aggregate.set(bet.agentId, current);
        }

        const results = [...aggregate.values()]
          .map((entry) => ({
            ...entry,
            state:
              entry.realizedPnl > 0
                ? ('celebrating' as const)
                : entry.realizedPnl < 0
                  ? ('dejected' as const)
                  : ('idle' as const),
          }))
          .sort((a, b) => b.realizedPnl - a.realizedPnl);

        recentSettlement = {
          fixtureId: primaryFixture.id,
          settledAt: (settledBets[0].settledAt ?? settledBets[0].updatedAt).toISOString(),
          winningSelection: winningSelection(primaryFixture.scoreA, primaryFixture.scoreB),
          results,
        };
      }
    }

    const lanes =
      primaryFixture && latestOdds
        ? [
            { key: 'back_team_a', side: 'back', selection: 'team_a', label: `Back ${primaryFixture.teamA}` },
            { key: 'back_draw', side: 'back', selection: 'draw', label: 'Back Draw' },
            { key: 'back_team_b', side: 'back', selection: 'team_b', label: `Back ${primaryFixture.teamB}` },
            { key: 'lay_team_a', side: 'lay', selection: 'team_a', label: `Lay ${primaryFixture.teamA}` },
            { key: 'lay_draw', side: 'lay', selection: 'draw', label: 'Lay Draw' },
            { key: 'lay_team_b', side: 'lay', selection: 'team_b', label: `Lay ${primaryFixture.teamB}` },
          ].map((lane) => {
            const bets = fixtureOpenBets.filter(
              (bet) => bet.side === lane.side && bet.selection === lane.selection,
            );
            const agentsInLane = bets.map((bet) => {
              const currentOdds = selectionOdds(bet.selection, latestOdds);
              const unrealizedPnl =
                currentOdds != null
                  ? computeOpenBetUnrealizedPnl(
                      bet.side as 'back' | 'lay',
                      Number(bet.stake),
                      bet.odds,
                      currentOdds,
                    )
                  : 0;
              return {
                agentId: bet.agentId,
                agentName: bet.agent?.name ?? `Agent ${bet.agentId}`,
                stake: Number(bet.stake),
                odds: bet.odds,
                unrealizedPnl,
              };
            });

            return {
              ...lane,
              totalStake: bets.reduce((sum, bet) => sum + Number(bet.stake), 0),
              betCount: bets.length,
              agents: agentsInLane,
            };
          })
        : [];

    const floorAgents = agents.map((agent) => {
      const overallOpenStake = agent.bets
        .filter((bet) => bet.status === 'open')
        .reduce((sum, bet) => sum + Number(bet.stake), 0);
      const totalBankroll = Number(agent.currentCash) + overallOpenStake;
      const settledCount = agent.bets.filter((bet) => bet.status === 'won' || bet.status === 'lost');
      const wins = agent.bets.filter((bet) => bet.status === 'won').length;
      const fixtureBets = fixtureOpenBets.filter((bet) => bet.agentId === agent.id);
      const positionBets = fixtureBets.map((bet) => {
        const currentOdds = selectionOdds(bet.selection, latestOdds);
        const unrealizedPnl =
          currentOdds != null
            ? computeOpenBetUnrealizedPnl(
                bet.side as 'back' | 'lay',
                Number(bet.stake),
                bet.odds,
                currentOdds,
              )
            : 0;
        return {
          betId: bet.id,
          selection: bet.selection,
          selectionLabel:
            primaryFixture != null
              ? selectionLabel(bet.selection, primaryFixture as FixtureShape)
              : bet.selection,
          side: bet.side,
          stake: Number(bet.stake),
          entryOdds: bet.odds,
          currentOdds,
          unrealizedPnl,
        };
      });
      const netUnrealizedPnl = positionBets.reduce((sum, bet) => sum + bet.unrealizedPnl, 0);
      const settlementState = recentSettlement?.results.find((result) => result.agentId === agent.id)?.state;

      return {
        id: agent.id,
        name: agent.name,
        slug: agent.slug,
        model: agent.model,
        strategy: agent.strategy,
        avatarPresetId: agent.avatarPresetId,
        initialCapital: agent.initialCapital,
        currentCash: agent.currentCash,
        frozenCash: agent.frozenCash,
        isActive: agent.isActive,
        maxStakePercent: agent.maxStakePercent,
        maxOpenBets: agent.maxOpenBets,
        strategyConfig: agent.strategyConfig,
        promptBinding: agent.promptBinding,
        bankroll: totalBankroll,
        roi: computeRoi(totalBankroll, Number(agent.initialCapital)),
        winRate: computeWinRate(wins, settledCount.length),
        state: settlementState ?? 'idle',
        livePosition: {
          fixtureId: primaryFixture?.id ?? null,
          openBetCount: positionBets.length,
          netUnrealizedPnl,
          openBets: positionBets,
        },
      };
    });

    return {
      fixture: primaryFixture
        ? {
            id: primaryFixture.id,
            teamA: primaryFixture.teamA,
            teamB: primaryFixture.teamB,
            scoreA: primaryFixture.scoreA,
            scoreB: primaryFixture.scoreB,
            currentMinute: primaryFixture.currentMinute,
            status: primaryFixture.status,
            stage: primaryFixture.stage,
            venue: primaryFixture.venue,
            tournament: primaryFixture.tournament,
            latestOdds,
            oddsHistory,
          }
        : null,
      liveFixtures,
      recentBets,
      recentEvents,
      battle: primaryFixture
        ? {
            fixtureId: primaryFixture.id,
            totalStake: lanes.reduce((sum, lane) => sum + lane.totalStake, 0),
            lanes,
          }
        : null,
      agents: floorAgents,
      recentSettlement,
    };
  }
}
