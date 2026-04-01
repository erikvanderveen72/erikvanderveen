import { Metadata } from 'next';
import AiReadinessScan from '@/components/AiReadinessScan';

export const metadata: Metadata = {
  title: 'Gratis AI Readiness Scan | Test hoe AI-klaar jouw organisatie is',
  description: 'Doe de gratis AI Readiness Scan en ontdek in 2 minuten hoe AI-klaar jouw organisatie is. Ontvang persoonlijke aanbevelingen en tips om AI succesvol in te zetten.',
  openGraph: {
    title: 'Gratis AI Readiness Scan | Erik van der Veen',
    description: 'Ontdek in 2 minuten hoe AI-klaar jouw organisatie is. Gratis scan met persoonlijke aanbevelingen.',
  },
  alternates: {
    canonical: 'https://erikvanderveen.nl/ai-scan',
  },
};

export default function AiScanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-950 pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-500 to-transparent rounded-full blur-3xl opacity-30 animate-blob" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-br from-purple-500 to-transparent rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>
        <div className="absolute inset-0 plus-pattern" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-stone-900/50 backdrop-blur border border-violet-500/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-stone-300">Gratis — 2 minuten — direct resultaat</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            AI Readiness{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Scan
            </span>
          </h1>
          <p className="text-lg text-stone-300 max-w-2xl mx-auto">
            Ontdek hoe AI-klaar jouw organisatie is en krijg concrete aanbevelingen om AI succesvol in te zetten.
          </p>
        </div>
      </section>

      {/* Scan */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <AiReadinessScan />
      </section>

      {/* Trust indicators */}
      <section className="py-12 bg-stone-50 border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-stone-400 text-sm mb-8">
            Deze scan is ontwikkeld op basis van 175+ AI trainingen bij organisaties als UWV, Shell en Rabobank
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-extrabold text-stone-900">175+</div>
              <div className="text-xs text-stone-500">Trainingen gegeven</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-stone-900">8,9</div>
              <div className="text-xs text-stone-500">Gem. waardering</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-stone-900">25</div>
              <div className="text-xs text-stone-500">Jaar ervaring</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-stone-900">22K+</div>
              <div className="text-xs text-stone-500">LinkedIn volgers</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
