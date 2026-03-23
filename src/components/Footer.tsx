import Link from 'next/link';
import { Lock, Shield, RefreshCw } from 'lucide-react';

const columns = [
  {
    title: 'Trainingen',
    links: [
      { label: 'ChatGPT Training', href: '/chatgpt' },
      { label: 'Google Gemini Training', href: '/gemini' },
      { label: 'Microsoft Co-Pilot Training', href: '/copilot' },
      { label: 'Claude Training', href: '/claude' },
      { label: 'JetGPT Training', href: '/jetgpt' },
    ],
  },
  {
    title: 'Informatie',
    links: [
      { label: 'Over Erik', href: '/over-erik' },
      { label: 'Contact', href: '/contact' },
      { label: 'Veelgestelde vragen', href: '/#faq' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: '06 10 20 40 90', href: 'tel:0610204090' },
      { label: 'info@erikvanderveen.nl', href: 'mailto:info@erikvanderveen.nl' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/erikvanderveen' },
    ],
  },
];

const trustBadges = [
  { icon: Lock, label: 'SSL beveiligd' },
  { icon: Shield, label: 'Onafhankelijk' },
  { icon: RefreshCw, label: 'Niet tevreden? Geen factuur!' },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-10">
          <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="18" fill="#7c3aed" />
            <circle cx="18" cy="18" r="14" fill="rgba(255,255,255,0.15)" />
            <text x="18" y="23.5" textAnchor="middle" fontFamily="Inter" fontSize="14" fontWeight="700" fill="#fff">AI</text>
          </svg>
          <span className="text-[20px] font-extrabold tracking-tight text-white">
            erikvander<span className="text-primary">veen</span><span className="text-stone-500">.nl</span>
          </span>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-stone-400 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-3 mb-10">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 bg-stone-800 rounded-full px-3 py-1.5">
              <badge.icon size={12} className="text-stone-500" />
              <span className="text-xs text-stone-400">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-8 text-center">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Erik van der Veen — AI Training & Consultancy. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
