import Link from 'next/link';
import { Lock, Shield, RefreshCw, Award } from 'lucide-react';
import NewsletterForm from '@/components/NewsletterForm';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-400">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Logo + Description */}
        <div className="mb-12">
          <Link href="/" className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-md">
              AI
            </div>
            <span className="font-bold text-lg text-white">
              erikvander<span className="text-primary">veen</span><span className="text-stone-500">.nl</span>
            </span>
          </Link>
          <p className="text-sm max-w-md text-stone-500 leading-relaxed">
            AI-trainer, online marketing specialist en digitaal ondernemer.
            In-company AI trainingen voor organisaties. 175+ trainingen ervaring.
          </p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Trainingen Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Trainingen</h3>
            <ul className="space-y-2.5">
              <li><Link href="/chatgpt" className="text-sm hover:text-violet-400 transition-colors">ChatGPT Training</Link></li>
              <li><Link href="/claude" className="text-sm hover:text-violet-400 transition-colors">Claude Training</Link></li>
              <li><Link href="/gemini" className="text-sm hover:text-violet-400 transition-colors">Gemini Training</Link></li>
              <li><Link href="/copilot" className="text-sm hover:text-violet-400 transition-colors">Copilot Training</Link></li>
            </ul>
          </div>

          {/* Informatie Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Informatie</h3>
            <ul className="space-y-2.5">
              <li><Link href="/artikelen" className="text-sm hover:text-violet-400 transition-colors">Artikelen</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-violet-400 transition-colors">Blog</Link></li>
              <li><Link href="/downloads" className="text-sm hover:text-violet-400 transition-colors">Downloads</Link></li>
              <li><Link href="/over-erik" className="text-sm hover:text-violet-400 transition-colors">Over Erik</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2.5">
              <li><Link href="/contact" className="text-sm hover:text-violet-400 transition-colors">Contact opnemen</Link></li>
              <li><a href="tel:0610204090" className="text-sm hover:text-violet-400 transition-colors">06 10 20 40 90</a></li>
              <li><a href="https://linkedin.com/in/erikvanderveen" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-violet-400 transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          {/* Nieuwsbrief Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Nieuwsbrief</h3>
            <p className="text-sm text-stone-500 mb-3">Elke twee weken een AI-tip in je inbox.</p>
            <NewsletterForm variant="footer" />
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Lock size={18} className="text-violet-400" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">SSL Beveiligd</div>
              <div className="text-xs text-stone-500">256-bit encryptie</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield size={18} className="text-violet-400" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Onafhankelijk</div>
              <div className="text-xs text-stone-500">Eerlijk advies</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <RefreshCw size={18} className="text-violet-400" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Niet tevreden?</div>
              <div className="text-xs text-stone-500">Geen factuur!</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Award size={18} className="text-violet-400" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">175+ Trainingen</div>
              <div className="text-xs text-stone-500">Gem. waardering 8,9</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800/50 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-500">
            &copy; {currentYear} Erik van der Veen | AI Training & Consultancy. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span>Bijgewerkt maart 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
