import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-background/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Directive 8020 Guides
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your comprehensive guide to surviving the Cassiopeia. All endings,
              choices, characters, and more.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/directive-8020-all-endings"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  All Endings Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/directive-8020-how-to-save-everyone"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  How to Save Everyone
                </Link>
              </li>
              <li>
                <Link
                  href="/directive-8020-trophy-guide"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Trophy Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/directive-8020-choices-consequences"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Choices & Consequences
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/directive-8020-system-requirements"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  System Requirements
                </Link>
              </li>
              <li>
                <Link
                  href="/directive-8020-release-time"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Release Time
                </Link>
              </li>
              <li>
                <Link
                  href="/directive-8020-characters"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Characters
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            Not affiliated with Supermassive Games or Bandai Namco. Fan-made guide.
          </p>
          <p className="text-xs text-muted-foreground">
            Directive 8020 &trade; Supermassive Games
          </p>
        </div>
      </div>
    </footer>
  );
}
