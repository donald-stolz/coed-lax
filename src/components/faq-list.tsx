const accentColors = ['border-l-teal', 'border-l-pink', 'border-l-peach'];

type Faq = {
  question: string;
  answer: string;
};

export function faqAccentColor(i: number) {
  return accentColors[i % accentColors.length];
}

export function FaqCardChevron() {
  return (
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
      className="shrink-0 transition-transform group-open:rotate-180"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function FaqList({ faqs }: { faqs: readonly Faq[] }) {
  return (
    <>
      {faqs.map((faq, i) => (
        <details
          key={faq.question}
          className={`bg-paper/70 group rounded-2xl border border-white/30 px-6 py-5 backdrop-blur-md ${faqAccentColor(i)} border-l-4`}
        >
          <summary className="text-ink flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold marker:content-none">
            {faq.question}
            <FaqCardChevron />
          </summary>
          <p className="text-warm-gray text-md mt-2.5 leading-relaxed">
            {faq.answer}
          </p>
        </details>
      ))}
    </>
  );
}
