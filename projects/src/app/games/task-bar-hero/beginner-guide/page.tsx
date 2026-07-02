import Image from "next/image";
import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { BeginnerFocusChart } from "@/components/task-bar-hero-charts";
import { TaskBarHeroArticle } from "@/components/task-bar-hero-article";
import {
 createTaskBarHeroMetadata,
 taskBarHeroFirstHourRows,
 taskBarHeroHeroRows,
 taskBarHeroImages,
 taskBarHeroUrls,
} from "@/lib/task-bar-hero";

const title = "TBH: Task Bar Hero Beginner Guide";
const description =
 "A practical TBH: Task Bar Hero beginner guide for the first hour, hero choice, upgrades, boxes, gold, EXP, Cube checks, third-slot planning, and early mistakes.";
const canonical = "/games/task-bar-hero/beginner-guide";

export const metadata = createTaskBarHeroMetadata({
 title,
 description,
 canonical,
 image: taskBarHeroImages.overview,
});

const faqs = [
 {
  question: "What should I do first in TBH: Task Bar Hero?",
  answer:
   "Clear early stages, learn which resource is limiting progress, avoid spending everything immediately, and build around one damage role plus one stabilizing role before chasing advanced builds.",
 },
 {
  question: "Which hero should beginners choose?",
  answer:
   "Knight is the safest learning role, Ranger is a strong early damage option, and Priest becomes useful when survival is the problem. The best choice depends on whether you are dying, timing out, or lacking gear.",
 },
 {
  question: "Should I open boxes right away?",
  answer:
   "Open enough boxes to improve your working gear, but compare changes before replacing a usable setup. Extra items can matter for Cube, crafting, or later upgrades.",
 },
 {
  question: "When should I check Cube?",
  answer:
   "Check Cube as soon as stage progress slows and normal upgrades stop moving the account. Cube is not just a late-game menu; it can be the missing system behind early walls.",
 },
 {
  question: "Should I rush the third hero slot?",
  answer:
   "Plan for it, but do not add a third hero with no gear, skills, or role purpose. A weak third body can consume attention without solving the wall.",
 },
];

const searchIntentRows = [
 {
  query: "Task Bar Hero beginner guide",
  answer: "Use the first-hour table, then check hero choice, boxes, Cube, and early mistakes.",
  href: "#first-hour",
  label: "Route",
 },
 {
  query: "TBH best starting hero",
  answer: "Pick by role need: Knight for stability, Ranger for physical damage, Sorcerer for burst, Priest for sustain.",
  href: "#hero-choice",
  label: "Heroes",
 },
 {
  query: "Task Bar Hero boxes",
  answer: "Open boxes to upgrade a working setup, but do not replace gear blindly or burn materials without checking Cube value.",
  href: "#boxes",
  label: "Boxes",
 },
 {
  query: "TBH third hero slot",
  answer: "Add the third slot when it has a job: damage, sustain, or wall-specific support.",
  href: "#third-slot",
  label: "Team",
 },
];

const jumpLinks = [
 { href: "#first-hour", label: "First hour" },
 { href: "#hero-choice", label: "Hero choice" },
 { href: "#priorities", label: "Priorities" },
 { href: "#boxes", label: "Boxes" },
 { href: "#third-slot", label: "Third slot" },
 { href: "/games/task-bar-hero/cube-guide", label: "Cube" },
];

const upgradeRows = [
 ["Stage progress", "Push until you can identify the wall.", "A clear failure point tells you whether to fix damage, survival, skills, or Cube."],
 ["Usable gear", "Keep the highest-impact weapon and survival pieces on active heroes.", "A single weak weapon can make a hero look worse than it is."],
 ["Hero skills", "Level skills that match the hero's job.", "Skill investment is easier to control than waiting for perfect drops."],
 ["Cube check", "Review Cube when simple upgrades stop moving progress.", "Cube can unlock progress without another long farming loop."],
 ["Rune direction", "Use runes to support the team plan, not random stats.", "A scattered rune path weakens every role at once."],
] as const;

const mistakeRows = [
 ["Replacing every item immediately", "A higher-looking item is not always better if it breaks the role your hero is filling."],
 ["Adding heroes with no job", "More slots only help when each hero has gear, skills, and a reason to be in the team."],
 ["Ignoring Cube until late", "Cube can be the reason a boss wall feels impossible even when levels look fine."],
 ["Farming without a question", "If you do not know whether you need damage, survival, or materials, another hour of farming may not fix the problem."],
 ["Following market advice too early", "Market activity is separate from basic progression and can change with live rules."],
] as const;

export default function TaskBarHeroBeginnerGuidePage() {
 return (
  <TaskBarHeroArticle
   title={title}
   description={description}
   canonical={canonical}
   label="Beginner Guide"
   heroImage={taskBarHeroImages.overview}
   heroAlt="TBH Task Bar Hero beginner guide overview"
   faqs={faqs}
  >
   <SearchAnswerPanel
    title="What should a new TBH player do first?"
    answer="Push early stages until you can see the first real wall, then improve one team plan at a time: active hero gear, core skills, Cube progress, and role balance. Do not spend every material or copy a late build before you know why your current team is failing."
    intentRows={searchIntentRows}
    jumpLinks={jumpLinks}
   />

   <BlufBox title="Beginner rule">
    <p>
    <strong>Every early choice should answer one question: what is stopping
     progress right now?</strong> If you are dying, stabilize. If the timer is
     the problem, add damage. If upgrades feel expensive or unclear, check Cube
     before burning materials.
    </p>
   </BlufBox>

   <section id="first-hour" className="prose-game">
    <h2>First Hour Route</h2>
    <p>
     The first hour is not about finding a perfect endgame build. It is about
     learning the account loop without wasting the resources that will matter
     later. Early stages teach whether your team loses because it dies too fast,
     deals too little damage, lacks skill investment, or has ignored a system
     such as Cube. Treat the first wall as useful information.
    </p>
    <p>
     Start with steady clears. Watch the fight results instead of only watching
     rewards. If a boss kills your front line immediately, survival and gear
     matter more than another damage roll. If the team lives but cannot finish,
     damage skills and weapon quality need attention. If both look reasonable
     but progress still stalls, check Cube and runes before assuming the hero
     choice is bad.
    </p>
   </section>

   <ActionTable rows={taskBarHeroFirstHourRows} />

   <section id="hero-choice" className="prose-game">
    <h2>Best Beginner Hero Choice</h2>
    <ArticleImage
     src={taskBarHeroImages.overview}
     alt="TBH Task Bar Hero beginner hero overview"
     caption="Early hero choice should be based on the wall in front of you: survival, damage, sustain, or scaling."
    />
    <p>
     Beginners should avoid asking for one universal best hero. TBH heroes solve
     different problems. Knight gives a stable front-line baseline and makes
     fights easier to read. Ranger gives safer physical damage and works well
     while you learn gear. Sorcerer can add stronger burst once the team can
     support it. Priest matters when the team lasts long enough for sustain to
     change the fight. Hunter and Slayer are better judged after you understand
     equipment and role pressure.
    </p>
   </section>

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

   <div className="my-8 grid gap-3 sm:grid-cols-3">
    {[
     ["Knight", taskBarHeroImages.knight],
     ["Ranger", taskBarHeroImages.ranger],
     ["Priest", taskBarHeroImages.priest],
    ].map(([name, src]) => (
     <a
      key={name}
      href={taskBarHeroUrls.heroes}
      target="_blank"
      rel="noreferrer"
      className="rounded-lg border border-border bg-white p-4 transition-colors hover:border-dribbble-pink"
     >
      <div className="relative h-32">
       <Image
        src={src}
        alt={`TBH Task Bar Hero ${name} beginner hero artwork`}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 50vw, 240px"
       />
      </div>
      <p className="mt-2 text-center text-sm font-semibold text-foreground">
       Open full hero data
      </p>
     </a>
    ))}
   </div>

   <section id="priorities" className="prose-game">
    <h2>Early Upgrade Order</h2>
    <p>
     The safest order is stage progress first, then the system that explains
     the next failure. A beginner who spends everything across every menu can
     end up with no clear improvement. A better rhythm is simple: push, observe,
     upgrade one bottleneck, push again. This makes it much easier to see
     whether gear, skills, Cube, or team composition moved the account.
    </p>
   </section>

   <BeginnerFocusChart />

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Focus</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">What to do</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Why it helps</th>
      </tr>
     </thead>
     <tbody>
      {upgradeRows.map(([focus, action, reason]) => (
       <tr key={focus} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{focus}</td>
        <td className="px-4 py-3 text-muted-foreground">{action}</td>
        <td className="px-4 py-3 text-muted-foreground">{reason}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section id="boxes" className="prose-game">
    <h2>Boxes, Items, and Drop Lookup</h2>
    <ArticleImage
     src={taskBarHeroImages.box}
     alt="TBH Task Bar Hero item box icon"
     caption="Boxes are progression fuel, but the value comes from comparing what the item does for your active team."
    />
    <p>
     Boxes are exciting because they give visible rewards, but opening boxes is
     not the same thing as improving the account. Compare the new item against
     the role that will use it. A weapon upgrade for the hero carrying your
     damage is often worth more than several pieces for a bench hero. A survival
     item can be better than a damage item if the team dies before the boss
     window starts.
    </p>
    <p>
     When you need exact item names, use the{" "}
     <a href={taskBarHeroUrls.items} target="_blank" rel="noreferrer">
      full item database
     </a>
     . When you know the item but not the route, open the{" "}
     <a href={taskBarHeroUrls.dropFinder} target="_blank" rel="noreferrer">
      drop finder
     </a>
     . The next step is deciding whether that item helps your current team.
    </p>
   </section>

   <section id="third-slot" className="prose-game">
    <h2>Third Hero Slot Planning</h2>
    <p>
     The third slot is powerful only when it adds a missing job. If your first
     two heroes already survive but cannot beat the timer, the third slot should
     improve damage. If the team collapses immediately, the third slot should
     stabilize the fight or support the damage hero long enough to work. Adding
     another under-geared damage hero can make the team look bigger without
     changing the result.
    </p>
    <p>
     Before committing to the third slot, check three things: gear you can
     actually equip, skills you can afford to support, and whether the hero has
     a clear role in the next wall. If all three are missing, keep farming and
     upgrading the working pair first.
    </p>

    <h2>Common Beginner Mistakes</h2>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Mistake</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Better habit</th>
      </tr>
     </thead>
     <tbody>
      {mistakeRows.map(([mistake, fix]) => (
       <tr key={mistake} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{mistake}</td>
        <td className="px-4 py-3 text-muted-foreground">{fix}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section className="prose-game">
    <h2>Where to Go Next</h2>
    <p>
     If your next question is about materials or Cube EXP, read the{" "}
     <Link href="/games/task-bar-hero/cube-guide">Cube guide</Link>. If the
     wall is specifically Act 2-10 or Act 3-10, move to the{" "}
     <Link href="/games/task-bar-hero/act-2-10-act-3-10-guide">
      boss-wall guide
     </Link>
     . If the team feels wrong but you are not sure why, use the{" "}
     <Link href="/games/task-bar-hero/heroes-builds">heroes and builds guide</Link>
     .
    </p>
   </section>
  </TaskBarHeroArticle>
 );
}
