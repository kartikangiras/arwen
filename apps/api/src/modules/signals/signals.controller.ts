import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { SignalsService } from './signals.service';

@Controller('signals')
export class SignalsController {
  constructor(private readonly signals: SignalsService) {}

  @Get()
  recent(@Query('limit') limit?: string) {
    return this.signals.recent(limit ? Number(limit) : 50);
  }

  @Get('fixture/:fixtureId')
  forFixture(
    @Param('fixtureId', ParseIntPipe) fixtureId: number,
    @Query('limit') limit?: string,
  ) {
    return this.signals.forFixture(fixtureId, limit ? Number(limit) : 100);
  }
}
