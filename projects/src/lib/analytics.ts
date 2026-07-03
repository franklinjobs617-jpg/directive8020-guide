type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

/**
 * Fire a GA4 custom event through the gtag.js loader already set up in
 * src/app/layout.tsx (measurement ID G-1K6LQQSKHV). Safe to call anywhere:
 * no-ops during SSR and no-ops if gtag hasn't loaded yet.
 *
 * This project previously had zero custom event tracking anywhere (only the
 * automatic page_view from gtag('config', ...) in layout.tsx), which is why
 * GA4's "Key events" report was empty for every page. Use this helper to add
 * meaningful, low-volume events (tool completions, not every keystroke/click)
 * and then mark the event name as a Key event in GA4 Admin > Events.
 *
 * Keep call sites sparse and intentional — this mirrors the lesson from the
 * voidling-bound-database.tsx GA4 pageview-inflation fix: firing an event on
 * every micro-interaction pollutes the data instead of clarifying it.
 */
export function trackEvent(
  name: string,
  params: Record<string, string | number | boolean> = {},
) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}
