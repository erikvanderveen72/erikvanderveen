'use client';

import { useState, useEffect } from 'react';
import { List, ChevronRight } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
  children?: { id: string; title: string }[];
}

interface Props {
  items: TocItem[];
}

export default function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string>('');
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
      item.children?.forEach((child) => {
        const childEl = document.getElementById(child.id);
        if (childEl) observer.observe(childEl);
      });
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex items-center justify-between w-full p-4 text-left hover:bg-stone-50 transition-colors"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-stone-900">
          <List size={16} className="text-violet-600" />
          Inhoudsopgave
        </span>
        <ChevronRight
          size={16}
          className={`text-stone-400 transition-transform duration-200 ${isCollapsed ? '' : 'rotate-90'}`}
        />
      </button>

      {!isCollapsed && (
        <div className="px-4 pb-4">
          <ol className="space-y-0.5">
            {items.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`flex items-center gap-2 py-1.5 px-3 rounded-lg text-sm transition-all duration-200 ${
                    activeId === item.id
                      ? 'bg-violet-50 text-violet-700 font-medium'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                  }`}
                >
                  <span className="text-xs text-stone-400 font-mono w-4">{index + 1}</span>
                  {item.title}
                </a>
                {item.children && item.children.length > 0 && (
                  <ol className="ml-6 space-y-0.5 mt-0.5">
                    {item.children.map((child, ci) => (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          className={`flex items-center gap-2 py-1 px-3 rounded-lg text-sm transition-all duration-200 ${
                            activeId === child.id
                              ? 'bg-violet-50 text-violet-700 font-medium'
                              : 'text-stone-500 hover:text-stone-800 hover:bg-stone-50'
                          }`}
                        >
                          <span className="text-xs text-stone-400 font-mono w-6">{index + 1}.{ci + 1}</span>
                          {child.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}
    </nav>
  );
}
