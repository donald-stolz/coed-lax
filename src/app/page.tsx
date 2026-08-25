import Image from 'next/image';
import { CtaButton } from '@/components/cta-button';
import { siteConfig } from '@/lib/site-config';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative flex flex-1 overflow-hidden px-6 py-20 text-center sm:px-16 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,var(--pink)_0%,var(--teal)_55%,var(--peach)_100%)]" />
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
          <div className="bg-paper rounded-full p-2 shadow-lg">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={120}
              height={120}
              className="rounded-full"
              priority
            />
          </div>
          <h1 className="font-heading text-ink text-4xl font-bold tracking-tight sm:text-5xl">
            Coed Pickup Lacrosse in Austin, TX
          </h1>
          <p className="text-ink/80 max-w-lg text-lg leading-relaxed">
            Grab your crew or come solo — all skill levels welcome, from
            first-timers to former college players. No team, no tryouts, just
            drop in and play.
          </p>
          <div className="flex w-full flex-col items-center gap-4 pt-2">
            <CtaButton
              href={siteConfig.social.instagram}
              icon="📸"
              variant="secondary"
              external
            >
              Follow on Instagram
            </CtaButton>
            <CtaButton href="/faq" icon="❓" variant="primary">
              Read the FAQ
            </CtaButton>
            <CtaButton
              href={siteConfig.links.store}
              icon="🛒"
              variant="secondary"
              external
            >
              Shop the Store
            </CtaButton>
            <CtaButton
              href={siteConfig.links.rules}
              icon="📋"
              variant="primary"
              external
            >
              Read the Rules
            </CtaButton>
            <CtaButton
              href={siteConfig.links.waiver}
              icon="✍️"
              variant="secondary"
              external
            >
              Sign Waiver
            </CtaButton>
          </div>
        </div>
      </section>

      <footer className="px-6 py-4 text-center text-sm text-zinc-500 sm:px-16 dark:text-zinc-500">
        {siteConfig.name} &middot; {siteConfig.areaServed}
      </footer>
    </div>
  );
}
