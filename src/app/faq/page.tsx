import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';
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
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-16 sm:px-16">
      <JsonLd data={faqJsonLd} />
      <h1 className="text-3xl font-semibold tracking-tight">
        Frequently asked questions
      </h1>
      <dl className="flex flex-col gap-8">
        {faqs.map((faq) => (
          <div key={faq.question} className="flex flex-col gap-2">
            <dt className="text-lg font-medium">{faq.question}</dt>
            <dd className="text-zinc-600 dark:text-zinc-400">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
