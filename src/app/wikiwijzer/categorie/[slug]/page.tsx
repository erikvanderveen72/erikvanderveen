import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, BookOpen, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { getCategoryBySlug, getArticlesByCategory, categories } from '@/lib/wikiwijzer';

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: 'Niet gevonden' };
  return {
    title: `${category.name} — Wikiwijzer`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryArticles = getArticlesByCategory(slug);

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-b from-violet-950 via-violet-900 to-indigo-950 pt-20">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 mb-6 text-sm">
            <Link href="/wikiwijzer" className="text-white/40 hover:text-white/70 transition-colors">
              Wikiwijzer
            </Link>
            <ChevronRight size={14} className="text-white/20" />
            <span className="text-white/70">{category.name}</span>
          </nav>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                {category.name}
              </h1>
              <p className="text-white/50 mt-1">{category.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categoryArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/wikiwijzer/${article.slug}`}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:shadow-violet-500/5 hover:border-violet-200 transition-all duration-300"
              >
                <div className="h-1 bg-gradient-to-r from-violet-500 to-indigo-500" />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-stone-900 group-hover:text-violet-700 transition-colors">
                      {article.title}
                    </h3>
                    <ArrowRight size={16} className="text-stone-300 group-hover:text-violet-500 shrink-0 mt-1 transition-all" />
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-4">{article.summary}</p>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full">
                      <BookOpen size={11} />
                      {article.readingTime} min
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
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">{category.icon}</div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">Nog geen artikelen</h3>
            <p className="text-stone-500 mb-6">Er zijn nog geen artikelen in deze categorie. Kom snel terug!</p>
          </div>
        )}

        <div className="mt-12">
          <Link
            href="/wikiwijzer"
            className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-800 font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            Terug naar Wikiwijzer
          </Link>
        </div>
      </div>
    </>
  );
}
