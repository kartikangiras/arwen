import '@arena/shared-config';
import { PrismaClient } from '@arena/db';
import { AGENT_STRATEGIES } from '@arena/shared-types';
import { createLogger } from '@arena/shared-utils';
import { STRATEGY_PROMPTS } from '@arena/shared-types';

const logger = createLogger('seed-agents');
const SHARED_MODEL = 'gpt-4o';
const SHARED_BASE_URL = 'https://api.openai.com/v1';

async function ensurePromptTemplate(
  prisma: PrismaClient,
  slug: string,
  name: string,
  content: string,
): Promise<number> {
  const existing = await prisma.promptTemplate.findUnique({ where: { slug } });
  if (existing) {
    await prisma.promptTemplate.update({ where: { id: existing.id }, data: { content } });
    return existing.id;
  }
  const created = await prisma.promptTemplate.create({
    data: { name, slug, content, category: 'default' },
  });
  return created.id;
}

async function main(): Promise<void> {
  const prisma = new PrismaClient();
  await prisma.$connect();

  let created = 0;
  let updated = 0;

  for (const spec of AGENT_STRATEGIES) {
    const promptId = await ensurePromptTemplate(
      prisma,
      spec.promptSlug,
      `${spec.name} Strategy`,
      STRATEGY_PROMPTS[spec.slug] ?? '',
    );

    const existing = await prisma.agent.findUnique({ where: { slug: spec.slug } });
    const data = {
      name: spec.name,
      model: SHARED_MODEL,
      baseUrl: SHARED_BASE_URL,
      strategy: spec.strategy,
      avatarPresetId: spec.avatarPresetId,
      maxStakePercent: spec.maxStakePercent,
      maxOpenBets: spec.maxOpenBets,
    };

    if (existing) {
      await prisma.agent.update({ where: { id: existing.id }, data });
      await prisma.promptBinding.upsert({
        where: { agentId: existing.id },
        create: { agentId: existing.id, promptTemplateId: promptId },
        update: { promptTemplateId: promptId },
      });
      await prisma.strategyConfig.upsert({
        where: { agentId: existing.id },
        create: {
          agentId: existing.id,
          signalPoolIds: spec.signalTriggers.join(','),
          triggerInterval: 300,
        },
        update: { signalPoolIds: spec.signalTriggers.join(',') },
      });
      updated++;
      logger.info({ slug: spec.slug, strategy: spec.strategy }, 'updated agent');
      continue;
    }

    const agent = await prisma.agent.create({
      data: {
        ...data,
        slug: spec.slug,
        initialCapital: 10000,
        currentCash: 10000,
      },
    });
    await prisma.promptBinding.create({
      data: { agentId: agent.id, promptTemplateId: promptId },
    });
    await prisma.strategyConfig.create({
      data: {
        agentId: agent.id,
        signalPoolIds: spec.signalTriggers.join(','),
        triggerInterval: 300,
      },
    });
    created++;
    logger.info({ id: agent.id, slug: spec.slug, strategy: spec.strategy }, 'seeded agent');
  }

  logger.info({ created, updated, total: AGENT_STRATEGIES.length }, 'seed complete');
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error('seed failed:', err);
  process.exit(1);
});
