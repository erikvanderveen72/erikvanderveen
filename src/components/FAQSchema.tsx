'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export default function FAQSchema({ items }: FAQSchemaProps) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`border rounded-xl transition-all cursor-pointer ${
              expandedIdx === idx ? 'border-primary bg-white shadow-sm' : 'border-border bg-surface hover:border-primary/50'
            }`}
            onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
          >
            <div className="flex items-center justify-between p-5">
              <h3 className="font-semibold text-text-main text-sm sm:text-base pr-4">{item.question}</h3>
              <ChevronDown
                size={20}
                className={`text-text-muted shrink-0 transition-transform duration-200 ${
                  expandedIdx === idx ? 'rotate-180' : ''
                }`}
              />
            </div>
            {expandedIdx === idx && (
              <div className="px-5 pb-5 text-text-muted text-sm leading-relaxed border-t border-border/50 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
