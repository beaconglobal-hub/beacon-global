import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { SITE_URL } from '@/lib/site';
import './globals.css';

// Bundled fonts keep builds and visitors independent of Google Fonts.
const inter = localFont({
  src: [
    { path: '../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2', weight: '400' },
    { path: '../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2', weight: '500' },
    { path: '../node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2', weight: '600' },
    { path: '../node_modules/@fontsource/inter/files/inter-latin-700-normal.woff2', weight: '700' },
    { path: '../node_modules/@fontsource/inter/files/inter-latin-800-normal.woff2', weight: '800' },
  ],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Beacon Global, Inc. | 501(c)(3) non-profit operating God’s Beacon',
    template: '%s | Beacon Global, Inc.',
  },
  description:
    'Beacon Global, Inc. is a 501(c)(3) non-profit organization based in Libertyville, Illinois. We operate God’s Beacon, a digital platform for sermons and worship content.',
  openGraph: {
    type: 'website',
    siteName: 'Beacon Global, Inc.',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Beacon Global, Inc. — a 501(c)(3) non-profit that operates God’s Beacon' }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = { themeColor: '#07263B', colorScheme: 'dark' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-3 focus:font-bold focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
