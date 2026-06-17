import Image from "next/image";
import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { CursemarkArticle } from "@/components/cursemark-article";
import { cursemark } from "@/lib/games";
import {
  createCursemarkMetadata,
  cursemarkImages,
  cursemarkQuickFacts,
  cursemarkStartRows,
} from "@/lib/cursemark";

const title = "Cursemark Guide: Beginner Tips, Rune Crafting, Best Builds & Boss Strategies";
const description =
  "Cursemark game guide hub for the dark fantasy action roguelite from CLYDE Games. Covers beginner tips, rune crafting, best builds, boss strategies, system requirements, Steam Deck, and buying advice.";
const canonical = "/games/cursemark";

export const metadata = createCursemarkMetadata({
  title,
  description,
  canonical,
  image: cursemarkImages.siteHero,
});

const faqs = [
  {
    question: "Is Cursemark related to Elden Ring's Cursemark of Death?",
    answer:
      "No. Cursemark is a completely separate dark fantasy action roguelite from CLYDE Games and published by Mad Mushroom. It has no connection to Elden Ring, FromSoftware, or the Cursemark of Death item. The shared name is purely coincidental — Cursemark is its own standalone game about rune crafting and hack-and-slash combat across three handcrafted biomes.",
  },
  {
    question: "What makes Cursemark different from other roguelites?",
    answer:
      "Cursemark's rune system is its defining innovation. You socket ability-transforming runes into four slots (attack, spell, ward, ultimate), and nearly every rune meaningfully changes how those abilities behave. Hidden elemental synergies between runes — like Fire + Poison creating burning pyres or Ice + Lightning causing shatter effects — reward experimentation far beyond what most roguelites offer. No two runs feel the same.",
  },
  {
    question: "Is Cursemark a roguelike or roguelite?",
    answer:
      "Cursemark is a roguelite, not a roguelike. You keep permanent upgrades (sigils) between runs, which carry over even after death. Wells let you invest currency into permanent stat upgrades, and corrupted altars unlock new abilities that persist across all future runs. Death resets your runes and in-run items, but your character permanently grows stronger over time.",
  },
  {
    question: "How many hours of content does Cursemark have?",
    answer:
      "Cursemark currently offers approximately 6 hours of unique content across 3 handcrafted biomes in Early Access. Completionists can expect 10-15 hours to unlock all sigils, discover every rune combination, and beat every boss on higher difficulties. More biomes and content are planned throughout Early Access.",
  },
  {
    question: "What is the best beginner build in Cursemark?",
    answer:
      "Start with the Divine Spear as your weapon (one-shots archers, two-shots most enemies), socket the Embershot rune into your attack slot, and use Poison Cloud as your spell rune. Prioritize health upgrades at wells and always break red vases for Botyl healing items. This setup carries new players through the first biome comfortably while teaching core rune mechanics.",
  },
];

const searchIntentRows = [
  {
    query: "Cursemark release date",
    answer: "Launched June 8, 2026 into Steam Early Access. $14.99 with a 15% launch discount.",
    href: "/games/cursemark/release-date",
    label: "Release",
  },
  {
    query: "Cursemark beginner guide",
    answer: "Pick Divine Spear, socket Embershot, break red vases for healing, and prioritize health upgrades.",
    href: "/games/cursemark/beginner-guide",
    label: "First run",
  },
  {
    query: "Cursemark best runes",
    answer: "Embershot (S-tier attack rune), Chain Lightning, and Poison Cloud. Rarity does NOT equal power.",
    href: "/games/cursemark/rune-crafting",
    label: "Runes",
  },
  {
    query: "Cursemark best build",
    answer: "Divine Spear + Embershot + Poison Cloud + Voltara ultimate. Fire + poison synergy shreds bosses.",
    href: "/games/cursemark/best-builds",
    label: "Builds",
  },
  {
    query: "Cursemark boss guide",
    answer: "Learn dodge timing for red-glow attacks, exploit elemental weaknesses, use Embershot level 5 for DPS.",
    href: "/games/cursemark/boss-guide",
    label: "Bosses",
  },
];

const jumpLinks = [
  { href: "#start-here", label: "Start here" },
  { href: "#facts", label: "Quick facts" },
  { href: "#core-mechanics", label: "Core mechanics" },
  { href: "#guide-map", label: "Guide map" },
  { href: "/games/cursemark/best-builds", label: "Builds" },
  { href: "/games/cursemark/boss-guide", label: "Bosses" },
];

function getGuideImage(href: string) {
  if (href.includes("release")) return cursemarkImages.hero;
  if (href.includes("beginner")) return cursemarkImages.combat;
  if (href.includes("rune")) return cursemarkImages.runes;
  if (href.includes("build")) return cursemarkImages.hero;
  if (href.includes("boss")) return cursemarkImages.bosses;
  if (href.includes("system")) return cursemarkImages.hero;
  if (href.includes("steam-deck") || href.includes("deck")) return cursemarkImages.hero;
  if (href.includes("worth")) return cursemarkImages.worthIt;
  return cursemarkImages.siteHero;
}

export default function CursemarkHubPage() {
  return (
    <CursemarkArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Cursemark"
      heroImage={cursemarkImages.siteHero}
      heroAlt="Cursemark dark fantasy action roguelite guide hub"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What is Cursemark?"
        answer="Cursemark is a dark fantasy action roguelite developed by CLYDE Games and published by Mad Mushroom, launched in Steam Early Access on June 8, 2026. It combines hack-and-slash combat, spellcasting, and a deep rune crafting system that lets you socket ability-transforming runes into four skill slots for near-limitless build variety."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Quick Verdict">
        <p>
          <strong>Cursemark is a roguelite (not roguelike) — you keep permanent upgrades between runs.</strong>{" "}
          At $14.99, it offers ~6 hours of unique content across 3 handcrafted biomes with Very Positive Steam reviews.
          It is <strong>NOT</strong> related to Elden Ring's Cursemark of Death — Cursemark is a standalone dark fantasy
          action roguelite from CLYDE Games, published by Mad Mushroom.
        </p>
      </BlufBox>

      <section id="facts">
        <StatusPanel
          items={cursemarkQuickFacts.slice(0, 8).map(([label, value]) => ({
            label,
            value,
            status:
              (label === "Content Scope" || label === "Steam Review"
                ? "working"
                : "verified") as "verified" | "working",
          }))}
        />
      </section>

      <section id="start-here" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Start Here by Need</h2>
        <ArticleImage
          src={cursemarkImages.combat}
          alt="Cursemark combat gameplay showing hack-and-slash action and rune effects"
          caption="Cursemark combines fast-paced hack-and-slash combat with deep rune crafting. Use this hub to find exactly what you need — from release details to boss strategies."
        />
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player need</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best answer</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Guide</th>
              </tr>
            </thead>
            <tbody>
              {cursemarkStartRows.map(([need, answer, href]) => (
                <tr key={need} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{need}</td>
                  <td className="px-4 py-3 text-muted-foreground">{answer}</td>
                  <td className="px-4 py-3">
                    <Link href={href} className="text-foreground hover:underline">
                      Open guide
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="core-mechanics" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">How Cursemark Works</h2>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          Cursemark, the dark fantasy action roguelite from CLYDE Games, centers on a unique four-slot ability system.
          Every character has four ability slots: <strong>Attack</strong> (basic attacks), <strong>Spell</strong> (offensive special),
          <strong>Ward</strong> (defensive/recovery), and <strong>Ultimate</strong> (high-impact cooldown ability).
          You socket runes into each slot, and each rune fundamentally transforms what that ability does.
        </p>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          Runes drop from enemies, chests, and bosses throughout each biome. They come in rarities from common (gray) to
          legendary (gold), but crucially, <strong>rarity does not equal power</strong>. Some of the strongest runes —
          like Embershot — are uncommon (blue) rarity. What matters is how runes interact: fire runes ignite poison clouds
          to create burning pyres, ice and lightning combine for devastating shatter effects, and celestial runes purify
          rot-based debuffs.
        </p>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          Between runs, you spend currency at wells for permanent stat upgrades and cleanse corrupted altars to unlock
          new sigils that persist across all future runs. Death resets your current runes and items, but your permanent
          power grows steadily — this is what makes Cursemark a roguelite rather than a roguelike.
        </p>
        <ArticleImage
          src={cursemarkImages.runes}
          alt="Cursemark rune crafting interface showing four ability slots and rune socketing"
          caption="The rune crafting screen is where you socket runes into Attack, Spell, Ward, and Ultimate slots. Experiment with elemental combinations — hidden synergies are the key to powerful builds."
        />
      </section>

      <section id="guide-map" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Cursemark Guide Map</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {cursemark.guideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group overflow-hidden rounded-lg border border-border bg-white transition-colors hover:border-border"
            >
              <div className="relative aspect-video">
                <Image
                  src={getGuideImage(guide.href)}
                  alt={`${guide.title} Cursemark guide image`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 opacity-30" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-foreground group-hover:text-foreground">
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
    </CursemarkArticle>
  );
}
