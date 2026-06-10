import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { ThickAsThievesArticle } from '@/components/thick-as-thieves-article';
import { createThickAsThievesMetadata, thickAsThievesImages } from '@/lib/thick-as-thieves';

const title = 'Thick As Thieves Roadmap, Console Plans & Live Service Status';
const description =
 'Thick As Thieves roadmap guide explaining official live-service status, post-launch content wording, console plans, PC focus, and buyer expectations.';
const canonical = '/games/thick-as-thieves/roadmap-console';

export const metadata = createThickAsThievesMetadata({
 title,
 description,
 canonical,
 image: thickAsThievesImages.roadmap,
});

const faqs = [
 {
 question: 'Is Thick As Thieves a live service game?',
 answer:
 'No. The official FAQ says Thick As Thieves is not a live service game.',
 },
 {
 question: 'Will Thick As Thieves get more content?',
 answer:
 'The official FAQ says more content is intended after launch, but there is no predetermined release schedule.',
 },
 {
 question: 'Is Thick As Thieves coming to console?',
 answer:
 'Console versions are not announced for launch; the official FAQ says the current focus is the PC release.',
 },
 {
 question: 'Should I wait for a roadmap?',
 answer:
 'Wait if you need fixed long-term content plans, console timing, or a larger campaign before buying.',
 },
];

const roadmapRows = [
 ['Live service', 'Official FAQ says this is not a live service game.'],
 ['Post-launch content', 'More content is intended, but no fixed schedule is announced.'],
 ['Console status', 'No launch console version is confirmed; PC is the current focus.'],
 ['Buyer expectation', 'Buy for the current compact PC stealth campaign, not for an invented future roadmap.'],
];

export default function ThickAsThievesRoadmapConsolePage() {
 return (
 <ThickAsThievesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Roadmap & Console"
 heroImage={thickAsThievesImages.roadmap}
 heroAlt="Thick As Thieves roadmap and console guide image"
 faqs={faqs}
 >
 <BlufBox title="Roadmap Answer">
 <p>
 <strong>Thick As Thieves is not currently positioned as a live service game.</strong>{' '}
 Official FAQ wording says more content is intended after launch, but
 there is no predetermined schedule. Console versions are not confirmed
 for launch.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2>Live Service and Post-Launch Support</h2>
 <ArticleImage
 src={thickAsThievesImages.roadmap}
 alt="Thick As Thieves live service and roadmap image"
 caption="The official FAQ separates future support from a fixed live-service cadence, which is important for buyer expectations."
 />
 <p>
 The cleanest answer is also the most useful: do not buy Thick As
 Thieves expecting a fixed seasonal roadmap. Buy it if the current
 PC stealth campaign, co-op option, and replayable contract structure
 already sound worthwhile.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Topic</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Officially safe reading</th>
 </tr>
 </thead>
 <tbody>
 {roadmapRows.map(([topic, reading]) => (
 <tr key={topic} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{topic}</th>
 <td className="px-4 py-3 text-muted-foreground">{reading}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Console Status</h2>
 <ArticleImage
 src={thickAsThievesImages.screenshot5}
 alt="Thick As Thieves console status image"
 caption="Console ambition exists in FAQ wording, but a launch platform, date, cross-play plan, and cross-progression plan are not confirmed."
 />
 <p>
 Players asking about console should get a direct answer: not announced
 for launch. The official FAQ says the team would like broader platform
 coverage, but current work is focused on the PC release. That is a
 hopeful signal, not a promise.
 </p>

 <h2>Who Should Wait</h2>
 <ArticleImage
 src={thickAsThievesImages.screenshot6}
 alt="Thick As Thieves wait for roadmap image"
 caption="Waiting is reasonable if your purchase depends on a larger campaign, console release, fixed roadmap, or post-launch content cadence."
 />
 <ul>
 <li>Wait if you need a confirmed console version.</li>
 <li>Wait if you want a fixed roadmap before buying.</li>
 <li>Wait if the 2-map, 16-mission introductory scope feels too small for you.</li>
 </ul>
 </section>
 </ThickAsThievesArticle>
 );
}
