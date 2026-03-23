import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { Calendar, Clock, ArrowLeft, Lightbulb, XCircle, CheckCircle } from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'De 10 Grootste Misverstanden over ChatGPT (2026)',
  description: 'Van "ChatGPT liegt altijd" tot "AI vervangt mijn baan" — we ontkrachten de 10 hardnekkigste mythes over ChatGPT met feiten en context.',
  openGraph: {
    title: 'De 10 Grootste Misverstanden over ChatGPT | Erik van der Veen',
    description: 'We ontkrachten de 10 hardnekkigste mythes over ChatGPT met feiten en context.',
    url: 'https://erikvanderveen.nl/blog/10-grootste-misverstanden-chatgpt',
  },
  alternates: { canonical: 'https://erikvanderveen.nl/blog/10-grootste-misverstanden-chatgpt' },
};

const misverstanden = [
  {
    mythe: 'ChatGPT liegt altijd',
    realiteit: 'ChatGPT kan hallucineren (onjuiste informatie presenteren als feit), maar "liegen" impliceert intentie. Het model heeft geen intentie — het voorspelt de meest waarschijnlijke volgende woorden. De kans op fouten verschilt enorm per onderwerp en de kwaliteit van je prompt. Met de juiste technieken minimaliseer je hallucinaties aanzienlijk.',
  },
  {
    mythe: 'AI vervangt alle banen',
    realiteit: 'AI vervangt taken, geen volledige banen. Vrijwel elk beroep bevat taken die AI kan versnellen of verbeteren, maar ook taken die menselijk oordeel, empathie of creativiteit vereisen. De meeste experts verwachten dat AI banen transformeert, niet elimineert. Wie AI leert inzetten, wordt juist waardevoller.',
  },
  {
    mythe: 'ChatGPT begrijpt wat je zegt',
    realiteit: 'ChatGPT verwerkt tekst statistisch — het voorspelt patronen op basis van enorme hoeveelheden trainingsdata. Of dat "begrip" is, is een filosofische discussie. Praktisch gezien: behandel het als een uiterst capabele tekst-tool, niet als een collega die meedenkt.',
  },
  {
    mythe: 'Je mag ChatGPT niet zakelijk gebruiken',
    realiteit: 'ChatGPT mag zakelijk worden gebruikt, mits je rekening houdt met privacy en vertrouwelijke informatie. De Team- en Enterprise-versies van ChatGPT bieden extra garanties rondom data-bescherming. Veel organisaties hebben inmiddels een AI-beleid opgesteld — dat is verstandig.',
  },
  {
    mythe: 'De gratis versie is nutteloos',
    realiteit: 'De gratis versie van ChatGPT (met GPT-4o mini) is verrassend krachtig voor veel dagelijkse taken: e-mails schrijven, brainstormen, samenvatten, vertalen. De betaalde versie biedt meer snelheid, geavanceerde functies en langere gesprekken, maar de gratis versie is al zeer bruikbaar.',
  },
  {
    mythe: 'ChatGPT is altijd up-to-date',
    realiteit: 'ChatGPT heeft een kennislimiet (knowledge cutoff) en weet niet altijd alles van vandaag. Met de browse-functie (in betaalde versies) kan het wel actuele informatie opzoeken, maar dit is niet standaard actief. Controleer altijd actuele feiten zelf.',
  },
  {
    mythe: 'Je moet een tech-expert zijn om ChatGPT te gebruiken',
    realiteit: 'ChatGPT is ontworpen voor natuurlijke taal. Je communiceert gewoon in het Nederlands, alsof je met een collega praat. Goede prompts schrijven is een vaardigheid die iedereen kan leren — het vereist geen technische achtergrond.',
  },
  {
    mythe: 'Eén prompt is genoeg voor een goed antwoord',
    realiteit: 'De beste resultaten ontstaan door iteratie. Professionals die dagelijks met ChatGPT werken, sturen gemiddeld 3-5 vervolgprompts om tot het gewenste resultaat te komen. Zie het als een gesprek, niet als een zoekopdracht.',
  },
  {
    mythe: 'ChatGPT is creatief',
    realiteit: 'ChatGPT kan creatief overkomen doordat het patronen combineert op manieren die nieuw aanvoelen. Maar echte creativiteit — iets fundamenteel nieuws bedenken vanuit eigen ervaring — doet het niet. Het is een uitstekende sparringpartner en eerste-versie-schrijver, niet een vervanging voor menselijke creativiteit.',
  },
  {
    mythe: 'Alle AI-tools zijn hetzelfde',
    realiteit: 'ChatGPT, Claude, Gemini en Copilot hebben elk hun eigen sterktes en beperkingen. ChatGPT is sterk in veelzijdigheid, Claude in langere teksten en analyse, Gemini in Google-integratie, Copilot in Microsoft 365. De juiste tool kiezen maakt een groot verschil.',
  },
];

const faqItems = [
  {
    question: 'Wat is het allergrootste misverstand over ChatGPT?',
    answer: 'Dat je er als leek niets mee kunt. ChatGPT is juist ontworpen voor niet-technische gebruikers. Met een paar basistechnieken haal je al enorm veel waarde uit de tool.',
  },
  {
    question: 'Is ChatGPT veilig om zakelijk te gebruiken?',
    answer: 'Ja, mits je geen vertrouwelijke bedrijfsgegevens deelt in de gratis versie. De Team- en Enterprise-versies bieden contractuele garanties rondom privacy. Stel een intern AI-beleid op als organisatie.',
  },
  {
    question: 'Hoe voorkom ik dat ChatGPT onjuiste informatie geeft?',
    answer: 'Wees specifiek in je prompts, vraag om bronvermelding, controleer feiten zelf, en gebruik de browse-functie voor actuele informatie. 100% foutloos is geen enkele AI-tool — verificatie blijft belangrijk.',
  },
];

export default function TienMisverstandenPage() {
  return (
    <>
      <PageHero
        title="De 10 Grootste Misverstanden"
        highlightedSubtitle="over ChatGPT"
        subtitle="Mythes, misvattingen en halve waarheden — ontkracht met feiten en context."
        badge="Achtergrond"
        showBreadcrumbs
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: '10 Misverstanden', href: '/blog/10-grootste-misverstanden-chatgpt' },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'De 10 Grootste Misverstanden over ChatGPT',
            datePublished: '2025-05-29',
            dateModified: '2026-03-23',
            author: { '@type': 'Person', name: 'Erik van der Veen', url: 'https://erikvanderveen.nl/over-erik' },
            publisher: { '@type': 'Organization', name: 'Erik van der Veen | AI Training', url: 'https://erikvanderveen.nl' },
            url: 'https://erikvanderveen.nl/blog/10-grootste-misverstanden-chatgpt',
          }),
        }}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 text-sm text-stone-400 mb-10">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> 29 mei 2025</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 7 min leestijd</span>
            <span className="text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">Achtergrond</span>
          </div>

          <div className="prose prose-stone prose-lg max-w-none">
            <p className="text-xl text-stone-600 leading-relaxed">
              Na 175+ AI-trainingen weet ik welke misverstanden over ChatGPT het hardnekkigst zijn. Dezelfde mythes komen keer op keer terug — bij managers, professionals en teams. Tijd om ze te ontkrachten.
            </p>

            {/* Misverstanden */}
            <div className="space-y-6 mt-12">
              {misverstanden.map((item, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
                  {/* Mythe */}
                  <div className="flex items-start gap-3 p-5 bg-red-50 border-b border-stone-100">
                    <XCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Misverstand {i + 1}</span>
                      <p className="font-bold text-stone-900 mt-1">&quot;{item.mythe}&quot;</p>
                    </div>
                  </div>
                  {/* Realiteit */}
                  <div className="flex items-start gap-3 p-5">
                    <CheckCircle size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Realiteit</span>
                      <p className="text-stone-600 text-sm mt-1 leading-relaxed">{item.realiteit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Takeaway */}
            <div className="bg-primary-light border border-primary/20 rounded-xl p-6 my-12">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={18} className="text-primary" />
                <span className="font-bold text-primary-dark">De belangrijkste takeaway</span>
              </div>
              <p className="text-stone-600 text-sm">
                ChatGPT is een krachtige tool, geen magische oplossing. Wie de beperkingen kent en de juiste technieken leert, haalt er enorm veel waarde uit. Wie het behandelt als een alwetende assistent, wordt teleurgesteld. De sleutel is: verwacht geen perfectie, maar leer sturen.
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
