import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { PrismaModule } from './common/prisma/prisma.module';
import { RedisModule } from './common/redis/redis.module';
import { AgentsModule } from './modules/agents/agents.module';
import { ArenaModule } from './modules/arena/arena.module';
import { FixturesModule } from './modules/fixtures/fixtures.module';
import { OddsModule } from './modules/odds/odds.module';
import { SignalsModule } from './modules/signals/signals.module';
import { RankingModule } from './modules/ranking/ranking.module';
import { PromptsModule } from './modules/prompts/prompts.module';
import { TournamentModule } from './modules/tournament/tournament.module';
import { NewsModule } from './modules/news/news.module';
import { ArenaGateway } from './gateways/arena.gateway';
import { HealthController } from './health.controller';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';

// agents.md §5.1 — NestJS API skeleton with 9 domain modules + WebSocket gateway.
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 100 }]),
    PrismaModule,
    RedisModule,
    AgentsModule,
    ArenaModule,
    FixturesModule,
    OddsModule,
    SignalsModule,
    RankingModule,
    PromptsModule,
    TournamentModule,
    NewsModule,
  ],
  controllers: [HealthController],
  providers: [
    ArenaGateway,
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}

