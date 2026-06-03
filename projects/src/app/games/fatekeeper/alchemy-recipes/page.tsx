import Link from "next/link";
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
      "Four spells confirmed: Telekinesis (pull enemies into hazards — reported as the most useful), Fireball (direct damage), Frost Bolt (slow + damage), and Wind Push (knockback/crowd control). The three damage spells reportedly deal low damage compared to Telekinesis, and mana is limited.",
  },
  {
    question: "Does Fatekeeper have a crafting or alchemy system?",
    answer:
      "Yes. The Steam store page and developer descriptions mention alchemy and crafting systems. Specific recipes, ingredient names, and crafting station locations need verification through direct gameplay. The Game8 review confirms consumables exist but notes they have slow, uncancelable use animations.",
  },
  {
    question: "How do consumables work in Fatekeeper?",
    answer:
      "Consumables exist but have slow use animations that cannot be canceled once started (reported by Game8 review). Plan consumable use before engaging enemies. This mechanic is expected to be balanced during Early Access.",
  },
  {
    question: "Which spell is best in Fatekeeper?",
    answer:
      "Telekinesis is reported as the most useful spell because it can pull enemies into environmental hazards (spike walls, ledges) for instant kills. The three elemental damage spells (Fireball, Frost Bolt, Wind Push) reportedly deal negligible damage in the current Early Access build and mana feels too limited for frequent casting.",
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
        Four spells confirmed in Fatekeeper Early Access:{" "}
        <strong>Telekinesis</strong> (pull enemies into hazards — most useful),{" "}
        <strong>Fireball</strong> (direct damage), <strong>Frost Bolt</strong>{" "}
        (slow + damage), and <strong>Wind Push</strong> (knockback). Telekinesis
        is the strongest because environmental kills (spike walls, ledges) can
        one-shot enemies. An alchemy/crafting system exists but specific recipes
        and ingredient locations are not yet verified from primary gameplay
        sources. This page will be updated as we test and confirm.{" "}
        <em>Sources: Game8 review, Steam store page, developer descriptions.</em>
      </BlufBox>

      <StatusPanel items={keyFacts} />

      <SearchAnswerPanel
        title="Fatekeeper Spells & Crafting"
        answer="4 spells: Telekinesis, Fireball, Frost Bolt, Wind Push. Alchemy exists but specific recipes need verification. Consumables have slow, uncancelable animations — plan use before combat."
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
              rating: "Best (S-Tier)",
              desc: "Pull enemies toward you or into environmental hazards. Can throw enemies off ledges, into spike walls, or into each other for gravity kills. Reported as the most useful spell by a wide margin.",
            },
            {
              name: "Fireball",
              rating: "Weak (C-Tier)",
              desc: "Direct damage projectile. Reportedly deals negligible damage compared to melee attacks. May improve with gear scaling or balance patches.",
            },
            {
              name: "Frost Bolt",
              rating: "Situational (B-Tier)",
              desc: "Slows enemies and deals ice damage. The slow effect has utility for crowd control, but damage output is reportedly low.",
            },
            {
              name: "Wind Push",
              rating: "Situational (B-Tier)",
              desc: "Knockback and crowd control. Can push enemies into hazards or create breathing room. Damage is reportedly negligible.",
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
    </FatekeeperArticle>
  );
}
