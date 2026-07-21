import pino, { type Logger } from 'pino';

const logLevel = process.env.LOG_LEVEL || 'info';

function buildTransport() {
  if (process.env.NODE_ENV === 'production') return undefined;
  try {
    return { target: 'pino-pretty', options: { colorize: true, translateTime: 'SYS:standard' } };
  } catch {
    return undefined;
  }
}

export function createLogger(service: string): Logger {
  return pino({
    name: service,
    level: logLevel,
    transport: buildTransport(),
    base: { service },
    timestamp: () => `,"timestamp":"${new Date().toISOString()}"`,
  });
}

export type { Logger };
