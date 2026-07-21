import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { FixturesService } from './fixtures.service';

@Controller('fixtures')
export class FixturesController {
  constructor(private readonly fixtures: FixturesService) {}

  @Get()
  list() {
    return this.fixtures.findAll();
  }

  @Get('live')
  live() {
    return this.fixtures.findLive();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.fixtures.findOne(id);
  }

  @Get(':id/events')
  events(@Param('id', ParseIntPipe) id: number, @Query('limit') limit?: string) {
    return this.fixtures.events(id, limit ? Number(limit) : 100);
  }
}
