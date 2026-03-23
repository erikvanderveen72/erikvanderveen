import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { Calendar, Clock, ArrowLeft, Lightbulb, HelpCircle, CheckCircle } from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Vraag Eerst naar de Aannames van ChatGPT',
  description: 'ChatGPT maakt stilzwijgende aannames bij elke prompt. Door daar expliciet naar te vragen, krijg je antwoorden die écht aansluiten bij jouw situatie.',
  openGraph: {
    title: 'Vraag Eerst naar de Aannames van ChatGPT | Erik van der Veen',
    description: 'ChatGPT maakt stilzwijgende aannames bij elke prompt. Door daar naar te vragen, krijg je betere antwoorden.',
    url: 'https://erikvanderveen.nl/blog/vraag-naar-aannames-chatgpt',
  },
  alternates: { canonical: 'https://erikvanderveen.nl/blog/vraag-naar-aannames-chatgpt' },
};

const faqItems = [
  {
    question: 'Welke soort aannames maakt ChatGPT het vaakst?',
    answer: 'De meest voorkomende aannames gaan over doelgroep (voor wie is dit?), context (welke branche/situatie?), kennisniveau (hoe ervaren is de lezer?), en gewenste diepgang (overzicht of detail?).',
  },
  {
    question: 'Kan ChatGPT altijd zijn aannames benoemen?',
    answer: 'Ja, als je er expliciet naar vraagt. Zonder die vraag maakt ChatGPT de aannames stilzwijgend en beïnvloeden ze het antwoord zonder dat je het doorhebt.',
  },
  {
    question: 'Werkt dit ook bij andere AI-tools?',
    answer: 'Absoluut. Claude, Gemini en andere LLMs maken dezelfde soort aannames. De techniek is universeel toepasbaar.',
  },
];

const aannames = [
  { aanname: 'Je doelgroep is een breed publiek', correctie: 'Specificeer de exacte doelgroep: "Mijn publiek bestaat uit IT-managers bij bedrijven met 50-200 medewerkers."' },
  { aanname: 'Je wilt een uitgebreid antwoord', correctie: 'Geef lengte aan: "Ik wil een bondig antwoord van maximaal 150 woorden."' },
  { aanname: 'De context is algemeen/globaal', correctie: 'Voeg je specifieke situatie toe: "Dit is voor een Nederlandse non-profitorganisatie in de zorgsector."' },
  { aanname: 'De toon moet neutraal/formeel zijn', correctie: 'Specificeer de gewenste toon: "Schrijf in een toegankelijke, licht informele toon alsof je een collega aanspreekt."' },
  { aanname: 'Je hebt geen voorkennis', correctie: 'Geef je kennisniveau aan: "Ik heb al basiskennis van marketing. Sla de beginselen over."' },
];

export default function VraagNaarAannamesPage() {
  return (
    <>
      <PageHero
        title="Vraag Eerst naar de"
        highlightedSubtitle="Aannames van ChatGPT"
        subtitle="ChatGPT maakt stilzwijgende aannames bij elke prompt. Door daar expliciet naar te vragen, krijg je betere antwoorden."
        badge="Prompt-techniek"
        showBreadcrumbs
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: 'Aannames van ChatGPT', href: '/blog/vraag-naar-aannames-chatgpt' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'Vraag Eerst naar de Aannames van ChatGPT',
            datePublished: '2025-06-06',
            dateModified: '2026-03-23',
            author: { '@type': 'Person', name: 'Erik van der Veen', url: 'https://erikvanderveen.nl/over-erik' },
            publisher: { '@type': 'Organization', name: 'Erik van der Veen | AI Training', url: 'https://erikvanderveen.nl' },
            url: 'https://erikvanderveen.nl/blog/vraag-naar-aannames-chatgpt',
          }),
        }}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 text-sm text-stone-400 mb-10">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> 6 juni 2025</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 5 min leestijd</span>
            <span className="text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">Prompt-techniek</span>
          </div>

          <div className="prose prose-stone prose-lg max-w-none">
            <p className="text-xl text-stone-600 leading-relaxed">
              Teleurstellende antwoorden van ChatGPT komen bijna nooit door een slecht model, maar door stilzwijgende aannames. Bij elke prompt die je geeft, vult ChatGPT zelf de ontbrekende informatie in. En die invulling klopt lang niet altijd.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">Het probleem: onzichtbare aannames</h2>
            <p className="text-stone-600 leading-relaxed">
              Vraag je ChatGPT om &quot;een e-mail te schrijven naar een klant&quot;, dan maakt het direct tientallen aannames: over de toon, de lengte, het doel van de e-mail, de relatie met de klant, de branche, het kennisniveau — noem maar op. Al die aannames sturen het antwoord, maar jij hebt er geen invloed op.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Het resultaat? Een generiek antwoord dat voor niemand echt werkt. Niet omdat ChatGPT het niet kan, maar omdat het de verkeerde aannames heeft gemaakt.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">De oplossing: maak aannames expliciet</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              De eenvoudigste manier om dit op te lossen: vraag ChatGPT om zijn aannames te benoemen vóórdat het een antwoord geeft.
            </p>

            <div className="bg-stone-900 rounded-xl p-6 mb-8">
              <p className="text-stone-400 text-xs mb-3 font-mono">De magische prompt:</p>
              <p className="text-stone-100 font-mono text-sm leading-relaxed">
                &quot;Voordat je antwoord geeft: noem eerst alle aannames die je maakt bij deze vraag. Welke informatie vul je zelf in? Wacht daarna op mijn bevestiging of correctie voordat je verder gaat.&quot;
              </p>
            </div>

            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">5 typische aannames (en hoe je ze corrigeert)</h2>
            <div className="space-y-4 my-8">
              {aannames.map((item, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-xl overflow-hidden">
                  <div className="flex items-start gap-3 p-5 bg-red-50 border-b border-stone-200">
                    <HelpCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Aanname</span>
                      <p className="text-stone-700 text-sm mt-1">{item.aanname}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-5">
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Correctie</span>
                      <p className="text-stone-600 text-sm mt-1">{item.correctie}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">Wanneer is dit het nuttigst?</h2>
            <p className="text-stone-600 leading-relaxed">
              Deze techniek is bijzonder krachtig bij opdrachten die sterk afhankelijk zijn van context: teksten schrijven, strategieën ontwikkelen, adviezen formuleren, analyses maken. Ofwel: bij precies die taken waar de meeste professionals ChatGPT voor gebruiken.
            </p>

            {/* Pro tip */}
            <div className="bg-primary-light border border-primary/20 rounded-xl p-6 my-8">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={18} className="text-primary" />
                <span className="font-bold text-primary-dark">Pro-tip: gebruik het als standaard-opening</span>
              </div>
              <p className="text-stone-600 text-sm">
                Maak het een gewoonte om elke complexe prompt te beginnen met de vraag naar aannames. Of zet het in je Custom Instructions, zodat ChatGPT dit automatisch doet bij elk gesprek. Je zult merken dat de kwaliteit van je output structureel omhooggaat.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <FAQSchema items={faqItems} />
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <Link href="/blog" className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              <ArrowLeft size={16} /> Terug naar blog
            </Link>
            <Link href="/contact" className="bg-accent hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
              Boek een AI training
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
