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
 firstLightEmbargoActionRows,
 firstLightEmbargoJumpLinks,
 firstLightEmbargoSearchIntent,
 firstLightEmbargoSourceRows,
 firstLightEmbargoStatusItems,
 firstLightImages,
 firstLightPlayerConcernRows,
 firstLightReviewRows,
 firstLightReviewSourceRows,
} from '@/lib/007-first-light';

const title = '007 First Light Review Embargo Lifted? Reviews, Denuvo & Worth It';
const description =
 '007 First Light review embargo and buying guide covering whether reviews are out, Steam user reviews, Denuvo, Steam Deck status, PC performance, and who should buy or wait.';
const canonical = '/games/007-first-light/review-embargo';

export const metadata = createFirstLightMetadata({
 title,
 description,
 canonical,
 image: firstLightImages.background,
});

const faqs = [
 {
 question: 'Are 007 First Light reviews out?',
 answer:
 'Check current critic coverage and Steam after the May 27 launch window because review and user-review signals can change quickly on release day.',
 },
 {
 question: 'What is the 007 First Light review embargo?',
 answer:
 'The review embargo is the time before outlets can publish reviews. Once reviews are live, use current review coverage instead of older countdown wording.',
 },
 {
 question: 'Is 007 First Light worth buying now?',
 answer:
 'Buy now if reviews and player reports match what you want from an IO Interactive Bond origin story. Wait if PC performance, Denuvo, Steam Deck, or user reviews matter most.',
 },
 {
 question: 'Does 007 First Light use Denuvo?',
 answer:
 'Steam lists Denuvo Anti-Tamper and a third-party EULA, so PC buyers who care about DRM should factor that into the buying decision.',
 },
 {
 question: 'Is 007 First Light Steam Deck verified?',
 answer:
 'No Steam Deck Verified label is confirmed in this guide. Wait for a Steam rating or strong player reports before treating handheld play as safe.',
 },
];

export default function FirstLightReviewEmbargoPage() {
 return (
 <FirstLightArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Reviews"
 heroImage={firstLightImages.background}
 heroAlt="007 First Light action scene review embargo and buying guide image"
 faqs={faqs}
 >
 <BlufBox title="Buy or Wait">
 <p>
 <strong>For 007 First Light, the review question is now about current
 reviews, Steam user reviews, Denuvo, PC performance, and Steam Deck
 proof.</strong> Buy if the published coverage matches the Bond origin
 story you want. Wait if you need broader player reports, handheld
 testing, or more confidence in PC performance.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="007 First Light Review Embargo Quick Answer"
 answer="Treat the embargo question as time-sensitive. Buy if current reviews match the Bond origin story you want. Wait if you need Steam user volume, Steam Deck proof, or more confidence in Denuvo and PC performance."
 intentRows={firstLightEmbargoSearchIntent}
 jumpLinks={firstLightEmbargoJumpLinks}
 />

 <StatusPanel items={firstLightEmbargoStatusItems} />

 <section id="embargo-checklist" className="prose-game">
 <h2>Review Embargo and Buying Checklist</h2>
 <ArticleImage
 src={firstLightImages.reviewCombat}
 alt="007 First Light agent close-up review and buying decision image"
 caption="The useful buying question is not whether the trailer looks good; it is whether current reviews, Steam user reports, performance, DRM, and platform timing match your risk tolerance."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player situation</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best answer</th>
 </tr>
 </thead>
 <tbody>
 {firstLightReviewRows.map(([situation, answer]) => (
 <tr key={situation} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{situation}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section id="review-sources" className="prose-game">
 <h2>Where to Check Review Scores</h2>
 <p>
 Players searching for Metacritic, OpenCritic, IGN, and Steam reviews
 are usually trying to separate one outlet&apos;s opinion from the
 wider launch-window consensus. Use the sources below as different
 signals instead of treating any single score as the complete answer.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Review source</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to use it</th>
 </tr>
 </thead>
 <tbody>
 {firstLightReviewSourceRows.map(([source, use]) => (
 <tr key={source} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{source}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>What to Check in Reviews First</h2>
 <p>
 For this game, the most useful review details will be mission freedom,
 stealth quality, shooting feel, driving sections, gadget usefulness,
 story pacing, replay modifiers, PC performance, and how close the
 structure feels to IO Interactive&apos;s best mission design.
 </p>
 </section>

 <section id="buy-or-wait" className="prose-game">
 <h2>What Players Are Checking After Launch</h2>
 <ArticleImage
 src={firstLightImages.reviewStealth}
 alt="007 First Light city stealth image for post-launch player concerns"
 caption="Post-launch player questions are clustering around review status, preload limits, Denuvo, PC performance, Steam Deck, and PS5 or PS5 Pro performance."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player concern</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Useful answer</th>
 </tr>
 </thead>
 <tbody>
 {firstLightPlayerConcernRows.map(([concern, answer]) => (
 <tr key={concern} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{concern}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Denuvo, Steam Reviews, and Steam Deck</h2>
 <p>
 PC buyers should check the Denuvo listing, current Steam user reviews,
 and early performance reports before buying on day one. Steam Deck users need to
 verify handheld performance separately because Steam Deck Verified
 status is not confirmed at launch.
 </p>

 <h2 id="buy-now-vs-wait">If You Buy Now vs If You Wait</h2>
 <p>
 If you buy now, you accept that current reviews and player reports
 are still settling and that the Steam refund window is your main
 safety net. If you wait, you give critic coverage, Steam user
 reviews, and platform-specific reports a few more days to firm up.
 Both are valid; the right answer depends on how much you weigh
 playing on launch night versus waiting for stronger post-launch
 signals.
 </p>

 <h2 id="denuvo">If Denuvo Matters to You vs If It Does Not</h2>
 <p>
 If Denuvo matters to you, treat the Steam disclosure as a real
 factor: factor offline comfort, performance risk, and any DRM
 sensitivity into the buying decision. If Denuvo does not matter to
 you, use it as a background signal and focus on reviews, Steam user
 reports, and platform-specific performance. In both cases, do not
 assume the DRM label alone tells you about real performance, and
 use the refund window to confirm on your own setup.
 </p>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Review Plan</h2>
 <ActionTable rows={firstLightEmbargoActionRows} />

 <SourceCheckTable title="007 First Light Review Sources" rows={firstLightEmbargoSourceRows} />
 </FirstLightArticle>
 );
}
