import type { Metadata } from 'next';
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { JsonLd } from '@/components/json-ld';
import { PhotoWall } from '@/components/photo-wall';
import { siteConfig } from '@/lib/site-config';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['500', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Pickup Lacrosse in Austin, TX`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Pickup Lacrosse in Austin, TX`,
    description: siteConfig.description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Pickup Lacrosse in Austin, TX`,
    description: siteConfig.description,
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsOrganization',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  sport: siteConfig.sport,
  areaServed: siteConfig.areaServed,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  ...(siteConfig.social.instagram && {
    sameAs: [siteConfig.social.instagram],
  }),
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationJsonLd} />
        <PhotoWall />
        <div className="relative z-10 mx-auto flex w-full max-w-xl flex-1 flex-col px-6 py-16 sm:px-16">
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
