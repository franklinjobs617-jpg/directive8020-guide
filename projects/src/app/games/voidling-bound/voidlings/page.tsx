import Image from 'next/image';
import Link from 'next/link';
import { ActionTable, BlufBox, SearchAnswerPanel, SourceCheckTable, StatusPanel } from '@/components/guide-blocks';
import { VoidlingBoundArticle } from '@/components/voidling-bound-article';
import {
 createVoidlingBoundMetadata,
 getVoidlingsBySpecies,
 voidlingBoundImages,
 voidlingGuideFaqs,
 voidlingSpecies,
} from '@/lib/voidling-bound';
import { vbVoidlingsActionRows, vbVoidlingsJumpLinks, vbVoidlingsSearchIntent, vbVoidlingsSourceRows, vbVoidlingsStatusItems } from '@/lib/voidling-bound';

const title = 'All Voidlings List: 120+ Voidling Bound Species, Evolutions, Rarity and Elements';
const description =
 'Browse all 120+ Voidling Bound evolution entries by species, with rarity tiers, elements, ability notes, images, and detail links to the wiki-derived database.';
const canonical = '/games/voidling-bound/voidlings';

export const metadata = createVoidlingBoundMetadata({
 title,
 description,
 canonical,
 image: voidlingBoundImages.header,
});

export default function VoidlingBoundVoidlingsPage() {
 return (
 <VoidlingBoundArticle
 title={title}
 description={description}
 canonical={canonical}
 label="All Voidlings"
 heroImage={voidlingBoundImages.header}
 heroAlt="Voidling Bound all Voidlings list hero image"
 faqs={voidlingGuideFaqs.database}
 >
 <BlufBox title="List Scope">
 <p>
 <strong>This is the crawlable all-Voidlings index.</strong> Use the list when you want a species-by-species view. Use the{' '}
 <Link href="/games/voidling-bound/database">database</Link>
 {' '}when you need search, filters, and comparison.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Voidling Bound All Voidlings Quick Answer"
 answer="The all-Voidlings list is the crawlable index built from the wiki snapshot. Use it for species-by-species browsing and the database for search, filters, and comparison."
 intentRows={vbVoidlingsSearchIntent}
 jumpLinks={vbVoidlingsJumpLinks}
 />

 <StatusPanel items={vbVoidlingsStatusItems} />

 <div className="space-y-10" id="voidlings-list">
 {voidlingSpecies.map((species) => {
 const entries = getVoidlingsBySpecies(species.name);
 return (
 <section key={species.slug} id={species.slug} className="rounded-lg border border-border bg-white p-5">
 <div className="mb-5">
 <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12px] text-foreground">
 {entries.length} entries
 </p>
 <h2 className="text-2xl font-medium text-foreground">{species.name}</h2>
 <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{species.summary}</p>
 </div>
 <div className="grid gap-4 sm:grid-cols-2">
 {entries.map((entry) => (
 <Link key={entry.slug} href={`/games/voidling-bound/voidlings/${entry.slug}`} className="grid grid-cols-[112px_1fr] overflow-hidden rounded-md border border-border bg-mist transition-colors hover:border-border">
 <div className="relative min-h-[92px] bg-mist">
 <Image src={entry.thumbImage} alt={`${entry.name} Voidling thumbnail`} fill className="object-contain p-2" sizes="112px" />
 </div>
 <div className="p-3">
 <h3 className="text-sm font-bold text-foreground">{entry.name}</h3>
 <p className="mt-1 text-xs text-muted-foreground">{entry.rarity} | {entry.element}</p>
 <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
 {entry.abilities.slice(0, 2).map((ability) => `${ability.slot}: ${ability.name}`).join(' | ') || entry.summary}
 </p>
 </div>
 </Link>
 ))}
 </div>
 </section>
 );
 })}
 </div>

 <section className="prose-game" id="voidlings-species">
 <h2>Browsing the List by Species</h2>
 <p>
 The all-Voidlings list groups every wiki-derived entry by species, then by rarity inside each species card. The order is intentional. Species is the strongest filter for team planning, and rarity is a navigation aid inside the species, not a quality verdict on its own. Players who are hunting for a specific role should land on the species card first, then look at the rarity columns for entries that match the role.
 </p>
 <p>
 The list is built as a crawlable index. Each species has its own anchor on this page, and each entry card links to its detail entry on a dedicated URL. That structure makes it easy to bookmark a species view and to share a single entry with another player.
 </p>
 </section>

 <section className="prose-game" id="voidlings-vs-database">
 <h2>List vs Database: When to Use Each</h2>
 <p>
 Use the all-Voidlings list when you want a species-by-species browse, a quick look at every entry in one species, or a bookmarkable index of the full snapshot. Use the database when you need text search, filters by element, rarity, ability slot, module, or status effect, or the comparison panel for side-by-side entry decisions. Both pages share the same wiki-derived data source. The list is the index. The database is the search and filter layer.
 </p>
 <p>
 If a player is unsure which page to open, the rule of thumb is simple. If they know the species, open the list. If they only know a role, an element, or a fragment of a name, open the database.
 </p>
 </section>

 <section className="prose-game" id="voidlings-snapshot">
 <h2>Wiki Snapshot, Image Coverage, and Refresh Cadence</h2>
 <p>
 The list is generated from the Voidling Bound Wiki snapshot, with image files downloaded locally, converted to WebP, and attributed under the wiki license. Where the wiki has no exact file for an entry, the page uses a same-species fallback so the layout still works, and the fallback is recorded in the data.
 </p>
 <p>
 Wiki snapshots can go stale. When the wiki updates, the list should be rebuilt from a fresh snapshot rather than trusted forever. Until then, the current entries, images, and ability slot labels are the best evidence available, and the SourceCheckTable below records which sources were used for which claims.
 </p>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step All-Voidlings Plan</h2>
 <ActionTable rows={vbVoidlingsActionRows} />

 <SourceCheckTable title="Voidling Bound All Voidlings Sources" rows={vbVoidlingsSourceRows} />
 </VoidlingBoundArticle>
 );
}
