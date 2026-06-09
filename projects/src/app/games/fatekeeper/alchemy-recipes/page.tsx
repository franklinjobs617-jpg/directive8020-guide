import { ArticleImage } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { FatekeeperArticle } from "@/components/fatekeeper-article";
import {
  createFatekeeperMetadata,
  fatekeeperAlchemyRows,
  fatekeeperImages,
} from "@/lib/fatekeeper";

const title = "Fatekeeper Alchemy, Spells & Crafting Guide";
const description =
  "Fatekeeper spells, alchemy, crafting, consumable timing, and environmental combat guide for Early Access players who need verified facts and practical testing rules.";
const canonical = "/games/fatekeeper/alchemy-recipes";

export const metadata = createFatekeeperMetadata({
  title,
  description,
  canonical,
  image: fatekeeperImages.magic,
});

const faqs = [
  {
    question: "What spells are in Fatekeeper Early Access?",
    answer:
      "Launch-window review coverage identifies Telekinesis, Fireball, Frost Bolt, and Wind Push. Treat exact damage, mana value, and balance rankings as patch-sensitive because Fatekeeper is still in Early Access.",
  },
  {
    question: "Does Fatekeeper have alchemy or crafting?",
    answer:
      "Yes, the store positioning and review coverage point to alchemy, crafting, and consumables. The exact recipe list, ingredient locations, and farming routes still need direct gameplay verification before they should be presented as final facts.",
  },
  {
    question: "When should I use consumables?",
    answer:
      "Use consumables before combat, after creating distance, or during a safe reset window. Do not start a potion animation while an enemy is already committed to a hit unless you have tested that timing in the current build.",
  },
  {
    question: "Which spell is best for a first run?",
    answer:
      "Telekinesis is the safest first recommendation because it turns the environment into damage and control. Fireball, Frost Bolt, and Wind Push should be judged by what problem they solve in your route, not by raw damage alone.",
  },
];

const searchIntentRows = [
  {
    query: "Fatekeeper spells list",
    answer:
      "Known launch-window spell names: Telekinesis, Fireball, Frost Bolt, and Wind Push. Exact balance can change during Early Access.",
    href: "#spells",
    label: "Spells",
  },
  {
    query: "Fatekeeper alchemy crafting",
    answer:
      "Alchemy and crafting are part of Fatekeeper, but exact recipes and ingredient routes still need verified gameplay data.",
    href: "#alchemy",
    label: "Crafting",
  },
  {
    query: "Fatekeeper best spell",
    answer:
      "Telekinesis is the most reliable first pick because environmental kills and displacement solve fights without needing final damage numbers.",
    href: "#spells",
    label: "Best",
  },
  {
    query: "Fatekeeper consumable tips",
    answer:
      "Use consumables before combat or after creating space. Slow animations make panic-healing risky in close-range fights.",
    href: "#consumables",
    label: "Tips",
  },
];

const jumpLinks = [
  { href: "#spells", label: "Spells" },
  { href: "#alchemy", label: "Alchemy" },
  { href: "#consumables", label: "Consumables" },
  { href: "#environmental-kills", label: "Environment" },
  { href: "/games/fatekeeper/weapons-spells", label: "Weapons & Spells" },
];

const keyFacts = [
  { label: "Known spell names", value: "Telekinesis, Fireball, Frost Bolt, Wind Push", status: "verified" as const },
  { label: "Alchemy system", value: "Confirmed as a feature, but recipe details are not final here", status: "needs-check" as const },
  { label: "Consumable timing", value: "Plan use before combat or after creating distance", status: "working" as const },
  { label: "Ingredient locations", value: "No complete verified route list yet", status: "needs-check" as const },
  { label: "Best first spell", value: "Telekinesis because it uses hazards and positioning", status: "working" as const },
  { label: "Patch risk", value: "Damage, mana, and recipe values can change during Early Access", status: "verified" as const },
];

export default function FatekeeperAlchemyPage() {
  return (
    <FatekeeperArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Alchemy & Spells"
      heroImage={fatekeeperImages.magic}
      heroAlt="Fatekeeper magic and spellcasting gameplay"
      faqs={faqs}
    >
      <BlufBox title="BLUF">
        Fatekeeper spell and alchemy advice has one hard rule: do not treat
        unverified recipes as facts. The useful first-run answer is simple.
        Use Telekinesis to turn ledges, spike walls, and enemy spacing into
        damage. Treat Fireball, Frost Bolt, and Wind Push as tools to test
        against specific problems. Use consumables before a fight or after you
        create distance. Exact ingredient routes, potion recipes, mana math, and
        spell damage rankings need current-build testing before they deserve a
        final recipe table.
      </BlufBox>

      <StatusPanel items={keyFacts} />

      <SearchAnswerPanel
        title="Fatekeeper Spells & Crafting"
        answer="Use Telekinesis first, test other spells by job, and treat recipe details as Early Access data that still needs verification. Consumables are safest before combat or after a spacing reset."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <section id="spells">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Spells and What They Are For</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          The search intent behind "Fatekeeper spells" is not only a name list.
          New players want to know what to equip first. Experienced players want
          to know which spell changes a route, which one saves a mistake, and
          which one is only worth using in a specific room. Because Fatekeeper is
          still in Early Access, this page uses job-based advice instead of fake
          precision. If a patch changes damage values, the job still tells you
          what to test.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              name: "Telekinesis",
              rating: "Best first test",
              desc: "Use it to pull enemies into hazards, off safe lines, or away from your recovery window. It is strong because the environment supplies the payoff.",
            },
            {
              name: "Fireball",
              rating: "Damage check",
              desc: "Test it when you need ranged pressure, oil or hazard interaction, or a safer opener. Drop it if melee does the same job with less risk.",
            },
            {
              name: "Frost Bolt",
              rating: "Control check",
              desc: "Use it when a fast enemy keeps breaking spacing. Even weak damage can matter if the slow effect gives you a clean punish window.",
            },
            {
              name: "Wind Push",
              rating: "Position check",
              desc: "Best near ledges, traps, narrow bridges, or spike walls. In an open room, compare it directly against Telekinesis before spending mana.",
            },
          ].map((spell) => (
            <div key={spell.name} className="rounded-lg border border-d8020/25 bg-d8020/5 p-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="text-base font-bold text-foreground">{spell.name}</h3>
                <span className="text-xs font-semibold text-d8020">{spell.rating}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{spell.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ArticleImage
        src={fatekeeperImages.magic}
        alt="Fatekeeper magic casting and spell experiment route"
        caption="Judge a spell by the problem it solves: hazard kills, spacing, ranged pressure, or crowd control."
      />

      <section id="alchemy" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Alchemy and Crafting Status</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          This is where the old version of the page had a clear weakness: it
          implied useful recipe coverage without actually having verified
          recipes. That is not acceptable for a guide page. Until ingredient
          names, locations, and combinations are checked in a current build, the
          correct content is a verification table and a testing method. That
          still helps users because it tells them what is safe to rely on now
          and what they should record during their own run.
        </p>
        <ActionTable rows={fatekeeperAlchemyRows} />
      </section>

      <section id="consumables" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Consumable Timing Table</h2>
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Situation</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Use now?</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Reason</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Before entering a room", "Yes", "Best window for healing, buffs, and route prep because no enemy is already swinging."],
                ["After knocking an enemy away", "Maybe", "Safe only if distance, terrain, and animation time are all in your favor."],
                ["While cornered", "No", "The animation can turn a recoverable mistake into a death."],
                ["Before a boss-style attempt", "Yes", "Pre-buffing is cleaner than panic use after the arena starts."],
                ["During exploration", "Maybe", "Use only if the resource cost does not block the next fight or backtrack route."],
              ].map(([situation, useNow, reason]) => (
                <tr key={situation} className="border-b border-border/30 last:border-0">
                  <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{situation}</th>
                  <td className="px-4 py-3 text-muted-foreground">{useNow}</td>
                  <td className="px-4 py-3 text-muted-foreground">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ArticleImage
        src={fatekeeperImages.combat}
        alt="Fatekeeper melee combat and spacing before using consumables"
        caption="Consumables are strongest when used before commitment, not while an enemy is already inside melee range."
      />

      <section id="environmental-kills" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Environmental Combat Plan</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Telekinesis and Wind Push matter because Fatekeeper rooms can turn
          space into damage. This gives both new and experienced players a
          shared rule: before spending mana, look for a wall, ledge, trap, oil
          surface, doorway, or narrow bridge. If the room has none of those, a
          control spell may only buy time. If the room has one of those hazards,
          displacement can outperform raw damage.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Room feature</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best spell job</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player action</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Ledge or drop", "Displacement", "Pull or push after baiting the enemy close enough."],
                ["Spike wall", "Forced collision", "Angle the enemy into the wall instead of trading melee hits."],
                ["Fast enemy", "Slow or spacing", "Use Frost Bolt or displacement to create a punish window."],
                ["Clustered enemies", "Separation", "Move one enemy out of the group before committing to melee."],
                ["Open room", "Mana discipline", "Save mana unless the spell creates a clear recovery or damage window."],
              ].map(([feature, job, action]) => (
                <tr key={feature} className="border-b border-border/30 last:border-0">
                  <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{feature}</th>
                  <td className="px-4 py-3 text-muted-foreground">{job}</td>
                  <td className="px-4 py-3 text-muted-foreground">{action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ArticleImage
        src={fatekeeperImages.exploration}
        alt="Fatekeeper exploration route for ingredient and recipe testing"
        caption="For recipe discovery, record the room, ingredient, enemy type, and whether you can safely return after a fight."
      />
    </FatekeeperArticle>
  );
}
