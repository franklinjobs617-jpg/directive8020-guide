import { ArticleImage } from '@/components/article-media';
import {
 ActionTable,
 BlufBox,
 SearchAnswerPanel,
 SourceCheckTable,
 StatusPanel,
} from '@/components/guide-blocks';
import { MinaArticle } from '@/components/mina-the-hollower-article';
import {
 createMinaMetadata,
 minaImages,
 minaWorthItActionRows,
 minaWorthItJumpLinks,
 minaWorthItRows,
 minaWorthItSearchIntent,
 minaWorthItSourceRows,
 minaWorthItStatusItems,
} from '@/lib/mina-the-hollower';

const title = 'Is Mina the Hollower Worth It? Genre Fit, Platforms & Launch Advice';
const description =
 'Mina the Hollower buying guide: who should buy at launch, who should wait, genre fit, single-player scope, Steam Deck signal, platform choice, and review checks.';
const canonical = '/games/mina-the-hollower/is-it-worth-it';

export const metadata = createMinaMetadata({
 title,
 description,
 canonical,
 image: minaImages.screenshot5,
});

const faqs = [
 {
 question: 'Is Mina the Hollower worth buying at launch?',
 answer:
 'Mina the Hollower is most worth considering at launch if you like gothic pixel-art action-adventure games, secrets, boss fights, controller play, and Yacht Club Games design style.',
 },
 {
 question: 'Who should wait before buying Mina the Hollower?',
 answer:
 'Wait if you need reviews, exact completion time, final difficulty impressions, platform performance proof, or a sale.',
 },
 {
 question: 'Is Mina the Hollower like Shovel Knight?',
 answer:
 'It comes from Yacht Club Games, but it is positioned as a top-down gothic action-adventure rather than a Shovel Knight sequel.',
 },
 {
 question: 'Does Mina the Hollower have co-op?',
 answer:
 'No co-op is listed on Steam. Treat Mina the Hollower as a single-player game.',
 },
];

export default function MinaWorthItPage() {
 return (
 <MinaArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Is It Worth It?"
 heroImage={minaImages.screenshot5}
 heroAlt="Mina the Hollower buying guide image"
 faqs={faqs}
 >
 <BlufBox title="Buying Answer">
 <p>
 <strong>Mina the Hollower looks like a strong launch candidate for action-adventure players, not a universal buy.</strong>{' '}
 Buy early if you want gothic pixel art, boss fights, secrets,
 burrowing, whip combat, sidearms, trinkets, and controller-friendly
 play. Wait if your decision depends on reviews, difficulty reports,
 exact completion time, or platform performance.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Mina the Hollower Worth It Quick Answer"
 answer="Strong buy for action-adventure fans who want gothic pixel art, bosses, secrets, and controller play. Wait if reviews, completion time, or platform performance matter to your decision."
 intentRows={minaWorthItSearchIntent}
 jumpLinks={minaWorthItJumpLinks}
 />

 <StatusPanel items={minaWorthItStatusItems} />

 <section className="prose-game" id="launch-value">
 <h2>Launch Value Snapshot</h2>
 <ArticleImage
 src={minaImages.screenshot5}
 alt="Mina the Hollower launch value snapshot"
 caption="The value question is genre fit: do you want a focused gothic action-adventure with secrets, bosses, and skill-based movement?"
 />
 <p>
 The strongest reason to care about Mina the Hollower is not raw size.
 It is the fit between Yacht Club Games&apos; action-game background
 and a gothic adventure structure built around burrowing, Nightstar,
 sidearms, trinkets, secrets, bosses, and interconnected spaces.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Buying factor</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to read it</th>
 </tr>
 </thead>
 <tbody>
 {minaWorthItRows.map(([factor, reading]) => (
 <tr key={factor} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{factor}</th>
 <td className="px-4 py-3 text-muted-foreground">{reading}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="who-buy">Who Should Buy at Launch</h2>
 <ArticleImage
 src={minaImages.screenshot6}
 alt="Mina the Hollower who should buy at launch"
 caption="Buy early if a skill-based single-player adventure with secrets and boss fights is exactly what you want."
 />
 <ul>
 <li>You like top-down action-adventure games with deliberate movement.</li>
 <li>You want a gothic pixel-art world rather than a 3D open world.</li>
 <li>You value controller support, Steam Cloud, and handheld-friendly play.</li>
 </ul>

 <h2 id="who-wait">Who Should Wait</h2>
 <ArticleImage
 src={minaImages.screenshot8}
 alt="Mina the Hollower who should wait before buying"
 caption="Waiting is reasonable if your purchase depends on reviews, final difficulty, platform performance, or exact completion length."
 />
 <ul>
 <li>Wait if you need critic or player reviews before buying.</li>
 <li>Wait if you need exact boss count, map size, or completion time.</li>
 <li>Wait if you only want co-op, survival crafting, or a large 3D RPG.</li>
 </ul>

 <h2 id="platform-choice">Platform Choice</h2>
 <ArticleImage
 src={minaImages.screenshot3}
 alt="Mina the Hollower platform choice"
 caption="PC and Steam Deck have the clearest pre-launch feature visibility, while console buyers should check their own storefront date and price near launch."
 />
 <p>
 PC players have the most visible pre-launch details through Steam:
 system requirements, controller support, Steam Cloud, and coming-soon
 date. Console players should verify price, unlock timing, and any
 platform-specific features directly on their storefront before buying.
 </p>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Buying Plan</h2>
 <ActionTable rows={minaWorthItActionRows} />

 <SourceCheckTable title="Mina the Hollower Worth It Sources" rows={minaWorthItSourceRows} />
 </MinaArticle>
 );
}
