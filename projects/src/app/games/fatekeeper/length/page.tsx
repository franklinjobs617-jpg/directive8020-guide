import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { FatekeeperArticle } from "@/components/fatekeeper-article";
import {
  createFatekeeperMetadata,
  fatekeeperLengthRows,
  fatekeeperImages,
} from "@/lib/fatekeeper";

const title = "Fatekeeper How Long to Beat: Early Access Length, Full Release & Save File";
const description =
  "How long is Fatekeeper? Current Early Access length (~2 hours), full release target (~15 hours), completionist notes, save file location, and Steam Cloud status.";
const canonical = "/games/fatekeeper/length";

export const metadata = createFatekeeperMetadata({
  title,
  description,
  canonical,
  image: fatekeeperImages.world,
});

const faqs = [
  {
    question: "How long is Fatekeeper right now?",
    answer:
      "Fatekeeper's Early Access launch build contains about 2 hours of content for a focused run through the available areas. Exploring every side path and testing multiple builds may add 1-2 hours.",
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
      "At $7-10 with a launch discount, the Early Access build is priced as an early supporter tier rather than a full game purchase. You're buying into the development journey — the price will increase as more content is added.",
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
        Fatekeeper's Early Access launch contains about <strong>2 hours</strong> of
        content. The full 1.0 release is targeting <strong>~15 hours</strong> on a
        development timeline of approximately 18 months. At the current $7-10 price
        point, you're buying early supporter access — the price will rise as content
        grows. Save files are in{" "}
        <strong>%USERPROFILE%\AppData\Local\Fatekeeper\Saved\SaveGames</strong>.
        Back them up before major patches.
      </BlufBox>

      <SearchAnswerPanel
        title="Fatekeeper Length & Save Data"
        answer="The Early Access launch build has about 2 hours of content. The full release targets 15 hours. Save files are at %USERPROFILE%\\AppData\\Local\\Fatekeeper\\Saved\\SaveGames."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <section id="current-length">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Current Early Access Length</h2>
        <ActionTable rows={fatekeeperLengthRows} />
        <p className="mt-4 leading-relaxed text-muted-foreground">
          The 2-hour estimate assumes you follow the main route without excessive
          backtracking or build experimentation. Fatekeeper's combat is methodical
          — learning enemy patterns, testing spell interactions, and comparing relic
          effects can easily extend your playtime. Treat the first run as a
          mechanics-learning pass, then decide whether to explore deeper or wait for
          more content.
        </p>
      </section>

      <section id="full-release" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Full Release Plan</h2>
        <div className="rounded-lg border border-border/50 bg-card/30 p-5">
          <p className="mb-3 leading-relaxed text-muted-foreground">
            Paraglacial (a team of 13) has shared an Early Access roadmap targeting
            approximately <strong>18 months</strong> of development before the 1.0
            release. The full campaign is expected to reach around{" "}
            <strong>15 hours</strong> of content.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            As with all Early Access titles, these targets may shift based on
            development progress, community feedback, and scope adjustments. Major
            content updates are expected to land every few months during Early
            Access. Check the Steam store page and official developer channels for
            the latest roadmap updates.
          </p>
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
              <li>• Press <strong>Win + R</strong>, paste the path above, and press Enter to open the folder directly.</li>
              <li>• Save files use the <strong>.sav</strong> extension. Each character/build has its own save slot.</li>
              <li>• <strong>Back up this folder</strong> before applying major Early Access patches — updates can occasionally break save compatibility.</li>
              <li>• If switching PCs, copy the entire SaveGames folder to the same path on the new machine.</li>
              <li>• The game uses <strong>manual saves only</strong> — there is no autosave system. Save frequently.</li>
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
