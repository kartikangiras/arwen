import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class OddsService {
  constructor(private readonly prisma: PrismaService) {}

  history(fixtureId: number, limit = 50) {
    return this.prisma.oddsSnapshot.findMany({
      where: { fixtureId },
      orderBy: { timestamp: 'desc' },
      take: limit,
    });
  }

  latest(fixtureId: number) {
    return this.prisma.oddsSnapshot.findFirst({
      where: { fixtureId },
      orderBy: { timestamp: 'desc' },
    });
  }
}
