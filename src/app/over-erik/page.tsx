import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { Award, Zap, Users, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Over Erik van der Veen | AI Trainer & Consultant',
  description:
    'Ontdek het verhaal van Erik van der Veen. Met 175+ trainingen, 25 jaar online marketing ervaring en 22K+ LinkedIn followers helpt Erik bedrijven het meeste uit AI-tools te halen.',
  openGraph: {
    title: 'Over Erik van der Veen | AI Trainer & Consultant',
    description:
      'Ontdek het verhaal van Erik van der Veen. Met 175+ trainingen en 25 jaar online marketing ervaring.',
  },
};

export default function OverErikPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Over"
        highlightedSubtitle="Erik van der Veen"
        badge="175+ trainingen ervaring"
        showBreadcrumbs={true}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Over Erik', href: '/over-erik' },
        ]}
      />

      {/* Bio Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6">Het verhaal van Erik</h2>

              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Erik van der Veen is een AI-trainer en consultant met een passie voor het helpen van
                  bedrijven om de kracht van moderne AI-tools optimaal in te zetten. Met meer dan 25
                  jaar ervaring in online marketing en digitale transformatie, brengt Erik een unieke
                  combinatie van praktische kennis en strategisch inzicht naar elk project.
                </p>

                <p>
                  Vanaf dag één heeft Erik zich verdiept in ChatGPT en andere geavanceerde AI-tools.
                  Deze vroege adopter mentaliteit, gecombineerd met zijn training ervaring, maakt hem
                  een ideale sparringpartner voor organisaties die willen innoveren en groeien.
                </p>

                <p>
                  Met meer dan 175 trainingen onder zijn riem, van kleinere teams tot grote corporate
                  organisaties, heeft Erik aangetoond dat hij effectief kennis kan overdragen en teams
                  kan inspireren. Zijn LinkedIn posts bereiken regelmatig honderdduizenden views, met
                  een totaal bereik van 950K+ weergaven.
                </p>

                <p className="text-stone-900 font-semibold pt-2">
                  Erik volgen? Op LinkedIn telt hij meer dan 22.000 followers die zijn inzichten en
                  praktische AI-tips waarderen.
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-border">
                  <Image
                    src="https://chatgptexpert.com/erikportret.jpg"
                    alt="Erik van der Veen"
                    width={500}
                    height={500}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-white px-6 py-3 rounded-lg shadow-lg font-semibold">
                  25+ jaar online marketing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Erik Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Waarom Erik?</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Vier redenen waarom bedrijven en individuen voor Erik kiezen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Ervaren */}
            <div className="bg-white rounded-xl border border-border p-8 hover:shadow-md transition-shadow">
              <div className="bg-primary-light p-4 rounded-lg w-fit mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-3">Ervaren</h3>
              <p className="text-text-muted">
                175+ trainingen gegeven aan teams van verschillende groottes en industries. Beproefd
                expertise waar je op kunt vertrouwen.
              </p>
            </div>

            {/* Card 2: Praktisch */}
            <div className="bg-white rounded-xl border border-border p-8 hover:shadow-md transition-shadow">
              <div className="bg-accent bg-opacity-10 p-4 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-3">Praktisch</h3>
              <p className="text-text-muted">
                Geen theoretische stellingen, maar hands-on, direct toepasbare kennis. Je leert doen,
                niet alleen luisteren.
              </p>
            </div>

            {/* Card 3: Op maat */}
            <div className="bg-white rounded-xl border border-border p-8 hover:shadow-md transition-shadow">
              <div className="bg-primary-light p-4 rounded-lg w-fit mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-3">Op maat</h3>
              <p className="text-text-muted">
                Elke training is afgestemd op jouw team, sector en doelstellingen. Geen one-size-fits-all
                benadering.
              </p>
            </div>

            {/* Card 4: Breed */}
            <div className="bg-white rounded-xl border border-border p-8 hover:shadow-md transition-shadow">
              <div className="bg-accent bg-opacity-10 p-4 rounded-lg w-fit mb-4">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-3">Breed</h3>
              <p className="text-text-muted">
                Kennis van alle grote AI-tools: ChatGPT, Claude, Gemini, Midjourney en meer. Altijd
                up-to-date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Ervaring op een rij</h2>

          <div className="space-y-8">
            {/* Timeline Item 1 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                <div className="w-1 h-24 bg-border mt-4"></div>
              </div>
              <div className="pb-8">
                <div className="bg-primary-light rounded-lg p-6 border border-primary border-opacity-20">
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">25+ jaar online marketing</h3>
                  <p className="text-text-muted">
                    Uitgebreide achtergrond in digitale transformatie, strategie en implementatie van
                    nieuwe technologieën.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-accent rounded-full mt-2"></div>
                <div className="w-1 h-24 bg-border mt-4"></div>
              </div>
              <div className="pb-8">
                <div className="bg-accent bg-opacity-10 rounded-lg p-6 border border-accent border-opacity-20">
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">
                    ChatGPT adopter van dag 1
                  </h3>
                  <p className="text-text-muted">
                    Al een van de eerste gebruikers van ChatGPT, waardoor diepgaande kennis van AI-tools
                    is opgebouwd.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                <div className="w-1 h-24 bg-border mt-4"></div>
              </div>
              <div className="pb-8">
                <div className="bg-primary-light rounded-lg p-6 border border-primary border-opacity-20">
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">175+ trainingen gegeven</h3>
                  <p className="text-text-muted">
                    Van small business tot corporate trainingen. Elk project specifiek ontworpen voor
                    maximale impact en leerresultaten.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-accent rounded-full mt-2"></div>
              </div>
              <div>
                <div className="bg-accent bg-opacity-10 rounded-lg p-6 border border-accent border-opacity-20">
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">
                    22K+ LinkedIn followers & 950K post views
                  </h3>
                  <p className="text-text-muted">
                    Gewaardeerd expert in de AI-community. Regelmatig uitgenodigd voor spreekbeurten
                    en collaboraties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary bg-opacity-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Klaar om te beginnen?</h2>
          <p className="text-text-muted text-lg mb-8">
            Ontdek hoe Erik jouw team kan helpen AI-tools effectief in te zetten en sneller resultaten
            te behalen.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </main>
  );
}
