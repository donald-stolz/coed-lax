# SEO, AEO & GEO strategy

Three overlapping goals for this site's findability:

- **SEO** (search engine optimization) — rank in Google/Bing for searches like "pickup lacrosse Austin."
- **AEO** (answer engine optimization) — get pulled into featured snippets, voice assistant answers, and "People also ask."
- **GEO** (generative engine optimization) — get cited or summarized correctly by AI tools like ChatGPT, Perplexity, and Google AI Overviews.

All three lean on the same foundation: accurate metadata, structured data that machines can parse unambiguously, and visible page content that actually backs up what the metadata claims. Mismatched metadata/content is penalized by search engines and ignored or distrusted by AI engines.

## Target search intent

Optimizing for casual/pickup framing: **"pickup lacrosse Austin"**, **"coed lacrosse ATX"** — not league/club framing. This drives the title tag, meta description, and H1 copy on the homepage. If the group's format changes (e.g. becomes a structured league), revisit this and the copy that depends on it.

## Single source of truth: `src/lib/site-config.ts`

Name, canonical URL, description, target keywords, area served, sport, and social links live in one place. Metadata, JSON-LD, and `llms.txt` should all read from here rather than hardcoding strings, so a change (like adding the Instagram handle once the account exists) only needs to happen once.

## What's implemented

### Metadata API (`src/app/layout.tsx`)

- `metadataBase` set to the production URL so relative OG/canonical URLs resolve correctly in any environment.
- Title template (`%s | Coed Lax ATX`) so per-page titles stay consistent without repeating the brand name everywhere.
- Open Graph + Twitter card metadata for link previews (Slack, iMessage, Twitter/X, etc.).
- `alternates.canonical` to avoid duplicate-content issues.

Every new page should export its own `metadata` (or `generateMetadata`) with at least a `title` and `description` — see `src/app/faq/page.tsx` for the pattern.

### Structured data (JSON-LD)

Rendered via the `<JsonLd data={...} />` component (`src/components/json-ld.tsx`), which outputs a literal `<script type="application/ld+json">` per [Next.js's documented pattern](https://nextjs.org/docs/app/guides/json-ld).

- **`SportsOrganization`** (root layout, site-wide): establishes this as a real entity — name, description, sport, area served, and `sameAs` links to social profiles once they exist. This is what lets AI engines and Google's Knowledge Graph confirm "Coed Lax ATX" refers to a specific, real thing.
- **`FAQPage`** (`/faq`): each Q&A is machine-readable, which is what Google pulls into featured snippets and what AI answer engines quote directly. This is the single highest-leverage AEO pattern for a site this size — prioritize keeping it accurate over almost anything else here.

When the group gets a fixed home field/park, upgrade the location from city-level (`areaServed: "Austin, TX"`) to a proper `SportsActivityLocation` with a street address — that's a meaningfully stronger local-SEO signal than a city name.

### Sitemap & robots (`src/app/sitemap.ts`, `src/app/robots.ts`)

Next.js Metadata Route conventions — no extra package needed. **Every new page must be added to `sitemap.ts` manually** (it's a static list, not auto-discovered).

Robots policy is **allow everyone**, including AI crawlers, listed explicitly in `robots.ts` (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, etc.) even though the wildcard rule already covers them — this makes the GEO decision visible in the code instead of implicit. If that policy ever needs to change per-bot (e.g. block training crawlers but keep allowing live-answer bots), that's the file to edit.

### `llms.txt` (`public/llms.txt`)

An emerging, informal convention (not a web standard yet) — a plain-language, markdown summary of the site for AI crawlers and agents to read directly, similar in spirit to `robots.txt` but descriptive rather than a set of rules. Keep it in sync with `site-config.ts` and the FAQ content; it's the fastest way for a GEO tool to get an accurate summary without having to parse rendered HTML.

### Open Graph image (`src/app/opengraph-image.tsx`)

Generated dynamically from text (via `next/og`'s `ImageResponse`) since there's no logo or brand asset yet. Replace this with a real designed image once branding exists — delete the file and drop a static `opengraph-image.png` in `src/app/` instead, which Next.js will pick up automatically via the same file convention.

### Core Web Vitals (Vercel Analytics + Speed Insights)

Wired into the root layout (`<Analytics />`, `<SpeedInsights />`). Page speed and Core Web Vitals are a direct Google ranking factor; this gives visibility into real-world numbers once deployed to Vercel, rather than only lab data.

## Checklist for adding a new page

1. Export `metadata` with a specific `title` and `description` (don't rely on the root layout defaults for anything beyond the homepage).
2. Set `alternates.canonical`.
3. Add the route to `src/app/sitemap.ts`.
4. If the page answers a discrete question (pricing, rules, how-to), consider `FAQPage` or `HowTo` JSON-LD rather than prose alone.
5. Make sure visible page content actually contains the target keywords/phrases naturally — metadata alone doesn't help if the rendered page doesn't back it up.
