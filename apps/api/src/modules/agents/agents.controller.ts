import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AgentsService } from './agents.service';

@Controller('agents')
export class AgentsController {
  constructor(private readonly agents: AgentsService) {}

  @Get()
  list() {
    return this.agents.findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.agents.findOne(id);
  }

  @Get(':id/bankroll')
  bankroll(@Param('id', ParseIntPipe) id: number) {
    return this.agents.getBankroll(id);
  }
}
