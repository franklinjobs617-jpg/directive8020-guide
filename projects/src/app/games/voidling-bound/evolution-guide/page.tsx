import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel, StatusPanel } from '@/components/guide-blocks';
import { VoidlingBoundArticle } from '@/components/voidling-bound-article';
import { createVoidlingBoundMetadata, voidlingBoundImages, voidlingEntries, voidlingGuideFaqs, voidlingRarities, voidlingSpecies } from '@/lib/voidling-bound';
import { vbEvolutionActionRows, vbEvolutionJumpLinks, vbEvolutionSearchIntent, vbEvolutionStatusItems } from '@/lib/voidling-bound';

const title = 'Voidling Bound Evolution Guide: Species Trees, Mutation Branches & Ability Changes';
const description =
 'Learn how Voidling Bound evolution works: species trees, mutation branches, rarity tiers, element shifts, ability changes, and how to plan your evolution path across 9 species.';
const canonical = '/games/voidling-bound/evolution-guide';

export const metadata = createVoidlingBoundMetadata({ title, description, canonical, image: voidlingBoundImages.screenshot2 });

const earlyEvolutionRows = [
 ['Safe first team', 'Keep one durable species, one ranged pressure pick, and one flexible element branch.', 'Prevents a team from becoming all damage with no recovery or coverage.'],
 ['Damage pressure', 'Choose branches that change attacks or add direct combat value before chasing rarity.', 'The best early attacker is the one that changes fights now.'],
 ['Control and utility', 'Favor abilities that slow, reposition, protect, or create safer turns.', 'Control helps when raw damage is not enough for a hard encounter.'],
 ['Element coverage', 'Avoid evolving every creature into the same element identity.', 'Mixed elements give more answers to future matchups.'],
];

const speciesRoleRows = [
 ['Anami', 'Flexible starter and utility planning', 'Use it when you need a balanced branch before committing to a specialized role.'],
 ['Gilick', 'Element pressure and route coverage', 'Compare element changes before treating higher rarity as a straight upgrade.'],
 ['Gwigoon', 'Team support and unusual branch identity', 'Useful when your team needs a role change more than another attacker.'],
 ['Kerapin', 'Durability and defensive planning', 'Good candidate when your team fails because it cannot survive long fights.'],
 ['Kwipeck', 'Damage and tempo planning', 'Use branch comparisons to decide whether the next form keeps the pressure role you want.'],
 ['Morfang', 'Aggressive or high-risk team slots', 'Best handled after you know what risk your party can support.'],
 ['Nimiod', 'Status, setup, or technical roles', 'Read ability slots closely because small changes can alter the team job.'],
 ['Packuran', 'Support, sustain, or utility coverage', 'Good when your team needs safer turns rather than more direct damage.'],
 ['Ur-Sek', 'Late-branch planning and unusual matchups', 'Compare endpoint perks with the role you are actually missing.'],
];

const elementChoiceRows = [
 ['Need safer fights', 'Pick the branch that adds defense, control, or recovery value.', 'Survival value matters more than rarity when encounters punish mistakes.'],
 ['Need faster clears', 'Pick the branch that improves attack pressure or tempo.', 'Damage branches are strongest when the rest of the team already covers safety.'],
 ['Need matchup coverage', 'Pick the element your current team lacks.', 'A balanced team handles more encounters than three creatures solving the same problem.'],
 ['Need a long-term favorite', 'Open the species list and compare final branch identity before spending resources.', 'A cool name is less useful than a form that still fits your preferred playstyle.'],
];

const breedingFlowRows = [
 ['1. Choose a role', 'Decide whether the creature should deal damage, defend, control, support, or cover an element gap.'],
 ['2. Pick the branch', 'Choose the element branch that supports that role instead of following rarity alone.'],
 ['3. Compare ability slots', 'Look at primary, secondary, and perk changes before committing to the next form.'],
 ['4. Check team balance', 'Make sure the evolution does not duplicate a role your party already covers.'],
 ['5. Open the creature page', 'Use the database entry for exact ability names, images, and family placement.'],
];

const mistakeRows = [
 ['Chasing rarity only', 'Rarity helps navigation, but it is not a complete quality score.'],
 ['Ignoring element spread', 'A team with one repeated element can struggle when a matchup asks for coverage.'],
 ['Skipping ability changes', 'The name can change while the role stays similar, so compare slots before investing.'],
 ['Evolving every favorite the same way', 'Different branches can solve different jobs even inside the same species family.'],
];

export default function VoidlingBoundEvolutionGuidePage() {
 return (
 <VoidlingBoundArticle title={title} description={description} canonical={canonical} label="Evolution Guide" heroImage={voidlingBoundImages.screenshot2} heroAlt="Voidling Bound evolution guide image" faqs={voidlingGuideFaqs.evolution}>
 <BlufBox title="Evolution Rule">
 <p>
 <strong>Read evolution as branching information, not as automatic upgrades.</strong> Species, rarity tiers, elements, ability changes, and mutation endpoints help you choose a role. They do not create one universal best path.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Voidling Bound Evolution Quick Answer"
 answer="Evolution is branching information, not an automatic upgrade ladder. Read branch first, name second, ability slot third, then compare whether the new form still fits your team role."
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
 The current database contains {voidlingEntries.length} evolution entries across {voidlingSpecies.length} species. The rarity labels present in the data are {voidlingRarities.join(', ')}. Those tiers are useful for navigation, but rarity should not be treated as a complete quality score. A high-rarity entry can still be a bad fit for a player who needs a different range, defensive tool, or element identity.
 </p>
 </section>

 <section className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Best Early Evolution Direction by Role</h2>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Goal</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Early direction</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it helps</th>
 </tr>
 </thead>
 <tbody>
 {earlyEvolutionRows.map(([goal, direction, reason]) => (
 <tr key={goal} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{goal}</td>
 <td className="px-4 py-3 text-muted-foreground">{direction}</td>
 <td className="px-4 py-3 text-muted-foreground">{reason}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Species Role Map</h2>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Species</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best use</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Planning note</th>
 </tr>
 </thead>
 <tbody>
 {speciesRoleRows.map(([species, use, note]) => (
 <tr key={species} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{species}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 <td className="px-4 py-3 text-muted-foreground">{note}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Element Choice Guide</h2>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Need</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Choose this branch</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Reason</th>
 </tr>
 </thead>
 <tbody>
 {elementChoiceRows.map(([need, branch, reason]) => (
 <tr key={need} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{need}</td>
 <td className="px-4 py-3 text-muted-foreground">{branch}</td>
 <td className="px-4 py-3 text-muted-foreground">{reason}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
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
 The Species page is the clearest place to read mutation tree structure. Each species has two branches, and each branch has its own element identity. The database turns those branches into a filterable list. The branch read takes a minute and is the single most useful thing a player can do before any evolution decision. Without it, name-level comparisons often mix creatures that solve different team problems.
 </p>
 <p>
 Mutation tree endpoints are not always the strongest entries. Some early branches already solve a role the team needs, and pushing deeper into a tree is only worth it if the new ability slots actually change the way the creature fights. The wiki describes perks added at the end of a tree; that is a useful signal, but it does not guarantee the entry is a final pick.
 </p>
 </section>

 <section className="prose-game" id="evolution-changes">
 <h2>What Evolution Actually Changes</h2>
 <p>
 Many evolutions keep some base abilities while changing element, primary attacks, perks, or branch identity. The useful comparison workflow is to look at what changed, not at the new name. If the Primary ability did not change, the creature may play similarly to its base. If the element changed, the team role may have shifted. If a perk was added, the late-game value may have changed even when the early-game kit looks the same.
 </p>
 <p>
 The database supports this by exposing ability slot labels for every entry it can parse. Use those labels to compare what actually changed before forming an opinion.
 </p>
 </section>

 <section className="prose-game" id="evolution-no-best">
 <h2>How to Compare Evolutions</h2>
 <p>
 Universal best-evolution rankings can hide the decision that matters: whether the new form fits your team. Compare evolutions by branch, ability changes, element shifts, rarity tier, and whether the new ability slots fit your playstyle. Use the species tree view above to find candidate evolutions, then open the database comparison panel to check ability slots side by side.
 </p>
 <p>
 Example: a Kwipeck player who wants more damage pressure might follow the Pyro branch evolution path — Kwipeck (base, balanced) → an intermediate Pyro-branch evolution with damage perk → a final Pyro-branch evolution with mutated perk at the tree endpoint. At each step, compare the ability slots to confirm the change matches the intended playstyle.
 </p>
 </section>

 <section className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Breeding-to-Evolution Flow</h2>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Step</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Decision</th>
 </tr>
 </thead>
 <tbody>
 {breedingFlowRows.map(([step, decision]) => (
 <tr key={step} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{step}</td>
 <td className="px-4 py-3 text-muted-foreground">{decision}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Common Evolution Mistakes</h2>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mistake</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Better habit</th>
 </tr>
 </thead>
 <tbody>
 {mistakeRows.map(([mistake, habit]) => (
 <tr key={mistake} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{mistake}</td>
 <td className="px-4 py-3 text-muted-foreground">{habit}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Evolution Plan</h2>
 <ActionTable rows={vbEvolutionActionRows} />
 </VoidlingBoundArticle>
 );
}
