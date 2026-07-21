
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AgentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  model: 'model',
  baseUrl: 'baseUrl',
  apiKey: 'apiKey',
  strategy: 'strategy',
  avatarPresetId: 'avatarPresetId',
  initialCapital: 'initialCapital',
  currentCash: 'currentCash',
  frozenCash: 'frozenCash',
  isActive: 'isActive',
  autoTradingEnabled: 'autoTradingEnabled',
  showOnDashboard: 'showOnDashboard',
  maxStakePercent: 'maxStakePercent',
  maxOpenBets: 'maxOpenBets',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BetScalarFieldEnum = {
  id: 'id',
  agentId: 'agentId',
  fixtureId: 'fixtureId',
  betNo: 'betNo',
  market: 'market',
  selection: 'selection',
  side: 'side',
  odds: 'odds',
  stake: 'stake',
  potentialProfit: 'potentialProfit',
  potentialLoss: 'potentialLoss',
  status: 'status',
  result: 'result',
  settledAt: 'settledAt',
  realizedPnl: 'realizedPnl',
  confidence: 'confidence',
  signalType: 'signalType',
  decisionLogId: 'decisionLogId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FixtureScalarFieldEnum = {
  id: 'id',
  txlineFixtureId: 'txlineFixtureId',
  tournamentId: 'tournamentId',
  teamA: 'teamA',
  teamB: 'teamB',
  teamACode: 'teamACode',
  teamBCode: 'teamBCode',
  stage: 'stage',
  venue: 'venue',
  kickoff: 'kickoff',
  status: 'status',
  scoreA: 'scoreA',
  scoreB: 'scoreB',
  currentMinute: 'currentMinute',
  currentPeriod: 'currentPeriod',
  teamAFifaRank: 'teamAFifaRank',
  teamBFifaRank: 'teamBFifaRank',
  teamAForm: 'teamAForm',
  teamBForm: 'teamBForm',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OddsSnapshotScalarFieldEnum = {
  id: 'id',
  fixtureId: 'fixtureId',
  source: 'source',
  market: 'market',
  teamAOdds: 'teamAOdds',
  drawOdds: 'drawOdds',
  teamBOdds: 'teamBOdds',
  allOutcomes: 'allOutcomes',
  timestamp: 'timestamp'
};

exports.Prisma.MatchEventScalarFieldEnum = {
  id: 'id',
  fixtureId: 'fixtureId',
  eventType: 'eventType',
  minute: 'minute',
  period: 'period',
  team: 'team',
  player: 'player',
  description: 'description',
  statKey: 'statKey',
  occurredAt: 'occurredAt'
};

exports.Prisma.SignalScalarFieldEnum = {
  id: 'id',
  fixtureId: 'fixtureId',
  type: 'type',
  severity: 'severity',
  description: 'description',
  metadata: 'metadata',
  triggeredAt: 'triggeredAt'
};

exports.Prisma.DecisionLogScalarFieldEnum = {
  id: 'id',
  agentId: 'agentId',
  decisionTime: 'decisionTime',
  reasoning: 'reasoning',
  operation: 'operation',
  fixtureId: 'fixtureId',
  market: 'market',
  selection: 'selection',
  stakePortion: 'stakePortion',
  confidence: 'confidence',
  totalBankroll: 'totalBankroll',
  executed: 'executed',
  betId: 'betId',
  signalType: 'signalType',
  promptSnapshot: 'promptSnapshot',
  reasoningSnapshot: 'reasoningSnapshot',
  decisionSnapshot: 'decisionSnapshot',
  createdAt: 'createdAt'
};

exports.Prisma.BankrollSnapshotScalarFieldEnum = {
  id: 'id',
  agentId: 'agentId',
  totalBankroll: 'totalBankroll',
  cash: 'cash',
  openBetsValue: 'openBetsValue',
  unrealizedPnl: 'unrealizedPnl',
  snapshotTime: 'snapshotTime'
};

exports.Prisma.StrategyConfigScalarFieldEnum = {
  id: 'id',
  agentId: 'agentId',
  triggerInterval: 'triggerInterval',
  signalPoolIds: 'signalPoolIds',
  enabled: 'enabled',
  scheduledTrigger: 'scheduledTrigger',
  lastTriggerAt: 'lastTriggerAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PromptTemplateScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  description: 'description',
  content: 'content',
  category: 'category',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PromptBindingScalarFieldEnum = {
  id: 'id',
  agentId: 'agentId',
  promptTemplateId: 'promptTemplateId',
  createdAt: 'createdAt'
};

exports.Prisma.TournamentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  year: 'year',
  hostCountry: 'hostCountry',
  startDate: 'startDate',
  endDate: 'endDate',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.NewsItemScalarFieldEnum = {
  id: 'id',
  title: 'title',
  summary: 'summary',
  source: 'source',
  url: 'url',
  relevance: 'relevance',
  sentiment: 'sentiment',
  aiClassification: 'aiClassification',
  publishedAt: 'publishedAt',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  Agent: 'Agent',
  Bet: 'Bet',
  Fixture: 'Fixture',
  OddsSnapshot: 'OddsSnapshot',
  MatchEvent: 'MatchEvent',
  Signal: 'Signal',
  DecisionLog: 'DecisionLog',
  BankrollSnapshot: 'BankrollSnapshot',
  StrategyConfig: 'StrategyConfig',
  PromptTemplate: 'PromptTemplate',
  PromptBinding: 'PromptBinding',
  Tournament: 'Tournament',
  NewsItem: 'NewsItem'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
