import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: { template: '%s | Erik van der Veen — AI Training', default: 'AI Trainingen voor Organisaties 2026 | Erik van der Veen' },
  description: 'In-company AI trainingen: ChatGPT, Google Gemini, Microsoft Copilot en Claude. 175+ trainingen ervaring. Direct toepasbaar, op maat gemaakt voor jouw team.',
  keywords: ['AI training', 'ChatGPT training', 'Gemini training', 'Copilot training', 'Claude training', 'AI cursus', 'AI workshop', 'Erik van der Veen'],
  metadataBase: new URL('https://erikvanderveen.nl'),
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://erikvanderveen.nl',
    siteName: 'Erik van der Veen — AI Training',
    title: 'AI Trainingen voor Organisaties 2026 | Erik van der Veen',
    description: 'In-company AI trainingen: ChatGPT, Google Gemini, Microsoft Copilot en Claude. 175+ trainingen ervaring.',
    images: [{ url: 'https://chatgptexpert.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://erikvanderveen.nl', languages: { 'nl-NL': 'https://erikvanderveen.nl' } },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' as const },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="geo.country" content="NL" />
        <meta name="geo.placename" content="Netherlands" />
        <meta name="geo.position" content="52.3676;4.9041" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  name: 'Erik van der Veen — AI Training',
                  url: 'https://erikvanderveen.nl',
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://erikvanderveen.nl/?q={search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': 'Organization',
                  name: 'Erik van der Veen — AI Training & Consultancy',
                  url: 'https://erikvanderveen.nl',
                  logo: 'https://erikvanderveen.nl/logo.png',
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
                  name: 'Erik van der Veen',
                  url: 'https://erikvanderveen.nl/over-erik',
                  jobTitle: 'AI Trainer & Consultant',
                  worksFor: { '@type': 'Organization', name: 'Erik van der Veen — AI Training' },
                  sameAs: ['https://linkedin.com/in/erikvanderveen', 'https://chatgptexpert.com'],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
