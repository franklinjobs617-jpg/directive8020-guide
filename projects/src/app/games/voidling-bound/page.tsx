import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { BlufBox, SearchAnswerPanel, StatusPanel } from '@/components/guide-blocks';
import { VoidlingBoundArticle } from '@/components/voidling-bound-article';
import {
 createVoidlingBoundMetadata,
 voidlingBoundImages,
 voidlingQuickFacts,
 voidlingGuideFaqs,
} from '@/lib/voidling-bound';

const title = 'Voidling Bound Guide: Database, All Voidlings, Evolutions, Elements & Beginner Tips';
const description =
 'Find every Voidling by species, element, and abilities. Searchable wiki-derived database plus guides for evolution, breeding, elements, attributes, and beginner tips for Voidling Bound on Steam.';
const canonical = '/games/voidling-bound';

export const metadata = createVoidlingBoundMetadata({
 title,
 description,
 canonical,
 image: voidlingBoundImages.hero,
});

const searchIntentRows = [
 {
 query: 'voidling bound all voidlings',
 answer: 'Use the database and all Voidlings list for species, rarity, element, ability notes, and detail pages.',
 href: '/games/voidling-bound/database',
 label: 'Database',
 },
 {
 query: 'voidling bound evolution tree',
 answer: 'Use the evolution guide to understand rarity tiers, element branches, ability changes, and mutation endpoints.',
 href: '/games/voidling-bound/evolution-guide',
 label: 'Evolution',
 },
 {
 query: 'voidling bound guide',
 answer: 'Start with the beginner guide, then move into breeding, elements, attributes, and the searchable database.',
 href: '/games/voidling-bound/beginner-guide',
 label: 'Guide',
 },
 {
 query: 'voidling bound creatures wiki',
 answer: 'This hub uses the wiki as source data, then restructures it into filters, comparison, summaries, and player references.',
 href: '#sources',
 label: 'Sources',
 },
];

const jumpLinks = [
 { href: '#database-first', label: 'Database first' },
 { href: '#steam-status', label: 'Steam facts' },
 { href: '#guide-map', label: 'Guide map' },
 { href: '#sources', label: 'Sources' },
];

export default function VoidlingBoundHubPage() {
 return (
 <VoidlingBoundArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Voidling Bound"
 heroImage={voidlingBoundImages.hero}
 heroAlt="Voidling Bound Steam screenshot showing creature action RPG gameplay"
 faqs={voidlingGuideFaqs.hub}
 >
 <BlufBox title="Worth Doing?">
 <p>
 <strong>Voidling Bound has over 120 named evolutions across 9 species.</strong> You need fast lookup to identify creatures, compare ability slots, and plan evolution paths â?not read every wiki page manually. This hub gives you a searchable database, beginner route, and system guides (evolution, breeding, elements, attributes) in one place.
 </p>
 </BlufBox>

 <StatusPanel
 items={voidlingQuickFacts.map(([label, value]) => ({
 label,
 value,
 status: 'verified' as const,
 }))}
 />

 <SearchAnswerPanel
 title="Voidling Bound Search Answer"
 answer="Voidling Bound is live on Steam. Use the database to search 120+ Voidlings by species, rarity, element, and ability slot. Then read the beginner, evolution, breeding, elements, and attributes guides for system-level explanations."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <section id="database-first" className="prose-game">
 <h2>Why the Database Comes First</h2>
 <ArticleImage
 src={voidlingBoundImages.screenshot1}
 alt="Voidling Bound gameplay screenshot for database hub"
 caption="Players searching Voidling Bound are not only asking whether the game exists; they are trying to identify creatures, evolutions, elements, and ability changes."
 />
 <p>
 The core information problem in Voidling Bound is lookup speed. A player sees a Voidling name, an element branch, a rarity tier, or an ability and needs to understand what it means without reading every species page manually. That is why the first page in this cluster is the database. It converts the wiki snapshot into filters for species, rarity, element, and ability slot, while keeping each entry crawlable and linked to a detail page.
 </p>
 <p>
 The database does not replace the wiki. It solves a different job. Wiki pages are the source of truth. The Enjoy4Game database is the working layer: search, compare, move from a Voidling to related evolutions, and then jump into guide articles when a system needs explanation. That structure fits both new players and returning players. Beginners need ordering. Experienced players need fast retrieval.
 </p>
 <p>
 Start with the{' '}
 <Link href="/games/voidling-bound/database">All Voidlings Database</Link>
 {' '}when you know a name, element, rarity, or ability. Use the{' '}
 <Link href="/games/voidling-bound/voidlings">All Voidlings List</Link>
 {' '}when you want a crawlable species-by-species view. Use guide pages when the question is not âwhat is this??but âwhat should I do with this?? </p>
 </section>

 <section id="steam-status" className="prose-game">
 <h2>Steam Release, Platform, and Console Status</h2>
 <ArticleImage
 src={voidlingBoundImages.screenshot2}
 alt="Voidling Bound Steam screenshot used for release and platform context"
 caption="Steam is used for release status and store facts; wiki.gg is used for creature and system data."
 />
 <p>
 Steam-level facts should stay separate from creature data. Voidling Bound released on Steam on June 9, 2026. Hatchery Games is listed as developer and publisher. The store context supports PC coverage, screenshots, controller and feature notes, and release-state answers. It does not confirm every console query that appears in search suggestions.
 </p>
 <p>
 Console versions (PS5, Xbox, Switch 2) have been mentioned in search suggestions but are not officially confirmed. The current coverage focuses on the confirmed PC/Steam release.
 </p>
 </section>

 <section id="guide-map" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Guide Map</h2>
 <div className="grid gap-3 sm:grid-cols-2">
 {[
 ['/games/voidling-bound/database', 'All Voidlings Database', 'Search and filter every wiki-derived entry by species, rarity, element, and ability slot.'],
 ['/games/voidling-bound/beginner-guide', 'Beginner Guide', 'First-session route for species choice, hatching, training, missions, and database use.'],
 ['/games/voidling-bound/evolution-guide', 'Evolution Guide', 'Read rarity tiers, branches, mutations, and ability changes without inventing tier lists.'],
 ['/games/voidling-bound/breeding-guide', 'Breeding Guide', 'Connect eggs, golden eggs, splicing, mutagens, and lineage planning to confirmed wiki systems.'],
 ['/games/voidling-bound/elements-guide', 'Elements Guide', 'Use Organic, Pyro, Cryo, Plasma, Cyber, and Neutral as filters instead of guesses.'],
 ['/games/voidling-bound/attributes-guide', 'Attributes Guide', 'Compare role, ability slots, perks, modules, nature, level, and attribute support.'],
 ['/games/voidling-bound/controls', 'Controls Guide', 'Default keyboard and controller controls, dodge mechanics, ability combos, and full remap guide.'],
 ].map(([href, itemTitle, body]) => (
 <Link key={href} href={href} className="rounded-lg border border-border bg-white p-4 transition-colors hover:border-border">
 <h3 className="text-sm font-bold text-foreground">{itemTitle}</h3>
 <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{body}</p>
 </Link>
 ))}
 </div>
 </section>
 </VoidlingBoundArticle>
 );
}
