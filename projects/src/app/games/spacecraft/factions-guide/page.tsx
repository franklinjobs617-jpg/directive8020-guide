import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { createSpacecraftMetadata, spacecraftImages } from "@/lib/spacecraft";

const title = "SpaceCraft Factions Guide: Reputation, Alliances, Wars & Best Faction to Join";
const description =
  "SpaceCraft factions guide covering all faction reputations, alliance benefits, war mechanics, faction-specific ship blueprints, reputation grinding, and which faction to join first.";
const canonical = "/games/spacecraft/factions-guide";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.siteHero,
});

const faqs = [
  {
    question: "Which faction should I join in SpaceCraft?",
    answer:
      "For beginners, join a faction that controls your starting sector — this provides immediate safe passage and access to faction-specific stations. Faction bonuses vary: some offer mining yield bonuses, others offer combat discounts or trade route protection. Check the in-game faction panel for current bonuses before committing.",
  },
  {
    question: "How do I switch factions?",
    answer:
      "Switching factions costs significant reputation with your previous faction and may trigger hostility if your reputation drops below neutral. The switch process takes 24 real-time hours and requires paying a fee. Pick a faction that aligns with your playstyle and stick with it for at least the first 20-30 hours.",
  },
  {
    question: "How do faction wars work?",
    answer:
      "Faction wars are triggered when two factions' reputation reaches hostile levels or when a Corporation allied with one faction attacks another faction's territory. Wars affect station access, market prices, and safe passage through contested sectors. War outcomes are determined by a combination of Corporation fleet victories and resource control.",
  },
  {
    question: "How do I grind faction reputation?",
    answer:
      "Complete faction missions from the station mission board, deliver requested resources to faction depots, defend faction stations from pirate attacks (when combat is implemented), and trade exclusively at faction-aligned markets. Reputation gains are highest for completing urgent or high-difficulty missions.",
  },
];

const factionRows = [
  ["United Mining Coalition (UMC)", "Starter sectors and asteroid belts", "Mining yield +15%, extractor power discount", "Miners and industrialists. Best beginner faction for resource-focused players."],
  ["Trade Federation", "Trade hubs and border systems", "Market fee reduction, cargo capacity +10%", "Traders and economy-focused players. Best for credit farming and market manipulation."],
  ["Frontier Defense Pact", "Border sectors and contested zones", "Shield strength +20%, weapons discount", "Combat players (future content). Best for those planning to engage in PvP and sector warfare."],
  ["Explorers' Guild", "Deep space and uncharted sectors", "Scanner range +25%, thruster efficiency +15%", "Explorers and scouts. Best for finding rare resources and uncharted systems before competitors."],
  ["Independent Systems Alliance", "Scattered across all sectors", "Flexible — bonuses change based on player votes", "Players who want political influence. Best for those who enjoy Corporation leadership and faction politics."],
];

const searchIntentRows = [
  {
    query: "SpaceCraft best faction for beginners",
    answer: "United Mining Coalition (UMC) — mining yield bonus, starter sector control, and straightforward reputation system.",
    href: "#faction-overview",
    label: "Best pick",
  },
  {
    query: "SpaceCraft faction bonuses",
    answer: "UMC: mining yield. Trade Federation: market discounts. Frontier Pact: shield strength. Explorers: scanner range. Alliance: flexible bonuses.",
    href: "#faction-overview",
    label: "Bonuses",
  },
  {
    query: "SpaceCraft faction war explained",
    answer: "Wars trigger when reputations hit hostile. They affect station access, markets, and safe passage. Outcomes based on fleet victories and resource control.",
    href: "#war-mechanics",
    label: "War",
  },
];

const jumpLinks = [
  { href: "#faction-overview", label: "Factions" },
  { href: "#reputation", label: "Reputation" },
  { href: "#war-mechanics", label: "War mechanics" },
  { href: "/games/spacecraft/multiplayer-server", label: "Corporations" },
  { href: "/games/spacecraft/trading-economy", label: "Trading" },
  { href: "/games/spacecraft/combat-guide", label: "Combat" },
];

export default function SpacecraftFactionsPage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Factions Guide"
      heroImage={spacecraftImages.siteHero}
      heroAlt="SpaceCraft factions and reputation guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="Which faction should I join in SpaceCraft?"
        answer="For beginners, join a faction that controls your starting sector — this provides immediate safe passage and access to faction-specific stations. Faction bonuses vary: some offer mining yield bonuses, others offer combat discounts or trade route protection. Check the in-game faction panel for current bonuses before committing."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Choose Carefully">
        <p>
          <strong>Faction reputation is a long-term investment.</strong>{" "}
          Switching factions costs significant reputation with your previous faction. Pick one that aligns with your playstyle and stick with it for at least the first 20-30 hours.
        </p>
      </BlufBox>

      <section id="faction-overview" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Faction Overview</h2>
        <ArticleImage
          src={spacecraftImages.shipBuilding}
          alt="SpaceCraft factions territory and alliance map"
          caption="Each faction controls specific sectors and provides unique bonuses. Your faction choice determines safe zones, station access, and economic advantages."
        />
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Faction</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Territory</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Bonuses</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Best For</th>
              </tr>
            </thead>
            <tbody>
              {factionRows.map(([name, territory, bonuses, bestFor]) => (
                <tr key={name} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{territory}</td>
                  <td className="px-4 py-3 text-muted-foreground">{bonuses}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="reputation" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">How to Grind Reputation</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Faction reputation is earned through consistent activity aligned with the faction's goals. The fastest methods: (1) Complete faction missions from station mission boards — urgent missions grant bonus reputation; (2) Deliver requested resources to faction depots — check the depot wishlist for high-value contribution opportunities; (3) Defend faction stations from threats (when combat is implemented); (4) Trade exclusively at faction-aligned markets — every transaction contributes a small amount of reputation.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Reputation levels: <strong>Hostile</strong> (attacked on sight in faction territory), <strong>Unfriendly</strong> (limited station access, higher prices), <strong>Neutral</strong> (standard access and prices), <strong>Friendly</strong> (discounts and priority docking), <strong>Allied</strong> (best prices, exclusive missions, faction-specific ship blueprints), <strong>Exalted</strong> (faction leadership vote, territory influence, unique cosmetic rewards).
        </p>
      </section>

      <section id="war-mechanics" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">War Mechanics</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Faction wars in SpaceCraft are dynamic, player-influenced conflicts. Wars are triggered when faction reputations reach hostile thresholds (typically through Corporation raids or resource disputes) or when diplomatic relations collapse due to player actions. During a war: faction stations in contested sectors may close to opposing faction members; market prices for war resources spike; safe passage through contested territory is revoked; and Corporation fleets can engage in sector-control battles to shift territorial boundaries.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          <strong>Note:</strong> Full faction warfare mechanics are dependent on the combat system, which is not yet implemented as of June 2026 Early Access launch. Currently, faction interactions are primarily economic (market access, station services) and diplomatic (reputation, alliance benefits). See our{" "}
          <Link href="/games/spacecraft/combat-guide" className="text-foreground underline">combat guide</Link>{" "}
          for the latest status on combat implementation.
        </p>
      </section>
    </SpacecraftArticle>
  );
}
