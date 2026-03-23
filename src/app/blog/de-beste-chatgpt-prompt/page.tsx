import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { Calendar, Clock, ArrowLeft, Lightbulb, Target, Zap } from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'De Beste ChatGPT-prompt (Volgens Onderzoek)',
  description: 'Ontdek de prompt-structuur die volgens wetenschappelijk onderzoek consistent de beste resultaten oplevert met ChatGPT. Met concrete voorbeelden.',
  openGraph: {
    title: 'De Beste ChatGPT-prompt (Volgens Onderzoek) | Erik van der Veen',
    description: 'Ontdek de prompt-structuur die consistent de beste resultaten oplevert met ChatGPT.',
    url: 'https://erikvanderveen.nl/blog/de-beste-chatgpt-prompt',
  },
  alternates: { canonical: 'https://erikvanderveen.nl/blog/de-beste-chatgpt-prompt' },
};

const faqItems = [
  {
    question: 'Werkt deze prompt-structuur ook met GPT-4o en nieuwere modellen?',
    answer: 'Ja, de structuur is model-onafhankelijk. De principes van context, rol, taak en output-formaat werken met alle versies van ChatGPT en ook met andere AI-tools zoals Claude en Gemini.',
  },
  {
    question: 'Moet ik altijd alle elementen van de structuur gebruiken?',
    answer: 'Nee, niet per se. Voor complexe taken is het aan te raden om alle elementen te gebruiken. Voor eenvoudige vragen volstaan vaak alleen de rol en de taak.',
  },
  {
    question: 'Wat als ik niet weet welke rol ik moet toewijzen?',
    answer: 'Denk aan wie je het in het echte leven zou vragen. Als je een marketingtekst wilt, kies je een "ervaren marketeer". Als je juridisch advies wilt, kies je een "bedrijfsjurist". De rol stuurt de toon en expertise van het antwoord.',
  },
];

export default function DeBestePromptPage() {
  return (
    <>
      <PageHero
        title="De Beste ChatGPT-prompt"
        highlightedSubtitle="Volgens Onderzoek"
        subtitle="Eén simpele structuur die consistent de beste resultaten oplevert — bewezen door wetenschappelijk onderzoek."
        badge="Prompt-techniek"
        showBreadcrumbs
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: 'De beste ChatGPT-prompt', href: '/blog/de-beste-chatgpt-prompt' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'De Beste ChatGPT-prompt (Volgens Onderzoek)',
            datePublished: '2025-06-11',
            dateModified: '2026-03-23',
            author: { '@type': 'Person', name: 'Erik van der Veen', url: 'https://erikvanderveen.nl/over-erik' },
            publisher: { '@type': 'Organization', name: 'Erik van der Veen — AI Training', url: 'https://erikvanderveen.nl' },
            url: 'https://erikvanderveen.nl/blog/de-beste-chatgpt-prompt',
          }),
        }}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 text-sm text-stone-400 mb-10">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> 11 juni 2025</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 6 min leestijd</span>
            <span className="text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">Prompt-techniek</span>
          </div>

          <div className="prose prose-stone prose-lg max-w-none">
            <p className="text-xl text-stone-600 leading-relaxed">
              Er zijn duizenden &quot;ChatGPT-prompt tips&quot; online te vinden, maar welke aanpak werkt écht het beste? Onderzoekers hebben inmiddels getest welke prompt-structuren consistent de beste output opleveren. Het antwoord is verrassend eenvoudig.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">De universele prompt-structuur</h2>
            <p className="text-stone-600 leading-relaxed">
              De meest effectieve prompt bevat vier vaste elementen. Samen zorgen ze ervoor dat ChatGPT precies begrijpt wat je nodig hebt — en in welke vorm.
            </p>

            {/* The 4 elements */}
            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                { icon: Target, title: '1. Rol', desc: 'Geef ChatGPT een specifieke identiteit. "Je bent een ervaren HR-manager met 15 jaar ervaring."', color: 'text-violet-600 bg-violet-50' },
                { icon: Lightbulb, title: '2. Context', desc: 'Schets de situatie. Wat is de achtergrond? Voor wie is het? Welke beperkingen zijn er?', color: 'text-amber-600 bg-amber-50' },
                { icon: Zap, title: '3. Taak', desc: 'Formuleer helder wat je wilt. Wees specifiek over het eindresultaat dat je verwacht.', color: 'text-emerald-600 bg-emerald-50' },
                { icon: Target, title: '4. Format', desc: 'Geef aan hoe het antwoord eruit moet zien: lengte, structuur, toon, stijl.', color: 'text-blue-600 bg-blue-50' },
              ].map((el) => (
                <div key={el.title} className="bg-white border border-stone-200 rounded-xl p-5">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3 ${el.color}`}>
                    <el.icon size={20} />
                  </div>
                  <h3 className="font-bold text-stone-900 mb-2">{el.title}</h3>
                  <p className="text-sm text-stone-500">{el.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">Voorbeeld: de structuur in actie</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Hieronder zie je het verschil tussen een simpele prompt en dezelfde vraag met de vierdelige structuur.
            </p>

            {/* Bad example */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-4">
              <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Zonder structuur</span>
              <div className="bg-stone-900 rounded-lg p-4 mt-3 text-stone-100 text-sm font-mono">
                &quot;Schrijf een blog over duurzaamheid.&quot;
              </div>
              <p className="text-sm text-red-700 mt-3">Resultaat: een generiek, oppervlakkig artikel zonder richting.</p>
            </div>

            {/* Good example */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Met structuur</span>
              <div className="bg-stone-900 rounded-lg p-4 mt-3 text-stone-100 text-sm font-mono leading-relaxed">
                <p><span className="text-violet-400">[Rol]</span> Je bent een content-strateeg gespecialiseerd in B2B duurzaamheidscommunicatie.</p>
                <p className="mt-2"><span className="text-amber-400">[Context]</span> Ik schrijf voor een productiebedrijf dat zijn CO2-footprint met 40% heeft verlaagd. De doelgroep is inkopers bij grote bedrijven.</p>
                <p className="mt-2"><span className="text-emerald-400">[Taak]</span> Schrijf een LinkedIn-artikel (600 woorden) dat de resultaten deelt en positioneert als thought leader.</p>
                <p className="mt-2"><span className="text-blue-400">[Format]</span> Professionele maar toegankelijke toon. Open met een pakkende vraag. Gebruik concrete cijfers. Sluit af met een CTA richting whitepaper.</p>
              </div>
              <p className="text-sm text-emerald-700 mt-3">Resultaat: een gericht, professioneel artikel dat direct te publiceren is.</p>
            </div>

            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">Waarom werkt dit?</h2>
            <p className="text-stone-600 leading-relaxed">
              Grote taalmodellen werken op basis van patronen. Hoe meer relevante context je geeft, hoe beter het model kan aansluiten bij het juiste &quot;patroon&quot; in zijn training. De rol activeert domeinkennis, de context beperkt de zoekruimte, de taak geeft richting, en het format voorkomt ongewenste verrassingen.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Onderzoek laat zien dat prompts met deze vier elementen gemiddeld 40-60% betere resultaten opleveren dan prompts zonder structuur — gemeten op relevantie, volledigheid en bruikbaarheid van de output.
            </p>

            {/* Pro tip */}
            <div className="bg-primary-light border border-primary/20 rounded-xl p-6 my-8">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={18} className="text-primary" />
                <span className="font-bold text-primary-dark">Pro-tip: sla je beste prompts op</span>
              </div>
              <p className="text-stone-600 text-sm">
                Maak een persoonlijke prompt-bibliotheek. Bewaar prompts die goed werkten in een notitie-app of document, inclusief de context. Zo bouw je over tijd een krachtige toolkit op die je keer op keer kunt hergebruiken.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">De vijfde (bonus) stap: itereer</h2>
            <p className="text-stone-600 leading-relaxed">
              Het echte geheim van ChatGPT-experts? Ze sturen zelden maar één prompt. Na het eerste antwoord sturen ze vervolgvragen: &quot;Maak het concreter&quot;, &quot;Voeg meer cijfers toe&quot;, &quot;Pas de toon aan voor een technisch publiek&quot;. Iteratie is de sleutel tot excellente output.
            </p>
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
