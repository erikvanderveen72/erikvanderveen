import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { Calendar, Clock, ArrowLeft, Lightbulb } from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: '12 Geavanceerde ChatGPT-tips voor Professionals (2026)',
  description: 'Ga verder dan de basis met deze 12 geavanceerde ChatGPT-tips. Van rolgebaseerde prompts tot ketenprompting — direct toepasbaar in je werk.',
  openGraph: {
    title: '12 Geavanceerde ChatGPT-tips voor Professionals (2026)',
    description: 'Ga verder dan de basis met deze 12 geavanceerde ChatGPT-tips.',
    url: 'https://erikvanderveen.nl/blog/12-geavanceerde-chatgpt-tips',
  },
  alternates: { canonical: 'https://erikvanderveen.nl/blog/12-geavanceerde-chatgpt-tips' },
};

const tips = [
  {
    nummer: 1,
    title: 'Gebruik rolgebaseerde prompts',
    content: 'Geef ChatGPT een specifieke rol en identiteit. "Je bent een ervaren marketingstrateeg die gespecialiseerd is in B2B SaaS" levert fundamenteel andere (en betere) antwoorden op dan zonder rol.',
    voorbeeld: 'Je bent een senior content-strateeg met 10 jaar ervaring in de tech-sector. Analyseer deze copy en geef 5 verbeterpunten.',
  },
  {
    nummer: 2,
    title: 'Ketenprompting (chain-of-thought)',
    content: 'Vraag ChatGPT om stap voor stap te redeneren voordat het een conclusie trekt. Dit verbetert de nauwkeurigheid dramatisch, vooral bij complexe analyses en berekeningen.',
    voorbeeld: 'Denk stap voor stap na over dit probleem. Leg elke tussenstap uit voordat je een conclusie trekt.',
  },
  {
    nummer: 3,
    title: 'Geef voorbeelden mee (few-shot)',
    content: 'In plaats van alleen te beschrijven wat je wilt, geef je een of meer voorbeelden van het gewenste resultaat. ChatGPT leert razendsnel van patronen en past de stijl en structuur toe op je verzoek.',
    voorbeeld: 'Hier is een voorbeeld van het type e-mail dat ik wil: [voorbeeld]. Schrijf nu een vergelijkbare e-mail over [onderwerp].',
  },
  {
    nummer: 4,
    title: 'Definieer het outputformaat expliciet',
    content: 'Wees heel specifiek over hoe het antwoord eruit moet zien. Lengte, structuur (koppen, bullets, genummerde lijst), toon (formeel, informeel), en doelgroep. Hoe specifieker, hoe beter.',
    voorbeeld: 'Schrijf je antwoord als een genummerde lijst van maximaal 8 punten, elk punt 2-3 zinnen, in een professionele maar toegankelijke toon.',
  },
  {
    nummer: 5,
    title: 'Gebruik beperkingen als kwaliteitstool',
    content: 'Beperkingen dwingen creativiteit af. Stel grenzen aan lengte, woordgebruik, of structuur en ChatGPT produceert gerichtere, kwalitatief betere output.',
    voorbeeld: 'Leg dit concept uit in maximaal 100 woorden, zonder jargon, geschikt voor iemand zonder technische achtergrond.',
  },
  {
    nummer: 6,
    title: 'Laat ChatGPT je prompt verbeteren',
    content: 'Voordat je je daadwerkelijke vraag stelt, laat ChatGPT eerst feedback geven op je prompt. Vraag: "Wat ontbreekt er aan deze prompt om het beste antwoord te krijgen?" Dit is de anti-prompt techniek.',
    voorbeeld: 'Ik ga je de volgende vraag stellen. Voordat je antwoord geeft: welke informatie mis je? Wat zijn de zwakke punten van mijn prompt?',
  },
  {
    nummer: 7,
    title: 'Werk met persona-documenten',
    content: 'Maak een gedetailleerd document over je doelgroep, merk of project en upload dat als context. ChatGPT kan vervolgens alles wat het schrijft afstemmen op die specifieke context.',
    voorbeeld: 'Upload: "Ons merk spreekt 35-55-jarige professionals aan, we gebruiken een formeel-maar-warm tone-of-voice, vermijden superlatieven..."',
  },
  {
    nummer: 8,
    title: 'Splits complexe taken op',
    content: 'Grote opdrachten in één prompt stoppen levert zelden het beste resultaat. Splits ze op in deeltaken: eerst onderzoek, dan een outline, dan het schrijfwerk, dan redigeren.',
    voorbeeld: 'Stap 1: Maak een outline voor dit rapport. Stap 2: Ik geef feedback. Stap 3: Schrijf het eerste hoofdstuk op basis van de goedgekeurde outline.',
  },
  {
    nummer: 9,
    title: 'Gebruik negatieve instructies',
    content: 'Vertel ChatGPT niet alleen wat het wél moet doen, maar ook wat het NIET moet doen. "Vermijd clichés", "Gebruik geen opsommingstekens", "Geen inleiding nodig" zijn krachtige sturing.',
    voorbeeld: 'Schrijf dit artikel ZONDER: inleiding, opsommingstekens, clichés als "in het huidige landschap", of een samenvatting aan het eind.',
  },
  {
    nummer: 10,
    title: 'Maak gebruik van temperatuurinstructies',
    content: 'Je kunt ChatGPT vragen om creatiever (meer variatie) of conservatiever (meer feitelijk) te antwoorden door instructies te geven over de gewenste mate van creativiteit.',
    voorbeeld: 'Wees in je antwoord zo feitelijk en conservatief mogelijk. Vermijd aannames en geef alleen informatie waar je zeker van bent.',
  },
  {
    nummer: 11,
    title: 'Itereer systematisch',
    content: 'De beste resultaten ontstaan door iteratie. Geef na het eerste antwoord gerichte feedback: "Maak het concreter", "Voeg data toe", "Verkort met 30%". Elke ronde wordt het beter.',
    voorbeeld: 'Goed, maar pas het volgende aan: (1) Maak de intro pakkender met een vraag, (2) Voeg concrete percentages toe, (3) Maak de conclusie actiegerichter.',
  },
  {
    nummer: 12,
    title: 'Gebruik Custom Instructions (of systeemprompts)',
    content: 'Stel permanente instructies in via Custom Instructions zodat ChatGPT altijd rekening houdt met je voorkeuren, schrijfstijl en context. Dit bespaart tijd bij elke nieuwe chat.',
    voorbeeld: 'In Custom Instructions: "Ik ben een Nederlandse marketingmanager. Antwoord altijd in het Nederlands. Ik geef de voorkeur aan concrete voorbeelden boven abstracte theorie."',
  },
];

const faqItems = [
  {
    question: 'Welke tip levert het snelste resultaat op?',
    answer: 'Tip 1 (rolgebaseerde prompts) en tip 4 (outputformaat definiëren) leveren direct merkbaar betere resultaten op en zijn het makkelijkst toe te passen.',
  },
  {
    question: 'Kan ik deze tips ook gebruiken met de gratis versie van ChatGPT?',
    answer: 'Ja, alle 12 tips werken met zowel de gratis als de betaalde versie. Bij de betaalde versie (GPT-4o en nieuwer) zie je over het algemeen nog betere resultaten.',
  },
  {
    question: 'Hoeveel tips moet ik tegelijk toepassen?',
    answer: 'Begin met 2-3 tips die het meest relevant zijn voor jouw werk. Als je die beheerst, voeg je er geleidelijk meer toe. Probeer niet alles tegelijk.',
  },
];

export default function TwaalfGeavanceerdeTipsPage() {
  return (
    <>
      <PageHero
        title="12 Geavanceerde"
        highlightedSubtitle="ChatGPT-tips voor Professionals"
        subtitle="Ga verder dan de basis. Deze technieken tillen je AI-gebruik naar een hoger niveau — direct toepasbaar."
        badge="Geavanceerd"
        showBreadcrumbs
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: '12 Geavanceerde ChatGPT-tips', href: '/blog/12-geavanceerde-chatgpt-tips' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: '12 Geavanceerde ChatGPT-tips voor Professionals',
            datePublished: '2025-06-30',
            dateModified: '2026-03-23',
            author: { '@type': 'Person', name: 'Erik van der Veen', url: 'https://erikvanderveen.nl/over-erik' },
            publisher: { '@type': 'Organization', name: 'Erik van der Veen | AI Training', url: 'https://erikvanderveen.nl' },
            url: 'https://erikvanderveen.nl/blog/12-geavanceerde-chatgpt-tips',
          }),
        }}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 text-sm text-stone-400 mb-10">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> 30 juni 2025</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 8 min leestijd</span>
            <span className="text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">Geavanceerd</span>
          </div>

          <div className="prose prose-stone prose-lg max-w-none">
            <p className="text-xl text-stone-600 leading-relaxed">
              De meeste mensen gebruiken ChatGPT als een geavanceerde zoekmachine: ze stellen een vraag en accepteren het eerste antwoord. Maar er zit zoveel meer in. Deze 12 tips helpen je om het maximale uit ChatGPT te halen — of je nu teksten schrijft, analyses maakt, of strategieën ontwikkelt.
            </p>

            {/* Tips */}
            <div className="space-y-8 mt-12">
              {tips.map((tip) => (
                <div key={tip.nummer} className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-sm">
                      {tip.nummer}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-stone-900 mb-3">{tip.title}</h2>
                      <p className="text-stone-600 leading-relaxed mb-4">{tip.content}</p>
                      <div className="bg-stone-900 rounded-lg p-4 text-sm font-mono">
                        <p className="text-stone-400 text-xs mb-2">Voorbeeld prompt:</p>
                        <p className="text-stone-100">{tip.voorbeeld}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pro tip */}
            <div className="bg-primary-light border border-primary/20 rounded-xl p-6 my-12">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={18} className="text-primary" />
                <span className="font-bold text-primary-dark">Bonus: combineer meerdere technieken</span>
              </div>
              <p className="text-stone-600 text-sm">
                De krachtigste prompts combineren meerdere van bovenstaande technieken. Geef een rol, voeg context toe, definieer het format, en itereer op het resultaat. Na een paar rondes heb je output van professioneel niveau.
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
