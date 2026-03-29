import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Claude Cowork: de AI-assistent die echt je werk doet',
  description: 'Een eerlijke review van Claude Cowork, de nieuwste tool van Anthropic. Wat kan het, waarom blaast het andere tools weg, en wat betekent het voor banen?',
  keywords: ['Claude Cowork', 'Anthropic', 'AI-assistent', 'AI-tools', 'productiviteit', 'Claude', 'AI review'],
  openGraph: {
    title: 'Claude Cowork: de AI-assistent die echt je werk doet',
    description: 'Een eerlijke review van Claude Cowork door Erik van der Veen. Wat kan het, en wat betekent het voor de toekomst van werk?',
    type: 'article',
    url: 'https://erikvanderveen.nl/artikelen/claude-cowork',
  },
  alternates: { canonical: 'https://erikvanderveen.nl/artikelen/claude-cowork' },
};

export const revalidate = 3600;

const toepassingen = [
  'Documenten en rapporten laten opstellen, inclusief opmaak, tabellen en grafieken',
  "CSV's, Excel-bestanden en JSON verwerken en visualiseren",
  'Presentaties bouwen in PowerPoint-formaat',
  'Websites en webapplicaties prototypen',
  'E-mailbeheer en communicatie automatiseren',
  'Bestanden organiseren en hernoemen op je computer',
  'Content schrijven voor social media, blogs en nieuwsbrieven',
  'Concurrentieanalyses en marktonderzoek uitvoeren',
  'Vergelijkingen maken en inzichtelijk presenteren',
  'Processen documenteren en werkinstructies opstellen',
];

export default function ClaudeCoworkArtikel() {
  return (
    <>
      {/* JSON-LD Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Claude Cowork: de AI-assistent die echt je werk doet',
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
            url: 'https://erikvanderveen.nl/artikelen/claude-cowork',
            description: 'Een eerlijke review van Claude Cowork, de nieuwste tool van Anthropic.',
          }),
        }}
      />

      {/* Hero */}
      <div className="relative overflow-hidden bg-stone-900">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
        <div className="absolute inset-0 plus-pattern opacity-40" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <nav className="flex items-center gap-1.5 mb-8 text-sm">
            <Link href="/" className="text-stone-400 hover:text-white transition-colors">Home</Link>
            <span className="text-stone-500">/</span>
            <Link href="/artikelen" className="text-stone-400 hover:text-white transition-colors">Artikelen</Link>
            <span className="text-stone-500">/</span>
            <span className="text-stone-300">Claude Cowork</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-stone-300 text-sm font-medium">Review</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Claude Cowork: de AI-assistent die echt je werk doet
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-stone-400">
            <span>Erik van der Veen</span>
            <span>29 maart 2026</span>
            <span>8 min leestijd</span>
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
            Ik heb in 180 plus AI-trainingen en 25 jaar digitale marketing behoorlijk veel tools voorbij zien komen. In de afgelopen drie jaar heb ik tientallen AI-tools voorbij zien komen. Maar wat ik de afgelopen weken heb meegemaakt met Claude Cowork, slaat werkelijk alles wat ik tot nu toe heb gezien.
          </p>

          <h2 className="text-2xl font-extrabold text-stone-900 mb-6">
            Wat is Claude Cowork?
          </h2>

          <p className="text-stone-600 leading-relaxed mb-6">
            Claude Cowork is de nieuwste tool van Anthropic, het bedrijf achter Claude. Waar je bij een normaal AI-chatgesprek antwoorden krijgt op vragen, gaat Cowork een enorme stap verder: het voert taken daadwerkelijk uit. Het leest je bestanden, maakt documenten, analyseert data, bouwt presentaties en nog veel meer. En dat allemaal in gewone mensentaal. Geen code, geen technische kennis nodig.
          </p>

          <h2 className="text-2xl font-extrabold text-stone-900 mb-6">
            Van 20 naar 100 euro per maand
          </h2>

          <p className="text-stone-600 leading-relaxed mb-10">
            Ik was er zo intensief mee bezig dat ik vrij snel van het standaard abonnement van 20 euro per maand ben overgestapt naar het Max-abonnement van 100 euro per maand. En zelfs daar zat ik regelmatig tegen de limiet aan. Dat zegt wel iets over hoe verslavend productief deze tool is.
          </p>

          {/* Wat kan Claude Cowork */}
          <h2 className="text-2xl font-extrabold text-stone-900 mb-6">
            Wat kan Claude Cowork in de praktijk?
          </h2>

          <p className="text-stone-600 leading-relaxed mb-6">
            Laat me een paar concrete voorbeelden geven uit mijn eigen werkpraktijk:
          </p>

          {/* Voorbeeld 1 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 mb-4">
            <h3 className="text-lg font-bold text-stone-900 mb-3">Website-analyse in enkele minuten</h3>
            <p className="text-stone-600 leading-relaxed">
              Ik gaf Cowork een URL van een website en vroeg: &ldquo;Analyseer deze site en geef me verbeterpunten voor SEO, conversie en gebruiksvriendelijkheid.&rdquo; Binnen enkele minuten had ik een compleet rapport met concrete aanbevelingen. Geen vaag advies, maar specifieke punten die ik direct kon doorvoeren.
            </p>
          </div>

          {/* Voorbeeld 2 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 mb-4">
            <h3 className="text-lg font-bold text-stone-900 mb-3">50 documenten verwerken in een keer</h3>
            <p className="text-stone-600 leading-relaxed">
              Een klant had een map vol met documenten die geanalyseerd en samengevat moesten worden. Normaal gesproken ben je daar uren mee bezig. Cowork ging er zelfstandig doorheen, vatte elk document samen en leverde een overzichtelijk rapport op. In een fractie van de tijd.
            </p>
          </div>

          {/* Voorbeeld 3 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 mb-4">
            <h3 className="text-lg font-bold text-stone-900 mb-3">CSS in huisstijl omzetten</h3>
            <p className="text-stone-600 leading-relaxed">
              Ik vroeg Cowork om een website te bezoeken en op basis van de stylesheet de huisstijl te analyseren. Vervolgens liet ik alle CSS-code aanpassen zodat de website er consistent uitzag. Kleuren, fonts, spacing: alles werd automatisch aangepast naar de huisstijlrichtlijnen.
            </p>
          </div>

          {/* Voorbeeld 4 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 mb-4">
            <h3 className="text-lg font-bold text-stone-900 mb-3">PowerPoint, Word en PDF maken</h3>
            <p className="text-stone-600 leading-relaxed">
              Cowork kan complete PowerPoint-presentaties, Word-documenten en PDF&apos;s voor je maken. Geef een onderwerp op, beschrijf de structuur die je wilt, en Cowork levert een volledig opgemaakt bestand op dat je direct kunt gebruiken of verder kunt bewerken.
            </p>
          </div>

          {/* Voorbeeld 5 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 mb-4">
            <h3 className="text-lg font-bold text-stone-900 mb-3">Bestanden organiseren via je computer</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Je kunt Cowork ook toegang geven tot mappen op je computer. Stel, je hebt een rommelige map met allerlei bestanden door elkaar. Je zegt gewoon: &ldquo;Maak een map aan die XLS heet en zet daar alle Excel-bestanden in. Maak een PPT-map aan voor alle PowerPoint-bestanden. En een PDF-map voor alle PDF&apos;s.&rdquo; Cowork doet het. Zo simpel is het.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Let op:</strong> als je Cowork toegang geeft tot mappen op je computer, besef dan wel dat mensen die bij jouw Claude-account kunnen komen, in principe ook bij die bestanden kunnen. Verdiep je dus goed in de mogelijkheden en beperkingen en wees zorgvuldig met welke mappen je toegankelijk maakt.
              </p>
            </div>
          </div>

          {/* Voorbeeld 5 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 mb-4">
            <h3 className="text-lg font-bold text-stone-900 mb-3">Geautomatiseerde taken</h3>
            <p className="text-stone-600 leading-relaxed">
              Met Cowork kun je terugkerende taken automatiseren. Denk aan: elke ochtend je e-mail laten samenvatten, wekelijks een rapport laten genereren of dagelijks data laten ophalen en verwerken. Je stelt het een keer in en het draait vanzelf.
            </p>
          </div>

          {/* Voorbeeld 7 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 mb-10">
            <h3 className="text-lg font-bold text-stone-900 mb-3">Prijzen en tarieven scrapen</h3>
            <p className="text-stone-600 leading-relaxed">
              Ik vroeg Cowork om de prijzen en tarieven van producten en diensten van een website te scrapen. Binnen korte tijd had ik een uitgebreide tarievenlijst. Ideaal als je snel een marktoverzicht wilt maken of concurrenten wilt vergelijken.
            </p>
          </div>

          {/* Waarom blaast dit andere tools weg */}
          <h2 className="text-2xl font-extrabold text-stone-900 mb-6">
            Waarom blaast dit andere tools weg?
          </h2>

          <h3 className="text-xl font-bold text-stone-900 mb-4">
            Geen technische kennis nodig
          </h3>

          <p className="text-stone-600 leading-relaxed mb-6">
            Ik heb in al die jaren met tientallen AI-tools gewerkt. Wat Claude Cowork onderscheidt is het gemak. Je hoeft geen technische achtergrond te hebben. Je hoeft geen code te schrijven. Je hoeft geen ingewikkelde interfaces te leren. Je typt gewoon in normale mensentaal wat je wilt en Cowork voert het uit. Dat klinkt simpel, maar dat is precies wat het zo krachtig maakt.
          </p>

          <h3 className="text-xl font-bold text-stone-900 mb-4">
            Meer dan een chatbot
          </h3>

          <p className="text-stone-600 leading-relaxed mb-10">
            Het verschil met andere tools zit hem ook in de diepgang. Cowork kan meerdere stappen achter elkaar uitvoeren, zelfstandig beslissingen nemen en tussentijds om feedback vragen als dat nodig is. Het is geen chatbot die antwoorden geeft. Het is een digitale collega die taken oppakt.
          </p>

          {/* Concrete toepassingen */}
          <h2 className="text-2xl font-extrabold text-stone-900 mb-6">
            Concrete toepassingen voor jouw werk
          </h2>

          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {toepassingen.map((toepassing) => (
              <div key={toepassing} className="bg-white border border-stone-200 rounded-xl p-4">
                <span className="text-stone-700 text-sm">{toepassing}</span>
              </div>
            ))}
          </div>

          {/* Hoe ik bedrijven help */}
          <h2 className="text-2xl font-extrabold text-stone-900 mb-6">
            Hoe ik bedrijven hiermee help
          </h2>

          <p className="text-stone-600 leading-relaxed mb-10">
            Inmiddels bied ik regelmatig consultancy-dagen aan bij klanten, waarbij ik aan de hand van Cowork en Claude Code ze ga helpen om processen te versnellen. Denk aan: documenten sneller laten maken, inzicht krijgen in grote hoeveelheden data, rapportages automatiseren, communicatie stroomlijnen en werkprocessen die normaal uren kosten terugbrengen tot minuten. Ik kom dan een dag langs, breng in kaart waar de kansen liggen, en laat direct zien wat er mogelijk is. De reacties zijn steeds weer hetzelfde: verbazing over wat er al kan, en mijn verbazing is minstens zo groot als die van de klant.
          </p>

          {/* Keerzijde */}
          <h2 className="text-2xl font-extrabold text-stone-900 mb-6">
            De keerzijde: wat betekent dit voor banen?
          </h2>

          <p className="text-stone-600 leading-relaxed mb-6">
            Aan de ene kant ben ik enorm enthousiast over de mogelijkheden. Aan de andere kant vind ik het ook zorgelijk. Als ik zie wat Cowork nu al kan en bedenk dat dit pas het begin is, dan is het onvermijdelijk dat dit gevolgen gaat hebben voor banen. Taken die nu nog uren kosten en door mensen worden uitgevoerd, worden straks in minuten afgehandeld door AI.
          </p>

          <h3 className="text-xl font-bold text-stone-900 mb-4">
            Eerst versnellen, daarna vervangen
          </h3>

          <p className="text-stone-600 leading-relaxed mb-6">
            In de eerste fase zal het vooral mensen helpen om productiever te zijn. AI als assistent, als versneller. Maar naarmate de technologie zich verder ontwikkelt, zullen er onvermijdelijk functies verdwijnen. Administratieve taken, data-invoer, standaard rapportages, routinematig schrijfwerk: dat zijn de gebieden waar de impact het eerst voelbaar zal zijn.
          </p>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-6 mb-10">
            <p className="text-stone-800 font-semibold text-lg leading-relaxed">
              Dat maakt het des te belangrijker om je nu al te verdiepen in deze tools. Niet om je baan te verliezen aan AI, maar om degene te zijn die AI inzet om waardevoller te worden.
            </p>
          </div>

          {/* Aan de slag */}
          <h2 className="text-2xl font-extrabold text-stone-900 mb-6">
            Aan de slag
          </h2>

          <h3 className="text-xl font-bold text-stone-900 mb-4">
            Wat heb je nodig?
          </h3>

          <p className="text-stone-600 leading-relaxed mb-6">
            Claude Cowork is beschikbaar voor iedereen met een betaald Claude-abonnement (vanaf 20 euro per maand). Je hebt de Claude Desktop-app nodig voor de volledige Cowork-ervaring. Je kunt ook opdrachten geven via je telefoon en de documenten worden aangemaakt op je eigen computer.
          </p>

          <h3 className="text-xl font-bold text-stone-900 mb-4">
            Gewoon beginnen
          </h3>

          <p className="text-stone-600 leading-relaxed mb-10">
            Mijn advies: probeer het gewoon. Begin met een simpele taak, een document laten maken, een bestand laten analyseren, je bestanden laten organiseren. En kijk wat er gebeurt. Ik garandeer je dat je versteld zult staan.
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
                  AI-trainer, online marketing specialist en digitaal ondernemer. Hij verzorgt AI-trainingen voor bedrijven en biedt consultancy-dagen aan om organisaties te helpen met AI-tools zoals Claude Cowork en Claude Code.
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
