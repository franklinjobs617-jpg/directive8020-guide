import Image from 'next/image';
import Link from 'next/link';
import { BlufBox } from '@/components/guide-blocks';
import { VoidlingBoundArticle } from '@/components/voidling-bound-article';
import {
 createVoidlingBoundMetadata,
 getVoidlingsBySpecies,
 voidlingBoundImages,
 voidlingGuideFaqs,
 voidlingSpecies,
} from '@/lib/voidling-bound';

const title = 'All Voidlings List: Voidling Bound Species, Evolutions, Rarity and Elements';
const description =
 'Browse every Voidling Bound species and evolution entry from the wiki-derived dataset, with rarity, element, images, ability notes, and detail links.';
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

 <div className="space-y-10">
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
 </VoidlingBoundArticle>
 );
}
