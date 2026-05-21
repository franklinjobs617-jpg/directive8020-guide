import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { JsonLd, generateFAQSchema, generateVideoGameSchema } from '@/components/json-ld';
import { VideoEmbed } from '@/components/article-media';

export const metadata: Metadata = {
  title: 'Directive 8020 Guide - All Endings, Choices, Trophies & Walkthrough',
  description:
    'Complete Directive 8020 guide: all endings, choices and consequences, character survival, trophy walkthrough, system requirements, and more. Survive the Cassiopeia.',
  openGraph: {
    title: 'Directive 8020 Guide - All Endings, Choices, Trophies & Walkthrough',
    description: 'Complete Directive 8020 guide: all endings, choices and consequences, character survival, trophy walkthrough, and more.',
    images: ['/hero-banner.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

const guideLibraries = [
  {
    title: 'Story & Routes',
    links: [
      ['All Endings Guide', '/directive-8020-all-endings'],
      ['Cycle 13 Explained', '/directive-8020-cycle-13-explained'],
      ['How Long to Beat', '/directive-8020-how-long-to-beat'],
      ['Come True Walkthrough', '/directive-8020-come-true-walkthrough'],
      ['Choices & Consequences', '/directive-8020-choices-consequences'],
      ['Mimic Detection Tool', '/directive-8020-mimic-detection-survival-guide'],
      ['All 44 Death Scenes', '/directive-8020-death-scenes-guide'],
      ['Cast & Actors', '/directive-8020-cast-actors'],
      ['Characters & Crew Roles', '/directive-8020-characters'],
    ],
  },
  {
    title: 'Setup & Platforms',
    links: [
      ['Review / Worth Buying?', '/directive-8020-review'],
      ['Release Time', '/directive-8020-release-time'],
      ['System Requirements', '/directive-8020-system-requirements'],
      ['Steam Deck & Low-End PC', '/directive-8020-steam-deck'],
      ['Crash & Performance Fix', '/directive-8020-crashing-fix'],
    ],
  },
  {
    title: 'Completion & Extras',
    links: [
      ['Trophy Guide', '/directive-8020-trophy-guide'],
      ['Trophy List & Platinum', '/directive-8020-trophy-list'],
      ['Collectibles & Heirlooms', '/directive-8020-collectibles-heirlooms'],
      ['O Death Secrets', '/directive-8020-o-death-secrets-curator'],
      ['Stealth Guide', '/directive-8020-stealth-guide'],
      ['Deluxe Edition', '/directive-8020-deluxe-edition'],
      ['Movie Night Multiplayer', '/directive-8020-movie-night-multiplayer'],
    ],
  },
];

const videos = [
  {
    id: 'gaQkzfA14G4',
    title: 'Official Trailer',
    caption: 'Best first watch: Cassiopeia setup, mimic threat, cinematic horror tone, and core story hook.',
  },
  {
    id: 'S1wyl5-8E7E',
    title: 'Turning Points Showcase',
    caption: 'Best for route planning: rewind decisions, hidden branches, death recovery, and completion cleanup.',
  },
  {
    id: 'oeiMw0KD7w0',
    title: 'Gameplay / Turning Points Trailer',
    caption: 'Best for mechanics: Story Tree, branch testing, stealth pressure, and gameplay pacing.',
  },
  {
    id: 'cdmKOH4RIWU',
    title: 'Story Trailer',
    caption: 'Best for story context: crew conflict, trust breakdown, and the sci-fi horror premise.',
  },

  {
    id: '4a_VXgNSfME',
    title: 'Official Gameplay Clip',
    caption: 'Use as a visual reference for ship spaces, movement, and encounter pacing.',
  },
  {
    id: '9CtX9O7nZeQ',
    title: 'Official Horror Clip',
    caption: 'Best for mimic and corridor-threat visual context.',
  },
  {
    id: '7nTCMOt_-Bw',
    title: 'Official Systems Clip',
    caption: 'Useful for route planning, Story Tree context, or gameplay systems.',
  },
];

const quickFacts = [
  ['Release', 'May 12, 2026'],
  ['Steam unlock', '14:00 UTC'],
  ['Platforms', 'PS5, Xbox Series X|S, PC'],
  ['Developer / Publisher', 'Supermassive Games'],
  ['Co-op', 'Movie Night couch co-op; online post-launch'],
  ['PC minimum', 'RTX 2060 / RX 5700, 16 GB RAM'],
];

const trendingSearches = [
  {
    query: 'directive 8020 trophy list',
    answer: 'Steam achievements are confirmed; exact PS5, Xbox, and Platinum names need platform capture.',
    href: '/directive-8020-trophy-list',
  },
  {
    query: 'directive 8020 achievements',
    answer: 'Use the trophy list page for platform status and the trophy guide for cleanup strategy.',
    href: '/directive-8020-trophy-list',
  },
  {
    query: 'directive 8020 cast',
    answer: 'Lashana Lynch plays Brianna Young, with five playable Cassiopeia crew members tracked by role.',
    href: '/directive-8020-cast-actors',
  },
  {
    query: 'directive 8020 actors',
    answer: 'Actor rows are separated into confirmed, reported, and pending verification to avoid bad cast data.',
    href: '/directive-8020-cast-actors',
  },
  {
    query: 'directive 8020 gameplay',
    answer: 'Use the walkthrough, stealth guide, and official video center for gameplay, Story Tree, QTE, and route notes.',
    href: '/directive-8020-walkthrough',
  },
  {
    query: 'directive 8020 trailer',
    answer: 'Watch the official trailer first, then use gameplay clips for Turning Points, stealth, and mimic context.',
    href: '#video-center',
  },
  {
    query: 'directive 8020 price',
    answer: 'Check the Deluxe Edition page before buying; exact prices must be verified on Steam, PlayStation, or Xbox by region.',
    href: '/directive-8020-deluxe-edition',
  },
  {
    query: 'directive 8020 ps5 / xbox',
    answer: 'PS5 and Xbox Series X|S are official platforms; PS5 Pro notes and Xbox status are covered in platform pages.',
    href: '/directive-8020-review',
  },
  {
    query: 'directive 8020 online co op',
    answer: 'Movie Night couch co-op is available; online multiplayer is a post-launch feature to verify before a remote group run.',
    href: '/directive-8020-movie-night-multiplayer',
  },
  {
    query: 'directive 8020 how many endings',
    answer: 'Review coverage reports 5 major ending families, with named outcomes including Homeward Bound, Docked, Mask Off, Hitchhiker, Massacre, Not Alone, and Horror.',
    href: '/directive-8020-all-endings',
  },
  {
    query: 'directive 8020 mimic',
    answer: 'Use the Mimic Detector to rank isolation, memory, timeline, and evidence clues before trusting a crew member.',
    href: '/directive-8020-mimic-detection-survival-guide',
  },
  {
    query: 'directive 8020 o death secrets',
    answer: 'Current collectible guides list 5 O Death Secrets inside the 65 collectible total.',
    href: '/directive-8020-o-death-secrets-curator',
  },
  {
    query: 'directive 8020 cycle 13 explained',
    answer: 'Cycle 13 is finale spoiler content best read after finishing Come True once.',
    href: '/directive-8020-cycle-13-explained',
  },
  {
    query: 'how long is directive 8020',
    answer: 'One route takes about 8 hours; all major outcomes and cleanup can take around 30 hours.',
    href: '/directive-8020-how-long-to-beat',
  },
  {
    query: 'directive 8020 length',
    answer: 'The game has 8 episodes, from Little Star through Come True, with replay time driven by endings and collectibles.',
    href: '/directive-8020-how-long-to-beat',
  },
];

const episodeRoutes = [
  ['Little Star', '/directive-8020-little-star-walkthrough'],
  ['Best Laid Plans', '/directive-8020-best-laid-plans-walkthrough'],
  ['The Sample', '/directive-8020-the-sample-walkthrough'],
  ['Dragnet', '/directive-8020-dragnet-walkthrough'],
  ['Mr. Williams', '/directive-8020-mr-williams-walkthrough'],
  ['Hostile Takeover', '/directive-8020-hostile-takeover-walkthrough'],
  ['Revelation', '/directive-8020-revelation-walkthrough'],
  ['Come True', '/directive-8020-come-true-walkthrough'],
];

const postLaunchRoutes = [
  {
    title: 'Episode Walkthroughs',
    body: 'Start from Episode 1 or jump to the finale with all 8 chapter routes linked in order.',
    href: '/directive-8020-walkthrough',
    image: '/review/review-episodes-1-4-turning-points-flowchart.webp',
  },
  {
    title: 'Come True Finale',
    body: 'Episode 8 route priorities, final-state tracking, Cycle 13 context, and all-ending cleanup.',
    href: '/directive-8020-come-true-walkthrough',
    image: '/review/come_true.png',
  },
  {
    title: 'O Death Secrets',
    body: 'Five O Death Secrets, Curator context, and the 65-collectible breakdown.',
    href: '/directive-8020-o-death-secrets-curator',
    image: '/review/review-endings-comparison-flowchart.webp',
  },
  {
    title: 'Cycle 13 Explained',
    body: 'Spoiler-aware explanation for Cycle 13, Booster Ring, Cassiopeia outcome, and Eisele Destiny.',
    href: '/directive-8020-cycle-13-explained',
    image: '/review/review-final-episode.webp',
  },
  {
    title: 'How Long to Beat',
    body: '8-hour main route, 30-hour completion estimate, all 8 episodes, and replay planning.',
    href: '/directive-8020-how-long-to-beat',
    image: '/review/review-episodes-1-4-turning-points-flowchart.webp',
  },
];

const missionCards = [
  {
    label: 'New player',
    title: 'I want a spoiler-free start',
    body: 'Settings, exploration habits, mimic warning signs, and when to check the Story Tree without ruining the first ending.',
    href: '/directive-8020-beginner-tips',
    image: '/d8020-screenshot-02.jpg',
  },
  {
    label: 'Route player',
    title: 'I want the best ending',
    body: 'Track deaths, evidence, relationships, QTEs, and Turning Points so you can repair a bad branch cleanly.',
    href: '/directive-8020-how-to-save-everyone',
    image: '/d8020-screenshot-05.jpg',
  },
  {
    label: 'Completionist',
    title: 'I want every trophy',
    body: 'Check the trophy list, Platinum status, Story Tree cleanup, collectible checks, and branch testing.',
    href: '/directive-8020-trophy-list',
    image: '/d8020-screenshot-06.jpg',
  },
];

const cornerstoneArticles = [
  {
    label: 'Review',
    title: 'Directive 8020 Review / Worth Buying?',
    body: 'Media score roundup, Guide Hub verdict, pros and cons, performance, replay value, and buying advice.',
    href: '/directive-8020-review',
    image: '/d8020-screenshot-01.jpg',
  },
  {
    label: 'Main Guide',
    title: 'Directive 8020 Walkthrough / Full Guide',
    body: 'Episode hub with all 8 chapter walkthroughs, Turning Points, QTE tracking, stealth notes, collectibles, and video reference.',
    href: '/directive-8020-walkthrough',
    image: '/d8020-screenshot-04.jpg',
  },
  {
    label: 'Survival Route',
    title: 'How to Save Everyone',
    body: 'Everyone-lives planning for Young, Eisele, Cernan, Stafford, Cooper, relationship state, mimic checks, and rewind strategy.',
    href: '/directive-8020-how-to-save-everyone',
    image: '/d8020-screenshot-03.jpg',
  },
  {
    label: 'Endings',
    title: 'All Endings Explained',
    body: 'Five reported endings, Cycle 13, Booster Ring, Story Tree cleanup, and finale condition checklist.',
    href: '/directive-8020-all-endings',
    image: '/d8020-screenshot-06.jpg',
  },
  {
    label: 'Long-tail',
    title: 'All 44 Death Scenes Checklist',
    body: 'Death scene tracker with chapter, trigger, victim, avoid method, Turning Point recovery, and spoiler-safe completion structure.',
    href: '/directive-8020-death-scenes-guide',
    image: '/d8020-screenshot-05.jpg',
  },
  {
    label: 'Completion',
    title: 'Trophy & Achievement Guide',
    body: 'Platinum route, Survival Mode planning, Movie Night notes, Everyone Lives/Dies routes, and Heirlooms cleanup.',
    href: '/directive-8020-trophy-guide',
    image: '/d8020-screenshot-10.jpg',
  },
  {
    label: 'Collectibles',
    title: 'O Death Secrets & Curator',
    body: 'Five O Death Secrets, Curator route context, 65 collectibles, and cleanup planning.',
    href: '/directive-8020-o-death-secrets-curator',
    image: '/review/review-endings-comparison-flowchart.webp',
  },
  {
    label: 'Trophy List',
    title: 'Trophy List, Achievements & Platinum',
    body: 'Steam achievements, PS5 trophies, Xbox achievements, Platinum planning, and platform verification status.',
    href: '/directive-8020-trophy-list',
    image: '/d8020-screenshot-06.jpg',
  },
  {
    label: 'Cast',
    title: 'Cast & Actors',
    body: 'Lashana Lynch as Brianna Young, Danny Sapani as Stafford, five playable crew members, and cast verification notes.',
    href: '/directive-8020-cast-actors',
    image: '/characters-lineup.jpg',
  },
  {
    label: 'Tool',
    title: 'Mimic Detection Survival Guide',
    body: 'Rank suspicious clue patterns, compare Explorer and Survival Mode risk, and avoid unsafe solo trust branches.',
    href: '/directive-8020-mimic-detection-survival-guide',
    image: '/official-mimic-scene.jpg',
  },
  {
    label: 'Mechanics',
    title: 'Stealth Guide',
    body: 'Crouch-walking, hiding spots, distractions, ship systems, scanner habits, and how to survive hunter patrols.',
    href: '/directive-8020-stealth-guide',
    image: '/d8020-screenshot-07.jpg',
  },
];

const answerGroups = [
  {
    title: 'Before You Buy',
    items: [
      {
        q: 'When does Directive 8020 unlock?',
        a: 'Steam unlock is listed for May 12, 2026 at 14:00 UTC. Console unlocks can follow storefront timing.',
        href: '/directive-8020-release-time',
      },
      {
        q: 'Can my PC run it?',
        a: 'Steam lists RTX 2060 / RX 5700, 16 GB RAM, and 40 GB storage as the minimum baseline.',
        href: '/directive-8020-system-requirements',
      },
      {
        q: 'Is Steam Deck safe?',
        a: 'Treat Deck support as unverified unless Steam shows a rating. Start with low settings and a 30 FPS cap.',
        href: '/directive-8020-steam-deck',
      },
    ],
  },
  {
    title: 'While Playing',
    items: [
      {
        q: 'Should I trust a separated crew member?',
        a: 'Only after verification. Directive 8020 is built around a mimic threat, so isolation and vague answers matter.',
        href: '/directive-8020-choices-consequences',
      },
      {
        q: 'When should I rewind?',
        a: 'For a blind run, wait until an ending. For save-everyone or trophy routes, rewind after deaths or locked branches.',
        href: '/directive-8020-turning-points-story-tree',
      },
      {
        q: 'How do I avoid missing important clues?',
        a: 'Explore terminals, crew spaces, labs, and objective-adjacent rooms before advancing when no timer is active.',
        href: '/directive-8020-walkthrough',
      },
    ],
  },
  {
    title: 'Modes & Extras',
    items: [
      {
        q: 'Does it have online co-op?',
        a: 'Movie Night couch co-op is listed on Steam; official site notes online multiplayer as a post-launch update.',
        href: '/directive-8020-movie-night-multiplayer',
      },
      {
        q: 'Is Deluxe worth it?',
        a: 'Best for anthology fans, collectors, and replay-focused players because it adds a bonus mission and extras.',
        href: '/directive-8020-deluxe-edition',
      },
      {
        q: 'What if the game crashes?',
        a: 'Start with driver updates, Steam file verification, overlay disable, SSD install, and stable frame caps.',
        href: '/directive-8020-crashing-fix',
      },
      {
        q: 'Does Directive 8020 have a Platinum trophy?',
        a: 'Treat Platinum status as pending until trusted PS5 trophy data is captured; use the trophy list page for the current roadmap.',
        href: '/directive-8020-trophy-list',
      },
      {
        q: 'How long is Directive 8020?',
        a: 'Plan about 8 hours for one route and around 30 hours for all major outcomes and cleanup.',
        href: '/directive-8020-how-long-to-beat',
      },
    ],
  },
];

const homeFaqs = [
  {
    question: 'What is Directive 8020?',
    answer:
      'Directive 8020 is a cinematic sci-fi survival horror game developed and published by Supermassive Games. Set aboard the colony ship Cassiopeia, it follows a crew facing an alien organism that can mimic its prey.',
  },
  {
    question: 'When does Directive 8020 release?',
    answer:
      'Directive 8020 releases on May 12, 2026 for PlayStation 5, Xbox Series X|S, and PC. Steam unlock is listed for 14:00 UTC.',
  },
  {
    question: 'Does Directive 8020 have multiplayer?',
    answer:
      'Steam lists Movie Night couch co-op for up to five players. The official Dark Pictures site says online multiplayer is coming in a post-launch update.',
  },
  {
    question: 'What are Turning Points?',
    answer:
      'Turning Points are Story Tree nodes that let players revisit important choices, unlock hidden paths, change character fates, and work toward alternate endings.',
  },
  {
    question: 'Can you save everyone in Directive 8020?',
    answer:
      'The series is built around survival variation, and Directive 8020 gives players Turning Points to recover deaths. Focus on evidence, relationships, QTEs, stealth, and mimic verification.',
  },
];

const newGameCoverage = [
  {
    title: 'Project: Mist Guide Hub',
    body: 'Open-world survival horror basics, Early Access status, Gravity Gun, train base, co-op, and first-day route planning.',
    href: '/games/project-mist',
    image: '/games/project-mist/hero.webp',
  },
  {
    title: 'Thick As Thieves Guide Hub',
    body: 'Today’s stealth-heist launch coverage: release facts, solo/co-op, beginner stealth, contracts, PC specs, gear, and roadmap expectations.',
    href: '/games/thick-as-thieves',
    image: '/games/thick-as-thieves/hero.webp',
  },
  {
    title: 'ZERO PARADES Guide Hub',
    body: 'Launch-day espionage RPG coverage: PC release status, PS5 caution, skills, Conditioning, Exertion, specs, Steam Deck, and buying advice.',
    href: '/games/zero-parades',
    image: '/games/zero-parades/hero.jpg',
  },
  {
    title: 'Mina the Hollower Guide Hub',
    body: 'Gothic action-adventure launch coverage: release timing, platforms, Steam Deck status, specs, beginner tips, and buyer advice.',
    href: '/games/mina-the-hollower',
    image: '/games/mina-the-hollower/hero.jpg',
  },
  {
    title: 'Mina the Hollower Steam Deck',
    body: 'Steam Deck readiness, controller support, Steam Cloud, handheld checks, and what to verify again on launch week.',
    href: '/games/mina-the-hollower/steam-deck',
    image: '/games/mina-the-hollower/screenshots/mina-the-hollower-screenshot-3.jpg',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateVideoGameSchema()} />
      <JsonLd data={generateFAQSchema(homeFaqs)} />

      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-banner.jpg"
            alt="Directive 8020 Cassiopeia crew"
            fill
            className="object-cover"
            priority
            quality={88}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, oklch(0.07 0.005 260) 0%, oklch(0.07 0.005 260 / 0.94) 42%, oklch(0.07 0.005 260 / 0.58) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 78% 18%, oklch(0.55 0.22 270 / 0.26), transparent 32%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="mx-auto grid min-h-[680px] max-w-6xl items-end gap-8 px-4 pb-10 pt-20 sm:px-6 lg:grid-cols-[1fr_460px] lg:pb-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-d8020/30 bg-d8020/10 px-3 py-1 text-xs font-medium text-d8020">
              <span className="h-2 w-2 rounded-full bg-d8020 glow-card" />
              Launch guide updated May 12
            </div>
            <h1 className="mb-5 text-4xl font-black leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Directive 8020
              <span className="block text-d8020 glow-text">Guide Hub</span>
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Choose the right route in seconds: spoiler-free first run,
              save-everyone path, Story Tree cleanup, Movie Night setup, Steam
              Deck notes, and PC fixes.
            </p>
            <div className="mb-8 grid max-w-xl grid-cols-2 gap-2 text-xs sm:grid-cols-3">
              {quickFacts.slice(0, 6).map(([label, value]) => (
                <div key={label} className="rounded-md border border-border/50 bg-background/45 px-3 py-2 backdrop-blur">
                  <dt className="text-muted-foreground">{label}</dt>
                  <dd className="mt-1 font-semibold text-foreground">{value}</dd>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/directive-8020-beginner-tips"
                className="inline-flex items-center justify-center rounded-md bg-d8020 px-5 py-2.5 text-sm font-semibold text-d8020-foreground transition-colors hover:bg-d8020/85"
              >
                Start Spoiler-Free
              </Link>
              <Link
                href="/directive-8020-community-questions"
                className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-d8020/40 hover:bg-card/60"
              >
                Popular Questions
              </Link>
            </div>
          </div>

          <aside className="overflow-hidden rounded-lg border border-border/50 bg-background/75 backdrop-blur-md">
            <div className="relative aspect-video">
              <Image
                src="/d8020-screenshot-06.jpg"
                alt="Directive 8020 Story Tree guide"
                fill
                className="object-cover"
                sizes="460px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-d8020">Most useful system</p>
                <h2 className="mt-1 text-xl font-black text-foreground">Story Tree & Turning Points</h2>
              </div>
            </div>
            <div className="grid gap-2 p-5">
              {[
                ['Best ending route', '/directive-8020-all-endings'],
                ['Save everyone', '/directive-8020-how-to-save-everyone'],
                ['All choices', '/directive-8020-choices-consequences'],
                ['Crash fixes', '/directive-8020-crashing-fix'],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-md border border-border/60 bg-card/40 px-3 py-2 text-sm text-foreground transition-colors hover:border-d8020/40 hover:bg-card/80"
                >
                  {label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="video-center" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-1 w-8 rounded-full bg-d8020" />
          <div>
            <h2 className="text-xl font-bold text-foreground">Trending Search Answers</h2>
            <p className="mt-1 text-sm text-muted-foreground">New search demand from trophy, cast, actor, and ending-count queries.</p>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {trendingSearches.map((item) => (
            <Link key={item.query} href={item.href} className="rounded-lg border border-border/50 bg-card/30 p-4 transition-colors hover:border-d8020/40 hover:bg-card/50">
              <h3 className="text-sm font-semibold text-foreground">{item.query}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-1 w-8 rounded-full bg-d8020" />
          <div>
            <h2 className="text-xl font-bold text-foreground">Post-launch Routes</h2>
            <p className="mt-1 text-sm text-muted-foreground">Chapter pages and spoiler-aware cleanup guides for players already in the game.</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {postLaunchRoutes.map((route) => (
            <Link key={route.href} href={route.href} className="group overflow-hidden rounded-lg border border-border/50 bg-card/30 transition-colors hover:border-d8020/40">
              <div className="relative aspect-video">
                <Image src={route.image} alt={route.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-foreground group-hover:text-d8020">{route.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{route.body}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-border/50 bg-card/30 p-4">
          <h3 className="mb-3 text-sm font-semibold text-foreground">All Episode Walkthroughs</h3>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {episodeRoutes.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-md border border-border/40 bg-background/30 px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-d8020/40 hover:text-d8020">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 rounded-full bg-emerald-400" />
            <div>
              <h2 className="text-xl font-bold text-foreground">New Game Coverage</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                New guide hubs for players who need launch facts, platforms, PC specs, handheld checks, and first-run help.
              </p>
            </div>
          </div>
          <Link href="/games" className="text-sm font-semibold text-emerald-300 hover:underline">
            All game hubs
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {newGameCoverage.map((item) => (
            <Link key={item.href} href={item.href} className="group overflow-hidden rounded-lg border border-border/50 bg-card/30 transition-colors hover:border-emerald-400/40">
              <div className="relative aspect-video">
                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-foreground group-hover:text-emerald-300">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-1 w-8 rounded-full bg-d8020" />
          <div>
            <h2 className="text-xl font-bold text-foreground">Core Article Modules</h2>
            <p className="mt-1 text-sm text-muted-foreground">The six pages most players search for after launch.</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cornerstoneArticles.map((article) => (
            <Link key={article.href} href={article.href} className="group overflow-hidden rounded-lg border border-border/50 bg-card/30 transition-colors hover:border-d8020/40">
              <div className="relative aspect-[16/9]">
                <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded border border-d8020/30 bg-d8020/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-d8020">
                  {article.label}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground group-hover:text-d8020">{article.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{article.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 rounded-full bg-d8020" />
            <div>
              <h2 className="text-xl font-bold text-foreground">Pick Your Mission</h2>
              <p className="mt-1 text-sm text-muted-foreground">Three common player goals, with the right guide first.</p>
            </div>
          </div>
          <Link href="/guides" className="text-sm font-semibold text-d8020 hover:underline">
            View all guides
          </Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {missionCards.map((card) => (
            <Link key={card.href} href={card.href} className="group overflow-hidden rounded-lg border border-border/50 bg-card/30 transition-colors hover:border-d8020/40">
              <div className="relative aspect-[16/9]">
                <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded border border-d8020/30 bg-d8020/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-d8020">
                  {card.label}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground group-hover:text-d8020">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-3">
        {guideLibraries.map((group) => (
          <div key={group.title} className="rounded-lg border border-border/50 bg-card/30 p-5">
            <h2 className="mb-4 text-base font-bold text-foreground">{group.title}</h2>
            <div className="grid gap-2">
              {group.links.map(([label, href]) => (
                <Link key={href} href={href} className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-card/50 hover:text-d8020">
                  <span>{label}</span>
                  <span className="text-xs">View</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 rounded-full bg-d8020" />
            <div>
              <h2 className="text-xl font-bold text-foreground">Video Center</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Watch the core trailer first, then use short clips for mechanics and story context.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-5">
          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <VideoEmbed
              videoId={videos[0].id}
              title={`Directive 8020 ${videos[0].title}`}
              caption={`${videos[0].title}: ${videos[0].caption}`}
            />
            <div className="rounded-lg border border-border/50 bg-card/30 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-d8020">How to use these videos</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li><strong className="text-foreground">Trailer:</strong> decide if the tone and premise are for you.</li>
                <li><strong className="text-foreground">Turning Points:</strong> understand rewinds before chasing endings.</li>
                <li><strong className="text-foreground">Gameplay clips:</strong> check stealth, corridors, and encounter pacing.</li>
                <li><strong className="text-foreground">Story clips:</strong> learn character context without reading ending spoilers.</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {videos.slice(1, 4).map((video) => (
              <div key={video.id} className="rounded-lg border border-border/50 bg-card/30 p-4">
                <div className="aspect-video overflow-hidden rounded-md">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                    title={`Directive 8020 ${video.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-3 text-sm font-bold text-foreground">{video.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{video.caption}</p>
              </div>
            ))}
          </div>

          <details className="rounded-lg border border-border/50 bg-card/30">
            <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-foreground list-none">
              More official video references
            </summary>
            <div className="grid gap-4 border-t border-border/40 p-4 md:grid-cols-2 lg:grid-cols-4">
              {videos.slice(4).map((video) => (
                <a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  className="group overflow-hidden rounded-md border border-border/40 bg-background/30 transition-colors hover:border-d8020/40"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={`/yt-${video.id}.jpg`}
                      alt={`Directive 8020 ${video.title}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs font-bold text-foreground">{video.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{video.caption}</p>
                  </div>
                </a>
              ))}
            </div>
          </details>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-1 w-8 rounded-full bg-d8020" />
          <h2 className="text-xl font-bold text-foreground">Route Map</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'First run',
              body: 'Use beginner tips, keep spoilers low, explore safe rooms, and record suspicious behavior without rewinding.',
              href: '/directive-8020-beginner-tips',
            },
            {
              title: 'Best ending',
              body: 'Use the Story Tree, preserve crew relationships, verify the mimic, pass QTEs, and recover deaths with Turning Points.',
              href: '/directive-8020-how-to-save-everyone',
            },
            {
              title: '100% cleanup',
              body: 'Branch from late Turning Points for endings, then clean up collectibles, trophies, Deluxe mission content, and deaths.',
              href: '/directive-8020-trophy-guide',
            },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="rounded-lg border border-border/50 bg-card/30 p-5 transition-colors hover:border-d8020/40 hover:bg-card/50">
              <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-1 w-8 rounded-full bg-d8020" />
          <h2 className="text-xl font-bold text-foreground">Image Briefing</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              src: '/d8020-screenshot-05.jpg',
              title: 'Mimic decisions',
              body: 'The main enemy can imitate the crew. Every isolated return, urgent rescue request, and contradiction matters.',
            },
            {
              src: '/d8020-screenshot-06.jpg',
              title: 'Branch control',
              body: 'Turning Points and the Story Tree are the foundation for endings, trophies, and save-everyone recovery.',
            },
            {
              src: '/d8020-screenshot-03.jpg',
              title: 'Crew state',
              body: 'Track who is alive, who has evidence, who trusts whom, and who was alone before each major choice.',
            },
          ].map((item) => (
            <figure key={item.title} className="overflow-hidden rounded-lg border border-border/50 bg-card/30">
              <div className="relative aspect-video">
                <Image src={item.src} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              </div>
              <figcaption className="p-4">
                <h3 className="mb-1 text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-1 w-8 rounded-full bg-d8020" />
          <h2 className="text-xl font-bold text-foreground">Answer Center</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {answerGroups.map((group) => (
            <section key={group.title} className="rounded-lg border border-border/50 bg-card/30 p-5">
              <h3 className="mb-4 text-base font-bold text-foreground">{group.title}</h3>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <Link key={item.q} href={item.href} className="block rounded-md border border-border/40 bg-background/30 p-4 transition-colors hover:border-d8020/40">
                    <h4 className="text-sm font-semibold text-foreground">{item.q}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.a}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
