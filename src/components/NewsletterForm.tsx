'use client';

import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

interface NewsletterFormProps {
  variant?: 'hero' | 'footer';
}

export default function NewsletterForm({ variant = 'hero' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Er ging iets mis');
      }

      setStatus('success');
      setEmail('');
      setFirstName('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Er ging iets mis');
    }
  };

  if (status === 'success') {
    if (variant === 'footer') {
      return (
        <div className="flex items-center gap-2 text-emerald-400 text-sm">
          <CheckCircle size={16} />
          <span>Je bent aangemeld!</span>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
        <CheckCircle size={24} className="text-emerald-600 shrink-0" />
        <div>
          <p className="font-semibold text-stone-900">Je bent aangemeld!</p>
          <p className="text-stone-500 text-sm">Check je inbox voor de welkomstmail.</p>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Je e-mailadres"
            required
            className="flex-1 bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-primary"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-primary hover:bg-primary-dark text-white px-3 py-2 rounded-lg transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          </button>
        </div>
        {status === 'error' && (
          <p className="text-red-400 text-xs">{errorMsg}</p>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Voornaam (optioneel)"
          className="sm:w-40 bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Je e-mailadres"
          required
          className="flex-1 bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-all disabled:opacity-50"
        >
          {status === 'loading' ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <>Aanmelden <Send size={16} /></>
          )}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-red-500 text-sm">{errorMsg}</p>
      )}
      <p className="text-stone-400 text-xs">Elke twee weken. Geen spam. Altijd opzegbaar.</p>
    </form>
  );
}
