import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { JumpKingQuestArticle } from "@/components/jump-king-quest-article";
import {
 createJumpKingQuestMetadata,
 jumpKingQuestEnemyRows,
 jumpKingQuestFloorRows,
 jumpKingQuestPhantomRows,
 jumpKingQuestImages,
} from "@/lib/jump-king-quest";

const title = "JUMP KING QUEST Phantom Tower Guide: All Floors, Enemies, Bosses & Rewards";
const description =
 "Complete Phantom Tower guide for JUMP KING QUEST. Floor-by-floor layout, enemy types, boss fights, trap strategies, co-op tips, and how to prepare your Redfin for the 1.0 endgame challenge.";
const canonical = "/games/jump-king-quest/phantom-tower";

export const metadata = createJumpKingQuestMetadata({
 title,
 description,
 canonical,
 image: jumpKingQuestImages.phantom,
});

const faqs = [
 {
 question: "What is the Phantom Tower in JUMP KING QUEST?",
 answer:
 "The 1.0 endgame challenge, added with the Phantom Update on May 25, 2026. A 10-floor gauntlet of platforming, combat, and bosses. Death resets you to the current floor entrance — not the bottom. Each floor has distinct enemies, traps, and a unique theme.",
 },
 {
 question: "How do I prepare for the Phantom Tower?",
 answer:
 "Max your Redfin's core stats. Bring a build you know well — the Tower does not forgive experimentation. Practice platforming under combat pressure in earlier areas. Survivor or Balanced builds are recommended for first clear attempts.",
 },
 {
 question: "What enemies are in the Phantom Tower?",
 answer:
 "Nine enemy types including Skeletal Sentries, Wraith Archers, Phantom Knights, Shadow Stalkers, and more. Each has a specific counter strategy — see the enemy guide below for details.",
 },
 {
 question: "Can I do the Phantom Tower in co-op?",
 answer:
 "Yes, online co-op is supported. Assign a scout and a cover player. Communication matters more than usual — a mistimed jump in a tight section pulls both players down. Co-op is recommended for floors 6-10.",
 },
];

const searchIntentRows = [
 {
 query: "Jump King Quest Phantom Tower guide",
 answer: "10-floor endgame challenge from the 1.0 Phantom Update. Prepare with maxed stats. Floor-by-floor guide covers enemies, traps, and strategies for all 10 floors.",
 href: "#phantom-tower",
 label: "Tower",
 },
 {
 query: "Jump King Quest Phantom Tower floors",
 answer: "10 floors: Crumbling Gate, Whispering Corridor, Frozen Ascent, The Armory, Kael rematch, Looming Depths, Flame Crucible, Soulrend Queen Vex, Unstable Spire, Tower Warden. Each has unique enemies and traps.",
 href: "#floors",
 label: "Floors",
 },
 {
 query: "Jump King Quest Phantom Tower enemies",
 answer: "Nine enemy types from Skeletal Sentries to Gravity Mages. Each has specific counter strategies detailed in the enemy guide.",
 href: "#enemies",
 label: "Enemies",
 },
 {
 query: "Jump King Quest Phantom Tower co-op",
 answer: "Online co-op works in the Tower. Scout + cover roles. Communication is critical. Co-op recommended for floors 6-10.",
 href: "#coop",
 label: "Co-op",
 },
];

const jumpLinks = [
 { href: "#phantom-tower", label: "Overview" },
 { href: "#floors", label: "Floor-by-floor" },
 { href: "#enemies", label: "Enemy guide" },
 { href: "#preparation", label: "Preparation" },
 { href: "#coop", label: "Co-op tips" },
 { href: "/games/jump-king-quest/bosses-classes", label: "Bosses & classes" },
];

export default function JumpKingQuestPhantomPage() {
 return (
 <JumpKingQuestArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Phantom Tower"
 heroImage={jumpKingQuestImages.phantom}
 heroAlt="JUMP KING QUEST Phantom Tower endgame platforming challenge"
 faqs={faqs}
 showSources={false}
 >
 <BlufBox title="BLUF">
 The Phantom Tower is the 1.0 endgame: 10 floors of escalating difficulty
 with unique enemies, traps, and four boss encounters. Death resets to the
 floor entrance — you do not start over from the bottom. Max your Redfin
 stats first. Survivor or Balanced build recommended for the first clear.
 Floors 6-10 are significantly harder; consider co-op for these.
 </BlufBox>

 <SearchAnswerPanel
 title="Phantom Tower Guide"
 answer="10-floor endgame challenge. Floor-by-floor guide covers enemies, traps, strategies. Nine enemy types with specific counters. Co-op recommended for floors 6-10."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <section id="phantom-tower">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Phantom Tower Overview</h2>
 <ActionTable rows={jumpKingQuestPhantomRows} />
 </section>

 <section id="floors" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Floor-by-Floor Guide</h2>
 <div className="space-y-4">
 {jumpKingQuestFloorRows.map((floor, i) => (
 <details key={i} className="group rounded-lg border border-border bg-mist">
 <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-base font-bold text-foreground">
 <span>{floor.floor}</span>
 <span className="text-xs text-muted-foreground group-open:rotate-180 transition-transform">&#9660;</span>
 </summary>
 <div className="border-t border-border px-5 py-4 space-y-3">
 <div>
 <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Enemies</h4>
 <p className="mt-1 text-sm text-foreground">{floor.enemies}</p>
 </div>
 <div>
 <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Traps</h4>
 <p className="mt-1 text-sm text-foreground">{floor.traps}</p>
 </div>
 <div>
 <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Strategy</h4>
 <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{floor.strat}</p>
 </div>
 </div>
 </details>
 ))}
 </div>
 </section>

 <section id="enemies" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Enemy Types &amp; Counters</h2>
 <div className="overflow-x-auto">
 <table className="min-w-full border-collapse text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-bold text-foreground">Enemy</th>
 <th className="px-4 py-3 text-left font-bold text-foreground">Behavior</th>
 <th className="px-4 py-3 text-left font-bold text-foreground">Counter</th>
 </tr>
 </thead>
 <tbody>
 {jumpKingQuestEnemyRows.map((row, i) => (
 <tr key={i} className="border-b border-border hover:bg-mist/50">
 <td className="px-4 py-3 font-semibold text-foreground">{row.enemy}</td>
 <td className="px-4 py-3 text-muted-foreground">{row.behavior}</td>
 <td className="px-4 py-3 text-muted-foreground">{row.counter}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section id="preparation" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">How to Prepare</h2>
 <div className="grid gap-4 sm:grid-cols-2">
 {[
 { title: "Max your Redfin", desc: "Core stats matter more in the Tower than anywhere else. If you have been spreading points thin, respec before entering. Climbing speed and survivability are the priority." },
 { title: "Practice combat + platforming", desc: "The Tower combines both. If you have been avoiding fights during climbs, spend time in earlier areas mixing the two. You cannot skip combat in the Tower." },
 { title: "Learn from deaths", desc: "Each floor resets at its entrance. Use this. Study the layout, enemy positions, and trap triggers. Do not rush — the Tower rewards patience." },
 { title: "Bring a familiar build", desc: "Not the time to experiment. Use the Redfin build you have been running all game. The Tower punishes unfamiliar movement patterns." },
 ].map((item) => (
 <div key={item.title} className="rounded-lg border border-border bg-white p-5">
 <h3 className="text-base font-bold text-foreground">{item.title}</h3>
 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>

 <section id="coop" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Co-op in the Tower</h2>
 <p className="mb-4 leading-relaxed text-muted-foreground">
 Online co-op changes how the Tower plays. Two players means two hitboxes
 on tight platforms, two sets of jump timing, and two people who can panic
 and drag each other down. But it also means someone can scout ahead while
 the other covers from behind. Co-op is strongly recommended for floors 6
 through 10.
 </p>
 <div className="grid gap-3">
 {[
 "Scout + Cover: one player moves ahead, the other watches for enemies and calls out traps.",
 "Call your jumps. A surprise leap in co-op can knock your partner off a ledge.",
 "If one player falls, the other stays put. Do not chase — wait for them to climb back.",
 "Assign roles before entering: who leads, who follows, who handles combat.",
 "On boss floors, assign one player to handle adds while the other focuses the boss.",
 ].map((tip, i) => (
 <div key={i} className="flex gap-3 rounded-md border border-border bg-mist p-3">
 <span className="mt-0.5 text-xs font-bold text-foreground">0{i + 1}</span>
 <p className="text-sm leading-relaxed text-muted-foreground">{tip}</p>
 </div>
 ))}
 </div>
 </section>
 </JumpKingQuestArticle>
 );
}
