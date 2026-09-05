import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';
import { siteConfig } from '@/lib/content/site';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'software engineering partner', 'ERP development', 'Next.js development',
    'NestJS', 'AI integration', 'legacy system modernization',
    'hospital management system', 'real estate ERP', 'custom software Pakistan',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  areaServed: 'Worldwide',
  knowsAbout: [
    'Custom software development', 'ERP systems', 'AI integration',
    'Legacy system modernization', 'Web application development',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="min-h-screen bg-white font-sans text-ink">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Reveal />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
