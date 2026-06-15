import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, RelatedGuides, SearchAnswerPanel, SourceCheckTable, StatusPanel } from '@/components/guide-blocks';
import { SurvivalEndingTracker } from '@/components/tools/survival-ending-tracker';
import { EndingIndex } from '@/components/tools/ending-index';

export const metadata: Metadata = {
 title: 'Directive 8020 All Endings Guide: How Many Endings, Best Ending, Secret Endings & Death Spiral',
 description:
 'Directive 8020 has 5 major ending families plus variations. Complete endings guide: best ending route step by step, all death scenes, secret Cycle 13 ending, Homeward Bound, Docked, Mask Off, and every choice that changes the finale.',
 alternates: {
 canonical: '/directive-8020-all-endings',
 },
};

const faqs = [
 {
 question: 'How many endings does Directive 8020 have?',
 answer:
 'Directive 8020 has five major ending families reported by review coverage, with named finale outcomes and variations such as Homeward Bound, Docked, Mask Off, Hitchhiker, Massacre, Not Alone, and Horror.',
 },
 {
 question: 'What is the best ending in Directive 8020?',
 answer:
 'The safest best-ending route is to keep the crew alive, verify the mimic before trusting isolated characters, preserve useful relationships, collect evidence, and avoid choices that sacrifice Earth or the Cassiopeia crew without proof.',
 },
 {
 question: 'Is there a secret ending in Directive 8020?',
 answer:
 'Players should treat Cycle 13, the Booster Ring, mimic exposure, and unresolved contamination as the main secret-ending checks until exact hidden-ending triggers are verified through controlled Story Tree testing.',
 },
 {
 question: 'What is Death Spiral in Directive 8020?',
 answer:
 'Death Spiral is best treated as a special route concept tied to severe failure or collapse conditions, not a normal all-deaths checklist item. Exact trigger conditions should remain marked as working until verified in multiple runs.',
 },
 {
 question: 'What does the Directive 8020 ending mean?',
 answer:
 'Read the ending through survivor state, message choice, Andromeda risk, Oracle data, mimic evidence, and the cycle reveal. The final result is not only about who lives; it is also about what threat may leave the Cassiopeia.',
 },
];

const fastAnswerRows = [
 ['How many endings?', 'Five major ending families are currently reported, with several named finale outcomes and variations.', 'Low'],
 ['Best ending', 'Keep the crew alive, preserve evidence, verify mimic clues, and avoid reckless sacrifice choices.', 'Medium'],
 ['Good ending', 'Aim for a stable crew-and-mission outcome where survivor state and evidence support the finale decision.', 'Medium'],
 ['Secret ending', 'Check Cycle 13, Booster Ring, mimic exposure, and unresolved contamination routes.', 'High'],
 ['Death Spiral', 'Treat it as a special collapse route until the exact trigger is verified through repeated branch testing.', 'High'],
 ['Ending explained', 'Interpret the finale through Andromeda risk, Oracle data, crew state, message choice, and cycle truth.', 'High'],
];

const endingFactors = [
 ['Crew survival', 'Who lives, who dies, and whether deaths remove later options.'],
 ['Mimic identification', 'Whether you correctly identify impostors before trusting them.'],
 ['Mission outcome', 'Whether choices protect the crew, the ship, Earth, or only one survivor.'],
 ['Relationships', 'Whether characters are willing to warn, rescue, or sacrifice for each other.'],
 ['Evidence found', 'Whether clues give you safer options during late-game trust checks.'],
 ['Turning Points explored', 'Whether hidden branches have been unlocked in the Story Tree.'],
];

const namedEndingRows = [
 ['Homeward Bound', 'Potentially best / crew survival route', 'Keep the strongest survivor state, protect mission evidence, and avoid reckless finale trust choices.', 'High'],
 ['Docked', 'Cassiopeia / Booster Ring outcome', 'Track whether the ship reaches or uses the Booster Ring and whether the crew state supports docking.', 'High'],
 ['Mask Off', 'Mimic reveal or exposure outcome', 'Prioritize mimic identification, evidence, scanner clues, and who is trusted near the finale.', 'High'],
 ['Hitchhiker', 'Contamination or hidden passenger outcome', 'Watch for routes where a rescued crew, body, sample, or message may carry the threat onward.', 'High'],
 ['Massacre', 'Worst / high-death outcome', 'Let survivor state collapse, fail key QTEs, or branch from late deaths after preserving a clean route.', 'High'],
 ['Not Alone', 'Ambiguous survival or continuation outcome', 'Track rescue, warning, Andromeda risk, and whether the crew leaves with unresolved mimic evidence.', 'High'],
 ['Horror', 'Bad finale variant', 'Use late Turning Points to test failed rescue, failed warning, or unresolved threat conditions.', 'High'],
];

const endingCountRows = [
 ['Reported main ending families', '5 substantial endings', 'Reported by launch review coverage; named finale outcomes and variations should be mapped in the Story Tree.'],
 ['Known named outcomes to test', '7+ named outcomes', 'Homeward Bound, Docked, Mask Off, Hitchhiker, Massacre, Not Alone, and Horror are the main named outcomes to track.'],
 ['Death scenes', '44 death scenes', 'Useful for endings because dead characters can close or change finale paths.'],
 ['Collectibles', '65 collectibles', '50 normal Secrets, 10 Simms Recordings, and 5 O Death Secrets can affect lore and cleanup routes.'],
 ['Episode structure', '8 episodes', 'Use episode boundaries to track survivor state, Turning Points, and ending conditions.'],
];

const endingIntentRows = [
 ['How many endings?', 'Five major ending families are currently reported, with several named finale outcomes and variations.'],
 ['Best ending', 'Build a clean survivor route first, preserve evidence, verify mimic clues, and avoid sacrifice choices until the finale logic is clear.'],
 ['Good ending', 'Treat a good ending as a stable crew-and-mission outcome, not simply the last dialogue option. Survivor state and evidence matter.'],
 ['Secret ending', 'Use hidden or ambiguous routes such as Cycle 13, Booster Ring, mimic exposure, and unresolved contamination as the main secret-ending checks.'],
 ['Death Spiral', 'Treat Death Spiral as a special collapse route, not a normal all-deaths checklist, until the exact trigger conditions are verified.'],
 ['Ending explained', 'Read the finale through message choice, Andromeda risk, Oracle data, survivor state, and the cycle reveal.'],
];

const spoilerTopics = [
 ['Cycle 13', 'A spoiler-heavy finale topic tied to ending interpretation. Keep it in spoiler-marked sections and connect it to the all-endings route.'],
 ['Booster Ring', 'A late-story objective and ending-context term. Mention it where players expect ending explanation, not in spoiler-free beginner pages.'],
 ['Cassiopeia outcome', 'The ship and mission state should be tracked alongside survivor count because ending value is not only who lives.'],
 ['Eisele Destiny', 'A character-specific route flag that can affect how players understand finale outcomes and best-ending cleanup.'],
];

const transcriptEndingRows = [
 ['Distress signal', 'The finale transcript frames rescue as a possible way to reach Andromeda or outside help.', 'Record contamination risk and what the crew knows before treating rescue as good.', 'High'],
 ['Warning message', 'The alternate logic is to warn Andromeda away if the ship or crew may carry alien matter.', 'Track this as an Earth-protection condition, not just a sacrifice option.', 'High'],
 ['Andromeda risk', 'The rescue vessel matters because saving the Cassiopeia crew can also expose another crew.', 'Record whether the ending protects the crew, Andromeda, Earth, or evidence.', 'High'],
 ['Cycle truth', 'Late scenes describe copied memories, synthetic bodies, repeat missions, and Corinth or Earth knowledge.', 'Use Cycle 13 notes to interpret the ending after recording the visible outcome.', 'High'],
 ['Oracle protocols', 'Oracle is tied to mission truth, distress management, and late-story protocol options.', 'Track whether Oracle data was accessed, trusted, resisted, or used as evidence.', 'Medium'],
];

const sourceRows = [
 {
 claim: 'Directive 8020 has 5 reported substantial ending families plus named finale outcomes and variations.',
 source: 'Destructoid review and endings coverage',
 status: 'verified' as const,
 href: 'https://www.destructoid.com/directive-8020-endings-guide-all-destinies-choices-and-variations/',
 note: 'Use this row when you need the reported ending count and the most common named finale outcomes.',
 },
 {
 claim: 'Death spiral is a special ending concept, not a normal all-deaths checklist item.',
 source: 'PSU preview + death-route discussion',
 status: 'working' as const,
 href: 'https://www.psu.com/news/directive-8020-hands-on-preview/',
 note: 'Treat death spiral as a special route concept until controlled route tests confirm the trigger conditions.',
 },
 {
 claim: 'Distress call or warning is a finale decision topic.',
 source: 'Full-game transcript route notes',
 status: 'working' as const,
 href: '/directive-8020-choices-consequences',
 note: 'Use as a finale condition category until exact ending outcomes are confirmed.',
 },
];

const endingRouteRows = [
 { step: 'Homeward Bound / best route base', doThis: 'Keep core crew alive, preserve evidence, verify mimic clues, and avoid sacrificing the crew or Andromeda without proof.', why: 'The best route needs survivor state plus correct finale logic, not only one final dialogue choice.' },
 { step: 'Docked / Booster Ring test', doThis: 'Branch near the finale and test the ship, Booster Ring, rescue, and docking conditions separately.', why: 'Docking-style outcomes can depend on ship state as much as character survival.' },
 { step: 'Mask Off / mimic exposure test', doThis: 'Replay routes where evidence, scanner use, or trust checks reveal the impostor before the finale.', why: 'Mimic identification appears to be a separate ending axis.' },
 { step: 'Massacre / Horror test', doThis: 'Use a copy branch to fail survivor, QTE, or trust conditions after your clean route is saved.', why: 'Worst-ending cleanup should not damage the route you need for trophies and good outcomes.' },
];

const searchIntentRows = [
 {
 query: 'How many endings does Directive 8020 have?',
 answer: 'Current launch coverage reports five major ending families, with several named finale outcomes and route variants.',
 href: '#ending-count',
 label: 'Low spoiler',
 },
 {
 query: 'What is the best ending?',
 answer: 'Build a save-everyone base, preserve evidence, verify mimic clues, and avoid finale choices made without proof.',
 href: '#best-ending-route',
 label: 'Route advice',
 },
 {
 query: 'Is there a secret ending?',
 answer: 'Treat Cycle 13, Booster Ring, mimic exposure, and unresolved contamination as the main hidden-ending checks until triggers are fully verified.',
 href: '#spoiler-topics',
 label: 'Spoilers',
 },
 {
 query: 'What is Death Spiral?',
 answer: 'Death Spiral is best tracked as a special collapse or failure-state route, not a normal all-deaths checklist item.',
 href: '#spoiler-topics',
 label: 'Spoilers',
 },
 {
 query: 'What does the ending mean?',
 answer: 'Read the finale through survivor state, message choice, Andromeda risk, Oracle data, mimic evidence, and the cycle reveal.',
 href: '#ending-explained',
 label: 'Full spoiler',
 },
];

const jumpLinks = [
 { href: '#ending-count', label: 'Ending count' },
 { href: '#known-endings', label: 'Ending names' },
 { href: '#best-ending-route', label: 'Best route' },
 { href: '#ending-explained', label: 'Ending explained' },
 { href: '#spoiler-topics', label: 'Secret topics' },
 { href: '#route-test-plan', label: 'Route test plan' },
];

export default function AllEndingsPage() {
 return (
 <>
 <JsonLd
 data={generateArticleSchema({
 title: 'Directive 8020 All Endings Guide: How Many Endings, Best Ending, Secret Endings & Death Spiral',
 description:
 'Directive 8020 has 5 major ending families plus variations. Complete endings guide: best ending route step by step, all death scenes, secret Cycle 13 ending, Homeward Bound, Docked, Mask Off, and every choice that changes the finale.',
 url: '/directive-8020-all-endings',
 datePublished: '2026-05-12',
 dateModified: '2026-05-21',
 imageUrl: '/d8020-screenshot-06.jpg',
 })}
 />
 <JsonLd data={generateFAQSchema(faqs)} />

 <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
 <Breadcrumb items={[{ label: 'All Endings' }]} />
 <PageHero src="/d8020-screenshot-06.jpg" alt="Directive 8020 official Story Tree screenshot" />

 <h1 className="mb-4 text-[42px] font-bold leading-[1.08] tracking-[-1.39px] text-foreground sm:text-[54px]">
 Directive 8020 All Endings: Best, Secret and Death Spiral
 </h1>
 <p className="text-lg text-muted-foreground leading-relaxed mb-8">
 Directive 8020 has <strong className="text-foreground">5 reported
 major ending families</strong>, with named finale outcomes players
 search for including <strong className="text-foreground">Homeward
 Bound</strong>, <strong className="text-foreground">Docked</strong>,
 <strong className="text-foreground"> Mask Off</strong>,
 <strong className="text-foreground"> Hitchhiker</strong>,
 <strong className="text-foreground"> Massacre</strong>,
 <strong className="text-foreground"> Not Alone</strong>, and
 <strong className="text-foreground"> Horror</strong>. This guide
 maps what each ending name appears to mean and how to test routes
 through the Story Tree.
 </p>

 <SearchAnswerPanel
 title="How many Directive 8020 endings are there?"
 answer="Directive 8020 is currently best described as having five major ending families. The practical path is to complete one clean survivor route, then branch late Turning Points for best ending, bad ending, secret-ending checks, Death Spiral, and ending-explained cleanup."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <BlufBox>
 <p>
 <strong>Short answer:</strong> launch review coverage reports
 <strong> five major ending families</strong> in Directive 8020,
 while ending guides and player discussions surface named outcomes such
 as Homeward Bound, Docked, Mask Off, Hitchhiker, Massacre, Not
 Alone, and Horror. Start from one clean completed route, then branch
 from late Turning Points to test survivor count, mission choices,
 evidence, Booster Ring state, and mimic identification one variable
 at a time.
 </p>
 </BlufBox>

 <section className="my-8">
 <h2 className="mb-3 text-xl font-bold text-foreground">Fast Answer</h2>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Question</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Direct answer</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Spoiler level</th>
 </tr>
 </thead>
 <tbody>
 {fastAnswerRows.map(([question, answer, spoiler]) => (
 <tr key={question} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 <td className="px-4 py-3 text-muted-foreground">{spoiler}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <StatusPanel
 items={[
 { label: 'Reported ending count', value: 'Review coverage reports 5 major ending families.', status: 'verified' },
 { label: 'Ending names', value: 'Homeward Bound, Docked, Mask Off, Hitchhiker, Massacre, Not Alone, and Horror are the key named outcomes to test.', status: 'working' },
 { label: 'Ending method', value: 'Story Tree, Turning Points, survivor state, and evidence are confirmed guide pillars.', status: 'verified' },
 { label: 'Route table', value: 'Best, bad, worst, hidden, Booster Ring, and mimic-exposure routes should be filled from controlled branch testing.', status: 'working' },
 ]}
 />

 <div className="rounded-lg border border-border bg-mist p-5 mb-8">
 <p className="text-xs font-semibold uppercase tracking-[0.12px] text-foreground mb-2">
 How Many Endings?
 </p>
 <p className="text-sm text-muted-foreground leading-relaxed">
 Directive 8020 is currently reported to have <strong className="text-foreground">5
 major ending families</strong>. Treat Homeward Bound, Docked, Mask
 Off, Hitchhiker, Massacre, Not Alone, and Horror as the named finale
 outcomes to test, then use the Story Tree to verify hidden variants
 and the choices that trigger each result.
 </p>
 </div>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player question</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Direct answer</th>
 </tr>
 </thead>
 <tbody>
 {endingIntentRows.map(([question, answer]) => (
 <tr key={question} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <SourceCheckTable title="All Endings Source Check" rows={sourceRows} />

 <div className="prose-game">
 <h2 id="known-endings">All Known Ending Names and What to Test</h2>
 <p>
 Players searching for Directive 8020 endings usually need ending
 names, route direction, and a clear warning about unconfirmed
 triggers. Use this table as the route map: it separates known named
 outcomes from exact branch triggers that still need controlled
 Story Tree capture.
 </p>
 </div>

 <div className="rounded-lg border border-border bg-white overflow-hidden my-6">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Ending name</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it usually means</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Route condition to test</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Spoiler level</th>
 </tr>
 </thead>
 <tbody>
 {namedEndingRows.map(([name, intent, condition, spoiler]) => (
 <tr key={name} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{name}</td>
 <td className="px-4 py-3 text-muted-foreground">{intent}</td>
 <td className="px-4 py-3 text-muted-foreground">{condition}</td>
 <td className="px-4 py-3 text-muted-foreground">{spoiler}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <SurvivalEndingTracker />
 <EndingIndex />

 <div className="prose-game">
 <h2>How to Read the Tracker</h2>
 <p>
 The tracker is intentionally conservative. It does not claim that a
 specific character dies from a single choice unless the route is
 verified in the Story Tree. Use it to decide whether a branch is
 clean enough to preserve, risky enough to test separately, or too
 unstable for your best-ending base save.
 </p>

 <h2 id="ending-count">Ending Count and Completion Facts</h2>
 <p>
 The key completion numbers help players understand the scale of the
 ending hunt. They also keep quick references precise: five reported main
 endings, forty-four death scenes, sixty-five collectibles, and eight
 episodes to track.
 </p>
 </div>

 <div className="rounded-lg border border-border bg-white overflow-hidden my-6">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Completion item</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Reported count</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
 </tr>
 </thead>
 <tbody>
 {endingCountRows.map(([item, count, meaning]) => (
 <tr key={item} className="border-b border-border last:border-0">
 <td className="px-4 py-3 text-foreground font-medium">{item}</td>
 <td className="px-4 py-3 text-muted-foreground">{count}</td>
 <td className="px-4 py-3 text-muted-foreground">{meaning}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2 id="ending-explained">Transcript-Based Finale Conditions</h2>
 <p>
 The full-game transcript makes the finale easier to map because it
 separates the final outcome into message choice, survivor state,
 contamination risk, Andromeda safety, Oracle information, and the
 cycle reveal. These notes are spoiler-heavy and should be used after
 one completed route.
 </p>
 </div>

 <div className="rounded-lg border border-border bg-white overflow-hidden my-6">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Transcript evidence</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What happens</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Spoiler level</th>
 </tr>
 </thead>
 <tbody>
 {transcriptEndingRows.map(([evidence, whatHappens, why, spoilerLevel]) => (
 <tr key={evidence} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{evidence}</td>
 <td className="px-4 py-3 text-muted-foreground">{whatHappens}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 <td className="px-4 py-3 text-muted-foreground">{spoilerLevel}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2 id="spoiler-topics">Spoiler Topics Players Search After the Ending</h2>
 <p>
 After finishing a route, most players need more than a list of
 outcomes. Use this section for spoiler-heavy questions about the
 finale, Cycle 13, the Booster Ring, and how named ending families
 connect to the choices you made earlier.
 </p>
 </div>

 <div className="rounded-lg border border-border bg-white overflow-hidden my-6">
 <table className="w-full text-sm">
 <tbody>
 {spoilerTopics.map(([topic, meaning]) => (
 <tr key={topic} className="border-b border-border last:border-0">
 <td className="px-4 py-3 text-foreground font-medium w-44">{topic}</td>
 <td className="px-4 py-3 text-muted-foreground">{meaning}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2>What Determines an Ending?</h2>
 <p>
 In Directive 8020, an ending should not be treated as one final
 choice. Supermassive&apos;s anthology structure usually builds endings
 from accumulated conditions: who is alive, what they know, how they
 relate to each other, and which late-game branches remain available.
 Directive 8020 adds one more layer: whether you correctly handle a
 creature that can imitate the crew.
 </p>
 </div>

 <div className="rounded-lg border border-border bg-white overflow-hidden my-6">
 <table className="w-full text-sm">
 <tbody>
 {endingFactors.map(([factor, meaning]) => (
 <tr key={factor} className="border-b border-border last:border-0">
 <td className="px-4 py-3 text-foreground font-medium w-44">{factor}</td>
 <td className="px-4 py-3 text-muted-foreground">{meaning}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2 id="best-ending-route">Best Ending Route: Safe Principles</h2>
 <p>
 A verified best-ending route requires full chapter testing, but the
 safest principles are clear from the game&apos;s systems. You want the
 most living characters, the strongest evidence base, and the fewest
 decisions made from panic or blind trust.
 </p>

 <ArticleImage
 src="/d8020-screenshot-01.jpg"
 alt="Directive 8020 official crew screenshot for ending routes"
 caption="Most Directive 8020 endings should be read through crew state: who survives, who trusts whom, who has evidence, and who reaches the finale."
 />
 <ul>
 <li><strong>Keep characters together when possible:</strong> isolation creates mimic risk and missed witnesses.</li>
 <li><strong>Verify before trusting:</strong> do not follow an isolated character without a reason.</li>
 <li><strong>Preserve relationships:</strong> hostile crews are less likely to rescue each other.</li>
 <li><strong>Explore optional clues:</strong> evidence can unlock safer dialogue and accusation options later.</li>
 <li><strong>Pass QTEs and stealth checks:</strong> mechanical failures can close ending routes immediately.</li>
 </ul>

 <h2 id="route-test-plan">Ending Route Test Plan</h2>
 <p>
 Use this sequence to turn one completed playthrough into a full
 endings guide. It keeps the route clean and prevents false
 conclusions from multiple changed variables.
 </p>
 <ActionTable rows={endingRouteRows} />

 <h2>Bad Ending and Worst Ending Triggers</h2>
 <p>
 The worst routes in this style of game usually come from cascading
 failures. One death removes a witness, the missing witness makes a
 later trust decision harder, and a bad trust decision creates
 another death. When testing endings, treat these as likely red flags:
 </p>
 <ul>
 <li>Trusting a character who recently returned from isolation with no verification.</li>
 <li>Choosing speed over evidence before a major accusation or rescue.</li>
 <li>Letting two characters with poor relationships decide each other&apos;s fate.</li>
 <li>Ignoring a route that lets the crew communicate or regroup.</li>
 <li>Failing late-game action sequences after a long survival chain.</li>
 </ul>

 <h2>How to Use the Story Tree Efficiently</h2>
 <p>
 The Story Tree is the main reason Directive 8020&apos;s ending hunt
 should be less painful than older anthology entries. After every
 chapter, look for branches that are locked, deaths that appear
 connected to earlier choices, and paths that have not been explored.
 </p>
 <ol>
 <li>Finish a chapter, then check which branch the Story Tree marked as a Turning Point.</li>
 <li>Write down the choice, the character state, and whether a death or relationship shift followed.</li>
 <li>Only rewind to the earliest relevant Turning Point, not the most recent scene.</li>
 <li>Change one variable at a time, so you know what actually altered the route.</li>
 <li>Save full alternate branches for after your first complete ending.</li>
 </ol>

 <h2>Ending Tracker Template</h2>
 <p>
 Use this simple structure while playing. It turns your first run
 into a route map you can reuse for best ending, bad ending, and
 trophy cleanup.
 </p>
 <ul>
 <li><strong>Chapter / scene:</strong> where the branch happened.</li>
 <li><strong>Turning Point:</strong> the exact decision or action sequence.</li>
 <li><strong>Choice made:</strong> what you selected.</li>
 <li><strong>Immediate result:</strong> death, relationship change, clue, or route change.</li>
 <li><strong>Long-term result:</strong> what changed by the end of the chapter.</li>
 </ul>
 </div>

 <RelatedGuides
 guides={[
 {
 href: '/directive-8020-how-to-save-everyone',
 title: 'How to Save Everyone',
 description: 'Build the best-ending base route before testing negative endings.',
 },
 {
 href: '/directive-8020-choices-consequences',
 title: 'Choices & Consequences',
 description: 'Use choice maps to identify which branch changes each ending.',
 },
 {
 href: '/directive-8020-walkthrough',
 title: 'Full Walkthrough',
 description: 'Use the episode route map before changing finale variables.',
 },
 {
 href: '/directive-8020-death-scenes-guide',
 title: 'All Death Scenes',
 description: 'Use death branches after you preserve one clean ending route.',
 },
 {
 href: '/directive-8020-cycle-13-explained',
 title: 'Cycle 13 Explained',
 description: 'Read the spoiler-heavy cycle reveal after finishing one ending.',
 },
 {
 href: '/directive-8020-collectibles-heirlooms',
 title: 'Collectibles & Heirlooms',
 description: 'Check whether evidence or heirlooms unlock hidden ending context.',
 },
 ]}
 />

 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
