"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/games", label: "Games" },
  { href: "/games/fatekeeper", label: "Fatekeeper" },
  { href: "/games/mechanicus-ii", label: "Mechanicus II" },
  { href: "/games/enginefall", label: "Enginefall" },
  { href: "/games/romestead", label: "Romestead" },
];

const mobileGameLinks = [
  { href: "/games", label: "All Games" },
  { href: "/games/fatekeeper", label: "Fatekeeper" },
  { href: "/games/mechanicus-ii", label: "Mechanicus II" },
  { href: "/games/enginefall", label: "Enginefall" },
  { href: "/games/romestead", label: "Romestead" },
  { href: "/games/starminer", label: "Starminer" },
  { href: "/games/project-mist", label: "Project: Mist" },
  { href: "/games/paralives", label: "Paralives" },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-deep-plum text-white">
      <div className="site-shell flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex min-w-0 items-center"
          onClick={closeMobileMenu}
        >
          <Image
            src="/logo-header.png"
            alt="Enjoy4Game — Game Guides for Steam Releases"
            width={180}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden min-w-0 items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/88 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/games"
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            All Games
          </Link>
          <Link
            href="https://www.reddit.com/r/enjoy4game/"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-deep-plum transition-colors hover:bg-mist"
          >
            Reddit
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/15 lg:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-deep-plum lg:hidden">
          <nav className="site-shell grid gap-2 py-4">
            {mobileGameLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/86 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-white/10" />
            <Link
              href="/guides"
              onClick={closeMobileMenu}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/86 transition-colors hover:bg-white/10 hover:text-white"
            >
              All Guides
            </Link>
            <Link
              href="/games"
              onClick={closeMobileMenu}
              className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-deep-plum"
            >
              Browse All Games
            </Link>
            <Link
              href="https://www.reddit.com/r/enjoy4game/"
              onClick={closeMobileMenu}
              className="rounded-lg border border-white/20 px-3 py-2 text-sm font-semibold text-white"
            >
              Join Reddit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
