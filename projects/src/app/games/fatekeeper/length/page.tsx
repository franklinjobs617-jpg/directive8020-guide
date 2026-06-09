import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { FatekeeperArticle } from "@/components/fatekeeper-article";
import { ArticleImage } from "@/components/article-media";
import {
  createFatekeeperMetadata,
  fatekeeperLengthRows,
  fatekeeperImages,
} from "@/lib/fatekeeper";

const title = "How Long Is Fatekeeper? HLTB, Length, Playtime & Save File";
const description =
  "How long is Fatekeeper? Early Access takes about 2 hours, completionist playtime is 3-4 hours, and the full 1.0 target is about 15 hours.";
const canonical = "/games/fatekeeper/length";

export const metadata = createFatekeeperMetadata({
  title,
  description,
  canonical,
  image: fatekeeperImages.world,
});

const faqs = [
  {
    question: "How long is Fatekeeper?",
    answer:
      "Fatekeeper's Early Access launch build contains about 2 hours of content for a focused run through the available areas. Exploring every side path and testing multiple builds may add 1-2 hours.",
  },
  {
    question: "What is Fatekeeper HLTB or playtime?",
    answer:
      "Use 2 hours as the current HLTB-style main-route estimate, 3-4 hours for Early Access completionist playtime, and about 15 hours as the full-release target.",
  },
  {
    question: "How long will the full game be?",
    answer:
      "The developer roadmap targets around 15 hours for the full 1.0 release campaign. This is subject to change as Early Access development progresses over the planned ~18-month timeline.",
  },
  {
    question: "Where is the Fatekeeper save file located?",
    answer:
      "On Windows, save files are stored at %USERPROFILE%\\AppData\\Local\\Fatekeeper\\Saved\\SaveGames. Back up this folder before applying major patches during Early Access.",
  },
  {
    question: "Does Fatekeeper support Steam Cloud saves?",
    answer:
      "Steam Cloud is listed on the Fatekeeper store page. Verify sync is working before switching PCs. Manually back up your save folder as a precaution during Early Access.",
  },
  {
    question: "Is Fatekeeper worth the price for only 2 hours?",
    answer:
      "At $7-10 with a launch discount, the Early Access build is priced as an early supporter tier rather than a full game purchase. You're buying into the development journey -- the price will increase as more content is added.",
  },
];

const searchIntentRows = [
  {
    query: "Fatekeeper how long to beat",
    answer: "About 2 hours for a focused Early Access run. Full release targets 15 hours.",
    href: "#current-length",
    label: "Length",
  },
  {
    query: "Fatekeeper game length",
    answer: "EA launch: ~2 hours. Completionist: 3-4 hours. Full release target: ~15 hours.",
    href: "#current-length",
    label: "Hours",
  },
  {
    query: "How long is Fatekeeper?",
    answer: "Main route: about 2 hours right now. Completionist Early Access playtime: 3-4 hours.",
    href: "#current-length",
    label: "HLTB",
  },
  {
    query: "Fatekeeper HLTB / playtime",
    answer: "Treat HLTB as 2 hours for now, with a 15-hour full-release target.",
    href: "#current-length",
    label: "Playtime",
  },
  {
    query: "Fatekeeper save file location",
    answer: "Windows: %USERPROFILE%\\AppData\\Local\\Fatekeeper\\Saved\\SaveGames",
    href: "#save-file",
    label: "Save",
  },
  {
    query: "Fatekeeper Steam Cloud",
    answer: "Steam Cloud is listed on the store page. Verify sync before playing on another PC.",
    href: "#steam-cloud",
    label: "Cloud",
  },
  {
    query: "Fatekeeper worth it for 2 hours",
    answer: "At $7-10, it's priced as early supporter access. Price will increase with content updates.",
    href: "/games/fatekeeper/is-it-worth-it",
    label: "Value",
  },
];

const jumpLinks = [
  { href: "#current-length", label: "Current length" },
  { href: "#full-release", label: "Full release" },
  { href: "#save-file", label: "Save file" },
  { href: "#steam-cloud", label: "Steam Cloud" },
  { href: "/games/fatekeeper/is-it-worth-it", label: "Worth it?" },
];

const playerRows = [
  ["New player", "Plan for 2 hours on the main Early Access route, then add time if you die while learning melee timing.", "The first run includes learning cost: dodge rhythm, spell timing, relic reading, and route confidence."],
  ["Build tester", "Plan for 3-4 hours if you want to compare melee, spellblade, relic, and alchemy options.", "Testing a build properly means fighting similar enemies more than once instead of judging from one lucky room."],
  ["Completionist", "Plan for 3-4 hours in the current build, plus future revisits after major patches.", "Early Access content changes, so 100% completion is a moving target until 1.0."],
  ["Buyer checking value", "Treat current length as a short paid slice, not a full 15-hour RPG.", "The price and value question depends on whether you want to support and test the foundation now."],
  ["Returning player", "Back up saves before major updates and expect route, balance, or save compatibility changes.", "Early Access patches can change the practical length of replaying old content."],
];

const timeBudgetRows = [
  ["30 minutes", "Settings, first combat feel, movement comfort, and early route reading.", "Enough to decide if the first-person combat feel works for you."],
  ["2 hours", "Current main Early Access route and core systems.", "The best estimate for a focused HLTB-style main run."],
  ["3-4 hours", "Side paths, build tests, relic comparisons, alchemy checks, and repeated boss attempts.", "Best estimate for completionist-style Early Access playtime."],
  ["15 hours target", "Expected full-release campaign scope, subject to Early Access changes.", "Useful for long-term value, not current content size."],
];

export default function FatekeeperLengthPage() {
  return (
    <FatekeeperArticle
      title={title}
      description={description}
      canonical={canonical}
      label="How Long to Beat & Save File"
      heroImage={fatekeeperImages.world}
      heroAlt="Fatekeeper open world area showing the scale of the game's handcrafted environments"
      faqs={faqs}
    >
      <BlufBox title="BLUF">
        Two hours. That's what you get right now -- enough to test the combat, try
        a build, fight the first boss. The full game is aiming for 15 hours, about
        18 months out. At $7-10, it's cheap. No autosaves -- save manually, and
        back up{" "}
        <strong>%USERPROFILE%\AppData\Local\Fatekeeper\Saved\SaveGames</strong>{" "}
        before patches hit.
      </BlufBox>

      <SearchAnswerPanel
        title="Fatekeeper Length & Save Data"
        answer="About 2 hours in the current build, 3-4 hours for Early Access completionist playtime, and about 15 hours at full release. Manual saves only: no autosave."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <section id="current-length">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Current Early Access Length</h2>
        <ArticleImage
          src={fatekeeperImages.world}
          alt="Fatekeeper world scale and route length reference"
          caption="Current Fatekeeper length is short because the Early Access build is a focused slice, not the full 1.0 campaign."
        />
        <ActionTable rows={fatekeeperLengthRows} />
        <p className="mt-4 leading-relaxed text-muted-foreground">
          The 2-hour estimate assumes you follow the main route without excessive
          backtracking or build experimentation. Fatekeeper's combat is methodical
          -- learning enemy patterns, testing spell interactions, and comparing relic
          effects can easily extend your playtime. Treat the first run as a
          mechanics-learning pass, then decide whether to explore deeper or wait for
          more content.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Playtime by Player Type</h2>
        <ArticleImage
          src={fatekeeperImages.combat}
          alt="Fatekeeper combat playtime and boss learning curve"
          caption="The same two-hour slice can become longer when a player tests builds, learns boss timing, explores side paths, or restarts after deaths."
        />
        <p className="mb-4 leading-relaxed text-muted-foreground">
          A plain length answer is not enough for this SERP because players are
          asking different questions. Some want a quick HLTB number. Some want
          to know whether a short Early Access build is worth buying. Others
          want to know if build testing, alchemy, boss attempts, or exploration
          add meaningful time. Use the table below instead of treating every
          player like a speedrunner.
        </p>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player type</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Time expectation</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why</th>
            </tr>
          </thead>
          <tbody>
            {playerRows.map(([type, expectation, why]) => (
              <tr key={type} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{type}</th>
                <td className="px-4 py-3 text-muted-foreground">{expectation}</td>
                <td className="px-4 py-3 text-muted-foreground">{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section id="full-release" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Full Release Plan</h2>
        <ArticleImage
          src={fatekeeperImages.exploration}
          alt="Fatekeeper full release exploration and campaign scope"
          caption="The 15-hour target belongs to the planned full campaign, not the current Early Access build."
        />
        <div className="rounded-lg border border-border/50 bg-card/30 p-5">
          <p className="mb-3 leading-relaxed text-muted-foreground">
            Paraglacial (a team of 13) has shared an Early Access roadmap targeting
            approximately <strong>18 months</strong> of development before the 1.0
            release. The full campaign is expected to reach around{" "}
            <strong>15 hours</strong> of content.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Early Access timelines drift -- that's normal. Paraglacial is a tiny
            team (13 people). Major updates should land every few months. Keep an
            eye on the Steam page for roadmap changes.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Time Budget Cheat Sheet</h2>
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Available time</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best use</th>
              </tr>
            </thead>
            <tbody>
              {timeBudgetRows.map(([time, action, use]) => (
                <tr key={time} className="border-b border-border/30 last:border-0">
                  <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{time}</th>
                  <td className="px-4 py-3 text-muted-foreground">{action}</td>
                  <td className="px-4 py-3 text-muted-foreground">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="save-file" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Save File Location</h2>
        <div className="overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <div className="border-b border-border/50 bg-card/50 px-5 py-3">
            <code className="text-sm text-d8020">
              %USERPROFILE%\AppData\Local\Fatekeeper\Saved\SaveGames
            </code>
          </div>
          <div className="p-5">
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Press <strong>Win + R</strong>, paste the path above, and press Enter to open the folder directly.</li>
              <li>Save files use the <strong>.sav</strong> extension. Each character/build has its own save slot.</li>
              <li><strong>Back up this folder</strong> before applying major Early Access patches -- updates can occasionally break save compatibility.</li>
              <li>If switching PCs, copy the entire SaveGames folder to the same path on the new machine.</li>
              <li>The game uses <strong>manual saves only</strong> -- there is no autosave system. Save frequently.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="steam-cloud" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Steam Cloud Status</h2>
        <p className="leading-relaxed text-muted-foreground">
          Steam Cloud is listed as a supported feature on the Fatekeeper store page.
          However, during Early Access, always <strong>manually back up your save
          folder</strong> as a precaution. To verify Steam Cloud is working:
        </p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          <li>Launch Fatekeeper and create a manual save.</li>
          <li>Exit the game and wait for the Steam client to finish syncing (check the game's Library page for the cloud sync indicator).</li>
          <li>On a second PC (or after verifying via Steam's remote storage), confirm the save is accessible.</li>
        </ol>
      </section>
    </FatekeeperArticle>
  );
}
