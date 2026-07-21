import { Controller, Get } from '@nestjs/common';
import { RedisService } from './common/redis/redis.service';
import { PrismaService } from './common/prisma/prisma.service';
import { RedisKeys } from '@arena/shared-utils';

@Controller('health')
export class HealthController {
  constructor(
    private readonly redis: RedisService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  async health() {
    const services: Record<string, string> = {};

    try {
      await this.prisma.$queryRaw`SELECT 1`;
      services.database = 'connected';
    } catch {
      services.database = 'disconnected';
    }

    services.redis = this.redis.isConnected ? 'connected' : 'disconnected';

    let agentCount = { total: 0, active: 0 };
    try {
      const total = await this.prisma.agent.count();
      const active = await this.prisma.agent.count({ where: { isActive: true } });
      agentCount = { total, active };
    } catch {
      // DB may be down
    }

    const txlineConnected =
      (await this.redis.getJson<string>(RedisKeys.txlineStatus)) === '1';

    const allConnected = services.database === 'connected' && services.redis === 'connected';
    return {
      status: allConnected ? 'ok' : 'degraded',
      timestamp: new Date().toISOString(),
      services: {
        ...services,
        txline: txlineConnected ? 'connected' : 'disconnected',
        agents: agentCount,
      },
      version: '1.0.0',
    };
  }
}

