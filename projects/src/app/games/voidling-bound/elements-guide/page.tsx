import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { VoidlingBoundArticle } from '@/components/voidling-bound-article';
import { createVoidlingBoundMetadata, voidlingBoundImages, voidlingElements, voidlingEntries, voidlingGuideFaqs } from '@/lib/voidling-bound';

const title = 'Voidling Bound Elements Guide: Organic, Pyro, Cryo, Plasma, Cyber and Neutral';
const description =
  'Voidling Bound elements guide explaining how to use Organic, Pyro, Cryo, Plasma, Cyber, and Neutral labels when comparing evolutions and abilities.';
const canonical = '/games/voidling-bound/elements-guide';

export const metadata = createVoidlingBoundMetadata({ title, description, canonical, image: voidlingBoundImages.hero });

export default function VoidlingBoundElementsGuidePage() {
  return (
    <VoidlingBoundArticle title={title} description={description} canonical={canonical} label="Elements Guide" heroImage={voidlingBoundImages.hero} heroAlt="Voidling Bound elements guide image" faqs={voidlingGuideFaqs.elements}>
      <BlufBox title="Element Rule">
        <p>
          <strong>Element is a filter, not the whole build.</strong> The database includes {voidlingElements.join(', ')} labels, but a player still needs species role, ability slot changes, rarity, perks, and attributes before making a real decision.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>What Elements Do for Search</h2>
        <ArticleImage src={voidlingBoundImages.screenshot2} alt="Voidling Bound element comparison screenshot" caption="Element pages should help players narrow branch identity, not pretend every matchup is solved." />
        <p>
          Element searches appear because players need a shorthand for branch identity. The wiki Species page describes two mutation tree branches with different elements for each species. The database turns those labels into filters so a player can quickly isolate Organic, Pyro, Cryo, Plasma, Cyber, or Neutral entries. That is useful, but it is not enough to choose a final creature.
        </p>
        <p>
          A strong element decision asks four questions. Which species is this entry from? Which ability slot changed? Does the ability description support the way you want to fight? Does the rarity tier represent a real plan or just a name you noticed? The element label narrows the search space; the ability rows and species role decide whether the result actually fits.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Element Counts in the Current Database</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {voidlingElements.map((element) => {
            const entries = voidlingEntries.filter((entry) => entry.element === element);
            return (
              <Link key={element} href={`/games/voidling-bound/database`} className="rounded-lg border border-border/50 bg-card/30 p-4 transition-colors hover:border-d8020/45">
                <h3 className="text-lg font-black text-foreground">{element}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{entries.length} entries</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Examples: {entries.slice(0, 5).map((entry) => entry.name).join(', ')}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="prose-game">
        <h2>How to Use Element Filters Without Overfitting</h2>
        <ArticleImage src={voidlingBoundImages.screenshot3} alt="Voidling Bound element filters and ability guide screenshot" caption="The safest workflow is species first, element second, ability slot third, then source verification." />
        <p>
          Start with species. Then filter by element. Then compare ability slots. If two results share the same element but have different Primary or Secondary abilities, they can play very differently. If two results share a species but sit on different element branches, they may solve different team problems. This is why the database includes both cards and tables: cards help recognition, tables help comparison.
        </p>
        <p>
          Neutral should also be read carefully. A Neutral label in the current parsed entries does not mean “bad” or “weak.” It means the row is represented as Neutral in the source structure. Treat it as a data label and compare the actual ability text before drawing a gameplay conclusion.
        </p>
      </section>

      <section className="prose-game">
        <h2>When an Element Page Should Become Its Own Guide</h2>
        <p>
          Separate element pages should not be created just because a label exists. They become useful when search data or player behavior proves a deeper task: “best Pyro Voidlings,” “Cryo evolution path,” “Organic status effect,” or a specific species plus element combination. Until that signal exists, one strong elements guide and a filterable database are better than six thin pages repeating the same definition.
        </p>
        <p>
          The next split should come from evidence. If GSC starts showing impressions for a single element, that element can get a focused page with examples, species coverage, ability-slot patterns, and internal links to matching entries. If no element gets independent demand, this guide should stay consolidated and the database should carry the lookup workload.
        </p>
      </section>
    </VoidlingBoundArticle>
  );
}
