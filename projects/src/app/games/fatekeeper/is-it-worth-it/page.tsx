import Link from "next/link";
import { ArticleImage, VideoEmbed } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { FatekeeperArticle } from "@/components/fatekeeper-article";
import {
 createFatekeeperMetadata,
 fatekeeperImages,
 fatekeeperVideos,
 fatekeeperWorthRows,
} from "@/lib/fatekeeper";

const title = "Is Fatekeeper Worth It? Early Access Buyer Guide, Content Length & Wait Signals";
const description =
 "Is Fatekeeper worth it? Early Access buyer guide covering short launch content, first-person fantasy RPG fit, builds, PC specs, Steam Deck caution, reviews, and buy-or-wait signals.";
const canonical = "/games/fatekeeper/is-it-worth-it";

export const metadata = createFatekeeperMetadata({
 title,
 description,
 canonical,
 image: fatekeeperImages.worthIt,
});

const faqs = [
 {
 question: "Is Fatekeeper worth buying in Early Access?",
 answer:
 "It is worth considering if you want a short first-person fantasy RPG slice and enjoy testing combat, spells, relics, and builds early.",
 },
 {
 question: "Who should wait on Fatekeeper?",
 answer:
 "Wait if you need a complete campaign, settled reviews, final balance, Steam Deck proof, console support, or a full build database.",
 },
 {
 question: "How long is Fatekeeper Early Access?",
 answer:
 "The Early Access description points to about 2 hours now and a full-version target around 15 hours.",
 },
 {
 question: "Is Fatekeeper good for Skyrim or Dark Messiah fans?",
 answer:
 "It may appeal to players who want first-person fantasy combat, sword-and-sorcery builds, relics, and handcrafted exploration, but it should be judged as its own Early Access RPG.",
 },
];

const searchIntentRows = [
 {
 query: "Is Fatekeeper worth it?",
 answer: "Buy if a short Early Access slice is enough; wait if you need a complete campaign or final reviews.",
 href: "#buyer-table",
 label: "Verdict",
 },
 {
 query: "Fatekeeper Early Access length",
 answer: "The Early Access description points to about 2 hours now and a full-version target around 15 hours.",
 href: "#content-scope",
 label: "Length",
 },
 {
 query: "Fatekeeper reviews",
 answer: "Use reviews only after they reflect the live build, not pre-release expectations.",
 href: "#wait-signals",
 label: "Reviews",
 },
 {
 query: "Fatekeeper Steam Deck worth it",
 answer: "Wait if Deck is your only platform until compatibility and performance reports are stable.",
 href: "/games/fatekeeper/steam-deck-controller",
 label: "Deck",
 },
];

const jumpLinks = [
 { href: "#buyer-table", label: "Buyer fit" },
 { href: "#content-scope", label: "Content" },
 { href: "#wait-signals", label: "Wait signals" },
 { href: "/games/fatekeeper/release-date", label: "Release" },
 { href: "/games/fatekeeper/beginner-guide", label: "Beginner" },
 { href: "/games/fatekeeper/best-builds", label: "Builds" },
];

const waitRows = [
 ["Need full campaign", "Wait for 1.0 or a larger Early Access update."],
 ["Need reviews", "Wait until recent user reviews describe the live build."],
 ["Need Steam Deck", "Wait for compatibility badge and player settings."],
 ["Need final builds", "Wait for verified weapon, spell, relic, and boss data."],
 ["Need console", "Wait for official PS5, Xbox, or Switch store listings."],
];

export default function FatekeeperWorthItPage() {
 return (
 <FatekeeperArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Is It Worth It?"
 heroImage={fatekeeperImages.worthIt}
 heroAlt="Fatekeeper worth it buyer guide image"
 faqs={faqs}
 >
 <SearchAnswerPanel
 title="Should you buy Fatekeeper in Early Access?"
 answer="Buy Fatekeeper at Early Access launch only if a short first-person fantasy RPG slice is enough and you want to test melee, magic, relics, and builds early. Wait if you need a complete campaign, final reviews, Steam Deck proof, console support, or solved builds."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <BlufBox title="Buyer Verdict">
 <p>
 <strong>Fatekeeper is a better early buy for testers than completionists.</strong>{" "}
 The value question depends on whether about 2 hours of Early Access
 content is enough for you to evaluate combat, exploration, and builds.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2 id="buyer-table">Buyer Fit Table</h2>
 <ArticleImage
 src={fatekeeperImages.siteHero}
 alt="Fatekeeper buyer fit and Early Access value image"
 caption="The safest buying decision starts with scope: short Early Access content now, larger full-version target later."
 />
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player type</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Verdict</th>
 </tr>
 </thead>
 <tbody>
 {fatekeeperWorthRows.map(([type, verdict]) => (
 <tr key={type} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{type}</td>
 <td className="px-4 py-3 text-muted-foreground">{verdict}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <VideoEmbed {...fatekeeperVideos.overview} />

 <section className="prose-game">
 <h2 id="content-scope">Content Scope</h2>
 <p>
 The current Early Access scope is the central tradeoff. If you want to
 test the foundation, start with the{" "}
 <Link href="/games/fatekeeper/beginner-guide">beginner guide</Link>.
 If you want a finished RPG, waiting is the more practical choice.
 </p>

 <h2 id="wait-signals">Wait Signals</h2>
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">If you need this</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best action</th>
 </tr>
 </thead>
 <tbody>
 {waitRows.map(([need, action]) => (
 <tr key={need} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{need}</td>
 <td className="px-4 py-3 text-muted-foreground">{action}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </FatekeeperArticle>
 );
}
