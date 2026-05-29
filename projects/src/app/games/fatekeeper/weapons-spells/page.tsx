import Link from "next/link";
import { ArticleImage, VideoEmbed } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { FatekeeperArticle } from "@/components/fatekeeper-article";
import {
  createFatekeeperMetadata,
  fatekeeperImages,
  fatekeeperVideos,
  fatekeeperWeaponSpellRows,
} from "@/lib/fatekeeper";

const title = "Fatekeeper Weapons & Spells Guide: Early Loadouts, Upgrade Priority & Combat Roles";
const description =
  "Fatekeeper weapons and spells guide for early loadouts, melee timing, spell purpose, armor fit, relic synergy, upgrade priority, and combat role choices.";
const canonical = "/games/fatekeeper/weapons-spells";

export const metadata = createFatekeeperMetadata({
  title,
  description,
  canonical,
  image: fatekeeperImages.weapons,
});

const faqs = [
  {
    question: "What weapon should I use first in Fatekeeper?",
    answer:
      "Use the weapon whose range and recovery you can control reliably. Early consistency is better than a weapon that only works in perfect openings.",
  },
  {
    question: "How should I use spells?",
    answer:
      "Give each spell one job: opener, ranged punish, pressure tool, control option, or emergency answer.",
  },
  {
    question: "Should I upgrade weapons or spells first?",
    answer:
      "Upgrade the tool you use every fight before investing in niche options or untested late-game combinations.",
  },
  {
    question: "Are weapon stats final?",
    answer:
      "Do not treat launch-window numbers as final until the live build, patches, and completed routes are tested.",
  },
];

const searchIntentRows = [
  {
    query: "Fatekeeper weapons",
    answer: "Choose by range, recovery, and how often the weapon solves normal fights safely.",
    href: "#loadout-table",
    label: "Weapons",
  },
  {
    query: "Fatekeeper spells",
    answer: "A spell is useful when it has a specific job and does not leave you exposed after casting.",
    href: "#loadout-table",
    label: "Spells",
  },
  {
    query: "Best early loadout",
    answer: "Use one reliable melee weapon, one spell purpose, armor that fits your style, and relics that support the same plan.",
    href: "#early-loadout",
    label: "Loadout",
  },
  {
    query: "Upgrade priority",
    answer: "Upgrade common-use tools first, then add counters for the enemy type blocking progress.",
    href: "#upgrade-priority",
    label: "Upgrade",
  },
];

const jumpLinks = [
  { href: "#early-loadout", label: "Early loadout" },
  { href: "#loadout-table", label: "Roles" },
  { href: "#upgrade-priority", label: "Upgrades" },
  { href: "/games/fatekeeper/best-builds", label: "Builds" },
  { href: "/games/fatekeeper/relics-upgrades", label: "Relics" },
  { href: "/games/fatekeeper/bosses-enemies", label: "Enemies" },
];

const upgradeRows = [
  ["Reliable melee option", "First", "It handles the most encounters and teaches recovery windows."],
  ["Core spell", "Second", "It should solve range, opening, or pressure problems the weapon cannot."],
  ["Armor fit", "Third", "Survival and movement comfort matter once enemies punish mistakes."],
  ["Relic synergy", "Fourth", "Passive value is strongest after the active build direction is clear."],
  ["Experimental side option", "Later", "Save experiments for after the first build can clear normal fights."],
];

export default function FatekeeperWeaponsSpellsPage() {
  return (
    <FatekeeperArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Weapons & Spells"
      heroImage={fatekeeperImages.weapons}
      heroAlt="Fatekeeper weapons and spells guide image"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="How should you choose weapons and spells in Fatekeeper?"
        answer="Choose one reliable melee weapon and one spell with a clear job. Upgrade the tools used in most fights first, then add relics and armor that support the same combat plan."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Loadout Rule">
        <p>
          <strong>A loadout is not stronger because it has more options.</strong>{" "}
          It is stronger when the weapon, spell, armor, and relics all answer
          the same combat problem.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2 id="early-loadout">Best Early Loadout Structure</h2>
        <ArticleImage
          src={fatekeeperImages.siteCombatPoster}
          alt="Fatekeeper early weapon and spell loadout image"
          caption="Start with a weapon you can control, then add a spell that solves a specific range or pressure problem."
        />
        <p>
          For a first run, avoid swapping every new item immediately. Test one
          weapon until its range and recovery feel clear, then add one spell
          that covers a weakness. If the choice starts shaping your whole run,
          compare it with the{" "}
          <Link href="/games/fatekeeper/best-builds">best builds guide</Link>.
        </p>

        <h2 id="loadout-table">Weapon, Spell, and Gear Roles</h2>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Choice</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Use it for</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Caution</th>
            </tr>
          </thead>
          <tbody>
            {fatekeeperWeaponSpellRows.map(([choice, use, caution]) => (
              <tr key={choice} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{choice}</td>
                <td className="px-4 py-3 text-muted-foreground">{use}</td>
                <td className="px-4 py-3 text-muted-foreground">{caution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <VideoEmbed {...fatekeeperVideos.overview} />

      <section className="prose-game">
        <h2 id="upgrade-priority">Upgrade Priority</h2>
        <ArticleImage
          src={fatekeeperImages.magic}
          alt="Fatekeeper spell and upgrade priority image"
          caption="Upgrade choices should make the common route safer before chasing rare counters."
        />
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Upgrade target</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Priority</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Reason</th>
            </tr>
          </thead>
          <tbody>
            {upgradeRows.map(([target, priority, reason]) => (
              <tr key={target} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{target}</td>
                <td className="px-4 py-3 text-muted-foreground">{priority}</td>
                <td className="px-4 py-3 text-muted-foreground">{reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FatekeeperArticle>
  );
}
