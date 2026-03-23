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
  title: 'Google Gemini Training 2026 | AI Training Platform van Erik van der Veen',
  description:
    'Ontdek Google Gemini: Google Workspace integratie, multimodaal leren, Gemini Advanced, en het volledige Google ecosysteem. Training voor professionals.',
};

export const revalidate = 3600;

export default function GeminiPage() {
  const learningItems = [
    {
      icon: Layers,
      title: 'Google Workspace Integratie',
      description:
        'Integreer Gemini naadloos in Gmail, Docs, Sheets, Slides en Calendar voor dagelijkse productiviteit.',
    },
    {
      icon: MessageSquare,
      title: 'Multimodaal Leren',
      description:
        'Werk met afbeeldingen, video\'s, audio en tekst tegelijk. Verwerk meerdere formaten in één conversatie.',
    },
    {
      icon: Zap,
      title: 'Gemini Advanced Functies',
      description:
        'Ontdek de krachtige mogelijkheden van Gemini Advanced voor complexe taken en diepere analyses.',
    },
    {
      icon: BarChart3,
      title: 'Data Verwerking en Analyse',
      description:
        'Analyseer grote datasets in Google Sheets, creëer rapporten en haal inzichten uit je gegevens.',
    },
    {
      icon: CheckCircle,
      title: 'Google Ecosysteem Optimalisatie',
      description:
        'Maximize je productiviteit door Gemini optimaal in te zetten met alle Google-tools.',
    },
    {
      icon: Zap,
      title: 'Collaboration en Team Workflows',
      description:
        'Verbeter teamwerk en samenwerking door Gemini in je collaborative processen in te bouwen.',
    },
  ];

  const pricingItems = [
    'Volledige Google Gemini masterclass',
    'Workspace integratie training (Gmail, Docs, Sheets)',
    'Gemini Advanced setup en optimalisatie',
    'Multimodale content verwerking',
    'Data-analyse in Google Sheets',
    'Team collaboration strategieën',
    'Certificaat van deelname',
    'Levenslange toegang tot materialen',
  ];

  const faqItems = [
    {
      question: 'Wat is het verschil tussen Gemini Free en Gemini Advanced?',
      answer:
        'Gemini Free biedt basisfuncties, terwijl Gemini Advanced meer queries, langere context windows en betere reasoning biedt. In deze training behandelen we beide en helpen we je het juiste plan kiezen.',
    },
    {
      question: 'Kan ik Gemini gebruiken in Google Workspace?',
      answer:
        'Ja, Gemini is volledig geïntegreerd in Google Workspace. Je kunt het gebruiken in Gmail, Docs, Sheets, Slides en meer. We geven praktische voorbeelden voor elke applicatie.',
    },
    {
      question: 'Hoe werkt multimodaal leren met Gemini?',
      answer:
        'Gemini kan tegelijk met tekst, afbeeldingen, video en audio werken. Dit opent mogelijkheden voor complex content analysis. We demonstreren dit met echte use cases.',
    },
    {
      question: 'Wat zijn de voordelen van Google Gemini versus ChatGPT?',
      answer:
        'Gemini integreert perfect in Google Workspace, heeft sterke multimodal capabilities, en biedt real-time data toegang. Het is ideaal voor Google-gebruikers. We vergelijken beide in de training.',
    },
    {
      question: 'Kan ik Gemini gebruiken voor data-analyse?',
      answer:
        'Ja, Gemini in Google Sheets kan data analyseren, grafieken creëren en inzichten genereren. Perfect voor bedrijfsrapportage en besluitvorming. Dit is een kern onderdeel van onze training.',
    },
    {
      question: 'Hoe bescherm ik mijn privacy bij gebruik van Gemini?',
      answer:
        'Google respecteert jouw data privacy. We bespreken beveiligingsinstellingen, data handling policies en best practices voor enterprise-gebruik.',
    },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Training', href: '/training' },
    { label: 'Google Gemini Training', href: '/gemini' },
  ];

  return (
    <>
      <PageHero
        title="Google Gemini Training 2026"
        subtitle="Beheers Google's AI-assistent voor maximale productiviteit"
        highlightedSubtitle="Google Workspace • Multimodaal • Gemini Advanced • Data-Analyse"
        badge="Actueel 2026"
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
            Leer hoe je Google Gemini maximaal kunt benutten voor jouw dagelijkse
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
              Google Gemini Training Package
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Een complete training om Google Gemini en Workspace integratie
              volledig te beheersen. Van basis tot geavanceerde strategieën.
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
            Antwoorden op populaire vragen over Google Gemini en training.
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
            Ontdek hoe duizenden professionals Google Gemini gebruiken om hun
            productiviteit te verhogen. Begin je training nu.
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
