import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  highlightedSubtitle?: string;
  badge?: string;
  showBreadcrumbs?: boolean;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({ title, subtitle, highlightedSubtitle, badge, showBreadcrumbs, breadcrumbs }: PageHeroProps) {
  const allBreadcrumbs = breadcrumbs
    ? [{ label: 'Home', href: '/' }, ...breadcrumbs.filter(b => b.label !== 'Home')]
    : [{ label: 'Home', href: '/' }];

  return (
    <div className="relative overflow-hidden bg-stone-900">
      {/* Animated blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 plus-pattern opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {showBreadcrumbs && (
          <nav className="flex items-center gap-1.5 mb-8 text-sm">
            {allBreadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={14} className="text-stone-500" />}
                {i < allBreadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className="text-stone-400 hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-stone-300">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-stone-300 text-sm font-medium">{badge}</span>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          {title}
        </h1>

        {highlightedSubtitle && (
          <p className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-orange-300 to-amber-400 bg-clip-text text-transparent">
              {highlightedSubtitle}
            </span>
          </p>
        )}

        {subtitle && (
          <p className="text-stone-400 text-lg sm:text-xl max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
