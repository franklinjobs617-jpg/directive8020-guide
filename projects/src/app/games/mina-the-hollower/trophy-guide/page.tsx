import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel, StatusPanel } from '@/components/guide-blocks';
import { MinaArticle } from '@/components/mina-the-hollower-article';
import {
 createMinaMetadata,
 minaImages,
} from '@/lib/mina-the-hollower';

const title = 'Mina the Hollower Trophy Guide: Achievements, 100% Checklist & Roadmap';
const description =
 'Mina the Hollower trophy and achievement guide for Steam achievements, 100% cleanup, secrets, bosses, sidearms, trinkets, Steam Deck checks, and launch-list cautions.';
const canonical = '/games/mina-the-hollower/trophy-guide';

export const metadata = createMinaMetadata({
 title,
 description,
 canonical,
 image: minaImages.screenshot7,
});

const faqs = [
 {
 question: 'Does Mina the Hollower have achievements?',
 answer:
 'Yes. Steam lists Steam Achievements for Mina the Hollower. Check the live Steam achievement list before treating exact names, hidden achievements, or completion counts as final.',
 },
 {
 question: 'Is there a Mina the Hollower platinum trophy?',
 answer:
 'A PlayStation trophy list should be checked on the live console profile before using exact trophy names. This page focuses on safe 100% planning until platform lists are fully visible.',
 },
 {
 question: 'What should I track for 100% completion?',
 answer:
 'Track bosses, secrets, sidearms, trinkets, upgrades, map completion, difficult rooms, and any achievement popups without assuming every collectible route is solved on day one.',
 },
 {
 question: 'Should I follow a full trophy route on my first run?',
 answer:
 'No. Learn burrowing, Nightstar range, sidearm use, and boss patterns first, then clean up achievements once the live list and route requirements are clearer.',
 },
];

const searchIntentRows = [
 {
 query: 'Mina the Hollower trophy guide',
 answer: 'Use a two-pass route: finish a learning run, then clean up achievements, secrets, bosses, sidearms, trinkets, and map checks.',
 href: '#roadmap',
 label: 'Roadmap',
 },
 {
 query: 'Mina the Hollower achievements',
 answer: 'Steam lists achievements, but exact names and hidden requirements should be checked against the live Steam list.',
 href: '#achievement-status',
 label: 'Live list',
 },
 {
 query: 'Mina the Hollower 100%',
 answer: 'Track map coverage, secrets, bosses, upgrades, sidearms, trinkets, and any hard-room clears before chasing final cleanup.',
 href: '#completion-checklist',
 label: 'Checklist',
 },
 {
 query: 'Mina the Hollower platinum',
 answer: 'Check the live PlayStation trophy list before relying on exact trophy names or hidden trophy triggers.',
 href: '#platform-status',
 label: 'Console caveat',
 },
 {
 query: 'Mina the Hollower missables',
 answer: 'Treat missables as unconfirmed until route testing proves what can be revisited after credits.',
 href: '#missable-cautions',
 label: 'Safe route',
 },
];

const jumpLinks = [
 { href: '#achievement-status', label: 'Achievement status' },
 { href: '#roadmap', label: 'Roadmap' },
 { href: '#completion-checklist', label: '100% checklist' },
 { href: '#missable-cautions', label: 'Missables' },
 { href: '/games/mina-the-hollower/beginner-guide', label: 'Beginner guide' },
 { href: '/games/mina-the-hollower/steam-deck', label: 'Steam Deck' },
];

const roadmapRows = [
 {
 step: 'First run',
 doThis: 'Play normally, learn burrowing, Nightstar range, sidearms, trinkets, and boss timing.',
 why: 'A clean learning run prevents early achievement hunting from turning into repeated resets.',
 },
 {
 step: 'Map and secrets pass',
 doThis: 'Revisit side paths, suspicious rooms, upgrade checks, and hard-to-reach corners.',
 why: 'Mina emphasizes secrets and interconnected level design, so exploration cleanup should be deliberate.',
 },
 {
 step: 'Boss and combat cleanup',
 doThis: 'Record boss clears, no-hit style attempts only if achievements prove they exist, and difficult combat rooms.',
 why: 'Do not waste time chasing challenge conditions before the live achievement list confirms them.',
 },
 {
 step: 'Equipment cleanup',
 doThis: 'Track sidearms, trinkets, upgrades, and build changes one at a time.',
 why: 'Equipment achievements are easier to verify when you know exactly what changed.',
 },
 {
 step: 'Final platform check',
 doThis: 'Compare your save against Steam achievements and console trophies after lists are visible.',
 why: 'Hidden entries and platform-specific trophies can change the last cleanup steps.',
 },
];

const checklistRows = [
 ['Story progress', 'Main route cleared, credits reached, post-game access checked.'],
 ['Map coverage', 'Unexplored rooms, locked paths, shortcut loops, and suspicious dead ends.'],
 ['Secrets', 'Hidden items, side rooms, unusual walls, and optional challenge spaces.'],
 ['Combat', 'Boss clears, difficult enemy rooms, sidearm use, and any challenge popups.'],
 ['Equipment', 'Sidearms, trinkets, upgrades, and build-changing items.'],
 ['Platform list', 'Steam achievements and console trophy lists checked after launch.'],
];

const statusItems = [
 { label: 'Steam achievements', value: 'Listed as a Steam feature.', status: 'verified' as const },
 { label: 'Exact achievement names', value: 'Use the live Steam list before writing final names or hidden requirements.', status: 'needs-check' as const },
 { label: 'Console trophies', value: 'Check the live PlayStation profile before using exact trophy names.', status: 'needs-check' as const },
 { label: '100% route', value: 'Use a two-pass cleanup route until missables and post-game access are verified.', status: 'working' as const },
];

export default function MinaTrophyGuidePage() {
 return (
 <MinaArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Trophy Guide"
 heroImage={minaImages.screenshot7}
 heroAlt="Mina the Hollower trophy guide and achievement cleanup image"
 faqs={faqs}
 showSources={false}
 >
 <SearchAnswerPanel
 title="Does Mina the Hollower have trophies or achievements?"
 answer="Mina the Hollower lists Steam Achievements, so the safest 100% plan is to finish a learning run first, then clean up secrets, bosses, sidearms, trinkets, map coverage, and platform-specific trophy entries after the live lists are visible."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <BlufBox title="100% Rule">
 <p>
 <strong>Do not invent a trophy route before the live lists are stable.</strong>{' '}
 Use this page as a practical roadmap: learn the game, record every
 achievement popup, then compare your save against the live Steam or
 console list before making final cleanup decisions.
 </p>
 </BlufBox>

 <div id="achievement-status">
 <StatusPanel items={statusItems} />
 </div>

 <section className="prose-game">
 <h2 id="roadmap">Recommended Achievement Roadmap</h2>
 <ArticleImage
 src={minaImages.screenshot4}
 alt="Mina the Hollower first run trophy roadmap"
 caption="Start with a stable playthrough. Trophy cleanup becomes faster once burrowing, whip range, sidearms, and boss timing are comfortable."
 />
 <p>
 Mina the Hollower is an action-adventure first and a checklist second.
 A first run should teach movement and combat. A second pass should
 clean up map coverage, secrets, equipment, bosses, and platform list
 gaps.
 </p>
 </section>

 <ActionTable rows={roadmapRows} />

 <section className="prose-game">
 <h2 id="completion-checklist">100% Completion Checklist</h2>
 <p>
 Use this checklist while playing instead of waiting until the end.
 Every entry should be tied to a room, boss, item, or achievement
 popup so cleanup stays traceable.
 </p>
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Track</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to record</th>
 </tr>
 </thead>
 <tbody>
 {checklistRows.map(([item, note]) => (
 <tr key={item} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{item}</td>
 <td className="px-4 py-3 text-muted-foreground">{note}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="missable-cautions">Missable and Platform Cautions</h2>
 <ArticleImage
 src={minaImages.screenshot8}
 alt="Mina the Hollower missable achievement and platform caution image"
 caption="Treat missables as unconfirmed until players verify what can be revisited after credits and what locks behind story progress."
 />
 <ul>
 <li>Do not assume every secret can be revisited until post-game access is tested.</li>
 <li>Do not assume challenge achievements exist until the live list shows them.</li>
 <li>Do not rely on exact PlayStation trophy names before the console list is visible.</li>
 <li>Use the <Link href="/games/mina-the-hollower/beginner-guide">beginner guide</Link> before chasing hard combat cleanup.</li>
 <li>Use the <Link href="/games/mina-the-hollower/steam-deck">Steam Deck guide</Link> if handheld controls affect boss timing.</li>
 </ul>

 <h2 id="platform-status">Platform Cleanup Order</h2>
 <p>
 Steam should be the first list to check on PC. Console players should
 compare their platform trophy list separately because hidden entries,
 naming, and unlock behavior can differ by storefront.
 </p>
 </section>
 </MinaArticle>
 );
}
