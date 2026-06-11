import { Suspense } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { FAQSection } from "@/components/faq-section";
import {
 JsonLd,
 generateArticleSchema,
 generateFAQSchema,
 generateVideoGameSchema,
} from "@/components/json-ld";
import { RelatedGuides, SourceCheckTable } from "@/components/guide-blocks";
import { VoidlingBoundDatabase } from "@/components/voidling-bound-database";
import { voidlingBound } from "@/lib/games";
import {
 createVoidlingBoundMetadata,
 getVoidlingBoundRelated,
 voidlingAbilitySlots,
 voidlingElements,
 voidlingEntries,
 voidlingModules,
 voidlingRarities,
 voidlingSizes,
 voidlingSourceRows,
 voidlingSpeciesNames,
 voidlingStatusEffects,
 voidlingBoundImages,
 voidlingBoundLastModified,
 voidlingBoundWikiData,
 voidlingGuideFaqs,
} from "@/lib/voidling-bound";

const title =
 "Voidling Bound Database: All Voidlings, Evolutions, Elements, Rarity and Abilities";
const description =
 "Search the Voidling Bound database for all wiki-derived Voidlings by species, rarity, element, ability slot, status effect, module, size, evolution name, and image coverage.";
const canonical = "/games/voidling-bound/database";

export const metadata = createVoidlingBoundMetadata({
 title,
 description,
 canonical,
 image: voidlingBoundImages.card,
});

export default function VoidlingBoundDatabasePage() {
 const exactImages = voidlingEntries.filter((entry) => entry.imageStatus === "exact").length;
 const fallbackImages = voidlingEntries.filter((entry) => entry.imageStatus === "speciesFallback").length;

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
 imageUrl: voidlingBoundImages.card,
 game: voidlingBound,
 })}
 />
 <JsonLd data={generateFAQSchema(voidlingGuideFaqs.database)} />

 <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
 <Breadcrumb
 items={[
 { label: "Games", href: "/games" },
 { label: "Voidling Bound", href: "/games/voidling-bound" },
 { label: "Database", href: canonical },
 ]}
 />

 <header className="mb-4 border-b border-border pb-4 sm:mb-5 sm:pb-5">
 <p className="mb-2 text-xs font-bold uppercase tracking-[0.12px] text-dribbble-pink">
 Wiki-derived database
 </p>
 <h1 className="max-w-5xl text-[36px] font-bold leading-[1.05] tracking-[-1.1px] text-foreground sm:text-[54px] sm:leading-[1.08] sm:tracking-[-1.39px]">
 {title}
 </h1>
 <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
 {description} The wiki is the truth source; this page is the fast
 lookup layer for filtering, sorting, comparing, and opening the
 exact data sheet for each Voidling.
 </p>
 <dl className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3 lg:grid-cols-4">
 {[
 ["Records", `${voidlingEntries.length} Voidlings`],
 ["Source", "Voidling Bound Wiki snapshot"],
 ["Updated", voidlingBoundWikiData.generatedAt.slice(0, 10)],
 ["Images", `${exactImages} exact / ${fallbackImages} fallback`],
 ].map(([label, value]) => (
 <div key={label} className="rounded-lg border border-border bg-white p-3 max-[420px]:p-2.5">
 <dt className="text-xs font-semibold uppercase tracking-[0.12px] text-muted-foreground">
 {label}
 </dt>
 <dd className="mt-1 text-sm font-bold leading-tight text-foreground">{value}</dd>
 </div>
 ))}
 </dl>
 </header>

 <Suspense fallback={<div className="rounded-lg border border-border bg-white p-5 text-sm text-muted-foreground">Loading database controls...</div>}>
 <VoidlingBoundDatabase
 entries={voidlingEntries}
 speciesNames={voidlingSpeciesNames}
 rarities={voidlingRarities}
 elements={voidlingElements}
 abilitySlots={voidlingAbilitySlots}
 sizes={voidlingSizes}
 modules={voidlingModules}
 statusEffects={voidlingStatusEffects}
 />
 </Suspense>

 <section className="mt-10" aria-labelledby="crawlable-index-heading">
 <div className="rounded-lg border border-border bg-white">
 <div className="border-b border-border p-5">
 <h2 id="crawlable-index-heading" className="text-[26px] font-bold leading-tight tracking-[-0.29px] text-foreground">
 Crawlable Full Field Index
 </h2>
 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
 This server-rendered table mirrors the database records for
 search engines, AI crawlers, and players who want a plain
 field index without using filters.
 </p>
 </div>
 <div className="max-h-[620px] overflow-auto">
 <table className="w-full min-w-[980px] text-sm">
 <thead className="sticky top-0 bg-mist">
 <tr className="border-b border-border">
 <th className="px-4 py-3 text-left font-semibold text-foreground">Voidling</th>
 <th className="px-4 py-3 text-left font-semibold text-foreground">Species</th>
 <th className="px-4 py-3 text-left font-semibold text-foreground">Rarity</th>
 <th className="px-4 py-3 text-left font-semibold text-foreground">Element</th>
 <th className="px-4 py-3 text-left font-semibold text-foreground">Primary</th>
 <th className="px-4 py-3 text-left font-semibold text-foreground">Secondary</th>
 <th className="px-4 py-3 text-left font-semibold text-foreground">Image</th>
 </tr>
 </thead>
 <tbody>
 {voidlingEntries.map((entry) => (
 <tr key={entry.slug} className="border-b border-border last:border-0 hover:bg-mist/60">
 <td className="px-4 py-3 font-semibold text-foreground">
 <Link href={`/games/voidling-bound/voidlings/${entry.slug}`} className="hover:text-foreground">
 {entry.name}
 </Link>
 </td>
 <td className="px-4 py-3 text-muted-foreground">{entry.species}</td>
 <td className="px-4 py-3 text-muted-foreground">{entry.rarity}</td>
 <td className="px-4 py-3 text-muted-foreground">{entry.element}</td>
 <td className="px-4 py-3 text-muted-foreground">{entry.primaryAbility || "Not parsed"}</td>
 <td className="px-4 py-3 text-muted-foreground">{entry.secondaryAbility || "Not parsed"}</td>
 <td className="px-4 py-3 text-muted-foreground">
 {entry.imageStatus === "exact" ? "Exact wiki image" : "Species fallback image"}
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </section>

 <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
 <div className="rounded-lg border border-border bg-white p-5">
 <h2 className="text-[26px] font-bold leading-tight tracking-[-0.29px] text-foreground">How to Use This Database</h2>
 <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
 <p>
 Start with a name search when you know the evolution. Use
 species when planning a family, rarity when reading a branch
 lane, element when comparing role identity, and ability slot
 when a build depends on primary, secondary, defense, movement,
 ultimate, or perk text.
 </p>
 <p>
 The table view exposes all {voidlingEntries.length} records by
 default. Cards are for browsing images. Evolution Tree groups
 the same records into rarity lanes. Compare highlights field
 differences for up to three Voidlings without pretending to be
 a tier list.
 </p>
 </div>
 </div>

 <div className="rounded-lg border border-border bg-white p-5">
 <h2 className="text-[26px] font-bold leading-tight tracking-[-0.29px] text-foreground">Image Coverage Rule</h2>
 <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
 Exact entries use compressed local WebP files generated from
 matching wiki images. Entries without an exact wiki image show a
 same-species fallback and are labeled <strong className="text-foreground">Species fallback image</strong>.
 That label is intentional because fake exact artwork would make
 the database worse.
 </p>
 <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
 For a linear crawlable list, open the{" "}
 <Link href="/games/voidling-bound/voidlings" className="text-foreground hover:underline">
 All Voidlings List
 </Link>
 . For strategy context, use the{" "}
 <Link href="/games/voidling-bound/evolution-guide" className="text-foreground hover:underline">
 Evolution Guide
 </Link>
 .
 </p>
 </div>
 </section>

 <section className="mt-8 rounded-lg border border-border bg-white p-5">
 <h2 className="text-[26px] font-bold leading-tight tracking-[-0.29px] text-foreground">Data and Image Attribution</h2>
 <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
 Voidling data and creature images are derived from the{" "}
 <Link href="https://voidlingbound.wiki.gg/wiki/Voidling_Bound_Wiki" target="_blank" rel="noreferrer" className="text-foreground hover:underline">
 Voidling Bound Wiki
 </Link>{" "}
 under the{" "}
 <Link href={voidlingBoundWikiData.wiki.licenseUrl} target="_blank" rel="noreferrer" className="text-foreground hover:underline">
 {voidlingBoundWikiData.wiki.license}
 </Link>
 . Steam is used only for game-level facts and store screenshots.
 </p>
 </section>

 <SourceCheckTable title="Voidling Bound Sources and Verification" rows={voidlingSourceRows} />
 <RelatedGuides guides={getVoidlingBoundRelated(canonical)} />
 <FAQSection faqs={voidlingGuideFaqs.database} />
 </main>
 </>
 );
}
