import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import {
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Zap,
  Lightbulb,
  Workflow,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'JetGPT Training 2026 | AI Training Platform van Erik van der Veen',
  description:
    'JetGPT training: Productiviteit boost, creatieve taken, automatisering en AI-workflows. Optimaliseer je werk met JetGPT.',
};

export const revalidate = 3600;

export default function JetGPTPage() {
  const learningItems = [
    {
      icon: Zap,
      title: 'Productiviteit Versnelling',
      description:
        'Verhoog je werksnelheid aanzienlijk door JetGPT slim in te zetten in je dagelijkse werkflow.',
    },
    {
      icon: Lightbulb,
      title: 'Creatieve Taken',
      description:
        'Genereer ideeën, schrijf creatieve content en brainstorm samen met JetGPT voor inspiratie.',
    },
    {
      icon: Workflow,
      title: 'Automatisering en Workflows',
      description:
        'Automatiseer repetitieve taken en creëer efficiënte workflows met JetGPT integraties.',
    },
    {
      icon: MessageSquare,
      title: 'Intelligente Communicatie',
      description:
        'Verbeter je communicatie door JetGPT in te zetten voor emails, berichten en presentaties.',
    },
    {
      icon: Zap,
      title: 'Tijd Besparing Technieken',
      description:
        'Leer tips en tricks om maximaal tijd te besparen en efficiënter te werken met JetGPT.',
    },
    {
      icon: CheckCircle,
      title: 'Best Practices en Use Cases',
      description:
        'Ontdek praktische use cases en best practices voor jouw specifieke branche en rol.',
    },
  ];

  const pricingItems = [
    'Volledige JetGPT training en masterclass',
    'Productiviteit optimization strategieën',
    'Creatieve content generation technieken',
    'Workflow automatisering setup',
    'Intelligente communicatie tips',
    'Branche-specifieke use cases',
    'Time management en efficiency hacks',
    'Certificaat van deelname',
    'Levenslange toegang tot materialen',
  ];

  const faqItems = [
    {
      question: 'Wat is JetGPT en hoe verschilt het van andere AI tools?',
      answer:
        'JetGPT is een gebruiksvriendelijk AI-platform gericht op productiviteit en creatieve taken. Het onderscheidt zich door zijn focus op praktische toepassingen en eenvoudig gebruik zonder technische complexiteit.',
    },
    {
      question: 'Kan ik JetGPT gebruiken voor mijn specifieke werkgebied?',
      answer:
        'Ja, JetGPT is geschikt voor diverse beroepen en industrie-sectoren. In de training geven we voorbeelden voor marketing, customer service, content creation, research en meer. Je leert hoe je het aanpast voor jouw rol.',
    },
    {
      question: 'Hoe veel tijd kan ik besparen met JetGPT?',
      answer:
        'Gebruikers besparen gemiddeld 2-3 uur per dag door JetGPT slim in te zetten. Dit varieert per rol en werktype. We geven concrete voorbeelden en metingen in de training.',
    },
    {
      question: 'Is JetGPT geschikt voor beginners?',
      answer:
        'Absoluut! JetGPT is ontworpen voor gebruiksgemak. Je hebt geen technische kennis nodig. Onze training is geschikt voor beginners en gevorderden.',
    },
    {
      question: 'Kan ik JetGPT integreren met andere tools?',
      answer:
        'Ja, JetGPT integreert met populaire tools zoals Slack, Zapier, Google Workspace en meer. We behandelen integratie setup en automatisering in de training.',
    },
    {
      question: 'Wat zijn de kostprijs opties voor JetGPT?',
      answer:
        'JetGPT biedt verschiedene plannen, van gratis tot premium. We bespreken alle opties, features per plan, en helpen je te bepalen welk plan het beste voor jou past.',
    },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Training', href: '/training' },
    { label: 'JetGPT Training', href: '/jetgpt' },
  ];

  return (
    <>
      <PageHero
        title="JetGPT Training 2026"
        subtitle="Verhoog je productiviteit met intelligente AI-automatisering"
        highlightedSubtitle="Productiviteit • Creativiteit • Automatisering • Workflows"
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
            Ontdek hoe je JetGPT kunt gebruiken om sneller te werken, meer
            tijd te besparen en slimmer te werken.
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
              JetGPT Training Package
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Een praktische training om JetGPT volledig in te zetten voor
              maximale productiviteit en efficiëntie in je dagelijkse werk.
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
            Antwoorden op vragen over JetGPT en hoe het jouw werk kan
            transformeren.
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
            Klaar om je productiviteit te verhogen met JetGPT?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Honderden professionals besparen uren per week met JetGPT. Begin
            vandaag nog met jouw training en transformeer je werkdag.
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
