import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog — AI Tips, Prompts & Inzichten',
  description: 'Praktische AI-tips, ChatGPT-prompts en inzichten van Erik van der Veen. Leer slimmer werken met AI in je dagelijkse werkzaamheden.',
  openGraph: {
    title: 'Blog — AI Tips, Prompts & Inzichten | Erik van der Veen',
    description: 'Praktische AI-tips, ChatGPT-prompts en inzichten van Erik van der Veen.',
    url: 'https://erikvanderveen.nl/blog',
  },
  alternates: { canonical: 'https://erikvanderveen.nl/blog' },
};

const articles = [
  {
    slug: 'chatgpt-tips-tekstschrijven',
    title: '33 ChatGPT-tips voor Tekstschrijven',
    excerpt: 'Van het geven van context tot het trainen van je eigen schrijfstijl. Alles wat je nodig hebt om AI effectief in te zetten voor beter schrijven.',
    date: '2025-07-01',
    readTime: '12 min',
    category: 'Handleiding',
  },
  {
    slug: '12-geavanceerde-chatgpt-tips',
    title: '12 Geavanceerde ChatGPT-tips voor Professionals',
    excerpt: 'Ga verder dan de basis. Deze 12 geavanceerde technieken tillen je ChatGPT-gebruik naar een hoger niveau — van rolgebaseerde prompts tot ketenprompting.',
    date: '2025-06-30',
    readTime: '8 min',
    category: 'Geavanceerd',
  },
  {
    slug: 'anti-chatgpt-prompt',
    title: 'De Anti ChatGPT-prompt: Laat AI Zichzelf Verbeteren',
    excerpt: 'Wat als je ChatGPT vraagt om je prompt te bekritiseren vóórdat het antwoord geeft? De anti-prompt techniek levert verrassend betere resultaten op.',
    date: '2025-06-24',
    readTime: '5 min',
    category: 'Prompt-techniek',
  },
  {
    slug: 'de-beste-chatgpt-prompt',
    title: 'De Beste ChatGPT-prompt (Volgens Onderzoek)',
    excerpt: 'Eén simpele prompt-structuur die volgens wetenschappelijk onderzoek consistent de beste resultaten oplevert. Met voorbeelden voor elke situatie.',
    date: '2025-06-11',
    readTime: '6 min',
    category: 'Prompt-techniek',
  },
  {
    slug: 'vraag-naar-aannames-chatgpt',
    title: 'Vraag Eerst naar de Aannames van ChatGPT',
    excerpt: 'ChatGPT maakt stilzwijgende aannames bij elke prompt. Door daar expliciet naar te vragen, krijg je antwoorden die écht aansluiten bij jouw situatie.',
    date: '2025-06-06',
    readTime: '5 min',
    category: 'Prompt-techniek',
  },
  {
    slug: '10-grootste-misverstanden-chatgpt',
    title: 'De 10 Grootste Misverstanden over ChatGPT',
    excerpt: 'Van "ChatGPT liegt altijd" tot "AI vervangt mijn baan" — we ontkrachten de hardnekkigste mythes over ChatGPT met feiten en context.',
    date: '2025-05-29',
    readTime: '7 min',
    category: 'Achtergrond',
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        highlightedSubtitle="AI Tips & Inzichten"
        subtitle="Praktische tips, slimme prompts en achtergrondartikelen over AI — direct toepasbaar in je werk."
        badge="Nieuwste artikelen"
        showBreadcrumbs
        breadcrumbs={[{ label: 'Blog', href: '/blog' }]}
      />

      {/* JSON-LD Blog structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Erik van der Veen AI Blog',
            url: 'https://erikvanderveen.nl/blog',
            description: 'Praktische AI-tips, ChatGPT-prompts en inzichten van Erik van der Veen.',
            author: {
              '@type': 'Person',
              name: 'Erik van der Veen',
              url: 'https://erikvanderveen.nl/over-erik',
            },
            blogPost: articles.map((a) => ({
              '@type': 'BlogPosting',
              headline: a.title,
              url: `https://erikvanderveen.nl/blog/${a.slug}`,
              datePublished: a.date,
              author: { '@type': 'Person', name: 'Erik van der Veen' },
            })),
          }),
        }}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured article (first) */}
          <Link href={`/blog/${articles[0].slug}`} className="group block mb-12">
            <div className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 border border-stone-200 rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all duration-300 hover:border-primary/30">
              <div className="absolute top-6 right-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                <Sparkles size={12} />
                Nieuwste artikel
              </div>
              <span className="inline-block text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full mb-4">
                {articles[0].category}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-4 group-hover:text-primary transition-colors">
                {articles[0].title}
              </h2>
              <p className="text-stone-500 text-lg mb-6 max-w-2xl">{articles[0].excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-stone-400">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {formatDate(articles[0].date)}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> {articles[0].readTime} leestijd</span>
              </div>
              <div className="mt-6 flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Lees artikel <ArrowRight size={16} />
              </div>
            </div>
          </Link>

          {/* Other articles grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {articles.slice(1).map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
                <article className="h-full bg-white border border-stone-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                  <span className="inline-block text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-stone-500 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-stone-400">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(article.date)}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary/5 via-white to-accent/5 rounded-2xl border border-stone-200 p-8 md:p-12">
            <h2 className="text-2xl font-extrabold text-stone-900 mb-3">Meer leren over AI?</h2>
            <p className="text-stone-500 mb-6 max-w-xl mx-auto">
              Boek een in-company AI training en leer je team in één dag effectief werken met AI-tools.
            </p>
            <Link href="/contact" className="inline-flex bg-accent hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
              Bekijk trainingen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
