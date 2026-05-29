import Image from "next/image";
import Link from "next/link";
import { ArticleImage, VideoEmbed } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { FatekeeperArticle } from "@/components/fatekeeper-article";
import { fatekeeper } from "@/lib/games";
import {
  createFatekeeperMetadata,
  fatekeeperFirstThirtyRows,
  fatekeeperImages,
  fatekeeperQuickFacts,
  fatekeeperStartRows,
  fatekeeperVideos,
} from "@/lib/fatekeeper";

const title = "Fatekeeper Guide: Release Date, Beginner Tips, Builds, Weapons & Bosses";
const description =
  "Fatekeeper guide hub for release date, Early Access scope, beginner route, best builds, weapons, spells, relics, bosses, enemies, Steam Deck, and worth-it advice.";
const canonical = "/games/fatekeeper";

export const metadata = createFatekeeperMetadata({
  title,
  description,
  canonical,
  image: fatekeeperImages.hero,
});

const faqs = [
  {
    question: "When does Fatekeeper release?",
    answer:
      "Steam lists Fatekeeper for 2 Jun, 2026. Check the live Steam store button in your region before planning a launch session.",
  },
  {
    question: "What kind of game is Fatekeeper?",
    answer:
      "Fatekeeper is a first-person fantasy action RPG about melee combat, spells, relics, armor, weapons, handcrafted areas, hidden lore, and build choices.",
  },
  {
    question: "How much content is in Fatekeeper Early Access?",
    answer:
      "The Early Access description points to about 2 hours at launch and a full-version target around 15 hours, so buyers should treat the first release as a short foundation.",
  },
  {
    question: "What should beginners do first?",
    answer:
      "Start with a balanced melee-and-magic setup, learn enemy recovery windows, test one spell purpose, inspect every relic, and avoid spreading upgrades across unrelated styles.",
  },
  {
    question: "Is Fatekeeper on Steam Deck?",
    answer:
      "Steam Deck status should be treated as unconfirmed until the live compatibility badge and player reports are stable.",
  },
];

const searchIntentRows = [
  {
    query: "Fatekeeper release date",
    answer: "Steam lists Fatekeeper for 2 Jun, 2026, with Steam PC as the confirmed platform.",
    href: "/games/fatekeeper/release-date",
    label: "Release",
  },
  {
    query: "Fatekeeper beginner guide",
    answer: "Use the first 30 minutes to test movement, melee recovery, spell cost, relic effects, and one focused build direction.",
    href: "/games/fatekeeper/beginner-guide",
    label: "First run",
  },
  {
    query: "Fatekeeper best build",
    answer: "The safest first build is balanced melee plus one useful spell until final numbers are verified.",
    href: "/games/fatekeeper/best-builds",
    label: "Builds",
  },
  {
    query: "Fatekeeper weapons and spells",
    answer: "Pick one reliable weapon and one spell purpose before spending upgrades across multiple styles.",
    href: "/games/fatekeeper/weapons-spells",
    label: "Loadout",
  },
  {
    query: "Is Fatekeeper worth it?",
    answer: "Buy if a short Early Access slice is enough; wait if you need a complete campaign, reviews, or Deck proof.",
    href: "/games/fatekeeper/is-it-worth-it",
    label: "Buyer advice",
  },
];

const jumpLinks = [
  { href: "#start-here", label: "Start here" },
  { href: "#facts", label: "Facts" },
  { href: "#first-route", label: "First route" },
  { href: "#guide-map", label: "Guide map" },
  { href: "/games/fatekeeper/best-builds", label: "Builds" },
  { href: "/games/fatekeeper/bosses-enemies", label: "Bosses" },
];

function getGuideImage(href: string) {
  if (href.includes("release")) return fatekeeperImages.siteHero;
  if (href.includes("beginner")) return fatekeeperImages.siteCombatPoster;
  if (href.includes("build")) return fatekeeperImages.magic;
  if (href.includes("weapons")) return fatekeeperImages.weapons;
  if (href.includes("relics")) return fatekeeperImages.siteGearPoster;
  if (href.includes("bosses")) return fatekeeperImages.bosses;
  if (href.includes("deck")) return fatekeeperImages.siteYoutubeThumb;
  if (href.includes("worth")) return fatekeeperImages.worthIt;
  return fatekeeperImages.siteWorldPoster;
}

export default function FatekeeperHubPage() {
  return (
    <FatekeeperArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Fatekeeper"
      heroImage={fatekeeperImages.siteHero}
      heroAlt="Fatekeeper Steam key art"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What should you know before starting Fatekeeper?"
        answer="Fatekeeper is a Windows Steam Early Access first-person fantasy RPG. Start with a balanced melee-and-magic build, read enemy patterns before spending upgrades, and treat final boss routes, build meta, Steam Deck status, and full item data as unconfirmed until the live build is tested."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Quick Verdict">
        <p>
          <strong>Fatekeeper is best approached as a short Early Access RPG slice.</strong>{" "}
          Use the first run to learn sword timing, spell purpose, relic effects,
          and exploration habits. If you need a complete campaign or final build
          database on day one, wait for the full version or tested post-launch
          guides.
        </p>
      </BlufBox>

      <VideoEmbed {...fatekeeperVideos.overview} />

      <section id="facts">
        <StatusPanel
          items={fatekeeperQuickFacts.slice(0, 8).map(([label, value]) => ({
            label,
            value,
            status: label === "Unlock caveat" || label === "Content scope" ? ("working" as const) : ("verified" as const),
          }))}
        />
      </section>

      <section id="start-here" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Start Here by Need</h2>
        <ArticleImage
          src={fatekeeperImages.siteWorldPoster}
          alt="Fatekeeper guide hub handcrafted world image"
          caption="Use this hub as a practical route map: release facts, first-session advice, builds, weapons, spells, relics, bosses, exploration, device checks, and buying guidance."
        />
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player need</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best answer</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Guide</th>
              </tr>
            </thead>
            <tbody>
              {fatekeeperStartRows.map(([need, answer, href]) => (
                <tr key={need} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{need}</td>
                  <td className="px-4 py-3 text-muted-foreground">{answer}</td>
                  <td className="px-4 py-3">
                    <Link href={href} className="text-d8020 hover:underline">
                      Open guide
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="first-route" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">First 30 Minutes</h2>
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Step</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Do this</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {fatekeeperFirstThirtyRows.map((row) => (
                <tr key={row.step} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{row.step}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.doThis}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="guide-map" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Fatekeeper Guide Map</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {fatekeeper.guideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group overflow-hidden rounded-lg border border-border/50 bg-card/30 transition-colors hover:border-d8020/40"
            >
              <div className="relative aspect-video">
                <Image
                  src={getGuideImage(guide.href)}
                  alt={`${guide.title} Fatekeeper guide image`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-foreground group-hover:text-d8020">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {guide.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </FatekeeperArticle>
  );
}
