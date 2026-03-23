import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | Boek een AI Training',
  description: 'Neem contact op met Erik van der Veen voor een AI training of advies. Wij reageren binnen 24 uur op uw aanvraag.',
  openGraph: {
    title: 'Contact | Boek een AI Training',
    description: 'Neem contact op met Erik van der Veen voor een AI training of advies.',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Contact"
        subtitle="Neem vandaag nog contact op"
        badge="Reactie binnen 24 uur"
        showBreadcrumbs={true}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Stuur ons een bericht</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-8">Directe contactgegevens</h2>

                {/* Phone Card */}
                <div className="bg-surface border border-border rounded-lg p-6 mb-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-light p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">Telefoon</h3>
                      <a
                        href="tel:0610204090"
                        className="text-primary hover:text-primary-dark transition-colors font-medium"
                      >
                        06 10 20 40 90
                      </a>
                      <p className="text-text-muted text-sm mt-2">
                        Bereikbaar op werkdagen van 9:00 tot 17:00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reactietijd Card */}
                <div className="bg-surface border border-border rounded-lg p-6 mb-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-light p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">Reactietijd</h3>
                      <p className="text-text-muted text-sm mt-2">
                        Wij reageren binnen 24 uur op uw bericht
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-surface border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-light p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">Locatie</h3>
                      <p className="text-primary hover:text-primary-dark transition-colors font-medium">
                        Heel Nederland + Online
                      </p>
                      <p className="text-text-muted text-sm mt-2">
                        Trainingen en adviessessies op locatie of volledig online
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-primary-light rounded-lg p-6 border border-primary border-opacity-20">
                <h3 className="font-semibold text-stone-900 mb-3">Snelle reactie garantie</h3>
                <p className="text-text-muted">
                  Uw vragen zijn belangrijk voor ons. We streven ernaar binnen 24 uur contact met u op
                  te nemen. Voor urgente zaken kunt u altijd bellen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
