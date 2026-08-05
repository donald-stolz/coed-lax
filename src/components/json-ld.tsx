type JsonLdProps = {
  data: Record<string, unknown>;
};

// Structured data must be a literal <script> tag rendered on the server —
// see https://nextjs.org/docs/app/guides/json-ld
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
