import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox } from '@/components/guide-blocks';
import { VoidlingBoundArticle } from '@/components/voidling-bound-article';
import { createVoidlingBoundMetadata, voidlingBoundImages, voidlingGuideFaqs, voidlingSpecies } from '@/lib/voidling-bound';

const title = 'Voidling Bound Beginner Guide: First Species, Hatching, Training, Missions and Database Use';
const description =
 'Voidling Bound beginner guide for first-session choices: species roles, hatching, training, missions, evolutions, database lookup, and mistakes to avoid.';
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
 <h2>First-Hour Route</h2>
 <ArticleImage src={voidlingBoundImages.screenshot2} alt="Voidling Bound first hour missions and combat image" caption="The first hour should teach combat role, hatching and training flow, mission rhythm, and how evolution names map back to the database." />
 <p>
 Start by treating the game like a system-learning RPG, not a collection checklist. Finish the tutorial flow, pay attention to the species ability slots, and avoid making permanent-feeling decisions only because a rarity label looks exciting. When a new system appears, name the question: is this about combat role, hatching, training, breeding, splicing, element identity, or attributes? That habit keeps the guide path clean.
 </p>
 <p>
 Use early fights to answer practical questions. Can you keep pressure while moving? Do you need a defensive button? Are you losing because the species is weak, or because you do not understand its range? Are you choosing an element branch because it fits your plan, or because the name looks cooler? These are better questions than “what is the best Voidling,?because they connect directly to play.
 </p>
 <p>
 Once names start piling up, open the database. Search the species, filter by element, and compare ability slots. Then move into the{' '}
 <Link href="/games/voidling-bound/evolution-guide">evolution guide</Link>
 {' '}or{' '}
 <Link href="/games/voidling-bound/breeding-guide">breeding guide</Link>
 {' '}when you need system-level explanation.
 </p>
 </section>
 </VoidlingBoundArticle>
 );
}
