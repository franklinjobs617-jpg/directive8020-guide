import Image from "next/image";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { HeroStatTable, HeroRoleComparisonTable, RunePriorityTable } from "@/components/task-bar-hero-charts";
import { TaskBarHeroArticle } from "@/components/task-bar-hero-article";
import {
 createTaskBarHeroMetadata,
 taskBarHeroHeroRows,
 taskBarHeroImages,
 taskBarHeroUrls,
 taskBarHeroData,
} from "@/lib/task-bar-hero";

const title = "TBH: Task Bar Hero Heroes and Builds Guide";
const description =
 "Choose TBH: Task Bar Hero heroes by real Lv1 stats. Knight, Ranger, Sorcerer, Priest, Hunter, Slayer — base stats, role comparisons, team templates, stat priorities, and build limits.";
const canonical = "/games/task-bar-hero/heroes-builds";

export const metadata = createTaskBarHeroMetadata({
 title,
 description,
 canonical,
 image: taskBarHeroImages.hero,
});

const faqs = [
 {
  question: "What is the best hero in TBH?",
  answer:
   "There is no single best hero. Knight is the safest. Ranger clears fastest with gear. Sorcerer bursts hardest with stat support. Priest enables sustain. Hunter and Slayer are DLC and need investment. Check Lv1 base stats below and pick the role that fits your wall.",
 },
 {
  question: "What is the safest beginner team?",
  answer:
   "Knight (tank) + Ranger (DPS) + Priest (support). This covers survival, steady damage, and sustain. Knight has HP 130 + 0.45 armor. Priest has HP 95 + healing. Ranger provides physical damage from range.",
 },
 {
  question: "Should I follow a tier list?",
  answer:
   "Tier lists are context-dependent. A hero that looks weak may be missing gear, skill levels, Cube, or rune support. Use the Lv1 stat table below to understand base capabilities, then decide based on your account state.",
 },
 {
  question: "Is Sorcerer good for beginners?",
  answer:
   "Not really. Sorcerer has the lowest HP (50) and armor (0.05) of all six classes. It needs Cube access, cooldown reduction, and cast speed before it delivers. Start with Knight or Ranger.",
 },
 {
  question: "Is Slayer worth buying?",
  answer:
   "Treat Slayer as a late-game experiment. It has high HP (115) and ATK (2) but self-damage mechanics make it risky. Do not buy it as a new player. If you already own it, gear it carefully and accept the high mortality.",
 },
];

const searchIntentRows = [
 {
  query: "Task Bar Hero best build",
  answer: "Build around your wall: damage, survival, sustain, or DLC pressure. Match gear and stats to the job.",
  href: "#team-templates",
  label: "Builds",
 },
 {
  query: "TBH best hero",
  answer: "Use the Lv1 stat table and 4-dimension comparison below. Knight safest, Ranger fastest, Sorcerer burstiest.",
  href: "#hero-stats",
  label: "Stats",
 },
 {
  query: "Task Bar Hero Ranger build",
  answer: "Ranger needs bow upgrades, attack speed, crit (30%+ for Act 3-10), and amethyst sockets.",
  href: "#stat-focus",
  label: "Ranger",
 },
 {
  query: "Task Bar Hero Slayer DLC",
  answer: "Slayer is DLC-only. High HP (115) + self-damage mechanic. Treat as late-game experiment, not a farming class.",
  href: "#dlc-heroes",
  label: "DLC",
 },
];

const jumpLinks = [
 { href: "#hero-stats", label: "Lv1 base stats" },
 { href: "#hero-roles", label: "Role table" },
 { href: "#team-templates", label: "Teams" },
 { href: "#stat-focus", label: "Stat priorities" },
 { href: "#dlc-heroes", label: "DLC heroes" },
];

const templateRows = [
 ["Stable push", "Knight + Ranger + Priest", "Use when the team dies before the fight settles.", "Lower burst, but the easiest to diagnose and adjust."],
 ["Damage push", "Knight + Ranger + Sorcerer", "Use when survival is fine but the boss timer is the wall.", "Needs gear and skill support for Sorcerer."],
 ["Sustain test", "Ranger + Sorcerer + Priest", "Use when damage is strong but fights need more time.", "Fragile if gear is weak. Priest sustain becomes the crutch."],
 ["Physical focus", "Knight + Ranger + Hunter (DLC)", "Use when physical gear and skill investment are ahead of magic.", "Do not force it without the weapons to support it."],
 ["DLC pressure", "Knight/Priest + Slayer (DLC) + ranged DPS", "Use only when Slayer is available and properly geared.", "Slayer's self-damage means it needs precise gear tuning."],
] as const;

const statRows = [
 ["Front line", "HP, armor, block, damage reduction", "Use when the team collapses before damage matters. Knight and Priest both work."],
 ["Physical damage", "Weapon quality, attack damage, attack speed, crit rate", "Use when the team survives but cannot finish. 30%+ crit for 3-10."],
 ["Magic burst", "Spell damage, cooldown reduction, cast speed, AoE", "Use when burst windows matter more than sustained attacks. Sorcerer territory."],
 ["Support", "HP, healing value, cooldown, team uptime", "Use when fights are close but the team runs out of time alive. Priest specialization."],
 ["Account systems", "Cube level, rune direction, gear quality, material route", "Use when a hero looks correct on paper but performance is flat."],
] as const;

export default function TaskBarHeroHeroesBuildsPage() {
 return (
  <TaskBarHeroArticle
   title={title}
   description={description}
   canonical={canonical}
   label="Heroes and Builds"
   heroImage={taskBarHeroImages.hero}
   heroAlt="TBH Task Bar Hero heroes and builds guide"
   faqs={faqs}
  >
   <SearchAnswerPanel
    title="What is the best TBH build?"
    answer="The best build fixes the wall in front of you. Use one clear damage role, one stabilizing role, and gear or Cube support that matches the team. Do not judge a hero without checking its Lv1 base stats first — Knight has 130 HP, Sorcerer has 50 HP. That difference explains their roles."
    intentRows={searchIntentRows}
    jumpLinks={jumpLinks}
   />

   <BlufBox title="Roles before rankings">
    <p>
     <strong>Build around roles before rankings.</strong> A high-damage hero
     without gear, skills, Cube, and protection fails harder than a simple team
     with clear jobs. The stat table below shows why.
    </p>
   </BlufBox>

   <section id="hero-stats" className="prose-game">
    <h2>Hero Lv1 Base Stats — Sourced from Game Files</h2>
    <p>
     The numbers below are the actual Lv1 base stats from game version v1.00.09.
     They are not opinions or tier scores. Knight has 130 HP because it is
     designed to tank. Sorcerer has 50 HP because it trades survivability for
     the highest burst potential (0.82 crit damage multiplier). Ranger has the
     fastest attack speed (10) because clear speed is its job.
    </p>
    <p>
     Use these numbers to understand why some heroes feel tankier, faster, or
     burstier than others — and why gear, runes, and Cube progress are what
     change those baselines. If you need the full hero details and skill data,
     open the{" "}
     <a href={taskBarHeroUrls.heroes} target="_blank" rel="noreferrer">
      full hero database
     </a>{" "}
     and{" "}
     <a href={taskBarHeroUrls.skills} target="_blank" rel="noreferrer">
      skill list
     </a>
     .
    </p>
   </section>

   <HeroStatTable />
   <HeroRoleComparisonTable />

   <section id="hero-roles" className="prose-game">
    <h2>Hero Roles</h2>
    <p>
     TBH has six heroes. Three are free (Knight, Ranger, Sorcerer) and three
     are DLC (Priest, Hunter, Slayer). Each solves a different problem. The
     table below tells you what each hero is for, not which one is &quot;better.&quot;
    </p>
   </section>

   <div className="my-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {taskBarHeroData.map((h) => (
     <a
      key={h.name}
      href={taskBarHeroUrls.heroes}
      target="_blank"
      rel="noreferrer"
      className="rounded-lg border border-border bg-white p-4 transition-colors hover:border-dribbble-pink"
     >
      <div className="relative h-36">
       <Image
        src={taskBarHeroImages[h.name.toLowerCase() as keyof typeof taskBarHeroImages] as string}
        alt={`TBH Task Bar Hero ${h.name} hero artwork`}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 50vw, 220px"
       />
      </div>
      <h3 className="mt-2 text-center text-sm font-bold text-foreground">{h.name}</h3>
      <p className="mt-1 text-center text-xs text-muted-foreground">
       HP {h.hp} / ATK {h.atk} / {h.difficulty} {h.dlc ? "· DLC" : "· Free"}
      </p>
     </a>
    ))}
   </div>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Hero</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Role</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Best early use</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Do not misuse it</th>
      </tr>
     </thead>
     <tbody>
      {taskBarHeroHeroRows.map(([hero, role, use, warning]) => (
       <tr key={hero} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{hero}</td>
        <td className="px-4 py-3 text-muted-foreground">{role}</td>
        <td className="px-4 py-3 text-muted-foreground">{use}</td>
        <td className="px-4 py-3 text-muted-foreground">{warning}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section id="team-templates" className="prose-game">
    <h2>Team Templates</h2>
    <ArticleImage
     src={taskBarHeroImages.overview}
     alt="TBH team formation examples — role-based team building"
     caption="Team templates are starting points, not rules. If your gear is strongest on physical heroes, a physical template will outperform a magic template every time."
    />
    <p>
     A team template is a starting point. If your gear is strongest on physical
     heroes, a physical template will feel better than a magic template that lacks
     support. If your team dies instantly, adding another damage role may make the
     clear worse. Pick the template that matches the actual failure.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Template</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Team</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Use when</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Watch out</th>
      </tr>
     </thead>
     <tbody>
      {templateRows.map(([template, roles, use, warning]) => (
       <tr key={template} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{template}</td>
        <td className="px-4 py-3 text-muted-foreground">{roles}</td>
        <td className="px-4 py-3 text-muted-foreground">{use}</td>
        <td className="px-4 py-3 text-muted-foreground">{warning}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section id="stat-focus" className="prose-game">
    <h2>Stat Priorities by Role</h2>
    <p>
     Stats should follow the job. A front-line hero needs to survive long enough
     for damage to matter. A physical damage hero needs weapon quality and crit.
     A magic hero needs skill and cooldown support. When a build feels bad, check
     whether the stats match the job before replacing the hero.
    </p>
    <p>
     For the Priest specifically, skill priority matters: Power Blessing (team
     damage amp) first, Sanctuary (healing/survival) second, Max HP third,
     Cooldown Reduction fourth. This order changes whether a Priest carries or
     dies.
    </p>
    <p>
     For exact rune names and stat paths, use the{" "}
     <a href={taskBarHeroUrls.runes} target="_blank" rel="noreferrer">
      rune database
     </a>
     . For broader build examples, check the{" "}
     <a href={taskBarHeroUrls.builds} target="_blank" rel="noreferrer">
      Wiki builds section
     </a>
     .
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Role</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Stats to value</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Use when</th>
      </tr>
     </thead>
     <tbody>
      {statRows.map(([role, stats, use]) => (
       <tr key={role} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{role}</td>
        <td className="px-4 py-3 text-muted-foreground">{stats}</td>
        <td className="px-4 py-3 text-muted-foreground">{use}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section className="relative">
    <RunePriorityTable />
   </section>

   <section id="dlc-heroes" className="prose-game">
    <h2>DLC Heroes — Priest, Hunter, Slayer</h2>

    <h3>Priest (DLC, free during promotion)</h3>
    <p>
     Priest is the only dedicated support class in TBH. HP 95, ATK 1, 0.30 armor.
     Its role is to keep the team alive longer. Power Blessing amplifies team
     damage significantly — this is the core skill. Sanctuary provides healing.
     Priest should never be your first hero. Use it as the second or third slot.
     Skill priority: Power Blessing → Sanctuary → Max HP → Cooldown Reduction.
    </p>

    <h3>Hunter (DLC)</h3>
    <p>
     Hunter has the highest raw damage output of the six classes. Crossbow + bolts,
     explosive/lightning AoE, elemental status stacking. HP 70, ATK 2. Hunter
     needs gear to perform — do not buy it as a new player. Purchase it when you
     are committed to the game and have weapons ready. Even then, Hunter is a
     gear-dependent investment, not an instant power spike.
    </p>

    <h3>Slayer (DLC)</h3>
    <p>
     Slayer is the risk-reward class. HP 115, ATK 2 — second tankiest hero after
     Knight. But its self-damage mechanic means it frequently kills itself. High
     mortality rate, very specific gear requirements. Treat Slayer as a late-game
     experiment, not a core farming class. Do not plan a beginner route around it.
    </p>
   </section>

   </TaskBarHeroArticle>
 );
}
