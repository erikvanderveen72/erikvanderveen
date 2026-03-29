export interface WikiSection {
  id: string;
  title: string;
  content: string;
  subsections?: WikiSection[];
}

export interface WikiArticle {
  slug: string;
  title: string;
  summary: string;
  image?: string;
  imageCaption?: string;
  category: string;
  tags: string[];
  lastUpdated: string;
  readingTime: number;
  sections: WikiSection[];
  infobox?: {
    title: string;
    image?: string;
    imageCaption?: string;
    rows: { label: string; value: string }[];
  };
  relatedArticles?: string[];
}

export interface WikiCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  articleCount: number;
}

export const categories: WikiCategory[] = [
  { slug: 'geografie', name: 'Geografie', description: 'Landen, steden, landschappen en natuurlijke fenomenen', icon: '🌍', color: 'from-emerald-500 to-teal-600', articleCount: 1 },
  { slug: 'geschiedenis', name: 'Geschiedenis', description: 'Belangrijke gebeurtenissen, tijdperken en beschavingen', icon: '📜', color: 'from-amber-500 to-orange-600', articleCount: 0 },
  { slug: 'wetenschap', name: 'Wetenschap', description: 'Natuurkunde, scheikunde, biologie en technologie', icon: '🔬', color: 'from-blue-500 to-indigo-600', articleCount: 0 },
  { slug: 'cultuur', name: 'Cultuur', description: 'Kunst, muziek, literatuur en tradities', icon: '🎨', color: 'from-purple-500 to-violet-600', articleCount: 0 },
  { slug: 'technologie', name: 'Technologie', description: 'Informatica, internet, AI en innovatie', icon: '💻', color: 'from-cyan-500 to-blue-600', articleCount: 0 },
  { slug: 'natuur', name: 'Natuur', description: 'Flora, fauna, ecosystemen en milieu', icon: '🌿', color: 'from-green-500 to-emerald-600', articleCount: 0 },
  { slug: 'sport', name: 'Sport', description: 'Competities, atleten en sportgeschiedenis', icon: '⚽', color: 'from-red-500 to-rose-600', articleCount: 0 },
  { slug: 'maatschappij', name: 'Maatschappij', description: 'Politiek, economie, onderwijs en samenleving', icon: '🏛️', color: 'from-slate-500 to-gray-600', articleCount: 0 },
];

export const articles: WikiArticle[] = [
  {
    slug: 'groningen',
    title: 'Groningen',
    summary: 'Groningen is de hoofdstad van de gelijknamige provincie in het noorden van Nederland. De stad staat bekend om haar bruisende studentenleven, rijke geschiedenis en de iconische Martinitoren. Met bijna 240.000 inwoners is het de grootste stad van Noord-Nederland.',
    image: '/images/wikiwijzer/groningen-hero.jpg',
    imageCaption: 'Uitzicht over de Grote Markt met de Martinitoren',
    category: 'geografie',
    tags: ['Nederland', 'Stad', 'Provincie Groningen', 'Noord-Nederland', 'Universiteitsstad'],
    lastUpdated: '2026-03-28',
    readingTime: 12,
    infobox: {
      title: 'Groningen',
      image: '/images/wikiwijzer/groningen-hero.jpg',
      imageCaption: 'Skyline van Groningen',
      rows: [
        { label: 'Provincie', value: 'Groningen' },
        { label: 'Inwoners', value: '238.147 (2025)' },
        { label: 'Oppervlakte', value: '83,69 km²' },
        { label: 'Burgemeester', value: 'Koen Schuiling (VVD)' },
        { label: 'Coördinaten', value: '53°13\'N, 6°34\'O' },
        { label: 'Postcode', value: '9700–9747' },
        { label: 'Netnummer', value: '050' },
        { label: 'Universiteit', value: 'Rijksuniversiteit Groningen (1614)' },
        { label: 'Bijnaam', value: 'Stad (Gronings)' },
      ],
    },
    sections: [
      {
        id: 'geschiedenis',
        title: 'Geschiedenis',
        content: 'De geschiedenis van Groningen gaat terug tot de vroege middeleeuwen. De eerste vermelding van de stad dateert uit 1040, toen het nog een kleine nederzetting was rond een kerk. In de eeuwen die volgden groeide Groningen uit tot een belangrijke handelsstad in het noorden van Nederland.\n\nIn 1614 werd de Rijksuniversiteit Groningen opgericht, wat de stad een intellectueel centrum maakte. De universiteit is tot op de dag van vandaag een van de belangrijkste instellingen van de stad en trekt jaarlijks duizenden studenten uit binnen- en buitenland.',
        subsections: [
          {
            id: 'middeleeuwen',
            title: 'Middeleeuwen',
            content: 'Tijdens de middeleeuwen was Groningen een belangrijke handelsstad die lid was van het Hanzeverbond. De stad had sterke handelsrelaties met steden in Duitsland, Scandinavië en het Baltisch gebied. De Martinikerk, gebouwd in de 13e eeuw, getuigt nog steeds van de welvaart uit die periode.\n\nDe stad verwierf in 1245 stadsrechten en groeide snel als marktplaats voor de omliggende agrarische gebieden. De Groningers stonden bekend om hun onafhankelijke karakter en verzetten zich regelmatig tegen de heerschappij van buitenlandse vorsten.',
          },
          {
            id: 'gouden-eeuw',
            title: 'Gouden Eeuw',
            content: 'In de 17e eeuw beleefde Groningen, net als de rest van de Republiek der Zeven Verenigde Nederlanden, een periode van grote bloei. De oprichting van de universiteit in 1614 trok geleerden van over heel Europa aan. De stad werd versterkt met imposante verdedigingswerken, waarvan het Noorderplantsoen nu een overblijfsel is.\n\nHet Beleg van Groningen in 1672 door de bisschop van Münster, Bernhard von Galen (bijgenaamd "Bommen Berend"), is een van de meest bekende gebeurtenissen uit deze periode. De stad wist stand te houden en viert deze overwinning nog jaarlijks op 28 augustus.',
          },
        ],
      },
      {
        id: 'geografie-en-klimaat',
        title: 'Geografie en klimaat',
        content: 'Groningen ligt in het noordoosten van Nederland, op het Hondsrug-plateau. De stad wordt doorsneden door verschillende kanalen en diepen, waaronder het Eemskanaal en het Winschoterdiep. Het omringende landschap is overwegend vlak en wordt gekenmerkt door uitgestrekte landbouwgronden.\n\nHet klimaat is gematigd zeeklimaat (Cfb volgens de Köppen-classificatie), met koele winters en milde zomers. De gemiddelde temperatuur bedraagt ongeveer 9,5°C per jaar. Door de noordelijke ligging kan het in de winter behoorlijk koud worden, met gemiddelden rond het vriespunt in januari.',
      },
      {
        id: 'bevolking',
        title: 'Bevolking',
        content: 'Met ongeveer 238.000 inwoners is Groningen de zesde stad van Nederland qua inwonertal. De stad heeft een opvallend jonge bevolking: bijna een kwart van de inwoners is student. Dit maakt Groningen de jongste stad van Nederland, met een gemiddelde leeftijd van slechts 36 jaar.\n\nDe bevolking is de afgelopen decennia sterk gegroeid, mede door de aantrekkingskracht van de universiteit en de Hanzehogeschool. Groningen is ook een populaire bestemming voor internationale studenten, waardoor de stad een diverse en multiculturele sfeer heeft.',
      },
      {
        id: 'economie',
        title: 'Economie',
        content: 'De economie van Groningen is divers en kent verschillende sterke sectoren. De stad is van oudsher een belangrijk centrum voor de landbouw en voedingsindustrie in Noord-Nederland. Daarnaast speelt de energiesector een grote rol, mede door de nabijheid van het Groningenveld — een van de grootste aardgasvelden ter wereld.\n\nIn de afgelopen jaren heeft Groningen zich ontwikkeld tot een belangrijk centrum voor innovatie en technologie. De Zernike Campus, waar de universiteit en diverse bedrijven samenwerken, is een broedplaats voor startups en kennisintenieve bedrijven. De IT-sector, gezondheidstechnologie en duurzame energie zijn snelgroeiende sectoren.',
        subsections: [
          {
            id: 'aardgas',
            title: 'Aardgas en de energietransitie',
            content: 'Het Groningenveld, ontdekt in 1959 bij Slochteren, was decennialang de motor van de Nederlandse economie. De gaswinning leverde honderden miljarden euro\'s op voor de staatskas. Echter, de winning leidde ook tot aardbevingen die grote schade veroorzaakten aan woningen en gebouwen in de regio.\n\nNa jarenlange protesten van bewoners besloot de overheid in 2018 om de gaswinning af te bouwen. In 2023 werd de gaskraan definitief dichtgedraaid. De regio richt zich nu op de energietransitie, met grote investeringen in waterstof, windenergie en zonne-energie.',
          },
        ],
      },
      {
        id: 'onderwijs',
        title: 'Onderwijs en wetenschap',
        content: 'Groningen is een van de belangrijkste onderwijssteden van Nederland. De Rijksuniversiteit Groningen (RUG), opgericht in 1614, is een van de oudste en meest prestigieuze universiteiten van het land. De universiteit telt meer dan 36.000 studenten en biedt een breed scala aan opleidingen.\n\nDe Hanzehogeschool Groningen is met meer dan 30.000 studenten een van de grootste hogescholen van Nederland. Samen zorgen deze twee instellingen ervoor dat bijna 60.000 studenten in de stad studeren, wat Groningen een uniek karakter geeft.\n\nDe universiteit heeft een sterke internationale reputatie, vooral op het gebied van astronomie, scheikunde en geneeskunde. Ben Feringa, hoogleraar aan de RUG, won in 2016 de Nobelprijs voor de Scheikunde voor zijn werk aan moleculaire machines.',
      },
      {
        id: 'cultuur-en-bezienswaardigheden',
        title: 'Cultuur en bezienswaardigheden',
        content: 'Groningen heeft een rijke culturele scene en talloze bezienswaardigheden. De stad staat bekend om haar levendige uitgaansleven, festivals en culturele instellingen.',
        subsections: [
          {
            id: 'martinitoren',
            title: 'Martinitoren',
            content: 'De Martinitoren, door Groningers liefkozend "d\'Olle Grieze" (de Oude Grijze) genoemd, is het icoon van de stad. De toren is 96,8 meter hoog en dateert oorspronkelijk uit de 13e eeuw. De huidige toren is het resultaat van verschillende verbouwingen na blikseminslagen en branden. Bezoekers kunnen de 260 treden beklimmen voor een spectaculair uitzicht over de stad en het omringende platteland.',
          },
          {
            id: 'groninger-museum',
            title: 'Groninger Museum',
            content: 'Het Groninger Museum, gelegen op een eiland in het Verbindingskanaal tegenover het station, is een van de meest opvallende gebouwen van Nederland. Het museum werd ontworpen door de Italiaanse architect Alessandro Mendini en geopend in 1994. Het biedt een gevarieerde collectie van oude kunst tot hedendaagse tentoonstellingen en mode.',
          },
          {
            id: 'noorderplantsoen',
            title: 'Noorderplantsoen',
            content: 'Het Noorderplantsoen is een geliefd stadspark dat in de 19e eeuw werd aangelegd op de plek van de voormalige stadswallen. Het park is een populaire ontmoetingsplek voor studenten en bewoners, vooral in de zomer. Jaarlijks vindt hier het Noorderzon Performing Arts Festival plaats, een van de grootste kunstfestivals van Nederland.',
          },
        ],
      },
      {
        id: 'vervoer',
        title: 'Vervoer',
        content: 'Groningen Hoofdstation is het belangrijkste treinstation van Noord-Nederland en een knooppunt voor regionaal en nationaal treinverkeer. Vanaf het station vertrekken treinen naar onder andere Amsterdam, Zwolle, Leeuwarden en verschillende Duitse steden.\n\nGroningen staat bekend als een echte fietsstad. Met een uitgebreid netwerk van fietspaden en fietsenstallingen is de fiets het belangrijkste vervoermiddel in de stad. De stad heeft een van de hoogste fietsdichtheden van Nederland.\n\nDe stad beschikt ook over een uitgebreid busnetwerk, verzorgd door Qbuzz. Groningen Airport Eelde, gelegen ten zuiden van de stad, biedt vluchten naar diverse bestemmingen.',
      },
      {
        id: 'sport-en-recreatie',
        title: 'Sport',
        content: 'FC Groningen is de professionele voetbalclub van de stad, spelend in de Eredivisie. De club speelt zijn thuiswedstrijden in de Euroborg, een modern stadion met een capaciteit van ruim 22.000 toeschouwers. De club werd opgericht in 1971 en won in 2015 de KNVB Beker.\n\nDaarnaast kent Groningen sterke tradities in andere sporten zoals volleybal (Lycurgus), basketbal en atletiek. De stad beschikt over uitgebreide sportfaciliteiten en is regelmatig gastheer van nationale en internationale sportevenementen.\n\nDe 4 Mijl van Groningen, een jaarlijkse hardloopwedstrijd door het centrum, is een van de populairste hardloopevenementen van Noord-Nederland.',
      },
    ],
    relatedArticles: [],
  },
];

export function getArticleBySlug(slug: string): WikiArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): WikiArticle[] {
  return articles.filter((a) => a.category === categorySlug);
}

export function getCategoryBySlug(slug: string): WikiCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export function searchArticles(query: string): WikiArticle[] {
  const q = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
