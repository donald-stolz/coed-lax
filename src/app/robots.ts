import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

// Policy: allow every crawler, including AI/GEO bots, so answer engines
// (ChatGPT, Perplexity, Google AI Overviews, etc.) can index and cite this
// site. The wildcard rule alone already covers this, but AI crawlers are
// listed explicitly so the policy is visible and easy to change per-bot later.
const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'CCBot',
  'anthropic-ai',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: AI_CRAWLERS,
        allow: '/',
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
