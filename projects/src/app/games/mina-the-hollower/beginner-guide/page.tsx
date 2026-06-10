import { ArticleImage } from '@/components/article-media';
import {
 ActionTable,
 BlufBox,
 RelatedGuides,
 SearchAnswerPanel,
 SourceCheckTable,
 StatusPanel,
} from '@/components/guide-blocks';
import { MinaArticle } from '@/components/mina-the-hollower-article';
import {
 createMinaMetadata,
 minaBeginnerActionRows,
 minaBeginnerJumpLinks,
 minaBeginnerRows,
 minaBeginnerSearchIntent,
 minaBeginnerSourceRows,
 minaBeginnerStatusItems,
 minaImages,
} from '@/lib/mina-the-hollower';

const title = 'Mina the Hollower Beginner Guide - Burrow, Whip, Sidearms & Trinkets';
const description =
 'Spoiler-light Mina the Hollower beginner guide for first sessions: burrowing, Nightstar whip combat, sidearms, trinkets, secrets, bosses, saves, and exploration habits.';
const canonical = '/games/mina-the-hollower/beginner-guide';

export const metadata = createMinaMetadata({
 title,
 description,
 canonical,
 image: minaImages.screenshot4,
});

const faqs = [
 {
 question: 'What should beginners learn first in Mina the Hollower?',
 answer:
 'Beginners should learn burrowing timing, Nightstar whip range, safe dodging, and when to use sidearms before chasing secrets or boss routes.',
 },
 {
 question: 'Is Mina the Hollower hard?',
 answer:
 'Steam describes challenging battles and beastly bosses, so expect skill checks, but final difficulty guidance should wait for the release build.',
 },
 {
 question: 'What is Nightstar in Mina the Hollower?',
 answer:
 'Nightstar is Mina&apos;s trusty whip, described by Steam as a core weapon for lashing foes.',
 },
 {
 question: 'Should beginners use trinkets immediately?',
 answer:
 'Yes, but change one trinket at a time so you can understand what each effect does to your play style.',
 },
];

const mistakeRows = [
 ['Ignoring burrow timing', 'Treat burrowing as a core survival action, not a novelty move.'],
 ['Overusing sidearms', 'Use sidearms when they solve a specific threat or opening.'],
 ['Changing every trinket at once', 'Swap one piece at a time so you know what changed.'],
 ['Rushing out of rooms', 'Steam emphasizes secrets and interconnected design, so check side paths carefully.'],
 ['Assuming guide routes are final', 'Wait for the release build before trusting boss order, item locations, or completion routes.'],
];

export default function MinaBeginnerGuidePage() {
 return (
 <MinaArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Beginner Guide"
 heroImage={minaImages.screenshot4}
 heroAlt="Mina the Hollower beginner guide image"
 faqs={faqs}
 >
 <BlufBox title="First-Session Rule">
 <p>
 <strong>Do not play the first hour like a checklist race.</strong>{' '}
 Learn burrowing, Nightstar range, dodge timing, sidearm purpose, and
 trinket effects before chasing secrets, boss routes, or completion
 claims. That keeps the guide useful without inventing unreleased
 item locations.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Mina the Hollower Beginner Quick Answer"
 answer="Spend the first session on burrow timing, Nightstar reach, sidearm budget, one-trinket-at-a-time testing, and side-path sweeps. Do not trust boss-skip or secret-route claims until the release build is live."
 intentRows={minaBeginnerSearchIntent}
 jumpLinks={minaBeginnerJumpLinks}
 />

 <StatusPanel items={minaBeginnerStatusItems} />

 <section className="prose-game" id="beginner-priorities">
 <h2>Beginner Priorities</h2>
 <ArticleImage
 src={minaImages.screenshot4}
 alt="Mina the Hollower beginner priorities"
 caption="A good first session should teach movement, combat range, sidearm use, trinket effects, and how carefully the world hides secrets."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Priority</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player habit</th>
 </tr>
 </thead>
 <tbody>
 {minaBeginnerRows.map(([priority, habit]) => (
 <tr key={priority} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{priority}</th>
 <td className="px-4 py-3 text-muted-foreground">{habit}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="burrowing-movement">Burrowing and Movement</h2>
 <ArticleImage
 src={minaImages.screenshot6}
 alt="Mina the Hollower burrowing and movement"
 caption="Steam describes burrowing as a way to move beneath hazards and monsters, so learn the timing before relying on aggression."
 />
 <p>
 Burrowing is one of the clearest mechanics in the official Steam
 description. Use it to read hazards, escape pressure, and understand
 enemy spacing. Until the final build is live, do not trust guides that
 claim exact secret routes or boss skips without proof.
 </p>

 <h2 id="nightstar-sidearms">Nightstar, Sidearms, and Trinkets</h2>
 <ArticleImage
 src={minaImages.screenshot7}
 alt="Mina the Hollower Nightstar sidearms and trinkets"
 caption="Nightstar is your baseline weapon. Sidearms and trinkets should support a plan, not replace movement discipline."
 />
 <p>
 Steam names Nightstar as Mina&apos;s trusty whip and describes unusual
 sidearms plus trinkets with exotic effects. For beginners, the safest
 habit is to learn one weapon or trinket change at a time, then decide
 whether it helps against the current enemy pattern.
 </p>

 <h2 id="mistakes">Common Beginner Mistakes</h2>
 <ArticleImage
 src={minaImages.screenshot5}
 alt="Mina the Hollower beginner mistakes"
 caption="Most early mistakes come from rushing: skipping movement practice, burning sidearms, or ignoring side paths in an interconnected world."
 />
 <p>
 The fastest way to lose an early run is to treat Mina the Hollower as
 a checklist. Burrow, dodge, and read the room before reaching for
 sidearms. If you do use a trinket, swap one piece at a time so the
 cause and effect stays clear. Boss-skip and secret-route guides
 should wait for the release build before you trust them.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mistake</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Better habit</th>
 </tr>
 </thead>
 <tbody>
 {mistakeRows.map(([mistake, habit]) => (
 <tr key={mistake} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{mistake}</th>
 <td className="px-4 py-3 text-muted-foreground">{habit}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step First-Session Plan</h2>
 <ActionTable rows={minaBeginnerActionRows} />

 <SourceCheckTable title="Mina the Hollower Beginner Sources" rows={minaBeginnerSourceRows} />

 <RelatedGuides
 guides={[
 {
 href: '/games/mina-the-hollower/trophy-guide',
 title: 'Trophy Guide & 100% Completion',
 description: 'Steam achievements, missable checks, and safe cleanup order for 100% completion.',
 },
 {
 href: '/games/mina-the-hollower/is-it-worth-it',
 title: 'Is Mina the Hollower Worth It?',
 description: 'Buyer-focused launch advice using developer track record, genre fit, and early reviews.',
 },
 ]}
 />
 </MinaArticle>
 );
}
