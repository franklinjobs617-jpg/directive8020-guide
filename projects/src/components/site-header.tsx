'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo-icon.jpg"
            alt="Enjoy4Game Guides logo"
            width={36}
            height={36}
            className="rounded-md"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground leading-tight">
              Enjoy4Game
            </span>
            <span className="text-[10px] text-muted-foreground leading-tight tracking-widest uppercase">
              Guides
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href="/guides"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Guides
          </Link>
          <Link
            href="/games"
            className="text-sm font-semibold text-emerald-300 hover:text-emerald-200 transition-colors"
          >
            Games
          </Link>
          <Link
            href="/steam-deck"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Steam Deck
          </Link>
          <Link
            href="/games/fatekeeper"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Fatekeeper
          </Link>
          <Link
            href="/games/starminer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Starminer
          </Link>
          <Link
            href="/games/project-mist"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Project: Mist
          </Link>
          <Link
            href="/games/paralives"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Paralives
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/directive-8020-walkthrough"
            className="text-xs font-medium px-3 py-1.5 rounded-md bg-d8020/15 text-d8020 border border-d8020/30 hover:bg-d8020/25 transition-colors"
          >
            D8020 Hub
          </Link>
          <Link href="https://www.reddit.com/r/enjoy4game/">
            <button className="text-xs font-medium px-3 py-1.5 rounded-md bg-blue-600/15 text-blue-600 border border-blue-600/30 hover:bg-blue-600/25 transition-colors">
              Reddit
            </button>
          </Link>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform ${isMobileMenuOpen ? 'rotate-90' : ''}`}
          >
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-4 gap-2">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300 px-3 pt-2">Popular Games</p>
            <Link href="/games" onClick={closeMobileMenu} className="text-sm font-semibold text-emerald-300 hover:bg-muted px-3 py-2 rounded-md transition-colors">All Games</Link>
            <Link href="/steam-deck" onClick={closeMobileMenu} className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md transition-colors">Steam Deck Games</Link>
            <Link href="/games/fatekeeper" onClick={closeMobileMenu} className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md transition-colors">Fatekeeper</Link>
            <Link href="/games/starminer" onClick={closeMobileMenu} className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md transition-colors">Starminer</Link>
            <Link href="/games/project-mist" onClick={closeMobileMenu} className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md transition-colors">Project: Mist</Link>
            <Link href="/games/paralives" onClick={closeMobileMenu} className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md transition-colors">Paralives</Link>
            <Link href="/games/mechanicus-ii" onClick={closeMobileMenu} className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md transition-colors">Mechanicus II</Link>
            <div className="border-t border-border/40 my-1" />
            <Link href="/guides" onClick={closeMobileMenu} className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md transition-colors">Directive 8020 Guides</Link>
            <Link href="/directive-8020-walkthrough" onClick={closeMobileMenu} className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md transition-colors">D8020 Walkthrough</Link>
            <Link href="https://www.reddit.com/r/enjoy4game/" onClick={closeMobileMenu} className="text-sm font-medium text-blue-400 hover:bg-muted px-3 py-2 rounded-md transition-colors">Join Reddit</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
