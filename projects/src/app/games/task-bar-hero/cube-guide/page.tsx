import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { CubeEfficiencyTable } from "@/components/task-bar-hero-charts";
import { TaskBarHeroArticle } from "@/components/task-bar-hero-article";
import {
 createTaskBarHeroMetadata,
 taskBarHeroCubeRows,
 taskBarHeroCubeLevels,
 taskBarHeroImages,
 taskBarHeroUrls,
} from "@/lib/task-bar-hero";

const title = "TBH: Task Bar Hero Cube Guide";
const description =
 "Learn how the Hero-dric Cube works in TBH: 8 functions, Synthesis vs Alchemy XP, 1-14/15/20 leveling strategy, material routes, and what not to waste.";
const canonical = "/games/task-bar-hero/cube-guide";

export const metadata = createTaskBarHeroMetadata({
 title,
 description,
 canonical,
 image: taskBarHeroImages.material,
});

const faqs = [
 {
  question: "What does the Cube do in TBH?",
  answer:
   "The Hero-dric Cube is an enhancement system with 8 functions: Synthesis, Alchemy, Crafting, Decoration, Engraving, Inscription, Extraction, and Offering. It unlocks at player level 10 after the Digital Awakening quest.",
 },
 {
  question: "Why is my Cube level stuck?",
  answer:
   "Most Cube stalls come from using the wrong operation. Synthesis gives 5 XP per material. Alchemy gives only 3 XP per material — a 40% loss. If you have been using Alchemy early, that is probably why progress feels slow.",
 },
 {
  question: "Should I use Synthesis or Alchemy?",
  answer:
   "Synthesis first, always. Bulk-synthesize Basic Shards until Cube 15. At 15, XP multipliers kick in retroactively for higher-tier materials. Start Alchemy around Cube 20, but keep it under 20% of your total spend.",
 },
 {
  question: "How many materials does the Cube have?",
  answer:
   "121+ materials across 6+ categories: Decoration (36 gems), Engraving (33 monster parts), Crafting (22 metals), Inscription (10 scroll tiers), Offering (10 anniversary coins), Soulstones (10 boss drops). Rarity runs from COMMON to COSMIC (10 tiers).",
 },
 {
  question: "Where can I check exact Cube and material data?",
  answer:
   "Use the Cube page, item database, and materials guide on Task Bar Hero Hub Wiki for exact lookup. This guide covers what to spend and when.",
 },
];

const searchIntentRows = [
 {
  query: "TBH cube guide",
  answer: "Start with the 8-function table, then check XP efficiency, leveling route, and waste cases.",
  href: "#cube-functions",
  label: "Functions",
 },
 {
  query: "Task Bar Hero cube leveling",
  answer: "Synthesis at 5 XP/material until Cube 15. At 15, XP multiplier activates. Alchemy (3 XP/material) only after 20.",
  href: "#leveling",
  label: "Leveling",
 },
 {
  query: "Task Bar Hero synthesis crafting alchemy",
  answer: "Synthesis = XP + gear cores. Crafting = targeted equipment. Alchemy = potions (low XP, delay until 20).",
  href: "#operation-guide",
  label: "Operations",
 },
 {
  query: "Task Bar Hero materials",
  answer: "Look up exact material use in the Wiki item database before converting or crafting rare items.",
  href: taskBarHeroUrls.items,
  label: "Database",
 },
];

const jumpLinks = [
 { href: "#cube-functions", label: "8 functions" },
 { href: "#leveling", label: "Leveling route" },
 { href: "#operation-guide", label: "Operation guide" },
 { href: "#waste-cases", label: "Mistakes" },
];

const wasteRows = [
 ["Converting rare materials without checking", "Open the item database first. Some materials (Void Essence, Cosmic Shards) have multiple uses across different operations."],
 ["Crafting for a bench hero", "Active progression heroes get the first controlled investments. Bench gear can wait."],
 ["Burning Stellar Rubies before Cube 15", "At Cube 15, XP multipliers apply retroactively to high-tier materials. Burning them early loses thousands of potential XP (~40 hours of grind)."],
 ["Alchemy before Cube 15", "Alchemy gives 3 XP/material vs Synthesis at 5 XP/material. That is 40% less XP per material. Waiting until Cube 20 costs you nothing."],
 ["Changing too many things at once", "Spend, test, compare. If you change gear, Cube, skills, and runes together, you will not know what worked."],
] as const;

export default function TaskBarHeroCubeGuidePage() {
 return (
  <TaskBarHeroArticle
   title={title}
   description={description}
   canonical={canonical}
   label="Cube Guide"
   heroImage={taskBarHeroImages.material}
   heroAlt="TBH Task Bar Hero Cube material icon"
   faqs={faqs}
  >
   <SearchAnswerPanel
    title="How does the Hero-dric Cube actually work?"
    answer="The Cube has 8 functions, but only a few matter before mid-game. Synthesis is your primary XP source (5 XP/material). Alchemy is a trap early on (3 XP/material). Crafting handles targeted gear. Decoration, Engraving, Inscription, Extraction, and Offering are mid-to-late game systems. Do not open every menu and spend everything."
    intentRows={searchIntentRows}
    jumpLinks={jumpLinks}
   />

   <BlufBox title="Cube rule">
    <p>
     <strong>Synthesis until 15. Save rares until 15. Ignore Alchemy until 20.</strong>
     That is the shortest path to a Cube that carries your account instead of dragging it.
    </p>
   </BlufBox>

   <section id="cube-functions" className="prose-game">
    <h2>Cube's 8 Functions (and When They Matter)</h2>
    <ArticleImage
     src={taskBarHeroImages.material}
     alt="TBH Cube material types — 121+ materials across 6+ categories"
     caption="The Hero-dric Cube has 8 functions and 121+ materials. The right question is not 'what can I do?' but 'what should I do right now?'"
    />
    <p>
     The Hero-dric Cube is not one system. It is eight, and they do very different
     things. A player who opens the Cube menu and sees Synthesis, Alchemy, Crafting,
     Decoration, Engraving, Inscription, Extraction, and Offering all at once often
     spends materials on the wrong operation. The result: slow Cube levels, weak
     gear, and a stalled account.
    </p>
    <p>
     The fix is simple: ignore 5 of the 8 functions until mid-game. Focus on
     Synthesis and Crafting. Leave Decoration, Engraving, Inscription, Extraction,
     and Offering for when you have materials to spare and gear worth enhancing.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Function</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">What it does</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">When to use</th>
      </tr>
     </thead>
     <tbody>
      {taskBarHeroCubeRows.map(([func, does, when]) => (
       <tr key={func} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{func}</td>
        <td className="px-4 py-3 text-muted-foreground">{does}</td>
        <td className="px-4 py-3 text-muted-foreground">{when}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <CubeEfficiencyTable />

   <section id="leveling" className="prose-game">
    <h2>Cube Leveling Route</h2>
    <p>
     Cube levelling is simple when you know the milestones. Before Cube 15,
     your only job is to feed Synthesis with Basic Shards. At ~4,500 XP per
     hour, you reach Cube 15 in about 11 hours of active play. That is where
     the game changes: XP multipliers kick in retroactively for high-tier
     materials, so every Stellar Ruby and rare gem you saved starts paying
     back.
    </p>
    <p>
     If you burned your rare materials before 15, you lose about 40 hours of
     mid-game grind. That is not an exaggeration — the math is straightforward.
     A saved Stellar Ruby used after 15 generates thousands more XP than the
     same Ruby used at level 5.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Cube level</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Strategy</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Milestone</th>
      </tr>
     </thead>
     <tbody>
      {taskBarHeroCubeLevels.map(({ level, strategy, milestone }) => (
       <tr key={level} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{level}</td>
        <td className="px-4 py-3 text-muted-foreground">{strategy}</td>
        <td className="px-4 py-3 text-muted-foreground">{milestone}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section id="operation-guide" className="prose-game">
    <h2>Operation Guide: What Each Function Is Actually For</h2>
    <ArticleImage
     src={taskBarHeroImages.sword}
     alt="TBH gear and material management — what to craft and when"
     caption="Crafting paths follow a material ladder: Wood → Copper → Bronze → Iron → Silver → Gold → Stardust/Void Iron → Bloodstone/Thunderstone. Know where your materials sit on that ladder before spending."
    />

    <h3>Synthesis — Your Main XP Engine</h3>
    <p>
     Synthesis combines materials into permanent upgrade cores. The simplest
     recipe: 10x Basic Shard = Tier 1 Core = 50 XP (5 XP per material). This
     is the most efficient XP source in the game. Keep at least 100 basic gems
     in your inventory at all times so the offline crafting queue does not stall
     when it runs out of material. Synthesis stays relevant even after Cube 15.
    </p>

    <h3>Crafting — Targeted Gear Upgrades</h3>
    <p>
     Crafting uses base materials along a known rarity ladder: wood, stone,
     leather → copper nuggets → bronze ingots → iron ingots → silver ingots →
     gold ingots → stardust ingots / void iron → bloodstone / thunderstone.
     Each tier unlocks stronger equipment. Craft when you know exactly what
     the active hero needs. Do not craft for bench heroes.
    </p>

    <h3>Alchemy — Delay Until 20</h3>
    <p>
     Alchemy converts materials into temporary consumables (potions). It gives
     3 XP per material vs Synthesis at 5 XP. That 40% gap compounds over
     hundreds of materials. At Cube 20, start with a 80/20 split (Synthesis/
     Alchemy). Never go above 20% Alchemy — the XP loss is not worth the
     temporary potion effects.
    </p>

    <h3>Decoration, Engraving, Inscription — Mid-to-Late Game</h3>
    <p>
     Decoration: 36 gem types (ruby, sapphire, topaz, emerald, amethyst) go
     into gear sockets for stat bonuses. Engraving: 33 monster materials
     (goblin hide, skeleton bone, slime jelly) inscribe rune-like effects.
     Inscription: 10 scroll tiers from Common to Cosmic apply special affixes.
     None of these matter before you have good gear to socket. Do not rush them.
    </p>
   </section>

   <section id="waste-cases" className="prose-game">
    <h2>Common Cube Mistakes</h2>
    <p>
     Cube mistakes usually come from opening every menu and trying everything
     at once. The player sees materials piling up, a craft option, a synthesis
     path, and an alchemy recipe — and wants to turn them into progress
     immediately. Sometimes that works. Usually it consumes the exact input
     needed for the next real upgrade.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Mistake</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Better rule</th>
      </tr>
     </thead>
     <tbody>
      {wasteRows.map(([mistake, fix]) => (
       <tr key={mistake} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{mistake}</td>
        <td className="px-4 py-3 text-muted-foreground">{fix}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section className="prose-game">
    <h2>What to Read After Cube</h2>
    <p>
     If Cube changes help but a boss still blocks progress, move to the{" "}
     <Link href="/games/task-bar-hero/act-2-10-act-3-10-guide">
      Act 2-10 and Act 3-10 guide
     </Link>
     . If the issue is which hero deserves materials, read{" "}
     <Link href="/games/task-bar-hero/heroes-builds">heroes and builds</Link>.
     If you are still in the first hour, return to the{" "}
     <Link href="/games/task-bar-hero/beginner-guide">beginner guide</Link>.
    </p>
   </section>
  </TaskBarHeroArticle>
 );
}
