import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel } from '@/components/guide-blocks';
import { MinaArticle } from '@/components/mina-the-hollower-article';
import {
 createMinaMetadata,
 minaImages,
} from '@/lib/mina-the-hollower';

const title = 'Mina the Hollower Trophy Guide: Achievements, Trinket Checklist and 100% Roadmap';
const description =
 'Mina the Hollower trophy and achievement guide with a two-pass 100% roadmap, trinket cleanup checklist, boss and secret tracking, sidearm notes, and platform trophy cautions.';
const canonical = '/games/mina-the-hollower/trophy-guide';

export const metadata = createMinaMetadata({
 title,
 description,
 canonical,
 image: minaImages.screenshot7,
});

// ---- Trinket Data ----
interface TrinketEntry {
 name: string;
 effect: string;
 region: string;
 type: string;
}

const trinkets: TrinketEntry[] = [
 { name: 'Lace Glove', effect: 'Raises attack level by one stage.', region: 'Southern Outskirts', type: 'Combat' },
 { name: 'Twill Weave', effect: 'Raises defense level by one stage.', region: "Nox's Bayou", type: 'Defensive' },
 { name: 'Smelling Salts', effect: 'Raises sidearm level by one stage.', region: 'Eastern Heath', type: 'Combat' },
 { name: 'Brisk Brew', effect: 'Walk faster; hitting enemies grants a burst of speed.', region: 'Ossex Shop', type: 'Mobility' },
 { name: 'Seismic Belt', effect: 'Press J while burrowed to emit a damage pulse.', region: 'Ossex Shop', type: 'Combat' },
 { name: 'Plasma Funnel', effect: 'Drink plasma vials twice as fast; hits do not cancel the drink.', region: 'Ossex Shop', type: 'Recovery' },
 { name: 'Deboning Wand', effect: 'Enemies drop more bones, but bones bounce erratically.', region: 'Ossex', type: 'Utility' },
 { name: 'Steady Soles', effect: 'Move normally on water, grass, stairs, and ice; resist knockback.', region: 'Ossex', type: 'Mobility' },
 { name: 'Valor Medallion', effect: 'Move slightly while healing; hits do not lose plasma.', region: 'Ossex', type: 'Recovery' },
 { name: 'Bell of Grace', effect: 'Chance to retain sparks on death; save some bones on sparkless death.', region: 'Ossex', type: 'Recovery' },
 { name: 'Willow the Wisp', effect: 'Summon a friendly wisp on hit that boosts attack and speed.', region: 'Eastern Heath', type: 'Combat' },
 { name: 'Helio the Wisp', effect: 'Summon a friendly wisp on hit that restores HP.', region: 'Western Wilds', type: 'Recovery' },
 { name: 'Kerri the Wisp', effect: 'Press space in air to float and extend drop distance.', region: 'Southern Outskirts', type: 'Mobility' },
 { name: 'Windfall Charm', effect: 'Joule pickups restore plasma; sidearm hits may drop joules.', region: 'Eastern Heath', type: 'Utility' },
 { name: 'Chain Capacitor', effect: 'Hitting enemies in succession raises damage; misses reset the chain.', region: 'Eastern Heath', type: 'Combat' },
 { name: 'Spike Spurs', effect: 'Take reduced damage on spikes and resist knockback.', region: "Mourner's Mile", type: 'Defensive' },
 { name: 'Desperation Bonnet', effect: 'Deal more damage and spend fewer joules at low HP.', region: "Mourner's Mile", type: 'Combat' },
 { name: 'Stolenoid', effect: 'Magnetically attract nearby pickups toward you.', region: 'Queensbury Crypt', type: 'Utility' },
 { name: 'Fly Bait', effect: 'Defeating enemies summons friendly flies that attack others.', region: 'Queensbury Crypt', type: 'Combat' },
 { name: 'Proto Spark', effect: 'Save yourself from death once; resets after revival.', region: 'Queensbury Crypt', type: 'Recovery' },
 { name: 'Primed Vial Pouch', effect: 'Carry two extra plasma vials; using a vial always restores some HP.', region: 'Southern Outskirts', type: 'Recovery' },
 { name: 'Flame Guard', effect: 'Block one fire or explosion hit; recharges after seconds.', region: 'Western Wilds', type: 'Defensive' },
 { name: 'Spark Catcher', effect: 'Gain one extra spark vessel; hitting enemies recovers lost sparks.', region: 'Backwaters', type: 'Utility' },
 { name: 'Evasion Powder', effect: 'Extended invincibility after being hit; brief invincibility after burrowing.', region: 'Backwaters', type: 'Defensive' },
 { name: 'Vascular Syrup', effect: 'HP drains slowly after a hit; you cannot die until the drain finishes.', region: "Nox's Bayou", type: 'Recovery' },
 { name: 'Pit Preserver', effect: 'Bounce out of pits or water; reduced pit damage.', region: "Nox's Bayou", type: 'Mobility' },
 { name: 'Iron Lung', effect: 'Increase maximum burrow time, including underwater.', region: "Nox's Bayou", type: 'Mobility' },
 { name: 'Tumbling Tutu', effect: 'Press space in air for a spinning attack that deflects enemies.', region: "Nox's Bayou", type: 'Combat' },
 { name: 'Plasma Jug', effect: 'Gain extra plasma from enemies; can exceed the normal cap.', region: 'Backwaters', type: 'Utility' },
 { name: 'Uranium Bracelet', effect: 'Significantly increase both damage dealt and damage taken.', region: 'Ossex Shop', type: 'Combat' },
 { name: 'Bubble Ring', effect: 'Quick attacks form a protective barrier that absorbs one hit.', region: 'Ossex Shop', type: 'Defensive' },
 { name: 'Shock Flint', effect: 'Full HP or plasma attacks fire a deadly orb that grows with distance.', region: 'Ossex Shop', type: 'Combat' },
 { name: 'Intravenous Vial', effect: 'Auto-use a vial when you have enough plasma, no manual drinking needed.', region: 'Ossex Shop', type: 'Recovery' },
 { name: 'Pneumatic Armlet', effect: 'Thrown projectiles are faster, farther, and deal more damage.', region: "Nox's Bayou", type: 'Combat' },
 { name: 'Bridge Weaver', effect: 'Step off a platform edge to summon a web bridge across gaps.', region: 'Astral Orrery', type: 'Mobility' },
 { name: 'Dodging Pendulum', effect: 'Press jump right before getting hit to dodge and gain brief invincibility.', region: 'Radiant Manor', type: 'Defensive' },
 { name: 'Spring Heels', effect: 'Jump again after landing to bounce higher and farther.', region: 'Radiant Manor', type: 'Mobility' },
 { name: "Wallower's Gauntlets", effect: 'Gain the ability to dig through walls.', region: 'Kindlewood', type: 'Mobility' },
 { name: 'Oozing Organ', effect: 'Leave a damaging slime trail while burrowing.', region: 'Kindlewood', type: 'Combat' },
 { name: 'Voltaic Guard', effect: 'Block one lightning attack; recharges after seconds.', region: 'Kindlewood', type: 'Defensive' },
 { name: 'Repulsing Root', effect: 'Summon screaming vines on hit that push away and damage enemies.', region: 'Kindlewood', type: 'Defensive' },
 { name: 'Lightning Grip', effect: 'Healing or hitting enemies occasionally summons a damaging lightning bolt.', region: 'Kindlewood', type: 'Combat' },
 { name: 'Niter Belt', effect: 'Create a radial explosion when bursting out of a burrow.', region: 'Sandfalls', type: 'Combat' },
 { name: 'Bellows Bustle', effect: 'Press jump in the air for an aerial dash.', region: 'Multiple Regions', type: 'Mobility' },
 { name: 'Tunneling Codex', effect: 'Hold jump to continuously burrow without needing to resurface.', region: 'Sandfalls', type: 'Mobility' },
 { name: 'Joule Syringe', effect: 'Sidearm hits restore plasma; use HP instead of joules at 0 joules.', region: 'Bone Beach', type: 'Utility' },
 { name: 'Polyp Lamp', effect: 'Emit a faint glow and reduce damage taken in dark areas.', region: 'Bone Beach', type: 'Defensive' },
 { name: 'Thermal Pack', effect: 'Damage rises after death or leaving the lab; grows stronger after the effect fades.', region: 'Bone Beach', type: 'Combat' },
 { name: 'Counter Vial', effect: 'Getting hit while drinking dodges and fires energy toward the attacker.', region: 'Ossex Shop', type: 'Defensive' },
 { name: 'Watchful Eye', effect: 'Defeat enemies without taking damage to earn extra bones.', region: 'Coltrane Peak', type: 'Utility' },
 { name: 'Blinking Glass', effect: 'Chance to avoid damage entirely and gain brief invincibility.', region: 'Coltrane Peak', type: 'Defensive' },
 { name: 'Vial Salvo', effect: 'Using a vial fires missiles; hitting enemies grants extra plasma.', region: 'Astral Orrery', type: 'Combat' },
 { name: 'Starving Beastium', effect: 'Using a vial restores joules but reduces healing.', region: "Mourner's Mile", type: 'Utility' },
 { name: 'Draining Beastium', effect: 'Sidearms deal more damage but cost more joules.', region: 'Kindlewood', type: 'Combat' },
 { name: 'Reckless Beastium', effect: 'After healing, the next few attacks hit harder but you are more vulnerable.', region: 'Astral Orrery', type: 'Combat' },
 { name: 'Volatile Beastium', effect: 'Enemies sometimes drop bombs on death.', region: 'Bone Beach', type: 'Combat' },
 { name: 'Burning Beastium', effect: 'Getting hit creates damaging fireballs you must jump or dig to avoid.', region: 'Coltrane Peak', type: 'Combat' },
 { name: 'Warding Beastium', effect: 'Reduce incoming damage but healing is significantly reduced.', region: 'Ossex', type: 'Defensive' },
 { name: 'Dummy Cache', effect: 'Place a joule-filled dummy that distracts enemies.', region: 'Western Wilds', type: 'Utility' },
 { name: 'Dead Leaf', effect: 'Stand still to become a silent statue; move to break the disguise.', region: 'Western Wilds', type: 'Utility' },
];

const faqs = [
 {
 question: 'Does Mina the Hollower have achievements?',
 answer:
  'Yes. Steam lists Steam Achievements for Mina the Hollower with a full set of unlockable goals. Check the live Steam achievement list to see exact names, hidden requirements, and total count before planning your cleanup route.',
 },
 {
 question: 'Is there a Mina the Hollower platinum trophy?',
 answer:
  'Check the live PlayStation trophy list on your console profile before planning a platinum route. Do not assume the Steam achievement names and PlayStation trophy names are identical.',
 },
 {
 question: 'What should I track for 100% completion?',
 answer:
  'Track trinkets by region, every boss clear, sidearm unlocks, map coverage, upgrade pickups, secrets, and every achievement popup. Use the trinket table below as a cleanup checklist and confirm missing entries against your in-game inventory.',
 },
 {
 question: 'Should I follow a full trophy route on my first run?',
 answer:
  'No. Spend the first playthrough learning burrowing, Nightstar range, sidearm use, and boss patterns. After you complete the story, use the trinket table and checklist below to clean up remaining achievements without replaying large sections.',
 },
];

const searchIntentRows = [
 {
 query: 'Mina the Hollower trophy guide',
 answer: 'Use a two-pass route: finish a learning run, then clean up achievements, secrets, bosses, sidearms, trinkets, map coverage, and platform-specific trophies.',
 href: '#roadmap',
 label: 'Roadmap',
 },
 {
 query: 'Mina the Hollower achievements',
 answer: 'Steam lists achievements. Compare your save against the live list after completing the story to identify remaining goals.',
 href: '#achievement-status',
 label: 'Live list',
 },
 {
 query: 'Mina the Hollower 100%',
 answer: 'Track map coverage, trinkets, secrets, bosses, upgrades, sidearms, and hard-room clears before chasing final cleanup.',
 href: '#completion-checklist',
 label: 'Checklist',
 },
 {
 query: 'Mina the Hollower platinum',
 answer: 'Check your console profile for the exact PlayStation trophy list before planning a platinum route.',
 href: '#platform-status',
 label: 'Console',
 },
 {
 query: 'Mina the Hollower missables',
 answer: 'Most trinkets and upgrades remain accessible after the credits. Some boss encounters and event-triggered items require specific actions during the story.',
 href: '#missable-cautions',
 label: 'Missables',
 },
];

const jumpLinks = [
 { href: '#trinket-table', label: 'Trinket checklist' },
 { href: '#achievement-status', label: 'Achievement status' },
 { href: '#roadmap', label: 'Roadmap' },
 { href: '#completion-checklist', label: '100% checklist' },
 { href: '#missable-cautions', label: 'Missables' },
 { href: '/games/mina-the-hollower/beginner-guide', label: 'Beginner guide' },
 { href: '/games/mina-the-hollower/steam-deck', label: 'Steam Deck' },
];

const roadmapRows = [
 {
 step: 'First run',
 doThis: 'Play normally, learn burrowing, Nightstar range, sidearms, trinkets, and boss timing.',
 why: 'A clean learning run prevents early achievement hunting from turning into repeated resets.',
 },
 {
 step: 'Map and secrets pass',
 doThis: 'Revisit side paths, suspicious rooms, upgrade checks, and hard-to-reach corners.',
 why: 'Mina emphasizes secrets and interconnected level design, so exploration cleanup should be deliberate.',
 },
 {
 step: 'Boss and combat cleanup',
 doThis: 'Record boss clears, secret boss fights (Midden, Mirren, Willis), and difficult combat rooms.',
 why: 'Defeating every boss and hidden encounter is likely required for 100% completion.',
 },
 {
 step: 'Equipment cleanup',
 doThis: 'Use the trinket table below to identify missing trinkets. Track sidearms and upgrades region by region.',
 why: 'Regional cleanup is easier when every missing item is tied to a place, effect, and inventory gap.',
 },
 {
 step: 'Final platform check',
 doThis: 'Compare your save against Steam achievements and console trophies after lists are visible.',
 why: 'Hidden entries and platform-specific trophies can change the last cleanup steps.',
 },
];

const checklistRows = [
 ['Story progress', 'Main route cleared, credits reached, post-game access checked.'],
 ['Map coverage', 'Unexplored rooms, locked paths, shortcut loops, and suspicious dead ends.'],
 ['Trinkets', 'Trinkets collected using the table below. Cross-reference your inventory region by region.'],
 ['Secrets', 'Hidden items, side rooms, secret bosses (Midden, Mirren, Willis), and optional challenge spaces.'],
 ['Combat', 'Boss clears, difficult enemy rooms, sidearm use, and challenge popups.'],
 ['Equipment', 'Sidearms, trinkets, upgrades, and build-changing items.'],
 ['Platform list', 'Steam achievements and console trophy lists checked after launch.'],
];

const regionOrder = [
 'Queensbury Crypt', "Nox's Bayou", 'Southern Outskirts', 'Eastern Heath', 'Western Wilds',
 "Mourner's Mile", 'Ossex', 'Ossex Shop', 'Backwaters', 'Kindlewood',
 'Coltrane Peak', 'Sandfalls', 'Bone Beach', 'Astral Orrery', 'Radiant Manor', 'Multiple Regions',
];

function sortByRegion(a: TrinketEntry, b: TrinketEntry) {
 const ai = regionOrder.indexOf(a.region);
 const bi = regionOrder.indexOf(b.region);
 return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
}

export default function MinaTrophyGuidePage() {
 return (
 <MinaArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Trophy Guide"
 heroImage={minaImages.trinket}
 heroAlt="Mina the Hollower trinket and trophy guide image"
 faqs={faqs}
 showSources={false}
 >
 <SearchAnswerPanel
 title="Does Mina the Hollower have trophies or achievements?"
 answer="Yes. Steam lists achievements, and console players should check their live trophy list before planning a platinum route. The smartest 100% plan is to finish a learning run first, then clean up secrets, bosses, map coverage, trinkets, and platform-specific entries."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <BlufBox title="100% Rule">
 <p>
 <strong>Play the story first, clean up with the trinket table second.</strong>{' '}
 The table below gives you a trinket cleanup checklist with effects and
 regions. Use it during your cleanup pass to cross-reference your inventory
 without replaying the entire map.
 </p>
 </BlufBox>

 <div id="achievement-status" className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Completion area</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to check</th>
 </tr>
 </thead>
 <tbody>
 {[
 ['Steam achievements', 'Open the live Steam achievement list after installing and compare hidden entries after your story clear.'],
 ['Console trophies', 'Open the platform trophy list on your console profile before planning a platinum route.'],
 ['Trinkets', 'Use the regional table below as an inventory cleanup checklist.'],
 ['Bosses and secrets', 'Record optional bosses, hidden rooms, sidearms, upgrades, and map gaps before final cleanup.'],
 ].map(([area, check]) => (
 <tr key={area} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{area}</td>
 <td className="px-4 py-3 text-muted-foreground">{check}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="roadmap">Recommended Achievement Roadmap</h2>
 <ArticleImage
 src={minaImages.screenshot4}
 alt="Mina the Hollower first run trophy roadmap"
 caption="Start with a stable playthrough. Trophy cleanup becomes faster once burrowing, whip range, sidearms, and boss timing are comfortable."
 />
 <p>
 Mina the Hollower is an action-adventure first and a checklist second.
 A first run should teach movement and combat. A second pass should
 clean up map coverage, trinkets, equipment, bosses, and platform list
 gaps.
 </p>
 </section>

 <ActionTable rows={roadmapRows} />

 <section className="prose-game">
 <h2 id="trinket-table">Trinket Cleanup Checklist: Effects, Regions and Types</h2>
 <ArticleImage
 src={minaImages.trinket}
 alt="Mina the Hollower trinket cleanup checklist"
 caption="Trinkets are a core collectible in Mina the Hollower. Use the checklist to identify missing effects, regions, and build options."
 />
 <p>
 Use this table to track which trinkets you have and which areas still
 need exploration. During final cleanup, confirm the table against your
 live inventory and platform achievement list before assuming a route is
 complete.
 </p>
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Trinket Name</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Effect</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Region</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Type</th>
 </tr>
 </thead>
 <tbody>
 {trinkets.sort(sortByRegion).map((t, i) => (
 <tr key={i} className="border-b border-border last:border-0 hover:bg-mist/50">
 <td className="px-4 py-3 font-semibold text-foreground whitespace-nowrap">{t.name}</td>
 <td className="px-4 py-3 text-muted-foreground">{t.effect}</td>
 <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{t.region}</td>
 <td className="px-4 py-3">
 <span className={
 (t.type === 'Combat' ? 'bg-red-100 text-red-800' :
 t.type === 'Defensive' ? 'bg-blue-100 text-blue-800' :
 t.type === 'Recovery' ? 'bg-green-100 text-green-800' :
 t.type === 'Mobility' ? 'bg-purple-100 text-purple-800' :
 t.type === 'Utility' ? 'bg-amber-100 text-amber-800' :
 'bg-gray-100 text-gray-800') + ' inline-block rounded-full px-2.5 py-0.5 text-xs font-medium'
 }>
 {t.type}
 </span>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="completion-checklist">100% Completion Checklist</h2>
 <p>
 Use this checklist while playing instead of waiting until the end.
 Every entry should be tied to a room, trinket, boss, item, or achievement
 popup so cleanup stays traceable.
 </p>
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Track</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to record</th>
 </tr>
 </thead>
 <tbody>
 {checklistRows.map(([item, note]) => (
 <tr key={item} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{item}</td>
 <td className="px-4 py-3 text-muted-foreground">{note}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="missable-cautions">Missable and Platform Cautions</h2>
 <ArticleImage
 src={minaImages.screenshot8}
 alt="Mina the Hollower missable achievement and platform caution image"
 caption="Most trinkets, upgrades, and secrets remain accessible after the credits. Focus event-triggered items and secret bosses during the story playthrough."
 />
 <ul>
 <li>Most trinkets and upgrades remain accessible after completing the story. Only a few event-triggered items require specific actions during the main playthrough.</li>
 <li>Secret bosses (Midden, Mirren, Willis) require specific triggers during the story and may be missable if you clear an area without activating them.</li>
 <li>Check the live Steam achievement list for hidden requirements after launch. Some achievements may require no-hit boss kills or speed challenges.</li>
 <li>PlayStation trophy names may differ from Steam achievement names. Cross-reference both lists during final cleanup.</li>
 <li>Use the <Link href="/games/mina-the-hollower/beginner-guide">beginner guide</Link> before chasing hard combat cleanup.</li>
 <li>Use the <Link href="/games/mina-the-hollower/steam-deck">Steam Deck guide</Link> if handheld controls affect boss timing.</li>
 </ul>

 <h2 id="platform-status">Platform Cleanup Order</h2>
 <p>
 Steam should be the first list to check on PC. Console players should
 compare their platform trophy list separately because hidden entries,
 naming, and unlock behavior can differ by storefront.
 </p>
 </section>
 </MinaArticle>
 );
}
