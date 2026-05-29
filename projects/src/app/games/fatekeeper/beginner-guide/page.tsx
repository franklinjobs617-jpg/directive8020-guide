import Link from "next/link";
import { ArticleImage, VideoEmbed } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { FatekeeperArticle } from "@/components/fatekeeper-article";
import {
  createFatekeeperMetadata,
  fatekeeperFirstThirtyRows,
  fatekeeperImages,
  fatekeeperVideos,
} from "@/lib/fatekeeper";

const title = "Fatekeeper Beginner Guide: First 30 Minutes, Combat, Builds & Mistakes";
const description =
  "Fatekeeper beginner guide for the first 30 minutes, melee timing, spell use, relic checks, exploration rhythm, upgrade priorities, safe builds, and mistakes to avoid.";
const canonical = "/games/fatekeeper/beginner-guide";

export const metadata = createFatekeeperMetadata({
  title,
  description,
  canonical,
  image: fatekeeperImages.combat,
});

const faqs = [
  {
    question: "What should I do first in Fatekeeper?",
    answer:
      "Check controls and brightness, test melee recovery, cast one spell safely, inspect every item, explore one side path, then commit to one build direction.",
  },
  {
    question: "What is the best beginner build?",
    answer:
      "Use balanced melee plus one useful spell until final weapon, spell, and relic numbers are verified.",
  },
  {
    question: "Should I explore every side path immediately?",
    answer:
      "No. Explore side paths when you still have enough health, resources, and a clear route back.",
  },
  {
    question: "What beginner mistake should I avoid?",
    answer:
      "Do not spread upgrades across unrelated weapons, spells, and relics before you understand which style actually fits your combat habits.",
  },
];

const searchIntentRows = [
  {
    query: "Fatekeeper beginner guide",
    answer: "Use the first 30 minutes to learn controls, melee recovery, spell cost, item inspection, and one focused build direction.",
    href: "#first-30-minutes",
    label: "Start",
  },
  {
    query: "Fatekeeper tips",
    answer: "Read enemy patterns before attacking, test one spell purpose, and inspect relic effects before swapping gear.",
    href: "#combat-basics",
    label: "Tips",
  },
  {
    query: "Fatekeeper first build",
    answer: "Balanced melee plus one spell is the safest learning setup.",
    href: "/games/fatekeeper/best-builds",
    label: "Build",
  },
  {
    query: "Fatekeeper mistakes",
    answer: "Avoid overcommitting to heavy attacks, panic casting, blind relic swaps, and unfocused upgrades.",
    href: "#mistakes",
    label: "Avoid",
  },
];

const jumpLinks = [
  { href: "#first-30-minutes", label: "First 30 minutes" },
  { href: "#combat-basics", label: "Combat" },
  { href: "#upgrades", label: "Upgrades" },
  { href: "#mistakes", label: "Mistakes" },
  { href: "/games/fatekeeper/best-builds", label: "Builds" },
  { href: "/games/fatekeeper/world-exploration", label: "Exploration" },
];

const combatRows = [
  ["Melee range", "Test how far each swing reaches before using it under pressure."],
  ["Recovery", "After each attack, watch how long it takes before you can defend again."],
  ["Spell timing", "Cast after an enemy commits, not while guessing from unsafe range."],
  ["Relic effect", "Equip one relic at a time so you know what changed."],
  ["Retreat route", "Leave yourself space to back up before opening a new fight."],
];

const mistakeRows = [
  ["Spreading upgrades", "A shallow build makes every tool feel weak."],
  ["Panic casting", "A spell that misses can cost both time and resources."],
  ["Ignoring armor fit", "Gear should support how you actually fight."],
  ["Clearing side paths too early", "Curiosity is useful only if you can survive the return route."],
  ["Calling a meta too soon", "Early Access balance needs hands-on testing before final build claims are safe."],
];

export default function FatekeeperBeginnerGuidePage() {
  return (
    <FatekeeperArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Beginner Guide"
      heroImage={fatekeeperImages.siteCombatPoster}
      heroAlt="Fatekeeper beginner guide melee combat image"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What should beginners do first in Fatekeeper?"
        answer="Spend the first 30 minutes learning combat feel before chasing gear: check controls, test melee recovery, cast one spell safely, inspect every relic, explore one side path, then choose one focused build direction."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Beginner Rule">
        <p>
          <strong>Do not build before you understand your timing.</strong>{" "}
          Fatekeeper is a first-person RPG where a good loadout still fails if
          you attack during unsafe recovery, cast without a purpose, or ignore
          enemy patterns.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2 id="first-30-minutes">First 30 Minutes Route</h2>
        <ArticleImage
          src={fatekeeperImages.siteWorldPoster}
          alt="Fatekeeper first 30 minutes world route image"
          caption="The first route should teach controls, combat timing, spell purpose, relic inspection, and safe exploration before build specialization."
        />
      </section>

      <ActionTable rows={fatekeeperFirstThirtyRows} />

      <section className="prose-game">
        <h2 id="combat-basics">Combat Basics That Matter First</h2>
        <p>
          Before reading a full{" "}
          <Link href="/games/fatekeeper/weapons-spells">weapons and spells guide</Link>,
          learn how a normal enemy reacts to your range, attacks, blocks,
          dodges, and spell timing. Every later build depends on that baseline.
        </p>
      </section>

      <VideoEmbed {...fatekeeperVideos.overview} />

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Habit</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do</th>
            </tr>
          </thead>
          <tbody>
            {combatRows.map(([habit, action]) => (
              <tr key={habit} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{habit}</td>
                <td className="px-4 py-3 text-muted-foreground">{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="upgrades">Upgrade Priority</h2>
        <ArticleImage
          src={fatekeeperImages.siteGearPoster}
          alt="Fatekeeper relic and upgrade inspection image"
          caption="Upgrade the tool you use every fight before building around rare situations or unverified late-game assumptions."
        />
        <p>
          Your first upgrade priority should support the action you repeat most:
          melee safety, spell reliability, armor comfort, or relic synergy. If
          you are unsure, follow the{" "}
          <Link href="/games/fatekeeper/best-builds">safe beginner build</Link>{" "}
          instead of splitting resources.
        </p>

        <h2 id="mistakes">Beginner Mistakes to Avoid</h2>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mistake</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it hurts</th>
            </tr>
          </thead>
          <tbody>
            {mistakeRows.map(([mistake, reason]) => (
              <tr key={mistake} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{mistake}</td>
                <td className="px-4 py-3 text-muted-foreground">{reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FatekeeperArticle>
  );
}
