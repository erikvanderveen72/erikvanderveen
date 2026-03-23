'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const FORMSPREE_ID = 'xkoqdwpy';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <CheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-stone-900 mb-2">Bericht verzonden!</h3>
        <p className="text-stone-600">We nemen zo snel mogelijk contact met je op.</p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1.5">Naam *</label>
          <input
            type="text"
            name="naam"
            required
            className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            placeholder="Je volledige naam"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1.5">E-mailadres *</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            placeholder="naam@bedrijf.nl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1.5">Organisatie</label>
          <input
            type="text"
            name="organisatie"
            className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            placeholder="Bedrijfsnaam"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1.5">Telefoonnummer</label>
          <input
            type="tel"
            name="telefoon"
            className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            placeholder="06 12345678"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1.5">Welke training? *</label>
        <select
          name="training"
          required
          className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
        >
          <option value="">Selecteer een training</option>
          <option value="chatgpt">ChatGPT Training</option>
          <option value="gemini">Google Gemini Training</option>
          <option value="copilot">Microsoft Copilot Training</option>
          <option value="claude">Claude Training</option>
          <option value="meerdere">Meerdere trainingen / op maat</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1.5">Bericht *</label>
        <textarea
          name="bericht"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
          placeholder="Vertel iets over je team, het gewenste niveau en eventuele specifieke wensen..."
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <AlertCircle size={16} />
          Er ging iets mis. Probeer het opnieuw of neem telefonisch contact op.
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex items-center gap-2 bg-accent hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-lg hover:shadow-xl"
      >
        {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
        {loading ? 'Verzenden...' : 'Verstuur aanvraag'}
      </button>
    </form>
  );
}
