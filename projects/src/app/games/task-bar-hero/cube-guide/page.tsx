import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { CubeSpendChart } from "@/components/task-bar-hero-charts";
import { TaskBarHeroArticle } from "@/components/task-bar-hero-article";
import {
 createTaskBarHeroMetadata,
 taskBarHeroCubeRows,
 taskBarHeroImages,
 taskBarHeroUrls,
} from "@/lib/task-bar-hero";

const title = "TBH: Task Bar Hero Cube Guide";
const description =
 "Learn how Cube leveling, synthesis, crafting, alchemy, materials, item use, and common waste cases work in TBH: Task Bar Hero.";
const canonical = "/games/task-bar-hero/cube-guide";

export const metadata = createTaskBarHeroMetadata({
 title,
 description,
 canonical,
 image: taskBarHeroImages.material,
});

const faqs = [
 {
  question: "What does Cube do in TBH: Task Bar Hero?",
  answer:
   "Cube is a progression system tied to material use, item handling, and account growth. It matters when normal hero upgrades stop solving stage walls.",
 },
 {
  question: "Why is my Cube level not moving fast enough?",
  answer:
   "Most Cube stalls come from spending materials without a plan, ignoring duplicate value, or farming stages that do not feed the current Cube need. Check the Cube page and item database before burning rare inputs.",
 },
 {
  question: "Should I use synthesis immediately?",
  answer:
   "Use synthesis when duplicates or materials are clearly outside your near-term hero plan. Hold rare inputs when the next upgrade path is unclear.",
 },
 {
  question: "Is crafting better than alchemy?",
  answer:
   "Neither is always better. Crafting is useful for targeted item progress, while alchemy is useful when a conversion solves the current bottleneck.",
 },
 {
  question: "Where can I check exact Cube and item data?",
  answer:
   "Use the Cube, item database, and tools pages on Task Bar Hero Hub Wiki for lookup, then use this guide to decide what to spend or hold.",
 },
];

const searchIntentRows = [
 {
  query: "TBH cube guide",
  answer: "Start with the operation table, then check material spending rules and stall recovery.",
  href: "#cube-operations",
  label: "Cube",
 },
 {
  query: "Task Bar Hero cube leveling",
  answer: "If Cube EXP feels stuck, check material flow, duplicate use, stage farming, and whether you are spending into the wrong operation.",
  href: "#leveling",
  label: "Leveling",
 },
 {
  query: "Task Bar Hero synthesis crafting alchemy",
  answer: "Use synthesis, crafting, and alchemy for different jobs. Do not spend rare materials just because an operation is available.",
  href: "#spend-or-hold",
  label: "Materials",
 },
 {
  query: "Task Bar Hero materials",
  answer: "Look up exact material use in the Wiki item database before converting or crafting.",
  href: taskBarHeroUrls.items,
  label: "Database",
 },
];

const jumpLinks = [
 { href: "#cube-operations", label: "Operations" },
 { href: "#leveling", label: "Leveling" },
 { href: "#spend-or-hold", label: "Spend or hold" },
 { href: "#waste-cases", label: "Mistakes" },
 { href: "/games/task-bar-hero/act-2-10-act-3-10-guide", label: "Boss walls" },
];

const levelingRows = [
 ["Check the wall first", "Identify whether the account is dying, timing out, or lacking materials.", "Cube cannot fix the wrong problem if you do not know what failed."],
 ["Review active heroes", "Check whether your current team actually benefits from the material path you are considering.", "A Cube spend for unused gear delays the team that is pushing stages."],
 ["Look up material use", "Open the item database before converting rare materials.", "Some materials have more than one possible use."],
 ["Spend in batches", "Make a small controlled improvement, then push again.", "This shows whether Cube was the missing bottleneck."],
 ["Stop if the result is unclear", "Hold rare inputs when the next stage wall does not change.", "Blind spending can make the next correction harder."],
] as const;

const wasteRows = [
 ["Converting materials without a target", "Decide what stage wall or hero role the spend is supposed to fix."],
 ["Crafting for a bench hero", "Active progression heroes should get the first controlled investments."],
 ["Ignoring duplicates", "Duplicates can be fuel, but only after you know they are not needed for the current plan."],
 ["Treating every material as common", "Rare inputs should be checked in the database before use."],
 ["Changing too many systems at once", "Spend, test, and compare. If you change gear, Cube, skills, and runes together, you will not know what worked."],
] as const;

export default function TaskBarHeroCubeGuidePage() {
 return (
  <TaskBarHeroArticle
   title={title}
   description={description}
   canonical={canonical}
   label="Cube Guide"
   heroImage={taskBarHeroImages.material}
   heroAlt="TBH Task Bar Hero Cube material icon"
   faqs={faqs}
  >
   <SearchAnswerPanel
    title="How should you use Cube in TBH?"
    answer="Use Cube to solve a known progression bottleneck, not as a place to dump every material. Check whether the wall needs survival, damage, skill support, or Cube progress, then spend materials only when the operation helps the active team."
    intentRows={searchIntentRows}
    jumpLinks={jumpLinks}
   />

   <BlufBox title="Cube rule">
    <p>
     <strong>Cube is strongest when it follows a diagnosis.</strong> If the team
     is timing out, look for damage and item support. If the team dies early,
     stabilize first. If progress is flat after normal upgrades, Cube and
     material use become the next serious check.
    </p>
   </BlufBox>

   <section id="cube-operations" className="prose-game">
    <h2>Cube Operations Explained</h2>
    <ArticleImage
     src={taskBarHeroImages.material}
     alt="TBH Task Bar Hero material icon for Cube guide"
     caption="Cube spending starts with the material. Check what the input is worth before converting it."
    />
    <p>
     Cube is easy to misuse because several operations look helpful at the same
     time. Leveling, synthesis, crafting, and alchemy all sound like progress,
     but they solve different problems. A player who spends everything the
     moment a menu appears may feel active while making the account harder to
     steer.
    </p>
    <p>
     The better approach is to pick the current account problem first. If a boss
     is killing the team instantly, a random damage craft may not be the fix. If
     the team survives but cannot finish, a defensive conversion may not move
     the wall. If a material has several uses, check the{" "}
     <a href={taskBarHeroUrls.cube} target="_blank" rel="noreferrer">
      Cube reference
     </a>{" "}
     and{" "}
     <a href={taskBarHeroUrls.items} target="_blank" rel="noreferrer">
      item database
     </a>{" "}
     before spending it.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Cube action</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">What it does</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Use it when</th>
      </tr>
     </thead>
     <tbody>
      {taskBarHeroCubeRows.map(([action, does, when]) => (
       <tr key={action} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{action}</td>
        <td className="px-4 py-3 text-muted-foreground">{does}</td>
        <td className="px-4 py-3 text-muted-foreground">{when}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section id="leveling" className="prose-game">
    <h2>Cube Leveling Route</h2>
    <p>
     When Cube level falls behind, do not assume the answer is always more
     farming. First confirm that your current farming route feeds the material
     or item flow you need. Some players repeat a stage because it is familiar,
     even after the account has moved to a different bottleneck. A stage can be
     comfortable and still be inefficient for the current Cube goal.
    </p>
    <p>
     Treat Cube leveling as a loop: identify the wall, check the active heroes,
     find the relevant material, spend only what supports that plan, then test
     the same wall again. If nothing changes, stop spending and move to another
     diagnosis. The account may need skill levels, gear quality, or team role
     changes instead.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Step</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Do this</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Why</th>
      </tr>
     </thead>
     <tbody>
      {levelingRows.map(([step, action, why]) => (
       <tr key={step} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{step}</td>
        <td className="px-4 py-3 text-muted-foreground">{action}</td>
        <td className="px-4 py-3 text-muted-foreground">{why}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section id="spend-or-hold" className="prose-game">
    <h2>When to Spend Materials and When to Hold</h2>
    <ArticleImage
     src={taskBarHeroImages.sword}
     alt="TBH Task Bar Hero gear icon for Cube material choices"
     caption="A material spend should make an active hero stronger for a current stage wall, not just create a new item."
    />
    <p>
     Spend materials when the result is clear, immediate, and connected to the
     team pushing stages. Hold materials when the output is uncertain, the item
     belongs to a hero you are not using, or the next wall has not been
     diagnosed. This is especially important for players jumping between
     beginner advice, build advice, and market advice at the same time.
    </p>
    <p>
     If you are unsure, open the{" "}
     <a href={taskBarHeroUrls.tools} target="_blank" rel="noreferrer">
      Wiki tools page
     </a>{" "}
     and look up the target item, material, or drop route. Then return to your
     current guide path. A database tells you what exists; the next step is
      whether it solves the current problem.
    </p>
   </section>

   <CubeSpendChart />

   <section id="waste-cases" className="prose-game">
    <h2>Common Cube Waste Cases</h2>
    <p>
     Cube mistakes usually come from impatience, not from a lack of buttons.
     The player sees a material pile, a craft option, or a synthesis path and
     wants to turn it into progress immediately. That can work when the target
     is obvious. It can also consume the exact input needed for the next real
     upgrade.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Waste case</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Better rule</th>
      </tr>
     </thead>
     <tbody>
      {wasteRows.map(([mistake, fix]) => (
       <tr key={mistake} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{mistake}</td>
        <td className="px-4 py-3 text-muted-foreground">{fix}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section className="prose-game">
    <h2>What to Read After Cube</h2>
    <p>
     If Cube changes help but a boss still blocks progress, move to the{" "}
     <Link href="/games/task-bar-hero/act-2-10-act-3-10-guide">
      Act 2-10 and Act 3-10 guide
     </Link>
     . If the issue is which hero deserves materials, read{" "}
     <Link href="/games/task-bar-hero/heroes-builds">heroes and builds</Link>.
     If you are still in the first hour, return to the{" "}
     <Link href="/games/task-bar-hero/beginner-guide">beginner guide</Link> and
     tighten the basic upgrade loop before spending deeper.
    </p>
   </section>
  </TaskBarHeroArticle>
 );
}
