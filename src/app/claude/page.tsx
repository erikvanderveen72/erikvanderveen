import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import {
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Code,
  BookOpen,
  Brain,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Claude Training 2026 | AI Training Platform van Erik van der Veen',
  description:
    'Claude AI training: documentanalyse, codeerondersteuning, Artifacts, Deep Research en Projects. Praktische training voor professionals.',
};

export const revalidate = 3600;

export default function ClaudePage() {
  const learningItems = [
    {
      icon: BookOpen,
      title: 'Documentanalyse',
      description:
        'Analyseer grote documenten, boeken en rapporten. Claude verwerkt tot 200.000 tokens in één keer.',
    },
    {
      icon: Code,
      title: 'Code-ondersteuning',
      description:
        'Hulp bij debugging, code review, refactoring en het implementeren van complexe functionaliteit.',
    },
    {
      icon: Brain,
      title: 'Deep Research',
      description:
        'Laat Claude diepgaand onderzoek doen: meerdere bronnen combineren tot uitgebreide analyses.',
    },
    {
      icon: MessageSquare,
      title: 'Artifacts en Projects',
      description:
        'Maak interactieve componenten, werk samen in Projects en organiseer je werk overzichtelijk.',
    },
    {
      icon: Brain,
      title: 'Extended Thinking',
      description:
        'Gebruik Claude\'s denkmodus voor complexe vraagstukken en stapsgewijze analyses.',
    },
    {
      icon: CheckCircle,
      title: 'Effectief prompten',
      description:
        'Leer hoe je Claude het beste aanstuurt: van simpele vragen tot geavanceerde workflows.',
    },
  ];

  const pricingItems = [
    'Volledige Claude masterclass (3 uur)',
    'Documentanalyse en grote bestanden verwerken',
    'Deep Research en extended thinking',
    'Artifacts en Projects in de praktijk',
    'Effectief prompten voor jouw vakgebied',
    'Code-ondersteuning en automatisering',
    'Hands-on oefeningen met eigen casuïstiek',
    'Inclusief reistijd en reiskosten',
    'Niet tevreden? Geen factuur!',
  ];

  const faqItems = [
    {
      question: 'Wat maakt Claude anders dan ChatGPT?',
      answer:
        'Claude kan zeer grote documenten in één keer verwerken, heeft een sterke denkmodus (extended thinking) en staat bekend om zorgvuldige, genuanceerde antwoorden. In de training laten we zien wanneer Claude de betere keuze is.',
    },
    {
      question: 'Kan ik hele documenten laten analyseren door Claude?',
      answer:
        'Ja, Claude verwerkt tot 200.000 tokens in één keer. Dat is roughly een boek van 500 pagina\'s. Ideaal voor het analyseren van rapporten, contracten, onderzoeken of codebases.',
    },
    {
      question: 'Wat zijn Artifacts en Projects?',
      answer:
        'Artifacts zijn interactieve outputs die Claude maakt: code, tabellen, grafieken of complete webpagina\'s. Met Projects organiseer je gesprekken en bestanden rondom een thema. Beide komen uitgebreid aan bod.',
    },
    {
      question: 'Wat is Deep Research?',
      answer:
        'Met Deep Research laat je Claude zelfstandig onderzoek doen. Het doorzoekt meerdere bronnen, combineert informatie en levert een uitgebreid rapport op. Zeer geschikt voor marktonderzoek, concurrentieanalyse of literatuuronderzoek.',
    },
    {
      question: 'Heb ik een betaald abonnement nodig?',
      answer:
        'De gratis versie van Claude is al krachtig voor veel taken. Voor langere documenten, Deep Research en extended thinking is een Pro-abonnement aan te raden. We bespreken de opties in de training.',
    },
    {
      question: 'Is deze training ook geschikt voor niet-technische medewerkers?',
      answer:
        'Absoluut. De training wordt afgestemd op het niveau van de groep. Of je nu in marketing, HR, finance of IT werkt: je leert Claude inzetten voor jouw dagelijkse werkzaamheden.',
    },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Claude Training', href: '/claude' },
  ];

  return (
    <>
      <PageHero
        title="Claude Training"
        subtitle="Leer werken met Anthropic's krachtigste AI-model"
        highlightedSubtitle="Documentanalyse • Deep Research • Artifacts • Projects • Extended Thinking"
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
            Ontdek wat Claude kan betekenen voor jouw werk: van documentanalyse
            tot Deep Research en slimme automatisering.
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
              Claude Training
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Een praktische training in Claude. Van effectief prompten tot
              documentanalyse, Deep Research en slimme workflows.
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
            Vragen over Claude en hoe je ermee aan de slag gaat.
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
            Klaar om Claude volledig te beheersen?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Boek een in-company Claude training en leer je team in drie uur
            effectief werken met dit krachtige AI-model.
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
