import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { BlufBox, SourceCheckTable, StatusPanel } from '@/components/guide-blocks';

export const metadata: Metadata = {
 title: 'Directive 8020 Story Tree & Turning Points Guide: How to Rewind, Change Choices & See All Outcomes',
 description:
 'Directive 8020 Story Tree and Turning Points explained: how the rewind system works, how to change past choices, why you must replay forward after rewinding, how to track branches for 100% completion, and tips for mapping endings, deaths, and hidden paths.',
 alternates: {
 canonical: '/directive-8020-turning-points-story-tree',
 },
};

const faqs = [
 {
 question: 'What are Turning Points in Directive 8020?',
 answer:
 'Turning Points are replay checkpoints in Directive 8020 that let you return to important branches, change choices, save crew members, and fill missing Story Tree paths.',
 },
 {
 question: 'Why did my changed choice not carry forward after I jumped back to a later scene?',
 answer:
 'A changed Turning Point starts a new timeline from that checkpoint. To make the new choice count later, replay forward from the changed point instead of jumping back to an old later node.',
 },
 {
 question: 'Is the Story Tree useful for all endings and 100% completion?',
 answer:
 'Yes. The Story Tree is the best tool for all endings, deaths, collectibles cleanup, and 100% chart work because it shows which branches are still locked or unexplored.',
 },
 {
 question: 'Should I rewind immediately after every mistake?',
 answer:
 'Not always. If you want a natural first playthrough, finish your first ending before rewinding. If you are saving everyone or hunting trophies, rewind after major deaths, locked branches, or missed evidence.',
 },
 {
 question: 'Can Turning Points replace a full replay?',
 answer:
 'Turning Points reduce full replays, but they do not let you surgically edit one old choice and keep every later scene unchanged. Some trophies and ending variants still require replaying a long chain forward.',
 },
];

const topUseCases = [
 ['Save everyone', 'Rewind immediately after a death, serious injury, or failed identity/trust check.', 'Survivor state must be repaired before later finale conditions are calculated.'],
 ['All endings', 'Finish one clean route, then branch from late-game Turning Points and replay forward.', 'Changing an old node without replaying forward can leave you on the original timeline.'],
 ['100% Story Tree', 'Treat every locked node as a route experiment and change one variable at a time.', 'Reddit players report missing Episode 8 nodes even after 99% chart completion.'],
 ['All deaths', 'Use a copy branch for failed stealth, failed QTEs, and high-risk trust choices.', 'Death cleanup can break a good route if you overwrite your clean survival path.'],
];

const branchSignals = [
 'A character dies, is injured, or becomes separated.',
 'A relationship visibly improves or worsens.',
 'A trust decision happens after someone was isolated.',
 'A clue changes what dialogue options are available.',
 'The Story Tree marks a node as unexplored or locked.',
 'A finale or ending changes because of an earlier crew state.',
];

const rewindRules = [
 ['Changed choices start a new timeline', 'If you alter Episode 2, replay forward from Episode 2 for that result to exist in Episode 5.', 'Reddit threads show players losing changed outcomes after jumping back to old later nodes.'],
 ['Do not change multiple variables at once', 'Keep exploration, QTEs, and relationship choices the same while testing one branch.', 'This lets you identify the real cause of a death, ending, or locked path.'],
 ['Use late Turning Points first for endings', 'After one complete run, test finale and Episode 7-8 branches before replaying early chapters.', 'Most ending cleanup depends on final survivor state and late trust/identity outcomes.'],
 ['Use earlier Turning Points for missing chart nodes', 'If a future node will not unlock, replay from the earliest character split, death, or stealth outcome that can feed it.', 'Some 100% Story Tree paths need a different upstream survivor state.'],
];

const decisionTreeRows = [
 ['Decision Tree', 'Use the in-game Story Tree as the canonical map of branches you have seen and branches still locked.', 'Best for "directive 8020 decision tree" and "all paths" searches.'],
 ['Flowchart', 'Record one row per Turning Point: episode, scene, changed choice, immediate result, later result, and replay note.', 'Best for players who want a visual route map without spoilers.'],
 ['Destinies', 'Track long-term character direction separately from casual dialogue tone and momentary relationship shifts.', 'Best for "all destinies" and choice-consequence searches.'],
 ['All Turning Points', 'Capture exact node names episode by episode before claiming a complete list.', 'Best for 100% Story Tree and completionist searches.'],
];

const sourceRows = [
 {
 claim: 'Turning Points and Story Tree are official replay systems.',
 source: 'Official / Steam feature copy',
 status: 'verified' as const,
 href: 'https://store.steampowered.com/app/2255370/Directive_8020/',
 note: 'Use for rewind, hidden paths, and route testing explanation.',
 },
 {
 claim: 'Changed Turning Points must be replayed forward to preserve the new timeline.',
 source: 'Reddit player troubleshooting',
 status: 'working' as const,
 href: 'https://www.reddit.com/r/DarkPicturesAnthology/comments/1tc84l2/turning_points_for_directive_8020/',
 note: 'Use as a practical warning because this is the main confusion in player threads.',
 },
 {
 claim: 'Some 100% Story Tree gaps depend on earlier episode survivor and stealth states.',
 source: 'Reddit completionist thread',
 status: 'working' as const,
 href: 'https://www.reddit.com/r/DarkPicturesAnthology/comments/1ti0qew/help_me_100_episode_8_directive_8020/',
 note: 'Use for 100% chart guidance, but keep exact node claims conservative until captured in-game.',
 },
 {
 claim: 'Turning Points are useful for save-everyone and all-ending replay behavior.',
 source: 'TechRadar developer interview',
 status: 'verified' as const,
 href: 'https://www.techradar.com/gaming/directive-8020-executive-producer-says-the-turning-points-system-was-added-for-players-who-want-to-keep-everyone-alive-but-also-for-a-big-percentage-of-our-hardcore-fans-that-will-replay-the-game-to-get-all-endings',
 note: 'Supports the save-everyone and all-endings intent behind this page.',
 },
 {
 claim: 'Exact all-turning-points and all-destinies lists still need route capture.',
 source: 'In-game Story Tree verification',
 status: 'needs-check' as const,
 href: '/directive-8020-walkthrough',
 note: 'Treat exact node names as provisional until screenshot or video confirmation is available.',
 },
 {
 claim: 'Choice examples from transcript are useful but not final canon by themselves.',
 source: 'Private transcript notes',
 status: 'working' as const,
 href: '/directive-8020-choices-consequences',
 note: 'Use transcript notes as early route clues, then confirm them in the Story Tree.',
 },
];

export default function TurningPointsPage() {
 return (
 <>
 <JsonLd
 data={generateArticleSchema({
 title: 'Directive 8020 Story Tree & Turning Points Guide: How to Rewind, Change Choices & See All Outcomes',
 description:
 'Directive 8020 Story Tree and Turning Points explained: how the rewind system works, how to change past choices, why you must replay forward after rewinding, how to track branches for 100% completion, and tips for mapping endings, deaths, and hidden paths.',
 url: '/directive-8020-turning-points-story-tree',
 datePublished: '2026-05-12',
 dateModified: '2026-05-21',
 imageUrl: '/official-story-tree.jpg',
 })}
 />
 <JsonLd data={generateFAQSchema(faqs)} />

 <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
 <Breadcrumb items={[{ label: 'Turning Points & Story Tree' }]} />
 <PageHero src="/official-story-tree.jpg" alt="Directive 8020 - Story Tree and Turning Points route map" />

 <h1 className="mb-4 text-[42px] font-bold leading-[1.08] tracking-[-1.39px] text-foreground sm:text-[54px]">
 Directive 8020 Story Tree and Turning Points Guide
 </h1>
 <p className="text-lg text-muted-foreground leading-relaxed mb-8">
 The Story Tree is Directive 8020's route map, and Turning Points are
 the replay checkpoints you use to change deaths, endings, hidden
 paths, and 100% completion. The key rule is simple: when you change an
 old Turning Point, replay forward from that point so the new timeline
 actually replaces the old one.
 </p>

 <BlufBox>
 <p>
 <strong>Short answer:</strong> use Turning Points to rewind to the
 earliest choice that caused the branch, then replay forward. Do not
 change Episode 2 and jump straight back to an old Episode 5 node
 expecting the new result to carry over; that later node still belongs
 to the original timeline.
 </p>
 </BlufBox>

 <StatusPanel
 items={[
 { label: 'Primary use', value: 'Save everyone, all endings, all deaths, and 100% Story Tree cleanup.', status: 'verified' },
 { label: 'Timeline rule', value: 'Changed Turning Points should be replayed forward before later outcomes are tested.', status: 'working' },
 { label: 'Completion risk', value: 'Episode-specific 100% gaps can depend on earlier deaths, stealth failures, or survivor splits.', status: 'working' },
 { label: 'Exact node list', value: 'Needs full in-game capture before publishing a complete all-turning-points list.', status: 'needs-check' },
 ]}
 />

 <VideoEmbed
 videoId="gaQkzfA14G4"
 title="Directive 8020 official trailer with Turning Points context"
 caption="The official trailer gives the story context for why Turning Points matter: every trust choice can reshape who survives aboard the Cassiopeia."
 />

 <div className="prose-game">
 <h2>What to Use the Story Tree For</h2>
 <p>
 Most players do not need a theoretical explanation of branching
 narrative. They need to know which tool solves which problem. Use
 the Story Tree as your route ledger: it tells you what you have
 seen, what remains locked, and where a different survivor state or
 trust choice may open a new path.
 </p>
 </div>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Goal</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best Turning Point use</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it works</th>
 </tr>
 </thead>
 <tbody>
 {topUseCases.map(([goal, use, why]) => (
 <tr key={goal} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{goal}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2>How Turning Points Change the Game</h2>
 <p>
 Older Dark Pictures runs often required full replays to test
 different choices. Directive 8020 is built around a more visible
 branching structure. Turning Points let you return to key moments,
 choose differently, and watch how the Story Tree changes.
 </p>
 <p>
 That does not make choices meaningless. It makes route testing more
 practical. If a character dies, the question becomes: which Turning
 Point caused the death, and how far back do you need to go to change
 the conditions?
 </p>

 <ArticleImage
 src="/official-story-tree.jpg"
 alt="Directive 8020 - Story Tree branch planning"
 caption="Use the Story Tree as a route map: endings, hidden paths, character deaths, and trophy cleanup should all be tracked from Turning Points."
 />

 <h2>How Rewind Actually Works</h2>
 <p>
 The most common player mistake is treating Turning Points like a
 single-choice editor. They are closer to timeline forks. If you
 change a past decision, the game needs you to play through the
 downstream scenes where that decision takes effect. Jumping back to
 a later node from your old route can put you back on the old route.
 </p>
 </div>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Rule</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Do this</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Reason</th>
 </tr>
 </thead>
 <tbody>
 {rewindRules.map(([rule, action, reason]) => (
 <tr key={rule} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{rule}</td>
 <td className="px-4 py-3 text-muted-foreground">{action}</td>
 <td className="px-4 py-3 text-muted-foreground">{reason}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2>When to Rewind</h2>
 <p>
 Rewinding too often can ruin tension, but refusing to rewind can
 waste hours if you are targeting a specific route. Choose your style
 before starting.
 </p>
 <ul>
 <li><strong>Blind run:</strong> do not rewind until you reach an ending.</li>
 <li><strong>Save everyone:</strong> rewind after any death, serious injury, or irreversible separation.</li>
 <li><strong>All endings:</strong> finish one route, then branch from late-game Turning Points first.</li>
 <li><strong>Trophy cleanup:</strong> change one branch at a time and record what unlocked.</li>
 </ul>

 <h2>Branch Signals to Track</h2>
 <p>
 Not every line of dialogue is equally important. Prioritize choices
 with visible state changes or mimic-related risk.
 </p>
 <ul>
 {branchSignals.map((signal) => (
 <li key={signal}>{signal}</li>
 ))}
 </ul>

 <h2>Decision Tree, Flowchart, and Destinies</h2>
 <p>
 Players searching for a Directive 8020 decision tree or flowchart
 usually want a clean way to test routes, not another long paragraph.
 Keep one route map with four fields: the Turning Point, the choice,
 the immediate result, and the later Destiny or ending impact.
 </p>
 </div>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Route tool</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to use it</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Search intent served</th>
 </tr>
 </thead>
 <tbody>
 {decisionTreeRows.map(([tool, use, intent]) => (
 <tr key={tool} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{tool}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 <td className="px-4 py-3 text-muted-foreground">{intent}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <SourceCheckTable title="Decision Tree Player Reference Notes" rows={sourceRows} />

 <div className="prose-game">
 <h2>Best Route Testing Method for 100% Story Tree</h2>
 <ol>
 <li>Complete a chapter and open the Story Tree.</li>
 <li>Write down all visible Turning Points and locked branches.</li>
 <li>Pick one branch and replay from the earliest relevant node.</li>
 <li>Keep QTE results and exploration consistent while changing only one choice.</li>
 <li>Compare survival, relationship, evidence, and ending-state changes.</li>
 </ol>
 <p>
 If an Episode 8 path stays locked, do not only replay the last
 finale choice. Work backward to the latest survivor split, stealth
 failure, or character-death condition that can change who reaches
 the finale. That is the pattern completionist threads are already
 troubleshooting.
 </p>
 </div>

 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
