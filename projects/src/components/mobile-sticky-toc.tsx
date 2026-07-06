'use client';

import { useEffect, useRef, useState } from 'react';

export interface MobileStickyTocLink {
  href: string;
  label: string;
}

interface MobileStickyTocProps {
  links: MobileStickyTocLink[];
}

/**
 * Mobile-only sticky jump nav + reading progress bar for long guide pages.
 *
 * Why this exists: the 网站迭代指南 (site iteration guide) flagged that the
 * site's mobile experience was "a desktop layout shrunk down" rather than a
 * purpose-built mobile reading experience — no sticky section nav, no
 * progress indicator, nothing native-app-like for long attribute-heavy
 * guide pages. This component is the fix: a capsule-pill jump nav (matches
 * the same {href, label} shape already used by SearchAnswerPanel's
 * jumpLinks prop across the site, so it can reuse existing data with zero
 * new content) plus a thin scroll-progress bar, both hidden on desktop
 * (lg:hidden) since desktop already has enough screen real estate to see
 * headings without this.
 *
 * Sits directly below the main site header, which is `sticky top-0 h-16`
 * (see site-header.tsx), so this bar uses `top-16` to stack under it.
 */
export function MobileStickyToc({ links }: MobileStickyTocProps) {
  const [activeHref, setActiveHref] = useState<string>(links[0]?.href ?? '');
  const [progress, setProgress] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  // Reading progress: percentage scrolled through the full page.
  useEffect(() => {
    function updateProgress() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      if (scrollable <= 0) {
        setProgress(0);
        return;
      }
      const pct = Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100));
      setProgress(pct);
    }

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  // Active section: whichever heading is currently nearest the top of the
  // viewport, using IntersectionObserver instead of a scroll-position loop.
  useEffect(() => {
    const targets = links
      .map((link) => document.getElementById(link.href.replace('#', '')))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [links]);

  // Keep the active pill scrolled into view within the horizontal strip.
  useEffect(() => {
    const activeEl = navRef.current?.querySelector<HTMLElement>(`[data-href="${activeHref}"]`);
    activeEl?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [activeHref]);

  if (links.length === 0) return null;

  return (
    <div className="sticky top-16 z-40 -mx-4 mb-6 border-b border-border bg-white/95 backdrop-blur sm:-mx-6 lg:hidden">
      <div className="h-0.5 w-full bg-mist">
        <div
          className="h-0.5 bg-dribbble-pink transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <nav
        ref={navRef}
        aria-label="Section jump navigation"
        className="flex gap-2 overflow-x-auto px-4 py-2.5 sm:px-6 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none' }}
      >
        {links.map((link) => {
          const isActive = link.href === activeHref;
          return (
            <a
              key={link.href}
              href={link.href}
              data-href={link.href}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                isActive
                  ? 'border-dribbble-pink bg-dribbble-pink text-white'
                  : 'border-border bg-mist text-muted-foreground'
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
