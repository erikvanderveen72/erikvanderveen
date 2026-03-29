import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '10 redenen waarom AI nog niet zo snel gaat (mijn ervaring na 175+ trainingen)',
  description: 'Waarom AI-adoptie bij bedrijven trager gaat dan verwacht. Praktijkinzichten na 175+ AI-trainingen bij Nederlandse organisaties. Door Erik van der Veen.',
  keywords: ['AI-adoptie', 'AI-implementatie', 'AI-trainingen', 'ChatGPT bedrijven', 'AI organisatie', 'Erik van der Veen'],
  openGraph: {
    title: '10 redenen waarom AI nog niet zo snel gaat',
    description: 'Praktijkinzichten na 175+ AI-trainingen bij Nederlandse organisaties. Door Erik van der Veen.',
    type: 'article',
    url: 'https://erikvanderveen.nl/artikelen/10-redenen-ai-niet-snel',
  },
  alternates: { canonical: 'https://erikvanderveen.nl/artikelen/10-redenen-ai-niet-snel' },
};

export const revalidate = 3600;

const redenen = [
  {
    nummer: 1,
    titel: 'Mensen die mogen beslissen, hebben vaak de kennis niet (en andersom)',
    tekst: 'In veel organisaties is er een kloof: directie en MT kunnen investeren en prioriteren, maar missen het actuele beeld van wat er al kan. En de mensen met de kennis hebben te weinig mandaat om écht iets te veranderen.',
  },
  {
    nummer: 2,
    titel: 'Echte fanatieke AI-trekkers zijn schaars',
    tekst: 'Slechts een paar procent doet zelfstudie, experimenteert en blijft bijleren. De rest "gelooft het wel". Zonder die interne trekkers komt AI-adoptie nauwelijks van de grond.',
  },
  {
    nummer: 3,
    titel: 'Het gebruik blijft oppervlakkig',
    tekst: 'Samenvattingen maken, een mailtje schrijven, een tekstje genereren. Prima als start, maar het echte verschil zit in diepgaand onderzoek (deep research), eigen GPT\u2019s, data-analyse en tools als Gamma, Lovable en NotebookLM. Die zijn bij de meeste mensen nog onbekend.',
    link: { href: '/artikelen/claude-cowork', label: 'En sinds kort blaast Claude Cowork alle andere tools weg. Lees ook mijn artikel hierover.' },
  },
  {
    nummer: 4,
    titel: 'Prompten is een vaardigheid en vergt creativiteit',
    tekst: 'Mensen concluderen snel: "ChatGPT is niet goed." Terwijl het vaak een kwestie is van te weinig context, te vage opdrachten, geen rol, geen criteria en geen voorbeelden. Goed prompten is een vak apart.',
  },
  {
    nummer: 5,
    titel: 'Modelkeuze maakt een groot verschil',
    tekst: 'Veel mensen gebruiken het gratis account of het standaardmodel, terwijl het "thinking"-model in een betaald abonnement veel betere output geeft. Het verschil in kwaliteit is enorm, maar dat weten de meeste gebruikers niet.',
  },
  {
    nummer: 6,
    titel: 'Zonder opvolging zakt het weg',
    tekst: 'Een inspiratiesessie helpt. Een training helpt. Maar zonder structurele opvolging en oefentijd zakt de kennis weg. Al doende leer je, maar niet iedereen neemt daar bewust tijd voor.',
  },
  {
    nummer: 7,
    titel: 'Domeinkennis is en blijft de hefboom',
    tekst: 'Je hebt vooral veel aan AI als je inhoudelijk kunt beoordelen wat "goed" is. Dan zijn fouten minder erg, omdat je ze herkent. Zonder domeinkennis kun je de output niet op waarde schatten.',
  },
  {
    nummer: 8,
    titel: 'Privacy en vertrouwelijkheid remmen (terecht)',
    tekst: 'Je kunt niet zomaar klantdata, financiële cijfers of gevoelige dossiers in een generieke chat gooien. Veel organisaties hebben een veilige omgeving nodig: governance, richtlijnen en soms een eigen interne variant.',
  },
  {
    nummer: 9,
    titel: 'Niet iedereen wíl 30% sneller (en dat is menselijk)',
    tekst: 'Veel medewerkers vinden hun werk prima zoals het is en missen de intrinsieke motivatie om alles sneller te doen. AI-adoptie is niet alleen een skills-vraag, maar ook een verander- en motivatievraag: wat levert het hén op? Minder gedoe, leuker werk, meer impact, minder overuren?',
  },
  {
    nummer: 10,
    titel: 'Ze zijn vaak nog niet "lekker gemaakt"',
    tekst: 'Onbekend maakt onbemind. Ik zie juist dat een goede inspiratiesessie mensen écht kan helpen. Zodra je ze even meeneemt in wat er allemaal mogelijk is, ontstaat het enthousiasme vaak vanzelf.',
  },
];

const adviezen = [
  'Investeer in opleiding — niet eenmalig, maar structureel.',
  'Richt een kleine AI-taskforce in (3–8 mensen), met echte tijd en ruimte om use cases te testen, te borgen en uit te rollen.',
  'Zorg dat directie en MT meekomt in de mogelijkheden én de risico\u2019s.',
  'Werk pragmatisch: geen vuistdikke rapporten, maar pilots, meetbare doelen, duidelijke richtlijnen en snelle iteraties.',
];

export default function AIAdoptieArtikel() {
  return (
    <>
      {/* JSON-LD Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: '10 redenen waarom AI nog niet zo snel gaat',
            author: {
              '@type': 'Person',
              name: 'Erik van der Veen',
              url: 'https://erikvanderveen.nl/over-erik',
              jobTitle: 'AI-trainer, online marketing specialist en digitaal ondernemer',
            },
            datePublished: '2026-03-29',
            dateModified: '2026-03-29',
            publisher: {
              '@type': 'Organization',
              name: 'Erik van der Veen | AI Training',
              url: 'https://erikvanderveen.nl',
            },
            url: 'https://erikvanderveen.nl/artikelen/10-redenen-ai-niet-snel',
            description: 'Waarom AI-adoptie bij bedrijven trager gaat dan verwacht. Praktijkinzichten na 175+ trainingen.',
          }),
        }}
      />

      {/* Hero */}
      <div className="relative overflow-hidden bg-stone-900">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
        <div className="absolute inset-0 plus-pattern opacity-40" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <nav className="flex items-center gap-1.5 mb-8 text-sm">
            <Link href="/" className="text-stone-400 hover:text-white transition-colors">Home</Link>
            <span className="text-stone-500">/</span>
            <Link href="/artikelen" className="text-stone-400 hover:text-white transition-colors">Artikelen</Link>
            <span className="text-stone-500">/</span>
            <span className="text-stone-300">10 redenen waarom AI niet zo snel gaat</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-stone-300 text-sm font-medium">Opinie</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            10 redenen waarom AI nog niet zo snel gaat
          </h1>

          <p className="text-lg text-stone-400 mb-8 max-w-2xl">
            Mijn ervaring op basis van 175+ trainingen bij Nederlandse organisaties.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-stone-400">
            <span>Erik van der Veen</span>
            <span>29 maart 2026</span>
            <span>10 min leestijd</span>
          </div>
        </div>
      </div>

      {/* Article content */}
      <article className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Author badge */}
          <div className="flex items-center gap-4 bg-surface-alt border border-border rounded-2xl p-4 mb-10">
            <Image
              src="/images/erikportret.jpg"
              alt="Erik van der Veen"
              width={56}
              height={56}
              className="rounded-full object-cover"
              unoptimized
            />
            <div>
              <p className="font-bold text-stone-900">Erik van der Veen</p>
              <p className="text-stone-500 text-sm">AI-trainer, online marketing specialist en digitaal ondernemer</p>
            </div>
          </div>

          {/* Intro */}
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            AI is overal in het nieuws. Elke week verschijnt er een nieuwe tool, een nieuw model, een nieuwe belofte. Maar als ik op de werkvloer kijk, bij de organisaties waar ik trainingen geef, dan zie ik een ander beeld. De adoptie gaat trager dan je zou verwachten. En dat heeft concrete redenen.
          </p>

          <p className="text-stone-600 leading-relaxed mb-10">
            Na 175+ trainingen bij uiteenlopende organisaties, van multinationals tot MKB, van overheidsinstanties tot zorgorganisaties, heb ik een vrij scherp beeld van waar het vastloopt. Hieronder mijn tien belangrijkste observaties.
          </p>

          {/* De 10 redenen */}
          <div className="space-y-6 mb-12">
            {redenen.map((reden) => (
              <div key={reden.nummer} className="bg-white border border-stone-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center font-extrabold text-sm shrink-0">
                    {reden.nummer}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-stone-900 mb-2">{reden.titel}</h2>
                    <p className="text-stone-600 leading-relaxed">{reden.tekst}</p>
                    {'link' in reden && reden.link && (
                      <p className="mt-3">
                        <Link href={reden.link.href} className="text-primary font-semibold text-sm hover:underline">
                          {reden.link.label} &rarr;
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Advies */}
          <h2 className="text-2xl font-extrabold text-stone-900 mb-6">
            Mijn advies aan bedrijven
          </h2>

          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {adviezen.map((advies) => (
              <div key={advies} className="bg-white border border-stone-200 rounded-xl p-4">
                <span className="text-stone-700 text-sm">{advies}</span>
              </div>
            ))}
          </div>

          {/* Conclusie */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-6 mb-6">
            <p className="text-stone-800 font-semibold text-lg leading-relaxed">
              AI levert pas wat op als je het organiseert. Wie dit goed doet, maakt het niet &ldquo;een beetje&rdquo; efficiënter. Die maakt de grote sprong.
            </p>
          </div>

          <p className="text-stone-600 leading-relaxed mb-10">
            Om het concreet te maken: met AI doe ik bijvoorbeeld Google Ads werk in 30% van de tijd. Niet omdat de tool alles overneemt, maar omdat ik weet waar ik het inzet, hoe ik het aanstur en wanneer ik het resultaat moet bijsturen. Diezelfde winst is er voor vrijwel elke kenniswerker, mits je de tijd neemt om het te leren.
          </p>

          {/* Author box */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 md:p-8 mb-10">
            <div className="flex items-start gap-5">
              <Image
                src="/images/erikportret.jpg"
                alt="Erik van der Veen"
                width={80}
                height={80}
                className="rounded-2xl object-cover shrink-0"
                unoptimized
              />
              <div>
                <p className="font-bold text-stone-900 text-lg mb-1">Erik van der Veen</p>
                <p className="text-stone-500 text-sm mb-3">
                  AI-trainer, online marketing specialist en digitaal ondernemer. Hij verzorgt AI-trainingen voor bedrijven en biedt consultancy-dagen aan om organisaties te helpen met AI-tools.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                  Neem contact op <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-stone-200">
            <Link href="/artikelen" className="inline-flex items-center gap-2 text-stone-500 hover:text-primary font-medium transition-colors">
              <ArrowLeft size={16} />
              Alle artikelen
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
              Training aanvragen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
