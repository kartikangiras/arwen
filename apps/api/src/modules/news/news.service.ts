import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

export interface FootballNewsItem {
  id: string;
  title: string;
  summary: string | null;
  source: string;
  url: string | null;
  publishedAt: string;
  imageUrl: string | null;
  tags: string[];
}

interface NewsCache {
  expiresAt: number;
  items: FootballNewsItem[];
}

const DEFAULT_FEEDS = [
  'https://feeds.bbci.co.uk/sport/football/rss.xml',
  'https://www.theguardian.com/football/rss',
  'https://www.espn.com/espn/rss/soccer/news',
];

@Injectable()
export class NewsService {
  private readonly logger = new Logger(NewsService.name);
  private cache: NewsCache | null = null;

  constructor(private readonly prisma: PrismaService) {}

  async recent(limit = 50): Promise<FootballNewsItem[]> {
    const safeLimit = Math.min(Math.max(Number(limit) || 12, 1), 50);
    const now = Date.now();

    if (this.cache && this.cache.expiresAt > now) {
      return this.cache.items.slice(0, safeLimit);
    }

    const liveItems = await this.fetchLiveFeedItems();
    const items = liveItems.length > 0 ? liveItems : await this.fallbackToDatabase();

    const ttl = this.getCacheTtlMs();
    this.cache = {
      items,
      expiresAt: now + ttl,
    };

    return items.slice(0, safeLimit);
  }

  private async fetchLiveFeedItems(): Promise<FootballNewsItem[]> {
    const feedUrls = this.getFeedUrls();
    const results = await Promise.allSettled(feedUrls.map((url) => this.fetchFeed(url)));

    const merged = results.flatMap((result) => (result.status === 'fulfilled' ? result.value : []));
    const deduped = new Map<string, FootballNewsItem>();

    for (const item of merged) {
      const key = item.url?.trim().toLowerCase() || item.title.trim().toLowerCase();
      if (!deduped.has(key)) {
        deduped.set(key, item);
      }
    }

    return Array.from(deduped.values())
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 24);
  }

  private async fetchFeed(feedUrl: string): Promise<FootballNewsItem[]> {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), this.getTimeoutMs());

      const response = await fetch(feedUrl, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'ArwenArena/1.0 (+https://localhost)',
          Accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
        },
      });
      clearTimeout(timeout);

      if (!response.ok) {
        this.logger.warn(`football news feed ${feedUrl} returned ${response.status}`);
        return [];
      }

      const xml = await response.text();
      return this.parseFeedXml(xml, feedUrl);
    } catch (error) {
      this.logger.warn(`football news feed failed for ${feedUrl}: ${error instanceof Error ? error.message : 'unknown error'}`);
      return [];
    }
  }

  private parseFeedXml(xml: string, feedUrl: string): FootballNewsItem[] {
    const source = this.formatSourceLabel(feedUrl);
    const items = Array.from(xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)).map((match, index) => {
      const itemXml = match[0];
      const title = this.cleanText(this.extractTag(itemXml, 'title'));
      const url = this.absoluteUrl(this.cleanText(this.extractTag(itemXml, 'link')), feedUrl);
      const summary = this.cleanText(this.extractTag(itemXml, 'description')) || null;
      const publishedAt = this.normalizeDate(
        this.cleanText(this.extractTag(itemXml, 'pubDate')) || this.cleanText(this.extractTag(itemXml, 'published')),
      );
      const imageUrl =
        this.extractAttr(itemXml, /<media:thumbnail[^>]*url="([^"]+)"/i) ||
        this.extractAttr(itemXml, /<media:content[^>]*url="([^"]+)"/i) ||
        this.extractAttr(itemXml, /<enclosure[^>]*url="([^"]+)"/i) ||
        null;
      const tags = this.extractTags(itemXml);

      if (!title || !publishedAt) {
        return null;
      }

      return {
        id: `${source.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index}-${Buffer.from(title).toString('base64').slice(0, 8)}`,
        title,
        summary,
        source,
        url,
        publishedAt,
        imageUrl,
        tags,
      } satisfies FootballNewsItem;
    });

    return items.filter((item): item is FootballNewsItem => Boolean(item));
  }

  private async fallbackToDatabase(): Promise<FootballNewsItem[]> {
    const rows = await this.prisma.newsItem.findMany({
      orderBy: { publishedAt: 'desc' },
      take: 24,
    });

    return rows.map((row) => ({
      id: `db-${row.id}`,
      title: row.title,
      summary: row.summary,
      source: row.source,
      url: row.url,
      publishedAt: row.publishedAt.toISOString(),
      imageUrl: null,
      tags: [row.relevance, row.sentiment, row.aiClassification].filter((value): value is string => Boolean(value)),
    }));
  }

  private getFeedUrls(): string[] {
    const raw = process.env.FOOTBALL_NEWS_FEEDS;
    const configured = raw
      ?.split(',')
      .map((value) => value.trim())
      .filter(Boolean);

    return configured?.length ? configured : DEFAULT_FEEDS;
  }

  private getCacheTtlMs(): number {
    const value = Number(process.env.FOOTBALL_NEWS_CACHE_TTL_MS ?? 5 * 60 * 1000);
    return Number.isFinite(value) && value > 0 ? value : 5 * 60 * 1000;
  }

  private getTimeoutMs(): number {
    const value = Number(process.env.FOOTBALL_NEWS_TIMEOUT_MS ?? 4500);
    return Number.isFinite(value) && value > 0 ? value : 4500;
  }

  private formatSourceLabel(feedUrl: string): string {
    const host = new URL(feedUrl).hostname;

    if (host.includes('bbc')) return 'BBC Sport';
    if (host.includes('guardian')) return 'The Guardian';
    if (host.includes('espn')) return 'ESPN FC';

    return host.replace(/^www\./, '');
  }

  private extractTag(xml: string, tagName: string): string {
    const escaped = tagName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const match = xml.match(new RegExp(`<${escaped}[^>]*>([\\s\\S]*?)<\\/${escaped}>`, 'i'));
    return match?.[1] ?? '';
  }

  private extractAttr(xml: string, pattern: RegExp): string | null {
    const match = xml.match(pattern);
    return match?.[1] ? this.decodeEntities(match[1].trim()) : null;
  }

  private extractTags(itemXml: string): string[] {
    return Array.from(itemXml.matchAll(/<category[^>]*>([\s\S]*?)<\/category>/gi))
      .map((match) => this.cleanText(match[1]))
      .filter(Boolean)
      .slice(0, 3);
  }

  private cleanText(value: string | null | undefined): string {
    if (!value) return '';

    return this.decodeEntities(
      value
        .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/gi, '$1')
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim(),
    );
  }

  private decodeEntities(value: string): string {
    return value
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&apos;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&#x2F;/g, '/')
      .replace(/&#x27;/g, "'")
      .replace(/&#x2019;/g, '’')
      .replace(/&#8217;/g, '’')
      .replace(/&#8211;/g, '–')
      .replace(/&#8212;/g, '—')
      .replace(/&#8230;/g, '…');
  }

  private normalizeDate(value: string): string {
    if (!value) return '';
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? '' : parsed.toISOString();
  }

  private absoluteUrl(value: string, feedUrl: string): string | null {
    if (!value) return null;

    try {
      return new URL(value, feedUrl).toString();
    } catch {
      return null;
    }
  }
}
