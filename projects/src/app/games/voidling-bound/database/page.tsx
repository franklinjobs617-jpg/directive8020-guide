import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { VoidlingBoundArticle } from '@/components/voidling-bound-article';
import { VoidlingBoundDatabase } from '@/components/voidling-bound-database';
import {
  createVoidlingBoundMetadata,
  voidlingAbilitySlots,
  voidlingElements,
  voidlingEntries,
  voidlingRarities,
  voidlingSpeciesNames,
  voidlingBoundImages,
  voidlingGuideFaqs,
} from '@/lib/voidling-bound';

const title = 'Voidling Bound Database: All Voidlings, Evolutions, Elements, Rarity and Abilities';
const description =
  'Search the Voidling Bound database for all wiki-derived Voidlings by species, rarity, element, ability slot, evolution name, and role notes.';
const canonical = '/games/voidling-bound/database';

export const metadata = createVoidlingBoundMetadata({
  title,
  description,
  canonical,
  image: voidlingBoundImages.card,
});

export default function VoidlingBoundDatabasePage() {
  return (
    <VoidlingBoundArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Database"
      heroImage={voidlingBoundImages.card}
      heroAlt="Voidling Bound database guide image"
      faqs={voidlingGuideFaqs.database}
    >
      <BlufBox title="Database Scope">
        <p>
          <strong>This database is built from a Voidling Bound Wiki snapshot, not invented guide copy.</strong> It currently includes {voidlingEntries.length} Voidling entries across {voidlingSpeciesNames.length} species. Use it to search names, compare rarity and element branches, inspect visible ability slots, and move into detail pages. The wiki remains the source of truth; this page is the faster player-facing lookup layer.
        </p>
      </BlufBox>

      <VoidlingBoundDatabase
        entries={voidlingEntries}
        speciesNames={voidlingSpeciesNames}
        rarities={voidlingRarities}
        elements={voidlingElements}
        abilitySlots={voidlingAbilitySlots}
      />

      <section className="prose-game">
        <h2>How to Read the Database</h2>
        <ArticleImage
          src={voidlingBoundImages.screenshot3}
          alt="Voidling Bound combat screenshot for database reading guide"
          caption="The database is meant for active play: search a name, filter a branch, compare ability slots, then read the guide page that explains the system behind the result."
        />
        <p>
          Treat each database row as a compact version of a wiki section. The species field tells you the family. Rarity tells you where the entry sits in the evolution structure. Element tells you the branch identity currently exposed in the wiki data. Ability notes summarize the slots that were parseable from the evolution page. Detail pages preserve the source link so the entry can be checked against wiki.gg when balance or wording changes.
        </p>
        <p>
          The most useful workflow is not to scan all entries at once. Search the exact name when you have it. Filter by species when planning a single family. Filter by element when comparing branch identity. Filter by ability slot when a build idea depends on a primary, secondary, defense, movement, ultimate, or perk change. Then open the detail page and the relevant guide: evolution for branch decisions, breeding for lineage planning, elements for damage identity, and attributes for stat interpretation.
        </p>
        <p>
          This page deliberately avoids ranking Voidlings from best to worst. That would be fake precision without stable combat testing and patch context. The database gives structured evidence. The guide pages explain how to reason from that evidence.
        </p>
        <p>
          For a linear view, use the{' '}
          <Link href="/games/voidling-bound/voidlings">All Voidlings List</Link>.
          For first-session choices, use the{' '}
          <Link href="/games/voidling-bound/beginner-guide">Beginner Guide</Link>.
        </p>
      </section>
    </VoidlingBoundArticle>
  );
}
