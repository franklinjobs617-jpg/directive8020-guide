import Link from "next/link";
import { ArticleIcon, ArticleImage } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { TaskBarHeroArticle } from "@/components/task-bar-hero-article";
import {
 createTaskBarHeroMetadata,
 taskBarHeroFirstHourRows,
 taskBarHeroStarterRows,
 taskBarHeroImages,
 taskBarHeroUrls,
} from "@/lib/task-bar-hero";
import Image from "next/image";

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
  question: "What should I do first in TBH?",
  answer:
   "Clear early stages, unlock the Rune Tree and Cube (level 10 + Digital Awakening quest). Pick Knight as your first hero. The safest first Rune point is Rune of Command for the second hero slot.",
 },
 {
  question: "Which hero should beginners pick?",
  answer:
   "Knight (HP 130, ATK 2) is the safest learning class. Ranger (HP 60, ATK 1) is strong if you can survive early waves. Sorcerer (HP 50, ATK 2) needs Cube and stat support. Do not start with DLC heroes.",
 },
 {
  question: "Should I open boxes right away?",
  answer:
   "Open enough to improve your working gear. Compare changes before replacing a usable setup. Extra items can feed Cube crafting later.",
 },
 {
  question: "When should I check Cube?",
  answer:
   "As soon as stage progress slows. Cube unlocks at level 10. Start with Synthesis (5 XP/material). Do not touch Alchemy (3 XP/material) until Cube 15-20.",
 },
 {
  question: "Should I rush the third hero slot?",
  answer:
   "Unlock it through Rune of Command when you can gear a third hero with a clear job. A weak third body with no gear or role makes the team worse.",
 },
];

const searchIntentRows = [
 {
  query: "Task Bar Hero beginner guide",
  answer: "Start with the first-hour route, pick a hero, upgrade one system at a time, check Cube.",
  href: "#first-hour",
  label: "Route",
 },
 {
  query: "TBH best starting hero",
  answer: "Knight for stability. Ranger for faster farming if you survive. Sorcerer only with Cube and gear ready.",
  href: "#hero-choice",
  label: "Heroes",
 },
 {
  query: "Task Bar Hero boxes",
  answer: "Open boxes to upgrade your active team. Hold materials with unclear use. Check the item database before converting rare items.",
  href: "#boxes",
  label: "Boxes",
 },
 {
  query: "TBH third hero slot",
  answer: "Unlock via Rune of Command. Add a third hero only when it has a clear role: damage, sustain, or wall-specific support.",
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
];

const mistakeRows = [
 ["Replacing every item immediately", "A higher-looking item is not always better if it breaks the role your hero is filling. Compare first."],
 ["Adding heroes with no job", "More slots only help when each hero has gear, skills, and a reason to be in the team."],
 ["Ignoring Cube until late game", "Cube can be the reason a boss wall feels impossible even when hero levels look fine. Start Synthesis at level 10."],
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
    answer="Push early stages until you see the first real wall. Pick Knight as your starter. Unlock Rune of Command for the second hero slot. Unlock Cube at level 10 and start Synthesis immediately. Improve one system at a time so you know what actually works."
    intentRows={searchIntentRows}
    jumpLinks={jumpLinks}
   />

   <BlufBox title="Beginner rule">
    <p>
     <strong>Every early choice should answer one question: what is stopping
     progress right now?</strong> Dying? Stabilize. Timing out? Add damage.
     Upgrades feel expensive? Check Cube before burning materials.
    </p>
   </BlufBox>

   <section id="first-hour" className="prose-game">
    <h2>First Hour Route</h2>
    <p>
     The first hour is not about finding a perfect build. It is about learning
     what your account needs without wasting the resources that matter later.
     Early stages will tell you if your team dies too fast, deals too little
     damage, or has ignored a system like Cube. Treat the first wall as useful
     information rather than frustration.
    </p>
    <p>
     Start with steady clears. Watch the fight results instead of only watching
     rewards. If a boss kills your front line immediately, survival and gear
     matter more than another damage roll. If the team lives but cannot finish,
     damage skills and weapon quality need attention. If both look reasonable
     but progress still stalls, check Cube and runes before assuming the hero
     choice is wrong.
    </p>
   </section>

   <ActionTable rows={taskBarHeroFirstHourRows} />

   <section id="hero-choice" className="prose-game">
    <h2>Best Beginner Hero Choice</h2>
    <ArticleImage
     src={taskBarHeroImages.overview}
     alt="TBH beginner hero selection — Knight, Ranger, Sorcerer"
     caption="The three free heroes fill different roles. Pick the one that matches your wall."
    />
    <p>
     TBH has six hero classes. Three are free: Knight, Ranger, Sorcerer. The
     other three (Priest, Hunter, Slayer) are DLC — do not plan a beginner
     route around them unless you already own them.
    </p>
    <p>
     Among the free three, Knight (HP 130, ATK 2) is the safest learning class.
     High HP and shield+sword give you room to read boss mechanics. Ranger
     (HP 60, ATK 1) clears faster but dies faster if your gear lags. Sorcerer
     (HP 50, ATK 2) has the highest burst potential but needs Cube access and
     cooldown support before it performs.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Hero</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Who it is for</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">When to pick</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Watch out</th>
      </tr>
     </thead>
     <tbody>
      {taskBarHeroStarterRows.map(([hero, who, when_, watch]) => (
       <tr key={hero} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{hero}</td>
        <td className="px-4 py-3 text-muted-foreground">{who}</td>
        <td className="px-4 py-3 text-muted-foreground">{when_}</td>
        <td className="px-4 py-3 text-muted-foreground">{watch}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <div className="my-8 grid gap-3 sm:grid-cols-3">
    {[
     ["Knight", taskBarHeroImages.knight],
     ["Ranger", taskBarHeroImages.ranger],
     ["Sorcerer", taskBarHeroImages.sorcerer],
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
        alt={`TBH Task Bar Hero ${name} class artwork`}
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
     The safest order is: push stages first, then upgrade the system that
     explains the next failure. A beginner who spends everything across every
     menu usually ends up with no clear improvement. A better rhythm: push,
     observe, upgrade one bottleneck, push again.
    </p>
    <p>
     Rune priority: Rune of Command (extra hero slot) first. That single node
     has the highest return in the entire tree. Offline rewards second. Chest
     automation third. Gold and EXP nodes last. Do not spread points — push
     one route until the next unlock threshold.
    </p>
    <p>
     Cube priority: Unlock at level 10. Start with Synthesis (5 XP per
     material). Do not touch Alchemy (3 XP per material) until Cube 15-20.
     Early Alchemy burns resources at 40% XP efficiency loss.
    </p>
   </section>

   <section id="boxes" className="prose-game">
    <h2>Boxes, Items, and Drop Lookup</h2>
    <ArticleIcon
     src={taskBarHeroImages.box}
     alt="TBH item box icon — box management for beginners"
     caption="Boxes are progression fuel, but the value comes from comparing what the item does for your active team, not from opening more boxes."
    />
    <p>
     Opening boxes is not the same as improving the account. Compare the new
     item against the role that will use it. A weapon upgrade for the hero
     carrying your damage is often worth more than several pieces for a bench
     hero. A survival item is better than a damage item if the team dies before
     the boss window starts.
    </p>
    <p>
     When you need exact item names or drop routes: use the{" "}
     <a href={taskBarHeroUrls.items} target="_blank" rel="noreferrer">
      full item database (5,944 items)
     </a>
     . When you know the item but not where to farm, open the{" "}
     <a href={taskBarHeroUrls.dropFinder} target="_blank" rel="noreferrer">
      drop finder
     </a>
     . Then decide whether that item helps your current team.
    </p>
   </section>

   <section id="third-slot" className="prose-game">
    <h2>Third Hero Slot Planning</h2>
    <p>
     The third slot is powerful only when it adds a missing job. If your first
     two heroes survive but cannot beat the timer, the third should improve
     damage. If the team collapses immediately, the third should stabilize.
     Adding another under-geared damage hero makes the team look bigger
     without changing the result.
    </p>
    <p>
     The recommended free three-hero team is Knight + Ranger + Priest (DLC,
     free during promotion). Knight tanks, Ranger provides steady damage,
     Priest sustains. Before unlocking the third slot, check three things:
     gear you can actually equip, skills you can afford, and whether the hero
     has a clear role against the next wall.
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
     <Link href="/games/task-bar-hero/heroes-builds">heroes and builds guide</Link>.
    </p>
   </section>
  </TaskBarHeroArticle>
 );
}
