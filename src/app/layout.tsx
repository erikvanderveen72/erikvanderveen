import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const baseUrl = 'https://erikvanderveen.nl';
const title = 'AI Trainingen voor Organisaties 2026 | Erik van der Veen';
const description = 'In-company AI trainingen: ChatGPT, Google Gemini, Microsoft Copilot en Claude. 175+ trainingen ervaring. Direct toepasbaar, op maat gemaakt voor jouw team.';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: '%s | Erik van der Veen | AI Training',
  },
  description,
  keywords: ['AI training', 'ChatGPT training', 'Gemini training', 'Copilot training', 'Claude training', 'AI cursus', 'AI workshop', 'Erik van der Veen'],
  authors: [{ name: 'Erik van der Veen', url: baseUrl }],
  creator: 'Erik van der Veen',
  publisher: 'Erik van der Veen | AI Training',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large' as const,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: baseUrl,
    title,
    description,
    siteName: 'Erik van der Veen | AI Training',
    images: [{ url: `${baseUrl}/images/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title, description },
  alternates: {
    canonical: baseUrl,
    languages: { 'nl-NL': baseUrl },
  },
  category: 'Education',
  applicationName: 'Erik van der Veen | AI Training',
  referrer: 'origin-when-cross-origin',
  formatDetection: { email: false, telephone: false, address: false },
  other: {
    'geo.region': 'NL',
    'geo.country': 'NL',
    'geo.placename': 'Nederland',
    'geo.position': '52.3676;4.9041',
    'ICBM': '52.3676, 4.9041',
    'content-language': 'nl',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'Erik van der Veen | AI Training',
        description,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${baseUrl}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
        inLanguage: 'nl-NL',
      },
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'Erik van der Veen | AI Training & Consultancy',
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+31-6-10204090',
          contactType: 'customer service',
          availableLanguage: 'Dutch',
        },
        sameAs: ['https://linkedin.com/in/erikvanderveen', 'https://chatgptexpert.com'],
      },
      {
        '@type': 'Person',
        '@id': `${baseUrl}/#person`,
        name: 'Erik van der Veen',
        url: `${baseUrl}/over-erik`,
        jobTitle: 'AI Trainer & Consultant',
        worksFor: { '@type': 'Organization', name: 'Erik van der Veen | AI Training' },
        sameAs: ['https://linkedin.com/in/erikvanderveen', 'https://chatgptexpert.com'],
      },
    ],
  };

  return (
    <html lang="nl" className={inter.variable}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SG2ESBXY35" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-SG2ESBXY35');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#7c3aed" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="bg-white text-stone-900 antialiased">
        <Navbar />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
