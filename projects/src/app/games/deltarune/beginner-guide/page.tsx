import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { DeltaruneArticle } from "@/components/deltarune-article";
import {
 createDeltaruneMetadata,
 deltaruneBeginnerChecklist,
 deltaruneImages,
 deltaruneMechanicRows,
} from "@/lib/deltarune";

const title = "DELTARUNE Beginner Guide: Chapter Order, ACT, Spare, TP & First Run Tips";
const description =
 "Spoiler-light DELTARUNE beginner guide for chapter order, first 30 minutes, ACT, Spare, TP, equipment, saves, exploration, mistakes, and Chapter 5 readiness.";
const canonical = "/games/deltarune/beginner-guide";

export const metadata = createDeltaruneMetadata({
 title,
 description,
 canonical,
 image: deltaruneImages.screenshot1,
});

const faqs = [
 {
  question: "Should I play DELTARUNE in chapter order?",
  answer:
   "Yes for a first playthrough. The official FAQ says you can play any chapter from the start, but it recommends playing the chapters in order the first time.",
 },
 {
  question: "Do I need to play UNDERTALE before DELTARUNE?",
  answer:
   "No. The official FAQ frames DELTARUNE as a different world from UNDERTALE. UNDERTALE familiarity helps with tone and references, but it is not required to start DELTARUNE.",
 },
 {
  question: "Can I miss things in DELTARUNE?",
  answer:
   "Yes, optional scenes, items, hidden bosses, and secret-style content can be missed or easier to handle with a clean save. Save before suspicious side paths and major chapter gates.",
 },
 {
  question: "Should a beginner look up Chapter 5 secret boss details?",
  answer:
   "Not on a blind first run. Finish the normal route or keep a separate save first, then use the Chapter 5 walkthrough and secrets page when you are ready for spoilers.",
 },
];

const searchIntentRows = [
 {
  query: "DELTARUNE beginner guide",
  answer:
   "Start Chapter 1, learn ACT and Spare before attacking by default, save often, and inspect side rooms before leaving areas.",
  href: "#first-30-minutes",
  label: "Start",
 },
 {
  query: "DELTARUNE chapter order",
  answer:
   "You can pick any chapter, but first-time players should play in order to understand systems and avoid spoilers.",
  href: "#chapter-order",
  label: "Order",
 },
 {
  query: "DELTARUNE ACT Spare TP",
  answer:
   "ACT changes encounter state, Spare ends ready enemies, and TP turns defensive play into spells or special actions.",
  href: "#core-mechanics",
  label: "Mechanics",
 },
 {
  query: "DELTARUNE Chapter 5 beginner",
  answer:
   "Before Chapter 5, keep a clean save, understand combat basics, and avoid secret-route searches until you are ready.",
  href: "#chapter-5-ready",
  label: "Chapter 5",
 },
];

const jumpLinks = [
 { href: "#first-30-minutes", label: "First 30 minutes" },
 { href: "#core-mechanics", label: "Mechanics" },
 { href: "#route-advice", label: "Route advice" },
 { href: "#mistakes", label: "Mistakes" },
 { href: "#chapter-5-ready", label: "Chapter 5" },
 { href: "/games/deltarune/chapter-5-walkthrough-secrets", label: "Chapter 5 guide" },
];

const mistakeRows = [
 ["Skipping NPCs", "You lose hints, jokes, context, and sometimes the clue that explains where to check next.", "Talk to visible NPCs before leaving a new area."],
 ["Using one save for everything", "Hidden or alternate-route experiments are harder to undo.", "Keep a normal-route save and a test save if you are exploring secrets."],
 ["Attacking by default", "Some fights are better treated as encounter puzzles.", "Try ACT, watch enemy state, and Spare when the route allows it."],
 ["Spending TP too early", "You may need TP for healing or a route-solving action later in the fight.", "Build TP through safe defense and spend it when it solves a problem."],
 ["Reading deep Chapter 5 spoilers too early", "Secret boss, Egg, and weird route pages can reveal more than a beginner needs.", "Use spoiler-light tips first, then read the Chapter 5 page after a normal clear."],
];

const readinessRows = [
 ["Save discipline", "You are comfortable saving before suspicious doors, route changes, and optional boss checks."],
 ["Battle rhythm", "You know when to ACT, defend, Spare, heal, or stop attacking."],
 ["Exploration habit", "You naturally inspect side rooms and talk to NPCs before moving to the next major gate."],
 ["Spoiler control", "You know whether you want a normal route or hidden-route guidance."],
 ["Separate save", "You have a clean save if you plan to test weird route or secret-boss requirements."],
];

export default function DeltaruneBeginnerGuidePage() {
 return (
  <DeltaruneArticle
   title={title}
   description={description}
   canonical={canonical}
   label="Beginner Guide"
   heroImage={deltaruneImages.screenshot1}
   heroAlt="DELTARUNE beginner guide battle and exploration screenshot"
   faqs={faqs}
  >
   <SearchAnswerPanel
    title="What should a new DELTARUNE player do first?"
    answer="Start with Chapter 1, play in order on your first run, save before new areas, learn ACT and Spare before attacking by default, use TP deliberately, talk to NPCs, and keep Chapter 5 secret-route searches until you are ready for spoilers."
    intentRows={searchIntentRows}
    jumpLinks={jumpLinks}
   />

   <BlufBox title="Beginner Rule">
    <p>
     <strong>Play normally first, investigate secrets second.</strong>{" "}
     DELTARUNE rewards curiosity, but a first run is clearer when you learn the
     basic route before chasing hidden bosses, Eggs, or weird route variations.
     Keep a clean save and use spoiler-heavy pages only when you intentionally
     want route details.
    </p>
   </BlufBox>

   <section id="chapter-order" className="prose-game">
    <h2>Chapter Order: Start With Chapter 1</h2>
    <p>
     The official FAQ says you can play any chapter from the start as long as
     you generally remember what happened story-wise, but it also recommends
     playing the chapters in order the first time. Treat that as the best
     beginner rule. Chapter 1 introduces the structure; Chapter 2 teaches a
     larger rhythm of exploration, party actions, shops, and optional content;
     later chapters assume you can read DELTARUNE's jokes, combat prompts, and
     side-path logic without constant explanation.
    </p>
    <p>
     Jumping to Chapter 5 just because searches are active is a poor first-run
     choice. You can do it technically, but you will turn a story-rich RPG into
     a checklist of unexplained names and routes. If you are only here because
     you are stuck in Chapter 5, use the Chapter 5 walkthrough. If you are new
     and deciding how to play, start at the beginning and let hidden-route
     searches wait.
    </p>
   </section>

   <ArticleImage
    src={deltaruneImages.screenshot2}
    alt="DELTARUNE spoiler-light route planning screenshot"
    caption="A good first run follows chapter order, checks save points, talks to NPCs, and keeps deep secret searches for later."
   />

   <section id="first-30-minutes" className="prose-game">
    <h2>First 30 Minutes Checklist</h2>
    <p>
     Your first half hour should teach habits, not perfect optimization. The
     goal is to understand how the game expects you to look at rooms, read
     encounters, use party turns, and recover from mistakes. If you learn those
     habits early, later hidden content becomes easier to inspect because you
     will naturally notice odd NPC lines, suspicious objects, and doors that do
     not behave like decoration.
    </p>
   </section>

   <ActionTable rows={deltaruneBeginnerChecklist} />

   <section id="core-mechanics" className="prose-game">
    <h2>Core Mechanics That Matter First</h2>
    <p>
     DELTARUNE battles are not just about reducing HP. Many encounters are
     built around reading enemy behavior, choosing the right ACT, building or
     spending TP, and knowing when a Spare is available. Beginners should avoid
     thinking in one-button terms. A fight can be a small puzzle, a resource
     check, a timing test, or a story beat with combat framing.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Mechanic</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">What it does</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Beginner use</th>
      </tr>
     </thead>
     <tbody>
      {deltaruneMechanicRows.map(([mechanic, meaning, use]) => (
       <tr key={mechanic} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{mechanic}</td>
        <td className="px-4 py-3 text-muted-foreground">{meaning}</td>
        <td className="px-4 py-3 text-muted-foreground">{use}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section id="route-advice" className="prose-game">
    <h2>Spoiler-Light Route Advice</h2>
    <p>
     The best route habit is to move in loops. Enter an area, read the obvious
     path, inspect the side path, talk to anyone nearby, save when the game
     offers a save point, then continue. Do not run every room like a race.
     DELTARUNE often hides useful context in side conversations or repeated
     jokes. If something feels oddly specific, write it down or check it before
     leaving the area.
    </p>
    <p>
     When a room has several exits, take the optional-looking path before the
     path that feels like the main exit. When an NPC changes dialogue after an
     event, read the new line. When a shop or equipment screen appears, think
     about survivability first. When a fight introduces a new pattern, spend a
     turn learning it instead of forcing damage. These habits are more useful
     than memorizing a thin list of generic tips.
    </p>
    <p>
     For secret content, the safest rule is: normal route first, test route
     second. That does not mean ignore secrets forever. It means avoid mixing a
     blind story run with every possible hidden-boss or weird-route claim from
     search results. Once you finish the normal route or make a separate save,
     it becomes much safer to use the{" "}
     <Link href="/games/deltarune/chapter-5-walkthrough-secrets">
      Chapter 5 walkthrough and secrets guide
     </Link>
     .
    </p>
   </section>

   <ArticleImage
    src={deltaruneImages.screenshot3}
    alt="DELTARUNE ACT Spare and exploration beginner guide screenshot"
    caption="Treat battles and rooms as readable systems: ACT first when a fight looks like a puzzle, save before suspicious paths, and inspect before leaving."
   />

   <section id="mistakes" className="prose-game">
    <h2>Beginner Mistakes to Avoid</h2>
    <p>
     Most early mistakes are not permanent disasters. The problem is that they
     make later sections harder to understand. Skipping NPCs removes hints,
     ignoring save points makes route testing awkward, and reading deep secret
     pages too early can spoil the surprise of a chapter that works better when
     you see its normal shape first.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Mistake</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Why it hurts</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Better habit</th>
      </tr>
     </thead>
     <tbody>
      {mistakeRows.map(([mistake, reason, habit]) => (
       <tr key={mistake} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{mistake}</td>
        <td className="px-4 py-3 text-muted-foreground">{reason}</td>
        <td className="px-4 py-3 text-muted-foreground">{habit}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section id="chapter-5-ready" className="prose-game">
    <h2>Chapter 5 Readiness</h2>
    <p>
     Before Chapter 5, decide what kind of player you are for this run. If you
     want a normal story experience, keep searches focused on stuck fixes and
     avoid secret boss or weird route sections until after the clear. If you
     are intentionally hunting secrets, make a separate save and track every
     suspicious item in one place. Do not split Pink Coins, Mystery Key, Egg,
     and secret boss notes into separate documents; they are related enough
     that a combined checklist is safer.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Before Chapter 5</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Ready when...</th>
      </tr>
     </thead>
     <tbody>
      {readinessRows.map(([check, ready]) => (
       <tr key={check} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{check}</td>
        <td className="px-4 py-3 text-muted-foreground">{ready}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <BlufBox title="When to Use the Chapter 5 Walkthrough">
    <p>
     Open the Chapter 5 walkthrough if you are already in the chapter, stuck at
     a gate, checking missables before a major progress point, or intentionally
     hunting secrets. Stay on this beginner page if you only need mechanics and
     first-run habits.
    </p>
   </BlufBox>
  </DeltaruneArticle>
 );
}
