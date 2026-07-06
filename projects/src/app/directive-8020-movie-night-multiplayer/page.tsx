import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { BlufBox, SourceCheckTable } from '@/components/guide-blocks';

export const metadata: Metadata = {
 title: 'Directive 8020 Movie Night & Multiplayer: Local Co-op, Online Update & How Many Players?',
 description:
 'Directive 8020 Movie Night mode explained: how local couch co-op works for up to 5 players, character assignment rules, online multiplayer update status and release date, Steam Remote Play Together compatibility, and whether you can play the full campaign in co-op mode.',
 alternates: {
 canonical: '/directive-8020-movie-night-multiplayer',
 },
};

const faqs = [
 {
 question: 'Does Directive 8020 have Movie Night multiplayer?',
 answer:
 'Yes. Directive 8020 has Movie Night couch co-op for up to five local players, where players choose crew members to control and share the story on one screen.',
 },
 {
 question: 'Does Directive 8020 have online multiplayer?',
 answer:
 'Check the current patch before planning a remote run. The official Dark Pictures wording separates five-player online multiplayer from local Movie Night and describes it as a free update.',
 },
 {
 question: 'How many players can play Directive 8020 Movie Night?',
 answer:
 'Steam describes Movie Night as supporting up to five players, matching the anthology tradition of assigning characters to different local players.',
 },
 {
 question: 'Can you play Directive 8020 Movie Night online right now?',
 answer:
 'Online availability depends on the current patch. Remote groups should check the latest storefront or patch notes before buying specifically for online play.',
 },
 {
 question: 'Does Steam Remote Play replace online multiplayer?',
 answer:
 'Do not treat Steam Remote Play as the official online mode. It may work for some local-style sessions, but the official remote multiplayer path is the post-launch online update.',
 },
 {
 question: 'How should we assign characters in Movie Night?',
 answer:
 'Assign action-heavy characters to players who are comfortable with QTEs, major decision makers to careful readers, and one person to track mimic suspicion and Story Tree branches.',
 },
];

const coOpRules = [
 'Agree before starting whether the group is playing blind, saving everyone, or trophy hunting.',
 'Let the assigned player make final decisions for their character unless the group votes otherwise.',
 'Pause after each chapter to review deaths, suspicions, clues, and Turning Points.',
 'Do not let one player dominate every trust decision; mimic suspicion works better as a debate.',
 'Assign one person to keep notes on isolated characters and contradictions.',
];

const coOpQuestionRows = [
 ['Is Movie Night local co-op?', 'Yes. Movie Night is local couch co-op for up to five players.'],
 ['Is online multiplayer live?', 'Check the current patch notes before planning a remote run; online multiplayer is separate from local Movie Night.'],
 ['Can Steam Remote Play replace it?', 'Treat Steam Remote Play as an unofficial workaround, not the official online multiplayer mode.'],
 ['How many players?', 'Movie Night supports up to five local players, matching the five core playable crew structure.'],
 ['Best group setup', 'Assign one player to track Story Tree notes and one player to watch mimic suspicion while assigned players make character choices.'],
];

const multiplayerStatus = [
 ['Single-player', 'Available', 'One player controls the story route and every crew perspective.'],
 ['Movie Night couch co-op', 'Available', 'Up to five local players share one screen and pass control between assigned crew members.'],
 ['Online multiplayer', 'Check current patch', 'Verify whether the five-player online update is live before planning a remote run.'],
 ['Shared Story replacement', 'Separate question', 'Remote groups should wait for the online Movie Night update or check current patch notes.'],
 ['Steam Remote Play', 'Unofficial workaround', 'Treat it as a workaround only, not a confirmed replacement for the official online mode.'],
];

const sourceRows = [
 {
 claim: 'Movie Night couch co-op supports up to five players.',
 source: 'Steam store',
 status: 'verified' as const,
 href: 'https://store.steampowered.com/app/2255370/Directive_8020/',
 note: 'Use this for local co-op setup and character assignment advice.',
 },
 {
 claim: 'Online multiplayer is planned after launch as a free update.',
 source: 'Official Directive 8020 site',
 status: 'verified' as const,
 href: 'https://www.directive8020.com/',
 note: 'Keep remote-group advice cautious until the patch is live on the player platform.',
 },
 {
 claim: 'Players are searching for online co-op and remote play workarounds.',
 source: 'Reddit demand signals',
 status: 'needs-check' as const,
 href: 'https://www.reddit.com/r/DarkPicturesAnthology/search/?q=Directive%208020%20online%20co-op&restrict_sr=1',
 note: 'Treat Reddit as demand and troubleshooting signal, not as official feature confirmation.',
 },
];

export default function MovieNightPage() {
 return (
 <>
 <JsonLd
 data={generateArticleSchema({
 title: 'Directive 8020 Movie Night Mode - Local Co-op & Online Multiplayer',
 description:
 'Directive 8020 Movie Night couch co-op guide with up to five local players, online multiplayer update status, character assignment, and remote group cautions.',
 url: '/directive-8020-movie-night-multiplayer',
 datePublished: '2026-05-12',
 dateModified: '2026-05-21',
 imageUrl: '/d8020-screenshot-01.jpg',
 })}
 />
 <JsonLd data={generateFAQSchema(faqs)} />

 <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
 <Breadcrumb items={[{ label: 'Movie Night Multiplayer' }]} />
 <PageHero src="/d8020-screenshot-01.jpg" alt="Directive 8020 Movie Night crew co-op screenshot" />

 <h1 className="mb-4 text-[42px] font-bold leading-[1.08] tracking-[-1.39px] text-foreground sm:text-[54px]">
 Directive 8020 Movie Night Mode: Local Co-op and Online Multiplayer
 </h1>
 <p className="text-lg text-muted-foreground leading-relaxed mb-8">
 Directive 8020 supports Movie Night as a local couch co-op mode for
 up to five players. Online multiplayer is a separate patch-status
 question, so remote groups should verify the current update before
 buying copies for an online run.
 </p>

 <BlufBox title="Multiplayer Answer">
 <p>
 <strong>Movie Night is local couch co-op for up to five players.</strong>{' '}
 If you are searching for online co-op, check current patch notes and
 storefront details first. Steam Remote Play should be treated as a
 workaround, not the official online mode.
 </p>
 </BlufBox>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player question</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Direct answer</th>
 </tr>
 </thead>
 <tbody>
 {coOpQuestionRows.map(([question, answer]) => (
 <tr key={question} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2>Is Directive 8020 Multiplayer?</h2>
 <p>
 Yes, but the answer depends on what kind of multiplayer you mean.
 Directive 8020 has solo play and local Movie Night couch co-op.
 Online multiplayer is a separate update path, so remote groups should
 check the latest patch notes before scheduling a run.
 </p>
 </div>

 <div className="rounded-lg border border-border bg-white overflow-hidden my-6">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mode</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it means</th>
 </tr>
 </thead>
 <tbody>
 {multiplayerStatus.map(([mode, status, meaning]) => (
 <tr key={mode} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{mode}</td>
 <td className="px-4 py-3 text-foreground font-semibold">{status}</td>
 <td className="px-4 py-3 text-muted-foreground">{meaning}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <VideoEmbed
 videoId="gaQkzfA14G4"
 title="Directive 8020 official video for co-op planning"
 caption="Watch the official trailer as a group before starting Movie Night. It sets up the mimic paranoia and helps players understand why trust decisions should be discussed."
 />

 <div className="prose-game">
 <h2>Movie Night Setup</h2>
 <p>
 Movie Night is local shared-screen co-op. The group assigns
 characters, passes control when the story changes perspective, and
 lives with the consequences of each player&apos;s decisions. In
 Directive 8020, this mode is especially strong because the mimic
 premise naturally creates disagreement.
 </p>
 <ul>
 <li>Use one display and one controller or keyboard setup the group can share comfortably.</li>
 <li>Decide whether decisions are made by the assigned player or by group vote.</li>
 <li>Keep a notes app or paper log for clues and suspicious behavior.</li>
 <li>Check accessibility, subtitle, brightness, and QTE settings before starting.</li>
 </ul>

 <ArticleImage
 src="/d8020-screenshot-03.jpg"
 alt="Directive 8020 co-op character assignment screenshot"
 caption="Character assignment matters in Movie Night. Give high-pressure characters to players who can handle timed decisions and QTEs."
 />

 <h2>Recommended House Rules</h2>
 <ul>
 {coOpRules.map((rule) => (
 <li key={rule}>{rule}</li>
 ))}
 </ul>

 <h2>Online Multiplayer Note</h2>
 <p>
 The official Dark Pictures multiplayer wording says online multiplayer
 supports five players and mirrors the couch co-op experience. Treat it
 as separate from local Movie Night: if you are planning a remote group
 run, check the current patch notes and storefront details first.
 </p>

 <h2>Remote Group Checklist</h2>
 <ul>
 <li><strong>Before buying for a remote group:</strong> verify the current online multiplayer patch status on your storefront.</li>
 <li><strong>If online co-op is not live:</strong> use local Movie Night or wait for the official update instead of assuming Steam Remote Play support.</li>
 <li><strong>If a patch arrives:</strong> check whether all players need the same platform, account link, save owner, and game version.</li>
 <li><strong>For guide use:</strong> keep one player responsible for Story Tree notes so a co-op run can still recover deaths and endings later.</li>
 </ul>

 <h2>Best Co-op Roles</h2>
 <ul>
 <li><strong>The observer:</strong> watches for mimic clues, contradictions, and suspicious returns.</li>
 <li><strong>The mapper:</strong> records Turning Points, deaths, and locked Story Tree branches.</li>
 <li><strong>The operator:</strong> handles QTE-heavy characters and stealth scenes.</li>
 <li><strong>The mediator:</strong> forces the group to slow down before accusations or sacrifices.</li>
 </ul>
 </div>

 <SourceCheckTable title="Co-op Player Reference Notes" rows={sourceRows} />

 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
