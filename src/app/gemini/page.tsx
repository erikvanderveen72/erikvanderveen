import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import {
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Layers,
  BarChart3,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Google Gemini Training | AI Training Platform van Erik van der Veen',
  description:
    'Google Gemini training: Workspace integratie, multimodaal werken, Gemini Advanced en data-analyse. Praktische training voor professionals.',
};

export const revalidate = 3600;

export default function GeminiPage() {
  const learningItems = [
    {
      icon: Layers,
      title: 'Gemini in Google Workspace',
      description:
        'Gebruik Gemini in Gmail, Docs, Sheets, Slides en Calendar om je dagelijkse werk sneller te doen.',
    },
    {
      icon: MessageSquare,
      title: 'Multimodaal werken',
      description:
        'Werk met afbeeldingen, video\'s, audio en tekst tegelijk. Verwerk meerdere formaten in één gesprek.',
    },
    {
      icon: Zap,
      title: 'Gemini Advanced',
      description:
        'Ontdek de geavanceerde mogelijkheden van Gemini Advanced voor complexe taken en diepgaande analyses.',
    },
    {
      icon: BarChart3,
      title: 'Data-analyse in Sheets',
      description:
        'Analyseer datasets in Google Sheets, maak rapporten en haal bruikbare inzichten uit je gegevens.',
    },
    {
      icon: CheckCircle,
      title: 'Effectief prompten',
      description:
        'Leer hoe je Gemini het beste aanstuurt met de juiste prompts voor jouw dagelijkse werkzaamheden.',
    },
    {
      icon: Zap,
      title: 'Samenwerken met Gemini',
      description:
        'Verbeter teamwerk en samenwerking door Gemini in te zetten in je gezamenlijke werkprocessen.',
    },
  ];

  const pricingItems = [
    'Volledige Google Gemini masterclass',
    'Gemini in Gmail, Docs, Sheets en Slides',
    'Gemini Advanced inrichten en gebruiken',
    'Multimodaal werken met tekst, beeld en video',
    'Data-analyse en rapportages in Sheets',
    'Hands-on oefeningen met eigen casuïstiek',
    'Inclusief reistijd en reiskosten',
    'Niet tevreden? Geen factuur!',
  ];

  const faqItems = [
    {
      question: 'Wat is het verschil tussen Gemini en Gemini Advanced?',
      answer:
        'De gratis versie van Gemini biedt basisfuncties. Gemini Advanced biedt meer mogelijkheden, langere gesprekken en betere analyses. In de training behandelen we beide en helpen we je de juiste keuze maken.',
    },
    {
      question: 'Kan ik Gemini gebruiken in Google Workspace?',
      answer:
        'Ja, Gemini is volledig geïntegreerd in Google Workspace. Je kunt het gebruiken in Gmail, Docs, Sheets, Slides en meer. We laten praktische voorbeelden zien voor elke applicatie.',
    },
    {
      question: 'Hoe werkt multimodaal werken met Gemini?',
      answer:
        'Gemini kan tegelijk met tekst, afbeeldingen, video en audio werken. Dit biedt veel mogelijkheden voor het analyseren en verwerken van verschillende soorten content. We laten dit zien met praktijkvoorbeelden.',
    },
    {
      question: 'Wat zijn de voordelen van Google Gemini ten opzichte van ChatGPT?',
      answer:
        'Gemini werkt naadloos samen met Google Workspace, kan goed overweg met verschillende mediatypen en biedt directe toegang tot actuele informatie. Ideaal als je al met Google-tools werkt. We vergelijken beide in de training.',
    },
    {
      question: 'Kan ik Gemini gebruiken voor data-analyse?',
      answer:
        'Ja, Gemini in Google Sheets kan data analyseren, grafieken maken en inzichten genereren. Zeer geschikt voor bedrijfsrapportage en besluitvorming. Dit komt uitgebreid aan bod in de training.',
    },
    {
      question: 'Hoe zit het met privacy bij gebruik van Gemini?',
      answer:
        'Google heeft uitgebreide beveiligingsmaatregelen. We bespreken privacy-instellingen, hoe Google omgaat met je gegevens en best practices voor zakelijk gebruik.',
    },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Google Gemini Training', href: '/gemini' },
  ];

  return (
    <>
      <PageHero
        title="Google Gemini Training"
        subtitle="Beheers Google's AI-assistent voor maximale productiviteit"
        highlightedSubtitle="Google Workspace • Multimodaal • Gemini Advanced • Data-Analyse"
        showBreadcrumbs
        breadcrumbs={breadcrumbs}
      />

      {/* Wat leer je section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Wat leer je in deze training?
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Leer hoe je Google Gemini optimaal kunt inzetten voor jouw dagelijkse
            werk en professionele groei.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 border border-stone-200 rounded-lg hover:border-primary hover:shadow-lg transition-all"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-stone-50 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Google Gemini Training
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Een praktische training om Google Gemini en Workspace-integratie
              volledig te beheersen. Van basis tot geavanceerde technieken.
            </p>
            <div className="text-4xl font-bold text-primary mb-2">€975,-</div>
            <p className="text-text-muted mb-8">excl. BTW</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold"
            >
              Inschrijven <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {pricingItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-stone-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Vragen over Google Gemini en hoe het jouw werk kan verbeteren.
          </p>
        </div>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="p-6 border border-stone-200 rounded-lg hover:border-primary transition-colors group"
            >
              <summary className="cursor-pointer font-semibold text-stone-900 flex items-center justify-between">
                {item.question}
                <span className="text-primary group-open:rotate-180 transition-transform">
                  ↓
                </span>
              </summary>
              <p className="mt-4 text-text-muted leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <FAQSchema items={faqItems} />
      </section>

      {/* CTA section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar om Google Gemini te beheersen?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Boek een in-company Gemini training en leer je team Google's
            AI-assistent effectief inzetten voor hun dagelijkse werk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg hover:bg-stone-100 transition-colors font-semibold"
          >
            Neem contact op <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
