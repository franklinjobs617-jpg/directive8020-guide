import { CursemarkArticle } from "@/components/cursemark-article";
import { createCursemarkMetadata, cursemarkImages } from "@/lib/cursemark";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { ArticleImage } from "@/components/article-media";
import Link from "next/link";

const title = "Cursemark Rune Crafting Guide: All Runes, Combinations, Best Upgrades & Hidden Synergies";
const description =
  "Complete Cursemark rune crafting guide for the dark fantasy action roguelite. Rune tier list, best combinations, hidden elemental synergies, Embershot build, upgrade priorities, and rune socketing strategy.";
const canonical = "/games/cursemark/rune-crafting";

const faqs = [
  {
    question: "How does the rune system work in Cursemark?",
    answer:
      "Cursemark's rune system, the defining feature of this dark fantasy action roguelite from CLYDE Games, uses four ability slots: Attack, Spell, Ward, and Ultimate. Each rune you socket into a slot transforms what that ability does. For example, socketing Embershot into your Attack slot adds a cone of flame to every basic attack. Runes can be upgraded by finding duplicates or spending upgrade materials, increasing their effectiveness up to level 5. You lose all equipped runes on death unless you have specific sigils that protect them.",
  },
  {
    question: "Which runes are the absolute best in Cursemark?",
    answer:
      "The S-tier runes are Embershot (adds flame spray to attacks — melts bosses at level 5), Chain Lightning (chaining electrical damage that jumps between enemies), and Poison Cloud (enemies burst into toxic clouds on death). However, hidden elemental synergies matter far more than individual rune tier rankings. Fire spells can ignite poison clouds into burning pyres, and ice runes combined with lightning create devastating shatter effects that deal massive burst damage.",
  },
  {
    question: "How do elemental synergies work?",
    answer:
      "Elemental synergies are hidden interactions between runes of different elements. Known combinations include: Fire + Poison = Burning Pyre (poison clouds ignite for massive DoT damage), Ice + Lightning = Shatter (frozen enemies hit by lightning take huge burst damage), Celestial + Rot = Purification (celestial damage cleanses rot debuffs and deals bonus damage to rotted enemies). These synergies are never explained in-game — discovering them through experimentation is a core part of Cursemark's appeal.",
  },
  {
    question: "Should I upgrade runes or buy new ones?",
    answer:
      "Prioritize upgrading your Attack rune to level 3 first — this is your primary damage source and benefits most from early investment. After that, bring your Spell rune to level 3, then focus on finding and equipping strong Ward and Ultimate runes. Do not spread upgrade materials evenly across all four slots — a level 5 Attack rune with level 1 everything else is stronger than four level 2 runes.",
  },
  {
    question: "How do I farm specific runes in Cursemark?",
    answer:
      "Runes drop from enemies, chests, and bosses based on the biome you are in and the difficulty level. Specific bosses have weighted drop tables for certain rune types. The wandering merchant occasionally sells targeted runes. If you are hunting a specific rune, identify which biome or boss is associated with its element type and farm that content. Boss farming routes on lower difficulties are the most efficient method for targeted rune acquisition.",
  },
];

const runeTiers = [
  { tier: "S", rune: "Embershot", element: "Fire", effect: "Adds cone of flame spray to every attack. Scales multiplicatively with attack speed.", bestSlot: "Attack", notes: "The single strongest Attack rune. Level 5 melts bosses in seconds. Uncommon (blue) rarity — proof that rarity does not equal power." },
  { tier: "S", rune: "Chain Lightning", element: "Lightning", effect: "Attacks chain lightning between up to 5 nearby enemies. Damage increases per chain target.", bestSlot: "Attack / Spell", notes: "Best crowd-clear rune. Combines with Ice for Shatter synergy. Excellent on fast weapons like dual blades." },
  { tier: "S", rune: "Poison Cloud", element: "Poison", effect: "Enemies killed while affected release toxic clouds that persist for 8 seconds.", bestSlot: "Spell", notes: "Core of the Fire + Poison synergy. Clouds can cover entire boss arenas, dealing massive passive damage." },
  { tier: "A", rune: "Voltara", element: "Lightning", effect: "Massive AoE lightning strike that chains between all enemies on screen. 45-second cooldown.", bestSlot: "Ultimate", notes: "Best Ultimate rune overall. One-shots elite packs. Combines with Ice for devastating Shatter burst." },
  { tier: "A", rune: "Ice Trail", element: "Ice", effect: "Leave freezing trails behind your movement that slow and damage enemies. Trails persist 5 seconds.", bestSlot: "Spell", notes: "Incredible crowd control. Stack multiple Ice Trail users for full-room freeze. Combines with Chain Lightning for Shatter." },
  { tier: "A", rune: "Celestial Bolt", element: "Celestial", effect: "Fires a piercing holy bolt that deals bonus damage to rotted and dark-type enemies.", bestSlot: "Spell", notes: "Best anti-rot rune. Purification synergy clears debuffs. Excellent for the third biome where rot enemies are common." },
  { tier: "A", rune: "Vitality Ward", element: "None", effect: "Passive health regeneration. Scales with max HP. Provides 3% HP/sec at level 5.", bestSlot: "Ward", notes: "Best defensive rune for beginners. Forgiving sustain that keeps you alive between Botyl drops." },
  { tier: "B", rune: "Rot Touch", element: "Rot", effect: "Attacks apply a stacking rot DoT that deals damage over 10 seconds. Max 5 stacks.", bestSlot: "Attack", notes: "Strong against slow, high-HP enemies. Combines with Celestial for Purification burst. Weak against fast bosses." },
  { tier: "B", rune: "Fire Nova", element: "Fire", effect: "Periodically release a ring of fire around your character. High base damage, short range.", bestSlot: "Spell", notes: "Safe AoE clearing tool. Excellent for melee builds. Less effective against ranged enemies and flying bosses." },
  { tier: "B", rune: "Thunderclap", element: "Lightning", effect: "Charged attacks release a stunning shockwave. Stunned enemies take 50% more damage for 3 seconds.", bestSlot: "Attack", notes: "Best on slow, heavy weapons. Stun window enables massive burst combos. Excellent synergy with Voltara ultimate." },
  { tier: "C", rune: "Stone Skin", element: "None", effect: "Passive damage reduction. Reduces all incoming damage by a flat percentage.", bestSlot: "Ward", notes: "Solid defensive option but outclassed by Vitality Ward for sustain. Better for experienced players who dodge well." },
  { tier: "C", rune: "Shadow Step", element: "None", effect: "Dodge-rolling leaves a shadow clone that explodes after 1 second for minor AoE damage.", bestSlot: "Spell", notes: "Fun utility rune but damage is too low to justify the Spell slot. Niche use for dodge-heavy speedrunner builds." },
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
      label="Rune Crafting"
      heroImage={cursemarkImages.runes}
      heroAlt="Cursemark rune crafting and combinations guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What are the best runes in Cursemark?"
        answer="The S-tier runes in Cursemark are: Embershot (adds flame spray to attacks — melts bosses at level 5), Chain Lightning (adds chaining electrical damage), and Poison Cloud (enemies burst into toxic clouds on death). However, hidden synergies matter more than individual rune strength — fire spells can ignite poison clouds to create burning pyres, and ice runes combined with lightning create powerful shatter effects."
        intentRows={[
          {
            query: "Cursemark Embershot rune",
            answer: "S-tier Attack rune that adds flame spray. Level 5 melts bosses. Uncommon rarity — rarity does NOT equal power.",
            href: "/games/cursemark/rune-crafting",
            label: "Top rune",
          },
          {
            query: "Cursemark elemental combos",
            answer: "Fire + Poison = Burning Pyre. Ice + Lightning = Shatter. Celestial + Rot = Purification. Hidden synergies are key.",
            href: "/games/cursemark/rune-crafting",
            label: "Synergies",
          },
        ]}
        jumpLinks={[
          { href: "#tier-list", label: "Tier list" },
          { href: "#synergies", label: "Elemental synergies" },
          { href: "#upgrade", label: "Upgrade guide" },
          { href: "#rarity", label: "Rarity myth" },
        ]}
      />

      <BlufBox>
        <p>
          <strong>The most powerful rune interaction: equip Embershot on your basic attack, socket Poison Cloud into
          your offensive spell, and use Voltara as your ultimate.</strong>{" "}
          Fire + poison = burning pyres that deal massive DoT damage. This combo shreds every boss in the current
          Early Access build of Cursemark, the dark fantasy action roguelite from CLYDE Games.
        </p>
      </BlufBox>

      <section id="tier-list" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Rune Tier List</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          This tier list evaluates runes based on raw power, synergy potential, and slot efficiency. Remember that
          synergy combinations can elevate lower-tier runes significantly — this list assumes solo rune performance.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Tier</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Rune</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Element</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Effect</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Best Slot</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Notes</th>
              </tr>
            </thead>
            <tbody>
              {runeTiers.map((rune) => (
                <tr key={rune.rune} className="border-b border-border last:border-0">
                  <td className="px-4 py-3">
                    <span className={`inline-flex rounded px-2 py-0.5 text-xs font-bold ${
                      rune.tier === "S" ? "bg-amber-100 text-amber-800" :
                      rune.tier === "A" ? "bg-green-100 text-green-800" :
                      rune.tier === "B" ? "bg-blue-100 text-blue-800" :
                      "bg-gray-100 text-gray-800"
                    }`}>
                      {rune.tier}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-medium text-foreground">{rune.rune}</td>
                  <td className="px-4 py-3 text-muted-foreground">{rune.element}</td>
                  <td className="px-4 py-3 text-muted-foreground">{rune.effect}</td>
                  <td className="px-4 py-3 font-medium text-foreground">{rune.bestSlot}</td>
                  <td className="px-4 py-3 text-muted-foreground">{rune.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ArticleImage
        src={cursemarkImages.runes}
        alt="Cursemark rune socketing interface with elemental combination preview"
        caption="Socket runes into your four ability slots. Pay attention to elemental colors — matching or intentionally contrasting elements creates the hidden synergies that define Cursemark's combat depth."
      />

      <section id="synergies" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Hidden Elemental Synergies</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Cursemark never explicitly tells you about elemental synergies — you discover them through experimentation.
          Here are the confirmed combinations that can dramatically increase your damage output:
        </p>
        <div className="grid gap-4 sm:grid-cols-1">
          <div className="rounded-lg border border-border bg-white p-5">
            <h3 className="mb-2 text-base font-bold text-foreground">Fire + Poison = Burning Pyre</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              When any fire damage touches a poison cloud (from Poison Cloud rune or other poison sources), the cloud
              ignites into a burning pyre. Pyres deal massive damage over time in a large area and can chain-ignite
              adjacent poison clouds. This is the single strongest synergy in Cursemark and the foundation of the
              meta Embershot + Poison Cloud build. Bosses standing in burning pyres lose 15-20% of their HP per second
              at high rune levels.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-5">
            <h3 className="mb-2 text-base font-bold text-foreground">Ice + Lightning = Shatter</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Frozen or chilled enemies hit by lightning damage shatter, taking massive burst damage (approximately
              300% of the triggering lightning hit) and releasing a small AoE shockwave that can chain-freeze nearby
              enemies. The Ice Trail + Chain Lightning combination is the most reliable way to trigger this. Best used
              with fast-hitting weapons to rapidly apply freeze stacks before detonating with lightning.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-5">
            <h3 className="mb-2 text-base font-bold text-foreground">Celestial + Rot = Purification</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Celestial damage dealt to enemies afflicted with rot cleanses the rot debuff from you (if you are
              affected) and deals bonus damage equal to 200% of the remaining rot damage on the target. This is
              essential for the third biome where rot-type enemies are common. Celestial Bolt is the go-to rune
              for enabling this synergy, especially against rot-based bosses.
            </p>
          </div>
        </div>
      </section>

      <section id="upgrade" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">How to Upgrade Runes</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Runes can be upgraded to a maximum of level 5. Each level increases the rune's base effect — for damage
          runes like Embershot, this means larger flame cones and higher damage per tick. For utility runes like
          Vitality Ward, this means more health regenerated per second.
        </p>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Upgrades come from two sources: finding a duplicate of the same rune (automatically merges and upgrades),
          or spending upgrade materials at the rune crafting station between biomes. Upgrade materials drop from
          elite enemies and bosses. The cost increases significantly at higher levels, so focus on bringing one
          rune to level 5 before spreading materials across multiple runes.
        </p>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          <strong>Recommended upgrade priority:</strong> Attack rune to level 3 first, then Spell rune to level 3,
          then push Attack to level 5. Ward and Ultimate upgrades are lower priority — a level 1 Voltara still
          deletes elite packs, and a level 1 Vitality Ward still provides valuable passive sustain.
        </p>
      </section>

      <section id="rarity" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Rarity Does Not Equal Power</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          This is the single most important lesson of Cursemark's rune system, and it bears repeating throughout
          this guide. Rune rarity indicates how frequently a rune drops — not how powerful it is. Common (gray) and
          uncommon (blue) runes can, and frequently do, outperform rare (purple) and legendary (gold) runes.
        </p>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          The best example is Embershot: an uncommon (blue) Attack rune that at level 5 deals more sustained damage
          than most legendary Attack runes. Its rarity simply means you will find several copies of it across a
          playthrough, making it easier to upgrade to level 5. Legendary runes are exciting to find because they
          offer unique, dramatic effects — but their raw damage output often falls behind upgraded lower-rarity runes
          that have better synergy potential.
        </p>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          <strong>The rule of thumb:</strong> test every rune you find, regardless of color. If a gray rune's effect
          synergizes with your build better than a gold rune, use the gray one. Cursemark rewards build knowledge
          over loot luck.
        </p>
      </section>

      <section className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Related Guides</h2>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <Link href="/games/cursemark/best-builds" className="text-foreground underline hover:no-underline">
              Best Builds Guide
            </Link>{" "}
            — complete loadouts using the rune synergies explained above, optimized for every playstyle.
          </li>
          <li>
            <Link href="/games/cursemark/beginner-guide" className="text-foreground underline hover:no-underline">
              Beginner Guide
            </Link>{" "}
            — if you are new to how runes and ability slots work, start here for the fundamentals.
          </li>
          <li>
            <Link href="/games/cursemark/boss-guide" className="text-foreground underline hover:no-underline">
              Boss Guide
            </Link>{" "}
            — learn which elemental weaknesses each boss has and which runes to bring for each fight.
          </li>
        </ul>
      </section>
    </CursemarkArticle>
  );
}
