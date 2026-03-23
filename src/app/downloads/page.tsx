import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { Download, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Downloads | Gratis AI-materialen',
  description:
    'Download gratis PDF-gidsen, promptlijsten en handige documenten over ChatGPT en andere AI-tools. Samengesteld door Erik van der Veen.',
  openGraph: {
    title: 'Downloads | Gratis AI-materialen | Erik van der Veen',
    description: 'Download gratis PDF-gidsen, promptlijsten en handige documenten over AI.',
    url: 'https://erikvanderveen.nl/downloads',
  },
  alternates: { canonical: 'https://erikvanderveen.nl/downloads' },
};

const downloads = [
  {
    title: 'Claude Code Cheatsheet (PDF)',
    description:
      'Handige cheatsheet voor Claude Code. Alle belangrijke commando\'s en shortcuts overzichtelijk op één pagina.',
    filename: 'claude_code_cheatsheet.pdf',
    fileUrl: '/downloads/claude_code_cheatsheet.pdf',
    category: 'PDF',
    available: true,
  },
];

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Downloads"
        highlightedSubtitle="Gratis AI-materialen"
        subtitle="Handige documenten, promptlijsten en gidsen om direct mee aan de slag te gaan."
        badge="Gratis downloads"
        showBreadcrumbs
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Downloads', href: '/downloads' },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {downloads.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-stone-200 rounded-2xl p-8 hover:shadow-lg transition-all hover:border-primary/30"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-red-50 p-4 rounded-xl shrink-0">
                    <FileText size={28} className="text-red-500" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full mb-3">
                      {item.category}
                    </span>
                    <h2 className="text-xl font-bold text-stone-900 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-stone-500 mb-4">{item.description}</p>
                  </div>
                  <div className="shrink-0 hidden sm:block">
                    {item.available ? (
                      <a
                        href={item.fileUrl}
                        download={item.filename}
                        className="bg-primary text-white p-3 rounded-xl hover:bg-primary-dark transition-colors inline-block"
                      >
                        <Download size={20} />
                      </a>
                    ) : (
                      <div className="bg-stone-100 text-stone-400 p-3 rounded-xl cursor-not-allowed">
                        <Download size={20} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary/5 via-white to-accent/5 rounded-2xl border border-stone-200 p-8 md:p-12">
            <h2 className="text-2xl font-extrabold text-stone-900 mb-3">
              Meer leren over AI?
            </h2>
            <p className="text-stone-500 mb-6 max-w-xl mx-auto">
              Boek een in-company AI training en leer je team in één dag effectief werken met AI-tools.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Bekijk trainingen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
