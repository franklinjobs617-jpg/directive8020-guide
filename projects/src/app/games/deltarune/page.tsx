import Image from "next/image";
import Link from "next/link";
import { ArticleImage, VideoEmbed } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { DeltaruneArticle } from "@/components/deltarune-article";
import {
 createDeltaruneMetadata,
 deltaruneChapterRows,
 deltaruneImages,
 deltaruneOfficialUrl,
 deltaruneHelpUrl,
 deltaruneNewsletterUrl,
 deltaruneStartRows,
 deltaruneSteamUrl,
 deltaruneSteamDbUrl,
 deltaruneVideos,
 deltaruneQuickFacts,
} from "@/lib/deltarune";

const title = "DELTARUNE Guide Hub: Chapters 1-5, Platforms, Saves & Chapter 5 Help";
const description =
 "DELTARUNE guide hub for current chapter status, platforms, save import, official links, beginner route, and Chapter 5 walkthrough and secrets navigation.";
const canonical = "/games/deltarune";

export const metadata = createDeltaruneMetadata({
 title,
 description,
 canonical,
 image: deltaruneImages.hero,
});

const faqs = [
 {
  question: "Are DELTARUNE Chapters 1-5 available now?",
  answer:
   "Yes. The official DELTARUNE site and Steam page state that Chapters 1-5 are available now. More chapters are planned as free updates once they are ready.",
 },
 {
  question: "Where should new players start?",
  answer:
   "New players should start with Chapter 1 and play in order. The official FAQ says you can play any chapter from the start, but it recommends playing in order the first time.",
 },
 {
  question: "Which guide should I read for Chapter 5 secrets?",
  answer:
   "Use the Chapter 5 walkthrough and secrets page. It keeps the main route, Pink Coins, Mystery Key, secret boss, Egg, missables, and weird route notes together so you can follow one checklist.",
 },
 {
  question: "Does DELTARUNE have more than one ending?",
  answer:
   "The official FAQ answers the ending count as one. This hub avoids turning route speculation into a claim about multiple endings.",
 },
];

const searchIntentRows = [
 {
  query: "DELTARUNE chapters 1-5",
  answer:
   "Chapters 1-5 are available now. Chapters 1 and 2 are the demo, and the full version includes the newer chapters.",
  href: "#chapter-index",
  label: "Status",
 },
 {
  query: "DELTARUNE beginner guide",
  answer:
   "Start from Chapter 1, learn ACT, Spare, TP, equipment, saving, and when to avoid deep spoilers.",
  href: "/games/deltarune/beginner-guide",
  label: "Start",
 },
 {
  query: "DELTARUNE Chapter 5 walkthrough",
  answer:
   "Use the Chapter 5 walkthrough page for route order, secrets, Pink Coins, Mystery Key, Egg, secret boss, missables, and weird route checks.",
  href: "/games/deltarune/chapter-5-walkthrough-secrets",
  label: "Chapter 5",
 },
 {
  query: "DELTARUNE platforms and saves",
  answer:
   "The official FAQ lists PC, Mac, Switch, Switch 2, PS4, and PS5, plus demo and full-version save import notes.",
  href: "#official-status",
  label: "Platforms",
 },
];

const jumpLinks = [
 { href: "#start-here", label: "Start here" },
 { href: "#official-status", label: "Status" },
 { href: "#chapter-index", label: "Chapters" },
 { href: "#source-links", label: "Sources" },
 { href: "/games/deltarune/beginner-guide", label: "Beginner" },
 { href: "/games/deltarune/chapter-5-walkthrough-secrets", label: "Chapter 5" },
];

export default function DeltaruneHubPage() {
 return (
  <DeltaruneArticle
   title={title}
   description={description}
   canonical={canonical}
   label="DELTARUNE"
   heroImage={deltaruneImages.hero}
   heroAlt="DELTARUNE Steam key art for Chapters 1-5 guide hub"
   faqs={faqs}
  >
   <SearchAnswerPanel
    title="What should you read first for DELTARUNE?"
    answer="If you are new, start with the beginner guide and play Chapter 1 first. If you are already in Chapter 5, use the Chapter 5 walkthrough and secrets page. This hub is for current status, platform facts, save import notes, official links, and choosing the right guide without reading spoilers you do not need yet."
    intentRows={searchIntentRows}
    jumpLinks={jumpLinks}
   />

   <BlufBox title="Current Status">
    <p>
     <strong>Chapters 1-5 are available now.</strong> The official site
     presents DELTARUNE as a chapter-based RPG with more chapters planned as
     free updates. Use this page as a status and navigation hub, not as a
     deep spoiler page. Chapter 5 secrets, Pink Coins, Mystery Key, secret boss
     checks, Egg notes, and weird route details belong in the dedicated Chapter
     5 walkthrough.
    </p>
   </BlufBox>

   <section id="official-status">
    <StatusPanel items={deltaruneQuickFacts} />
   </section>

   <section id="start-here" className="prose-game">
    <h2>Start Here: Which Guide Should You Read?</h2>
    <p>
     DELTARUNE now has enough live content that the wrong guide can waste time
     or spoil the chapter you are trying to enjoy. The safest split is simple:
     use this hub for status and official links, use the beginner guide for
     basic mechanics and first-run habits, and use the Chapter 5 walkthrough
     only when you are actively playing Chapter 5 or intentionally checking
     secrets.
    </p>
    <p>
     The official FAQ says that any chapter can be played from the start, but
     it also recommends playing in order on a first playthrough. That matters
     because Chapter 5 searches are dense with spoilers. Queries around secret
     boss, Pink Coins, Mystery Key, Egg, and weird route are not beginner
     topics. They are route-inspection topics for a player who already knows
     the chapter baseline or is willing to see hidden-route context.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Player need</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Best next step</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Guide</th>
      </tr>
     </thead>
     <tbody>
      {deltaruneStartRows.map(([need, answer, href]) => (
       <tr key={need} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{need}</td>
        <td className="px-4 py-3 text-muted-foreground">{answer}</td>
        <td className="px-4 py-3">
         <Link href={href} className="font-medium text-foreground underline decoration-border hover:decoration-dribbble-pink">
          Open
         </Link>
        </td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <ArticleImage
    src={deltaruneImages.screenshot3}
    alt="DELTARUNE chapter navigation and route planning screenshot"
    caption="Use the hub as a spoiler filter: official status first, beginner help second, Chapter 5 secrets only when you need route-specific answers."
   />

   <section id="chapter-index" className="prose-game">
    <h2>Chapter Index and Spoiler Risk</h2>
    <p>
     A useful DELTARUNE hub should not repeat the whole plot. It should help
     players choose a route without accidentally reading a hidden-boss or
     alternate-route answer too early. The chapter index below is built around
     that job: current availability, who should read it, and how much spoiler
     pressure the page creates.
    </p>
   </section>

   <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Chapter</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Current state</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Best for</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Spoiler risk</th>
      </tr>
     </thead>
     <tbody>
      {deltaruneChapterRows.map(([chapter, state, bestFor, risk]) => (
       <tr key={chapter} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{chapter}</td>
        <td className="px-4 py-3 text-muted-foreground">{state}</td>
        <td className="px-4 py-3 text-muted-foreground">{bestFor}</td>
        <td className="px-4 py-3 text-muted-foreground">{risk}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section className="prose-game">
    <h2>Current Player Tasks Covered by This Hub</h2>
    <p>
     The current demand pattern is not one broad question. Players are asking
     different things at different stages: whether Chapters 1-5 are out, how
     save import works, whether they can jump to a chapter, how to start
     cleanly, and where to go for Chapter 5 secrets. Those tasks should not all
     need separate articles before there is enough detail to help players.
    </p>
    <p>
     Status facts stay here because they are short and official. Beginner
     mechanics go to the beginner guide because they need examples and
     checklists. Chapter 5 route details go to the walkthrough because they are
     spoiler-heavy and need tables, missable notes, and recovery advice.
     Release-date-only, price-only, and platform-only pages are not necessary
     for this first launch batch because the hub can answer those questions in
     one place.
    </p>
    <ul>
     <li><strong>Use the hub</strong> for platforms, price, current chapters, future chapter status, official links, and save import.</li>
     <li><strong>Use the beginner guide</strong> for ACT, Spare, TP, equipment, saving, chapter order, and first-run mistakes.</li>
     <li><strong>Use the Chapter 5 guide</strong> for main route checks, secrets, Pink Coins, Mystery Key, Egg, secret boss, weird route, and stuck fixes.</li>
    </ul>
   </section>

   <section className="my-10">
    <h2 className="mb-4 text-xl font-bold text-foreground">
     Which Guide Should You Read First?
    </h2>
    <div className="grid gap-4 md:grid-cols-3">
     {[
      ["New player", "Read the beginner guide, then play from Chapter 1.", "/games/deltarune/beginner-guide"],
      ["Returning demo player", "Check save import, then continue into the full chapters.", "#official-status"],
      ["Chapter 5 player", "Use the Chapter 5 walkthrough only when ready for spoilers.", "/games/deltarune/chapter-5-walkthrough-secrets"],
     ].map(([label, text, href]) => (
      <Link key={label} href={href} className="rounded-lg border border-border bg-white p-5 hover:border-dribbble-pink">
       <h3 className="text-base font-bold text-foreground">{label}</h3>
       <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
      </Link>
     ))}
    </div>
   </section>

   <section id="source-links" className="prose-game">
    <h2>Official Links to Check Before Playing</h2>
    <p>
     Use official sources for claims that can change: platforms, pricing,
     demo behavior, save import, and future chapter status. Community posts,
     videos, and forum discussions are useful for player pain and route
     discovery, but they should not replace official facts. For Chapter 5
     secrets, this site uses community demand as a signal and keeps any
     unverified route details labeled until a stable screenshot or timestamped
     video confirms them.
    </p>
    <div className="not-prose grid gap-3 sm:grid-cols-2">
     {[
      ["Official site", deltaruneOfficialUrl],
      ["Official FAQ", deltaruneHelpUrl],
      ["Steam page", deltaruneSteamUrl],
      ["SteamDB charts", deltaruneSteamDbUrl],
      ["Chapter 5 newsletter", deltaruneNewsletterUrl],
     ].map(([label, href]) => (
      <a key={href} href={href} target="_blank" rel="noreferrer" className="rounded-lg border border-border bg-white p-4 text-sm font-semibold text-foreground hover:border-dribbble-pink">
       {label}
      </a>
     ))}
    </div>
   </section>

   <VideoEmbed {...deltaruneVideos.chapter5} />

   <ArticleImage
    src={deltaruneImages.screenshot4}
    alt="DELTARUNE hub guide visual for platform and chapter planning"
    caption="Keep the hub clean: status and navigation here, spoiler-light basics in the beginner guide, and Chapter 5 secrets in the dedicated walkthrough."
   />

   <section className="prose-game">
    <h2>Update Log</h2>
    <p>
     <strong>June 25, 2026:</strong> Hub created for Chapters 1-5 status,
     official links, beginner guide routing, and Chapter 5 walkthrough routing.
     Current factual anchors are the official DELTARUNE site, official FAQ,
     Steam page, SteamDB as live demand signal, and the Chapter 5 newsletter.
    </p>
   </section>
  </DeltaruneArticle>
 );
}
