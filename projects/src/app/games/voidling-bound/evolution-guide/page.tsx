import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel, SourceCheckTable, StatusPanel } from '@/components/guide-blocks';
import { VoidlingBoundArticle } from '@/components/voidling-bound-article';
import { createVoidlingBoundMetadata, voidlingBoundImages, voidlingEntries, voidlingGuideFaqs, voidlingRarities, voidlingSpecies } from '@/lib/voidling-bound';
import { vbEvolutionActionRows, vbEvolutionJumpLinks, vbEvolutionSearchIntent, vbEvolutionSourceRows, vbEvolutionStatusItems } from '@/lib/voidling-bound';

const title = 'Voidling Bound Evolution Guide: Trees, Rarity, Elements, Mutations and Ability Changes';
const description =
 'Voidling Bound evolution guide explaining how to read species trees, rarity tiers, element branches, mutations, ability changes, and database comparisons.';
const canonical = '/games/voidling-bound/evolution-guide';

export const metadata = createVoidlingBoundMetadata({ title, description, canonical, image: voidlingBoundImages.screenshot2 });

export default function VoidlingBoundEvolutionGuidePage() {
 return (
 <VoidlingBoundArticle title={title} description={description} canonical={canonical} label="Evolution Guide" heroImage={voidlingBoundImages.screenshot2} heroAlt="Voidling Bound evolution guide image" faqs={voidlingGuideFaqs.evolution}>
 <BlufBox title="Evolution Rule">
 <p>
 <strong>Read evolution as branching information, not as automatic upgrades.</strong> The wiki snapshot shows species, rarity tiers, elements, ability changes, and mutation endpoints. It does not prove a universal best path.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Voidling Bound Evolution Quick Answer"
 answer="Evolution is branching information, not an automatic upgrade ladder. Read branch first, name second, ability slot third, and the wiki for source detail. This guide stops at comparison logic."
 intentRows={vbEvolutionSearchIntent}
 jumpLinks={vbEvolutionJumpLinks}
 />

 <StatusPanel items={vbEvolutionStatusItems} />

 <section className="prose-game" id="evolution-workflow">
 <h2>How Evolution Trees Are Structured</h2>
 <ArticleImage src={voidlingBoundImages.hero} alt="Voidling Bound evolution tree guide screenshot" caption="Each species has a family identity, two element branches, and many named evolutions across rarity tiers." />
 <p>
 The Species page states that Voidling Bound currently has nine playable species, and each species has two mutation tree branches with different elements. Going down those trees can change Primary and Secondary abilities and add a mutated perk at the end of the tree. That is the key fact for understanding evolution searches. A player is not just looking for a list of names. They are trying to know what changes, which branch a creature belongs to, and whether an evolution still supports the role they want.
 </p>
 <p>
 The current database snapshot contains {voidlingEntries.length} evolution entries across {voidlingSpecies.length} species. The rarity labels present in the parsed data are {voidlingRarities.join(', ')}. Those tiers are useful for navigation, but rarity should not be treated as a complete quality score. A high-rarity entry can still be a bad fit for a player who needs a different range, defensive tool, or element identity.
 </p>
 </section>

 <section className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Species Tree Counts</h2>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Species</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Elements</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Database entries</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Open list</th>
 </tr>
 </thead>
 <tbody>
 {voidlingSpecies.map((species) => (
 <tr key={species.slug} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{species.name}</td>
 <td className="px-4 py-3 text-muted-foreground">{species.elements.join(' / ') || 'See database'}</td>
 <td className="px-4 py-3 text-muted-foreground">{voidlingEntries.filter((entry) => entry.species === species.name).length}</td>
 <td className="px-4 py-3"><Link href={`/games/voidling-bound/voidlings#${species.slug}`} className="text-foreground hover:underline">View {species.name}</Link></td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Evolution Tree View by Species</h2>
 <div className="space-y-6">
 {voidlingSpecies.map((species) => {
 const speciesEntries = voidlingEntries.filter((entry) => entry.species === species.name);
 return (
 <section key={species.slug} className="rounded-lg border border-border bg-white p-5">
 <h3 className="text-lg font-medium text-foreground">{species.name}</h3>
 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{species.summary}</p>
 <div className="mt-4 grid gap-3 lg:grid-cols-5">
 {voidlingRarities.map((rarity) => {
 const rarityEntries = speciesEntries.filter((entry) => entry.rarity === rarity);
 return (
 <div key={rarity} className="rounded-md border border-border bg-mist p-3">
 <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.12px] text-foreground">{rarity}</h4>
 <ul className="space-y-2">
 {rarityEntries.map((entry) => (
 <li key={entry.slug}>
 <Link href={`/games/voidling-bound/voidlings/${entry.slug}`} className="block rounded border border-border bg-white px-2 py-2 text-xs leading-relaxed text-muted-foreground transition-colors hover:border-border hover:text-foreground">
 <span className="font-semibold text-foreground">{entry.name}</span>
 <br />
 {entry.element} | {entry.abilities[0]?.name ?? 'Ability data'}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 );
 })}
 </div>
 </section>
 );
 })}
 </div>
 </section>

 <section className="prose-game" id="evolution-trees">
 <h2>Mutation Trees and How to Read Them</h2>
 <p>
 The wiki Species page is the source of truth for mutation tree structure. Each species has two branches, and each branch has its own element identity. The database turns those branches into a filterable list. The branch read takes a minute and is the single most useful thing a player can do before any evolution decision. Without it, name-level comparisons often mix creatures that solve different team problems.
 </p>
 <p>
 Mutation tree endpoints are not always the strongest entries. Some early branches already solve a role the team needs, and pushing deeper into a tree is only worth it if the new ability slots actually change the way the creature fights. The wiki describes perks added at the end of a tree; that is a useful signal, but it does not guarantee the entry is a final pick.
 </p>
 </section>

 <section className="prose-game" id="evolution-changes">
 <h2>What Evolution Actually Changes</h2>
 <p>
 Many evolutions keep some base abilities while changing element, primary attacks, perks, or branch identity. That is the working definition of "evolution" on a wiki snapshot. The honest comparison workflow is to look at what changed, not at the new name. If the Primary ability did not change, the creature may play similarly to its base. If the element changed, the team role may have shifted. If a perk was added, the late-game value may have changed even when the early-game kit looks the same.
 </p>
 <p>
 The database supports this by exposing ability slot labels for every entry it can parse. Use those labels to compare what actually changed before forming an opinion.
 </p>
 </section>

 <section className="prose-game" id="evolution-no-best">
 <h2>Why This Guide Does Not Publish a Best Evolution</h2>
 <p>
 Universal best-evolution claims need stable balance and matchup data, not just a wiki snapshot. The current data supports structured comparison, comparison-panel decisions, and entry-level reading. It does not support a final ranking that survives every patch. Honest comparison beats manufactured authority, especially on a newly released game. Use the ActionTable below for the recommended evolution workflow, then use the database for entry-level decisions.
 </p>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Evolution Plan</h2>
 <ActionTable rows={vbEvolutionActionRows} />

 <SourceCheckTable title="Voidling Bound Evolution Sources" rows={vbEvolutionSourceRows} />
 </VoidlingBoundArticle>
 );
}
