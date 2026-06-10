import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage } from '@/components/article-media';
import { BlufBox, RelatedGuides, SearchAnswerPanel, SourceCheckTable } from '@/components/guide-blocks';
import { MimicDetector } from '@/components/tools/mimic-detector';
import { ChoiceImpactFilter } from '@/components/tools/choice-impact-filter';

export const metadata: Metadata = {
 title: 'Directive 8020 All Choices & Consequences - Decision Map',
 description:
 'Directive 8020 choices and consequences guide: how to read major decisions, mimic trust checks, relationship changes, Story Tree branches, and Turning Points.',
 alternates: {
 canonical: '/directive-8020-choices-consequences',
 },
};

const faqs = [
 {
 question: 'Do all choices matter in Directive 8020?',
 answer:
 'Not every dialogue line will create a major branch, but Directive 8020 is built around meaningful choices, character survival, relationships, mimic trust, and Story Tree branches. Track timed decisions, separation choices, accusations, and rescue decisions first.',
 },
 {
 question: 'Why do some Directive 8020 choices feel like flavor text?',
 answer:
 'Some short dialogue choices mainly adjust tone or relationship texture. The choices that usually matter most are tied to Destinies, trust, separation, QTEs, stealth, evidence, and finale conditions.',
 },
 {
 question: 'Can I undo a choice in Directive 8020?',
 answer:
 'Yes. Directive 8020 introduces Turning Points in the Story Tree, letting players revisit key decisions, explore hidden paths, and change character fates without always replaying the full game.',
 },
 {
 question: 'Which choices are most dangerous?',
 answer:
 'The most dangerous choices are trust decisions after a character has been isolated, timed QTE or stealth decisions, accusations without enough evidence, and choices that split the crew before the mimic is understood.',
 },
 {
 question: 'Should I choose fast or careful options?',
 answer:
 'Choose fast only when the game presents immediate physical danger. If there is no active timer or threat, careful evidence gathering and communication are usually safer for survival and best-ending routes.',
 },
];

const decisionTypes = [
 {
 type: 'Trust choice',
 signal: 'A character asks to be believed, followed, rescued, or left alone.',
 risk: 'The person may be the mimic, or the choice may isolate another survivor.',
 bestPractice: 'Verify identity through memory, witnesses, evidence, or group communication before committing.',
 },
 {
 type: 'Relationship choice',
 signal: 'Dialogue changes tone between crew members or creates blame.',
 risk: 'A damaged relationship can affect whether a character helps later.',
 bestPractice: 'Choose calm, practical lines unless suspicion is backed by evidence.',
 },
 {
 type: 'Action choice',
 signal: 'The game asks you to run, hide, attack, help, or abandon someone.',
 risk: 'Immediate injury, death, lost equipment, or route closure.',
 bestPractice: 'Prioritize survival, group visibility, and avoiding unnecessary separation.',
 },
 {
 type: 'Evidence choice',
 signal: 'Optional exploration, logs, objects, or environmental clues appear.',
 risk: 'Missing evidence can remove safer options in later trust checks.',
 bestPractice: 'Explore before advancing whenever the scene is not under direct threat.',
 },
];

const redditDemandRows = [
 ['Do choices matter?', 'Yes. Critical decisions like system shutdowns (Ep 2) or buckling in during a crash (Ep 3) directly determine who lives or dies.'],
 ['Until Dawn comparison', 'Like Until Dawn, character deaths can be reversed, but here you use the Story Tree Turning Points to rewind instead of starting over.'],
 ['Relationship changes', 'Dialogue options affect relationship traits (e.g. Loyal, Playful) which unlock or lock out specific rescue options in later scenes.'],
 ['Destinies', 'Character Destinies are high-tier traits that dictate how crew members respond to threat triggers in Episode 8.'],
 ['Failed QTEs', 'Action failures and stealth detection mistakes are treated as choice consequences and are the primary causes of death.'],
];

const transcriptChoiceExamples = [
 ['Disable Landing Computer', 'Sacrifice navigation coordinates at engineering console', 'Keeps ship Fire Control active, making it possible to save Mitchell in Ep 5.', 'Subsystem choice'],
 ['Stay Seated & Buckle In', 'Stafford cabin depressurization event', 'Stafford survives the crash impact; refusing to buckle in leads to his instant death.', 'Survival choice'],
 ['Lower Weapon / Stand Down', 'Stafford pointing rifle at Williams standoff', 'Allows bio-scanners to confirm Williams is human, preserving his life.', 'Confrontation choice'],
 ['Test Eisele & Pick Newcomer', 'Biometric clone verification scene', 'Correctly identifies the real Eisele; selecting the clone kills the real Eisele.', 'Mimic test'],
 ['Take Williams with you', 'Airlock shuttle launch prep decision', 'Williams escapes on the shuttle; leaving him behind results in his death.', 'Finale choice'],
];

const sourceRows = [
 {
 claim: 'Distress signal vs warning is a finale route variable.',
 source: 'Full-game transcript route notes',
 status: 'verified' as const,
 href: '/directive-8020-all-endings',
 note: 'Use for ending-choice grouping; distress calls trigger Beacon epilogue variants.',
 },
 {
 claim: 'Lowering your weapon saves Williams during the Episode 6 standoff.',
 source: 'In-game route testing',
 status: 'verified' as const,
 href: '/directive-8020-walkthrough',
 note: 'Williams is verified human; shooting him fails the Everyone Lives playthrough.',
 },
 {
 claim: 'Destinies and relationship states should be tracked separately from flavor dialogue.',
 source: 'Story Tree / route testing method',
 status: 'verified' as const,
 href: '/directive-8020-turning-points-story-tree',
 note: 'Use this as the canonical choice-mapping method for all choices, paths, and consequences.',
 },
];

const bestChoiceRows = [
 ['Disable Landing Computer', 'Disable this subsystem in Episode 2 to keep ship sprinkler systems powered.', 'Allows saving Mitchell from reactor fire later.'],
 ['Stay Seated and Buckle In', 'Succeed at the buckle prompts when cabin pressure fails in Episode 3.', 'Ensures Stafford survives cockpit crash landing.'],
 ['Test & Select Newcomer', 'Select Test on Eisele in Episode 6, then point to the second arriving person.', 'Keeps Eisele alive and exposes the alien mimic.'],
 ['Help Stafford & QTEs', 'Choose to help Stafford when he falls in Episode 8 and pass the button mash prompts.', 'Prevents the monster from capturing and killing Stafford.'],
];

const searchIntentRows = [
 {
 query: 'Do choices matter?',
 answer: 'Yes, but prioritize Destinies, trust checks, separation, QTEs, stealth, evidence, and finale choices over small flavor dialogue.',
 href: '#choice-logic',
 label: 'Quick answer',
 },
 {
 query: 'Best choices',
 answer: 'Choose evidence, group visibility, identity verification, and calm relationship repair unless the scene is under immediate physical threat.',
 href: '#best-choices',
 label: 'Best route',
 },
 {
 query: 'All choices and consequences',
 answer: 'Map each major decision by scene, choice type, immediate result, long-term route effect, and nearest Turning Point.',
 href: '#choice-examples',
 label: 'Decision map',
 },
 {
 query: 'Mimic trust decisions',
 answer: 'Do not trust a returned or isolated character until memory, witness, scanner, or evidence context supports them.',
 href: '#mimic-choice-logic',
 label: 'Mimic',
 },
 {
 query: 'Can I undo a choice?',
 answer: 'Use Turning Points to revisit major branches, but change one variable at a time so the consequence is clear.',
 href: '#choice-mapping',
 label: 'Story Tree',
 },
];

const jumpLinks = [
 { href: '#choice-logic', label: 'Do choices matter?' },
 { href: '#best-choices', label: 'Best choices' },
 { href: '#choice-examples', label: 'Exact examples' },
 { href: '#mimic-choice-logic', label: 'Mimic logic' },
 { href: '#choice-mapping', label: 'Story Tree' },
 { href: '/directive-8020-all-endings', label: 'Endings' },
];

export default function ChoicesConsequencesPage() {
 return (
 <>
 <JsonLd
 data={generateArticleSchema({
 title: 'Directive 8020 All Choices & Consequences - Decision Map',
 description:
 'Directive 8020 choices and consequences guide with mimic trust checks, relationship logic, Story Tree branches, and Turning Points strategy.',
 url: '/directive-8020-choices-consequences',
 datePublished: '2026-05-12',
 dateModified: '2026-05-18',
 imageUrl: '/d8020-screenshot-04.jpg',
 })}
 />
 <JsonLd data={generateFAQSchema(faqs)} />

 <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
 <Breadcrumb items={[{ label: 'Choices & Consequences' }]} />
 <PageHero src="/d8020-screenshot-04.jpg" alt="Directive 8020 official ship interior decision scene" />

 <h1 className="mb-4 text-[42px] font-bold leading-[1.08] tracking-[-1.39px] text-foreground sm:text-[54px]">
 Directive 8020: All Choices &amp; Consequences
 </h1>
 <p className="text-lg text-muted-foreground leading-relaxed mb-8">
 Directive 8020 choices are dangerous because the obvious human answer
 may be the wrong survival answer. This guide explains how to identify
 major decisions, what consequences to track, and how to use the Story
 Tree to build a complete decision map.
 </p>

 <SearchAnswerPanel
 title="Do Directive 8020 choices really matter?"
 answer="Yes. The choices worth tracking are not every line of dialogue; they are the decisions that affect trust, separation, evidence, QTEs, stealth, Destinies, deaths, and finale conditions."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <BlufBox>
 <p>
 <strong>Short answer:</strong> choices do matter in Directive 8020,
 but the important ones are not always ordinary dialogue lines.
 Prioritize Destinies, trust checks, separation decisions, QTEs,
 stealth outcomes, evidence, and finale choices.
 </p>
 </BlufBox>

 <ChoiceImpactFilter />

 <div className="prose-game">
 <h2 id="choice-logic">Directive 8020 Choices and Consequences: What Matters?</h2>
 <p>
 This is the biggest post-launch community question. The practical
 answer is yes, but with a caveat: Directive 8020 has both small
 flavor choices and route-changing choices. A short conversation
 option may only adjust tone, while a Destiny, trust check, failed
 QTE, stealth result, or separation choice can change deaths,
 relationships, locked branches, and endings.
 </p>
 </div>

 <div className="rounded-lg border border-border bg-white overflow-hidden my-6">
 <table className="w-full text-sm">
 <tbody>
 {redditDemandRows.map(([question, answer]) => (
 <tr key={question} className="border-b border-border last:border-0">
 <td className="px-4 py-3 text-foreground font-medium w-44">{question}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <SourceCheckTable title="High-Intent Choice Source Check" rows={sourceRows} />

 <div className="prose-game">
 <h2 id="choice-examples">Concrete Choice Examples from the Full-Game Transcript</h2>
 <p>
 The transcript gives useful route examples without needing to copy
 dialogue. Use these as categories when you decide whether a choice
 is flavor text, a trust branch, a rescue branch, or an ending
 condition.
 </p>
 </div>

 <div className="rounded-lg border border-border bg-white overflow-hidden my-6">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Scene</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What happens</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player action</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Choice type</th>
 </tr>
 </thead>
 <tbody>
 {transcriptChoiceExamples.map(([scene, whatHappens, action, type]) => (
 <tr key={scene} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{scene}</td>
 <td className="px-4 py-3 text-muted-foreground">{whatHappens}</td>
 <td className="px-4 py-3 text-muted-foreground">{action}</td>
 <td className="px-4 py-3 text-muted-foreground">{type}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2 id="best-choices">Best Directive 8020 Choices for a Safer First Route</h2>
 <p>
 There is no universal good dialogue button, but the safest route
 pattern is consistent: gather evidence, avoid needless isolation,
 verify identities, and keep relationships functional before the
 finale. Use these examples when the game asks for a fast decision.
 </p>
 </div>

 <div className="rounded-lg border border-border bg-white overflow-hidden my-6">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Decision type</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best first-route habit</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
 </tr>
 </thead>
 <tbody>
 {bestChoiceRows.map(([decision, habit, reason]) => (
 <tr key={decision} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{decision}</td>
 <td className="px-4 py-3 text-muted-foreground">{habit}</td>
 <td className="px-4 py-3 text-muted-foreground">{reason}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2>How to Tell If a Choice Matters</h2>
 <p>
 Major choices in Directive 8020 usually involve one of four things:
 trust, separation, evidence, or physical danger. A harmless line of
 dialogue may only shift tone, but a timed decision near an isolated
 character can change a route, close a branch, or set up a later
 death.
 </p>
 </div>

 <div className="space-y-4 my-8">
 {decisionTypes.map((item) => (
 <section key={item.type} className="rounded-lg border border-border bg-white p-5">
 <h2 className="text-lg font-bold text-foreground mb-2">{item.type}</h2>
 <dl className="grid gap-3 text-sm sm:grid-cols-3">
 <div>
 <dt className="text-muted-foreground mb-1">Signal</dt>
 <dd className="text-foreground leading-relaxed">{item.signal}</dd>
 </div>
 <div>
 <dt className="text-muted-foreground mb-1">Risk</dt>
 <dd className="text-foreground leading-relaxed">{item.risk}</dd>
 </div>
 <div>
 <dt className="text-muted-foreground mb-1">Best practice</dt>
 <dd className="text-foreground leading-relaxed">{item.bestPractice}</dd>
 </div>
 </dl>
 </section>
 ))}
 </div>

 <div className="prose-game">
 <h2 id="mimic-choice-logic">Mimic Choice Logic: Who Can You Trust?</h2>
 <p>
 In a normal branching drama, helping a frightened ally is usually a
 positive action. In Directive 8020, that same action can be a trap.
 The alien organism can imitate its prey, so the game&apos;s most
 important decisions are likely to ask: is this person really who
 they claim to be?
 </p>

 <ArticleImage
 src="/d8020-screenshot-05.jpg"
 alt="Directive 8020 mimic choice consequence screenshot"
 caption="Directive 8020 choice consequences revolve around trust: every isolated return, contradiction, and urgent rescue request can become a branch."
 />
 <ul>
 <li>If a character was off-screen, ask how they returned.</li>
 <li>If someone avoids details, treat that as evidence, not flavor text.</li>
 <li>If a person wants you alone, look for a group-safe alternative.</li>
 <li>If two accounts conflict, preserve both witnesses until you can verify.</li>
 </ul>
 </div>

 <MimicDetector />

 <div className="prose-game">

 <h2>Consequences Worth Tracking</h2>
 <p>
 A consequence is not always a death. Many important consequences are
 invisible until later. Use the Story Tree and your own notes to
 record these outcomes as soon as they happen.
 </p>
 <ul>
 <li><strong>Survival state:</strong> alive, injured, separated, captured, or missing.</li>
 <li><strong>Relationship state:</strong> trust gained, trust lost, blame created, rescue promised.</li>
 <li><strong>Information state:</strong> clue found, clue missed, identity verified, contradiction noticed.</li>
 <li><strong>Route state:</strong> new branch opened, branch locked, Turning Point discovered.</li>
 <li><strong>Resource state:</strong> weapon, tool, access card, communication route, or ship system changed.</li>
 </ul>

 <h2 id="choice-mapping">Choice Mapping Method</h2>
 <p>
 To build a real all-choices guide, do not replay randomly. Change
 one variable at a time. If you change a trust choice and also fail a
 QTE, you will not know which action caused the new outcome.
 </p>
 <ol>
 <li>Play a scene once and record the choice, timer, characters present, and immediate result.</li>
 <li>Check the Story Tree for a Turning Point or locked branch.</li>
 <li>Replay from that Turning Point and choose the opposite option.</li>
 <li>Keep QTE performance and exploration the same where possible.</li>
 <li>Compare the end-of-scene and end-of-chapter results.</li>
 </ol>

 <h2>Spoiler-Safe First Run Advice</h2>
 <p>
 If this is your first playthrough, avoid reading full consequence
 lists scene by scene. Instead, use these rules to make better
 decisions without ruining the story:
 </p>
 <ul>
 <li>Do not trust isolated returns without verification.</li>
 <li>Explore rooms before advancing if no threat is active.</li>
 <li>Keep relationships stable unless evidence demands confrontation.</li>
 <li>Use stealth and observation before aggressive action.</li>
 <li>After a death, inspect the Story Tree before assuming the final choice caused it.</li>
 </ul>
 </div>

 <RelatedGuides
 guides={[
 {
 href: '/directive-8020-how-to-save-everyone',
 title: 'How to Save Everyone',
 description: 'Use route-changing choices to protect every major survivor.',
 },
 {
 href: '/directive-8020-all-endings',
 title: 'All Endings',
 description: 'Use choice branches to test finale outcomes and ending explanations.',
 },
 {
 href: '/directive-8020-mimic-detection-survival-guide',
 title: 'Mimic Detection',
 description: 'Rank suspicion clues before trusting an isolated crew member.',
 },
 {
 href: '/directive-8020-walkthrough',
 title: 'Full Walkthrough',
 description: 'Place every major choice inside the correct episode route.',
 },
 {
 href: '/directive-8020-turning-points-story-tree',
 title: 'Turning Points & Story Tree',
 description: 'Replay one variable at a time to confirm consequences.',
 },
 ]}
 />

 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
