'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import { articles } from '@/lib/wikiwijzer';

interface Props {
  variant?: 'hero' | 'compact';
}

export default function WikiwijzerSearch({ variant = 'hero' }: Props) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const results = query.length >= 2
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.summary.toLowerCase().includes(query.toLowerCase()) ||
          a.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 5)
    : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isHero = variant === 'hero';

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div className={`relative flex items-center transition-all duration-300 ${
        isHero
          ? `bg-white/10 backdrop-blur-xl border ${isFocused ? 'border-white/30 bg-white/15 shadow-2xl shadow-white/5' : 'border-white/10'} rounded-2xl`
          : `bg-white border ${isFocused ? 'border-violet-300 shadow-lg shadow-violet-500/10' : 'border-stone-200'} rounded-xl`
      }`}>
        <Search size={isHero ? 22 : 18} className={`ml-5 shrink-0 ${isHero ? 'text-white/50' : 'text-stone-400'}`} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Zoek een onderwerp..."
          className={`w-full bg-transparent outline-none ${
            isHero
              ? 'text-white placeholder:text-white/40 text-lg py-5 px-4'
              : 'text-stone-900 placeholder:text-stone-400 text-sm py-3 px-3'
          }`}
        />
        {query && (
          <button
            onClick={() => { setQuery(''); inputRef.current?.focus(); }}
            className={`mr-4 p-1 rounded-full transition-colors ${
              isHero ? 'text-white/40 hover:text-white/70 hover:bg-white/10' : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Results dropdown */}
      {isFocused && query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden z-50">
          {results.length > 0 ? (
            <div className="divide-y divide-stone-50">
              {results.map((article) => (
                <Link
                  key={article.slug}
                  href={`/wikiwijzer/${article.slug}`}
                  onClick={() => { setQuery(''); setIsFocused(false); }}
                  className="flex items-start gap-4 p-4 hover:bg-stone-50 transition-colors group"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-stone-900 group-hover:text-violet-700 transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-stone-500 text-sm mt-0.5 line-clamp-1">{article.summary}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-xs text-stone-400 flex items-center gap-1">
                        <Clock size={11} /> {article.readingTime} min
                      </span>
                      {article.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs bg-violet-50 text-violet-600 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-stone-300 group-hover:text-violet-500 mt-1 shrink-0 transition-colors" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-stone-400 text-sm">Geen resultaten gevonden voor &ldquo;{query}&rdquo;</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
