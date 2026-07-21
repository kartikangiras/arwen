-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "email" VARCHAR(255),
    "password_hash" VARCHAR(255),
    "wallet_address" VARCHAR(44),
    "username" VARCHAR(100) NOT NULL,
    "role" VARCHAR(20) NOT NULL DEFAULT 'viewer',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "last_login_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agents" (
    "id" UUID NOT NULL,
    "user_id" UUID,
    "name" VARCHAR(100) NOT NULL,
    "strategy_type" VARCHAR(50) NOT NULL,
    "description" TEXT,
    "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
    "llm_model" VARCHAR(50) NOT NULL DEFAULT 'gpt-4o',
    "risk_tolerance" DECIMAL(3,2) NOT NULL DEFAULT 0.5,
    "initial_balance" DECIMAL(18,2) NOT NULL DEFAULT 10000.0,
    "max_position_pct" DECIMAL(3,2) NOT NULL DEFAULT 0.2,
    "cooldown_ms" INTEGER NOT NULL DEFAULT 5000,
    "max_drawdown_pct" DECIMAL(3,2) NOT NULL DEFAULT 0.3,
    "max_open_positions" INTEGER NOT NULL DEFAULT 2,
    "min_confidence" DECIMAL(3,2) NOT NULL DEFAULT 0.5,
    "min_odds" DECIMAL(8,4) NOT NULL DEFAULT 1.05,
    "max_odds" DECIMAL(8,4) NOT NULL DEFAULT 10.0,
    "config" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "agents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matches" (
    "id" UUID NOT NULL,
    "txline_match_id" VARCHAR(100) NOT NULL,
    "home_team" VARCHAR(100) NOT NULL,
    "away_team" VARCHAR(100) NOT NULL,
    "competition" VARCHAR(100) NOT NULL DEFAULT 'FIFA World Cup 2026',
    "status" VARCHAR(20) NOT NULL DEFAULT 'scheduled',
    "start_time" TIMESTAMP(3),
    "end_time" TIMESTAMP(3),
    "home_score" INTEGER NOT NULL DEFAULT 0,
    "away_score" INTEGER NOT NULL DEFAULT 0,
    "match_minute" INTEGER NOT NULL DEFAULT 0,
    "phase" VARCHAR(20) NOT NULL DEFAULT 'pre_match',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "odds" (
    "id" UUID NOT NULL,
    "match_id" UUID NOT NULL,
    "market_type" VARCHAR(50) NOT NULL,
    "home_odds" DECIMAL(8,4),
    "draw_odds" DECIMAL(8,4),
    "away_odds" DECIMAL(8,4),
    "over_odds" DECIMAL(8,4),
    "under_odds" DECIMAL(8,4),
    "raw_payload" JSONB NOT NULL,
    "received_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "odds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" UUID NOT NULL,
    "match_id" UUID NOT NULL,
    "event_type" VARCHAR(50) NOT NULL,
    "team" VARCHAR(10),
    "player_name" VARCHAR(100),
    "minute" INTEGER,
    "extra_time" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT,
    "raw_payload" JSONB NOT NULL,
    "sequence_number" BIGINT NOT NULL,
    "received_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "strategies" (
    "id" UUID NOT NULL,
    "agent_id" UUID NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "parameters" JSONB NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "strategies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolios" (
    "id" UUID NOT NULL,
    "agent_id" UUID NOT NULL,
    "match_id" UUID,
    "balance" DECIMAL(18,2) NOT NULL,
    "initial_balance" DECIMAL(18,2) NOT NULL,
    "realized_pnl" DECIMAL(18,2) NOT NULL DEFAULT 0.0,
    "unrealized_pnl" DECIMAL(18,2) NOT NULL DEFAULT 0.0,
    "total_trades" INTEGER NOT NULL DEFAULT 0,
    "winning_trades" INTEGER NOT NULL DEFAULT 0,
    "losing_trades" INTEGER NOT NULL DEFAULT 0,
    "max_drawdown" DECIMAL(8,4) NOT NULL DEFAULT 0.0,
    "peak_balance" DECIMAL(18,2) NOT NULL,
    "sharpe_ratio" DECIMAL(8,4),
    "roi" DECIMAL(8,4),
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portfolios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trades" (
    "id" UUID NOT NULL,
    "agent_id" UUID NOT NULL,
    "match_id" UUID NOT NULL,
    "portfolio_id" UUID NOT NULL,
    "market_type" VARCHAR(50) NOT NULL,
    "side" VARCHAR(10) NOT NULL,
    "action" VARCHAR(10) NOT NULL,
    "stake" DECIMAL(18,2) NOT NULL,
    "odds_at_entry" DECIMAL(8,4) NOT NULL,
    "odds_at_exit" DECIMAL(8,4),
    "status" VARCHAR(20) NOT NULL DEFAULT 'open',
    "pnl" DECIMAL(18,2),
    "confidence" DECIMAL(3,2) NOT NULL,
    "decision_signals" JSONB NOT NULL,
    "reasoning" TEXT,
    "decision_latency_ms" INTEGER,
    "opened_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "settled_at" TIMESTAMP(3),
    "trigger_event_id" UUID,

    CONSTRAINT "trades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" UUID NOT NULL,
    "agent_id" UUID NOT NULL,
    "trade_id" UUID,
    "type" VARCHAR(30) NOT NULL,
    "amount" DECIMAL(18,2) NOT NULL,
    "balance_before" DECIMAL(18,2) NOT NULL,
    "balance_after" DECIMAL(18,2) NOT NULL,
    "solana_tx_hash" VARCHAR(88),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "performance_snapshots" (
    "id" UUID NOT NULL,
    "agent_id" UUID NOT NULL,
    "match_id" UUID,
    "snapshot_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "balance" DECIMAL(18,2) NOT NULL,
    "roi" DECIMAL(8,4) NOT NULL,
    "pnl" DECIMAL(18,2) NOT NULL,
    "trade_count" INTEGER NOT NULL,
    "rank" INTEGER,

    CONSTRAINT "performance_snapshots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leaderboard_history" (
    "id" UUID NOT NULL,
    "match_id" UUID NOT NULL,
    "agent_id" UUID NOT NULL,
    "rank" INTEGER NOT NULL,
    "score" DECIMAL(10,4) NOT NULL,
    "roi" DECIMAL(8,4) NOT NULL,
    "pnl" DECIMAL(18,2) NOT NULL,
    "recorded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_final" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "leaderboard_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "token_hash" VARCHAR(64) NOT NULL,
    "ip_address" INET,
    "user_agent" TEXT,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" UUID NOT NULL,
    "user_id" UUID,
    "agent_id" UUID,
    "type" VARCHAR(50) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "body" TEXT,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" UUID NOT NULL,
    "entity_type" VARCHAR(50) NOT NULL,
    "entity_id" UUID NOT NULL,
    "action" VARCHAR(50) NOT NULL,
    "actor_id" UUID,
    "old_value" JSONB,
    "new_value" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_wallet_address_key" ON "users"("wallet_address");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE INDEX "idx_users_wallet" ON "users"("wallet_address");

-- CreateIndex
CREATE INDEX "idx_users_email" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "agents_name_key" ON "agents"("name");

-- CreateIndex
CREATE INDEX "idx_agents_strategy" ON "agents"("strategy_type");

-- CreateIndex
CREATE INDEX "idx_agents_status" ON "agents"("status");

-- CreateIndex
CREATE INDEX "idx_agents_user" ON "agents"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "matches_txline_match_id_key" ON "matches"("txline_match_id");

-- CreateIndex
CREATE INDEX "idx_matches_status" ON "matches"("status");

-- CreateIndex
CREATE INDEX "idx_matches_txline_id" ON "matches"("txline_match_id");

-- CreateIndex
CREATE INDEX "idx_odds_match" ON "odds"("match_id");

-- CreateIndex
CREATE INDEX "idx_odds_match_market" ON "odds"("match_id", "market_type");

-- CreateIndex
CREATE INDEX "idx_odds_received" ON "odds"("received_at" DESC);

-- CreateIndex
CREATE INDEX "idx_events_match" ON "events"("match_id");

-- CreateIndex
CREATE INDEX "idx_events_type" ON "events"("event_type");

-- CreateIndex
CREATE INDEX "idx_events_sequence" ON "events"("sequence_number");

-- CreateIndex
CREATE INDEX "idx_events_received" ON "events"("received_at" DESC);

-- CreateIndex
CREATE INDEX "idx_strategies_active" ON "strategies"("agent_id", "is_active");

-- CreateIndex
CREATE INDEX "idx_portfolios_agent" ON "portfolios"("agent_id");

-- CreateIndex
CREATE UNIQUE INDEX "idx_portfolios_agent_match" ON "portfolios"("agent_id", "match_id");

-- CreateIndex
CREATE INDEX "idx_trades_agent" ON "trades"("agent_id");

-- CreateIndex
CREATE INDEX "idx_trades_match" ON "trades"("match_id");

-- CreateIndex
CREATE INDEX "idx_trades_status" ON "trades"("status");

-- CreateIndex
CREATE INDEX "idx_trades_opened" ON "trades"("opened_at" DESC);

-- CreateIndex
CREATE INDEX "idx_trades_agent_match" ON "trades"("agent_id", "match_id");

-- CreateIndex
CREATE INDEX "idx_transactions_agent" ON "transactions"("agent_id");

-- CreateIndex
CREATE INDEX "idx_transactions_trade" ON "transactions"("trade_id");

-- CreateIndex
CREATE INDEX "idx_perf_agent" ON "performance_snapshots"("agent_id");

-- CreateIndex
CREATE INDEX "idx_perf_match" ON "performance_snapshots"("match_id");

-- CreateIndex
CREATE INDEX "idx_perf_snapshot_at" ON "performance_snapshots"("snapshot_at" DESC);

-- CreateIndex
CREATE INDEX "idx_lb_history_match" ON "leaderboard_history"("match_id", "recorded_at" DESC);

-- CreateIndex
CREATE INDEX "idx_lb_history_agent" ON "leaderboard_history"("agent_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_token_hash_key" ON "sessions"("token_hash");

-- CreateIndex
CREATE INDEX "idx_sessions_user" ON "sessions"("user_id");

-- CreateIndex
CREATE INDEX "idx_sessions_expires" ON "sessions"("expires_at");

-- CreateIndex
CREATE INDEX "idx_notifications_user" ON "notifications"("user_id", "is_read");

-- CreateIndex
CREATE INDEX "idx_notifications_created" ON "notifications"("created_at" DESC);

-- CreateIndex
CREATE INDEX "idx_audit_entity" ON "audit_logs"("entity_type", "entity_id");

-- CreateIndex
CREATE INDEX "idx_audit_created" ON "audit_logs"("created_at" DESC);

-- AddForeignKey
ALTER TABLE "agents" ADD CONSTRAINT "agents_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "odds" ADD CONSTRAINT "odds_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "strategies" ADD CONSTRAINT "strategies_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "agents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolios" ADD CONSTRAINT "portfolios_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "agents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolios" ADD CONSTRAINT "portfolios_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trades" ADD CONSTRAINT "trades_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "agents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trades" ADD CONSTRAINT "trades_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trades" ADD CONSTRAINT "trades_portfolio_id_fkey" FOREIGN KEY ("portfolio_id") REFERENCES "portfolios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trades" ADD CONSTRAINT "trades_trigger_event_id_fkey" FOREIGN KEY ("trigger_event_id") REFERENCES "events"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "agents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_trade_id_fkey" FOREIGN KEY ("trade_id") REFERENCES "trades"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "performance_snapshots" ADD CONSTRAINT "performance_snapshots_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "agents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "performance_snapshots" ADD CONSTRAINT "performance_snapshots_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leaderboard_history" ADD CONSTRAINT "leaderboard_history_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leaderboard_history" ADD CONSTRAINT "leaderboard_history_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "agents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "agents"("id") ON DELETE CASCADE ON UPDATE CASCADE;
