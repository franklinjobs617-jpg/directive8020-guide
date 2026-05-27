import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { ActionTable, BlufBox, RelatedGuides, SearchAnswerPanel, StatusPanel } from '@/components/guide-blocks';
import { EpisodeNavigator } from '@/components/tools/episode-navigator';
import { MyProgressPanel } from '@/components/tools/my-progress-panel';

export const metadata: Metadata = {
  title: 'Directive 8020 Walkthrough - All 8 Episodes & Choices',
  description:
    'Directive 8020 walkthrough for all 8 episodes: Little Star, Best Laid Plans, The Sample, Dragnet, Mr. Williams, Hostile Takeover, Revelation, Come True, choices, QTEs, collectibles, and endings.',
  alternates: {
    canonical: '/directive-8020-walkthrough',
  },
};

const faqs = [
  {
    question: 'How many episodes are in Directive 8020?',
    answer:
      'Directive 8020 has eight episodes: Little Star, Best Laid Plans, The Sample, Dragnet, Mr. Williams, Hostile Takeover, Revelation, and Come True.',
  },
  {
    question: 'Should I use a walkthrough for my first Directive 8020 playthrough?',
    answer:
      'Use a spoiler-safe walkthrough on your first run. Read survival rules, exploration habits, and tracking templates, but save exact death and ending routes for a second run unless you are chasing trophies immediately.',
  },
  {
    question: 'What should I track in every Directive 8020 chapter?',
    answer:
      'Track playable character, objective, separated crew, mimic clues, Destinies, QTEs, stealth failures, scanner prompts, collectibles, deaths, relationships, and Turning Points.',
  },
  {
    question: 'How do Turning Points change the walkthrough?',
    answer:
      'Turning Points let you revisit major decisions through the story tree, so the best route method is to finish one clean run, then replay specific branches instead of restarting the whole game.',
  },
  {
    question: 'How many collectibles are in Directive 8020?',
    answer:
      'Current collectible guides list 65 collectibles: 50 normal Secrets, 10 Simms Recordings, and 5 O Death Secrets. The O Death route is tied to Curator cleanup.',
  },
];

const sourceNotes = [
  {
    source: 'Official Steam Community news',
    usefulFor:
      'Release date, five astronauts, mimic premise, QTEs, impossible choices, stealth, Turning Points, Movie Night, and online multiplayer timing.',
    href: 'https://steamcommunity.com/app/2255370/announcements/',
  },
  {
    source: 'TechRadar interview',
    usefulFor:
      'Why Turning Points exist: saving favorite characters, replaying for endings, and achievement cleanup.',
    href: 'https://www.techradar.com/gaming/directive-8020-executive-producer-says-the-turning-points-system-was-added-for-players-who-want-to-keep-everyone-alive-but-also-for-a-big-percentage-of-our-hardcore-fans-that-will-replay-the-game-to-get-all-endings',
  },
  {
    source: 'PC Gamer preview',
    usefulFor:
      'Episode-style pacing, first-run blind advice, second-run branch completion, and episode one / episode four preview context.',
    href: 'https://www.pcgamer.com/games/horror/directive-8020-is-using-an-episodic-structure-straight-out-of-a-limited-tv-series-to-be-mindful-of-peoples-time/',
  },
  {
    source: 'GamesRadar episode guide',
    usefulFor:
      'Confirmed eight-episode structure, episode names, broad chapter difficulty, and replay guidance for late outcomes.',
    href: 'https://www.gamesradar.com/games/horror/directive-8020-length-episodes/',
  },
  {
    source: 'Destructoid review',
    usefulFor:
      'Reviewer-reported Destinies, scanner behavior, eight episodes, five substantial endings, and late-game pacing.',
    href: 'https://www.destructoid.com/reviews/directive-8020-review/',
  },
  {
    source: '100% Guides collectible guide',
    usefulFor:
      '65-collectible breakdown: 50 normal Secrets, 10 Simms Recordings, and 5 O Death Secrets.',
    href: 'https://www.100pguides.com/guides/directive-8020-all-collectibles',
  },
];

const firstRunActions = [
  {
    step: 'Before episode 1',
    doThis: 'Pick readable brightness, enable subtitles, test QTE prompts, and decide whether this is blind or completion-focused.',
    why: 'Directive 8020 mixes cinematic scenes with sudden action, so unreadable prompts can create avoidable deaths.',
  },
  {
    step: 'During exploration',
    doThis: 'Sweep side rooms, terminals, bodies, crew spaces, labs, and objective-adjacent corridors before leaving.',
    why: 'Current collectible guides list 65 collectibles, and evidence can affect trust, Destinies, and route interpretation.',
  },
  {
    step: 'During stealth',
    doThis: 'Use crouch movement, line-of-sight breaks, hiding spots, and the scanner only when the risk is worth it.',
    why: 'Official material confirms stealth pressure, while review coverage describes the scanner as a useful objective and enemy tool.',
  },
  {
    step: 'After each episode',
    doThis: 'Open the Story Tree, record Turning Points, deaths, relationships, Destinies, locked branches, and missed collectibles.',
    why: 'Turning Points make replay efficient only if you know which variable you are changing.',
  },
];

const chapterTemplate = [
  ['Playable character', 'Who you control and whether another player owns them in Movie Night.'],
  ['Opening state', 'Crew alive, injured, separated, armed, suspicious, or locked out of an area.'],
  ['Objective', 'The visible mission goal and the hidden route risk behind it.'],
  ['Destiny / character direction', 'Any trait-like decision that changes how a character acts later.'],
  ['Mimic clues', 'Contradictions, impossible knowledge, isolation, duplicate characters, or unsafe trust prompts.'],
  ['QTE / stealth', 'Inputs, chase routes, hiding spots, scanner use, deaths, and injuries.'],
  ['Collectibles', 'Logs, recordings, notes, secrets, environmental lore, and Deluxe-related relics.'],
  ['Turning Points', 'Story Tree node, branch tested, result, and whether it affects endings.'],
];

const knownEpisodes = [
  {
    id: 'episode-1',
    title: 'Episode 1: Little Star',
    href: '/directive-8020-little-star-walkthrough',
    status: 'Known title',
    focus: 'Opening control, Brianna Young baseline, early mimic rules, first Destiny and Turning Point notes.',
    route:
      'Play this as calibration. Learn prompt timing, inspect crew spaces, and write down the first moment a character separates or acts with information they should not have.',
  },
  {
    id: 'episode-2',
    title: 'Episode 2: Best Laid Plans',
    href: '/directive-8020-best-laid-plans-walkthrough',
    status: 'Known title',
    focus: 'Mission stress, early relationship shifts, blame, cooperation, and evidence before accusations.',
    route:
      'Favor calm, evidence-based choices. If two characters disagree, log both the relationship change and who physically controls the next risky action.',
  },
  {
    id: 'episode-3',
    title: 'Episode 3: The Sample',
    href: '/directive-8020-the-sample-walkthrough',
    status: 'Known title',
    focus: 'Specimen handling, lab evidence, containment logic, and mimic suspicion.',
    route:
      'Search lab spaces before objective exits. Note who argues for containment, destruction, secrecy, or speed because those positions may return in late trust checks.',
  },
  {
    id: 'episode-4',
    title: 'Episode 4: Dragnet',
    href: '/directive-8020-dragnet-walkthrough',
    status: 'Known title',
    focus: 'Stealth pressure, pursuit routing, scanner habits, and mid-run branch testing.',
    route:
      'Map cover, sight lines, scanner timing, and chase exits. Keep QTE success consistent when testing whether a death came from stealth or from a prior choice.',
  },
  {
    id: 'episode-5',
    title: 'Episode 5: Mr. Williams',
    href: '/directive-8020-mr-williams-walkthrough',
    status: 'Known title',
    focus: 'Williams route pressure, prior episode consequences, suspect lists, and mid-game death locks.',
    route:
      'Treat this as the mid-game audit. Before changing anything, list every living character, known clue, weapon/tool state, and unresolved suspicion. Some outcomes here are influenced by earlier episode choices.',
  },
  {
    id: 'episode-6',
    title: 'Episode 6: Hostile Takeover',
    href: '/directive-8020-hostile-takeover-walkthrough',
    status: 'Known title',
    focus: 'Late-game branching, survivor-dependent scenes, paranoia, deaths, and Destinies paying off.',
    route:
      'Save this chapter for careful branch testing, not rushed cleanup. Which crew members are alive by this point can change how much of the episode you see.',
  },
  {
    id: 'episode-7',
    title: 'Episode 7: Revelation',
    href: '/directive-8020-revelation-walkthrough',
    status: 'Known title',
    focus: 'Final survivor setup, outside-Cassiopeia consequences, mission priorities, and locked relationships.',
    route:
      'Change one variable at a time: a trust decision, a QTE result, a Destiny, or a collectible route. Several 50-50 style decisions here can reshape the final outcome.',
  },
  {
    id: 'episode-8',
    title: 'Episode 8: Come True',
    href: '/directive-8020-come-true-walkthrough',
    status: 'Known title',
    focus: 'Final choices, ending split, survivor state, and post-ending cleanup notes.',
    route:
      'Record the exact final state: survivors, deaths, mimic status, mission outcome, O Death progress, collectibles, and ending name. Use late Turning Points for all-ending cleanup.',
  },
];

const routePriorities = [
  ['Best ending base', 'Keep the crew alive, preserve evidence, verify mimic claims, pass QTEs, and protect useful relationships.'],
  ['All endings route', 'Finish one clean ending, then branch from late Turning Points to test survivor count, mission choice, and evidence state.'],
  ['All collectibles route', 'Use the current 65-collectible target and check every episode before advancing through irreversible exits.'],
  ['Movie Night route', 'Assign one player to record choices and another to watch for clues, because local co-op can make trust decisions chaotic.'],
  ['Survival Mode route', 'Accept that consequences are final; use this only after learning prompt timing and route risks.'],
];

const transcriptRouteNotes = [
  ['Opening mission', 'The transcript frames the Cassiopeia as a survey vessel sent from a dying Earth toward Tau Ceti f, with Andromeda positioned as the colony follow-up.', 'Record mission context before judging late rescue or warning choices.', 'Low'],
  ['Early breach and Oracle', 'A hull breach, Oracle status reporting, lockdowns, and scanner tracing appear early in the route.', 'Treat scanner use and ship-system notes as core walkthrough data, not optional flavor.', 'Low'],
  ['Williams suspicion', 'Mid-game scenes connect Williams with Oracle access, identity confusion, scanner checks, and corporate secrecy.', 'Verify returned or isolated characters through timeline, witnesses, and scan evidence.', 'Medium'],
  ['Hydroponics / fire crisis', 'A later route mixes locked doors, fire control, oxygen danger, antenna repair limits, and rescue pressure.', 'Separate physical rescue timing from suspicion and communications outcomes.', 'Medium'],
  ['Finale mission choice', 'Late scenes frame the route around distress signal versus warning, Andromeda safety, Earth contamination, and mission truth.', 'Log crew state, evidence state, and message choice before ending cleanup.', 'High'],
  ['Cycle truth reveal', 'The late reveal connects copied memories, synthetic bodies, repeat missions, Corinth, Earth knowledge, and Oracle protocols.', 'Move detailed interpretation to Cycle 13 and all-endings pages.', 'High'],
];

const navigatorEpisodes = knownEpisodes.map((episode, index) => ({
  id: episode.id,
  title: episode.title,
  href: episode.href,
  focus: episode.focus,
  qte:
    index === 3
      ? 'Stealth and chase pressure'
      : index >= 6
        ? 'Finale timing checks'
        : 'Prompt timing and route notes',
  collectible:
    index >= 7
      ? 'Final sweep before ending'
      : index >= 4
        ? 'Route-locked evidence check'
        : 'Search before objective exit',
  turningPoint:
    index >= 6
      ? 'Change one finale variable'
      : 'Record branch before replay',
  time:
    index === 0
      ? 'First-run calibration'
      : index >= 6
        ? 'Ending cleanup'
        : 'Route mapping',
}));

const searchIntentRows = [
  {
    query: 'Directive 8020 walkthrough',
    answer: 'Play all eight episodes in order, record Turning Points after each chapter, and save destructive branches for cleanup.',
    href: '#episode-index',
    label: 'Full route',
  },
  {
    query: 'How many chapters or episodes?',
    answer: 'There are eight episodes: Little Star, Best Laid Plans, The Sample, Dragnet, Mr. Williams, Hostile Takeover, Revelation, and Come True.',
    href: '#episode-index',
    label: 'Quick answer',
  },
  {
    query: 'Spoiler-safe first run',
    answer: 'Search rooms, keep the crew together, verify separated characters, pass QTEs, and log evidence without reading ending routes yet.',
    href: '#first-run-plan',
    label: 'Low spoiler',
  },
  {
    query: '100% walkthrough route',
    answer: 'Finish one clean route, then branch for endings, deaths, collectibles, trophies, and Movie Night variants from Turning Points.',
    href: '#route-priorities',
    label: 'Completion',
  },
  {
    query: 'Chapter checklist',
    answer: 'Track playable character, objective, mimic clues, QTEs, stealth, collectibles, deaths, relationships, and Story Tree branches.',
    href: '#chapter-template',
    label: 'Checklist',
  },
];

const jumpLinks = [
  { href: '#episode-index', label: '8 episodes' },
  { href: '#first-run-plan', label: 'First run' },
  { href: '#route-priorities', label: '100% route' },
  { href: '#chapter-template', label: 'Chapter checklist' },
  { href: '/directive-8020-choices-consequences', label: 'Choices' },
  { href: '/directive-8020-all-endings', label: 'Endings' },
];

export default function WalkthroughPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Walkthrough - All 8 Episodes & Choices',
          description:
            'Directive 8020 walkthrough for all 8 episodes, route notes, QTE and stealth tips, scanner use, collectibles, Turning Points, Destinies, endings prep, and spoiler-safe first-run advice.',
          url: '/directive-8020-walkthrough',
          datePublished: '2026-05-12',
          dateModified: '2026-05-21',
          imageUrl: '/d8020-screenshot-07.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Walkthrough' }]} />
        <PageHero src="/d8020-screenshot-07.jpg" alt="Directive 8020 corridor walkthrough screenshot" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Walkthrough: All 8 Episodes and Choices
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          This Directive 8020 walkthrough covers all eight episodes in order:
          Little Star, Best Laid Plans, The Sample, Dragnet, Mr. Williams,
          Hostile Takeover, Revelation, and Come True. Use it first as a
          spoiler-safe route, then as a cleanup map for choices, Turning Points,
          Destinies, stealth, QTEs, collectibles, deaths, and endings.
        </p>

        <SearchAnswerPanel
          title="What is the correct Directive 8020 walkthrough order?"
          answer="Directive 8020 has eight episodes. For a useful first run, play them in order, record every Story Tree Turning Point, and avoid changing multiple route variables at once. For 100%, branch later for endings, deaths, collectibles, and trophies."
          intentRows={searchIntentRows}
          jumpLinks={jumpLinks}
        />

        <BlufBox>
          <p>
            <strong>Best route:</strong> finish one clean playthrough before
            chasing every branch. Search thoroughly, keep the crew together when
            possible, verify separated characters before trusting them, pass
            QTEs consistently, and log every Turning Point after each episode.
          </p>
        </BlufBox>

        <StatusPanel
          items={[
            { label: 'Core systems', value: 'Mimic threat, choices, QTEs, stealth, Turning Points, Story Tree, and Movie Night are official-source supported.', status: 'verified' },
            { label: 'Episode count', value: '8 episodes: Little Star through Come True.', status: 'verified' },
            { label: 'Collectible count', value: '65 collectibles are currently listed: 50 normal Secrets, 10 Simms Recordings, and 5 O Death Secrets.', status: 'verified' },
            { label: 'Late chapter titles', value: 'Episodes 5-8 are Mr. Williams, Hostile Takeover, Revelation, and Come True.', status: 'verified' },
          ]}
        />

        <MyProgressPanel />
        <EpisodeNavigator episodes={navigatorEpisodes} />

        <VideoEmbed
          videoId="gaQkzfA14G4"
          title="Directive 8020 official gameplay reference trailer"
          caption="Use the official trailer as the visual baseline for this walkthrough: Cassiopeia exploration, crew distrust, mimic pressure, and cinematic survival horror pacing."
        />

        <div className="prose-game">
          <h2>Walkthrough Sources and What They Confirm</h2>
          <p>
            This page does not copy another route. It combines official feature
            information with current preview and review reporting, then turns
            that material into an original, player-facing route framework. Exact
            late-game choices should still be verified from the in-game Story
            Tree before they are treated as final.
          </p>
        </div>

        <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Source</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Walkthrough use</th>
              </tr>
            </thead>
            <tbody>
              {sourceNotes.map((item) => (
                <tr key={item.source} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.source}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{item.usefulFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>Best Way to Use This Walkthrough</h2>
          <p>
            Directive 8020 is a branching horror story, so a good walkthrough
            should not push every spoiler into your first screen. Use this page
            in three passes: first as a survival checklist, second as a Story
            Tree route map, and third as a completion tracker for endings,
            deaths, trophies, and collectibles.
          </p>
          <ul>
            <li><strong>First run:</strong> stay mostly blind, but track separated characters, evidence, deaths, and Turning Points.</li>
            <li><strong>Second run:</strong> use the Story Tree to test alternate choices episode by episode.</li>
            <li><strong>Completion run:</strong> target collectibles, death scenes, endings, trophies, and Movie Night variants.</li>
          </ul>

          <h2 id="first-run-plan">First-Run Action Plan</h2>
          <p>
            Follow this table if you only want practical advice while playing.
            Every step includes the action to take and the reason it matters,
            so you can make safer choices without reading every spoiler.
          </p>
          <ActionTable rows={firstRunActions} />

          <h2>Video Transcript Route Notes</h2>
          <p>
            Route notes should be treated as paraphrased context, not copied
            dialogue. If names, locations, or late-game choices look different
            in your save, trust the in-game Story Tree and record the branch.
          </p>
        </div>

        <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Scene</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">What happens</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player action</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Spoiler level</th>
              </tr>
            </thead>
            <tbody>
              {transcriptRouteNotes.map(([scene, whatHappens, playerAction, spoilerLevel]) => (
                <tr key={scene} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{scene}</td>
                  <td className="px-4 py-3 text-muted-foreground">{whatHappens}</td>
                  <td className="px-4 py-3 text-muted-foreground">{playerAction}</td>
                  <td className="px-4 py-3 text-muted-foreground">{spoilerLevel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">

          <ArticleImage
            src="/d8020-screenshot-01.jpg"
            alt="Directive 8020 crew route planning screenshot"
            caption="The walkthrough starts with crew state: who is alive, who is separated, who has evidence, and who may be unsafe to trust."
          />

          <h2 id="episode-index">Episode Walkthrough Index</h2>
          <p>
            Known public episode titles are listed where available. Later
            episodes are intentionally labeled as capture slots so the page can
            be updated with exact in-game titles, decisions, deaths, and
            collectibles after route verification.
          </p>
        </div>

        <div className="grid gap-3 my-6">
          {knownEpisodes.map((episode) => (
            <a
              key={episode.id}
              href={episode.href}
              className="rounded-lg border border-border/50 bg-card/30 p-4 transition-colors hover:border-d8020/40"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-bold text-foreground">{episode.title}</h3>
                <span className="w-fit rounded border border-d8020/30 bg-d8020/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-d8020">
                  {episode.status}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{episode.focus}</p>
            </a>
          ))}
        </div>

        <div className="prose-game">
          {knownEpisodes.map((episode) => (
            <section key={episode.id}>
              <h2 id={episode.id}>{episode.title} Walkthrough</h2>
              <p>{episode.route}</p>
              <ul>
                <li><strong>Main focus:</strong> {episode.focus}</li>
                <li><strong>Record:</strong> playable character, objective, evidence, separated crew, deaths, and Story Tree branches.</li>
                <li><strong>Replay rule:</strong> change one variable per Turning Point so you can identify what caused the new result.</li>
              </ul>
            </section>
          ))}

          <ArticleImage
            src="/d8020-screenshot-07.jpg"
            alt="Directive 8020 stealth walkthrough route screenshot"
            caption="Stealth notes should include cover, sound risk, scanner timing, QTEs, deaths, and whether a failure changes the Story Tree."
          />

          <h2 id="route-priorities">Route Priorities by Player Goal</h2>
          <p>
            Do not use the same route for every goal. A blind story run, a best
            ending route, and a trophy route all need different tolerance for
            spoilers and rewinds.
          </p>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <tbody>
              {routePriorities.map(([goal, method]) => (
                <tr key={goal} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 text-foreground font-medium w-44">{goal}</td>
                  <td className="px-4 py-3 text-muted-foreground">{method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2 id="chapter-template">Chapter Tracking Template</h2>
          <p>
            Use this template for each episode. It keeps every chapter note
            practical: who you controlled, what changed, what was missed, and
            which branch should be tested next.
          </p>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <tbody>
              {chapterTemplate.map(([label, value]) => (
                <tr key={label} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 text-foreground font-medium w-44">{label}</td>
                  <td className="px-4 py-3 text-muted-foreground">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>QTE, Stealth, Scanner, and Chase Tips</h2>
          <p>
            Official launch material says Directive 8020 keeps Supermassive
            staples like split-second QTEs and impossible choices while adding
            more active stealth. Review coverage also describes a scanner that
            can point toward objectives and enemies. Use those tools carefully:
            relying on the scanner can reduce uncertainty, but ignoring it in a
            dangerous section can cost a character.
          </p>
          <ul>
            <li>Keep controller or keyboard input stable before long action scenes.</li>
            <li>Crouch, wait, and break line of sight before sprinting through threat zones.</li>
            <li>Use the scanner to confirm danger, then put attention back on movement and cover.</li>
            <li>When testing branches, repeat QTE outcomes consistently so dialogue choices remain the only changed variable.</li>
          </ul>

          <h2>Collectibles and Evidence</h2>
          <p>
            Treat collectibles as route data, not just lore. In a mimic story,
            logs and recordings can explain contradictions, crew history,
            Cassiopeia systems, and safer trust decisions. Current collectible
            guides list 65 total items: 50 normal Secrets, 10 Simms Recordings,
            and 5 O Death Secrets tied to Curator cleanup.
          </p>
          <ul>
            <li>Search crew quarters, medical areas, labs, control rooms, hydroponics-style spaces, wreckage paths, and sealed doors.</li>
            <li>Record whether each collectible appears before or after a major trust decision.</li>
            <li>Check if collectibles remain saved after replaying from a Turning Point.</li>
            <li>Separate required evidence from optional lore so the final guide can support both casual and 100% players.</li>
          </ul>

          <h2>When to Rewind with Turning Points</h2>
          <p>
            Turning Points are useful, but rewinding too often can make the
            first playthrough feel artificial. The practical rule is simple:
            accept consequences during a blind run unless a death ruins your
            goal, then use the Story Tree aggressively for second-run cleanup.
          </p>
          <ol>
            <li>Finish the episode if the run is still readable.</li>
            <li>Open the Story Tree and identify the earliest relevant Turning Point.</li>
            <li>Write down the original choice, new choice, and changed result.</li>
            <li>Do not change QTE success, evidence, and dialogue in the same test.</li>
            <li>Move ending tests to late-game branches after one full route is complete.</li>
          </ol>

          <h2>Related Walkthrough Pages</h2>
          <ul>
            <li><a href="/directive-8020-all-endings">All Endings Guide</a></li>
            <li><a href="/directive-8020-how-to-save-everyone">How to Save Everyone</a></li>
            <li><a href="/directive-8020-choices-consequences">Choices &amp; Consequences</a></li>
            <li><a href="/directive-8020-collectibles-heirlooms">Collectibles &amp; Heirlooms</a></li>
            <li><a href="/directive-8020-o-death-secrets-curator">O Death Secrets &amp; Curator</a></li>
            <li><a href="/directive-8020-cycle-13-explained">Cycle 13 Explained</a></li>
            <li><a href="/directive-8020-how-long-to-beat">How Long to Beat</a></li>
          </ul>
        </div>

        <RelatedGuides
          guides={[
            {
              href: '/directive-8020-choices-consequences',
              title: 'All Choices & Consequences',
              description: 'Check which decisions change trust, deaths, and endings.',
            },
            {
              href: '/directive-8020-all-endings',
              title: 'All Endings',
              description: 'Branch late Turning Points for best, bad, and hidden endings.',
            },
            {
              href: '/directive-8020-collectibles-heirlooms',
              title: 'Collectibles & Heirlooms',
              description: 'Track the 65 listed collectibles while moving chapter by chapter.',
            },
            {
              href: '/directive-8020-how-to-save-everyone',
              title: 'How to Save Everyone',
              description: 'Turn this walkthrough into a best-ending survival route.',
            },
            {
              href: '/directive-8020-turning-points-story-tree',
              title: 'Turning Points & Story Tree',
              description: 'Use rewinds correctly instead of replaying the full game.',
            },
            {
              href: '/directive-8020-trophy-guide',
              title: 'Trophy & Achievement Guide',
              description: 'Plan endings, collectibles, deaths, and cleanup efficiently.',
            },
          ]}
        />

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
