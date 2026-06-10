import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel, SourceCheckTable, StatusPanel } from '@/components/guide-blocks';
import { VoidlingBoundArticle } from '@/components/voidling-bound-article';
import { createVoidlingBoundMetadata, voidlingBoundImages, voidlingElements, voidlingEntries, voidlingGuideFaqs } from '@/lib/voidling-bound';
import { vbElementsActionRows, vbElementsJumpLinks, vbElementsSearchIntent, vbElementsSourceRows, vbElementsStatusItems } from '@/lib/voidling-bound';

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

 <SearchAnswerPanel
 title="Voidling Bound Elements Quick Answer"
 answer="Element is one filter on a wiki-derived database. Use species first, element second, ability slot third, and the wiki for source confirmation. This guide does not publish per-element best claims."
 intentRows={vbElementsSearchIntent}
 jumpLinks={vbElementsJumpLinks}
 />

 <StatusPanel items={vbElementsStatusItems} />

 <section className="prose-game" id="elements-workflow">
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
 <Link key={element} href={`/games/voidling-bound/database`} className="rounded-lg border border-border bg-white p-4 transition-colors hover:border-border">
 <h3 className="text-lg font-medium text-foreground">{element}</h3>
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
 Neutral should also be read carefully. A Neutral label in the current parsed entries does not mean “bad?or “weak.?It means the row is represented as Neutral in the source structure. Treat it as a data label and compare the actual ability text before drawing a gameplay conclusion.
 </p>
 </section>

 <section className="prose-game" id="elements-branches">
 <h2>Branch Source and How It Shapes Element Identity</h2>
 <p>
 The wiki Species page is the source of truth for branch identity. Each species has two mutation tree branches with different elements per the wiki. That means a Pyro label is not just a name. It tells the player which mutation branch a creature belongs to, which in turn tells the player which neighboring evolutions share that branch and which ability slot changes are expected at each step. Players who skip the branch read often end up comparing names that solve different team problems.
 </p>
 <p>
 The practical workflow is to open the wiki Species page first, confirm which branch a target element lives in, then come back to the database to filter by species and element. The branch read takes a minute and prevents hours of stale comparisons.
 </p>
 </section>

 <section className="prose-game" id="elements-neutral">
 <h2>Reading Neutral Without Assuming Weakness</h2>
 <p>
 A Neutral label in the parsed database means the row is not assigned to one of the branch elements in the source structure. It does not mean the entry is weak, bad, or off-role. The right way to read Neutral is as a structural data label that still needs ability text to be evaluated. If a Neutral entry has a Primary ability the player already knows how to use, it can still be a strong pick. If the same entry sits on a branch the player does not run, Neutral is just a name.
 </p>
 <p>
 When two Neutral entries are compared, the same rules apply as for any other element. Read the ability slots, check the species role, and confirm the source wording on the wiki before drawing a conclusion.
 </p>
 </section>

 <section className="prose-game" id="elements-no-best">
 <h2>Why This Guide Does Not Publish a Per-Element Best</h2>
 <p>
 Best-per-element content is high risk on a wiki snapshot of a newly released game. The data is rich enough to explain branch structure, filter by element, and compare ability slots. It is not rich enough to claim that one Pyro, Cryo, or Plasma entry beats every other entry of the same element across all matchups. The honest answer is comparison logic plus a link to the database. The wrong answer is a manufactured ranking that survives until the next patch.
 </p>
 <p>
 Use the ActionTable below for the recommended element workflow, then use the database for entry-level decisions.
 </p>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Element Plan</h2>
 <ActionTable rows={vbElementsActionRows} />

 <SourceCheckTable title="Voidling Bound Elements Sources" rows={vbElementsSourceRows} />
 </VoidlingBoundArticle>
 );
}
