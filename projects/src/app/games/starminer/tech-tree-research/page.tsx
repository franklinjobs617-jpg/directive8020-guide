import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { StarminerArticle } from "@/components/starminer-article";
import {
  createStarminerMetadata,
  starminerTechRows,
  starminerImages,
} from "@/lib/starminer";

const title = "Starminer Tech Tree & Research Guide: Optimal Unlock Order";
const description =
  "Complete Starminer research and tech tree guide. How the Research Lab works, optimal unlock order (Mining → Energy → Industry → Weapons → Fleet), leveling fast, and which modules to prioritize.";
const canonical = "/games/starminer/tech-tree-research";

export const metadata = createStarminerMetadata({
  title,
  description,
  canonical,
  image: starminerImages.officialBuild,
});

const faqs = [
  {
    question: "How does research work in Starminer?",
    answer:
      "Research requires credits and a Research Lab. Build a Research Lab (100 Iron, 50 Silicones, 10 Cobalt, 500 Energy), assign a worker, and it generates research points passively. Spend credits in the Operations Interface → Research tab to unlock modules across 6 categories.",
  },
  {
    question: "What should I research first in Starminer?",
    answer:
      "Mining modules first (T2 Mining Lasers, Improved Smelters), then Energy (Solar Panels → Battery Banks → Small Reactors), then Industry (Basic Logistics, Refining Efficiency). Weapons and Fleet come last — only when heat management fails and alien attacks begin.",
  },
  {
    question: "How do I level up fast for research unlocks?",
    answer:
      "Complete missions from the Operations Interface for the most XP. Mining also grants XP but at a slower rate. Each level up unlocks new researchable items and grants a new perk point.",
  },
  {
    question: "Where is the Research tab?",
    answer:
      "Click the Operations Interface (bottom left of screen) → Research tab. Categories: General, Colonists, Mining, Industry, Weapons, Fleet, and Megastructures.",
  },
];

const searchIntentRows = [
  {
    query: "Starminer research guide",
    answer: "Build Research Lab → earn credits → level up → spend credits in Research tab. Prioritize Mining → Energy → Industry → Weapons → Fleet.",
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
        works: <strong>Mining → Energy → Industry</strong>. Everything else waits.
        Weapons? Only when aliens start showing up. Colonists and Fleet? Late
        game — they eat resources without paying you back early on. Level up
        through missions for faster access to higher-tier blueprints.
      </BlufBox>

      <SearchAnswerPanel
        title="Starminer Tech Tree & Research"
        answer="Research costs credits. Prioritize Mining, then Energy, then Industry. Hold off on Weapons until heat attracts aliens. Colonists and Fleet are late-game — they drain resources without early returns."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <section id="how-research-works">
        <h2 className="mb-4 text-2xl font-bold text-foreground">How Research Works</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Starminer's research system is credit-based — you spend money to unlock
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
          <p>• Build the Research Lab on a <strong>separate platform</strong> from your mining operations. Mining generates heat that can slow research.</p>
          <p>• Park your Research Station near an <strong>NPC station</strong> — NPCs can supply construction materials from their inventory, saving you hauling time.</p>
          <p>• Assign a <strong>colonist worker</strong> to the lab. Without a worker, no research points are generated.</p>
          <p>• Buffer resources: build storage containers feeding directly into the lab to prevent production halts when you're away mining.</p>
        </div>
      </section>

      <section id="priority-order" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Optimal Unlock Order</h2>
        <ActionTable rows={starminerTechRows} />
      </section>

      <section id="leveling" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">How to Level Up Fast</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { method: "Complete Missions", xp: "Highest XP/hour", tip: "Mining delivery and defense contracts give the most XP. Accept multiple missions at once and complete them in parallel." },
            { method: "Mine Rare Resources", xp: "Medium XP", tip: "Cobalt and Thorium give more XP per unit than Iron or Ice. Target C-class asteroids for efficient XP + credits." },
            { method: "Explore New Sectors", xp: "One-time XP bonus", tip: "Discovering new asteroid fields, trade stations, and anomalies grants exploration XP. Do this between mission cycles." },
            { method: "Defeat Alien Scouts", xp: "Combat XP", tip: "Each alien kill gives XP. Only engage when you have a patrol boat or defense platform — don't fight with mining ships." },
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
                ["Mining", "T2/T3 Mining Lasers, Improved Smelters, Drill Upgrades", "1st — your income engine"],
                ["Energy", "Solar Panels, Battery Banks, Small/Medium/Large Reactors", "2nd — everything needs power"],
                ["Industry", "Basic Logistics, Refining Efficiency, Automated Conveyors", "3rd — improves throughput"],
                ["Weapons", "Pulse Lasers, Shield Generators, Turret Platforms", "4th — when heat triggers attacks"],
                ["Colonists", "Habitats, Crew Quarters, Life Support Upgrades", "5th — population is a resource sink"],
                ["Fleet", "Hangar Modules, Capital Ship frames, Fleet Commands", "6th — late-game expansion"],
                ["Megastructures", "Large-scale stations requiring multiple T2 sockets", "Last — endgame content"],
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
    </StarminerArticle>
  );
}
