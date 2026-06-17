import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { createSpacecraftMetadata, spacecraftImages } from "@/lib/spacecraft";

const title = "SpaceCraft Tips and Tricks: 25 Things I Wish I Knew Before Starting";
const description =
  "25 SpaceCraft tips and tricks covering hidden mechanics, power allocation secrets, efficient shortcuts, undocumented systems, and advanced strategies learned from Early Access gameplay.";
const canonical = "/games/spacecraft/tips-and-tricks";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.shipBuilding,
});

const faqs = [
  {
    question: "What is the single most important SpaceCraft tip?",
    answer:
      "Never use Auto-Balance for power allocation. Manually allocate power based on your current activity: 60-70% to your primary tool (mining laser, shields, or engines), and split the rest among secondary systems. Auto-Balance treats all systems equally, which means critical systems are chronically underpowered.",
  },
  {
    question: "What hidden mechanics should new players know?",
    answer:
      "The Overclocked Mining Laser cannot be repaired — use it only on high-value targets like Malachite and Azurite. First-time crafting of any component grants bonus Tech Points — build one of everything. Reverse Thrust during turns dramatically improves pivot speed. These mechanics are not clearly explained in the tutorial.",
  },
  {
    question: "What is the fastest way to progress?",
    answer:
      "Rush Deuterium extraction technology as your first research priority after the Improved Mining Laser. Deuterium is the bottleneck for all Tier 2 propulsion. Join an established Corporation for shared resources, pooled research, and safe passage through their territory. Craft one of every new component you unlock for the Tech Point bonus.",
  },
];

const tipsData = [
  {
    category: "Getting Started",
    tips: [
      "Complete every tutorial prompt — they explain core systems that are never documented again. Players who skip the tutorial spend their first 5 hours confused about power grid management.",
      "Name your ships descriptively (e.g., \"Mining-Mk2-HighCap\" not \"Ship3\"). When you own 5+ ships, descriptive names save you from docking and checking each one to find the right vessel.",
      "Bookmark stations, resource deposits, and safe sectors on your galaxy map. The map is enormous, and you will forget where everything is within hours. Bookmarks are free and unlimited.",
      "Set a home station early. The \"Return Home\" navigation option saves enormous travel time. Change your home station as you expand into new sectors.",
    ],
  },
  {
    category: "Ship Building",
    tips: [
      "Bury your Reactor Core in the center of your ship surrounded by armor on all sides. A destroyed reactor disables your entire ship. This is the most important design rule.",
      "Use a 2:1 ratio of Shield Generators to Heat Sinks. Overheating shuts down your highest-power modules first, which in combat means your weapons stop firing before your shields fail.",
      "Never take a new ship design into dangerous sectors without sandbox testing. Fly it in a safe zone first. Test acceleration, turning, power draw under load, and heat buildup at maximum output.",
      "Place thrusters symmetrically around your center of mass. Asymmetric placement causes drift that makes mining and combat significantly harder. The ship builder shows your center of mass as a red dot.",
    ],
  },
  {
    category: "Mining",
    tips: [
      "Always carry both a Simple Mining Laser (unlimited durability, for basic ores) and an Overclocked Mining Laser (faster but finite, for rare metals). Use the Overclocked laser only on Malachite, Azurite, and Gold.",
      "Scan asteroids before mining. Higher concentration deposits yield significantly more resources. A 70%+ concentration deposit produces nearly double the output of a 30% one.",
      "Mining with a full cargo hold wastes resources and time. Set a cargo alert at 80% capacity so you have time to return to station before waste begins.",
      "Deuterium extraction should be your first major tech investment after the basic mining laser upgrade. It is the bottleneck resource for all Tier 2 and above propulsion technology.",
    ],
  },
  {
    category: "Automation",
    tips: [
      "Over-build power before adding production buildings. A power outage halts your entire supply chain. One Reactor Core supports 3-4 production buildings — plan expansion around this ratio.",
      "Use parallel identical production chains rather than one massive chain. If one parallel chain breaks, the others continue producing. A single mega-chain failure stops everything.",
      "Drones for short-range (within one planetary system), cargo ships for long-range (between star systems). The hybrid approach minimizes operating costs while maximizing market reach.",
      "Set drone route frequency to match production consumption. Too fast wastes drone energy and creates empty return trips; too slow starves your assemblers of input materials.",
    ],
  },
  {
    category: "Trading",
    tips: [
      "Buy low at mining outpost systems (surplus raw ore, low prices), sell high at manufacturing hubs (need raw materials, high prices). This is the fundamental rule of SpaceCraft trading.",
      "Watch supply and demand bars on station markets. Long green bar (high supply) = good for buying. Long red bar (high demand) = good for selling. The ideal trade: an item with short green AND long red — the station is desperate.",
      "Crafted ship parts (engines, reactors, weapons) have significantly higher profit margins than raw ore. As soon as you can automate production, transition from selling ore to selling components.",
      "Corporation-controlled sectors often have manipulated prices. Before trading in Corp territory, check for unusual price patterns that indicate artificial market conditions.",
    ],
  },
  {
    category: "Combat Preparation",
    tips: [
      "Master manual power allocation now, even before combat is implemented. Practice switching between mining (60% laser / 30% thrusters / 10% shields), travel (70% thrusters / 20% shields / 10% sensors), and defensive (70% shields / 30% weapons) configurations quickly.",
      "Stockpile shield generators, heat sinks, and weapon modules. When combat releases, players with component stockpiles will retrofit their fleets immediately while everyone else is scrambling for basic parts.",
      "Build a combat-capable ship frame now with core infrastructure (reactor, thrusters, shield mounts). When weapons become available, you only need to install them rather than build from scratch.",
    ],
  },
];

const searchIntentRows = [
  {
    query: "SpaceCraft best tips for beginners",
    answer: "Manual power allocation, carry both mining lasers, bury your reactor in armor, use reverse thrust for faster turns, and craft one of everything for Tech Points.",
    href: "#tips",
    label: "Tips",
  },
  {
    query: "SpaceCraft hidden mechanics",
    answer: "Overclocked laser cannot be repaired. First-time crafting grants Tech Points. Reverse thrust improves pivot speed. Bookmarks are free and unlimited.",
    href: "#tips",
    label: "Hidden",
  },
  {
    query: "SpaceCraft power allocation guide",
    answer: "Never use Auto-Balance. Mining: 60% laser. Travel: 70% thrusters. Combat: 70% shields. Manual allocation is essential.",
    href: "#tips",
    label: "Power",
  },
];

const jumpLinks = [
  { href: "#getting-started", label: "Getting started" },
  { href: "#ship-building", label: "Ship building" },
  { href: "#mining", label: "Mining" },
  { href: "#automation", label: "Automation" },
  { href: "#trading", label: "Trading" },
  { href: "#combat-preparation", label: "Combat prep" },
];

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

export default function SpacecraftTipsPage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Tips & Tricks"
      heroImage={spacecraftImages.shipBuilding}
      heroAlt="SpaceCraft advanced tips and tricks guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What are the best SpaceCraft tips for new players?"
        answer="Top 5 tips: (1) Never use Auto-Balance for power — manually allocate; (2) Always carry both Simple and Overclocked mining lasers; (3) Build your reactor deep inside the ship, surrounded by armor; (4) Use Reverse Thrust while turning for faster pivots; (5) Craft one of every new component you unlock to farm Tech Points."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="From the Community">
        <p>
          <strong>These 25 tips are based on hours of Early Access gameplay and community discoveries.</strong>{" "}
          Some cover undocumented mechanics that the tutorial never explains. Each tip can save you hours of wasted time or prevent a catastrophic loss.
        </p>
      </BlufBox>

      <section id="tips" className="my-10">
        <ArticleImage
          src={spacecraftImages.shipBuilding}
          alt="SpaceCraft tips and tricks compilation"
          caption="These tips are organized by category for easy reference. Bookmark this page and revisit sections as you progress through different stages of the game."
        />

        {tipsData.map((category) => (
          <section key={category.category} id={slugify(category.category)} className="mt-8">
            <h2 className="mb-4 text-xl font-bold text-foreground">{category.category}</h2>
            <ol className="space-y-4" start={tipsData.slice(0, tipsData.indexOf(category)).reduce((sum, c) => sum + c.tips.length, 0) + 1}>
              {category.tips.map((tip, i) => {
                const globalIndex = tipsData.slice(0, tipsData.indexOf(category)).reduce((sum, c) => sum + c.tips.length, 0) + i + 1;
                return (
                  <li key={globalIndex} className="rounded-lg border border-border bg-white p-4 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-bold text-foreground">Tip {globalIndex}:</span> {tip}
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </section>

      <section className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Next Steps</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Each category above links to a dedicated deep-dive guide. For comprehensive coverage of any topic:{" "}
          <Link href="/games/spacecraft/ship-building" className="text-foreground underline">ship building</Link>,{" "}
          <Link href="/games/spacecraft/mining-guide" className="text-foreground underline">mining</Link>,{" "}
          <Link href="/games/spacecraft/factory-automation" className="text-foreground underline">factory automation</Link>,{" "}
          <Link href="/games/spacecraft/trading-economy" className="text-foreground underline">trading</Link>,{" "}
          <Link href="/games/spacecraft/combat-guide" className="text-foreground underline">combat</Link>{" "}
          (future content), and{" "}
          <Link href="/games/spacecraft/all-ships" className="text-foreground underline">all ships database</Link>.
        </p>
      </section>
    </SpacecraftArticle>
  );
}
