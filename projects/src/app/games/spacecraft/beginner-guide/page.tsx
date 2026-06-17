import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { createSpacecraftMetadata, spacecraftImages } from "@/lib/spacecraft";

const title = "SpaceCraft Beginner Guide: First Hour, Ship Building, Mining & Survival Tips";
const description =
  "SpaceCraft beginner guide covering the first hour: starter ship construction, early mining priorities, resource management, faction safety, power grid allocation, and common mistakes to avoid.";
const canonical = "/games/spacecraft/beginner-guide";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.shipBuilding,
});

const faqs = [
  {
    question: "What should I do in my first hour of SpaceCraft?",
    answer:
      "Complete the tutorial, mine basic ores (iron, copper, quartz), build a simple ship with Reactor Core, Thrusters, and Mining Laser, and stay within 3 sectors of the starter zone. Do not venture into high-value zones — endgame hazards destroy starter shields instantly.",
  },
  {
    question: "What is the most important beginner rule?",
    answer:
      "Manually allocate your power grid. Auto-Balance is a trap. In dangerous situations, set 70% power to Shield Recharge and 30% to Weapons. Manual allocation doubles your survivability.",
  },
  {
    question: "What resources should I prioritize early?",
    answer:
      "Iron (from Ferric Stone), Copper (from Cupric Stone), and Quartz (from Grey Quartz) for basic crafting. Prioritize Deuterium extraction as soon as possible — it is the bottleneck resource for all Tier 2 propulsion technology.",
  },
  {
    question: "Should I join a Corporation as a beginner?",
    answer:
      "Yes, joining an established Corporation provides safe passage through their territory, access to shared storage and stations, and experienced players who can answer questions. Look for beginner-friendly Corporations in the official Discord recruitment channel.",
  },
];

const firstHourRows = [
  { step: "1", doThis: "Complete the full tutorial sequence. Do not skip any tutorial prompts — they explain core systems that are not documented elsewhere.", why: "The tutorial teaches power grid management, basic mining, and ship assembly. Skipping it leaves critical gaps in your understanding." },
  { step: "2", doThis: "Mine Ferric Stone (Iron), Cupric Stone (Copper), and Grey Quartz deposits in the starter sector. Use the Simple Mining Laser — it has unlimited durability.", why: "These three basic ores are needed for every early-game craft recipe. Stockpile at least 200 units of each before building." },
  { step: "3", doThis: "Build a basic ship frame, then install a Reactor Core, two Thrusters, and a Simple Mining Laser. Do not add weapons yet — they drain power you need for mining.", why: "A functional mining ship is your first major milestone. Keep it simple: frame + reactor + thrusters + mining laser = operational vessel." },
  { step: "4", doThis: "Manually allocate your power grid: 60% to Mining Laser, 30% to Thrusters, 10% to Shield Recharge. Never use Auto-Balance — it makes wasteful allocations.", why: "Auto-Balance distributes power evenly, which means critical systems get underpowered. Manual allocation ensures your mining laser operates at full efficiency." },
  { step: "5", doThis: "Identify the nearest faction-controlled sector. Fly there and dock at the faction station to register. This grants safe passage and trading access.", why: "Faction registration provides protection in their territory. Unregistered players in faction space may be flagged and denied station services." },
  { step: "6", doThis: "Set up a small storage depot at the faction station. Deposit all excess ore — your starter ship has minimal cargo space.", why: "Storage depots prevent cargo overflow. Mining with a full hold wastes time and resources. Deposit frequently." },
  { step: "7", doThis: "Research Deuterium extraction technology at the faction station research terminal. This is your first Tech Point spend.", why: "Deuterium is the gatekeeper resource for Tier 2 propulsion. Unlocking it early accelerates your entire progression curve." },
];

const mistakeRows = [
  ["Using Auto-Balance for power", "Systems get equal but suboptimal power", "Manually allocate: 60-70% to your primary activity (mining or shields), split the rest"],
  ["Venturing into high-value zones early", "Endgame hazards destroy starter shields instantly", "Stay within 3 sectors of the starter zone for your first 5-10 hours"],
  ["Building a combat ship too early", "Weapons drain power you need for mining and shields", "Start with a pure mining vessel. Combat systems are not even in the game yet"],
  ["Ignoring faction registration", "No safe passage, no station access in faction territory", "Register with a faction as soon as you leave the tutorial zone"],
  ["Hoarding resources instead of selling", "Cargo overflow, missed credit income, slower progression", "Sell excess ore at stations regularly. Keep a 200-unit buffer of each basic ore"],
  ["Skipping the tutorial", "Missing knowledge of power grid, mining, and ship assembly", "Complete every tutorial prompt. The game does not re-explain these systems"],
  ["Overbuilding your first ship", "Wasted resources on modules you cannot power or use yet", "Start with reactor + thrusters + mining laser. Add modules one at a time as you understand power draw"],
];

const searchIntentRows = [
  {
    query: "SpaceCraft beginner guide",
    answer: "Complete the tutorial, mine basic ores, build a simple mining ship, manually allocate power, and register with a faction.",
    href: "#first-hour",
    label: "Start",
  },
  {
    query: "SpaceCraft first ship build",
    answer: "Build a basic frame with Reactor Core, two Thrusters, and a Simple Mining Laser. Manual power allocation is essential.",
    href: "#first-hour",
    label: "Ship",
  },
  {
    query: "SpaceCraft common mistakes",
    answer: "Auto-Balance power, going to high-value zones too early, building combat ships, ignoring factions, and hoarding resources.",
    href: "#mistakes",
    label: "Avoid",
  },
  {
    query: "SpaceCraft power management",
    answer: "Never use Auto-Balance. Manually allocate 60-70% to your primary activity. In combat situations, 70% shields, 30% weapons.",
    href: "#first-hour",
    label: "Power",
  },
];

const jumpLinks = [
  { href: "#first-hour", label: "First hour" },
  { href: "#mistakes", label: "Mistakes" },
  { href: "#first-upgrades", label: "Upgrades" },
  { href: "/games/spacecraft/ship-building", label: "Ship building" },
  { href: "/games/spacecraft/mining-guide", label: "Mining" },
  { href: "/games/spacecraft/factory-automation", label: "Automation" },
];

export default function SpacecraftBeginnerGuidePage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Beginner Guide"
      heroImage={spacecraftImages.shipBuilding}
      heroAlt="SpaceCraft beginner guide for new players"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="How do I start in SpaceCraft?"
        answer="Complete the tutorial first. Your first hour priorities: mine basic ores (iron, copper, quartz), build a simple ship with a Reactor Core, Thrusters, and Mining Laser, stay within 3 sectors of the starter zone, and prioritize Deuterium for Tier 2 propulsion tech. Do NOT venture into high-value zones early — endgame hazards destroy starter shields instantly."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Beginner Rule One">
        <p>
          <strong>The single most important beginner rule in SpaceCraft: manually allocate your power grid.</strong>{" "}
          Auto-Balance is a trap. In combat, set 70% power to Shield Recharge and 30% to Weapons. Manual allocation doubles your survivability.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2 id="first-hour">First Hour Priorities</h2>
        <ArticleImage
          src={spacecraftImages.mining}
          alt="SpaceCraft early game mining and ship building"
          caption="Your first hour in SpaceCraft should focus on the tutorial, basic resource gathering, and constructing a functional mining vessel. Resist the urge to explore dangerous sectors or build complex ships before you understand the power grid."
        />
      </section>

      <ActionTable rows={firstHourRows} />

      <section className="prose-game">
        <h2 id="mistakes">Common Beginner Mistakes</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          These are the mistakes that new SpaceCraft players make most frequently. Each one can cost you hours of progress or force a restart. Avoiding them from the start puts you significantly ahead of the average new player.
        </p>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-mist">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Mistake</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Why it hurts</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Correct approach</th>
            </tr>
          </thead>
          <tbody>
            {mistakeRows.map(([mistake, hurt, correct]) => (
              <tr key={mistake} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{mistake}</td>
                <td className="px-4 py-3 text-muted-foreground">{hurt}</td>
                <td className="px-4 py-3 text-muted-foreground">{correct}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="first-upgrades">Critical First Upgrades</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Spend your first Tech Points on research that directly increases your resource income. The optimal order: (1) Improved Mining Laser — faster extraction pays for itself immediately; (2) Deuterium Extraction — unlocks Tier 2 propulsion and opens new sectors; (3) Cargo Hold Expansion — reduces trips back to station; (4) Reactor Core Efficiency — supports more simultaneous modules.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          For detailed upgrade paths, see our{" "}
          <Link href="/games/spacecraft/tech-tree" className="text-foreground underline">tech tree guide</Link>.
          For ship design after your starter vessel, see our{" "}
          <Link href="/games/spacecraft/ship-building" className="text-foreground underline">ship building guide</Link>.
          When you are ready to scale up resource income, dive into our{" "}
          <Link href="/games/spacecraft/mining-guide" className="text-foreground underline">mining guide</Link> and{" "}
          <Link href="/games/spacecraft/factory-automation" className="text-foreground underline">factory automation guide</Link>.
        </p>
      </section>
    </SpacecraftArticle>
  );
}
