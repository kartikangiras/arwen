import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import type { LeaderboardEntry } from '@arena/shared-types';
import { AgentStrategy } from '@arena/shared-types';

@Injectable()
export class RankingService {
  constructor(private readonly prisma: PrismaService) {}

  async leaderboard(): Promise<LeaderboardEntry[]> {
    const agents = await this.prisma.agent.findMany({
      where: { showOnDashboard: true },
      include: {
        bets: { select: { stake: true, status: true, realizedPnl: true } },
      },
      orderBy: { id: 'asc' },
    });

    const rows = agents.map((a) => {
      const open = a.bets.filter((b) => b.status === 'open');
      const settled = a.bets.filter((b) => b.status === 'won' || b.status === 'lost');
      const won = a.bets.filter((b) => b.status === 'won').length;
      const frozen = open.reduce((s, b) => s + Number(b.stake), 0);
      const totalBankroll = Number(a.currentCash) + frozen;
      const pnl = totalBankroll - Number(a.initialCapital);
      return {
        agentId: a.id,
        agentName: a.name,
        strategy: a.strategy as AgentStrategy,
        totalBankroll,
        roi:
          ((totalBankroll - Number(a.initialCapital)) / Number(a.initialCapital)) * 100,
        pnl,
        openBets: open.length,
        winRate: settled.length ? won / settled.length : 0,
      };
    });

    rows.sort((x, y) => y.totalBankroll - x.totalBankroll);
    return rows.map((r, i) => ({ rank: i + 1, ...r }));
  }
}
