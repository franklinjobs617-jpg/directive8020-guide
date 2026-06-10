import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, RelatedGuides, StatusPanel } from '@/components/guide-blocks';

export const metadata: Metadata = {
 title: 'Directive 8020 O Death Secrets & Curator Guide',
 description:
 'Directive 8020 O Death Secrets and Curator guide: what the 5 O Death collectibles are, how they fit the 65 collectible total, and how to track them safely.',
 alternates: {
 canonical: '/directive-8020-o-death-secrets-curator',
 },
};

const faqs = [
 {
 question: 'How many O Death Secrets are in Directive 8020?',
 answer:
 'Current collectible guides list 5 O Death Secrets in Directive 8020.',
 },
 {
 question: 'How many total collectibles are in Directive 8020?',
 answer:
 'Current collectible guides list 65 total collectibles: 50 normal Secrets, 10 Simms Recordings, and 5 O Death Secrets.',
 },
 {
 question: 'Are O Death Secrets tied to the Curator?',
 answer:
 'O Death Secrets are Curator-related completion items. Track them separately from normal Secrets because they answer a different post-game search intent.',
 },
 {
 question: 'Should I collect O Death Secrets on a blind first run?',
 answer:
 'Collect them if you find them naturally, but do not spoil the finale just to chase them. Finish one route, then use Turning Points and the collectible checklist for cleanup.',
 },
];

const countRows = [
 ['Normal Secrets', '50', 'Main lore and evidence collectible route.'],
 ['Simms Recordings', '10', 'Recording collectible route tied to Cassiopeia context.'],
 ['O Death Secrets', '5', 'Curator-related completion route and post-game cleanup target.'],
 ['Total', '65', 'Current collectible guide total used for 100% tracking.'],
];

const cleanupRows = [
 {
 step: 'Finish one route',
 doThis: 'Complete the story once before chasing every O Death item.',
 why: 'This preserves the first ending and unlocks a cleaner Story Tree for cleanup.',
 },
 {
 step: 'Open collectibles notes',
 doThis: 'Separate O Death Secrets from normal Secrets and Simms Recordings.',
 why: 'Different collectible categories answer different trophy and lore questions.',
 },
 {
 step: 'Replay by episode',
 doThis: 'Use the nearest Turning Point and search only the missed episode area.',
 why: 'This avoids full-game replays for a five-item route.',
 },
 {
 step: 'Verify persistence',
 doThis: 'After collecting an O Death Secret, confirm it remains saved after leaving or rewinding.',
 why: 'Persistence rules determine whether cleanup can be done out of order.',
 },
];

const sourceRows = [
 ['100% Guides collectible guide', '65 total collectibles and 5 O Death Secrets category.', 'https://www.100pguides.com/guides/directive-8020-all-collectibles'],
 ['Destructoid ending explanation', 'Curator and post-game explanation demand around Directive 8020.', 'https://www.destructoid.com/directive-8020-story-and-endings-explained/'],
 ['Steam store page', 'Official game premise, platforms, Turning Points, and Deluxe context.', 'https://store.steampowered.com/app/2255370/Directive_8020/'],
];

export default function ODeathSecretsPage() {
 return (
 <>
 <JsonLd
 data={generateArticleSchema({
 title: 'Directive 8020 O Death Secrets & Curator Guide',
 description:
 'Directive 8020 O Death Secrets and Curator guide covering the 5 O Death collectibles, 65-item collectible total, cleanup method, and source notes.',
 url: '/directive-8020-o-death-secrets-curator',
 datePublished: '2026-05-13',
 dateModified: '2026-05-13',
 imageUrl: '/review/review-endings-comparison-flowchart.webp',
 })}
 />
 <JsonLd data={generateFAQSchema(faqs)} />

 <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
 <Breadcrumb items={[{ label: 'O Death Secrets', href: '/directive-8020-o-death-secrets-curator' }]} />
 <PageHero src="/review/review-endings-comparison-flowchart.webp" alt="Directive 8020 O Death Secrets and Curator route guide" />

 <h1 className="mb-4 text-[42px] font-bold leading-[1.08] tracking-[-1.39px] text-foreground sm:text-[54px]">
 Directive 8020 O Death Secrets and Curator Guide
 </h1>
 <p className="text-lg text-muted-foreground leading-relaxed mb-8">
 O Death Secrets are a small but high-value collectible category in
 Directive 8020. Current collectible guides list 5 O Death Secrets
 inside a 65-item total, so this page focuses on what they are, how to
 track them, and how to clean them up without replaying blindly.
 </p>

 <BlufBox>
 <p>
 <strong>Short answer:</strong> Directive 8020 currently has 5 O
 Death Secrets. Track them separately from the 50 normal Secrets and
 10 Simms Recordings because they are tied to Curator-style
 completion and post-game explanation searches.
 </p>
 </BlufBox>

 <StatusPanel
 items={[
 { label: 'O Death count', value: '5 O Death Secrets are listed by current collectible coverage.', status: 'verified' },
 { label: 'Total collectibles', value: '65 total collectibles: 50 Secrets, 10 Simms Recordings, 5 O Death Secrets.', status: 'verified' },
 { label: 'Curator context', value: 'Curator-related interpretation belongs in spoiler-aware sections.', status: 'working' },
 { label: 'Cleanup method', value: 'Use Turning Points and episode-specific tracking instead of full replays.', status: 'verified' },
 ]}
 />

 <div className="prose-game">
 <h2>O Death Secrets Count Breakdown</h2>
 <p>
 The main SEO risk with collectible pages is mixing categories. This
 table keeps the count explicit so players know exactly what is being
 tracked and search engines can extract the answer cleanly.
 </p>
 </div>

 <div className="rounded-lg border border-border bg-white overflow-hidden my-6">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Collectible category</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Count</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Use</th>
 </tr>
 </thead>
 <tbody>
 {countRows.map(([category, count, use]) => (
 <tr key={category} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{category}</td>
 <td className="px-4 py-3 text-muted-foreground">{count}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2>Best Cleanup Route</h2>
 <p>
 Do not treat O Death Secrets like random background lore. Because
 there are only 5, the efficient route is to finish one playthrough,
 then replay by nearest episode and Turning Point.
 </p>
 <ActionTable rows={cleanupRows} />

 <ArticleImage
 src="/review/review-final-episode.webp"
 alt="Directive 8020 final episode O Death cleanup context"
 caption="O Death cleanup is best handled after one completed route, when the Story Tree and finale state are easier to read."
 />

 <h2>Source Notes</h2>
 <p>
 This page uses collectible guide data for counts and ending
 explanation coverage for Curator demand. It does not invent exact
 item locations where source data should be checked directly during
 route capture.
 </p>
 </div>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Source</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Used for</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Link</th>
 </tr>
 </thead>
 <tbody>
 {sourceRows.map(([source, use, href]) => (
 <tr key={source} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{source}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 <td className="px-4 py-3">
 <a href={href} target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-4">
 Open source
 </a>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <RelatedGuides
 guides={[
 {
 href: '/directive-8020-collectibles-heirlooms',
 title: 'Collectibles & Heirlooms',
 description: 'Use the main collectible guide for all 65 listed items.',
 },
 {
 href: '/directive-8020-cycle-13-explained',
 title: 'Cycle 13 Explained',
 description: 'Read finale interpretation after finishing the story.',
 },
 {
 href: '/directive-8020-come-true-walkthrough',
 title: 'Come True Walkthrough',
 description: 'Use the finale guide before all-ending cleanup.',
 },
 {
 href: '/directive-8020-trophy-guide',
 title: 'Trophy Guide',
 description: 'Plan collectible and achievement cleanup efficiently.',
 },
 ]}
 />

 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
