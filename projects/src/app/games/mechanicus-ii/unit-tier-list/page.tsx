import { ArticleImage } from "@/components/article-media";
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
      "For launch-window play, the safest answer is role-based: Necron Warriors and Skitarii Rangers are the backbone units because they keep the faction economy and damage plan stable. Canoptek Wraiths are high-value protection pieces for Necron leaders, while Servitors help Mechanicus absorb pressure and keep Cognition moving.",
  },
  {
    question: "Which faction has better units?",
    answer:
      "Neither faction is simply better. Necron units reward tempo, damage pressure, and reanimation timing. Mechanicus units reward cover discipline, support timing, and Cognition planning. Pick based on the mistakes you make most often, not only on tier labels.",
  },
  {
    question: "What should my first squad look like?",
    answer:
      "Start with one leader-protection plan, two reliable damage lanes, one support or repair answer, and enough basic bodies to hold space. For Mechanicus that usually means Rangers plus Servitors around protected Tech-Priests. For Necrons it usually means Warriors, a stronger damage piece, and a mobile bodyguard near Nefershah.",
  },
];

const searchIntentRows = [
  {
    query: "Mechanicus II tier list",
    answer: "Use role tiers, not final meta claims. S roles are reliable economy and damage bodies. A roles protect leaders, stabilize turns, or add higher threat. B roles are powerful but punish poor positioning.",
    href: "#tier-list",
    label: "Tiers",
  },
  {
    query: "Mechanicus II best units",
    answer: "Warriors and Rangers are the safest core units because they keep your plan repeatable. Wraith-style mobility is high value when leader exposure is the reason you keep resetting.",
    href: "#tier-list",
    label: "Best",
  },
  {
    query: "Mechanicus II squad composition",
    answer: "Build around jobs: leader safety, two damage lanes, one resource enabler, one support answer, and one objective runner. Exact counts should change with mission rules.",
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
        Treat this as a launch-window role tier list, not a final solved meta.
        The highest-value units are the ones that make your turns repeatable:
        core infantry that creates damage or resources, mobile pieces that stop
        leader deaths, and support units that prevent attrition from becoming a
        wipe. The current weakness of this page was obvious: it ranked names
        without teaching the reader when to ignore the ranking. That is fixed
        below with role rules, squad templates, and failure diagnosis.
      </BlufBox>

      <SearchAnswerPanel
        title="Unit Tier List & Best Picks"
        answer="Use role tiers: S roles keep economy and damage reliable, A roles protect leaders or add threat, B roles are strong but punish bad positioning. Core units win more early missions than flashy specialists."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <section id="tier-list">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Unit Tier List</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          A useful tier list answers one question: what helps a player win more
          turns with fewer resets? It does not need to pretend that every late
          campaign build, difficulty setting, patch, and mission variant has
          already been solved. For Mechanicus II, the first filter is role value.
          A unit that creates repeatable resources, protects a required leader,
          or keeps a damage lane open should rank above a unit that only looks
          impressive in one perfect turn.
        </p>
        <ActionTable rows={mechanicusIIUnitTierRows} />
      </section>

      <ArticleImage
        src={mechanicusIIImages.screenshot3}
        alt="Mechanicus II tactical combat board showing units, cover, and firing lanes"
        caption="Judge units by the board problems they solve: leader safety, damage lanes, resource flow, and objective access."
      />

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">How to Read This Tier List</h2>
        <p className="leading-relaxed text-muted-foreground">
          Read the tiers as first-campaign value, not as a permanent esports
          ranking. A unit can move up in value when the mission needs its exact
          job, and it can move down when the map removes that job. For example,
          a support piece is stronger on a long attrition map than on a short
          objective grab. A mobile bodyguard is stronger when leader exposure is
          the fail state. A pure attacker is stronger only when your existing
          economy and protection plan already work. This keeps the list useful
          for both new players and players who are already testing harder routes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Beginner vs Veteran Priorities</h2>
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player type</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Prioritize</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Avoid</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["New player", "Rangers, Warriors, Servitors, one support piece, and simple leader protection.", "Overbuilding around a unit you do not know how to keep alive."],
                ["Returning tactics player", "Mobility, turn order pressure, and units that convert small openings into safe kills.", "Copying a tier list without checking mission objectives first."],
                ["Mechanicus learner", "Cover discipline, Cognition consistency, protected Tech-Priests, and safe ranged lanes.", "Standing specialists in open ground for one bigger attack."],
                ["Necron learner", "Damage tempo, reanimation timing, leader bodyguard spacing, and controlled forward pressure.", "Charging before you know which lane keeps Nefershah safe."],
              ].map(([type, prioritize, avoid]) => (
                <tr key={type} className="border-b border-border/30 last:border-0">
                  <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{type}</th>
                  <td className="px-4 py-3 text-muted-foreground">{prioritize}</td>
                  <td className="px-4 py-3 text-muted-foreground">{avoid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="compositions" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Recommended Squad Compositions</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-lg border border-border/50 bg-card/30 p-5">
            <h3 className="text-base font-bold text-foreground">Mechanicus Starter Logic</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li><strong>1-2 Servitors:</strong> absorb pressure and help your economy survive bad openings.</li>
              <li><strong>2-3 Skitarii Rangers:</strong> hold ranged lanes and punish exposed targets.</li>
              <li><strong>1-2 Tech-Priests:</strong> choose based on whether you need more resources, damage, or control.</li>
              <li><strong>1 Enginseer:</strong> add when attrition is the reason missions collapse.</li>
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">Cover-dependent. Spread units across multiple positions and protect your Tech-Priests before chasing damage.</p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card/30 p-5">
            <h3 className="text-base font-bold text-foreground">Necron Starter Logic</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li><strong>Warrior core:</strong> use basic bodies to take space and create repeatable damage.</li>
              <li><strong>Immortal-style threat:</strong> add stronger damage only after the core is stable.</li>
              <li><strong>Mobile bodyguard:</strong> keep one answer near Nefershah or any mission-critical leader.</li>
              <li><strong>Fallback lane:</strong> keep one route open so reanimation timing does not leave the board empty.</li>
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">Aggression-first does not mean reckless. Push after the leader lane and fallback route are readable.</p>
          </div>
        </div>
      </section>

      <ArticleImage
        src={mechanicusIIImages.screenshot4}
        alt="Mechanicus II destructible battlefield cover and environmental pressure"
        caption="Terrain changes can make a lower-tier unit useful if it opens the correct lane at the correct time."
      />

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">When to Ignore the Tier List</h2>
        <p className="leading-relaxed text-muted-foreground">
          Ignore the ranking when the mission is asking for a specific job. If
          the objective requires interaction, a mobile runner can be better than
          another damage piece. If the map punishes open ground, a support or
          bodyguard can be better than a second attacker. If the enemy keeps
          breaking your line, a unit that looks mediocre on damage can be the
          reason your best unit gets to act twice. This is where many thin tier
          pages fail: they answer "who is strong?" but not "what problem am I
          losing to?" Use the table below before replacing your whole roster.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">You keep losing because...</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Roster fix</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Do not overreact by...</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Leader dies early", "Add mobility, bodyguard spacing, and safer opening lanes.", "Adding only more damage."],
                ["Damage feels low", "Check line of sight, resource flow, and whether targets are in cover.", "Dropping every support unit."],
                ["Missions drag too long", "Improve repeatable damage lanes and objective timing.", "Chasing one-turn burst builds you cannot sustain."],
                ["Units die before acting", "Rebuild around cover, turn order, and fallback positions.", "Calling the unit bad after one exposed deployment."],
              ].map(([problem, fix, avoid]) => (
                <tr key={problem} className="border-b border-border/30 last:border-0">
                  <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{problem}</th>
                  <td className="px-4 py-3 text-muted-foreground">{fix}</td>
                  <td className="px-4 py-3 text-muted-foreground">{avoid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ArticleImage
        src={mechanicusIIImages.screenshot5}
        alt="Mechanicus II character customization and unit build planning"
        caption="Build choices matter most when they support a repeated job across several missions, not a single perfect screenshot."
      />
    </MechanicusIIArticle>
  );
}
