import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { FAQSection } from "@/components/faq-section";
import {
 JsonLd,
 generateArticleSchema,
 generateFAQSchema,
} from "@/components/json-ld";
import { ArticleImage, VideoEmbed } from "@/components/article-media";
import {
 ActionTable,
 BlufBox,
 RelatedGuides,
 StatusPanel,
} from "@/components/guide-blocks";

export const metadata: Metadata = {
 title: "Directive 8020 Stealth Guide - Crouch, Hide & Survive",
 description:
 "Directive 8020 stealth guide: crouch-walking, sound discipline, hiding, pursuit routes, QTEs, mimic encounters, Dragnet tips, and how stealth affects survival.",
 alternates: {
 canonical: "/directive-8020-stealth-guide",
 },
};

const faqs = [
 {
 question: "Does Directive 8020 have stealth?",
 answer:
 "Yes. Official descriptions emphasize evading alien threats with stealth, reflexes, and improvised weapons. The exact stealth values should be verified in-game, but slow movement and cover are central survival habits.",
 },
 {
 question: "Should I crouch-walk in Directive 8020?",
 answer:
 "Use crouch-walking whenever a threat is nearby or a corridor is visually staged for pursuit. Until exact noise numbers are verified, assume sprinting is risky in stealth zones.",
 },
 {
 question: "Can stealth failures kill characters?",
 answer:
 "They can at least create route risk. Treat stealth failures like QTE failures: record the chapter, character, and Story Tree node so you can test whether the failure causes injury, death, or separation.",
 },
];

const stealthChecklist = [
 [
 "Movement",
 "Crouch-walk near threats; sprint only when the game clearly demands escape.",
 ],
 [
 "Line of sight",
 "Break sight around corners, equipment, doors, and ship structures.",
 ],
 [
 "Sound",
 "Avoid unnecessary movement in metal corridors and threat-heavy rooms.",
 ],
 [
 "Distractions",
 "If noisemakers or throwable objects appear, log where they spawn and what they affect.",
 ],
 [
 "Hiding",
 "Use cover before QTE panic starts; do not wait until the creature is already close.",
 ],
 [
 "Replay testing",
 "Keep QTE success consistent when testing stealth branch consequences.",
 ],
];

const stealthRows = [
 {
 step: "Enter threat zone",
 doThis: "Stop sprinting, crouch-walk, and identify cover before advancing.",
 why: "Movement and sight lines matter more than speed in corridor encounters.",
 },
 {
 step: "Hear or see threat",
 doThis: "Break line of sight first, then choose hiding or movement.",
 why: "Panic movement can create noisy routes and missed QTEs.",
 },
 {
 step: "Use distraction",
 doThis:
 "Only use throwable/noise tools after logging where they spawn and what they affect.",
 why: "Distraction behavior needs verification for route guides.",
 },
 {
 step: "After failure",
 doThis:
 "Record injury, death, separation, item loss, and nearest Turning Point.",
 why: "Stealth failures can have delayed consequences.",
 },
];

export default function StealthGuidePage() {
 return (
 <>
 <JsonLd
 data={generateArticleSchema({
 title: "Directive 8020 Stealth Guide - Crouch, Hide & Survive",
 description:
 "Directive 8020 stealth guide covering crouch-walking, hiding, sound discipline, QTEs, mimic encounters, Dragnet tips, and survival consequences.",
 url: "/directive-8020-stealth-guide",
 datePublished: "2026-05-12",
 dateModified: "2026-05-12",
 imageUrl: "/d8020-screenshot-07.jpg",
 })}
 />
 <JsonLd data={generateFAQSchema(faqs)} />

 <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
 <Breadcrumb items={[{ label: "Stealth Guide" }]} />
 <PageHero
 src="/d8020-screenshot-07.jpg"
 alt="Directive 8020 stealth guide corridor screenshot"
 />

 <h1 className="mb-4 text-[42px] font-bold leading-[1.08] tracking-[-1.39px] text-foreground sm:text-[54px]">
 Directive 8020 Stealth Guide
 </h1>
 <p className="text-lg text-muted-foreground leading-relaxed mb-8">
 Directive 8020 is not only dialogue and QTEs. Official descriptions
 emphasize stealth, evasion, improvised weapons, and reflexes. This
 page gives you a practical stealth framework for Dragnet-style routes
 and every dark corridor where noise or line of sight can matter.
 </p>

 <BlufBox>
 <p>
 <strong>Stealth is a survival system, not flavor.</strong> Move
 slowly in threat zones, break line of sight before reacting, and
 record whether failures cause injury, death, separation, or route
 changes. Exact noise values still need playthrough checks.
 </p>
 </BlufBox>

 <StatusPanel
 items={[
 {
 label: "Stealth presence",
 value:
 "Official descriptions mention stealth, evasion, reflexes, and improvised weapons.",
 status: "verified",
 },
 {
 label: "Noise values",
 value:
 "Exact percentages such as crouch-walk reduction need launch testing.",
 status: "needs-check",
 },
 {
 label: "Distraction tools",
 value:
 "Noisemaker/smoke behavior should be logged only after in-game confirmation.",
 status: "needs-check",
 },
 {
 label: "Guide method",
 value:
 "Movement, line of sight, QTEs, and Turning Points are ready tracking categories.",
 status: "working",
 },
 ]}
 />

 <VideoEmbed
 videoId="oeiMw0KD7w0"
 title="Directive 8020 gameplay trailer for stealth reference"
 caption="Use the gameplay trailer to study corridor spacing, pursuit framing, and the Story Tree context around stealth-heavy encounters."
 />

 <div className="prose-game">
 <h2>Core Stealth Rule</h2>
 <p>
 Until exact hidden values are verified in-game, use a conservative
 rule:{" "}
 <strong>
 slow movement, cover, and information are safer than speed
 </strong>
 . The mimic threat means a chase is not always just a chase; it can
 also be the result of a bad trust choice or a missed clue.
 </p>

 <h2>Stealth Action Plan</h2>
 <ActionTable rows={stealthRows} />
 </div>

 <div className="rounded-lg border border-border bg-white overflow-hidden my-6">
 <table className="w-full text-sm">
 <tbody>
 {stealthChecklist.map(([label, value]) => (
 <tr
 key={label}
 className="border-b border-border last:border-0"
 >
 <td className="px-4 py-3 text-foreground font-medium w-36">
 {label}
 </td>
 <td className="px-4 py-3 text-muted-foreground">{value}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2>How to Survive Corridor Encounters</h2>
 <p>
 Dark ship corridors are designed to compress decisions. You have
 fewer escape angles, louder surfaces, and more blind corners. Before
 moving forward, identify the nearest cover, the last safe doorway,
 and whether your current character has been separated from the crew.
 </p>
 <ul>
 <li>Pause movement before turning blind corners.</li>
 <li>
 Use camera angles to check whether a corridor is staged for
 pursuit.
 </li>
 <li>
 Do not sprint after a noise unless the game forces an escape.
 </li>
 <li>
 Record if a stealth failure causes injury, item loss, separation,
 or death.
 </li>
 </ul>

 <ArticleImage
 src="/d8020-screenshot-05.jpg"
 alt="Directive 8020 mimic stealth threat"
 caption="Stealth and mimic suspicion overlap: the safest route may depend on both movement and whether you trusted the right crew member."
 />

 <h2>Stealth and Turning Points</h2>
 <p>
 When testing stealth consequences, change only one variable at a
 time. If you sprint, miss a QTE, and choose a different dialogue
 option in the same replay, you will not know what caused the branch.
 </p>
 </div>

 <RelatedGuides
 guides={[
 {
 href: "/directive-8020-walkthrough",
 title: "Full Walkthrough",
 description: "Use stealth notes inside each episode route.",
 },
 {
 href: "/directive-8020-death-scenes-guide",
 title: "Death Scenes",
 description:
 "Separate stealth deaths from QTE and choice deaths.",
 },
 {
 href: "/directive-8020-how-to-save-everyone",
 title: "Save Everyone",
 description:
 "Avoid stealth failures that create delayed survivor risk.",
 },
 {
 href: "/directive-8020-choices-consequences",
 title: "Choices & Consequences",
 description:
 "Track whether stealth outcomes alter later decisions.",
 },
 ]}
 />

 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
