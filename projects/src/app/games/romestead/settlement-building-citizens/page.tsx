import { ArticleImage } from '@/components/article-media';
import { BlufBox, SearchAnswerPanel } from '@/components/guide-blocks';
import { RomesteadArticle } from '@/components/romestead-article';
import { createRomesteadMetadata, romesteadImages } from '@/lib/romestead';

const title = 'Romestead Settlement Building Guide: Base Layout, Citizens & Night Defense';
const description =
 'Build and manage your Romestead settlement: compact base layout, workstations, citizen jobs, food automation, and night defense strategies.';
const canonical = '/games/romestead/settlement-building-citizens';

export const metadata = createRomesteadMetadata({
 title,
 description,
 canonical,
 image: romesteadImages.screenshot1,
});

const faqs = [
 {
 question: 'What should I build first in Romestead?',
 answer:
 'Build storage, basic workstations, food support, and a compact defendable core before spreading into decorative buildings or distant resource outposts.',
 },
 {
 question: 'How should I use citizens in Romestead?',
 answer:
 'Assign citizens to repeated shortages first: food, gathering, crafting, hauling, repair, and defense. Do not recruit without a job plan.',
 },
 {
 question: 'Should my Romestead settlement be compact or spread out?',
 answer:
 'Start compact. A tight layout makes storage, crafting, citizen routing, and night defense easier while you are still learning the systems.',
 },
 {
 question: 'When should I expand my base?',
 answer:
 'Expand only after food, storage, workstation flow, and night defense are stable enough that a new building does not create another shortage.',
 },
 {
 question: 'Is this a final city layout guide?',
 answer:
 'No. Romestead is Early Access, so this page focuses on reliable settlement principles rather than claiming one final solved layout.',
 },
];

const searchIntentRows = [
 {
 query: 'Romestead settlement',
 answer:
 'Start with a compact settlement core: storage, workstations, food, citizens, and night defense before decorative expansion.',
 href: '#settlement-core',
 label: 'Layout',
 },
 {
 query: 'Romestead citizens',
 answer:
 'Use citizens to solve repeated chores first: food, hauling, crafting, repair, defense, and resource gathering.',
 href: '#citizen-jobs',
 label: 'Jobs',
 },
 {
 query: 'Romestead base building',
 answer:
 'Build around workflow: resources enter storage, move to workstations, feed citizens, and support night defense.',
 href: '#build-order',
 label: 'Build order',
 },
 {
 query: 'Romestead night defense',
 answer:
 'Keep the first base small enough to defend; wide settlements create more repair and movement problems at night.',
 href: '#night-defense',
 label: 'Defense',
 },
];

const jumpLinks = [
 { href: '#settlement-core', label: 'Settlement core' },
 { href: '#build-order', label: 'Build order' },
 { href: '#citizen-jobs', label: 'Citizen jobs' },
 { href: '#night-defense', label: 'Night defense' },
 { href: '/games/romestead/beginner-guide', label: 'Beginner guide' },
 { href: '/games/romestead/multiplayer-coop', label: 'Co-op roles' },
];

const buildOrderRows = [
 ['Storage', 'Place it near workstations and common routes.', 'Storage turns loose materials into usable progress.'],
 ['Food support', 'Secure food before assigning citizens to long work chains.', 'Hungry workers slow every other system.'],
 ['Basic workstations', 'Build the stations that unlock tools, repairs, and core settlement upgrades.', 'Workstations convert gathering into progression.'],
 ['Compact housing or citizen space', 'Keep citizens close to work areas until routing is understood.', 'Long walking paths waste daylight and delay defense.'],
 ['Defense layer', 'Add lights, barriers, repair access, and protected routes before expanding.', 'Night pressure punishes scattered layouts.'],
 ['Expansion wing', 'Add new buildings only when the core can keep running without babysitting.', 'Expansion should solve a bottleneck, not create one.'],
];

const citizenRows = [
 ['Gatherer', 'Assign when wood, stone, food, or basic materials are the bottleneck.', 'Best early because every system consumes materials.'],
 ['Crafter', 'Assign when storage is full but tools, stations, or upgrades lag behind.', 'Converts resources into settlement value.'],
 ['Hauler', 'Assign when materials exist but workstations sit idle.', 'Fixes workflow instead of blaming production.'],
 ['Cook or food support', 'Assign when exploration or defense drains recovery supplies.', 'Food stability makes longer days possible.'],
 ['Repair and defense', 'Assign when night attacks damage the settlement faster than you recover.', 'Prevents small damage from becoming a reset spiral.'],
 ['Scout support', 'Assign after the core is stable and the next resource need is outside base.', 'Exploration is stronger when the home base can run itself.'],
];

const layoutRows = [
 ['Resource intake', 'Put storage close to the path where materials return.', 'Shortens the most repeated movement loop.'],
 ['Crafting cluster', 'Group early workstations near storage.', 'Makes shortages visible and reduces wasted routing.'],
 ['Food zone', 'Keep food handling easy to reach but not blocking the main route.', 'Food should support work, not interrupt it.'],
 ['Citizen pathing', 'Leave clean walking lanes between jobs.', 'Congested layouts slow work and defense.'],
 ['Defense edge', 'Protect the smallest useful perimeter first.', 'A compact perimeter is cheaper to defend and repair.'],
];

const playerLevelRows = [
 ['New player', 'Build one compact core and keep every important station visible from storage.', 'This prevents the first settlement from becoming a maze before you understand citizen routing.'],
 ['Returning player', 'Separate intake, crafting, food, and defense into small zones instead of one pile.', 'Zoning makes shortages easier to diagnose without forcing a full rebuild.'],
 ['Co-op group', 'Give one player settlement flow, one food, one defense, and one scouting or gathering.', 'Co-op fails when everyone chases the same task and nobody owns the boring bottleneck.'],
 ['Builder-focused player', 'Use symmetry only after workflow works.', 'A beautiful plan that starves workers is still a bad settlement.'],
 ['Combat-focused player', 'Build retreat lanes and repair access before pushing the perimeter outward.', 'Night pressure punishes layouts that look strong but cannot be maintained.'],
];

const expansionRows = [
 ['Food is stable', 'You can leave base briefly without the settlement falling behind.', 'Expansion is safe only when workers are not constantly waiting on recovery.'],
 ['Storage is readable', 'You can tell which materials are short without opening every container.', 'Readable storage turns expansion into planning instead of guesswork.'],
 ['Workstations stay active', 'Crafting stalls because of a real material bottleneck, not because workers walk too far.', 'This proves the core layout is doing its job.'],
 ['Night damage is recoverable', 'Repairs and defense happen faster than attacks can snowball.', 'A wider base multiplies repair work, so the core must recover first.'],
 ['Citizens have defined jobs', 'Every recruited worker has a repeated task that removes player friction.', 'Random recruitment adds mouths and pathing before it adds value.'],
];

export default function RomesteadSettlementCitizensPage() {
 return (
 <RomesteadArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Settlement & Citizens"
 heroImage={romesteadImages.screenshot1}
 heroAlt="Romestead settlement building and citizen jobs screenshot"
 faqs={faqs}
 >
 <SearchAnswerPanel
 title="How should you build your first Romestead settlement?"
 answer="Build a compact working core before expanding: storage near workstations, food support, clear citizen routes, and a defendable night layout. Citizens should be assigned to repeated shortages instead of recruited randomly."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <BlufBox title="Settlement Rule">
 <p>
 <strong>Every early building must reduce a bottleneck.</strong> If a
 new structure does not improve food, storage, crafting, citizen
 routing, defense, or resource flow, it can wait.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2 id="settlement-core">First Settlement Core</h2>
 <ArticleImage
 src={romesteadImages.screenshot2}
 alt="Romestead compact settlement core layout"
 caption="The first settlement should be small, readable, and useful: storage, workstations, food, workers, and defensive access."
 />
 <p>
 Romestead competitors win this SERP because they answer the practical
 town-management question directly: where do materials go, who handles
 jobs, what gets built first, and when is expansion safe? The answer is
 not a pretty city plan. It is a working loop.
 </p>
 </section>

 <section className="prose-game">
 <h2 id="build-order">Settlement Build Order</h2>
 </section>
 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Build step</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Do this</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why</th>
 </tr>
 </thead>
 <tbody>
 {buildOrderRows.map(([step, action, why]) => (
 <tr key={step} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{step}</th>
 <td className="px-4 py-3 text-muted-foreground">{action}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="citizen-jobs">Citizen Jobs and Priorities</h2>
 <ArticleImage
 src={romesteadImages.screenshot3}
 alt="Romestead citizens and co-op settlement work"
 caption="Citizens are strongest when they remove repeated chores from the player and keep the settlement loop moving."
 />
 <p>
 New players should think of citizens as a way to remove repeated
 chores. Experienced players should think of them as a throughput
 system: every worker either shortens a route, keeps a station active,
 protects the base, or frees the player to scout. If a citizen does
 not improve one of those jobs, the settlement is adding complexity
 before it adds value.
 </p>
 </section>
 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Citizen role</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Use when</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why</th>
 </tr>
 </thead>
 <tbody>
 {citizenRows.map(([role, use, why]) => (
 <tr key={role} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{role}</th>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="night-defense">Layout Checks Before Night Defense</h2>
 <ArticleImage
 src={romesteadImages.screenshot5}
 alt="Romestead night defense settlement planning"
 caption="Night defense starts with layout discipline: smaller perimeter, clearer paths, reachable repairs, and fewer exposed workers."
 />
 <p>
 Night defense is not just a combat problem. It is a settlement design
 problem. A wide base creates more angles to watch, more damaged
 objects to repair, and longer citizen routes when the settlement is
 already under pressure. A compact base gives you fewer problems at
 once, which is why it is stronger for both solo players and co-op
 groups during the first saves.
 </p>
 </section>
 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Layout area</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Rule</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Reason</th>
 </tr>
 </thead>
 <tbody>
 {layoutRows.map(([area, rule, reason]) => (
 <tr key={area} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{area}</th>
 <td className="px-4 py-3 text-muted-foreground">{rule}</td>
 <td className="px-4 py-3 text-muted-foreground">{reason}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>New Player vs Experienced Player Priorities</h2>
 <ArticleImage
 src={romesteadImages.planningFarmOverview}
 alt="Romestead settlement planning overview"
 caption="A good settlement changes by experience level: beginners need readability, while advanced players can start optimizing zones and routes."
 />
 </section>
 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player type</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Focus</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why</th>
 </tr>
 </thead>
 <tbody>
 {playerLevelRows.map(([type, focus, why]) => (
 <tr key={type} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{type}</th>
 <td className="px-4 py-3 text-muted-foreground">{focus}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>When Expansion Is Actually Safe</h2>
 <ArticleImage
 src={romesteadImages.planningVillageMarket}
 alt="Romestead village expansion and market planning"
 caption="Expansion should happen after the settlement core proves it can feed, craft, store, defend, and recover without constant manual rescue."
 />
 <p>
 The biggest mid-game trap is expanding because materials are
 available, not because the settlement is ready. Materials only tell
 you what you can place. Stability tells you what you can afford to
 maintain. Use the checks below before adding a new wing, second
 resource zone, or distant support building.
 </p>
 </section>
 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Expansion signal</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it means</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
 </tr>
 </thead>
 <tbody>
 {expansionRows.map(([signal, meaning, reason]) => (
 <tr key={signal} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{signal}</th>
 <td className="px-4 py-3 text-muted-foreground">{meaning}</td>
 <td className="px-4 py-3 text-muted-foreground">{reason}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </RomesteadArticle>
 );
}
