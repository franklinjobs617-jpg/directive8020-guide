import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { FatekeeperArticle } from "@/components/fatekeeper-article";
import {
  createFatekeeperMetadata,
  fatekeeperImages,
  fatekeeperRelicRows,
} from "@/lib/fatekeeper";

const title = "Fatekeeper Relics & Upgrades Guide: What to Track, Equip and Build Around";
const description =
  "Fatekeeper relics and upgrades guide for tracking relic effects, comparing gear, choosing upgrade priorities, build synergy, exploration rewards, and Early Access caveats.";
const canonical = "/games/fatekeeper/relics-upgrades";

export const metadata = createFatekeeperMetadata({
  title,
  description,
  canonical,
  image: fatekeeperImages.relics,
});

const faqs = [
  {
    question: "How should I use relics in Fatekeeper?",
    answer:
      "Equip one relic at a time, record what it changes, then test it against the same enemy type before building around it.",
  },
  {
    question: "Are relic counts confirmed?",
    answer:
      "Do not rely on a final relic count until the live build and routes are fully checked.",
  },
  {
    question: "What should I upgrade first?",
    answer:
      "Upgrade the weapon, spell, armor, or relic effect that improves the action you repeat most often.",
  },
  {
    question: "Do relics affect builds?",
    answer:
      "Yes. Relics should support your melee, spell, survival, or exploration plan rather than sit outside the build.",
  },
];

const searchIntentRows = [
  {
    query: "Fatekeeper relics",
    answer: "Track location, effect, build fit, and whether the relic helps across repeated fights.",
    href: "#tracking",
    label: "Relics",
  },
  {
    query: "Fatekeeper upgrades",
    answer: "Upgrade common-use tools first, then support them with relic and armor synergy.",
    href: "#upgrade-checks",
    label: "Upgrades",
  },
  {
    query: "Best relics",
    answer: "Do not call a relic best until it helps across several enemies and fits a coherent build.",
    href: "#build-synergy",
    label: "Caution",
  },
  {
    query: "Relic locations",
    answer: "Track room, route condition, enemy nearby, and whether backtracking is possible.",
    href: "#tracking",
    label: "Track",
  },
];

const jumpLinks = [
  { href: "#tracking", label: "Tracking" },
  { href: "#upgrade-checks", label: "Upgrades" },
  { href: "#build-synergy", label: "Build synergy" },
  { href: "/games/fatekeeper/best-builds", label: "Builds" },
  { href: "/games/fatekeeper/weapons-spells", label: "Weapons" },
  { href: "/games/fatekeeper/world-exploration", label: "Exploration" },
];

const upgradeRows = [
  ["Combat feels unsafe", "Upgrade survival, armor fit, or a reliable defensive relic."],
  ["Damage feels low", "Upgrade the weapon or spell used in most fights before niche gear."],
  ["Spells feel awkward", "Improve spell reliability only after the spell has a clear purpose."],
  ["Exploration feels blocked", "Track whether relics open safer routing, resource value, or hidden areas."],
  ["Build feels scattered", "Stop upgrading and choose one active combat plan first."],
];

export default function FatekeeperRelicsUpgradesPage() {
  return (
    <FatekeeperArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Relics & Upgrades"
      heroImage={fatekeeperImages.siteGearPoster}
      heroAlt="Fatekeeper relics and upgrades guide image"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="How should you handle relics and upgrades in Fatekeeper?"
        answer="Treat relics as build tools, not collectibles to equip blindly. Record what each relic changes, test one at a time, and spend upgrades on the weapon, spell, armor, or passive effect you use most."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Relic Rule">
        <p>
          <strong>A relic is only strong if it changes a real outcome.</strong>{" "}
          Test whether it helps survival, damage windows, spell timing, or
          exploration before building around it.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2 id="tracking">Relic Tracking Checklist</h2>
        <ArticleImage
          src={fatekeeperImages.siteGearPoster}
          alt="Fatekeeper relic tracking and upgrade route image"
          caption="Track relic location, effect, build fit, and route condition before replacing or upgrading around it."
        />
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Moment</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to record</th>
            </tr>
          </thead>
          <tbody>
            {fatekeeperRelicRows.map(([moment, action]) => (
              <tr key={moment} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{moment}</td>
                <td className="px-4 py-3 text-muted-foreground">{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="upgrade-checks">Upgrade Checks</h2>
        <p>
          Upgrades should follow the problem you actually have. If the problem
          is active combat, start with the{" "}
          <Link href="/games/fatekeeper/weapons-spells">weapons and spells guide</Link>.
          If the problem is build direction, use the{" "}
          <Link href="/games/fatekeeper/best-builds">best builds guide</Link>.
        </p>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Problem</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Upgrade direction</th>
            </tr>
          </thead>
          <tbody>
            {upgradeRows.map(([problem, direction]) => (
              <tr key={problem} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{problem}</td>
                <td className="px-4 py-3 text-muted-foreground">{direction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="build-synergy">Build Synergy</h2>
        <ArticleImage
          src={fatekeeperImages.exploration}
          alt="Fatekeeper relic and spell build synergy image"
          caption="A relic should reinforce the same weapon, spell, survival, or exploration plan as the rest of the build."
        />
        <p>
          A relic that helps a magic-focused build may do little for a heavy
          melee route, and a defensive relic may be stronger than damage if you
          keep dying before a boss recovery window. Judge relics through the
          build you are actually playing.
        </p>
      </section>
    </FatekeeperArticle>
  );
}
