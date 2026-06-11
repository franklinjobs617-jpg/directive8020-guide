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

const title = '007 First Light Beginner Guide: Weapons, Gadgets, Stealth & First Mission Tips';
const description =
 'Spoiler-light 007 First Light beginner guide: weapon comparison, gadget recommendations, stealth, bluffing, firefights, driving, mission replay, and first-hour priorities.';
const canonical = '/games/007-first-light/beginner-guide';

export const metadata = createFirstLightMetadata({
 title,
 description,
 canonical,
 image: firstLightImages.hero,
});

const weaponComparisonRows = [
 ['Standard pistol', 'Silent takedowns at close range. Reliable and quiet.', 'Best for stealth-first runs. Use for single-guard takedowns without triggering alarms. Ammo is common throughout missions.'],
 ['Submachine gun (SMG)', 'Rapid fire for mid-range suppression. Moderate noise.', 'Best for loud escalation after stealth breaks. Effective against groups but draws attention quickly.'],
 ['Assault rifle', 'High damage at medium to long range. Loud.', 'Best for open combat sections. Use when the mission shifts to action sequences. Limited ammo in stealth-focused missions.'],
 ['Shotgun', 'High close-range burst damage. Very loud.', 'Best for tight corridors and forced encounters. Overkill for stealth but devastating when combat is unavoidable.'],
 ['Sniper rifle', 'Long-range precision. Single-shot focus.', 'Best for creating safe entry points from a distance. Rare in early missions. Prioritize gadget-based infiltration over sniping.'],
];

const gadgetRecommendationRows = [
 ['Camera jammer', 'Disables cameras in a radius. Creates safe movement windows.', 'Use before entering camera-covered rooms. Saves time over finding the camera control panel.'],
 ['Distraction device', 'Noise maker that draws guards away from patrol routes.', 'Use to clear a specific path without engaging. Effective when guards stand between you and an objective.'],
 ['Lockpick / Bypass tool', 'Opens locked doors and alternative routes.', 'Use to access optional paths, shortcuts, and collectible rooms. Prioritize picking doors that bypass heavy guard areas.'],
 ['Smoke / Flash gadget', 'Creates visual cover or disorients enemies.', 'Use when stealth breaks and you need to reposition. A smoke deploy buys time to find cover and plan the next move.'],
 ['Scanner / Detection tool', 'Reveals guard routes, camera cones, and trap locations.', 'Use at the start of each new room. Reading patrol paths before moving prevents most beginner detection mistakes.'],
];

const faqs = [
 {
 question: 'Should I play 007 First Light stealthy or loud?',
 answer:
 'Start stealth-first and escalate only when needed. Steam describes silent and loud options, including fists, firepower, gadgets, infiltration, and bluffing past guards.',
 },
 {
 question: 'Is 007 First Light like Hitman?',
 answer:
 'Expect IO Interactive mission craft and multiple approaches, but it is a cinematic Bond origin campaign with stealth, gadgets, driving, and action -- not a pure Hitman sandbox.',
 },
 {
 question: 'What weapons should I use as a beginner?',
 answer:
 'Start with the standard pistol for stealth takedowns. Keep an SMG or assault rifle for loud escalation. Weapon choice should match the room: quiet first, loud as backup.',
 },
 {
 question: 'Are gadgets important in 007 First Light?',
 answer:
 'Yes. Gadgets are essential route tools for access, distraction, and camera bypass. Use one gadget at a time and save tools for future rooms when possible.',
 },
 {
 question: 'What gadget should I prioritize?',
 answer:
 'The camera jammer and scanner are the most useful early gadgets. They let you read the room and create safe movement windows without triggering alarms.',
 },
 {
 question: 'Can you replay missions in 007 First Light?',
 answer:
 'Steam says players can replay favorite missions with additional modifiers. Record your first route so you can test a cleaner approach on replay.',
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
 Choosing the right approach depends on which options the current room
 supports. Stealth, gadgets, bluffing, melee, firefights, and driving
 are different tools; the right one depends on awareness, objective
 pressure, and how much noise the mission can tolerate.
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

 <h2 id="weapon-comparison" className="mb-3 mt-10 text-2xl font-bold tracking-[-0.29px] text-foreground">
 Weapon Comparison Table
 </h2>
 <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
 Choose weapons based on mission context. The standard pistol is best
 for stealth-first approaches, while SMGs and assault rifles provide
 backup when combat is unavoidable.
 </p>
 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Weapon</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best use</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Beginner advice</th>
 </tr>
 </thead>
 <tbody>
 {weaponComparisonRows.map(([weapon, use, advice]) => (
 <tr key={weapon} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{weapon}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 <td className="px-4 py-3 text-muted-foreground">{advice}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <ArticleImage
 src={firstLightImages.flCombat}
 alt="007 First Light combat with weapon in an action sequence"
 caption="Match your weapon to the room. Stealth sections benefit from silent pistols; loud escalation works better with SMGs or assault rifles."
 />

 <h2 id="gadget-recommendations" className="mb-3 mt-10 text-2xl font-bold tracking-[-0.29px] text-foreground">
 Gadget Recommendations
 </h2>
 <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
 Gadgets are essential route tools. The camera jammer and scanner are
 the most useful early gadgets for reading rooms and creating safe
 movement windows.
 </p>
 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Gadget</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to use</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Beginner tip</th>
 </tr>
 </thead>
 <tbody>
 {gadgetRecommendationRows.map(([gadget, howTo, tip]) => (
 <tr key={gadget} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{gadget}</td>
 <td className="px-4 py-3 text-muted-foreground">{howTo}</td>
 <td className="px-4 py-3 text-muted-foreground">{tip}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <ArticleImage
 src={firstLightImages.flGadget}
 alt="007 First Light gadget usage in a stealth mission"
 caption="Gadgets are route tools. Use one at a time, save tools for future rooms, and rely on the scanner to read patrol paths before moving."
 />

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
 If you prefer loud play, cover, spacing, and gadget timing still
 matter during combat, and noise will trigger responses you may not
 be ready for. The practical
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
