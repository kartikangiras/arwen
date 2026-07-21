import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class AgentsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.agent.findMany({
      where: { showOnDashboard: true },
      include: {
        strategyConfig: true,
        promptBinding: { include: { promptTemplate: true } },
      },
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.agent.findUnique({
      where: { id },
      include: {
        strategyConfig: true,
        promptBinding: { include: { promptTemplate: true } },
        bets: { take: 25, orderBy: { createdAt: 'desc' } },
      },
    });
  }

  findBySlug(slug: string) {
    return this.prisma.agent.findUnique({ where: { slug } });
  }

  async getBankroll(id: number) {
    const agent = await this.prisma.agent.findUnique({ where: { id } });
    if (!agent) return null;
    const openBets = await this.prisma.bet.findMany({
      where: { agentId: id, status: 'open' },
      select: { stake: true },
    });
    const frozen = openBets.reduce((s, b) => s + Number(b.stake), 0);
    const totalBankroll = Number(agent.currentCash) + frozen;
    return {
      agentId: id,
      currentCash: Number(agent.currentCash),
      frozenCash: frozen,
      totalBankroll,
      initialCapital: Number(agent.initialCapital),
      roi:
        ((totalBankroll - Number(agent.initialCapital)) / Number(agent.initialCapital)) * 100,
      openBets: openBets.length,
    };
  }
}
