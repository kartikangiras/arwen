import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class FixturesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.fixture.findMany({
      include: { tournament: true },
      orderBy: { kickoff: 'asc' },
    });
  }

  findLive() {
    return this.prisma.fixture.findMany({
      where: { status: 'live' },
      include: { tournament: true },
      orderBy: { kickoff: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.fixture.findUnique({
      where: { id },
      include: {
        tournament: true,
        events: { take: 100, orderBy: { minute: 'asc' } },
        signals: { take: 100, orderBy: { triggeredAt: 'desc' } },
      },
    });
  }

  findByTxlineId(txlineFixtureId: string) {
    return this.prisma.fixture.findUnique({ where: { txlineFixtureId } });
  }

  events(fixtureId: number, limit = 100) {
    return this.prisma.matchEvent.findMany({
      where: { fixtureId },
      orderBy: { minute: 'asc' },
      take: limit,
    });
  }
}
