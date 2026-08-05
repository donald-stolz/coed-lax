# Brand & theme guide

Reference for visual and voice decisions on the Coed Lax ATX site and any other Coed Lax ATX materials (flyers, social graphics, merch). Derived from the two brand assets that currently exist: `public/images/coed-lax-logo.jpg` (the wordmark) and the photos in `public/images/instagram/` (game action, team shots, and the "Goals for Good" tournament flyer). There is no existing site theme to preserve — `globals.css` is still Next.js scaffold defaults (Arial body font, plain black/white) — so this doc is the starting point, not a description of current state.

## Brand essence

Coed Lax ATX is a **volunteer-run, drop-in pickup lacrosse group in Austin** — no tryouts, no team, no fixed field. The logo and photos both point the same direction: hand-made, unpretentious, DIY-community energy rather than a polished league or a brand trying to sell something. `docs/design-inspiration-research.md` reached the same conclusion from the copy side — the site should be **logistics-forward and welcoming**, not mission-statement-heavy or corporate. The visual identity should back that up: warm, a little scrappy, obviously made by the people who play, not a marketing department.

## Logo

`public/images/coed-lax-logo.jpg` — hand-lettered brush-script wordmark ("Co-ed Lacrosse Atx") in black, flanked by two bat silhouettes, on a soft holographic/tie-dye wash (pink → teal → peach).

- **Treat the lettering + bats as one locked unit.** Don't re-typeset "Coed Lax ATX" in a different font and call it the logo — the hand-lettering _is_ the mark.
- **The bats are a stylistic flourish, not a seasonal (Halloween) reference** — keep them year-round rather than swapping them for other iconography.
- Current file is a small JPEG (150×150, ~5.8 KB) with the tie-dye background baked in — fine for a favicon/avatar-sized use, but there's no transparent or high-res version yet. **Before using the logo anywhere it needs to sit on a color other than its own background (e.g. a dark nav bar, merch, a large hero), get a transparent-background, higher-resolution export of just the black linework.** This is the single biggest gap between "what we have" and "what future design work will need."
- Don't recolor the linework or add drop shadows/outlines — let it stay flat black.

## Color palette

Pulled directly from the logo and the one official event graphic in the photo set (`goals_for_good.jpg`), not invented from scratch.

### Primary — from the logo wash

| Swatch | Name        | Hex       | Use                                                                                                                                        |
| ------ | ----------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| ⬛     | Ink         | `#201813` | Body text, the wordmark itself, primary UI text                                                                                            |
| 🩷     | Bloom Pink  | `#EE8FD4` | Accents, hover states, playful highlights                                                                                                  |
| 🩵     | Lagoon Teal | `#4FC1CE` | Primary interactive color candidate (links/buttons) — reads well on white, has enough contrast for text-on-white use unlike the pink/peach |
| 🟠     | Sand Peach  | `#F4BB8E` | Warm accent, tags/badges, secondary highlights                                                                                             |

The full tie-dye wash (pink→teal→peach) is a nice **background texture for a hero section or divider**, used sparingly — it competes with text if used behind body copy. Don't tile it as a repeating pattern; use it once, big, as a moment.

### Secondary — from the tournament flyer

The "Goals for Good" flyer (co-branded with Bridge Lacrosse, `goals_for_good.jpg`) uses a bolder, higher-contrast cobalt/orange spray-paint look. This is a legitimate second palette for **event graphics, flyers, and social posts** — higher energy than the site needs for everyday UI, but on-brand for one-off promotion.

| Swatch | Name         | Hex       | Use                          |
| ------ | ------------ | --------- | ---------------------------- |
| 🔵     | Cobalt       | `#4A5FC9` | Event graphics, social posts |
| 🟤     | Burnt Orange | `#C2703F` | Event graphics, social posts |
| ⬜     | Charcoal     | `#38333A` | Event graphic text/outlines  |

### Neutrals

| Swatch | Name      | Hex       | Use                                                                                     |
| ------ | --------- | --------- | --------------------------------------------------------------------------------------- |
| —      | Paper     | `#FBF9F7` | Page background — warm off-white, not stark `#fff`, matches the sun-bleached photo tone |
| —      | Warm Gray | `#6B6560` | Secondary text, captions, borders                                                       |

**Recommendation:** build the site's working palette around Ink / Lagoon Teal / Paper as the everyday trio (text, primary accent, background), with Bloom Pink and Sand Peach as sparing highlight colors. Save Cobalt/Burnt Orange for flyer-style graphics rather than the site chrome, so the site doesn't visually collide with promotional material for specific events.

## Typography

No web fonts are chosen yet — `globals.css` currently hardcodes `Arial, Helvetica, sans-serif` on `body`, overriding the Geist variables Next.js already wires up via `next/font`. That's scaffold leftover, not a brand decision.

- **Don't try to turn the logo's hand-lettering into a live web font.** Hand-lettered brush scripts don't hold up as headline/body type at arbitrary sizes and hurt legibility and accessibility — keep the script exclusively inside the logo image itself.
- **Headings:** a bold, slightly rounded/geometric sans with some personality (e.g. Poppins, DM Sans, Space Grotesk) — energetic without sacrificing readability. All-caps for section headers (matching the confident, punchy tone the flyer and several of the design-inspiration reference sites use) is a reasonable option.
- **Body:** a clean, highly legible sans. Geist (already available via `next/font` in this project) is a fine default — no need to introduce a new font family just for body copy.

## Photography style

The existing photo set (`public/images/instagram/`) already sets the reference:

- **Candid, unposed action and group shots** — mid-game contact, post-game team lineups, someone holding a friend's dog. Not stock photography, not posed studio shots.
- **Real Austin conditions**: harsh midday sun, dry/brown late-summer grass alongside green turf, chain-link and open sky. Don't color-correct these into a lush, evenly-lit look — the sun-bleached field is part of the setting, not a flaw to fix.
- **The group itself is the subject** — mixed genders, mixed skill levels, mixed ages visible in the same frame. Photos should keep showing that mix rather than cropping toward a more "athletic-brand" homogeneous look.
- Avoid heavy filters/presets; light crop and exposure correction only.

## Voice & tone

Cross-reference: `docs/design-inspiration-research.md` synthesis.

- Lead with **who this is for** ("all skill levels, drop in whenever") before any operational detail — the research doc's #1 recurring pattern across every good reference site.
- **Logistics-forward, not mission-forward.** This is a for-fun pickup group, not a youth-development nonprofit — don't borrow Bridge Lacrosse's mission-statement-first framing. Say plainly when/where/how to show up.
- Casual and a little self-aware (bats on the logo for no stated reason, "Goals for Good" pun) — the copy can have personality without turning corporate-cute.
- RSVPs and day-of updates run through a WhatsApp group, not an app or on-site RSVP system — CTAs should say "join the WhatsApp," not push an app download or account creation.

## Applying this to the site today

Concrete next steps when this guide gets implemented in code (not done as part of this doc):

1. Replace the hardcoded `Arial, Helvetica, sans-serif` in `src/app/globals.css` with the Geist variable already defined in `@theme inline` (`var(--font-sans)`), plus a chosen heading font via `next/font`.
2. Add the palette above as CSS custom properties in `globals.css` (`--color-ink`, `--color-teal`, `--color-pink`, `--color-peach`, `--color-paper`) alongside the existing `--background`/`--foreground` tokens, and support both light/dark via the existing `@media (prefers-color-scheme: dark)` block.
3. Get a transparent, higher-resolution logo export before using it anywhere besides a small square avatar context (see Logo section above) — the favicon/JSON-LD `logo` field in `src/lib/site-config.ts` currently points at the flattened JPEG.
