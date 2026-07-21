import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class SignalsService {
  constructor(private readonly prisma: PrismaService) {}

  forFixture(fixtureId: number, limit = 100) {
    return this.prisma.signal.findMany({
      where: { fixtureId },
      orderBy: { triggeredAt: 'desc' },
      take: limit,
    });
  }

  recent(limit = 50) {
    return this.prisma.signal.findMany({
      orderBy: { triggeredAt: 'desc' },
      take: limit,
      include: { fixture: { select: { teamA: true, teamB: true, teamACode: true, teamBCode: true } } },
    });
  }
}
