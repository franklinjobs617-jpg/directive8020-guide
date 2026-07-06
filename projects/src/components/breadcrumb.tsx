import Link from 'next/link';
import { JsonLd, generateBreadcrumbSchema } from '@/components/json-ld';

const SITE_URL = 'https://enjoy4game.com';
const LABEL_PATHS: Record<string, string> = {
  'Best Of': '/best-of',
  'Best Survival Games on Steam 2026': '/best-survival-games-steam-2026',
  'Best Free Games on Steam 2026': '/best-free-games-steam-2026',
  'Best Co-op Games on Steam 2026': '/best-co-op-games-steam-2026',
  'All Endings': '/directive-8020-all-endings',
 'Beginner Tips': '/directive-8020-beginner-tips',
 'Cast and Actors': '/directive-8020-cast-actors',
 Characters: '/directive-8020-characters',
 'Choices & Consequences': '/directive-8020-choices-consequences',
 'Collectibles & Heirlooms': '/directive-8020-collectibles-heirlooms',
 'Community Questions': '/directive-8020-community-questions',
 'Crash Fix': '/directive-8020-crashing-fix',
 'Death Scenes': '/directive-8020-death-scenes-guide',
 'Deluxe Edition': '/directive-8020-deluxe-edition',
 'O Death Secrets': '/directive-8020-o-death-secrets-curator',
 'Cycle 13 Explained': '/directive-8020-cycle-13-explained',
 'How Long to Beat': '/directive-8020-how-long-to-beat',
 'How to Save Everyone': '/directive-8020-how-to-save-everyone',
 'Mimic Detection': '/directive-8020-mimic-detection-survival-guide',
 'Movie Night Multiplayer': '/directive-8020-movie-night-multiplayer',
 Overview: '/directive-8020-overview',
 'Release Time': '/directive-8020-release-time',
 Review: '/directive-8020-review',
 'Steam Deck & Low-End PC': '/directive-8020-steam-deck',
 'Stealth Guide': '/directive-8020-stealth-guide',
 'System Requirements': '/directive-8020-system-requirements',
 'Trophy Guide': '/directive-8020-trophy-guide',
 'Trophy List': '/directive-8020-trophy-list',
 'Turning Points & Story Tree': '/directive-8020-turning-points-story-tree',
 Walkthrough: '/directive-8020-walkthrough',
 'Little Star': '/directive-8020-little-star-walkthrough',
 'Best Laid Plans': '/directive-8020-best-laid-plans-walkthrough',
 'The Sample': '/directive-8020-the-sample-walkthrough',
 Dragnet: '/directive-8020-dragnet-walkthrough',
 'Mr. Williams': '/directive-8020-mr-williams-walkthrough',
 'Hostile Takeover': '/directive-8020-hostile-takeover-walkthrough',
 Revelation: '/directive-8020-revelation-walkthrough',
 'Come True': '/directive-8020-come-true-walkthrough',
 Games: '/games',
 'Steam Deck': '/steam-deck',
 'Project: Mist': '/games/project-mist',
 'Release Date': '/games/project-mist/release-date',
 'Multiplayer & Co-op': '/games/project-mist/multiplayer-co-op',
 'Beginner Guide': '/games/project-mist/beginner-guide',
 'Thick As Thieves': '/games/thick-as-thieves',
 'Solo & Co-op': '/games/thick-as-thieves/solo-coop',
 'Beginner Stealth Guide': '/games/thick-as-thieves/beginner-stealth-guide',
 'Contracts & Maps': '/games/thick-as-thieves/contracts-maps',
 'Gear & Loadouts': '/games/thick-as-thieves/gear-loadouts',
 'Roadmap & Console': '/games/thick-as-thieves/roadmap-console',
 'Is It Worth It?': '/games/thick-as-thieves/is-it-worth-it',
 'Mina the Hollower': '/games/mina-the-hollower',
 'Mina Steam Deck': '/games/mina-the-hollower/steam-deck',
 About: '/about',
 'Copyright Infringement': '/copyright-infringement',
 'Privacy Policy': '/privacy-policy',
 'Terms of Use': '/terms-of-use',
};

interface BreadcrumbItem {
 label: string;
 href?: string;
}

interface BreadcrumbProps {
 items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
 const schemaItems = [
 { name: 'Home', url: SITE_URL },
 ...items.map((item) => ({
 name: item.label,
 url: `${SITE_URL}${item.href ?? LABEL_PATHS[item.label] ?? '/'}`,
 })),
 ];

 return (
 <>
 <JsonLd data={generateBreadcrumbSchema(schemaItems)} />
 <nav aria-label="Breadcrumb" className="mb-6">
 <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
 <li>
 <Link href="/" className="hover:text-foreground transition-colors">
 Home
 </Link>
 </li>
 {items.map((item, index) => {
 const isLast = index === items.length - 1;

 return (
 <li key={item.label} className="flex items-center gap-1.5">
 <span className="text-border">/</span>
 {item.href && !isLast ? (
 <Link
 href={item.href}
 className="hover:text-foreground transition-colors"
 >
 {item.label}
 </Link>
 ) : (
 <span
 className="text-foreground"
 aria-current={isLast ? 'page' : undefined}
 >
 {item.label}
 </span>
 )}
 </li>
 );
 })}
 </ol>
 </nav>
 </>
 );
}
