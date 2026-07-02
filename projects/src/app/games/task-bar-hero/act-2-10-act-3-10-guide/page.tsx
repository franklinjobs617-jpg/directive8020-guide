import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { TaskBarHeroArticle } from "@/components/task-bar-hero-article";
import {
 createTaskBarHeroMetadata,
 taskBarHeroBossCheckRows,
 taskBarHeroImages,
 taskBarHeroUrls,
} from "@/lib/task-bar-hero";

const title = "TBH: Task Bar Hero Act 2-10 and Act 3-10 Guide";
const description =
 "Fix TBH: Task Bar Hero Act 2-10 and Act 3-10 walls with team checks, gear upgrades, skill priorities, Cube progress, and the 3-10 boss tactical solution (3秒杀机制).";
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
   "Act 2-10 exposes a weak team foundation: under-supported damage, poor gear distribution, missing skill levels, or Cube progress that has not kept up with stage pushing. Run the checklist before farming blindly.",
 },
 {
  question: "Why is Act 3-10 much harder?",
  answer:
   "Act 3-10's boss has three instant-kill mechanics: a front-line HP check (under 2000 HP = dead), a back-row beam, and a 4-second full-team AOE (3000 chaos damage). You must kill the boss in under 3 seconds or the fight ends.",
 },
 {
  question: "What is the 3-10 kill strategy?",
  answer:
   "Sacrifice formation: Put a Sorcerer in the back row (will die to the beam, but must cast Hydra first). Ranger in the middle row with 30%+ crit rate and amethyst-filled sockets. Priest in front with max HP gear. You have about 3 seconds.",
 },
 {
  question: "Should I change heroes for 2-10?",
  answer:
   "Change heroes only after checking gear, skills, and Cube first. A good hero with weak support can look worse than a mediocre hero with a clear role and usable equipment.",
 },
 {
  question: "Is farming more stages the answer?",
  answer:
   "No. Farming helps when you know what you are farming for. If you do not know whether the problem is damage, survival, or Cube, use the checklist first.",
 },
];

const searchIntentRows = [
 {
  query: "Task Bar Hero 2-10 guide",
  answer: "Check team shape, gear, skills, Cube, and damage profile before repeating the fight.",
  href: "#act-2-10",
  label: "2-10",
 },
 {
  query: "TBH Act 3-10 guide",
  answer: "Act 3-10 needs the sacrifice strategy: Sorcerer (Hydra), Ranger (30%+ crit), Priest (HP stack). Kill in 3 seconds.",
  href: "#act-3-10",
  label: "3-10",
 },
 {
  query: "Task Bar Hero Hell 2-10",
  answer: "Hell difficulty punishes weak support systems. Use the same checklist with stricter gear and Cube requirements.",
  href: "#hell-nightmare",
  label: "Hell",
 },
 {
  query: "Task Bar Hero stage map",
  answer: "Open the Wiki stage map for exact stage and boss lookup across all 4 difficulties and 120 stages.",
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
 ["Team dies early", "Add sustain, improve armor, or use a tankier front line (Knight recommended).", "A dead damage hero contributes nothing no matter how good the weapon is."],
 ["Timer pressure", "Move upgrades to the main damage role and check weapon quality.", "If survival is fine, damage is the next bottleneck."],
 ["Mixed weak gear", "Concentrate usable gear on active heroes instead of spreading it across every unlocked slot.", "A focused 2-hero team pushes farther than an evenly weak 3-hero roster."],
 ["No progress after farming", "Check Cube and skills before repeating the same route. Cube at level 10 starts with Synthesis.", "A Cube gap can block progress even when hero levels look fine."],
] as const;

const act310Rows = [
 ["Act 3 boss fight", "This is not a normal fight. The boss kills your team in 4 seconds. You must build for 3-second burst.", "Swap to the sacrifice formation: Sorcerer (back, Hydra), Ranger (mid, 30%+ crit), Priest (front, max HP)."],
 ["Damage too low", "Ranger needs 30%+ crit rate. Socket all weapon slots with amethysts for % physical damage. Attack speed on accessories.", "More heroes do not help if the main DPS is not geared for a 3-second window."],
 ["Survival collapses", "Priest in front with highest HP gear. Power Blessing and Sanctuary leveled. The Priest will die after ~2 seconds — that is enough time.", "The fight only lasts 3 seconds. Survival beyond that is irrelevant."],
 ["Cant replicate the clear", "This fight has ~60-70% success rate even with correct gear. Rerun until the Ranger crits in the 3-second window. If it fails 10 times in a row, recheck gear and socket fill.", "RNG is part of the fight. Gear minimizes the RNG but does not eliminate it."],
] as const;

const recoveryRows = [
 ["Check the stage", "Open the stage map and confirm the exact act, difficulty, and boss.", taskBarHeroUrls.stages],
 ["Check the monster", "Use monster lookup if the boss behavior or damage profile is unclear.", taskBarHeroUrls.monsters],
 ["Check gear", "Use the item database to compare weapons, armor, accessories, and possible upgrades.", taskBarHeroUrls.items],
 ["Check Cube", "Review Cube level and Synthesis progress before spending more time farming.", taskBarHeroUrls.cube],
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
   heroAlt="TBH Task Bar Hero Act 2-10 and Act 3-10 boss wall guide"
   faqs={faqs}
  >
   <SearchAnswerPanel
    title="How do you fix Act 2-10 and Act 3-10 walls?"
    answer="Act 2-10 is a gear and systems check. Act 3-10 is a tactical puzzle with a specific solution. Do not farm blindly for either. Identify the failure type, change one variable, and test the same wall again. For 3-10, the solution is known: sacrifice Sorcerer + crit Ranger + HP Priest."
    intentRows={searchIntentRows}
    jumpLinks={jumpLinks}
   />

   <BlufBox title="Boss-wall rule">
    <p>
     <strong>A wall is a diagnosis tool, not a punishment.</strong> Die early?
     Stabilize. Survive but time out? Add damage. Both look ok but progress is
     flat? Check Cube and skills. 3-10 specifically needs a formation swap, not
     more grinding.
    </p>
   </BlufBox>

   <section id="before-fight" className="prose-game">
    <h2>Before You Farm More, Run This Checklist</h2>
    <ArticleImage
     src={taskBarHeroImages.overview}
     alt="TBH stage progression — 120 stages across Normal/Nightmare/Hell/Torment"
     caption="TBH has 120 stages: 3 Acts × 10 stages × 4 difficulties. Act 2-10 and Act 3-10 on Normal are the first progression checks. Higher difficulties repeat the same stages with stricter requirements."
    />
    <p>
     A boss wall feels like the game wants more levels. But levels are only one
     possible answer. TBH has several overlapping systems. A stage can stop you
     because the main damage hero has a weak weapon, skills were spread too thin,
     Cube progress lagged, or the team has no stabilizing role. Farming helps only
     when it feeds the missing system.
    </p>
    <p>
     Use the checklist below before repeating the same fight. If you change three
     systems at once and clear the wall, you will not know which change mattered.
     Adjust one thing, run the wall again, keep the improvement that moved the fight.
    </p>
   </section>

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
     Act 2-10 is the first wall where a loose early setup stops working. A team
     that cruised through early stages with general upgrades suddenly hits a
     damage or survival check. Before changing heroes, figure out what the fight
     is telling you: the team dies quickly (fix durability), lives but cannot
     finish (fix damage), or neither changes after upgrades (fix Cube and skills).
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Symptom</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Fix</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Reason</th>
      </tr>
     </thead>
     <tbody>
      {act210Rows.map(([symptom, fix, reason]) => (
       <tr key={symptom} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{symptom}</td>
        <td className="px-4 py-3 text-muted-foreground">{fix}</td>
        <td className="px-4 py-3 text-muted-foreground">{reason}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section id="act-3-10" className="prose-game">
    <h2>Act 3-10 Fixes — The 3-Second Kill</h2>
    <p>
     Act 3-10 is not like other walls. The boss has three built-in kill
     mechanics that trigger automatically:
    </p>
    <ul>
     <li><strong>Front-line HP check:</strong> Any front-row hero under 2,000 HP dies instantly. At this stage, hitting 2,000 HP is nearly impossible, so your front line will die.</li>
     <li><strong>Back-row beam:</strong> The back position is targeted by a beam that kills in one hit.</li>
     <li><strong>4-second full wipe:</strong> A 3,000 chaos damage wave hits the entire team. No defense reduces it.</li>
    </ul>
    <p>
     There is no way to survive all three mechanics. The only solution is to
     <strong>kill the boss before the 4-second wipe</strong>. This requires a
     specific formation:
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Position</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Hero</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Job</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Gear focus</th>
      </tr>
     </thead>
     <tbody>
      <tr className="border-b border-border">
       <td className="px-4 py-3 font-semibold text-foreground">Front</td>
       <td className="px-4 py-3 font-semibold text-foreground">Priest</td>
       <td className="px-4 py-3 text-muted-foreground">Tank the first hits. Cast Power Blessing. Die after ~2 seconds, but that is enough.</td>
       <td className="px-4 py-3 text-muted-foreground">Max HP gear. Nothing else matters — the Priest will die regardless.</td>
      </tr>
      <tr className="border-b border-border">
       <td className="px-4 py-3 font-semibold text-foreground">Middle</td>
       <td className="px-4 py-3 font-semibold text-foreground">Ranger</td>
       <td className="px-4 py-3 text-muted-foreground">Main DPS. Must crit within 3 seconds.</td>
       <td className="px-4 py-3 text-muted-foreground">30%+ crit rate. Amethyst sockets on weapon for % physical damage. Attack speed accessories.</td>
      </tr>
      <tr className="border-b border-border last:border-0">
       <td className="px-4 py-3 font-semibold text-foreground">Back</td>
       <td className="px-4 py-3 font-semibold text-foreground">Sorcerer</td>
       <td className="px-4 py-3 text-muted-foreground">Sacrifice. Cast Hydra (the starting skill) before the beam kills it. Hydra keeps dealing damage after death.</td>
       <td className="px-4 py-3 text-muted-foreground">Max spell power. Zero survival stats — the back row is doomed anyway.</td>
      </tr>
     </tbody>
    </table>
   </div>

   <p className="text-sm leading-relaxed text-muted-foreground my-4">
    With correct gear, this formation has a 60-70% success rate per attempt. The
    main variable is whether the Ranger crits within the 3-second window. If the
    fight fails, rerun. If it fails 10+ times in a row, recheck the Ranger&apos;s crit
    rate and socket fill.
   </p>

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
    <h2>Hell and Nightmare — Same Stages, Higher Bar</h2>
    <p>
     TBH has 4 difficulties: Normal → Nightmare → Hell → Torment. Each one
     reruns the same 30 stages (3 Acts × 10) with stricter requirements. If
     you cleared Act 3-10 on Normal but hit the same wall on Hell, the solution
     is the same formation with better gear: higher crit, better weapon, stronger
     Cube support.
    </p>
    <p>
     Use the{" "}
     <a href={taskBarHeroUrls.stages} target="_blank" rel="noreferrer">
      stage map
     </a>{" "}
     to confirm the exact act and difficulty. Compare your active heroes against
     the job they need to do. If the fight fails instantly, fix survival first.
     If the team lives but cannot finish, fix damage. If the fight barely changes
     after upgrades, check Cube and materials.
    </p>
   </section>

   <section id="recovery" className="prose-game">
    <h2>Recovery Route When Nothing Works</h2>
    <p>
     When the wall refuses to move, stop making random changes. Work through
     this recovery route and keep notes on what changes the fight. The goal is
     to identify which account system is behind the wall, not to find a magic
     build.
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
     If Cube changes helped but a boss still blocks, continue with the{" "}
     <Link href="/games/task-bar-hero/cube-guide">Cube guide</Link>. If the
     team still has unclear roles, read{" "}
     <Link href="/games/task-bar-hero/heroes-builds">heroes and builds</Link>.
     If you are missing basic account rhythm, return to the{" "}
     <Link href="/games/task-bar-hero/beginner-guide">beginner guide</Link>.
    </p>
   </section>
  </TaskBarHeroArticle>
 );
}
