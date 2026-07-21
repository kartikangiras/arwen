import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { OddsService } from './odds.service';

@Controller('odds')
export class OddsController {
  constructor(private readonly odds: OddsService) {}

  @Get('fixture/:fixtureId')
  history(
    @Param('fixtureId', ParseIntPipe) fixtureId: number,
    @Query('limit') limit?: string,
  ) {
    return this.odds.history(fixtureId, limit ? Number(limit) : 50);
  }

  @Get('fixture/:fixtureId/latest')
  latest(@Param('fixtureId', ParseIntPipe) fixtureId: number) {
    return this.odds.latest(fixtureId);
  }
}
