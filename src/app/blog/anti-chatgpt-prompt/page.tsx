import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { Calendar, Clock, ArrowLeft, Lightbulb, AlertTriangle, CheckCircle } from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'De Anti ChatGPT-prompt — Laat AI Zichzelf Verbeteren',
  description: 'Ontdek de anti-prompt techniek: vraag ChatGPT eerst om je prompt te bekritiseren voordat het een antwoord geeft. Betere resultaten met minder moeite.',
  openGraph: {
    title: 'De Anti ChatGPT-prompt — Laat AI Zichzelf Verbeteren',
    description: 'Ontdek de anti-prompt techniek: vraag ChatGPT eerst om je prompt te bekritiseren voordat het een antwoord geeft.',
    url: 'https://erikvanderveen.nl/blog/anti-chatgpt-prompt',
  },
  alternates: { canonical: 'https://erikvanderveen.nl/blog/anti-chatgpt-prompt' },
};

const faqItems = [
  {
    question: 'Werkt de anti-prompt ook met andere AI-tools dan ChatGPT?',
    answer: 'Ja, de anti-prompt techniek werkt ook uitstekend met Claude, Gemini en andere LLMs. Het principe van zelfreflectie is universeel toepasbaar op alle grote taalmodellen.',
  },
  {
    question: 'Kost de anti-prompt niet onnodig veel tokens?',
    answer: 'De extra stap kost inderdaad wat meer tokens, maar het resultaat is bijna altijd significant beter. Je bespaart uiteindelijk tijd doordat je minder hoeft bij te sturen achteraf.',
  },
  {
    question: 'Wanneer gebruik je de anti-prompt het best?',
    answer: 'Bij complexe verzoeken zoals strategie-documenten, rapporten, analyses of creatieve teksten. Voor simpele feitelijke vragen is het niet nodig.',
  },
];

export default function AntiChatGPTPromptPage() {
  return (
    <>
      <PageHero
        title="De Anti ChatGPT-prompt"
        highlightedSubtitle="Laat AI Zichzelf Verbeteren"
        subtitle="Wat als je ChatGPT vraagt om je prompt te bekritiseren vóórdat het een antwoord geeft?"
        badge="Prompt-techniek"
        showBreadcrumbs
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: 'Anti ChatGPT-prompt', href: '/blog/anti-chatgpt-prompt' },
        ]}
      />

      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'De Anti ChatGPT-prompt: Laat AI Zichzelf Verbeteren',
            datePublished: '2025-06-24',
            dateModified: '2026-03-23',
            author: { '@type': 'Person', name: 'Erik van der Veen', url: 'https://erikvanderveen.nl/over-erik' },
            publisher: { '@type': 'Organization', name: 'Erik van der Veen — AI Training', url: 'https://erikvanderveen.nl' },
            url: 'https://erikvanderveen.nl/blog/anti-chatgpt-prompt',
            description: 'Ontdek de anti-prompt techniek: vraag ChatGPT eerst om je prompt te bekritiseren voordat het een antwoord geeft.',
          }),
        }}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta */}
          <div className="flex items-center gap-6 text-sm text-stone-400 mb-10">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> 24 juni 2025</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 5 min leestijd</span>
            <span className="text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">Prompt-techniek</span>
          </div>

          {/* Content */}
          <div className="prose prose-stone prose-lg max-w-none">
            <p className="text-xl text-stone-600 leading-relaxed">
              De meeste mensen typen een prompt in ChatGPT en accepteren het eerste antwoord dat ze krijgen. Maar wat als je ChatGPT eerst laat nadenken over <em>wat er mis zou kunnen zijn</em> met je vraag? Dat is precies het idee achter de anti-prompt.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">Wat is de anti-prompt?</h2>
            <p className="text-stone-600 leading-relaxed">
              De anti-prompt is een meta-techniek waarbij je ChatGPT vraagt om je prompt te analyseren en te bekritiseren <strong>vóórdat</strong> het een antwoord formuleert. Je vraagt het model letterlijk: &quot;Wat zijn de zwakke punten van deze prompt, en hoe kan ik hem verbeteren?&quot;
            </p>
            <p className="text-stone-600 leading-relaxed">
              Het resultaat? ChatGPT wijst op aannames die je maakt, ontbrekende context, en dubbelzinnigheden die je zelf over het hoofd ziet. Met die feedback verfijn je je prompt — en krijg je een aanzienlijk beter antwoord.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">Hoe werkt het in de praktijk?</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              De techniek kent twee stappen. Eerst laat je ChatGPT je prompt bekritiseren, dan gebruik je die feedback om een betere versie te maken.
            </p>

            {/* Step 1 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle size={18} className="text-amber-600" />
                <span className="font-bold text-amber-800">Stap 1: Vraag om kritiek</span>
              </div>
              <div className="bg-stone-900 rounded-lg p-4 text-stone-100 text-sm font-mono">
                <p className="text-stone-400 mb-2">// Je prompt aan ChatGPT:</p>
                <p>&quot;Ik wil je de volgende prompt geven, maar geef nog GEEN antwoord. Analyseer eerst wat er beter kan aan deze prompt. Welke aannames maak ik? Welke context ontbreekt? Hoe kan ik de vraag scherper formuleren?&quot;</p>
                <p className="mt-3">&quot;[Hier je oorspronkelijke prompt]&quot;</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle size={18} className="text-emerald-600" />
                <span className="font-bold text-emerald-800">Stap 2: Verbeter en herprompt</span>
              </div>
              <p className="text-stone-600 text-sm">
                Neem de feedback van ChatGPT en verwerk die in een verbeterde versie van je prompt. Voeg de ontbrekende context toe, maak je aannames expliciet, en formuleer je vraag scherper. Geef daarna de verbeterde prompt opnieuw in.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">Waarom werkt dit zo goed?</h2>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                { title: 'Blinde vlekken', desc: 'Je ontdekt aannames en hiaten in je vraagstelling die je zelf niet ziet.' },
                { title: 'Betere context', desc: 'ChatGPT wijst je op ontbrekende informatie die het nodig heeft voor een goed antwoord.' },
                { title: 'Scherper denken', desc: 'Het dwingt je om preciezer na te denken over wat je eigenlijk wilt weten.' },
                { title: 'Betere output', desc: 'Het uiteindelijke antwoord is bijna altijd concreter, specifieker en nuttiger.' },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-stone-200 rounded-xl p-5">
                  <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-stone-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">Voorbeeld: strategie-document</h2>
            <p className="text-stone-600 leading-relaxed">
              Stel, je wilt een marketingstrategie laten schrijven. In plaats van direct te vragen &quot;Schrijf een marketingstrategie voor mijn webshop&quot;, gebruik je de anti-prompt. ChatGPT zal dan vragen stellen als: voor welke doelgroep? Wat is je budget? Welke kanalen gebruik je al? Wat is je USP?
            </p>
            <p className="text-stone-600 leading-relaxed">
              Door die informatie toe te voegen aan je prompt, krijg je een strategie die daadwerkelijk relevant is voor jouw specifieke situatie — in plaats van een generiek verhaal.
            </p>

            {/* Pro tip */}
            <div className="bg-primary-light border border-primary/20 rounded-xl p-6 my-8">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={18} className="text-primary" />
                <span className="font-bold text-primary-dark">Pro-tip: combineer met de one-shot techniek</span>
              </div>
              <p className="text-stone-600 text-sm">
                Gebruik de anti-prompt samen met een concreet voorbeeld van het gewenste resultaat. Vraag ChatGPT: &quot;Bekritiseer mijn prompt én het voorbeeld dat ik meegeef. Wat kan beter aan beiden?&quot; Dit levert de allerbeste resultaten op.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4">Wanneer gebruik je de anti-prompt?</h2>
            <p className="text-stone-600 leading-relaxed">
              De anti-prompt is het meest waardevol bij complexe opdrachten: strategieplannen, rapporten, analyses, contentcreatie, of wanneer je merkt dat ChatGPT steeds net niet het juiste antwoord geeft. Voor simpele feitelijke vragen (zoals &quot;Wat is de hoofdstad van Frankrijk?&quot;) heb je deze techniek niet nodig.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <FAQSchema items={faqItems} />
          </div>

          {/* Navigation */}
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
