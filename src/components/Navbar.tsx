'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Shield } from 'lucide-react';

const navItems = [
  { label: 'ChatGPT', href: '/chatgpt' },
  { label: 'Claude', href: '/claude' },
  { label: 'Gemini', href: '/gemini' },
  { label: 'Copilot', href: '/copilot' },
  { label: 'Over Erik', href: '/over-erik' },
  { label: 'Contact', href: '/contact' },
];

// Mobile menu keeps the dropdown for cleaner UX
const mobileNavItems = [
  {
    label: 'Trainingen',
    items: [
      { label: 'ChatGPT Training', href: '/chatgpt' },
      { label: 'Claude Training', href: '/claude' },
      { label: 'Gemini Training', href: '/gemini' },
      { label: 'Copilot Training', href: '/copilot' },
    ],
  },
  { label: 'Over Erik', href: '/over-erik' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-stone-200'
          : 'bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-md">
              AI
            </div>
            <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
              erikvander<span className="text-primary">veen</span><span className={isScrolled ? 'text-stone-400' : 'text-stone-400'}>.nl</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-stone-700 hover:text-primary hover:bg-primary-light'
                    : 'text-stone-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Trust Badge + Mobile Button */}
          <div className="flex items-center gap-4">
            <div className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border ${
              isScrolled
                ? 'border-primary/20 bg-primary-light'
                : 'border-white/20 bg-white/10 backdrop-blur-sm'
            }`}>
              <Shield size={14} className={isScrolled ? 'text-primary' : 'text-violet-400'} />
              <span className={`text-xs font-semibold ${isScrolled ? 'text-primary-dark' : 'text-stone-200'}`}>
                175+ trainingen
              </span>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'hover:bg-stone-100' : 'hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className={isScrolled ? 'text-stone-900' : 'text-white'} />
              ) : (
                <Menu size={24} className={isScrolled ? 'text-stone-900' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div
          className={`border-t px-4 py-4 space-y-1 ${
            isScrolled
              ? 'bg-white border-stone-200'
              : 'bg-stone-900 border-stone-800'
          }`}
        >
          {mobileNavItems.map((item) =>
            'items' in item && item.items ? (
              <div key={item.label}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg font-medium transition-colors ${
                    isScrolled
                      ? 'text-stone-900 hover:bg-stone-100'
                      : 'text-white hover:bg-stone-800'
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      openDropdown === item.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openDropdown === item.label ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 space-y-1 py-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                          isScrolled
                            ? 'text-stone-600 hover:bg-primary-light hover:text-primary'
                            : 'text-stone-400 hover:bg-stone-800 hover:text-violet-400'
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2.5 px-3 rounded-lg font-medium transition-colors ${
                  isScrolled
                    ? 'text-stone-900 hover:bg-stone-100'
                    : 'text-white hover:bg-stone-800'
                }`}
              >
                {item.label}
              </Link>
            )
          )}

          <div className={`flex items-center gap-2 pt-3 mt-2 border-t ${
            isScrolled ? 'border-stone-200' : 'border-stone-800'
          }`}>
            <Shield size={16} className="text-primary" />
            <span className={`text-sm font-medium ${isScrolled ? 'text-stone-600' : 'text-stone-400'}`}>
              175+ trainingen
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
