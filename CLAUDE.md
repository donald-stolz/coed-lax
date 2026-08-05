# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for **Coed Lax ATX**, a coed pickup lacrosse group in Austin, TX. Frontend-only: static content pages plus simple forms (e.g. contact/signup) that submit to an external service or API route — no user accounts or database. Deploys to Vercel.

## Commands

```bash
npm run dev        # start dev server (Turbopack) at localhost:3000
npm run build      # production build
npm run start      # run the production build
npm run lint       # eslint
npm run format     # prettier --write .
npm run test:e2e   # run the Playwright suite (builds + starts the app automatically)
```

Run a single Playwright test file or test by name:

```bash
npx playwright test tests/home.spec.ts
npx playwright test -g "home page loads"
npx playwright test --ui   # interactive mode
```

## Architecture

- Next.js App Router with `src/` dir; pages live under `src/app/`. Path alias `@/*` maps to `src/*`.
- Styling is Tailwind CSS v4 via `@tailwindcss/postcss` (no `tailwind.config`; v4 config lives in CSS through `src/app/globals.css`).
- `AGENTS.md` at the repo root is auto-generated/re-written by `next dev` on each run (per-version breaking-change notes for this Next.js release) — commit it as-is when it changes; don't hand-edit its content. `CLAUDE.md` (this file) is separate and not auto-managed.

## Testing

Playwright (`tests/*.spec.ts`) is the only test tooling, chosen deliberately even though this is a small marketing site — this repo doubles as a portfolio piece. `playwright.config.ts` runs `npm run build && npm run start` as the webServer, so tests exercise the production build, not `next dev`. Chromium-only project for now.

## Git hooks

Husky runs `lint-staged` on `pre-commit` (`.husky/pre-commit`): ESLint `--fix` + Prettier on staged JS/TS, Prettier on staged JSON/CSS/MD. Config for both lives in `package.json` (`lint-staged` key) and `.prettierrc.json`.

## Repo conventions

- `design-inspiration/` holds reference screenshots/mockups for visual direction — not project source, don't treat it as code to build against unless asked.
