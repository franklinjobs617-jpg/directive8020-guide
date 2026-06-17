import { CursemarkArticle } from "@/components/cursemark-article";
import { createCursemarkMetadata, cursemarkImages } from "@/lib/cursemark";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { ArticleImage } from "@/components/article-media";
import Link from "next/link";

const title = "Cursemark All Bosses Guide: Attack Patterns, Weaknesses, Rewards & Strategies";
const description =
  "Complete Cursemark boss guide for the dark fantasy action roguelite. Every boss across all 3 biomes: attack patterns, elemental weaknesses, recommended runes, phase strategies, and legendary loot drops.";
const canonical = "/games/cursemark/boss-guide";

const faqs = [
  {
    question: "How many bosses are in Cursemark Early Access?",
    answer:
      "Cursemark, the dark fantasy action roguelite from CLYDE Games, currently features several named bosses across 3 biomes in Early Access. Each biome has at least one major boss encounter, plus elite mini-bosses that guard corrupted altars and valuable rune caches. More bosses are planned as additional biomes are added throughout Early Access.",
  },
  {
    question: "What is the easiest boss to start with?",
    answer:
      "Iron Bastard, the first biome boss, is designed as the introductory boss fight. Its attack patterns are telegraphed with long wind-ups, and its only dangerous mechanic is a three-hit combo that can be entirely avoided by dodging toward and behind the boss. Bring Embershot and any fire-rune synergy — Iron Bastard has no fire resistance in its first phase.",
  },
  {
    question: "Which boss drops the best loot?",
    answer:
      "Lucian the Fallen Prelate, the third biome boss, drops legendary-quality loot on defeat including unique runes unavailable anywhere else. His loot table includes the Celestial Judgment ultimate rune and a guaranteed legendary ward rune. Farming Lucian on lower difficulties is the most efficient way to acquire endgame-tier runes for your permanent collection.",
  },
  {
    question: "How do I avoid unblockable boss attacks?",
    answer:
      "Unblockable attacks are signaled by a red glow effect on the boss before the attack lands. These cannot be blocked or parried — you must dodge. The timing is generous: dodge as soon as you see the red glow, not when the attack animation begins. Dodging toward the boss (through the attack) is safer than dodging away, as most unblockable attacks have forward momentum that can catch back-dodges.",
  },
  {
    question: "Can I farm bosses for specific runes?",
    answer:
      "Yes. Bosses have weighted drop tables and respawn on each new run. To farm a specific boss: unlock the permanent shortcut to their arena (found by exploring side paths in each biome), then start new runs and rush directly to the boss. Lower the difficulty if you want faster kill times — boss loot quality does not scale with difficulty, only drop quantity does.",
  },
];

const bossTable = [
  {
    boss: "Iron Bastard",
    biome: "Biome 1 — The Ashen Approach",
    attacks: "Three-hit slam combo (dodge toward boss), ground shockwave (jump or dodge), charging grab (sidestep), red-glow unblockable overhead slam.",
    weakness: "Fire (1.5x), Lightning (1.2x)",
    strategy: "Stay at medium range to bait the three-hit combo, dodge toward the boss on the third hit, land 2-3 spear pokes during the recovery window. When HP drops below 50%, Iron Bastard enrages — attack speed doubles but all attacks become interruptible with charged heavy attacks. Save Voltara for the enrage phase to skip it entirely.",
    drops: "Guaranteed: Embershot rune (first kill only). Possible: Rare weapon, uncommon runes, upgrade materials.",
  },
  {
    boss: "Crusade Captain Orsic",
    biome: "Biome 2 — The Hallowed Depths",
    attacks: "Sword slash combo (4 hits, blockable except final hit), holy bolt volley (strafe to avoid), summon adds at 66% and 33% HP, red-glow judgment slam (full-arena AoE, hide behind pillars).",
    weakness: "Poison (1.5x), Rot (1.3x). Resistant to Celestial (0.5x).",
    strategy: "Orsic is a DPS race with add management. Poison Cloud is essential — the adds he summons die quickly to poison, leaving toxic clouds that damage Orsic when he walks through them. At 66% and 33% HP, he becomes invulnerable and summons waves of adds — clear them fast with AoE. The judgment slam at 25% HP is a full-arena unblockable — the four pillars in the arena provide safe zones. Destroyed pillars do not respawn, so save at least two for the final phase.",
    drops: "Guaranteed: Poison Cloud rune (first kill only). Possible: Rare/Legendary weapon, unique Ward rune, upgrade materials.",
  },
  {
    boss: "Lucian the Fallen Prelate",
    biome: "Biome 3 — The Rotting Sanctum",
    attacks: "Rot breath cone (applies stacking rot DoT, sidestep), teleport strike (appears behind you, dodge immediately on teleport sound), rot nova (expanding ring, dodge through it), red-glow soul rip (grabs and deals massive damage, must dodge early), phase 2: summons mirror images (attack the one without a shadow).",
    weakness: "Celestial (2x), Fire (1.3x). Resistant to Rot (immune), Poison (0.5x).",
    strategy: "Lucian is the hardest boss in Early Access Cursemark. Celestial Bolt is almost mandatory — it deals double damage and the Purification synergy clears the rot DoT that Lucian constantly applies. Phase 1: stay close to bait teleport strikes (easier to dodge at close range) and punish the recovery. Phase 2 (50% HP): Lucian splits into mirror images — the real one casts no shadow. Attacking a mirror causes it to explode, so use single-target attacks carefully. Voltara can hit all mirrors simultaneously, making it the best ultimate for this phase. Bring at least 3 Botyls — this is a long fight.",
    drops: "Guaranteed: Celestial Judgment ultimate rune (first kill only). Possible: Legendary weapon, legendary Ward rune, Celestial Bolt rune, upgrade materials.",
  },
];

const generalTips = [
  {
    step: "Learn dodge timing first",
    doThis: "Spend the first attempt on any new boss simply dodging. Do not attack. Learn the rhythm of each attack pattern.",
    why: "Every boss attack has consistent audio and visual tells. Once you can dodge everything, you can win with any build. Damage optimization comes second to survival.",
  },
  {
    step: "Check elemental weaknesses",
    doThis: "Match your rune elements to the boss's visual theme. Fire/ash boss = weak to ice. Holy/light boss = weak to poison/rot. Rotted boss = weak to celestial.",
    why: "Elemental weakness multiplies damage by 1.3x to 2.0x. A build that exploits weaknesses deals effectively double damage compared to a neutral-element build.",
  },
  {
    step: "Unlock shortcuts before farming",
    doThis: "Explore each biome thoroughly to find permanent shortcut unlocks that let you skip directly to the boss arena on future runs.",
    why: "Shortcuts turn a 15-minute biome clear into a 2-minute boss rush. This is essential for efficient boss farming and rune hunting.",
  },
  {
    step: "Save ultimate for final phase",
    doThis: "Do not use your ultimate until the boss reaches 30-40% HP, when most bosses gain new, dangerous attack patterns.",
    why: "A well-timed Voltara or Fire Nova can skip entire final phases. Using your ultimate early wastes the burst window when bosses are most dangerous.",
  },
  {
    step: "Buy boss-specific consumables",
    doThis: "Check the wandering merchant before boss fights. They sometimes sell resistance consumables specific to the upcoming boss's damage type.",
    why: "A rot-resistance potion before Lucian effectively doubles your effective HP for that fight. These consumables are cheap for the value they provide.",
  },
  {
    step: "Do not get greedy",
    doThis: "Land 2-3 hits during each recovery window, then reposition. Never commit to a full combo unless the boss is staggered.",
    why: "Greed is the number one cause of boss deaths. Boss recovery windows are shorter than they look. The safe hits add up — you do not need to rush.",
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
      label="Boss Guide"
      heroImage={cursemarkImages.bosses}
      heroAlt="Cursemark all bosses strategy guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="How do I beat the bosses in Cursemark?"
        answer="Cursemark's boss strategy fundamentals: learn the dodge timing for unblockable (red-glow) attacks, use elemental weaknesses (check the boss's visual theme — fire enemies are weak to ice, rotted enemies weak to celestial), and don't get greedy with attacks during boss recovery windows. The Embershot rune at level 5 trivializes most Early Access bosses with sustained flame spray damage."
        intentRows={[
          {
            query: "Cursemark Iron Bastard strategy",
            answer: "Dodge toward the boss, use fire runes (1.5x weakness), save Voltara for enrage phase at 50% HP.",
            href: "/games/cursemark/boss-guide",
            label: "Boss 1",
          },
          {
            query: "Cursemark Lucian boss guide",
            answer: "Bring Celestial Bolt (2x weakness), dodge teleport on sound cue, attack mirror images without shadows.",
            href: "/games/cursemark/boss-guide",
            label: "Boss 3",
          },
        ]}
        jumpLinks={[
          { href: "#boss-table", label: "Boss table" },
          { href: "#tips", label: "General tips" },
          { href: "#farming", label: "Farming route" },
        ]}
      />

      <BlufBox>
        <p>
          <strong>Each boss drops legendary or rare loot on defeat.</strong>{" "}
          Farm bosses by unlocking shortcuts to them — use the permanent map knowledge you gain across runs to reach
          bosses faster. The wandering merchant sometimes sells boss-specific resist consumables. Cursemark, the dark
          fantasy action roguelite from CLYDE Games, rewards preparation as much as execution.
        </p>
      </BlufBox>

      <section id="boss-table" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">All Bosses Overview</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Cursemark currently features three major biome bosses in Early Access, plus elite mini-boss encounters.
          Each boss has unique attack patterns, elemental weaknesses, and guaranteed first-kill loot drops worth
          targeting on every new run.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Boss</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Biome</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Weakness</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Key Strategy</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Drops</th>
              </tr>
            </thead>
            <tbody>
              {bossTable.map((boss) => (
                <tr key={boss.boss} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{boss.boss}</td>
                  <td className="px-4 py-3 text-muted-foreground">{boss.biome}</td>
                  <td className="px-4 py-3 text-muted-foreground">{boss.weakness}</td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-normal max-w-xs">{boss.strategy}</td>
                  <td className="px-4 py-3 text-muted-foreground">{boss.drops}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Detailed Boss Breakdowns</h2>

        <div className="mb-6 rounded-lg border border-border bg-white p-5">
          <h3 className="mb-2 text-base font-bold text-foreground">Iron Bastard — Biome 1: The Ashen Approach</h3>
          <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
            <strong>Attacks:</strong> {bossTable[0].attacks}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Iron Bastard is your introductory boss and the most forgiving fight in Cursemark. The key mechanic to
            learn here is dodge timing — his three-hit slam combo has consistent rhythm (slam, pause, slam, pause,
            slam, long recovery). Count the hits out loud on your first attempt. His enrage at 50% HP doubles attack
            speed but makes all attacks interruptible — charged Divine Spear heavies will stagger him out of any
            animation. A level 3+ Embershot can kill him during the first enrage cycle without needing to dodge.
          </p>
        </div>

        <div className="mb-6 rounded-lg border border-border bg-white p-5">
          <h3 className="mb-2 text-base font-bold text-foreground">Crusade Captain Orsic — Biome 2: The Hallowed Depths</h3>
          <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
            <strong>Attacks:</strong> {bossTable[1].attacks}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Orsic tests your add management and arena awareness. The four pillars in his arena are essential for
            surviving the judgment slam at 25% HP — each pillar can block one judgment, and destroyed pillars do
            not respawn. Orsic will deliberately target pillars with his sword combos, so position yourself to
            bait attacks away from the pillars. Poison Cloud is the MVP rune for this fight: the adds he summons
            create toxic clouds on death that damage Orsic, and if you have Embershot equipped, those clouds ignite
            into burning pyres for massive passive damage. Consider temporarily respeccing to the Pyre Lord build
            for this fight even if it is not your usual setup.
          </p>
        </div>

        <div className="mb-6 rounded-lg border border-border bg-white p-5">
          <h3 className="mb-2 text-base font-bold text-foreground">Lucian the Fallen Prelate — Biome 3: The Rotting Sanctum</h3>
          <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
            <strong>Attacks:</strong> {bossTable[2].attacks}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Lucian is the current endgame challenge and the hardest boss in Early Access Cursemark. His teleport
            strike is his most dangerous attack — you must dodge on the audio cue (a sharp crystalline sound), not
            on the visual. The rot DoT he applies is relentless; without Celestial Bolt or a rot-resistance consumable,
            you will be steadily losing health throughout the fight. Phase 2 mirror images are intimidating but
            manageable: the real Lucian casts no shadow on the ground beneath him. If you brought Voltara, the
            chain lightning hits all mirrors simultaneously. A single Voltara cast with Ice Trail active can shatter
            multiple mirrors and deal massive collateral damage to the real Lucian. Bring at least 3 Botyls and
            consider this a marathon, not a sprint — victory often comes on the attempt where you finally dodge
            every teleport strike.
          </p>
        </div>
      </section>

      <ArticleImage
        src={cursemarkImages.bosses}
        alt="Cursemark boss encounter showing attack telegraphs and dodge positioning"
        caption="Boss fights in Cursemark reward patience and pattern recognition. Red-glow attacks are unblockable — dodge, do not block. Watch for elemental visual themes to identify weaknesses."
      />

      <section id="tips" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">General Boss Tips</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          These principles apply to every boss encounter in Cursemark. Master these fundamentals and you will be
          prepared for any boss that gets added during Early Access.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Step</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Do this</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {generalTips.map((tip) => (
                <tr key={tip.step} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{tip.step}</td>
                  <td className="px-4 py-3 text-muted-foreground">{tip.doThis}</td>
                  <td className="px-4 py-3 text-muted-foreground">{tip.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="farming" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Boss Farming Route Recommendation</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          For efficient boss farming to collect all first-kill rune drops and farm legendary gear, follow this route:
        </p>
        <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <strong className="text-foreground">Rush Biome 1 to Iron Bastard:</strong> Unlock the shortcut (side path
            before the boss arena, look for a lever behind destructible crates). On subsequent runs, this takes about
            2 minutes from spawn to boss door. Farm until you have a level 5 Embershot.
          </li>
          <li>
            <strong className="text-foreground">Clear Biome 2 to Orsic:</strong> Use your leveled Embershot to speed
            through. The shortcut here is gated behind a mini-boss that guards the lever — kill it once, and the
            shortcut stays open for all future runs.
          </li>
          <li>
            <strong className="text-foreground">Farm Lucian on Easy:</strong> Once both shortcuts are unlocked,
            speedrun to Lucian on the lowest difficulty setting. Difficulty does not affect loot quality for boss
            drops (only quantity), so easy-mode Lucian kills are the most time-efficient way to farm legendary
            runes and weapons.
          </li>
          <li>
            <strong className="text-foreground">Check the merchant every run:</strong> The wandering merchant spawn
            is semi-random but tends to appear near shortcut entrances. Always check for boss-resistance consumables
            before farming — a 50-currency rot potion saves minutes of failed Lucian attempts.
          </li>
        </ol>
      </section>

      <section className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Related Guides</h2>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <Link href="/games/cursemark/rune-crafting" className="text-foreground underline hover:no-underline">
              Rune Crafting Guide
            </Link>{" "}
            — which runes to bring for each boss and how to maximize elemental synergy damage.
          </li>
          <li>
            <Link href="/games/cursemark/best-builds" className="text-foreground underline hover:no-underline">
              Best Builds Guide
            </Link>{" "}
            — optimized loadouts that counter specific bosses, including the Pyre Lord meta build.
          </li>
        </ul>
      </section>
    </CursemarkArticle>
  );
}
