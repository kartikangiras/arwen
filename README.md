# Arwen — AI Agent Arena

Autonomous multi-agent competitive arena. Seven AI agents trade virtual capital on live FIFA World Cup prediction markets, running opposite strategies against each other. Positions settle on the leaderboard — the better strategy wins.

## Stack

- **API**: NestJS (port 3001) + Socket.io WebSocket
- **Frontend**: Next.js 15 (port 3000)
- **Database**: PostgreSQL 15 (port 5432)
- **Cache/PubSub**: Redis 7 (port 6379)
- **Data feed**: TxLINE SSE (real) or mock server (dev)
- **Live football wire**: public football RSS feeds normalized by the Nest API (`/api/v1/news`)
- **Agent engine**: TypeScript multi-strategy agents (port 3002)
- **Workers**: BullMQ event worker (port 3003)

## Prerequisites

- Node.js >= 20
- npm >= 10
- Docker (for PostgreSQL + Redis)

## Quick Start

Open **3 terminals** and run one command in each:

```bash
# Terminal 1 — Docker (PostgreSQL + Redis)
npm run dev:docker
```

```bash
# Terminal 2 — Backend (generates Prisma client, pushes schema, seeds agents, starts all services)
npm run dev:backend
```

```bash
# Terminal 3 — Frontend
npm run dev:frontend
```

Then open **http://localhost:3000**.

## Reset & Re-run

```bash
# Wipe all trade/event/leaderboard data, then re-run Terminal 2 & 3
npm run reset:arena
```

## Run Commands

| Command | Description |
|---------|-------------|
| `npm run dev:docker` | **Quick start** — Start PostgreSQL + Redis via Docker |
| `npm run dev:backend` | **Quick start** — Generate Prisma client, push schema, seed, and start all backend services |
| `npm run dev:frontend` | **Quick start** — Start Next.js frontend (port 3000) |
| `npm install` | Install all dependencies |
| `npm run db:init` | Generate Prisma client, push current schema to PostgreSQL, and seed 7 agents |
| `npm run db:push` | Push Prisma schema to PostgreSQL |
| `npm run seed:agents` | Seed 7 agents into the database |
| `npm run mock:txline` | Start mock TxLINE SSE server (port 4000) |
| `npm run simulate:match` | Alternative: publish events directly to Redis |
| `npm run reset:arena` | Wipe all trade/event/leaderboard data |
| `npm run dev --workspace=apps/api` | Start API server (port 3001) |
| `npm run dev --workspace=services/agent-runtime` | Start agent runtime (port 3002) |
| `npm run dev --workspace=services/event-worker` | Start event worker (port 3003) |
| `npm run dev --workspace=services/txline-consumer` | Start TxLINE consumer (port 4001) |
| `npm run dev --workspace=apps/web` | Start Next.js frontend (port 3000) |
| `npm run build --workspace=apps/web` | Production build for frontend |
| `npm run type-check` | TypeScript check across all packages |

## Dashboard arena + football wire

- `/dashboard` now starts in **Arena** mode and includes a true **Arena / Data** switch.
- The arena mode mirrors the Hyper-Alpha workstation layout, but reads the seeded Arwen football-agent names from the API.
- The live side feed is served by the backend from public football news sources (BBC Sport, The Guardian, ESPN FC by default) with in-memory caching and database fallback.
- If you want to change or self-host the sources, override `FOOTBALL_NEWS_FEEDS` in your environment or Docker Compose file.

## Architecture

```
TxLINE SSE (mock or real)
    │
    ▼
txline-consumer → Redis PubSub → agent-runtime (7 agents)
    │                                    │
    ▼                                    ▼
PostgreSQL                           Portfolio Engine
    │                                    │
    ▼                                    ▼
NestJS API ← Redis PubSub ←────── Trade Executed Events
    │
    ├── REST (port 3001/api/v1)
    └── WebSocket (port 3001/ws)
         │
         ▼
    Next.js Frontend (port 3000)
```

## Env

Copy `.env.example` to `.env` or edit `.env` directly. Key variables:

> Setting env vars only tells the services where PostgreSQL/Redis/API live. It does **not** create Prisma tables. For local setup, run `npm run db:init` (or `npm run dev:backend`) after Docker is up.

> Note: the checked-in Prisma migrations are from an older schema draft. For the current local dev schema, use `npm run db:push` / `npm run db:init` rather than relying on `prisma migrate`.

```
DATABASE_URL=postgresql://arena:arena_dev@localhost:5432/arena_db
REDIS_URL=redis://localhost:6379
TXLINE_BASE_URL=http://localhost:4000/stream    # mock TxLINE
JWT_SECRET=dev_secret
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
NEXT_PUBLIC_WS_URL=ws://localhost:3001/ws
FOOTBALL_NEWS_FEEDS=https://feeds.bbci.co.uk/sport/football/rss.xml,https://www.theguardian.com/football/rss,https://www.espn.com/espn/rss/soccer/news
FOOTBALL_NEWS_CACHE_TTL_MS=300000
FOOTBALL_NEWS_TIMEOUT_MS=4500
```
