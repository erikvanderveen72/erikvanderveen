'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Shield } from 'lucide-react';

const navItems = [
  {
    label: 'Trainingen',
    items: [
      { label: 'ChatGPT Training', href: '/chatgpt', description: 'Effectief prompten en AI inzetten' },
      { label: 'Claude Training', href: '/claude', description: 'Diepgaande analyse en complexe taken' },
      { label: 'Gemini Training', href: '/gemini', description: 'AI binnen Google Workspace' },
      { label: 'Copilot Training', href: '/copilot', description: 'AI in Microsoft 365' },
    ],
  },
  { label: 'Artikelen', href: '/artikelen' },
  { label: 'Blog', href: '/blog' },
  { label: 'Downloads', href: '/downloads' },
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
            {navItems.map((item) =>
              'items' in item && item.items ? (
                <div key={item.label} className="relative group">
                  <button
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isScrolled
                        ? 'text-stone-700 hover:text-primary hover:bg-primary-light'
                        : 'text-stone-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className="opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute left-0 top-full pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                    <div className="bg-white rounded-xl shadow-xl border border-stone-200 overflow-hidden">
                      {item.items.map((subItem, idx) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`block px-5 py-3.5 hover:bg-primary-light transition-colors ${
                            idx < item.items.length - 1 ? 'border-b border-stone-100' : ''
                          }`}
                        >
                          <div className="font-semibold text-stone-900 text-sm">{subItem.label}</div>
                          <div className="text-xs text-stone-500 mt-0.5">{subItem.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-stone-700 hover:text-primary hover:bg-primary-light'
                      : 'text-stone-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
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
          {navItems.map((item) =>
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
