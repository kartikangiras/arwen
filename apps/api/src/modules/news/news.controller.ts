import { Controller, Get, Query } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly news: NewsService) {}

  @Get()
  recent(@Query('limit') limit?: string) {
    return this.news.recent(limit ? Number(limit) : 12);
  }
}
