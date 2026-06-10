import Link from 'next/link';
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
 firstLightImages,
 firstLightLengthRows,
 firstLightMissionActionRows,
 firstLightMissionFastRows,
 firstLightMissionJumpLinks,
 firstLightMissionPlanningRows,
 firstLightMissionSearchIntent,
 firstLightMissionSourceRows,
 firstLightMissionStatusItems,
 firstLightReplayRows,
 firstLightVideos,
} from '@/lib/007-first-light';

const title = '007 First Light Mission List: Chapters, Length & Replayability';
const description =
 'Spoiler-light 007 First Light mission list guide covering chapters, how long to beat, replayability, mission modifiers, collectibles, trophies, and route planning.';
const canonical = '/games/007-first-light/mission-list-chapters-length';

export const metadata = createFirstLightMetadata({
 title,
 description,
 canonical,
 image: firstLightImages.missionBriefing,
});

const faqs = [
 {
 question: 'How many chapters are in 007 First Light?',
 answer:
 'Chapter and mission-count answers can be spoiler-heavy, so use a spoiler-light mission list first and verify full names only when you are ready for story details.',
 },
 {
 question: 'Is there a 007 First Light mission list?',
 answer:
 'Yes. Players are looking for mission-list structure, chapter planning, time-to-beat estimates, and replay cleanup after launch.',
 },
 {
 question: 'How long is 007 First Light?',
 answer:
 'Length depends on whether you follow the story, explore alternate routes, replay missions with modifiers, or chase collectibles and trophies.',
 },
 {
 question: 'Is 007 First Light replayable?',
 answer:
 'Yes. Steam describes replaying favorite missions with additional modifiers, so replay planning is part of the confirmed structure.',
 },
 {
 question: 'Are collectibles or trophies tied to missions?',
 answer:
 'Treat collectibles and trophies as mission cleanup until a fully verified checklist is available, because those details can spoil routes and objectives.',
 },
];

export default function FirstLightMissionListChaptersLengthPage() {
 return (
 <FirstLightArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Mission List"
 heroImage={firstLightImages.missionBriefing}
 heroAlt="007 First Light mission list chapters and length guide image"
 faqs={faqs}
 >
 <BlufBox title="Spoiler-Light Answer">
 <p>
 <strong>Use this page as a mission-planning guide before reading a
 full spoiler list.</strong> 007 First Light is built around cinematic
 missions, replayable routes, and additional modifiers. If you only
 need to know how to pace your first run, avoid full mission names
 until you are ready for story and location spoilers.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="007 First Light Mission List Quick Answer"
 answer="Use a spoiler-light mission shape first: opening tutorial, main objectives, stealth rooms, action spikes, and driving shifts. Replay is part of the structure, and time-to-beat depends on your run type. Collectible and trophy details should wait for verified checklists."
 intentRows={firstLightMissionSearchIntent}
 jumpLinks={firstLightMissionJumpLinks}
 />

 <StatusPanel items={firstLightMissionStatusItems} />

 <section id="fast-answers" className="prose-game">
 <h2>Fast Answers for Mission List, Chapters, and Length</h2>
 <p>
 The safest way to answer mission-list searches is to separate route
 planning from story spoilers. Players who only want to know whether
 the game is short, replayable, or chapter-based should not have the
 full campaign spoiled in the first screen.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Question</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current answer</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Spoiler level</th>
 </tr>
 </thead>
 <tbody>
 {firstLightMissionFastRows.map(([question, answer, spoiler]) => (
 <tr key={question} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 <td className="px-4 py-3 text-muted-foreground">{spoiler}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section id="mission-shape" className="prose-game">
 <h2>How to Use a Mission List Without Spoiling the Campaign</h2>
 <ArticleImage
 src={firstLightImages.missionRoute}
 alt="007 First Light spoiler-light route planning image"
 caption="For a first run, track route shape rather than every mission name: opening tutorial, main objectives, stealth rooms, action spikes, driving shifts, replay modifiers, and cleanup points."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mission signal</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to check</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Spoiler caution</th>
 </tr>
 </thead>
 <tbody>
 {firstLightMissionPlanningRows.map(([signal, check, caution]) => (
 <tr key={signal} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{signal}</td>
 <td className="px-4 py-3 text-muted-foreground">{check}</td>
 <td className="px-4 py-3 text-muted-foreground">{caution}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section id="length" className="prose-game">
 <h2>How Long to Beat 007 First Light</h2>
 <p>
 Length depends on how you play. A story-first player who accepts
 messy stealth and keeps moving will finish faster than someone who
 watches patrols, searches alternate routes, replays mission sections,
 or prepares for collectibles and trophies.
 </p>
 <ArticleImage
 src={firstLightImages.missionPlanning}
 alt="007 First Light how long to beat and mission planning image"
 caption="Time-to-beat estimates are most useful when they match your style: story-only, route exploration, replay modifiers, or completion cleanup."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Run type</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it means</th>
 </tr>
 </thead>
 <tbody>
 {firstLightLengthRows.map(([type, meaning]) => (
 <tr key={type} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{type}</td>
 <td className="px-4 py-3 text-muted-foreground">{meaning}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section id="replay" className="prose-game">
 <h2>Replayability, Modifiers, and Cleanup</h2>
 <p>
 The strongest confirmed replay hook is mission replay with additional
 modifiers. That makes a simple first-run notebook useful: mark where
 detection happened, which gadget solved the room, whether a loud route
 was forced, and which sections feel worth replaying later.
 </p>
 <ArticleImage
 src={firstLightImages.missionReplay}
 alt="007 First Light mission replay modifiers guide image"
 caption="Replay becomes more useful when you give each run one purpose: cleaner stealth, gadget route, faster objective path, louder action route, collectible cleanup, or trophy cleanup."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Replay hook</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player note</th>
 </tr>
 </thead>
 <tbody>
 {firstLightReplayRows.map(([hook, note]) => (
 <tr key={hook} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{hook}</td>
 <td className="px-4 py-3 text-muted-foreground">{note}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>What to Read Next</h2>
 <p>
 If you are starting the game now, use the{' '}
 <Link href="/games/007-first-light/beginner-guide">
 beginner guide
 </Link>{' '}
 for first-session routing. If you are deciding whether the game is
 worth buying for mission length or replay value, use the{' '}
 <Link href="/games/007-first-light/review-embargo">
 reviews and buying guide
 </Link>{' '}
 to check current reviews, Denuvo, Steam user reports, and performance
 risk.
 </p>

 <h2 id="story-vs-completionist">If You Are Story-Focused vs If You Are a Completionist</h2>
 <p>
 If you are story-focused, treat the campaign as a cinematic Bond
 origin run. Skip collectible chasing, accept some messy stealth, and
 use replay later if you want a cleaner route. If you are a
 completionist, do not chase every collectible during the first run;
 keep a short list of missed missions and return through replay with
 one specific cleanup goal. Both are valid, but the planning cost is
 very different, and that changes which mission-list searches help
 you.
 </p>

 <h2 id="buying-on-length">If You Are Buying on Length vs If You Are Buying on Replay</h2>
 <p>
 If you are buying on length, compare time-to-beat against your run
 type and remember that replay and modifiers can extend the useful
 life of the campaign well past the first finish. If you are buying
 on replay, treat mission replay with additional modifiers as the
 confirmed hook and decide whether you actually want a second or
 third pass before buying. The right answer depends on whether you
 value the first finish or the long-tail replay value more.
 </p>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Mission Planning Plan</h2>
 <ActionTable rows={firstLightMissionActionRows} />

 <SourceCheckTable title="007 First Light Mission List Sources" rows={firstLightMissionSourceRows} />

 <VideoEmbed
 videoId={firstLightVideos[1].id}
 title={firstLightVideos[1].title}
 caption="Official opening gameplay video. It is useful for checking early mission pacing, but it contains opening mission spoilers."
 />
 </FirstLightArticle>
 );
}
