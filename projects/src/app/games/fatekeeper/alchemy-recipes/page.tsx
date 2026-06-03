import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { FatekeeperArticle } from "@/components/fatekeeper-article";
import {
  createFatekeeperMetadata,
  fatekeeperAlchemyRows,
  fatekeeperImages,
  fatekeeperVideos,
} from "@/lib/fatekeeper";

const title = "Fatekeeper Alchemy, Spells & Crafting Guide";
const description =
  "Fatekeeper spells and crafting overview: the four confirmed spells (Telekinesis, Fireball, Frost Bolt, Wind Push), consumable mechanics, and what we're still verifying through gameplay.";
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
      "Four: Telekinesis, Fireball, Frost Bolt, and Wind Push. Telekinesis is the clear winner right now — environmental kills one-shot enemies. The damage spells are undertuned and mana runs out fast. This is based on Game8's June 2 review.",
  },
  {
    question: "Does Fatekeeper have a crafting or alchemy system?",
    answer:
      "Steam says yes. The store page and developer notes mention alchemy. But we haven't tested the recipes ourselves yet, so we're not going to list ingredient combinations we can't verify. Game8 confirms consumables are in the game — they just have slow, uncancelable animations that make them risky to use mid-fight.",
  },
  {
    question: "How do consumables work in Fatekeeper?",
    answer:
      "Slowly. You can't cancel the animation once it starts, so popping a potion while an enemy is charging at you is a death sentence. Use them before fights, not during. This is a known rough edge — the devs have 18 months of Early Access to balance it.",
  },
  {
    question: "Which spell should I use?",
    answer:
      "Telekinesis. The other three don't deal enough damage to justify the mana cost right now. Pull enemies into walls, off cliffs, into each other. The game gives you environmental hazards for a reason.",
  },
];

const searchIntentRows = [
  {
    query: "Fatekeeper spells list",
    answer: "4 spells: Telekinesis, Fireball, Frost Bolt, Wind Push. Telekinesis is the most useful — pulls enemies into hazards.",
    href: "#spells",
    label: "Spells",
  },
  {
    query: "Fatekeeper alchemy crafting",
    answer: "Alchemy/crafting is confirmed by Steam but specific recipes need gameplay verification. Consumables have slow, uncancelable use animations.",
    href: "#alchemy",
    label: "Crafting",
  },
  {
    query: "Fatekeeper best spell",
    answer: "Telekinesis — pull enemies into spike walls or off ledges for instant kills. Damage spells are reportedly weak in current build.",
    href: "#spells",
    label: "Best",
  },
  {
    query: "Fatekeeper consumable tips",
    answer: "Use consumables BEFORE combat. Animations are slow and can't be canceled. This is a known Early Access issue.",
    href: "#consumables",
    label: "Tips",
  },
];

const jumpLinks = [
  { href: "#spells", label: "Spells (verified)" },
  { href: "#alchemy", label: "Alchemy (needs verification)" },
  { href: "#consumables", label: "Consumables" },
  { href: "/games/fatekeeper/weapons-spells", label: "Weapons & Spells" },
  { href: "/games/fatekeeper/best-builds", label: "Best Builds" },
];

// Status panel: what we've verified vs what still needs checking
const keyFacts = [
  { label: "Spells confirmed (4)", value: "Telekinesis, Fireball, Frost Bolt, Wind Push", status: "verified" as const },
  { label: "Alchemy system", value: "Exists per Steam store page, specific recipes unverified", status: "needs-check" as const },
  { label: "Consumable mechanics", value: "Slow uncancelable animations, plan use before combat", status: "verified" as const },
  { label: "Ingredient locations", value: "No specific locations verified from primary gameplay", status: "needs-check" as const },
  { label: "Mana economy", value: "Reportedly too limited for frequent spellcasting", status: "needs-check" as const },
  { label: "Environmental kills", value: "Kick off ledges, spike walls, gravity kills confirmed", status: "verified" as const },
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
        Fatekeeper ships with four spells. <strong>Telekinesis</strong> is the
        standout — yank an enemy into a spike wall or off a ledge and the fight's
        over. The other three (Fireball, Frost Bolt, Wind Push) exist but don't
        hit hard enough to matter right now. Mana runs dry fast. The alchemy
        system is mentioned on Steam but we haven't dug into it yet — we'll update
        this page once we've tested recipes firsthand.{" "}
        <em>Spell data from Game8's June 2 review.</em>
      </BlufBox>

      <StatusPanel items={keyFacts} />

      <SearchAnswerPanel
        title="Fatekeeper Spells & Crafting"
        answer="Four spells in the current build. Telekinesis is the one you'll actually use — environmental kills end fights instantly. Alchemy exists but we're still testing recipes. Pop consumables before combat, not during."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <section id="spells">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Spells (Verified from Game8 Review)</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          These four spells are confirmed in the Early Access build. Source: Game8
          review published June 2, 2026, based on direct gameplay.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              name: "Telekinesis",
              rating: "Pick this one",
              desc: "Pull enemies into spike walls. Throw them off ledges. Slam them into each other. Instant kills if you position right — and positioning is the whole game. By far the most useful spell in the current build.",
            },
            {
              name: "Fireball",
              rating: "Skip it for now",
              desc: "Looks cool. Doesn't kill things. Your melee attacks hit harder, cost no mana, and don't leave you standing still casting. Maybe gear scaling fixes this later.",
            },
            {
              name: "Frost Bolt",
              rating: "Maybe useful",
              desc: "The slow effect can buy you breathing room against fast enemies. Damage is negligible, but crowd control has its moments. Worth testing if you're struggling with aggressive mobs.",
            },
            {
              name: "Wind Push",
              rating: "Situational",
              desc: "Knocks enemies back. Handy near ledges or spike walls. Otherwise, you're spending mana to move an enemy two feet. Telekinesis does the same job better.",
            },
          ].map((spell) => (
            <div key={spell.name} className="rounded-lg border border-d8020/25 bg-d8020/5 p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-foreground">{spell.name}</h3>
                <span className="text-xs font-semibold text-d8020">{spell.rating}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{spell.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="alchemy" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Alchemy & Crafting (Needs Verification)</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Fatekeeper's Steam store page and developer descriptions mention alchemy
          and crafting systems. However,{" "}
          <strong>specific recipes, ingredient names, and farming locations have
          not been verified from primary gameplay sources</strong>. The table below
          summarizes what we know and what still needs testing.
        </p>
        <ActionTable rows={fatekeeperAlchemyRows} />
      </section>

      <section id="consumables" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Consumable Mechanics (Verified)</h2>
        <div className="rounded-lg border border-yellow-400/30 bg-yellow-400/5 p-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-yellow-300">Known issue (Game8 review):</strong>{" "}
            Consumables in Fatekeeper have slow use animations that cannot be
            canceled once started. This means you must plan consumable use{" "}
            <strong>before</strong> engaging enemies. Using a potion mid-combat
            leaves you vulnerable. This is expected to be balanced during Early
            Access development. The developers (Paraglacial, team of 13) have an
            ~18-month roadmap, so mechanics will evolve.
          </p>
        </div>
      </section>

      <section id="environmental-kills" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Environmental Combat (Verified)</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Environmental kills are a core combat mechanic. Confirmed from multiple
          sources (Game8 review, Steam store page, official trailer):
        </p>
        <div className="grid gap-3">
          {[
            "Kick enemies off ledges for instant gravity kills.",
            "Push enemies into spike walls using Telekinesis or Wind Push.",
            "Use Telekinesis to throw enemies into each other.",
            "Ignite environmental hazards (oil slicks) with fire spells.",
            "Combine crowd control spells with melee positioning near hazards.",
          ].map((tip, i) => (
            <div key={i} className="flex gap-3 rounded-md border border-border/40 bg-background/30 p-3">
              <span className="mt-0.5 text-xs font-bold text-d8020">0{i + 1}</span>
              <p className="text-sm leading-relaxed text-muted-foreground">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      <ArticleImage
        src={fatekeeperImages.combat}
        alt="Fatekeeper environmental combat — kicking enemies into spike walls"
        caption="Environmental kills are Fatekeeper's strongest combat tool. Use Telekinesis to pull enemies into spike walls, off ledges, or into each other for instant kills."
      />
    </FatekeeperArticle>
  );
}
