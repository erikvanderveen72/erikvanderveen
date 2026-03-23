'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <CheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-stone-900 mb-2">Bericht verzonden!</h3>
        <p className="text-stone-600">We nemen zo snel mogelijk contact met je op.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1.5">Naam *</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            placeholder="Je volledige naam"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1.5">E-mailadres *</label>
          <input
            type="email"
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
            className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            placeholder="Bedrijfsnaam"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1.5">Telefoonnummer</label>
          <input
            type="tel"
            className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            placeholder="06 12345678"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1.5">Welke training? *</label>
        <select
          required
          className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
        >
          <option value="">Selecteer een training</option>
          <option value="chatgpt">ChatGPT Training</option>
          <option value="gemini">Google Gemini Training</option>
          <option value="copilot">Microsoft Co-Pilot Training</option>
          <option value="claude">Claude Training</option>
          <option value="jetgpt">JetGPT Training</option>
          <option value="meerdere">Meerdere trainingen / op maat</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1.5">Bericht *</label>
        <textarea
          required
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
          placeholder="Vertel iets over je team, het gewenste niveau en eventuele specifieke wensen..."
        />
      </div>

      <button
        type="submit"
        className="flex items-center gap-2 bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-lg hover:shadow-xl"
      >
        <Send size={18} />
        Verstuur aanvraag
      </button>
    </form>
  );
}
