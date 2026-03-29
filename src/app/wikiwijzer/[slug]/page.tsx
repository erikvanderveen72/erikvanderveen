import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Clock, BookOpen, Tag, ArrowLeft, Share2, Printer } from 'lucide-react';
import { getArticleBySlug, getAllSlugs, getCategoryBySlug } from '@/lib/wikiwijzer';
import TableOfContents from '@/components/wikiwijzer/TableOfContents';
import WikiwijzerSearch from '@/components/wikiwijzer/WikiwijzerSearch';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Niet gevonden' };
  return {
    title: `${article.title} — Wikiwijzer`,
    description: article.summary,
  };
}

export default async function WikiArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const category = getCategoryBySlug(article.category);

  const tocItems = article.sections.map((s) => ({
    id: s.id,
    title: s.title,
    children: s.subsections?.map((sub) => ({ id: sub.id, title: sub.title })),
  }));

  return (
    <>
      {/* Article header */}
      <div className="bg-gradient-to-b from-violet-950 via-violet-900 to-indigo-950 pt-20">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 mb-6 text-sm">
            <Link href="/wikiwijzer" className="text-white/40 hover:text-white/70 transition-colors">
              Wikiwijzer
            </Link>
            <ChevronRight size={14} className="text-white/20" />
            {category && (
              <>
                <Link
                  href={`/wikiwijzer/categorie/${category.slug}`}
                  className="text-white/40 hover:text-white/70 transition-colors"
                >
                  {category.name}
                </Link>
                <ChevronRight size={14} className="text-white/20" />
              </>
            )}
            <span className="text-white/70">{article.title}</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="inline-flex items-center gap-1.5 text-white/40">
              <Clock size={14} />
              Bijgewerkt {article.lastUpdated}
            </span>
            <span className="inline-flex items-center gap-1.5 text-white/40">
              <BookOpen size={14} />
              {article.readingTime} min leestijd
            </span>
            {category && (
              <Link
                href={`/wikiwijzer/categorie/${category.slug}`}
                className="inline-flex items-center gap-1.5 bg-white/10 text-white/60 hover:text-white/90 px-3 py-1 rounded-full transition-colors"
              >
                <Tag size={12} />
                {category.name}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Search */}
              <WikiwijzerSearch variant="compact" />

              {/* TOC */}
              <TableOfContents items={tocItems} />

              {/* Infobox */}
              {article.infobox && (
                <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-3">
                    <h3 className="text-white font-bold text-sm">{article.infobox.title}</h3>
                  </div>
                  <div className="divide-y divide-stone-100">
                    {article.infobox.rows.map((row, i) => (
                      <div key={i} className="flex gap-3 px-4 py-2.5 text-sm">
                        <span className="text-stone-400 font-medium shrink-0 w-24">{row.label}</span>
                        <span className="text-stone-700">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-stone-200 text-stone-500 hover:text-violet-600 hover:border-violet-200 rounded-xl py-2.5 text-sm transition-colors">
                  <Share2 size={14} />
                  Delen
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-stone-200 text-stone-500 hover:text-violet-600 hover:border-violet-200 rounded-xl py-2.5 text-sm transition-colors">
                  <Printer size={14} />
                  Print
                </button>
              </div>
            </div>
          </aside>

          {/* Article body */}
          <article className="flex-1 order-1 lg:order-2 min-w-0">
            {/* Summary card */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100 rounded-2xl p-6 md:p-8 mb-10">
              <p className="text-stone-800 text-lg leading-[1.8]">{article.summary}</p>
            </div>

            {/* Sections */}
            <div className="wiki-article-content">
              {article.sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4 pb-3 border-b border-stone-200">
                    {section.title}
                  </h2>
                  {section.content.split('\n\n').map((paragraph, pi) => (
                    <p key={pi} className="text-stone-700 leading-[1.9] mb-5 text-[17px]">
                      {paragraph}
                    </p>
                  ))}

                  {section.subsections?.map((sub) => (
                    <div key={sub.id} id={sub.id} className="mt-10 mb-8 scroll-mt-24">
                      <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-indigo-500 rounded-full" />
                        {sub.title}
                      </h3>
                      {sub.content.split('\n\n').map((paragraph, pi) => (
                        <p key={pi} className="text-stone-700 leading-[1.9] mb-5 text-[17px]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </section>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-stone-200">
              <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-stone-100 text-stone-600 hover:bg-violet-50 hover:text-violet-700 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Back link */}
            <div className="mt-10">
              <Link
                href="/wikiwijzer"
                className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-800 font-medium transition-colors"
              >
                <ArrowLeft size={16} />
                Terug naar Wikiwijzer
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
