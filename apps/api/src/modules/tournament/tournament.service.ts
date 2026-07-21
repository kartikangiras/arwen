import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class TournamentService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.tournament.findMany({ include: { fixtures: true }, orderBy: { startDate: 'asc' } });
  }

  findOne(id: number) {
    return this.prisma.tournament.findUnique({
      where: { id },
      include: { fixtures: { orderBy: { kickoff: 'asc' } } },
    });
  }
}
