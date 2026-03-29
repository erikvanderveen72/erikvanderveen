import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Users, Target, Star, MessageSquare, Sparkles, Cpu, Brain, Bot, Shield, CheckCircle, ArrowUpRight } from 'lucide-react';
import FAQSchema from '@/components/FAQSchema';
import NewsletterForm from '@/components/NewsletterForm';

const trainingen = [
  {
    title: 'ChatGPT Training',
    href: '/chatgpt',
    icon: MessageSquare,
    description: 'Leer effectief prompten, teksten schrijven, data analyseren en eigen GPTs bouwen. De populairste AI-tool optimaal benutten.',
  },
  {
    title: 'Google Gemini Training',
    href: '/gemini',
    icon: Sparkles,
    description: 'Google\'s krachtige AI-model integreren in je workflow. Ideaal voor teams die al met Google Workspace werken.',
  },
  {
    title: 'Microsoft Copilot Training',
    href: '/copilot',
    icon: Cpu,
    description: 'AI-kracht in Word, Excel, PowerPoint, Outlook en Teams. Maximale productiviteit binnen Microsoft 365.',
  },
  {
    title: 'Claude Training',
    href: '/claude',
    icon: Brain,
    description: 'Anthropic\'s Claude voor diepgaande analyse, lange documenten en complexe taken. De AI voor professionals.',
  },
];

const klanten = [
  { naam: 'UWV', src: '/images/klanten/uwv.png' },
  { naam: 'Shell', src: '/images/klanten/shell.png' },
  { naam: 'Rabobank', src: '/images/klanten/rabobank.png', viaWesthaghe: true },
  { naam: 'HelloFresh', src: '/images/klanten/hellofresh.webp', viaWesthaghe: true },
  { naam: 'SPIE', src: '/images/klanten/spie.png', viaWesthaghe: true },
  { naam: 'De Goudse', src: '/images/klanten/degoudse.webp' },
  { naam: 'Promovendum', src: '/images/klanten/promovendum.png' },
  { naam: 'Hanzehogeschool', src: '/images/klanten/hanze.png' },
  { naam: 'Veneta.com', src: '/images/klanten/veneta.webp' },
  { naam: 'Van Doorne', src: '/images/klanten/vandoorne.png' },
];

const faqItems = [
  { question: 'Voor wie zijn de AI trainingen geschikt?', answer: 'De trainingen zijn geschikt voor iedereen die professioneel met AI wil werken. Van marketing- en communicatieteams tot HR, finance, management en IT. Elke training wordt volledig afgestemd op het niveau en de functie van de deelnemers.' },
  { question: 'Welke AI-tools worden behandeld?', answer: 'We bieden trainingen aan voor ChatGPT, Google Gemini, Microsoft Copilot en Claude (Anthropic). Je kunt kiezen voor een training gericht op een tool, of een breder overzicht van meerdere AI-tools.' },
  { question: 'Hoeveel kost een AI training?', answer: 'De in-company training kost 975 euro excl. BTW per sessie. Dit is inclusief reistijd, reiskosten, een telefonische intake vooraf en op maat gemaakt programma. En niet tevreden? Dan geen factuur!' },
  { question: 'Hoe lang duurt een training?', answer: 'Elke training duurt 3 uur. Dit is compact genoeg om in een ochtend of middag te passen, maar uitgebreid genoeg voor echte diepgang met praktijkoefeningen.' },
  { question: 'Kan de training ook online gegeven worden?', answer: 'Ja, alle trainingen kunnen zowel fysiek op locatie als online gegeven worden. Beide varianten zijn interactief en hands-on.' },
  { question: 'Hoeveel deelnemers kunnen meedoen?', answer: 'De training werkt het beste met groepen van 5 tot 25 personen. Bij grotere groepen bespreken we samen de beste aanpak.' },
];

// Hero Section
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-stone-950 pt-24 pb-36">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-500 to-transparent rounded-full blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500 to-transparent rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-br from-orange-500 to-transparent rounded-full blur-3xl opacity-15 animate-blob animation-delay-4000" />
      </div>
      <div className="absolute inset-0 plus-pattern" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-stone-900/50 backdrop-blur border border-violet-500/30 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
            <span className="text-sm text-stone-300">Gemiddelde waardering: 8,9 - Bijgewerkt 2026</span>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            In-company{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              AI Trainingen
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-300 max-w-2xl mx-auto mb-2">
            Maak jullie team binnen 3 uur direct productiever met AI. ChatGPT, Gemini, Copilot en Claude, op maat voor jouw organisatie.
          </p>
          <p className="text-sm text-stone-400">
            Tijdelijk slechts <span className="text-orange-400 font-bold">975 euro</span> excl. BTW
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-stone-950 px-8 py-4 rounded-xl font-semibold hover:bg-stone-100 transition-all hover:shadow-lg hover:shadow-white/10 group">
            Training aanvragen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#trainingen" className="inline-flex items-center gap-2 border-2 border-violet-500/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-violet-500/10 transition-all">
            Bekijk alle trainingen
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-10 text-stone-400 text-sm">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>175+ trainingen</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-400" />
            <span>8,9 gem. waardering</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            <span>25 jaar ervaring</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>22K+ LinkedIn volgers</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats Bar
function StatsBar() {
  const stats = [
    { label: 'Trainingen gegeven', value: '175+' },
    { label: 'Gem. waardering', value: '8,9' },
    { label: 'Jaar ervaring', value: '25' },
    { label: 'LinkedIn volgers', value: '22K+' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 mb-16">
      <div className="bg-white rounded-2xl shadow-xl shadow-stone-200/50 p-6 sm:p-8 border border-stone-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-1">{value}</div>
              <div className="text-xs sm:text-sm text-stone-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Klantlogo's
function KlantLogos() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-stone-400 text-xs font-semibold uppercase tracking-widest mb-8">
          AI trainingen gegeven aan toonaangevende organisaties
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-6 items-center">
          {klanten.map((klant) => (
            <div key={klant.naam} className="relative flex items-center justify-center p-1.5 bg-stone-50 rounded-xl aspect-[3/2]">
              <Image src={klant.src} alt={klant.naam} width={160} height={80} className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity" unoptimized />
              {klant.viaWesthaghe && <span className="absolute -bottom-1 right-1 text-[9px] text-stone-400">*</span>}
            </div>
          ))}
        </div>
        <p className="text-center text-stone-400 text-[10px] mt-4">* Namens Westhaghe</p>
      </div>
    </section>
  );
}

// Trainingen overzicht
function TrainingenSection() {
  return (
    <section id="trainingen" className="py-16 sm:py-20 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-3">Alle AI Trainingen</h2>
          <p className="text-base sm:text-lg text-stone-500">Kies de training die past bij jouw organisatie. Elke training is op maat te maken.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trainingen.map(({ title, description, icon: Icon, href }) => (
            <Link key={href} href={href} className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl p-7 hover:shadow-lg transition-all cursor-pointer group border border-transparent hover:border-stone-200">
              <div className="w-12 h-12 bg-white/70 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-violet-700" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">{title}</h3>
              <p className="text-stone-600 text-sm mb-5 leading-relaxed">{description}</p>
              <span className="inline-flex items-center gap-2 text-stone-900 font-semibold text-sm group-hover:gap-3 transition-all">
                Meer informatie
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Over mij
function OverMijSection() {
  return (
    <section className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-100 to-orange-100 rounded-3xl" />
            <Image
              src="/images/erikportret.jpg"
              alt="Erik van der Veen - AI Trainer"
              width={500}
              height={600}
              className="relative rounded-3xl shadow-lg object-cover"
              unoptimized
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-6">
              Ik ben Erik van der Veen
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Ik begon met AI-tools vanaf de eerste dag dat ChatGPT uitkwam. Al snel begon ik erover te posten op LinkedIn en zagen ruim 950.000 mensen mijn posts. Die enorme interesse toonde aan dat er een grote behoefte was aan kennis over AI.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Inmiddels heb ik meer dan 175 trainingen gegeven aan organisaties van MKB tot grote corporates. Met 25 jaar ervaring in online marketing en 22.000+ LinkedIn volgers deel ik mijn praktijkkennis in inspirerende, hands-on sessies over ChatGPT, Gemini, Copilot en Claude.
            </p>
            <Link href="/over-erik" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Meer over Erik <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Wat leer je
function WatLeerJeSection() {
  const items = [
    { title: 'Effectief Prompten', desc: 'Leer hoe je AI-tools de juiste instructies geeft voor optimale resultaten.' },
    { title: 'Teksten Schrijven', desc: 'Van e-mails tot rapporten: leer AI inzetten voor al je teksten.' },
    { title: 'Data-analyse', desc: 'Upload spreadsheets en laat AI je data analyseren en visualiseren.' },
    { title: 'AI-Assistenten Bouwen', desc: 'Maak eigen AI-assistenten die precies doen wat jouw organisatie nodig heeft.' },
    { title: 'Projecten & Samenwerken', desc: 'Ontdek hoe je met AI projecten efficienter aanpakt in teamverband.' },
    { title: 'AI Strategie', desc: 'Wat kan AI wel en niet? Leer verantwoord en effectief omgaan met AI.' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-3">Wat leer je?</h2>
          <p className="text-stone-500 max-w-xl mx-auto">Een training die volledig wordt afgestemd op jullie niveau en behoeften.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md hover:border-violet-200 transition-all">
              <h3 className="text-lg font-bold text-stone-900 mb-2">{title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Nieuwsbrief
function NewsletterSection() {
  return (
    <section className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Nieuwsbrief</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          Elke twee weken een AI-tip in je inbox
        </h2>
        <p className="text-stone-500 text-lg mb-8 max-w-xl mx-auto">
          Praktische tips, slimme prompts en observaties uit 175+ AI-trainingen. Geen spam, altijd opzegbaar.
        </p>
        <div className="max-w-xl mx-auto">
          <NewsletterForm variant="hero" />
        </div>
      </div>
    </section>
  );
}

// Investering
function InvesteringSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-3xl p-8 sm:p-10 md:p-14 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Investering</h2>
            <p className="text-5xl md:text-6xl font-extrabold text-white mb-2">975 euro</p>
            <p className="text-violet-200 text-lg mb-8">excl. BTW, inclusief reistijd & reiskosten</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto mb-8 text-left">
              {[
                '3 uur training op locatie of online',
                'Telefonische intake vooraf',
                'Op maat gemaakt programma',
                'Praktische oefeningen',
                'Handouts & naslagmateriaal',
                'Niet tevreden? Geen factuur!',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-stone-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/25 group">
                Training aanvragen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:0610204090" className="inline-flex items-center justify-center gap-2 border-2 border-stone-600 hover:border-stone-500 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:bg-stone-800">
                06 10 20 40 90
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ
function FAQSection() {
  return (
    <section id="faq" className="py-16 sm:py-20 bg-stone-50 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-3">Veelgestelde vragen</h2>
          <p className="text-stone-500">Heb je een andere vraag? <Link href="/contact" className="text-primary font-medium hover:underline">Neem contact op</Link></p>
        </div>
        <FAQSchema items={faqItems} />
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <StatsBar />
      <KlantLogos />
      <TrainingenSection />
      <OverMijSection />
      <WatLeerJeSection />
      <NewsletterSection />
      <InvesteringSection />
      <FAQSection />
    </main>
  );
}
