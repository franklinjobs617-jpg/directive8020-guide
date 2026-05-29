import Link from "next/link";
import { ArticleImage, VideoEmbed } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { FatekeeperArticle } from "@/components/fatekeeper-article";
import {
  createFatekeeperMetadata,
  fatekeeperImages,
  fatekeeperQuickFacts,
  fatekeeperVideos,
} from "@/lib/fatekeeper";

const title = "Fatekeeper Release Date: Early Access, Steam Time, Platforms & Console Status";
const description =
  "Fatekeeper release date guide covering Steam Early Access timing, Windows PC platform status, SteamDB unlock caveat, console status, language, features, and launch checks.";
const canonical = "/games/fatekeeper/release-date";

export const metadata = createFatekeeperMetadata({
  title,
  description,
  canonical,
  image: fatekeeperImages.hero,
});

const faqs = [
  {
    question: "What is the Fatekeeper release date?",
    answer:
      "Steam lists Fatekeeper for 2 Jun, 2026. Check the live Steam store button in your region before planning an install or launch session.",
  },
  {
    question: "What time does Fatekeeper unlock?",
    answer:
      "SteamDB tracking points to 2 June 2026 at 17:00 UTC, but Steam store state should be checked directly because launch timing can vary by region and store update.",
  },
  {
    question: "Is Fatekeeper Early Access?",
    answer:
      "Yes. Fatekeeper is presented as an Early Access game, not a finished 1.0 release.",
  },
  {
    question: "Is Fatekeeper on PS5 or Xbox?",
    answer:
      "Windows PC via Steam is the confirmed public platform. Do not plan around PS5, Xbox, Switch, or Game Pass unless an official store page appears.",
  },
  {
    question: "How much content is in Early Access?",
    answer:
      "The Early Access description points to about 2 hours now, with a full-version target around 15 hours.",
  },
];

const searchIntentRows = [
  {
    query: "Fatekeeper release date",
    answer: "Steam lists Fatekeeper for 2 Jun, 2026.",
    href: "#release-status",
    label: "Date",
  },
  {
    query: "Fatekeeper unlock time",
    answer: "SteamDB tracking points to 17:00 UTC, but the Steam store button is the final live check.",
    href: "#store-checklist",
    label: "Time",
  },
  {
    query: "Fatekeeper Early Access",
    answer: "The launch is Early Access with a short initial slice, not the full 1.0 campaign.",
    href: "#early-access",
    label: "Scope",
  },
  {
    query: "Fatekeeper PS5 Xbox console",
    answer: "No console version is confirmed by the current public Steam platform data.",
    href: "#platforms",
    label: "Platforms",
  },
];

const jumpLinks = [
  { href: "#release-status", label: "Release status" },
  { href: "#early-access", label: "Early Access" },
  { href: "#platforms", label: "Platforms" },
  { href: "#store-checklist", label: "Checklist" },
  { href: "/games/fatekeeper/steam-deck-controller", label: "PC and Deck" },
  { href: "/games/fatekeeper/is-it-worth-it", label: "Worth it" },
];

const platformRows = [
  ["Windows PC / Steam", "Confirmed", "Use Steam for release status, install button, features, language, and PC requirements."],
  ["PS5", "Not confirmed", "Wait for an official PlayStation store page before planning console play."],
  ["Xbox", "Not confirmed", "Do not assume Game Pass or Xbox support without an official listing."],
  ["Nintendo Switch", "Not confirmed", "Treat handheld console support as unannounced."],
  ["Steam Deck", "Needs live compatibility check", "Use the Steam Deck guide before buying only for handheld play."],
];

const checklistRows = [
  ["Steam button", "Confirm whether the page says coming soon, install, purchase, or play in your region."],
  ["Price", "Check the live regional price; do not rely on old screenshots or third-party snippets."],
  ["Reviews", "Use reviews only after they are visible and recent enough to reflect the current build."],
  ["Patch notes", "Read launch notes for crashes, performance, saves, and Early Access changes."],
  ["Hardware", "Compare your PC against the official 16 GB RAM, DX12, and RTX 3070 / RX 6800 XT baseline."],
];

export default function FatekeeperReleaseDatePage() {
  return (
    <FatekeeperArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Release Date"
      heroImage={fatekeeperImages.siteHero}
      heroAlt="Fatekeeper release date and Early Access image"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="When does Fatekeeper release?"
        answer="Steam lists Fatekeeper for 2 Jun, 2026 as a Windows PC Early Access release. SteamDB timing points to 17:00 UTC, but the live Steam store button is the safest availability check."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Release Answer">
        <p>
          <strong>Fatekeeper is a Steam PC Early Access release listed for 2 Jun, 2026.</strong>{" "}
          Treat console versions, Steam Deck comfort, final price, and review
          signal as live checks rather than assumptions.
        </p>
      </BlufBox>

      <VideoEmbed {...fatekeeperVideos.overview} />

      <div id="release-status">
        <StatusPanel
          items={fatekeeperQuickFacts.slice(0, 6).map(([label, value]) => ({
            label,
            value,
            status: label === "Unlock caveat" ? ("working" as const) : ("verified" as const),
          }))}
        />
      </div>

      <section className="prose-game">
        <h2 id="early-access">Early Access Scope</h2>
        <ArticleImage
          src={fatekeeperImages.siteYoutubeThumb}
          alt="Fatekeeper Early Access handcrafted world image"
          caption="Fatekeeper should be judged as an Early Access foundation first: combat feel, world tone, build choices, and stability matter more than full-campaign expectations."
        />
        <p>
          The most important buyer detail is scope. Fatekeeper is not launching
          as a finished 1.0 RPG. The Early Access description points to a short
          opening slice, so players should use the first build to test combat,
          exploration, spells, relics, and PC performance before expecting a
          complete campaign.
        </p>

        <h2 id="platforms">Platforms and Console Status</h2>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Platform</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player action</th>
            </tr>
          </thead>
          <tbody>
            {platformRows.map(([platform, status, action]) => (
              <tr key={platform} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{platform}</td>
                <td className="px-4 py-3 text-muted-foreground">{status}</td>
                <td className="px-4 py-3 text-muted-foreground">{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="store-checklist">Launch Store Checklist</h2>
        <p>
          Before buying, compare release status with the{" "}
          <Link href="/games/fatekeeper/is-it-worth-it">worth-it guide</Link>{" "}
          and check hardware through the{" "}
          <Link href="/games/fatekeeper/steam-deck-controller">Steam Deck and controller guide</Link>{" "}
          if handheld or controller play matters.
        </p>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Check</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to verify</th>
            </tr>
          </thead>
          <tbody>
            {checklistRows.map(([check, action]) => (
              <tr key={check} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{check}</td>
                <td className="px-4 py-3 text-muted-foreground">{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FatekeeperArticle>
  );
}
