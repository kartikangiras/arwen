import OpenAI from 'openai';
import { AgentStrategy, RESPONSE_FORMAT_INSTRUCTIONS, STRATEGY_PROMPTS } from '@arena/shared-types';
import type { AgentDecision } from '@arena/shared-types';
import { createLogger } from '@arena/shared-utils';

const logger = createLogger('llm-client');

// agents.md §8 — builds context + calls the shared LLM with the agent's
// strategy prompt. All agents share OPENAI_API_KEY; behaviour = prompt.
export class LlmClient {
  private client: OpenAI | null = null;

  constructor(
    private readonly model: string,
    private readonly baseUrl: string,
    private readonly apiKey: string | null | undefined,
  ) {}

  private ensure(): OpenAI | null {
    if (this.client) return this.client;
    const key = this.apiKey || process.env.OPENAI_API_KEY;
    if (!key) {
      logger.warn('no OPENAI_API_KEY — LLM disabled');
      return null;
    }
    this.client = new OpenAI({ apiKey: key, baseURL: this.baseUrl });
    return this.client;
  }

  get enabled(): boolean {
    return process.env.ENABLE_LLM === 'true' && Boolean(this.ensure());
  }

  /** Returns the strategy system prompt for the given agent slug (§9). */
  systemPrompt(slug: string): string {
    const base = STRATEGY_PROMPTS[slug] ?? STRATEGY_PROMPTS['yamal-nitro'];
    return `${base}\n\n${RESPONSE_FORMAT_INSTRUCTIONS}`;
  }

  async decide(slug: string, agentStrategy: AgentStrategy, context: string): Promise<AgentDecision> {
    const client = this.ensure();
    if (!client) {
      return {
        operation: 'hold',
        fixture: null,
        market: null,
        selection: null,
        stakePortion: 0,
        confidence: 0,
        reasoning: 'LLM disabled — no OPENAI_API_KEY configured.',
      };
    }
    try {
      const completion = await client.chat.completions.create({
        model: this.model,
        messages: [
          { role: 'system', content: this.systemPrompt(slug) },
          { role: 'user', content: context },
        ],
        temperature: 0.4,
      });
      const raw = completion.choices[0]?.message?.content ?? '{}';
      const parsed = JSON.parse(raw) as AgentDecision;
      return { ...parsed, strategy: agentStrategy } as AgentDecision;
    } catch (err) {
      logger.error({ err: (err as Error).message, slug }, 'LLM call failed');
      return {
        operation: 'hold',
        fixture: null,
        market: null,
        selection: null,
        stakePortion: 0,
        confidence: 0,
        reasoning: `LLM error: ${(err as Error).message}`,
      };
    }
  }
}
