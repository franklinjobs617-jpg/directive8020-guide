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
 minaFeatureRows,
 minaImages,
 minaSteamDeckActionRows,
 minaSteamDeckJumpLinks,
 minaSteamDeckSearchIntent,
 minaSteamDeckSourceRows,
 minaSteamDeckStatusItems,
} from '@/lib/mina-the-hollower';

const title = 'Mina the Hollower Steam Deck Guide - Verified Status & Controls';
const description =
 'Mina the Hollower Steam Deck guide with Verified status context, controller support, Steam Cloud, Remote Play, display expectations, and launch-week handheld checks.';
const canonical = '/games/mina-the-hollower/steam-deck';

export const metadata = createMinaMetadata({
 title,
 description,
 canonical,
 image: minaImages.screenshot3,
});

const faqs = [
 {
 question: 'Is Mina the Hollower Steam Deck Verified?',
 answer:
 'Pre-launch coverage reports Mina the Hollower as Steam Deck Verified, but players should re-check the live Steam Deck badge on Steam during launch week.',
 },
 {
 question: 'Does Mina the Hollower have controller support?',
 answer:
 'Yes. Steam lists full controller support, which is a strong signal for Steam Deck and gamepad play.',
 },
 {
 question: 'Does Mina the Hollower support Steam Cloud?',
 answer:
 'Yes. Steam lists Steam Cloud support, but players should still confirm sync after the first save on launch week.',
 },
 {
 question: 'Is Mina the Hollower good for handheld play?',
 answer:
 'It looks like a strong handheld fit because it is single-player, controller-supported, pixel-art action-adventure, and has reported Steam Deck Verified status.',
 },
];

const deckRows = [
 ['Verification', 'Pre-launch coverage reports Steam Deck Verified; check the live badge again at release.'],
 ['Controls', 'Steam lists full controller support, so start with default gamepad controls before remapping.'],
 ['Cloud saves', 'Steam lists Steam Cloud; test sync after the first save if you move between Deck and desktop.'],
 ['Display', 'The Game Boy Color-style pixel art should suit handheld screens, but final readability should be checked in live play.'],
 ['Battery', 'Do not assume battery life until the release build is tested on Deck.'],
];

export default function MinaSteamDeckPage() {
 return (
 <MinaArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Steam Deck"
 heroImage={minaImages.screenshot3}
 heroAlt="Mina the Hollower Steam Deck guide image"
 faqs={faqs}
 >
 <BlufBox title="Deck Answer">
 <p>
 <strong>Mina the Hollower is a strong Steam Deck candidate, but verify the live badge at launch.</strong>{' '}
 Pre-launch coverage reports Steam Deck Verified, and Steam lists full
 controller support plus Steam Cloud. That is enough for a positive
 early signal, not enough to promise battery life or final performance.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Mina the Hollower Steam Deck Quick Answer"
 answer="Pre-launch coverage reports Steam Deck Verified and Steam lists full controller support plus Steam Cloud. Confirm the live Steam Deck badge on launch day and test a save sync before long sessions."
 intentRows={minaSteamDeckSearchIntent}
 jumpLinks={minaSteamDeckJumpLinks}
 />

 <StatusPanel items={minaSteamDeckStatusItems} />

 <section className="prose-game" id="deck-readiness">
 <h2>Steam Deck Readiness</h2>
 <ArticleImage
 src={minaImages.screenshot3}
 alt="Mina the Hollower Steam Deck readiness"
 caption="The best pre-launch Deck signals are full controller support, Steam Cloud, lightweight specs, and reported Verified status."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Deck check</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current guidance</th>
 </tr>
 </thead>
 <tbody>
 {deckRows.map(([check, guidance]) => (
 <tr key={check} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{check}</th>
 <td className="px-4 py-3 text-muted-foreground">{guidance}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="controls-saves">Control and Save Features</h2>
 <ArticleImage
 src={minaImages.screenshot7}
 alt="Mina the Hollower control and save features"
 caption="Full controller support and Steam Cloud matter more for handheld comfort than raw PC specs."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Steam feature</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
 </tr>
 </thead>
 <tbody>
 {minaFeatureRows.slice(2, 6).map(([feature, status]) => (
 <tr key={feature} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{feature}</th>
 <td className="px-4 py-3 text-muted-foreground">{status}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="handheld-checklist">Launch-Week Handheld Checklist</h2>
 <ArticleImage
 src={minaImages.screenshot5}
 alt="Mina the Hollower launch week handheld checklist"
 caption="On release week, test readability, default controls, suspend/resume, cloud sync, and battery draw before committing to a long handheld run."
 />
 <ul>
 <li>Open the live Steam page and confirm the current Deck badge.</li>
 <li>Start with default controller controls before remapping.</li>
 <li>Make one save, close the game, and verify Steam Cloud sync.</li>
 <li>Check text readability in handheld mode before a long session.</li>
 </ul>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Deck Test Plan</h2>
 <ActionTable rows={minaSteamDeckActionRows} />

 <SourceCheckTable title="Mina the Hollower Steam Deck Sources" rows={minaSteamDeckSourceRows} />
 </MinaArticle>
 );
}
