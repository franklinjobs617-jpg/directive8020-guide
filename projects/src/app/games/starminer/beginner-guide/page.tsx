import Link from "next/link";
import { StarminerArticle } from "@/components/starminer-article";
import { ArticleImage } from "@/components/article-media";
import { ActionTable, BlufBox } from "@/components/guide-blocks";
import {
 createStarminerMetadata,
 starminerFirstHourRows,
 starminerImages,
 starminerModeRows,
} from "@/lib/starminer";

const title = "Starminer Beginner Guide: First Hour, Campaign Start, Mining, Heat & Defense";
const description =
 "Starminer beginner guide for the first hour: Campaign start, starter station, power, heat, mass, mining, storage, blueprints, defenses, and what to avoid.";
const canonical = "/games/starminer/beginner-guide";

export const metadata = createStarminerMetadata({
 title,
 description,
 canonical,
 image: starminerImages.station,
});

const faqs = [
 {
 question: "What should beginners do first in Starminer?",
 answer:
 "Start with Campaign, build small, stabilize a basic mining and refining loop, leave power reserve, avoid uncontrolled heat growth, and add defenses before expanding into distant sectors.",
 },
 {
 question: "Should I start Starminer in Campaign or Sandbox?",
 answer:
 "Campaign is better for a first save because the official FAQ says it introduces mechanics and lore. Sandbox is better once you understand station layout, power, logistics, and defense pressure.",
 },
 {
 question: "What is the biggest early mistake in Starminer?",
 answer:
 "The biggest early mistake is expanding faster than your power, logistics, storage, and defenses can support. Starminer rewards stable systems more than oversized first builds.",
 },
 {
 question: "When should I build defenses in Starminer?",
 answer:
 "Build defenses before the station becomes hard to protect. Steam explains that mining and building raise heat signature until aliens detect you, so defense should be part of expansion planning.",
 },
 {
 question: "Are blueprints useful for beginners?",
 answer:
 "Yes. Blueprint save and recall helps preserve stable designs. Community sharing is planned, but personal blueprint use is the safer launch-window assumption.",
 },
];

const stopRows = [
 ["Power reserve is gone", "Pause expansion and add power before weapons, refining, or logistics start competing for the same capacity."],
 ["Materials are stuck", "Fix the production chain before adding more mining modules."],
 ["Heat is climbing", "Add defense and slow extraction before aliens or pirates turn the base into a repair bill."],
 ["Storage is messy", "Sort resources and create clean routes before expanding to a new sector."],
 ["Combat coverage is thin", "Protect power, refining, storage, and routes, not only the visible outer edge."],
];

export default function StarminerBeginnerGuidePage() {
 return (
 <StarminerArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Beginner Guide"
 heroImage={starminerImages.station}
 heroAlt="Starminer beginner guide station image"
 faqs={faqs}
 >
 <BlufBox title="First-Hour Rule">
 <p>
 <strong>Build a stable system before you build a huge one.</strong>{" "}
 For a first Starminer save, use Campaign, test small modules, stabilize
 mining and refining, leave power reserve, watch heat, and add defenses
 before pushing into bigger ships or new sectors. The{" "}
 <Link href="/games/starminer">Starminer guide hub</Link> links every
 follow-up once the first bottleneck appears.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2>First Hour Plan</h2>
 <ArticleImage
 src={starminerImages.station}
 alt="Starminer first hour starter station guide image"
 caption="The first hour should teach the loop: Campaign structure, compact station building, power reserve, mining, refining, heat control, and defense basics."
 />
 </section>
 <ActionTable rows={starminerFirstHourRows} />

 <section className="prose-game">
 <h2>Choose the Right First Mode</h2>
 <p>
 The official FAQ lists Campaign, Sandbox, and Survival. Campaign is
 the right first stop for most players because it gives missions that
 introduce mechanics and lore. Sandbox is where you go once you know
 what a healthy station looks like. Survival is where you test whether
 the design can keep functioning under enemy pressure.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mode</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Beginner value</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">When to use it</th>
 </tr>
 </thead>
 <tbody>
 {starminerModeRows.map(([mode, value, timing]) => (
 <tr key={mode} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{mode}</td>
 <td className="px-4 py-3 text-muted-foreground">{value}</td>
 <td className="px-4 py-3 text-muted-foreground">{timing}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Build Small, Then Diagnose</h2>
 <ArticleImage
 src={starminerImages.build}
 alt="Starminer compact modular construction beginner image"
 caption="Small builds are easier to diagnose: you can see whether the problem is power, storage, module placement, production, heat, or defense coverage."
 />
 <p>
 Starminer combines modular construction with power, heat, logistics,
 production, and crew systems. That makes the first base a diagnostic
 tool. If everything is compact, you can see where materials stop, what
 runs out of power, and which modules create too much exposure. If you
 build too wide too early, every later problem becomes harder to trace.
 </p>
 <p>
 Once the small layout is stable, continue into the{" "}
 <Link href="/games/starminer/ship-building">ship building guide</Link>
 . It explains why mass, thrust, tonnage, and power are design
 questions, not just stats to maximize.
 </p>
 </section>

 <section className="prose-game">
 <h2>When to Stop Expanding</h2>
 <ArticleImage
 src={starminerImages.mining}
 alt="Starminer mining loop beginner stop expanding image"
 caption="Expansion should stop whenever the current system can no longer power, move, refine, store, repair, or defend what it already has."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Warning sign</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Beginner response</th>
 </tr>
 </thead>
 <tbody>
 {stopRows.map(([warning, response]) => (
 <tr key={warning} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{warning}</td>
 <td className="px-4 py-3 text-muted-foreground">{response}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Next Guides After the First Hour</h2>
 <p>
 If materials are the bottleneck, go to{" "}
 <Link href="/games/starminer/mining-logistics">mining logistics</Link>
 . If ships feel heavy or underpowered, go to{" "}
 <Link href="/games/starminer/ship-building">ship building</Link>. If
 attacks are the problem, go to{" "}
 <Link href="/games/starminer/heat-aliens-defense">
 heat, aliens, and defense
 </Link>
 . If you are unsure whether Campaign, Sandbox, or Survival fits your
 next save, use the{" "}
 <Link href="/games/starminer/game-modes">game modes guide</Link>.
 </p>
 </section>
 </StarminerArticle>
 );
}
