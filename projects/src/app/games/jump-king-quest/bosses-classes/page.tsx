import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { JumpKingQuestArticle } from "@/components/jump-king-quest-article";
import {
 createJumpKingQuestMetadata,
 jumpKingQuestBossComparisonRows,
 jumpKingQuestBossRows,
 jumpKingQuestImages,
} from "@/lib/jump-king-quest";

const title = "JUMP KING QUEST All Bosses & Best Class Guide: Attack Patterns & Builds";
const description =
 "JUMP KING QUEST boss fights and best starting class guide. Attack patterns, openings, Redfin customization tips, and build recommendations for climbing, combat, and survivability.";
const canonical = "/games/jump-king-quest/bosses-classes";

export const metadata = createJumpKingQuestMetadata({
 title,
 description,
 canonical,
 image: jumpKingQuestImages.combat,
});

const faqs = [
 {
 question: "How do boss fights work in JUMP KING QUEST?",
 answer:
 "Unlike the original Jump King, QUEST adds combat encounters with bosses. You fight while managing platforming positioning — falling during a boss fight means climbing back up while the boss recovers. Each boss has distinct attack patterns and phase transitions.",
 },
 {
 question: "What's the best starting class or build?",
 answer:
 "Balanced is recommended for your first run. Pure combat builds get stuck on platforming sections. Pure speed builds die to enemies. Redfin customization lets you adjust — lean toward balanced stats until you know which sections give you trouble, then specialize.",
 },
 {
 question: "How does Redfin customization work?",
 answer:
 "Steam describes the Redfin as customizable with progression choices that affect how you climb, fight, and survive. Your stat choices determine whether you are nimble or tanky, aggressive or cautious. There are no fixed classes — treat it as a build direction.",
 },
];

const searchIntentRows = [
 {
 query: "Jump King Quest boss guide",
 answer: "Four major bosses: Grimwarden Kael, The Phantom Sentry, Soulrend Queen Vex, and The Tower Warden. Each has distinct attack patterns and class recommendations.",
 href: "#bosses",
 label: "Bosses",
 },
 {
 query: "Jump King Quest best class",
 answer: "Balanced is the safest first-run pick. Specialize into Climber, Brawler, or Survivor once you identify your bottleneck — platforming, combat damage, or survivability.",
 href: "#classes",
 label: "Classes",
 },
 {
 query: "Jump King Quest Redfin build",
 answer: "Redfin customization covers climbing speed, combat power, and survivability. Balanced stats recommended for first playthrough. Respeccing is available once you know the content.",
 href: "#redfin",
 label: "Build",
 },
];

const jumpLinks = [
 { href: "#bosses", label: "Bosses" },
 { href: "#comparison", label: "Boss comparison" },
 { href: "#classes", label: "Best class" },
 { href: "/games/jump-king-quest/phantom-tower", label: "Phantom Tower" },
 { href: "/games/jump-king-quest/beginner-guide", label: "Beginner guide" },
];

export default function JumpKingQuestBossesPage() {
 return (
 <JumpKingQuestArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Bosses & Classes"
 heroImage={jumpKingQuestImages.combat}
 heroAlt="JUMP KING QUEST combat encounter with boss and platforming"
 faqs={faqs}
 showSources={false}
 >
 <BlufBox title="BLUF">
 JUMP KING QUEST has four major bosses spread across the main climb and
 Phantom Tower. Each boss has distinct attack patterns, phase transitions,
 and recommended class approaches. For your first run, use a Balanced Redfin
 build — it handles both platforming and combat without hard-walling on
 either. Grimwarden Kael teaches the core boss rhythm. The Tower Warden is
 the final test on floor 10.
 </BlufBox>

 <SearchAnswerPanel
 title="Bosses & Best Class Guide"
 answer="JUMP KING QUEST has four major bosses across the main climb and Phantom Tower. Each boss has specific attack patterns, phase transitions, and recommended class approaches."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <section id="bosses">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Boss Fights</h2>
 <ActionTable rows={jumpKingQuestBossRows} />
 </section>

 <section id="comparison" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Boss Comparison Table</h2>
 <div className="overflow-x-auto">
 <table className="min-w-full border-collapse text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-bold text-foreground">Boss</th>
 <th className="px-4 py-3 text-left font-bold text-foreground">Location</th>
 <th className="px-4 py-3 text-left font-bold text-foreground">Attack Pattern</th>
 <th className="px-4 py-3 text-left font-bold text-foreground">Strategy</th>
 <th className="px-4 py-3 text-left font-bold text-foreground">Best Class</th>
 </tr>
 </thead>
 <tbody>
 {jumpKingQuestBossComparisonRows.map((row, i) => (
 <tr key={i} className="border-b border-border hover:bg-mist/50">
 <td className="px-4 py-3 font-semibold text-foreground">{row.boss}</td>
 <td className="px-4 py-3 text-muted-foreground">{row.location}</td>
 <td className="px-4 py-3 text-muted-foreground">{row.attack}</td>
 <td className="px-4 py-3 text-muted-foreground">{row.strategy}</td>
 <td className="px-4 py-3">
 <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{row.class}</span>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section id="classes" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Best Starting Builds</h2>
 <div className="grid gap-4 sm:grid-cols-2">
 {[
 {
 title: "Balanced (Recommended first run)",
 stats: "Even split between climbing speed, combat power, survivability",
 desc: "You do not know which sections will kill you yet. A balanced Redfin does not excel at anything but does not hard-wall on anything either. Adjust after you see what is killing you. Best overall pick for first playthrough.",
 },
 {
 title: "Climber (Speed focus)",
 stats: "Prioritize climbing speed and jump precision",
 desc: "For players confident in combat. You will clear platforming sections fast but die quickly to enemies. Good for a second run when you know enemy positions. Recommended for Phantom Sentry.",
 },
 {
 title: "Brawler (Combat focus)",
 stats: "Prioritize damage output and health",
 desc: "Bosses die faster but you struggle on technical platforming sections. Only pick if combat is your bottleneck, not climbing. Recommended for Grimwarden Kael.",
 },
 {
 title: "Survivor (Tank focus)",
 stats: "Prioritize health, fall recovery, and defensive buffs",
 desc: "Forgiving build for learning the game. You survive mistakes that kill other builds. Good for co-op support role and learning Soulrend Queen Vex and The Tower Warden. Recommended for first Phantom Tower clear.",
 },
 ].map((build) => (
 <div key={build.title} className="rounded-lg border border-border bg-mist p-5">
 <h3 className="text-base font-bold text-foreground">{build.title}</h3>
 <p className="mt-1 text-xs text-foreground">{build.stats}</p>
 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{build.desc}</p>
 </div>
 ))}
 </div>
 </section>
 </JumpKingQuestArticle>
 );
}
