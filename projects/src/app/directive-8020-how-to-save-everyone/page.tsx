import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, RelatedGuides, SourceCheckTable } from '@/components/guide-blocks';

export const metadata: Metadata = {
 title: 'Directive 8020 Save Everyone Guide - Keep All Crew Alive',
 description:
 'Directive 8020 save everyone guide: how to keep Young, Stafford, Eisele, Cooper, and Cernan alive with mimic trust checks, QTEs, stealth, relationships, and Turning Points recovery.',
 alternates: {
 canonical: '/directive-8020-how-to-save-everyone',
 },
};

const faqs = [
 {
 question: 'Is it possible to save everyone in Directive 8020?',
 answer:
 'Yes. Directive 8020 is built around variable survival outcomes, and Turning Points let you revisit deaths and repair a route through the Story Tree.',
 },
 {
 question: 'Who do you need to keep alive in Directive 8020?',
 answer:
 'Track Young, Stafford, Eisele, Cooper, and Cernan as the main crew survival targets, then record supporting-character deaths separately.',
 },
 {
 question: 'Can NPC characters die in Directive 8020?',
 answer:
 'Yes. Some non-playable or supporting characters can die, and those deaths may shape scenes even if they are not part of the main playable survivor route.',
 },
 {
 question: 'What is the biggest survival risk in Directive 8020?',
 answer:
 'The mimic is the biggest new risk because trust decisions are no longer simple relationship choices. A crew member who looks safe may be an alien copy, so verification matters before rescue, pursuit, or separation choices.',
 },
 {
 question: 'Should I rewind with Turning Points immediately after a death?',
 answer:
 'If you are trying to save everyone, yes, but rewind to the earliest relevant Turning Point. A death may be caused by an earlier relationship or evidence choice, not only the final QTE.',
 },
 {
 question: 'Do failed QTEs matter for saving everyone?',
 answer:
 'Yes. In Supermassive games, failed QTEs can injure, separate, or kill characters. Treat every QTE and stealth sequence as survival-critical until proven otherwise.',
 },
];

const survivalRules = [
 'Keep the group together unless the game gives a clear reason to split.',
 'Verify isolated crew members before trusting or following them.',
 'Choose evidence and communication over speed when no immediate timer is present.',
 'Avoid aggressive relationship damage between characters who may need to rescue each other.',
 'Succeed at QTEs, stealth prompts, and combat reactions.',
 'Use Turning Points to test one changed decision at a time.',
];

const quickSaveRows = [
 ['Young', 'Keep leadership choices calm, preserve crew trust, and avoid rushing unverified rescue or pursuit scenes.', 'Young is a major decision anchor, so relationship damage and failed action prompts can affect later routes.'],
 ['Stafford', 'Protect command-route decisions, avoid needless conflict, and treat high-pressure QTE scenes as survival-critical.', 'Stafford can influence group control, rescue timing, and whether the crew stays coordinated.'],
 ['Eisele', 'Verify identity before trust choices, especially after isolation or scenes involving duplicate information.', 'Eisele is tied to technical and evidence-heavy route checks where false trust can be dangerous.'],
 ['Cooper', 'Avoid injuries in stealth, chase, and rescue scenes; keep medical information available to the group.', 'Cooper matters for injury outcomes, rescue logic, and later route stability.'],
 ['Cernan', 'Keep repair routes, access decisions, and engineering support intact before late-game pressure rises.', 'Cernan can affect mechanical access, recovery options, and crew support branches.'],
];

const survivorRows = [
 { step: '1. Before a split', doThis: 'Check who is going alone, who can witness the route, and whether communication remains open.', why: 'Most save-everyone failures start before the death scene, when a character becomes isolated or unverifiable.' },
 { step: '2. During a trust scene', doThis: 'Choose evidence, identity checks, and group confirmation before loyalty or panic.', why: 'The mimic threat turns ordinary rescue choices into proof checks.' },
 { step: '3. During action scenes', doThis: 'Treat QTEs, stealth prompts, chases, and improvised combat as survival-critical.', why: 'A failed prompt can create injury, separation, or a later death condition.' },
 { step: '4. After any injury', doThis: 'Record who was injured, what item or clue was lost, and which relationship changed.', why: 'Delayed deaths can come from a route state that looked minor when it happened.' },
 { step: '5. After a death', doThis: 'Replay from the earliest relevant Turning Point and change one cause at a time.', why: 'Changing too many choices at once makes it hard to identify the actual survival condition.' },
];

const routeMilestones = [
 ['Opening chapters', 'Build stable relationships and avoid reckless blame before the mimic threat fully dominates decisions.'],
 ['First major danger route', 'Prioritize evidence, stealth success, and scanner awareness before the route opens wider.'],
 ['Mid-game audit', 'Check everyone alive, every clue found, and every unresolved suspicion before fallout locks in.'],
 ['Identity-pressure scenes', 'Treat survivor-dependent scenes carefully because who is alive can change what you can save next.'],
 ['Late-game decisions', 'Handle 50-50 style choices one at a time and preserve mission-critical information.'],
 ['Ending route', 'Use the everyone-lives base route, then branch for alternate endings only after the crew survives.'],
];

const sourceRows = [
 {
 claim: 'Directive 8020 is a branching, choice-driven survival game with a Steam achievement list tied to route outcomes.',
 source: 'Steam store',
 status: 'verified' as const,
 href: 'https://store.steampowered.com/app/2255370/Directive_8020/',
 note: 'Use for platform availability and the current achievement list; exact everyone-lives conditions still require route testing.',
 },
 {
 claim: 'Trust, separation, evidence, and QTE choices are the categories that actually change survival outcomes.',
 source: 'Choices & Consequences (this site)',
 status: 'verified' as const,
 href: '/directive-8020-choices-consequences',
 note: 'Cross-reference the full choice-type breakdown before treating any single decision as the only cause of a death.',
 },
];

export default function SaveEveryonePage() {
 return (
 <>
 <JsonLd
 data={generateArticleSchema({
 title: 'Directive 8020 Save Everyone Guide - Keep All Crew Alive',
 description:
 'Directive 8020 survival guide covering how to keep Young, Stafford, Eisele, Cooper, and Cernan alive with mimic trust checks, QTEs, stealth, relationships, and Turning Points recovery.',
 url: '/directive-8020-how-to-save-everyone',
 datePublished: '2026-05-12',
 dateModified: '2026-06-18',
 imageUrl: '/d8020-screenshot-05.jpg',
 })}
 />
 <JsonLd data={generateFAQSchema(faqs)} />

 <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
 <Breadcrumb items={[{ label: 'How to Save Everyone' }]} />
 <PageHero src="/d8020-screenshot-05.jpg" alt="Directive 8020 official mimic horror scene screenshot" />

 <h1 className="mb-4 text-[42px] font-bold leading-[1.08] tracking-[-1.39px] text-foreground sm:text-[54px]">
 Directive 8020 Save Everyone Guide
 </h1>
 <p className="text-lg text-muted-foreground leading-relaxed mb-8">
 To save everyone in Directive 8020, track Young, Stafford, Eisele,
 Cooper, and Cernan separately, then protect the route with mimic
 verification, group safety, relationship control, clean QTEs, stealth
 discipline, and careful Turning Points replay.
 </p>
 <p className="mb-8 text-sm font-medium text-muted-foreground">
 Last updated: June 18, 2026.
 </p>

 <BlufBox>
 <p>
 <strong>To save everyone, protect both people and information.</strong>
 Keep Young, Eisele, Cernan, Stafford, and Cooper alive by verifying
 isolated crew members, passing QTEs, preserving relationships,
 collecting evidence before accusations, and rewinding to the
 earliest relevant Turning Point after any death.
 </p>
 </BlufBox>

 <div className="my-6 grid gap-3 rounded-lg border border-border bg-mist p-4 sm:grid-cols-2">
 <div>
 <h2 className="text-sm font-bold text-foreground">Main survivor list</h2>
 <p className="mt-1 text-sm text-muted-foreground">
 Track Young, Stafford, Eisele, Cooper, and Cernan first, then record supporting-character outcomes separately.
 </p>
 </div>
 <div>
 <h2 className="text-sm font-bold text-foreground">Best recovery tool</h2>
 <p className="mt-1 text-sm text-muted-foreground">
 Use Turning Points to replay the earliest likely cause, not only the final death scene.
 </p>
 </div>
 </div>

 <div className="prose-game">
 <h2>Quick Crew Survival Table</h2>
 <p>
 Start with the crew checklist, then use the longer route sections
 below when a death actually happens. The fastest way to recover a
 save-everyone route is to identify whose risk changed and replay
 from the earliest relevant Turning Point.
 </p>
 </div>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Crew member</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Save priority</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
 </tr>
 </thead>
 <tbody>
 {quickSaveRows.map(([crew, priority, reason]) => (
 <tr key={crew} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{crew}</td>
 <td className="px-4 py-3 text-muted-foreground">{priority}</td>
 <td className="px-4 py-3 text-muted-foreground">{reason}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <SourceCheckTable title="Save-Everyone Source Check" rows={sourceRows} />

 <div className="prose-game">
 <h2>Core Survival Rules</h2>
 <p>
 Saving everyone in a Supermassive game is usually about preventing a
 chain reaction. A small argument can make a later rescue fail. A
 missed clue can make a trust choice harder. Directive 8020 adds an
 alien that can imitate crew members, so your safest route is to
 protect both bodies and information.
 </p>
 <ul>
 {survivalRules.map((rule) => (
 <li key={rule}>{rule}</li>
 ))}
 </ul>

 <h2>Everyone Lives Route Checklist</h2>
 <p>
 Use this checklist to find the route condition that likely broke when a
 character dies. Replay from the nearest relevant Turning Point once you
 know whether the issue was separation, trust, evidence, injury, or a
 failed action prompt.
 </p>
 <ActionTable rows={survivorRows} />

 <h2>Save-Everyone Chapter Milestones</h2>
 <p>
 Use these milestones to keep the everyone-lives route organized.
 They are not a replacement for exact choices, but they tell you what
 each section of the route is trying to protect.
 </p>
 </div>

 <div className="rounded-lg border border-border bg-white overflow-hidden my-6">
 <table className="w-full text-sm">
 <tbody>
 {routeMilestones.map(([episode, goal]) => (
 <tr key={episode} className="border-b border-border last:border-0">
 <td className="px-4 py-3 text-foreground font-medium w-48">{episode}</td>
 <td className="px-4 py-3 text-muted-foreground">{goal}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2>The Mimic Rule: Trust Requires Proof</h2>
 <p>
 In earlier anthology games, helping another character is often the
 moral or relationship-positive option. In Directive 8020, the same
 instinct can be dangerous. If a character has been isolated, appears
 suddenly, or asks you to separate from the group, treat the scene as
 a verification test.
 </p>

 <ArticleImage
 src="/d8020-screenshot-03.jpg"
 alt="Directive 8020 Young survival route screenshot"
 caption="For save-everyone routing, treat major characters like Young as both decision makers and survival anchors: their relationships, evidence, and location can shape later branches."
 />
 <ul>
 <li><strong>Ask what they know:</strong> memory and context checks are safer than blind loyalty.</li>
 <li><strong>Look for witnesses:</strong> a character seen by others is easier to trust.</li>
 <li><strong>Do not isolate twice:</strong> if someone returned from isolation, avoid following them alone.</li>
 <li><strong>Preserve communication:</strong> routes that let the group confirm facts are usually safer.</li>
 </ul>

 <h2>QTE and Stealth Strategy</h2>
 <p>
 Directive 8020 includes more active survival language than earlier
 entries: evasion, stealth, improvised weapons, and lightning
 reflexes. For a save-everyone run, assume every action sequence can
 matter until the Story Tree proves it does not.
 </p>
 <ul>
 <li>Use a controller or keyboard setup you are comfortable with before starting.</li>
 <li>Turn off distractions and overlays that can steal focus.</li>
 <li>In stealth scenes, choose observation and cover over speed.</li>
 <li>If a QTE failure injures a character, mark it as a possible later-death setup.</li>
 </ul>

 <h2>Relationship Management</h2>
 <p>
 The cleanest survival routes in these games usually require
 characters to cooperate under pressure. That does not mean always
 choosing the nicest line. It means avoiding reckless insults,
 needless blame, and choices that make one character refuse to save
 another later.
 </p>
 <ul>
 <li>Choose calm, evidence-based dialogue when the crew is divided.</li>
 <li>Do not accuse without proof unless the alternative is immediate danger.</li>
 <li>Keep high-conflict pairs from making isolated life-or-death choices.</li>
 <li>Favor routes that share information with the group.</li>
 </ul>

 <h2>How to Recover a Death with Turning Points</h2>
 <p>
 When someone dies, do not automatically replay the final seconds.
 Work backward. The visible death may only be the last step in a
 route that went bad earlier.
 </p>
 <ol>
 <li>Open the Story Tree and identify the death branch.</li>
 <li>Find the earliest nearby Turning Point tied to separation, trust, evidence, or relationship status.</li>
 <li>Replay that section and change only one decision.</li>
 <li>If the same death happens, move one Turning Point earlier.</li>
 <li>Once the character survives, note the exact condition that changed.</li>
 </ol>

 <h2>First-Run Survival Checklist</h2>
 <p>
 Keep this checklist beside the walkthrough page if you want to avoid
 major spoilers while still playing for a strong survival outcome.
 </p>
 <ul>
 <li>Did anyone split from the group?</li>
 <li>Did they return with proof of where they were?</li>
 <li>Did a choice damage a relationship before a dangerous scene?</li>
 <li>Did you miss a clue before a trust decision?</li>
 <li>Did a failed QTE cause injury, lost equipment, or separation?</li>
 </ul>
 </div>

 <RelatedGuides
 guides={[
 {
 href: '/directive-8020-walkthrough',
 title: 'Full Walkthrough',
 description: 'Use the episode guide to identify the exact Turning Point before each death.',
 },
 {
 href: '/directive-8020-choices-consequences',
 title: 'Choices & Consequences',
 description: 'Map which dialogue, trust, and action choices alter survivor state.',
 },
 {
 href: '/directive-8020-all-endings',
 title: 'All Endings Guide',
 description: 'Use the everyone-lives route as the base for best ending testing.',
 },
 {
 href: '/directive-8020-stealth-guide',
 title: 'Stealth Guide',
 description: 'Avoid route damage from pursuit failures and noisy movement.',
 },
 ]}
 />

 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
