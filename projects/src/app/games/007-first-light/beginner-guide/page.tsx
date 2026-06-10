import { ArticleImage, VideoEmbed } from '@/components/article-media';
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
 firstLightApproachRows,
 firstLightBeginnerActionRows,
 firstLightBeginnerJumpLinks,
 firstLightBeginnerRows,
 firstLightBeginnerSearchIntent,
 firstLightBeginnerSourceRows,
 firstLightBeginnerStatusItems,
 firstLightFirstMissionRows,
 firstLightFirstHourRouteRows,
 firstLightImages,
 firstLightRecoveryRows,
 firstLightVideos,
} from '@/lib/007-first-light';

const title = '007 First Light Beginner Guide: First Mission, Stealth, Gadgets & Combat';
const description =
 'Spoiler-light 007 First Light beginner guide for first mission priorities, stealth, gadgets, bluffing, firefights, License to Kill caution, driving, mission replay, modifiers, and avoiding opening spoilers.';
const canonical = '/games/007-first-light/beginner-guide';

export const metadata = createFirstLightMetadata({
 title,
 description,
 canonical,
 image: firstLightImages.hero,
});

const faqs = [
 {
 question: 'Should I play 007 First Light stealthy or loud?',
 answer:
 'Start stealth-first and escalate only when needed. Steam describes silent and loud options, including fists, firepower, gadgets, infiltration, and bluffing past guards.',
 },
 {
 question: 'Is 007 First Light like Hitman?',
 answer:
 'Expect IO Interactive mission craft and multiple approaches, but do not assume it is a pure Hitman sandbox. Treat it as a cinematic Bond origin campaign with stealth, gadgets, driving, and action.',
 },
 {
 question: 'Are gadgets important in 007 First Light?',
 answer:
 'Yes. Steam copy highlights gadgets as part of infiltration, so treat them as route tools rather than only combat items.',
 },
 {
 question: 'Can you replay missions in 007 First Light?',
 answer:
 'Steam says players can replay favorite missions with additional modifiers, which makes recording your first route useful.',
 },
 {
 question: 'Should I watch the first 13 minutes before playing?',
 answer:
 'Only if you are comfortable with opening mission spoilers. The official video is useful for gameplay context but not necessary for a blind start.',
 },
 {
 question: 'What should I do after the first mission?',
 answer:
 'Record the route you used, check which moments escalated, then use mission replay and modifiers to test stealth, gadget, or louder alternatives.',
 },
 {
 question: 'What is the safest first-hour route for new players?',
 answer:
 'Read each room first, try a quiet route, use one gadget at a time, escalate only when detected, finish the mission once, then replay with one improvement goal.',
 },
];

export default function FirstLightBeginnerGuidePage() {
 return (
 <FirstLightArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Beginner Guide"
 heroImage={firstLightImages.hero}
 heroAlt="007 First Light agent close-up beginner guide image"
 faqs={faqs}
 >
 <BlufBox title="First Mission Plan">
 <p>
 <strong>Start 007 First Light like a spy, not like a shooter.</strong>
 Read the room, use gadgets to create access, try bluffing or stealth
 before gunfire, and save loud combat for scenes that have already
 escalated. Your first goal is not a perfect route; it is learning how
 the game moves between stealth, gadgets, driving, and action.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="007 First Light Beginner Quick Answer"
 answer="Start stealth-first, read each room, use one gadget at a time, escalate only when detected, then replay missions with one specific improvement goal. Driving sections and opening spoilers are separate decisions from your main approach."
 intentRows={firstLightBeginnerSearchIntent}
 jumpLinks={firstLightBeginnerJumpLinks}
 />

 <StatusPanel items={firstLightBeginnerStatusItems} />

 <section id="first-60-minutes" className="prose-game">
 <h2>First 60 Minutes Route</h2>
 <p>
 Use this as an operating path for your first session. It avoids
 spoilers and focuses on what to do in order: read the room, try a
 quiet route, use gadgets carefully, recover from detection, finish the
 mission once, then replay with a specific improvement goal.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Step</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do</th>
 </tr>
 </thead>
 <tbody>
 {firstLightFirstHourRouteRows.map(([step, action]) => (
 <tr key={step} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{step}</td>
 <td className="px-4 py-3 text-muted-foreground">{action}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section id="beginner-habits" className="prose-game">
 <h2>First-Session Priorities</h2>
 <ArticleImage
 src={firstLightImages.background}
 alt="007 First Light action scene stealth and gadget beginner guide image"
 caption="The first useful habit is reading a room before acting: guards, routes, cover, gadgets, and exits matter before the first shot."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Beginner habit</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
 </tr>
 </thead>
 <tbody>
 {firstLightBeginnerRows.map(([habit, reason]) => (
 <tr key={habit} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{habit}</td>
 <td className="px-4 py-3 text-muted-foreground">{reason}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section id="first-mission" className="prose-game">
 <h2>First Mission Decision Checklist</h2>
 <ArticleImage
 src={firstLightImages.header}
 alt="007 First Light city stealth first mission checklist image"
 caption="Before using a weapon or gadget, read the room: camera lines, guard routes, alternate entries, cover, and exits all change the safest first move."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Situation</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Beginner move</th>
 </tr>
 </thead>
 <tbody>
 {firstLightFirstMissionRows.map(([situation, move]) => (
 <tr key={situation} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{situation}</td>
 <td className="px-4 py-3 text-muted-foreground">{move}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section id="recovery" className="prose-game">
 <h2>If Things Go Wrong</h2>
 <p>
 New players do not need to restart every mistake. A messy first
 mission is useful if it teaches where sightlines, gadget timing,
 firefights, or driving pressure start to matter. Use the recovery
 table below before deciding to replay.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Problem</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Recovery path</th>
 </tr>
 </thead>
 <tbody>
 {firstLightRecoveryRows.map(([problem, recovery]) => (
 <tr key={problem} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{problem}</td>
 <td className="px-4 py-3 text-muted-foreground">{recovery}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section id="approach" className="prose-game">
 <h2>Pick the Right Approach</h2>
 <p>
 A useful beginner guide should not force one playstyle. The practical
 question is which approach fits the current room. Stealth, gadgets,
 bluffing, melee, firefights, and driving are different tools; the
 right one depends on awareness, objective pressure, and how much noise
 the mission can tolerate.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Approach</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Use it when</th>
 </tr>
 </thead>
 <tbody>
 {firstLightApproachRows.map(([approach, use]) => (
 <tr key={approach} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{approach}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>How to Think About Difficulty and License to Kill</h2>
 <p>
 If you are new, avoid starting with the harshest mindset. Learn
 camera behavior, gadget timing, melee range, firearm recoil, and
 vehicle handling before chasing a clean or high-pressure route. Once
 the basic rhythm is clear, stricter difficulty or modifier runs become
 useful instead of frustrating.
 </p>

 <h2>How to Think About Mission Replay</h2>
 <p>
 Because Steam describes replaying missions with additional modifiers,
 your first run should be clean and readable. Note whether you used
 stealth, gadgets, bluffing, driving, or open combat. That makes a
 second route more useful than simply replaying the same choices.
 </p>

 <h2>Opening Gameplay Video</h2>
 <p>
 The official first 13 minutes video is helpful if you want to see
 pacing and controls, but it shows opening mission content. Skip it if
 your priority is a blind first mission.
 </p>

 <h2 id="stealth-vs-loud">If You Prefer Stealth vs If You Prefer Loud</h2>
 <p>
 If you prefer stealth, treat every room as a read-then-move puzzle,
 use one gadget to create access, and save firearms for forced combat.
 If you prefer loud play, do not assume the missions reward full
 aggression: cover, spacing, and gadget timing still matter, and
 noise will trigger responses you may not be ready for. The practical
 answer is the same: pick the right tool for the room instead of
 forcing a single playstyle.
 </p>

 <h2 id="opening-vs-blind">If You Watch the Opening vs If You Go In Blind</h2>
 <p>
 If you watch the official first 13 minutes video, you trade a blind
 first mission for useful pacing and control context. If you go in
 blind, you keep the surprise of the opening mission at the cost of
 slower learning. Both choices are valid; pick the one that matches
 whether spoilers or faster onboarding matters more to you, and use
 replay modifiers later to revisit the opening with a different goal.
 </p>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Beginner Plan</h2>
 <ActionTable rows={firstLightBeginnerActionRows} />

 <SourceCheckTable title="007 First Light Beginner Sources" rows={firstLightBeginnerSourceRows} />

 <VideoEmbed
 videoId={firstLightVideos[1].id}
 title={firstLightVideos[1].title}
 caption={firstLightVideos[1].caption}
 />
 </FirstLightArticle>
 );
}
