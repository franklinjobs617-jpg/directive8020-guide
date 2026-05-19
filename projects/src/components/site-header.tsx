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
            href="/directive-8020-beginner-tips"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Tips
          </Link>
          <Link
            href="/directive-8020-walkthrough"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Walkthrough
          </Link>
          <Link
            href="/directive-8020-turning-points-story-tree"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Story Tree
          </Link>
          <Link
            href="/directive-8020-all-endings"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Endings
          </Link>
          <Link
            href="/directive-8020-trophy-list"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Trophies
          </Link>
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/directive-8020-cast-actors"
            className="text-xs font-medium px-3 py-1.5 rounded-md bg-d8020/15 text-d8020 border border-d8020/30 hover:bg-d8020/25 transition-colors"
          >
            Cast
          </Link>
          <Link href="https://www.reddit.com/r/enjoy4game/">
            <button className="text-xs font-medium px-3 py-1.5 rounded-md bg-blue-600/15 text-blue-600 border border-blue-600/30 hover:bg-blue-600/25 transition-colors">
              Join our Reddit
            </button>
          </Link>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="sm:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted transition-colors"
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
        <div className="sm:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-4 gap-2">
            <Link
              href="/guides"
              onClick={closeMobileMenu}
              className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md transition-colors"
            >
              Guides
            </Link>
            <Link
              href="/directive-8020-beginner-tips"
              onClick={closeMobileMenu}
              className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md transition-colors"
            >
              Tips
            </Link>
            <Link
              href="/directive-8020-walkthrough"
              onClick={closeMobileMenu}
              className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md transition-colors"
            >
              Walkthrough
            </Link>
            <Link
              href="/directive-8020-turning-points-story-tree"
              onClick={closeMobileMenu}
              className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md transition-colors"
            >
              Story Tree
            </Link>
            <Link
              href="/directive-8020-all-endings"
              onClick={closeMobileMenu}
              className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md transition-colors"
            >
              Endings
            </Link>
            <Link
              href="/directive-8020-trophy-list"
              onClick={closeMobileMenu}
              className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md transition-colors"
            >
              Trophies
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
