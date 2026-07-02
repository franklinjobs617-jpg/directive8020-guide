import Image from "next/image";
import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { HeroBaseStatsChart, HeroRoleRadarChart } from "@/components/task-bar-hero-charts";
import { TaskBarHeroArticle } from "@/components/task-bar-hero-article";
import {
 createTaskBarHeroMetadata,
 taskBarHeroHeroRows,
 taskBarHeroImages,
 taskBarHeroUrls,
} from "@/lib/task-bar-hero";

const title = "TBH: Task Bar Hero Heroes and Builds Guide";
const description =
 "Choose TBH: Task Bar Hero heroes and builds by role: Knight, Ranger, Sorcerer, Priest, Hunter, Slayer, team templates, stat priorities, and build limits.";
const canonical = "/games/task-bar-hero/heroes-builds";

export const metadata = createTaskBarHeroMetadata({
 title,
 description,
 canonical,
 image: taskBarHeroImages.hero,
});

const faqs = [
 {
  question: "What is the best hero in TBH: Task Bar Hero?",
  answer:
   "There is no single best hero for every account state. Knight is stable, Ranger gives safer physical damage, Sorcerer adds magic pressure, Priest supports sustain, Hunter scales with investment, and Slayer is a DLC melee role.",
 },
 {
  question: "What is the safest beginner team?",
  answer:
   "Use one reliable damage role, one stabilizing role, and a third slot only when that hero has gear, skills, and a clear job. Do not add a hero only because a slot is open.",
 },
 {
  question: "Should I copy a tier list?",
  answer:
   "Use tier lists carefully. A role that is strong with gear, Cube, and skill support can feel weak on an under-built account. Build for the wall you are facing.",
 },
 {
  question: "Is Slayer free?",
  answer:
   "Slayer appears as a DLC-linked role, so do not plan a beginner route around Slayer unless it is available on your account.",
 },
 {
  question: "Where can I see full hero and skill data?",
  answer:
   "Use the hero and skill pages on Task Bar Hero Hub Wiki for full lookup, then use this guide to decide how the roles fit together.",
 },
];

const searchIntentRows = [
 {
  query: "Task Bar Hero best build",
  answer: "Start with role fit: damage, sustain, front line, magic pressure, and the wall you need to clear.",
  href: "#team-templates",
  label: "Builds",
 },
 {
  query: "TBH best hero",
  answer: "Use the hero role table before judging a character from one stage wall.",
  href: "#hero-roles",
  label: "Heroes",
 },
 {
  query: "Task Bar Hero Ranger build",
  answer: "Ranger works best as safer physical damage when gear and skills support that job.",
  href: "#stat-focus",
  label: "Ranger",
 },
 {
  query: "Task Bar Hero Slayer",
  answer: "Treat Slayer as a DLC-linked melee pressure role and do not plan around it unless it is available.",
  href: "#slayer-note",
  label: "DLC",
 },
];

const jumpLinks = [
 { href: "#hero-roles", label: "Hero roles" },
 { href: "#team-templates", label: "Teams" },
 { href: "#stat-focus", label: "Stats" },
 { href: "#slayer-note", label: "Slayer" },
 { href: "#limits", label: "Limits" },
];

const heroImages = [
 ["Knight", taskBarHeroImages.knight],
 ["Ranger", taskBarHeroImages.ranger],
 ["Sorcerer", taskBarHeroImages.sorcerer],
 ["Priest", taskBarHeroImages.priest],
 ["Hunter", taskBarHeroImages.hunter],
 ["Slayer", taskBarHeroImages.slayer],
] as const;

const templateRows = [
 ["Stable push", "Knight + Ranger + Priest", "Use when deaths happen before the fight can settle.", "Lower burst, but easier to diagnose."],
 ["Damage push", "Knight + Ranger + Sorcerer", "Use when survival is fine but the boss timer or damage check is the wall.", "Needs gear and skill support."],
 ["Sustain test", "Ranger + Sorcerer + Priest", "Use when damage is strong but fights need more time to convert.", "Can feel fragile if gear is weak."],
 ["Physical focus", "Knight + Ranger + Hunter", "Use when physical gear and skill investment are ahead of magic options.", "Do not force it if weapons lag."],
 ["DLC pressure", "Knight or Priest + Slayer + ranged damage", "Use only when Slayer is available and supported.", "A DLC role still needs gear and Cube support."],
] as const;

const statRows = [
 ["Front line", "HP, armor, damage reduction, sustain support", "Use when the team collapses before damage matters."],
 ["Physical damage", "Weapon quality, attack damage, attack speed, critical support", "Use when the team survives but cannot finish."],
 ["Magic pressure", "Skill levels, elemental or magic damage support, cooldown value", "Use when burst windows matter more than basic attacks."],
 ["Support", "Survival, healing value, team uptime, utility skills", "Use when fights are close but the damage team runs out of time alive."],
 ["Account systems", "Cube, runes, item quality, boxes, material route", "Use when a hero looks correct but performance is still flat."],
] as const;

export default function TaskBarHeroHeroesBuildsPage() {
 return (
  <TaskBarHeroArticle
   title={title}
   description={description}
   canonical={canonical}
   label="Heroes and Builds"
   heroImage={taskBarHeroImages.hero}
   heroAlt="TBH Task Bar Hero heroes and builds guide key art"
   faqs={faqs}
  >
   <SearchAnswerPanel
    title="What is the best TBH build?"
    answer="The best build is the one that fixes the wall in front of you. Use one clear damage role, one stabilizing role when needed, and gear or Cube support that matches the team. Do not judge a hero without checking the systems around it."
    intentRows={searchIntentRows}
    jumpLinks={jumpLinks}
   />

   <BlufBox title="Build rule">
    <p>
     <strong>Build around roles before rankings.</strong> A high-damage hero
     without gear, skills, Cube, and protection can fail harder than a simpler
     team with clear jobs.
    </p>
   </BlufBox>

   <section id="hero-roles" className="prose-game">
    <h2>Hero Roles</h2>
    <p>
     TBH has six visible hero roles in the current data set: Knight, Ranger,
     Sorcerer, Priest, Hunter, and Slayer. These roles should not be judged only
     by a tier label. A role that looks weak on one account may be missing the
     gear, skill levels, or Cube support it needs. A role that looks strong in a
     late build can be a poor beginner investment if the account cannot support
     it yet.
    </p>
    <p>
     Use the table below as a role map. It tells you what each hero is trying
     to solve. If you need exact base data, skill names, or icon lookup, open
     the{" "}
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

   <div className="my-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {heroImages.map(([name, src]) => (
     <a
      key={name}
      href={taskBarHeroUrls.heroes}
      target="_blank"
      rel="noreferrer"
      className="rounded-lg border border-border bg-white p-4 transition-colors hover:border-dribbble-pink"
     >
      <div className="relative h-36">
       <Image
        src={src}
        alt={`TBH Task Bar Hero ${name} hero artwork`}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 50vw, 220px"
       />
      </div>
      <h3 className="mt-2 text-center text-sm font-bold text-foreground">{name}</h3>
     </a>
    ))}
   </div>

   <HeroBaseStatsChart />
   <HeroRoleRadarChart />

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Hero</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Role</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Best use</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Limit</th>
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
     alt="TBH Task Bar Hero team overview"
     caption="Team templates should answer a wall: survive longer, deal more damage, or support the main carry."
    />
    <p>
     A team template is a starting point, not a rule. If your gear is strongest
     on physical heroes, a physical template will feel better than a magic
     template that lacks support. If your team dies instantly, adding another
     damage role may make the clear worse. Pick the template that matches the
     actual failure.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Template</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Example roles</th>
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
    <h2>Stat Priorities by Job</h2>
    <p>
     Stats should follow the job. A front-line role needs to live long
     enough for the team to work. A physical damage role needs weapon quality
     and damage stats. A magic role needs skill and cooldown support. A support
     role needs to keep the team alive without consuming every resource. When a
     build feels bad, check whether the stats match the job before replacing the
     hero.
    </p>
    <p>
     For exact rune names and paths, use the{" "}
     <a href={taskBarHeroUrls.runes} target="_blank" rel="noreferrer">
      rune database
     </a>
     . For broader build examples and updates, check the{" "}
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
       <th className="px-4 py-3 text-left font-semibold text-foreground">Job</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Stats to value</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Use when</th>
      </tr>
     </thead>
     <tbody>
      {statRows.map(([job, stats, use]) => (
       <tr key={job} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{job}</td>
        <td className="px-4 py-3 text-muted-foreground">{stats}</td>
        <td className="px-4 py-3 text-muted-foreground">{use}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section id="slayer-note" className="prose-game">
    <h2>Slayer and DLC Planning</h2>
    <p>
     Slayer should be treated differently from the basic learning roles because
     it is DLC-linked. That does not make it bad, and it
     does not make it mandatory. It means a beginner guide should not assume
     every account has it. If Slayer is available, judge it like any other role:
     does it solve the current wall, does it have gear, and does the team
     support the damage window?
    </p>
   </section>

   <section id="limits" className="prose-game">
    <h2>What This Guide Will Not Overclaim</h2>
    <p>
     This page avoids a fake final tier list because TBH builds depend on gear,
     Cube, runes, skills, available heroes, and the wall you are facing. A
     ranking without that context can push players into bad spending. Use this
     page to pick roles and team shape. Use the Wiki for exact lookup. Use the{" "}
     <Link href="/games/task-bar-hero/act-2-10-act-3-10-guide">
      2-10 and 3-10 guide
     </Link>{" "}
     when you need to diagnose a specific wall.
    </p>
    <p>
     If you are still early, return to the{" "}
     <Link href="/games/task-bar-hero/beginner-guide">beginner guide</Link>.
     If the team is right but materials are confusing, move to the{" "}
     <Link href="/games/task-bar-hero/cube-guide">Cube guide</Link>.
    </p>
   </section>
  </TaskBarHeroArticle>
 );
}
