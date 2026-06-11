import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel } from '@/components/guide-blocks';
import { RomesteadArticle } from '@/components/romestead-article';
import { createRomesteadMetadata, romesteadImages } from '@/lib/romestead';

const title = 'Romestead Best Profession: All 8 Classes Compared & Which to Pick First';
const description =
 'Compare all 8 Romestead starting professions: Scholar, Legionary, Gladiator, and more. Find which class fits your playstyle, co-op role, and first-day strategy.';
const canonical = '/games/romestead/best-profession-class';

export const metadata = createRomesteadMetadata({
 title,
 description,
 canonical,
 image: romesteadImages.screenshotCombat,
});

const faqs = [
 {
 question: 'What is the best profession in Romestead?',
 answer:
 'Scholar is the safest first pick for new players thanks to its ranged magic attack that lets you learn combat timing from a distance. Legionary (longer melee reach) and Woodcutter (faster wood gathering) are strong alternatives depending on your playstyle.',
 },
 {
 question: 'What is the best class for solo players?',
 answer:
 'Scholar for ranged safety, or Woodcutter/Miner for faster resource gathering. Solo play benefits from versatility — avoid overspecialized picks like Lobber or Mechanicus on your first save.',
 },
 {
 question: 'What is the best class for co-op?',
 answer:
 'Co-op groups should split roles: Scholar or Legionary for combat, Woodcutter for materials, Miner for metal, Mechanicus for crafting. Avoid four players picking the same role.',
 },
 {
 question: 'Can I change profession later?',
 answer:
 'Profession choice affects your starting weapon and skill bonus, but every character can learn every skill over time. Your first pick smoothes the first hour, not the whole game.',
 },
];

const searchIntentRows = [
 {
 query: 'Romestead best profession',
 answer: 'Choose by your current bottleneck. Food and gathering are safest early; defense and exploration become stronger once the base works.',
 href: '#profession-table',
 label: 'Role pick',
 },
 {
 query: 'Romestead best class',
 answer: 'For a first save, flexible survival and gathering value beats a narrow late-game build.',
 href: '#solo-vs-coop',
 label: 'First save',
 },
 {
 query: 'Best profession for co-op',
 answer: 'Split jobs across food, crafting, scouting, and defense so the group does not duplicate the same early role.',
 href: '#coop-roles',
 label: 'Co-op',
 },
 {
 query: 'Romestead builds',
 answer: 'Treat builds as settlement solutions: solve shortages first, then specialize once recipes and night pressure are clearer.',
 href: '#build-rules',
 label: 'Builds',
 },
];

const jumpLinks = [
 { href: '#profession-table', label: 'Best profession' },
 { href: '#solo-vs-coop', label: 'Solo vs co-op' },
 { href: '#coop-roles', label: 'Co-op roles' },
 { href: '#build-rules', label: 'Build rules' },
 { href: '/games/romestead/beginner-guide', label: 'Beginner route' },
 { href: '/games/romestead/tips-and-tricks', label: 'Tips' },
];

const professionData = [
 { name: 'Scholar', weapon: 'Scroll of the Novice (ranged magic offhand)', style: 'Ranged magic', bestFor: 'Best for beginners — attack from distance while learning dodge/block timing', rating: '⭐⭐⭐' },
 { name: 'Legionary', weapon: 'Flint Hasta (spear, dmg 4-5)', style: 'Melee with reach', bestFor: 'Best for players who want longer melee range and forgiving positioning', rating: '⭐⭐⭐' },
 { name: 'Gladiator', weapon: 'Flint Gladius (short sword, dmg 3-4)', style: 'Fast melee', bestFor: 'Good for experienced melee players; sword skills scale differently with shields', rating: '⭐⭐' },
 { name: 'Phalanx', weapon: 'Wooden Shield (20 block, 120° arc)', style: 'Defensive', bestFor: 'Best for defense-focused players; needs a crafted main weapon to pair with shield', rating: '⭐⭐' },
 { name: 'Lobber', weapon: 'Wrist Wraps (+1 thrown attack)', style: 'Environment throwing', bestFor: 'Niche pick for players who master the throwing system; no conventional weapon', rating: '⭐' },
 { name: 'Woodcutter', weapon: 'Flint Axe (+5 axe power)', style: 'Resource gathering', bestFor: 'Best for fast base setup — wood is the most consumed resource from early to mid game', rating: '⭐⭐⭐' },
 { name: 'Miner', weapon: 'Flint Pickaxe (+5 pickaxe power)', style: 'Resource gathering', bestFor: 'Best for solo players rushing metal age; needs Mining level 3+ for tin', rating: '⭐⭐' },
 { name: 'Mechanicus', weapon: 'Workbench (placeable item)', style: 'Building', bestFor: 'Best for builders who want to skip the first workbench craft; starts building immediately', rating: '⭐⭐' },
];

const routeRows = [
 {
 step: 'Pick a shortage',
 doThis: 'Name the problem your settlement has right now: food, materials, crafting, defense, or scouting.',
 why: 'A role is only strong if it fixes the problem that is slowing your save.',
 },
 {
 step: 'Choose a flexible first role',
 doThis: 'Favor early gathering and survival value if this is your first solo save.',
 why: 'Flexible roles recover from mistakes better than narrow late-game plans.',
 },
 {
 step: 'Split co-op jobs',
 doThis: 'Avoid four players taking the same role unless the group has a specific plan.',
 why: 'Duplicate jobs create shortages elsewhere, especially around storage and defense.',
 },
 {
 step: 'Delay final build claims',
 doThis: 'Do not chase a final meta build until recipes, scaling, and night pressure are clearer.',
 why: 'Early Access balance can change, and a claimed best class may not match your patch or group size.',
 },
];

const coopRows = [
 ['Player 1', 'Food, farming, and nearby gathering', 'Keeps the settlement alive while others branch out.'],
 ['Player 2', 'Crafting, storage, and workstation flow', 'Prevents resource piles from turning into menu chaos.'],
 ['Player 3', 'Scouting and dungeon preparation', 'Finds new routes without dragging the whole group away from base.'],
 ['Player 4', 'Defense and night response', 'Keeps attacks from interrupting every production cycle.'],
];

export default function RomesteadBestProfessionClassPage() {
 return (
 <RomesteadArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Best Profession & Class"
 heroImage={romesteadImages.screenshotCombat}
 heroAlt="Romestead best profession and class combat gameplay screenshot"
 faqs={faqs}
 showSources={false}
 >
 <SearchAnswerPanel
 title="What is the best profession or class in Romestead?"
 answer="The best first Romestead profession is the one that fixes your immediate settlement shortage. Solo players should pick flexible food, gathering, and survival value first; co-op groups should split food, crafting, scouting, and defense roles."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <BlufBox title="Role Rule">
 <p>
 <strong>Pick for the save you are playing, not for a final tier list.</strong>{' '}
 Romestead combines survival, town building, co-op, and night defense,
 so an early role should solve a practical bottleneck before it chases
 a late-game fantasy.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2 id="profession-table">All 8 Starting Professions Compared</h2>
 <ArticleImage
 src={romesteadImages.screenshotCombat}
 alt="Romestead 8 starting professions comparison screenshot"
 caption="Compare all 8 Romestead starting professions by weapon, combat style, and best use case. Scholar is the safest first pick for beginners."
 />
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-3 py-3 text-left font-medium text-muted-foreground">Profession</th>
 <th className="px-3 py-3 text-left font-medium text-muted-foreground">Starting weapon</th>
 <th className="px-3 py-3 text-left font-medium text-muted-foreground">Style</th>
 <th className="px-3 py-3 text-left font-medium text-muted-foreground">Best for</th>
 <th className="px-3 py-3 text-left font-medium text-muted-foreground">Rating</th>
 </tr>
 </thead>
 <tbody>
 {professionData.map((p) => (
 <tr key={p.name} className="border-b border-border last:border-0 hover:bg-mist/40">
 <td className="px-3 py-3 font-semibold text-foreground">{p.name}</td>
 <td className="px-3 py-3 text-muted-foreground text-xs">{p.weapon}</td>
 <td className="px-3 py-3 text-muted-foreground">{p.style}</td>
 <td className="px-3 py-3 text-muted-foreground text-xs">{p.bestFor}</td>
 <td className="px-3 py-3 text-muted-foreground">{p.rating}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="solo-vs-coop">Solo Versus Co-op Class Choice</h2>
 <p>
 Solo players need flexibility because one person must gather, build,
 fight, craft, and explore. Co-op players can specialize earlier, but
 only if the group agrees on who handles repeated chores. Use the{' '}
 <Link href="/games/romestead/multiplayer-coop">multiplayer and co-op guide</Link>{' '}
 if group roles matter more than solo efficiency.
 </p>
 </section>

 <ActionTable rows={routeRows} />

 <section className="prose-game">
 <h2 id="coop-roles">Simple Four-Player Role Split</h2>
 <ArticleImage
 src={romesteadImages.screenshot3}
 alt="Romestead co-op class and profession role split"
 caption="Co-op classes work best when players cover different settlement jobs instead of duplicating the same early task."
 />
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Slot</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Job</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Value</th>
 </tr>
 </thead>
 <tbody>
 {coopRows.map(([slot, job, value]) => (
 <tr key={slot} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{slot}</td>
 <td className="px-4 py-3 text-muted-foreground">{job}</td>
 <td className="px-4 py-3 text-muted-foreground">{value}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="build-rules">Build Rules That Stay Useful</h2>
 <p>
 A strong Romestead build starts with the first day: food, tools,
 storage, compact layout, and night defense. After that, specialize
 around the bottleneck you keep feeling. If you are still learning the
 survival loop, return to the{' '}
 <Link href="/games/romestead/beginner-guide">beginner guide</Link>{' '}
 before locking in a narrow role.
 </p>
 </section>
 </RomesteadArticle>
 );
}
