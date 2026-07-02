import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { BossDiagnosisChart } from "@/components/task-bar-hero-charts";
import { TaskBarHeroArticle } from "@/components/task-bar-hero-article";
import {
 createTaskBarHeroMetadata,
 taskBarHeroBossCheckRows,
 taskBarHeroImages,
 taskBarHeroUrls,
} from "@/lib/task-bar-hero";

const title = "TBH: Task Bar Hero Act 2-10 and Act 3-10 Guide";
const description =
 "Fix TBH: Task Bar Hero Act 2-10 and Act 3-10 walls with team checks, gear upgrades, skill priorities, Cube progress, damage pressure, and recovery steps.";
const canonical = "/games/task-bar-hero/act-2-10-act-3-10-guide";

export const metadata = createTaskBarHeroMetadata({
 title,
 description,
 canonical,
 image: taskBarHeroImages.overview,
});

const faqs = [
 {
  question: "Why am I stuck at Act 2-10 in TBH?",
  answer:
   "Act 2-10 usually exposes a weak team foundation: under-supported damage, poor gear distribution, missing skill levels, or Cube progress that has not kept up with stage pushing.",
 },
 {
  question: "Why is Act 3-10 harder than earlier stages?",
  answer:
   "Act 3-10 asks for a more complete account check. You need role balance, stronger gear, better skill investment, Cube progress, and a team that survives long enough to use its damage.",
 },
 {
  question: "Should I change heroes when I cannot clear 2-10?",
  answer:
   "Change heroes only after checking gear, skills, and Cube. A good hero with weak support can look worse than a mediocre hero with a clear role and usable equipment.",
 },
 {
  question: "Is farming more stages always the answer?",
  answer:
   "No. Farming helps when you know what you are farming for. If you do not know whether the problem is damage, survival, or Cube, use the checklist first.",
 },
 {
  question: "Where can I check stage and monster details?",
  answer:
   "Use the stage map and monster pages on Task Bar Hero Hub Wiki for lookup, then use this guide to choose the next account adjustment.",
 },
];

const searchIntentRows = [
 {
  query: "Task Bar Hero 2-10 guide",
  answer: "Check team shape, gear, skills, Cube, and damage pressure before repeating the fight.",
  href: "#act-2-10",
  label: "2-10",
 },
 {
  query: "TBH Act 3-10 guide",
  answer: "Act 3-10 needs a full account check: role balance, gear, skills, Cube, and boss-specific recovery.",
  href: "#act-3-10",
  label: "3-10",
 },
 {
  query: "Task Bar Hero Hell 2-10",
  answer: "Hell difficulty punishes weak support systems. Use the same checklist, but expect stricter gear and Cube requirements.",
  href: "#hell-nightmare",
  label: "Hell",
 },
 {
  query: "Task Bar Hero stage map",
  answer: "Open the Wiki stage map when you need exact stage and boss lookup.",
  href: taskBarHeroUrls.stages,
  label: "Stages",
 },
];

const jumpLinks = [
 { href: "#before-fight", label: "Before fight" },
 { href: "#act-2-10", label: "Act 2-10" },
 { href: "#act-3-10", label: "Act 3-10" },
 { href: "#hell-nightmare", label: "Hell/Nightmare" },
 { href: "#recovery", label: "Recovery" },
];

const act210Rows = [
 ["Team dies early", "Add sustain, improve armor, or use a sturdier front line.", "A dead damage hero contributes nothing, even with good gear."],
 ["Timer pressure", "Move upgrades to the main damage role and check weapon quality.", "If survival is fine, damage is the next bottleneck."],
 ["Mixed weak gear", "Concentrate usable gear on active heroes instead of spreading it across every unlocked hero.", "A focused team pushes farther than an evenly weak roster."],
 ["No progress after farming", "Check Cube and skills before repeating the same route.", "A system gap can block progress even when levels rise."],
] as const;

const act310Rows = [
 ["Act 3 boss wall", "Recheck every active hero: weapon, armor, skills, Cube support, and role.", "Act 3 punishes unfinished roles harder than early stages."],
 ["Damage looks low", "Review whether the team's damage type and skill investment match the fight.", "More heroes do not help if the damage role is unsupported."],
 ["Survival collapses", "Use a stabilizing role, improve defensive gear, and avoid pure glass setups.", "Longer boss windows require the team to stay alive."],
 ["Unsure what changed", "Change one variable, run the fight again, and compare.", "Changing everything at once hides the real fix."],
] as const;

const recoveryRows = [
 ["Check the stage", "Open the stage map and confirm the exact act, difficulty, and boss.", taskBarHeroUrls.stages],
 ["Check the monster", "Use monster lookup if the boss behavior or damage profile is unclear.", taskBarHeroUrls.monsters],
 ["Check gear", "Use the item database to compare weapons, armor, accessories, and possible upgrades.", taskBarHeroUrls.items],
 ["Check Cube", "Review Cube before spending more farming time on the same wall.", taskBarHeroUrls.cube],
 ["Check the team", "Return to the heroes and builds guide if your roles overlap or leave a weakness uncovered.", "/games/task-bar-hero/heroes-builds"],
] as const;

export default function TaskBarHeroBossWallGuidePage() {
 return (
  <TaskBarHeroArticle
   title={title}
   description={description}
   canonical={canonical}
   label="Act 2-10 and Act 3-10"
   heroImage={taskBarHeroImages.overview}
   heroAlt="TBH Task Bar Hero Act 2-10 and Act 3-10 guide overview"
   faqs={faqs}
  >
   <SearchAnswerPanel
    title="How do you fix Act 2-10 and Act 3-10 walls?"
    answer="Do not farm blindly. First identify the failure: dying early, timing out, weak gear, missing skills, or Cube lag. Then change one part of the account and test the same wall again."
    intentRows={searchIntentRows}
    jumpLinks={jumpLinks}
   />

   <BlufBox title="Boss-wall rule">
    <p>
     <strong>A wall is a diagnosis tool.</strong> If you die early, stabilize.
     If you survive but cannot finish, add damage. If both look reasonable and
     progress is still flat, check Cube, skills, runes, and gear distribution.
    </p>
   </BlufBox>

   <section id="before-fight" className="prose-game">
    <h2>Before You Farm More, Run This Checklist</h2>
    <ArticleImage
     src={taskBarHeroImages.overview}
     alt="TBH Task Bar Hero stage progression overview"
     caption="Act 2-10 and Act 3-10 are useful checkpoints because they reveal whether the account is weak in damage, survival, Cube, or team structure."
    />
    <p>
     A boss wall feels like the game is asking for more levels, but levels are
     only one possible answer. TBH has several overlapping systems. A stage can
     stop you because the main damage hero has a weak weapon, because skills
     were spread too thin, because Cube progress lagged, or because the team has
     no stabilizing role. Farming helps only when it feeds the missing system.
    </p>
    <p>
     Use the checklist below before repeating the same fight. If you change
     three systems at once and clear the wall, you still will not know which
     change mattered. A cleaner method is to adjust one thing, run the wall
     again, and keep the improvement that actually moved the fight.
    </p>
   </section>

   <BossDiagnosisChart />

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Check</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">What to inspect</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Why it matters</th>
      </tr>
     </thead>
     <tbody>
      {taskBarHeroBossCheckRows.map(([check, inspect, reason]) => (
       <tr key={check} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{check}</td>
        <td className="px-4 py-3 text-muted-foreground">{inspect}</td>
        <td className="px-4 py-3 text-muted-foreground">{reason}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section id="act-2-10" className="prose-game">
    <h2>Act 2-10 Fixes</h2>
    <p>
     Act 2-10 is often the first wall where a loose early setup stops working.
     A team that cleared normal stages through general upgrades may suddenly
     need cleaner role assignment. Before replacing every hero, ask what the
     fight is showing you. If the team dies quickly, durability and sustain are
     the issue. If the team lives but cannot finish, damage focus is the issue.
     If both look close but the fight never improves, check Cube and skills.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">What happens</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Fix</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Reason</th>
      </tr>
     </thead>
     <tbody>
      {act210Rows.map(([problem, fix, reason]) => (
       <tr key={problem} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{problem}</td>
        <td className="px-4 py-3 text-muted-foreground">{fix}</td>
        <td className="px-4 py-3 text-muted-foreground">{reason}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section id="act-3-10" className="prose-game">
    <h2>Act 3-10 Fixes</h2>
    <p>
     Act 3-10 is less forgiving because the account has had more time to drift.
     By this point, a hero can be unlocked but under-supported, a weapon can lag
     behind the stage, and Cube can be behind the rest of the account. Check the
     full team, not just the hero you think is best. A role-based team with
     correct support is usually more useful than a stack of high-damage picks
     that collapse before the boss window matters.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Problem</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Adjustment</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Why</th>
      </tr>
     </thead>
     <tbody>
      {act310Rows.map(([problem, fix, reason]) => (
       <tr key={problem} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{problem}</td>
        <td className="px-4 py-3 text-muted-foreground">{fix}</td>
        <td className="px-4 py-3 text-muted-foreground">{reason}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section id="hell-nightmare" className="prose-game">
    <h2>Hell and Nightmare Checks</h2>
    <p>
     Higher difficulties punish unfinished support systems. If a normal version
     of a wall is close but Hell or Nightmare feels impossible, do not assume
     the whole team is wrong. The difficulty may simply require the same plan
     with stricter execution: stronger active gear, better skills, more Cube
     progress, and cleaner role coverage.
    </p>
    <p>
     Use the{" "}
     <a href={taskBarHeroUrls.stages} target="_blank" rel="noreferrer">
      stage map
     </a>{" "}
     to confirm the exact act and difficulty, then compare the active heroes
     against the job they need to do. If the fight fails in the first seconds,
     solve survival first. If the team lives, solve damage. If the fight barely
     changes after upgrades, check Cube and materials.
    </p>
   </section>

   <section id="recovery" className="prose-game">
    <h2>Recovery Route When Nothing Works</h2>
    <p>
     When the wall refuses to move, stop making random changes. Work through
     this recovery route and keep notes on what changes the fight. The goal is
     not to find a magic build. The goal is to identify which account system is
     behind the wall.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Recovery step</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Action</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Open</th>
      </tr>
     </thead>
     <tbody>
      {recoveryRows.map(([step, action, href]) => (
       <tr key={step} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{step}</td>
        <td className="px-4 py-3 text-muted-foreground">{action}</td>
        <td className="px-4 py-3">
         {href.startsWith("https://") ? (
          <a href={href} target="_blank" rel="noreferrer" className="font-semibold text-foreground underline decoration-border hover:decoration-dribbble-pink">
           Open lookup
          </a>
         ) : (
          <Link href={href} className="font-semibold text-foreground hover:underline">
           Open guide
          </Link>
         )}
        </td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section className="prose-game">
    <h2>Next Step</h2>
    <p>
     If your wall changed after Cube work, continue with the{" "}
     <Link href="/games/task-bar-hero/cube-guide">Cube guide</Link>. If the
     team still has unclear roles, read{" "}
     <Link href="/games/task-bar-hero/heroes-builds">heroes and builds</Link>.
     If you are missing basic account rhythm, return to the{" "}
     <Link href="/games/task-bar-hero/beginner-guide">beginner guide</Link> and
     rebuild the push, upgrade, test loop.
    </p>
   </section>
  </TaskBarHeroArticle>
 );
}
