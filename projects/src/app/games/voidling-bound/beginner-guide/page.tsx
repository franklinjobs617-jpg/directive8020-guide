import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox } from '@/components/guide-blocks';
import { VoidlingBoundArticle } from '@/components/voidling-bound-article';
import { createVoidlingBoundMetadata, voidlingBoundImages, voidlingGuideFaqs, voidlingSpecies } from '@/lib/voidling-bound';

const title = 'Voidling Bound Beginner Guide: Best Tips for First Species, Evolution, Breeding & Database';
const description =
 'Start Voidling Bound with the right species, difficulty, and first attribute points. Beginner tips for hatching, training, missions, evolution, breeding, elemental matchups, and database use.';
const canonical = '/games/voidling-bound/beginner-guide';

export const metadata = createVoidlingBoundMetadata({ title, description, canonical, image: voidlingBoundImages.screenshot1 });

const firstSteps = [
 { step: 'Pick the right starter setup', doThis: 'Choose Adventurer difficulty. Put first attribute points into Vitality for survival. Start with Kwipeck for tutorial balance.', why: 'Adventurer provides balanced challenge without early frustration. Vitality keeps you alive while learning ability slots. Kwipeck is the tutorial starter with the safest kit.' },
 { step: 'Start with role', doThis: 'Pick a species whose basic combat style is readable: Kwipeck for tutorial balance, Gilick for close-range pressure, Kerapin for defense, or Gwigoon for minions.', why: 'A role you understand beats a rare evolution you cannot play well.' },
 { step: 'Use missions', doThis: 'Use early missions to learn movement, combat timing, and resource flow before optimizing lineage.', why: 'Voidling Bound has many systems; missions keep the first hour from turning into menu browsing.' },
 { step: 'Check entries', doThis: 'Search the database whenever a species, evolution, element, or ability name appears.', why: 'Fast lookup prevents bad assumptions about rarity or branch identity.' },
 { step: 'Delay ranking', doThis: 'Compare ability slots and elements before asking what is best.', why: 'The current dataset supports decisions, not fake tier-list certainty.' },
];

const speciesSuggestions: Record<string, string> = {
 'Kwipeck': 'Best for learning ability slots and balanced combat',
 'Gilick': 'Best for close-range pressure and aggressive play',
 'Kerapin': 'Best for defensive play and holding ground',
 'Gwigoon': 'Best for minion-based tactics and support',
 'Anami': 'Best for agility, harassment, and hit-and-run',
 'Ur-Sek': 'Best for players who want form-swapping complexity',
 'Morfang': 'Best for specialized melee and debuff stacking',
 'Nimiod': 'Best for ranged kiting and elemental coverage',
 'Packuran': 'Best for pack tactics and coordinated attacks',
};

export default function VoidlingBoundBeginnerGuidePage() {
 return (
 <VoidlingBoundArticle title={title} description={description} canonical={canonical} label="Beginner Guide" heroImage={voidlingBoundImages.screenshot1} heroAlt="Voidling Bound beginner guide gameplay image" faqs={voidlingGuideFaqs.beginner}>
 <BlufBox title="Beginner Rule">
 <p>
 <strong>Learn species identity before chasing rarity.</strong> The first-session mistake is treating every new name as an upgrade. Voidling Bound is easier to understand when you first learn ability slots, species roles, hatching, training, missions, and element branches, then use the database to compare evolutions.
 </p>
 </BlufBox>

 <ActionTable rows={firstSteps} />

 <section className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">6 Common Beginner Mistakes</h2>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist/40">
 <th className="px-3 py-2 text-left font-semibold text-foreground">Mistake</th>
 <th className="px-3 py-2 text-left font-semibold text-foreground">Why It Hurts</th>
 <th className="px-3 py-2 text-left font-semibold text-foreground">Fix</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-border">
 <td className="px-3 py-2 font-medium text-foreground">Chasing rarity first</td>
 <td className="px-3 py-2 text-muted-foreground">Rare evolutions may have ability slots that do not fit your playstyle.</td>
 <td className="px-3 py-2 text-muted-foreground">Learn species ability slots and combat rhythm before treating rarity as the only goal.</td>
 </tr>
 <tr className="border-b border-border">
 <td className="px-3 py-2 font-medium text-foreground">Ignoring ability slots</td>
 <td className="px-3 py-2 text-muted-foreground">Two Voidlings with the same element can play completely differently if ability slots change.</td>
 <td className="px-3 py-2 text-muted-foreground">Always read Primary, Secondary, Defense, Movement, and Ultimate slots before committing.</td>
 </tr>
 <tr className="border-b border-border">
 <td className="px-3 py-2 font-medium text-foreground">Skipping missions</td>
 <td className="px-3 py-2 text-muted-foreground">Menu-browsing the database for an hour teaches names, not timing and resource flow.</td>
 <td className="px-3 py-2 text-muted-foreground">Run early missions to learn combat rhythm and cooldown feel before optimizing lineage.</td>
 </tr>
 <tr className="border-b border-border">
 <td className="px-3 py-2 font-medium text-foreground">Mixing up systems</td>
 <td className="px-3 py-2 text-muted-foreground">Treating breeding, splicing, and evolution as one system creates confusion.</td>
 <td className="px-3 py-2 text-muted-foreground">Name each system separately. Breeding is not evolution. Splicing is not breeding.</td>
 </tr>
 <tr className="border-b border-border">
 <td className="px-3 py-2 font-medium text-foreground">Picking element by cool name</td>
 <td className="px-3 py-2 text-muted-foreground">An element branch defines damage type and matchups, not just visual theme.</td>
 <td className="px-3 py-2 text-muted-foreground">Check the element guide to understand each element\u2019s strengths and weaknesses first.</td>
 </tr>
 <tr>
 <td className="px-3 py-2 font-medium text-foreground">Over-optimizing early</td>
 <td className="px-3 py-2 text-muted-foreground">The level 20 cap and Early Access patches mean early-game optimization has a short shelf life.</td>
 <td className="px-3 py-2 text-muted-foreground">Focus on learning systems. Refine builds after you understand what a patch can change.</td>
 </tr>
 </tbody>
 </table>
 </div>
 </section>

 <section className="prose-game">
 <h2>Choose a First Species by Job, Not Hype</h2>
 <ArticleImage src={voidlingBoundImages.hero} alt="Voidling Bound first species beginner guide screenshot" caption="A beginner should choose a species by how easy its combat role is to read, then use the database for evolution planning." />
 <p>
 The wiki Species page lists nine playable species. Each has its own Primary, Secondary, Tertiary, Movement or Defense, and Ultimate ability. That means the first choice is not cosmetic. It changes how you aim, survive, reposition, and read fights. Kwipeck is the tutorial starter and a natural first reference point because its kit is described as well-rounded. Gilick pushes closer combat. Kerapin leans into defense. Gwigoon uses minions. Anami focuses on agility and harassment. Ur-Sek has two-form complexity. Morfang, Nimiod, and Packuran add more specialized styles.
 </p>
 <p>
 This is why a beginner page must not start with a tier list. A tier list asks for a final answer before the player knows the question. If you cannot tell whether you prefer range, defense, minions, mobility, or form swapping, a ranked list gives false confidence. The correct first move is to pick a readable role, play enough fights to feel the cooldown rhythm, then compare evolutions inside the{' '}
 <Link href="/games/voidling-bound/database">Voidling Bound database</Link>.
 </p>
 </section>

 <section className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Beginner Species Snapshot</h2>
 <div className="grid gap-3 sm:grid-cols-2">
 {voidlingSpecies.map((species) => (
 <Link key={species.slug} href={`/games/voidling-bound/voidlings#${species.slug}`} className="rounded-md border border-border bg-white p-4 transition-colors hover:border-border">
 <h3 className="text-sm font-bold text-foreground">{species.name}</h3>
 <p className="mt-1 text-xs text-muted-foreground">{species.elements.join(' / ') || 'Element branches in database'}</p>
 <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">{species.summary}</p>
 <p className="mt-1 text-xs font-medium text-emerald-700">{speciesSuggestions[species.name]}</p>
 </Link>
 ))}
 </div>
 </section>

 <section className="prose-game">
 <h2>First-Hour Route: Step by Step</h2>
 <ArticleImage src={voidlingBoundImages.screenshot2} alt="Voidling Bound first hour missions and combat image" caption="Your first hour should follow a clear path: tutorial, first species, first missions, hatch, train, then database." />
 <h3>0\u201315 Minutes: Tutorial and Starter Setup</h3>
 <ol>
 <li>Launch the game and select <strong>Adventurer</strong> difficulty (balanced challenge for first playthrough).</li>
 <li>Complete the tutorial — pay close attention to your species ability slots (Primary, Secondary, Defense, Movement, Ultimate).</li>
 <li>Put your first attribute point into <strong>Vitality</strong> for survivability. More HP means more time to learn combat mechanics before dying.</li>
 <li>Your starter is Kwipeck by default. Stick with it for the first hour — its well-rounded kit is the best teaching tool in the game.</li>
 </ol>
 <h3>15\u201330 Minutes: First Missions and Combat Rhythm</h3>
 <ol>
 <li>Run the first 2-3 story missions. Focus on timing: learn when to use Defense (Q), when to dodge (Ctrl), and when to spam Primary attack (Left click).</li>
 <li>Practice the basic combo: Secondary attack \u2192 Defense (Q) \u2192 Movement (E) to reposition \u2192 Ultimate (R) when enemies group up.</li>
 <li>Check your mission rewards. Collect any Mutagens dropped by enemies — these are progression resources, not optional items.</li>
 <li>Open the menu and check <strong>Training Room</strong> if available. Practice dodge timing against training targets for 3-5 minutes.</li>
 </ol>
 <h3>30\u201345 Minutes: Hatching and First Evolution</h3>
 <ol>
 <li>When the game unlocks hatching, hatch any egg you have received. The first hatch is tutorial-guided.</li>
 <li>Compare the hatchling\u2019s ability slots with your starter. Note what changed and what stayed the same.</li>
 <li>Open the <Link href="/games/voidling-bound/database">database</Link> and search your starter species (Kwipeck). Browse the evolution entries by rarity.</li>
 <li>Filter by element to see which branch your current evolution is on. Note how Primary and Secondary abilities differ between branches.</li>
 </ol>
 <h3>45\u201360 Minutes: Database Lookup and Next Session Planning</h3>
 <ol>
 <li>Run one more mission to collect resources. Release any unwanted low-rarity Voidlings from your inventory for ~150 research points each.</li>
 <li>Open the <Link href="/games/voidling-bound/database">database</Link> and bookmark it. Search a species you are interested in for next session.</li>
 <li>Read the <Link href="/games/voidling-bound/elements-guide">elements guide</Link> to understand which element branch fits your preferred playstyle.</li>
 <li>Set a goal for session 2: \u201CI will evolve my Kwipeck to a specific Pyro-branch evolution and compare ability slots.\u201d</li>
 </ol>
 <p className="mt-4 text-sm text-muted-foreground">
 This route is designed for Adventurer difficulty with Kwipeck starter. If you chose a different species or difficulty, adjust the timing and focus accordingly. The goal is not to optimize everything in hour one \u2014 it is to learn the systems so hours 2\u201310 are productive.
 </p>
 </section>
 </VoidlingBoundArticle>
 );
}
