import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import {
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Image,
  BarChart3,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'ChatGPT Training 2026 | AI Training Platform van Erik van der Veen',
  description:
    'Leer ChatGPT beheersen: prompting, tekstgeneratie, data-analyse, custom GPTs en beeldgeneratie. Praktische training voor professionals.',
};

export const revalidate = 3600;

export default function ChatGPTPage() {
  const learningItems = [
    {
      icon: MessageSquare,
      title: 'Prompting Mastery',
      description:
        'Ontdek geavanceerde promptingtechnieken en best practices voor optimale resultaten met ChatGPT.',
    },
    {
      icon: Zap,
      title: 'Geavanceerde Tekstgeneratie',
      description:
        'Genereer hoogwaardige content, essays, artikelen en creatieve teksten met professionele kwaliteit.',
    },
    {
      icon: BarChart3,
      title: 'Data-Analyse en Interpretatie',
      description:
        'Analyseer gegevens, creëer visualisaties en trek inzichtelijke conclusies uit complexe datasets.',
    },
    {
      icon: Image,
      title: 'Afbeeldingen Genereren',
      description:
        'Creëer professionele afbeeldingen, logo\'s en visuele content direct vanuit tekstbeschrijvingen.',
    },
    {
      icon: CheckCircle,
      title: 'Custom GPT Development',
      description:
        'Ontwerp en train aangepaste GPT-modellen voor jouw specifieke bedrijfsbehoeften.',
    },
    {
      icon: Zap,
      title: 'API Integratie en Automatisatie',
      description:
        'Integreer ChatGPT in jouw applicaties en automatiseer bedrijfsprocessen effectief.',
    },
  ];

  const pricingItems = [
    'Volledige ChatGPT masterclass',
    'Hands-on prompting workshop',
    'Afbeeldingen genereren',
    'Custom GPT bouwen en deployen',
    'API integratie en automatisering',
    'Data-analyse voorbeelden',
    'Certificaat van deelname',
    'Levenslange toegang tot materialen',
  ];

  const faqItems = [
    {
      question: 'Wat is de beste manier om effectieve prompts te schrijven?',
      answer:
        'Effectieve prompts zijn specifiek, contextueel en goed gestructureerd. Gebruik duidelijke instructies, voorbeelden, en definieer rollen. In deze training leer je proven technieken en patterns die garanties opleveren.',
    },
    {
      question: 'Kan ik ChatGPT gebruiken voor data-analyse?',
      answer:
        'Ja, ChatGPT is uitstekend voor data-analyse. Je kunt CSV-bestanden uploaden, grafieken interpreteren en inzichten genereren. We behandelen dit uitgebreid in de training met praktische voorbeelden.',
    },
    {
      question: 'Hoe maak ik mijn eigen Custom GPT?',
      answer:
        'Custom GPTs maak je zonder programmeerkennis. Je geeft het model instructies, voegt kennis toe via bestanden, en connecteert externe tools. Je leert dit stap-voor-stap in de training.',
    },
    {
      question: 'Wat zijn de kosten van ChatGPT Pro?',
      answer:
        'ChatGPT Plus kost ongeveer €20/maand. Bedrijven kunnen API-gebaseerde oplossingen gebruiken met pay-per-token prijzen. We bespreken alle opties en ROI-berekeningen in de training.',
    },
    {
      question: 'Hoe integreer ik ChatGPT in mijn website of app?',
      answer:
        'Via OpenAI\'s API kun je ChatGPT integreren in bijna elke applicatie. We behandelen API-keys, authentificatie, error handling en best practices voor production-implementaties.',
    },
    {
      question: 'Wat zijn de limieten van ChatGPT?',
      answer:
        'ChatGPT heeft context-limieten (4K of 128K tokens), kan soms fout informatie geven, en heeft een kennisafsnij moment. We bespreken deze limieten en hoe je ermee omgaat in praktijk.',
    },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'ChatGPT Training', href: '/chatgpt' },
  ];

  return (
    <>
      <PageHero
        title="ChatGPT Training 2026"
        subtitle="Beheers de krachtigste AI-tool ter wereld"
        highlightedSubtitle="Prompting • Tekstgeneratie • Data-Analyse • Custom GPTs • Beeldgeneratie"
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
            Zowel beginners als gevorderden leren hoe ze ChatGPT optimaal kunnen
            inzetten voor hun werk en business.
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
              ChatGPT Training Package
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Een compleet trainingsprogramma om ChatGPT op een professioneel
              niveau in te zetten. Van basis tot geavanceerde technieken.
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
            Antwoorden op de meest gestelde vragen over ChatGPT training en
            toepassingen.
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
            Klaar om ChatGPT te beheersen?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Sluit je aan bij honderden professionals die ChatGPT effectief gebruiken
            voor hun werk. Start vandaag nog met jouw training.
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
