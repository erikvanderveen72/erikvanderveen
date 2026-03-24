import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { Download, FileText, Image as ImageIcon, ArrowRight, AlertTriangle } from 'lucide-react';

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
    title: 'ChatGPT Mogelijkheden Cheatsheet',
    description:
      'Compleet overzicht van alle ChatGPT features en tools op één A4. Modellen, Canvas, projecten, zoeken, beeldgeneratie, voice mode, data-analyse en meer. Bijgewerkt maart 2026.',
    filename: 'chatgpt_mogelijkheden_cheatsheet.png',
    fileUrl: '/downloads/chatgpt_mogelijkheden_cheatsheet.png',
    category: 'Afbeelding',
    available: true,
  },
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
                  <div className={`${item.category === 'PDF' ? 'bg-red-50' : 'bg-emerald-50'} p-4 rounded-xl shrink-0`}>
                    {item.category === 'PDF' ? (
                      <FileText size={28} className="text-red-500" />
                    ) : (
                      <ImageIcon size={28} className="text-emerald-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full mb-3">
                      {item.category}
                    </span>
                    <h2 className="text-xl font-bold text-stone-900 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-stone-500 mb-4">{item.description}</p>
                    {item.available && (
                      <a
                        href={item.fileUrl}
                        download={item.filename}
                        className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium sm:hidden"
                      >
                        <Download size={16} /> Download
                      </a>
                    )}
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

          {/* Toelichting */}
          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle size={20} className="text-amber-600" />
              <h3 className="text-lg font-bold text-stone-900">Toelichting bij de Claude Code cheatsheet</h3>
            </div>
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                Deze cheatsheet is een handig startpunt, maar gebruik hem met de nodige nuance.
                Een belangrijke kanttekening: voordat je ook maar één letter typt in Claude Code,
                ben je al snel 200.000 tokens kwijt aan MCP-servers en instructies. Dat token-budget
                is beperkt, dus wees je daarvan bewust.
              </p>
              <p>
                Niet alles wat op de sheet staat heeft een MCP-server nodig. Het bestandssysteem
                wordt bijvoorbeeld genoemd als &quot;populaire MCP-server&quot;, maar dat zit standaard
                ingebouwd. Hetzelfde geldt voor de browser-integratie: Claude heeft een eigen
                browser-extensie, daar heb je geen aparte MCP voor nodig. En tools zoals de
                Playwright MCP kosten enorm veel context.
              </p>
              <p>
                Over CLAUDE.md: de sheet raadt aan om er een te maken, maar wees kritisch. Het
                overgrote deel van wat je erin zet is niet relevant voor elke prompt, terwijl het
                wel elke keer wordt meegestuurd. Dat vreet tokens. Overweeg om instructies gewoon
                in je prompt te zetten in plaats van in een configuratiebestand.
              </p>
              <p>
                Tot slot: &quot;begin klein&quot; is een goed advies, maar pas op dat je ook klein
                eindigt. Het risico is dat je begint met een simpele setup en vervolgens zoveel
                configuratiebestanden en MCP-servers toevoegt dat je meer tijd kwijt bent aan het
                managen van je AI-tool dan aan het daadwerkelijk schrijven van code.
              </p>
            </div>
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
