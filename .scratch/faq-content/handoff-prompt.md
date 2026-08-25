# Handoff: grill me to write the real FAQ content

Load the `grilling` skill, then interview me to pin down the real answers for
the `/faq` page on the Coed Lax ATX site (repo: `coed-lax`, file:
`src/lib/faq.ts`). Work it as a design tree per the skill — rounds, frontier,
recommended answers — don't just ask all 5 questions flat.

## Why this exists

`src/lib/faq.ts` currently holds 5 placeholder Q&A pairs, written only to
exercise the `FAQPage` structured-data schema end-to-end. Per the MVP brief
(`~/second-brain/01 Projects/Coed Website/MVP Brief.md`), replacing them with
real content — authored with input from the rest of the board — is one of
the last blocking items before the site is ready to share with the board.
The other blocking items (CTA links, DNS) are already done or tracked
separately; this session is scoped to FAQ content only.

## Current placeholder file

```ts
export const faqs = [
  {
    question: 'Is Coed Lax ATX a league or pickup play?',
    answer:
      'Pickup play. There are no teams, no standings, and no season commitment — just show up on a scheduled day and get in a game.',
  },
  {
    question: 'What skill level do I need?',
    answer:
      'All levels welcome, from former college players to people picking up a stick for the first time. Games are organized to keep sides balanced.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Pickup sessions are pay-to-play, typically a small per-session fee to cover field time. There is no season-long membership fee.',
  },
  {
    question: 'What gear do I need to bring?',
    answer:
      'A stick, mouthguard, and eye protection at minimum. Loaner sticks are available for first-timers — just ask ahead of time.',
  },
  {
    question: 'Where and when do games happen?',
    answer:
      'Games are in Austin, TX. Exact fields and times are posted ahead of each session — check the schedule before you head out.',
  },
] as const;
```

Each `answer` also feeds the `FAQPage` JSON-LD on `/faq` verbatim (plain
text, no markup) — see `src/app/faq/page.tsx`.

## Facts already established — don't re-ask these, use them

- RSVPs and schedule updates run through a WhatsApp group, not an app or
  on-site RSVP system. The site deliberately excludes a WhatsApp CTA/link —
  people should meet in person first before being added to that group. So
  any answer that references "how do I find out when/where" needs to point
  somewhere that isn't a raw WhatsApp invite (e.g. Instagram, or "ask in
  person at a game").
- Real CTA links are now wired on the homepage: Waiver (Hyperwaiver), Store
  (SecondSlide merch), Rules doc (Google Doc), Instagram. The FAQ can
  reference "the waiver" / "the rules doc" / "the store" as things that
  exist, without needing to restate their URLs (the CTA buttons already
  link them).
- Explicitly out of scope for this site: no WhatsApp CTA, no copying the
  `coed-lax-atx-v0` draft's components or palette.

## What the interview needs to settle

Treat "should we keep these 5 questions as-is, drop any, or add any" as the
round-1 frontier question — it gates everything downstream (no point
grilling for an exact fee amount on a question that gets cut). Likely
downstream branches per question, once the question set is settled:

- **Cost** — actual per-session fee (or range), payment method, whether it's
  cash/Venmo/at-the-field.
- **Gear** — real loaner-stick process: who to ask, and how (in-person at a
  game? via the board before showing up?), since "just ask ahead of time"
  can't mean WhatsApp per the constraint above.
- **Where/when** — what the actual discovery path is for a first-timer who
  isn't in the WhatsApp group yet — Instagram? Watching for the next event
  post? — and whether that differs from how existing members get schedule
  info.
- **Skill level / league vs. pickup** — these two already read as
  reasonably accurate; confirm rather than deep-grill, unless something
  about typical turnout/team-balancing has changed.

The session is done when the frontier is empty and I've confirmed a shared
understanding of the final Q&A set — do not write `faq.ts` until then.
