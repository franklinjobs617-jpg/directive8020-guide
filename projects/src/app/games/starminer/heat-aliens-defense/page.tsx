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
  starminerDefenseRows,
  starminerImages,
  smHeatAliensActionRows,
  smHeatAliensJumpLinks,
  smHeatAliensSearchIntent,
  smHeatAliensSourceRows,
  smHeatAliensStatusItems,
} from "@/lib/starminer";

const title = "Starminer Heat, Aliens & Defense Guide: Threats, Weapons, Power & Survival";
const description =
 "Starminer heat and defense guide covering heat signature, alien detection, pirates, weapon placement, energy distribution, warship support, and Survival mode preparation.";
const canonical = "/games/starminer/heat-aliens-defense";

export const metadata = createStarminerMetadata({
 title,
 description,
 canonical,
 image: starminerImages.combat,
});

const faqs = [
 {
 question: "What is heat signature in Starminer?",
 answer:
 "Steam says the more you mine, build, and expand, the higher your heat signature becomes. Once it reaches critical levels, aliens can detect you.",
 },
 {
 question: "Are aliens confirmed in Starminer?",
 answer:
 "Yes. Steam explicitly describes aliens detecting you when heat reaches critical levels. The official site also mentions alien forces and pirates testing your defenses.",
 },
 {
 question: "How should I defend a Starminer station?",
 answer:
 "Protect power, storage, refining, production, and approach routes. Do not place weapons only on the visible outer edge if key systems remain exposed.",
 },
 {
 question: "Why does energy distribution matter in defense?",
 answer:
 "Weapons and defenses need power. A station can look armed but still fail if production and weapons compete for energy during an attack.",
 },
 {
 question: "When should I try Survival mode?",
 answer:
 "Try Survival after you understand mining, power, weapon placement, repair support, and heat pressure. It is designed around endless enemy waves.",
 },
];

const defensePlanRows = [
 ["Before expansion", "Confirm power reserve, storage, repair materials, and basic weapon coverage."],
 ["During mining growth", "Watch heat and add defenses before extraction outruns protection."],
 ["Before link gates", "Make sure the current sector can defend itself without constant emergency repairs."],
 ["Before Survival", "Test weapon coverage, energy distribution, and ship support in a normal save first."],
 ["After an attack", "Repair, identify the exposed system, and adjust layout before expanding again."],
];

export default function StarminerHeatDefensePage() {
 return (
 <StarminerArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Heat, Aliens & Defense"
 heroImage={starminerImages.combat}
 heroAlt="Starminer heat aliens and defense combat image"
 faqs={faqs}
 >
 <BlufBox title="Defense Rule">
 <p>
 <strong>In Starminer, expansion is also threat generation.</strong>{" "}
 Mining and building raise heat signature, and critical heat can bring
 alien attention. Defense planning belongs beside{" "}
 <Link href="/games/starminer/mining-logistics">mining logistics</Link>{" "}
 and <Link href="/games/starminer/ship-building">ship building</Link>,
 not after everything is already under attack.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Starminer Heat & Defense Quick Answer"
 answer="Heat signature rises with mining and expansion. Critical heat can trigger alien detection. Cover power, storage, refining, and approach routes. Plan energy distribution and test defense in a normal save before Survival waves."
 intentRows={smHeatAliensSearchIntent}
 jumpLinks={smHeatAliensJumpLinks}
 />

 <StatusPanel items={smHeatAliensStatusItems} />

 <section id="heat-anchor" className="prose-game">
 <h2>How Threat Pressure Works</h2>
 <ArticleImage
 src={starminerImages.combat}
 alt="Starminer alien defense and heat pressure image"
 caption="Heat turns economic growth into danger: the more you mine and build, the more important defenses, power reserves, and warship support become."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Defense topic</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player takeaway</th>
 </tr>
 </thead>
 <tbody>
 {starminerDefenseRows.map(([topic, takeaway]) => (
 <tr key={topic} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{topic}</td>
 <td className="px-4 py-3 text-muted-foreground">{takeaway}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Protect the Systems That Keep You Alive</h2>
 <ArticleImage
 src={starminerImages.station}
 alt="Starminer station defense priority image"
 caption="A defended station protects production, storage, power, routes, and repair capacity, not only the outside edge."
 />
 <p>
 New players often think defense means placing weapons wherever they
 fit. In a systems game, defense should protect the parts that keep the
 station alive. If power fails, weapons fail. If storage or refining is
 exposed, repairs become harder. If mining routes are unsafe, the
 station loses the materials it needs to recover.
 </p>
 <p>
 If you are still deciding what to build, use the{" "}
 <Link href="/games/starminer/ship-building">ship building guide</Link>
 . If the base cannot feed its defenses, return to{" "}
 <Link href="/games/starminer/mining-logistics">mining and logistics</Link>
 . If you want to pressure-test everything, read the{" "}
 <Link href="/games/starminer/game-modes">game modes guide</Link>{" "}
 before starting Survival.
 </p>
 </section>

 <section className="prose-game">
 <h2>Defense Timing Checklist</h2>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Moment</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Check this first</th>
 </tr>
 </thead>
 <tbody>
 {defensePlanRows.map(([moment, check]) => (
 <tr key={moment} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{moment}</td>
 <td className="px-4 py-3 text-muted-foreground">{check}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Defense Plan</h2>
 <ActionTable rows={smHeatAliensActionRows} />

 <SourceCheckTable title="Starminer Defense Sources" rows={smHeatAliensSourceRows} />
 </StarminerArticle>
 );
}
