import { ArticleImage } from "@/components/article-media";
import { BlufBox } from "@/components/guide-blocks";
import { ThickAsThievesArticle } from "@/components/thick-as-thieves-article";
import {
 createThickAsThievesMetadata,
 thickAsThievesImages,
} from "@/lib/thick-as-thieves";

const title = "Thick As Thieves Co-op: How Many Players, Split Screen & Crossplay";
const description =
 "Thick As Thieves co-op guide: how many players, split screen status, couch co-op, local co-op, crossplay, online partner co-op, solo play, and what is confirmed versus unconfirmed.";
const canonical = "/games/thick-as-thieves/solo-coop";

export const metadata = createThickAsThievesMetadata({
 title,
 description,
 canonical,
 image: thickAsThievesImages.soloCoop,
});

const faqs = [
 {
 question: "How many players is Thick As Thieves?",
 answer:
 "Thick As Thieves supports solo play and two-player online co-op. The official FAQ says you can play solo or with a partner in crime.",
 },
 {
 question: "Is Thick As Thieves split screen?",
 answer:
 "No. Split-screen is not confirmed in current public materials. Co-op is online only.",
 },
 {
 question: "Is Thick As Thieves couch co-op?",
 answer:
 "No. Couch co-op is not confirmed. The official wording focuses on online co-op with a partner.",
 },
 {
 question: "Is Thick As Thieves crossplay?",
 answer:
 "Crossplay is not confirmed in current public materials. Do not assume cross-platform co-op.",
 },
 {
 question: "Is Thick As Thieves local co-op?",
 answer:
 "No. Local co-op is not confirmed. Public materials focus on online co-op with one partner.",
 },
 {
 question: "Can Thick As Thieves be played solo?",
 answer: "Yes. The official FAQ says Thick As Thieves can be played solo.",
 },
 {
 question: "Does Thick As Thieves have online co-op?",
 answer: "Yes. Steam lists co-op and online co-op for Thick As Thieves.",
 },
 {
 question: "Can I play Thick As Thieves co-op on PS5?",
 answer:
 "No PS5 version is confirmed in current public materials, so PS5 co-op is not a confirmed launch option.",
 },
];

const coOpRows = [
 [
 "Solo learning",
 "Best for understanding routes, alert states, and gear timing without another player adding noise.",
 ],
 [
 "Partner scouting",
 "One player watches patrols, exits, and timing while the other commits to the objective.",
 ],
 [
 "Host test",
 "Run one short contract first to verify invites, progress ownership, reconnects, and cloud sync.",
 ],
 [
 "Communication",
 "Use short callouts for entry, wait, abort, and exit instead of narrating every movement.",
 ],
 [
 "Open questions",
 "Public matchmaking, host migration, local co-op, console co-op, and cross-play are not confirmed.",
 ],
];

export default function ThickAsThievesSoloCoopPage() {
 return (
 <ThickAsThievesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Solo & Co-op"
 heroImage={thickAsThievesImages.soloCoop}
 heroAlt="Thick As Thieves solo and co-op guide image"
 faqs={faqs}
 >
 <BlufBox title="Co-op Answer">
 <p>
 <strong>Thick As Thieves supports solo play and online co-op.</strong>{" "}
 Steam lists co-op and online co-op, while the official FAQ frames
 co-op as playing with one partner in crime. Do not assume
 local co-op, couch co-op, split-screen, PS5 co-op, cross-play, or
 dedicated servers unless official materials add them.
 </p>
 </BlufBox>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Feature</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current answer</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Confidence</th>
 </tr>
 </thead>
 <tbody>
 {[
 ['Solo play', 'Confirmed. Official FAQ says the game can be played solo.', 'Verified'],
 ['Online co-op', 'Confirmed. Steam lists co-op and online co-op.', 'Verified'],
 ['Player count', 'Safest answer: two-player partner co-op based on official FAQ wording.', 'Working'],
 ['Split screen', 'Not confirmed in current public materials.', 'Not confirmed'],
 ['Couch co-op', 'Not confirmed. Official wording focuses on online co-op.', 'Not confirmed'],
 ['Local co-op', 'Not confirmed. Public materials focus on online co-op.', 'Not confirmed'],
 ['Crossplay', 'Not confirmed in current public materials.', 'Not confirmed'],
 ['PS5 co-op', 'No PS5 version is confirmed.', 'Not confirmed'],
 ].map(([feature, answer, confidence]) => (
 <tr key={feature} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{feature}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 <td className="px-4 py-3 text-muted-foreground">{confidence}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Solo Versus Co-op</h2>
 <ArticleImage
 src={thickAsThievesImages.soloCoop}
 alt="Thick As Thieves solo versus co-op visual"
 caption="Solo is cleaner for learning; co-op is stronger when players divide information and execution instead of duplicating movement."
 />
 <p>
 Solo play should be the best first choice if you want to learn how
 contracts behave. Co-op should be the best first choice if you want
 social route planning and can communicate clearly. A partner can cover
 risk, but a second player can also make stealth messier if both people
 chase loot without a shared exit plan.
 </p>

 <h2>Co-op Launch Checklist</h2>
 <ArticleImage
 src={thickAsThievesImages.screenshot6}
 alt="Thick As Thieves co-op launch checklist image"
 caption="Before a full co-op session, verify host rules, reconnect behavior, voice chat, and whether both players keep progress."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">
 Topic
 </th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">
 Player guidance
 </th>
 </tr>
 </thead>
 <tbody>
 {coOpRows.map(([topic, guidance]) => (
 <tr
 key={topic}
 className="border-b border-border last:border-0"
 >
 <th
 scope="row"
 className="px-4 py-3 text-left font-semibold text-foreground"
 >
 {topic}
 </th>
 <td className="px-4 py-3 text-muted-foreground">{guidance}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </ThickAsThievesArticle>
 );
}
