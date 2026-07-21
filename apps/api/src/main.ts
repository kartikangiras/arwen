import '@arena/shared-config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe, Logger } from '@nestjs/common';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { createLogger } from '@arena/shared-utils';

async function bootstrap(): Promise<void> {
  const port = parseInt(process.env.API_PORT ?? '3001', 10);
  const logger = createLogger('api');

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setGlobalPrefix('api/v1');
  app.use(helmet({ contentSecurityPolicy: false }));
  app.enableCors({
    origin: process.env.CORS_ORIGIN?.split(',') ?? ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  });
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: false }),
  );

  await app.listen(port);
  logger.info({ port }, 'API Gateway listening');
  const nestLogger = new Logger('Bootstrap');
  nestLogger.log(`API Gateway running on http://localhost:${port}/api/v1`);
  nestLogger.log(`Health check at http://localhost:${port}/health`);
  nestLogger.log(`WebSocket at ws://localhost:${port}/ws`);
}

void bootstrap();
