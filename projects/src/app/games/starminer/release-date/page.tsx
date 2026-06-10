import Link from "next/link";
import { StarminerArticle } from "@/components/starminer-article";
import { ArticleImage } from "@/components/article-media";
import {
  ActionTable,
  BlufBox,
  SearchAnswerPanel,
  SourceCheckTable,
  StatusPanel,
} from "@/components/guide-blocks";
import {
  createStarminerMetadata,
  starminerImages,
  starminerOfficialUrl,
  starminerSteamDbUrl,
  starminerSteamUrl,
  smReleaseActionRows,
  smReleaseJumpLinks,
  smReleaseSearchIntent,
  smReleaseSourceRows,
  smReleaseStatusItems,
} from "@/lib/starminer";

const title = "Starminer Release Date, Early Access, Steam Unlock & Platform Status";
const description =
 "Starminer release date guide: May 27, 2026 Steam listing, SteamDB unlock timing, Early Access status, Epic coming soon, PC platform, English language, and store checks.";
const canonical = "/games/starminer/release-date";

export const metadata = createStarminerMetadata({
 title,
 description,
 canonical,
 image: starminerImages.frontier,
});

const faqs = [
 {
 question: "What is the Starminer release date?",
 answer:
 "Steam lists Starminer for May 27, 2026. SteamDB lists 27 May 2026 at 16:00 UTC. Because store state can change on launch day, use the Steam store button as the final live availability check.",
 },
 {
 question: "Is Starminer in Early Access?",
 answer:
 "Yes. Steam tags Starminer as Early Access, and the official site describes Early Access for May 2026.",
 },
 {
 question: "Is Starminer on Epic Games Store?",
 answer:
 "The official site lists Steam and Epic, with Epic Games Store marked as coming soon. Steam is the confirmed store page to check first.",
 },
 {
 question: "Is Starminer on consoles?",
 answer:
 "No console release is confirmed by the current Steam and official site information. Treat Starminer as a PC release until official console news appears.",
 },
 {
 question: "What language does Starminer support?",
 answer:
 "Steam currently lists English as the supported language.",
 },
];

const releaseRows = [
 ["Steam release date", "May 27, 2026", "Official Steam store listing"],
 ["SteamDB timing", "27 May 2026 at 16:00 UTC", "Useful timing context"],
 ["Current caution", "Check the Steam button for live availability", "Steam API/store state can change"],
 ["Early Access", "Confirmed", "Steam tag and official site wording"],
 ["Steam", "Confirmed store page", starminerSteamUrl],
 ["Epic Games Store", "Coming soon on official site", starminerOfficialUrl],
 ["Language", "English", "Steam supported languages"],
 ["Console", "Not confirmed", "Do not assume PS5, Xbox, or Switch support"],
];

export default function StarminerReleaseDatePage() {
 return (
 <StarminerArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Release Date"
 heroImage={starminerImages.frontier}
 heroAlt="Starminer release date and Early Access guide image"
 faqs={faqs}
 >
 <BlufBox title="Release Answer">
 <p>
 <strong>
 Steam lists Starminer for May 27, 2026, and SteamDB lists 27 May
 2026 at 16:00 UTC.
 </strong>{" "}
 Use the Steam store button as the final availability signal before
 buying, installing, or planning a launch session. After checking the
 date, continue to the{" "}
 <Link href="/games/starminer/beginner-guide">beginner guide</Link>,{" "}
 <Link href="/games/starminer/system-requirements">PC specs</Link>, or{" "}
 <Link href="/games/starminer/is-it-worth-it">worth-it guide</Link>.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Starminer Release Quick Answer"
 answer="Steam lists May 27, 2026. SteamDB lists 27 May 2026 at 16:00 UTC. Early Access is confirmed. Steam is the confirmed store page. Epic Games Store is listed as coming soon on the official site. Consoles are not confirmed."
 intentRows={smReleaseSearchIntent}
 jumpLinks={smReleaseJumpLinks}
 />

 <StatusPanel items={smReleaseStatusItems} />

 <section id="release-anchor" className="prose-game">
 <h2>Release Status Snapshot</h2>
 <ArticleImage
 src={starminerImages.frontier}
 alt="Starminer Steam release date Early Access status image"
 caption="Starminer has a dated Steam listing, but launch-day store buttons remain the safest source for live access, price, and install state."
 />
 <p>
 Starminer is positioned as a May 2026 Early Access release. Steam is
 the main page to check first because it carries the release date, PC
 feature labels, supported language, and minimum requirements. SteamDB
 is useful for timing context, while the official site confirms the
 broader Early Access positioning, core systems, and Epic Games Store
 coming-soon note.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Item</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current answer</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Source note</th>
 </tr>
 </thead>
 <tbody>
 {releaseRows.map(([item, answer, note]) => (
 <tr key={item} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{item}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 <td className="px-4 py-3 text-muted-foreground">{note}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>What to Check Before You Start</h2>
 <ArticleImage
 src={starminerImages.hero}
 alt="Starminer store checklist and launch planning image"
 caption="Before a launch-session plan, confirm the Steam button, price, install option, minimum specs, and whether any launch notes mention known issues."
 />
 <p>
 A Starminer launch check should be practical. First, open the{" "}
 <a href={starminerSteamUrl} target="_blank" rel="noreferrer">
 Steam page
 </a>{" "}
 and confirm whether the button shows purchase, install, or coming
 soon. Second, compare your PC against the{" "}
 <Link href="/games/starminer/system-requirements">
 official system requirements
 </Link>
 . Third, read the{" "}
 <Link href="/games/starminer/game-modes">game modes guide</Link> so
 your first save matches your goal. Campaign is the best starting point
 for most players, while Sandbox and Survival make more sense after you
 understand the systems.
 </p>
 <p>
 Do not use this page as a promise that price, reviews, or Steam Deck
 status are known. Those should be checked when the store is live. The{" "}
 <Link href="/games/starminer/is-it-worth-it">worth-it page</Link>{" "}
 explains how to make that call without relying on unconfirmed launch
 details.
 </p>
 </section>

 <section className="prose-game">
 <h2>Useful Official Links</h2>
 <ul>
 <li>
 <a href={starminerSteamUrl} target="_blank" rel="noreferrer">
 Starminer on Steam
 </a>
 </li>
 <li>
 <a href={starminerSteamDbUrl} target="_blank" rel="noreferrer">
 Starminer on SteamDB
 </a>
 </li>
 <li>
 <a href={starminerOfficialUrl} target="_blank" rel="noreferrer">
 Official Starminer site
 </a>
 </li>
 </ul>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Release Plan</h2>
 <ActionTable rows={smReleaseActionRows} />

 <SourceCheckTable title="Starminer Release Sources" rows={smReleaseSourceRows} />
 </StarminerArticle>
 );
}
