
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Agent
 * 
 */
export type Agent = $Result.DefaultSelection<Prisma.$AgentPayload>
/**
 * Model Bet
 * 
 */
export type Bet = $Result.DefaultSelection<Prisma.$BetPayload>
/**
 * Model Fixture
 * 
 */
export type Fixture = $Result.DefaultSelection<Prisma.$FixturePayload>
/**
 * Model OddsSnapshot
 * 
 */
export type OddsSnapshot = $Result.DefaultSelection<Prisma.$OddsSnapshotPayload>
/**
 * Model MatchEvent
 * 
 */
export type MatchEvent = $Result.DefaultSelection<Prisma.$MatchEventPayload>
/**
 * Model Signal
 * 
 */
export type Signal = $Result.DefaultSelection<Prisma.$SignalPayload>
/**
 * Model DecisionLog
 * 
 */
export type DecisionLog = $Result.DefaultSelection<Prisma.$DecisionLogPayload>
/**
 * Model BankrollSnapshot
 * 
 */
export type BankrollSnapshot = $Result.DefaultSelection<Prisma.$BankrollSnapshotPayload>
/**
 * Model StrategyConfig
 * 
 */
export type StrategyConfig = $Result.DefaultSelection<Prisma.$StrategyConfigPayload>
/**
 * Model PromptTemplate
 * 
 */
export type PromptTemplate = $Result.DefaultSelection<Prisma.$PromptTemplatePayload>
/**
 * Model PromptBinding
 * 
 */
export type PromptBinding = $Result.DefaultSelection<Prisma.$PromptBindingPayload>
/**
 * Model Tournament
 * 
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>
/**
 * Model NewsItem
 * 
 */
export type NewsItem = $Result.DefaultSelection<Prisma.$NewsItemPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Agents
 * const agents = await prisma.agent.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Agents
   * const agents = await prisma.agent.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<ExtArgs>;

  /**
   * `prisma.bet`: Exposes CRUD operations for the **Bet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bets
    * const bets = await prisma.bet.findMany()
    * ```
    */
  get bet(): Prisma.BetDelegate<ExtArgs>;

  /**
   * `prisma.fixture`: Exposes CRUD operations for the **Fixture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fixtures
    * const fixtures = await prisma.fixture.findMany()
    * ```
    */
  get fixture(): Prisma.FixtureDelegate<ExtArgs>;

  /**
   * `prisma.oddsSnapshot`: Exposes CRUD operations for the **OddsSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OddsSnapshots
    * const oddsSnapshots = await prisma.oddsSnapshot.findMany()
    * ```
    */
  get oddsSnapshot(): Prisma.OddsSnapshotDelegate<ExtArgs>;

  /**
   * `prisma.matchEvent`: Exposes CRUD operations for the **MatchEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchEvents
    * const matchEvents = await prisma.matchEvent.findMany()
    * ```
    */
  get matchEvent(): Prisma.MatchEventDelegate<ExtArgs>;

  /**
   * `prisma.signal`: Exposes CRUD operations for the **Signal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Signals
    * const signals = await prisma.signal.findMany()
    * ```
    */
  get signal(): Prisma.SignalDelegate<ExtArgs>;

  /**
   * `prisma.decisionLog`: Exposes CRUD operations for the **DecisionLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DecisionLogs
    * const decisionLogs = await prisma.decisionLog.findMany()
    * ```
    */
  get decisionLog(): Prisma.DecisionLogDelegate<ExtArgs>;

  /**
   * `prisma.bankrollSnapshot`: Exposes CRUD operations for the **BankrollSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankrollSnapshots
    * const bankrollSnapshots = await prisma.bankrollSnapshot.findMany()
    * ```
    */
  get bankrollSnapshot(): Prisma.BankrollSnapshotDelegate<ExtArgs>;

  /**
   * `prisma.strategyConfig`: Exposes CRUD operations for the **StrategyConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StrategyConfigs
    * const strategyConfigs = await prisma.strategyConfig.findMany()
    * ```
    */
  get strategyConfig(): Prisma.StrategyConfigDelegate<ExtArgs>;

  /**
   * `prisma.promptTemplate`: Exposes CRUD operations for the **PromptTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromptTemplates
    * const promptTemplates = await prisma.promptTemplate.findMany()
    * ```
    */
  get promptTemplate(): Prisma.PromptTemplateDelegate<ExtArgs>;

  /**
   * `prisma.promptBinding`: Exposes CRUD operations for the **PromptBinding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromptBindings
    * const promptBindings = await prisma.promptBinding.findMany()
    * ```
    */
  get promptBinding(): Prisma.PromptBindingDelegate<ExtArgs>;

  /**
   * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tournaments
    * const tournaments = await prisma.tournament.findMany()
    * ```
    */
  get tournament(): Prisma.TournamentDelegate<ExtArgs>;

  /**
   * `prisma.newsItem`: Exposes CRUD operations for the **NewsItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsItems
    * const newsItems = await prisma.newsItem.findMany()
    * ```
    */
  get newsItem(): Prisma.NewsItemDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "agent" | "bet" | "fixture" | "oddsSnapshot" | "matchEvent" | "signal" | "decisionLog" | "bankrollSnapshot" | "strategyConfig" | "promptTemplate" | "promptBinding" | "tournament" | "newsItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Agent: {
        payload: Prisma.$AgentPayload<ExtArgs>
        fields: Prisma.AgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findFirst: {
            args: Prisma.AgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findMany: {
            args: Prisma.AgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          create: {
            args: Prisma.AgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          createMany: {
            args: Prisma.AgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          delete: {
            args: Prisma.AgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          update: {
            args: Prisma.AgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          deleteMany: {
            args: Prisma.AgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent>
          }
          groupBy: {
            args: Prisma.AgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentCountArgs<ExtArgs>
            result: $Utils.Optional<AgentCountAggregateOutputType> | number
          }
        }
      }
      Bet: {
        payload: Prisma.$BetPayload<ExtArgs>
        fields: Prisma.BetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          findFirst: {
            args: Prisma.BetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          findMany: {
            args: Prisma.BetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>[]
          }
          create: {
            args: Prisma.BetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          createMany: {
            args: Prisma.BetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>[]
          }
          delete: {
            args: Prisma.BetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          update: {
            args: Prisma.BetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          deleteMany: {
            args: Prisma.BetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          aggregate: {
            args: Prisma.BetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBet>
          }
          groupBy: {
            args: Prisma.BetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BetCountArgs<ExtArgs>
            result: $Utils.Optional<BetCountAggregateOutputType> | number
          }
        }
      }
      Fixture: {
        payload: Prisma.$FixturePayload<ExtArgs>
        fields: Prisma.FixtureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FixtureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FixtureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          findFirst: {
            args: Prisma.FixtureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FixtureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          findMany: {
            args: Prisma.FixtureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>[]
          }
          create: {
            args: Prisma.FixtureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          createMany: {
            args: Prisma.FixtureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FixtureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>[]
          }
          delete: {
            args: Prisma.FixtureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          update: {
            args: Prisma.FixtureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          deleteMany: {
            args: Prisma.FixtureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FixtureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FixtureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          aggregate: {
            args: Prisma.FixtureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFixture>
          }
          groupBy: {
            args: Prisma.FixtureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FixtureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FixtureCountArgs<ExtArgs>
            result: $Utils.Optional<FixtureCountAggregateOutputType> | number
          }
        }
      }
      OddsSnapshot: {
        payload: Prisma.$OddsSnapshotPayload<ExtArgs>
        fields: Prisma.OddsSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OddsSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OddsSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OddsSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OddsSnapshotPayload>
          }
          findFirst: {
            args: Prisma.OddsSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OddsSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OddsSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OddsSnapshotPayload>
          }
          findMany: {
            args: Prisma.OddsSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OddsSnapshotPayload>[]
          }
          create: {
            args: Prisma.OddsSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OddsSnapshotPayload>
          }
          createMany: {
            args: Prisma.OddsSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OddsSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OddsSnapshotPayload>[]
          }
          delete: {
            args: Prisma.OddsSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OddsSnapshotPayload>
          }
          update: {
            args: Prisma.OddsSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OddsSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.OddsSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OddsSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OddsSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OddsSnapshotPayload>
          }
          aggregate: {
            args: Prisma.OddsSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOddsSnapshot>
          }
          groupBy: {
            args: Prisma.OddsSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<OddsSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.OddsSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<OddsSnapshotCountAggregateOutputType> | number
          }
        }
      }
      MatchEvent: {
        payload: Prisma.$MatchEventPayload<ExtArgs>
        fields: Prisma.MatchEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload>
          }
          findFirst: {
            args: Prisma.MatchEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload>
          }
          findMany: {
            args: Prisma.MatchEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload>[]
          }
          create: {
            args: Prisma.MatchEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload>
          }
          createMany: {
            args: Prisma.MatchEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload>[]
          }
          delete: {
            args: Prisma.MatchEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload>
          }
          update: {
            args: Prisma.MatchEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload>
          }
          deleteMany: {
            args: Prisma.MatchEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatchEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload>
          }
          aggregate: {
            args: Prisma.MatchEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchEvent>
          }
          groupBy: {
            args: Prisma.MatchEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchEventCountArgs<ExtArgs>
            result: $Utils.Optional<MatchEventCountAggregateOutputType> | number
          }
        }
      }
      Signal: {
        payload: Prisma.$SignalPayload<ExtArgs>
        fields: Prisma.SignalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          findFirst: {
            args: Prisma.SignalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          findMany: {
            args: Prisma.SignalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>[]
          }
          create: {
            args: Prisma.SignalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          createMany: {
            args: Prisma.SignalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SignalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>[]
          }
          delete: {
            args: Prisma.SignalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          update: {
            args: Prisma.SignalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          deleteMany: {
            args: Prisma.SignalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SignalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SignalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          aggregate: {
            args: Prisma.SignalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSignal>
          }
          groupBy: {
            args: Prisma.SignalGroupByArgs<ExtArgs>
            result: $Utils.Optional<SignalGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignalCountArgs<ExtArgs>
            result: $Utils.Optional<SignalCountAggregateOutputType> | number
          }
        }
      }
      DecisionLog: {
        payload: Prisma.$DecisionLogPayload<ExtArgs>
        fields: Prisma.DecisionLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DecisionLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DecisionLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionLogPayload>
          }
          findFirst: {
            args: Prisma.DecisionLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DecisionLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionLogPayload>
          }
          findMany: {
            args: Prisma.DecisionLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionLogPayload>[]
          }
          create: {
            args: Prisma.DecisionLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionLogPayload>
          }
          createMany: {
            args: Prisma.DecisionLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DecisionLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionLogPayload>[]
          }
          delete: {
            args: Prisma.DecisionLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionLogPayload>
          }
          update: {
            args: Prisma.DecisionLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionLogPayload>
          }
          deleteMany: {
            args: Prisma.DecisionLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DecisionLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DecisionLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionLogPayload>
          }
          aggregate: {
            args: Prisma.DecisionLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDecisionLog>
          }
          groupBy: {
            args: Prisma.DecisionLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<DecisionLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.DecisionLogCountArgs<ExtArgs>
            result: $Utils.Optional<DecisionLogCountAggregateOutputType> | number
          }
        }
      }
      BankrollSnapshot: {
        payload: Prisma.$BankrollSnapshotPayload<ExtArgs>
        fields: Prisma.BankrollSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankrollSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankrollSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankrollSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankrollSnapshotPayload>
          }
          findFirst: {
            args: Prisma.BankrollSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankrollSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankrollSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankrollSnapshotPayload>
          }
          findMany: {
            args: Prisma.BankrollSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankrollSnapshotPayload>[]
          }
          create: {
            args: Prisma.BankrollSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankrollSnapshotPayload>
          }
          createMany: {
            args: Prisma.BankrollSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankrollSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankrollSnapshotPayload>[]
          }
          delete: {
            args: Prisma.BankrollSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankrollSnapshotPayload>
          }
          update: {
            args: Prisma.BankrollSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankrollSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.BankrollSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankrollSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BankrollSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankrollSnapshotPayload>
          }
          aggregate: {
            args: Prisma.BankrollSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankrollSnapshot>
          }
          groupBy: {
            args: Prisma.BankrollSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankrollSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankrollSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<BankrollSnapshotCountAggregateOutputType> | number
          }
        }
      }
      StrategyConfig: {
        payload: Prisma.$StrategyConfigPayload<ExtArgs>
        fields: Prisma.StrategyConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StrategyConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrategyConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StrategyConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrategyConfigPayload>
          }
          findFirst: {
            args: Prisma.StrategyConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrategyConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StrategyConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrategyConfigPayload>
          }
          findMany: {
            args: Prisma.StrategyConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrategyConfigPayload>[]
          }
          create: {
            args: Prisma.StrategyConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrategyConfigPayload>
          }
          createMany: {
            args: Prisma.StrategyConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StrategyConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrategyConfigPayload>[]
          }
          delete: {
            args: Prisma.StrategyConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrategyConfigPayload>
          }
          update: {
            args: Prisma.StrategyConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrategyConfigPayload>
          }
          deleteMany: {
            args: Prisma.StrategyConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StrategyConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StrategyConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrategyConfigPayload>
          }
          aggregate: {
            args: Prisma.StrategyConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStrategyConfig>
          }
          groupBy: {
            args: Prisma.StrategyConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<StrategyConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.StrategyConfigCountArgs<ExtArgs>
            result: $Utils.Optional<StrategyConfigCountAggregateOutputType> | number
          }
        }
      }
      PromptTemplate: {
        payload: Prisma.$PromptTemplatePayload<ExtArgs>
        fields: Prisma.PromptTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          findFirst: {
            args: Prisma.PromptTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          findMany: {
            args: Prisma.PromptTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>[]
          }
          create: {
            args: Prisma.PromptTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          createMany: {
            args: Prisma.PromptTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>[]
          }
          delete: {
            args: Prisma.PromptTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          update: {
            args: Prisma.PromptTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          deleteMany: {
            args: Prisma.PromptTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromptTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          aggregate: {
            args: Prisma.PromptTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromptTemplate>
          }
          groupBy: {
            args: Prisma.PromptTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<PromptTemplateCountAggregateOutputType> | number
          }
        }
      }
      PromptBinding: {
        payload: Prisma.$PromptBindingPayload<ExtArgs>
        fields: Prisma.PromptBindingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptBindingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptBindingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptBindingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptBindingPayload>
          }
          findFirst: {
            args: Prisma.PromptBindingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptBindingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptBindingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptBindingPayload>
          }
          findMany: {
            args: Prisma.PromptBindingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptBindingPayload>[]
          }
          create: {
            args: Prisma.PromptBindingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptBindingPayload>
          }
          createMany: {
            args: Prisma.PromptBindingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptBindingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptBindingPayload>[]
          }
          delete: {
            args: Prisma.PromptBindingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptBindingPayload>
          }
          update: {
            args: Prisma.PromptBindingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptBindingPayload>
          }
          deleteMany: {
            args: Prisma.PromptBindingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptBindingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromptBindingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptBindingPayload>
          }
          aggregate: {
            args: Prisma.PromptBindingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromptBinding>
          }
          groupBy: {
            args: Prisma.PromptBindingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptBindingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptBindingCountArgs<ExtArgs>
            result: $Utils.Optional<PromptBindingCountAggregateOutputType> | number
          }
        }
      }
      Tournament: {
        payload: Prisma.$TournamentPayload<ExtArgs>
        fields: Prisma.TournamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findFirst: {
            args: Prisma.TournamentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findMany: {
            args: Prisma.TournamentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          create: {
            args: Prisma.TournamentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          createMany: {
            args: Prisma.TournamentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          delete: {
            args: Prisma.TournamentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          update: {
            args: Prisma.TournamentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          deleteMany: {
            args: Prisma.TournamentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TournamentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          aggregate: {
            args: Prisma.TournamentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournament>
          }
          groupBy: {
            args: Prisma.TournamentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentCountAggregateOutputType> | number
          }
        }
      }
      NewsItem: {
        payload: Prisma.$NewsItemPayload<ExtArgs>
        fields: Prisma.NewsItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          findFirst: {
            args: Prisma.NewsItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          findMany: {
            args: Prisma.NewsItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>[]
          }
          create: {
            args: Prisma.NewsItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          createMany: {
            args: Prisma.NewsItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>[]
          }
          delete: {
            args: Prisma.NewsItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          update: {
            args: Prisma.NewsItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          deleteMany: {
            args: Prisma.NewsItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          aggregate: {
            args: Prisma.NewsItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsItem>
          }
          groupBy: {
            args: Prisma.NewsItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsItemCountArgs<ExtArgs>
            result: $Utils.Optional<NewsItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AgentCountOutputType
   */

  export type AgentCountOutputType = {
    bets: number
    decisionLogs: number
    snapshots: number
  }

  export type AgentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bets?: boolean | AgentCountOutputTypeCountBetsArgs
    decisionLogs?: boolean | AgentCountOutputTypeCountDecisionLogsArgs
    snapshots?: boolean | AgentCountOutputTypeCountSnapshotsArgs
  }

  // Custom InputTypes
  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentCountOutputType
     */
    select?: AgentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountBetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountDecisionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecisionLogWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankrollSnapshotWhereInput
  }


  /**
   * Count Type FixtureCountOutputType
   */

  export type FixtureCountOutputType = {
    bets: number
    oddsHistory: number
    events: number
    signals: number
  }

  export type FixtureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bets?: boolean | FixtureCountOutputTypeCountBetsArgs
    oddsHistory?: boolean | FixtureCountOutputTypeCountOddsHistoryArgs
    events?: boolean | FixtureCountOutputTypeCountEventsArgs
    signals?: boolean | FixtureCountOutputTypeCountSignalsArgs
  }

  // Custom InputTypes
  /**
   * FixtureCountOutputType without action
   */
  export type FixtureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixtureCountOutputType
     */
    select?: FixtureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FixtureCountOutputType without action
   */
  export type FixtureCountOutputTypeCountBetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetWhereInput
  }

  /**
   * FixtureCountOutputType without action
   */
  export type FixtureCountOutputTypeCountOddsHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OddsSnapshotWhereInput
  }

  /**
   * FixtureCountOutputType without action
   */
  export type FixtureCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchEventWhereInput
  }

  /**
   * FixtureCountOutputType without action
   */
  export type FixtureCountOutputTypeCountSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalWhereInput
  }


  /**
   * Count Type PromptTemplateCountOutputType
   */

  export type PromptTemplateCountOutputType = {
    bindings: number
  }

  export type PromptTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bindings?: boolean | PromptTemplateCountOutputTypeCountBindingsArgs
  }

  // Custom InputTypes
  /**
   * PromptTemplateCountOutputType without action
   */
  export type PromptTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplateCountOutputType
     */
    select?: PromptTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromptTemplateCountOutputType without action
   */
  export type PromptTemplateCountOutputTypeCountBindingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptBindingWhereInput
  }


  /**
   * Count Type TournamentCountOutputType
   */

  export type TournamentCountOutputType = {
    fixtures: number
  }

  export type TournamentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixtures?: boolean | TournamentCountOutputTypeCountFixturesArgs
  }

  // Custom InputTypes
  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentCountOutputType
     */
    select?: TournamentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountFixturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FixtureWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _avg: AgentAvgAggregateOutputType | null
    _sum: AgentSumAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentAvgAggregateOutputType = {
    id: number | null
    avatarPresetId: number | null
    initialCapital: Decimal | null
    currentCash: Decimal | null
    frozenCash: Decimal | null
    maxStakePercent: number | null
    maxOpenBets: number | null
  }

  export type AgentSumAggregateOutputType = {
    id: number | null
    avatarPresetId: number | null
    initialCapital: Decimal | null
    currentCash: Decimal | null
    frozenCash: Decimal | null
    maxStakePercent: number | null
    maxOpenBets: number | null
  }

  export type AgentMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    model: string | null
    baseUrl: string | null
    apiKey: string | null
    strategy: string | null
    avatarPresetId: number | null
    initialCapital: Decimal | null
    currentCash: Decimal | null
    frozenCash: Decimal | null
    isActive: boolean | null
    autoTradingEnabled: boolean | null
    showOnDashboard: boolean | null
    maxStakePercent: number | null
    maxOpenBets: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    model: string | null
    baseUrl: string | null
    apiKey: string | null
    strategy: string | null
    avatarPresetId: number | null
    initialCapital: Decimal | null
    currentCash: Decimal | null
    frozenCash: Decimal | null
    isActive: boolean | null
    autoTradingEnabled: boolean | null
    showOnDashboard: boolean | null
    maxStakePercent: number | null
    maxOpenBets: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    model: number
    baseUrl: number
    apiKey: number
    strategy: number
    avatarPresetId: number
    initialCapital: number
    currentCash: number
    frozenCash: number
    isActive: number
    autoTradingEnabled: number
    showOnDashboard: number
    maxStakePercent: number
    maxOpenBets: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgentAvgAggregateInputType = {
    id?: true
    avatarPresetId?: true
    initialCapital?: true
    currentCash?: true
    frozenCash?: true
    maxStakePercent?: true
    maxOpenBets?: true
  }

  export type AgentSumAggregateInputType = {
    id?: true
    avatarPresetId?: true
    initialCapital?: true
    currentCash?: true
    frozenCash?: true
    maxStakePercent?: true
    maxOpenBets?: true
  }

  export type AgentMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    model?: true
    baseUrl?: true
    apiKey?: true
    strategy?: true
    avatarPresetId?: true
    initialCapital?: true
    currentCash?: true
    frozenCash?: true
    isActive?: true
    autoTradingEnabled?: true
    showOnDashboard?: true
    maxStakePercent?: true
    maxOpenBets?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    model?: true
    baseUrl?: true
    apiKey?: true
    strategy?: true
    avatarPresetId?: true
    initialCapital?: true
    currentCash?: true
    frozenCash?: true
    isActive?: true
    autoTradingEnabled?: true
    showOnDashboard?: true
    maxStakePercent?: true
    maxOpenBets?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    model?: true
    baseUrl?: true
    apiKey?: true
    strategy?: true
    avatarPresetId?: true
    initialCapital?: true
    currentCash?: true
    frozenCash?: true
    isActive?: true
    autoTradingEnabled?: true
    showOnDashboard?: true
    maxStakePercent?: true
    maxOpenBets?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithAggregationInput | AgentOrderByWithAggregationInput[]
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _avg?: AgentAvgAggregateInputType
    _sum?: AgentSumAggregateInputType
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }

  export type AgentGroupByOutputType = {
    id: number
    name: string
    slug: string
    model: string
    baseUrl: string
    apiKey: string | null
    strategy: string
    avatarPresetId: number | null
    initialCapital: Decimal
    currentCash: Decimal
    frozenCash: Decimal
    isActive: boolean
    autoTradingEnabled: boolean
    showOnDashboard: boolean
    maxStakePercent: number
    maxOpenBets: number
    createdAt: Date
    updatedAt: Date
    _count: AgentCountAggregateOutputType | null
    _avg: AgentAvgAggregateOutputType | null
    _sum: AgentSumAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    model?: boolean
    baseUrl?: boolean
    apiKey?: boolean
    strategy?: boolean
    avatarPresetId?: boolean
    initialCapital?: boolean
    currentCash?: boolean
    frozenCash?: boolean
    isActive?: boolean
    autoTradingEnabled?: boolean
    showOnDashboard?: boolean
    maxStakePercent?: boolean
    maxOpenBets?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bets?: boolean | Agent$betsArgs<ExtArgs>
    decisionLogs?: boolean | Agent$decisionLogsArgs<ExtArgs>
    strategyConfig?: boolean | Agent$strategyConfigArgs<ExtArgs>
    promptBinding?: boolean | Agent$promptBindingArgs<ExtArgs>
    snapshots?: boolean | Agent$snapshotsArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    model?: boolean
    baseUrl?: boolean
    apiKey?: boolean
    strategy?: boolean
    avatarPresetId?: boolean
    initialCapital?: boolean
    currentCash?: boolean
    frozenCash?: boolean
    isActive?: boolean
    autoTradingEnabled?: boolean
    showOnDashboard?: boolean
    maxStakePercent?: boolean
    maxOpenBets?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    model?: boolean
    baseUrl?: boolean
    apiKey?: boolean
    strategy?: boolean
    avatarPresetId?: boolean
    initialCapital?: boolean
    currentCash?: boolean
    frozenCash?: boolean
    isActive?: boolean
    autoTradingEnabled?: boolean
    showOnDashboard?: boolean
    maxStakePercent?: boolean
    maxOpenBets?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bets?: boolean | Agent$betsArgs<ExtArgs>
    decisionLogs?: boolean | Agent$decisionLogsArgs<ExtArgs>
    strategyConfig?: boolean | Agent$strategyConfigArgs<ExtArgs>
    promptBinding?: boolean | Agent$promptBindingArgs<ExtArgs>
    snapshots?: boolean | Agent$snapshotsArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent"
    objects: {
      bets: Prisma.$BetPayload<ExtArgs>[]
      decisionLogs: Prisma.$DecisionLogPayload<ExtArgs>[]
      strategyConfig: Prisma.$StrategyConfigPayload<ExtArgs> | null
      promptBinding: Prisma.$PromptBindingPayload<ExtArgs> | null
      snapshots: Prisma.$BankrollSnapshotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      model: string
      baseUrl: string
      apiKey: string | null
      strategy: string
      avatarPresetId: number | null
      initialCapital: Prisma.Decimal
      currentCash: Prisma.Decimal
      frozenCash: Prisma.Decimal
      isActive: boolean
      autoTradingEnabled: boolean
      showOnDashboard: boolean
      maxStakePercent: number
      maxOpenBets: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agent"]>
    composites: {}
  }

  type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = $Result.GetResult<Prisma.$AgentPayload, S>

  type AgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent'], meta: { name: 'Agent' } }
    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFindUniqueArgs>(args: SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFindFirstArgs>(args?: SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentWithIdOnly = await prisma.agent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentFindManyArgs>(args?: SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
     */
    create<T extends AgentCreateArgs>(args: SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Agents.
     * @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentCreateManyArgs>(args?: SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agents and returns the data saved in the database.
     * @param {AgentCreateManyAndReturnArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
     */
    delete<T extends AgentDeleteArgs>(args: SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentUpdateArgs>(args: SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentDeleteManyArgs>(args?: SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentUpdateManyArgs>(args: SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends AgentUpsertArgs>(args: SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent model
   */
  readonly fields: AgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bets<T extends Agent$betsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$betsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findMany"> | Null>
    decisionLogs<T extends Agent$decisionLogsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$decisionLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionLogPayload<ExtArgs>, T, "findMany"> | Null>
    strategyConfig<T extends Agent$strategyConfigArgs<ExtArgs> = {}>(args?: Subset<T, Agent$strategyConfigArgs<ExtArgs>>): Prisma__StrategyConfigClient<$Result.GetResult<Prisma.$StrategyConfigPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    promptBinding<T extends Agent$promptBindingArgs<ExtArgs> = {}>(args?: Subset<T, Agent$promptBindingArgs<ExtArgs>>): Prisma__PromptBindingClient<$Result.GetResult<Prisma.$PromptBindingPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    snapshots<T extends Agent$snapshotsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$snapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankrollSnapshotPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agent model
   */ 
  interface AgentFieldRefs {
    readonly id: FieldRef<"Agent", 'Int'>
    readonly name: FieldRef<"Agent", 'String'>
    readonly slug: FieldRef<"Agent", 'String'>
    readonly model: FieldRef<"Agent", 'String'>
    readonly baseUrl: FieldRef<"Agent", 'String'>
    readonly apiKey: FieldRef<"Agent", 'String'>
    readonly strategy: FieldRef<"Agent", 'String'>
    readonly avatarPresetId: FieldRef<"Agent", 'Int'>
    readonly initialCapital: FieldRef<"Agent", 'Decimal'>
    readonly currentCash: FieldRef<"Agent", 'Decimal'>
    readonly frozenCash: FieldRef<"Agent", 'Decimal'>
    readonly isActive: FieldRef<"Agent", 'Boolean'>
    readonly autoTradingEnabled: FieldRef<"Agent", 'Boolean'>
    readonly showOnDashboard: FieldRef<"Agent", 'Boolean'>
    readonly maxStakePercent: FieldRef<"Agent", 'Float'>
    readonly maxOpenBets: FieldRef<"Agent", 'Int'>
    readonly createdAt: FieldRef<"Agent", 'DateTime'>
    readonly updatedAt: FieldRef<"Agent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agent findUnique
   */
  export type AgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findFirst
   */
  export type AgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findMany
   */
  export type AgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent create
   */
  export type AgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }

  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent createManyAndReturn
   */
  export type AgentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent update
   */
  export type AgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
  }

  /**
   * Agent upsert
   */
  export type AgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }

  /**
   * Agent delete
   */
  export type AgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
  }

  /**
   * Agent.bets
   */
  export type Agent$betsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    where?: BetWhereInput
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    cursor?: BetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Agent.decisionLogs
   */
  export type Agent$decisionLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionLog
     */
    select?: DecisionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionLogInclude<ExtArgs> | null
    where?: DecisionLogWhereInput
    orderBy?: DecisionLogOrderByWithRelationInput | DecisionLogOrderByWithRelationInput[]
    cursor?: DecisionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DecisionLogScalarFieldEnum | DecisionLogScalarFieldEnum[]
  }

  /**
   * Agent.strategyConfig
   */
  export type Agent$strategyConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrategyConfig
     */
    select?: StrategyConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrategyConfigInclude<ExtArgs> | null
    where?: StrategyConfigWhereInput
  }

  /**
   * Agent.promptBinding
   */
  export type Agent$promptBindingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptBinding
     */
    select?: PromptBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptBindingInclude<ExtArgs> | null
    where?: PromptBindingWhereInput
  }

  /**
   * Agent.snapshots
   */
  export type Agent$snapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankrollSnapshot
     */
    select?: BankrollSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankrollSnapshotInclude<ExtArgs> | null
    where?: BankrollSnapshotWhereInput
    orderBy?: BankrollSnapshotOrderByWithRelationInput | BankrollSnapshotOrderByWithRelationInput[]
    cursor?: BankrollSnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankrollSnapshotScalarFieldEnum | BankrollSnapshotScalarFieldEnum[]
  }

  /**
   * Agent without action
   */
  export type AgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
  }


  /**
   * Model Bet
   */

  export type AggregateBet = {
    _count: BetCountAggregateOutputType | null
    _avg: BetAvgAggregateOutputType | null
    _sum: BetSumAggregateOutputType | null
    _min: BetMinAggregateOutputType | null
    _max: BetMaxAggregateOutputType | null
  }

  export type BetAvgAggregateOutputType = {
    id: number | null
    agentId: number | null
    fixtureId: number | null
    odds: number | null
    stake: Decimal | null
    potentialProfit: Decimal | null
    potentialLoss: Decimal | null
    realizedPnl: Decimal | null
    confidence: number | null
    decisionLogId: number | null
  }

  export type BetSumAggregateOutputType = {
    id: number | null
    agentId: number | null
    fixtureId: number | null
    odds: number | null
    stake: Decimal | null
    potentialProfit: Decimal | null
    potentialLoss: Decimal | null
    realizedPnl: Decimal | null
    confidence: number | null
    decisionLogId: number | null
  }

  export type BetMinAggregateOutputType = {
    id: number | null
    agentId: number | null
    fixtureId: number | null
    betNo: string | null
    market: string | null
    selection: string | null
    side: string | null
    odds: number | null
    stake: Decimal | null
    potentialProfit: Decimal | null
    potentialLoss: Decimal | null
    status: string | null
    result: string | null
    settledAt: Date | null
    realizedPnl: Decimal | null
    confidence: number | null
    signalType: string | null
    decisionLogId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BetMaxAggregateOutputType = {
    id: number | null
    agentId: number | null
    fixtureId: number | null
    betNo: string | null
    market: string | null
    selection: string | null
    side: string | null
    odds: number | null
    stake: Decimal | null
    potentialProfit: Decimal | null
    potentialLoss: Decimal | null
    status: string | null
    result: string | null
    settledAt: Date | null
    realizedPnl: Decimal | null
    confidence: number | null
    signalType: string | null
    decisionLogId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BetCountAggregateOutputType = {
    id: number
    agentId: number
    fixtureId: number
    betNo: number
    market: number
    selection: number
    side: number
    odds: number
    stake: number
    potentialProfit: number
    potentialLoss: number
    status: number
    result: number
    settledAt: number
    realizedPnl: number
    confidence: number
    signalType: number
    decisionLogId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BetAvgAggregateInputType = {
    id?: true
    agentId?: true
    fixtureId?: true
    odds?: true
    stake?: true
    potentialProfit?: true
    potentialLoss?: true
    realizedPnl?: true
    confidence?: true
    decisionLogId?: true
  }

  export type BetSumAggregateInputType = {
    id?: true
    agentId?: true
    fixtureId?: true
    odds?: true
    stake?: true
    potentialProfit?: true
    potentialLoss?: true
    realizedPnl?: true
    confidence?: true
    decisionLogId?: true
  }

  export type BetMinAggregateInputType = {
    id?: true
    agentId?: true
    fixtureId?: true
    betNo?: true
    market?: true
    selection?: true
    side?: true
    odds?: true
    stake?: true
    potentialProfit?: true
    potentialLoss?: true
    status?: true
    result?: true
    settledAt?: true
    realizedPnl?: true
    confidence?: true
    signalType?: true
    decisionLogId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BetMaxAggregateInputType = {
    id?: true
    agentId?: true
    fixtureId?: true
    betNo?: true
    market?: true
    selection?: true
    side?: true
    odds?: true
    stake?: true
    potentialProfit?: true
    potentialLoss?: true
    status?: true
    result?: true
    settledAt?: true
    realizedPnl?: true
    confidence?: true
    signalType?: true
    decisionLogId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BetCountAggregateInputType = {
    id?: true
    agentId?: true
    fixtureId?: true
    betNo?: true
    market?: true
    selection?: true
    side?: true
    odds?: true
    stake?: true
    potentialProfit?: true
    potentialLoss?: true
    status?: true
    result?: true
    settledAt?: true
    realizedPnl?: true
    confidence?: true
    signalType?: true
    decisionLogId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bet to aggregate.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bets
    **/
    _count?: true | BetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BetMaxAggregateInputType
  }

  export type GetBetAggregateType<T extends BetAggregateArgs> = {
        [P in keyof T & keyof AggregateBet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBet[P]>
      : GetScalarType<T[P], AggregateBet[P]>
  }




  export type BetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetWhereInput
    orderBy?: BetOrderByWithAggregationInput | BetOrderByWithAggregationInput[]
    by: BetScalarFieldEnum[] | BetScalarFieldEnum
    having?: BetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetCountAggregateInputType | true
    _avg?: BetAvgAggregateInputType
    _sum?: BetSumAggregateInputType
    _min?: BetMinAggregateInputType
    _max?: BetMaxAggregateInputType
  }

  export type BetGroupByOutputType = {
    id: number
    agentId: number
    fixtureId: number
    betNo: string
    market: string
    selection: string
    side: string
    odds: number
    stake: Decimal
    potentialProfit: Decimal
    potentialLoss: Decimal
    status: string
    result: string | null
    settledAt: Date | null
    realizedPnl: Decimal | null
    confidence: number | null
    signalType: string | null
    decisionLogId: number | null
    createdAt: Date
    updatedAt: Date
    _count: BetCountAggregateOutputType | null
    _avg: BetAvgAggregateOutputType | null
    _sum: BetSumAggregateOutputType | null
    _min: BetMinAggregateOutputType | null
    _max: BetMaxAggregateOutputType | null
  }

  type GetBetGroupByPayload<T extends BetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BetGroupByOutputType[P]>
            : GetScalarType<T[P], BetGroupByOutputType[P]>
        }
      >
    >


  export type BetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    fixtureId?: boolean
    betNo?: boolean
    market?: boolean
    selection?: boolean
    side?: boolean
    odds?: boolean
    stake?: boolean
    potentialProfit?: boolean
    potentialLoss?: boolean
    status?: boolean
    result?: boolean
    settledAt?: boolean
    realizedPnl?: boolean
    confidence?: boolean
    signalType?: boolean
    decisionLogId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bet"]>

  export type BetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    fixtureId?: boolean
    betNo?: boolean
    market?: boolean
    selection?: boolean
    side?: boolean
    odds?: boolean
    stake?: boolean
    potentialProfit?: boolean
    potentialLoss?: boolean
    status?: boolean
    result?: boolean
    settledAt?: boolean
    realizedPnl?: boolean
    confidence?: boolean
    signalType?: boolean
    decisionLogId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bet"]>

  export type BetSelectScalar = {
    id?: boolean
    agentId?: boolean
    fixtureId?: boolean
    betNo?: boolean
    market?: boolean
    selection?: boolean
    side?: boolean
    odds?: boolean
    stake?: boolean
    potentialProfit?: boolean
    potentialLoss?: boolean
    status?: boolean
    result?: boolean
    settledAt?: boolean
    realizedPnl?: boolean
    confidence?: boolean
    signalType?: boolean
    decisionLogId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }
  export type BetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }

  export type $BetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bet"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
      fixture: Prisma.$FixturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      agentId: number
      fixtureId: number
      betNo: string
      market: string
      selection: string
      side: string
      odds: number
      stake: Prisma.Decimal
      potentialProfit: Prisma.Decimal
      potentialLoss: Prisma.Decimal
      status: string
      result: string | null
      settledAt: Date | null
      realizedPnl: Prisma.Decimal | null
      confidence: number | null
      signalType: string | null
      decisionLogId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bet"]>
    composites: {}
  }

  type BetGetPayload<S extends boolean | null | undefined | BetDefaultArgs> = $Result.GetResult<Prisma.$BetPayload, S>

  type BetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BetCountAggregateInputType | true
    }

  export interface BetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bet'], meta: { name: 'Bet' } }
    /**
     * Find zero or one Bet that matches the filter.
     * @param {BetFindUniqueArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BetFindUniqueArgs>(args: SelectSubset<T, BetFindUniqueArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BetFindUniqueOrThrowArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BetFindUniqueOrThrowArgs>(args: SelectSubset<T, BetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindFirstArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BetFindFirstArgs>(args?: SelectSubset<T, BetFindFirstArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindFirstOrThrowArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BetFindFirstOrThrowArgs>(args?: SelectSubset<T, BetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bets
     * const bets = await prisma.bet.findMany()
     * 
     * // Get first 10 Bets
     * const bets = await prisma.bet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const betWithIdOnly = await prisma.bet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BetFindManyArgs>(args?: SelectSubset<T, BetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bet.
     * @param {BetCreateArgs} args - Arguments to create a Bet.
     * @example
     * // Create one Bet
     * const Bet = await prisma.bet.create({
     *   data: {
     *     // ... data to create a Bet
     *   }
     * })
     * 
     */
    create<T extends BetCreateArgs>(args: SelectSubset<T, BetCreateArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bets.
     * @param {BetCreateManyArgs} args - Arguments to create many Bets.
     * @example
     * // Create many Bets
     * const bet = await prisma.bet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BetCreateManyArgs>(args?: SelectSubset<T, BetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bets and returns the data saved in the database.
     * @param {BetCreateManyAndReturnArgs} args - Arguments to create many Bets.
     * @example
     * // Create many Bets
     * const bet = await prisma.bet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bets and only return the `id`
     * const betWithIdOnly = await prisma.bet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BetCreateManyAndReturnArgs>(args?: SelectSubset<T, BetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Bet.
     * @param {BetDeleteArgs} args - Arguments to delete one Bet.
     * @example
     * // Delete one Bet
     * const Bet = await prisma.bet.delete({
     *   where: {
     *     // ... filter to delete one Bet
     *   }
     * })
     * 
     */
    delete<T extends BetDeleteArgs>(args: SelectSubset<T, BetDeleteArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bet.
     * @param {BetUpdateArgs} args - Arguments to update one Bet.
     * @example
     * // Update one Bet
     * const bet = await prisma.bet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BetUpdateArgs>(args: SelectSubset<T, BetUpdateArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bets.
     * @param {BetDeleteManyArgs} args - Arguments to filter Bets to delete.
     * @example
     * // Delete a few Bets
     * const { count } = await prisma.bet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BetDeleteManyArgs>(args?: SelectSubset<T, BetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bets
     * const bet = await prisma.bet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BetUpdateManyArgs>(args: SelectSubset<T, BetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bet.
     * @param {BetUpsertArgs} args - Arguments to update or create a Bet.
     * @example
     * // Update or create a Bet
     * const bet = await prisma.bet.upsert({
     *   create: {
     *     // ... data to create a Bet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bet we want to update
     *   }
     * })
     */
    upsert<T extends BetUpsertArgs>(args: SelectSubset<T, BetUpsertArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetCountArgs} args - Arguments to filter Bets to count.
     * @example
     * // Count the number of Bets
     * const count = await prisma.bet.count({
     *   where: {
     *     // ... the filter for the Bets we want to count
     *   }
     * })
    **/
    count<T extends BetCountArgs>(
      args?: Subset<T, BetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BetAggregateArgs>(args: Subset<T, BetAggregateArgs>): Prisma.PrismaPromise<GetBetAggregateType<T>>

    /**
     * Group by Bet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BetGroupByArgs['orderBy'] }
        : { orderBy?: BetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bet model
   */
  readonly fields: BetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    fixture<T extends FixtureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FixtureDefaultArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bet model
   */ 
  interface BetFieldRefs {
    readonly id: FieldRef<"Bet", 'Int'>
    readonly agentId: FieldRef<"Bet", 'Int'>
    readonly fixtureId: FieldRef<"Bet", 'Int'>
    readonly betNo: FieldRef<"Bet", 'String'>
    readonly market: FieldRef<"Bet", 'String'>
    readonly selection: FieldRef<"Bet", 'String'>
    readonly side: FieldRef<"Bet", 'String'>
    readonly odds: FieldRef<"Bet", 'Float'>
    readonly stake: FieldRef<"Bet", 'Decimal'>
    readonly potentialProfit: FieldRef<"Bet", 'Decimal'>
    readonly potentialLoss: FieldRef<"Bet", 'Decimal'>
    readonly status: FieldRef<"Bet", 'String'>
    readonly result: FieldRef<"Bet", 'String'>
    readonly settledAt: FieldRef<"Bet", 'DateTime'>
    readonly realizedPnl: FieldRef<"Bet", 'Decimal'>
    readonly confidence: FieldRef<"Bet", 'Float'>
    readonly signalType: FieldRef<"Bet", 'String'>
    readonly decisionLogId: FieldRef<"Bet", 'Int'>
    readonly createdAt: FieldRef<"Bet", 'DateTime'>
    readonly updatedAt: FieldRef<"Bet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bet findUnique
   */
  export type BetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet findUniqueOrThrow
   */
  export type BetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet findFirst
   */
  export type BetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bets.
     */
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet findFirstOrThrow
   */
  export type BetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bets.
     */
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet findMany
   */
  export type BetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bets to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet create
   */
  export type BetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The data needed to create a Bet.
     */
    data: XOR<BetCreateInput, BetUncheckedCreateInput>
  }

  /**
   * Bet createMany
   */
  export type BetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bets.
     */
    data: BetCreateManyInput | BetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bet createManyAndReturn
   */
  export type BetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bets.
     */
    data: BetCreateManyInput | BetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bet update
   */
  export type BetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The data needed to update a Bet.
     */
    data: XOR<BetUpdateInput, BetUncheckedUpdateInput>
    /**
     * Choose, which Bet to update.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet updateMany
   */
  export type BetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bets.
     */
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyInput>
    /**
     * Filter which Bets to update
     */
    where?: BetWhereInput
  }

  /**
   * Bet upsert
   */
  export type BetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The filter to search for the Bet to update in case it exists.
     */
    where: BetWhereUniqueInput
    /**
     * In case the Bet found by the `where` argument doesn't exist, create a new Bet with this data.
     */
    create: XOR<BetCreateInput, BetUncheckedCreateInput>
    /**
     * In case the Bet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BetUpdateInput, BetUncheckedUpdateInput>
  }

  /**
   * Bet delete
   */
  export type BetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter which Bet to delete.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet deleteMany
   */
  export type BetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bets to delete
     */
    where?: BetWhereInput
  }

  /**
   * Bet without action
   */
  export type BetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
  }


  /**
   * Model Fixture
   */

  export type AggregateFixture = {
    _count: FixtureCountAggregateOutputType | null
    _avg: FixtureAvgAggregateOutputType | null
    _sum: FixtureSumAggregateOutputType | null
    _min: FixtureMinAggregateOutputType | null
    _max: FixtureMaxAggregateOutputType | null
  }

  export type FixtureAvgAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    scoreA: number | null
    scoreB: number | null
    currentMinute: number | null
    currentPeriod: number | null
    teamAFifaRank: number | null
    teamBFifaRank: number | null
  }

  export type FixtureSumAggregateOutputType = {
    id: number | null
    tournamentId: number | null
    scoreA: number | null
    scoreB: number | null
    currentMinute: number | null
    currentPeriod: number | null
    teamAFifaRank: number | null
    teamBFifaRank: number | null
  }

  export type FixtureMinAggregateOutputType = {
    id: number | null
    txlineFixtureId: string | null
    tournamentId: number | null
    teamA: string | null
    teamB: string | null
    teamACode: string | null
    teamBCode: string | null
    stage: string | null
    venue: string | null
    kickoff: Date | null
    status: string | null
    scoreA: number | null
    scoreB: number | null
    currentMinute: number | null
    currentPeriod: number | null
    teamAFifaRank: number | null
    teamBFifaRank: number | null
    teamAForm: string | null
    teamBForm: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FixtureMaxAggregateOutputType = {
    id: number | null
    txlineFixtureId: string | null
    tournamentId: number | null
    teamA: string | null
    teamB: string | null
    teamACode: string | null
    teamBCode: string | null
    stage: string | null
    venue: string | null
    kickoff: Date | null
    status: string | null
    scoreA: number | null
    scoreB: number | null
    currentMinute: number | null
    currentPeriod: number | null
    teamAFifaRank: number | null
    teamBFifaRank: number | null
    teamAForm: string | null
    teamBForm: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FixtureCountAggregateOutputType = {
    id: number
    txlineFixtureId: number
    tournamentId: number
    teamA: number
    teamB: number
    teamACode: number
    teamBCode: number
    stage: number
    venue: number
    kickoff: number
    status: number
    scoreA: number
    scoreB: number
    currentMinute: number
    currentPeriod: number
    teamAFifaRank: number
    teamBFifaRank: number
    teamAForm: number
    teamBForm: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FixtureAvgAggregateInputType = {
    id?: true
    tournamentId?: true
    scoreA?: true
    scoreB?: true
    currentMinute?: true
    currentPeriod?: true
    teamAFifaRank?: true
    teamBFifaRank?: true
  }

  export type FixtureSumAggregateInputType = {
    id?: true
    tournamentId?: true
    scoreA?: true
    scoreB?: true
    currentMinute?: true
    currentPeriod?: true
    teamAFifaRank?: true
    teamBFifaRank?: true
  }

  export type FixtureMinAggregateInputType = {
    id?: true
    txlineFixtureId?: true
    tournamentId?: true
    teamA?: true
    teamB?: true
    teamACode?: true
    teamBCode?: true
    stage?: true
    venue?: true
    kickoff?: true
    status?: true
    scoreA?: true
    scoreB?: true
    currentMinute?: true
    currentPeriod?: true
    teamAFifaRank?: true
    teamBFifaRank?: true
    teamAForm?: true
    teamBForm?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FixtureMaxAggregateInputType = {
    id?: true
    txlineFixtureId?: true
    tournamentId?: true
    teamA?: true
    teamB?: true
    teamACode?: true
    teamBCode?: true
    stage?: true
    venue?: true
    kickoff?: true
    status?: true
    scoreA?: true
    scoreB?: true
    currentMinute?: true
    currentPeriod?: true
    teamAFifaRank?: true
    teamBFifaRank?: true
    teamAForm?: true
    teamBForm?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FixtureCountAggregateInputType = {
    id?: true
    txlineFixtureId?: true
    tournamentId?: true
    teamA?: true
    teamB?: true
    teamACode?: true
    teamBCode?: true
    stage?: true
    venue?: true
    kickoff?: true
    status?: true
    scoreA?: true
    scoreB?: true
    currentMinute?: true
    currentPeriod?: true
    teamAFifaRank?: true
    teamBFifaRank?: true
    teamAForm?: true
    teamBForm?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FixtureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fixture to aggregate.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fixtures
    **/
    _count?: true | FixtureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FixtureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FixtureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FixtureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FixtureMaxAggregateInputType
  }

  export type GetFixtureAggregateType<T extends FixtureAggregateArgs> = {
        [P in keyof T & keyof AggregateFixture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFixture[P]>
      : GetScalarType<T[P], AggregateFixture[P]>
  }




  export type FixtureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FixtureWhereInput
    orderBy?: FixtureOrderByWithAggregationInput | FixtureOrderByWithAggregationInput[]
    by: FixtureScalarFieldEnum[] | FixtureScalarFieldEnum
    having?: FixtureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FixtureCountAggregateInputType | true
    _avg?: FixtureAvgAggregateInputType
    _sum?: FixtureSumAggregateInputType
    _min?: FixtureMinAggregateInputType
    _max?: FixtureMaxAggregateInputType
  }

  export type FixtureGroupByOutputType = {
    id: number
    txlineFixtureId: string
    tournamentId: number
    teamA: string
    teamB: string
    teamACode: string
    teamBCode: string
    stage: string
    venue: string | null
    kickoff: Date
    status: string
    scoreA: number
    scoreB: number
    currentMinute: number | null
    currentPeriod: number
    teamAFifaRank: number | null
    teamBFifaRank: number | null
    teamAForm: string | null
    teamBForm: string | null
    createdAt: Date
    updatedAt: Date
    _count: FixtureCountAggregateOutputType | null
    _avg: FixtureAvgAggregateOutputType | null
    _sum: FixtureSumAggregateOutputType | null
    _min: FixtureMinAggregateOutputType | null
    _max: FixtureMaxAggregateOutputType | null
  }

  type GetFixtureGroupByPayload<T extends FixtureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FixtureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FixtureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FixtureGroupByOutputType[P]>
            : GetScalarType<T[P], FixtureGroupByOutputType[P]>
        }
      >
    >


  export type FixtureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txlineFixtureId?: boolean
    tournamentId?: boolean
    teamA?: boolean
    teamB?: boolean
    teamACode?: boolean
    teamBCode?: boolean
    stage?: boolean
    venue?: boolean
    kickoff?: boolean
    status?: boolean
    scoreA?: boolean
    scoreB?: boolean
    currentMinute?: boolean
    currentPeriod?: boolean
    teamAFifaRank?: boolean
    teamBFifaRank?: boolean
    teamAForm?: boolean
    teamBForm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    bets?: boolean | Fixture$betsArgs<ExtArgs>
    oddsHistory?: boolean | Fixture$oddsHistoryArgs<ExtArgs>
    events?: boolean | Fixture$eventsArgs<ExtArgs>
    signals?: boolean | Fixture$signalsArgs<ExtArgs>
    _count?: boolean | FixtureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fixture"]>

  export type FixtureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txlineFixtureId?: boolean
    tournamentId?: boolean
    teamA?: boolean
    teamB?: boolean
    teamACode?: boolean
    teamBCode?: boolean
    stage?: boolean
    venue?: boolean
    kickoff?: boolean
    status?: boolean
    scoreA?: boolean
    scoreB?: boolean
    currentMinute?: boolean
    currentPeriod?: boolean
    teamAFifaRank?: boolean
    teamBFifaRank?: boolean
    teamAForm?: boolean
    teamBForm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fixture"]>

  export type FixtureSelectScalar = {
    id?: boolean
    txlineFixtureId?: boolean
    tournamentId?: boolean
    teamA?: boolean
    teamB?: boolean
    teamACode?: boolean
    teamBCode?: boolean
    stage?: boolean
    venue?: boolean
    kickoff?: boolean
    status?: boolean
    scoreA?: boolean
    scoreB?: boolean
    currentMinute?: boolean
    currentPeriod?: boolean
    teamAFifaRank?: boolean
    teamBFifaRank?: boolean
    teamAForm?: boolean
    teamBForm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FixtureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    bets?: boolean | Fixture$betsArgs<ExtArgs>
    oddsHistory?: boolean | Fixture$oddsHistoryArgs<ExtArgs>
    events?: boolean | Fixture$eventsArgs<ExtArgs>
    signals?: boolean | Fixture$signalsArgs<ExtArgs>
    _count?: boolean | FixtureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FixtureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }

  export type $FixturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fixture"
    objects: {
      tournament: Prisma.$TournamentPayload<ExtArgs>
      bets: Prisma.$BetPayload<ExtArgs>[]
      oddsHistory: Prisma.$OddsSnapshotPayload<ExtArgs>[]
      events: Prisma.$MatchEventPayload<ExtArgs>[]
      signals: Prisma.$SignalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      txlineFixtureId: string
      tournamentId: number
      teamA: string
      teamB: string
      teamACode: string
      teamBCode: string
      stage: string
      venue: string | null
      kickoff: Date
      status: string
      scoreA: number
      scoreB: number
      currentMinute: number | null
      currentPeriod: number
      teamAFifaRank: number | null
      teamBFifaRank: number | null
      teamAForm: string | null
      teamBForm: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fixture"]>
    composites: {}
  }

  type FixtureGetPayload<S extends boolean | null | undefined | FixtureDefaultArgs> = $Result.GetResult<Prisma.$FixturePayload, S>

  type FixtureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FixtureFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FixtureCountAggregateInputType | true
    }

  export interface FixtureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fixture'], meta: { name: 'Fixture' } }
    /**
     * Find zero or one Fixture that matches the filter.
     * @param {FixtureFindUniqueArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FixtureFindUniqueArgs>(args: SelectSubset<T, FixtureFindUniqueArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Fixture that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FixtureFindUniqueOrThrowArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FixtureFindUniqueOrThrowArgs>(args: SelectSubset<T, FixtureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Fixture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureFindFirstArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FixtureFindFirstArgs>(args?: SelectSubset<T, FixtureFindFirstArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Fixture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureFindFirstOrThrowArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FixtureFindFirstOrThrowArgs>(args?: SelectSubset<T, FixtureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Fixtures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fixtures
     * const fixtures = await prisma.fixture.findMany()
     * 
     * // Get first 10 Fixtures
     * const fixtures = await prisma.fixture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fixtureWithIdOnly = await prisma.fixture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FixtureFindManyArgs>(args?: SelectSubset<T, FixtureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Fixture.
     * @param {FixtureCreateArgs} args - Arguments to create a Fixture.
     * @example
     * // Create one Fixture
     * const Fixture = await prisma.fixture.create({
     *   data: {
     *     // ... data to create a Fixture
     *   }
     * })
     * 
     */
    create<T extends FixtureCreateArgs>(args: SelectSubset<T, FixtureCreateArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Fixtures.
     * @param {FixtureCreateManyArgs} args - Arguments to create many Fixtures.
     * @example
     * // Create many Fixtures
     * const fixture = await prisma.fixture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FixtureCreateManyArgs>(args?: SelectSubset<T, FixtureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fixtures and returns the data saved in the database.
     * @param {FixtureCreateManyAndReturnArgs} args - Arguments to create many Fixtures.
     * @example
     * // Create many Fixtures
     * const fixture = await prisma.fixture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fixtures and only return the `id`
     * const fixtureWithIdOnly = await prisma.fixture.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FixtureCreateManyAndReturnArgs>(args?: SelectSubset<T, FixtureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Fixture.
     * @param {FixtureDeleteArgs} args - Arguments to delete one Fixture.
     * @example
     * // Delete one Fixture
     * const Fixture = await prisma.fixture.delete({
     *   where: {
     *     // ... filter to delete one Fixture
     *   }
     * })
     * 
     */
    delete<T extends FixtureDeleteArgs>(args: SelectSubset<T, FixtureDeleteArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Fixture.
     * @param {FixtureUpdateArgs} args - Arguments to update one Fixture.
     * @example
     * // Update one Fixture
     * const fixture = await prisma.fixture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FixtureUpdateArgs>(args: SelectSubset<T, FixtureUpdateArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Fixtures.
     * @param {FixtureDeleteManyArgs} args - Arguments to filter Fixtures to delete.
     * @example
     * // Delete a few Fixtures
     * const { count } = await prisma.fixture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FixtureDeleteManyArgs>(args?: SelectSubset<T, FixtureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fixtures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fixtures
     * const fixture = await prisma.fixture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FixtureUpdateManyArgs>(args: SelectSubset<T, FixtureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fixture.
     * @param {FixtureUpsertArgs} args - Arguments to update or create a Fixture.
     * @example
     * // Update or create a Fixture
     * const fixture = await prisma.fixture.upsert({
     *   create: {
     *     // ... data to create a Fixture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fixture we want to update
     *   }
     * })
     */
    upsert<T extends FixtureUpsertArgs>(args: SelectSubset<T, FixtureUpsertArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Fixtures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureCountArgs} args - Arguments to filter Fixtures to count.
     * @example
     * // Count the number of Fixtures
     * const count = await prisma.fixture.count({
     *   where: {
     *     // ... the filter for the Fixtures we want to count
     *   }
     * })
    **/
    count<T extends FixtureCountArgs>(
      args?: Subset<T, FixtureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FixtureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fixture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FixtureAggregateArgs>(args: Subset<T, FixtureAggregateArgs>): Prisma.PrismaPromise<GetFixtureAggregateType<T>>

    /**
     * Group by Fixture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FixtureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FixtureGroupByArgs['orderBy'] }
        : { orderBy?: FixtureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FixtureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFixtureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fixture model
   */
  readonly fields: FixtureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fixture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FixtureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    bets<T extends Fixture$betsArgs<ExtArgs> = {}>(args?: Subset<T, Fixture$betsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findMany"> | Null>
    oddsHistory<T extends Fixture$oddsHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Fixture$oddsHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OddsSnapshotPayload<ExtArgs>, T, "findMany"> | Null>
    events<T extends Fixture$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Fixture$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchEventPayload<ExtArgs>, T, "findMany"> | Null>
    signals<T extends Fixture$signalsArgs<ExtArgs> = {}>(args?: Subset<T, Fixture$signalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fixture model
   */ 
  interface FixtureFieldRefs {
    readonly id: FieldRef<"Fixture", 'Int'>
    readonly txlineFixtureId: FieldRef<"Fixture", 'String'>
    readonly tournamentId: FieldRef<"Fixture", 'Int'>
    readonly teamA: FieldRef<"Fixture", 'String'>
    readonly teamB: FieldRef<"Fixture", 'String'>
    readonly teamACode: FieldRef<"Fixture", 'String'>
    readonly teamBCode: FieldRef<"Fixture", 'String'>
    readonly stage: FieldRef<"Fixture", 'String'>
    readonly venue: FieldRef<"Fixture", 'String'>
    readonly kickoff: FieldRef<"Fixture", 'DateTime'>
    readonly status: FieldRef<"Fixture", 'String'>
    readonly scoreA: FieldRef<"Fixture", 'Int'>
    readonly scoreB: FieldRef<"Fixture", 'Int'>
    readonly currentMinute: FieldRef<"Fixture", 'Int'>
    readonly currentPeriod: FieldRef<"Fixture", 'Int'>
    readonly teamAFifaRank: FieldRef<"Fixture", 'Int'>
    readonly teamBFifaRank: FieldRef<"Fixture", 'Int'>
    readonly teamAForm: FieldRef<"Fixture", 'String'>
    readonly teamBForm: FieldRef<"Fixture", 'String'>
    readonly createdAt: FieldRef<"Fixture", 'DateTime'>
    readonly updatedAt: FieldRef<"Fixture", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fixture findUnique
   */
  export type FixtureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture findUniqueOrThrow
   */
  export type FixtureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture findFirst
   */
  export type FixtureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fixtures.
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fixtures.
     */
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Fixture findFirstOrThrow
   */
  export type FixtureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fixtures.
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fixtures.
     */
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Fixture findMany
   */
  export type FixtureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixtures to fetch.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fixtures.
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Fixture create
   */
  export type FixtureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * The data needed to create a Fixture.
     */
    data: XOR<FixtureCreateInput, FixtureUncheckedCreateInput>
  }

  /**
   * Fixture createMany
   */
  export type FixtureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fixtures.
     */
    data: FixtureCreateManyInput | FixtureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fixture createManyAndReturn
   */
  export type FixtureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Fixtures.
     */
    data: FixtureCreateManyInput | FixtureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fixture update
   */
  export type FixtureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * The data needed to update a Fixture.
     */
    data: XOR<FixtureUpdateInput, FixtureUncheckedUpdateInput>
    /**
     * Choose, which Fixture to update.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture updateMany
   */
  export type FixtureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fixtures.
     */
    data: XOR<FixtureUpdateManyMutationInput, FixtureUncheckedUpdateManyInput>
    /**
     * Filter which Fixtures to update
     */
    where?: FixtureWhereInput
  }

  /**
   * Fixture upsert
   */
  export type FixtureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * The filter to search for the Fixture to update in case it exists.
     */
    where: FixtureWhereUniqueInput
    /**
     * In case the Fixture found by the `where` argument doesn't exist, create a new Fixture with this data.
     */
    create: XOR<FixtureCreateInput, FixtureUncheckedCreateInput>
    /**
     * In case the Fixture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FixtureUpdateInput, FixtureUncheckedUpdateInput>
  }

  /**
   * Fixture delete
   */
  export type FixtureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter which Fixture to delete.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture deleteMany
   */
  export type FixtureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fixtures to delete
     */
    where?: FixtureWhereInput
  }

  /**
   * Fixture.bets
   */
  export type Fixture$betsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    where?: BetWhereInput
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    cursor?: BetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Fixture.oddsHistory
   */
  export type Fixture$oddsHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OddsSnapshot
     */
    select?: OddsSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OddsSnapshotInclude<ExtArgs> | null
    where?: OddsSnapshotWhereInput
    orderBy?: OddsSnapshotOrderByWithRelationInput | OddsSnapshotOrderByWithRelationInput[]
    cursor?: OddsSnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OddsSnapshotScalarFieldEnum | OddsSnapshotScalarFieldEnum[]
  }

  /**
   * Fixture.events
   */
  export type Fixture$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null
    where?: MatchEventWhereInput
    orderBy?: MatchEventOrderByWithRelationInput | MatchEventOrderByWithRelationInput[]
    cursor?: MatchEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchEventScalarFieldEnum | MatchEventScalarFieldEnum[]
  }

  /**
   * Fixture.signals
   */
  export type Fixture$signalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    where?: SignalWhereInput
    orderBy?: SignalOrderByWithRelationInput | SignalOrderByWithRelationInput[]
    cursor?: SignalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SignalScalarFieldEnum | SignalScalarFieldEnum[]
  }

  /**
   * Fixture without action
   */
  export type FixtureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
  }


  /**
   * Model OddsSnapshot
   */

  export type AggregateOddsSnapshot = {
    _count: OddsSnapshotCountAggregateOutputType | null
    _avg: OddsSnapshotAvgAggregateOutputType | null
    _sum: OddsSnapshotSumAggregateOutputType | null
    _min: OddsSnapshotMinAggregateOutputType | null
    _max: OddsSnapshotMaxAggregateOutputType | null
  }

  export type OddsSnapshotAvgAggregateOutputType = {
    id: number | null
    fixtureId: number | null
    teamAOdds: number | null
    drawOdds: number | null
    teamBOdds: number | null
  }

  export type OddsSnapshotSumAggregateOutputType = {
    id: number | null
    fixtureId: number | null
    teamAOdds: number | null
    drawOdds: number | null
    teamBOdds: number | null
  }

  export type OddsSnapshotMinAggregateOutputType = {
    id: number | null
    fixtureId: number | null
    source: string | null
    market: string | null
    teamAOdds: number | null
    drawOdds: number | null
    teamBOdds: number | null
    timestamp: Date | null
  }

  export type OddsSnapshotMaxAggregateOutputType = {
    id: number | null
    fixtureId: number | null
    source: string | null
    market: string | null
    teamAOdds: number | null
    drawOdds: number | null
    teamBOdds: number | null
    timestamp: Date | null
  }

  export type OddsSnapshotCountAggregateOutputType = {
    id: number
    fixtureId: number
    source: number
    market: number
    teamAOdds: number
    drawOdds: number
    teamBOdds: number
    allOutcomes: number
    timestamp: number
    _all: number
  }


  export type OddsSnapshotAvgAggregateInputType = {
    id?: true
    fixtureId?: true
    teamAOdds?: true
    drawOdds?: true
    teamBOdds?: true
  }

  export type OddsSnapshotSumAggregateInputType = {
    id?: true
    fixtureId?: true
    teamAOdds?: true
    drawOdds?: true
    teamBOdds?: true
  }

  export type OddsSnapshotMinAggregateInputType = {
    id?: true
    fixtureId?: true
    source?: true
    market?: true
    teamAOdds?: true
    drawOdds?: true
    teamBOdds?: true
    timestamp?: true
  }

  export type OddsSnapshotMaxAggregateInputType = {
    id?: true
    fixtureId?: true
    source?: true
    market?: true
    teamAOdds?: true
    drawOdds?: true
    teamBOdds?: true
    timestamp?: true
  }

  export type OddsSnapshotCountAggregateInputType = {
    id?: true
    fixtureId?: true
    source?: true
    market?: true
    teamAOdds?: true
    drawOdds?: true
    teamBOdds?: true
    allOutcomes?: true
    timestamp?: true
    _all?: true
  }

  export type OddsSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OddsSnapshot to aggregate.
     */
    where?: OddsSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OddsSnapshots to fetch.
     */
    orderBy?: OddsSnapshotOrderByWithRelationInput | OddsSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OddsSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OddsSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OddsSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OddsSnapshots
    **/
    _count?: true | OddsSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OddsSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OddsSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OddsSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OddsSnapshotMaxAggregateInputType
  }

  export type GetOddsSnapshotAggregateType<T extends OddsSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateOddsSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOddsSnapshot[P]>
      : GetScalarType<T[P], AggregateOddsSnapshot[P]>
  }




  export type OddsSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OddsSnapshotWhereInput
    orderBy?: OddsSnapshotOrderByWithAggregationInput | OddsSnapshotOrderByWithAggregationInput[]
    by: OddsSnapshotScalarFieldEnum[] | OddsSnapshotScalarFieldEnum
    having?: OddsSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OddsSnapshotCountAggregateInputType | true
    _avg?: OddsSnapshotAvgAggregateInputType
    _sum?: OddsSnapshotSumAggregateInputType
    _min?: OddsSnapshotMinAggregateInputType
    _max?: OddsSnapshotMaxAggregateInputType
  }

  export type OddsSnapshotGroupByOutputType = {
    id: number
    fixtureId: number
    source: string
    market: string
    teamAOdds: number
    drawOdds: number | null
    teamBOdds: number
    allOutcomes: JsonValue | null
    timestamp: Date
    _count: OddsSnapshotCountAggregateOutputType | null
    _avg: OddsSnapshotAvgAggregateOutputType | null
    _sum: OddsSnapshotSumAggregateOutputType | null
    _min: OddsSnapshotMinAggregateOutputType | null
    _max: OddsSnapshotMaxAggregateOutputType | null
  }

  type GetOddsSnapshotGroupByPayload<T extends OddsSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OddsSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OddsSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OddsSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], OddsSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type OddsSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fixtureId?: boolean
    source?: boolean
    market?: boolean
    teamAOdds?: boolean
    drawOdds?: boolean
    teamBOdds?: boolean
    allOutcomes?: boolean
    timestamp?: boolean
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oddsSnapshot"]>

  export type OddsSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fixtureId?: boolean
    source?: boolean
    market?: boolean
    teamAOdds?: boolean
    drawOdds?: boolean
    teamBOdds?: boolean
    allOutcomes?: boolean
    timestamp?: boolean
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oddsSnapshot"]>

  export type OddsSnapshotSelectScalar = {
    id?: boolean
    fixtureId?: boolean
    source?: boolean
    market?: boolean
    teamAOdds?: boolean
    drawOdds?: boolean
    teamBOdds?: boolean
    allOutcomes?: boolean
    timestamp?: boolean
  }

  export type OddsSnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }
  export type OddsSnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }

  export type $OddsSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OddsSnapshot"
    objects: {
      fixture: Prisma.$FixturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fixtureId: number
      source: string
      market: string
      teamAOdds: number
      drawOdds: number | null
      teamBOdds: number
      allOutcomes: Prisma.JsonValue | null
      timestamp: Date
    }, ExtArgs["result"]["oddsSnapshot"]>
    composites: {}
  }

  type OddsSnapshotGetPayload<S extends boolean | null | undefined | OddsSnapshotDefaultArgs> = $Result.GetResult<Prisma.$OddsSnapshotPayload, S>

  type OddsSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OddsSnapshotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OddsSnapshotCountAggregateInputType | true
    }

  export interface OddsSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OddsSnapshot'], meta: { name: 'OddsSnapshot' } }
    /**
     * Find zero or one OddsSnapshot that matches the filter.
     * @param {OddsSnapshotFindUniqueArgs} args - Arguments to find a OddsSnapshot
     * @example
     * // Get one OddsSnapshot
     * const oddsSnapshot = await prisma.oddsSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OddsSnapshotFindUniqueArgs>(args: SelectSubset<T, OddsSnapshotFindUniqueArgs<ExtArgs>>): Prisma__OddsSnapshotClient<$Result.GetResult<Prisma.$OddsSnapshotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OddsSnapshot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OddsSnapshotFindUniqueOrThrowArgs} args - Arguments to find a OddsSnapshot
     * @example
     * // Get one OddsSnapshot
     * const oddsSnapshot = await prisma.oddsSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OddsSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, OddsSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OddsSnapshotClient<$Result.GetResult<Prisma.$OddsSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OddsSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OddsSnapshotFindFirstArgs} args - Arguments to find a OddsSnapshot
     * @example
     * // Get one OddsSnapshot
     * const oddsSnapshot = await prisma.oddsSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OddsSnapshotFindFirstArgs>(args?: SelectSubset<T, OddsSnapshotFindFirstArgs<ExtArgs>>): Prisma__OddsSnapshotClient<$Result.GetResult<Prisma.$OddsSnapshotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OddsSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OddsSnapshotFindFirstOrThrowArgs} args - Arguments to find a OddsSnapshot
     * @example
     * // Get one OddsSnapshot
     * const oddsSnapshot = await prisma.oddsSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OddsSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, OddsSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__OddsSnapshotClient<$Result.GetResult<Prisma.$OddsSnapshotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OddsSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OddsSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OddsSnapshots
     * const oddsSnapshots = await prisma.oddsSnapshot.findMany()
     * 
     * // Get first 10 OddsSnapshots
     * const oddsSnapshots = await prisma.oddsSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oddsSnapshotWithIdOnly = await prisma.oddsSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OddsSnapshotFindManyArgs>(args?: SelectSubset<T, OddsSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OddsSnapshotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OddsSnapshot.
     * @param {OddsSnapshotCreateArgs} args - Arguments to create a OddsSnapshot.
     * @example
     * // Create one OddsSnapshot
     * const OddsSnapshot = await prisma.oddsSnapshot.create({
     *   data: {
     *     // ... data to create a OddsSnapshot
     *   }
     * })
     * 
     */
    create<T extends OddsSnapshotCreateArgs>(args: SelectSubset<T, OddsSnapshotCreateArgs<ExtArgs>>): Prisma__OddsSnapshotClient<$Result.GetResult<Prisma.$OddsSnapshotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OddsSnapshots.
     * @param {OddsSnapshotCreateManyArgs} args - Arguments to create many OddsSnapshots.
     * @example
     * // Create many OddsSnapshots
     * const oddsSnapshot = await prisma.oddsSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OddsSnapshotCreateManyArgs>(args?: SelectSubset<T, OddsSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OddsSnapshots and returns the data saved in the database.
     * @param {OddsSnapshotCreateManyAndReturnArgs} args - Arguments to create many OddsSnapshots.
     * @example
     * // Create many OddsSnapshots
     * const oddsSnapshot = await prisma.oddsSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OddsSnapshots and only return the `id`
     * const oddsSnapshotWithIdOnly = await prisma.oddsSnapshot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OddsSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, OddsSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OddsSnapshotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OddsSnapshot.
     * @param {OddsSnapshotDeleteArgs} args - Arguments to delete one OddsSnapshot.
     * @example
     * // Delete one OddsSnapshot
     * const OddsSnapshot = await prisma.oddsSnapshot.delete({
     *   where: {
     *     // ... filter to delete one OddsSnapshot
     *   }
     * })
     * 
     */
    delete<T extends OddsSnapshotDeleteArgs>(args: SelectSubset<T, OddsSnapshotDeleteArgs<ExtArgs>>): Prisma__OddsSnapshotClient<$Result.GetResult<Prisma.$OddsSnapshotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OddsSnapshot.
     * @param {OddsSnapshotUpdateArgs} args - Arguments to update one OddsSnapshot.
     * @example
     * // Update one OddsSnapshot
     * const oddsSnapshot = await prisma.oddsSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OddsSnapshotUpdateArgs>(args: SelectSubset<T, OddsSnapshotUpdateArgs<ExtArgs>>): Prisma__OddsSnapshotClient<$Result.GetResult<Prisma.$OddsSnapshotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OddsSnapshots.
     * @param {OddsSnapshotDeleteManyArgs} args - Arguments to filter OddsSnapshots to delete.
     * @example
     * // Delete a few OddsSnapshots
     * const { count } = await prisma.oddsSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OddsSnapshotDeleteManyArgs>(args?: SelectSubset<T, OddsSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OddsSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OddsSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OddsSnapshots
     * const oddsSnapshot = await prisma.oddsSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OddsSnapshotUpdateManyArgs>(args: SelectSubset<T, OddsSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OddsSnapshot.
     * @param {OddsSnapshotUpsertArgs} args - Arguments to update or create a OddsSnapshot.
     * @example
     * // Update or create a OddsSnapshot
     * const oddsSnapshot = await prisma.oddsSnapshot.upsert({
     *   create: {
     *     // ... data to create a OddsSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OddsSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends OddsSnapshotUpsertArgs>(args: SelectSubset<T, OddsSnapshotUpsertArgs<ExtArgs>>): Prisma__OddsSnapshotClient<$Result.GetResult<Prisma.$OddsSnapshotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OddsSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OddsSnapshotCountArgs} args - Arguments to filter OddsSnapshots to count.
     * @example
     * // Count the number of OddsSnapshots
     * const count = await prisma.oddsSnapshot.count({
     *   where: {
     *     // ... the filter for the OddsSnapshots we want to count
     *   }
     * })
    **/
    count<T extends OddsSnapshotCountArgs>(
      args?: Subset<T, OddsSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OddsSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OddsSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OddsSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OddsSnapshotAggregateArgs>(args: Subset<T, OddsSnapshotAggregateArgs>): Prisma.PrismaPromise<GetOddsSnapshotAggregateType<T>>

    /**
     * Group by OddsSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OddsSnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OddsSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OddsSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: OddsSnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OddsSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOddsSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OddsSnapshot model
   */
  readonly fields: OddsSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OddsSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OddsSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fixture<T extends FixtureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FixtureDefaultArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OddsSnapshot model
   */ 
  interface OddsSnapshotFieldRefs {
    readonly id: FieldRef<"OddsSnapshot", 'Int'>
    readonly fixtureId: FieldRef<"OddsSnapshot", 'Int'>
    readonly source: FieldRef<"OddsSnapshot", 'String'>
    readonly market: FieldRef<"OddsSnapshot", 'String'>
    readonly teamAOdds: FieldRef<"OddsSnapshot", 'Float'>
    readonly drawOdds: FieldRef<"OddsSnapshot", 'Float'>
    readonly teamBOdds: FieldRef<"OddsSnapshot", 'Float'>
    readonly allOutcomes: FieldRef<"OddsSnapshot", 'Json'>
    readonly timestamp: FieldRef<"OddsSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OddsSnapshot findUnique
   */
  export type OddsSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OddsSnapshot
     */
    select?: OddsSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OddsSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which OddsSnapshot to fetch.
     */
    where: OddsSnapshotWhereUniqueInput
  }

  /**
   * OddsSnapshot findUniqueOrThrow
   */
  export type OddsSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OddsSnapshot
     */
    select?: OddsSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OddsSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which OddsSnapshot to fetch.
     */
    where: OddsSnapshotWhereUniqueInput
  }

  /**
   * OddsSnapshot findFirst
   */
  export type OddsSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OddsSnapshot
     */
    select?: OddsSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OddsSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which OddsSnapshot to fetch.
     */
    where?: OddsSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OddsSnapshots to fetch.
     */
    orderBy?: OddsSnapshotOrderByWithRelationInput | OddsSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OddsSnapshots.
     */
    cursor?: OddsSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OddsSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OddsSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OddsSnapshots.
     */
    distinct?: OddsSnapshotScalarFieldEnum | OddsSnapshotScalarFieldEnum[]
  }

  /**
   * OddsSnapshot findFirstOrThrow
   */
  export type OddsSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OddsSnapshot
     */
    select?: OddsSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OddsSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which OddsSnapshot to fetch.
     */
    where?: OddsSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OddsSnapshots to fetch.
     */
    orderBy?: OddsSnapshotOrderByWithRelationInput | OddsSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OddsSnapshots.
     */
    cursor?: OddsSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OddsSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OddsSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OddsSnapshots.
     */
    distinct?: OddsSnapshotScalarFieldEnum | OddsSnapshotScalarFieldEnum[]
  }

  /**
   * OddsSnapshot findMany
   */
  export type OddsSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OddsSnapshot
     */
    select?: OddsSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OddsSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which OddsSnapshots to fetch.
     */
    where?: OddsSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OddsSnapshots to fetch.
     */
    orderBy?: OddsSnapshotOrderByWithRelationInput | OddsSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OddsSnapshots.
     */
    cursor?: OddsSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OddsSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OddsSnapshots.
     */
    skip?: number
    distinct?: OddsSnapshotScalarFieldEnum | OddsSnapshotScalarFieldEnum[]
  }

  /**
   * OddsSnapshot create
   */
  export type OddsSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OddsSnapshot
     */
    select?: OddsSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OddsSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a OddsSnapshot.
     */
    data: XOR<OddsSnapshotCreateInput, OddsSnapshotUncheckedCreateInput>
  }

  /**
   * OddsSnapshot createMany
   */
  export type OddsSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OddsSnapshots.
     */
    data: OddsSnapshotCreateManyInput | OddsSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OddsSnapshot createManyAndReturn
   */
  export type OddsSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OddsSnapshot
     */
    select?: OddsSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OddsSnapshots.
     */
    data: OddsSnapshotCreateManyInput | OddsSnapshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OddsSnapshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OddsSnapshot update
   */
  export type OddsSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OddsSnapshot
     */
    select?: OddsSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OddsSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a OddsSnapshot.
     */
    data: XOR<OddsSnapshotUpdateInput, OddsSnapshotUncheckedUpdateInput>
    /**
     * Choose, which OddsSnapshot to update.
     */
    where: OddsSnapshotWhereUniqueInput
  }

  /**
   * OddsSnapshot updateMany
   */
  export type OddsSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OddsSnapshots.
     */
    data: XOR<OddsSnapshotUpdateManyMutationInput, OddsSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which OddsSnapshots to update
     */
    where?: OddsSnapshotWhereInput
  }

  /**
   * OddsSnapshot upsert
   */
  export type OddsSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OddsSnapshot
     */
    select?: OddsSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OddsSnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the OddsSnapshot to update in case it exists.
     */
    where: OddsSnapshotWhereUniqueInput
    /**
     * In case the OddsSnapshot found by the `where` argument doesn't exist, create a new OddsSnapshot with this data.
     */
    create: XOR<OddsSnapshotCreateInput, OddsSnapshotUncheckedCreateInput>
    /**
     * In case the OddsSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OddsSnapshotUpdateInput, OddsSnapshotUncheckedUpdateInput>
  }

  /**
   * OddsSnapshot delete
   */
  export type OddsSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OddsSnapshot
     */
    select?: OddsSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OddsSnapshotInclude<ExtArgs> | null
    /**
     * Filter which OddsSnapshot to delete.
     */
    where: OddsSnapshotWhereUniqueInput
  }

  /**
   * OddsSnapshot deleteMany
   */
  export type OddsSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OddsSnapshots to delete
     */
    where?: OddsSnapshotWhereInput
  }

  /**
   * OddsSnapshot without action
   */
  export type OddsSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OddsSnapshot
     */
    select?: OddsSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OddsSnapshotInclude<ExtArgs> | null
  }


  /**
   * Model MatchEvent
   */

  export type AggregateMatchEvent = {
    _count: MatchEventCountAggregateOutputType | null
    _avg: MatchEventAvgAggregateOutputType | null
    _sum: MatchEventSumAggregateOutputType | null
    _min: MatchEventMinAggregateOutputType | null
    _max: MatchEventMaxAggregateOutputType | null
  }

  export type MatchEventAvgAggregateOutputType = {
    id: number | null
    fixtureId: number | null
    minute: number | null
    period: number | null
  }

  export type MatchEventSumAggregateOutputType = {
    id: number | null
    fixtureId: number | null
    minute: number | null
    period: number | null
  }

  export type MatchEventMinAggregateOutputType = {
    id: number | null
    fixtureId: number | null
    eventType: string | null
    minute: number | null
    period: number | null
    team: string | null
    player: string | null
    description: string | null
    statKey: string | null
    occurredAt: Date | null
  }

  export type MatchEventMaxAggregateOutputType = {
    id: number | null
    fixtureId: number | null
    eventType: string | null
    minute: number | null
    period: number | null
    team: string | null
    player: string | null
    description: string | null
    statKey: string | null
    occurredAt: Date | null
  }

  export type MatchEventCountAggregateOutputType = {
    id: number
    fixtureId: number
    eventType: number
    minute: number
    period: number
    team: number
    player: number
    description: number
    statKey: number
    occurredAt: number
    _all: number
  }


  export type MatchEventAvgAggregateInputType = {
    id?: true
    fixtureId?: true
    minute?: true
    period?: true
  }

  export type MatchEventSumAggregateInputType = {
    id?: true
    fixtureId?: true
    minute?: true
    period?: true
  }

  export type MatchEventMinAggregateInputType = {
    id?: true
    fixtureId?: true
    eventType?: true
    minute?: true
    period?: true
    team?: true
    player?: true
    description?: true
    statKey?: true
    occurredAt?: true
  }

  export type MatchEventMaxAggregateInputType = {
    id?: true
    fixtureId?: true
    eventType?: true
    minute?: true
    period?: true
    team?: true
    player?: true
    description?: true
    statKey?: true
    occurredAt?: true
  }

  export type MatchEventCountAggregateInputType = {
    id?: true
    fixtureId?: true
    eventType?: true
    minute?: true
    period?: true
    team?: true
    player?: true
    description?: true
    statKey?: true
    occurredAt?: true
    _all?: true
  }

  export type MatchEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchEvent to aggregate.
     */
    where?: MatchEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchEvents to fetch.
     */
    orderBy?: MatchEventOrderByWithRelationInput | MatchEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchEvents
    **/
    _count?: true | MatchEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchEventMaxAggregateInputType
  }

  export type GetMatchEventAggregateType<T extends MatchEventAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchEvent[P]>
      : GetScalarType<T[P], AggregateMatchEvent[P]>
  }




  export type MatchEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchEventWhereInput
    orderBy?: MatchEventOrderByWithAggregationInput | MatchEventOrderByWithAggregationInput[]
    by: MatchEventScalarFieldEnum[] | MatchEventScalarFieldEnum
    having?: MatchEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchEventCountAggregateInputType | true
    _avg?: MatchEventAvgAggregateInputType
    _sum?: MatchEventSumAggregateInputType
    _min?: MatchEventMinAggregateInputType
    _max?: MatchEventMaxAggregateInputType
  }

  export type MatchEventGroupByOutputType = {
    id: number
    fixtureId: number
    eventType: string
    minute: number
    period: number
    team: string
    player: string | null
    description: string | null
    statKey: string | null
    occurredAt: Date
    _count: MatchEventCountAggregateOutputType | null
    _avg: MatchEventAvgAggregateOutputType | null
    _sum: MatchEventSumAggregateOutputType | null
    _min: MatchEventMinAggregateOutputType | null
    _max: MatchEventMaxAggregateOutputType | null
  }

  type GetMatchEventGroupByPayload<T extends MatchEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchEventGroupByOutputType[P]>
            : GetScalarType<T[P], MatchEventGroupByOutputType[P]>
        }
      >
    >


  export type MatchEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fixtureId?: boolean
    eventType?: boolean
    minute?: boolean
    period?: boolean
    team?: boolean
    player?: boolean
    description?: boolean
    statKey?: boolean
    occurredAt?: boolean
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchEvent"]>

  export type MatchEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fixtureId?: boolean
    eventType?: boolean
    minute?: boolean
    period?: boolean
    team?: boolean
    player?: boolean
    description?: boolean
    statKey?: boolean
    occurredAt?: boolean
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchEvent"]>

  export type MatchEventSelectScalar = {
    id?: boolean
    fixtureId?: boolean
    eventType?: boolean
    minute?: boolean
    period?: boolean
    team?: boolean
    player?: boolean
    description?: boolean
    statKey?: boolean
    occurredAt?: boolean
  }

  export type MatchEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }
  export type MatchEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }

  export type $MatchEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchEvent"
    objects: {
      fixture: Prisma.$FixturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fixtureId: number
      eventType: string
      minute: number
      period: number
      team: string
      player: string | null
      description: string | null
      statKey: string | null
      occurredAt: Date
    }, ExtArgs["result"]["matchEvent"]>
    composites: {}
  }

  type MatchEventGetPayload<S extends boolean | null | undefined | MatchEventDefaultArgs> = $Result.GetResult<Prisma.$MatchEventPayload, S>

  type MatchEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatchEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatchEventCountAggregateInputType | true
    }

  export interface MatchEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchEvent'], meta: { name: 'MatchEvent' } }
    /**
     * Find zero or one MatchEvent that matches the filter.
     * @param {MatchEventFindUniqueArgs} args - Arguments to find a MatchEvent
     * @example
     * // Get one MatchEvent
     * const matchEvent = await prisma.matchEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchEventFindUniqueArgs>(args: SelectSubset<T, MatchEventFindUniqueArgs<ExtArgs>>): Prisma__MatchEventClient<$Result.GetResult<Prisma.$MatchEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MatchEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MatchEventFindUniqueOrThrowArgs} args - Arguments to find a MatchEvent
     * @example
     * // Get one MatchEvent
     * const matchEvent = await prisma.matchEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchEventFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchEventClient<$Result.GetResult<Prisma.$MatchEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MatchEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchEventFindFirstArgs} args - Arguments to find a MatchEvent
     * @example
     * // Get one MatchEvent
     * const matchEvent = await prisma.matchEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchEventFindFirstArgs>(args?: SelectSubset<T, MatchEventFindFirstArgs<ExtArgs>>): Prisma__MatchEventClient<$Result.GetResult<Prisma.$MatchEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MatchEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchEventFindFirstOrThrowArgs} args - Arguments to find a MatchEvent
     * @example
     * // Get one MatchEvent
     * const matchEvent = await prisma.matchEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchEventFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchEventClient<$Result.GetResult<Prisma.$MatchEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MatchEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchEvents
     * const matchEvents = await prisma.matchEvent.findMany()
     * 
     * // Get first 10 MatchEvents
     * const matchEvents = await prisma.matchEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchEventWithIdOnly = await prisma.matchEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchEventFindManyArgs>(args?: SelectSubset<T, MatchEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MatchEvent.
     * @param {MatchEventCreateArgs} args - Arguments to create a MatchEvent.
     * @example
     * // Create one MatchEvent
     * const MatchEvent = await prisma.matchEvent.create({
     *   data: {
     *     // ... data to create a MatchEvent
     *   }
     * })
     * 
     */
    create<T extends MatchEventCreateArgs>(args: SelectSubset<T, MatchEventCreateArgs<ExtArgs>>): Prisma__MatchEventClient<$Result.GetResult<Prisma.$MatchEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MatchEvents.
     * @param {MatchEventCreateManyArgs} args - Arguments to create many MatchEvents.
     * @example
     * // Create many MatchEvents
     * const matchEvent = await prisma.matchEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchEventCreateManyArgs>(args?: SelectSubset<T, MatchEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchEvents and returns the data saved in the database.
     * @param {MatchEventCreateManyAndReturnArgs} args - Arguments to create many MatchEvents.
     * @example
     * // Create many MatchEvents
     * const matchEvent = await prisma.matchEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchEvents and only return the `id`
     * const matchEventWithIdOnly = await prisma.matchEvent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchEventCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchEventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MatchEvent.
     * @param {MatchEventDeleteArgs} args - Arguments to delete one MatchEvent.
     * @example
     * // Delete one MatchEvent
     * const MatchEvent = await prisma.matchEvent.delete({
     *   where: {
     *     // ... filter to delete one MatchEvent
     *   }
     * })
     * 
     */
    delete<T extends MatchEventDeleteArgs>(args: SelectSubset<T, MatchEventDeleteArgs<ExtArgs>>): Prisma__MatchEventClient<$Result.GetResult<Prisma.$MatchEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MatchEvent.
     * @param {MatchEventUpdateArgs} args - Arguments to update one MatchEvent.
     * @example
     * // Update one MatchEvent
     * const matchEvent = await prisma.matchEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchEventUpdateArgs>(args: SelectSubset<T, MatchEventUpdateArgs<ExtArgs>>): Prisma__MatchEventClient<$Result.GetResult<Prisma.$MatchEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MatchEvents.
     * @param {MatchEventDeleteManyArgs} args - Arguments to filter MatchEvents to delete.
     * @example
     * // Delete a few MatchEvents
     * const { count } = await prisma.matchEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchEventDeleteManyArgs>(args?: SelectSubset<T, MatchEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchEvents
     * const matchEvent = await prisma.matchEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchEventUpdateManyArgs>(args: SelectSubset<T, MatchEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MatchEvent.
     * @param {MatchEventUpsertArgs} args - Arguments to update or create a MatchEvent.
     * @example
     * // Update or create a MatchEvent
     * const matchEvent = await prisma.matchEvent.upsert({
     *   create: {
     *     // ... data to create a MatchEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchEvent we want to update
     *   }
     * })
     */
    upsert<T extends MatchEventUpsertArgs>(args: SelectSubset<T, MatchEventUpsertArgs<ExtArgs>>): Prisma__MatchEventClient<$Result.GetResult<Prisma.$MatchEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MatchEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchEventCountArgs} args - Arguments to filter MatchEvents to count.
     * @example
     * // Count the number of MatchEvents
     * const count = await prisma.matchEvent.count({
     *   where: {
     *     // ... the filter for the MatchEvents we want to count
     *   }
     * })
    **/
    count<T extends MatchEventCountArgs>(
      args?: Subset<T, MatchEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchEventAggregateArgs>(args: Subset<T, MatchEventAggregateArgs>): Prisma.PrismaPromise<GetMatchEventAggregateType<T>>

    /**
     * Group by MatchEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchEventGroupByArgs['orderBy'] }
        : { orderBy?: MatchEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchEvent model
   */
  readonly fields: MatchEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fixture<T extends FixtureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FixtureDefaultArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatchEvent model
   */ 
  interface MatchEventFieldRefs {
    readonly id: FieldRef<"MatchEvent", 'Int'>
    readonly fixtureId: FieldRef<"MatchEvent", 'Int'>
    readonly eventType: FieldRef<"MatchEvent", 'String'>
    readonly minute: FieldRef<"MatchEvent", 'Int'>
    readonly period: FieldRef<"MatchEvent", 'Int'>
    readonly team: FieldRef<"MatchEvent", 'String'>
    readonly player: FieldRef<"MatchEvent", 'String'>
    readonly description: FieldRef<"MatchEvent", 'String'>
    readonly statKey: FieldRef<"MatchEvent", 'String'>
    readonly occurredAt: FieldRef<"MatchEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchEvent findUnique
   */
  export type MatchEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null
    /**
     * Filter, which MatchEvent to fetch.
     */
    where: MatchEventWhereUniqueInput
  }

  /**
   * MatchEvent findUniqueOrThrow
   */
  export type MatchEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null
    /**
     * Filter, which MatchEvent to fetch.
     */
    where: MatchEventWhereUniqueInput
  }

  /**
   * MatchEvent findFirst
   */
  export type MatchEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null
    /**
     * Filter, which MatchEvent to fetch.
     */
    where?: MatchEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchEvents to fetch.
     */
    orderBy?: MatchEventOrderByWithRelationInput | MatchEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchEvents.
     */
    cursor?: MatchEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchEvents.
     */
    distinct?: MatchEventScalarFieldEnum | MatchEventScalarFieldEnum[]
  }

  /**
   * MatchEvent findFirstOrThrow
   */
  export type MatchEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null
    /**
     * Filter, which MatchEvent to fetch.
     */
    where?: MatchEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchEvents to fetch.
     */
    orderBy?: MatchEventOrderByWithRelationInput | MatchEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchEvents.
     */
    cursor?: MatchEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchEvents.
     */
    distinct?: MatchEventScalarFieldEnum | MatchEventScalarFieldEnum[]
  }

  /**
   * MatchEvent findMany
   */
  export type MatchEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null
    /**
     * Filter, which MatchEvents to fetch.
     */
    where?: MatchEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchEvents to fetch.
     */
    orderBy?: MatchEventOrderByWithRelationInput | MatchEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchEvents.
     */
    cursor?: MatchEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchEvents.
     */
    skip?: number
    distinct?: MatchEventScalarFieldEnum | MatchEventScalarFieldEnum[]
  }

  /**
   * MatchEvent create
   */
  export type MatchEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchEvent.
     */
    data: XOR<MatchEventCreateInput, MatchEventUncheckedCreateInput>
  }

  /**
   * MatchEvent createMany
   */
  export type MatchEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchEvents.
     */
    data: MatchEventCreateManyInput | MatchEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatchEvent createManyAndReturn
   */
  export type MatchEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MatchEvents.
     */
    data: MatchEventCreateManyInput | MatchEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchEvent update
   */
  export type MatchEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchEvent.
     */
    data: XOR<MatchEventUpdateInput, MatchEventUncheckedUpdateInput>
    /**
     * Choose, which MatchEvent to update.
     */
    where: MatchEventWhereUniqueInput
  }

  /**
   * MatchEvent updateMany
   */
  export type MatchEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchEvents.
     */
    data: XOR<MatchEventUpdateManyMutationInput, MatchEventUncheckedUpdateManyInput>
    /**
     * Filter which MatchEvents to update
     */
    where?: MatchEventWhereInput
  }

  /**
   * MatchEvent upsert
   */
  export type MatchEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchEvent to update in case it exists.
     */
    where: MatchEventWhereUniqueInput
    /**
     * In case the MatchEvent found by the `where` argument doesn't exist, create a new MatchEvent with this data.
     */
    create: XOR<MatchEventCreateInput, MatchEventUncheckedCreateInput>
    /**
     * In case the MatchEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchEventUpdateInput, MatchEventUncheckedUpdateInput>
  }

  /**
   * MatchEvent delete
   */
  export type MatchEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null
    /**
     * Filter which MatchEvent to delete.
     */
    where: MatchEventWhereUniqueInput
  }

  /**
   * MatchEvent deleteMany
   */
  export type MatchEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchEvents to delete
     */
    where?: MatchEventWhereInput
  }

  /**
   * MatchEvent without action
   */
  export type MatchEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null
  }


  /**
   * Model Signal
   */

  export type AggregateSignal = {
    _count: SignalCountAggregateOutputType | null
    _avg: SignalAvgAggregateOutputType | null
    _sum: SignalSumAggregateOutputType | null
    _min: SignalMinAggregateOutputType | null
    _max: SignalMaxAggregateOutputType | null
  }

  export type SignalAvgAggregateOutputType = {
    id: number | null
    fixtureId: number | null
  }

  export type SignalSumAggregateOutputType = {
    id: number | null
    fixtureId: number | null
  }

  export type SignalMinAggregateOutputType = {
    id: number | null
    fixtureId: number | null
    type: string | null
    severity: string | null
    description: string | null
    triggeredAt: Date | null
  }

  export type SignalMaxAggregateOutputType = {
    id: number | null
    fixtureId: number | null
    type: string | null
    severity: string | null
    description: string | null
    triggeredAt: Date | null
  }

  export type SignalCountAggregateOutputType = {
    id: number
    fixtureId: number
    type: number
    severity: number
    description: number
    metadata: number
    triggeredAt: number
    _all: number
  }


  export type SignalAvgAggregateInputType = {
    id?: true
    fixtureId?: true
  }

  export type SignalSumAggregateInputType = {
    id?: true
    fixtureId?: true
  }

  export type SignalMinAggregateInputType = {
    id?: true
    fixtureId?: true
    type?: true
    severity?: true
    description?: true
    triggeredAt?: true
  }

  export type SignalMaxAggregateInputType = {
    id?: true
    fixtureId?: true
    type?: true
    severity?: true
    description?: true
    triggeredAt?: true
  }

  export type SignalCountAggregateInputType = {
    id?: true
    fixtureId?: true
    type?: true
    severity?: true
    description?: true
    metadata?: true
    triggeredAt?: true
    _all?: true
  }

  export type SignalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signal to aggregate.
     */
    where?: SignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signals to fetch.
     */
    orderBy?: SignalOrderByWithRelationInput | SignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Signals
    **/
    _count?: true | SignalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SignalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SignalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignalMaxAggregateInputType
  }

  export type GetSignalAggregateType<T extends SignalAggregateArgs> = {
        [P in keyof T & keyof AggregateSignal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSignal[P]>
      : GetScalarType<T[P], AggregateSignal[P]>
  }




  export type SignalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalWhereInput
    orderBy?: SignalOrderByWithAggregationInput | SignalOrderByWithAggregationInput[]
    by: SignalScalarFieldEnum[] | SignalScalarFieldEnum
    having?: SignalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignalCountAggregateInputType | true
    _avg?: SignalAvgAggregateInputType
    _sum?: SignalSumAggregateInputType
    _min?: SignalMinAggregateInputType
    _max?: SignalMaxAggregateInputType
  }

  export type SignalGroupByOutputType = {
    id: number
    fixtureId: number
    type: string
    severity: string
    description: string
    metadata: JsonValue | null
    triggeredAt: Date
    _count: SignalCountAggregateOutputType | null
    _avg: SignalAvgAggregateOutputType | null
    _sum: SignalSumAggregateOutputType | null
    _min: SignalMinAggregateOutputType | null
    _max: SignalMaxAggregateOutputType | null
  }

  type GetSignalGroupByPayload<T extends SignalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignalGroupByOutputType[P]>
            : GetScalarType<T[P], SignalGroupByOutputType[P]>
        }
      >
    >


  export type SignalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fixtureId?: boolean
    type?: boolean
    severity?: boolean
    description?: boolean
    metadata?: boolean
    triggeredAt?: boolean
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signal"]>

  export type SignalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fixtureId?: boolean
    type?: boolean
    severity?: boolean
    description?: boolean
    metadata?: boolean
    triggeredAt?: boolean
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signal"]>

  export type SignalSelectScalar = {
    id?: boolean
    fixtureId?: boolean
    type?: boolean
    severity?: boolean
    description?: boolean
    metadata?: boolean
    triggeredAt?: boolean
  }

  export type SignalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }
  export type SignalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }

  export type $SignalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Signal"
    objects: {
      fixture: Prisma.$FixturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fixtureId: number
      type: string
      severity: string
      description: string
      metadata: Prisma.JsonValue | null
      triggeredAt: Date
    }, ExtArgs["result"]["signal"]>
    composites: {}
  }

  type SignalGetPayload<S extends boolean | null | undefined | SignalDefaultArgs> = $Result.GetResult<Prisma.$SignalPayload, S>

  type SignalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SignalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SignalCountAggregateInputType | true
    }

  export interface SignalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Signal'], meta: { name: 'Signal' } }
    /**
     * Find zero or one Signal that matches the filter.
     * @param {SignalFindUniqueArgs} args - Arguments to find a Signal
     * @example
     * // Get one Signal
     * const signal = await prisma.signal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SignalFindUniqueArgs>(args: SelectSubset<T, SignalFindUniqueArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Signal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SignalFindUniqueOrThrowArgs} args - Arguments to find a Signal
     * @example
     * // Get one Signal
     * const signal = await prisma.signal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SignalFindUniqueOrThrowArgs>(args: SelectSubset<T, SignalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Signal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalFindFirstArgs} args - Arguments to find a Signal
     * @example
     * // Get one Signal
     * const signal = await prisma.signal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SignalFindFirstArgs>(args?: SelectSubset<T, SignalFindFirstArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Signal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalFindFirstOrThrowArgs} args - Arguments to find a Signal
     * @example
     * // Get one Signal
     * const signal = await prisma.signal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SignalFindFirstOrThrowArgs>(args?: SelectSubset<T, SignalFindFirstOrThrowArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Signals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Signals
     * const signals = await prisma.signal.findMany()
     * 
     * // Get first 10 Signals
     * const signals = await prisma.signal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signalWithIdOnly = await prisma.signal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SignalFindManyArgs>(args?: SelectSubset<T, SignalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Signal.
     * @param {SignalCreateArgs} args - Arguments to create a Signal.
     * @example
     * // Create one Signal
     * const Signal = await prisma.signal.create({
     *   data: {
     *     // ... data to create a Signal
     *   }
     * })
     * 
     */
    create<T extends SignalCreateArgs>(args: SelectSubset<T, SignalCreateArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Signals.
     * @param {SignalCreateManyArgs} args - Arguments to create many Signals.
     * @example
     * // Create many Signals
     * const signal = await prisma.signal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SignalCreateManyArgs>(args?: SelectSubset<T, SignalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Signals and returns the data saved in the database.
     * @param {SignalCreateManyAndReturnArgs} args - Arguments to create many Signals.
     * @example
     * // Create many Signals
     * const signal = await prisma.signal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Signals and only return the `id`
     * const signalWithIdOnly = await prisma.signal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SignalCreateManyAndReturnArgs>(args?: SelectSubset<T, SignalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Signal.
     * @param {SignalDeleteArgs} args - Arguments to delete one Signal.
     * @example
     * // Delete one Signal
     * const Signal = await prisma.signal.delete({
     *   where: {
     *     // ... filter to delete one Signal
     *   }
     * })
     * 
     */
    delete<T extends SignalDeleteArgs>(args: SelectSubset<T, SignalDeleteArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Signal.
     * @param {SignalUpdateArgs} args - Arguments to update one Signal.
     * @example
     * // Update one Signal
     * const signal = await prisma.signal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SignalUpdateArgs>(args: SelectSubset<T, SignalUpdateArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Signals.
     * @param {SignalDeleteManyArgs} args - Arguments to filter Signals to delete.
     * @example
     * // Delete a few Signals
     * const { count } = await prisma.signal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SignalDeleteManyArgs>(args?: SelectSubset<T, SignalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Signals
     * const signal = await prisma.signal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SignalUpdateManyArgs>(args: SelectSubset<T, SignalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Signal.
     * @param {SignalUpsertArgs} args - Arguments to update or create a Signal.
     * @example
     * // Update or create a Signal
     * const signal = await prisma.signal.upsert({
     *   create: {
     *     // ... data to create a Signal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Signal we want to update
     *   }
     * })
     */
    upsert<T extends SignalUpsertArgs>(args: SelectSubset<T, SignalUpsertArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Signals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalCountArgs} args - Arguments to filter Signals to count.
     * @example
     * // Count the number of Signals
     * const count = await prisma.signal.count({
     *   where: {
     *     // ... the filter for the Signals we want to count
     *   }
     * })
    **/
    count<T extends SignalCountArgs>(
      args?: Subset<T, SignalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Signal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SignalAggregateArgs>(args: Subset<T, SignalAggregateArgs>): Prisma.PrismaPromise<GetSignalAggregateType<T>>

    /**
     * Group by Signal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SignalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignalGroupByArgs['orderBy'] }
        : { orderBy?: SignalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SignalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Signal model
   */
  readonly fields: SignalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Signal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fixture<T extends FixtureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FixtureDefaultArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Signal model
   */ 
  interface SignalFieldRefs {
    readonly id: FieldRef<"Signal", 'Int'>
    readonly fixtureId: FieldRef<"Signal", 'Int'>
    readonly type: FieldRef<"Signal", 'String'>
    readonly severity: FieldRef<"Signal", 'String'>
    readonly description: FieldRef<"Signal", 'String'>
    readonly metadata: FieldRef<"Signal", 'Json'>
    readonly triggeredAt: FieldRef<"Signal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Signal findUnique
   */
  export type SignalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter, which Signal to fetch.
     */
    where: SignalWhereUniqueInput
  }

  /**
   * Signal findUniqueOrThrow
   */
  export type SignalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter, which Signal to fetch.
     */
    where: SignalWhereUniqueInput
  }

  /**
   * Signal findFirst
   */
  export type SignalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter, which Signal to fetch.
     */
    where?: SignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signals to fetch.
     */
    orderBy?: SignalOrderByWithRelationInput | SignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signals.
     */
    cursor?: SignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signals.
     */
    distinct?: SignalScalarFieldEnum | SignalScalarFieldEnum[]
  }

  /**
   * Signal findFirstOrThrow
   */
  export type SignalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter, which Signal to fetch.
     */
    where?: SignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signals to fetch.
     */
    orderBy?: SignalOrderByWithRelationInput | SignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signals.
     */
    cursor?: SignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signals.
     */
    distinct?: SignalScalarFieldEnum | SignalScalarFieldEnum[]
  }

  /**
   * Signal findMany
   */
  export type SignalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter, which Signals to fetch.
     */
    where?: SignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signals to fetch.
     */
    orderBy?: SignalOrderByWithRelationInput | SignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Signals.
     */
    cursor?: SignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signals.
     */
    skip?: number
    distinct?: SignalScalarFieldEnum | SignalScalarFieldEnum[]
  }

  /**
   * Signal create
   */
  export type SignalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * The data needed to create a Signal.
     */
    data: XOR<SignalCreateInput, SignalUncheckedCreateInput>
  }

  /**
   * Signal createMany
   */
  export type SignalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Signals.
     */
    data: SignalCreateManyInput | SignalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Signal createManyAndReturn
   */
  export type SignalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Signals.
     */
    data: SignalCreateManyInput | SignalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Signal update
   */
  export type SignalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * The data needed to update a Signal.
     */
    data: XOR<SignalUpdateInput, SignalUncheckedUpdateInput>
    /**
     * Choose, which Signal to update.
     */
    where: SignalWhereUniqueInput
  }

  /**
   * Signal updateMany
   */
  export type SignalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Signals.
     */
    data: XOR<SignalUpdateManyMutationInput, SignalUncheckedUpdateManyInput>
    /**
     * Filter which Signals to update
     */
    where?: SignalWhereInput
  }

  /**
   * Signal upsert
   */
  export type SignalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * The filter to search for the Signal to update in case it exists.
     */
    where: SignalWhereUniqueInput
    /**
     * In case the Signal found by the `where` argument doesn't exist, create a new Signal with this data.
     */
    create: XOR<SignalCreateInput, SignalUncheckedCreateInput>
    /**
     * In case the Signal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignalUpdateInput, SignalUncheckedUpdateInput>
  }

  /**
   * Signal delete
   */
  export type SignalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter which Signal to delete.
     */
    where: SignalWhereUniqueInput
  }

  /**
   * Signal deleteMany
   */
  export type SignalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signals to delete
     */
    where?: SignalWhereInput
  }

  /**
   * Signal without action
   */
  export type SignalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
  }


  /**
   * Model DecisionLog
   */

  export type AggregateDecisionLog = {
    _count: DecisionLogCountAggregateOutputType | null
    _avg: DecisionLogAvgAggregateOutputType | null
    _sum: DecisionLogSumAggregateOutputType | null
    _min: DecisionLogMinAggregateOutputType | null
    _max: DecisionLogMaxAggregateOutputType | null
  }

  export type DecisionLogAvgAggregateOutputType = {
    id: number | null
    agentId: number | null
    fixtureId: number | null
    stakePortion: number | null
    confidence: number | null
    totalBankroll: Decimal | null
    betId: number | null
  }

  export type DecisionLogSumAggregateOutputType = {
    id: number | null
    agentId: number | null
    fixtureId: number | null
    stakePortion: number | null
    confidence: number | null
    totalBankroll: Decimal | null
    betId: number | null
  }

  export type DecisionLogMinAggregateOutputType = {
    id: number | null
    agentId: number | null
    decisionTime: Date | null
    reasoning: string | null
    operation: string | null
    fixtureId: number | null
    market: string | null
    selection: string | null
    stakePortion: number | null
    confidence: number | null
    totalBankroll: Decimal | null
    executed: boolean | null
    betId: number | null
    signalType: string | null
    promptSnapshot: string | null
    reasoningSnapshot: string | null
    decisionSnapshot: string | null
    createdAt: Date | null
  }

  export type DecisionLogMaxAggregateOutputType = {
    id: number | null
    agentId: number | null
    decisionTime: Date | null
    reasoning: string | null
    operation: string | null
    fixtureId: number | null
    market: string | null
    selection: string | null
    stakePortion: number | null
    confidence: number | null
    totalBankroll: Decimal | null
    executed: boolean | null
    betId: number | null
    signalType: string | null
    promptSnapshot: string | null
    reasoningSnapshot: string | null
    decisionSnapshot: string | null
    createdAt: Date | null
  }

  export type DecisionLogCountAggregateOutputType = {
    id: number
    agentId: number
    decisionTime: number
    reasoning: number
    operation: number
    fixtureId: number
    market: number
    selection: number
    stakePortion: number
    confidence: number
    totalBankroll: number
    executed: number
    betId: number
    signalType: number
    promptSnapshot: number
    reasoningSnapshot: number
    decisionSnapshot: number
    createdAt: number
    _all: number
  }


  export type DecisionLogAvgAggregateInputType = {
    id?: true
    agentId?: true
    fixtureId?: true
    stakePortion?: true
    confidence?: true
    totalBankroll?: true
    betId?: true
  }

  export type DecisionLogSumAggregateInputType = {
    id?: true
    agentId?: true
    fixtureId?: true
    stakePortion?: true
    confidence?: true
    totalBankroll?: true
    betId?: true
  }

  export type DecisionLogMinAggregateInputType = {
    id?: true
    agentId?: true
    decisionTime?: true
    reasoning?: true
    operation?: true
    fixtureId?: true
    market?: true
    selection?: true
    stakePortion?: true
    confidence?: true
    totalBankroll?: true
    executed?: true
    betId?: true
    signalType?: true
    promptSnapshot?: true
    reasoningSnapshot?: true
    decisionSnapshot?: true
    createdAt?: true
  }

  export type DecisionLogMaxAggregateInputType = {
    id?: true
    agentId?: true
    decisionTime?: true
    reasoning?: true
    operation?: true
    fixtureId?: true
    market?: true
    selection?: true
    stakePortion?: true
    confidence?: true
    totalBankroll?: true
    executed?: true
    betId?: true
    signalType?: true
    promptSnapshot?: true
    reasoningSnapshot?: true
    decisionSnapshot?: true
    createdAt?: true
  }

  export type DecisionLogCountAggregateInputType = {
    id?: true
    agentId?: true
    decisionTime?: true
    reasoning?: true
    operation?: true
    fixtureId?: true
    market?: true
    selection?: true
    stakePortion?: true
    confidence?: true
    totalBankroll?: true
    executed?: true
    betId?: true
    signalType?: true
    promptSnapshot?: true
    reasoningSnapshot?: true
    decisionSnapshot?: true
    createdAt?: true
    _all?: true
  }

  export type DecisionLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DecisionLog to aggregate.
     */
    where?: DecisionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DecisionLogs to fetch.
     */
    orderBy?: DecisionLogOrderByWithRelationInput | DecisionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DecisionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DecisionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DecisionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DecisionLogs
    **/
    _count?: true | DecisionLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DecisionLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DecisionLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DecisionLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DecisionLogMaxAggregateInputType
  }

  export type GetDecisionLogAggregateType<T extends DecisionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateDecisionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDecisionLog[P]>
      : GetScalarType<T[P], AggregateDecisionLog[P]>
  }




  export type DecisionLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecisionLogWhereInput
    orderBy?: DecisionLogOrderByWithAggregationInput | DecisionLogOrderByWithAggregationInput[]
    by: DecisionLogScalarFieldEnum[] | DecisionLogScalarFieldEnum
    having?: DecisionLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DecisionLogCountAggregateInputType | true
    _avg?: DecisionLogAvgAggregateInputType
    _sum?: DecisionLogSumAggregateInputType
    _min?: DecisionLogMinAggregateInputType
    _max?: DecisionLogMaxAggregateInputType
  }

  export type DecisionLogGroupByOutputType = {
    id: number
    agentId: number
    decisionTime: Date
    reasoning: string
    operation: string
    fixtureId: number | null
    market: string | null
    selection: string | null
    stakePortion: number
    confidence: number
    totalBankroll: Decimal
    executed: boolean
    betId: number | null
    signalType: string | null
    promptSnapshot: string | null
    reasoningSnapshot: string | null
    decisionSnapshot: string | null
    createdAt: Date
    _count: DecisionLogCountAggregateOutputType | null
    _avg: DecisionLogAvgAggregateOutputType | null
    _sum: DecisionLogSumAggregateOutputType | null
    _min: DecisionLogMinAggregateOutputType | null
    _max: DecisionLogMaxAggregateOutputType | null
  }

  type GetDecisionLogGroupByPayload<T extends DecisionLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DecisionLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DecisionLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DecisionLogGroupByOutputType[P]>
            : GetScalarType<T[P], DecisionLogGroupByOutputType[P]>
        }
      >
    >


  export type DecisionLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    decisionTime?: boolean
    reasoning?: boolean
    operation?: boolean
    fixtureId?: boolean
    market?: boolean
    selection?: boolean
    stakePortion?: boolean
    confidence?: boolean
    totalBankroll?: boolean
    executed?: boolean
    betId?: boolean
    signalType?: boolean
    promptSnapshot?: boolean
    reasoningSnapshot?: boolean
    decisionSnapshot?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decisionLog"]>

  export type DecisionLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    decisionTime?: boolean
    reasoning?: boolean
    operation?: boolean
    fixtureId?: boolean
    market?: boolean
    selection?: boolean
    stakePortion?: boolean
    confidence?: boolean
    totalBankroll?: boolean
    executed?: boolean
    betId?: boolean
    signalType?: boolean
    promptSnapshot?: boolean
    reasoningSnapshot?: boolean
    decisionSnapshot?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decisionLog"]>

  export type DecisionLogSelectScalar = {
    id?: boolean
    agentId?: boolean
    decisionTime?: boolean
    reasoning?: boolean
    operation?: boolean
    fixtureId?: boolean
    market?: boolean
    selection?: boolean
    stakePortion?: boolean
    confidence?: boolean
    totalBankroll?: boolean
    executed?: boolean
    betId?: boolean
    signalType?: boolean
    promptSnapshot?: boolean
    reasoningSnapshot?: boolean
    decisionSnapshot?: boolean
    createdAt?: boolean
  }

  export type DecisionLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type DecisionLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $DecisionLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DecisionLog"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      agentId: number
      decisionTime: Date
      reasoning: string
      operation: string
      fixtureId: number | null
      market: string | null
      selection: string | null
      stakePortion: number
      confidence: number
      totalBankroll: Prisma.Decimal
      executed: boolean
      betId: number | null
      signalType: string | null
      promptSnapshot: string | null
      reasoningSnapshot: string | null
      decisionSnapshot: string | null
      createdAt: Date
    }, ExtArgs["result"]["decisionLog"]>
    composites: {}
  }

  type DecisionLogGetPayload<S extends boolean | null | undefined | DecisionLogDefaultArgs> = $Result.GetResult<Prisma.$DecisionLogPayload, S>

  type DecisionLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DecisionLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DecisionLogCountAggregateInputType | true
    }

  export interface DecisionLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DecisionLog'], meta: { name: 'DecisionLog' } }
    /**
     * Find zero or one DecisionLog that matches the filter.
     * @param {DecisionLogFindUniqueArgs} args - Arguments to find a DecisionLog
     * @example
     * // Get one DecisionLog
     * const decisionLog = await prisma.decisionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DecisionLogFindUniqueArgs>(args: SelectSubset<T, DecisionLogFindUniqueArgs<ExtArgs>>): Prisma__DecisionLogClient<$Result.GetResult<Prisma.$DecisionLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DecisionLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DecisionLogFindUniqueOrThrowArgs} args - Arguments to find a DecisionLog
     * @example
     * // Get one DecisionLog
     * const decisionLog = await prisma.decisionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DecisionLogFindUniqueOrThrowArgs>(args: SelectSubset<T, DecisionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DecisionLogClient<$Result.GetResult<Prisma.$DecisionLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DecisionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionLogFindFirstArgs} args - Arguments to find a DecisionLog
     * @example
     * // Get one DecisionLog
     * const decisionLog = await prisma.decisionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DecisionLogFindFirstArgs>(args?: SelectSubset<T, DecisionLogFindFirstArgs<ExtArgs>>): Prisma__DecisionLogClient<$Result.GetResult<Prisma.$DecisionLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DecisionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionLogFindFirstOrThrowArgs} args - Arguments to find a DecisionLog
     * @example
     * // Get one DecisionLog
     * const decisionLog = await prisma.decisionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DecisionLogFindFirstOrThrowArgs>(args?: SelectSubset<T, DecisionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__DecisionLogClient<$Result.GetResult<Prisma.$DecisionLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DecisionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DecisionLogs
     * const decisionLogs = await prisma.decisionLog.findMany()
     * 
     * // Get first 10 DecisionLogs
     * const decisionLogs = await prisma.decisionLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const decisionLogWithIdOnly = await prisma.decisionLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DecisionLogFindManyArgs>(args?: SelectSubset<T, DecisionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DecisionLog.
     * @param {DecisionLogCreateArgs} args - Arguments to create a DecisionLog.
     * @example
     * // Create one DecisionLog
     * const DecisionLog = await prisma.decisionLog.create({
     *   data: {
     *     // ... data to create a DecisionLog
     *   }
     * })
     * 
     */
    create<T extends DecisionLogCreateArgs>(args: SelectSubset<T, DecisionLogCreateArgs<ExtArgs>>): Prisma__DecisionLogClient<$Result.GetResult<Prisma.$DecisionLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DecisionLogs.
     * @param {DecisionLogCreateManyArgs} args - Arguments to create many DecisionLogs.
     * @example
     * // Create many DecisionLogs
     * const decisionLog = await prisma.decisionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DecisionLogCreateManyArgs>(args?: SelectSubset<T, DecisionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DecisionLogs and returns the data saved in the database.
     * @param {DecisionLogCreateManyAndReturnArgs} args - Arguments to create many DecisionLogs.
     * @example
     * // Create many DecisionLogs
     * const decisionLog = await prisma.decisionLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DecisionLogs and only return the `id`
     * const decisionLogWithIdOnly = await prisma.decisionLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DecisionLogCreateManyAndReturnArgs>(args?: SelectSubset<T, DecisionLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DecisionLog.
     * @param {DecisionLogDeleteArgs} args - Arguments to delete one DecisionLog.
     * @example
     * // Delete one DecisionLog
     * const DecisionLog = await prisma.decisionLog.delete({
     *   where: {
     *     // ... filter to delete one DecisionLog
     *   }
     * })
     * 
     */
    delete<T extends DecisionLogDeleteArgs>(args: SelectSubset<T, DecisionLogDeleteArgs<ExtArgs>>): Prisma__DecisionLogClient<$Result.GetResult<Prisma.$DecisionLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DecisionLog.
     * @param {DecisionLogUpdateArgs} args - Arguments to update one DecisionLog.
     * @example
     * // Update one DecisionLog
     * const decisionLog = await prisma.decisionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DecisionLogUpdateArgs>(args: SelectSubset<T, DecisionLogUpdateArgs<ExtArgs>>): Prisma__DecisionLogClient<$Result.GetResult<Prisma.$DecisionLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DecisionLogs.
     * @param {DecisionLogDeleteManyArgs} args - Arguments to filter DecisionLogs to delete.
     * @example
     * // Delete a few DecisionLogs
     * const { count } = await prisma.decisionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DecisionLogDeleteManyArgs>(args?: SelectSubset<T, DecisionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DecisionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DecisionLogs
     * const decisionLog = await prisma.decisionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DecisionLogUpdateManyArgs>(args: SelectSubset<T, DecisionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DecisionLog.
     * @param {DecisionLogUpsertArgs} args - Arguments to update or create a DecisionLog.
     * @example
     * // Update or create a DecisionLog
     * const decisionLog = await prisma.decisionLog.upsert({
     *   create: {
     *     // ... data to create a DecisionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DecisionLog we want to update
     *   }
     * })
     */
    upsert<T extends DecisionLogUpsertArgs>(args: SelectSubset<T, DecisionLogUpsertArgs<ExtArgs>>): Prisma__DecisionLogClient<$Result.GetResult<Prisma.$DecisionLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DecisionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionLogCountArgs} args - Arguments to filter DecisionLogs to count.
     * @example
     * // Count the number of DecisionLogs
     * const count = await prisma.decisionLog.count({
     *   where: {
     *     // ... the filter for the DecisionLogs we want to count
     *   }
     * })
    **/
    count<T extends DecisionLogCountArgs>(
      args?: Subset<T, DecisionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DecisionLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DecisionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DecisionLogAggregateArgs>(args: Subset<T, DecisionLogAggregateArgs>): Prisma.PrismaPromise<GetDecisionLogAggregateType<T>>

    /**
     * Group by DecisionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DecisionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DecisionLogGroupByArgs['orderBy'] }
        : { orderBy?: DecisionLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DecisionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDecisionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DecisionLog model
   */
  readonly fields: DecisionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DecisionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DecisionLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DecisionLog model
   */ 
  interface DecisionLogFieldRefs {
    readonly id: FieldRef<"DecisionLog", 'Int'>
    readonly agentId: FieldRef<"DecisionLog", 'Int'>
    readonly decisionTime: FieldRef<"DecisionLog", 'DateTime'>
    readonly reasoning: FieldRef<"DecisionLog", 'String'>
    readonly operation: FieldRef<"DecisionLog", 'String'>
    readonly fixtureId: FieldRef<"DecisionLog", 'Int'>
    readonly market: FieldRef<"DecisionLog", 'String'>
    readonly selection: FieldRef<"DecisionLog", 'String'>
    readonly stakePortion: FieldRef<"DecisionLog", 'Float'>
    readonly confidence: FieldRef<"DecisionLog", 'Float'>
    readonly totalBankroll: FieldRef<"DecisionLog", 'Decimal'>
    readonly executed: FieldRef<"DecisionLog", 'Boolean'>
    readonly betId: FieldRef<"DecisionLog", 'Int'>
    readonly signalType: FieldRef<"DecisionLog", 'String'>
    readonly promptSnapshot: FieldRef<"DecisionLog", 'String'>
    readonly reasoningSnapshot: FieldRef<"DecisionLog", 'String'>
    readonly decisionSnapshot: FieldRef<"DecisionLog", 'String'>
    readonly createdAt: FieldRef<"DecisionLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DecisionLog findUnique
   */
  export type DecisionLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionLog
     */
    select?: DecisionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionLogInclude<ExtArgs> | null
    /**
     * Filter, which DecisionLog to fetch.
     */
    where: DecisionLogWhereUniqueInput
  }

  /**
   * DecisionLog findUniqueOrThrow
   */
  export type DecisionLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionLog
     */
    select?: DecisionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionLogInclude<ExtArgs> | null
    /**
     * Filter, which DecisionLog to fetch.
     */
    where: DecisionLogWhereUniqueInput
  }

  /**
   * DecisionLog findFirst
   */
  export type DecisionLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionLog
     */
    select?: DecisionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionLogInclude<ExtArgs> | null
    /**
     * Filter, which DecisionLog to fetch.
     */
    where?: DecisionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DecisionLogs to fetch.
     */
    orderBy?: DecisionLogOrderByWithRelationInput | DecisionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DecisionLogs.
     */
    cursor?: DecisionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DecisionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DecisionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DecisionLogs.
     */
    distinct?: DecisionLogScalarFieldEnum | DecisionLogScalarFieldEnum[]
  }

  /**
   * DecisionLog findFirstOrThrow
   */
  export type DecisionLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionLog
     */
    select?: DecisionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionLogInclude<ExtArgs> | null
    /**
     * Filter, which DecisionLog to fetch.
     */
    where?: DecisionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DecisionLogs to fetch.
     */
    orderBy?: DecisionLogOrderByWithRelationInput | DecisionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DecisionLogs.
     */
    cursor?: DecisionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DecisionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DecisionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DecisionLogs.
     */
    distinct?: DecisionLogScalarFieldEnum | DecisionLogScalarFieldEnum[]
  }

  /**
   * DecisionLog findMany
   */
  export type DecisionLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionLog
     */
    select?: DecisionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionLogInclude<ExtArgs> | null
    /**
     * Filter, which DecisionLogs to fetch.
     */
    where?: DecisionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DecisionLogs to fetch.
     */
    orderBy?: DecisionLogOrderByWithRelationInput | DecisionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DecisionLogs.
     */
    cursor?: DecisionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DecisionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DecisionLogs.
     */
    skip?: number
    distinct?: DecisionLogScalarFieldEnum | DecisionLogScalarFieldEnum[]
  }

  /**
   * DecisionLog create
   */
  export type DecisionLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionLog
     */
    select?: DecisionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionLogInclude<ExtArgs> | null
    /**
     * The data needed to create a DecisionLog.
     */
    data: XOR<DecisionLogCreateInput, DecisionLogUncheckedCreateInput>
  }

  /**
   * DecisionLog createMany
   */
  export type DecisionLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DecisionLogs.
     */
    data: DecisionLogCreateManyInput | DecisionLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DecisionLog createManyAndReturn
   */
  export type DecisionLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionLog
     */
    select?: DecisionLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DecisionLogs.
     */
    data: DecisionLogCreateManyInput | DecisionLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DecisionLog update
   */
  export type DecisionLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionLog
     */
    select?: DecisionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionLogInclude<ExtArgs> | null
    /**
     * The data needed to update a DecisionLog.
     */
    data: XOR<DecisionLogUpdateInput, DecisionLogUncheckedUpdateInput>
    /**
     * Choose, which DecisionLog to update.
     */
    where: DecisionLogWhereUniqueInput
  }

  /**
   * DecisionLog updateMany
   */
  export type DecisionLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DecisionLogs.
     */
    data: XOR<DecisionLogUpdateManyMutationInput, DecisionLogUncheckedUpdateManyInput>
    /**
     * Filter which DecisionLogs to update
     */
    where?: DecisionLogWhereInput
  }

  /**
   * DecisionLog upsert
   */
  export type DecisionLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionLog
     */
    select?: DecisionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionLogInclude<ExtArgs> | null
    /**
     * The filter to search for the DecisionLog to update in case it exists.
     */
    where: DecisionLogWhereUniqueInput
    /**
     * In case the DecisionLog found by the `where` argument doesn't exist, create a new DecisionLog with this data.
     */
    create: XOR<DecisionLogCreateInput, DecisionLogUncheckedCreateInput>
    /**
     * In case the DecisionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DecisionLogUpdateInput, DecisionLogUncheckedUpdateInput>
  }

  /**
   * DecisionLog delete
   */
  export type DecisionLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionLog
     */
    select?: DecisionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionLogInclude<ExtArgs> | null
    /**
     * Filter which DecisionLog to delete.
     */
    where: DecisionLogWhereUniqueInput
  }

  /**
   * DecisionLog deleteMany
   */
  export type DecisionLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DecisionLogs to delete
     */
    where?: DecisionLogWhereInput
  }

  /**
   * DecisionLog without action
   */
  export type DecisionLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionLog
     */
    select?: DecisionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionLogInclude<ExtArgs> | null
  }


  /**
   * Model BankrollSnapshot
   */

  export type AggregateBankrollSnapshot = {
    _count: BankrollSnapshotCountAggregateOutputType | null
    _avg: BankrollSnapshotAvgAggregateOutputType | null
    _sum: BankrollSnapshotSumAggregateOutputType | null
    _min: BankrollSnapshotMinAggregateOutputType | null
    _max: BankrollSnapshotMaxAggregateOutputType | null
  }

  export type BankrollSnapshotAvgAggregateOutputType = {
    id: number | null
    agentId: number | null
    totalBankroll: Decimal | null
    cash: Decimal | null
    openBetsValue: Decimal | null
    unrealizedPnl: Decimal | null
  }

  export type BankrollSnapshotSumAggregateOutputType = {
    id: number | null
    agentId: number | null
    totalBankroll: Decimal | null
    cash: Decimal | null
    openBetsValue: Decimal | null
    unrealizedPnl: Decimal | null
  }

  export type BankrollSnapshotMinAggregateOutputType = {
    id: number | null
    agentId: number | null
    totalBankroll: Decimal | null
    cash: Decimal | null
    openBetsValue: Decimal | null
    unrealizedPnl: Decimal | null
    snapshotTime: Date | null
  }

  export type BankrollSnapshotMaxAggregateOutputType = {
    id: number | null
    agentId: number | null
    totalBankroll: Decimal | null
    cash: Decimal | null
    openBetsValue: Decimal | null
    unrealizedPnl: Decimal | null
    snapshotTime: Date | null
  }

  export type BankrollSnapshotCountAggregateOutputType = {
    id: number
    agentId: number
    totalBankroll: number
    cash: number
    openBetsValue: number
    unrealizedPnl: number
    snapshotTime: number
    _all: number
  }


  export type BankrollSnapshotAvgAggregateInputType = {
    id?: true
    agentId?: true
    totalBankroll?: true
    cash?: true
    openBetsValue?: true
    unrealizedPnl?: true
  }

  export type BankrollSnapshotSumAggregateInputType = {
    id?: true
    agentId?: true
    totalBankroll?: true
    cash?: true
    openBetsValue?: true
    unrealizedPnl?: true
  }

  export type BankrollSnapshotMinAggregateInputType = {
    id?: true
    agentId?: true
    totalBankroll?: true
    cash?: true
    openBetsValue?: true
    unrealizedPnl?: true
    snapshotTime?: true
  }

  export type BankrollSnapshotMaxAggregateInputType = {
    id?: true
    agentId?: true
    totalBankroll?: true
    cash?: true
    openBetsValue?: true
    unrealizedPnl?: true
    snapshotTime?: true
  }

  export type BankrollSnapshotCountAggregateInputType = {
    id?: true
    agentId?: true
    totalBankroll?: true
    cash?: true
    openBetsValue?: true
    unrealizedPnl?: true
    snapshotTime?: true
    _all?: true
  }

  export type BankrollSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankrollSnapshot to aggregate.
     */
    where?: BankrollSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankrollSnapshots to fetch.
     */
    orderBy?: BankrollSnapshotOrderByWithRelationInput | BankrollSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankrollSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankrollSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankrollSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankrollSnapshots
    **/
    _count?: true | BankrollSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankrollSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankrollSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankrollSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankrollSnapshotMaxAggregateInputType
  }

  export type GetBankrollSnapshotAggregateType<T extends BankrollSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateBankrollSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankrollSnapshot[P]>
      : GetScalarType<T[P], AggregateBankrollSnapshot[P]>
  }




  export type BankrollSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankrollSnapshotWhereInput
    orderBy?: BankrollSnapshotOrderByWithAggregationInput | BankrollSnapshotOrderByWithAggregationInput[]
    by: BankrollSnapshotScalarFieldEnum[] | BankrollSnapshotScalarFieldEnum
    having?: BankrollSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankrollSnapshotCountAggregateInputType | true
    _avg?: BankrollSnapshotAvgAggregateInputType
    _sum?: BankrollSnapshotSumAggregateInputType
    _min?: BankrollSnapshotMinAggregateInputType
    _max?: BankrollSnapshotMaxAggregateInputType
  }

  export type BankrollSnapshotGroupByOutputType = {
    id: number
    agentId: number
    totalBankroll: Decimal
    cash: Decimal
    openBetsValue: Decimal
    unrealizedPnl: Decimal
    snapshotTime: Date
    _count: BankrollSnapshotCountAggregateOutputType | null
    _avg: BankrollSnapshotAvgAggregateOutputType | null
    _sum: BankrollSnapshotSumAggregateOutputType | null
    _min: BankrollSnapshotMinAggregateOutputType | null
    _max: BankrollSnapshotMaxAggregateOutputType | null
  }

  type GetBankrollSnapshotGroupByPayload<T extends BankrollSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankrollSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankrollSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankrollSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], BankrollSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type BankrollSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    totalBankroll?: boolean
    cash?: boolean
    openBetsValue?: boolean
    unrealizedPnl?: boolean
    snapshotTime?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankrollSnapshot"]>

  export type BankrollSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    totalBankroll?: boolean
    cash?: boolean
    openBetsValue?: boolean
    unrealizedPnl?: boolean
    snapshotTime?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankrollSnapshot"]>

  export type BankrollSnapshotSelectScalar = {
    id?: boolean
    agentId?: boolean
    totalBankroll?: boolean
    cash?: boolean
    openBetsValue?: boolean
    unrealizedPnl?: boolean
    snapshotTime?: boolean
  }

  export type BankrollSnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type BankrollSnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $BankrollSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BankrollSnapshot"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      agentId: number
      totalBankroll: Prisma.Decimal
      cash: Prisma.Decimal
      openBetsValue: Prisma.Decimal
      unrealizedPnl: Prisma.Decimal
      snapshotTime: Date
    }, ExtArgs["result"]["bankrollSnapshot"]>
    composites: {}
  }

  type BankrollSnapshotGetPayload<S extends boolean | null | undefined | BankrollSnapshotDefaultArgs> = $Result.GetResult<Prisma.$BankrollSnapshotPayload, S>

  type BankrollSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BankrollSnapshotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BankrollSnapshotCountAggregateInputType | true
    }

  export interface BankrollSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BankrollSnapshot'], meta: { name: 'BankrollSnapshot' } }
    /**
     * Find zero or one BankrollSnapshot that matches the filter.
     * @param {BankrollSnapshotFindUniqueArgs} args - Arguments to find a BankrollSnapshot
     * @example
     * // Get one BankrollSnapshot
     * const bankrollSnapshot = await prisma.bankrollSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankrollSnapshotFindUniqueArgs>(args: SelectSubset<T, BankrollSnapshotFindUniqueArgs<ExtArgs>>): Prisma__BankrollSnapshotClient<$Result.GetResult<Prisma.$BankrollSnapshotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BankrollSnapshot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BankrollSnapshotFindUniqueOrThrowArgs} args - Arguments to find a BankrollSnapshot
     * @example
     * // Get one BankrollSnapshot
     * const bankrollSnapshot = await prisma.bankrollSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankrollSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, BankrollSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankrollSnapshotClient<$Result.GetResult<Prisma.$BankrollSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BankrollSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankrollSnapshotFindFirstArgs} args - Arguments to find a BankrollSnapshot
     * @example
     * // Get one BankrollSnapshot
     * const bankrollSnapshot = await prisma.bankrollSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankrollSnapshotFindFirstArgs>(args?: SelectSubset<T, BankrollSnapshotFindFirstArgs<ExtArgs>>): Prisma__BankrollSnapshotClient<$Result.GetResult<Prisma.$BankrollSnapshotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BankrollSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankrollSnapshotFindFirstOrThrowArgs} args - Arguments to find a BankrollSnapshot
     * @example
     * // Get one BankrollSnapshot
     * const bankrollSnapshot = await prisma.bankrollSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankrollSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, BankrollSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankrollSnapshotClient<$Result.GetResult<Prisma.$BankrollSnapshotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BankrollSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankrollSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankrollSnapshots
     * const bankrollSnapshots = await prisma.bankrollSnapshot.findMany()
     * 
     * // Get first 10 BankrollSnapshots
     * const bankrollSnapshots = await prisma.bankrollSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankrollSnapshotWithIdOnly = await prisma.bankrollSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankrollSnapshotFindManyArgs>(args?: SelectSubset<T, BankrollSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankrollSnapshotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BankrollSnapshot.
     * @param {BankrollSnapshotCreateArgs} args - Arguments to create a BankrollSnapshot.
     * @example
     * // Create one BankrollSnapshot
     * const BankrollSnapshot = await prisma.bankrollSnapshot.create({
     *   data: {
     *     // ... data to create a BankrollSnapshot
     *   }
     * })
     * 
     */
    create<T extends BankrollSnapshotCreateArgs>(args: SelectSubset<T, BankrollSnapshotCreateArgs<ExtArgs>>): Prisma__BankrollSnapshotClient<$Result.GetResult<Prisma.$BankrollSnapshotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BankrollSnapshots.
     * @param {BankrollSnapshotCreateManyArgs} args - Arguments to create many BankrollSnapshots.
     * @example
     * // Create many BankrollSnapshots
     * const bankrollSnapshot = await prisma.bankrollSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankrollSnapshotCreateManyArgs>(args?: SelectSubset<T, BankrollSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BankrollSnapshots and returns the data saved in the database.
     * @param {BankrollSnapshotCreateManyAndReturnArgs} args - Arguments to create many BankrollSnapshots.
     * @example
     * // Create many BankrollSnapshots
     * const bankrollSnapshot = await prisma.bankrollSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BankrollSnapshots and only return the `id`
     * const bankrollSnapshotWithIdOnly = await prisma.bankrollSnapshot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankrollSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, BankrollSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankrollSnapshotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BankrollSnapshot.
     * @param {BankrollSnapshotDeleteArgs} args - Arguments to delete one BankrollSnapshot.
     * @example
     * // Delete one BankrollSnapshot
     * const BankrollSnapshot = await prisma.bankrollSnapshot.delete({
     *   where: {
     *     // ... filter to delete one BankrollSnapshot
     *   }
     * })
     * 
     */
    delete<T extends BankrollSnapshotDeleteArgs>(args: SelectSubset<T, BankrollSnapshotDeleteArgs<ExtArgs>>): Prisma__BankrollSnapshotClient<$Result.GetResult<Prisma.$BankrollSnapshotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BankrollSnapshot.
     * @param {BankrollSnapshotUpdateArgs} args - Arguments to update one BankrollSnapshot.
     * @example
     * // Update one BankrollSnapshot
     * const bankrollSnapshot = await prisma.bankrollSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankrollSnapshotUpdateArgs>(args: SelectSubset<T, BankrollSnapshotUpdateArgs<ExtArgs>>): Prisma__BankrollSnapshotClient<$Result.GetResult<Prisma.$BankrollSnapshotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BankrollSnapshots.
     * @param {BankrollSnapshotDeleteManyArgs} args - Arguments to filter BankrollSnapshots to delete.
     * @example
     * // Delete a few BankrollSnapshots
     * const { count } = await prisma.bankrollSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankrollSnapshotDeleteManyArgs>(args?: SelectSubset<T, BankrollSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankrollSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankrollSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankrollSnapshots
     * const bankrollSnapshot = await prisma.bankrollSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankrollSnapshotUpdateManyArgs>(args: SelectSubset<T, BankrollSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BankrollSnapshot.
     * @param {BankrollSnapshotUpsertArgs} args - Arguments to update or create a BankrollSnapshot.
     * @example
     * // Update or create a BankrollSnapshot
     * const bankrollSnapshot = await prisma.bankrollSnapshot.upsert({
     *   create: {
     *     // ... data to create a BankrollSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankrollSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends BankrollSnapshotUpsertArgs>(args: SelectSubset<T, BankrollSnapshotUpsertArgs<ExtArgs>>): Prisma__BankrollSnapshotClient<$Result.GetResult<Prisma.$BankrollSnapshotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BankrollSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankrollSnapshotCountArgs} args - Arguments to filter BankrollSnapshots to count.
     * @example
     * // Count the number of BankrollSnapshots
     * const count = await prisma.bankrollSnapshot.count({
     *   where: {
     *     // ... the filter for the BankrollSnapshots we want to count
     *   }
     * })
    **/
    count<T extends BankrollSnapshotCountArgs>(
      args?: Subset<T, BankrollSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankrollSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankrollSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankrollSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankrollSnapshotAggregateArgs>(args: Subset<T, BankrollSnapshotAggregateArgs>): Prisma.PrismaPromise<GetBankrollSnapshotAggregateType<T>>

    /**
     * Group by BankrollSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankrollSnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BankrollSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankrollSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: BankrollSnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BankrollSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankrollSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BankrollSnapshot model
   */
  readonly fields: BankrollSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BankrollSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankrollSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BankrollSnapshot model
   */ 
  interface BankrollSnapshotFieldRefs {
    readonly id: FieldRef<"BankrollSnapshot", 'Int'>
    readonly agentId: FieldRef<"BankrollSnapshot", 'Int'>
    readonly totalBankroll: FieldRef<"BankrollSnapshot", 'Decimal'>
    readonly cash: FieldRef<"BankrollSnapshot", 'Decimal'>
    readonly openBetsValue: FieldRef<"BankrollSnapshot", 'Decimal'>
    readonly unrealizedPnl: FieldRef<"BankrollSnapshot", 'Decimal'>
    readonly snapshotTime: FieldRef<"BankrollSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BankrollSnapshot findUnique
   */
  export type BankrollSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankrollSnapshot
     */
    select?: BankrollSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankrollSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which BankrollSnapshot to fetch.
     */
    where: BankrollSnapshotWhereUniqueInput
  }

  /**
   * BankrollSnapshot findUniqueOrThrow
   */
  export type BankrollSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankrollSnapshot
     */
    select?: BankrollSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankrollSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which BankrollSnapshot to fetch.
     */
    where: BankrollSnapshotWhereUniqueInput
  }

  /**
   * BankrollSnapshot findFirst
   */
  export type BankrollSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankrollSnapshot
     */
    select?: BankrollSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankrollSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which BankrollSnapshot to fetch.
     */
    where?: BankrollSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankrollSnapshots to fetch.
     */
    orderBy?: BankrollSnapshotOrderByWithRelationInput | BankrollSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankrollSnapshots.
     */
    cursor?: BankrollSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankrollSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankrollSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankrollSnapshots.
     */
    distinct?: BankrollSnapshotScalarFieldEnum | BankrollSnapshotScalarFieldEnum[]
  }

  /**
   * BankrollSnapshot findFirstOrThrow
   */
  export type BankrollSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankrollSnapshot
     */
    select?: BankrollSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankrollSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which BankrollSnapshot to fetch.
     */
    where?: BankrollSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankrollSnapshots to fetch.
     */
    orderBy?: BankrollSnapshotOrderByWithRelationInput | BankrollSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankrollSnapshots.
     */
    cursor?: BankrollSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankrollSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankrollSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankrollSnapshots.
     */
    distinct?: BankrollSnapshotScalarFieldEnum | BankrollSnapshotScalarFieldEnum[]
  }

  /**
   * BankrollSnapshot findMany
   */
  export type BankrollSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankrollSnapshot
     */
    select?: BankrollSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankrollSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which BankrollSnapshots to fetch.
     */
    where?: BankrollSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankrollSnapshots to fetch.
     */
    orderBy?: BankrollSnapshotOrderByWithRelationInput | BankrollSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankrollSnapshots.
     */
    cursor?: BankrollSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankrollSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankrollSnapshots.
     */
    skip?: number
    distinct?: BankrollSnapshotScalarFieldEnum | BankrollSnapshotScalarFieldEnum[]
  }

  /**
   * BankrollSnapshot create
   */
  export type BankrollSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankrollSnapshot
     */
    select?: BankrollSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankrollSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a BankrollSnapshot.
     */
    data: XOR<BankrollSnapshotCreateInput, BankrollSnapshotUncheckedCreateInput>
  }

  /**
   * BankrollSnapshot createMany
   */
  export type BankrollSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BankrollSnapshots.
     */
    data: BankrollSnapshotCreateManyInput | BankrollSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BankrollSnapshot createManyAndReturn
   */
  export type BankrollSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankrollSnapshot
     */
    select?: BankrollSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BankrollSnapshots.
     */
    data: BankrollSnapshotCreateManyInput | BankrollSnapshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankrollSnapshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankrollSnapshot update
   */
  export type BankrollSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankrollSnapshot
     */
    select?: BankrollSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankrollSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a BankrollSnapshot.
     */
    data: XOR<BankrollSnapshotUpdateInput, BankrollSnapshotUncheckedUpdateInput>
    /**
     * Choose, which BankrollSnapshot to update.
     */
    where: BankrollSnapshotWhereUniqueInput
  }

  /**
   * BankrollSnapshot updateMany
   */
  export type BankrollSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BankrollSnapshots.
     */
    data: XOR<BankrollSnapshotUpdateManyMutationInput, BankrollSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which BankrollSnapshots to update
     */
    where?: BankrollSnapshotWhereInput
  }

  /**
   * BankrollSnapshot upsert
   */
  export type BankrollSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankrollSnapshot
     */
    select?: BankrollSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankrollSnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the BankrollSnapshot to update in case it exists.
     */
    where: BankrollSnapshotWhereUniqueInput
    /**
     * In case the BankrollSnapshot found by the `where` argument doesn't exist, create a new BankrollSnapshot with this data.
     */
    create: XOR<BankrollSnapshotCreateInput, BankrollSnapshotUncheckedCreateInput>
    /**
     * In case the BankrollSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankrollSnapshotUpdateInput, BankrollSnapshotUncheckedUpdateInput>
  }

  /**
   * BankrollSnapshot delete
   */
  export type BankrollSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankrollSnapshot
     */
    select?: BankrollSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankrollSnapshotInclude<ExtArgs> | null
    /**
     * Filter which BankrollSnapshot to delete.
     */
    where: BankrollSnapshotWhereUniqueInput
  }

  /**
   * BankrollSnapshot deleteMany
   */
  export type BankrollSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankrollSnapshots to delete
     */
    where?: BankrollSnapshotWhereInput
  }

  /**
   * BankrollSnapshot without action
   */
  export type BankrollSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankrollSnapshot
     */
    select?: BankrollSnapshotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankrollSnapshotInclude<ExtArgs> | null
  }


  /**
   * Model StrategyConfig
   */

  export type AggregateStrategyConfig = {
    _count: StrategyConfigCountAggregateOutputType | null
    _avg: StrategyConfigAvgAggregateOutputType | null
    _sum: StrategyConfigSumAggregateOutputType | null
    _min: StrategyConfigMinAggregateOutputType | null
    _max: StrategyConfigMaxAggregateOutputType | null
  }

  export type StrategyConfigAvgAggregateOutputType = {
    id: number | null
    agentId: number | null
    triggerInterval: number | null
  }

  export type StrategyConfigSumAggregateOutputType = {
    id: number | null
    agentId: number | null
    triggerInterval: number | null
  }

  export type StrategyConfigMinAggregateOutputType = {
    id: number | null
    agentId: number | null
    triggerInterval: number | null
    signalPoolIds: string | null
    enabled: boolean | null
    scheduledTrigger: boolean | null
    lastTriggerAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StrategyConfigMaxAggregateOutputType = {
    id: number | null
    agentId: number | null
    triggerInterval: number | null
    signalPoolIds: string | null
    enabled: boolean | null
    scheduledTrigger: boolean | null
    lastTriggerAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StrategyConfigCountAggregateOutputType = {
    id: number
    agentId: number
    triggerInterval: number
    signalPoolIds: number
    enabled: number
    scheduledTrigger: number
    lastTriggerAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StrategyConfigAvgAggregateInputType = {
    id?: true
    agentId?: true
    triggerInterval?: true
  }

  export type StrategyConfigSumAggregateInputType = {
    id?: true
    agentId?: true
    triggerInterval?: true
  }

  export type StrategyConfigMinAggregateInputType = {
    id?: true
    agentId?: true
    triggerInterval?: true
    signalPoolIds?: true
    enabled?: true
    scheduledTrigger?: true
    lastTriggerAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StrategyConfigMaxAggregateInputType = {
    id?: true
    agentId?: true
    triggerInterval?: true
    signalPoolIds?: true
    enabled?: true
    scheduledTrigger?: true
    lastTriggerAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StrategyConfigCountAggregateInputType = {
    id?: true
    agentId?: true
    triggerInterval?: true
    signalPoolIds?: true
    enabled?: true
    scheduledTrigger?: true
    lastTriggerAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StrategyConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StrategyConfig to aggregate.
     */
    where?: StrategyConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StrategyConfigs to fetch.
     */
    orderBy?: StrategyConfigOrderByWithRelationInput | StrategyConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StrategyConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StrategyConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StrategyConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StrategyConfigs
    **/
    _count?: true | StrategyConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StrategyConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StrategyConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StrategyConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StrategyConfigMaxAggregateInputType
  }

  export type GetStrategyConfigAggregateType<T extends StrategyConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateStrategyConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStrategyConfig[P]>
      : GetScalarType<T[P], AggregateStrategyConfig[P]>
  }




  export type StrategyConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StrategyConfigWhereInput
    orderBy?: StrategyConfigOrderByWithAggregationInput | StrategyConfigOrderByWithAggregationInput[]
    by: StrategyConfigScalarFieldEnum[] | StrategyConfigScalarFieldEnum
    having?: StrategyConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StrategyConfigCountAggregateInputType | true
    _avg?: StrategyConfigAvgAggregateInputType
    _sum?: StrategyConfigSumAggregateInputType
    _min?: StrategyConfigMinAggregateInputType
    _max?: StrategyConfigMaxAggregateInputType
  }

  export type StrategyConfigGroupByOutputType = {
    id: number
    agentId: number
    triggerInterval: number
    signalPoolIds: string | null
    enabled: boolean
    scheduledTrigger: boolean
    lastTriggerAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: StrategyConfigCountAggregateOutputType | null
    _avg: StrategyConfigAvgAggregateOutputType | null
    _sum: StrategyConfigSumAggregateOutputType | null
    _min: StrategyConfigMinAggregateOutputType | null
    _max: StrategyConfigMaxAggregateOutputType | null
  }

  type GetStrategyConfigGroupByPayload<T extends StrategyConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StrategyConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StrategyConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StrategyConfigGroupByOutputType[P]>
            : GetScalarType<T[P], StrategyConfigGroupByOutputType[P]>
        }
      >
    >


  export type StrategyConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    triggerInterval?: boolean
    signalPoolIds?: boolean
    enabled?: boolean
    scheduledTrigger?: boolean
    lastTriggerAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["strategyConfig"]>

  export type StrategyConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    triggerInterval?: boolean
    signalPoolIds?: boolean
    enabled?: boolean
    scheduledTrigger?: boolean
    lastTriggerAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["strategyConfig"]>

  export type StrategyConfigSelectScalar = {
    id?: boolean
    agentId?: boolean
    triggerInterval?: boolean
    signalPoolIds?: boolean
    enabled?: boolean
    scheduledTrigger?: boolean
    lastTriggerAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StrategyConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type StrategyConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $StrategyConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StrategyConfig"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      agentId: number
      triggerInterval: number
      signalPoolIds: string | null
      enabled: boolean
      scheduledTrigger: boolean
      lastTriggerAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["strategyConfig"]>
    composites: {}
  }

  type StrategyConfigGetPayload<S extends boolean | null | undefined | StrategyConfigDefaultArgs> = $Result.GetResult<Prisma.$StrategyConfigPayload, S>

  type StrategyConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StrategyConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StrategyConfigCountAggregateInputType | true
    }

  export interface StrategyConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StrategyConfig'], meta: { name: 'StrategyConfig' } }
    /**
     * Find zero or one StrategyConfig that matches the filter.
     * @param {StrategyConfigFindUniqueArgs} args - Arguments to find a StrategyConfig
     * @example
     * // Get one StrategyConfig
     * const strategyConfig = await prisma.strategyConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StrategyConfigFindUniqueArgs>(args: SelectSubset<T, StrategyConfigFindUniqueArgs<ExtArgs>>): Prisma__StrategyConfigClient<$Result.GetResult<Prisma.$StrategyConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StrategyConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StrategyConfigFindUniqueOrThrowArgs} args - Arguments to find a StrategyConfig
     * @example
     * // Get one StrategyConfig
     * const strategyConfig = await prisma.strategyConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StrategyConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, StrategyConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StrategyConfigClient<$Result.GetResult<Prisma.$StrategyConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StrategyConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrategyConfigFindFirstArgs} args - Arguments to find a StrategyConfig
     * @example
     * // Get one StrategyConfig
     * const strategyConfig = await prisma.strategyConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StrategyConfigFindFirstArgs>(args?: SelectSubset<T, StrategyConfigFindFirstArgs<ExtArgs>>): Prisma__StrategyConfigClient<$Result.GetResult<Prisma.$StrategyConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StrategyConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrategyConfigFindFirstOrThrowArgs} args - Arguments to find a StrategyConfig
     * @example
     * // Get one StrategyConfig
     * const strategyConfig = await prisma.strategyConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StrategyConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, StrategyConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__StrategyConfigClient<$Result.GetResult<Prisma.$StrategyConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StrategyConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrategyConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StrategyConfigs
     * const strategyConfigs = await prisma.strategyConfig.findMany()
     * 
     * // Get first 10 StrategyConfigs
     * const strategyConfigs = await prisma.strategyConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const strategyConfigWithIdOnly = await prisma.strategyConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StrategyConfigFindManyArgs>(args?: SelectSubset<T, StrategyConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrategyConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StrategyConfig.
     * @param {StrategyConfigCreateArgs} args - Arguments to create a StrategyConfig.
     * @example
     * // Create one StrategyConfig
     * const StrategyConfig = await prisma.strategyConfig.create({
     *   data: {
     *     // ... data to create a StrategyConfig
     *   }
     * })
     * 
     */
    create<T extends StrategyConfigCreateArgs>(args: SelectSubset<T, StrategyConfigCreateArgs<ExtArgs>>): Prisma__StrategyConfigClient<$Result.GetResult<Prisma.$StrategyConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StrategyConfigs.
     * @param {StrategyConfigCreateManyArgs} args - Arguments to create many StrategyConfigs.
     * @example
     * // Create many StrategyConfigs
     * const strategyConfig = await prisma.strategyConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StrategyConfigCreateManyArgs>(args?: SelectSubset<T, StrategyConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StrategyConfigs and returns the data saved in the database.
     * @param {StrategyConfigCreateManyAndReturnArgs} args - Arguments to create many StrategyConfigs.
     * @example
     * // Create many StrategyConfigs
     * const strategyConfig = await prisma.strategyConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StrategyConfigs and only return the `id`
     * const strategyConfigWithIdOnly = await prisma.strategyConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StrategyConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, StrategyConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrategyConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StrategyConfig.
     * @param {StrategyConfigDeleteArgs} args - Arguments to delete one StrategyConfig.
     * @example
     * // Delete one StrategyConfig
     * const StrategyConfig = await prisma.strategyConfig.delete({
     *   where: {
     *     // ... filter to delete one StrategyConfig
     *   }
     * })
     * 
     */
    delete<T extends StrategyConfigDeleteArgs>(args: SelectSubset<T, StrategyConfigDeleteArgs<ExtArgs>>): Prisma__StrategyConfigClient<$Result.GetResult<Prisma.$StrategyConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StrategyConfig.
     * @param {StrategyConfigUpdateArgs} args - Arguments to update one StrategyConfig.
     * @example
     * // Update one StrategyConfig
     * const strategyConfig = await prisma.strategyConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StrategyConfigUpdateArgs>(args: SelectSubset<T, StrategyConfigUpdateArgs<ExtArgs>>): Prisma__StrategyConfigClient<$Result.GetResult<Prisma.$StrategyConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StrategyConfigs.
     * @param {StrategyConfigDeleteManyArgs} args - Arguments to filter StrategyConfigs to delete.
     * @example
     * // Delete a few StrategyConfigs
     * const { count } = await prisma.strategyConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StrategyConfigDeleteManyArgs>(args?: SelectSubset<T, StrategyConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StrategyConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrategyConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StrategyConfigs
     * const strategyConfig = await prisma.strategyConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StrategyConfigUpdateManyArgs>(args: SelectSubset<T, StrategyConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StrategyConfig.
     * @param {StrategyConfigUpsertArgs} args - Arguments to update or create a StrategyConfig.
     * @example
     * // Update or create a StrategyConfig
     * const strategyConfig = await prisma.strategyConfig.upsert({
     *   create: {
     *     // ... data to create a StrategyConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StrategyConfig we want to update
     *   }
     * })
     */
    upsert<T extends StrategyConfigUpsertArgs>(args: SelectSubset<T, StrategyConfigUpsertArgs<ExtArgs>>): Prisma__StrategyConfigClient<$Result.GetResult<Prisma.$StrategyConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StrategyConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrategyConfigCountArgs} args - Arguments to filter StrategyConfigs to count.
     * @example
     * // Count the number of StrategyConfigs
     * const count = await prisma.strategyConfig.count({
     *   where: {
     *     // ... the filter for the StrategyConfigs we want to count
     *   }
     * })
    **/
    count<T extends StrategyConfigCountArgs>(
      args?: Subset<T, StrategyConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StrategyConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StrategyConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrategyConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StrategyConfigAggregateArgs>(args: Subset<T, StrategyConfigAggregateArgs>): Prisma.PrismaPromise<GetStrategyConfigAggregateType<T>>

    /**
     * Group by StrategyConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrategyConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StrategyConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StrategyConfigGroupByArgs['orderBy'] }
        : { orderBy?: StrategyConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StrategyConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStrategyConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StrategyConfig model
   */
  readonly fields: StrategyConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StrategyConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StrategyConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StrategyConfig model
   */ 
  interface StrategyConfigFieldRefs {
    readonly id: FieldRef<"StrategyConfig", 'Int'>
    readonly agentId: FieldRef<"StrategyConfig", 'Int'>
    readonly triggerInterval: FieldRef<"StrategyConfig", 'Int'>
    readonly signalPoolIds: FieldRef<"StrategyConfig", 'String'>
    readonly enabled: FieldRef<"StrategyConfig", 'Boolean'>
    readonly scheduledTrigger: FieldRef<"StrategyConfig", 'Boolean'>
    readonly lastTriggerAt: FieldRef<"StrategyConfig", 'DateTime'>
    readonly createdAt: FieldRef<"StrategyConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"StrategyConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StrategyConfig findUnique
   */
  export type StrategyConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrategyConfig
     */
    select?: StrategyConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrategyConfigInclude<ExtArgs> | null
    /**
     * Filter, which StrategyConfig to fetch.
     */
    where: StrategyConfigWhereUniqueInput
  }

  /**
   * StrategyConfig findUniqueOrThrow
   */
  export type StrategyConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrategyConfig
     */
    select?: StrategyConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrategyConfigInclude<ExtArgs> | null
    /**
     * Filter, which StrategyConfig to fetch.
     */
    where: StrategyConfigWhereUniqueInput
  }

  /**
   * StrategyConfig findFirst
   */
  export type StrategyConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrategyConfig
     */
    select?: StrategyConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrategyConfigInclude<ExtArgs> | null
    /**
     * Filter, which StrategyConfig to fetch.
     */
    where?: StrategyConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StrategyConfigs to fetch.
     */
    orderBy?: StrategyConfigOrderByWithRelationInput | StrategyConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StrategyConfigs.
     */
    cursor?: StrategyConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StrategyConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StrategyConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StrategyConfigs.
     */
    distinct?: StrategyConfigScalarFieldEnum | StrategyConfigScalarFieldEnum[]
  }

  /**
   * StrategyConfig findFirstOrThrow
   */
  export type StrategyConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrategyConfig
     */
    select?: StrategyConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrategyConfigInclude<ExtArgs> | null
    /**
     * Filter, which StrategyConfig to fetch.
     */
    where?: StrategyConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StrategyConfigs to fetch.
     */
    orderBy?: StrategyConfigOrderByWithRelationInput | StrategyConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StrategyConfigs.
     */
    cursor?: StrategyConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StrategyConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StrategyConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StrategyConfigs.
     */
    distinct?: StrategyConfigScalarFieldEnum | StrategyConfigScalarFieldEnum[]
  }

  /**
   * StrategyConfig findMany
   */
  export type StrategyConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrategyConfig
     */
    select?: StrategyConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrategyConfigInclude<ExtArgs> | null
    /**
     * Filter, which StrategyConfigs to fetch.
     */
    where?: StrategyConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StrategyConfigs to fetch.
     */
    orderBy?: StrategyConfigOrderByWithRelationInput | StrategyConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StrategyConfigs.
     */
    cursor?: StrategyConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StrategyConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StrategyConfigs.
     */
    skip?: number
    distinct?: StrategyConfigScalarFieldEnum | StrategyConfigScalarFieldEnum[]
  }

  /**
   * StrategyConfig create
   */
  export type StrategyConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrategyConfig
     */
    select?: StrategyConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrategyConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a StrategyConfig.
     */
    data: XOR<StrategyConfigCreateInput, StrategyConfigUncheckedCreateInput>
  }

  /**
   * StrategyConfig createMany
   */
  export type StrategyConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StrategyConfigs.
     */
    data: StrategyConfigCreateManyInput | StrategyConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StrategyConfig createManyAndReturn
   */
  export type StrategyConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrategyConfig
     */
    select?: StrategyConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StrategyConfigs.
     */
    data: StrategyConfigCreateManyInput | StrategyConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrategyConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StrategyConfig update
   */
  export type StrategyConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrategyConfig
     */
    select?: StrategyConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrategyConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a StrategyConfig.
     */
    data: XOR<StrategyConfigUpdateInput, StrategyConfigUncheckedUpdateInput>
    /**
     * Choose, which StrategyConfig to update.
     */
    where: StrategyConfigWhereUniqueInput
  }

  /**
   * StrategyConfig updateMany
   */
  export type StrategyConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StrategyConfigs.
     */
    data: XOR<StrategyConfigUpdateManyMutationInput, StrategyConfigUncheckedUpdateManyInput>
    /**
     * Filter which StrategyConfigs to update
     */
    where?: StrategyConfigWhereInput
  }

  /**
   * StrategyConfig upsert
   */
  export type StrategyConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrategyConfig
     */
    select?: StrategyConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrategyConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the StrategyConfig to update in case it exists.
     */
    where: StrategyConfigWhereUniqueInput
    /**
     * In case the StrategyConfig found by the `where` argument doesn't exist, create a new StrategyConfig with this data.
     */
    create: XOR<StrategyConfigCreateInput, StrategyConfigUncheckedCreateInput>
    /**
     * In case the StrategyConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StrategyConfigUpdateInput, StrategyConfigUncheckedUpdateInput>
  }

  /**
   * StrategyConfig delete
   */
  export type StrategyConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrategyConfig
     */
    select?: StrategyConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrategyConfigInclude<ExtArgs> | null
    /**
     * Filter which StrategyConfig to delete.
     */
    where: StrategyConfigWhereUniqueInput
  }

  /**
   * StrategyConfig deleteMany
   */
  export type StrategyConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StrategyConfigs to delete
     */
    where?: StrategyConfigWhereInput
  }

  /**
   * StrategyConfig without action
   */
  export type StrategyConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrategyConfig
     */
    select?: StrategyConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrategyConfigInclude<ExtArgs> | null
  }


  /**
   * Model PromptTemplate
   */

  export type AggregatePromptTemplate = {
    _count: PromptTemplateCountAggregateOutputType | null
    _avg: PromptTemplateAvgAggregateOutputType | null
    _sum: PromptTemplateSumAggregateOutputType | null
    _min: PromptTemplateMinAggregateOutputType | null
    _max: PromptTemplateMaxAggregateOutputType | null
  }

  export type PromptTemplateAvgAggregateOutputType = {
    id: number | null
  }

  export type PromptTemplateSumAggregateOutputType = {
    id: number | null
  }

  export type PromptTemplateMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    content: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptTemplateMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    content: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptTemplateCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    content: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromptTemplateAvgAggregateInputType = {
    id?: true
  }

  export type PromptTemplateSumAggregateInputType = {
    id?: true
  }

  export type PromptTemplateMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    content?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    content?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptTemplateCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    content?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromptTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptTemplate to aggregate.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromptTemplates
    **/
    _count?: true | PromptTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromptTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromptTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptTemplateMaxAggregateInputType
  }

  export type GetPromptTemplateAggregateType<T extends PromptTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregatePromptTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromptTemplate[P]>
      : GetScalarType<T[P], AggregatePromptTemplate[P]>
  }




  export type PromptTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptTemplateWhereInput
    orderBy?: PromptTemplateOrderByWithAggregationInput | PromptTemplateOrderByWithAggregationInput[]
    by: PromptTemplateScalarFieldEnum[] | PromptTemplateScalarFieldEnum
    having?: PromptTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptTemplateCountAggregateInputType | true
    _avg?: PromptTemplateAvgAggregateInputType
    _sum?: PromptTemplateSumAggregateInputType
    _min?: PromptTemplateMinAggregateInputType
    _max?: PromptTemplateMaxAggregateInputType
  }

  export type PromptTemplateGroupByOutputType = {
    id: number
    name: string
    slug: string
    description: string | null
    content: string
    category: string
    createdAt: Date
    updatedAt: Date
    _count: PromptTemplateCountAggregateOutputType | null
    _avg: PromptTemplateAvgAggregateOutputType | null
    _sum: PromptTemplateSumAggregateOutputType | null
    _min: PromptTemplateMinAggregateOutputType | null
    _max: PromptTemplateMaxAggregateOutputType | null
  }

  type GetPromptTemplateGroupByPayload<T extends PromptTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], PromptTemplateGroupByOutputType[P]>
        }
      >
    >


  export type PromptTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    content?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bindings?: boolean | PromptTemplate$bindingsArgs<ExtArgs>
    _count?: boolean | PromptTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptTemplate"]>

  export type PromptTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    content?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promptTemplate"]>

  export type PromptTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    content?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromptTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bindings?: boolean | PromptTemplate$bindingsArgs<ExtArgs>
    _count?: boolean | PromptTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromptTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromptTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromptTemplate"
    objects: {
      bindings: Prisma.$PromptBindingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      description: string | null
      content: string
      category: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promptTemplate"]>
    composites: {}
  }

  type PromptTemplateGetPayload<S extends boolean | null | undefined | PromptTemplateDefaultArgs> = $Result.GetResult<Prisma.$PromptTemplatePayload, S>

  type PromptTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromptTemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromptTemplateCountAggregateInputType | true
    }

  export interface PromptTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromptTemplate'], meta: { name: 'PromptTemplate' } }
    /**
     * Find zero or one PromptTemplate that matches the filter.
     * @param {PromptTemplateFindUniqueArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptTemplateFindUniqueArgs>(args: SelectSubset<T, PromptTemplateFindUniqueArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PromptTemplate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PromptTemplateFindUniqueOrThrowArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PromptTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateFindFirstArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptTemplateFindFirstArgs>(args?: SelectSubset<T, PromptTemplateFindFirstArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PromptTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateFindFirstOrThrowArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PromptTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromptTemplates
     * const promptTemplates = await prisma.promptTemplate.findMany()
     * 
     * // Get first 10 PromptTemplates
     * const promptTemplates = await prisma.promptTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptTemplateWithIdOnly = await prisma.promptTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptTemplateFindManyArgs>(args?: SelectSubset<T, PromptTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PromptTemplate.
     * @param {PromptTemplateCreateArgs} args - Arguments to create a PromptTemplate.
     * @example
     * // Create one PromptTemplate
     * const PromptTemplate = await prisma.promptTemplate.create({
     *   data: {
     *     // ... data to create a PromptTemplate
     *   }
     * })
     * 
     */
    create<T extends PromptTemplateCreateArgs>(args: SelectSubset<T, PromptTemplateCreateArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PromptTemplates.
     * @param {PromptTemplateCreateManyArgs} args - Arguments to create many PromptTemplates.
     * @example
     * // Create many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptTemplateCreateManyArgs>(args?: SelectSubset<T, PromptTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromptTemplates and returns the data saved in the database.
     * @param {PromptTemplateCreateManyAndReturnArgs} args - Arguments to create many PromptTemplates.
     * @example
     * // Create many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromptTemplates and only return the `id`
     * const promptTemplateWithIdOnly = await prisma.promptTemplate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PromptTemplate.
     * @param {PromptTemplateDeleteArgs} args - Arguments to delete one PromptTemplate.
     * @example
     * // Delete one PromptTemplate
     * const PromptTemplate = await prisma.promptTemplate.delete({
     *   where: {
     *     // ... filter to delete one PromptTemplate
     *   }
     * })
     * 
     */
    delete<T extends PromptTemplateDeleteArgs>(args: SelectSubset<T, PromptTemplateDeleteArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PromptTemplate.
     * @param {PromptTemplateUpdateArgs} args - Arguments to update one PromptTemplate.
     * @example
     * // Update one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptTemplateUpdateArgs>(args: SelectSubset<T, PromptTemplateUpdateArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PromptTemplates.
     * @param {PromptTemplateDeleteManyArgs} args - Arguments to filter PromptTemplates to delete.
     * @example
     * // Delete a few PromptTemplates
     * const { count } = await prisma.promptTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptTemplateDeleteManyArgs>(args?: SelectSubset<T, PromptTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptTemplateUpdateManyArgs>(args: SelectSubset<T, PromptTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PromptTemplate.
     * @param {PromptTemplateUpsertArgs} args - Arguments to update or create a PromptTemplate.
     * @example
     * // Update or create a PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.upsert({
     *   create: {
     *     // ... data to create a PromptTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromptTemplate we want to update
     *   }
     * })
     */
    upsert<T extends PromptTemplateUpsertArgs>(args: SelectSubset<T, PromptTemplateUpsertArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PromptTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateCountArgs} args - Arguments to filter PromptTemplates to count.
     * @example
     * // Count the number of PromptTemplates
     * const count = await prisma.promptTemplate.count({
     *   where: {
     *     // ... the filter for the PromptTemplates we want to count
     *   }
     * })
    **/
    count<T extends PromptTemplateCountArgs>(
      args?: Subset<T, PromptTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromptTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromptTemplateAggregateArgs>(args: Subset<T, PromptTemplateAggregateArgs>): Prisma.PrismaPromise<GetPromptTemplateAggregateType<T>>

    /**
     * Group by PromptTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromptTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptTemplateGroupByArgs['orderBy'] }
        : { orderBy?: PromptTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromptTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromptTemplate model
   */
  readonly fields: PromptTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromptTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bindings<T extends PromptTemplate$bindingsArgs<ExtArgs> = {}>(args?: Subset<T, PromptTemplate$bindingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptBindingPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PromptTemplate model
   */ 
  interface PromptTemplateFieldRefs {
    readonly id: FieldRef<"PromptTemplate", 'Int'>
    readonly name: FieldRef<"PromptTemplate", 'String'>
    readonly slug: FieldRef<"PromptTemplate", 'String'>
    readonly description: FieldRef<"PromptTemplate", 'String'>
    readonly content: FieldRef<"PromptTemplate", 'String'>
    readonly category: FieldRef<"PromptTemplate", 'String'>
    readonly createdAt: FieldRef<"PromptTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"PromptTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PromptTemplate findUnique
   */
  export type PromptTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate findUniqueOrThrow
   */
  export type PromptTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate findFirst
   */
  export type PromptTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptTemplates.
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptTemplates.
     */
    distinct?: PromptTemplateScalarFieldEnum | PromptTemplateScalarFieldEnum[]
  }

  /**
   * PromptTemplate findFirstOrThrow
   */
  export type PromptTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptTemplates.
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptTemplates.
     */
    distinct?: PromptTemplateScalarFieldEnum | PromptTemplateScalarFieldEnum[]
  }

  /**
   * PromptTemplate findMany
   */
  export type PromptTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PromptTemplates to fetch.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromptTemplates.
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    distinct?: PromptTemplateScalarFieldEnum | PromptTemplateScalarFieldEnum[]
  }

  /**
   * PromptTemplate create
   */
  export type PromptTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a PromptTemplate.
     */
    data: XOR<PromptTemplateCreateInput, PromptTemplateUncheckedCreateInput>
  }

  /**
   * PromptTemplate createMany
   */
  export type PromptTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromptTemplates.
     */
    data: PromptTemplateCreateManyInput | PromptTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromptTemplate createManyAndReturn
   */
  export type PromptTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PromptTemplates.
     */
    data: PromptTemplateCreateManyInput | PromptTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromptTemplate update
   */
  export type PromptTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a PromptTemplate.
     */
    data: XOR<PromptTemplateUpdateInput, PromptTemplateUncheckedUpdateInput>
    /**
     * Choose, which PromptTemplate to update.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate updateMany
   */
  export type PromptTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromptTemplates.
     */
    data: XOR<PromptTemplateUpdateManyMutationInput, PromptTemplateUncheckedUpdateManyInput>
    /**
     * Filter which PromptTemplates to update
     */
    where?: PromptTemplateWhereInput
  }

  /**
   * PromptTemplate upsert
   */
  export type PromptTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the PromptTemplate to update in case it exists.
     */
    where: PromptTemplateWhereUniqueInput
    /**
     * In case the PromptTemplate found by the `where` argument doesn't exist, create a new PromptTemplate with this data.
     */
    create: XOR<PromptTemplateCreateInput, PromptTemplateUncheckedCreateInput>
    /**
     * In case the PromptTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptTemplateUpdateInput, PromptTemplateUncheckedUpdateInput>
  }

  /**
   * PromptTemplate delete
   */
  export type PromptTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter which PromptTemplate to delete.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate deleteMany
   */
  export type PromptTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptTemplates to delete
     */
    where?: PromptTemplateWhereInput
  }

  /**
   * PromptTemplate.bindings
   */
  export type PromptTemplate$bindingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptBinding
     */
    select?: PromptBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptBindingInclude<ExtArgs> | null
    where?: PromptBindingWhereInput
    orderBy?: PromptBindingOrderByWithRelationInput | PromptBindingOrderByWithRelationInput[]
    cursor?: PromptBindingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromptBindingScalarFieldEnum | PromptBindingScalarFieldEnum[]
  }

  /**
   * PromptTemplate without action
   */
  export type PromptTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
  }


  /**
   * Model PromptBinding
   */

  export type AggregatePromptBinding = {
    _count: PromptBindingCountAggregateOutputType | null
    _avg: PromptBindingAvgAggregateOutputType | null
    _sum: PromptBindingSumAggregateOutputType | null
    _min: PromptBindingMinAggregateOutputType | null
    _max: PromptBindingMaxAggregateOutputType | null
  }

  export type PromptBindingAvgAggregateOutputType = {
    id: number | null
    agentId: number | null
    promptTemplateId: number | null
  }

  export type PromptBindingSumAggregateOutputType = {
    id: number | null
    agentId: number | null
    promptTemplateId: number | null
  }

  export type PromptBindingMinAggregateOutputType = {
    id: number | null
    agentId: number | null
    promptTemplateId: number | null
    createdAt: Date | null
  }

  export type PromptBindingMaxAggregateOutputType = {
    id: number | null
    agentId: number | null
    promptTemplateId: number | null
    createdAt: Date | null
  }

  export type PromptBindingCountAggregateOutputType = {
    id: number
    agentId: number
    promptTemplateId: number
    createdAt: number
    _all: number
  }


  export type PromptBindingAvgAggregateInputType = {
    id?: true
    agentId?: true
    promptTemplateId?: true
  }

  export type PromptBindingSumAggregateInputType = {
    id?: true
    agentId?: true
    promptTemplateId?: true
  }

  export type PromptBindingMinAggregateInputType = {
    id?: true
    agentId?: true
    promptTemplateId?: true
    createdAt?: true
  }

  export type PromptBindingMaxAggregateInputType = {
    id?: true
    agentId?: true
    promptTemplateId?: true
    createdAt?: true
  }

  export type PromptBindingCountAggregateInputType = {
    id?: true
    agentId?: true
    promptTemplateId?: true
    createdAt?: true
    _all?: true
  }

  export type PromptBindingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptBinding to aggregate.
     */
    where?: PromptBindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptBindings to fetch.
     */
    orderBy?: PromptBindingOrderByWithRelationInput | PromptBindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptBindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptBindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptBindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromptBindings
    **/
    _count?: true | PromptBindingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromptBindingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromptBindingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptBindingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptBindingMaxAggregateInputType
  }

  export type GetPromptBindingAggregateType<T extends PromptBindingAggregateArgs> = {
        [P in keyof T & keyof AggregatePromptBinding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromptBinding[P]>
      : GetScalarType<T[P], AggregatePromptBinding[P]>
  }




  export type PromptBindingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptBindingWhereInput
    orderBy?: PromptBindingOrderByWithAggregationInput | PromptBindingOrderByWithAggregationInput[]
    by: PromptBindingScalarFieldEnum[] | PromptBindingScalarFieldEnum
    having?: PromptBindingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptBindingCountAggregateInputType | true
    _avg?: PromptBindingAvgAggregateInputType
    _sum?: PromptBindingSumAggregateInputType
    _min?: PromptBindingMinAggregateInputType
    _max?: PromptBindingMaxAggregateInputType
  }

  export type PromptBindingGroupByOutputType = {
    id: number
    agentId: number
    promptTemplateId: number
    createdAt: Date
    _count: PromptBindingCountAggregateOutputType | null
    _avg: PromptBindingAvgAggregateOutputType | null
    _sum: PromptBindingSumAggregateOutputType | null
    _min: PromptBindingMinAggregateOutputType | null
    _max: PromptBindingMaxAggregateOutputType | null
  }

  type GetPromptBindingGroupByPayload<T extends PromptBindingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptBindingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptBindingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptBindingGroupByOutputType[P]>
            : GetScalarType<T[P], PromptBindingGroupByOutputType[P]>
        }
      >
    >


  export type PromptBindingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    promptTemplateId?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    promptTemplate?: boolean | PromptTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptBinding"]>

  export type PromptBindingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    promptTemplateId?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    promptTemplate?: boolean | PromptTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptBinding"]>

  export type PromptBindingSelectScalar = {
    id?: boolean
    agentId?: boolean
    promptTemplateId?: boolean
    createdAt?: boolean
  }

  export type PromptBindingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    promptTemplate?: boolean | PromptTemplateDefaultArgs<ExtArgs>
  }
  export type PromptBindingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    promptTemplate?: boolean | PromptTemplateDefaultArgs<ExtArgs>
  }

  export type $PromptBindingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromptBinding"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
      promptTemplate: Prisma.$PromptTemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      agentId: number
      promptTemplateId: number
      createdAt: Date
    }, ExtArgs["result"]["promptBinding"]>
    composites: {}
  }

  type PromptBindingGetPayload<S extends boolean | null | undefined | PromptBindingDefaultArgs> = $Result.GetResult<Prisma.$PromptBindingPayload, S>

  type PromptBindingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromptBindingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromptBindingCountAggregateInputType | true
    }

  export interface PromptBindingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromptBinding'], meta: { name: 'PromptBinding' } }
    /**
     * Find zero or one PromptBinding that matches the filter.
     * @param {PromptBindingFindUniqueArgs} args - Arguments to find a PromptBinding
     * @example
     * // Get one PromptBinding
     * const promptBinding = await prisma.promptBinding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptBindingFindUniqueArgs>(args: SelectSubset<T, PromptBindingFindUniqueArgs<ExtArgs>>): Prisma__PromptBindingClient<$Result.GetResult<Prisma.$PromptBindingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PromptBinding that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PromptBindingFindUniqueOrThrowArgs} args - Arguments to find a PromptBinding
     * @example
     * // Get one PromptBinding
     * const promptBinding = await prisma.promptBinding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptBindingFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptBindingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptBindingClient<$Result.GetResult<Prisma.$PromptBindingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PromptBinding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptBindingFindFirstArgs} args - Arguments to find a PromptBinding
     * @example
     * // Get one PromptBinding
     * const promptBinding = await prisma.promptBinding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptBindingFindFirstArgs>(args?: SelectSubset<T, PromptBindingFindFirstArgs<ExtArgs>>): Prisma__PromptBindingClient<$Result.GetResult<Prisma.$PromptBindingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PromptBinding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptBindingFindFirstOrThrowArgs} args - Arguments to find a PromptBinding
     * @example
     * // Get one PromptBinding
     * const promptBinding = await prisma.promptBinding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptBindingFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptBindingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptBindingClient<$Result.GetResult<Prisma.$PromptBindingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PromptBindings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptBindingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromptBindings
     * const promptBindings = await prisma.promptBinding.findMany()
     * 
     * // Get first 10 PromptBindings
     * const promptBindings = await prisma.promptBinding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptBindingWithIdOnly = await prisma.promptBinding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptBindingFindManyArgs>(args?: SelectSubset<T, PromptBindingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptBindingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PromptBinding.
     * @param {PromptBindingCreateArgs} args - Arguments to create a PromptBinding.
     * @example
     * // Create one PromptBinding
     * const PromptBinding = await prisma.promptBinding.create({
     *   data: {
     *     // ... data to create a PromptBinding
     *   }
     * })
     * 
     */
    create<T extends PromptBindingCreateArgs>(args: SelectSubset<T, PromptBindingCreateArgs<ExtArgs>>): Prisma__PromptBindingClient<$Result.GetResult<Prisma.$PromptBindingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PromptBindings.
     * @param {PromptBindingCreateManyArgs} args - Arguments to create many PromptBindings.
     * @example
     * // Create many PromptBindings
     * const promptBinding = await prisma.promptBinding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptBindingCreateManyArgs>(args?: SelectSubset<T, PromptBindingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromptBindings and returns the data saved in the database.
     * @param {PromptBindingCreateManyAndReturnArgs} args - Arguments to create many PromptBindings.
     * @example
     * // Create many PromptBindings
     * const promptBinding = await prisma.promptBinding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromptBindings and only return the `id`
     * const promptBindingWithIdOnly = await prisma.promptBinding.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptBindingCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptBindingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptBindingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PromptBinding.
     * @param {PromptBindingDeleteArgs} args - Arguments to delete one PromptBinding.
     * @example
     * // Delete one PromptBinding
     * const PromptBinding = await prisma.promptBinding.delete({
     *   where: {
     *     // ... filter to delete one PromptBinding
     *   }
     * })
     * 
     */
    delete<T extends PromptBindingDeleteArgs>(args: SelectSubset<T, PromptBindingDeleteArgs<ExtArgs>>): Prisma__PromptBindingClient<$Result.GetResult<Prisma.$PromptBindingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PromptBinding.
     * @param {PromptBindingUpdateArgs} args - Arguments to update one PromptBinding.
     * @example
     * // Update one PromptBinding
     * const promptBinding = await prisma.promptBinding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptBindingUpdateArgs>(args: SelectSubset<T, PromptBindingUpdateArgs<ExtArgs>>): Prisma__PromptBindingClient<$Result.GetResult<Prisma.$PromptBindingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PromptBindings.
     * @param {PromptBindingDeleteManyArgs} args - Arguments to filter PromptBindings to delete.
     * @example
     * // Delete a few PromptBindings
     * const { count } = await prisma.promptBinding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptBindingDeleteManyArgs>(args?: SelectSubset<T, PromptBindingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptBindings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptBindingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromptBindings
     * const promptBinding = await prisma.promptBinding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptBindingUpdateManyArgs>(args: SelectSubset<T, PromptBindingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PromptBinding.
     * @param {PromptBindingUpsertArgs} args - Arguments to update or create a PromptBinding.
     * @example
     * // Update or create a PromptBinding
     * const promptBinding = await prisma.promptBinding.upsert({
     *   create: {
     *     // ... data to create a PromptBinding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromptBinding we want to update
     *   }
     * })
     */
    upsert<T extends PromptBindingUpsertArgs>(args: SelectSubset<T, PromptBindingUpsertArgs<ExtArgs>>): Prisma__PromptBindingClient<$Result.GetResult<Prisma.$PromptBindingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PromptBindings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptBindingCountArgs} args - Arguments to filter PromptBindings to count.
     * @example
     * // Count the number of PromptBindings
     * const count = await prisma.promptBinding.count({
     *   where: {
     *     // ... the filter for the PromptBindings we want to count
     *   }
     * })
    **/
    count<T extends PromptBindingCountArgs>(
      args?: Subset<T, PromptBindingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptBindingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromptBinding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptBindingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromptBindingAggregateArgs>(args: Subset<T, PromptBindingAggregateArgs>): Prisma.PrismaPromise<GetPromptBindingAggregateType<T>>

    /**
     * Group by PromptBinding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptBindingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromptBindingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptBindingGroupByArgs['orderBy'] }
        : { orderBy?: PromptBindingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromptBindingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptBindingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromptBinding model
   */
  readonly fields: PromptBindingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromptBinding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptBindingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    promptTemplate<T extends PromptTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromptTemplateDefaultArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PromptBinding model
   */ 
  interface PromptBindingFieldRefs {
    readonly id: FieldRef<"PromptBinding", 'Int'>
    readonly agentId: FieldRef<"PromptBinding", 'Int'>
    readonly promptTemplateId: FieldRef<"PromptBinding", 'Int'>
    readonly createdAt: FieldRef<"PromptBinding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PromptBinding findUnique
   */
  export type PromptBindingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptBinding
     */
    select?: PromptBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptBindingInclude<ExtArgs> | null
    /**
     * Filter, which PromptBinding to fetch.
     */
    where: PromptBindingWhereUniqueInput
  }

  /**
   * PromptBinding findUniqueOrThrow
   */
  export type PromptBindingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptBinding
     */
    select?: PromptBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptBindingInclude<ExtArgs> | null
    /**
     * Filter, which PromptBinding to fetch.
     */
    where: PromptBindingWhereUniqueInput
  }

  /**
   * PromptBinding findFirst
   */
  export type PromptBindingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptBinding
     */
    select?: PromptBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptBindingInclude<ExtArgs> | null
    /**
     * Filter, which PromptBinding to fetch.
     */
    where?: PromptBindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptBindings to fetch.
     */
    orderBy?: PromptBindingOrderByWithRelationInput | PromptBindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptBindings.
     */
    cursor?: PromptBindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptBindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptBindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptBindings.
     */
    distinct?: PromptBindingScalarFieldEnum | PromptBindingScalarFieldEnum[]
  }

  /**
   * PromptBinding findFirstOrThrow
   */
  export type PromptBindingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptBinding
     */
    select?: PromptBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptBindingInclude<ExtArgs> | null
    /**
     * Filter, which PromptBinding to fetch.
     */
    where?: PromptBindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptBindings to fetch.
     */
    orderBy?: PromptBindingOrderByWithRelationInput | PromptBindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptBindings.
     */
    cursor?: PromptBindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptBindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptBindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptBindings.
     */
    distinct?: PromptBindingScalarFieldEnum | PromptBindingScalarFieldEnum[]
  }

  /**
   * PromptBinding findMany
   */
  export type PromptBindingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptBinding
     */
    select?: PromptBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptBindingInclude<ExtArgs> | null
    /**
     * Filter, which PromptBindings to fetch.
     */
    where?: PromptBindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptBindings to fetch.
     */
    orderBy?: PromptBindingOrderByWithRelationInput | PromptBindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromptBindings.
     */
    cursor?: PromptBindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptBindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptBindings.
     */
    skip?: number
    distinct?: PromptBindingScalarFieldEnum | PromptBindingScalarFieldEnum[]
  }

  /**
   * PromptBinding create
   */
  export type PromptBindingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptBinding
     */
    select?: PromptBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptBindingInclude<ExtArgs> | null
    /**
     * The data needed to create a PromptBinding.
     */
    data: XOR<PromptBindingCreateInput, PromptBindingUncheckedCreateInput>
  }

  /**
   * PromptBinding createMany
   */
  export type PromptBindingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromptBindings.
     */
    data: PromptBindingCreateManyInput | PromptBindingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromptBinding createManyAndReturn
   */
  export type PromptBindingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptBinding
     */
    select?: PromptBindingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PromptBindings.
     */
    data: PromptBindingCreateManyInput | PromptBindingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptBindingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromptBinding update
   */
  export type PromptBindingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptBinding
     */
    select?: PromptBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptBindingInclude<ExtArgs> | null
    /**
     * The data needed to update a PromptBinding.
     */
    data: XOR<PromptBindingUpdateInput, PromptBindingUncheckedUpdateInput>
    /**
     * Choose, which PromptBinding to update.
     */
    where: PromptBindingWhereUniqueInput
  }

  /**
   * PromptBinding updateMany
   */
  export type PromptBindingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromptBindings.
     */
    data: XOR<PromptBindingUpdateManyMutationInput, PromptBindingUncheckedUpdateManyInput>
    /**
     * Filter which PromptBindings to update
     */
    where?: PromptBindingWhereInput
  }

  /**
   * PromptBinding upsert
   */
  export type PromptBindingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptBinding
     */
    select?: PromptBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptBindingInclude<ExtArgs> | null
    /**
     * The filter to search for the PromptBinding to update in case it exists.
     */
    where: PromptBindingWhereUniqueInput
    /**
     * In case the PromptBinding found by the `where` argument doesn't exist, create a new PromptBinding with this data.
     */
    create: XOR<PromptBindingCreateInput, PromptBindingUncheckedCreateInput>
    /**
     * In case the PromptBinding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptBindingUpdateInput, PromptBindingUncheckedUpdateInput>
  }

  /**
   * PromptBinding delete
   */
  export type PromptBindingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptBinding
     */
    select?: PromptBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptBindingInclude<ExtArgs> | null
    /**
     * Filter which PromptBinding to delete.
     */
    where: PromptBindingWhereUniqueInput
  }

  /**
   * PromptBinding deleteMany
   */
  export type PromptBindingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptBindings to delete
     */
    where?: PromptBindingWhereInput
  }

  /**
   * PromptBinding without action
   */
  export type PromptBindingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptBinding
     */
    select?: PromptBindingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptBindingInclude<ExtArgs> | null
  }


  /**
   * Model Tournament
   */

  export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  export type TournamentAvgAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type TournamentSumAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type TournamentMinAggregateOutputType = {
    id: number | null
    name: string | null
    year: number | null
    hostCountry: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type TournamentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    year: number | null
    hostCountry: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type TournamentCountAggregateOutputType = {
    id: number
    name: number
    year: number
    hostCountry: number
    startDate: number
    endDate: number
    status: number
    createdAt: number
    _all: number
  }


  export type TournamentAvgAggregateInputType = {
    id?: true
    year?: true
  }

  export type TournamentSumAggregateInputType = {
    id?: true
    year?: true
  }

  export type TournamentMinAggregateInputType = {
    id?: true
    name?: true
    year?: true
    hostCountry?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
  }

  export type TournamentMaxAggregateInputType = {
    id?: true
    name?: true
    year?: true
    hostCountry?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
  }

  export type TournamentCountAggregateInputType = {
    id?: true
    name?: true
    year?: true
    hostCountry?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type TournamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tournaments
    **/
    _count?: true | TournamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TournamentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TournamentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentMaxAggregateInputType
  }

  export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
        [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournament[P]>
      : GetScalarType<T[P], AggregateTournament[P]>
  }




  export type TournamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithAggregationInput | TournamentOrderByWithAggregationInput[]
    by: TournamentScalarFieldEnum[] | TournamentScalarFieldEnum
    having?: TournamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentCountAggregateInputType | true
    _avg?: TournamentAvgAggregateInputType
    _sum?: TournamentSumAggregateInputType
    _min?: TournamentMinAggregateInputType
    _max?: TournamentMaxAggregateInputType
  }

  export type TournamentGroupByOutputType = {
    id: number
    name: string
    year: number
    hostCountry: string
    startDate: Date
    endDate: Date
    status: string
    createdAt: Date
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentGroupByOutputType[P]>
        }
      >
    >


  export type TournamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    year?: boolean
    hostCountry?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    fixtures?: boolean | Tournament$fixturesArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    year?: boolean
    hostCountry?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectScalar = {
    id?: boolean
    name?: boolean
    year?: boolean
    hostCountry?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type TournamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixtures?: boolean | Tournament$fixturesArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TournamentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tournament"
    objects: {
      fixtures: Prisma.$FixturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      year: number
      hostCountry: string
      startDate: Date
      endDate: Date
      status: string
      createdAt: Date
    }, ExtArgs["result"]["tournament"]>
    composites: {}
  }

  type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = $Result.GetResult<Prisma.$TournamentPayload, S>

  type TournamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TournamentCountAggregateInputType | true
    }

  export interface TournamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tournament'], meta: { name: 'Tournament' } }
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentFindUniqueArgs>(args: SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tournament that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentFindFirstArgs>(args?: SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     * 
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentFindManyArgs>(args?: SelectSubset<T, TournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     * 
     */
    create<T extends TournamentCreateArgs>(args: SelectSubset<T, TournamentCreateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tournaments.
     * @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentCreateManyArgs>(args?: SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tournaments and returns the data saved in the database.
     * @param {TournamentCreateManyAndReturnArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     * 
     */
    delete<T extends TournamentDeleteArgs>(args: SelectSubset<T, TournamentDeleteArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentUpdateArgs>(args: SelectSubset<T, TournamentUpdateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentDeleteManyArgs>(args?: SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentUpdateManyArgs>(args: SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
     */
    upsert<T extends TournamentUpsertArgs>(args: SelectSubset<T, TournamentUpsertArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
    **/
    count<T extends TournamentCountArgs>(
      args?: Subset<T, TournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TournamentAggregateArgs>(args: Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>

    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentGroupByArgs['orderBy'] }
        : { orderBy?: TournamentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tournament model
   */
  readonly fields: TournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fixtures<T extends Tournament$fixturesArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$fixturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tournament model
   */ 
  interface TournamentFieldRefs {
    readonly id: FieldRef<"Tournament", 'Int'>
    readonly name: FieldRef<"Tournament", 'String'>
    readonly year: FieldRef<"Tournament", 'Int'>
    readonly hostCountry: FieldRef<"Tournament", 'String'>
    readonly startDate: FieldRef<"Tournament", 'DateTime'>
    readonly endDate: FieldRef<"Tournament", 'DateTime'>
    readonly status: FieldRef<"Tournament", 'String'>
    readonly createdAt: FieldRef<"Tournament", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tournament findUnique
   */
  export type TournamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findUniqueOrThrow
   */
  export type TournamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findFirst
   */
  export type TournamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findFirstOrThrow
   */
  export type TournamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findMany
   */
  export type TournamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament create
   */
  export type TournamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to create a Tournament.
     */
    data: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
  }

  /**
   * Tournament createMany
   */
  export type TournamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tournament createManyAndReturn
   */
  export type TournamentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tournament update
   */
  export type TournamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to update a Tournament.
     */
    data: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
    /**
     * Choose, which Tournament to update.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament updateMany
   */
  export type TournamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
  }

  /**
   * Tournament upsert
   */
  export type TournamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: TournamentWhereUniqueInput
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
  }

  /**
   * Tournament delete
   */
  export type TournamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter which Tournament to delete.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament deleteMany
   */
  export type TournamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournaments to delete
     */
    where?: TournamentWhereInput
  }

  /**
   * Tournament.fixtures
   */
  export type Tournament$fixturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    where?: FixtureWhereInput
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    cursor?: FixtureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Tournament without action
   */
  export type TournamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
  }


  /**
   * Model NewsItem
   */

  export type AggregateNewsItem = {
    _count: NewsItemCountAggregateOutputType | null
    _avg: NewsItemAvgAggregateOutputType | null
    _sum: NewsItemSumAggregateOutputType | null
    _min: NewsItemMinAggregateOutputType | null
    _max: NewsItemMaxAggregateOutputType | null
  }

  export type NewsItemAvgAggregateOutputType = {
    id: number | null
  }

  export type NewsItemSumAggregateOutputType = {
    id: number | null
  }

  export type NewsItemMinAggregateOutputType = {
    id: number | null
    title: string | null
    summary: string | null
    source: string | null
    url: string | null
    relevance: string | null
    sentiment: string | null
    aiClassification: string | null
    publishedAt: Date | null
    createdAt: Date | null
  }

  export type NewsItemMaxAggregateOutputType = {
    id: number | null
    title: string | null
    summary: string | null
    source: string | null
    url: string | null
    relevance: string | null
    sentiment: string | null
    aiClassification: string | null
    publishedAt: Date | null
    createdAt: Date | null
  }

  export type NewsItemCountAggregateOutputType = {
    id: number
    title: number
    summary: number
    source: number
    url: number
    relevance: number
    sentiment: number
    aiClassification: number
    publishedAt: number
    createdAt: number
    _all: number
  }


  export type NewsItemAvgAggregateInputType = {
    id?: true
  }

  export type NewsItemSumAggregateInputType = {
    id?: true
  }

  export type NewsItemMinAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    source?: true
    url?: true
    relevance?: true
    sentiment?: true
    aiClassification?: true
    publishedAt?: true
    createdAt?: true
  }

  export type NewsItemMaxAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    source?: true
    url?: true
    relevance?: true
    sentiment?: true
    aiClassification?: true
    publishedAt?: true
    createdAt?: true
  }

  export type NewsItemCountAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    source?: true
    url?: true
    relevance?: true
    sentiment?: true
    aiClassification?: true
    publishedAt?: true
    createdAt?: true
    _all?: true
  }

  export type NewsItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsItem to aggregate.
     */
    where?: NewsItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsItems to fetch.
     */
    orderBy?: NewsItemOrderByWithRelationInput | NewsItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsItems
    **/
    _count?: true | NewsItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsItemMaxAggregateInputType
  }

  export type GetNewsItemAggregateType<T extends NewsItemAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsItem[P]>
      : GetScalarType<T[P], AggregateNewsItem[P]>
  }




  export type NewsItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsItemWhereInput
    orderBy?: NewsItemOrderByWithAggregationInput | NewsItemOrderByWithAggregationInput[]
    by: NewsItemScalarFieldEnum[] | NewsItemScalarFieldEnum
    having?: NewsItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsItemCountAggregateInputType | true
    _avg?: NewsItemAvgAggregateInputType
    _sum?: NewsItemSumAggregateInputType
    _min?: NewsItemMinAggregateInputType
    _max?: NewsItemMaxAggregateInputType
  }

  export type NewsItemGroupByOutputType = {
    id: number
    title: string
    summary: string | null
    source: string
    url: string | null
    relevance: string | null
    sentiment: string | null
    aiClassification: string | null
    publishedAt: Date
    createdAt: Date
    _count: NewsItemCountAggregateOutputType | null
    _avg: NewsItemAvgAggregateOutputType | null
    _sum: NewsItemSumAggregateOutputType | null
    _min: NewsItemMinAggregateOutputType | null
    _max: NewsItemMaxAggregateOutputType | null
  }

  type GetNewsItemGroupByPayload<T extends NewsItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsItemGroupByOutputType[P]>
            : GetScalarType<T[P], NewsItemGroupByOutputType[P]>
        }
      >
    >


  export type NewsItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    source?: boolean
    url?: boolean
    relevance?: boolean
    sentiment?: boolean
    aiClassification?: boolean
    publishedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsItem"]>

  export type NewsItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    source?: boolean
    url?: boolean
    relevance?: boolean
    sentiment?: boolean
    aiClassification?: boolean
    publishedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsItem"]>

  export type NewsItemSelectScalar = {
    id?: boolean
    title?: boolean
    summary?: boolean
    source?: boolean
    url?: boolean
    relevance?: boolean
    sentiment?: boolean
    aiClassification?: boolean
    publishedAt?: boolean
    createdAt?: boolean
  }


  export type $NewsItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      summary: string | null
      source: string
      url: string | null
      relevance: string | null
      sentiment: string | null
      aiClassification: string | null
      publishedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["newsItem"]>
    composites: {}
  }

  type NewsItemGetPayload<S extends boolean | null | undefined | NewsItemDefaultArgs> = $Result.GetResult<Prisma.$NewsItemPayload, S>

  type NewsItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NewsItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NewsItemCountAggregateInputType | true
    }

  export interface NewsItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsItem'], meta: { name: 'NewsItem' } }
    /**
     * Find zero or one NewsItem that matches the filter.
     * @param {NewsItemFindUniqueArgs} args - Arguments to find a NewsItem
     * @example
     * // Get one NewsItem
     * const newsItem = await prisma.newsItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsItemFindUniqueArgs>(args: SelectSubset<T, NewsItemFindUniqueArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NewsItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NewsItemFindUniqueOrThrowArgs} args - Arguments to find a NewsItem
     * @example
     * // Get one NewsItem
     * const newsItem = await prisma.newsItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsItemFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NewsItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemFindFirstArgs} args - Arguments to find a NewsItem
     * @example
     * // Get one NewsItem
     * const newsItem = await prisma.newsItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsItemFindFirstArgs>(args?: SelectSubset<T, NewsItemFindFirstArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NewsItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemFindFirstOrThrowArgs} args - Arguments to find a NewsItem
     * @example
     * // Get one NewsItem
     * const newsItem = await prisma.newsItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsItemFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NewsItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsItems
     * const newsItems = await prisma.newsItem.findMany()
     * 
     * // Get first 10 NewsItems
     * const newsItems = await prisma.newsItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsItemWithIdOnly = await prisma.newsItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsItemFindManyArgs>(args?: SelectSubset<T, NewsItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NewsItem.
     * @param {NewsItemCreateArgs} args - Arguments to create a NewsItem.
     * @example
     * // Create one NewsItem
     * const NewsItem = await prisma.newsItem.create({
     *   data: {
     *     // ... data to create a NewsItem
     *   }
     * })
     * 
     */
    create<T extends NewsItemCreateArgs>(args: SelectSubset<T, NewsItemCreateArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NewsItems.
     * @param {NewsItemCreateManyArgs} args - Arguments to create many NewsItems.
     * @example
     * // Create many NewsItems
     * const newsItem = await prisma.newsItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsItemCreateManyArgs>(args?: SelectSubset<T, NewsItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsItems and returns the data saved in the database.
     * @param {NewsItemCreateManyAndReturnArgs} args - Arguments to create many NewsItems.
     * @example
     * // Create many NewsItems
     * const newsItem = await prisma.newsItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsItems and only return the `id`
     * const newsItemWithIdOnly = await prisma.newsItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsItemCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NewsItem.
     * @param {NewsItemDeleteArgs} args - Arguments to delete one NewsItem.
     * @example
     * // Delete one NewsItem
     * const NewsItem = await prisma.newsItem.delete({
     *   where: {
     *     // ... filter to delete one NewsItem
     *   }
     * })
     * 
     */
    delete<T extends NewsItemDeleteArgs>(args: SelectSubset<T, NewsItemDeleteArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NewsItem.
     * @param {NewsItemUpdateArgs} args - Arguments to update one NewsItem.
     * @example
     * // Update one NewsItem
     * const newsItem = await prisma.newsItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsItemUpdateArgs>(args: SelectSubset<T, NewsItemUpdateArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NewsItems.
     * @param {NewsItemDeleteManyArgs} args - Arguments to filter NewsItems to delete.
     * @example
     * // Delete a few NewsItems
     * const { count } = await prisma.newsItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsItemDeleteManyArgs>(args?: SelectSubset<T, NewsItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsItems
     * const newsItem = await prisma.newsItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsItemUpdateManyArgs>(args: SelectSubset<T, NewsItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NewsItem.
     * @param {NewsItemUpsertArgs} args - Arguments to update or create a NewsItem.
     * @example
     * // Update or create a NewsItem
     * const newsItem = await prisma.newsItem.upsert({
     *   create: {
     *     // ... data to create a NewsItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsItem we want to update
     *   }
     * })
     */
    upsert<T extends NewsItemUpsertArgs>(args: SelectSubset<T, NewsItemUpsertArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NewsItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemCountArgs} args - Arguments to filter NewsItems to count.
     * @example
     * // Count the number of NewsItems
     * const count = await prisma.newsItem.count({
     *   where: {
     *     // ... the filter for the NewsItems we want to count
     *   }
     * })
    **/
    count<T extends NewsItemCountArgs>(
      args?: Subset<T, NewsItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsItemAggregateArgs>(args: Subset<T, NewsItemAggregateArgs>): Prisma.PrismaPromise<GetNewsItemAggregateType<T>>

    /**
     * Group by NewsItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsItemGroupByArgs['orderBy'] }
        : { orderBy?: NewsItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsItem model
   */
  readonly fields: NewsItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsItem model
   */ 
  interface NewsItemFieldRefs {
    readonly id: FieldRef<"NewsItem", 'Int'>
    readonly title: FieldRef<"NewsItem", 'String'>
    readonly summary: FieldRef<"NewsItem", 'String'>
    readonly source: FieldRef<"NewsItem", 'String'>
    readonly url: FieldRef<"NewsItem", 'String'>
    readonly relevance: FieldRef<"NewsItem", 'String'>
    readonly sentiment: FieldRef<"NewsItem", 'String'>
    readonly aiClassification: FieldRef<"NewsItem", 'String'>
    readonly publishedAt: FieldRef<"NewsItem", 'DateTime'>
    readonly createdAt: FieldRef<"NewsItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsItem findUnique
   */
  export type NewsItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Filter, which NewsItem to fetch.
     */
    where: NewsItemWhereUniqueInput
  }

  /**
   * NewsItem findUniqueOrThrow
   */
  export type NewsItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Filter, which NewsItem to fetch.
     */
    where: NewsItemWhereUniqueInput
  }

  /**
   * NewsItem findFirst
   */
  export type NewsItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Filter, which NewsItem to fetch.
     */
    where?: NewsItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsItems to fetch.
     */
    orderBy?: NewsItemOrderByWithRelationInput | NewsItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsItems.
     */
    cursor?: NewsItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsItems.
     */
    distinct?: NewsItemScalarFieldEnum | NewsItemScalarFieldEnum[]
  }

  /**
   * NewsItem findFirstOrThrow
   */
  export type NewsItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Filter, which NewsItem to fetch.
     */
    where?: NewsItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsItems to fetch.
     */
    orderBy?: NewsItemOrderByWithRelationInput | NewsItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsItems.
     */
    cursor?: NewsItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsItems.
     */
    distinct?: NewsItemScalarFieldEnum | NewsItemScalarFieldEnum[]
  }

  /**
   * NewsItem findMany
   */
  export type NewsItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Filter, which NewsItems to fetch.
     */
    where?: NewsItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsItems to fetch.
     */
    orderBy?: NewsItemOrderByWithRelationInput | NewsItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsItems.
     */
    cursor?: NewsItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsItems.
     */
    skip?: number
    distinct?: NewsItemScalarFieldEnum | NewsItemScalarFieldEnum[]
  }

  /**
   * NewsItem create
   */
  export type NewsItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * The data needed to create a NewsItem.
     */
    data: XOR<NewsItemCreateInput, NewsItemUncheckedCreateInput>
  }

  /**
   * NewsItem createMany
   */
  export type NewsItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsItems.
     */
    data: NewsItemCreateManyInput | NewsItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsItem createManyAndReturn
   */
  export type NewsItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NewsItems.
     */
    data: NewsItemCreateManyInput | NewsItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsItem update
   */
  export type NewsItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * The data needed to update a NewsItem.
     */
    data: XOR<NewsItemUpdateInput, NewsItemUncheckedUpdateInput>
    /**
     * Choose, which NewsItem to update.
     */
    where: NewsItemWhereUniqueInput
  }

  /**
   * NewsItem updateMany
   */
  export type NewsItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsItems.
     */
    data: XOR<NewsItemUpdateManyMutationInput, NewsItemUncheckedUpdateManyInput>
    /**
     * Filter which NewsItems to update
     */
    where?: NewsItemWhereInput
  }

  /**
   * NewsItem upsert
   */
  export type NewsItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * The filter to search for the NewsItem to update in case it exists.
     */
    where: NewsItemWhereUniqueInput
    /**
     * In case the NewsItem found by the `where` argument doesn't exist, create a new NewsItem with this data.
     */
    create: XOR<NewsItemCreateInput, NewsItemUncheckedCreateInput>
    /**
     * In case the NewsItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsItemUpdateInput, NewsItemUncheckedUpdateInput>
  }

  /**
   * NewsItem delete
   */
  export type NewsItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Filter which NewsItem to delete.
     */
    where: NewsItemWhereUniqueInput
  }

  /**
   * NewsItem deleteMany
   */
  export type NewsItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsItems to delete
     */
    where?: NewsItemWhereInput
  }

  /**
   * NewsItem without action
   */
  export type NewsItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AgentScalarFieldEnum: {
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

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const BetScalarFieldEnum: {
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

  export type BetScalarFieldEnum = (typeof BetScalarFieldEnum)[keyof typeof BetScalarFieldEnum]


  export const FixtureScalarFieldEnum: {
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

  export type FixtureScalarFieldEnum = (typeof FixtureScalarFieldEnum)[keyof typeof FixtureScalarFieldEnum]


  export const OddsSnapshotScalarFieldEnum: {
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

  export type OddsSnapshotScalarFieldEnum = (typeof OddsSnapshotScalarFieldEnum)[keyof typeof OddsSnapshotScalarFieldEnum]


  export const MatchEventScalarFieldEnum: {
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

  export type MatchEventScalarFieldEnum = (typeof MatchEventScalarFieldEnum)[keyof typeof MatchEventScalarFieldEnum]


  export const SignalScalarFieldEnum: {
    id: 'id',
    fixtureId: 'fixtureId',
    type: 'type',
    severity: 'severity',
    description: 'description',
    metadata: 'metadata',
    triggeredAt: 'triggeredAt'
  };

  export type SignalScalarFieldEnum = (typeof SignalScalarFieldEnum)[keyof typeof SignalScalarFieldEnum]


  export const DecisionLogScalarFieldEnum: {
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

  export type DecisionLogScalarFieldEnum = (typeof DecisionLogScalarFieldEnum)[keyof typeof DecisionLogScalarFieldEnum]


  export const BankrollSnapshotScalarFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    totalBankroll: 'totalBankroll',
    cash: 'cash',
    openBetsValue: 'openBetsValue',
    unrealizedPnl: 'unrealizedPnl',
    snapshotTime: 'snapshotTime'
  };

  export type BankrollSnapshotScalarFieldEnum = (typeof BankrollSnapshotScalarFieldEnum)[keyof typeof BankrollSnapshotScalarFieldEnum]


  export const StrategyConfigScalarFieldEnum: {
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

  export type StrategyConfigScalarFieldEnum = (typeof StrategyConfigScalarFieldEnum)[keyof typeof StrategyConfigScalarFieldEnum]


  export const PromptTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    content: 'content',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromptTemplateScalarFieldEnum = (typeof PromptTemplateScalarFieldEnum)[keyof typeof PromptTemplateScalarFieldEnum]


  export const PromptBindingScalarFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    promptTemplateId: 'promptTemplateId',
    createdAt: 'createdAt'
  };

  export type PromptBindingScalarFieldEnum = (typeof PromptBindingScalarFieldEnum)[keyof typeof PromptBindingScalarFieldEnum]


  export const TournamentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    year: 'year',
    hostCountry: 'hostCountry',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum]


  export const NewsItemScalarFieldEnum: {
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

  export type NewsItemScalarFieldEnum = (typeof NewsItemScalarFieldEnum)[keyof typeof NewsItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type AgentWhereInput = {
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    id?: IntFilter<"Agent"> | number
    name?: StringFilter<"Agent"> | string
    slug?: StringFilter<"Agent"> | string
    model?: StringFilter<"Agent"> | string
    baseUrl?: StringFilter<"Agent"> | string
    apiKey?: StringNullableFilter<"Agent"> | string | null
    strategy?: StringFilter<"Agent"> | string
    avatarPresetId?: IntNullableFilter<"Agent"> | number | null
    initialCapital?: DecimalFilter<"Agent"> | Decimal | DecimalJsLike | number | string
    currentCash?: DecimalFilter<"Agent"> | Decimal | DecimalJsLike | number | string
    frozenCash?: DecimalFilter<"Agent"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Agent"> | boolean
    autoTradingEnabled?: BoolFilter<"Agent"> | boolean
    showOnDashboard?: BoolFilter<"Agent"> | boolean
    maxStakePercent?: FloatFilter<"Agent"> | number
    maxOpenBets?: IntFilter<"Agent"> | number
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
    bets?: BetListRelationFilter
    decisionLogs?: DecisionLogListRelationFilter
    strategyConfig?: XOR<StrategyConfigNullableRelationFilter, StrategyConfigWhereInput> | null
    promptBinding?: XOR<PromptBindingNullableRelationFilter, PromptBindingWhereInput> | null
    snapshots?: BankrollSnapshotListRelationFilter
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    model?: SortOrder
    baseUrl?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    strategy?: SortOrder
    avatarPresetId?: SortOrderInput | SortOrder
    initialCapital?: SortOrder
    currentCash?: SortOrder
    frozenCash?: SortOrder
    isActive?: SortOrder
    autoTradingEnabled?: SortOrder
    showOnDashboard?: SortOrder
    maxStakePercent?: SortOrder
    maxOpenBets?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bets?: BetOrderByRelationAggregateInput
    decisionLogs?: DecisionLogOrderByRelationAggregateInput
    strategyConfig?: StrategyConfigOrderByWithRelationInput
    promptBinding?: PromptBindingOrderByWithRelationInput
    snapshots?: BankrollSnapshotOrderByRelationAggregateInput
  }

  export type AgentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    slug?: string
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    model?: StringFilter<"Agent"> | string
    baseUrl?: StringFilter<"Agent"> | string
    apiKey?: StringNullableFilter<"Agent"> | string | null
    strategy?: StringFilter<"Agent"> | string
    avatarPresetId?: IntNullableFilter<"Agent"> | number | null
    initialCapital?: DecimalFilter<"Agent"> | Decimal | DecimalJsLike | number | string
    currentCash?: DecimalFilter<"Agent"> | Decimal | DecimalJsLike | number | string
    frozenCash?: DecimalFilter<"Agent"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Agent"> | boolean
    autoTradingEnabled?: BoolFilter<"Agent"> | boolean
    showOnDashboard?: BoolFilter<"Agent"> | boolean
    maxStakePercent?: FloatFilter<"Agent"> | number
    maxOpenBets?: IntFilter<"Agent"> | number
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
    bets?: BetListRelationFilter
    decisionLogs?: DecisionLogListRelationFilter
    strategyConfig?: XOR<StrategyConfigNullableRelationFilter, StrategyConfigWhereInput> | null
    promptBinding?: XOR<PromptBindingNullableRelationFilter, PromptBindingWhereInput> | null
    snapshots?: BankrollSnapshotListRelationFilter
  }, "id" | "name" | "slug">

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    model?: SortOrder
    baseUrl?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    strategy?: SortOrder
    avatarPresetId?: SortOrderInput | SortOrder
    initialCapital?: SortOrder
    currentCash?: SortOrder
    frozenCash?: SortOrder
    isActive?: SortOrder
    autoTradingEnabled?: SortOrder
    showOnDashboard?: SortOrder
    maxStakePercent?: SortOrder
    maxOpenBets?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgentCountOrderByAggregateInput
    _avg?: AgentAvgOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
    _sum?: AgentSumOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    OR?: AgentScalarWhereWithAggregatesInput[]
    NOT?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Agent"> | number
    name?: StringWithAggregatesFilter<"Agent"> | string
    slug?: StringWithAggregatesFilter<"Agent"> | string
    model?: StringWithAggregatesFilter<"Agent"> | string
    baseUrl?: StringWithAggregatesFilter<"Agent"> | string
    apiKey?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    strategy?: StringWithAggregatesFilter<"Agent"> | string
    avatarPresetId?: IntNullableWithAggregatesFilter<"Agent"> | number | null
    initialCapital?: DecimalWithAggregatesFilter<"Agent"> | Decimal | DecimalJsLike | number | string
    currentCash?: DecimalWithAggregatesFilter<"Agent"> | Decimal | DecimalJsLike | number | string
    frozenCash?: DecimalWithAggregatesFilter<"Agent"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolWithAggregatesFilter<"Agent"> | boolean
    autoTradingEnabled?: BoolWithAggregatesFilter<"Agent"> | boolean
    showOnDashboard?: BoolWithAggregatesFilter<"Agent"> | boolean
    maxStakePercent?: FloatWithAggregatesFilter<"Agent"> | number
    maxOpenBets?: IntWithAggregatesFilter<"Agent"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
  }

  export type BetWhereInput = {
    AND?: BetWhereInput | BetWhereInput[]
    OR?: BetWhereInput[]
    NOT?: BetWhereInput | BetWhereInput[]
    id?: IntFilter<"Bet"> | number
    agentId?: IntFilter<"Bet"> | number
    fixtureId?: IntFilter<"Bet"> | number
    betNo?: StringFilter<"Bet"> | string
    market?: StringFilter<"Bet"> | string
    selection?: StringFilter<"Bet"> | string
    side?: StringFilter<"Bet"> | string
    odds?: FloatFilter<"Bet"> | number
    stake?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    potentialProfit?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    potentialLoss?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Bet"> | string
    result?: StringNullableFilter<"Bet"> | string | null
    settledAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    realizedPnl?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    confidence?: FloatNullableFilter<"Bet"> | number | null
    signalType?: StringNullableFilter<"Bet"> | string | null
    decisionLogId?: IntNullableFilter<"Bet"> | number | null
    createdAt?: DateTimeFilter<"Bet"> | Date | string
    updatedAt?: DateTimeFilter<"Bet"> | Date | string
    agent?: XOR<AgentRelationFilter, AgentWhereInput>
    fixture?: XOR<FixtureRelationFilter, FixtureWhereInput>
  }

  export type BetOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    fixtureId?: SortOrder
    betNo?: SortOrder
    market?: SortOrder
    selection?: SortOrder
    side?: SortOrder
    odds?: SortOrder
    stake?: SortOrder
    potentialProfit?: SortOrder
    potentialLoss?: SortOrder
    status?: SortOrder
    result?: SortOrderInput | SortOrder
    settledAt?: SortOrderInput | SortOrder
    realizedPnl?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    signalType?: SortOrderInput | SortOrder
    decisionLogId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agent?: AgentOrderByWithRelationInput
    fixture?: FixtureOrderByWithRelationInput
  }

  export type BetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    betNo?: string
    AND?: BetWhereInput | BetWhereInput[]
    OR?: BetWhereInput[]
    NOT?: BetWhereInput | BetWhereInput[]
    agentId?: IntFilter<"Bet"> | number
    fixtureId?: IntFilter<"Bet"> | number
    market?: StringFilter<"Bet"> | string
    selection?: StringFilter<"Bet"> | string
    side?: StringFilter<"Bet"> | string
    odds?: FloatFilter<"Bet"> | number
    stake?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    potentialProfit?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    potentialLoss?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Bet"> | string
    result?: StringNullableFilter<"Bet"> | string | null
    settledAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    realizedPnl?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    confidence?: FloatNullableFilter<"Bet"> | number | null
    signalType?: StringNullableFilter<"Bet"> | string | null
    decisionLogId?: IntNullableFilter<"Bet"> | number | null
    createdAt?: DateTimeFilter<"Bet"> | Date | string
    updatedAt?: DateTimeFilter<"Bet"> | Date | string
    agent?: XOR<AgentRelationFilter, AgentWhereInput>
    fixture?: XOR<FixtureRelationFilter, FixtureWhereInput>
  }, "id" | "betNo">

  export type BetOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    fixtureId?: SortOrder
    betNo?: SortOrder
    market?: SortOrder
    selection?: SortOrder
    side?: SortOrder
    odds?: SortOrder
    stake?: SortOrder
    potentialProfit?: SortOrder
    potentialLoss?: SortOrder
    status?: SortOrder
    result?: SortOrderInput | SortOrder
    settledAt?: SortOrderInput | SortOrder
    realizedPnl?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    signalType?: SortOrderInput | SortOrder
    decisionLogId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BetCountOrderByAggregateInput
    _avg?: BetAvgOrderByAggregateInput
    _max?: BetMaxOrderByAggregateInput
    _min?: BetMinOrderByAggregateInput
    _sum?: BetSumOrderByAggregateInput
  }

  export type BetScalarWhereWithAggregatesInput = {
    AND?: BetScalarWhereWithAggregatesInput | BetScalarWhereWithAggregatesInput[]
    OR?: BetScalarWhereWithAggregatesInput[]
    NOT?: BetScalarWhereWithAggregatesInput | BetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bet"> | number
    agentId?: IntWithAggregatesFilter<"Bet"> | number
    fixtureId?: IntWithAggregatesFilter<"Bet"> | number
    betNo?: StringWithAggregatesFilter<"Bet"> | string
    market?: StringWithAggregatesFilter<"Bet"> | string
    selection?: StringWithAggregatesFilter<"Bet"> | string
    side?: StringWithAggregatesFilter<"Bet"> | string
    odds?: FloatWithAggregatesFilter<"Bet"> | number
    stake?: DecimalWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    potentialProfit?: DecimalWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    potentialLoss?: DecimalWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"Bet"> | string
    result?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    settledAt?: DateTimeNullableWithAggregatesFilter<"Bet"> | Date | string | null
    realizedPnl?: DecimalNullableWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    confidence?: FloatNullableWithAggregatesFilter<"Bet"> | number | null
    signalType?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    decisionLogId?: IntNullableWithAggregatesFilter<"Bet"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Bet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bet"> | Date | string
  }

  export type FixtureWhereInput = {
    AND?: FixtureWhereInput | FixtureWhereInput[]
    OR?: FixtureWhereInput[]
    NOT?: FixtureWhereInput | FixtureWhereInput[]
    id?: IntFilter<"Fixture"> | number
    txlineFixtureId?: StringFilter<"Fixture"> | string
    tournamentId?: IntFilter<"Fixture"> | number
    teamA?: StringFilter<"Fixture"> | string
    teamB?: StringFilter<"Fixture"> | string
    teamACode?: StringFilter<"Fixture"> | string
    teamBCode?: StringFilter<"Fixture"> | string
    stage?: StringFilter<"Fixture"> | string
    venue?: StringNullableFilter<"Fixture"> | string | null
    kickoff?: DateTimeFilter<"Fixture"> | Date | string
    status?: StringFilter<"Fixture"> | string
    scoreA?: IntFilter<"Fixture"> | number
    scoreB?: IntFilter<"Fixture"> | number
    currentMinute?: IntNullableFilter<"Fixture"> | number | null
    currentPeriod?: IntFilter<"Fixture"> | number
    teamAFifaRank?: IntNullableFilter<"Fixture"> | number | null
    teamBFifaRank?: IntNullableFilter<"Fixture"> | number | null
    teamAForm?: StringNullableFilter<"Fixture"> | string | null
    teamBForm?: StringNullableFilter<"Fixture"> | string | null
    createdAt?: DateTimeFilter<"Fixture"> | Date | string
    updatedAt?: DateTimeFilter<"Fixture"> | Date | string
    tournament?: XOR<TournamentRelationFilter, TournamentWhereInput>
    bets?: BetListRelationFilter
    oddsHistory?: OddsSnapshotListRelationFilter
    events?: MatchEventListRelationFilter
    signals?: SignalListRelationFilter
  }

  export type FixtureOrderByWithRelationInput = {
    id?: SortOrder
    txlineFixtureId?: SortOrder
    tournamentId?: SortOrder
    teamA?: SortOrder
    teamB?: SortOrder
    teamACode?: SortOrder
    teamBCode?: SortOrder
    stage?: SortOrder
    venue?: SortOrderInput | SortOrder
    kickoff?: SortOrder
    status?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    currentMinute?: SortOrderInput | SortOrder
    currentPeriod?: SortOrder
    teamAFifaRank?: SortOrderInput | SortOrder
    teamBFifaRank?: SortOrderInput | SortOrder
    teamAForm?: SortOrderInput | SortOrder
    teamBForm?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tournament?: TournamentOrderByWithRelationInput
    bets?: BetOrderByRelationAggregateInput
    oddsHistory?: OddsSnapshotOrderByRelationAggregateInput
    events?: MatchEventOrderByRelationAggregateInput
    signals?: SignalOrderByRelationAggregateInput
  }

  export type FixtureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    txlineFixtureId?: string
    AND?: FixtureWhereInput | FixtureWhereInput[]
    OR?: FixtureWhereInput[]
    NOT?: FixtureWhereInput | FixtureWhereInput[]
    tournamentId?: IntFilter<"Fixture"> | number
    teamA?: StringFilter<"Fixture"> | string
    teamB?: StringFilter<"Fixture"> | string
    teamACode?: StringFilter<"Fixture"> | string
    teamBCode?: StringFilter<"Fixture"> | string
    stage?: StringFilter<"Fixture"> | string
    venue?: StringNullableFilter<"Fixture"> | string | null
    kickoff?: DateTimeFilter<"Fixture"> | Date | string
    status?: StringFilter<"Fixture"> | string
    scoreA?: IntFilter<"Fixture"> | number
    scoreB?: IntFilter<"Fixture"> | number
    currentMinute?: IntNullableFilter<"Fixture"> | number | null
    currentPeriod?: IntFilter<"Fixture"> | number
    teamAFifaRank?: IntNullableFilter<"Fixture"> | number | null
    teamBFifaRank?: IntNullableFilter<"Fixture"> | number | null
    teamAForm?: StringNullableFilter<"Fixture"> | string | null
    teamBForm?: StringNullableFilter<"Fixture"> | string | null
    createdAt?: DateTimeFilter<"Fixture"> | Date | string
    updatedAt?: DateTimeFilter<"Fixture"> | Date | string
    tournament?: XOR<TournamentRelationFilter, TournamentWhereInput>
    bets?: BetListRelationFilter
    oddsHistory?: OddsSnapshotListRelationFilter
    events?: MatchEventListRelationFilter
    signals?: SignalListRelationFilter
  }, "id" | "txlineFixtureId">

  export type FixtureOrderByWithAggregationInput = {
    id?: SortOrder
    txlineFixtureId?: SortOrder
    tournamentId?: SortOrder
    teamA?: SortOrder
    teamB?: SortOrder
    teamACode?: SortOrder
    teamBCode?: SortOrder
    stage?: SortOrder
    venue?: SortOrderInput | SortOrder
    kickoff?: SortOrder
    status?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    currentMinute?: SortOrderInput | SortOrder
    currentPeriod?: SortOrder
    teamAFifaRank?: SortOrderInput | SortOrder
    teamBFifaRank?: SortOrderInput | SortOrder
    teamAForm?: SortOrderInput | SortOrder
    teamBForm?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FixtureCountOrderByAggregateInput
    _avg?: FixtureAvgOrderByAggregateInput
    _max?: FixtureMaxOrderByAggregateInput
    _min?: FixtureMinOrderByAggregateInput
    _sum?: FixtureSumOrderByAggregateInput
  }

  export type FixtureScalarWhereWithAggregatesInput = {
    AND?: FixtureScalarWhereWithAggregatesInput | FixtureScalarWhereWithAggregatesInput[]
    OR?: FixtureScalarWhereWithAggregatesInput[]
    NOT?: FixtureScalarWhereWithAggregatesInput | FixtureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fixture"> | number
    txlineFixtureId?: StringWithAggregatesFilter<"Fixture"> | string
    tournamentId?: IntWithAggregatesFilter<"Fixture"> | number
    teamA?: StringWithAggregatesFilter<"Fixture"> | string
    teamB?: StringWithAggregatesFilter<"Fixture"> | string
    teamACode?: StringWithAggregatesFilter<"Fixture"> | string
    teamBCode?: StringWithAggregatesFilter<"Fixture"> | string
    stage?: StringWithAggregatesFilter<"Fixture"> | string
    venue?: StringNullableWithAggregatesFilter<"Fixture"> | string | null
    kickoff?: DateTimeWithAggregatesFilter<"Fixture"> | Date | string
    status?: StringWithAggregatesFilter<"Fixture"> | string
    scoreA?: IntWithAggregatesFilter<"Fixture"> | number
    scoreB?: IntWithAggregatesFilter<"Fixture"> | number
    currentMinute?: IntNullableWithAggregatesFilter<"Fixture"> | number | null
    currentPeriod?: IntWithAggregatesFilter<"Fixture"> | number
    teamAFifaRank?: IntNullableWithAggregatesFilter<"Fixture"> | number | null
    teamBFifaRank?: IntNullableWithAggregatesFilter<"Fixture"> | number | null
    teamAForm?: StringNullableWithAggregatesFilter<"Fixture"> | string | null
    teamBForm?: StringNullableWithAggregatesFilter<"Fixture"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Fixture"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fixture"> | Date | string
  }

  export type OddsSnapshotWhereInput = {
    AND?: OddsSnapshotWhereInput | OddsSnapshotWhereInput[]
    OR?: OddsSnapshotWhereInput[]
    NOT?: OddsSnapshotWhereInput | OddsSnapshotWhereInput[]
    id?: IntFilter<"OddsSnapshot"> | number
    fixtureId?: IntFilter<"OddsSnapshot"> | number
    source?: StringFilter<"OddsSnapshot"> | string
    market?: StringFilter<"OddsSnapshot"> | string
    teamAOdds?: FloatFilter<"OddsSnapshot"> | number
    drawOdds?: FloatNullableFilter<"OddsSnapshot"> | number | null
    teamBOdds?: FloatFilter<"OddsSnapshot"> | number
    allOutcomes?: JsonNullableFilter<"OddsSnapshot">
    timestamp?: DateTimeFilter<"OddsSnapshot"> | Date | string
    fixture?: XOR<FixtureRelationFilter, FixtureWhereInput>
  }

  export type OddsSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    source?: SortOrder
    market?: SortOrder
    teamAOdds?: SortOrder
    drawOdds?: SortOrderInput | SortOrder
    teamBOdds?: SortOrder
    allOutcomes?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    fixture?: FixtureOrderByWithRelationInput
  }

  export type OddsSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fixtureId_source_market_timestamp?: OddsSnapshotFixtureIdSourceMarketTimestampCompoundUniqueInput
    AND?: OddsSnapshotWhereInput | OddsSnapshotWhereInput[]
    OR?: OddsSnapshotWhereInput[]
    NOT?: OddsSnapshotWhereInput | OddsSnapshotWhereInput[]
    fixtureId?: IntFilter<"OddsSnapshot"> | number
    source?: StringFilter<"OddsSnapshot"> | string
    market?: StringFilter<"OddsSnapshot"> | string
    teamAOdds?: FloatFilter<"OddsSnapshot"> | number
    drawOdds?: FloatNullableFilter<"OddsSnapshot"> | number | null
    teamBOdds?: FloatFilter<"OddsSnapshot"> | number
    allOutcomes?: JsonNullableFilter<"OddsSnapshot">
    timestamp?: DateTimeFilter<"OddsSnapshot"> | Date | string
    fixture?: XOR<FixtureRelationFilter, FixtureWhereInput>
  }, "id" | "fixtureId_source_market_timestamp">

  export type OddsSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    source?: SortOrder
    market?: SortOrder
    teamAOdds?: SortOrder
    drawOdds?: SortOrderInput | SortOrder
    teamBOdds?: SortOrder
    allOutcomes?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: OddsSnapshotCountOrderByAggregateInput
    _avg?: OddsSnapshotAvgOrderByAggregateInput
    _max?: OddsSnapshotMaxOrderByAggregateInput
    _min?: OddsSnapshotMinOrderByAggregateInput
    _sum?: OddsSnapshotSumOrderByAggregateInput
  }

  export type OddsSnapshotScalarWhereWithAggregatesInput = {
    AND?: OddsSnapshotScalarWhereWithAggregatesInput | OddsSnapshotScalarWhereWithAggregatesInput[]
    OR?: OddsSnapshotScalarWhereWithAggregatesInput[]
    NOT?: OddsSnapshotScalarWhereWithAggregatesInput | OddsSnapshotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OddsSnapshot"> | number
    fixtureId?: IntWithAggregatesFilter<"OddsSnapshot"> | number
    source?: StringWithAggregatesFilter<"OddsSnapshot"> | string
    market?: StringWithAggregatesFilter<"OddsSnapshot"> | string
    teamAOdds?: FloatWithAggregatesFilter<"OddsSnapshot"> | number
    drawOdds?: FloatNullableWithAggregatesFilter<"OddsSnapshot"> | number | null
    teamBOdds?: FloatWithAggregatesFilter<"OddsSnapshot"> | number
    allOutcomes?: JsonNullableWithAggregatesFilter<"OddsSnapshot">
    timestamp?: DateTimeWithAggregatesFilter<"OddsSnapshot"> | Date | string
  }

  export type MatchEventWhereInput = {
    AND?: MatchEventWhereInput | MatchEventWhereInput[]
    OR?: MatchEventWhereInput[]
    NOT?: MatchEventWhereInput | MatchEventWhereInput[]
    id?: IntFilter<"MatchEvent"> | number
    fixtureId?: IntFilter<"MatchEvent"> | number
    eventType?: StringFilter<"MatchEvent"> | string
    minute?: IntFilter<"MatchEvent"> | number
    period?: IntFilter<"MatchEvent"> | number
    team?: StringFilter<"MatchEvent"> | string
    player?: StringNullableFilter<"MatchEvent"> | string | null
    description?: StringNullableFilter<"MatchEvent"> | string | null
    statKey?: StringNullableFilter<"MatchEvent"> | string | null
    occurredAt?: DateTimeFilter<"MatchEvent"> | Date | string
    fixture?: XOR<FixtureRelationFilter, FixtureWhereInput>
  }

  export type MatchEventOrderByWithRelationInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    eventType?: SortOrder
    minute?: SortOrder
    period?: SortOrder
    team?: SortOrder
    player?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    statKey?: SortOrderInput | SortOrder
    occurredAt?: SortOrder
    fixture?: FixtureOrderByWithRelationInput
  }

  export type MatchEventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MatchEventWhereInput | MatchEventWhereInput[]
    OR?: MatchEventWhereInput[]
    NOT?: MatchEventWhereInput | MatchEventWhereInput[]
    fixtureId?: IntFilter<"MatchEvent"> | number
    eventType?: StringFilter<"MatchEvent"> | string
    minute?: IntFilter<"MatchEvent"> | number
    period?: IntFilter<"MatchEvent"> | number
    team?: StringFilter<"MatchEvent"> | string
    player?: StringNullableFilter<"MatchEvent"> | string | null
    description?: StringNullableFilter<"MatchEvent"> | string | null
    statKey?: StringNullableFilter<"MatchEvent"> | string | null
    occurredAt?: DateTimeFilter<"MatchEvent"> | Date | string
    fixture?: XOR<FixtureRelationFilter, FixtureWhereInput>
  }, "id">

  export type MatchEventOrderByWithAggregationInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    eventType?: SortOrder
    minute?: SortOrder
    period?: SortOrder
    team?: SortOrder
    player?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    statKey?: SortOrderInput | SortOrder
    occurredAt?: SortOrder
    _count?: MatchEventCountOrderByAggregateInput
    _avg?: MatchEventAvgOrderByAggregateInput
    _max?: MatchEventMaxOrderByAggregateInput
    _min?: MatchEventMinOrderByAggregateInput
    _sum?: MatchEventSumOrderByAggregateInput
  }

  export type MatchEventScalarWhereWithAggregatesInput = {
    AND?: MatchEventScalarWhereWithAggregatesInput | MatchEventScalarWhereWithAggregatesInput[]
    OR?: MatchEventScalarWhereWithAggregatesInput[]
    NOT?: MatchEventScalarWhereWithAggregatesInput | MatchEventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MatchEvent"> | number
    fixtureId?: IntWithAggregatesFilter<"MatchEvent"> | number
    eventType?: StringWithAggregatesFilter<"MatchEvent"> | string
    minute?: IntWithAggregatesFilter<"MatchEvent"> | number
    period?: IntWithAggregatesFilter<"MatchEvent"> | number
    team?: StringWithAggregatesFilter<"MatchEvent"> | string
    player?: StringNullableWithAggregatesFilter<"MatchEvent"> | string | null
    description?: StringNullableWithAggregatesFilter<"MatchEvent"> | string | null
    statKey?: StringNullableWithAggregatesFilter<"MatchEvent"> | string | null
    occurredAt?: DateTimeWithAggregatesFilter<"MatchEvent"> | Date | string
  }

  export type SignalWhereInput = {
    AND?: SignalWhereInput | SignalWhereInput[]
    OR?: SignalWhereInput[]
    NOT?: SignalWhereInput | SignalWhereInput[]
    id?: IntFilter<"Signal"> | number
    fixtureId?: IntFilter<"Signal"> | number
    type?: StringFilter<"Signal"> | string
    severity?: StringFilter<"Signal"> | string
    description?: StringFilter<"Signal"> | string
    metadata?: JsonNullableFilter<"Signal">
    triggeredAt?: DateTimeFilter<"Signal"> | Date | string
    fixture?: XOR<FixtureRelationFilter, FixtureWhereInput>
  }

  export type SignalOrderByWithRelationInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    metadata?: SortOrderInput | SortOrder
    triggeredAt?: SortOrder
    fixture?: FixtureOrderByWithRelationInput
  }

  export type SignalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SignalWhereInput | SignalWhereInput[]
    OR?: SignalWhereInput[]
    NOT?: SignalWhereInput | SignalWhereInput[]
    fixtureId?: IntFilter<"Signal"> | number
    type?: StringFilter<"Signal"> | string
    severity?: StringFilter<"Signal"> | string
    description?: StringFilter<"Signal"> | string
    metadata?: JsonNullableFilter<"Signal">
    triggeredAt?: DateTimeFilter<"Signal"> | Date | string
    fixture?: XOR<FixtureRelationFilter, FixtureWhereInput>
  }, "id">

  export type SignalOrderByWithAggregationInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    metadata?: SortOrderInput | SortOrder
    triggeredAt?: SortOrder
    _count?: SignalCountOrderByAggregateInput
    _avg?: SignalAvgOrderByAggregateInput
    _max?: SignalMaxOrderByAggregateInput
    _min?: SignalMinOrderByAggregateInput
    _sum?: SignalSumOrderByAggregateInput
  }

  export type SignalScalarWhereWithAggregatesInput = {
    AND?: SignalScalarWhereWithAggregatesInput | SignalScalarWhereWithAggregatesInput[]
    OR?: SignalScalarWhereWithAggregatesInput[]
    NOT?: SignalScalarWhereWithAggregatesInput | SignalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Signal"> | number
    fixtureId?: IntWithAggregatesFilter<"Signal"> | number
    type?: StringWithAggregatesFilter<"Signal"> | string
    severity?: StringWithAggregatesFilter<"Signal"> | string
    description?: StringWithAggregatesFilter<"Signal"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Signal">
    triggeredAt?: DateTimeWithAggregatesFilter<"Signal"> | Date | string
  }

  export type DecisionLogWhereInput = {
    AND?: DecisionLogWhereInput | DecisionLogWhereInput[]
    OR?: DecisionLogWhereInput[]
    NOT?: DecisionLogWhereInput | DecisionLogWhereInput[]
    id?: IntFilter<"DecisionLog"> | number
    agentId?: IntFilter<"DecisionLog"> | number
    decisionTime?: DateTimeFilter<"DecisionLog"> | Date | string
    reasoning?: StringFilter<"DecisionLog"> | string
    operation?: StringFilter<"DecisionLog"> | string
    fixtureId?: IntNullableFilter<"DecisionLog"> | number | null
    market?: StringNullableFilter<"DecisionLog"> | string | null
    selection?: StringNullableFilter<"DecisionLog"> | string | null
    stakePortion?: FloatFilter<"DecisionLog"> | number
    confidence?: FloatFilter<"DecisionLog"> | number
    totalBankroll?: DecimalFilter<"DecisionLog"> | Decimal | DecimalJsLike | number | string
    executed?: BoolFilter<"DecisionLog"> | boolean
    betId?: IntNullableFilter<"DecisionLog"> | number | null
    signalType?: StringNullableFilter<"DecisionLog"> | string | null
    promptSnapshot?: StringNullableFilter<"DecisionLog"> | string | null
    reasoningSnapshot?: StringNullableFilter<"DecisionLog"> | string | null
    decisionSnapshot?: StringNullableFilter<"DecisionLog"> | string | null
    createdAt?: DateTimeFilter<"DecisionLog"> | Date | string
    agent?: XOR<AgentRelationFilter, AgentWhereInput>
  }

  export type DecisionLogOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    decisionTime?: SortOrder
    reasoning?: SortOrder
    operation?: SortOrder
    fixtureId?: SortOrderInput | SortOrder
    market?: SortOrderInput | SortOrder
    selection?: SortOrderInput | SortOrder
    stakePortion?: SortOrder
    confidence?: SortOrder
    totalBankroll?: SortOrder
    executed?: SortOrder
    betId?: SortOrderInput | SortOrder
    signalType?: SortOrderInput | SortOrder
    promptSnapshot?: SortOrderInput | SortOrder
    reasoningSnapshot?: SortOrderInput | SortOrder
    decisionSnapshot?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    agent?: AgentOrderByWithRelationInput
  }

  export type DecisionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DecisionLogWhereInput | DecisionLogWhereInput[]
    OR?: DecisionLogWhereInput[]
    NOT?: DecisionLogWhereInput | DecisionLogWhereInput[]
    agentId?: IntFilter<"DecisionLog"> | number
    decisionTime?: DateTimeFilter<"DecisionLog"> | Date | string
    reasoning?: StringFilter<"DecisionLog"> | string
    operation?: StringFilter<"DecisionLog"> | string
    fixtureId?: IntNullableFilter<"DecisionLog"> | number | null
    market?: StringNullableFilter<"DecisionLog"> | string | null
    selection?: StringNullableFilter<"DecisionLog"> | string | null
    stakePortion?: FloatFilter<"DecisionLog"> | number
    confidence?: FloatFilter<"DecisionLog"> | number
    totalBankroll?: DecimalFilter<"DecisionLog"> | Decimal | DecimalJsLike | number | string
    executed?: BoolFilter<"DecisionLog"> | boolean
    betId?: IntNullableFilter<"DecisionLog"> | number | null
    signalType?: StringNullableFilter<"DecisionLog"> | string | null
    promptSnapshot?: StringNullableFilter<"DecisionLog"> | string | null
    reasoningSnapshot?: StringNullableFilter<"DecisionLog"> | string | null
    decisionSnapshot?: StringNullableFilter<"DecisionLog"> | string | null
    createdAt?: DateTimeFilter<"DecisionLog"> | Date | string
    agent?: XOR<AgentRelationFilter, AgentWhereInput>
  }, "id">

  export type DecisionLogOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    decisionTime?: SortOrder
    reasoning?: SortOrder
    operation?: SortOrder
    fixtureId?: SortOrderInput | SortOrder
    market?: SortOrderInput | SortOrder
    selection?: SortOrderInput | SortOrder
    stakePortion?: SortOrder
    confidence?: SortOrder
    totalBankroll?: SortOrder
    executed?: SortOrder
    betId?: SortOrderInput | SortOrder
    signalType?: SortOrderInput | SortOrder
    promptSnapshot?: SortOrderInput | SortOrder
    reasoningSnapshot?: SortOrderInput | SortOrder
    decisionSnapshot?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DecisionLogCountOrderByAggregateInput
    _avg?: DecisionLogAvgOrderByAggregateInput
    _max?: DecisionLogMaxOrderByAggregateInput
    _min?: DecisionLogMinOrderByAggregateInput
    _sum?: DecisionLogSumOrderByAggregateInput
  }

  export type DecisionLogScalarWhereWithAggregatesInput = {
    AND?: DecisionLogScalarWhereWithAggregatesInput | DecisionLogScalarWhereWithAggregatesInput[]
    OR?: DecisionLogScalarWhereWithAggregatesInput[]
    NOT?: DecisionLogScalarWhereWithAggregatesInput | DecisionLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DecisionLog"> | number
    agentId?: IntWithAggregatesFilter<"DecisionLog"> | number
    decisionTime?: DateTimeWithAggregatesFilter<"DecisionLog"> | Date | string
    reasoning?: StringWithAggregatesFilter<"DecisionLog"> | string
    operation?: StringWithAggregatesFilter<"DecisionLog"> | string
    fixtureId?: IntNullableWithAggregatesFilter<"DecisionLog"> | number | null
    market?: StringNullableWithAggregatesFilter<"DecisionLog"> | string | null
    selection?: StringNullableWithAggregatesFilter<"DecisionLog"> | string | null
    stakePortion?: FloatWithAggregatesFilter<"DecisionLog"> | number
    confidence?: FloatWithAggregatesFilter<"DecisionLog"> | number
    totalBankroll?: DecimalWithAggregatesFilter<"DecisionLog"> | Decimal | DecimalJsLike | number | string
    executed?: BoolWithAggregatesFilter<"DecisionLog"> | boolean
    betId?: IntNullableWithAggregatesFilter<"DecisionLog"> | number | null
    signalType?: StringNullableWithAggregatesFilter<"DecisionLog"> | string | null
    promptSnapshot?: StringNullableWithAggregatesFilter<"DecisionLog"> | string | null
    reasoningSnapshot?: StringNullableWithAggregatesFilter<"DecisionLog"> | string | null
    decisionSnapshot?: StringNullableWithAggregatesFilter<"DecisionLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DecisionLog"> | Date | string
  }

  export type BankrollSnapshotWhereInput = {
    AND?: BankrollSnapshotWhereInput | BankrollSnapshotWhereInput[]
    OR?: BankrollSnapshotWhereInput[]
    NOT?: BankrollSnapshotWhereInput | BankrollSnapshotWhereInput[]
    id?: IntFilter<"BankrollSnapshot"> | number
    agentId?: IntFilter<"BankrollSnapshot"> | number
    totalBankroll?: DecimalFilter<"BankrollSnapshot"> | Decimal | DecimalJsLike | number | string
    cash?: DecimalFilter<"BankrollSnapshot"> | Decimal | DecimalJsLike | number | string
    openBetsValue?: DecimalFilter<"BankrollSnapshot"> | Decimal | DecimalJsLike | number | string
    unrealizedPnl?: DecimalFilter<"BankrollSnapshot"> | Decimal | DecimalJsLike | number | string
    snapshotTime?: DateTimeFilter<"BankrollSnapshot"> | Date | string
    agent?: XOR<AgentRelationFilter, AgentWhereInput>
  }

  export type BankrollSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    totalBankroll?: SortOrder
    cash?: SortOrder
    openBetsValue?: SortOrder
    unrealizedPnl?: SortOrder
    snapshotTime?: SortOrder
    agent?: AgentOrderByWithRelationInput
  }

  export type BankrollSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BankrollSnapshotWhereInput | BankrollSnapshotWhereInput[]
    OR?: BankrollSnapshotWhereInput[]
    NOT?: BankrollSnapshotWhereInput | BankrollSnapshotWhereInput[]
    agentId?: IntFilter<"BankrollSnapshot"> | number
    totalBankroll?: DecimalFilter<"BankrollSnapshot"> | Decimal | DecimalJsLike | number | string
    cash?: DecimalFilter<"BankrollSnapshot"> | Decimal | DecimalJsLike | number | string
    openBetsValue?: DecimalFilter<"BankrollSnapshot"> | Decimal | DecimalJsLike | number | string
    unrealizedPnl?: DecimalFilter<"BankrollSnapshot"> | Decimal | DecimalJsLike | number | string
    snapshotTime?: DateTimeFilter<"BankrollSnapshot"> | Date | string
    agent?: XOR<AgentRelationFilter, AgentWhereInput>
  }, "id">

  export type BankrollSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    totalBankroll?: SortOrder
    cash?: SortOrder
    openBetsValue?: SortOrder
    unrealizedPnl?: SortOrder
    snapshotTime?: SortOrder
    _count?: BankrollSnapshotCountOrderByAggregateInput
    _avg?: BankrollSnapshotAvgOrderByAggregateInput
    _max?: BankrollSnapshotMaxOrderByAggregateInput
    _min?: BankrollSnapshotMinOrderByAggregateInput
    _sum?: BankrollSnapshotSumOrderByAggregateInput
  }

  export type BankrollSnapshotScalarWhereWithAggregatesInput = {
    AND?: BankrollSnapshotScalarWhereWithAggregatesInput | BankrollSnapshotScalarWhereWithAggregatesInput[]
    OR?: BankrollSnapshotScalarWhereWithAggregatesInput[]
    NOT?: BankrollSnapshotScalarWhereWithAggregatesInput | BankrollSnapshotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BankrollSnapshot"> | number
    agentId?: IntWithAggregatesFilter<"BankrollSnapshot"> | number
    totalBankroll?: DecimalWithAggregatesFilter<"BankrollSnapshot"> | Decimal | DecimalJsLike | number | string
    cash?: DecimalWithAggregatesFilter<"BankrollSnapshot"> | Decimal | DecimalJsLike | number | string
    openBetsValue?: DecimalWithAggregatesFilter<"BankrollSnapshot"> | Decimal | DecimalJsLike | number | string
    unrealizedPnl?: DecimalWithAggregatesFilter<"BankrollSnapshot"> | Decimal | DecimalJsLike | number | string
    snapshotTime?: DateTimeWithAggregatesFilter<"BankrollSnapshot"> | Date | string
  }

  export type StrategyConfigWhereInput = {
    AND?: StrategyConfigWhereInput | StrategyConfigWhereInput[]
    OR?: StrategyConfigWhereInput[]
    NOT?: StrategyConfigWhereInput | StrategyConfigWhereInput[]
    id?: IntFilter<"StrategyConfig"> | number
    agentId?: IntFilter<"StrategyConfig"> | number
    triggerInterval?: IntFilter<"StrategyConfig"> | number
    signalPoolIds?: StringNullableFilter<"StrategyConfig"> | string | null
    enabled?: BoolFilter<"StrategyConfig"> | boolean
    scheduledTrigger?: BoolFilter<"StrategyConfig"> | boolean
    lastTriggerAt?: DateTimeNullableFilter<"StrategyConfig"> | Date | string | null
    createdAt?: DateTimeFilter<"StrategyConfig"> | Date | string
    updatedAt?: DateTimeFilter<"StrategyConfig"> | Date | string
    agent?: XOR<AgentRelationFilter, AgentWhereInput>
  }

  export type StrategyConfigOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    triggerInterval?: SortOrder
    signalPoolIds?: SortOrderInput | SortOrder
    enabled?: SortOrder
    scheduledTrigger?: SortOrder
    lastTriggerAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agent?: AgentOrderByWithRelationInput
  }

  export type StrategyConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    agentId?: number
    AND?: StrategyConfigWhereInput | StrategyConfigWhereInput[]
    OR?: StrategyConfigWhereInput[]
    NOT?: StrategyConfigWhereInput | StrategyConfigWhereInput[]
    triggerInterval?: IntFilter<"StrategyConfig"> | number
    signalPoolIds?: StringNullableFilter<"StrategyConfig"> | string | null
    enabled?: BoolFilter<"StrategyConfig"> | boolean
    scheduledTrigger?: BoolFilter<"StrategyConfig"> | boolean
    lastTriggerAt?: DateTimeNullableFilter<"StrategyConfig"> | Date | string | null
    createdAt?: DateTimeFilter<"StrategyConfig"> | Date | string
    updatedAt?: DateTimeFilter<"StrategyConfig"> | Date | string
    agent?: XOR<AgentRelationFilter, AgentWhereInput>
  }, "id" | "agentId">

  export type StrategyConfigOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    triggerInterval?: SortOrder
    signalPoolIds?: SortOrderInput | SortOrder
    enabled?: SortOrder
    scheduledTrigger?: SortOrder
    lastTriggerAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StrategyConfigCountOrderByAggregateInput
    _avg?: StrategyConfigAvgOrderByAggregateInput
    _max?: StrategyConfigMaxOrderByAggregateInput
    _min?: StrategyConfigMinOrderByAggregateInput
    _sum?: StrategyConfigSumOrderByAggregateInput
  }

  export type StrategyConfigScalarWhereWithAggregatesInput = {
    AND?: StrategyConfigScalarWhereWithAggregatesInput | StrategyConfigScalarWhereWithAggregatesInput[]
    OR?: StrategyConfigScalarWhereWithAggregatesInput[]
    NOT?: StrategyConfigScalarWhereWithAggregatesInput | StrategyConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StrategyConfig"> | number
    agentId?: IntWithAggregatesFilter<"StrategyConfig"> | number
    triggerInterval?: IntWithAggregatesFilter<"StrategyConfig"> | number
    signalPoolIds?: StringNullableWithAggregatesFilter<"StrategyConfig"> | string | null
    enabled?: BoolWithAggregatesFilter<"StrategyConfig"> | boolean
    scheduledTrigger?: BoolWithAggregatesFilter<"StrategyConfig"> | boolean
    lastTriggerAt?: DateTimeNullableWithAggregatesFilter<"StrategyConfig"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StrategyConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StrategyConfig"> | Date | string
  }

  export type PromptTemplateWhereInput = {
    AND?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    OR?: PromptTemplateWhereInput[]
    NOT?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    id?: IntFilter<"PromptTemplate"> | number
    name?: StringFilter<"PromptTemplate"> | string
    slug?: StringFilter<"PromptTemplate"> | string
    description?: StringNullableFilter<"PromptTemplate"> | string | null
    content?: StringFilter<"PromptTemplate"> | string
    category?: StringFilter<"PromptTemplate"> | string
    createdAt?: DateTimeFilter<"PromptTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"PromptTemplate"> | Date | string
    bindings?: PromptBindingListRelationFilter
  }

  export type PromptTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    content?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bindings?: PromptBindingOrderByRelationAggregateInput
  }

  export type PromptTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    OR?: PromptTemplateWhereInput[]
    NOT?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    name?: StringFilter<"PromptTemplate"> | string
    description?: StringNullableFilter<"PromptTemplate"> | string | null
    content?: StringFilter<"PromptTemplate"> | string
    category?: StringFilter<"PromptTemplate"> | string
    createdAt?: DateTimeFilter<"PromptTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"PromptTemplate"> | Date | string
    bindings?: PromptBindingListRelationFilter
  }, "id" | "slug">

  export type PromptTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    content?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromptTemplateCountOrderByAggregateInput
    _avg?: PromptTemplateAvgOrderByAggregateInput
    _max?: PromptTemplateMaxOrderByAggregateInput
    _min?: PromptTemplateMinOrderByAggregateInput
    _sum?: PromptTemplateSumOrderByAggregateInput
  }

  export type PromptTemplateScalarWhereWithAggregatesInput = {
    AND?: PromptTemplateScalarWhereWithAggregatesInput | PromptTemplateScalarWhereWithAggregatesInput[]
    OR?: PromptTemplateScalarWhereWithAggregatesInput[]
    NOT?: PromptTemplateScalarWhereWithAggregatesInput | PromptTemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PromptTemplate"> | number
    name?: StringWithAggregatesFilter<"PromptTemplate"> | string
    slug?: StringWithAggregatesFilter<"PromptTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"PromptTemplate"> | string | null
    content?: StringWithAggregatesFilter<"PromptTemplate"> | string
    category?: StringWithAggregatesFilter<"PromptTemplate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PromptTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PromptTemplate"> | Date | string
  }

  export type PromptBindingWhereInput = {
    AND?: PromptBindingWhereInput | PromptBindingWhereInput[]
    OR?: PromptBindingWhereInput[]
    NOT?: PromptBindingWhereInput | PromptBindingWhereInput[]
    id?: IntFilter<"PromptBinding"> | number
    agentId?: IntFilter<"PromptBinding"> | number
    promptTemplateId?: IntFilter<"PromptBinding"> | number
    createdAt?: DateTimeFilter<"PromptBinding"> | Date | string
    agent?: XOR<AgentRelationFilter, AgentWhereInput>
    promptTemplate?: XOR<PromptTemplateRelationFilter, PromptTemplateWhereInput>
  }

  export type PromptBindingOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    promptTemplateId?: SortOrder
    createdAt?: SortOrder
    agent?: AgentOrderByWithRelationInput
    promptTemplate?: PromptTemplateOrderByWithRelationInput
  }

  export type PromptBindingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    agentId?: number
    AND?: PromptBindingWhereInput | PromptBindingWhereInput[]
    OR?: PromptBindingWhereInput[]
    NOT?: PromptBindingWhereInput | PromptBindingWhereInput[]
    promptTemplateId?: IntFilter<"PromptBinding"> | number
    createdAt?: DateTimeFilter<"PromptBinding"> | Date | string
    agent?: XOR<AgentRelationFilter, AgentWhereInput>
    promptTemplate?: XOR<PromptTemplateRelationFilter, PromptTemplateWhereInput>
  }, "id" | "agentId">

  export type PromptBindingOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    promptTemplateId?: SortOrder
    createdAt?: SortOrder
    _count?: PromptBindingCountOrderByAggregateInput
    _avg?: PromptBindingAvgOrderByAggregateInput
    _max?: PromptBindingMaxOrderByAggregateInput
    _min?: PromptBindingMinOrderByAggregateInput
    _sum?: PromptBindingSumOrderByAggregateInput
  }

  export type PromptBindingScalarWhereWithAggregatesInput = {
    AND?: PromptBindingScalarWhereWithAggregatesInput | PromptBindingScalarWhereWithAggregatesInput[]
    OR?: PromptBindingScalarWhereWithAggregatesInput[]
    NOT?: PromptBindingScalarWhereWithAggregatesInput | PromptBindingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PromptBinding"> | number
    agentId?: IntWithAggregatesFilter<"PromptBinding"> | number
    promptTemplateId?: IntWithAggregatesFilter<"PromptBinding"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PromptBinding"> | Date | string
  }

  export type TournamentWhereInput = {
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    id?: IntFilter<"Tournament"> | number
    name?: StringFilter<"Tournament"> | string
    year?: IntFilter<"Tournament"> | number
    hostCountry?: StringFilter<"Tournament"> | string
    startDate?: DateTimeFilter<"Tournament"> | Date | string
    endDate?: DateTimeFilter<"Tournament"> | Date | string
    status?: StringFilter<"Tournament"> | string
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    fixtures?: FixtureListRelationFilter
  }

  export type TournamentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    hostCountry?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    fixtures?: FixtureOrderByRelationAggregateInput
  }

  export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    name?: StringFilter<"Tournament"> | string
    year?: IntFilter<"Tournament"> | number
    hostCountry?: StringFilter<"Tournament"> | string
    startDate?: DateTimeFilter<"Tournament"> | Date | string
    endDate?: DateTimeFilter<"Tournament"> | Date | string
    status?: StringFilter<"Tournament"> | string
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    fixtures?: FixtureListRelationFilter
  }, "id">

  export type TournamentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    hostCountry?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: TournamentCountOrderByAggregateInput
    _avg?: TournamentAvgOrderByAggregateInput
    _max?: TournamentMaxOrderByAggregateInput
    _min?: TournamentMinOrderByAggregateInput
    _sum?: TournamentSumOrderByAggregateInput
  }

  export type TournamentScalarWhereWithAggregatesInput = {
    AND?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    OR?: TournamentScalarWhereWithAggregatesInput[]
    NOT?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tournament"> | number
    name?: StringWithAggregatesFilter<"Tournament"> | string
    year?: IntWithAggregatesFilter<"Tournament"> | number
    hostCountry?: StringWithAggregatesFilter<"Tournament"> | string
    startDate?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
    status?: StringWithAggregatesFilter<"Tournament"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
  }

  export type NewsItemWhereInput = {
    AND?: NewsItemWhereInput | NewsItemWhereInput[]
    OR?: NewsItemWhereInput[]
    NOT?: NewsItemWhereInput | NewsItemWhereInput[]
    id?: IntFilter<"NewsItem"> | number
    title?: StringFilter<"NewsItem"> | string
    summary?: StringNullableFilter<"NewsItem"> | string | null
    source?: StringFilter<"NewsItem"> | string
    url?: StringNullableFilter<"NewsItem"> | string | null
    relevance?: StringNullableFilter<"NewsItem"> | string | null
    sentiment?: StringNullableFilter<"NewsItem"> | string | null
    aiClassification?: StringNullableFilter<"NewsItem"> | string | null
    publishedAt?: DateTimeFilter<"NewsItem"> | Date | string
    createdAt?: DateTimeFilter<"NewsItem"> | Date | string
  }

  export type NewsItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    source?: SortOrder
    url?: SortOrderInput | SortOrder
    relevance?: SortOrderInput | SortOrder
    sentiment?: SortOrderInput | SortOrder
    aiClassification?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NewsItemWhereInput | NewsItemWhereInput[]
    OR?: NewsItemWhereInput[]
    NOT?: NewsItemWhereInput | NewsItemWhereInput[]
    title?: StringFilter<"NewsItem"> | string
    summary?: StringNullableFilter<"NewsItem"> | string | null
    source?: StringFilter<"NewsItem"> | string
    url?: StringNullableFilter<"NewsItem"> | string | null
    relevance?: StringNullableFilter<"NewsItem"> | string | null
    sentiment?: StringNullableFilter<"NewsItem"> | string | null
    aiClassification?: StringNullableFilter<"NewsItem"> | string | null
    publishedAt?: DateTimeFilter<"NewsItem"> | Date | string
    createdAt?: DateTimeFilter<"NewsItem"> | Date | string
  }, "id">

  export type NewsItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    source?: SortOrder
    url?: SortOrderInput | SortOrder
    relevance?: SortOrderInput | SortOrder
    sentiment?: SortOrderInput | SortOrder
    aiClassification?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    _count?: NewsItemCountOrderByAggregateInput
    _avg?: NewsItemAvgOrderByAggregateInput
    _max?: NewsItemMaxOrderByAggregateInput
    _min?: NewsItemMinOrderByAggregateInput
    _sum?: NewsItemSumOrderByAggregateInput
  }

  export type NewsItemScalarWhereWithAggregatesInput = {
    AND?: NewsItemScalarWhereWithAggregatesInput | NewsItemScalarWhereWithAggregatesInput[]
    OR?: NewsItemScalarWhereWithAggregatesInput[]
    NOT?: NewsItemScalarWhereWithAggregatesInput | NewsItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NewsItem"> | number
    title?: StringWithAggregatesFilter<"NewsItem"> | string
    summary?: StringNullableWithAggregatesFilter<"NewsItem"> | string | null
    source?: StringWithAggregatesFilter<"NewsItem"> | string
    url?: StringNullableWithAggregatesFilter<"NewsItem"> | string | null
    relevance?: StringNullableWithAggregatesFilter<"NewsItem"> | string | null
    sentiment?: StringNullableWithAggregatesFilter<"NewsItem"> | string | null
    aiClassification?: StringNullableWithAggregatesFilter<"NewsItem"> | string | null
    publishedAt?: DateTimeWithAggregatesFilter<"NewsItem"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsItem"> | Date | string
  }

  export type AgentCreateInput = {
    name: string
    slug: string
    model?: string
    baseUrl?: string
    apiKey?: string | null
    strategy: string
    avatarPresetId?: number | null
    initialCapital?: Decimal | DecimalJsLike | number | string
    currentCash?: Decimal | DecimalJsLike | number | string
    frozenCash?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    autoTradingEnabled?: boolean
    showOnDashboard?: boolean
    maxStakePercent?: number
    maxOpenBets?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bets?: BetCreateNestedManyWithoutAgentInput
    decisionLogs?: DecisionLogCreateNestedManyWithoutAgentInput
    strategyConfig?: StrategyConfigCreateNestedOneWithoutAgentInput
    promptBinding?: PromptBindingCreateNestedOneWithoutAgentInput
    snapshots?: BankrollSnapshotCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    model?: string
    baseUrl?: string
    apiKey?: string | null
    strategy: string
    avatarPresetId?: number | null
    initialCapital?: Decimal | DecimalJsLike | number | string
    currentCash?: Decimal | DecimalJsLike | number | string
    frozenCash?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    autoTradingEnabled?: boolean
    showOnDashboard?: boolean
    maxStakePercent?: number
    maxOpenBets?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bets?: BetUncheckedCreateNestedManyWithoutAgentInput
    decisionLogs?: DecisionLogUncheckedCreateNestedManyWithoutAgentInput
    strategyConfig?: StrategyConfigUncheckedCreateNestedOneWithoutAgentInput
    promptBinding?: PromptBindingUncheckedCreateNestedOneWithoutAgentInput
    snapshots?: BankrollSnapshotUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    strategy?: StringFieldUpdateOperationsInput | string
    avatarPresetId?: NullableIntFieldUpdateOperationsInput | number | null
    initialCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoTradingEnabled?: BoolFieldUpdateOperationsInput | boolean
    showOnDashboard?: BoolFieldUpdateOperationsInput | boolean
    maxStakePercent?: FloatFieldUpdateOperationsInput | number
    maxOpenBets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUpdateManyWithoutAgentNestedInput
    decisionLogs?: DecisionLogUpdateManyWithoutAgentNestedInput
    strategyConfig?: StrategyConfigUpdateOneWithoutAgentNestedInput
    promptBinding?: PromptBindingUpdateOneWithoutAgentNestedInput
    snapshots?: BankrollSnapshotUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    strategy?: StringFieldUpdateOperationsInput | string
    avatarPresetId?: NullableIntFieldUpdateOperationsInput | number | null
    initialCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoTradingEnabled?: BoolFieldUpdateOperationsInput | boolean
    showOnDashboard?: BoolFieldUpdateOperationsInput | boolean
    maxStakePercent?: FloatFieldUpdateOperationsInput | number
    maxOpenBets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUncheckedUpdateManyWithoutAgentNestedInput
    decisionLogs?: DecisionLogUncheckedUpdateManyWithoutAgentNestedInput
    strategyConfig?: StrategyConfigUncheckedUpdateOneWithoutAgentNestedInput
    promptBinding?: PromptBindingUncheckedUpdateOneWithoutAgentNestedInput
    snapshots?: BankrollSnapshotUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentCreateManyInput = {
    id?: number
    name: string
    slug: string
    model?: string
    baseUrl?: string
    apiKey?: string | null
    strategy: string
    avatarPresetId?: number | null
    initialCapital?: Decimal | DecimalJsLike | number | string
    currentCash?: Decimal | DecimalJsLike | number | string
    frozenCash?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    autoTradingEnabled?: boolean
    showOnDashboard?: boolean
    maxStakePercent?: number
    maxOpenBets?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    strategy?: StringFieldUpdateOperationsInput | string
    avatarPresetId?: NullableIntFieldUpdateOperationsInput | number | null
    initialCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoTradingEnabled?: BoolFieldUpdateOperationsInput | boolean
    showOnDashboard?: BoolFieldUpdateOperationsInput | boolean
    maxStakePercent?: FloatFieldUpdateOperationsInput | number
    maxOpenBets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    strategy?: StringFieldUpdateOperationsInput | string
    avatarPresetId?: NullableIntFieldUpdateOperationsInput | number | null
    initialCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoTradingEnabled?: BoolFieldUpdateOperationsInput | boolean
    showOnDashboard?: BoolFieldUpdateOperationsInput | boolean
    maxStakePercent?: FloatFieldUpdateOperationsInput | number
    maxOpenBets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetCreateInput = {
    betNo: string
    market: string
    selection: string
    side: string
    odds: number
    stake: Decimal | DecimalJsLike | number | string
    potentialProfit: Decimal | DecimalJsLike | number | string
    potentialLoss: Decimal | DecimalJsLike | number | string
    status?: string
    result?: string | null
    settledAt?: Date | string | null
    realizedPnl?: Decimal | DecimalJsLike | number | string | null
    confidence?: number | null
    signalType?: string | null
    decisionLogId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    agent: AgentCreateNestedOneWithoutBetsInput
    fixture: FixtureCreateNestedOneWithoutBetsInput
  }

  export type BetUncheckedCreateInput = {
    id?: number
    agentId: number
    fixtureId: number
    betNo: string
    market: string
    selection: string
    side: string
    odds: number
    stake: Decimal | DecimalJsLike | number | string
    potentialProfit: Decimal | DecimalJsLike | number | string
    potentialLoss: Decimal | DecimalJsLike | number | string
    status?: string
    result?: string | null
    settledAt?: Date | string | null
    realizedPnl?: Decimal | DecimalJsLike | number | string | null
    confidence?: number | null
    signalType?: string | null
    decisionLogId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BetUpdateInput = {
    betNo?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    selection?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    odds?: FloatFieldUpdateOperationsInput | number
    stake?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialLoss?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizedPnl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    decisionLogId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutBetsNestedInput
    fixture?: FixtureUpdateOneRequiredWithoutBetsNestedInput
  }

  export type BetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: IntFieldUpdateOperationsInput | number
    fixtureId?: IntFieldUpdateOperationsInput | number
    betNo?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    selection?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    odds?: FloatFieldUpdateOperationsInput | number
    stake?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialLoss?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizedPnl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    decisionLogId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetCreateManyInput = {
    id?: number
    agentId: number
    fixtureId: number
    betNo: string
    market: string
    selection: string
    side: string
    odds: number
    stake: Decimal | DecimalJsLike | number | string
    potentialProfit: Decimal | DecimalJsLike | number | string
    potentialLoss: Decimal | DecimalJsLike | number | string
    status?: string
    result?: string | null
    settledAt?: Date | string | null
    realizedPnl?: Decimal | DecimalJsLike | number | string | null
    confidence?: number | null
    signalType?: string | null
    decisionLogId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BetUpdateManyMutationInput = {
    betNo?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    selection?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    odds?: FloatFieldUpdateOperationsInput | number
    stake?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialLoss?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizedPnl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    decisionLogId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: IntFieldUpdateOperationsInput | number
    fixtureId?: IntFieldUpdateOperationsInput | number
    betNo?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    selection?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    odds?: FloatFieldUpdateOperationsInput | number
    stake?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialLoss?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizedPnl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    decisionLogId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FixtureCreateInput = {
    txlineFixtureId: string
    teamA: string
    teamB: string
    teamACode: string
    teamBCode: string
    stage: string
    venue?: string | null
    kickoff: Date | string
    status?: string
    scoreA?: number
    scoreB?: number
    currentMinute?: number | null
    currentPeriod?: number
    teamAFifaRank?: number | null
    teamBFifaRank?: number | null
    teamAForm?: string | null
    teamBForm?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutFixturesInput
    bets?: BetCreateNestedManyWithoutFixtureInput
    oddsHistory?: OddsSnapshotCreateNestedManyWithoutFixtureInput
    events?: MatchEventCreateNestedManyWithoutFixtureInput
    signals?: SignalCreateNestedManyWithoutFixtureInput
  }

  export type FixtureUncheckedCreateInput = {
    id?: number
    txlineFixtureId: string
    tournamentId: number
    teamA: string
    teamB: string
    teamACode: string
    teamBCode: string
    stage: string
    venue?: string | null
    kickoff: Date | string
    status?: string
    scoreA?: number
    scoreB?: number
    currentMinute?: number | null
    currentPeriod?: number
    teamAFifaRank?: number | null
    teamBFifaRank?: number | null
    teamAForm?: string | null
    teamBForm?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bets?: BetUncheckedCreateNestedManyWithoutFixtureInput
    oddsHistory?: OddsSnapshotUncheckedCreateNestedManyWithoutFixtureInput
    events?: MatchEventUncheckedCreateNestedManyWithoutFixtureInput
    signals?: SignalUncheckedCreateNestedManyWithoutFixtureInput
  }

  export type FixtureUpdateInput = {
    txlineFixtureId?: StringFieldUpdateOperationsInput | string
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    teamACode?: StringFieldUpdateOperationsInput | string
    teamBCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    kickoff?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    currentMinute?: NullableIntFieldUpdateOperationsInput | number | null
    currentPeriod?: IntFieldUpdateOperationsInput | number
    teamAFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamBFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamAForm?: NullableStringFieldUpdateOperationsInput | string | null
    teamBForm?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutFixturesNestedInput
    bets?: BetUpdateManyWithoutFixtureNestedInput
    oddsHistory?: OddsSnapshotUpdateManyWithoutFixtureNestedInput
    events?: MatchEventUpdateManyWithoutFixtureNestedInput
    signals?: SignalUpdateManyWithoutFixtureNestedInput
  }

  export type FixtureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    txlineFixtureId?: StringFieldUpdateOperationsInput | string
    tournamentId?: IntFieldUpdateOperationsInput | number
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    teamACode?: StringFieldUpdateOperationsInput | string
    teamBCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    kickoff?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    currentMinute?: NullableIntFieldUpdateOperationsInput | number | null
    currentPeriod?: IntFieldUpdateOperationsInput | number
    teamAFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamBFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamAForm?: NullableStringFieldUpdateOperationsInput | string | null
    teamBForm?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUncheckedUpdateManyWithoutFixtureNestedInput
    oddsHistory?: OddsSnapshotUncheckedUpdateManyWithoutFixtureNestedInput
    events?: MatchEventUncheckedUpdateManyWithoutFixtureNestedInput
    signals?: SignalUncheckedUpdateManyWithoutFixtureNestedInput
  }

  export type FixtureCreateManyInput = {
    id?: number
    txlineFixtureId: string
    tournamentId: number
    teamA: string
    teamB: string
    teamACode: string
    teamBCode: string
    stage: string
    venue?: string | null
    kickoff: Date | string
    status?: string
    scoreA?: number
    scoreB?: number
    currentMinute?: number | null
    currentPeriod?: number
    teamAFifaRank?: number | null
    teamBFifaRank?: number | null
    teamAForm?: string | null
    teamBForm?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FixtureUpdateManyMutationInput = {
    txlineFixtureId?: StringFieldUpdateOperationsInput | string
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    teamACode?: StringFieldUpdateOperationsInput | string
    teamBCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    kickoff?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    currentMinute?: NullableIntFieldUpdateOperationsInput | number | null
    currentPeriod?: IntFieldUpdateOperationsInput | number
    teamAFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamBFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamAForm?: NullableStringFieldUpdateOperationsInput | string | null
    teamBForm?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FixtureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    txlineFixtureId?: StringFieldUpdateOperationsInput | string
    tournamentId?: IntFieldUpdateOperationsInput | number
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    teamACode?: StringFieldUpdateOperationsInput | string
    teamBCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    kickoff?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    currentMinute?: NullableIntFieldUpdateOperationsInput | number | null
    currentPeriod?: IntFieldUpdateOperationsInput | number
    teamAFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamBFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamAForm?: NullableStringFieldUpdateOperationsInput | string | null
    teamBForm?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OddsSnapshotCreateInput = {
    source?: string
    market: string
    teamAOdds: number
    drawOdds?: number | null
    teamBOdds: number
    allOutcomes?: NullableJsonNullValueInput | InputJsonValue
    timestamp: Date | string
    fixture: FixtureCreateNestedOneWithoutOddsHistoryInput
  }

  export type OddsSnapshotUncheckedCreateInput = {
    id?: number
    fixtureId: number
    source?: string
    market: string
    teamAOdds: number
    drawOdds?: number | null
    teamBOdds: number
    allOutcomes?: NullableJsonNullValueInput | InputJsonValue
    timestamp: Date | string
  }

  export type OddsSnapshotUpdateInput = {
    source?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    teamAOdds?: FloatFieldUpdateOperationsInput | number
    drawOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    teamBOdds?: FloatFieldUpdateOperationsInput | number
    allOutcomes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fixture?: FixtureUpdateOneRequiredWithoutOddsHistoryNestedInput
  }

  export type OddsSnapshotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fixtureId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    teamAOdds?: FloatFieldUpdateOperationsInput | number
    drawOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    teamBOdds?: FloatFieldUpdateOperationsInput | number
    allOutcomes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OddsSnapshotCreateManyInput = {
    id?: number
    fixtureId: number
    source?: string
    market: string
    teamAOdds: number
    drawOdds?: number | null
    teamBOdds: number
    allOutcomes?: NullableJsonNullValueInput | InputJsonValue
    timestamp: Date | string
  }

  export type OddsSnapshotUpdateManyMutationInput = {
    source?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    teamAOdds?: FloatFieldUpdateOperationsInput | number
    drawOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    teamBOdds?: FloatFieldUpdateOperationsInput | number
    allOutcomes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OddsSnapshotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fixtureId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    teamAOdds?: FloatFieldUpdateOperationsInput | number
    drawOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    teamBOdds?: FloatFieldUpdateOperationsInput | number
    allOutcomes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchEventCreateInput = {
    eventType: string
    minute: number
    period: number
    team: string
    player?: string | null
    description?: string | null
    statKey?: string | null
    occurredAt?: Date | string
    fixture: FixtureCreateNestedOneWithoutEventsInput
  }

  export type MatchEventUncheckedCreateInput = {
    id?: number
    fixtureId: number
    eventType: string
    minute: number
    period: number
    team: string
    player?: string | null
    description?: string | null
    statKey?: string | null
    occurredAt?: Date | string
  }

  export type MatchEventUpdateInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    minute?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    team?: StringFieldUpdateOperationsInput | string
    player?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statKey?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fixture?: FixtureUpdateOneRequiredWithoutEventsNestedInput
  }

  export type MatchEventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fixtureId?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    minute?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    team?: StringFieldUpdateOperationsInput | string
    player?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statKey?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchEventCreateManyInput = {
    id?: number
    fixtureId: number
    eventType: string
    minute: number
    period: number
    team: string
    player?: string | null
    description?: string | null
    statKey?: string | null
    occurredAt?: Date | string
  }

  export type MatchEventUpdateManyMutationInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    minute?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    team?: StringFieldUpdateOperationsInput | string
    player?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statKey?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchEventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fixtureId?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    minute?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    team?: StringFieldUpdateOperationsInput | string
    player?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statKey?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalCreateInput = {
    type: string
    severity: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    triggeredAt?: Date | string
    fixture: FixtureCreateNestedOneWithoutSignalsInput
  }

  export type SignalUncheckedCreateInput = {
    id?: number
    fixtureId: number
    type: string
    severity: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    triggeredAt?: Date | string
  }

  export type SignalUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fixture?: FixtureUpdateOneRequiredWithoutSignalsNestedInput
  }

  export type SignalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fixtureId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalCreateManyInput = {
    id?: number
    fixtureId: number
    type: string
    severity: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    triggeredAt?: Date | string
  }

  export type SignalUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fixtureId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionLogCreateInput = {
    decisionTime?: Date | string
    reasoning: string
    operation: string
    fixtureId?: number | null
    market?: string | null
    selection?: string | null
    stakePortion: number
    confidence: number
    totalBankroll: Decimal | DecimalJsLike | number | string
    executed?: boolean
    betId?: number | null
    signalType?: string | null
    promptSnapshot?: string | null
    reasoningSnapshot?: string | null
    decisionSnapshot?: string | null
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutDecisionLogsInput
  }

  export type DecisionLogUncheckedCreateInput = {
    id?: number
    agentId: number
    decisionTime?: Date | string
    reasoning: string
    operation: string
    fixtureId?: number | null
    market?: string | null
    selection?: string | null
    stakePortion: number
    confidence: number
    totalBankroll: Decimal | DecimalJsLike | number | string
    executed?: boolean
    betId?: number | null
    signalType?: string | null
    promptSnapshot?: string | null
    reasoningSnapshot?: string | null
    decisionSnapshot?: string | null
    createdAt?: Date | string
  }

  export type DecisionLogUpdateInput = {
    decisionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reasoning?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    fixtureId?: NullableIntFieldUpdateOperationsInput | number | null
    market?: NullableStringFieldUpdateOperationsInput | string | null
    selection?: NullableStringFieldUpdateOperationsInput | string | null
    stakePortion?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    totalBankroll?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed?: BoolFieldUpdateOperationsInput | boolean
    betId?: NullableIntFieldUpdateOperationsInput | number | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    promptSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    reasoningSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    decisionSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutDecisionLogsNestedInput
  }

  export type DecisionLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: IntFieldUpdateOperationsInput | number
    decisionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reasoning?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    fixtureId?: NullableIntFieldUpdateOperationsInput | number | null
    market?: NullableStringFieldUpdateOperationsInput | string | null
    selection?: NullableStringFieldUpdateOperationsInput | string | null
    stakePortion?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    totalBankroll?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed?: BoolFieldUpdateOperationsInput | boolean
    betId?: NullableIntFieldUpdateOperationsInput | number | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    promptSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    reasoningSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    decisionSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionLogCreateManyInput = {
    id?: number
    agentId: number
    decisionTime?: Date | string
    reasoning: string
    operation: string
    fixtureId?: number | null
    market?: string | null
    selection?: string | null
    stakePortion: number
    confidence: number
    totalBankroll: Decimal | DecimalJsLike | number | string
    executed?: boolean
    betId?: number | null
    signalType?: string | null
    promptSnapshot?: string | null
    reasoningSnapshot?: string | null
    decisionSnapshot?: string | null
    createdAt?: Date | string
  }

  export type DecisionLogUpdateManyMutationInput = {
    decisionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reasoning?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    fixtureId?: NullableIntFieldUpdateOperationsInput | number | null
    market?: NullableStringFieldUpdateOperationsInput | string | null
    selection?: NullableStringFieldUpdateOperationsInput | string | null
    stakePortion?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    totalBankroll?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed?: BoolFieldUpdateOperationsInput | boolean
    betId?: NullableIntFieldUpdateOperationsInput | number | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    promptSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    reasoningSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    decisionSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: IntFieldUpdateOperationsInput | number
    decisionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reasoning?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    fixtureId?: NullableIntFieldUpdateOperationsInput | number | null
    market?: NullableStringFieldUpdateOperationsInput | string | null
    selection?: NullableStringFieldUpdateOperationsInput | string | null
    stakePortion?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    totalBankroll?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed?: BoolFieldUpdateOperationsInput | boolean
    betId?: NullableIntFieldUpdateOperationsInput | number | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    promptSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    reasoningSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    decisionSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankrollSnapshotCreateInput = {
    totalBankroll: Decimal | DecimalJsLike | number | string
    cash: Decimal | DecimalJsLike | number | string
    openBetsValue: Decimal | DecimalJsLike | number | string
    unrealizedPnl: Decimal | DecimalJsLike | number | string
    snapshotTime: Date | string
    agent: AgentCreateNestedOneWithoutSnapshotsInput
  }

  export type BankrollSnapshotUncheckedCreateInput = {
    id?: number
    agentId: number
    totalBankroll: Decimal | DecimalJsLike | number | string
    cash: Decimal | DecimalJsLike | number | string
    openBetsValue: Decimal | DecimalJsLike | number | string
    unrealizedPnl: Decimal | DecimalJsLike | number | string
    snapshotTime: Date | string
  }

  export type BankrollSnapshotUpdateInput = {
    totalBankroll?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    openBetsValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unrealizedPnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    snapshotTime?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutSnapshotsNestedInput
  }

  export type BankrollSnapshotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: IntFieldUpdateOperationsInput | number
    totalBankroll?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    openBetsValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unrealizedPnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    snapshotTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankrollSnapshotCreateManyInput = {
    id?: number
    agentId: number
    totalBankroll: Decimal | DecimalJsLike | number | string
    cash: Decimal | DecimalJsLike | number | string
    openBetsValue: Decimal | DecimalJsLike | number | string
    unrealizedPnl: Decimal | DecimalJsLike | number | string
    snapshotTime: Date | string
  }

  export type BankrollSnapshotUpdateManyMutationInput = {
    totalBankroll?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    openBetsValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unrealizedPnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    snapshotTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankrollSnapshotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: IntFieldUpdateOperationsInput | number
    totalBankroll?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    openBetsValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unrealizedPnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    snapshotTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrategyConfigCreateInput = {
    triggerInterval?: number
    signalPoolIds?: string | null
    enabled?: boolean
    scheduledTrigger?: boolean
    lastTriggerAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    agent: AgentCreateNestedOneWithoutStrategyConfigInput
  }

  export type StrategyConfigUncheckedCreateInput = {
    id?: number
    agentId: number
    triggerInterval?: number
    signalPoolIds?: string | null
    enabled?: boolean
    scheduledTrigger?: boolean
    lastTriggerAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StrategyConfigUpdateInput = {
    triggerInterval?: IntFieldUpdateOperationsInput | number
    signalPoolIds?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    scheduledTrigger?: BoolFieldUpdateOperationsInput | boolean
    lastTriggerAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutStrategyConfigNestedInput
  }

  export type StrategyConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: IntFieldUpdateOperationsInput | number
    triggerInterval?: IntFieldUpdateOperationsInput | number
    signalPoolIds?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    scheduledTrigger?: BoolFieldUpdateOperationsInput | boolean
    lastTriggerAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrategyConfigCreateManyInput = {
    id?: number
    agentId: number
    triggerInterval?: number
    signalPoolIds?: string | null
    enabled?: boolean
    scheduledTrigger?: boolean
    lastTriggerAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StrategyConfigUpdateManyMutationInput = {
    triggerInterval?: IntFieldUpdateOperationsInput | number
    signalPoolIds?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    scheduledTrigger?: BoolFieldUpdateOperationsInput | boolean
    lastTriggerAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrategyConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: IntFieldUpdateOperationsInput | number
    triggerInterval?: IntFieldUpdateOperationsInput | number
    signalPoolIds?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    scheduledTrigger?: BoolFieldUpdateOperationsInput | boolean
    lastTriggerAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTemplateCreateInput = {
    name: string
    slug: string
    description?: string | null
    content: string
    category?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bindings?: PromptBindingCreateNestedManyWithoutPromptTemplateInput
  }

  export type PromptTemplateUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    content: string
    category?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bindings?: PromptBindingUncheckedCreateNestedManyWithoutPromptTemplateInput
  }

  export type PromptTemplateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindings?: PromptBindingUpdateManyWithoutPromptTemplateNestedInput
  }

  export type PromptTemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bindings?: PromptBindingUncheckedUpdateManyWithoutPromptTemplateNestedInput
  }

  export type PromptTemplateCreateManyInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    content: string
    category?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptTemplateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptBindingCreateInput = {
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutPromptBindingInput
    promptTemplate: PromptTemplateCreateNestedOneWithoutBindingsInput
  }

  export type PromptBindingUncheckedCreateInput = {
    id?: number
    agentId: number
    promptTemplateId: number
    createdAt?: Date | string
  }

  export type PromptBindingUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutPromptBindingNestedInput
    promptTemplate?: PromptTemplateUpdateOneRequiredWithoutBindingsNestedInput
  }

  export type PromptBindingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: IntFieldUpdateOperationsInput | number
    promptTemplateId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptBindingCreateManyInput = {
    id?: number
    agentId: number
    promptTemplateId: number
    createdAt?: Date | string
  }

  export type PromptBindingUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptBindingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: IntFieldUpdateOperationsInput | number
    promptTemplateId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentCreateInput = {
    name: string
    year: number
    hostCountry: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    fixtures?: FixtureCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateInput = {
    id?: number
    name: string
    year: number
    hostCountry: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    fixtures?: FixtureUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    hostCountry?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fixtures?: FixtureUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    hostCountry?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fixtures?: FixtureUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentCreateManyInput = {
    id?: number
    name: string
    year: number
    hostCountry: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type TournamentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    hostCountry?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    hostCountry?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsItemCreateInput = {
    title: string
    summary?: string | null
    source: string
    url?: string | null
    relevance?: string | null
    sentiment?: string | null
    aiClassification?: string | null
    publishedAt: Date | string
    createdAt?: Date | string
  }

  export type NewsItemUncheckedCreateInput = {
    id?: number
    title: string
    summary?: string | null
    source: string
    url?: string | null
    relevance?: string | null
    sentiment?: string | null
    aiClassification?: string | null
    publishedAt: Date | string
    createdAt?: Date | string
  }

  export type NewsItemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    relevance?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    aiClassification?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    relevance?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    aiClassification?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsItemCreateManyInput = {
    id?: number
    title: string
    summary?: string | null
    source: string
    url?: string | null
    relevance?: string | null
    sentiment?: string | null
    aiClassification?: string | null
    publishedAt: Date | string
    createdAt?: Date | string
  }

  export type NewsItemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    relevance?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    aiClassification?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    relevance?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    aiClassification?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BetListRelationFilter = {
    every?: BetWhereInput
    some?: BetWhereInput
    none?: BetWhereInput
  }

  export type DecisionLogListRelationFilter = {
    every?: DecisionLogWhereInput
    some?: DecisionLogWhereInput
    none?: DecisionLogWhereInput
  }

  export type StrategyConfigNullableRelationFilter = {
    is?: StrategyConfigWhereInput | null
    isNot?: StrategyConfigWhereInput | null
  }

  export type PromptBindingNullableRelationFilter = {
    is?: PromptBindingWhereInput | null
    isNot?: PromptBindingWhereInput | null
  }

  export type BankrollSnapshotListRelationFilter = {
    every?: BankrollSnapshotWhereInput
    some?: BankrollSnapshotWhereInput
    none?: BankrollSnapshotWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DecisionLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BankrollSnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    model?: SortOrder
    baseUrl?: SortOrder
    apiKey?: SortOrder
    strategy?: SortOrder
    avatarPresetId?: SortOrder
    initialCapital?: SortOrder
    currentCash?: SortOrder
    frozenCash?: SortOrder
    isActive?: SortOrder
    autoTradingEnabled?: SortOrder
    showOnDashboard?: SortOrder
    maxStakePercent?: SortOrder
    maxOpenBets?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentAvgOrderByAggregateInput = {
    id?: SortOrder
    avatarPresetId?: SortOrder
    initialCapital?: SortOrder
    currentCash?: SortOrder
    frozenCash?: SortOrder
    maxStakePercent?: SortOrder
    maxOpenBets?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    model?: SortOrder
    baseUrl?: SortOrder
    apiKey?: SortOrder
    strategy?: SortOrder
    avatarPresetId?: SortOrder
    initialCapital?: SortOrder
    currentCash?: SortOrder
    frozenCash?: SortOrder
    isActive?: SortOrder
    autoTradingEnabled?: SortOrder
    showOnDashboard?: SortOrder
    maxStakePercent?: SortOrder
    maxOpenBets?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    model?: SortOrder
    baseUrl?: SortOrder
    apiKey?: SortOrder
    strategy?: SortOrder
    avatarPresetId?: SortOrder
    initialCapital?: SortOrder
    currentCash?: SortOrder
    frozenCash?: SortOrder
    isActive?: SortOrder
    autoTradingEnabled?: SortOrder
    showOnDashboard?: SortOrder
    maxStakePercent?: SortOrder
    maxOpenBets?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentSumOrderByAggregateInput = {
    id?: SortOrder
    avatarPresetId?: SortOrder
    initialCapital?: SortOrder
    currentCash?: SortOrder
    frozenCash?: SortOrder
    maxStakePercent?: SortOrder
    maxOpenBets?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AgentRelationFilter = {
    is?: AgentWhereInput
    isNot?: AgentWhereInput
  }

  export type FixtureRelationFilter = {
    is?: FixtureWhereInput
    isNot?: FixtureWhereInput
  }

  export type BetCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    fixtureId?: SortOrder
    betNo?: SortOrder
    market?: SortOrder
    selection?: SortOrder
    side?: SortOrder
    odds?: SortOrder
    stake?: SortOrder
    potentialProfit?: SortOrder
    potentialLoss?: SortOrder
    status?: SortOrder
    result?: SortOrder
    settledAt?: SortOrder
    realizedPnl?: SortOrder
    confidence?: SortOrder
    signalType?: SortOrder
    decisionLogId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BetAvgOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    fixtureId?: SortOrder
    odds?: SortOrder
    stake?: SortOrder
    potentialProfit?: SortOrder
    potentialLoss?: SortOrder
    realizedPnl?: SortOrder
    confidence?: SortOrder
    decisionLogId?: SortOrder
  }

  export type BetMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    fixtureId?: SortOrder
    betNo?: SortOrder
    market?: SortOrder
    selection?: SortOrder
    side?: SortOrder
    odds?: SortOrder
    stake?: SortOrder
    potentialProfit?: SortOrder
    potentialLoss?: SortOrder
    status?: SortOrder
    result?: SortOrder
    settledAt?: SortOrder
    realizedPnl?: SortOrder
    confidence?: SortOrder
    signalType?: SortOrder
    decisionLogId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BetMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    fixtureId?: SortOrder
    betNo?: SortOrder
    market?: SortOrder
    selection?: SortOrder
    side?: SortOrder
    odds?: SortOrder
    stake?: SortOrder
    potentialProfit?: SortOrder
    potentialLoss?: SortOrder
    status?: SortOrder
    result?: SortOrder
    settledAt?: SortOrder
    realizedPnl?: SortOrder
    confidence?: SortOrder
    signalType?: SortOrder
    decisionLogId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BetSumOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    fixtureId?: SortOrder
    odds?: SortOrder
    stake?: SortOrder
    potentialProfit?: SortOrder
    potentialLoss?: SortOrder
    realizedPnl?: SortOrder
    confidence?: SortOrder
    decisionLogId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type TournamentRelationFilter = {
    is?: TournamentWhereInput
    isNot?: TournamentWhereInput
  }

  export type OddsSnapshotListRelationFilter = {
    every?: OddsSnapshotWhereInput
    some?: OddsSnapshotWhereInput
    none?: OddsSnapshotWhereInput
  }

  export type MatchEventListRelationFilter = {
    every?: MatchEventWhereInput
    some?: MatchEventWhereInput
    none?: MatchEventWhereInput
  }

  export type SignalListRelationFilter = {
    every?: SignalWhereInput
    some?: SignalWhereInput
    none?: SignalWhereInput
  }

  export type OddsSnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SignalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FixtureCountOrderByAggregateInput = {
    id?: SortOrder
    txlineFixtureId?: SortOrder
    tournamentId?: SortOrder
    teamA?: SortOrder
    teamB?: SortOrder
    teamACode?: SortOrder
    teamBCode?: SortOrder
    stage?: SortOrder
    venue?: SortOrder
    kickoff?: SortOrder
    status?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    currentMinute?: SortOrder
    currentPeriod?: SortOrder
    teamAFifaRank?: SortOrder
    teamBFifaRank?: SortOrder
    teamAForm?: SortOrder
    teamBForm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FixtureAvgOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    currentMinute?: SortOrder
    currentPeriod?: SortOrder
    teamAFifaRank?: SortOrder
    teamBFifaRank?: SortOrder
  }

  export type FixtureMaxOrderByAggregateInput = {
    id?: SortOrder
    txlineFixtureId?: SortOrder
    tournamentId?: SortOrder
    teamA?: SortOrder
    teamB?: SortOrder
    teamACode?: SortOrder
    teamBCode?: SortOrder
    stage?: SortOrder
    venue?: SortOrder
    kickoff?: SortOrder
    status?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    currentMinute?: SortOrder
    currentPeriod?: SortOrder
    teamAFifaRank?: SortOrder
    teamBFifaRank?: SortOrder
    teamAForm?: SortOrder
    teamBForm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FixtureMinOrderByAggregateInput = {
    id?: SortOrder
    txlineFixtureId?: SortOrder
    tournamentId?: SortOrder
    teamA?: SortOrder
    teamB?: SortOrder
    teamACode?: SortOrder
    teamBCode?: SortOrder
    stage?: SortOrder
    venue?: SortOrder
    kickoff?: SortOrder
    status?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    currentMinute?: SortOrder
    currentPeriod?: SortOrder
    teamAFifaRank?: SortOrder
    teamBFifaRank?: SortOrder
    teamAForm?: SortOrder
    teamBForm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FixtureSumOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    currentMinute?: SortOrder
    currentPeriod?: SortOrder
    teamAFifaRank?: SortOrder
    teamBFifaRank?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type OddsSnapshotFixtureIdSourceMarketTimestampCompoundUniqueInput = {
    fixtureId: number
    source: string
    market: string
    timestamp: Date | string
  }

  export type OddsSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    source?: SortOrder
    market?: SortOrder
    teamAOdds?: SortOrder
    drawOdds?: SortOrder
    teamBOdds?: SortOrder
    allOutcomes?: SortOrder
    timestamp?: SortOrder
  }

  export type OddsSnapshotAvgOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    teamAOdds?: SortOrder
    drawOdds?: SortOrder
    teamBOdds?: SortOrder
  }

  export type OddsSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    source?: SortOrder
    market?: SortOrder
    teamAOdds?: SortOrder
    drawOdds?: SortOrder
    teamBOdds?: SortOrder
    timestamp?: SortOrder
  }

  export type OddsSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    source?: SortOrder
    market?: SortOrder
    teamAOdds?: SortOrder
    drawOdds?: SortOrder
    teamBOdds?: SortOrder
    timestamp?: SortOrder
  }

  export type OddsSnapshotSumOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    teamAOdds?: SortOrder
    drawOdds?: SortOrder
    teamBOdds?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type MatchEventCountOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    eventType?: SortOrder
    minute?: SortOrder
    period?: SortOrder
    team?: SortOrder
    player?: SortOrder
    description?: SortOrder
    statKey?: SortOrder
    occurredAt?: SortOrder
  }

  export type MatchEventAvgOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    minute?: SortOrder
    period?: SortOrder
  }

  export type MatchEventMaxOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    eventType?: SortOrder
    minute?: SortOrder
    period?: SortOrder
    team?: SortOrder
    player?: SortOrder
    description?: SortOrder
    statKey?: SortOrder
    occurredAt?: SortOrder
  }

  export type MatchEventMinOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    eventType?: SortOrder
    minute?: SortOrder
    period?: SortOrder
    team?: SortOrder
    player?: SortOrder
    description?: SortOrder
    statKey?: SortOrder
    occurredAt?: SortOrder
  }

  export type MatchEventSumOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    minute?: SortOrder
    period?: SortOrder
  }

  export type SignalCountOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    triggeredAt?: SortOrder
  }

  export type SignalAvgOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
  }

  export type SignalMaxOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    triggeredAt?: SortOrder
  }

  export type SignalMinOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    triggeredAt?: SortOrder
  }

  export type SignalSumOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
  }

  export type DecisionLogCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    decisionTime?: SortOrder
    reasoning?: SortOrder
    operation?: SortOrder
    fixtureId?: SortOrder
    market?: SortOrder
    selection?: SortOrder
    stakePortion?: SortOrder
    confidence?: SortOrder
    totalBankroll?: SortOrder
    executed?: SortOrder
    betId?: SortOrder
    signalType?: SortOrder
    promptSnapshot?: SortOrder
    reasoningSnapshot?: SortOrder
    decisionSnapshot?: SortOrder
    createdAt?: SortOrder
  }

  export type DecisionLogAvgOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    fixtureId?: SortOrder
    stakePortion?: SortOrder
    confidence?: SortOrder
    totalBankroll?: SortOrder
    betId?: SortOrder
  }

  export type DecisionLogMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    decisionTime?: SortOrder
    reasoning?: SortOrder
    operation?: SortOrder
    fixtureId?: SortOrder
    market?: SortOrder
    selection?: SortOrder
    stakePortion?: SortOrder
    confidence?: SortOrder
    totalBankroll?: SortOrder
    executed?: SortOrder
    betId?: SortOrder
    signalType?: SortOrder
    promptSnapshot?: SortOrder
    reasoningSnapshot?: SortOrder
    decisionSnapshot?: SortOrder
    createdAt?: SortOrder
  }

  export type DecisionLogMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    decisionTime?: SortOrder
    reasoning?: SortOrder
    operation?: SortOrder
    fixtureId?: SortOrder
    market?: SortOrder
    selection?: SortOrder
    stakePortion?: SortOrder
    confidence?: SortOrder
    totalBankroll?: SortOrder
    executed?: SortOrder
    betId?: SortOrder
    signalType?: SortOrder
    promptSnapshot?: SortOrder
    reasoningSnapshot?: SortOrder
    decisionSnapshot?: SortOrder
    createdAt?: SortOrder
  }

  export type DecisionLogSumOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    fixtureId?: SortOrder
    stakePortion?: SortOrder
    confidence?: SortOrder
    totalBankroll?: SortOrder
    betId?: SortOrder
  }

  export type BankrollSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    totalBankroll?: SortOrder
    cash?: SortOrder
    openBetsValue?: SortOrder
    unrealizedPnl?: SortOrder
    snapshotTime?: SortOrder
  }

  export type BankrollSnapshotAvgOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    totalBankroll?: SortOrder
    cash?: SortOrder
    openBetsValue?: SortOrder
    unrealizedPnl?: SortOrder
  }

  export type BankrollSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    totalBankroll?: SortOrder
    cash?: SortOrder
    openBetsValue?: SortOrder
    unrealizedPnl?: SortOrder
    snapshotTime?: SortOrder
  }

  export type BankrollSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    totalBankroll?: SortOrder
    cash?: SortOrder
    openBetsValue?: SortOrder
    unrealizedPnl?: SortOrder
    snapshotTime?: SortOrder
  }

  export type BankrollSnapshotSumOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    totalBankroll?: SortOrder
    cash?: SortOrder
    openBetsValue?: SortOrder
    unrealizedPnl?: SortOrder
  }

  export type StrategyConfigCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    triggerInterval?: SortOrder
    signalPoolIds?: SortOrder
    enabled?: SortOrder
    scheduledTrigger?: SortOrder
    lastTriggerAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StrategyConfigAvgOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    triggerInterval?: SortOrder
  }

  export type StrategyConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    triggerInterval?: SortOrder
    signalPoolIds?: SortOrder
    enabled?: SortOrder
    scheduledTrigger?: SortOrder
    lastTriggerAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StrategyConfigMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    triggerInterval?: SortOrder
    signalPoolIds?: SortOrder
    enabled?: SortOrder
    scheduledTrigger?: SortOrder
    lastTriggerAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StrategyConfigSumOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    triggerInterval?: SortOrder
  }

  export type PromptBindingListRelationFilter = {
    every?: PromptBindingWhereInput
    some?: PromptBindingWhereInput
    none?: PromptBindingWhereInput
  }

  export type PromptBindingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromptTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    content?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptTemplateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PromptTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    content?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    content?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptTemplateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PromptTemplateRelationFilter = {
    is?: PromptTemplateWhereInput
    isNot?: PromptTemplateWhereInput
  }

  export type PromptBindingCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    promptTemplateId?: SortOrder
    createdAt?: SortOrder
  }

  export type PromptBindingAvgOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    promptTemplateId?: SortOrder
  }

  export type PromptBindingMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    promptTemplateId?: SortOrder
    createdAt?: SortOrder
  }

  export type PromptBindingMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    promptTemplateId?: SortOrder
    createdAt?: SortOrder
  }

  export type PromptBindingSumOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    promptTemplateId?: SortOrder
  }

  export type FixtureListRelationFilter = {
    every?: FixtureWhereInput
    some?: FixtureWhereInput
    none?: FixtureWhereInput
  }

  export type FixtureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TournamentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    hostCountry?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TournamentAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type TournamentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    hostCountry?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TournamentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    hostCountry?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TournamentSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type NewsItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    source?: SortOrder
    url?: SortOrder
    relevance?: SortOrder
    sentiment?: SortOrder
    aiClassification?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    source?: SortOrder
    url?: SortOrder
    relevance?: SortOrder
    sentiment?: SortOrder
    aiClassification?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    source?: SortOrder
    url?: SortOrder
    relevance?: SortOrder
    sentiment?: SortOrder
    aiClassification?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BetCreateNestedManyWithoutAgentInput = {
    create?: XOR<BetCreateWithoutAgentInput, BetUncheckedCreateWithoutAgentInput> | BetCreateWithoutAgentInput[] | BetUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: BetCreateOrConnectWithoutAgentInput | BetCreateOrConnectWithoutAgentInput[]
    createMany?: BetCreateManyAgentInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type DecisionLogCreateNestedManyWithoutAgentInput = {
    create?: XOR<DecisionLogCreateWithoutAgentInput, DecisionLogUncheckedCreateWithoutAgentInput> | DecisionLogCreateWithoutAgentInput[] | DecisionLogUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: DecisionLogCreateOrConnectWithoutAgentInput | DecisionLogCreateOrConnectWithoutAgentInput[]
    createMany?: DecisionLogCreateManyAgentInputEnvelope
    connect?: DecisionLogWhereUniqueInput | DecisionLogWhereUniqueInput[]
  }

  export type StrategyConfigCreateNestedOneWithoutAgentInput = {
    create?: XOR<StrategyConfigCreateWithoutAgentInput, StrategyConfigUncheckedCreateWithoutAgentInput>
    connectOrCreate?: StrategyConfigCreateOrConnectWithoutAgentInput
    connect?: StrategyConfigWhereUniqueInput
  }

  export type PromptBindingCreateNestedOneWithoutAgentInput = {
    create?: XOR<PromptBindingCreateWithoutAgentInput, PromptBindingUncheckedCreateWithoutAgentInput>
    connectOrCreate?: PromptBindingCreateOrConnectWithoutAgentInput
    connect?: PromptBindingWhereUniqueInput
  }

  export type BankrollSnapshotCreateNestedManyWithoutAgentInput = {
    create?: XOR<BankrollSnapshotCreateWithoutAgentInput, BankrollSnapshotUncheckedCreateWithoutAgentInput> | BankrollSnapshotCreateWithoutAgentInput[] | BankrollSnapshotUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: BankrollSnapshotCreateOrConnectWithoutAgentInput | BankrollSnapshotCreateOrConnectWithoutAgentInput[]
    createMany?: BankrollSnapshotCreateManyAgentInputEnvelope
    connect?: BankrollSnapshotWhereUniqueInput | BankrollSnapshotWhereUniqueInput[]
  }

  export type BetUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<BetCreateWithoutAgentInput, BetUncheckedCreateWithoutAgentInput> | BetCreateWithoutAgentInput[] | BetUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: BetCreateOrConnectWithoutAgentInput | BetCreateOrConnectWithoutAgentInput[]
    createMany?: BetCreateManyAgentInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type DecisionLogUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<DecisionLogCreateWithoutAgentInput, DecisionLogUncheckedCreateWithoutAgentInput> | DecisionLogCreateWithoutAgentInput[] | DecisionLogUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: DecisionLogCreateOrConnectWithoutAgentInput | DecisionLogCreateOrConnectWithoutAgentInput[]
    createMany?: DecisionLogCreateManyAgentInputEnvelope
    connect?: DecisionLogWhereUniqueInput | DecisionLogWhereUniqueInput[]
  }

  export type StrategyConfigUncheckedCreateNestedOneWithoutAgentInput = {
    create?: XOR<StrategyConfigCreateWithoutAgentInput, StrategyConfigUncheckedCreateWithoutAgentInput>
    connectOrCreate?: StrategyConfigCreateOrConnectWithoutAgentInput
    connect?: StrategyConfigWhereUniqueInput
  }

  export type PromptBindingUncheckedCreateNestedOneWithoutAgentInput = {
    create?: XOR<PromptBindingCreateWithoutAgentInput, PromptBindingUncheckedCreateWithoutAgentInput>
    connectOrCreate?: PromptBindingCreateOrConnectWithoutAgentInput
    connect?: PromptBindingWhereUniqueInput
  }

  export type BankrollSnapshotUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<BankrollSnapshotCreateWithoutAgentInput, BankrollSnapshotUncheckedCreateWithoutAgentInput> | BankrollSnapshotCreateWithoutAgentInput[] | BankrollSnapshotUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: BankrollSnapshotCreateOrConnectWithoutAgentInput | BankrollSnapshotCreateOrConnectWithoutAgentInput[]
    createMany?: BankrollSnapshotCreateManyAgentInputEnvelope
    connect?: BankrollSnapshotWhereUniqueInput | BankrollSnapshotWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BetUpdateManyWithoutAgentNestedInput = {
    create?: XOR<BetCreateWithoutAgentInput, BetUncheckedCreateWithoutAgentInput> | BetCreateWithoutAgentInput[] | BetUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: BetCreateOrConnectWithoutAgentInput | BetCreateOrConnectWithoutAgentInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutAgentInput | BetUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: BetCreateManyAgentInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutAgentInput | BetUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: BetUpdateManyWithWhereWithoutAgentInput | BetUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type DecisionLogUpdateManyWithoutAgentNestedInput = {
    create?: XOR<DecisionLogCreateWithoutAgentInput, DecisionLogUncheckedCreateWithoutAgentInput> | DecisionLogCreateWithoutAgentInput[] | DecisionLogUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: DecisionLogCreateOrConnectWithoutAgentInput | DecisionLogCreateOrConnectWithoutAgentInput[]
    upsert?: DecisionLogUpsertWithWhereUniqueWithoutAgentInput | DecisionLogUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: DecisionLogCreateManyAgentInputEnvelope
    set?: DecisionLogWhereUniqueInput | DecisionLogWhereUniqueInput[]
    disconnect?: DecisionLogWhereUniqueInput | DecisionLogWhereUniqueInput[]
    delete?: DecisionLogWhereUniqueInput | DecisionLogWhereUniqueInput[]
    connect?: DecisionLogWhereUniqueInput | DecisionLogWhereUniqueInput[]
    update?: DecisionLogUpdateWithWhereUniqueWithoutAgentInput | DecisionLogUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: DecisionLogUpdateManyWithWhereWithoutAgentInput | DecisionLogUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: DecisionLogScalarWhereInput | DecisionLogScalarWhereInput[]
  }

  export type StrategyConfigUpdateOneWithoutAgentNestedInput = {
    create?: XOR<StrategyConfigCreateWithoutAgentInput, StrategyConfigUncheckedCreateWithoutAgentInput>
    connectOrCreate?: StrategyConfigCreateOrConnectWithoutAgentInput
    upsert?: StrategyConfigUpsertWithoutAgentInput
    disconnect?: StrategyConfigWhereInput | boolean
    delete?: StrategyConfigWhereInput | boolean
    connect?: StrategyConfigWhereUniqueInput
    update?: XOR<XOR<StrategyConfigUpdateToOneWithWhereWithoutAgentInput, StrategyConfigUpdateWithoutAgentInput>, StrategyConfigUncheckedUpdateWithoutAgentInput>
  }

  export type PromptBindingUpdateOneWithoutAgentNestedInput = {
    create?: XOR<PromptBindingCreateWithoutAgentInput, PromptBindingUncheckedCreateWithoutAgentInput>
    connectOrCreate?: PromptBindingCreateOrConnectWithoutAgentInput
    upsert?: PromptBindingUpsertWithoutAgentInput
    disconnect?: PromptBindingWhereInput | boolean
    delete?: PromptBindingWhereInput | boolean
    connect?: PromptBindingWhereUniqueInput
    update?: XOR<XOR<PromptBindingUpdateToOneWithWhereWithoutAgentInput, PromptBindingUpdateWithoutAgentInput>, PromptBindingUncheckedUpdateWithoutAgentInput>
  }

  export type BankrollSnapshotUpdateManyWithoutAgentNestedInput = {
    create?: XOR<BankrollSnapshotCreateWithoutAgentInput, BankrollSnapshotUncheckedCreateWithoutAgentInput> | BankrollSnapshotCreateWithoutAgentInput[] | BankrollSnapshotUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: BankrollSnapshotCreateOrConnectWithoutAgentInput | BankrollSnapshotCreateOrConnectWithoutAgentInput[]
    upsert?: BankrollSnapshotUpsertWithWhereUniqueWithoutAgentInput | BankrollSnapshotUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: BankrollSnapshotCreateManyAgentInputEnvelope
    set?: BankrollSnapshotWhereUniqueInput | BankrollSnapshotWhereUniqueInput[]
    disconnect?: BankrollSnapshotWhereUniqueInput | BankrollSnapshotWhereUniqueInput[]
    delete?: BankrollSnapshotWhereUniqueInput | BankrollSnapshotWhereUniqueInput[]
    connect?: BankrollSnapshotWhereUniqueInput | BankrollSnapshotWhereUniqueInput[]
    update?: BankrollSnapshotUpdateWithWhereUniqueWithoutAgentInput | BankrollSnapshotUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: BankrollSnapshotUpdateManyWithWhereWithoutAgentInput | BankrollSnapshotUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: BankrollSnapshotScalarWhereInput | BankrollSnapshotScalarWhereInput[]
  }

  export type BetUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<BetCreateWithoutAgentInput, BetUncheckedCreateWithoutAgentInput> | BetCreateWithoutAgentInput[] | BetUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: BetCreateOrConnectWithoutAgentInput | BetCreateOrConnectWithoutAgentInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutAgentInput | BetUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: BetCreateManyAgentInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutAgentInput | BetUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: BetUpdateManyWithWhereWithoutAgentInput | BetUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type DecisionLogUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<DecisionLogCreateWithoutAgentInput, DecisionLogUncheckedCreateWithoutAgentInput> | DecisionLogCreateWithoutAgentInput[] | DecisionLogUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: DecisionLogCreateOrConnectWithoutAgentInput | DecisionLogCreateOrConnectWithoutAgentInput[]
    upsert?: DecisionLogUpsertWithWhereUniqueWithoutAgentInput | DecisionLogUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: DecisionLogCreateManyAgentInputEnvelope
    set?: DecisionLogWhereUniqueInput | DecisionLogWhereUniqueInput[]
    disconnect?: DecisionLogWhereUniqueInput | DecisionLogWhereUniqueInput[]
    delete?: DecisionLogWhereUniqueInput | DecisionLogWhereUniqueInput[]
    connect?: DecisionLogWhereUniqueInput | DecisionLogWhereUniqueInput[]
    update?: DecisionLogUpdateWithWhereUniqueWithoutAgentInput | DecisionLogUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: DecisionLogUpdateManyWithWhereWithoutAgentInput | DecisionLogUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: DecisionLogScalarWhereInput | DecisionLogScalarWhereInput[]
  }

  export type StrategyConfigUncheckedUpdateOneWithoutAgentNestedInput = {
    create?: XOR<StrategyConfigCreateWithoutAgentInput, StrategyConfigUncheckedCreateWithoutAgentInput>
    connectOrCreate?: StrategyConfigCreateOrConnectWithoutAgentInput
    upsert?: StrategyConfigUpsertWithoutAgentInput
    disconnect?: StrategyConfigWhereInput | boolean
    delete?: StrategyConfigWhereInput | boolean
    connect?: StrategyConfigWhereUniqueInput
    update?: XOR<XOR<StrategyConfigUpdateToOneWithWhereWithoutAgentInput, StrategyConfigUpdateWithoutAgentInput>, StrategyConfigUncheckedUpdateWithoutAgentInput>
  }

  export type PromptBindingUncheckedUpdateOneWithoutAgentNestedInput = {
    create?: XOR<PromptBindingCreateWithoutAgentInput, PromptBindingUncheckedCreateWithoutAgentInput>
    connectOrCreate?: PromptBindingCreateOrConnectWithoutAgentInput
    upsert?: PromptBindingUpsertWithoutAgentInput
    disconnect?: PromptBindingWhereInput | boolean
    delete?: PromptBindingWhereInput | boolean
    connect?: PromptBindingWhereUniqueInput
    update?: XOR<XOR<PromptBindingUpdateToOneWithWhereWithoutAgentInput, PromptBindingUpdateWithoutAgentInput>, PromptBindingUncheckedUpdateWithoutAgentInput>
  }

  export type BankrollSnapshotUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<BankrollSnapshotCreateWithoutAgentInput, BankrollSnapshotUncheckedCreateWithoutAgentInput> | BankrollSnapshotCreateWithoutAgentInput[] | BankrollSnapshotUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: BankrollSnapshotCreateOrConnectWithoutAgentInput | BankrollSnapshotCreateOrConnectWithoutAgentInput[]
    upsert?: BankrollSnapshotUpsertWithWhereUniqueWithoutAgentInput | BankrollSnapshotUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: BankrollSnapshotCreateManyAgentInputEnvelope
    set?: BankrollSnapshotWhereUniqueInput | BankrollSnapshotWhereUniqueInput[]
    disconnect?: BankrollSnapshotWhereUniqueInput | BankrollSnapshotWhereUniqueInput[]
    delete?: BankrollSnapshotWhereUniqueInput | BankrollSnapshotWhereUniqueInput[]
    connect?: BankrollSnapshotWhereUniqueInput | BankrollSnapshotWhereUniqueInput[]
    update?: BankrollSnapshotUpdateWithWhereUniqueWithoutAgentInput | BankrollSnapshotUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: BankrollSnapshotUpdateManyWithWhereWithoutAgentInput | BankrollSnapshotUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: BankrollSnapshotScalarWhereInput | BankrollSnapshotScalarWhereInput[]
  }

  export type AgentCreateNestedOneWithoutBetsInput = {
    create?: XOR<AgentCreateWithoutBetsInput, AgentUncheckedCreateWithoutBetsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutBetsInput
    connect?: AgentWhereUniqueInput
  }

  export type FixtureCreateNestedOneWithoutBetsInput = {
    create?: XOR<FixtureCreateWithoutBetsInput, FixtureUncheckedCreateWithoutBetsInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutBetsInput
    connect?: FixtureWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AgentUpdateOneRequiredWithoutBetsNestedInput = {
    create?: XOR<AgentCreateWithoutBetsInput, AgentUncheckedCreateWithoutBetsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutBetsInput
    upsert?: AgentUpsertWithoutBetsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutBetsInput, AgentUpdateWithoutBetsInput>, AgentUncheckedUpdateWithoutBetsInput>
  }

  export type FixtureUpdateOneRequiredWithoutBetsNestedInput = {
    create?: XOR<FixtureCreateWithoutBetsInput, FixtureUncheckedCreateWithoutBetsInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutBetsInput
    upsert?: FixtureUpsertWithoutBetsInput
    connect?: FixtureWhereUniqueInput
    update?: XOR<XOR<FixtureUpdateToOneWithWhereWithoutBetsInput, FixtureUpdateWithoutBetsInput>, FixtureUncheckedUpdateWithoutBetsInput>
  }

  export type TournamentCreateNestedOneWithoutFixturesInput = {
    create?: XOR<TournamentCreateWithoutFixturesInput, TournamentUncheckedCreateWithoutFixturesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutFixturesInput
    connect?: TournamentWhereUniqueInput
  }

  export type BetCreateNestedManyWithoutFixtureInput = {
    create?: XOR<BetCreateWithoutFixtureInput, BetUncheckedCreateWithoutFixtureInput> | BetCreateWithoutFixtureInput[] | BetUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: BetCreateOrConnectWithoutFixtureInput | BetCreateOrConnectWithoutFixtureInput[]
    createMany?: BetCreateManyFixtureInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type OddsSnapshotCreateNestedManyWithoutFixtureInput = {
    create?: XOR<OddsSnapshotCreateWithoutFixtureInput, OddsSnapshotUncheckedCreateWithoutFixtureInput> | OddsSnapshotCreateWithoutFixtureInput[] | OddsSnapshotUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: OddsSnapshotCreateOrConnectWithoutFixtureInput | OddsSnapshotCreateOrConnectWithoutFixtureInput[]
    createMany?: OddsSnapshotCreateManyFixtureInputEnvelope
    connect?: OddsSnapshotWhereUniqueInput | OddsSnapshotWhereUniqueInput[]
  }

  export type MatchEventCreateNestedManyWithoutFixtureInput = {
    create?: XOR<MatchEventCreateWithoutFixtureInput, MatchEventUncheckedCreateWithoutFixtureInput> | MatchEventCreateWithoutFixtureInput[] | MatchEventUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: MatchEventCreateOrConnectWithoutFixtureInput | MatchEventCreateOrConnectWithoutFixtureInput[]
    createMany?: MatchEventCreateManyFixtureInputEnvelope
    connect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[]
  }

  export type SignalCreateNestedManyWithoutFixtureInput = {
    create?: XOR<SignalCreateWithoutFixtureInput, SignalUncheckedCreateWithoutFixtureInput> | SignalCreateWithoutFixtureInput[] | SignalUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: SignalCreateOrConnectWithoutFixtureInput | SignalCreateOrConnectWithoutFixtureInput[]
    createMany?: SignalCreateManyFixtureInputEnvelope
    connect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
  }

  export type BetUncheckedCreateNestedManyWithoutFixtureInput = {
    create?: XOR<BetCreateWithoutFixtureInput, BetUncheckedCreateWithoutFixtureInput> | BetCreateWithoutFixtureInput[] | BetUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: BetCreateOrConnectWithoutFixtureInput | BetCreateOrConnectWithoutFixtureInput[]
    createMany?: BetCreateManyFixtureInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type OddsSnapshotUncheckedCreateNestedManyWithoutFixtureInput = {
    create?: XOR<OddsSnapshotCreateWithoutFixtureInput, OddsSnapshotUncheckedCreateWithoutFixtureInput> | OddsSnapshotCreateWithoutFixtureInput[] | OddsSnapshotUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: OddsSnapshotCreateOrConnectWithoutFixtureInput | OddsSnapshotCreateOrConnectWithoutFixtureInput[]
    createMany?: OddsSnapshotCreateManyFixtureInputEnvelope
    connect?: OddsSnapshotWhereUniqueInput | OddsSnapshotWhereUniqueInput[]
  }

  export type MatchEventUncheckedCreateNestedManyWithoutFixtureInput = {
    create?: XOR<MatchEventCreateWithoutFixtureInput, MatchEventUncheckedCreateWithoutFixtureInput> | MatchEventCreateWithoutFixtureInput[] | MatchEventUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: MatchEventCreateOrConnectWithoutFixtureInput | MatchEventCreateOrConnectWithoutFixtureInput[]
    createMany?: MatchEventCreateManyFixtureInputEnvelope
    connect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[]
  }

  export type SignalUncheckedCreateNestedManyWithoutFixtureInput = {
    create?: XOR<SignalCreateWithoutFixtureInput, SignalUncheckedCreateWithoutFixtureInput> | SignalCreateWithoutFixtureInput[] | SignalUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: SignalCreateOrConnectWithoutFixtureInput | SignalCreateOrConnectWithoutFixtureInput[]
    createMany?: SignalCreateManyFixtureInputEnvelope
    connect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
  }

  export type TournamentUpdateOneRequiredWithoutFixturesNestedInput = {
    create?: XOR<TournamentCreateWithoutFixturesInput, TournamentUncheckedCreateWithoutFixturesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutFixturesInput
    upsert?: TournamentUpsertWithoutFixturesInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutFixturesInput, TournamentUpdateWithoutFixturesInput>, TournamentUncheckedUpdateWithoutFixturesInput>
  }

  export type BetUpdateManyWithoutFixtureNestedInput = {
    create?: XOR<BetCreateWithoutFixtureInput, BetUncheckedCreateWithoutFixtureInput> | BetCreateWithoutFixtureInput[] | BetUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: BetCreateOrConnectWithoutFixtureInput | BetCreateOrConnectWithoutFixtureInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutFixtureInput | BetUpsertWithWhereUniqueWithoutFixtureInput[]
    createMany?: BetCreateManyFixtureInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutFixtureInput | BetUpdateWithWhereUniqueWithoutFixtureInput[]
    updateMany?: BetUpdateManyWithWhereWithoutFixtureInput | BetUpdateManyWithWhereWithoutFixtureInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type OddsSnapshotUpdateManyWithoutFixtureNestedInput = {
    create?: XOR<OddsSnapshotCreateWithoutFixtureInput, OddsSnapshotUncheckedCreateWithoutFixtureInput> | OddsSnapshotCreateWithoutFixtureInput[] | OddsSnapshotUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: OddsSnapshotCreateOrConnectWithoutFixtureInput | OddsSnapshotCreateOrConnectWithoutFixtureInput[]
    upsert?: OddsSnapshotUpsertWithWhereUniqueWithoutFixtureInput | OddsSnapshotUpsertWithWhereUniqueWithoutFixtureInput[]
    createMany?: OddsSnapshotCreateManyFixtureInputEnvelope
    set?: OddsSnapshotWhereUniqueInput | OddsSnapshotWhereUniqueInput[]
    disconnect?: OddsSnapshotWhereUniqueInput | OddsSnapshotWhereUniqueInput[]
    delete?: OddsSnapshotWhereUniqueInput | OddsSnapshotWhereUniqueInput[]
    connect?: OddsSnapshotWhereUniqueInput | OddsSnapshotWhereUniqueInput[]
    update?: OddsSnapshotUpdateWithWhereUniqueWithoutFixtureInput | OddsSnapshotUpdateWithWhereUniqueWithoutFixtureInput[]
    updateMany?: OddsSnapshotUpdateManyWithWhereWithoutFixtureInput | OddsSnapshotUpdateManyWithWhereWithoutFixtureInput[]
    deleteMany?: OddsSnapshotScalarWhereInput | OddsSnapshotScalarWhereInput[]
  }

  export type MatchEventUpdateManyWithoutFixtureNestedInput = {
    create?: XOR<MatchEventCreateWithoutFixtureInput, MatchEventUncheckedCreateWithoutFixtureInput> | MatchEventCreateWithoutFixtureInput[] | MatchEventUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: MatchEventCreateOrConnectWithoutFixtureInput | MatchEventCreateOrConnectWithoutFixtureInput[]
    upsert?: MatchEventUpsertWithWhereUniqueWithoutFixtureInput | MatchEventUpsertWithWhereUniqueWithoutFixtureInput[]
    createMany?: MatchEventCreateManyFixtureInputEnvelope
    set?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[]
    disconnect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[]
    delete?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[]
    connect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[]
    update?: MatchEventUpdateWithWhereUniqueWithoutFixtureInput | MatchEventUpdateWithWhereUniqueWithoutFixtureInput[]
    updateMany?: MatchEventUpdateManyWithWhereWithoutFixtureInput | MatchEventUpdateManyWithWhereWithoutFixtureInput[]
    deleteMany?: MatchEventScalarWhereInput | MatchEventScalarWhereInput[]
  }

  export type SignalUpdateManyWithoutFixtureNestedInput = {
    create?: XOR<SignalCreateWithoutFixtureInput, SignalUncheckedCreateWithoutFixtureInput> | SignalCreateWithoutFixtureInput[] | SignalUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: SignalCreateOrConnectWithoutFixtureInput | SignalCreateOrConnectWithoutFixtureInput[]
    upsert?: SignalUpsertWithWhereUniqueWithoutFixtureInput | SignalUpsertWithWhereUniqueWithoutFixtureInput[]
    createMany?: SignalCreateManyFixtureInputEnvelope
    set?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    disconnect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    delete?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    connect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    update?: SignalUpdateWithWhereUniqueWithoutFixtureInput | SignalUpdateWithWhereUniqueWithoutFixtureInput[]
    updateMany?: SignalUpdateManyWithWhereWithoutFixtureInput | SignalUpdateManyWithWhereWithoutFixtureInput[]
    deleteMany?: SignalScalarWhereInput | SignalScalarWhereInput[]
  }

  export type BetUncheckedUpdateManyWithoutFixtureNestedInput = {
    create?: XOR<BetCreateWithoutFixtureInput, BetUncheckedCreateWithoutFixtureInput> | BetCreateWithoutFixtureInput[] | BetUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: BetCreateOrConnectWithoutFixtureInput | BetCreateOrConnectWithoutFixtureInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutFixtureInput | BetUpsertWithWhereUniqueWithoutFixtureInput[]
    createMany?: BetCreateManyFixtureInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutFixtureInput | BetUpdateWithWhereUniqueWithoutFixtureInput[]
    updateMany?: BetUpdateManyWithWhereWithoutFixtureInput | BetUpdateManyWithWhereWithoutFixtureInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type OddsSnapshotUncheckedUpdateManyWithoutFixtureNestedInput = {
    create?: XOR<OddsSnapshotCreateWithoutFixtureInput, OddsSnapshotUncheckedCreateWithoutFixtureInput> | OddsSnapshotCreateWithoutFixtureInput[] | OddsSnapshotUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: OddsSnapshotCreateOrConnectWithoutFixtureInput | OddsSnapshotCreateOrConnectWithoutFixtureInput[]
    upsert?: OddsSnapshotUpsertWithWhereUniqueWithoutFixtureInput | OddsSnapshotUpsertWithWhereUniqueWithoutFixtureInput[]
    createMany?: OddsSnapshotCreateManyFixtureInputEnvelope
    set?: OddsSnapshotWhereUniqueInput | OddsSnapshotWhereUniqueInput[]
    disconnect?: OddsSnapshotWhereUniqueInput | OddsSnapshotWhereUniqueInput[]
    delete?: OddsSnapshotWhereUniqueInput | OddsSnapshotWhereUniqueInput[]
    connect?: OddsSnapshotWhereUniqueInput | OddsSnapshotWhereUniqueInput[]
    update?: OddsSnapshotUpdateWithWhereUniqueWithoutFixtureInput | OddsSnapshotUpdateWithWhereUniqueWithoutFixtureInput[]
    updateMany?: OddsSnapshotUpdateManyWithWhereWithoutFixtureInput | OddsSnapshotUpdateManyWithWhereWithoutFixtureInput[]
    deleteMany?: OddsSnapshotScalarWhereInput | OddsSnapshotScalarWhereInput[]
  }

  export type MatchEventUncheckedUpdateManyWithoutFixtureNestedInput = {
    create?: XOR<MatchEventCreateWithoutFixtureInput, MatchEventUncheckedCreateWithoutFixtureInput> | MatchEventCreateWithoutFixtureInput[] | MatchEventUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: MatchEventCreateOrConnectWithoutFixtureInput | MatchEventCreateOrConnectWithoutFixtureInput[]
    upsert?: MatchEventUpsertWithWhereUniqueWithoutFixtureInput | MatchEventUpsertWithWhereUniqueWithoutFixtureInput[]
    createMany?: MatchEventCreateManyFixtureInputEnvelope
    set?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[]
    disconnect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[]
    delete?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[]
    connect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[]
    update?: MatchEventUpdateWithWhereUniqueWithoutFixtureInput | MatchEventUpdateWithWhereUniqueWithoutFixtureInput[]
    updateMany?: MatchEventUpdateManyWithWhereWithoutFixtureInput | MatchEventUpdateManyWithWhereWithoutFixtureInput[]
    deleteMany?: MatchEventScalarWhereInput | MatchEventScalarWhereInput[]
  }

  export type SignalUncheckedUpdateManyWithoutFixtureNestedInput = {
    create?: XOR<SignalCreateWithoutFixtureInput, SignalUncheckedCreateWithoutFixtureInput> | SignalCreateWithoutFixtureInput[] | SignalUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: SignalCreateOrConnectWithoutFixtureInput | SignalCreateOrConnectWithoutFixtureInput[]
    upsert?: SignalUpsertWithWhereUniqueWithoutFixtureInput | SignalUpsertWithWhereUniqueWithoutFixtureInput[]
    createMany?: SignalCreateManyFixtureInputEnvelope
    set?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    disconnect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    delete?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    connect?: SignalWhereUniqueInput | SignalWhereUniqueInput[]
    update?: SignalUpdateWithWhereUniqueWithoutFixtureInput | SignalUpdateWithWhereUniqueWithoutFixtureInput[]
    updateMany?: SignalUpdateManyWithWhereWithoutFixtureInput | SignalUpdateManyWithWhereWithoutFixtureInput[]
    deleteMany?: SignalScalarWhereInput | SignalScalarWhereInput[]
  }

  export type FixtureCreateNestedOneWithoutOddsHistoryInput = {
    create?: XOR<FixtureCreateWithoutOddsHistoryInput, FixtureUncheckedCreateWithoutOddsHistoryInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutOddsHistoryInput
    connect?: FixtureWhereUniqueInput
  }

  export type FixtureUpdateOneRequiredWithoutOddsHistoryNestedInput = {
    create?: XOR<FixtureCreateWithoutOddsHistoryInput, FixtureUncheckedCreateWithoutOddsHistoryInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutOddsHistoryInput
    upsert?: FixtureUpsertWithoutOddsHistoryInput
    connect?: FixtureWhereUniqueInput
    update?: XOR<XOR<FixtureUpdateToOneWithWhereWithoutOddsHistoryInput, FixtureUpdateWithoutOddsHistoryInput>, FixtureUncheckedUpdateWithoutOddsHistoryInput>
  }

  export type FixtureCreateNestedOneWithoutEventsInput = {
    create?: XOR<FixtureCreateWithoutEventsInput, FixtureUncheckedCreateWithoutEventsInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutEventsInput
    connect?: FixtureWhereUniqueInput
  }

  export type FixtureUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<FixtureCreateWithoutEventsInput, FixtureUncheckedCreateWithoutEventsInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutEventsInput
    upsert?: FixtureUpsertWithoutEventsInput
    connect?: FixtureWhereUniqueInput
    update?: XOR<XOR<FixtureUpdateToOneWithWhereWithoutEventsInput, FixtureUpdateWithoutEventsInput>, FixtureUncheckedUpdateWithoutEventsInput>
  }

  export type FixtureCreateNestedOneWithoutSignalsInput = {
    create?: XOR<FixtureCreateWithoutSignalsInput, FixtureUncheckedCreateWithoutSignalsInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutSignalsInput
    connect?: FixtureWhereUniqueInput
  }

  export type FixtureUpdateOneRequiredWithoutSignalsNestedInput = {
    create?: XOR<FixtureCreateWithoutSignalsInput, FixtureUncheckedCreateWithoutSignalsInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutSignalsInput
    upsert?: FixtureUpsertWithoutSignalsInput
    connect?: FixtureWhereUniqueInput
    update?: XOR<XOR<FixtureUpdateToOneWithWhereWithoutSignalsInput, FixtureUpdateWithoutSignalsInput>, FixtureUncheckedUpdateWithoutSignalsInput>
  }

  export type AgentCreateNestedOneWithoutDecisionLogsInput = {
    create?: XOR<AgentCreateWithoutDecisionLogsInput, AgentUncheckedCreateWithoutDecisionLogsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutDecisionLogsInput
    connect?: AgentWhereUniqueInput
  }

  export type AgentUpdateOneRequiredWithoutDecisionLogsNestedInput = {
    create?: XOR<AgentCreateWithoutDecisionLogsInput, AgentUncheckedCreateWithoutDecisionLogsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutDecisionLogsInput
    upsert?: AgentUpsertWithoutDecisionLogsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutDecisionLogsInput, AgentUpdateWithoutDecisionLogsInput>, AgentUncheckedUpdateWithoutDecisionLogsInput>
  }

  export type AgentCreateNestedOneWithoutSnapshotsInput = {
    create?: XOR<AgentCreateWithoutSnapshotsInput, AgentUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutSnapshotsInput
    connect?: AgentWhereUniqueInput
  }

  export type AgentUpdateOneRequiredWithoutSnapshotsNestedInput = {
    create?: XOR<AgentCreateWithoutSnapshotsInput, AgentUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutSnapshotsInput
    upsert?: AgentUpsertWithoutSnapshotsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutSnapshotsInput, AgentUpdateWithoutSnapshotsInput>, AgentUncheckedUpdateWithoutSnapshotsInput>
  }

  export type AgentCreateNestedOneWithoutStrategyConfigInput = {
    create?: XOR<AgentCreateWithoutStrategyConfigInput, AgentUncheckedCreateWithoutStrategyConfigInput>
    connectOrCreate?: AgentCreateOrConnectWithoutStrategyConfigInput
    connect?: AgentWhereUniqueInput
  }

  export type AgentUpdateOneRequiredWithoutStrategyConfigNestedInput = {
    create?: XOR<AgentCreateWithoutStrategyConfigInput, AgentUncheckedCreateWithoutStrategyConfigInput>
    connectOrCreate?: AgentCreateOrConnectWithoutStrategyConfigInput
    upsert?: AgentUpsertWithoutStrategyConfigInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutStrategyConfigInput, AgentUpdateWithoutStrategyConfigInput>, AgentUncheckedUpdateWithoutStrategyConfigInput>
  }

  export type PromptBindingCreateNestedManyWithoutPromptTemplateInput = {
    create?: XOR<PromptBindingCreateWithoutPromptTemplateInput, PromptBindingUncheckedCreateWithoutPromptTemplateInput> | PromptBindingCreateWithoutPromptTemplateInput[] | PromptBindingUncheckedCreateWithoutPromptTemplateInput[]
    connectOrCreate?: PromptBindingCreateOrConnectWithoutPromptTemplateInput | PromptBindingCreateOrConnectWithoutPromptTemplateInput[]
    createMany?: PromptBindingCreateManyPromptTemplateInputEnvelope
    connect?: PromptBindingWhereUniqueInput | PromptBindingWhereUniqueInput[]
  }

  export type PromptBindingUncheckedCreateNestedManyWithoutPromptTemplateInput = {
    create?: XOR<PromptBindingCreateWithoutPromptTemplateInput, PromptBindingUncheckedCreateWithoutPromptTemplateInput> | PromptBindingCreateWithoutPromptTemplateInput[] | PromptBindingUncheckedCreateWithoutPromptTemplateInput[]
    connectOrCreate?: PromptBindingCreateOrConnectWithoutPromptTemplateInput | PromptBindingCreateOrConnectWithoutPromptTemplateInput[]
    createMany?: PromptBindingCreateManyPromptTemplateInputEnvelope
    connect?: PromptBindingWhereUniqueInput | PromptBindingWhereUniqueInput[]
  }

  export type PromptBindingUpdateManyWithoutPromptTemplateNestedInput = {
    create?: XOR<PromptBindingCreateWithoutPromptTemplateInput, PromptBindingUncheckedCreateWithoutPromptTemplateInput> | PromptBindingCreateWithoutPromptTemplateInput[] | PromptBindingUncheckedCreateWithoutPromptTemplateInput[]
    connectOrCreate?: PromptBindingCreateOrConnectWithoutPromptTemplateInput | PromptBindingCreateOrConnectWithoutPromptTemplateInput[]
    upsert?: PromptBindingUpsertWithWhereUniqueWithoutPromptTemplateInput | PromptBindingUpsertWithWhereUniqueWithoutPromptTemplateInput[]
    createMany?: PromptBindingCreateManyPromptTemplateInputEnvelope
    set?: PromptBindingWhereUniqueInput | PromptBindingWhereUniqueInput[]
    disconnect?: PromptBindingWhereUniqueInput | PromptBindingWhereUniqueInput[]
    delete?: PromptBindingWhereUniqueInput | PromptBindingWhereUniqueInput[]
    connect?: PromptBindingWhereUniqueInput | PromptBindingWhereUniqueInput[]
    update?: PromptBindingUpdateWithWhereUniqueWithoutPromptTemplateInput | PromptBindingUpdateWithWhereUniqueWithoutPromptTemplateInput[]
    updateMany?: PromptBindingUpdateManyWithWhereWithoutPromptTemplateInput | PromptBindingUpdateManyWithWhereWithoutPromptTemplateInput[]
    deleteMany?: PromptBindingScalarWhereInput | PromptBindingScalarWhereInput[]
  }

  export type PromptBindingUncheckedUpdateManyWithoutPromptTemplateNestedInput = {
    create?: XOR<PromptBindingCreateWithoutPromptTemplateInput, PromptBindingUncheckedCreateWithoutPromptTemplateInput> | PromptBindingCreateWithoutPromptTemplateInput[] | PromptBindingUncheckedCreateWithoutPromptTemplateInput[]
    connectOrCreate?: PromptBindingCreateOrConnectWithoutPromptTemplateInput | PromptBindingCreateOrConnectWithoutPromptTemplateInput[]
    upsert?: PromptBindingUpsertWithWhereUniqueWithoutPromptTemplateInput | PromptBindingUpsertWithWhereUniqueWithoutPromptTemplateInput[]
    createMany?: PromptBindingCreateManyPromptTemplateInputEnvelope
    set?: PromptBindingWhereUniqueInput | PromptBindingWhereUniqueInput[]
    disconnect?: PromptBindingWhereUniqueInput | PromptBindingWhereUniqueInput[]
    delete?: PromptBindingWhereUniqueInput | PromptBindingWhereUniqueInput[]
    connect?: PromptBindingWhereUniqueInput | PromptBindingWhereUniqueInput[]
    update?: PromptBindingUpdateWithWhereUniqueWithoutPromptTemplateInput | PromptBindingUpdateWithWhereUniqueWithoutPromptTemplateInput[]
    updateMany?: PromptBindingUpdateManyWithWhereWithoutPromptTemplateInput | PromptBindingUpdateManyWithWhereWithoutPromptTemplateInput[]
    deleteMany?: PromptBindingScalarWhereInput | PromptBindingScalarWhereInput[]
  }

  export type AgentCreateNestedOneWithoutPromptBindingInput = {
    create?: XOR<AgentCreateWithoutPromptBindingInput, AgentUncheckedCreateWithoutPromptBindingInput>
    connectOrCreate?: AgentCreateOrConnectWithoutPromptBindingInput
    connect?: AgentWhereUniqueInput
  }

  export type PromptTemplateCreateNestedOneWithoutBindingsInput = {
    create?: XOR<PromptTemplateCreateWithoutBindingsInput, PromptTemplateUncheckedCreateWithoutBindingsInput>
    connectOrCreate?: PromptTemplateCreateOrConnectWithoutBindingsInput
    connect?: PromptTemplateWhereUniqueInput
  }

  export type AgentUpdateOneRequiredWithoutPromptBindingNestedInput = {
    create?: XOR<AgentCreateWithoutPromptBindingInput, AgentUncheckedCreateWithoutPromptBindingInput>
    connectOrCreate?: AgentCreateOrConnectWithoutPromptBindingInput
    upsert?: AgentUpsertWithoutPromptBindingInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutPromptBindingInput, AgentUpdateWithoutPromptBindingInput>, AgentUncheckedUpdateWithoutPromptBindingInput>
  }

  export type PromptTemplateUpdateOneRequiredWithoutBindingsNestedInput = {
    create?: XOR<PromptTemplateCreateWithoutBindingsInput, PromptTemplateUncheckedCreateWithoutBindingsInput>
    connectOrCreate?: PromptTemplateCreateOrConnectWithoutBindingsInput
    upsert?: PromptTemplateUpsertWithoutBindingsInput
    connect?: PromptTemplateWhereUniqueInput
    update?: XOR<XOR<PromptTemplateUpdateToOneWithWhereWithoutBindingsInput, PromptTemplateUpdateWithoutBindingsInput>, PromptTemplateUncheckedUpdateWithoutBindingsInput>
  }

  export type FixtureCreateNestedManyWithoutTournamentInput = {
    create?: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput> | FixtureCreateWithoutTournamentInput[] | FixtureUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutTournamentInput | FixtureCreateOrConnectWithoutTournamentInput[]
    createMany?: FixtureCreateManyTournamentInputEnvelope
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
  }

  export type FixtureUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput> | FixtureCreateWithoutTournamentInput[] | FixtureUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutTournamentInput | FixtureCreateOrConnectWithoutTournamentInput[]
    createMany?: FixtureCreateManyTournamentInputEnvelope
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
  }

  export type FixtureUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput> | FixtureCreateWithoutTournamentInput[] | FixtureUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutTournamentInput | FixtureCreateOrConnectWithoutTournamentInput[]
    upsert?: FixtureUpsertWithWhereUniqueWithoutTournamentInput | FixtureUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: FixtureCreateManyTournamentInputEnvelope
    set?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    disconnect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    delete?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    update?: FixtureUpdateWithWhereUniqueWithoutTournamentInput | FixtureUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: FixtureUpdateManyWithWhereWithoutTournamentInput | FixtureUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
  }

  export type FixtureUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput> | FixtureCreateWithoutTournamentInput[] | FixtureUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutTournamentInput | FixtureCreateOrConnectWithoutTournamentInput[]
    upsert?: FixtureUpsertWithWhereUniqueWithoutTournamentInput | FixtureUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: FixtureCreateManyTournamentInputEnvelope
    set?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    disconnect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    delete?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    update?: FixtureUpdateWithWhereUniqueWithoutTournamentInput | FixtureUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: FixtureUpdateManyWithWhereWithoutTournamentInput | FixtureUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BetCreateWithoutAgentInput = {
    betNo: string
    market: string
    selection: string
    side: string
    odds: number
    stake: Decimal | DecimalJsLike | number | string
    potentialProfit: Decimal | DecimalJsLike | number | string
    potentialLoss: Decimal | DecimalJsLike | number | string
    status?: string
    result?: string | null
    settledAt?: Date | string | null
    realizedPnl?: Decimal | DecimalJsLike | number | string | null
    confidence?: number | null
    signalType?: string | null
    decisionLogId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fixture: FixtureCreateNestedOneWithoutBetsInput
  }

  export type BetUncheckedCreateWithoutAgentInput = {
    id?: number
    fixtureId: number
    betNo: string
    market: string
    selection: string
    side: string
    odds: number
    stake: Decimal | DecimalJsLike | number | string
    potentialProfit: Decimal | DecimalJsLike | number | string
    potentialLoss: Decimal | DecimalJsLike | number | string
    status?: string
    result?: string | null
    settledAt?: Date | string | null
    realizedPnl?: Decimal | DecimalJsLike | number | string | null
    confidence?: number | null
    signalType?: string | null
    decisionLogId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BetCreateOrConnectWithoutAgentInput = {
    where: BetWhereUniqueInput
    create: XOR<BetCreateWithoutAgentInput, BetUncheckedCreateWithoutAgentInput>
  }

  export type BetCreateManyAgentInputEnvelope = {
    data: BetCreateManyAgentInput | BetCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type DecisionLogCreateWithoutAgentInput = {
    decisionTime?: Date | string
    reasoning: string
    operation: string
    fixtureId?: number | null
    market?: string | null
    selection?: string | null
    stakePortion: number
    confidence: number
    totalBankroll: Decimal | DecimalJsLike | number | string
    executed?: boolean
    betId?: number | null
    signalType?: string | null
    promptSnapshot?: string | null
    reasoningSnapshot?: string | null
    decisionSnapshot?: string | null
    createdAt?: Date | string
  }

  export type DecisionLogUncheckedCreateWithoutAgentInput = {
    id?: number
    decisionTime?: Date | string
    reasoning: string
    operation: string
    fixtureId?: number | null
    market?: string | null
    selection?: string | null
    stakePortion: number
    confidence: number
    totalBankroll: Decimal | DecimalJsLike | number | string
    executed?: boolean
    betId?: number | null
    signalType?: string | null
    promptSnapshot?: string | null
    reasoningSnapshot?: string | null
    decisionSnapshot?: string | null
    createdAt?: Date | string
  }

  export type DecisionLogCreateOrConnectWithoutAgentInput = {
    where: DecisionLogWhereUniqueInput
    create: XOR<DecisionLogCreateWithoutAgentInput, DecisionLogUncheckedCreateWithoutAgentInput>
  }

  export type DecisionLogCreateManyAgentInputEnvelope = {
    data: DecisionLogCreateManyAgentInput | DecisionLogCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type StrategyConfigCreateWithoutAgentInput = {
    triggerInterval?: number
    signalPoolIds?: string | null
    enabled?: boolean
    scheduledTrigger?: boolean
    lastTriggerAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StrategyConfigUncheckedCreateWithoutAgentInput = {
    id?: number
    triggerInterval?: number
    signalPoolIds?: string | null
    enabled?: boolean
    scheduledTrigger?: boolean
    lastTriggerAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StrategyConfigCreateOrConnectWithoutAgentInput = {
    where: StrategyConfigWhereUniqueInput
    create: XOR<StrategyConfigCreateWithoutAgentInput, StrategyConfigUncheckedCreateWithoutAgentInput>
  }

  export type PromptBindingCreateWithoutAgentInput = {
    createdAt?: Date | string
    promptTemplate: PromptTemplateCreateNestedOneWithoutBindingsInput
  }

  export type PromptBindingUncheckedCreateWithoutAgentInput = {
    id?: number
    promptTemplateId: number
    createdAt?: Date | string
  }

  export type PromptBindingCreateOrConnectWithoutAgentInput = {
    where: PromptBindingWhereUniqueInput
    create: XOR<PromptBindingCreateWithoutAgentInput, PromptBindingUncheckedCreateWithoutAgentInput>
  }

  export type BankrollSnapshotCreateWithoutAgentInput = {
    totalBankroll: Decimal | DecimalJsLike | number | string
    cash: Decimal | DecimalJsLike | number | string
    openBetsValue: Decimal | DecimalJsLike | number | string
    unrealizedPnl: Decimal | DecimalJsLike | number | string
    snapshotTime: Date | string
  }

  export type BankrollSnapshotUncheckedCreateWithoutAgentInput = {
    id?: number
    totalBankroll: Decimal | DecimalJsLike | number | string
    cash: Decimal | DecimalJsLike | number | string
    openBetsValue: Decimal | DecimalJsLike | number | string
    unrealizedPnl: Decimal | DecimalJsLike | number | string
    snapshotTime: Date | string
  }

  export type BankrollSnapshotCreateOrConnectWithoutAgentInput = {
    where: BankrollSnapshotWhereUniqueInput
    create: XOR<BankrollSnapshotCreateWithoutAgentInput, BankrollSnapshotUncheckedCreateWithoutAgentInput>
  }

  export type BankrollSnapshotCreateManyAgentInputEnvelope = {
    data: BankrollSnapshotCreateManyAgentInput | BankrollSnapshotCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type BetUpsertWithWhereUniqueWithoutAgentInput = {
    where: BetWhereUniqueInput
    update: XOR<BetUpdateWithoutAgentInput, BetUncheckedUpdateWithoutAgentInput>
    create: XOR<BetCreateWithoutAgentInput, BetUncheckedCreateWithoutAgentInput>
  }

  export type BetUpdateWithWhereUniqueWithoutAgentInput = {
    where: BetWhereUniqueInput
    data: XOR<BetUpdateWithoutAgentInput, BetUncheckedUpdateWithoutAgentInput>
  }

  export type BetUpdateManyWithWhereWithoutAgentInput = {
    where: BetScalarWhereInput
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyWithoutAgentInput>
  }

  export type BetScalarWhereInput = {
    AND?: BetScalarWhereInput | BetScalarWhereInput[]
    OR?: BetScalarWhereInput[]
    NOT?: BetScalarWhereInput | BetScalarWhereInput[]
    id?: IntFilter<"Bet"> | number
    agentId?: IntFilter<"Bet"> | number
    fixtureId?: IntFilter<"Bet"> | number
    betNo?: StringFilter<"Bet"> | string
    market?: StringFilter<"Bet"> | string
    selection?: StringFilter<"Bet"> | string
    side?: StringFilter<"Bet"> | string
    odds?: FloatFilter<"Bet"> | number
    stake?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    potentialProfit?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    potentialLoss?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Bet"> | string
    result?: StringNullableFilter<"Bet"> | string | null
    settledAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    realizedPnl?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    confidence?: FloatNullableFilter<"Bet"> | number | null
    signalType?: StringNullableFilter<"Bet"> | string | null
    decisionLogId?: IntNullableFilter<"Bet"> | number | null
    createdAt?: DateTimeFilter<"Bet"> | Date | string
    updatedAt?: DateTimeFilter<"Bet"> | Date | string
  }

  export type DecisionLogUpsertWithWhereUniqueWithoutAgentInput = {
    where: DecisionLogWhereUniqueInput
    update: XOR<DecisionLogUpdateWithoutAgentInput, DecisionLogUncheckedUpdateWithoutAgentInput>
    create: XOR<DecisionLogCreateWithoutAgentInput, DecisionLogUncheckedCreateWithoutAgentInput>
  }

  export type DecisionLogUpdateWithWhereUniqueWithoutAgentInput = {
    where: DecisionLogWhereUniqueInput
    data: XOR<DecisionLogUpdateWithoutAgentInput, DecisionLogUncheckedUpdateWithoutAgentInput>
  }

  export type DecisionLogUpdateManyWithWhereWithoutAgentInput = {
    where: DecisionLogScalarWhereInput
    data: XOR<DecisionLogUpdateManyMutationInput, DecisionLogUncheckedUpdateManyWithoutAgentInput>
  }

  export type DecisionLogScalarWhereInput = {
    AND?: DecisionLogScalarWhereInput | DecisionLogScalarWhereInput[]
    OR?: DecisionLogScalarWhereInput[]
    NOT?: DecisionLogScalarWhereInput | DecisionLogScalarWhereInput[]
    id?: IntFilter<"DecisionLog"> | number
    agentId?: IntFilter<"DecisionLog"> | number
    decisionTime?: DateTimeFilter<"DecisionLog"> | Date | string
    reasoning?: StringFilter<"DecisionLog"> | string
    operation?: StringFilter<"DecisionLog"> | string
    fixtureId?: IntNullableFilter<"DecisionLog"> | number | null
    market?: StringNullableFilter<"DecisionLog"> | string | null
    selection?: StringNullableFilter<"DecisionLog"> | string | null
    stakePortion?: FloatFilter<"DecisionLog"> | number
    confidence?: FloatFilter<"DecisionLog"> | number
    totalBankroll?: DecimalFilter<"DecisionLog"> | Decimal | DecimalJsLike | number | string
    executed?: BoolFilter<"DecisionLog"> | boolean
    betId?: IntNullableFilter<"DecisionLog"> | number | null
    signalType?: StringNullableFilter<"DecisionLog"> | string | null
    promptSnapshot?: StringNullableFilter<"DecisionLog"> | string | null
    reasoningSnapshot?: StringNullableFilter<"DecisionLog"> | string | null
    decisionSnapshot?: StringNullableFilter<"DecisionLog"> | string | null
    createdAt?: DateTimeFilter<"DecisionLog"> | Date | string
  }

  export type StrategyConfigUpsertWithoutAgentInput = {
    update: XOR<StrategyConfigUpdateWithoutAgentInput, StrategyConfigUncheckedUpdateWithoutAgentInput>
    create: XOR<StrategyConfigCreateWithoutAgentInput, StrategyConfigUncheckedCreateWithoutAgentInput>
    where?: StrategyConfigWhereInput
  }

  export type StrategyConfigUpdateToOneWithWhereWithoutAgentInput = {
    where?: StrategyConfigWhereInput
    data: XOR<StrategyConfigUpdateWithoutAgentInput, StrategyConfigUncheckedUpdateWithoutAgentInput>
  }

  export type StrategyConfigUpdateWithoutAgentInput = {
    triggerInterval?: IntFieldUpdateOperationsInput | number
    signalPoolIds?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    scheduledTrigger?: BoolFieldUpdateOperationsInput | boolean
    lastTriggerAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrategyConfigUncheckedUpdateWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    triggerInterval?: IntFieldUpdateOperationsInput | number
    signalPoolIds?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    scheduledTrigger?: BoolFieldUpdateOperationsInput | boolean
    lastTriggerAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptBindingUpsertWithoutAgentInput = {
    update: XOR<PromptBindingUpdateWithoutAgentInput, PromptBindingUncheckedUpdateWithoutAgentInput>
    create: XOR<PromptBindingCreateWithoutAgentInput, PromptBindingUncheckedCreateWithoutAgentInput>
    where?: PromptBindingWhereInput
  }

  export type PromptBindingUpdateToOneWithWhereWithoutAgentInput = {
    where?: PromptBindingWhereInput
    data: XOR<PromptBindingUpdateWithoutAgentInput, PromptBindingUncheckedUpdateWithoutAgentInput>
  }

  export type PromptBindingUpdateWithoutAgentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promptTemplate?: PromptTemplateUpdateOneRequiredWithoutBindingsNestedInput
  }

  export type PromptBindingUncheckedUpdateWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    promptTemplateId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankrollSnapshotUpsertWithWhereUniqueWithoutAgentInput = {
    where: BankrollSnapshotWhereUniqueInput
    update: XOR<BankrollSnapshotUpdateWithoutAgentInput, BankrollSnapshotUncheckedUpdateWithoutAgentInput>
    create: XOR<BankrollSnapshotCreateWithoutAgentInput, BankrollSnapshotUncheckedCreateWithoutAgentInput>
  }

  export type BankrollSnapshotUpdateWithWhereUniqueWithoutAgentInput = {
    where: BankrollSnapshotWhereUniqueInput
    data: XOR<BankrollSnapshotUpdateWithoutAgentInput, BankrollSnapshotUncheckedUpdateWithoutAgentInput>
  }

  export type BankrollSnapshotUpdateManyWithWhereWithoutAgentInput = {
    where: BankrollSnapshotScalarWhereInput
    data: XOR<BankrollSnapshotUpdateManyMutationInput, BankrollSnapshotUncheckedUpdateManyWithoutAgentInput>
  }

  export type BankrollSnapshotScalarWhereInput = {
    AND?: BankrollSnapshotScalarWhereInput | BankrollSnapshotScalarWhereInput[]
    OR?: BankrollSnapshotScalarWhereInput[]
    NOT?: BankrollSnapshotScalarWhereInput | BankrollSnapshotScalarWhereInput[]
    id?: IntFilter<"BankrollSnapshot"> | number
    agentId?: IntFilter<"BankrollSnapshot"> | number
    totalBankroll?: DecimalFilter<"BankrollSnapshot"> | Decimal | DecimalJsLike | number | string
    cash?: DecimalFilter<"BankrollSnapshot"> | Decimal | DecimalJsLike | number | string
    openBetsValue?: DecimalFilter<"BankrollSnapshot"> | Decimal | DecimalJsLike | number | string
    unrealizedPnl?: DecimalFilter<"BankrollSnapshot"> | Decimal | DecimalJsLike | number | string
    snapshotTime?: DateTimeFilter<"BankrollSnapshot"> | Date | string
  }

  export type AgentCreateWithoutBetsInput = {
    name: string
    slug: string
    model?: string
    baseUrl?: string
    apiKey?: string | null
    strategy: string
    avatarPresetId?: number | null
    initialCapital?: Decimal | DecimalJsLike | number | string
    currentCash?: Decimal | DecimalJsLike | number | string
    frozenCash?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    autoTradingEnabled?: boolean
    showOnDashboard?: boolean
    maxStakePercent?: number
    maxOpenBets?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    decisionLogs?: DecisionLogCreateNestedManyWithoutAgentInput
    strategyConfig?: StrategyConfigCreateNestedOneWithoutAgentInput
    promptBinding?: PromptBindingCreateNestedOneWithoutAgentInput
    snapshots?: BankrollSnapshotCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutBetsInput = {
    id?: number
    name: string
    slug: string
    model?: string
    baseUrl?: string
    apiKey?: string | null
    strategy: string
    avatarPresetId?: number | null
    initialCapital?: Decimal | DecimalJsLike | number | string
    currentCash?: Decimal | DecimalJsLike | number | string
    frozenCash?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    autoTradingEnabled?: boolean
    showOnDashboard?: boolean
    maxStakePercent?: number
    maxOpenBets?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    decisionLogs?: DecisionLogUncheckedCreateNestedManyWithoutAgentInput
    strategyConfig?: StrategyConfigUncheckedCreateNestedOneWithoutAgentInput
    promptBinding?: PromptBindingUncheckedCreateNestedOneWithoutAgentInput
    snapshots?: BankrollSnapshotUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutBetsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutBetsInput, AgentUncheckedCreateWithoutBetsInput>
  }

  export type FixtureCreateWithoutBetsInput = {
    txlineFixtureId: string
    teamA: string
    teamB: string
    teamACode: string
    teamBCode: string
    stage: string
    venue?: string | null
    kickoff: Date | string
    status?: string
    scoreA?: number
    scoreB?: number
    currentMinute?: number | null
    currentPeriod?: number
    teamAFifaRank?: number | null
    teamBFifaRank?: number | null
    teamAForm?: string | null
    teamBForm?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutFixturesInput
    oddsHistory?: OddsSnapshotCreateNestedManyWithoutFixtureInput
    events?: MatchEventCreateNestedManyWithoutFixtureInput
    signals?: SignalCreateNestedManyWithoutFixtureInput
  }

  export type FixtureUncheckedCreateWithoutBetsInput = {
    id?: number
    txlineFixtureId: string
    tournamentId: number
    teamA: string
    teamB: string
    teamACode: string
    teamBCode: string
    stage: string
    venue?: string | null
    kickoff: Date | string
    status?: string
    scoreA?: number
    scoreB?: number
    currentMinute?: number | null
    currentPeriod?: number
    teamAFifaRank?: number | null
    teamBFifaRank?: number | null
    teamAForm?: string | null
    teamBForm?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    oddsHistory?: OddsSnapshotUncheckedCreateNestedManyWithoutFixtureInput
    events?: MatchEventUncheckedCreateNestedManyWithoutFixtureInput
    signals?: SignalUncheckedCreateNestedManyWithoutFixtureInput
  }

  export type FixtureCreateOrConnectWithoutBetsInput = {
    where: FixtureWhereUniqueInput
    create: XOR<FixtureCreateWithoutBetsInput, FixtureUncheckedCreateWithoutBetsInput>
  }

  export type AgentUpsertWithoutBetsInput = {
    update: XOR<AgentUpdateWithoutBetsInput, AgentUncheckedUpdateWithoutBetsInput>
    create: XOR<AgentCreateWithoutBetsInput, AgentUncheckedCreateWithoutBetsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutBetsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutBetsInput, AgentUncheckedUpdateWithoutBetsInput>
  }

  export type AgentUpdateWithoutBetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    strategy?: StringFieldUpdateOperationsInput | string
    avatarPresetId?: NullableIntFieldUpdateOperationsInput | number | null
    initialCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoTradingEnabled?: BoolFieldUpdateOperationsInput | boolean
    showOnDashboard?: BoolFieldUpdateOperationsInput | boolean
    maxStakePercent?: FloatFieldUpdateOperationsInput | number
    maxOpenBets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decisionLogs?: DecisionLogUpdateManyWithoutAgentNestedInput
    strategyConfig?: StrategyConfigUpdateOneWithoutAgentNestedInput
    promptBinding?: PromptBindingUpdateOneWithoutAgentNestedInput
    snapshots?: BankrollSnapshotUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutBetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    strategy?: StringFieldUpdateOperationsInput | string
    avatarPresetId?: NullableIntFieldUpdateOperationsInput | number | null
    initialCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoTradingEnabled?: BoolFieldUpdateOperationsInput | boolean
    showOnDashboard?: BoolFieldUpdateOperationsInput | boolean
    maxStakePercent?: FloatFieldUpdateOperationsInput | number
    maxOpenBets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decisionLogs?: DecisionLogUncheckedUpdateManyWithoutAgentNestedInput
    strategyConfig?: StrategyConfigUncheckedUpdateOneWithoutAgentNestedInput
    promptBinding?: PromptBindingUncheckedUpdateOneWithoutAgentNestedInput
    snapshots?: BankrollSnapshotUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type FixtureUpsertWithoutBetsInput = {
    update: XOR<FixtureUpdateWithoutBetsInput, FixtureUncheckedUpdateWithoutBetsInput>
    create: XOR<FixtureCreateWithoutBetsInput, FixtureUncheckedCreateWithoutBetsInput>
    where?: FixtureWhereInput
  }

  export type FixtureUpdateToOneWithWhereWithoutBetsInput = {
    where?: FixtureWhereInput
    data: XOR<FixtureUpdateWithoutBetsInput, FixtureUncheckedUpdateWithoutBetsInput>
  }

  export type FixtureUpdateWithoutBetsInput = {
    txlineFixtureId?: StringFieldUpdateOperationsInput | string
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    teamACode?: StringFieldUpdateOperationsInput | string
    teamBCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    kickoff?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    currentMinute?: NullableIntFieldUpdateOperationsInput | number | null
    currentPeriod?: IntFieldUpdateOperationsInput | number
    teamAFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamBFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamAForm?: NullableStringFieldUpdateOperationsInput | string | null
    teamBForm?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutFixturesNestedInput
    oddsHistory?: OddsSnapshotUpdateManyWithoutFixtureNestedInput
    events?: MatchEventUpdateManyWithoutFixtureNestedInput
    signals?: SignalUpdateManyWithoutFixtureNestedInput
  }

  export type FixtureUncheckedUpdateWithoutBetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    txlineFixtureId?: StringFieldUpdateOperationsInput | string
    tournamentId?: IntFieldUpdateOperationsInput | number
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    teamACode?: StringFieldUpdateOperationsInput | string
    teamBCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    kickoff?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    currentMinute?: NullableIntFieldUpdateOperationsInput | number | null
    currentPeriod?: IntFieldUpdateOperationsInput | number
    teamAFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamBFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamAForm?: NullableStringFieldUpdateOperationsInput | string | null
    teamBForm?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oddsHistory?: OddsSnapshotUncheckedUpdateManyWithoutFixtureNestedInput
    events?: MatchEventUncheckedUpdateManyWithoutFixtureNestedInput
    signals?: SignalUncheckedUpdateManyWithoutFixtureNestedInput
  }

  export type TournamentCreateWithoutFixturesInput = {
    name: string
    year: number
    hostCountry: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type TournamentUncheckedCreateWithoutFixturesInput = {
    id?: number
    name: string
    year: number
    hostCountry: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type TournamentCreateOrConnectWithoutFixturesInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutFixturesInput, TournamentUncheckedCreateWithoutFixturesInput>
  }

  export type BetCreateWithoutFixtureInput = {
    betNo: string
    market: string
    selection: string
    side: string
    odds: number
    stake: Decimal | DecimalJsLike | number | string
    potentialProfit: Decimal | DecimalJsLike | number | string
    potentialLoss: Decimal | DecimalJsLike | number | string
    status?: string
    result?: string | null
    settledAt?: Date | string | null
    realizedPnl?: Decimal | DecimalJsLike | number | string | null
    confidence?: number | null
    signalType?: string | null
    decisionLogId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    agent: AgentCreateNestedOneWithoutBetsInput
  }

  export type BetUncheckedCreateWithoutFixtureInput = {
    id?: number
    agentId: number
    betNo: string
    market: string
    selection: string
    side: string
    odds: number
    stake: Decimal | DecimalJsLike | number | string
    potentialProfit: Decimal | DecimalJsLike | number | string
    potentialLoss: Decimal | DecimalJsLike | number | string
    status?: string
    result?: string | null
    settledAt?: Date | string | null
    realizedPnl?: Decimal | DecimalJsLike | number | string | null
    confidence?: number | null
    signalType?: string | null
    decisionLogId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BetCreateOrConnectWithoutFixtureInput = {
    where: BetWhereUniqueInput
    create: XOR<BetCreateWithoutFixtureInput, BetUncheckedCreateWithoutFixtureInput>
  }

  export type BetCreateManyFixtureInputEnvelope = {
    data: BetCreateManyFixtureInput | BetCreateManyFixtureInput[]
    skipDuplicates?: boolean
  }

  export type OddsSnapshotCreateWithoutFixtureInput = {
    source?: string
    market: string
    teamAOdds: number
    drawOdds?: number | null
    teamBOdds: number
    allOutcomes?: NullableJsonNullValueInput | InputJsonValue
    timestamp: Date | string
  }

  export type OddsSnapshotUncheckedCreateWithoutFixtureInput = {
    id?: number
    source?: string
    market: string
    teamAOdds: number
    drawOdds?: number | null
    teamBOdds: number
    allOutcomes?: NullableJsonNullValueInput | InputJsonValue
    timestamp: Date | string
  }

  export type OddsSnapshotCreateOrConnectWithoutFixtureInput = {
    where: OddsSnapshotWhereUniqueInput
    create: XOR<OddsSnapshotCreateWithoutFixtureInput, OddsSnapshotUncheckedCreateWithoutFixtureInput>
  }

  export type OddsSnapshotCreateManyFixtureInputEnvelope = {
    data: OddsSnapshotCreateManyFixtureInput | OddsSnapshotCreateManyFixtureInput[]
    skipDuplicates?: boolean
  }

  export type MatchEventCreateWithoutFixtureInput = {
    eventType: string
    minute: number
    period: number
    team: string
    player?: string | null
    description?: string | null
    statKey?: string | null
    occurredAt?: Date | string
  }

  export type MatchEventUncheckedCreateWithoutFixtureInput = {
    id?: number
    eventType: string
    minute: number
    period: number
    team: string
    player?: string | null
    description?: string | null
    statKey?: string | null
    occurredAt?: Date | string
  }

  export type MatchEventCreateOrConnectWithoutFixtureInput = {
    where: MatchEventWhereUniqueInput
    create: XOR<MatchEventCreateWithoutFixtureInput, MatchEventUncheckedCreateWithoutFixtureInput>
  }

  export type MatchEventCreateManyFixtureInputEnvelope = {
    data: MatchEventCreateManyFixtureInput | MatchEventCreateManyFixtureInput[]
    skipDuplicates?: boolean
  }

  export type SignalCreateWithoutFixtureInput = {
    type: string
    severity: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    triggeredAt?: Date | string
  }

  export type SignalUncheckedCreateWithoutFixtureInput = {
    id?: number
    type: string
    severity: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    triggeredAt?: Date | string
  }

  export type SignalCreateOrConnectWithoutFixtureInput = {
    where: SignalWhereUniqueInput
    create: XOR<SignalCreateWithoutFixtureInput, SignalUncheckedCreateWithoutFixtureInput>
  }

  export type SignalCreateManyFixtureInputEnvelope = {
    data: SignalCreateManyFixtureInput | SignalCreateManyFixtureInput[]
    skipDuplicates?: boolean
  }

  export type TournamentUpsertWithoutFixturesInput = {
    update: XOR<TournamentUpdateWithoutFixturesInput, TournamentUncheckedUpdateWithoutFixturesInput>
    create: XOR<TournamentCreateWithoutFixturesInput, TournamentUncheckedCreateWithoutFixturesInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutFixturesInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutFixturesInput, TournamentUncheckedUpdateWithoutFixturesInput>
  }

  export type TournamentUpdateWithoutFixturesInput = {
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    hostCountry?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentUncheckedUpdateWithoutFixturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    hostCountry?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetUpsertWithWhereUniqueWithoutFixtureInput = {
    where: BetWhereUniqueInput
    update: XOR<BetUpdateWithoutFixtureInput, BetUncheckedUpdateWithoutFixtureInput>
    create: XOR<BetCreateWithoutFixtureInput, BetUncheckedCreateWithoutFixtureInput>
  }

  export type BetUpdateWithWhereUniqueWithoutFixtureInput = {
    where: BetWhereUniqueInput
    data: XOR<BetUpdateWithoutFixtureInput, BetUncheckedUpdateWithoutFixtureInput>
  }

  export type BetUpdateManyWithWhereWithoutFixtureInput = {
    where: BetScalarWhereInput
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyWithoutFixtureInput>
  }

  export type OddsSnapshotUpsertWithWhereUniqueWithoutFixtureInput = {
    where: OddsSnapshotWhereUniqueInput
    update: XOR<OddsSnapshotUpdateWithoutFixtureInput, OddsSnapshotUncheckedUpdateWithoutFixtureInput>
    create: XOR<OddsSnapshotCreateWithoutFixtureInput, OddsSnapshotUncheckedCreateWithoutFixtureInput>
  }

  export type OddsSnapshotUpdateWithWhereUniqueWithoutFixtureInput = {
    where: OddsSnapshotWhereUniqueInput
    data: XOR<OddsSnapshotUpdateWithoutFixtureInput, OddsSnapshotUncheckedUpdateWithoutFixtureInput>
  }

  export type OddsSnapshotUpdateManyWithWhereWithoutFixtureInput = {
    where: OddsSnapshotScalarWhereInput
    data: XOR<OddsSnapshotUpdateManyMutationInput, OddsSnapshotUncheckedUpdateManyWithoutFixtureInput>
  }

  export type OddsSnapshotScalarWhereInput = {
    AND?: OddsSnapshotScalarWhereInput | OddsSnapshotScalarWhereInput[]
    OR?: OddsSnapshotScalarWhereInput[]
    NOT?: OddsSnapshotScalarWhereInput | OddsSnapshotScalarWhereInput[]
    id?: IntFilter<"OddsSnapshot"> | number
    fixtureId?: IntFilter<"OddsSnapshot"> | number
    source?: StringFilter<"OddsSnapshot"> | string
    market?: StringFilter<"OddsSnapshot"> | string
    teamAOdds?: FloatFilter<"OddsSnapshot"> | number
    drawOdds?: FloatNullableFilter<"OddsSnapshot"> | number | null
    teamBOdds?: FloatFilter<"OddsSnapshot"> | number
    allOutcomes?: JsonNullableFilter<"OddsSnapshot">
    timestamp?: DateTimeFilter<"OddsSnapshot"> | Date | string
  }

  export type MatchEventUpsertWithWhereUniqueWithoutFixtureInput = {
    where: MatchEventWhereUniqueInput
    update: XOR<MatchEventUpdateWithoutFixtureInput, MatchEventUncheckedUpdateWithoutFixtureInput>
    create: XOR<MatchEventCreateWithoutFixtureInput, MatchEventUncheckedCreateWithoutFixtureInput>
  }

  export type MatchEventUpdateWithWhereUniqueWithoutFixtureInput = {
    where: MatchEventWhereUniqueInput
    data: XOR<MatchEventUpdateWithoutFixtureInput, MatchEventUncheckedUpdateWithoutFixtureInput>
  }

  export type MatchEventUpdateManyWithWhereWithoutFixtureInput = {
    where: MatchEventScalarWhereInput
    data: XOR<MatchEventUpdateManyMutationInput, MatchEventUncheckedUpdateManyWithoutFixtureInput>
  }

  export type MatchEventScalarWhereInput = {
    AND?: MatchEventScalarWhereInput | MatchEventScalarWhereInput[]
    OR?: MatchEventScalarWhereInput[]
    NOT?: MatchEventScalarWhereInput | MatchEventScalarWhereInput[]
    id?: IntFilter<"MatchEvent"> | number
    fixtureId?: IntFilter<"MatchEvent"> | number
    eventType?: StringFilter<"MatchEvent"> | string
    minute?: IntFilter<"MatchEvent"> | number
    period?: IntFilter<"MatchEvent"> | number
    team?: StringFilter<"MatchEvent"> | string
    player?: StringNullableFilter<"MatchEvent"> | string | null
    description?: StringNullableFilter<"MatchEvent"> | string | null
    statKey?: StringNullableFilter<"MatchEvent"> | string | null
    occurredAt?: DateTimeFilter<"MatchEvent"> | Date | string
  }

  export type SignalUpsertWithWhereUniqueWithoutFixtureInput = {
    where: SignalWhereUniqueInput
    update: XOR<SignalUpdateWithoutFixtureInput, SignalUncheckedUpdateWithoutFixtureInput>
    create: XOR<SignalCreateWithoutFixtureInput, SignalUncheckedCreateWithoutFixtureInput>
  }

  export type SignalUpdateWithWhereUniqueWithoutFixtureInput = {
    where: SignalWhereUniqueInput
    data: XOR<SignalUpdateWithoutFixtureInput, SignalUncheckedUpdateWithoutFixtureInput>
  }

  export type SignalUpdateManyWithWhereWithoutFixtureInput = {
    where: SignalScalarWhereInput
    data: XOR<SignalUpdateManyMutationInput, SignalUncheckedUpdateManyWithoutFixtureInput>
  }

  export type SignalScalarWhereInput = {
    AND?: SignalScalarWhereInput | SignalScalarWhereInput[]
    OR?: SignalScalarWhereInput[]
    NOT?: SignalScalarWhereInput | SignalScalarWhereInput[]
    id?: IntFilter<"Signal"> | number
    fixtureId?: IntFilter<"Signal"> | number
    type?: StringFilter<"Signal"> | string
    severity?: StringFilter<"Signal"> | string
    description?: StringFilter<"Signal"> | string
    metadata?: JsonNullableFilter<"Signal">
    triggeredAt?: DateTimeFilter<"Signal"> | Date | string
  }

  export type FixtureCreateWithoutOddsHistoryInput = {
    txlineFixtureId: string
    teamA: string
    teamB: string
    teamACode: string
    teamBCode: string
    stage: string
    venue?: string | null
    kickoff: Date | string
    status?: string
    scoreA?: number
    scoreB?: number
    currentMinute?: number | null
    currentPeriod?: number
    teamAFifaRank?: number | null
    teamBFifaRank?: number | null
    teamAForm?: string | null
    teamBForm?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutFixturesInput
    bets?: BetCreateNestedManyWithoutFixtureInput
    events?: MatchEventCreateNestedManyWithoutFixtureInput
    signals?: SignalCreateNestedManyWithoutFixtureInput
  }

  export type FixtureUncheckedCreateWithoutOddsHistoryInput = {
    id?: number
    txlineFixtureId: string
    tournamentId: number
    teamA: string
    teamB: string
    teamACode: string
    teamBCode: string
    stage: string
    venue?: string | null
    kickoff: Date | string
    status?: string
    scoreA?: number
    scoreB?: number
    currentMinute?: number | null
    currentPeriod?: number
    teamAFifaRank?: number | null
    teamBFifaRank?: number | null
    teamAForm?: string | null
    teamBForm?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bets?: BetUncheckedCreateNestedManyWithoutFixtureInput
    events?: MatchEventUncheckedCreateNestedManyWithoutFixtureInput
    signals?: SignalUncheckedCreateNestedManyWithoutFixtureInput
  }

  export type FixtureCreateOrConnectWithoutOddsHistoryInput = {
    where: FixtureWhereUniqueInput
    create: XOR<FixtureCreateWithoutOddsHistoryInput, FixtureUncheckedCreateWithoutOddsHistoryInput>
  }

  export type FixtureUpsertWithoutOddsHistoryInput = {
    update: XOR<FixtureUpdateWithoutOddsHistoryInput, FixtureUncheckedUpdateWithoutOddsHistoryInput>
    create: XOR<FixtureCreateWithoutOddsHistoryInput, FixtureUncheckedCreateWithoutOddsHistoryInput>
    where?: FixtureWhereInput
  }

  export type FixtureUpdateToOneWithWhereWithoutOddsHistoryInput = {
    where?: FixtureWhereInput
    data: XOR<FixtureUpdateWithoutOddsHistoryInput, FixtureUncheckedUpdateWithoutOddsHistoryInput>
  }

  export type FixtureUpdateWithoutOddsHistoryInput = {
    txlineFixtureId?: StringFieldUpdateOperationsInput | string
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    teamACode?: StringFieldUpdateOperationsInput | string
    teamBCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    kickoff?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    currentMinute?: NullableIntFieldUpdateOperationsInput | number | null
    currentPeriod?: IntFieldUpdateOperationsInput | number
    teamAFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamBFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamAForm?: NullableStringFieldUpdateOperationsInput | string | null
    teamBForm?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutFixturesNestedInput
    bets?: BetUpdateManyWithoutFixtureNestedInput
    events?: MatchEventUpdateManyWithoutFixtureNestedInput
    signals?: SignalUpdateManyWithoutFixtureNestedInput
  }

  export type FixtureUncheckedUpdateWithoutOddsHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    txlineFixtureId?: StringFieldUpdateOperationsInput | string
    tournamentId?: IntFieldUpdateOperationsInput | number
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    teamACode?: StringFieldUpdateOperationsInput | string
    teamBCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    kickoff?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    currentMinute?: NullableIntFieldUpdateOperationsInput | number | null
    currentPeriod?: IntFieldUpdateOperationsInput | number
    teamAFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamBFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamAForm?: NullableStringFieldUpdateOperationsInput | string | null
    teamBForm?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUncheckedUpdateManyWithoutFixtureNestedInput
    events?: MatchEventUncheckedUpdateManyWithoutFixtureNestedInput
    signals?: SignalUncheckedUpdateManyWithoutFixtureNestedInput
  }

  export type FixtureCreateWithoutEventsInput = {
    txlineFixtureId: string
    teamA: string
    teamB: string
    teamACode: string
    teamBCode: string
    stage: string
    venue?: string | null
    kickoff: Date | string
    status?: string
    scoreA?: number
    scoreB?: number
    currentMinute?: number | null
    currentPeriod?: number
    teamAFifaRank?: number | null
    teamBFifaRank?: number | null
    teamAForm?: string | null
    teamBForm?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutFixturesInput
    bets?: BetCreateNestedManyWithoutFixtureInput
    oddsHistory?: OddsSnapshotCreateNestedManyWithoutFixtureInput
    signals?: SignalCreateNestedManyWithoutFixtureInput
  }

  export type FixtureUncheckedCreateWithoutEventsInput = {
    id?: number
    txlineFixtureId: string
    tournamentId: number
    teamA: string
    teamB: string
    teamACode: string
    teamBCode: string
    stage: string
    venue?: string | null
    kickoff: Date | string
    status?: string
    scoreA?: number
    scoreB?: number
    currentMinute?: number | null
    currentPeriod?: number
    teamAFifaRank?: number | null
    teamBFifaRank?: number | null
    teamAForm?: string | null
    teamBForm?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bets?: BetUncheckedCreateNestedManyWithoutFixtureInput
    oddsHistory?: OddsSnapshotUncheckedCreateNestedManyWithoutFixtureInput
    signals?: SignalUncheckedCreateNestedManyWithoutFixtureInput
  }

  export type FixtureCreateOrConnectWithoutEventsInput = {
    where: FixtureWhereUniqueInput
    create: XOR<FixtureCreateWithoutEventsInput, FixtureUncheckedCreateWithoutEventsInput>
  }

  export type FixtureUpsertWithoutEventsInput = {
    update: XOR<FixtureUpdateWithoutEventsInput, FixtureUncheckedUpdateWithoutEventsInput>
    create: XOR<FixtureCreateWithoutEventsInput, FixtureUncheckedCreateWithoutEventsInput>
    where?: FixtureWhereInput
  }

  export type FixtureUpdateToOneWithWhereWithoutEventsInput = {
    where?: FixtureWhereInput
    data: XOR<FixtureUpdateWithoutEventsInput, FixtureUncheckedUpdateWithoutEventsInput>
  }

  export type FixtureUpdateWithoutEventsInput = {
    txlineFixtureId?: StringFieldUpdateOperationsInput | string
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    teamACode?: StringFieldUpdateOperationsInput | string
    teamBCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    kickoff?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    currentMinute?: NullableIntFieldUpdateOperationsInput | number | null
    currentPeriod?: IntFieldUpdateOperationsInput | number
    teamAFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamBFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamAForm?: NullableStringFieldUpdateOperationsInput | string | null
    teamBForm?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutFixturesNestedInput
    bets?: BetUpdateManyWithoutFixtureNestedInput
    oddsHistory?: OddsSnapshotUpdateManyWithoutFixtureNestedInput
    signals?: SignalUpdateManyWithoutFixtureNestedInput
  }

  export type FixtureUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    txlineFixtureId?: StringFieldUpdateOperationsInput | string
    tournamentId?: IntFieldUpdateOperationsInput | number
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    teamACode?: StringFieldUpdateOperationsInput | string
    teamBCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    kickoff?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    currentMinute?: NullableIntFieldUpdateOperationsInput | number | null
    currentPeriod?: IntFieldUpdateOperationsInput | number
    teamAFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamBFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamAForm?: NullableStringFieldUpdateOperationsInput | string | null
    teamBForm?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUncheckedUpdateManyWithoutFixtureNestedInput
    oddsHistory?: OddsSnapshotUncheckedUpdateManyWithoutFixtureNestedInput
    signals?: SignalUncheckedUpdateManyWithoutFixtureNestedInput
  }

  export type FixtureCreateWithoutSignalsInput = {
    txlineFixtureId: string
    teamA: string
    teamB: string
    teamACode: string
    teamBCode: string
    stage: string
    venue?: string | null
    kickoff: Date | string
    status?: string
    scoreA?: number
    scoreB?: number
    currentMinute?: number | null
    currentPeriod?: number
    teamAFifaRank?: number | null
    teamBFifaRank?: number | null
    teamAForm?: string | null
    teamBForm?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutFixturesInput
    bets?: BetCreateNestedManyWithoutFixtureInput
    oddsHistory?: OddsSnapshotCreateNestedManyWithoutFixtureInput
    events?: MatchEventCreateNestedManyWithoutFixtureInput
  }

  export type FixtureUncheckedCreateWithoutSignalsInput = {
    id?: number
    txlineFixtureId: string
    tournamentId: number
    teamA: string
    teamB: string
    teamACode: string
    teamBCode: string
    stage: string
    venue?: string | null
    kickoff: Date | string
    status?: string
    scoreA?: number
    scoreB?: number
    currentMinute?: number | null
    currentPeriod?: number
    teamAFifaRank?: number | null
    teamBFifaRank?: number | null
    teamAForm?: string | null
    teamBForm?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bets?: BetUncheckedCreateNestedManyWithoutFixtureInput
    oddsHistory?: OddsSnapshotUncheckedCreateNestedManyWithoutFixtureInput
    events?: MatchEventUncheckedCreateNestedManyWithoutFixtureInput
  }

  export type FixtureCreateOrConnectWithoutSignalsInput = {
    where: FixtureWhereUniqueInput
    create: XOR<FixtureCreateWithoutSignalsInput, FixtureUncheckedCreateWithoutSignalsInput>
  }

  export type FixtureUpsertWithoutSignalsInput = {
    update: XOR<FixtureUpdateWithoutSignalsInput, FixtureUncheckedUpdateWithoutSignalsInput>
    create: XOR<FixtureCreateWithoutSignalsInput, FixtureUncheckedCreateWithoutSignalsInput>
    where?: FixtureWhereInput
  }

  export type FixtureUpdateToOneWithWhereWithoutSignalsInput = {
    where?: FixtureWhereInput
    data: XOR<FixtureUpdateWithoutSignalsInput, FixtureUncheckedUpdateWithoutSignalsInput>
  }

  export type FixtureUpdateWithoutSignalsInput = {
    txlineFixtureId?: StringFieldUpdateOperationsInput | string
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    teamACode?: StringFieldUpdateOperationsInput | string
    teamBCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    kickoff?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    currentMinute?: NullableIntFieldUpdateOperationsInput | number | null
    currentPeriod?: IntFieldUpdateOperationsInput | number
    teamAFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamBFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamAForm?: NullableStringFieldUpdateOperationsInput | string | null
    teamBForm?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutFixturesNestedInput
    bets?: BetUpdateManyWithoutFixtureNestedInput
    oddsHistory?: OddsSnapshotUpdateManyWithoutFixtureNestedInput
    events?: MatchEventUpdateManyWithoutFixtureNestedInput
  }

  export type FixtureUncheckedUpdateWithoutSignalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    txlineFixtureId?: StringFieldUpdateOperationsInput | string
    tournamentId?: IntFieldUpdateOperationsInput | number
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    teamACode?: StringFieldUpdateOperationsInput | string
    teamBCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    kickoff?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    currentMinute?: NullableIntFieldUpdateOperationsInput | number | null
    currentPeriod?: IntFieldUpdateOperationsInput | number
    teamAFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamBFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamAForm?: NullableStringFieldUpdateOperationsInput | string | null
    teamBForm?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUncheckedUpdateManyWithoutFixtureNestedInput
    oddsHistory?: OddsSnapshotUncheckedUpdateManyWithoutFixtureNestedInput
    events?: MatchEventUncheckedUpdateManyWithoutFixtureNestedInput
  }

  export type AgentCreateWithoutDecisionLogsInput = {
    name: string
    slug: string
    model?: string
    baseUrl?: string
    apiKey?: string | null
    strategy: string
    avatarPresetId?: number | null
    initialCapital?: Decimal | DecimalJsLike | number | string
    currentCash?: Decimal | DecimalJsLike | number | string
    frozenCash?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    autoTradingEnabled?: boolean
    showOnDashboard?: boolean
    maxStakePercent?: number
    maxOpenBets?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bets?: BetCreateNestedManyWithoutAgentInput
    strategyConfig?: StrategyConfigCreateNestedOneWithoutAgentInput
    promptBinding?: PromptBindingCreateNestedOneWithoutAgentInput
    snapshots?: BankrollSnapshotCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutDecisionLogsInput = {
    id?: number
    name: string
    slug: string
    model?: string
    baseUrl?: string
    apiKey?: string | null
    strategy: string
    avatarPresetId?: number | null
    initialCapital?: Decimal | DecimalJsLike | number | string
    currentCash?: Decimal | DecimalJsLike | number | string
    frozenCash?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    autoTradingEnabled?: boolean
    showOnDashboard?: boolean
    maxStakePercent?: number
    maxOpenBets?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bets?: BetUncheckedCreateNestedManyWithoutAgentInput
    strategyConfig?: StrategyConfigUncheckedCreateNestedOneWithoutAgentInput
    promptBinding?: PromptBindingUncheckedCreateNestedOneWithoutAgentInput
    snapshots?: BankrollSnapshotUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutDecisionLogsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutDecisionLogsInput, AgentUncheckedCreateWithoutDecisionLogsInput>
  }

  export type AgentUpsertWithoutDecisionLogsInput = {
    update: XOR<AgentUpdateWithoutDecisionLogsInput, AgentUncheckedUpdateWithoutDecisionLogsInput>
    create: XOR<AgentCreateWithoutDecisionLogsInput, AgentUncheckedCreateWithoutDecisionLogsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutDecisionLogsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutDecisionLogsInput, AgentUncheckedUpdateWithoutDecisionLogsInput>
  }

  export type AgentUpdateWithoutDecisionLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    strategy?: StringFieldUpdateOperationsInput | string
    avatarPresetId?: NullableIntFieldUpdateOperationsInput | number | null
    initialCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoTradingEnabled?: BoolFieldUpdateOperationsInput | boolean
    showOnDashboard?: BoolFieldUpdateOperationsInput | boolean
    maxStakePercent?: FloatFieldUpdateOperationsInput | number
    maxOpenBets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUpdateManyWithoutAgentNestedInput
    strategyConfig?: StrategyConfigUpdateOneWithoutAgentNestedInput
    promptBinding?: PromptBindingUpdateOneWithoutAgentNestedInput
    snapshots?: BankrollSnapshotUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutDecisionLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    strategy?: StringFieldUpdateOperationsInput | string
    avatarPresetId?: NullableIntFieldUpdateOperationsInput | number | null
    initialCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoTradingEnabled?: BoolFieldUpdateOperationsInput | boolean
    showOnDashboard?: BoolFieldUpdateOperationsInput | boolean
    maxStakePercent?: FloatFieldUpdateOperationsInput | number
    maxOpenBets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUncheckedUpdateManyWithoutAgentNestedInput
    strategyConfig?: StrategyConfigUncheckedUpdateOneWithoutAgentNestedInput
    promptBinding?: PromptBindingUncheckedUpdateOneWithoutAgentNestedInput
    snapshots?: BankrollSnapshotUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentCreateWithoutSnapshotsInput = {
    name: string
    slug: string
    model?: string
    baseUrl?: string
    apiKey?: string | null
    strategy: string
    avatarPresetId?: number | null
    initialCapital?: Decimal | DecimalJsLike | number | string
    currentCash?: Decimal | DecimalJsLike | number | string
    frozenCash?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    autoTradingEnabled?: boolean
    showOnDashboard?: boolean
    maxStakePercent?: number
    maxOpenBets?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bets?: BetCreateNestedManyWithoutAgentInput
    decisionLogs?: DecisionLogCreateNestedManyWithoutAgentInput
    strategyConfig?: StrategyConfigCreateNestedOneWithoutAgentInput
    promptBinding?: PromptBindingCreateNestedOneWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutSnapshotsInput = {
    id?: number
    name: string
    slug: string
    model?: string
    baseUrl?: string
    apiKey?: string | null
    strategy: string
    avatarPresetId?: number | null
    initialCapital?: Decimal | DecimalJsLike | number | string
    currentCash?: Decimal | DecimalJsLike | number | string
    frozenCash?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    autoTradingEnabled?: boolean
    showOnDashboard?: boolean
    maxStakePercent?: number
    maxOpenBets?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bets?: BetUncheckedCreateNestedManyWithoutAgentInput
    decisionLogs?: DecisionLogUncheckedCreateNestedManyWithoutAgentInput
    strategyConfig?: StrategyConfigUncheckedCreateNestedOneWithoutAgentInput
    promptBinding?: PromptBindingUncheckedCreateNestedOneWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutSnapshotsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutSnapshotsInput, AgentUncheckedCreateWithoutSnapshotsInput>
  }

  export type AgentUpsertWithoutSnapshotsInput = {
    update: XOR<AgentUpdateWithoutSnapshotsInput, AgentUncheckedUpdateWithoutSnapshotsInput>
    create: XOR<AgentCreateWithoutSnapshotsInput, AgentUncheckedCreateWithoutSnapshotsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutSnapshotsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutSnapshotsInput, AgentUncheckedUpdateWithoutSnapshotsInput>
  }

  export type AgentUpdateWithoutSnapshotsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    strategy?: StringFieldUpdateOperationsInput | string
    avatarPresetId?: NullableIntFieldUpdateOperationsInput | number | null
    initialCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoTradingEnabled?: BoolFieldUpdateOperationsInput | boolean
    showOnDashboard?: BoolFieldUpdateOperationsInput | boolean
    maxStakePercent?: FloatFieldUpdateOperationsInput | number
    maxOpenBets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUpdateManyWithoutAgentNestedInput
    decisionLogs?: DecisionLogUpdateManyWithoutAgentNestedInput
    strategyConfig?: StrategyConfigUpdateOneWithoutAgentNestedInput
    promptBinding?: PromptBindingUpdateOneWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutSnapshotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    strategy?: StringFieldUpdateOperationsInput | string
    avatarPresetId?: NullableIntFieldUpdateOperationsInput | number | null
    initialCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoTradingEnabled?: BoolFieldUpdateOperationsInput | boolean
    showOnDashboard?: BoolFieldUpdateOperationsInput | boolean
    maxStakePercent?: FloatFieldUpdateOperationsInput | number
    maxOpenBets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUncheckedUpdateManyWithoutAgentNestedInput
    decisionLogs?: DecisionLogUncheckedUpdateManyWithoutAgentNestedInput
    strategyConfig?: StrategyConfigUncheckedUpdateOneWithoutAgentNestedInput
    promptBinding?: PromptBindingUncheckedUpdateOneWithoutAgentNestedInput
  }

  export type AgentCreateWithoutStrategyConfigInput = {
    name: string
    slug: string
    model?: string
    baseUrl?: string
    apiKey?: string | null
    strategy: string
    avatarPresetId?: number | null
    initialCapital?: Decimal | DecimalJsLike | number | string
    currentCash?: Decimal | DecimalJsLike | number | string
    frozenCash?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    autoTradingEnabled?: boolean
    showOnDashboard?: boolean
    maxStakePercent?: number
    maxOpenBets?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bets?: BetCreateNestedManyWithoutAgentInput
    decisionLogs?: DecisionLogCreateNestedManyWithoutAgentInput
    promptBinding?: PromptBindingCreateNestedOneWithoutAgentInput
    snapshots?: BankrollSnapshotCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutStrategyConfigInput = {
    id?: number
    name: string
    slug: string
    model?: string
    baseUrl?: string
    apiKey?: string | null
    strategy: string
    avatarPresetId?: number | null
    initialCapital?: Decimal | DecimalJsLike | number | string
    currentCash?: Decimal | DecimalJsLike | number | string
    frozenCash?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    autoTradingEnabled?: boolean
    showOnDashboard?: boolean
    maxStakePercent?: number
    maxOpenBets?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bets?: BetUncheckedCreateNestedManyWithoutAgentInput
    decisionLogs?: DecisionLogUncheckedCreateNestedManyWithoutAgentInput
    promptBinding?: PromptBindingUncheckedCreateNestedOneWithoutAgentInput
    snapshots?: BankrollSnapshotUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutStrategyConfigInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutStrategyConfigInput, AgentUncheckedCreateWithoutStrategyConfigInput>
  }

  export type AgentUpsertWithoutStrategyConfigInput = {
    update: XOR<AgentUpdateWithoutStrategyConfigInput, AgentUncheckedUpdateWithoutStrategyConfigInput>
    create: XOR<AgentCreateWithoutStrategyConfigInput, AgentUncheckedCreateWithoutStrategyConfigInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutStrategyConfigInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutStrategyConfigInput, AgentUncheckedUpdateWithoutStrategyConfigInput>
  }

  export type AgentUpdateWithoutStrategyConfigInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    strategy?: StringFieldUpdateOperationsInput | string
    avatarPresetId?: NullableIntFieldUpdateOperationsInput | number | null
    initialCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoTradingEnabled?: BoolFieldUpdateOperationsInput | boolean
    showOnDashboard?: BoolFieldUpdateOperationsInput | boolean
    maxStakePercent?: FloatFieldUpdateOperationsInput | number
    maxOpenBets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUpdateManyWithoutAgentNestedInput
    decisionLogs?: DecisionLogUpdateManyWithoutAgentNestedInput
    promptBinding?: PromptBindingUpdateOneWithoutAgentNestedInput
    snapshots?: BankrollSnapshotUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutStrategyConfigInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    strategy?: StringFieldUpdateOperationsInput | string
    avatarPresetId?: NullableIntFieldUpdateOperationsInput | number | null
    initialCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoTradingEnabled?: BoolFieldUpdateOperationsInput | boolean
    showOnDashboard?: BoolFieldUpdateOperationsInput | boolean
    maxStakePercent?: FloatFieldUpdateOperationsInput | number
    maxOpenBets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUncheckedUpdateManyWithoutAgentNestedInput
    decisionLogs?: DecisionLogUncheckedUpdateManyWithoutAgentNestedInput
    promptBinding?: PromptBindingUncheckedUpdateOneWithoutAgentNestedInput
    snapshots?: BankrollSnapshotUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type PromptBindingCreateWithoutPromptTemplateInput = {
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutPromptBindingInput
  }

  export type PromptBindingUncheckedCreateWithoutPromptTemplateInput = {
    id?: number
    agentId: number
    createdAt?: Date | string
  }

  export type PromptBindingCreateOrConnectWithoutPromptTemplateInput = {
    where: PromptBindingWhereUniqueInput
    create: XOR<PromptBindingCreateWithoutPromptTemplateInput, PromptBindingUncheckedCreateWithoutPromptTemplateInput>
  }

  export type PromptBindingCreateManyPromptTemplateInputEnvelope = {
    data: PromptBindingCreateManyPromptTemplateInput | PromptBindingCreateManyPromptTemplateInput[]
    skipDuplicates?: boolean
  }

  export type PromptBindingUpsertWithWhereUniqueWithoutPromptTemplateInput = {
    where: PromptBindingWhereUniqueInput
    update: XOR<PromptBindingUpdateWithoutPromptTemplateInput, PromptBindingUncheckedUpdateWithoutPromptTemplateInput>
    create: XOR<PromptBindingCreateWithoutPromptTemplateInput, PromptBindingUncheckedCreateWithoutPromptTemplateInput>
  }

  export type PromptBindingUpdateWithWhereUniqueWithoutPromptTemplateInput = {
    where: PromptBindingWhereUniqueInput
    data: XOR<PromptBindingUpdateWithoutPromptTemplateInput, PromptBindingUncheckedUpdateWithoutPromptTemplateInput>
  }

  export type PromptBindingUpdateManyWithWhereWithoutPromptTemplateInput = {
    where: PromptBindingScalarWhereInput
    data: XOR<PromptBindingUpdateManyMutationInput, PromptBindingUncheckedUpdateManyWithoutPromptTemplateInput>
  }

  export type PromptBindingScalarWhereInput = {
    AND?: PromptBindingScalarWhereInput | PromptBindingScalarWhereInput[]
    OR?: PromptBindingScalarWhereInput[]
    NOT?: PromptBindingScalarWhereInput | PromptBindingScalarWhereInput[]
    id?: IntFilter<"PromptBinding"> | number
    agentId?: IntFilter<"PromptBinding"> | number
    promptTemplateId?: IntFilter<"PromptBinding"> | number
    createdAt?: DateTimeFilter<"PromptBinding"> | Date | string
  }

  export type AgentCreateWithoutPromptBindingInput = {
    name: string
    slug: string
    model?: string
    baseUrl?: string
    apiKey?: string | null
    strategy: string
    avatarPresetId?: number | null
    initialCapital?: Decimal | DecimalJsLike | number | string
    currentCash?: Decimal | DecimalJsLike | number | string
    frozenCash?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    autoTradingEnabled?: boolean
    showOnDashboard?: boolean
    maxStakePercent?: number
    maxOpenBets?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bets?: BetCreateNestedManyWithoutAgentInput
    decisionLogs?: DecisionLogCreateNestedManyWithoutAgentInput
    strategyConfig?: StrategyConfigCreateNestedOneWithoutAgentInput
    snapshots?: BankrollSnapshotCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutPromptBindingInput = {
    id?: number
    name: string
    slug: string
    model?: string
    baseUrl?: string
    apiKey?: string | null
    strategy: string
    avatarPresetId?: number | null
    initialCapital?: Decimal | DecimalJsLike | number | string
    currentCash?: Decimal | DecimalJsLike | number | string
    frozenCash?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    autoTradingEnabled?: boolean
    showOnDashboard?: boolean
    maxStakePercent?: number
    maxOpenBets?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bets?: BetUncheckedCreateNestedManyWithoutAgentInput
    decisionLogs?: DecisionLogUncheckedCreateNestedManyWithoutAgentInput
    strategyConfig?: StrategyConfigUncheckedCreateNestedOneWithoutAgentInput
    snapshots?: BankrollSnapshotUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutPromptBindingInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutPromptBindingInput, AgentUncheckedCreateWithoutPromptBindingInput>
  }

  export type PromptTemplateCreateWithoutBindingsInput = {
    name: string
    slug: string
    description?: string | null
    content: string
    category?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptTemplateUncheckedCreateWithoutBindingsInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    content: string
    category?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptTemplateCreateOrConnectWithoutBindingsInput = {
    where: PromptTemplateWhereUniqueInput
    create: XOR<PromptTemplateCreateWithoutBindingsInput, PromptTemplateUncheckedCreateWithoutBindingsInput>
  }

  export type AgentUpsertWithoutPromptBindingInput = {
    update: XOR<AgentUpdateWithoutPromptBindingInput, AgentUncheckedUpdateWithoutPromptBindingInput>
    create: XOR<AgentCreateWithoutPromptBindingInput, AgentUncheckedCreateWithoutPromptBindingInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutPromptBindingInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutPromptBindingInput, AgentUncheckedUpdateWithoutPromptBindingInput>
  }

  export type AgentUpdateWithoutPromptBindingInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    strategy?: StringFieldUpdateOperationsInput | string
    avatarPresetId?: NullableIntFieldUpdateOperationsInput | number | null
    initialCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoTradingEnabled?: BoolFieldUpdateOperationsInput | boolean
    showOnDashboard?: BoolFieldUpdateOperationsInput | boolean
    maxStakePercent?: FloatFieldUpdateOperationsInput | number
    maxOpenBets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUpdateManyWithoutAgentNestedInput
    decisionLogs?: DecisionLogUpdateManyWithoutAgentNestedInput
    strategyConfig?: StrategyConfigUpdateOneWithoutAgentNestedInput
    snapshots?: BankrollSnapshotUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutPromptBindingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    strategy?: StringFieldUpdateOperationsInput | string
    avatarPresetId?: NullableIntFieldUpdateOperationsInput | number | null
    initialCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenCash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    autoTradingEnabled?: BoolFieldUpdateOperationsInput | boolean
    showOnDashboard?: BoolFieldUpdateOperationsInput | boolean
    maxStakePercent?: FloatFieldUpdateOperationsInput | number
    maxOpenBets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUncheckedUpdateManyWithoutAgentNestedInput
    decisionLogs?: DecisionLogUncheckedUpdateManyWithoutAgentNestedInput
    strategyConfig?: StrategyConfigUncheckedUpdateOneWithoutAgentNestedInput
    snapshots?: BankrollSnapshotUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type PromptTemplateUpsertWithoutBindingsInput = {
    update: XOR<PromptTemplateUpdateWithoutBindingsInput, PromptTemplateUncheckedUpdateWithoutBindingsInput>
    create: XOR<PromptTemplateCreateWithoutBindingsInput, PromptTemplateUncheckedCreateWithoutBindingsInput>
    where?: PromptTemplateWhereInput
  }

  export type PromptTemplateUpdateToOneWithWhereWithoutBindingsInput = {
    where?: PromptTemplateWhereInput
    data: XOR<PromptTemplateUpdateWithoutBindingsInput, PromptTemplateUncheckedUpdateWithoutBindingsInput>
  }

  export type PromptTemplateUpdateWithoutBindingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTemplateUncheckedUpdateWithoutBindingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FixtureCreateWithoutTournamentInput = {
    txlineFixtureId: string
    teamA: string
    teamB: string
    teamACode: string
    teamBCode: string
    stage: string
    venue?: string | null
    kickoff: Date | string
    status?: string
    scoreA?: number
    scoreB?: number
    currentMinute?: number | null
    currentPeriod?: number
    teamAFifaRank?: number | null
    teamBFifaRank?: number | null
    teamAForm?: string | null
    teamBForm?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bets?: BetCreateNestedManyWithoutFixtureInput
    oddsHistory?: OddsSnapshotCreateNestedManyWithoutFixtureInput
    events?: MatchEventCreateNestedManyWithoutFixtureInput
    signals?: SignalCreateNestedManyWithoutFixtureInput
  }

  export type FixtureUncheckedCreateWithoutTournamentInput = {
    id?: number
    txlineFixtureId: string
    teamA: string
    teamB: string
    teamACode: string
    teamBCode: string
    stage: string
    venue?: string | null
    kickoff: Date | string
    status?: string
    scoreA?: number
    scoreB?: number
    currentMinute?: number | null
    currentPeriod?: number
    teamAFifaRank?: number | null
    teamBFifaRank?: number | null
    teamAForm?: string | null
    teamBForm?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bets?: BetUncheckedCreateNestedManyWithoutFixtureInput
    oddsHistory?: OddsSnapshotUncheckedCreateNestedManyWithoutFixtureInput
    events?: MatchEventUncheckedCreateNestedManyWithoutFixtureInput
    signals?: SignalUncheckedCreateNestedManyWithoutFixtureInput
  }

  export type FixtureCreateOrConnectWithoutTournamentInput = {
    where: FixtureWhereUniqueInput
    create: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput>
  }

  export type FixtureCreateManyTournamentInputEnvelope = {
    data: FixtureCreateManyTournamentInput | FixtureCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type FixtureUpsertWithWhereUniqueWithoutTournamentInput = {
    where: FixtureWhereUniqueInput
    update: XOR<FixtureUpdateWithoutTournamentInput, FixtureUncheckedUpdateWithoutTournamentInput>
    create: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput>
  }

  export type FixtureUpdateWithWhereUniqueWithoutTournamentInput = {
    where: FixtureWhereUniqueInput
    data: XOR<FixtureUpdateWithoutTournamentInput, FixtureUncheckedUpdateWithoutTournamentInput>
  }

  export type FixtureUpdateManyWithWhereWithoutTournamentInput = {
    where: FixtureScalarWhereInput
    data: XOR<FixtureUpdateManyMutationInput, FixtureUncheckedUpdateManyWithoutTournamentInput>
  }

  export type FixtureScalarWhereInput = {
    AND?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
    OR?: FixtureScalarWhereInput[]
    NOT?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
    id?: IntFilter<"Fixture"> | number
    txlineFixtureId?: StringFilter<"Fixture"> | string
    tournamentId?: IntFilter<"Fixture"> | number
    teamA?: StringFilter<"Fixture"> | string
    teamB?: StringFilter<"Fixture"> | string
    teamACode?: StringFilter<"Fixture"> | string
    teamBCode?: StringFilter<"Fixture"> | string
    stage?: StringFilter<"Fixture"> | string
    venue?: StringNullableFilter<"Fixture"> | string | null
    kickoff?: DateTimeFilter<"Fixture"> | Date | string
    status?: StringFilter<"Fixture"> | string
    scoreA?: IntFilter<"Fixture"> | number
    scoreB?: IntFilter<"Fixture"> | number
    currentMinute?: IntNullableFilter<"Fixture"> | number | null
    currentPeriod?: IntFilter<"Fixture"> | number
    teamAFifaRank?: IntNullableFilter<"Fixture"> | number | null
    teamBFifaRank?: IntNullableFilter<"Fixture"> | number | null
    teamAForm?: StringNullableFilter<"Fixture"> | string | null
    teamBForm?: StringNullableFilter<"Fixture"> | string | null
    createdAt?: DateTimeFilter<"Fixture"> | Date | string
    updatedAt?: DateTimeFilter<"Fixture"> | Date | string
  }

  export type BetCreateManyAgentInput = {
    id?: number
    fixtureId: number
    betNo: string
    market: string
    selection: string
    side: string
    odds: number
    stake: Decimal | DecimalJsLike | number | string
    potentialProfit: Decimal | DecimalJsLike | number | string
    potentialLoss: Decimal | DecimalJsLike | number | string
    status?: string
    result?: string | null
    settledAt?: Date | string | null
    realizedPnl?: Decimal | DecimalJsLike | number | string | null
    confidence?: number | null
    signalType?: string | null
    decisionLogId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DecisionLogCreateManyAgentInput = {
    id?: number
    decisionTime?: Date | string
    reasoning: string
    operation: string
    fixtureId?: number | null
    market?: string | null
    selection?: string | null
    stakePortion: number
    confidence: number
    totalBankroll: Decimal | DecimalJsLike | number | string
    executed?: boolean
    betId?: number | null
    signalType?: string | null
    promptSnapshot?: string | null
    reasoningSnapshot?: string | null
    decisionSnapshot?: string | null
    createdAt?: Date | string
  }

  export type BankrollSnapshotCreateManyAgentInput = {
    id?: number
    totalBankroll: Decimal | DecimalJsLike | number | string
    cash: Decimal | DecimalJsLike | number | string
    openBetsValue: Decimal | DecimalJsLike | number | string
    unrealizedPnl: Decimal | DecimalJsLike | number | string
    snapshotTime: Date | string
  }

  export type BetUpdateWithoutAgentInput = {
    betNo?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    selection?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    odds?: FloatFieldUpdateOperationsInput | number
    stake?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialLoss?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizedPnl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    decisionLogId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fixture?: FixtureUpdateOneRequiredWithoutBetsNestedInput
  }

  export type BetUncheckedUpdateWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    fixtureId?: IntFieldUpdateOperationsInput | number
    betNo?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    selection?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    odds?: FloatFieldUpdateOperationsInput | number
    stake?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialLoss?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizedPnl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    decisionLogId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetUncheckedUpdateManyWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    fixtureId?: IntFieldUpdateOperationsInput | number
    betNo?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    selection?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    odds?: FloatFieldUpdateOperationsInput | number
    stake?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialLoss?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizedPnl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    decisionLogId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionLogUpdateWithoutAgentInput = {
    decisionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reasoning?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    fixtureId?: NullableIntFieldUpdateOperationsInput | number | null
    market?: NullableStringFieldUpdateOperationsInput | string | null
    selection?: NullableStringFieldUpdateOperationsInput | string | null
    stakePortion?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    totalBankroll?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed?: BoolFieldUpdateOperationsInput | boolean
    betId?: NullableIntFieldUpdateOperationsInput | number | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    promptSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    reasoningSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    decisionSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionLogUncheckedUpdateWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    decisionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reasoning?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    fixtureId?: NullableIntFieldUpdateOperationsInput | number | null
    market?: NullableStringFieldUpdateOperationsInput | string | null
    selection?: NullableStringFieldUpdateOperationsInput | string | null
    stakePortion?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    totalBankroll?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed?: BoolFieldUpdateOperationsInput | boolean
    betId?: NullableIntFieldUpdateOperationsInput | number | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    promptSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    reasoningSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    decisionSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionLogUncheckedUpdateManyWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    decisionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reasoning?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    fixtureId?: NullableIntFieldUpdateOperationsInput | number | null
    market?: NullableStringFieldUpdateOperationsInput | string | null
    selection?: NullableStringFieldUpdateOperationsInput | string | null
    stakePortion?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    totalBankroll?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed?: BoolFieldUpdateOperationsInput | boolean
    betId?: NullableIntFieldUpdateOperationsInput | number | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    promptSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    reasoningSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    decisionSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankrollSnapshotUpdateWithoutAgentInput = {
    totalBankroll?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    openBetsValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unrealizedPnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    snapshotTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankrollSnapshotUncheckedUpdateWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalBankroll?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    openBetsValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unrealizedPnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    snapshotTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankrollSnapshotUncheckedUpdateManyWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalBankroll?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    openBetsValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unrealizedPnl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    snapshotTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetCreateManyFixtureInput = {
    id?: number
    agentId: number
    betNo: string
    market: string
    selection: string
    side: string
    odds: number
    stake: Decimal | DecimalJsLike | number | string
    potentialProfit: Decimal | DecimalJsLike | number | string
    potentialLoss: Decimal | DecimalJsLike | number | string
    status?: string
    result?: string | null
    settledAt?: Date | string | null
    realizedPnl?: Decimal | DecimalJsLike | number | string | null
    confidence?: number | null
    signalType?: string | null
    decisionLogId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OddsSnapshotCreateManyFixtureInput = {
    id?: number
    source?: string
    market: string
    teamAOdds: number
    drawOdds?: number | null
    teamBOdds: number
    allOutcomes?: NullableJsonNullValueInput | InputJsonValue
    timestamp: Date | string
  }

  export type MatchEventCreateManyFixtureInput = {
    id?: number
    eventType: string
    minute: number
    period: number
    team: string
    player?: string | null
    description?: string | null
    statKey?: string | null
    occurredAt?: Date | string
  }

  export type SignalCreateManyFixtureInput = {
    id?: number
    type: string
    severity: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    triggeredAt?: Date | string
  }

  export type BetUpdateWithoutFixtureInput = {
    betNo?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    selection?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    odds?: FloatFieldUpdateOperationsInput | number
    stake?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialLoss?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizedPnl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    decisionLogId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutBetsNestedInput
  }

  export type BetUncheckedUpdateWithoutFixtureInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: IntFieldUpdateOperationsInput | number
    betNo?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    selection?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    odds?: FloatFieldUpdateOperationsInput | number
    stake?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialLoss?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizedPnl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    decisionLogId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetUncheckedUpdateManyWithoutFixtureInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: IntFieldUpdateOperationsInput | number
    betNo?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    selection?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    odds?: FloatFieldUpdateOperationsInput | number
    stake?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialLoss?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizedPnl?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    signalType?: NullableStringFieldUpdateOperationsInput | string | null
    decisionLogId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OddsSnapshotUpdateWithoutFixtureInput = {
    source?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    teamAOdds?: FloatFieldUpdateOperationsInput | number
    drawOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    teamBOdds?: FloatFieldUpdateOperationsInput | number
    allOutcomes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OddsSnapshotUncheckedUpdateWithoutFixtureInput = {
    id?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    teamAOdds?: FloatFieldUpdateOperationsInput | number
    drawOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    teamBOdds?: FloatFieldUpdateOperationsInput | number
    allOutcomes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OddsSnapshotUncheckedUpdateManyWithoutFixtureInput = {
    id?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    teamAOdds?: FloatFieldUpdateOperationsInput | number
    drawOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    teamBOdds?: FloatFieldUpdateOperationsInput | number
    allOutcomes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchEventUpdateWithoutFixtureInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    minute?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    team?: StringFieldUpdateOperationsInput | string
    player?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statKey?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchEventUncheckedUpdateWithoutFixtureInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    minute?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    team?: StringFieldUpdateOperationsInput | string
    player?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statKey?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchEventUncheckedUpdateManyWithoutFixtureInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    minute?: IntFieldUpdateOperationsInput | number
    period?: IntFieldUpdateOperationsInput | number
    team?: StringFieldUpdateOperationsInput | string
    player?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statKey?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalUpdateWithoutFixtureInput = {
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalUncheckedUpdateWithoutFixtureInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalUncheckedUpdateManyWithoutFixtureInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptBindingCreateManyPromptTemplateInput = {
    id?: number
    agentId: number
    createdAt?: Date | string
  }

  export type PromptBindingUpdateWithoutPromptTemplateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutPromptBindingNestedInput
  }

  export type PromptBindingUncheckedUpdateWithoutPromptTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptBindingUncheckedUpdateManyWithoutPromptTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FixtureCreateManyTournamentInput = {
    id?: number
    txlineFixtureId: string
    teamA: string
    teamB: string
    teamACode: string
    teamBCode: string
    stage: string
    venue?: string | null
    kickoff: Date | string
    status?: string
    scoreA?: number
    scoreB?: number
    currentMinute?: number | null
    currentPeriod?: number
    teamAFifaRank?: number | null
    teamBFifaRank?: number | null
    teamAForm?: string | null
    teamBForm?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FixtureUpdateWithoutTournamentInput = {
    txlineFixtureId?: StringFieldUpdateOperationsInput | string
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    teamACode?: StringFieldUpdateOperationsInput | string
    teamBCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    kickoff?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    currentMinute?: NullableIntFieldUpdateOperationsInput | number | null
    currentPeriod?: IntFieldUpdateOperationsInput | number
    teamAFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamBFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamAForm?: NullableStringFieldUpdateOperationsInput | string | null
    teamBForm?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUpdateManyWithoutFixtureNestedInput
    oddsHistory?: OddsSnapshotUpdateManyWithoutFixtureNestedInput
    events?: MatchEventUpdateManyWithoutFixtureNestedInput
    signals?: SignalUpdateManyWithoutFixtureNestedInput
  }

  export type FixtureUncheckedUpdateWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    txlineFixtureId?: StringFieldUpdateOperationsInput | string
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    teamACode?: StringFieldUpdateOperationsInput | string
    teamBCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    kickoff?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    currentMinute?: NullableIntFieldUpdateOperationsInput | number | null
    currentPeriod?: IntFieldUpdateOperationsInput | number
    teamAFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamBFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamAForm?: NullableStringFieldUpdateOperationsInput | string | null
    teamBForm?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUncheckedUpdateManyWithoutFixtureNestedInput
    oddsHistory?: OddsSnapshotUncheckedUpdateManyWithoutFixtureNestedInput
    events?: MatchEventUncheckedUpdateManyWithoutFixtureNestedInput
    signals?: SignalUncheckedUpdateManyWithoutFixtureNestedInput
  }

  export type FixtureUncheckedUpdateManyWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    txlineFixtureId?: StringFieldUpdateOperationsInput | string
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    teamACode?: StringFieldUpdateOperationsInput | string
    teamBCode?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    kickoff?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    currentMinute?: NullableIntFieldUpdateOperationsInput | number | null
    currentPeriod?: IntFieldUpdateOperationsInput | number
    teamAFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamBFifaRank?: NullableIntFieldUpdateOperationsInput | number | null
    teamAForm?: NullableStringFieldUpdateOperationsInput | string | null
    teamBForm?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AgentCountOutputTypeDefaultArgs instead
     */
    export type AgentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AgentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FixtureCountOutputTypeDefaultArgs instead
     */
    export type FixtureCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FixtureCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromptTemplateCountOutputTypeDefaultArgs instead
     */
    export type PromptTemplateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromptTemplateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TournamentCountOutputTypeDefaultArgs instead
     */
    export type TournamentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TournamentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AgentDefaultArgs instead
     */
    export type AgentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AgentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BetDefaultArgs instead
     */
    export type BetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FixtureDefaultArgs instead
     */
    export type FixtureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FixtureDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OddsSnapshotDefaultArgs instead
     */
    export type OddsSnapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OddsSnapshotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatchEventDefaultArgs instead
     */
    export type MatchEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatchEventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SignalDefaultArgs instead
     */
    export type SignalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SignalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DecisionLogDefaultArgs instead
     */
    export type DecisionLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DecisionLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BankrollSnapshotDefaultArgs instead
     */
    export type BankrollSnapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BankrollSnapshotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StrategyConfigDefaultArgs instead
     */
    export type StrategyConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StrategyConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromptTemplateDefaultArgs instead
     */
    export type PromptTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromptTemplateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromptBindingDefaultArgs instead
     */
    export type PromptBindingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromptBindingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TournamentDefaultArgs instead
     */
    export type TournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TournamentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NewsItemDefaultArgs instead
     */
    export type NewsItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NewsItemDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}