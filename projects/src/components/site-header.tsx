import Link from 'next/link';
import Image from 'next/image';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo-icon.jpg"
            alt="Directive 8020 logo"
            width={36}
            height={36}
            className="rounded-md"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground leading-tight">
              Directive 8020
            </span>
            <span className="text-[10px] text-muted-foreground leading-tight tracking-widest uppercase">
              Guide Hub
            </span>
          </div>
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          <Link
            href="/guides"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Guides
          </Link>
          <Link
            href="/directive-8020-characters"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Characters
          </Link>
          <Link
            href="/directive-8020-all-endings"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Endings
          </Link>
          <Link
            href="/directive-8020-trophy-guide"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Trophies
          </Link>
        </nav>

        <Link
          href="/directive-8020-system-requirements"
          className="text-xs font-medium px-3 py-1.5 rounded-md bg-d8020/15 text-d8020 border border-d8020/30 hover:bg-d8020/25 transition-colors"
        >
          System Req.
        </Link>
      </div>
    </header>
  );
}
