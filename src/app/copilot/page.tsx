import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import {
  CheckCircle,
  ArrowRight,
  MessageSquare,
  FileText,
  BarChart3,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Microsoft Co-Pilot Training 2026 | AI Training Platform van Erik van der Veen',
  description:
    'Microsoft Co-Pilot training: Word, Excel, PowerPoint, Outlook, Teams integratie en enterprise features. Verhoog productiviteit in Microsoft 365.',
};

export const revalidate = 3600;

export default function CopilotPage() {
  const learningItems = [
    {
      icon: FileText,
      title: 'Word Co-Pilot Mastery',
      description:
        'Schrijf, bewerk en optimaliseer documenten met Co-Pilot. Automatiseer content creatie en verbetering in Word.',
    },
    {
      icon: BarChart3,
      title: 'Excel Data Analyse',
      description:
        'Analyseer complexe datasets, creëer formules, maak pivot tables en visualiseer data automatisch in Excel.',
    },
    {
      icon: FileText,
      title: 'PowerPoint Presentaties',
      description:
        'Ontwerp professionele presentaties, genereer slides en optimaliseer je visuele communicatie moeiteloos.',
    },
    {
      icon: MessageSquare,
      title: 'Outlook en Email Optimalisatie',
      description:
        'Schrijf betere emails, organiseer je inbox en verbeter je emailcommunicatie met AI assistentie.',
    },
    {
      icon: Zap,
      title: 'Teams Collaboration Features',
      description:
        'Verbeter teamwork, notuleer vergaderingen automatisch en verbeter samenwerking met Co-Pilot in Teams.',
    },
    {
      icon: CheckCircle,
      title: 'Enterprise Security & Governance',
      description:
        'Implementeer Co-Pilot veilig in je organisatie met data protection en compliance in Microsoft 365.',
    },
  ];

  const pricingItems = [
    'Volledige Microsoft Co-Pilot masterclass',
    'Word documentbewerking en optimalisatie',
    'Excel data-analyse en automatisatie',
    'PowerPoint presentation design',
    'Outlook en email workflow',
    'Teams collaboration features',
    'Enterprise deployment strategieën',
    'Certificaat van deelname',
    'Levenslange toegang tot materialen',
  ];

  const faqItems = [
    {
      question: 'Welke Microsoft 365 applicaties ondersteunen Co-Pilot?',
      answer:
        'Co-Pilot is beschikbaar in Word, Excel, PowerPoint, Outlook, Teams, OneNote en meer. In de training behandelen we de meest gebruikte applicaties met praktische voorbeelden.',
    },
    {
      question: 'Wat zijn de systeemvereisten voor Microsoft Co-Pilot?',
      answer:
        'Je hebt Microsoft 365 subscription en een Co-Pilot Pro-licentie nodig (of enterprise Co-Pilot). We bespreken alle opties, kosten en implementatie.',
    },
    {
      question: 'Kan ik Co-Pilot gebruiken voor data-analyse in Excel?',
      answer:
        'Ja, Co-Pilot in Excel is krachtig voor data-analyse. Je kunt vragen stellen over je data, formules laten genereren en visualisaties maken. Dit is een hoogtepunt van onze training.',
    },
    {
      question: 'Hoe zorg ik voor data security bij Co-Pilot in mijn organisatie?',
      answer:
        'Microsoft heeft sterke beveiligingsmaatregelen. We behandelen data privacy, compliance, permissions en best practices voor enterprise-implementatie.',
    },
    {
      question: 'Kan ik Co-Pilot gebruiken voor vergaderingen in Teams?',
      answer:
        'Ja, Co-Pilot in Teams kan vergaderingen samenvatten, actiepunten identificeren en notuleren. Dit bespaart veel tijd en verhoogt productiviteit aanzienlijk.',
    },
    {
      question: 'Wat is de kostprijs van Microsoft Co-Pilot?',
      answer:
        'Co-Pilot Pro kost ongeveer €20/maand individueel. Enterprise-opties hebben andere prijzen. We bespreken ROI en welke optie best voor jou past.',
    },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Training', href: '/training' },
    { label: 'Microsoft Co-Pilot Training', href: '/copilot' },
  ];

  return (
    <>
      <PageHero
        title="Microsoft Co-Pilot Training 2026"
        subtitle="Beheers AI in Microsoft 365 voor maximale werktempo"
        highlightedSubtitle="Word • Excel • PowerPoint • Outlook • Teams • Enterprise"
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
            Ontdek hoe je Co-Pilot kunt inzetten in alle Microsoft 365 applicaties
            om je dagelijkse werk efficiënter te maken.
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
              Microsoft Co-Pilot Training Package
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Een comprehensive training om Co-Pilot in alle Microsoft 365
              applicaties optimaal in te zetten. Perfect voor bedrijven en
              individuals.
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
            Vragen over Microsoft Co-Pilot en hoe het jouw Microsoft 365
            workflow verbetert.
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
            Klaar om Co-Pilot volledig te benutten?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Duizenden professionals gebruiken Co-Pilot om hun Microsoft 365
            efficiëntie drastisch te verhogen. Begin nu met jouw training.
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
