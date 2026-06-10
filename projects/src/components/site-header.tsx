'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, X } from 'lucide-react';

const navLinks = [
 { href: '/guides', label: 'Guides' },
 { href: '/games', label: 'Games' },
 { href: '/steam-deck', label: 'Steam Deck' },
 { href: '/games/fatekeeper', label: 'Fatekeeper' },
 { href: '/games/starminer', label: 'Starminer' },
 { href: '/games/project-mist', label: 'Project: Mist' },
 { href: '/games/paralives', label: 'Paralives' },
];

const mobileGameLinks = [
 { href: '/games', label: 'All Games' },
 { href: '/steam-deck', label: 'Steam Deck Games' },
 { href: '/games/fatekeeper', label: 'Fatekeeper' },
 { href: '/games/starminer', label: 'Starminer' },
 { href: '/games/project-mist', label: 'Project: Mist' },
 { href: '/games/paralives', label: 'Paralives' },
 { href: '/games/mechanicus-ii', label: 'Mechanicus II' },
];

export function SiteHeader() {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 const closeMobileMenu = () => {
 setIsMobileMenuOpen(false);
 };

 return (
 <header className="sticky top-0 z-50 w-full bg-deep-plum text-white">
 <div className="site-shell flex h-16 items-center justify-between gap-4">
 <Link href="/" className="flex min-w-0 items-center gap-3" onClick={closeMobileMenu}>
 <Image
 src="/logo-icon.jpg"
 alt="Enjoy4Game Guides logo"
 width={34}
 height={34}
 className="rounded-lg bg-white"
 priority
 />
 <span className="truncate text-lg font-bold tracking-[-0.01em]">
 Enjoy4Game
 </span>
 </Link>

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

 <div className="hidden items-center gap-2 lg:flex">
 <Link
 href="/directive-8020-walkthrough"
 className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
 >
 D8020 Hub
 </Link>
 <Link
 href="https://www.reddit.com/r/enjoy4game/"
 className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-deep-plum transition-colors hover:bg-mist"
 >
 Reddit
 </Link>
 </div>

 <button
 onClick={() => setIsMobileMenuOpen((current) => !current)}
 className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/15 lg:hidden"
 aria-label="Toggle mobile menu"
 aria-expanded={isMobileMenuOpen}
 >
 {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
 </button>
 </div>

 {isMobileMenuOpen && (
 <div className="border-t border-white/10 bg-deep-plum lg:hidden">
 <nav className="site-shell grid gap-2 py-4">
 <div className="mb-2 flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm text-white/80">
 <Search className="h-4 w-4" />
 <span>Find a guide hub</span>
 </div>
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
 Directive 8020 Guides
 </Link>
 <Link
 href="/directive-8020-walkthrough"
 onClick={closeMobileMenu}
 className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-deep-plum"
 >
 D8020 Walkthrough
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
