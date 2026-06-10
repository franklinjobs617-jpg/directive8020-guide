import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { FatekeeperArticle } from "@/components/fatekeeper-article";
import {
 createFatekeeperMetadata,
 fatekeeperEnemyRows,
 fatekeeperImages,
} from "@/lib/fatekeeper";

const title = "Fatekeeper Bosses & Enemies Guide: Pattern Reading, Prep and First Clears";
const description =
 "Fatekeeper bosses and enemies guide for pattern reading, first-attempt prep, melee and spell counters, relic checks, boss habits, and Early Access route cautions.";
const canonical = "/games/fatekeeper/bosses-enemies";

export const metadata = createFatekeeperMetadata({
 title,
 description,
 canonical,
 image: fatekeeperImages.bosses,
});

const faqs = [
 {
 question: "Does Fatekeeper have bosses?",
 answer:
 "Fatekeeper is built around challenging enemies and increasingly difficult encounters, but final boss order should wait for hands-on route verification.",
 },
 {
 question: "How should I fight a new enemy?",
 answer:
 "Stay at mid range, bait one attack, watch recovery, then choose whether melee, spell timing, armor, or relic changes solve the fight.",
 },
 {
 question: "What should I do before a boss?",
 answer:
 "Check weapon recovery, spell purpose, armor fit, relic effect, healing route, and whether the arena gives you space to reset.",
 },
 {
 question: "Should I use a boss tier list?",
 answer:
 "No. Use pattern reading and build checks until boss order, health, and patch behavior are verified.",
 },
];

const searchIntentRows = [
 {
 query: "Fatekeeper bosses",
 answer: "Prepare by checking weapon recovery, spell purpose, relic effect, arena space, and one safe punish window.",
 href: "#boss-prep",
 label: "Bosses",
 },
 {
 query: "Fatekeeper enemies",
 answer: "Read each enemy at mid range first, then change one variable at a time if the fight fails.",
 href: "#enemy-table",
 label: "Enemies",
 },
 {
 query: "How to beat bosses",
 answer: "First attempt should gather pattern data; second attempt should test a specific counter.",
 href: "#first-clear",
 label: "Route",
 },
 {
 query: "Boss order",
 answer: "Do not rely on a final boss order until the live Early Access route is fully checked.",
 href: "#route-caveat",
 label: "Caveat",
 },
];

const jumpLinks = [
 { href: "#enemy-table", label: "Enemy reads" },
 { href: "#boss-prep", label: "Boss prep" },
 { href: "#first-clear", label: "First clear" },
 { href: "#route-caveat", label: "Route caveat" },
 { href: "/games/fatekeeper/best-builds", label: "Builds" },
 { href: "/games/fatekeeper/weapons-spells", label: "Weapons" },
];

const bossPrepRows = [
 ["Weapon", "Use a weapon whose recovery you understand before entering a boss arena."],
 ["Spell", "Bring one spell with a job: safe punish, pressure, control, or ranged answer."],
 ["Relic", "Equip a relic that changes survival or damage in the fight, not a random bonus."],
 ["Armor", "Choose comfort and recovery over theoretical value if the boss punishes slow movement."],
 ["Attempt goal", "Use the first attempt to learn patterns; use later attempts to test counters."],
];

export default function FatekeeperBossesEnemiesPage() {
 return (
 <FatekeeperArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Bosses & Enemies"
 heroImage={fatekeeperImages.siteCombatPoster}
 heroAlt="Fatekeeper bosses and enemies guide image"
 faqs={faqs}
 >
 <SearchAnswerPanel
 title="How should you handle bosses and enemies in Fatekeeper?"
 answer="Read patterns before forcing damage. For each new enemy, bait one attack, learn recovery, then adjust range, spell timing, armor, weapon speed, or relic support. Do not rely on a final boss order until the live route is verified."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <BlufBox title="Combat Rule">
 <p>
 <strong>The first attempt is information.</strong> A clean Fatekeeper
 boss route starts by learning range, recovery, arena space, and
 punish windows before changing the build.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2 id="enemy-table">Enemy Reading Table</h2>
 <ArticleImage
 src={fatekeeperImages.siteCombatPoster}
 alt="Fatekeeper enemy pattern reading image"
 caption="Enemy reading should happen before build blame: range, recovery, spell timing, and relic fit all matter."
 />
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Encounter</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">First response</th>
 </tr>
 </thead>
 <tbody>
 {fatekeeperEnemyRows.map(([enemy, response]) => (
 <tr key={enemy} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{enemy}</td>
 <td className="px-4 py-3 text-muted-foreground">{response}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="boss-prep">Boss Prep Checklist</h2>
 <p>
 If a boss feels unfair, check the{" "}
 <Link href="/games/fatekeeper/weapons-spells">weapon and spell setup</Link>{" "}
 before assuming the fight is impossible. If the loadout is coherent,
 compare passive support in the{" "}
 <Link href="/games/fatekeeper/relics-upgrades">relics and upgrades guide</Link>.
 </p>
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Check</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Before the fight</th>
 </tr>
 </thead>
 <tbody>
 {bossPrepRows.map(([check, action]) => (
 <tr key={check} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{check}</td>
 <td className="px-4 py-3 text-muted-foreground">{action}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="first-clear">First-Clear Method</h2>
 <ArticleImage
 src={fatekeeperImages.combat}
 alt="Fatekeeper first boss clear method image"
 caption="A first clear is usually pattern, punish, reset, then build adjustment if the same failure repeats."
 />
 <p>
 Start by surviving long enough to see the pattern. After that, test
 one change at a time: shorter weapon recovery, safer spell timing,
 different armor, or a relic that improves the exact failure point.
 </p>

 <h2 id="route-caveat">Boss Order Caveat</h2>
 <p>
 Do not treat any boss order as final until the Early Access route is
 checked in the live build. Use this page for combat habits now, then
 update to boss-by-boss routes after verified clears.
 </p>
 </section>
 </FatekeeperArticle>
 );
}
