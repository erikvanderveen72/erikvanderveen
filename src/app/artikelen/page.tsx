import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Artikelen over AI, Tools & Productiviteit',
  description: 'Achtergrondartikelen en reviews over AI-tools, productiviteit en digitaal werken. Door Erik van der Veen, AI-trainer en digitaal ondernemer.',
  openGraph: {
    title: 'Artikelen over AI, Tools & Productiviteit | Erik van der Veen',
    description: 'Achtergrondartikelen en reviews over AI-tools, productiviteit en digitaal werken.',
    url: 'https://erikvanderveen.nl/artikelen',
  },
  alternates: { canonical: 'https://erikvanderveen.nl/artikelen' },
};

const artikelen = [
  {
    slug: '10-redenen-ai-niet-snel',
    title: '10 redenen waarom AI nog niet zo snel gaat',
    excerpt: 'Waarom AI-adoptie bij bedrijven trager gaat dan verwacht. Praktijkinzichten na 175+ AI-trainingen bij Nederlandse organisaties.',
    date: '2026-03-29',
    readTime: '10 min',
    category: 'Opinie',
  },
  {
    slug: 'claude-cowork',
    title: 'Claude Cowork: de AI-assistent die echt je werk doet',
    excerpt: 'Wat ik de afgelopen weken heb meegemaakt met Claude Cowork, slaat werkelijk alles wat ik tot nu toe heb gezien. Een eerlijke review van de nieuwste tool van Anthropic.',
    date: '2026-03-29',
    readTime: '8 min',
    category: 'Review',
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function ArtikelenPage() {
  return (
    <>
      <PageHero
        title="Artikelen"
        highlightedSubtitle="AI, Tools & Productiviteit"
        subtitle="Achtergrondartikelen, reviews en inzichten over AI-tools en digitaal werken."
        badge="Achtergrondartikelen"
        showBreadcrumbs
        breadcrumbs={[{ label: 'Artikelen', href: '/artikelen' }]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Erik van der Veen Artikelen',
            url: 'https://erikvanderveen.nl/artikelen',
            description: 'Achtergrondartikelen en reviews over AI-tools, productiviteit en digitaal werken.',
            author: {
              '@type': 'Person',
              name: 'Erik van der Veen',
              url: 'https://erikvanderveen.nl/over-erik',
            },
            blogPost: artikelen.map((a) => ({
              '@type': 'BlogPosting',
              headline: a.title,
              url: `https://erikvanderveen.nl/artikelen/${a.slug}`,
              datePublished: a.date,
              author: { '@type': 'Person', name: 'Erik van der Veen' },
            })),
          }),
        }}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured article */}
          <Link href={`/artikelen/${artikelen[0].slug}`} className="group block mb-12">
            <div className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 border border-stone-200 rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all duration-300 hover:border-primary/30">
              <div className="absolute top-6 right-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                <Sparkles size={12} />
                Nieuwste artikel
              </div>
              <span className="inline-block text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full mb-4">
                {artikelen[0].category}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-4 group-hover:text-primary transition-colors">
                {artikelen[0].title}
              </h2>
              <p className="text-stone-500 text-lg mb-6 max-w-2xl">{artikelen[0].excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-stone-400">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {formatDate(artikelen[0].date)}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> {artikelen[0].readTime} leestijd</span>
              </div>
              <div className="mt-6 flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Lees artikel <ArrowRight size={16} />
              </div>
            </div>
          </Link>

          {/* Other articles grid (when more articles are added) */}
          {artikelen.length > 1 && (
            <div className="grid md:grid-cols-2 gap-6">
              {artikelen.slice(1).map((artikel) => (
                <Link key={artikel.slug} href={`/artikelen/${artikel.slug}`} className="group block">
                  <article className="h-full bg-white border border-stone-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full mb-3">
                      {artikel.category}
                    </span>
                    <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-primary transition-colors">
                      {artikel.title}
                    </h3>
                    <p className="text-stone-500 text-sm mb-4 line-clamp-3">{artikel.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-stone-400">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(artikel.date)}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {artikel.readTime}</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary/5 via-white to-accent/5 rounded-2xl border border-stone-200 p-8 md:p-12">
            <h2 className="text-2xl font-extrabold text-stone-900 mb-3">Meer leren over AI?</h2>
            <p className="text-stone-500 mb-6 max-w-xl mx-auto">
              Boek een in-company AI training en leer je team in een dag effectief werken met AI-tools.
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
