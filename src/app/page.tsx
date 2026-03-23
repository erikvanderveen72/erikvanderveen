import Link from 'next/link';
import Image from 'next/image';
import { Award, Users, Clock, Target, Sparkles, Brain, Cpu, Bot, MessageSquare, Zap, ArrowRight, CheckCircle, Star, Shield } from 'lucide-react';
import FAQSchema from '@/components/FAQSchema';

const trainingen = [
  {
    title: 'ChatGPT Training',
    href: '/chatgpt',
    icon: MessageSquare,
    color: 'from-emerald-50 to-emerald-100',
    iconColor: 'text-emerald-600',
    description: 'Leer effectief prompten, teksten schrijven, data analyseren en eigen GPTs bouwen. De populairste AI-tool optimaal benutten.',
  },
  {
    title: 'Google Gemini Training',
    href: '/gemini',
    icon: Sparkles,
    color: 'from-blue-50 to-blue-100',
    iconColor: 'text-blue-600',
    description: 'Google\'s krachtige AI-model integreren in je workflow. Ideaal voor teams die al met Google Workspace werken.',
  },
  {
    title: 'Microsoft Co-Pilot Training',
    href: '/copilot',
    icon: Cpu,
    color: 'from-sky-50 to-sky-100',
    iconColor: 'text-sky-600',
    description: 'AI-kracht in Word, Excel, PowerPoint, Outlook en Teams. Maximale productiviteit binnen Microsoft 365.',
  },
  {
    title: 'Claude Training',
    href: '/claude',
    icon: Brain,
    color: 'from-violet-50 to-violet-100',
    iconColor: 'text-violet-600',
    description: 'Anthropic\'s Claude voor diepgaande analyse, lange documenten en complexe taken. De AI voor professionals.',
  },
  {
    title: 'JetGPT Training',
    href: '/jetgpt',
    icon: Zap,
    color: 'from-amber-50 to-amber-100',
    iconColor: 'text-amber-600',
    description: 'Ontdek de mogelijkheden van JetGPT en leer hoe je deze AI-tool optimaal inzet voor jouw werkzaamheden.',
  },
];

const stats = [
  { value: '175+', label: 'Trainingen', icon: Award },
  { value: '8,9', label: 'Gem. Waardering', icon: Star },
  { value: '25', label: 'Jaar Ervaring', icon: Target },
  { value: '22K+', label: 'LinkedIn Volgers', icon: Users },
];

const klanten = [
  { naam: 'UWV', src: 'https://www.chatgptexpert.com/uwv-C7e6qYHO.png' },
  { naam: 'Shell', src: 'https://www.chatgptexpert.com/shell-DUOu-axY.png' },
  { naam: 'Rabobank', src: 'https://www.chatgptexpert.com/rabobank-DnhPPgNy.png' },
  { naam: 'HelloFresh', src: 'https://www.chatgptexpert.com/hellofresh-C5jhxbbH.webp' },
  { naam: 'De Goudse', src: 'https://www.chatgptexpert.com/degoudse-B0XP4CPP.webp' },
  { naam: 'Promovendum', src: 'https://www.chatgptexpert.com/download%20(1).png' },
  { naam: 'Hanzehogeschool', src: 'https://www.chatgptexpert.com/hanze-BvxE-lDr.png' },
  { naam: 'Veneta.com', src: 'https://www.chatgptexpert.com/veneta-RjG3kAb4.webp' },
  { naam: 'Van Doorne', src: 'https://www.chatgptexpert.com/vandoorne-1GlwzI6I.png' },
];

const faqItems = [
  { question: 'Voor wie zijn de AI trainingen geschikt?', answer: 'De trainingen zijn geschikt voor iedereen die professioneel met AI wil werken. Van marketing- en communicatieteams tot HR, finance, management en IT. Elke training wordt volledig afgestemd op het niveau en de functie van de deelnemers.' },
  { question: 'Welke AI-tools worden behandeld?', answer: 'We bieden trainingen aan voor ChatGPT, Google Gemini, Microsoft Co-Pilot, Claude (Anthropic) en JetGPT. Je kunt kiezen voor een training gericht op één tool, of een breder overzicht van meerdere AI-tools.' },
  { question: 'Hoeveel kost een AI training?', answer: 'De in-company training kost €975 excl. BTW per sessie. Dit is inclusief reistijd, reiskosten, een telefonische intake vooraf en op maat gemaakt programma. En niet tevreden? Dan geen factuur!' },
  { question: 'Hoe lang duurt een training?', answer: 'Elke training duurt 3 uur. Dit is compact genoeg om in een ochtend of middag te passen, maar uitgebreid genoeg voor echte diepgang met praktijkoefeningen.' },
  { question: 'Kan de training ook online gegeven worden?', answer: 'Ja, alle trainingen kunnen zowel fysiek op locatie als online gegeven worden. Beide varianten zijn interactief en hands-on.' },
  { question: 'Hoeveel deelnemers kunnen meedoen?', answer: 'De training werkt het beste met groepen van 5 tot 25 personen. Bij grotere groepen bespreken we samen de beste aanpak.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-stone-900 pt-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-20 -right-4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
        <div className="absolute inset-0 plus-pattern opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-stone-300 text-sm font-medium">Gemiddelde waardering: 8,9 — Bijgewerkt 2026</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-2">
                AI
              </h1>
              <p className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                <span className="bg-gradient-to-r from-violet-400 via-orange-300 to-amber-400 bg-clip-text text-transparent">
                  trainingen
                </span>
              </p>

              <p className="text-stone-400 text-lg sm:text-xl mb-4 max-w-xl leading-relaxed">
                In-company AI trainingen die jullie team binnen 3 uur direct productiever maken. ChatGPT, Gemini, Co-Pilot, Claude en JetGPT — op maat voor jouw organisatie.
              </p>

              <p className="text-accent font-semibold text-lg mb-8">
                Tijdelijk slechts € 975,- (excl. BTW)
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-xl hover:shadow-2xl">
                  Training aanvragen <ArrowRight size={18} />
                </Link>
                <Link href="#trainingen" className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur border border-white/15 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all">
                  Bekijk alle trainingen
                </Link>
              </div>

              <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                <CheckCircle size={16} />
                <span>Niet tevreden? Geen factuur!</span>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-orange-500/20 rounded-3xl blur-2xl" />
                <Image
                  src="https://chatgptexpert.com/erikportret.jpg"
                  alt="Erik van der Veen — AI Trainer"
                  width={500}
                  height={600}
                  className="relative rounded-3xl shadow-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KLANTLOGO'S */}
      <section className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-stone-400 text-xs font-semibold uppercase tracking-widest mb-8">
            AI trainingen gegeven aan toonaangevende organisaties
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-6 items-center">
            {klanten.map((klant) => (
              <div key={klant.naam} className="flex items-center justify-center p-3 bg-stone-50 rounded-xl">
                <Image src={klant.src} alt={klant.naam} width={120} height={40} className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4 bg-surface rounded-2xl p-5 border border-border">
                <div className="bg-primary-light p-3 rounded-xl">
                  <stat.icon size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-stone-900">{stat.value}</p>
                  <p className="text-text-muted text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAININGEN OVERZICHT */}
      <section id="trainingen" className="scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Alle AI Trainingen</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">Kies de training die past bij jouw organisatie. Elke training is op maat te maken en wordt afgestemd op jullie niveau.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingen.map((training) => (
              <Link key={training.href} href={training.href} className="group bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-primary transition-all">
                <div className={`inline-flex p-3 bg-gradient-to-br ${training.color} rounded-xl mb-4`}>
                  <training.icon size={24} className={training.iconColor} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-primary transition-colors">{training.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">{training.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Meer informatie <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OVER MIJ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100 to-orange-100 rounded-3xl" />
              <Image
                src="https://chatgptexpert.com/erikportret.jpg"
                alt="Erik van der Veen - AI Trainer"
                width={500}
                height={600}
                className="relative rounded-3xl shadow-lg object-cover"
                unoptimized
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-light rounded-full px-4 py-2 mb-6">
                <span className="text-primary text-sm font-semibold">Over mij</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
                Ik ben <span className="text-primary">Erik van der Veen</span>
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Ik begon met AI-tools vanaf de eerste dag dat ChatGPT uitkwam. Al snel begon ik erover te posten op LinkedIn en zagen ruim 950.000 mensen mijn posts. Die enorme interesse toonde aan dat er een grote behoefte was aan kennis over AI.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                Inmiddels heb ik meer dan 175 trainingen gegeven aan organisaties van MKB tot grote corporates. Met 25 jaar ervaring in online marketing en 22.000+ LinkedIn volgers deel ik mijn praktijkkennis in inspirerende, hands-on sessies over ChatGPT, Gemini, Co-Pilot, Claude en JetGPT.
              </p>
              <Link href="/over-erik" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all">
                Meer over Erik <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WAT LEER JE */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Wat leer je?</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">Een training die volledig wordt afgestemd op jullie niveau en behoeften.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MessageSquare, title: 'Effectief Prompten', desc: 'Leer hoe je AI-tools de juiste instructies geeft voor optimale resultaten.' },
              { icon: Bot, title: 'Teksten Schrijven', desc: 'Van e-mails tot rapporten — leer AI inzetten voor al je teksten.' },
              { icon: Cpu, title: 'Data-analyse', desc: 'Upload spreadsheets en laat AI je data analyseren en visualiseren.' },
              { icon: Brain, title: 'AI-Assistenten Bouwen', desc: 'Maak eigen AI-assistenten die precies doen wat jouw organisatie nodig heeft.' },
              { icon: Users, title: 'Projecten & Samenwerken', desc: 'Ontdek hoe je met AI projecten efficiënter aanpakt in teamverband.' },
              { icon: Shield, title: 'AI Strategie', desc: 'Wat kan AI wél en niet? Leer verantwoord en effectief omgaan met AI.' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-md transition-all">
                <div className="bg-primary-light p-3 rounded-xl inline-flex mb-4">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTERING */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Investering</h2>
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-white mb-8">
              <p className="text-5xl md:text-6xl font-extrabold mb-2">€ 975,-</p>
              <p className="text-violet-200 text-lg">excl. BTW — inclusief reistijd & reiskosten</p>
            </div>
            <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
              {[
                '3 uur training op locatie of online',
                'Telefonische intake vooraf',
                'Op maat gemaakt programma',
                'Praktische oefeningen',
                'Handouts & naslagmateriaal',
                'Niet tevreden? Geen factuur!',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-stone-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-lg hover:shadow-xl">
              Training aanvragen <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">Veelgestelde vragen</h2>
          </div>
          <FAQSchema items={faqItems} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Klaar om je team productiever te maken?</h2>
          <p className="text-stone-400 text-lg mb-8 max-w-2xl mx-auto">Neem contact op om de mogelijkheden te bespreken voor jouw organisatie. De training is volledig op maat te maken.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-xl hover:shadow-2xl">
              Vraag een training aan <ArrowRight size={18} />
            </Link>
            <a href="tel:0610204090" className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur border border-white/15 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all">
              06 10 20 40 90
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
