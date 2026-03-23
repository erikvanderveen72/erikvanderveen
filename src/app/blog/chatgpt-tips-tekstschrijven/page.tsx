import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { ArrowRight, CheckCircle, BookOpen, Lightbulb, MessageSquare, Brain, Sparkles, Shield, Cpu, Users, Zap, PenTool, Target, Search, Mic, Settings, Bot, RefreshCw, FileText, BarChart3, Quote, ChevronUp } from 'lucide-react';

export const metadata: Metadata = {
  title: '33 ChatGPT-tips voor Tekstschrijven 2026 — Praktische Handleiding',
  description: 'Ontdek 33 bewezen ChatGPT-tips voor beter tekstschrijven. Van effectief prompten tot tone-of-voice training. Praktische handleiding door Erik van der Veen.',
  keywords: ['ChatGPT tips', 'tekstschrijven', 'prompten', 'AI schrijven', 'ChatGPT prompts', 'tone of voice', 'copywriting AI'],
  openGraph: {
    title: '33 ChatGPT-tips voor Tekstschrijven 2026',
    description: 'Praktische handleiding: 33 bewezen tips om beter te schrijven met ChatGPT. Door Erik van der Veen.',
    type: 'article',
  },
};

export const revalidate = 3600;

const tips = [
  {
    nr: 1,
    title: 'Geef context: brief ChatGPT zoals je een collega zou briefen',
    icon: MessageSquare,
    content: `Als je wilt dat ChatGPT een goede tekst voor je schrijft, moet je het behandelen als een collega die aan de slag gaat met jouw opdracht. Een collega kan ook niet "zomaar even" een blogartikel, mail of websitetekst uit zijn mouw schudden. Die wil weten: voor wie is de tekst, wat is het doel, hoe lang moet het zijn, welke punten moeten erin, en welke toon past.`,
    prompt: `Schrijf een blogartikel van ongeveer 800 woorden over duurzaam wonen voor huiseigenaren tussen de 35 en 55 jaar. Ze zijn geïnteresseerd in energiebesparing maar hebben weinig tijd. De toon is vriendelijk en praktisch, zonder vakjargon. Leg uit waarom isoleren belangrijk is, noem drie simpele stappen om te beginnen en sluit af met een korte samenvatting en een duidelijke call-to-action.`,
  },
  {
    nr: 2,
    title: 'Geef ChatGPT een rol als expert (en overdrijf gerust)',
    icon: Brain,
    content: `Als je een vraag heel "gewoon" stelt, krijg je vaak ook een heel gewoon antwoord terug. Laat je ChatGPT daarentegen een super-expert spelen, dan wordt het antwoord vaak veel rijker, concreter en creatiever. Je mag best overdrijven in de rolomschrijving — hoe scherper en specifieker de rol, hoe beter ChatGPT snapt welke kant het op moet.`,
    prompt: `Jij bent een chef-kok uit een driesterren-Michelinrestaurant. Je hebt in je leven meer dan 1 miljoen eieren gebakken, je bent 10 jaar professor in eiergerechten geweest en je weet álles over de perfecte textuur. Leg stap voor stap uit hoe ik een perfect gebakken ei maak, inclusief tips voor boter, pan, temperatuur en timing. Schrijf het helder voor een beginner.`,
  },
  {
    nr: 3,
    title: 'Laat ChatGPT jouw schrijfstijl leren (tone-of-voice-trainer)',
    icon: PenTool,
    content: `Je kunt ChatGPT trainen om in jóuw stijl te schrijven. Dat doe je door eerst voorbeelden te geven van teksten waar jij tevreden over bent. Laat ChatGPT vervolgens optreden als een taalexpert die je stijl analyseert. Daarna kun je bij elke nieuwe tekst vragen om in jouw tone of voice te schrijven.`,
    prompt: `Jij bent een Neerlandicus en expert in schrijf- en stijlanalyse. Hier zijn drie teksten die ik zelf heb geschreven en waar ik tevreden over ben. [tekst 1] [tekst 2] [tekst 3]\n\nMaak een grondige analyse van mijn schrijfstijl (tone of voice). Beschrijf o.a.: woordkeuze, zinslengte, tempo, toon (formeel/informeel), humor, structuur en typische formuleringen. Vat dit samen in een set duidelijke schrijfrichtlijnen.`,
  },
  {
    nr: 4,
    title: 'Laat ChatGPT je helpen met de structuur van je tekst',
    icon: BarChart3,
    content: `In plaats van meteen om een uitgewerkte tekst te vragen, kun je ChatGPT eerst inzetten als structuurcoach. Je krijgt dan verschillende mogelijke structuren, zoals probleem-oorzaak-oplossing, vraag & antwoord, stap-voor-stap of verhaalvorm. Kies de structuur die je doel en doelgroep het beste ondersteunt.`,
    prompt: `Ik wil een tekst schrijven over [onderwerp] voor [doelgroep]. Noem verschillende mogelijke structuren voor deze tekst:\n- Een korte omschrijving\n- De voordelen\n- De nadelen\n- In welke situatie deze structuur het meest geschikt is.`,
  },
  {
    nr: 5,
    title: 'Bepaal het doel van je tekst (en laat ChatGPT meedenken)',
    icon: Target,
    content: `Elke tekst heeft een doel. Het helpt enorm om dat doel bewust en concreet te maken, samen met ChatGPT. Denk aan doelen zoals: informeren, geruststellen, overtuigen, activeren, inspireren. Je schrijft dan niet "zomaar een tekst", maar tekst met gericht effect.`,
    prompt: `Ik wil een tekst schrijven over [onderwerp] voor [doelgroep]. Noem 10 mogelijke communicatiedoelen die ik met deze tekst zou kunnen hebben. Geef ze in een lijst met een korte toelichting per doel.`,
  },
  {
    nr: 6,
    title: 'Kies bewust welk gevoel je wilt oproepen bij de lezer',
    icon: Sparkles,
    content: `Een tekst gaat niet alleen over wat je zegt, maar ook over hoe iemand zich voelt als hij het leest. Denk aan: opluchting, vertrouwen, urgentie, nieuwsgierigheid, hoop. Zo stuur je niet alleen op inhoud, maar ook op beleving.`,
    prompt: `Ik wil een tekst schrijven over [onderwerp] voor [doelgroep]. Noem 10 mogelijke gevoelens die ik bij de lezer zou kunnen oproepen met deze tekst. Geef per gevoel een korte toelichting waarom dit relevant kan zijn.`,
  },
  {
    nr: 7,
    title: 'Gebruik ChatGPT als checklist: welke vragen zijn wél en níet beantwoord?',
    icon: CheckCircle,
    content: `Als ChatGPT een tekst voor je heeft geschreven, kun je vragen welke vragen wel en niet beantwoord zijn. Zo ontdek je wat je vergeten bent, waar je niet duidelijk genoeg bent, en waar je misschien slapende honden wakker maakt.`,
    prompt: `Hieronder staat een tekst.\n1. Geef een lijst met vragen die in deze tekst wél worden beantwoord.\n2. Geef daarna een lijst met vragen die een lezer waarschijnlijk nog heeft en die níet of onvoldoende worden beantwoord.\n3. Geef suggesties welke extra alinea's of zinnen ik kan toevoegen om deze openstaande vragen te beantwoorden.`,
  },
  {
    nr: 8,
    title: 'Vraag naar de aannames van ChatGPT',
    icon: Search,
    content: `Elke opdracht bevat impliciete aannames. Je kunt die expliciet maken door ChatGPT te vragen welke aannames het doet over je vraag, doelgroep, doel en context. Klopt iets niet? Dan corrigeer je dat voordat de tekst geschreven wordt.`,
    prompt: `Ik heb een tekst nodig over [onderwerp] voor [doelgroep].\n- Noem 10 aannames die jij nu doet over mijn vraag, de doelgroep, het doel van de tekst en de context.\n- Geef per aanname kort aan waarom je die maakt.`,
  },
  {
    nr: 9,
    title: 'Vraag de mening van je stakeholders (zonder dat ze er zelf bij zijn)',
    icon: Users,
    content: `Je kunt ChatGPT vragen om te reageren alsof het 20 verschillende interne stakeholders is: hun mening, wat ze goed vinden, waar ze kritisch op zijn. Kies rollen zoals visionair, jurist, ondernemer, financieel expert, pessimist, optimist. Zo zie je in één klap waar enthousiasme zit en waar weerstand ligt.`,
    prompt: `Hieronder staat een tekst/idee. Reageer nu als zou je deze 20 verschillende stakeholders zijn:\n- Hun mening\n- Wat ze goed vinden\n- Waar ze kritisch op zijn\n- Wat zij zouden willen aanpassen.`,
  },
  {
    nr: 10,
    title: 'Laat experts met elkaar in gesprek gaan (fictieve dialogen)',
    icon: Quote,
    content: `Je kunt stakeholders ook met elkaar laten praten. Bijvoorbeeld: de jurist is kritisch op risico's en formuleringen, de ondernemer benadrukt kansen en snelheid — beiden bevragen elkaar. Ideaal als voorbereiding op lastige meetings.`,
    prompt: `Hier is mijn idee/tekst: [tekst].\nLaat twee experts hierover in debat gaan:\n- De jurist is kritisch op de risico's en formuleringen\n- De ondernemer benadrukt vooral kansen en snelheid\nBeiden bevragen elkaar en reageren op elkaars argumenten.`,
  },
  {
    nr: 11,
    title: 'Laat ChatGPT rekening houden met taal, cultuur en gevoeligheden',
    icon: Sparkles,
    content: `ChatGPT kan meer dan vertalen. Het kan ook meedenken over toon, cultuur en gevoeligheden. Zo krijg je niet alleen correcte taal, maar ook een beter gevoel voor hoe je boodschap overkomt in een andere cultuur.`,
    prompt: `Schrijf 4 versies van een klachtenbrief in het Italiaans aan een luxe vijfsterrencamping.\n- duidelijk zijn over het gebrek aan warm water\n- aangeven dat ik teleurgesteld ben\n- maar wél respectvol blijven\n\nGeef per versie aan hoe deze gemiddeld door een Italiaanse eigenaar zou worden ervaren. Adviseer welke versie het meest passend is.`,
  },
  {
    nr: 12,
    title: 'Verander je prompt, niet alleen het antwoord',
    icon: RefreshCw,
    content: `Als je een zin of tekst van ChatGPT niet prettig vindt, gebruik dat om je prompt te verbeteren. Vraag ChatGPT welke schrijftechniek of stijlvorm werd gebruikt en vermijd die in toekomstige prompts. Zo leer je welke stijlelementen je wel of niet wilt.`,
    prompt: `Deze zin spreekt me niet aan: "[zin]". Waarom voelt dit niet passend in een tekst voor [doelgroep]? Welke schrijftechniek of stijlvorm wordt hier gebruikt? Hoe kan ik mijn prompt aanpassen om dit voortaan te vermijden?`,
  },
  {
    nr: 13,
    title: 'Gebruik de betaalde versie (en het Denken-model)',
    icon: Zap,
    content: `Voor simpele vragen is de gratis versie prima. Maar voor serieuzer tekstwerk loont de betaalde versie. Het Denken/Thinking-model redeneert beter en is sterker in complexe opdrachten zoals tone of voice, structuur en meerdere rondes redactie.`,
    prompt: null,
  },
  {
    nr: 14,
    title: 'Gebruik de Canvas-modus voor overzichtelijk herschrijven',
    icon: FileText,
    content: `In Canvas zie je je tekst groot in beeld, met ernaast de chat. Je kunt gericht zeggen: "Pas alleen de inleiding aan" of "Herschrijf alleen deze alinea in een andere toon." ChatGPT verandert dan alleen het deel dat jij aanwijst — de rest blijft staan. Ideaal om teksten te finetunen.`,
    prompt: null,
  },
  {
    nr: 15,
    title: 'Gebruik ChatGPT voor diepgaand onderzoek',
    icon: Search,
    content: `De grootste kracht van ChatGPT zit in diepgaand onderzoeken en samenhangende rapporten schrijven. Ideaal voor whitepapers, longreads, interne memo's en uitgebreide kennisartikelen.`,
    prompt: `Ik wil een uitgebreid, goed gestructureerd rapport over [onderwerp] voor [doelgroep].\n1. Verken eerst het onderwerp globaal: welke deelonderwerpen zijn er?\n2. Stel een gedetailleerde inhoudsopgave voor.\n3. Schrijf per hoofdstuk een samenvatting.\n4. Werk daarna het volledige rapport uit met duidelijke koppen, voorbeelden en waar mogelijk verwijzingen naar bronnen.`,
  },
  {
    nr: 16,
    title: 'Speel met temperatuur: van veilig tot supercreatief',
    icon: Sparkles,
    content: `Je kunt ChatGPT laten schrijven op verschillende niveaus van creativiteit. Temperatuur 0 is voorspelbaar en veilig, temperatuur 2 is maximaal creatief en verrassend. Speel hiermee en ontdek welke "stand" het beste bij jou en je doelgroep past.`,
    prompt: `Schrijf deze tekst drie keer:\n- versie A met temperatuur 0 (heel feitelijk en neutraal)\n- versie B met temperatuur 1 (creatiever, met voorbeelden)\n- versie C met temperatuur 2 (maximaal creatief, out-of-the-box)`,
  },
  {
    nr: 17,
    title: 'Gebruik je stem: praten en dicteren met ChatGPT',
    icon: Mic,
    content: `Je hoeft niet alles te typen. Je kunt een gesprek voeren met je stem, of de dicteerfunctie gebruiken om rommelig je ideeën in te spreken. ChatGPT zet het om in een logische, gestructureerde tekst. Ideaal voor onderweg.`,
    prompt: null,
  },
  {
    nr: 18,
    title: 'Gebruik Personalisatie: laat ChatGPT standaard bij jou passen',
    icon: Settings,
    content: `In Personalisatie (Custom Instructions) kun je vastleggen wie jij bent, voor welke doelgroep je schrijft, in welke taal, welke tone of voice je prettig vindt, en of je graag lijstjes of tabellen ziet. Vanaf dat moment zijn al je nieuwe chats beter "voorgewarmd" op jouw manier van werken.`,
    prompt: `Ik ben een freelance marketeer en tekstschrijver. Ik schrijf veel blogs, landingspagina's en LinkedIn-posts. Antwoord altijd in het Nederlands, in een vlotte maar professionele toon. Wees praktisch, geef concrete voorbeelden en sluit af met een korte samenvatting in bullets.`,
  },
  {
    nr: 19,
    title: 'Maak je eigen GPT met je eigen kennisbasis',
    icon: Bot,
    content: `In de betaalde versie kun je je eigen GPT bouwen. Dit is een maatwerk-assistent met jouw productinformatie, FAQ's, handleidingen, richtlijnen en tone-of-voice-documenten. Ideaal voor klantservice, tekstschrijven of interne communicatie.`,
    prompt: null,
  },
  {
    nr: 20,
    title: 'Gebruik een superprompt: laat ChatGPT de perfecte vraag maken',
    icon: Zap,
    content: `Een superprompt is een prompt die voor jou een betere prompt maakt. In plaats van zelf na te denken over alle onderdelen, laat je ChatGPT jou uitvragen en de prompt opbouwen. Na afloop beoordeel je samen de kwaliteit.`,
    prompt: `Word mijn Prompt Maker. Je bent daarin de allerbeste ter wereld. Help me de ideale prompt voor mijn behoeften te creëren.\n\nVraag naar het onderwerp van de prompt.\nGeef op basis van mijn antwoord:\na) Aangepaste prompt, een duidelijke, beknopte versie.\nb) Suggesties, ideeën om de prompt te verbeteren.\nc) Vragen, wat je verder nodig hebt om de prompt te verfijnen.\nWerk de prompt bij volgens mijn feedback.\nBeoordeel elke prompt op een schaal van 1 tot 10. Is de score 8 of hoger, vraag dan of ik deze wil uitvoeren.`,
  },
  {
    nr: 21,
    title: 'Laat ChatGPT jóu uitvragen voordat je gaat schrijven',
    icon: MessageSquare,
    content: `Je kunt ChatGPT vragen om jou eerst uit te horen met 10 vragen over inhoud, doel, lengte en toon. Eventueel met multiple choice. Op basis van jouw antwoorden maakt ChatGPT dan eerst een goede prompt, en daarna pas de tekst.`,
    prompt: `Ik wil een artikel schrijven over [onderwerp] voor [doelgroep]. Stel mij 10 multiplechoicevragen om mijn wensen te bepalen. Ik antwoord met A, B, C of D. Stel de vragen één voor één en wacht steeds op mijn antwoord. Gebruik mijn antwoorden daarna om een perfecte prompt te maken.`,
  },
  {
    nr: 22,
    title: 'Schrijven voor verschillende doelgroepen en niveaus',
    icon: Users,
    content: `Je kunt ChatGPT hetzelfde onderwerp laten uitleggen op totaal verschillende niveaus: van wetenschapper tot kind van zeven. Je kunt ook metaforen inzetten om ingewikkelde onderwerpen te koppelen aan iets dat je al kent.`,
    prompt: `Leg [onderwerp] uit aan een wetenschapper die vijf keer de Nobelprijs heeft gewonnen.\nLeg dit nu uit aan een kind van zeven.\nGebruik daarna een metafoor met een speeltuin om het nog begrijpelijker te maken.`,
  },
  {
    nr: 23,
    title: 'Laat ChatGPT zélf zijn tekst beoordelen (en verbeteren)',
    icon: CheckCircle,
    content: `Je kunt ChatGPT vragen om kritisch naar een tekst te kijken als een ervaren redacteur. Je krijgt een analyse, een lijst verbeterpunten én een opgepoetste versie. Daarop kun je verder bouwen.`,
    prompt: `Beoordeel de onderstaande tekst alsof je een ervaren redacteur bent.\n1. Wat gaat er goed?\n2. Wat kan beter?\n3. Maak een checklist met concrete verbeterpunten.\n4. Geef daarna een verbeterde versie van de tekst.`,
  },
  {
    nr: 24,
    title: 'Laat ChatGPT je verhaal per alinea opbouwen',
    icon: BarChart3,
    content: `In plaats van direct te schrijven, kun je eerst om een alinea-indeling vragen: introductie, probleemschets, uitleg, voorbeelden, afronding met call-to-action. Als de opbouw logisch voelt, laat je ChatGPT de tekst uitwerken, eventueel alinea voor alinea.`,
    prompt: `Ik wil een artikel schrijven over [onderwerp] voor [doelgroep]. Bouw mijn verhaal op per alinea. Geef puntsgewijs aan wat ik in elke alinea zou moeten behandelen.`,
  },
  {
    nr: 25,
    title: 'Speel met de mate van formaliteit',
    icon: PenTool,
    content: `Laat ChatGPT variëren in formaliteit van 1 (extreem informeel) tot 5 (extreem formeel). Meestal zul je ergens rond 3 uitkomen. Spreekt een bepaalde toon je aan? Gebruik die voortaan als standaard.`,
    prompt: `Schrijf deze tekst in 5 varianten, oplopend in formaliteit. 1 = extreem informeel, 5 = extreem formeel. Label elke versie duidelijk met 1 t/m 5.`,
  },
  {
    nr: 26,
    title: 'Bouw je tekst stap voor stap met variaties per alinea',
    icon: Lightbulb,
    content: `Laat ChatGPT je tekst stapsgewijs opbouwen: vraag 4 varianten per alinea, kies de beste, en ga door. Het kost iets meer tijd, maar je hebt veel meer controle en minder corrigeerwerk achteraf.`,
    prompt: `Schrijf 4 varianten van de inleidende alinea voor een artikel over [onderwerp] voor [doelgroep]. Vraag mij welke variant ik kies of dat ik nieuwe opties wil. Gebruik mijn keuze om 4 varianten van de volgende alinea te schrijven.`,
  },
  {
    nr: 27,
    title: 'Factcheck altijd: gebruik ChatGPT niet als enige bron',
    icon: Shield,
    content: `Hoe goed ChatGPT ook schrijft, het weet niet alles zeker en kan dingen verzinnen (hallucineren). Bij feiten, cijfers, wetgeving en medische info moet je nooit blind varen op één antwoord. Gebruik ChatGPT als startpunt en structuurmaker, niet als eindstation van de waarheid.`,
    prompt: null,
  },
  {
    nr: 28,
    title: 'Voer je eigen bronnen en documenten mee',
    icon: FileText,
    content: `Plak eigen research, beleidsdocumenten, productinformatie of interne richtlijnen in ChatGPT. Zo voorkom je dat het dingen "erbij verzint" en zorg je dat je teksten kloppen met jouw organisatie.`,
    prompt: `Hieronder staat onze productpagina + interne richtlijnen. Gebruik uitsluitend deze info voor de inhoud en schrijf een nieuwe, heldere uitleg voor [doelgroep]. Vul niets in wat hier niet staat; als info ontbreekt, stel dan eerst vragen.`,
  },
  {
    nr: 29,
    title: 'Teksten herschrijven, versimpelen en inkorten',
    icon: RefreshCw,
    content: `Je hoeft niet altijd from scratch te beginnen. Vaak heb je al een tekst die te lang, te ingewikkeld of te wollig is. Laat ChatGPT versimpelen naar B1-niveau, inkorten of scanbaar maken met tussenkoppen en bullets.`,
    prompt: null,
  },
  {
    nr: 30,
    title: 'Vraag na een lange chat naar de ideale prompt',
    icon: Lightbulb,
    content: `Na een lang gesprek waarin je stap voor stap naar het resultaat bent gekomen, vraag je ChatGPT welke prompt je aan het begin had moeten geven. Bewaar die "ideale prompts" in een document — na een tijdje heb je een persoonlijke verzameling van bewezen prompts.`,
    prompt: `We hebben nu samen dit eindresultaat bereikt. Stel dat ik dit gesprek opnieuw zou beginnen: welke enkele prompt had ik dan aan het begin moeten geven om direct tot dit resultaat te komen?`,
  },
  {
    nr: 31,
    title: 'Hergebruik content: één tekst, tien vormen',
    icon: Cpu,
    content: `Een sterke basistekst kun je in allerlei vormen inzetten. Eén keer goed nadenken over inhoud wordt ineens meerdere uitingen: LinkedIn-post, nieuwsbrieffragment, homepage-intro, social posts en elevator pitch.`,
    prompt: `Neem onderstaande blog als basis en maak hiervan:\n- een LinkedIn-post\n- een kort nieuwsbrieffragment\n- een pakkende intro voor op de homepage\n- 5 losse social media-posts\n- een elevator pitch van maximaal 60 seconden`,
  },
  {
    nr: 32,
    title: 'Gebruik een vaste kwaliteitscheck vóór publicatie',
    icon: CheckCircle,
    content: `Maak van de eindcontrole een vaste ChatGPT-ronde. Zo dwing je jezelf tot een eindcheck met focus, in plaats van "even snel doorlezen en publiceren".`,
    prompt: `Beoordeel de onderstaande tekst op de volgende punten:\n1. Past de tekst bij [doelgroep]?\n2. Is het doel van de tekst duidelijk en behaald?\n3. Is de kernboodschap snel te begrijpen?\n4. Is de tone of voice consistent?\n5. Staat er een duidelijke call-to-action in?\n6. Welke 5 concrete verbeterpunten zie je?\n\nGeef eerst je analyse, schrijf daarna een verbeterde versie.`,
  },
  {
    nr: 33,
    title: 'Let op privacy en vertrouwelijke informatie',
    icon: Shield,
    content: `ChatGPT is geen veilige plek voor álle soorten informatie. Wees terughoudend met namen, BSN, klantnummers, medische gegevens en vertrouwelijke contracten. Verander waar mogelijk namen in initialen of beschrijvingen. Zo profiteer je van de kracht van ChatGPT, maar houd je privacy wél in het oog.`,
    prompt: null,
  },
];

const faqItems = [
  { question: 'Wat zijn de beste ChatGPT-tips voor tekstschrijven?', answer: 'De belangrijkste tips zijn: geef altijd uitgebreide context (tip 1), geef ChatGPT een expertrol (tip 2), train je eigen schrijfstijl (tip 3), en gebruik de checklist-methode om ontbrekende informatie te ontdekken (tip 7). Begin met deze vier en bouw van daaruit verder.' },
  { question: 'Hoe laat ik ChatGPT in mijn eigen schrijfstijl schrijven?', answer: 'Geef ChatGPT 3 voorbeeldteksten van jezelf en vraag om een grondige stijlanalyse. Sla de resulterende schrijfrichtlijnen op als je "tone of voice" en verwijs daar bij elke nieuwe opdracht naar. Zie tip 3 voor de exacte prompt.' },
  { question: 'Wat is een superprompt?', answer: 'Een superprompt is een prompt die ChatGPT helpt om voor jou een betere prompt te maken. In plaats van zelf alles te bedenken, laat je ChatGPT je stap voor stap uitvragen en de prompt opbouwen. Zie tip 20 voor het complete voorbeeld.' },
  { question: 'Kan ik ChatGPT gebruiken voor vertrouwelijke bedrijfsinformatie?', answer: 'Wees terughoudend. Vermijd namen, BSN-nummers, klantnummers en vertrouwelijke contracten. Gebruik initialen of beschrijvingen ("klant A", "leverancier B"). Overweeg een eigen GPT met kennisbasis voor gevoelige informatie. Zie tip 33.' },
  { question: 'Moet ik de betaalde versie van ChatGPT gebruiken?', answer: 'Voor eenvoudige vragen is de gratis versie prima. Maar voor serieuzer tekstwerk — langere stukken, strategie, tone-of-voice-werk — loont de betaalde versie met het Denken/Thinking-model. Het is maandelijks opzegbaar. Zie tip 13.' },
];

export default function ChatGPTTipsPage() {
  return (
    <>
      <PageHero
        title="33 ChatGPT-tips"
        highlightedSubtitle="voor tekstschrijven"
        subtitle="Van het geven van context tot het trainen van je eigen schrijfstijl. Alles wat je nodig hebt om AI effectief in te zetten voor beter schrijven."
        badge="Praktische handleiding — 2026"
        showBreadcrumbs
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: '33 ChatGPT-tips voor Tekstschrijven', href: '/blog/chatgpt-tips-tekstschrijven' },
        ]}
      />

      {/* Inhoudsopgave */}
      <section className="bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary-light p-2.5 rounded-xl">
              <BookOpen size={20} className="text-primary" />
            </div>
            <h2 className="text-xl font-bold text-stone-900">Inhoudsopgave</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {tips.map((tip) => (
              <a
                key={tip.nr}
                href={`#tip-${tip.nr}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-stone-600 hover:text-primary hover:bg-primary-light transition-all"
              >
                <span className="text-primary font-bold w-6 shrink-0">{tip.nr}.</span>
                <span className="truncate">{tip.title.split(':')[0].split('(')[0].trim()}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-16">
            {tips.map((tip) => (
              <article
                key={tip.nr}
                id={`tip-${tip.nr}`}
                className="scroll-mt-24"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-primary to-primary-dark text-white w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg shrink-0">
                    {tip.nr}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 leading-tight">
                      {tip.title}
                    </h2>
                  </div>
                </div>

                <div className="ml-0 sm:ml-16">
                  <p className="text-stone-600 leading-relaxed mb-4">{tip.content}</p>

                  {tip.prompt && (
                    <div className="bg-stone-900 rounded-2xl p-5 sm:p-6 mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <MessageSquare size={14} className="text-violet-400" />
                        <span className="text-violet-400 text-xs font-semibold uppercase tracking-wider">Voorbeeldprompt</span>
                      </div>
                      <p className="text-stone-300 text-sm leading-relaxed whitespace-pre-line font-mono">
                        {tip.prompt}
                      </p>
                    </div>
                  )}
                </div>

                {tip.nr < 33 && (
                  <div className="border-b border-stone-100 mt-8" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Back to top */}
      <div className="text-center pb-8">
        <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
          <ChevronUp size={16} />
          Terug naar boven
        </a>
      </div>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Wil je dit leren in een hands-on training?</h2>
            <p className="text-violet-200 text-lg mb-8 max-w-2xl mx-auto">
              In mijn ChatGPT-training leer je al deze tips en meer, afgestemd op jouw team en branche. 3 uur, direct toepasbaar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all shadow-xl">
                Training aanvragen <ArrowRight size={18} />
              </Link>
              <Link href="/chatgpt" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all">
                Bekijk ChatGPT Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
            <h2 className="text-3xl font-bold text-stone-900">Veelgestelde vragen</h2>
          </div>
          <FAQSchema items={faqItems} />
        </div>
      </section>
    </>
  );
}
