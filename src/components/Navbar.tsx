'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Shield } from 'lucide-react';

const trainingen = [
  { label: 'ChatGPT', href: '/chatgpt' },
  { label: 'Claude', href: '/claude' },
  { label: 'Gemini', href: '/gemini' },
  { label: 'Copilot', href: '/copilot' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white shadow-lg border-b border-stone-100'
        : 'bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="18" fill={isScrolled ? '#7c3aed' : '#7c3aed'} />
              <circle cx="18" cy="18" r="14" fill={isScrolled ? '#6d28d9' : 'rgba(255,255,255,0.15)'} />
              <text x="18" y="23.5" textAnchor="middle" fontFamily="Inter" fontSize="14" fontWeight="700" fill="#fff">AI</text>
            </svg>
            <span className={`text-[20px] font-extrabold tracking-tight ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
              erikvander<span className="text-primary">veen</span><span className={isScrolled ? 'text-stone-400' : 'text-stone-400'}>.nl</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {trainingen.map((t) => (
              <Link key={t.href} href={t.href} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isScrolled ? 'text-stone-700 hover:text-primary hover:bg-primary-light' : 'text-stone-300 hover:text-white hover:bg-white/10'
              }`}>{t.label}</Link>
            ))}

            <Link href="/downloads" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isScrolled ? 'text-stone-700 hover:text-primary hover:bg-primary-light' : 'text-stone-300 hover:text-white hover:bg-white/10'
            }`}>Downloads</Link>

            <Link href="/over-erik" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isScrolled ? 'text-stone-700 hover:text-primary hover:bg-primary-light' : 'text-stone-300 hover:text-white hover:bg-white/10'
            }`}>Over Erik</Link>

            <Link href="/contact" className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isScrolled ? 'text-stone-700 hover:text-primary hover:bg-primary-light' : 'text-stone-300 hover:text-white hover:bg-white/10'
            }`}>Contact</Link>

            {/* Trust badge */}
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ml-2 ${
              isScrolled ? 'bg-emerald-50 text-emerald-700' : 'bg-emerald-500/20 text-emerald-300'
            }`}>
              <Shield size={12} />
              <span>175+ trainingen</span>
            </div>

            {/* CTA */}
            <Link href="/contact" className="ml-3 bg-accent hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl">
              Boek een training
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-stone-700' : 'text-white'}`}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 shadow-xl rounded-b-2xl">
          <div className="px-4 py-4 space-y-1">
            {trainingen.map((t) => (
              <Link key={t.href} href={t.href} onClick={() => setIsMobileOpen(false)} className="block px-4 py-3 rounded-lg text-stone-700 font-medium hover:bg-primary-light">
                {t.label}
              </Link>
            ))}
            <Link href="/downloads" onClick={() => setIsMobileOpen(false)} className="block px-4 py-3 rounded-lg text-stone-700 font-medium hover:bg-primary-light">Downloads</Link>
            <Link href="/over-erik" onClick={() => setIsMobileOpen(false)} className="block px-4 py-3 rounded-lg text-stone-700 font-medium hover:bg-primary-light">Over Erik</Link>
            <Link href="/contact" onClick={() => setIsMobileOpen(false)} className="block px-4 py-3 rounded-lg text-stone-700 font-medium hover:bg-primary-light">Contact</Link>
            <Link href="/contact" onClick={() => setIsMobileOpen(false)} className="block mx-4 mt-2 bg-accent text-white text-center px-5 py-3 rounded-full font-semibold">
              Boek een training
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
