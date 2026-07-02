import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { TaskBarHeroArticle } from "@/components/task-bar-hero-article";
import { taskBarHero } from "@/lib/games";
import {
 createTaskBarHeroMetadata,
 taskBarHeroImages,
 taskBarHeroQuickFacts,
 taskBarHeroStartRows,
 taskBarHeroUrls,
} from "@/lib/task-bar-hero";

const title = "TBH: Task Bar Hero Guide Hub";
const description =
 "Start here for TBH: Task Bar Hero beginner routes, Cube upgrades, Act 2-10 and Act 3-10 walls, hero builds, item lookup, drop tools, and market status.";
const canonical = "/games/task-bar-hero";

export const metadata = createTaskBarHeroMetadata({
 title,
 description,
 canonical,
 image: taskBarHeroImages.hero,
});

const faqs = [
 {
  question: "Is TBH: Task Bar Hero free?",
  answer:
   "Yes. Steam lists it as free-to-play. Optional market-linked item systems exist, so check the live Steam page and market page before trading or selling items. Market rules can change.",
 },
 {
  question: "Is TBH: Task Bar Hero single-player?",
  answer:
   "Steam lists it as single-player. The main loop is solo idle RPG progression: heroes, stages, gear, boxes, runes, and Cube upgrades.",
 },
 {
  question: "What guide should I read first?",
  answer:
   "The beginner guide if you are new, the Cube guide if resources feel confusing, and the Act 2-10 / Act 3-10 guide if a boss wall has stopped progress.",
 },
 {
  question: "Where should I look up items and drops?",
  answer:
   "Use the Task Bar Hero Hub Wiki item database and drop finder for exact lookup. Come back to Enjoy4Game guides for route choices and upgrade order.",
 },
 {
  question: "Should I follow a tier list immediately?",
  answer:
   "No. Start with role fit: one reliable damage role, one stabilizing role, and gear that supports the wall you are trying to clear. Tier labels are less useful before you know why your team is failing.",
 },
];

const searchIntentRows = [
 {
  query: "TBH Task Bar Hero guide",
  answer: "Start with the hub, then choose beginner route, Cube, boss walls, or heroes and builds.",
  href: "#start-here",
  label: "Start",
 },
 {
  query: "Task Bar Hero beginner guide",
  answer: "First-hour route for early heroes, upgrades, boxes, gold, EXP, and common mistakes.",
  href: "/games/task-bar-hero/beginner-guide",
  label: "Beginner",
 },
 {
  query: "Task Bar Hero cube guide",
  answer: "Covers 8 Cube functions, Synthesis vs Alchemy XP, material routes, and leveling strategy.",
  href: "/games/task-bar-hero/cube-guide",
  label: "Cube",
 },
 {
  query: "Task Bar Hero 2-10 guide",
  answer: "Boss-wall checklist and 3-10 boss mechanics (3秒杀机制).",
  href: "/games/task-bar-hero/act-2-10-act-3-10-guide",
  label: "Boss wall",
 },
];

const jumpLinks = [
 { href: "#what-it-is", label: "What it is" },
 { href: "#start-here", label: "Start here" },
 { href: "#guide-map", label: "Guide map" },
 { href: "#wiki-tools", label: "Wiki tools" },
 { href: "#market", label: "Market" },
];

export default function TaskBarHeroHubPage() {
 return (
  <TaskBarHeroArticle
   title={title}
   description={description}
   canonical={canonical}
   label="Task Bar Hero"
   heroImage={taskBarHeroImages.hero}
   heroAlt="TBH Task Bar Hero guide hub key art"
   faqs={faqs}
  >
   <SearchAnswerPanel
    title="Where should you start in TBH: Task Bar Hero?"
    answer="If you are new, start with the beginner route. If your progress stalls, check Cube, skills, gear, and team roles before repeating the same stage. Use the Wiki for exact item and drop lookup, then return here for which upgrade or guide path to follow next."
    intentRows={searchIntentRows}
    jumpLinks={jumpLinks}
   />

   <BlufBox title="Best first path">
    <p>
     <strong>Do not treat TBH as only an idle timer.</strong> Progress comes from
     matching the right hero roles, gear, Cube upgrades, skills, and stage
     farming route. When you hit a wall, change one system at a time so you know
     what actually fixed the run.
    </p>
   </BlufBox>

   <StatusPanel
    items={taskBarHeroQuickFacts.map(([label, value]) => ({
     label,
     value,
     status: label === "Core loop" || label === "Best first stop" ? ("working" as const) : ("verified" as const),
    }))}
   />

   <section id="what-it-is" className="prose-game">
    <h2>What TBH: Task Bar Hero Actually Is</h2>
    <ArticleImage
     src={taskBarHeroImages.overview}
     alt="TBH task bar hero gameplay overview — heroes, stages, and idle RPG systems"
     caption="TBH looks simple from the task bar, but real progression comes from heroes, gear, boxes, runes, Cube upgrades, and stage walls."
    />
    <p>
     TBH is a free Steam idle RPG. The game keeps moving while you push stages,
     collect boxes, improve heroes, manage gear, and work through systems like
     runes and the Hero-dric Cube. The screen is compact but the planning
     feels closer to a loot RPG than a pure idle clicker. New players usually
     clear early stages by following obvious upgrades, then get stuck because
     one part of the account fell behind.
    </p>
    <p>
     That is why this hub is organized by player problems. Need a clean first
     hour? Go to the beginner guide. Materials feel expensive or Cube level is
     lagging? Go to the Cube guide. Act 2-10 or Act 3-10 blocking you? Use the
     wall checklist before farming randomly. Unsure which heroes belong
     together? Read the role-based build page before copying a tier list.
    </p>
    <p>
     Exact lookup belongs in a database. For item names (5,944 items), hero pages,
     rune nodes (197 runes), stage data (120 stages), and drop searches, use{" "}
     <a href={taskBarHeroUrls.wiki} target="_blank" rel="noreferrer" className="font-semibold underline decoration-border hover:decoration-dribbble-pink">
      Task Bar Hero Hub Wiki
     </a>
     . These guide pages focus on the next step: what to upgrade, what to
     stop doing, and what to check when progress slows.
    </p>
   </section>

   <section id="start-here" className="my-10">
    <h2 className="mb-4 text-xl font-bold text-foreground">Start Here by Problem</h2>
    <div className="overflow-x-auto rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead>
       <tr className="border-b border-border bg-mist">
        <th className="px-4 py-3 text-left font-semibold text-foreground">Player problem</th>
        <th className="px-4 py-3 text-left font-semibold text-foreground">Best next step</th>
        <th className="px-4 py-3 text-left font-semibold text-foreground">Open</th>
       </tr>
      </thead>
      <tbody>
       {taskBarHeroStartRows.map(([problem, answer, href]) => (
        <tr key={problem} className="border-b border-border last:border-0">
         <td className="px-4 py-3 font-semibold text-foreground">{problem}</td>
         <td className="px-4 py-3 text-muted-foreground">{answer}</td>
         <td className="px-4 py-3">
          {href.startsWith("https://") ? (
           <a href={href} target="_blank" rel="noreferrer" className="font-semibold text-foreground underline decoration-border hover:decoration-dribbble-pink">
            Open tool
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
   </section>

   <section id="guide-map" className="my-10">
    <h2 className="mb-4 text-xl font-bold text-foreground">Guide Map</h2>
    <div className="grid gap-4 sm:grid-cols-2">
     {taskBarHero.guideLinks.map((guide) => (
      <Link
       key={guide.href}
       href={guide.href}
       className="rounded-lg border border-border bg-white p-5 transition-colors hover:border-dribbble-pink"
      >
       <h3 className="text-base font-bold text-foreground">{guide.title}</h3>
       <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {guide.description}
       </p>
      </Link>
     ))}
    </div>
   </section>

   <section id="wiki-tools" className="prose-game">
    <h2>Use the Wiki When You Need Exact Lookup</h2>
    <p>
     Guide pages are for priorities and decisions. Database pages are for
     finding specific names and numbers. If you have an item, rune, hero,
     monster, or stage in mind, jump to the Wiki first and use the filters
     there. Then return here when the next question is whether that thing
     is worth using right now.
    </p>
    <ul>
     <li>
      Use the{" "}
      <a href={taskBarHeroUrls.items} target="_blank" rel="noreferrer">
       item database (5,944 items)
      </a>
      {" "} when you need a full item list instead of a recommendation.
     </li>
     <li>
      Use the{" "}
      <a href={taskBarHeroUrls.dropFinder} target="_blank" rel="noreferrer">
       drop finder
      </a>
      {" "} when you know the target item but not the farming route.
     </li>
     <li>
      Use the{" "}
      <a href={taskBarHeroUrls.stages} target="_blank" rel="noreferrer">
       stage map (120 stages, 4 difficulties)
      </a>
      {" "} before comparing Act 2-10, Act 3-10, Hell, Nightmare, or Torment walls.
     </li>
    </ul>
   </section>

   <section id="market" className="prose-game">
    <h2>Market and Trade Ship Caution</h2>
    <p>
     TBH has market-linked items, but market rules are not a beginner upgrade
     path. Treat Market and Trade Ship choices as account-risk decisions, not
     as the first way to fix progression. If a trade feature is unavailable,
     paused, or under policy changes, do not build a route around it. Check the{" "}
     <a href={taskBarHeroUrls.market} target="_blank" rel="noreferrer">
      Wiki market page
     </a>
     {" "} and the live Steam page before making choices that involve selling,
     buying, or moving items.
    </p>
    <p>
     For most players, the better early route is simpler: clear stages, improve
     useful gear, understand Cube, avoid wasting rare materials, and build a
     team that handles the wall in front of you. Market knowledge can help later,
     but it should not replace basic progression.
    </p>
   </section>
  </TaskBarHeroArticle>
 );
}
