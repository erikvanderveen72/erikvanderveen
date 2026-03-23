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
    'Claude AI training: langdocument analyse, codeerondersteunig, constitutional AI, Artifacts en diepgaande reasoning. Training voor developers en professionals.',
};

export const revalidate = 3600;

export default function ClaudePage() {
  const learningItems = [
    {
      icon: BookOpen,
      title: 'Langdocument Analyse',
      description:
        'Analyseer grote documenten, boeken en rapporten. Haal inzichten uit honderden pagina\'s tegelijk.',
    },
    {
      icon: Code,
      title: 'Geavanceerde Coding Assistentie',
      description:
        'Krijg hulp bij debugging, code review, refactoring en implementatie van complexe algoritmes.',
    },
    {
      icon: Brain,
      title: 'Constitutional AI Beginselen',
      description:
        'Begrijp hoe Claude werkt met ethische richtlijnen en verantwoorde AI-principes.',
    },
    {
      icon: MessageSquare,
      title: 'Artifacts en Rich Output',
      description:
        'Creëer interactieve componenten, HTML-interfaces en gestructureerde outputs met Artifacts.',
    },
    {
      icon: Brain,
      title: 'Diepgaande Reasoning',
      description:
        'Werk met Claude\'s extended thinking voor complexe problem-solving en multi-stap analyses.',
    },
    {
      icon: CheckCircle,
      title: 'API Integratie en Productie',
      description:
        'Integreer Claude in jouw applicaties via API met best practices voor productie-implementatie.',
    },
  ];

  const pricingItems = [
    'Volledige Claude AI masterclass',
    'Langdocument analyse technieken',
    'Geavanceerde coding workshops',
    'Constitutional AI en ethische richtlijnen',
    'Artifacts en custom outputs',
    'Extended thinking en reasoning',
    'API integration en best practices',
    'Certificaat van deelname',
    'Levenslange toegang tot materialen',
  ];

  const faqItems = [
    {
      question: 'Wat maakt Claude anders dan andere AI-modellen?',
      answer:
        'Claude staat bekend om lange context windows (honderden duizenden tokens), sterke reasoning abilities, en constitutional AI training. We bespreken deze voordelen gedetailleerd in de training.',
    },
    {
      question: 'Kan ik Claude gebruiken voor langdocument analyse?',
      answer:
        'Ja, Claude kan tot 200K tokens (ongeveer 150.000 woorden) in één keer verwerken. Dit is ideaal voor boeken, rapporten en volledige codebases. Dit is een kernonderdeel van de training.',
    },
    {
      question: 'Hoe goed is Claude voor programmering?',
      answer:
        'Claude is uitstekend voor coding. Het kan debugging helpen, code review geven, refactoring suggereren en complete features implementeren. Veel developers kiezen Claude voor code generation.',
    },
    {
      question: 'Wat zijn Artifacts en hoe gebruik ik ze?',
      answer:
        'Artifacts zijn door Claude gegenereerde code, HTML of componenten die direct weergegeven kunnen worden. Ze zijn perfect voor prototyping en demonstratie. We geven veel praktische voorbeelden.',
    },
    {
      question: 'Hoe integreer ik Claude API in mijn applicatie?',
      answer:
        'Via Anthropic\'s API kun je Claude in bijna elk project integreren. We behandelen authentication, rate limiting, error handling en production best practices.',
    },
    {
      question: 'Wat is "constitutional AI" en waarom is het belangrijk?',
      answer:
        'Constitutional AI betekent dat Claude getraind is met ethische richtlijnen. Dit resulteert in responsabele, eerlijke outputs. We bespreken wat dit betekent en hoe het je benefits.',
    },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Training', href: '/training' },
    { label: 'Claude Training', href: '/claude' },
  ];

  return (
    <>
      <PageHero
        title="Claude Training 2026"
        subtitle="Beheers Anthropic's meest capabele AI-model"
        highlightedSubtitle="Langdocumenten • Coding • Constitutional AI • Artifacts • Reasoning"
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
            Ontdek de volle mogelijkheden van Claude voor coding, document-analyse
            en geavanceerde AI-toepassingen.
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
              Claude Training Package
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Een complete masterclass in Claude AI. Van basis prompting tot
              geavanceerde API-integraties en complex problem solving.
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
            Vragen over Claude, capabilities en hoe je ermee aan de slag gaat.
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
            Sluit je aan bij developers en professionals die Claude gebruiken voor
            geavanceerde AI-toepassingen. Start je training vandaag.
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
