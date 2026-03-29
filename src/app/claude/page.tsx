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
  Monitor,
  Smartphone,
  Puzzle,
  Terminal,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Claude Training 2026 | AI Training Platform van Erik van der Veen',
  description:
    'Claude AI training: Cowork, Claude Code, Dispatch, Skills, documentanalyse, Deep Research en meer. Praktische training voor professionals.',
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
    'Claude Cowork: taken laten uitvoeren op je computer',
    'Dispatch: opdrachten geven vanaf je telefoon',
    'Skills & Plugins: Claude aanpassen aan jouw workflow',
    'Deep Research en extended thinking',
    'Documentanalyse en grote bestanden verwerken',
    'Effectief prompten voor jouw vakgebied',
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
      question: 'Wat is Claude Cowork en hoe verschilt het van de chatversie?',
      answer:
        'Claude Cowork gaat veel verder dan chatten. Het voert taken daadwerkelijk uit op je computer: documenten maken, bestanden organiseren, data analyseren, presentaties bouwen. Je typt gewoon wat je wilt in normale mensentaal en Cowork doet het. Geen technische kennis nodig.',
    },
    {
      question: 'Wat is Dispatch?',
      answer:
        'Met Dispatch geef je opdrachten aan Claude via je telefoon, terwijl Claude het werk uitvoert op je computer. Je kunt ook terugkerende taken instellen, zoals elke week een rapport laten genereren. Claude onthoudt je voorkeuren en workflows uit eerdere sessies.',
    },
    {
      question: 'Wat zijn Skills en Plugins?',
      answer:
        'Skills zijn herbruikbare instructiesets die Claude leren hoe specifieke taken uit te voeren volgens jouw werkwijze. Plugins bundelen meerdere skills tot een compleet pakket voor een functie of afdeling. Denk aan: documenten opmaken in je huisstijl, data verwerken volgens een vast format, of rapporten genereren op een specifieke manier.',
    },
    {
      question: 'Heb ik een betaald abonnement nodig?',
      answer:
        'De gratis versie van Claude is al krachtig voor veel taken. Voor Cowork, Dispatch, Deep Research en extended thinking is een Pro-abonnement (€20/maand) nodig. Voor intensief gebruik is het Max-abonnement (€100/maand) aan te raden. We bespreken de opties in de training.',
    },
    {
      question: 'Is deze training ook geschikt voor niet-technische medewerkers?',
      answer:
        'Absoluut. De training wordt afgestemd op het niveau van de groep. Cowork en Dispatch zijn juist ontworpen voor niet-technische gebruikers. Of je nu in marketing, HR, finance of IT werkt: je leert Claude inzetten voor jouw dagelijkse werkzaamheden.',
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
        highlightedSubtitle="Cowork • Claude Code • Dispatch • Skills • Deep Research • Artifacts"
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

      {/* Claude Ecosysteem */}
      <section className="bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Het Claude-ecosysteem
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Claude is veel meer dan een chatbot. Anthropic heeft een compleet ecosysteem gebouwd
              waarmee je AI écht kunt inzetten in je dagelijks werk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cowork */}
            <div className="bg-white border border-stone-200 rounded-2xl p-8 hover:border-primary hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Claude Cowork</h3>
              <p className="text-text-muted leading-relaxed mb-4">
                De krachtigste toevoeging aan Claude. Cowork voert taken daadwerkelijk uit op je computer:
                documenten maken, data analyseren, presentaties bouwen, bestanden organiseren en nog veel meer.
                Alles in gewone mensentaal, zonder technische kennis.
              </p>
              <Link
                href="/artikelen/claude-cowork"
                className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all"
              >
                Lees mijn uitgebreide review <ArrowRight size={14} />
              </Link>
            </div>

            {/* Claude Code */}
            <div className="bg-white border border-stone-200 rounded-2xl p-8 hover:border-primary hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Claude Code</h3>
              <p className="text-text-muted leading-relaxed">
                Een command-line tool waarmee ontwikkelaars coderingstaken aan Claude kunnen delegeren.
                Denk aan: code schrijven, debuggen, refactoring, hele projecten opzetten en deployen.
                Claude Code werkt direct vanuit je terminal en begrijpt de context van je codebase.
              </p>
            </div>

            {/* Dispatch */}
            <div className="bg-white border border-stone-200 rounded-2xl p-8 hover:border-primary hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Dispatch</h3>
              <p className="text-text-muted leading-relaxed">
                Dispatch overbrugt de kloof tussen je telefoon en je computer. Je geeft opdrachten via je
                telefoon en Claude voert ze uit op je Mac of PC. Inclusief terugkerende taken:
                &ldquo;Elke maandagochtend het weekrapport opstellen en mailen.&rdquo; Het onthoudt je
                voorkeuren en workflows uit eerdere sessies.
              </p>
            </div>

            {/* Skills */}
            <div className="bg-white border border-stone-200 rounded-2xl p-8 hover:border-primary hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Puzzle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Skills &amp; Plugins</h3>
              <p className="text-text-muted leading-relaxed">
                Skills zijn herbruikbare instructiesets die Claude leren hoe specifieke taken uit te voeren:
                documenten opmaken volgens jouw huisstijl, data verwerken volgens je workflow, of rapporten
                genereren in een vast format. Plugins bundelen meerdere skills tot een compleet pakket voor
                een specifieke functie of afdeling.
              </p>
            </div>
          </div>
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
