import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { createSpacecraftMetadata, spacecraftImages } from "@/lib/spacecraft";

const title = "SpaceCraft Tech Tree Guide: Research Order, Best Upgrades & Blueprint Unlocks";
const description =
  "SpaceCraft tech tree and research guide covering optimal research order, best early unlocks, blueprint acquisition methods, Tech Point farming strategies, and technology specialization paths.";
const canonical = "/games/spacecraft/tech-tree";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.automation,
});

const faqs = [
  {
    question: "What should I research first in SpaceCraft?",
    answer:
      "Prioritize research that unlocks better Mining Lasers and Reactor Core upgrades first. These directly increase your resource income rate. Next, research Cargo Hold expansions and Engine Thrusters. Save cosmetic and specialized combat research for late game.",
  },
  {
    question: "How do I earn Tech Points?",
    answer:
      "Every first-time craft of a complex component grants Tech Points. Build one of everything you unlock — even items you do not plan to use — to maximize Tech Point income and accelerate your research speed. Additionally, completing faction missions, discovering new sectors, and achieving Corporation milestones grants bonus Tech Points.",
  },
  {
    question: "How do I unlock new blueprints?",
    answer:
      "Blueprints are unlocked through the tech tree by spending Tech Points on research nodes. Some rare blueprints are faction-exclusive and require Allied reputation or higher. Corporation-shared research allows members to pool Tech Points for expensive group unlocks.",
  },
  {
    question: "What is the fastest way to farm Tech Points?",
    answer:
      "Craft one of every new component you unlock, complete all available faction missions, explore uncharted sectors for discovery bonuses, and join an active Corporation that pools research contributions. Combined, these methods can double or triple your Tech Point income compared to passive play.",
  },
];

const researchPriority = [
  { step: "1", doThis: "Improved Mining Laser — faster extraction on all ore types.", why: "Directly increases your resource income rate. The single highest-ROI research in the entire tech tree. Research this before anything else." },
  { step: "2", doThis: "Reactor Core Efficiency I — reduces power draw of all installed modules by 10%.", why: "More efficient power means you can run more modules simultaneously. Essential for multi-role ships and automated outposts." },
  { step: "3", doThis: "Deuterium Extraction — unlocks the ability to mine and refine Deuterium.", why: "Deuterium is the bottleneck resource for Tier 2 propulsion. Unlocking it early gives you access to faster engines and FTL upgrades." },
  { step: "4", doThis: "Cargo Hold Expansion I — increases cargo capacity by 25%.", why: "Fewer trips back to station means more time mining. The compound effect over hours of gameplay is enormous." },
  { step: "5", doThis: "Advanced Thruster Design — unlocks Tier 2 engines with better thrust-to-power ratio.", why: "Faster travel between sectors and better ship maneuverability. Critical for trading and escaping dangerous situations." },
  { step: "6", doThis: "Assembler Efficiency I — reduces production time by 15%.", why: "Faster production means more output from the same factory infrastructure. Essential when you transition to automated manufacturing." },
  { step: "7", doThis: "Shield Generator Optimization — improves shield recharge rate by 20%.", why: "Survivability upgrade. Even without combat, environmental hazards in mid-game sectors require better shields." },
];

const searchIntentRows = [
  {
    query: "SpaceCraft research priority order",
    answer: "Mining Laser first, then Reactor Core, Deuterium Extraction, Cargo Expansion, Advanced Thrusters, Assembler Efficiency, Shield Optimization.",
    href: "#research-priority",
    label: "Priority",
  },
  {
    query: "SpaceCraft how to get Tech Points fast",
    answer: "Craft one of every component, complete faction missions, explore new sectors, and join a Corporation for pooled research.",
    href: "#tech-points",
    label: "Tech Points",
  },
  {
    query: "SpaceCraft best blueprints to unlock",
    answer: "Start with mining and power upgrades. Avoid cosmetic and combat research until the late game when Tech Points are abundant.",
    href: "#specialization",
    label: "Blueprints",
  },
];

const jumpLinks = [
  { href: "#research-priority", label: "Research order" },
  { href: "#tech-points", label: "Tech Points" },
  { href: "#specialization", label: "Specialization" },
  { href: "/games/spacecraft/ship-building", label: "Ship building" },
  { href: "/games/spacecraft/factory-automation", label: "Automation" },
  { href: "/games/spacecraft/mining-guide", label: "Mining" },
];

export default function SpacecraftTechTreePage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Tech Tree"
      heroImage={spacecraftImages.automation}
      heroAlt="SpaceCraft research and tech tree guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What should I research first in SpaceCraft?"
        answer="Prioritize research that unlocks better Mining Lasers and Reactor Core upgrades first. These directly increase your resource income rate. Next, research Cargo Hold expansions and Engine Thrusters. Save cosmetic and specialized combat research for late game."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Tech Point Rule">
        <p>
          <strong>Every first-time craft of a complex component grants Tech Points.</strong>{" "}
          Build one of everything you unlock — even items you do not plan to use — to maximize Tech Point income and accelerate your research speed.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2 id="research-priority">Early Game Research Priority</h2>
        <ArticleImage
          src={spacecraftImages.automation}
          alt="SpaceCraft tech tree research and upgrade priority"
          caption="Research order matters enormously in the early game. Prioritize income improvements before convenience or cosmetic upgrades."
        />
      </section>

      <ActionTable rows={researchPriority} />

      <section id="tech-points" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">How to Farm Tech Points Fast</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Tech Points are the research currency in SpaceCraft. The most efficient farming methods, ranked by TP per hour:
        </p>
        <ol className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground list-decimal pl-5">
          <li><strong>First-time crafting bonus</strong> — Every complex component you craft for the first time grants a one-time Tech Point bonus. Build one of every new item you unlock, even if you immediately scrap it. This is the fastest source of early Tech Points.</li>
          <li><strong>Faction missions</strong> — Mission board tasks grant Tech Points on completion. Prioritize "Research Assistance" and "Data Recovery" missions — they have the best TP-to-time ratio.</li>
          <li><strong>Sector discovery</strong> — Entering a star system for the first time grants a discovery bonus. Explore methodically — each new system is free Tech Points.</li>
          <li><strong>Corporation research pooling</strong> — Corporations can set shared research goals. All members contributing to the same node accelerates unlock speed. Join an active Corporation to benefit from pooled progress.</li>
          <li><strong>Market purchases</strong> — Buying complex components from the player market counts as acquisition, but crafting them yourself grants the bonus. Purchase only when crafting is impractical.</li>
        </ol>
      </section>

      <section id="specialization" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Technology Specialization Paths</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          The SpaceCraft tech tree branches into several specialization paths after the early game. Your specialization should align with your chosen playstyle:
        </p>
        <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
          <li><strong>Industrial Path:</strong> Focus on mining efficiency, assembler speed, refinery output, and drone capacity. Best for players who want to build automated production empires. Synergizes with the{" "}
            <Link href="/games/spacecraft/mining-guide" className="text-foreground underline">mining</Link> and{" "}
            <Link href="/games/spacecraft/factory-automation" className="text-foreground underline">automation</Link> gameplay loops.</li>
          <li><strong>Logistics Path:</strong> Focus on engine speed, FTL range, cargo capacity, and fuel efficiency. Best for traders and explorers who travel frequently. Synergizes with the{" "}
            <Link href="/games/spacecraft/trading-economy" className="text-foreground underline">trading</Link> gameplay loop.</li>
          <li><strong>Combat Path (Future Content):</strong> Focus on weapon damage, shield strength, armor plating, and targeting systems. Currently theoretical — invest points here only after combat is implemented.</li>
          <li><strong>Corporation Path:</strong> Focus on shared research efficiency, corp station upgrades, and fleet coordination bonuses. Best for players in leadership roles within active Corporations.</li>
        </ul>
      </section>
    </SpacecraftArticle>
  );
}
