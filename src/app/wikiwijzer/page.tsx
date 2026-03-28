import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, TrendingUp, Sparkles } from 'lucide-react';
import WikiwijzerSearch from '@/components/wikiwijzer/WikiwijzerSearch';
import { categories, articles } from '@/lib/wikiwijzer';

export const metadata: Metadata = {
  title: 'Wikiwijzer — De moderne Nederlandse encyclopedie',
  description: 'Wikiwijzer is een moderne, gratis encyclopedie in het Nederlands. Ontdek artikelen over geografie, geschiedenis, wetenschap, cultuur en meer.',
};

export default function WikiwijzerHomePage() {
  const featuredArticles = articles.slice(0, 6);
  const totalArticles = articles.length;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-violet-950 via-violet-900 to-indigo-950 pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-violet-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob" />
          <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-indigo-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-4000" />
        </div>

        {/* Dot grid pattern */}
        <div className="absolute inset-0 dot-pattern opacity-30" />

        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-8">
            <Sparkles size={14} className="text-amber-400" />
            <span className="text-white/70 text-sm font-medium">{totalArticles} artikel{totalArticles !== 1 ? 'en' : ''} — groeiende collectie</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[0.9] mb-3 tracking-tight">
            Wiki<span className="bg-gradient-to-r from-violet-300 via-purple-200 to-indigo-300 bg-clip-text text-transparent">wijzer</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/50 mb-10 max-w-xl mx-auto font-light">
            De moderne Nederlandse encyclopedie. Helder, betrouwbaar en prachtig vormgegeven.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <WikiwijzerSearch variant="hero" />
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-white/30 text-sm mr-1">Populair:</span>
            {['Groningen', 'Nederland', 'Geschiedenis'].map((term) => (
              <Link
                key={term}
                href={term === 'Groningen' ? '/wikiwijzer/groningen' : '#'}
                className="text-sm text-white/50 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-1.5 transition-all"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      {featuredArticles.length > 0 && (
        <section className="relative -mt-8 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/wikiwijzer/${article.slug}`}
                  className="group relative bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:shadow-violet-500/5 hover:border-violet-200 transition-all duration-300"
                >
                  {/* Colored top accent */}
                  <div className="h-1 bg-gradient-to-r from-violet-500 to-indigo-500" />

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-lg font-bold text-stone-900 group-hover:text-violet-700 transition-colors">
                        {article.title}
                      </h3>
                      <ArrowRight size={16} className="text-stone-300 group-hover:text-violet-500 shrink-0 mt-1 transition-all group-hover:translate-x-0.5" />
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-4">
                      {article.summary}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full">
                        <BookOpen size={11} />
                        {article.readingTime} min lezen
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-stone-400">
                        <Clock size={11} />
                        {article.lastUpdated}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CATEGORIES */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-violet-50 rounded-full px-4 py-2 mb-5">
              <TrendingUp size={14} className="text-violet-600" />
              <span className="text-violet-700 text-sm font-semibold">Ontdek per categorie</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">Alle onderwerpen</h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              Blader door onze categorieën en ontdek artikelen over uiteenlopende onderwerpen.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/wikiwijzer/categorie/${cat.slug}`}
                className="group relative bg-white rounded-2xl border border-stone-200 p-6 hover:shadow-lg hover:border-violet-200 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient hover background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative">
                  <span className="text-3xl mb-3 block">{cat.icon}</span>
                  <h3 className="text-base font-bold text-stone-900 group-hover:text-violet-700 transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-stone-400 text-xs leading-relaxed line-clamp-2 mb-3">
                    {cat.description}
                  </p>
                  <span className="text-xs font-medium text-stone-400 group-hover:text-violet-500 transition-colors">
                    {cat.articleCount} artikel{cat.articleCount !== 1 ? 'en' : ''}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / CTA */}
      <section className="border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-2xl mb-6">
            <BookOpen size={28} className="text-violet-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Kennis voor iedereen
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed mb-3">
            Wikiwijzer is een modern alternatief voor traditionele encyclopedieën.
            Helder geschreven, prachtig vormgegeven en altijd up-to-date.
          </p>
          <p className="text-stone-400 text-sm">
            Gebouwd met aandacht voor detail, leescomfort en betrouwbare informatie.
          </p>
        </div>
      </section>
    </>
  );
}
