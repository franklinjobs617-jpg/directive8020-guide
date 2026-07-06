import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/breadcrumb';
import {
 JsonLd,
 generateArticleSchema,
 generateVideoGameSchema,
} from '@/components/json-ld';
import { RelatedGuides } from '@/components/guide-blocks';
import { voidlingBound } from '@/lib/games';
import {
 createVoidlingBoundMetadata,
 getRelatedVoidlings,
 getSpeciesByName,
 getVoidlingBoundRelated,
 getVoidlingBySlug,
 voidlingBoundLastModified,
 voidlingEntries,
} from '@/lib/voidling-bound';

interface PageProps {
 params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
 return voidlingEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
 const { slug } = await params;
 const entry = getVoidlingBySlug(slug);
 if (!entry) return {};
 return createVoidlingBoundMetadata({
 title: `${entry.name} Voidling Bound: Species, Rarity, Element, Abilities and Evolution Data`,
 description: `${entry.name} database page for Voidling Bound with species, rarity, element, ability notes, wiki source link, and related evolutions.`,
 canonical: `/games/voidling-bound/voidlings/${entry.slug}`,
 image: entry.detailImage,
 });
}

export default async function VoidlingDetailPage({ params }: PageProps) {
 const { slug } = await params;
 const entry = getVoidlingBySlug(slug);
 if (!entry) notFound();

 const species = getSpeciesByName(entry.species);
 const related = getRelatedVoidlings(entry);
 const canonical = `/games/voidling-bound/voidlings/${entry.slug}`;
 const title = `${entry.name} Voidling Bound Data Sheet`;
 const description = `${entry.name} is a ${entry.rarity} ${entry.species} Voidling with ${entry.element} element data in the current wiki-derived database snapshot.`;
 const imageCoverage = entry.imageStatus === 'exact' ? 'Exact wiki image' : 'Species fallback image';

 // Data-quality fix (2026-07): the wiki scraper that produced
 // voidling-bound-wiki-data.ts has a known bug affecting ~65 of 294
 // entries (22%) — for some rows, the `pattern` field captured the source
 // table's own header row ("Size X Element Y Color Z Eye W Pattern")
 // instead of the actual pattern name. Rather than edit the 21k-line data
 // file entry by entry, detect the bug's signature here and fall back to
 // the same "Not parsed" state used elsewhere on this page for genuinely
 // missing fields. This is intentionally a template-level fix so it
 // covers all affected rows in one change and stays correct if the data
 // file is regenerated from a fresh scrape later.
 const looksLikeScraperHeaderArtifact = (value: string | null | undefined) =>
 !!value && /^Size .* Element .* Color .* Eye .* Pattern$/.test(value);
 const patternValue = looksLikeScraperHeaderArtifact(entry.pattern) ? null : entry.pattern;

 return (
 <>
 <JsonLd data={generateVideoGameSchema(voidlingBound)} />
 <JsonLd
 data={generateArticleSchema({
 title,
 description,
 url: canonical,
 datePublished: voidlingBound.releaseDate,
 dateModified: voidlingBoundLastModified,
 imageUrl: entry.detailImage,
 game: voidlingBound,
 })}
 />
 {/* Data-quality fix (2026-07): removed the per-entry generateFAQSchema
 call that was here. It rendered the exact same voidlingGuideFaqs.database
 content and FAQPage schema on all ~294 generated pages verbatim — a
 genuine duplicate-content pattern, not a per-page value-add. The FAQ
 content still exists once, on /games/voidling-bound/database. */}

 <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
 <Breadcrumb
 items={[
 { label: 'Games', href: '/games' },
 { label: 'Voidling Bound', href: '/games/voidling-bound' },
 { label: 'Database', href: '/games/voidling-bound/database' },
 { label: entry.name, href: canonical },
 ]}
 />

 <header className="mb-6">
 <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12px] text-foreground">
 Voidling data sheet
 </p>
 <h1 className="text-[36px] font-bold leading-[1.06] tracking-[-1.1px] text-foreground sm:text-[54px] sm:leading-[1.08] sm:tracking-[-1.39px]">
 {title}
 </h1>
 <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
 {description} This page is a lookup record, not a tier-list verdict.
 </p>
 </header>

 <section className="grid gap-6 lg:grid-cols-[360px_1fr]" aria-labelledby="core-data-heading">
 <figure className="overflow-hidden rounded-lg border border-border bg-white">
 <div className="relative aspect-square bg-mist">
 <Image
 src={entry.detailImage}
 alt={`${entry.name} Voidling Bound wiki artwork`}
 fill
 className="object-contain p-4"
 sizes="(max-width: 1024px) 100vw, 360px"
 priority
 />
 </div>
 <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground">
 {imageCoverage}. Local 720px WebP generated from wiki imagery
 where an exact file exists.
 </figcaption>
 </figure>

 <div className="overflow-hidden rounded-lg border border-border bg-white">
 <div className="border-b border-border p-4">
 <h2 id="core-data-heading" className="text-xl font-medium text-foreground">
 Core Fields
 </h2>
 </div>
 <div className="overflow-x-auto">
 <table className="w-full text-sm">
 <tbody>
 {[
 ['Name', entry.name],
 ['Species', entry.species],
 ['Rarity', entry.rarity],
 ['Element', entry.element],
 ['Color', entry.color || 'Not parsed'],
 ['Eye', entry.eye || 'Not parsed'],
 ['Pattern', patternValue || 'Not parsed'],
 ['Size', entry.size || 'Not parsed'],
 ['Primary ability', entry.primaryAbility || 'Not parsed'],
 ['Secondary ability', entry.secondaryAbility || 'Not parsed'],
 ['Image coverage', imageCoverage],
 ].map(([label, value]) => (
 <tr key={label} className="border-b border-border last:border-0">
 <th scope="row" className="w-44 px-4 py-3 text-left font-semibold text-foreground">
 {label}
 </th>
 <td className="px-4 py-3 text-muted-foreground">{value}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </section>

 <section className="mt-8" aria-labelledby="abilities-heading">
 <h2 id="abilities-heading" className="mb-3 text-2xl font-medium text-foreground">
 Abilities
 </h2>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full min-w-[760px] text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Slot</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Ability</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Parsed description</th>
 </tr>
 </thead>
 <tbody>
 {entry.abilities.map((ability) => (
 <tr key={`${ability.slot}-${ability.name}`} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{ability.slot}</td>
 <td className="px-4 py-3 text-muted-foreground">{ability.name}</td>
 <td className="px-4 py-3 text-muted-foreground">
 {ability.description || 'No parsed description in this snapshot.'}
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section className="mt-8 grid gap-5 lg:grid-cols-2">
 <div className="rounded-lg border border-border bg-white p-5">
 <h2 className="text-xl font-medium text-foreground">Modules</h2>
 {entry.modules.length > 0 ? (
 <div className="mt-3 overflow-x-auto">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border">
 <th className="px-3 py-2 text-left font-medium text-muted-foreground">Module</th>
 <th className="px-3 py-2 text-left font-medium text-muted-foreground">Bonus</th>
 </tr>
 </thead>
 <tbody>
 {entry.modules.map((module) => (
 <tr key={`${module.name}-${module.bonus}`} className="border-b border-border last:border-0">
 <td className="px-3 py-2 font-semibold text-foreground">{module.name}</td>
 <td className="px-3 py-2 text-muted-foreground">{module.bonus || 'No parsed bonus.'}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 ) : (
 <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
 No module row was parsed for this entry in the current wiki snapshot.
 </p>
 )}
 </div>

 <div className="rounded-lg border border-border bg-white p-5">
 <h2 className="text-xl font-medium text-foreground">Status Effects</h2>
 {entry.statusEffects.length > 0 ? (
 <div className="mt-3 flex flex-wrap gap-2">
 {entry.statusEffects.map((status) => (
 <span key={status} className="rounded border border-border bg-mist px-3 py-1 text-xs font-semibold text-foreground">
 {status}
 </span>
 ))}
 </div>
 ) : (
 <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
 No status-effect label was matched in the current parsed ability text.
 </p>
 )}
 </div>
 </section>

 <section className="mt-8 grid gap-5 lg:grid-cols-2">
 <div className="rounded-lg border border-border bg-white p-5">
 <h2 className="text-xl font-medium text-foreground">Evolution Context</h2>
 <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
 Use this entry inside the {entry.species} family rather than as an
 isolated ranking. Compare rarity, element, primary ability,
 secondary ability, module rows, and status labels before deciding
 whether the branch fits the role you want.
 </p>
 {species ? (
 <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
 Species note: {species.summary}
 </p>
 ) : null}
 </div>

 <div className="rounded-lg border border-border bg-white p-5">
 <h2 className="text-xl font-medium text-foreground">Source Link</h2>
 <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
 Check the original{' '}
 <Link href={entry.wikiUrl} target="_blank" rel="noreferrer" className="text-foreground hover:underline">
 wiki section for {entry.name}
 </Link>{' '}
 when exact wording matters. Then return to the{' '}
 <Link href="/games/voidling-bound/database" className="text-foreground hover:underline">
 database
 </Link>{' '}
 for filters or the{' '}
 <Link href="/games/voidling-bound/evolution-guide" className="text-foreground hover:underline">
 evolution guide
 </Link>{' '}
 for branch logic.
 </p>
 </div>
 </section>

 <section className="mt-10">
 <h2 className="mb-4 text-2xl font-medium text-foreground">Related Voidlings</h2>
 <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
 {related.map((relatedEntry) => (
 <Link
 key={relatedEntry.slug}
 href={`/games/voidling-bound/voidlings/${relatedEntry.slug}`}
 className="rounded-lg border border-border bg-white p-4 transition-colors hover:border-border"
 >
 <h3 className="text-sm font-bold text-foreground">{relatedEntry.name}</h3>
 <p className="mt-1 text-xs text-muted-foreground">
 {relatedEntry.species} | {relatedEntry.rarity} | {relatedEntry.element}
 </p>
 </Link>
 ))}
 </div>
 </section>

 <RelatedGuides guides={getVoidlingBoundRelated(canonical)} />
 {/* Data-quality fix (2026-07): removed the visible <FAQSection> that was
 here for the same reason as the schema above — it showed the identical
 voidlingGuideFaqs.database content on all ~294 generated pages. The FAQ
 is still visible once, on the /database hub page. */}
 </main>
 </>
 );
}
