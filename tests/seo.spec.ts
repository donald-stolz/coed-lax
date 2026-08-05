import { test, expect } from '@playwright/test';

test('sitemap.xml is served and includes the FAQ page', async ({ request }) => {
  const response = await request.get('/sitemap.xml');
  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body).toContain('/faq');
});

test('robots.txt allows crawling and references the sitemap', async ({
  request,
}) => {
  const response = await request.get('/robots.txt');
  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body).toContain('Allow: /');
  expect(body).toContain('Sitemap:');
});

test('FAQ page renders questions with FAQPage structured data', async ({
  page,
}) => {
  const response = await page.goto('/faq');
  expect(response?.status()).toBe(200);
  await expect(
    page.getByRole('heading', { name: 'Frequently asked questions' }),
  ).toBeVisible();

  const scripts = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  const faqJsonLd = scripts
    .map((script) => JSON.parse(script))
    .find((data) => data['@type'] === 'FAQPage');

  expect(faqJsonLd).toBeTruthy();
  expect(faqJsonLd.mainEntity.length).toBeGreaterThan(0);
});
