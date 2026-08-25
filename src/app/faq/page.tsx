import Link from 'next/link';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';
import { CtaButton } from '@/components/cta-button';
import { FaqList, FaqCardChevron, faqAccentColor } from '@/components/faq-list';
import { faqs } from '@/lib/faq';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'FAQ',
  description: `Answers to common questions about pickup lacrosse with ${siteConfig.name} in ${siteConfig.areaServed}.`,
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      <div className="flex flex-col gap-6">
        <Link
          href="/"
          className="text-ink/70 hover:text-ink bg-paper/70 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold backdrop-blur-md transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Back
        </Link>

        <h1 className="font-heading text-ink bg-paper/70 w-full rounded-2xl border border-white/30 px-6 py-4 text-center text-5xl font-bold tracking-tight backdrop-blur-md">
          FAQ
        </h1>

        <FaqList faqs={faqs} />

        <details
          className={`bg-paper/70 group rounded-2xl border border-white/30 px-6 py-5 backdrop-blur-md ${faqAccentColor(faqs.length)} border-l-4`}
        >
          <summary className="text-ink flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold marker:content-none">
            Ready to play?
            <FaqCardChevron />
          </summary>
          <div className="mt-4 flex flex-col items-center gap-4 text-center">
            <CtaButton
              href={siteConfig.social.instagram}
              icon="📸"
              variant="secondary"
              external
            >
              Follow on Instagram
            </CtaButton>
            <CtaButton
              href={siteConfig.links.waiver}
              icon="✍️"
              variant="primary"
              external
            >
              Sign Waiver
            </CtaButton>
          </div>
        </details>
      </div>
    </>
  );
}
