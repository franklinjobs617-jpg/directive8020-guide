import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { ThickAsThievesArticle } from '@/components/thick-as-thieves-article';
import { createThickAsThievesMetadata, thickAsThievesCampaignRows, thickAsThievesImages } from '@/lib/thick-as-thieves';

const title = 'Thick As Thieves Contracts, Maps & Replayability Guide';
const description =
 'Thick As Thieves contracts guide covering official launch scope: 2 dynamic replayable maps, 16 missions, at least 4 hours, 6 gear pieces, and replay value.';
const canonical = '/games/thick-as-thieves/contracts-maps';

export const metadata = createThickAsThievesMetadata({
 title,
 description,
 canonical,
 image: thickAsThievesImages.contracts,
});

const faqs = [
 {
 question: 'How many maps are in Thick As Thieves?',
 answer:
 'Official launch messaging describes 2 dynamic replayable maps.',
 },
 {
 question: 'How many missions are in Thick As Thieves?',
 answer:
 'Official launch messaging describes 16 missions in the introductory campaign.',
 },
 {
 question: 'How long is Thick As Thieves?',
 answer:
 'Official messaging says the introductory campaign runs at least 4 hours, before replay learning and alternate approaches.',
 },
 {
 question: 'Is Thick As Thieves replayable?',
 answer:
 'Official messaging emphasizes replayable maps; real replay value should be judged after testing route variation, gear, and co-op approaches.',
 },
];

export default function ThickAsThievesContractsPage() {
 return (
 <ThickAsThievesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Contracts & Maps"
 heroImage={thickAsThievesImages.contracts}
 heroAlt="Thick As Thieves contracts and maps guide image"
 faqs={faqs}
 >
 <BlufBox title="Campaign Scope Answer">
 <p>
 <strong>The announced launch scope is compact but specific.</strong>{' '}
 Official messaging describes 2 dynamic replayable maps, 16 missions,
 at least 4 hours, and 6 pieces of gear. Treat that as an introductory
 campaign, not a hundred-hour promise.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2>Official Launch Scope</h2>
 <ArticleImage
 src={thickAsThievesImages.contracts}
 alt="Thick As Thieves official campaign scope image"
 caption="A small number of maps can still support meaningful stealth replay if contracts remix goals, routes, and pressure."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Scope item</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current official answer</th>
 </tr>
 </thead>
 <tbody>
 {thickAsThievesCampaignRows.map(([item, value]) => (
 <tr key={item} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{item}</th>
 <td className="px-4 py-3 text-muted-foreground">{value}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>How to Read Replayability</h2>
 <ArticleImage
 src={thickAsThievesImages.screenshot7}
 alt="Thick As Thieves replayability guide image"
 caption="Replayability should come from different routes, better stealth execution, co-op coordination, gear experiments, and cleaner exits."
 />
 <p>
 Four hours does not automatically mean the game has no value, and two
 maps do not automatically mean shallow design. The real question is
 whether repeated contracts change your decisions. If route choices,
 gear, stealth grades, and co-op timing matter, the compact launch
 scope can still support meaningful replay.
 </p>

 <h2>What Needs Live Testing</h2>
 <ArticleImage
 src={thickAsThievesImages.screenshot8}
 alt="Thick As Thieves contract testing image"
 caption="As you replay contracts, compare whether missions meaningfully remix map routes or repeat the same safe path."
 />
 <ul>
 <li>Whether mission goals change route planning.</li>
 <li>Whether later contracts increase pressure without feeling repetitive.</li>
 <li>Whether co-op creates new tactical decisions.</li>
 <li>Whether the 6 gear pieces open genuinely different approaches.</li>
 </ul>
 </section>
 </ThickAsThievesArticle>
 );
}
