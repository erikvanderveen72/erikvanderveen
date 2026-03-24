'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/31610204090"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
    >
      <MessageCircle size={28} fill="white" stroke="white" />
    </a>
  );
}
