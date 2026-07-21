import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PromptsService } from './prompts.service';

@Controller('prompts')
export class PromptsController {
  constructor(private readonly prompts: PromptsService) {}

  @Get()
  list() {
    return this.prompts.findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.prompts.findOne(id);
  }

  @Post()
  create(@Body() body: { name: string; slug: string; content: string; description?: string; category?: string }) {
    return this.prompts.create(body);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { name?: string; content?: string; description?: string },
  ) {
    return this.prompts.update(id, body);
  }
}
