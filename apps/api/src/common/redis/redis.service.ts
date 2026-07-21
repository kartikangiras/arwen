import { Injectable, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';
import { RedisChannels, RedisKeys } from '@arena/shared-utils';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(RedisService.name);
  readonly client: Redis;
  private readonly publisher: Redis;
  private _connected = false;

  constructor() {
    const url = process.env.REDIS_URL ?? 'redis://localhost:6379';
    // lazyConnect=true means ioredis won't auto-connect in the constructor;
    // maxRetriesPerRequest=0 prevents indefinite retry loops when Redis is absent.
    const opts = { maxRetriesPerRequest: 0, lazyConnect: true, enableOfflineQueue: false };
    this.client = new Redis(url, opts);
    this.publisher = new Redis(url, opts);
  }

  async onModuleInit(): Promise<void> {
    try {
      await this.client.connect();
      await this.publisher.connect();
      await Promise.all([this.client.ping(), this.publisher.ping()]);
      this._connected = true;
      this.logger.log('Redis connected');
    } catch (err) {
      this._connected = false;
      this.logger.warn(`Redis unavailable — running without cache/pubsub (${(err as Error).message})`);
    }
  }

  async onModuleDestroy(): Promise<void> {
    if (this._connected) {
      this.client.disconnect();
      this.publisher.disconnect();
      this.logger.log('Redis disconnected');
    }
  }

  get isConnected(): boolean {
    return this._connected;
  }

  publish(channel: string, payload: unknown): Promise<number> {
    if (!this._connected) return Promise.resolve(0);
    return this.publisher.publish(channel, JSON.stringify(payload));
  }

  async getJson<T>(key: string): Promise<T | null> {
    if (!this._connected) return null;
    try {
      const raw = await this.client.get(key);
      return raw ? (JSON.parse(raw) as T) : null;
    } catch {
      return null;
    }
  }

  async setJson(key: string, value: unknown, ttlSeconds?: number): Promise<void> {
    if (!this._connected) return;
    try {
      if (ttlSeconds) {
        await this.client.set(key, JSON.stringify(value), 'EX', ttlSeconds);
      } else {
        await this.client.set(key, JSON.stringify(value));
      }
    } catch {
      // silently ignore when Redis is degraded
    }
  }

  get channels() {
    return RedisChannels;
  }

  get keys() {
    return RedisKeys;
  }
}
