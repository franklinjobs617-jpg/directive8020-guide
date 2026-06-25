import Link from "next/link";
import { ArticleImage, VideoEmbed } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { DeltaruneArticle } from "@/components/deltarune-article";
import {
 createDeltaruneMetadata,
 deltaruneChapter5RouteRows,
 deltaruneChapter5Secrets,
 deltaruneImages,
 deltaruneStuckRows,
 deltaruneVideoIndexRows,
 deltaruneVideos,
} from "@/lib/deltarune";

const title = "DELTARUNE Chapter 5 Walkthrough & Secrets: Route, Boss, Egg, Weird Route";
const description =
 "DELTARUNE Chapter 5 walkthrough and secrets guide for main route planning, Pink Coins, Mystery Key, secret boss, Egg, missables, weird route notes, stuck fixes, and video timestamp tracking.";
const canonical = "/games/deltarune/chapter-5-walkthrough-secrets";

export const metadata = createDeltaruneMetadata({
 title,
 description,
 canonical,
 image: deltaruneImages.screenshot4,
});

const faqs = [
 {
  question: "Should Pink Coins, Mystery Key, and the secret boss be on one page?",
  answer:
   "Yes. Current player demand connects these topics, so they should stay in one Chapter 5 walkthrough until verified route data proves a standalone page is useful.",
 },
 {
  question: "Are all Chapter 5 secret locations verified here?",
  answer:
   "No. If a Chapter 5 secret still needs in-game confirmation, this page says so. Exact locations should be added only after matching screenshots or timestamped videos.",
 },
 {
  question: "Should I try the weird route on my first Chapter 5 playthrough?",
  answer:
   "No, not unless you intentionally want heavy spoilers. Finish a normal route first or keep a separate save before testing weird route choices.",
 },
 {
  question: "What should I do before a possible point of no return?",
  answer:
   "Save, talk to nearby NPCs, inspect side rooms, check suspicious objects, and update your secret checklist before moving through the main progress gate.",
 },
];

const searchIntentRows = [
 {
  query: "DELTARUNE Chapter 5 walkthrough",
  answer:
   "Use the route cheat sheet first: clean save, main path, local sweep, secret checklist, boss preconditions, then normal clear or separate weird-route test.",
  href: "#route-cheat-sheet",
  label: "Walkthrough",
 },
 {
  query: "DELTARUNE Chapter 5 secret boss",
  answer:
   "Keep the secret boss with Pink Coins and Mystery Key until the complete prerequisite chain is verified with screenshots or video timestamps.",
  href: "#secret-boss",
  label: "Secret boss",
 },
 {
  query: "DELTARUNE Chapter 5 pink coins",
  answer:
   "Track Pink Coins in the same checklist as Mystery Key, Egg, and secret boss. Exact locations should be treated as unconfirmed until stable proof is added.",
  href: "#pink-coins-mystery-key",
  label: "Pink Coins",
 },
 {
  query: "DELTARUNE Chapter 5 weird route",
  answer:
   "Use a separate save and finish a normal route first unless you intentionally want spoiler-heavy alternate-route guidance.",
  href: "#weird-route",
  label: "Weird route",
 },
];

const jumpLinks = [
 { href: "#route-cheat-sheet", label: "Route" },
 { href: "#main-walkthrough", label: "Walkthrough" },
 { href: "#secrets-table", label: "Secrets" },
 { href: "#secret-boss", label: "Secret boss" },
 { href: "#weird-route", label: "Weird route" },
 { href: "#stuck-faq", label: "Stuck fixes" },
];

const walkthroughSections = [
 {
  area: "Chapter start",
  task: "Create or confirm a clean save before experimenting.",
  check: "Do not start secret-route testing from your only normal-route save.",
 },
 {
  area: "First required route",
  task: "Follow required interactions until the game gives you a stable area to inspect.",
  check: "Do not assume the first locked door or blocked path is a bug; sweep local dialogue first.",
 },
 {
  area: "First local sweep",
  task: "Talk to NPCs, inspect odd objects, and note any route language that repeats.",
  check: "Write suspicious terms in one checklist: Pink Coins, Mystery Key, Egg, secret boss, weird route.",
 },
 {
  area: "Mid-chapter progress gate",
  task: "Save before moving through any story gate that feels like it will close a local area.",
  check: "Confirm whether you can backtrack. If not, collect and document before continuing.",
 },
 {
  area: "Secret chain review",
  task: "Before using any key-like item, confirm the prerequisite chain from a timestamped source.",
  check: "If proof is missing, keep the note open instead of guessing.",
 },
 {
  area: "Final route choice",
  task: "Finish normal route first unless your goal is explicitly weird route testing.",
  check: "Keep weird route notes separate from the normal walkthrough path.",
 },
];

const missableRows = [
 ["NPC dialogue sweep", "Before leaving each hub-like area", "May be unavailable after story progress", "Save before major gates and revisit nearby NPCs."],
 ["Suspicious doors and rooms", "When first seen and after local state changes", "Unknown until route is verified", "Inspect before assuming a later return is possible."],
 ["Pink Coins", "During the Chapter 5 secret chain", "Verification needed", "Track coin count and source timestamp before publishing exact locations."],
 ["Mystery Key", "After confirming the Pink Coin / secret chain", "Verification needed", "Do not use a single unverified post as final proof."],
 ["Egg / hidden room", "When a room behaves unlike normal progress", "Verification needed", "Document entry condition with screenshot or video timestamp."],
 ["Weird route trigger", "Only on a test save", "Potentially route-changing", "Normal clear first, test route second."],
];

export default function DeltaruneChapter5WalkthroughSecretsPage() {
 return (
  <DeltaruneArticle
   title={title}
   description={description}
   canonical={canonical}
   label="Chapter 5 Walkthrough & Secrets"
   heroImage={deltaruneImages.screenshot4}
   heroAlt="DELTARUNE Chapter 5 walkthrough and secrets guide screenshot"
   faqs={faqs}
  >
   <SearchAnswerPanel
    title="How should you approach DELTARUNE Chapter 5?"
    answer="Play Chapter 5 from a clean save, follow the main route until each local area opens, sweep NPCs and suspicious rooms before major gates, track Pink Coins, Mystery Key, Egg, secret boss, and weird route notes in one checklist, then use a separate save for hidden-route testing."
    intentRows={searchIntentRows}
    jumpLinks={jumpLinks}
   />

   <BlufBox title="Important Verification Note">
    <p>
     <strong>This page is built to help without overstating unconfirmed secrets.</strong>{" "}
     Chapter 5 demand is confirmed around walkthrough, secret boss, Pink Coins,
     Mystery Key, Egg, and weird route, but exact secret locations should only
     be published after matching in-game screenshots or timestamped videos. Any
     unconfirmed secret detail is labeled until it can be checked against
     gameplay proof.
    </p>
   </BlufBox>

   <section id="route-cheat-sheet" className="prose-game">
    <h2>Route Cheat Sheet</h2>
    <p>
     Use this route pattern before reading deep spoilers. Chapter 5 searches
     are currently packed with secret terms, but a useful walkthrough should
     first keep the player from losing a clean route. The rule is: save, clear
     required progress, sweep the local area, update the secret checklist, then
     move through the next gate. Do not split Pink Coins, Mystery Key, Egg, and
     secret boss into separate pages during the first launch batch because the
     player needs to see how the chain relates.
    </p>
   </section>

   <ActionTable rows={deltaruneChapter5RouteRows} />

   <ArticleImage
    src={deltaruneImages.screenshot1}
    alt="DELTARUNE Chapter 5 route cheat sheet visual"
    caption="The route pattern is clean save, required progress, local sweep, secret checklist, then gate check. Use a separate save for weird route or secret-boss testing."
   />

   <section id="main-walkthrough" className="prose-game">
    <h2>Main Walkthrough Structure</h2>
    <p>
     This section is intentionally written as a working route template rather
     than a plot retelling. A player who searches for a Chapter 5 walkthrough
     usually needs to know what to do next, what to check before leaving, and
     whether a suspicious object belongs to the secret chain. Story summary can
     be short; action steps must be specific.
    </p>
    <p>
     The current safe route is to keep a clean save, proceed through required
     scenes, and stop whenever Chapter 5 opens a hub-like or multi-exit area.
     In that local sweep, talk to visible NPCs, inspect suspicious objects, test
     side rooms, and note any repeated phrase or item that appears to connect
     to Pink Coins, Mystery Key, Egg, or secret boss searches. If a path looks
     like a main progress gate, save first and confirm whether backtracking is
     available.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Route point</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Do this</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Before leaving</th>
      </tr>
     </thead>
     <tbody>
      {walkthroughSections.map((row) => (
       <tr key={row.area} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{row.area}</td>
        <td className="px-4 py-3 text-muted-foreground">{row.task}</td>
        <td className="px-4 py-3 text-muted-foreground">{row.check}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section id="secrets-table" className="prose-game">
    <h2>Chapter 5 Secrets and Missables Table</h2>
    <p>
     The table below is the page's control center. It gives players a useful
     place to track high-demand secret terms without pretending every location
     is final before route evidence is stable. Once exact screenshots or video
     timestamps are available, each row can be updated with precise room names,
     entry direction, prerequisite, and recovery note.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Secret</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Where it belongs</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Player action</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Status</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Recovery / note</th>
      </tr>
     </thead>
     <tbody>
      {deltaruneChapter5Secrets.map(([secret, location, action, status, note]) => (
       <tr key={secret} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{secret}</td>
        <td className="px-4 py-3 text-muted-foreground">{location}</td>
        <td className="px-4 py-3 text-muted-foreground">{action}</td>
        <td className="px-4 py-3 text-muted-foreground">{status}</td>
        <td className="px-4 py-3 text-muted-foreground">{note}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section id="pink-coins-mystery-key" className="prose-game">
    <h2>Pink Coins and Mystery Key Route</h2>
    <p>
     Pink Coins and Mystery Key should stay in the same section because player
     searches connect them to the same Chapter 5 secret chain. The current page
     should not publish a final coin order unless each coin has a matching
     screenshot or a timestamped video segment. Until then, the helpful answer
     is procedural: save before secret checks, track every Pink Coin in one
     checklist, record the room and trigger, and do not use Mystery Key claims
     unless the prerequisite chain is visible.
    </p>
    <p>
     When the route is verified, update this section with a numbered path:
     entry point, coin 1, coin 2, coin 3, any NPC or object requirement, Mystery
     Key acquisition or use point, and the exact moment the secret-boss route
     becomes available. Each step should include a recovery note: can you return
     later, do you need to reload, or should the player mark it for a second
     run?
    </p>
   </section>

   <ArticleImage
    src={deltaruneImages.screenshot2}
    alt="DELTARUNE Pink Coins Mystery Key and secret chain planning visual"
    caption="Keep Pink Coins, Mystery Key, Egg, and secret boss in one checklist until the full prerequisite chain is verified."
   />

   <section id="secret-boss" className="prose-game">
    <h2>Secret Boss Unlock and Fight Prep</h2>
    <p>
     DELTARUNE has a strong hidden-boss tradition, and Chapter 5 secret boss
     demand is already visible in search behavior. That is enough reason to
     include the topic on this page, but not enough reason to invent a final
     route. A useful launch-window secret boss section should help players
     prepare safely: keep a save before the suspected entry point, verify every
     prerequisite, document the key item chain, and avoid consuming route items
     without proof.
    </p>
    <p>
     For the fight itself, the evergreen preparation is still useful. Bring
     survivability equipment if available, enter with a save nearby, watch the
     first attack cycle instead of rushing damage, and decide whether your goal
     is a normal clear or a route-specific outcome. Once the exact boss route
     and battle details are verified, this section should be upgraded with
     attack pattern notes, TP spending recommendations, healing windows, and
     recovery advice after failure.
    </p>
   </section>

   <section id="egg-hidden-room" className="prose-game">
    <h2>Egg and Hidden Room Notes</h2>
    <p>
     Chapter 5 Egg demand appears in search suggestions, so the Egg belongs in
     this walkthrough. It should not become a thin standalone page at launch.
     The right format is a hidden-room subsection with entry condition, room
     cue, required interaction, result, and whether the player can return. If
     any of those details are not verified, the row stays marked verification
     needed.
    </p>
    <p>
     When updating the Egg route, prefer evidence that a player can reproduce:
     a screenshot of the entry area, the exact interaction prompt, a timestamp
     showing the path into the room, and the result after leaving. If there is
     debate between community posts, keep both claims out of the public route
     until one is tested.
    </p>
   </section>

   <section id="weird-route" className="prose-game">
    <h2>Weird Route and Choice Notes</h2>
    <p>
     The weird route is not beginner content. Treat it as a spoiler-heavy
     branch that should be tested on a separate save after a normal route. The
     section belongs on this page because it is a Chapter 5 route question, but
     the first public version should focus on safe handling: when to branch,
     when to save, what could become irreversible, and how to stop if the route
     no longer matches the player's goal.
    </p>
    <p>
     A complete weird route update should include a route comparison table:
     normal route action, weird route action, immediate consequence, later
     consequence, and abort condition. Until that table can be verified, do not
     present exact choice chains as fact. Write the page for players who need
     to avoid losing progress, not for speculation.
    </p>
   </section>

   <ArticleImage
    src={deltaruneImages.screenshot3}
    alt="DELTARUNE weird route and missables branch planning visual"
    caption="Use a separate save for weird route testing. Normal route and alternate-route notes should not be mixed in a blind first playthrough."
   />

   <section className="prose-game">
    <h2>Missables Checklist Before Major Gates</h2>
    <p>
     Before any story gate that feels like it may close a local area, pause and
     run this checklist. The goal is not to promise that every item is
     missable. The goal is to prevent the common launch-window problem: players
     move forward, later discover a secret chain, and no longer know whether
     they can return.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Check</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Best timing</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Risk</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Recovery</th>
      </tr>
     </thead>
     <tbody>
      {missableRows.map(([check, timing, risk, recovery]) => (
       <tr key={check} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{check}</td>
        <td className="px-4 py-3 text-muted-foreground">{timing}</td>
        <td className="px-4 py-3 text-muted-foreground">{risk}</td>
        <td className="px-4 py-3 text-muted-foreground">{recovery}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section id="stuck-faq" className="prose-game">
    <h2>Stuck Fixes</h2>
    <p>
     Stuck searches usually come from one of three problems: a missed local
     interaction, a secret chain that is not ready, or a route branch that
     changed the expected state. Work backward from the last save point. Talk
     again, inspect again, and confirm whether you are on a normal route or a
     test route before assuming the game is broken.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Problem</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Try this</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Why</th>
      </tr>
     </thead>
     <tbody>
      {deltaruneStuckRows.map(([problem, fix, why]) => (
       <tr key={problem} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{problem}</td>
        <td className="px-4 py-3 text-muted-foreground">{fix}</td>
        <td className="px-4 py-3 text-muted-foreground">{why}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section id="video-index" className="prose-game">
    <h2>Video Timestamp Index</h2>
    <p>
     A timestamp table is the cleanest way to make this page useful once
     route-proof videos are selected. The page should link each verified secret
     to both a video timestamp and a page anchor. Do not publish timestamps just
     because a video title looks relevant; watch the segment, confirm the
     action, and match it to the written step.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Video</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">ID / status</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Use for</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Note</th>
      </tr>
     </thead>
     <tbody>
      {deltaruneVideoIndexRows.map(([video, id, use, note]) => (
       <tr key={video} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{video}</td>
        <td className="px-4 py-3 text-muted-foreground">{id}</td>
        <td className="px-4 py-3 text-muted-foreground">{use}</td>
        <td className="px-4 py-3 text-muted-foreground">{note}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <VideoEmbed {...deltaruneVideos.chapter5} />

   <section className="prose-game">
    <h2>Update Rules for This Page</h2>
    <p>
     Update this page only when a new fact improves a player task. Add exact
     Pink Coin locations after a reproducible route exists. Add Mystery Key
     steps after the prerequisite chain is visible. Add secret boss patterns
     after the entry route and fight are confirmed. Add weird route choices
     only when the branch, consequence, and abort condition can be described
     without speculation. If GSC later shows one subtopic with strong
     independent impressions and the page becomes too heavy, split that topic
     into a child page and keep this page as the parent route.
    </p>
    <p>
     Until then, the merged page is the better answer: it gives players one
     reliable checklist for Chapter 5 instead of scattering related secrets
     across thin articles.
    </p>
    <p>
     Back to the{" "}
     <Link href="/games/deltarune">DELTARUNE guide hub</Link> or read the{" "}
     <Link href="/games/deltarune/beginner-guide">beginner guide</Link> if you
     want spoiler-light mechanics before continuing.
    </p>
   </section>
  </DeltaruneArticle>
 );
}
