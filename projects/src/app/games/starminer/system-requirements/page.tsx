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
  starminerMinimumSpecs,
  smSpecActionRows,
  smSpecJumpLinks,
  smSpecSearchIntent,
  smSpecSourceRows,
  smSpecStatusItems,
} from "@/lib/starminer";

const title = "Starminer System Requirements: Official Minimum PC Specs & Steam Deck Status";
const description =
 "Starminer system requirements guide with official minimum PC specs, missing recommended specs, DirectX 11, 7 GB storage, low-end cautions, and Steam Deck unknowns.";
const canonical = "/games/starminer/system-requirements";

export const metadata = createStarminerMetadata({
 title,
 description,
 canonical,
 image: starminerImages.hero,
});

const faqs = [
 {
 question: "What are the Starminer minimum system requirements?",
 answer:
 "Steam lists Windows 10 32-bit, Intel Core i3-10100 or AMD Ryzen 3 3100, 8 GB RAM, Nvidia GTX 1050 or AMD Radeon RX 560, DirectX 11, 7 GB storage, and a Windows compatible sound card.",
 },
 {
 question: "Does Starminer list recommended specs?",
 answer:
 "No. The current Steam listing provides minimum specs but does not list recommended specs.",
 },
 {
 question: "How much storage does Starminer need?",
 answer:
 "Steam lists 7 GB of available storage.",
 },
 {
 question: "Is Starminer Steam Deck Verified?",
 answer:
 "Steam Deck compatibility is not confirmed in the current store data. Treat Steam Deck support as unknown until Valve or the developer lists a compatibility result.",
 },
 {
 question: "Does Starminer require DirectX 12?",
 answer:
 "No. The official minimum requirements list DirectX 11.",
 },
];

const setupRows = [
 ["Old CPU or GPU", "Use the minimum spec as a floor, not a guarantee for large late-game stations."],
 ["8 GB RAM", "Close browsers and background apps before testing large builds or Survival pressure."],
 ["Low VRAM GPU", "Start with Campaign and small stations before judging performance in larger asteroid fields."],
 ["Steam Deck", "Wait for compatibility data instead of assuming it works from the Windows minimum spec."],
 ["Launch day", "Check patch notes and player reports before making final settings advice."],
];

export default function StarminerSystemRequirementsPage() {
 return (
 <StarminerArticle
 title={title}
 description={description}
 canonical={canonical}
 label="System Requirements"
 heroImage={starminerImages.hero}
 heroAlt="Starminer system requirements PC specs image"
 faqs={faqs}
 >
 <BlufBox title="Spec Answer">
 <p>
 <strong>
 Starminer has official minimum PC specs, but no recommended specs
 are listed yet.
 </strong>{" "}
 That means the safest path is to confirm your PC meets the minimum,
 start with a small Campaign save, then judge performance before
 building massive stations. Use the{" "}
 <Link href="/games/starminer/beginner-guide">beginner guide</Link> to
 avoid turning the first session into a stress test.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Starminer PC Specs Quick Answer"
 answer="Steam lists Windows 10 32-bit, i3-10100 / Ryzen 3 3100, 8 GB RAM, GTX 1050 / RX 560, DirectX 11, and 7 GB storage. No recommended tier is listed yet. Steam Deck compatibility is not confirmed by current store data."
 intentRows={smSpecSearchIntent}
 jumpLinks={smSpecJumpLinks}
 />

 <StatusPanel items={smSpecStatusItems} />

 <section id="spec-anchor" className="prose-game">
 <h2>Official Minimum PC Specs</h2>
 <ArticleImage
 src={starminerImages.hero}
 alt="Starminer official minimum PC requirements image"
 caption="Steam currently lists only minimum PC requirements. Do not treat missing recommended specs as a promise that every large station will run well on minimum hardware."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Component</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Official minimum</th>
 </tr>
 </thead>
 <tbody>
 {starminerMinimumSpecs.map(([component, spec]) => (
 <tr key={component} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{component}</td>
 <td className="px-4 py-3 text-muted-foreground">{spec}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>What the Missing Recommended Specs Mean</h2>
 <ArticleImage
 src={starminerImages.station}
 alt="Starminer station scale and performance caution image"
 caption="Starminer is built around scalable stations, ships, physics, mining, logistics, and real-time defense, so late-game performance may differ from a small starter save."
 />
 <p>
 A minimum spec tells you the intended entry floor, not the best setup
 for massive stations, heavy logistics, or Survival pressure. Starminer
 is a simulation sandbox with physics, mining, production chains, heat,
 and combat. Those systems can become more demanding as the save grows.
 Until recommended specs appear, avoid promising a specific framerate
 or Steam Deck experience.
 </p>
 <p>
 If your hardware is near the minimum, check the{" "}
 <Link href="/games/starminer/release-date">release status</Link>,
 start in Campaign, and test a compact station before moving into the{" "}
 <Link href="/games/starminer/ship-building">ship building</Link> or{" "}
 <Link href="/games/starminer/mining-logistics">logistics</Link> pages.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Situation</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Practical advice</th>
 </tr>
 </thead>
 <tbody>
 {setupRows.map(([situation, advice]) => (
 <tr key={situation} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{situation}</td>
 <td className="px-4 py-3 text-muted-foreground">{advice}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Spec Plan</h2>
 <ActionTable rows={smSpecActionRows} />

 <SourceCheckTable title="Starminer PC Spec Sources" rows={smSpecSourceRows} />
 </StarminerArticle>
 );
}
