import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { StarminerArticle } from "@/components/starminer-article";
import { ArticleImage } from "@/components/article-media";
import {
  createStarminerMetadata,
  starminerTechRows,
  starminerImages,
} from "@/lib/starminer";

const title = "Starminer Tech Tree Guide: Research Lab & Best Unlock Order";
const description =
  "Starminer tech tree and research guide: Research Lab setup, best unlock order, mining, energy, industry, weapons, fleet, leveling fast, and priority modules.";
const canonical = "/games/starminer/tech-tree-research";

export const metadata = createStarminerMetadata({
  title,
  description,
  canonical,
  image: starminerImages.officialBuild,
});

const faqs = [
  {
    question: "What is the best Starminer tech tree unlock order?",
    answer:
      "Prioritize Mining first, then Energy, then Industry. Add Weapons when heat attracts attacks, and delay Fleet or Megastructures until your income and power base are stable.",
  },
  {
    question: "How does research work in Starminer?",
    answer:
      "Research requires credits and a Research Lab. Build a Research Lab (100 Iron, 50 Silicones, 10 Cobalt, 500 Energy), assign a worker, and it generates research points passively. Spend credits in the Operations Interface  to Research tab to unlock modules across 6 categories.",
  },
  {
    question: "What should I research first in Starminer?",
    answer:
      "Mining modules first (T2 Mining Lasers, Improved Smelters), then Energy (Solar Panels  to Battery Banks  to Small Reactors), then Industry (Basic Logistics, Refining Efficiency). Weapons and Fleet come last --only when heat management fails and alien attacks begin.",
  },
  {
    question: "How do I level up fast for research unlocks?",
    answer:
      "Complete missions from the Operations Interface for the most XP. Mining also grants XP but at a slower rate. Each level up unlocks new researchable items and grants a new perk point.",
  },
  {
    question: "Where is the Research tab?",
    answer:
      "Click the Operations Interface (bottom left of screen)  to Research tab. Categories: General, Colonists, Mining, Industry, Weapons, Fleet, and Megastructures.",
  },
];

const searchIntentRows = [
  {
    query: "Starminer research guide",
    answer: "Build Research Lab  to earn credits  to level up  to spend credits in Research tab. Prioritize Mining  to Energy  to Industry  to Weapons  to Fleet.",
    href: "#how-research-works",
    label: "Research",
  },
  {
    query: "Starminer tech tree unlock order",
    answer: "1) Mining (T2 lasers, smelters). 2) Energy (panels, batteries, reactors). 3) Industry (logistics, refining). 4) Weapons (when heat hits yellow). 5) Fleet last.",
    href: "#priority-order",
    label: "Order",
  },
  {
    query: "Starminer how to level up fast",
    answer: "Complete missions for the most XP. Mining gives XP too, but slower. Each level unlocks new research and a perk point.",
    href: "#leveling",
    label: "Leveling",
  },
  {
    query: "Starminer Research Lab setup",
    answer: "Cost: 100 Iron, 50 Silicones, 10 Cobalt, 500 Energy. Assign a worker. Keep on a separate platform from mining to avoid heat conflicts.",
    href: "#research-lab",
    label: "Lab",
  },
];

const jumpLinks = [
  { href: "#how-research-works", label: "How it works" },
  { href: "#research-lab", label: "Research Lab" },
  { href: "#priority-order", label: "Priority order" },
  { href: "#leveling", label: "Leveling fast" },
  { href: "#categories", label: "Categories" },
  { href: "/games/starminer/make-money", label: "Make money" },
  { href: "/games/starminer/mining-logistics", label: "Mining guide" },
];

const playerRows = [
  ["New player", "Unlock Mining, Energy, and Industry before chasing weapons or fleet modules.", "A stable economy teaches the game faster than an expensive ship that cannot power or repair itself."],
  ["Money-focused player", "Research mining output and refining efficiency before luxury modules.", "Better extraction and processing create more credits for later unlocks."],
  ["Defense-focused player", "Delay weapons until heat pressure actually creates attacks, then unlock shields and turrets.", "Weapons too early slow the economy; weapons too late let heat punish expansion."],
  ["Builder", "Research power and logistics before megastructure-style expansion.", "Large builds collapse when energy, storage, and routing are underbuilt."],
  ["Optimizer", "Track the current bottleneck: mining, energy, logistics, defense, or mission XP.", "The best unlock is the one that fixes the slowest system in your current save."],
];

const mistakeRows = [
  ["Researching weapons too early", "You spend credits on combat before heat creates real combat pressure.", "Build income first, then add weapons when attacks start costing time or repairs."],
  ["Ignoring energy", "New modules brown out or stop working after expansion.", "Add panels, batteries, and reactors before adding more consumers."],
  ["Skipping logistics", "Resources exist but do not reach labs, storage, or production.", "Research conveyors, routing, and refining before scaling mining volume again."],
  ["Building a lab with no worker", "The Research Lab exists but progress feels stalled.", "Assign staff and feed the lab with required materials and power."],
  ["Following a fixed order blindly", "The unlock path does not match your actual bottleneck.", "Use Mining to Energy to Industry as the baseline, then adjust to your save."],
];

const breakOrderRows = [
  ["Break into Energy early", "Your station browns out after adding miners, labs, or storage automation.", "Power failure stops every other plan, so energy becomes the real first priority."],
  ["Break into Weapons early", "Heat pressure is already causing attacks that cost more than the next mining upgrade earns.", "Defense research becomes income protection once repairs and losses are eating profit."],
  ["Break into Industry early", "Ore piles up but refined inputs, storage, or transport cannot keep up.", "More mining will only make the clog larger until logistics improves."],
  ["Delay Colonists", "You cannot feed, power, or house them without slowing research.", "Population is useful only after the economy can support the extra demand."],
  ["Delay Fleet", "Your starter station still lacks stable mining, energy, and repairs.", "A larger fleet multiplies the same problems if the base economy is weak."],
];

export default function StarminerTechPage() {
  return (
    <StarminerArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Tech Tree & Research"
      heroImage={starminerImages.officialBuild}
      heroAlt="Starminer official construction screenshot showing modular ship building interface and socket placement"
      faqs={faqs}
      showSources={false}
    >
      <BlufBox title="BLUF">
        You pay for research with credits, not some separate research currency.
        Build a Research Lab (100 Iron, 50 Silicones, 10 Cobalt, 500 Energy),
        staff it, and it trickles in research points. The real unlock order that
        works: <strong>Mining  to Energy  to Industry</strong>. Everything else waits.
        Weapons? Only when aliens start showing up. Colonists and Fleet? Late
        game --they eat resources without paying you back early on. Level up
        through missions for faster access to higher-tier blueprints.
      </BlufBox>

      <SearchAnswerPanel
        title="Starminer Tech Tree & Research"
        answer="Research costs credits. Prioritize Mining, then Energy, then Industry. Hold off on Weapons until heat attracts aliens. Colonists and Fleet are late-game --they drain resources without early returns."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <section id="how-research-works">
        <h2 className="mb-4 text-2xl font-bold text-foreground">How Research Works</h2>
        <ArticleImage
          src={starminerImages.officialBuild}
          alt="Starminer research and modular build planning"
          caption="Research should support the station you are actually building: mining, power, logistics, defense, and fleet scale all compete for credits."
        />
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Starminer's research system is credit-based --you spend money to unlock
          modules, not a separate research currency. Three things gate your progress:
        </p>
        <div className="grid gap-4 sm:grid-cols-3 mb-6">
          {[
            { req: "Credits", desc: "Each module unlock costs thousands of credits. Sell Cobalt and Thorium to fund research. Higher-tier modules cost exponentially more." },
            { req: "Player Level", desc: "New research options unlock as you level up. Higher levels = access to T2 and T3 modules. Missions give the most XP." },
            { req: "Research Lab", desc: "Required for passive research point generation. Without a lab and assigned worker, you can't unlock anything beyond basic modules." },
          ].map((item) => (
            <div key={item.req} className="rounded-lg border border-d8020/25 bg-d8020/5 p-5">
              <h3 className="text-base font-bold text-d8020">{item.req}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="research-lab" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Research Lab Setup</h2>
        <ArticleImage
          src={starminerImages.station}
          alt="Starminer Research Lab station setup and resource routing"
          caption="The Research Lab is not just a building cost. It needs worker assignment, power, material routing, and protection from bad expansion planning."
        />
        <div className="overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <div className="border-b border-border/50 bg-card/50 px-5 py-3">
            <p className="text-sm font-semibold text-foreground">Construction Cost</p>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              {[
                ["100 Iron", "Hull and frame"],
                ["50 Silicones", "Electronics"],
                ["10 Cobalt", "Processing core"],
                ["500 Energy", "Power requirement"],
              ].map(([cost, use]) => (
                <div key={cost} className="text-center">
                  <p className="font-bold text-d8020">{cost}</p>
                  <p className="text-xs text-muted-foreground">{use}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
          <p>--Build the Research Lab on a <strong>separate platform</strong> from your mining operations. Mining generates heat that can slow research.</p>
          <p>--Park your Research Station near an <strong>NPC station</strong> --NPCs can supply construction materials from their inventory, saving you hauling time.</p>
          <p>--Assign a <strong>colonist worker</strong> to the lab. Without a worker, no research points are generated.</p>
          <p>--Buffer resources: build storage containers feeding directly into the lab to prevent production halts when you're away mining.</p>
        </div>
      </section>

      <section id="priority-order" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Optimal Unlock Order</h2>
        <ActionTable rows={starminerTechRows} />
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">New Player vs Optimizer Research Path</h2>
        <ArticleImage
          src={starminerImages.logistics}
          alt="Starminer logistics research path and optimizer planning"
          caption="New players need a safe unlock baseline. Optimizers should change the order only when a real bottleneck proves it."
        />
        <p className="mb-4 leading-relaxed text-muted-foreground">
          A tech tree guide should not give one rigid answer to every player.
          Beginners need a safe path that keeps the economy alive. Experienced
          players need a way to decide when breaking that order is correct.
          The baseline is Mining, Energy, Industry, then Weapons and Fleet. The
          exception is when your current save has a different bottleneck, such
          as power collapse, repair cost, missing lab inputs, or repeated
          attacks.
        </p>
      </section>
      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player type</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Research path</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why</th>
            </tr>
          </thead>
          <tbody>
            {playerRows.map(([type, path, why]) => (
              <tr key={type} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{type}</th>
                <td className="px-4 py-3 text-muted-foreground">{path}</td>
                <td className="px-4 py-3 text-muted-foreground">{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section id="leveling" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">How to Level Up Fast</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { method: "Complete Missions", xp: "Highest XP/hour", tip: "Mining delivery and defense contracts give the most XP. Accept multiple missions at once and complete them in parallel." },
            { method: "Mine Rare Resources", xp: "Medium XP", tip: "Cobalt and Thorium give more XP per unit than Iron or Ice. Target C-class asteroids for efficient XP + credits." },
            { method: "Explore New Sectors", xp: "One-time XP bonus", tip: "Discovering new asteroid fields, trade stations, and anomalies grants exploration XP. Do this between mission cycles." },
            { method: "Defeat Alien Scouts", xp: "Combat XP", tip: "Each alien kill gives XP. Only engage when you have a patrol boat or defense platform --don't fight with mining ships." },
          ].map((item) => (
            <div key={item.method} className="rounded-lg border border-border/50 bg-card/30 p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-foreground">{item.method}</h3>
                <span className="text-xs font-semibold text-d8020">{item.xp}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.tip}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="categories" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Research Categories Overview</h2>
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Category</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">What It Unlocks</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Priority</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Mining", "T2/T3 Mining Lasers, Improved Smelters, Drill Upgrades", "1st --your income engine"],
                ["Energy", "Solar Panels, Battery Banks, Small/Medium/Large Reactors", "2nd --everything needs power"],
                ["Industry", "Basic Logistics, Refining Efficiency, Automated Conveyors", "3rd --improves throughput"],
                ["Weapons", "Pulse Lasers, Shield Generators, Turret Platforms", "4th --when heat triggers attacks"],
                ["Colonists", "Habitats, Crew Quarters, Life Support Upgrades", "5th --population is a resource sink"],
                ["Fleet", "Hangar Modules, Capital Ship frames, Fleet Commands", "6th --late-game expansion"],
                ["Megastructures", "Large-scale stations requiring multiple T2 sockets", "Last --endgame content"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{row[0]}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
                  <td className="px-4 py-3 text-d8020 font-semibold">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Common Research Mistakes</h2>
        <ArticleImage
          src={starminerImages.officialMining}
          alt="Starminer mining research mistake diagnosis"
          caption="Most research mistakes come from unlocking exciting modules before the economy, power, logistics, or heat pressure can support them."
        />
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mistake</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">What happens</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Fix</th>
              </tr>
            </thead>
            <tbody>
              {mistakeRows.map(([mistake, symptom, fix]) => (
                <tr key={mistake} className="border-b border-border/30 last:border-0">
                  <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{mistake}</th>
                  <td className="px-4 py-3 text-muted-foreground">{symptom}</td>
                  <td className="px-4 py-3 text-muted-foreground">{fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">When to Break the Default Unlock Order</h2>
        <ArticleImage
          src={starminerImages.survival}
          alt="Starminer survival pressure and research order adjustment"
          caption="The default order is a baseline, not a law. Break it only when the current save proves a different bottleneck is more expensive."
        />
        <p className="mb-4 leading-relaxed text-muted-foreground">
          The safest general path is Mining, Energy, Industry, Weapons, then
          Fleet. That does not mean every save should follow it mechanically.
          A good research page needs a rule for exceptions. If power is failing,
          Energy jumps ahead. If heat is already causing costly attacks,
          Weapons become income protection. If ore is piling up because
          refining and transport cannot keep up, Industry is stronger than
          another mining upgrade. The point is to research the system that is
          limiting the whole station, not the category that sounds strongest in
          isolation.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Exception</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Use when</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Reason</th>
              </tr>
            </thead>
            <tbody>
              {breakOrderRows.map(([exception, use, reason]) => (
                <tr key={exception} className="border-b border-border/30 last:border-0">
                  <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{exception}</th>
                  <td className="px-4 py-3 text-muted-foreground">{use}</td>
                  <td className="px-4 py-3 text-muted-foreground">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </StarminerArticle>
  );
}
