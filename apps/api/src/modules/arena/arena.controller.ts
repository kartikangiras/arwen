import { Controller, Get, Query } from '@nestjs/common';
import { ArenaService } from './arena.service';

@Controller('arena')
export class ArenaController {
  constructor(private readonly arena: ArenaService) {}

  @Get('snapshot')
  snapshot() {
    return this.arena.snapshot();
  }

  @Get('floor')
  floor() {
    return this.arena.floor();
  }

  @Get('positions')
  positions() {
    return this.arena.openPositions();
  }

  @Get('trades')
  trades(@Query('limit') limit?: string) {
    return this.arena.recentBets(limit ? Number(limit) : 50);
  }

  @Get('model-chat')
  modelChat(@Query('limit') limit?: string) {
    return this.arena.recentDecisions(limit ? Number(limit) : 50);
  }
}
