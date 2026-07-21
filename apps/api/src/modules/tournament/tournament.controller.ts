import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TournamentService } from './tournament.service';

@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournament: TournamentService) {}

  @Get()
  list() {
    return this.tournament.findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.tournament.findOne(id);
  }
}
