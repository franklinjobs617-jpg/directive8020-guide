import { CursemarkArticle } from "@/components/cursemark-article";
import { createCursemarkMetadata, cursemarkImages } from "@/lib/cursemark";
import { BlufBox, SearchAnswerPanel, ActionTable } from "@/components/guide-blocks";
import { ArticleImage } from "@/components/article-media";
import Link from "next/link";

const title = "Cursemark Beginner Guide: First Runs, Combat Tips, Rune Basics & Best Starter Build";
const description =
  "Cursemark beginner guide for the dark fantasy action roguelite. First run tips, best starting weapon (Divine Spear), rune system basics, healing with Botyls, permanent upgrades, and common mistakes.";
const canonical = "/games/cursemark/beginner-guide";

const faqs = [
  {
    question: "What weapon should I pick first in Cursemark?",
    answer:
      "The Divine Spear is the best starting weapon for new players. It one-shots archers, two-shots most standard enemies, and its poke attack concentrates damage in one direction for maximum rune synergy. The charged attack has excellent range and pierces through multiple enemies, making it forgiving for positioning mistakes.",
  },
  {
    question: "How does healing work in Cursemark?",
    answer:
      "Healing in Cursemark comes primarily from Botyls — healing items found by breaking red vases scattered throughout each biome. Always break red vases when you see them. Ward runes can also provide passive healing and damage reduction. Wells between biomes let you spend currency to increase your max health permanently.",
  },
  {
    question: "Should I equip runes immediately or save them?",
    answer:
      "Equip runes immediately. You lose all unequipped runes on death — only sigils (permanent upgrades) persist between runs. There is no benefit to hoarding runes for later. Socket the best runes you find into your four ability slots as soon as possible. If you find a better rune for a filled slot, you can swap it in.",
  },
  {
    question: "What are corrupted altars and should I interact with them?",
    answer:
      "Corrupted altars are one of the most important discoveries in Cursemark. Cleansing a corrupted altar unlocks a permanent sigil that persists across all future runs. These sigils provide powerful passive bonuses and sometimes unlock entirely new abilities. Always prioritize finding and cleansing corrupted altars in every biome — they represent permanent account progression.",
  },
  {
    question: "What is the biggest mistake new Cursemark players make?",
    answer:
      "The most common beginner mistake is judging runes by their rarity color. The Embershot rune, one of the strongest in the game, is only uncommon (blue) rarity. At level 5, it can melt bosses in seconds. Common (gray) and uncommon (blue) runes can dramatically outperform rare (purple) and legendary (gold) runes depending on your build and elemental synergies. Always test new runes instead of dismissing them based on color.",
  },
];

const firstRunPriorities = [
  {
    step: "1. Pick Divine Spear",
    doThis: "Select the Divine Spear as your starting weapon at the character select screen.",
    why: "Highest base damage, excellent range, pierces multiple enemies with charged attacks, and one-shots archers. By far the most forgiving weapon for new players learning enemy patterns.",
  },
  {
    step: "2. Break every red vase",
    doThis: "Smash red vases in every room and corridor. Listen for the distinct ceramic sound cue.",
    why: "Red vases drop Botyls (healing items) and occasionally low-tier runes. Healing is scarce in Cursemark — Botyls from red vases are your primary sustain between wells.",
  },
  {
    step: "3. Equip runes immediately",
    doThis: "Open your rune menu and socket every rune you find into Attack, Spell, Ward, or Ultimate slots.",
    why: "Unequipped runes are lost on death. There is no inventory or storage — use them or lose them. Even weak runes provide a power spike over empty slots.",
  },
  {
    step: "4. Prioritize health upgrades",
    doThis: "At wells between biomes, spend your first currency on max health increases.",
    why: "More health means more room for mistakes while learning enemy attack patterns. Health upgrades are permanent and carry across all runs.",
  },
  {
    step: "5. Find corrupted altars",
    doThis: "Explore thoroughly for corrupted altars — glowing, dark-tinged structures hidden in side rooms and off the main path.",
    why: "Cleansing altars unlocks permanent sigils. These are the most valuable form of progression in Cursemark and persist across all future runs.",
  },
  {
    step: "6. Learn dodge timing",
    doThis: "Watch for red-glow attacks (unblockable) and dodge-roll toward the enemy, not away.",
    why: "Dodging toward enemies positions you behind them for free counter-attacks. Most enemies have clear telegraph animations — learn them rather than panic-dodging.",
  },
  {
    step: "7. Experiment with rune combinations",
    doThis: "Try different rune pairings: put a fire rune in Attack and a poison rune in Spell to see what happens.",
    why: "Hidden elemental synergies are the core of Cursemark's combat depth. Fire + Poison creates burning pyres. Ice + Lightning causes shatter explosions. Discovery is rewarded.",
  },
  {
    step: "8. Don't skip the merchant",
    doThis: "Visit the wandering merchant when they appear. Buy Botyls and any runes that complement your build.",
    why: "The merchant sometimes sells runes you have not yet found as drops, and their Botyl stock can save a struggling run. Prices are reasonable for the value provided.",
  },
];

const commonMistakes = [
  {
    step: "Judging runes by rarity",
    doThis: "The Embershot rune (uncommon/blue) is one of the strongest in the game. Common runes can be build-defining.",
    why: "Rarity indicates drop frequency, not power. Some of the most powerful synergies involve common and uncommon runes that maximize elemental interactions.",
  },
  {
    step: "Ignoring the Ward slot",
    doThis: "Always socket something into your Ward slot, even if it is a low-tier defensive rune.",
    why: "An empty Ward slot means zero passive defense. Even the weakest ward rune provides damage reduction or healing that adds up significantly over a full biome run.",
  },
  {
    step: "Spending currency on weapon upgrades early",
    doThis: "Prioritize health and sigil unlocks before investing in weapon damage at wells.",
    why: "Weapon upgrades are lost on death if you swap weapons. Health and sigils are permanent. A dead character with a powerful weapon deals zero damage.",
  },
  {
    step: "Rushing through biomes",
    doThis: "Explore every room. Break every vase. Check every side path for corrupted altars and hidden chests.",
    why: "Cursemark rewards thorough exploration. Corrupted altars, hidden rune caches, and merchant spawns are often tucked away in optional rooms. Skipping them permanently slows your account progression.",
  },
  {
    step: "Sticking to one build forever",
    doThis: "Try different weapon and rune combinations even if your current setup is working.",
    why: "Cursemark's rune system has hidden depth. The build you discover on your tenth experiment might be twice as strong as your comfortable setup. Experimentation is the fastest route to finding overpowered combinations.",
  },
];

export const metadata = createCursemarkMetadata({
  title,
  description,
  canonical,
  image: cursemarkImages.siteHero,
});

export default function Page() {
  return (
    <CursemarkArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Beginner Guide"
      heroImage={cursemarkImages.combat}
      heroAlt="Cursemark beginner guide for new players"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="How should I start in Cursemark?"
        answer="Pick the Divine Spear as your starting weapon — it one-shots archers, two-shots most enemies, and its poke attack concentrates damage in one direction for maximum rune synergy. Prioritize health upgrades at wells, always break red vases for healing Botyls, and equip runes immediately (you lose everything on death except sigils). Clear corrupted altars for permanent upgrade unlocks."
        intentRows={[
          {
            query: "Cursemark best starting weapon",
            answer: "Divine Spear: highest base damage, pierces enemies, one-shots archers. Best choice for new players.",
            href: "/games/cursemark/beginner-guide",
            label: "Weapon",
          },
          {
            query: "Cursemark healing items",
            answer: "Break red vases for Botyls. Ward runes provide passive healing. Wells let you upgrade max health permanently.",
            href: "/games/cursemark/beginner-guide",
            label: "Healing",
          },
        ]}
        jumpLinks={[
          { href: "#first-run", label: "First run" },
          { href: "#mistakes", label: "Mistakes" },
          { href: "#slots", label: "Ability slots" },
          { href: "#progression", label: "Progression" },
        ]}
      />

      <BlufBox>
        <p>
          <strong>The single most important beginner tip: rarity does NOT equal power.</strong>{" "}
          The Embershot rune (uncommon/blue rarity) is one of the strongest runes in Cursemark. At level 5, it can
          melt bosses in seconds. Do not judge runes by their color — test everything you find. Cursemark, the dark
          fantasy action roguelite from CLYDE Games, rewards experimentation above all else.
        </p>
      </BlufBox>

      <section id="first-run" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">First Run Priorities</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Your first few runs in Cursemark are about learning, not winning. Focus on these priorities in order.
          Death is expected — each run teaches you enemy patterns and unlocks permanent upgrades that make the
          next run easier.
        </p>
        <ActionTable rows={firstRunPriorities} />
      </section>

      <ArticleImage
        src={cursemarkImages.combat}
        alt="Cursemark combat with Divine Spear showing poke attack range"
        caption="The Divine Spear's thrust attack has excellent range and pierces through multiple enemies. Combined with Embershot in your attack rune slot, each poke sends a wave of flame through everything in its path."
      />

      <section id="slots" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Understanding the Four Ability Slots</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Cursemark, the dark fantasy action roguelite, uses a four-slot ability system that is central to
          understanding how to build your character. Each slot serves a distinct role:
        </p>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Slot</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Function</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Best beginner rune</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">What it changes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-foreground">Attack</td>
                <td className="px-4 py-3 text-muted-foreground">Your basic attack combo.</td>
                <td className="px-4 py-3 font-medium text-foreground">Embershot</td>
                <td className="px-4 py-3 text-muted-foreground">Adds flame spray to every attack. Scales dramatically with upgrade levels.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-foreground">Spell</td>
                <td className="px-4 py-3 text-muted-foreground">Offensive special ability on cooldown.</td>
                <td className="px-4 py-3 font-medium text-foreground">Poison Cloud</td>
                <td className="px-4 py-3 text-muted-foreground">Enemies killed leave toxic clouds. Combines with fire for burning pyre synergy.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-foreground">Ward</td>
                <td className="px-4 py-3 text-muted-foreground">Defensive passive — always active.</td>
                <td className="px-4 py-3 font-medium text-foreground">Vitality Ward</td>
                <td className="px-4 py-3 text-muted-foreground">Passive health regeneration. Keeps you alive between Botyl pickups.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-foreground">Ultimate</td>
                <td className="px-4 py-3 text-muted-foreground">High-impact ability on a long cooldown.</td>
                <td className="px-4 py-3 font-medium text-foreground">Voltara</td>
                <td className="px-4 py-3 text-muted-foreground">Massive lightning AoE that chains between enemies. Save for boss fights and elite packs.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="mistakes" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Common Beginner Mistakes</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          These are the mistakes that end runs early. Learn them now so you do not have to learn them the hard way.
        </p>
        <ActionTable rows={commonMistakes} />
      </section>

      <section id="progression" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Permanent Progression Explained</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Understanding what carries over between runs is essential. Cursemark is a roguelite, meaning you keep
          permanent upgrades even after death:
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <strong className="text-foreground">Sigils (cleansed corrupted altars):</strong> Permanent passive bonuses and
            ability unlocks that persist across all runs. This is your primary long-term progression.
          </li>
          <li>
            <strong className="text-foreground">Health and stat upgrades (wells):</strong> Currency spent at wells on
            permanent stat increases carries over. Max health, attack power, and defense upgrades are forever.
          </li>
          <li>
            <strong className="text-foreground">Map knowledge:</strong> Biome layouts have procedural elements but the
            core structure is consistent. Learning boss locations, shortcut unlocks, and altar placements is a form
            of permanent progression.
          </li>
          <li>
            <strong className="text-foreground">What is lost on death:</strong> Current runes, in-run items, temporary
            buffs, and current biome progress are all reset. The currency you earned in that run is also lost unless
            you already spent it at a well.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Next Steps</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Once you have completed a few runs and understand the basics, dive deeper:
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <Link href="/games/cursemark/rune-crafting" className="text-foreground underline hover:no-underline">
              Rune Crafting Guide
            </Link>{" "}
            — master the rune system, discover hidden elemental synergies, and learn which runes to upgrade first.
          </li>
          <li>
            <Link href="/games/cursemark/best-builds" className="text-foreground underline hover:no-underline">
              Best Builds Guide
            </Link>{" "}
            — optimized loadouts for every playstyle, from beginner-friendly setups to speedrunner builds.
          </li>
          <li>
            <Link href="/games/cursemark/boss-guide" className="text-foreground underline hover:no-underline">
              Boss Guide
            </Link>{" "}
            — attack patterns, elemental weaknesses, and strategies for every boss across all 3 biomes.
          </li>
        </ul>
      </section>
    </CursemarkArticle>
  );
}
