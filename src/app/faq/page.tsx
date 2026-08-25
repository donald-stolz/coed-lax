import Link from 'next/link';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';
import { CtaButton } from '@/components/cta-button';
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

const accentColors = ['border-l-teal', 'border-l-pink', 'border-l-peach'];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      <div className="flex flex-col gap-8">
        <Link
          href="/"
          className="text-paper/80 hover:text-paper inline-flex w-fit items-center gap-2 text-sm font-semibold drop-shadow transition-colors"
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

        <h1 className="font-heading text-paper text-3xl font-bold tracking-tight drop-shadow">
          Frequently asked questions
        </h1>

        <dl className="flex flex-col gap-5">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`bg-paper/70 rounded-2xl border border-white/30 px-6 py-5 backdrop-blur-md ${accentColors[i % accentColors.length]} border-l-4`}
            >
              <dt className="text-ink mb-1.5 font-bold">{faq.question}</dt>
              <dd className="text-warm-gray text-sm leading-relaxed">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>

        <div className="bg-paper/70 flex flex-col items-center gap-4 rounded-2xl border border-white/30 px-6 py-6 text-center backdrop-blur-md">
          <p className="text-ink text-sm font-semibold">Ready to play?</p>
          <CtaButton
            href={siteConfig.links.waiver}
            icon="✍️"
            variant="primary"
            external
          >
            Sign Waiver
          </CtaButton>
          <CtaButton
            href={siteConfig.social.instagram}
            icon="📸"
            variant="secondary"
            external
          >
            Follow on Instagram
          </CtaButton>
        </div>
      </div>
    </>
  );
}
