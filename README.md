# Coed Lax ATX

Marketing site for **Coed Lax ATX**, a coed pickup lacrosse group in Austin, TX. Next.js (App Router) + TypeScript + Tailwind CSS, deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command            | Purpose                                          |
| ------------------ | ------------------------------------------------ |
| `npm run dev`      | Start the dev server (Turbopack)                 |
| `npm run build`    | Production build                                 |
| `npm run start`    | Run the production build                         |
| `npm run lint`     | ESLint                                           |
| `npm run format`   | Prettier, writes in place                        |
| `npm run test:e2e` | Playwright suite (builds + starts the app first) |

Git hooks (Husky + lint-staged) run ESLint and Prettier on staged files automatically at commit time.

## SEO, AEO & GEO

This project is built to be findable by traditional search (SEO), answer engines like featured snippets and voice assistants (AEO), and generative AI tools like ChatGPT and Perplexity (GEO). See **[docs/seo.md](docs/seo.md)** for the full strategy, what's implemented, and what to do when adding new pages.

Quick reference:

- Central site facts (name, URL, description, keywords, social links) live in `src/lib/site-config.ts` — update there, not per-page.
- Structured data (JSON-LD) is rendered via `src/components/json-ld.tsx`.
- `src/app/robots.ts` and `src/app/sitemap.ts` are the Next.js Metadata Route conventions for `/robots.txt` and `/sitemap.xml`.
- `public/llms.txt` is a plain-language summary of the site for AI crawlers.

## Deployment

Deploys to [Vercel](https://vercel.com). Vercel Analytics and Speed Insights are wired into the root layout to track Core Web Vitals, which factor into search ranking.
