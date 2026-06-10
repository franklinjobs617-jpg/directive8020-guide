import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { VoidlingBoundArticle } from '@/components/voidling-bound-article';
import { createVoidlingBoundMetadata, voidlingBoundImages, voidlingEntries, voidlingGuideFaqs, voidlingRarities, voidlingSpecies } from '@/lib/voidling-bound';

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

      <section className="prose-game">
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
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Species</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Elements</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Database entries</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Open list</th>
              </tr>
            </thead>
            <tbody>
              {voidlingSpecies.map((species) => (
                <tr key={species.slug} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{species.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{species.elements.join(' / ') || 'See database'}</td>
                  <td className="px-4 py-3 text-muted-foreground">{voidlingEntries.filter((entry) => entry.species === species.name).length}</td>
                  <td className="px-4 py-3"><Link href={`/games/voidling-bound/voidlings#${species.slug}`} className="text-d8020 hover:underline">View {species.name}</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="prose-game">
        <h2>How to Compare Two Evolutions</h2>
        <ArticleImage src={voidlingBoundImages.screenshot3} alt="Voidling Bound comparing evolutions screenshot" caption="Good evolution comparison asks what changed: element, ability slot, perk, range, survival tool, or species role." />
        <p>
          Compare evolutions in four passes. First, check species. If two entries are from different species, they are solving different baseline combat problems. Second, check element. Element branch explains why a name sits in a particular path. Third, compare ability slots, especially Primary and Secondary, because those are the most visible combat changes in the parsed data. Fourth, read the summary and source link rather than assuming the name tells the whole story.
        </p>
        <p>
          The database supports this workflow directly. Open{' '}
          <Link href="/games/voidling-bound/database">the database</Link>
          , filter by species, then filter by element or rarity. Add up to three entries to the comparison panel. If the comparison still does not answer the decision, the problem is likely not a data problem; it is a gameplay preference problem. At that point, use the beginner or attributes guide to decide what role you actually need.
        </p>
        <p>
          This page intentionally avoids “all best evolutions” claims. That content would require stable patch data, testing methodology, and matchup context. The current evidence supports structured comparison, not final ranking.
        </p>
      </section>
    </VoidlingBoundArticle>
  );
}
