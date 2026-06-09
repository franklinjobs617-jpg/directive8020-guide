import { ArticleImage } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { MechanicusIIArticle } from "@/components/mechanicus-ii-article";
import {
  createMechanicusIIMetadata,
  mechanicusIINecronRows,
  mechanicusIIImages,
} from "@/lib/mechanicus-ii";

const title = "Mechanicus II Necron Campaign Guide: Dominion, Units & Strategy";
const description =
  "Complete Necron campaign guide for Warhammer 40,000: Mechanicus II. Dominion economy explained, unit roles, Reanimation Protocols, bodyguard tactics, and mission strategy.";
const canonical = "/games/mechanicus-ii/necron-guide";

export const metadata = createMechanicusIIMetadata({
  title,
  description,
  canonical,
  image: mechanicusIIImages.screenshot2,
});

const faqs = [
  {
    question: "How do Necrons work in Mechanicus II?",
    answer:
      "Necrons use Dominion instead of Cognition, so their strongest turns come from damage pressure, board tempo, and keeping leaders safe while the faction snowballs. Reanimation gives room for risk, but it does not erase positioning mistakes.",
  },
  {
    question: "What are Reanimation Protocols?",
    answer:
      "Reanimation Protocols let Necron units return after being downed, depending on unit type and mission state. Treat this as tempo insurance, not immortality. If a downed body leaves your leader exposed or your damage lane empty, the fight can still fall apart.",
  },
  {
    question: "Should I play Necrons or Mechanicus first?",
    answer:
      "Pick Mechanicus first if you learn tactics games through cover, support, and safer positions. Pick Necrons first if you learn faster through pressure, trading, and aggressive tempo. The claim that one side is always the correct first pick is too broad.",
  },
];

const searchIntentRows = [
  {
    query: "Mechanicus II Necron guide",
    answer:
      "Necrons reward pressure. Build Dominion through useful damage turns, protect the leader lane, use reanimation as tempo insurance, and break cover only when it creates a better lane.",
    href: "#necron-guide",
    label: "Necrons",
  },
  {
    query: "Mechanicus II Dominion explained",
    answer:
      "Dominion is the Necron momentum layer. Create early damage, convert it into better turns, and avoid passive openings where the enemy controls the board first.",
    href: "#dominion",
    label: "Dominion",
  },
  {
    query: "Mechanicus II Canoptek Wraith",
    answer:
      "Use Wraith-style mobility as leader protection and emergency angle correction. It is strongest when it prevents a reset, not when it chases isolated damage.",
    href: "#wraith",
    label: "Wraith",
  },
];

const jumpLinks = [
  { href: "#necron-guide", label: "Necron guide" },
  { href: "#dominion", label: "Dominion" },
  { href: "#wraith", label: "Bodyguard rules" },
  { href: "/games/mechanicus-ii/unit-tier-list", label: "Unit tier list" },
  { href: "/games/mechanicus-ii/factions", label: "Factions compared" },
];

export default function MechanicusIINecronPage() {
  return (
    <MechanicusIIArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Necron Campaign"
      heroImage={mechanicusIIImages.screenshot2}
      heroAlt="Mechanicus II Necron tomb world tactical combat"
      faqs={faqs}
      showSources={false}
    >
      <BlufBox title="BLUF">
        The Necron campaign is not "charge forward and trust reanimation."
        That logic is bad because it confuses faction fantasy with mission
        execution. The real loop is pressure, protection, and conversion: create
        damage early, keep Nefershah or other mission-critical leaders out of
        collapse range, and use reanimation timing to recover board tempo before
        the enemy turns a downed unit into a lost lane.
      </BlufBox>

      <SearchAnswerPanel
        title="Necron Campaign Guide"
        answer="Necrons reward controlled aggression. Build Dominion through useful damage, protect the leader lane, use reanimation as tempo insurance, and break terrain only when it opens a better turn."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <section id="necron-guide">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Necron Campaign Strategy</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          A good Necron guide has to serve two different players. New players
          need to know why the faction feels punishing when they hesitate. Older
          tactics players need to know when the aggressive answer becomes
          overextension. This page treats launch-window information as a
          practical framework rather than a final mission-by-mission script. If
          a later patch changes ability values or exact unit behavior, the
          decision rules still hold: protect the mission anchor, create damage
          lanes, convert Dominion, and do not leave the whole board dependent on
          one resurrecting unit.
        </p>
        <ActionTable rows={mechanicusIINecronRows} />
      </section>

      <ArticleImage
        src={mechanicusIIImages.screenshot2}
        alt="Mechanicus II Necron tomb world campaign battlefield"
        caption="The Necron campaign rewards pressure, but the safest pressure starts with a protected leader lane."
      />

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">First Three Turn Plan</h2>
        <p className="leading-relaxed text-muted-foreground">
          On turn one, do not ask "how much damage can I do?" Ask which lane
          keeps the leader alive and which enemy position can be pressured
          without losing the fallback route. On turn two, convert the safest
          damage lane into Dominion pressure or enemy displacement. On turn
          three, decide whether the fight is now a push, a reset, or an
          objective race. This three-turn check gives new players a repeatable
          opening and gives veteran players a fast way to identify whether the
          map rewards aggression or patience.
        </p>
      </section>

      <section id="dominion" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Dominion vs Cognition</h2>
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Aspect</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Necrons (Dominion)</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mechanicus (Cognition)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["How you get it", "Create useful damage turns and keep tempo active.", "Use unit actions, positioning, and resource habits to support Cognition flow."],
                ["Persistence", "Treat it as mission tempo; verify exact behavior in the current patch.", "Treat it as mission tempo; verify exact behavior in the current patch."],
                ["Playstyle", "Controlled aggression: pressure, lane creation, and leader protection.", "Positional control: cover, timing, support, and specialist protection."],
                ["Defense", "Reanimation and bodyguard spacing buy time after bad trades.", "Cover and support timing reduce the chance of bad trades."],
                ["Beginner friendly?", "Good for players who learn by pushing tempo and accepting risk.", "Good for players who learn by slowing down and stabilizing positions."],
                ["Leader risk", "Keep Nefershah near safe mid-line support, not isolated front pressure.", "Keep Faustinius protected until a mission proves exposure is safe."],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{row[0]}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ArticleImage
        src={mechanicusIIImages.screenshot4}
        alt="Mechanicus II battlefield terrain and destructible cover"
        caption="Breaking cover is correct only when it creates a better lane. Random destruction can expose your own leader just as easily."
      />

      <section id="wraith" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Bodyguard and Reanimation Rules</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-lg border border-border/50 bg-card/30 p-5">
            <h3 className="text-base font-bold text-foreground">For new players</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Before ending a turn, ask which enemy can reach your leader.</li>
              <li>Keep one mobile rescue option within useful range of that lane.</li>
              <li>Do not count a reanimating unit as active board control.</li>
              <li>Use basic bodies to block clean paths, not only to deal damage.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border/50 bg-card/30 p-5">
            <h3 className="text-base font-bold text-foreground">For experienced players</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Trade a body only when the next activation still leaves a safe lane.</li>
              <li>Use mobility to change enemy targeting, not just to escape after a mistake.</li>
              <li>Break cover to force movement before committing your main damage.</li>
              <li>Track which unit is allowed to fail and which unit must survive.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Necron Failure Diagnosis</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          If a Necron mission feels unfair, do not immediately blame the unit
          list. Most failed runs come from one of four mistakes: the leader is
          too far forward, Dominion is not being created early enough, a downed
          unit leaves the board empty, or terrain was destroyed without a
          follow-up lane. Diagnose the failure before changing the whole roster.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Symptom</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Likely cause</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Fix next attempt</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Leader dies while enemies are low", "Damage plan worked, protection plan failed.", "Move the leader lane back one step and keep mobility nearby."],
                ["Dominion never snowballs", "Opening turns are too passive or targets stay protected.", "Create two safe damage lanes before ending turn one."],
                ["Reanimation does not save the fight", "The downed unit was holding the only useful lane.", "Keep a second body ready before trading the first one."],
                ["Cover breaks but nothing improves", "Terrain destruction was cosmetic, not tactical.", "Break only the cover that opens a shot, flank, or objective route."],
              ].map(([symptom, cause, fix]) => (
                <tr key={symptom} className="border-b border-border/30 last:border-0">
                  <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{symptom}</th>
                  <td className="px-4 py-3 text-muted-foreground">{cause}</td>
                  <td className="px-4 py-3 text-muted-foreground">{fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ArticleImage
        src={mechanicusIIImages.screenshot1}
        alt="Mechanicus II command bridge and tactical planning screen"
        caption="Campaign success comes from matching faction identity to mission objectives, not copying a universal script."
      />
    </MechanicusIIArticle>
  );
}
