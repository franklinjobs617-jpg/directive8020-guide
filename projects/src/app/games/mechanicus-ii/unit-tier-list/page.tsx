import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { MechanicusIIArticle } from "@/components/mechanicus-ii-article";
import {
  createMechanicusIIMetadata,
  mechanicusIIUnitTierRows,
  mechanicusIIImages,
} from "@/lib/mechanicus-ii";

const title = "Mechanicus II Unit Tier List: Best Units & Squad Compositions";
const description =
  "Warhammer 40,000: Mechanicus II unit tier list ranking every unit from S to B tier across both factions. Best squad comps, what to avoid, and how to build your first campaign roster.";
const canonical = "/games/mechanicus-ii/unit-tier-list";

export const metadata = createMechanicusIIMetadata({
  title,
  description,
  canonical,
  image: mechanicusIIImages.screenshot3,
});

const faqs = [
  {
    question: "What are the best units in Mechanicus II?",
    answer:
      "Necron Warriors and Skitarii Rangers are the backbone units — reliable, efficient, and essential for building your economy (Dominion or Cognition). Canoptek Wraiths are mandatory for Necron leader protection. Servitors feed Cognition for Mechanicus by getting shot.",
  },
  {
    question: "Which faction has better units?",
    answer:
      "Neither is strictly better — they play differently. Necron units are more aggressive and self-sufficient (Reanimation Protocols). Mechanicus units rely on cover and support synergies. Your first campaign faction should be Mechanicus — it's more forgiving while you learn unit roles.",
  },
  {
    question: "What should my first squad look like?",
    answer:
      "Mechanicus: 1-2 Servitors, 2-3 Skitarii Rangers, 1 Tech-Priest (Lexmechanic), 1 Tech-Priest (Dominus), 1 Enginseer. Necrons: core of Warriors, 1-2 Immortals, 1 Canoptek Wraith, Vargard Nefershah mid-line.",
  },
];

const searchIntentRows = [
  {
    query: "Mechanicus II tier list",
    answer: "S-tier: Necron Warriors, Skitarii Rangers. A-tier: Canoptek Wraiths, Servitors, Immortals. B-tier: Tech-Priests, Enginseers.",
    href: "#tier-list",
    label: "Tiers",
  },
  {
    query: "Mechanicus II best units",
    answer: "Warriors and Rangers are your core. Don't skip them for flashier picks. Wraiths are mandatory for Necrons — hero death fails the mission.",
    href: "#tier-list",
    label: "Best",
  },
  {
    query: "Mechanicus II squad composition",
    answer: "Mechanicus: 1-2 Servitors, 2-3 Rangers, 2 Tech-Priests, 1 Enginseer. Necrons: Warriors + Immortals + Wraith + leader mid-line.",
    href: "#compositions",
    label: "Comps",
  },
];

const jumpLinks = [
  { href: "#tier-list", label: "Tier list" },
  { href: "#compositions", label: "Squad comps" },
  { href: "/games/mechanicus-ii/necron-guide", label: "Necron guide" },
  { href: "/games/mechanicus-ii/best-units-builds", label: "Builds" },
  { href: "/games/mechanicus-ii/factions", label: "Factions" },
];

export default function MechanicusIIUnitTierPage() {
  return (
    <MechanicusIIArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Unit Tier List"
      heroImage={mechanicusIIImages.screenshot3}
      heroAlt="Mechanicus II tactical combat with unit positioning and cover"
      faqs={faqs}
      showSources={false}
    >
      <BlufBox title="BLUF">
        Warriors and Rangers. That's your core. Everything else supports them.
        Wraiths are non-negotiable for Necrons — without one, your leader dies
        and the mission ends. Servitors are your Cognition battery. Flashy units
        are fun but don't win missions — reliable damage and resource generation
        do.{" "}
        <em>Source: Game Truth launch-weekend testing.</em>
      </BlufBox>

      <SearchAnswerPanel
        title="Unit Tier List & Best Picks"
        answer="S-tier: Warriors (Necron), Rangers (Mechanicus). A-tier: Wraiths, Servitors, Immortals. B-tier: Tech-Priests, Enginseers. Core units win missions — don't skip the basics."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <section id="tier-list">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Unit Tier List</h2>
        <ActionTable rows={mechanicusIIUnitTierRows} />
      </section>

      <section id="compositions" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Recommended Squad Compositions</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-lg border border-border/50 bg-card/30 p-5">
            <h3 className="text-base font-bold text-foreground">Mechanicus Starter Squad</h3>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>• <strong>1-2 Servitors</strong> — frontline, generate Cognition by getting hit</p>
              <p>• <strong>2-3 Skitarii Rangers</strong> — backline, generate Cognition from range</p>
              <p>• <strong>1 Tech-Priest (Lexmechanic)</strong> — passive Cognition per turn</p>
              <p>• <strong>1 Tech-Priest (Dominus)</strong> — raw damage output</p>
              <p>• <strong>1 Enginseer</strong> — healing and support</p>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Cover-dependent. Spread units across multiple positions. Protect your Tech-Priests.</p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card/30 p-5">
            <h3 className="text-base font-bold text-foreground">Necron Starter Squad</h3>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>• <strong>3-4 Necron Warriors</strong> — core infantry, build Dominion</p>
              <p>• <strong>1-2 Immortals</strong> — higher damage, less Dominion per hit</p>
              <p>• <strong>1 Canoptek Wraith</strong> — bodyguard, teleport to save allies</p>
              <p>• <strong>Vargard Nefershah</strong> — mid-line commander, never frontline</p>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Aggression-first. Destroy enemy cover. Push Warriors into exposed positions. Wraith stays near leader.</p>
          </div>
        </div>
      </section>
    </MechanicusIIArticle>
  );
}
