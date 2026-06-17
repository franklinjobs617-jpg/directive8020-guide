import { CursemarkArticle } from "@/components/cursemark-article";
import { createCursemarkMetadata, cursemarkImages } from "@/lib/cursemark";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { ArticleImage } from "@/components/article-media";
import Link from "next/link";

const title = "Cursemark Best Builds: Weapons, Runes, Element Combos & Ultimate Skills Guide";
const description =
  "Cursemark best builds guide for the dark fantasy action roguelite. Top weapon choices, rune combinations, elemental synergies, ultimate skill rankings, and recommended builds for beginners, speedrunners, and boss killers.";
const canonical = "/games/cursemark/best-builds";

const faqs = [
  {
    question: "What is the absolute best build in Cursemark right now?",
    answer:
      "The current meta build for Cursemark, the dark fantasy action roguelite from CLYDE Games, is: Divine Spear (weapon) + Embershot (Attack rune) + Poison Cloud (Spell rune) + Vitality Ward (Ward rune) + Voltara (Ultimate). This provides strong single-target damage from Embershot-enhanced spear pokes, AoE crowd control from the Fire + Poison = Burning Pyre synergy, passive sustain from Vitality Ward, and a fight-winning Ultimate. However, the best build is always the one that matches your playstyle — Cursemark rewards build knowledge more than blindly following meta lists.",
  },
  {
    question: "Which weapon is best for speedrunning?",
    answer:
      "Dual Blades are the best weapon for speedrunning. Their fast attack speed applies on-hit rune effects more frequently than any other weapon, maximizing Chain Lightning procs and Poison Cloud application. Pair with Chain Lightning (Attack), Ice Trail (Spell) for crowd control, and any mobility-enhancing Ward rune. The faster you attack, the more rune effects trigger — and Dual Blades attack fastest.",
  },
  {
    question: "What is the best build for boss killing?",
    answer:
      "For dedicated boss killing, run: Divine Spear + Embershot (Attack) + Poison Cloud (Spell) + Voltara (Ultimate) + any offensive Ward. The Embershot + Poison Cloud synergy creates burning pyres that deal percentage-based damage, making it equally effective against all bosses regardless of their HP pool. Save Voltara for the boss's final phase — a level 3+ Voltara can skip entire phase transitions.",
  },
  {
    question: "Which ultimate skill is the strongest?",
    answer:
      "Voltara is the strongest ultimate in Cursemark by a significant margin. It calls down a massive lightning strike that chains between all enemies on screen, dealing heavy damage and stunning survivors. At level 3+, it one-shots most elite packs. For boss fights, Fire Nova ultimate is a strong alternative if you prefer consistent AoE pressure over burst. Rot-based ultimates are currently underwhelming due to long ramp-up times against mobile bosses.",
  },
  {
    question: "Should I use a shield or dodge for defense?",
    answer:
      "Dodge. Cursemark's combat is designed around mobility and iframes. Shields exist but occupy your Ward slot, and blocking consumes stamina that is better spent on attacks and dodges. The best defense is learning enemy attack patterns and positioning — Vitality Ward provides all the passive sustain you need. Only consider shield builds if you find a legendary ward rune specifically designed for block-based playstyles.",
  },
];

const builds = [
  {
    name: "Pyre Lord (Meta)",
    weapon: "Divine Spear",
    attackRune: "Embershot",
    spellRune: "Poison Cloud",
    wardRune: "Vitality Ward",
    ultimate: "Voltara",
    playstyle: "All-round meta build. Set up poison clouds, ignite with Embershot for burning pyres, Voltara to finish bosses. Safe, consistent, incredibly high damage. Recommended for all players.",
  },
  {
    name: "Storm Dancer (Speedrun)",
    weapon: "Dual Blades",
    attackRune: "Chain Lightning",
    spellRune: "Ice Trail",
    wardRune: "Shadow Cloak",
    ultimate: "Voltara",
    playstyle: "Maximum attack speed to trigger on-hit effects. Ice + Lightning = Shatter combo deletes elite packs. Dodge through everything, never stop attacking. For experienced players who want sub-15-minute clear times.",
  },
  {
    name: "Purifier (Anti-Rot)",
    weapon: "Greatsword",
    attackRune: "Celestial Bolt",
    spellRune: "Rot Touch",
    wardRune: "Purification Ward",
    ultimate: "Celestial Judgment",
    playstyle: "Designed for the rot-heavy third biome. Applies rot then purifies for burst. Celestial Bolt pierces rot-armored enemies. Slow but methodical — excellent for first-time biome 3 clears.",
  },
  {
    name: "Frostbreaker (Crowd Control)",
    weapon: "War Hammer",
    attackRune: "Thunderclap",
    spellRune: "Ice Trail",
    wardRune: "Stone Skin",
    ultimate: "Blizzard",
    playstyle: "Perma-freeze entire rooms. Thunderclap stuns into Ice Trail freeze into Shatter combo. Slower clear speed but nearly immortal in melee range. Best for players struggling with enemy density.",
  },
  {
    name: "Firestarter (Beginner)",
    weapon: "Divine Spear",
    attackRune: "Embershot",
    spellRune: "Fire Nova",
    wardRune: "Vitality Ward",
    ultimate: "Fire Nova (Ultimate)",
    playstyle: "Simplest build to pilot. Embershot for single-target, Fire Nova for AoE, Vitality Ward keeps you alive. No complex synergy management required. Perfect for first-time biome clears.",
  },
];

const ultimateTiers = [
  { tier: "S", name: "Voltara", description: "Massive lightning AoE that chains between all enemies. One-shots elites. Devastating Shatter synergy. Best all-purpose ultimate by a wide margin." },
  { tier: "A", name: "Fire Nova (Ultimate)", description: "Screen-wide fire explosion that ignites all poison clouds. Excellent Burning Pyre enabler. Slightly weaker than Voltara for single-target but better for room clearing." },
  { tier: "A", name: "Celestial Judgment", description: "Rain of holy bolts that deals bonus damage to rotted/dark enemies. Essential for third biome. Below-average in biomes 1 and 2 without rot enemies." },
  { tier: "B", name: "Blizzard", description: "Freezes all enemies on screen for 6 seconds. Zero damage but enables unlimited Shatter combos. Niche pick that requires Ice rune synergy to convert the freeze into actual kills." },
  { tier: "B", name: "Rot Epidemic", description: "Applies max-stack rot to all enemies. High total damage but slow ramp-up. Bosses often die before the full rot duration expires, wasting damage potential." },
  { tier: "C", name: "Shadow Army", description: "Summons three shadow clones that mimic your attacks at 40% damage. Fun and visually impressive but mathematically outclassed by direct damage ultimates." },
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
      label="Best Builds"
      heroImage={cursemarkImages.hero}
      heroAlt="Cursemark best builds and weapon guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What is the best build in Cursemark?"
        answer="The best all-round build for Cursemark is: Divine Spear (weapon) + Embershot (attack rune) + Poison Cloud (spell rune) + Voltara (ultimate) + any healing or defensive ward rune. This combination provides strong single-target damage, AoE crowd control from poison/fire synergy, and a massive damage ultimate for bosses. For speedrunning, swap the spear for dual blades and use Chain Lightning instead of Poison Cloud."
        intentRows={[
          {
            query: "Cursemark meta build 2026",
            answer: "Divine Spear + Embershot + Poison Cloud + Voltara. The 'Pyre Lord' build dominates all content.",
            href: "/games/cursemark/best-builds",
            label: "Meta",
          },
          {
            query: "Cursemark speedrun build",
            answer: "Dual Blades + Chain Lightning + Ice Trail. Maximum attack speed for Shatter combos.",
            href: "/games/cursemark/best-builds",
            label: "Speedrun",
          },
        ]}
        jumpLinks={[
          { href: "#builds", label: "Recommended builds" },
          { href: "#ultimates", label: "Ultimate tier list" },
          { href: "#weapons", label: "Weapon choices" },
        ]}
      />

      <BlufBox>
        <p>
          <strong>The best build is the one that matches your playstyle.</strong>{" "}
          Cursemark rewards experimentation — try different rune combinations even if they seem counterintuitive.
          Some of the most powerful synergies (like Ice Trail + Chain Lightning shatter combo) are never explained
          in-game. Cursemark, the dark fantasy action roguelite from CLYDE Games, is about discovery as much as
          optimization.
        </p>
      </BlufBox>

      <section id="builds" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Recommended Builds for Every Playstyle</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Each build is a complete loadout — weapon, four rune slots, and playstyle guidance. Start with the
          Firestarter build if you are new to Cursemark, then experiment with others as you learn enemy patterns
          and rune synergies.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Build</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Weapon</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Attack</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Spell</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Ward</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Ultimate</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Playstyle</th>
              </tr>
            </thead>
            <tbody>
              {builds.map((build) => (
                <tr key={build.name} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{build.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{build.weapon}</td>
                  <td className="px-4 py-3 text-muted-foreground">{build.attackRune}</td>
                  <td className="px-4 py-3 text-muted-foreground">{build.spellRune}</td>
                  <td className="px-4 py-3 text-muted-foreground">{build.wardRune}</td>
                  <td className="px-4 py-3 text-muted-foreground">{build.ultimate}</td>
                  <td className="px-4 py-3 text-muted-foreground">{build.playstyle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ArticleImage
        src={cursemarkImages.combat}
        alt="Cursemark best build in action showing Divine Spear with Embershot flame effects"
        caption="The Pyre Lord build in action. Burning pyres from Fire + Poison synergy deal massive percentage-based damage — equally effective against all bosses regardless of their HP pool."
      />

      <section id="ultimates" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Ultimate Skill Tier List</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Ultimate runes occupy their own dedicated slot and have the longest cooldowns. Choosing the right ultimate
          for your build and biome can make the difference between a clean boss kill and a failed run.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Tier</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Ultimate</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Description</th>
              </tr>
            </thead>
            <tbody>
              {ultimateTiers.map((u) => (
                <tr key={u.name} className="border-b border-border last:border-0">
                  <td className="px-4 py-3">
                    <span className={`inline-flex rounded px-2 py-0.5 text-xs font-bold ${
                      u.tier === "S" ? "bg-amber-100 text-amber-800" :
                      u.tier === "A" ? "bg-green-100 text-green-800" :
                      u.tier === "B" ? "bg-blue-100 text-blue-800" :
                      "bg-gray-100 text-gray-800"
                    }`}>
                      {u.tier}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-medium text-foreground">{u.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{u.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="weapons" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Weapon Choices at a Glance</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Your weapon determines your attack speed, range, and playfeel. Rune synergy matters more than raw weapon
          stats — a fast weapon with Chain Lightning will outperform a slow weapon with higher base damage if you
          build around elemental procs.
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <strong className="text-foreground">Divine Spear:</strong> Best all-round weapon. Long range, pierces enemies,
            charged attack hits multiple targets. Best for Embershot and single-element builds.
          </li>
          <li>
            <strong className="text-foreground">Dual Blades:</strong> Fastest attack speed. Maximizes on-hit rune procs.
            Best for Chain Lightning, Poison Cloud, and multi-element synergy builds. Lower base damage per hit.
          </li>
          <li>
            <strong className="text-foreground">Greatsword:</strong> Slow but massive base damage. Best for Thunderclap stun
            builds. Charged heavy attack has hyper armor. Weak against fast bosses without careful positioning.
          </li>
          <li>
            <strong className="text-foreground">War Hammer:</strong> Highest stagger damage. Breaks enemy guard states.
            Best for Ice Trail crowd control builds. Very slow — requires patience and enemy pattern knowledge.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Related Guides</h2>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <Link href="/games/cursemark/rune-crafting" className="text-foreground underline hover:no-underline">
              Rune Crafting Guide
            </Link>{" "}
            — detailed rune stats, hidden elemental synergies, and upgrade priorities for every rune in these builds.
          </li>
          <li>
            <Link href="/games/cursemark/boss-guide" className="text-foreground underline hover:no-underline">
              Boss Guide
            </Link>{" "}
            — which builds counter which bosses, elemental weakness tables, and phase-by-phase strategies.
          </li>
          <li>
            <Link href="/games/cursemark/beginner-guide" className="text-foreground underline hover:no-underline">
              Beginner Guide
            </Link>{" "}
            — if you are new to Cursemark, start here before diving into optimized builds.
          </li>
        </ul>
      </section>
    </CursemarkArticle>
  );
}
