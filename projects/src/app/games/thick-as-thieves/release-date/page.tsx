import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { ThickAsThievesArticle } from '@/components/thick-as-thieves-article';
import {
 createThickAsThievesMetadata,
 thickAsThievesImages,
 thickAsThievesLaunchCheckRows,
 thickAsThievesSteamFeatureRows,
} from '@/lib/thick-as-thieves';

const title = 'Thick As Thieves Release Date - PC Launch, Price, PS5 & Co-op Status';
const description =
 'Thick As Thieves release guide for the May 20, 2026 PC launch: price, Steam and Epic status, PS5 caution, online co-op, local co-op status, and launch checks.';
const canonical = '/games/thick-as-thieves/release-date';

export const metadata = createThickAsThievesMetadata({
 title,
 description,
 canonical,
 image: thickAsThievesImages.release,
});

const faqs = [
 {
 question: 'When does Thick As Thieves release?',
 answer:
 'Thick As Thieves launched on May 20, 2026 for PC storefronts. Check Steam or Epic Games Store in your region for the current buy button.',
 },
 {
 question: 'What is the Thick As Thieves launch price?',
 answer:
 'The official FAQ lists launch pricing as $4.99 / EUR4.99 / GBP4.99, but players should verify local Steam currency at unlock.',
 },
 {
 question: 'What platforms is Thick As Thieves on?',
 answer:
 'The current public launch focus is PC via Steam and Epic Games Store. PS5, Xbox, and console launch details are not confirmed.',
 },
 {
 question: 'Does Thick As Thieves have local co-op?',
 answer:
 'Local co-op is not confirmed. Current public materials support solo play and online co-op with one partner.',
 },
 {
 question: 'Is Thick As Thieves Early Access?',
 answer:
 'Current Steam and official FAQ messaging do not frame Thick As Thieves as an Early Access release.',
 },
];

export default function ThickAsThievesReleaseDatePage() {
 return (
 <ThickAsThievesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Release Date"
 heroImage={thickAsThievesImages.release}
 heroAlt="Thick As Thieves release date guide image"
 faqs={faqs}
 >
 <BlufBox title="Release Answer">
 <p>
 <strong>Thick As Thieves launched on May 20, 2026 for PC
 storefronts.</strong> The safe platform answer is PC first: Steam and
 Epic are the public launch targets, while PS5, Xbox, local co-op, and
 cross-play are not confirmed in current public materials.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2>Release Date and Platform</h2>
 <ArticleImage
 src={thickAsThievesImages.release}
 alt="Thick As Thieves release date and platform visual"
 caption="Steam and Epic are the source of truth for current purchase state, while official FAQ pages set expectations for PC focus and launch pricing."
 />
 <p>
 Thick As Thieves is currently a PC Steam release from OtherSide
 Entertainment and Megabit Publishing. Steam lists Windows support and
 the May 20, 2026 release date. The official FAQ says the current focus
 is the PC launch, so do not assume a console version, cross-play, or
 cross-progression until those are announced.
 </p>

 <h2>Steam Feature Checklist</h2>
 <ArticleImage
 src={thickAsThievesImages.screenshot3}
 alt="Thick As Thieves Steam features visual"
 caption="Steam already lists practical buyer features: co-op, online co-op, controller support, Steam Cloud, and Family Sharing."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Feature</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current status</th>
 </tr>
 </thead>
 <tbody>
 {thickAsThievesSteamFeatureRows.map(([feature, status]) => (
 <tr key={feature} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{feature}</th>
 <td className="px-4 py-3 text-muted-foreground">{status}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Launch-Day Verification</h2>
 <ArticleImage
 src={thickAsThievesImages.screenshot4}
 alt="Thick As Thieves launch verification image"
 caption="Do one short test contract before committing a full evening, especially if you are playing co-op."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Check</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do</th>
 </tr>
 </thead>
 <tbody>
 {thickAsThievesLaunchCheckRows.map(([check, action]) => (
 <tr key={check} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{check}</th>
 <td className="px-4 py-3 text-muted-foreground">{action}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </ThickAsThievesArticle>
 );
}
