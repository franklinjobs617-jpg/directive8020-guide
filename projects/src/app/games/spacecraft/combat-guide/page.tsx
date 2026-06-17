import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { createSpacecraftMetadata, spacecraftImages } from "@/lib/spacecraft";

const title = "SpaceCraft Combat Guide: Weapons, Shields, PvP Tactics & Pirate Defense";
const description =
  "SpaceCraft combat guide for ship-to-ship battles. Covers weapon types (kinetic, thermal, ion), shield management, damage type triangle, PvP tactics, and pirate defense — with Early Access status notes.";
const canonical = "/games/spacecraft/combat-guide";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.combat,
});

const faqs = [
  {
    question: "Does SpaceCraft have combat right now?",
    answer:
      "No. Combat systems are NOT implemented as of the June 2026 Early Access launch. Shiro Games has confirmed that PvE pirate encounters and PvP combat are planned for future updates. This guide covers confirmed mechanics from developer previews and the damage type system that will be in place when combat arrives.",
  },
  {
    question: "What weapon types will SpaceCraft have?",
    answer:
      "Three damage types have been confirmed: Kinetic (projectile weapons, effective against hull armor), Thermal (energy weapons, effective against shields), and Ion (disruption weapons, effective against subsystems like reactors and thrusters). The damage type triangle will be the core combat mechanic.",
  },
  {
    question: "Will SpaceCraft have full-loot PvP?",
    answer:
      "Specific PvP rules have not been fully detailed by Shiro Games. Based on developer previews, PvP will be opt-in within designated combat zones and faction war sectors. Safe zones (starter sectors, station proximity) will protect non-combatant players. Full-loot mechanics have been mentioned but not confirmed.",
  },
  {
    question: "How should I prepare for combat?",
    answer:
      "Invest in shield generators and practice power grid management. When combat arrives, players who have mastered manual power allocation (especially the 70/30 shields-to-weapons split during engagements) will have a significant advantage. Stockpile basic ship components now so you can quickly rebuild after combat losses.",
  },
];

const damageRows = [
  ["Kinetic (Projectile)", "Hull Armor", "Shields", "Subsystems", "Medium", "Bypasses shields partially. Best for finishing damaged ships. Railguns, autocannons, missile pods."],
  ["Thermal (Energy)", "Shields", "Hull Armor", "Hull Armor", "Medium", "Primary shield-breaker. High energy draw. Best for opening engagements. Beam lasers, plasma cannons."],
  ["Ion (Disruption)", "Subsystems", "Hull Armor", "Shields", "Low", "Disables specific ship systems. Does minimal hull damage. Best for tactical disabling. Ion cannons, EMP torpedoes."],
];

const archetypeRows = [
  ["Brawler", "Kinetic + Thermal", "Heavy Shields", "Medium", "Direct engagement. Close range, sustained fire. Overwhelm with mixed damage."],
  ["Kiter", "Thermal (long-range)", "Light Shields", "High", "Hit and run. Stay at maximum range, drain shields, disengage before taking return fire."],
  ["Disabler", "Ion + Kinetic", "Medium Shields", "Medium", "Tactical disabling. Strip subsystems first (thrusters, then weapons, then reactor), then finish with kinetics."],
  ["Shield Tank", "Thermal", "Very Heavy Shields", "Low", "Attrition warfare. Outlast opponents by cycling shield generators. Weak against sustained kinetic fire."],
];

const searchIntentRows = [
  {
    query: "Does SpaceCraft have PvP?",
    answer: "Not yet. Combat systems (PvE pirates and PvP) are planned for future Early Access updates. No confirmed release date.",
    href: "#early-access-status",
    label: "Status",
  },
  {
    query: "SpaceCraft damage types explained",
    answer: "Kinetic vs Hull, Thermal vs Shields, Ion vs Subsystems. Rock-paper-scissors damage triangle with partial overlaps.",
    href: "#damage-triangle",
    label: "Damage",
  },
  {
    query: "SpaceCraft PvP preparation",
    answer: "Master power allocation (70/30 shields-to-weapons), stockpile components, and practice manual grid management.",
    href: "#preparation",
    label: "Prep",
  },
];

const jumpLinks = [
  { href: "#early-access-status", label: "EA status" },
  { href: "#damage-triangle", label: "Damage types" },
  { href: "#combat-archetypes", label: "Archetypes" },
  { href: "#preparation", label: "Preparation" },
  { href: "/games/spacecraft/ship-building", label: "Ship building" },
  { href: "/games/spacecraft/factions-guide", label: "Factions" },
];

export default function SpacecraftCombatPage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Combat Guide"
      heroImage={spacecraftImages.combat}
      heroAlt="SpaceCraft combat and weapons guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="Does SpaceCraft have combat?"
        answer="Combat systems are NOT implemented as of the June 2026 Early Access launch. Shiro Games has confirmed that PvE pirate encounters and PvP combat are planned for future updates. This guide covers confirmed mechanics from developer previews and the damage type system that will be in place when combat arrives."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Early Access Caveat">
        <p>
          <strong>SpaceCraft's combat system is not yet live.</strong>{" "}
          This guide is based on developer announcements and previews. All information is subject to change when combat is implemented during Early Access. Check the official Shiro Games announcements and this guide will be updated when combat content releases.
        </p>
      </BlufBox>

      <section id="early-access-status" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Early Access Combat Status</h2>
        <ArticleImage
          src={spacecraftImages.combat}
          alt="SpaceCraft combat ship battle preview"
          caption="Combat is the most anticipated feature for SpaceCraft's Early Access roadmap. Until it arrives, focus on mastering the economic and building systems that will fund your future war fleet."
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          As of the June 11, 2026 Early Access launch, SpaceCraft does not include any combat mechanics. The game currently focuses on mining, ship building, factory automation, and trading. Shiro Games has stated that PvE pirate encounters will be the first combat content added, followed by opt-in PvP in designated combat zones. There is no confirmed release date for either feature.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          The information below is based on developer previews, community Q&A sessions, and data-mined references. All mechanics described are subject to change. We will update this guide when combat is implemented.
        </p>
      </section>

      <section id="damage-triangle" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Planned Damage Type Triangle</h2>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          Shiro Games has confirmed a three-type damage system that will form the tactical foundation of SpaceCraft combat. Each damage type has strengths and weaknesses, creating a rock-paper-scissors dynamic that rewards mixed loadouts and tactical target selection.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Damage Type</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Strong vs</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Weak vs</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Ignores</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Hull Damage</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Weapon Examples</th>
              </tr>
            </thead>
            <tbody>
              {damageRows.map(([type, strongVs, weakVs, ignores, hullDmg, examples]) => (
                <tr key={type} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{type}</td>
                  <td className="px-4 py-3 text-muted-foreground">{strongVs}</td>
                  <td className="px-4 py-3 text-muted-foreground">{weakVs}</td>
                  <td className="px-4 py-3 text-muted-foreground">{ignores}</td>
                  <td className="px-4 py-3 text-muted-foreground">{hullDmg}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="combat-archetypes" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Ship Combat Archetypes (Planned)</h2>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Archetype</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Primary Weapons</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Defense</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Speed</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Tactical Role</th>
              </tr>
            </thead>
            <tbody>
              {archetypeRows.map(([name, weapons, defense, speed, role]) => (
                <tr key={name} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{weapons}</td>
                  <td className="px-4 py-3 text-muted-foreground">{defense}</td>
                  <td className="px-4 py-3 text-muted-foreground">{speed}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="preparation" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">How to Prepare for Combat Now</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Even though combat is not yet implemented, you can prepare: (1) Master manual power grid allocation — practice switching between mining, travel, and defensive power distributions quickly; (2) Stockpile shield generators, heat sinks, and weapon modules so you can retrofit your ships immediately when combat arrives; (3) Build a combat-capable ship frame now and install the core infrastructure (reactor, thrusters, shield mounts) — add weapons when they become available; (4) Join a combat-focused Corporation so you have a fleet to fly with on day one.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          For ship design principles that will apply to combat vessels, see our{" "}
          <Link href="/games/spacecraft/ship-building" className="text-foreground underline">ship building guide</Link>.
          For faction alignment that affects combat zones, see our{" "}
          <Link href="/games/spacecraft/factions-guide" className="text-foreground underline">factions guide</Link>.
        </p>
      </section>
    </SpacecraftArticle>
  );
}
