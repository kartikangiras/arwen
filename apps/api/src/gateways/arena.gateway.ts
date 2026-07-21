import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import type { Server, Socket } from 'socket.io';
import Redis from 'ioredis';
import { RedisChannels } from '@arena/shared-utils';
import { createLogger } from '@arena/shared-utils';

// agents.md §10 — WebSocket protocol gateway. Bridges Redis PubSub → Socket.IO.
@WebSocketGateway({
  namespace: '/ws',
  cors: { origin: process.env.CORS_ORIGIN ?? 'http://localhost:3000', credentials: true },
  transports: ['websocket'],
})
export class ArenaGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger = createLogger('ws-gateway');
  private subscriber: Redis | null = null;

  @WebSocketServer()
  server!: Server;

  async afterInit(): Promise<void> {
    const url = process.env.REDIS_URL ?? 'redis://localhost:6379';
    try {
      this.subscriber = new Redis(url, {
        maxRetriesPerRequest: 0,
        lazyConnect: true,
        enableOfflineQueue: false,
      });

      await this.subscriber.connect();

      const channels = Object.values(RedisChannels);
      this.subscriber.on('error', (err) => {
        this.logger.warn({ err: err.message }, 'Redis subscriber error — pubsub disabled');
        this.subscriber?.disconnect();
        this.subscriber = null;
      });

      for (const channel of channels) {
        await this.subscriber.subscribe(channel);
      }

      this.subscriber.on('message', (channel, message) => {
        try {
          const payload = JSON.parse(message);
          this.routeMessage(channel, payload);
        } catch (err) {
          this.logger.error({ err, channel }, 'failed to parse pubsub message');
        }
      });

      this.logger.info('WebSocket gateway initialized with Redis subscriptions');
    } catch (err) {
      this.subscriber?.disconnect();
      this.subscriber = null;
      this.logger.warn({ err: (err as Error).message }, 'Redis unavailable — pubsub disabled');
    }
  }

  private routeMessage(channel: string, payload: { agentId?: number; fixtureId?: number }): void {
    switch (channel) {
      case RedisChannels.NORMALIZED_EVENTS:
        this.server.emit('match_event', payload);
        break;
      case RedisChannels.BETS_EXECUTED:
        this.server.emit('bet_placed', payload);
        break;
      case RedisChannels.BETS_SETTLED:
        this.server.emit('bet_settled', payload);
        break;
      case RedisChannels.LEADERBOARD_UPDATED:
        this.server.emit('leaderboard_update', payload);
        break;
      case RedisChannels.SIGNAL_FIRED:
        this.server.emit('signal_fired', payload);
        break;
      case RedisChannels.AGENT_THINKING:
        this.server.emit('agent_thinking', payload);
        break;
      case RedisChannels.AGENT_STATE: {
        if (payload.agentId) {
          this.server.emit('agent_state_change', payload);
          this.server.to(`agent:${payload.agentId}`).emit('agent_state_change', payload);
        }
        break;
      }
      case RedisChannels.BANKROLL_UPDATE:
        this.server.emit('bankroll_update', payload);
        break;
      case RedisChannels.ODDS_UPDATE:
        this.server.emit('odds_update', payload);
        break;
      case RedisChannels.PHASE_TRANSITION:
        this.server.emit('phase_transition', payload);
        break;
      case RedisChannels.MATCH_STATUS:
        this.server.emit('match_status_change', payload);
        break;
    }
  }

  handleConnection(client: Socket): void {
    client.emit('connected', { sessionId: client.id, timestamp: new Date().toISOString() });
    this.logger.info({ clientId: client.id }, 'client connected');
  }

  handleDisconnect(client: Socket): void {
    this.logger.info({ clientId: client.id }, 'client disconnected');
  }

  @SubscribeMessage('get_snapshot')
  handleGetSnapshot(): { ok: true } {
    return { ok: true };
  }

  @SubscribeMessage('subscribe_fixture')
  handleSubscribeFixture(client: Socket, payload: { fixtureId: number }): void {
    client.join(`fixture:${payload.fixtureId}`);
  }

  @SubscribeMessage('switch_agent')
  handleSwitchAgent(client: Socket, payload: { agentId: number }): void {
    client.join(`agent:${payload.agentId}`);
  }

  @SubscribeMessage('ping')
  handlePing(client: Socket): void {
    client.emit('pong', { timestamp: new Date().toISOString() });
  }
}
