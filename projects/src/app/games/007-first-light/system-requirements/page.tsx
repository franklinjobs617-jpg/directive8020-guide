import { ArticleImage } from '@/components/article-media';
import {
 ActionTable,
 BlufBox,
 SearchAnswerPanel,
 SourceCheckTable,
 StatusPanel,
} from '@/components/guide-blocks';
import { FirstLightArticle } from '@/components/007-first-light-article';
import {
 createFirstLightMetadata,
 firstLightImages,
 firstLightSpecActionRows,
 firstLightSpecJumpLinks,
 firstLightSpecRows,
 firstLightSpecSearchIntent,
 firstLightSpecSourceRows,
 firstLightSpecStatusItems,
} from '@/lib/007-first-light';

const title = '007 First Light System Requirements and PC Specs';
const description =
 'Official 007 First Light PC requirements and launch performance checks: Windows 10/11, 16 GB RAM, GTX 1660 or RX 5700 minimum, RTX 3060 Ti or RX 6700 XT recommended, 80 GB SSD, DLSS notes, Steam Deck status, and Denuvo.';
const canonical = '/games/007-first-light/system-requirements';

export const metadata = createFirstLightMetadata({
 title,
 description,
 canonical,
 image: firstLightImages.header,
});

const faqs = [
 {
 question: 'What are the minimum 007 First Light PC requirements?',
 answer:
 'Steam lists Windows 10/11 64-bit, Intel Core i5-9500 or Ryzen 5 3500, 16 GB RAM, GTX 1660 or RX 5700, 80 GB storage, and SSD required.',
 },
 {
 question: 'What are the recommended 007 First Light PC requirements?',
 answer:
 'Steam lists Windows 10/11 64-bit, Intel Core i5-13500 or Ryzen 5 7600, 16 GB RAM, RTX 3060 Ti or RX 6700 XT, 80 GB storage, and SSD required.',
 },
 {
 question: 'Does 007 First Light require an SSD?',
 answer: 'Yes. Steam lists SSD required in both minimum and recommended requirements.',
 },
 {
 question: 'How much storage does 007 First Light need?',
 answer: 'Steam lists 80 GB of available storage.',
 },
 {
 question: 'Is 007 First Light Steam Deck verified?',
 answer:
 'No Steam Deck compatibility label is confirmed in this guide. Treat handheld performance as settings-dependent until Steam or broad player reports settle.',
 },
 {
 question: 'Does Denuvo affect 007 First Light PC performance?',
 answer:
 'Steam lists Denuvo Anti-Tamper, but performance impact should be judged from benchmarks and your own setup rather than assumed from the DRM label alone.',
 },
];

export default function FirstLightSystemRequirementsPage() {
 return (
 <FirstLightArticle
 title={title}
 description={description}
 canonical={canonical}
 label="System Requirements"
 heroImage={firstLightImages.header}
 heroAlt="007 First Light PC specs image"
 faqs={faqs}
 >
 <BlufBox title="PC Specs Answer">
 <p>
 <strong>007 First Light requires 16 GB RAM and an SSD even at the
 minimum tier.</strong> The minimum GPU tier starts at GTX 1660 or RX
 5700, while the recommended tier moves to RTX 3060 Ti or RX 6700 XT.
 Plan for 80 GB of available storage.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="007 First Light System Requirements Quick Answer"
 answer="Minimum is Windows 10/11, i5-9500 or Ryzen 5 3500, 16 GB RAM, GTX 1660 or RX 5700, 80 GB SSD. Recommended moves to i5-13500, Ryzen 5 7600, RTX 3060 Ti or RX 6700 XT. Steam Deck is not rated, DLSS 4.5 is at launch, and path tracing is Summer 2026."
 intentRows={firstLightSpecSearchIntent}
 jumpLinks={firstLightSpecJumpLinks}
 />

 <StatusPanel items={firstLightSpecStatusItems} />

 <section id="specs" className="prose-game">
 <h2>Minimum and Recommended Specs</h2>
 <ArticleImage
 src={firstLightImages.background}
 alt="007 First Light action scene PC requirements image"
 caption="The PC requirement that matters most for launch planning is the 80 GB SSD requirement plus a 16 GB RAM baseline."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Component</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Minimum</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Recommended</th>
 </tr>
 </thead>
 <tbody>
 {firstLightSpecRows.map(([component, minimum, recommended]) => (
 <tr key={component} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{component}</td>
 <td className="px-4 py-3 text-muted-foreground">{minimum}</td>
 <td className="px-4 py-3 text-muted-foreground">{recommended}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section id="performance" className="prose-game">
 <h2>Launch Performance Checks</h2>
 <p>
 Specs do not guarantee smooth performance in every mission. During
 the first session, check shader or traversal stutter, driving
 sections, dense stealth areas, cutscene transitions, controller
 response, and whether your SSD has enough free space beyond the 80 GB
 install requirement.
 </p>

 <h2>Steam Deck, Denuvo, and Benchmark Signals</h2>
 <p>
 Player questions outside Google are focused on handheld play, DRM,
 and real benchmark behavior. Steam Deck is unconfirmed unless a
 Steam rating or reliable player settings reports fit your tolerance.
 For PC, compare your GPU and CPU against current benchmarks, then test
 cutscenes, driving, dense stealth areas, DLSS or FSR behavior, and
 frame pacing before committing past the refund window.
 </p>

 <h2 id="deck">If You Plan to Play on Steam Deck vs If You Are on Desktop</h2>
 <p>
 If you plan to play on Steam Deck, expect to test low settings and upscaling inside the refund window
 and avoid assuming the listed minimum spec translates to smooth
 handheld play. If you are on a desktop that meets the recommended
 tier, focus on DLSS or FSR presets, driver updates, and frame pacing
 in dense stealth and driving sections instead of worrying about
 handheld behavior. The right baseline depends on which platform you
 actually plan to use, not on the spec sheet alone.
 </p>

 <h2 id="dlss">If DLSS Matters to You vs If You Prefer Native Resolution</h2>
 <p>
 If DLSS matters to you, treat the launch DLSS 4.5 Super Resolution
 and DLSS Dynamic Multi Frame Generation as real launch features,
 but path tracing and DLSS Ray Reconstruction are planned for Summer 2026, not available on day one. If you
 prefer native resolution, plan for higher GPU pressure and verify
 your card against the recommended tier rather than the minimum
 tier. In both cases, use the refund window to confirm the visual
 baseline on your own setup before settling in.
 </p>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Spec Plan</h2>
 <ActionTable rows={firstLightSpecActionRows} />

 <SourceCheckTable title="007 First Light Spec Sources" rows={firstLightSpecSourceRows} />
 </FirstLightArticle>
 );
}
