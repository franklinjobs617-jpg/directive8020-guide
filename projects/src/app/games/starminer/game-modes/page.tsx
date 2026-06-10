import Link from "next/link";
import { StarminerArticle } from "@/components/starminer-article";
import { ArticleImage } from "@/components/article-media";
import { BlufBox } from "@/components/guide-blocks";
import {
 createStarminerMetadata,
 starminerImages,
 starminerModeRows,
} from "@/lib/starminer";

const title = "Starminer Game Modes: Campaign vs Sandbox vs Survival";
const description =
 "Starminer game modes guide: Campaign vs Sandbox vs Survival, best first save, beginner mode choice, replay value, defense testing, and Early Access caveats.";
const canonical = "/games/starminer/game-modes";

export const metadata = createStarminerMetadata({
 title,
 description,
 canonical,
 image: starminerImages.survival,
});

const faqs = [
 {
 question: "What game modes are in Starminer?",
 answer:
 "The official FAQ lists Campaign, Sandbox, and Survival. Campaign introduces mechanics and lore, Sandbox lets players customize starting conditions, and Survival uses endless enemy waves.",
 },
 {
 question: "Which Starminer mode should I play first?",
 answer:
 "Campaign is the best first mode for most players because it teaches core mechanics through missions before you move into open-ended building.",
 },
 {
 question: "What is the best Starminer mode for beginners?",
 answer:
 "Campaign is the best beginner mode because it teaches mining, power, logistics, heat, and defense before you move into Sandbox or Survival.",
 },
 {
 question: "Is Sandbox mode good for beginners?",
 answer:
 "Sandbox can be beginner-friendly if you already like self-directed building, but Campaign is safer if you need the game to teach power, mining, logistics, heat, and defense in order.",
 },
 {
 question: "What is Survival mode for?",
 answer:
 "Survival is for testing defenses against endless enemy waves. It is best after you understand station layout, weapon placement, energy distribution, and repair priorities.",
 },
 {
 question: "Will Starminer modes change during Early Access?",
 answer:
 "Yes. The official FAQ says all three modes will be refined during Early Access, so treat this guide as launch-window advice.",
 },
];

const playerRows = [
 ["New to Starminer", "Campaign", "It introduces mechanics and lore instead of leaving you alone with a blank build space."],
 ["Factory builder", "Campaign, then Sandbox", "Learn the interface first, then chase customized production chains."],
 ["Creative station designer", "Sandbox after one Campaign session", "You will build faster once you understand power and logistics rules."],
 ["Combat-focused player", "Campaign, then Survival", "Survival makes more sense when weapon placement and energy distribution are familiar."],
 ["Early Access tester", "All three", "Compare how each mode handles pacing, bugs, balance, and replay value."],
];

export default function StarminerGameModesPage() {
 return (
 <StarminerArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Game Modes"
 heroImage={starminerImages.survival}
 heroAlt="Starminer Campaign Sandbox Survival game modes image"
 faqs={faqs}
 >
 <BlufBox title="Best First Save">
 <p>
 <strong>Start with Campaign unless you already know what you want to build.</strong>{" "}
 Starminer has Campaign, Sandbox, and Survival, but Campaign is the
 cleanest first route because it teaches systems before you commit to a
 large station. After that, use{" "}
 <Link href="/games/starminer/ship-building">ship building</Link> for
 design decisions and{" "}
 <Link href="/games/starminer/heat-aliens-defense">defense</Link> for
 Survival prep.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2>Mode Comparison</h2>
 <ArticleImage
 src={starminerImages.survival}
 alt="Starminer Campaign Sandbox Survival mode comparison visual"
 caption="Campaign is the structured path, Sandbox is the creative path, and Survival is the pressure-test path."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mode</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it is for</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">First-run advice</th>
 </tr>
 </thead>
 <tbody>
 {starminerModeRows.map(([mode, use, advice]) => (
 <tr key={mode} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{mode}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 <td className="px-4 py-3 text-muted-foreground">{advice}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Which Mode Fits Your Player Type?</h2>
 <ArticleImage
 src={starminerImages.fleet}
 alt="Starminer mode choice for builders and combat players image"
 caption="Pick the mode based on what you need next: instruction, creative control, or enemy pressure."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player type</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Start here</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Reason</th>
 </tr>
 </thead>
 <tbody>
 {playerRows.map(([type, mode, reason]) => (
 <tr key={type} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{type}</td>
 <td className="px-4 py-3 text-muted-foreground">{mode}</td>
 <td className="px-4 py-3 text-muted-foreground">{reason}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>How Modes Connect to the Rest of the Guide</h2>
 <p>
 Campaign should feed your first practical decisions: how to build
 small, where mining bottlenecks appear, and when defenses become
 necessary. Once the basics are clear, Sandbox becomes a place to test
 layouts from the{" "}
 <Link href="/games/starminer/mining-logistics">mining logistics guide</Link>{" "}
 and ship roles from the{" "}
 <Link href="/games/starminer/ship-building">ship building guide</Link>
 . Survival is where the{" "}
 <Link href="/games/starminer/heat-aliens-defense">
 heat and defense guide
 </Link>{" "}
 becomes the main reference.
 </p>
 <p>
 Because all three modes will be refined during Early Access, players
 should also check the{" "}
 <Link href="/games/starminer/release-date">release status page</Link>{" "}
 and the{" "}
 <Link href="/games/starminer/is-it-worth-it">worth-it guide</Link>{" "}
 before treating launch-window balance as final.
 </p>
 </section>
 </StarminerArticle>
 );
}
