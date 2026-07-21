import { config } from 'dotenv';
import { resolve } from 'node:path';
import { existsSync } from 'node:fs';

function loadEnvFile(): void {
  const candidates = [
    resolve(process.cwd(), '.env'),
    resolve(process.cwd(), '../../.env'),
    resolve(__dirname, '../../../.env'),
    resolve(__dirname, '../../../../.env'),
  ];
  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      config({ path: candidate });
      return;
    }
  }
}

loadEnvFile();

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function int(name: string, fallback: number): number {
  const raw = process.env[name];
  if (raw === undefined || raw === '') return fallback;
  const parsed = parseInt(raw, 10);
  return Number.isNaN(parsed) ? fallback : parsed;
}

function bool(name: string, fallback: boolean): boolean {
  const raw = process.env[name];
  if (raw === undefined) return fallback;
  return raw === 'true' || raw === '1';
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  isDev: (process.env.NODE_ENV ?? 'development') === 'development',
  isProd: process.env.NODE_ENV === 'production',
  logLevel: process.env.LOG_LEVEL ?? 'info',

  apiPort: int('API_PORT', 3001),
  agentRuntimePort: int('AGENT_RUNTIME_PORT', 3002),
  eventWorkerPort: int('EVENT_WORKER_PORT', 3003),
  txlineHealthPort: int('TXLINE_HEALTH_PORT', 4001),

  corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:3000',

  databaseUrl: required('DATABASE_URL', 'postgresql://arena:arena_dev@localhost:5432/arena_db'),
  redisUrl: required('REDIS_URL', 'redis://localhost:6379'),

  txlineApiKey: process.env.TXLINE_API_KEY ?? '',
  txlineBaseUrl: process.env.TXLINE_BASE_URL ?? 'http://localhost:4000/stream',

  jwtSecret: required('JWT_SECRET', 'dev_super_secret_change_me_in_production_please'),
  jwtAccessExpiry: int('JWT_ACCESS_EXPIRY', 3600),
  jwtRefreshExpiry: int('JWT_REFRESH_EXPIRY', 604800),

  openaiApiKey: process.env.OPENAI_API_KEY ?? '',
  anthropicApiKey: process.env.ANTHROPIC_API_KEY ?? '',
  llmPrimary: process.env.LLM_PRIMARY ?? 'openai',

  solanaRpcUrl: process.env.SOLANA_RPC_URL ?? 'https://api.devnet.solana.com',
  solanaProgramId: process.env.SOLANA_PROGRAM_ID ?? '',

  enableLlm: bool('ENABLE_LLM', false),
};

export type Env = typeof env;
