import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema, generateHowToSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { BlufBox, RelatedGuides, StatusPanel } from '@/components/guide-blocks';
import { MimicDetector } from '@/components/tools/mimic-detector';

export const metadata: Metadata = {
 title: 'Directive 8020 Mimic Detection Guide - Identify Mimics & Survive',
 description:
 'Directive 8020 mimic detection guide with an interactive suspicion tracker, isolation clues, trust checks, Explorer vs Survival Mode advice, and safe route planning.',
 alternates: {
 canonical: '/directive-8020-mimic-detection-survival-guide',
 },
};

const faqs = [
 {
 question: 'How do you identify a mimic in Directive 8020?',
 answer:
 'Identify a mimic by combining clues: isolation, memory gaps, impossible knowledge, timeline conflicts, pressure to split up, and resistance to evidence checks.',
 },
 {
 question: 'Should I trust an isolated crew member in Directive 8020?',
 answer:
 'Do not trust an isolated crew member immediately. Verify identity through witnesses, shared memories, logs, medical evidence, or a safer group route first.',
 },
 {
 question: 'Does Survival Mode change mimic decisions?',
 answer:
 'Yes. In Survival Mode, suspicious trust choices should be treated as final-risk decisions because you cannot rely on Explorer-style rewind assumptions.',
 },
 {
 question: 'Is the Mimic Detector a spoiler tool?',
 answer:
 'The Mimic Detector is spoiler-light because it ranks clue patterns, not confirmed identities. It helps players decide when to verify, branch, or avoid solo routes.',
 },
];

const clueRows = [
 ['Isolation return', 'A character returns after being alone or off-screen.', 'Verify before following or trusting them.'],
 ['Memory mismatch', 'They cannot answer a detail the real character should know.', 'Treat as a high-risk identity clue.'],
 ['Impossible knowledge', 'They know something they did not witness.', 'Preserve the branch and compare Story Tree results.'],
 ['Pressure to split', 'They want one person to leave the group under urgency.', 'Choose a group-safe route if available.'],
 ['Evidence avoidance', 'They discourage searching rooms, bodies, terminals, or samples.', 'Search first unless active danger forces movement.'],
];

const modeRows = [
 ['Explorer Mode', 'Use the detector before a trust choice, then test risky branches through Turning Points after preserving a clean route.'],
 ['Survival Mode', 'Treat high-suspicion results as route-critical. Avoid solo follow prompts and prioritize evidence before commitment.'],
 ['Movie Night', 'Assign one player to track suspicion clues so group debate does not erase important evidence.'],
];

const transcriptIdentityRows = [
 ['Returned after reported death', 'A character appears after the crew believes they saw a death or impossible body state.', 'Run scanner checks, compare witness accounts, and avoid solo trust until identity is verified.'],
 ['Oracle-linked secrecy', 'A character or file path appears connected to hidden Oracle access or encrypted data.', 'Treat hidden access as evidence context, not instant proof of guilt.'],
 ['Secure storage debate', 'The crew considers detaining a suspicious person while tests are prepared.', 'Record who supports containment, who resists it, and whether the organic scanner is ready.'],
 ['Scanner damaged or unavailable', 'Late routes can remove easy verification tools.', 'Use witnesses, shared memories, timeline, and group-safe movement when scans are not available.'],
];

export default function MimicDetectionPage() {
 return (
 <>
 <JsonLd
 data={generateArticleSchema({
 title: 'Directive 8020 Mimic Detection Guide - Identify Mimics & Survive',
 description:
 'Directive 8020 mimic detection guide with an interactive suspicion tracker, isolation clues, trust checks, Explorer vs Survival Mode advice, and safe route planning.',
 url: '/directive-8020-mimic-detection-survival-guide',
 datePublished: '2026-05-13',
 dateModified: '2026-05-15',
 imageUrl: '/official-mimic-scene.jpg',
 })}
 />
 <JsonLd data={generateFAQSchema(faqs)} />
 <JsonLd
 data={generateHowToSchema({
 name: 'How to check mimic suspicion in Directive 8020',
 description:
 'A spoiler-light method for ranking mimic suspicion using isolation, memory, timeline, evidence, and mode-specific route risk.',
 url: '/directive-8020-mimic-detection-survival-guide',
 steps: [
 {
 name: 'Pick a crew member',
 text: 'Select the crew member who returned from isolation, asked for trust, or changed the route state.',
 },
 {
 name: 'Mark observed clues',
 text: 'Check only clues you saw in the current branch, such as memory gaps, timeline conflicts, or evidence avoidance.',
 },
 {
 name: 'Compare suspicion scores',
 text: 'Use the ranked list to decide who needs verification before a trust or solo-follow choice.',
 },
 {
 name: 'Choose mode-safe action',
 text: 'In Explorer Mode, test the branch through Turning Points; in Survival Mode, avoid high-risk solo trust choices.',
 },
 ],
 })}
 />

 <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
 <Breadcrumb items={[{ label: 'Mimic Detection' }]} />
 <PageHero src="/official-mimic-scene.jpg" alt="Directive 8020 mimic detection survival guide" />

 <h1 className="mb-4 text-[42px] font-bold leading-[1.08] tracking-[-1.39px] text-foreground sm:text-[54px]">
 Directive 8020 Mimic Detection Guide
 </h1>
 <p className="text-lg text-muted-foreground leading-relaxed mb-8">
 Directive 8020 turns trust into a survival mechanic. This guide helps
 you identify suspicious clue patterns, avoid unsafe solo branches, and
 decide when to verify, rewind, or preserve a route.
 </p>

 <BlufBox>
 <p>
 <strong>Short answer:</strong> do not judge a mimic from one clue.
 Combine isolation, memory gaps, impossible knowledge, timeline
 conflicts, evidence avoidance, and solo-pressure prompts before
 trusting a crew member.
 </p>
 </BlufBox>

 <StatusPanel
 items={[
 { label: 'Mimic premise', value: 'Official store copy and trailers support the alien imitation threat.', status: 'verified' },
 { label: 'Detector output', value: 'The tool ranks suspicion patterns; it does not claim canon identities.', status: 'working' },
 { label: 'Mode difference', value: 'Survival Mode advice treats suspicious branches as final-risk choices.', status: 'verified' },
 { label: 'Best use', value: 'Use before trust checks, split-up prompts, and late-game route cleanup.', status: 'verified' },
 ]}
 />

 <MimicDetector />

 <div className="prose-game">
 <h2>How to Use the Mimic Detector</h2>
 <p>
 Pick a crew member, mark the clues you observed, and compare the
 ranked suspicion list. A high score does not prove the character is
 the mimic; it means the branch deserves verification before trust.
 </p>
 <ol>
 <li>Mark only clues you saw in the current episode or branch.</li>
 <li>Switch between crew members and record who has the highest suspicion score.</li>
 <li>Use Explorer Mode for controlled Story Tree testing after one clean route.</li>
 <li>Use Survival Mode when a risky choice may be permanent.</li>
 <li>Report mismatches with the episode, scene, and Story Tree node.</li>
 </ol>

 <h2>Highest-Value Mimic Clues</h2>
 <p>
 The strongest suspicion signals are identity-based, not mood-based.
 A character sounding angry is weaker evidence than a character
 failing a shared-memory check or pushing the group to split.
 </p>
 </div>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Clue</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it means</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Safe response</th>
 </tr>
 </thead>
 <tbody>
 {clueRows.map(([clue, meaning, response]) => (
 <tr key={clue} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{clue}</td>
 <td className="px-4 py-3 text-muted-foreground">{meaning}</td>
 <td className="px-4 py-3 text-muted-foreground">{response}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2>Transcript Identity-Check Examples</h2>
 <p>
 The full-game transcript gives several useful mimic-detection
 patterns around Williams, scanner access, Oracle secrecy, and
 containment debates. These examples do not name a guaranteed mimic;
 they show how to decide when verification is required.
 </p>
 </div>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Scene</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What happens</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player action</th>
 </tr>
 </thead>
 <tbody>
 {transcriptIdentityRows.map(([scene, whatHappens, action]) => (
 <tr key={scene} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{scene}</td>
 <td className="px-4 py-3 text-muted-foreground">{whatHappens}</td>
 <td className="px-4 py-3 text-muted-foreground">{action}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <VideoEmbed
 videoId="9CtX9O7nZeQ"
 title="Directive 8020 official horror clip for mimic clue context"
 caption="Use official horror footage to study isolation, corridor pressure, and visual framing around mimic-risk scenes."
 />

 <div className="prose-game">
 <h2>Explorer Mode vs Survival Mode</h2>
 <p>
 The same suspicious clue has different weight depending on mode.
 Explorer-style play can test and repair branches through Turning
 Points, while Survival Mode should treat high-risk trust choices as
 permanent until proven otherwise.
 </p>
 </div>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <tbody>
 {modeRows.map(([mode, guidance]) => (
 <tr key={mode} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground w-40">{mode}</td>
 <td className="px-4 py-3 text-muted-foreground">{guidance}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <ArticleImage
 src="/official-corridor-threat.jpg"
 alt="Directive 8020 corridor threat used for mimic survival planning"
 caption="Mimic decisions should be logged with location, witnesses, route pressure, and whether the Story Tree marks the scene as a Turning Point."
 />

 <RelatedGuides
 guides={[
 {
 href: '/directive-8020-choices-consequences',
 title: 'Choices & Consequences',
 description: 'Use mimic suspicion to decide which choices need verification.',
 },
 {
 href: '/directive-8020-all-endings',
 title: 'All Endings',
 description: 'Test suspicious branches without damaging your clean route.',
 },
 {
 href: '/directive-8020-how-to-save-everyone',
 title: 'How to Save Everyone',
 description: 'Apply mimic verification rules to survivor routes.',
 },
 {
 href: '/directive-8020-stealth-guide',
 title: 'Stealth Guide',
 description: 'Use stealth discipline when suspicious scenes turn into pursuit routes.',
 },
 ]}
 />

 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
