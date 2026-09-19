import Image from 'next/image';
import { CtaButton } from '@/components/cta-button';
import { siteConfig } from '@/lib/site-config';

export default function Home() {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="bg-paper/70 flex flex-col items-center gap-6 rounded-2xl border border-white/30 px-6 py-10 text-center backdrop-blur-md sm:px-12 sm:py-14">
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
            Coed Lacrosse ATX
          </h1>
          <p className="text-warm-gray max-w-lg text-lg leading-relaxed">
            Pickup lacross in Austin Texas. All skill levels welcome. No team,
            no tryouts, just drop in and play!
          </p>
          <div className="flex w-full flex-col items-center gap-4 pt-2">
            <CtaButton
              href={siteConfig.links.event}
              icon="🏆"
              variant="primary"
              external
            >
              Goals for Good
            </CtaButton>
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
      </div>
    </>
  );
}
