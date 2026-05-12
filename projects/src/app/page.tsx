import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { JsonLd, generateFAQSchema } from '@/components/json-ld';
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
      ['Choices & Consequences', '/directive-8020-choices-consequences'],
      ['Characters & Crew Roles', '/directive-8020-characters'],
      ['Community Questions', '/directive-8020-community-questions'],
    ],
  },
  {
    title: 'Setup & Platforms',
    links: [
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
      ['Deluxe Edition', '/directive-8020-deluxe-edition'],
      ['Movie Night Multiplayer', '/directive-8020-movie-night-multiplayer'],
      ['All Guides', '/guides'],
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
    id: 'oeiMw0KD7w0',
    title: 'Gameplay / Turning Points Trailer',
    caption: 'Best for mechanics: Story Tree, branch testing, stealth pressure, and gameplay pacing.',
  },
  {
    id: 'cdmKOH4RIWU',
    title: 'Story Trailer',
    caption: 'Best for story context: crew conflict, trust breakdown, and the sci-fi horror premise.',
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

const missionCards = [
  {
    label: 'New player',
    title: 'I want a spoiler-free start',
    body: 'Settings, exploration habits, mimic warning signs, and when to check the Story Tree without ruining the first ending.',
    href: '/directive-8020-beginner-tips',
    image: '/official-corridor-threat.jpg',
  },
  {
    label: 'Route player',
    title: 'I want the best ending',
    body: 'Track deaths, evidence, relationships, QTEs, and Turning Points so you can repair a bad branch cleanly.',
    href: '/directive-8020-how-to-save-everyone',
    image: '/official-mimic-scene.jpg',
  },
  {
    label: 'Completionist',
    title: 'I want every trophy',
    body: 'Use the Story Tree for ending cleanup, collectible checks, Deluxe mission notes, and branch testing.',
    href: '/directive-8020-trophy-guide',
    image: '/official-story-tree.jpg',
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

export default function HomePage() {
  return (
    <>
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
          <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.07_0.005_260)_0%,oklch(0.07_0.005_260/0.94)_42%,oklch(0.07_0.005_260/0.58)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,oklch(0.55_0.22_270/0.26),transparent_32%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="mx-auto grid min-h-[680px] max-w-6xl items-end gap-8 px-4 pb-10 pt-20 sm:px-6 lg:grid-cols-[1fr_460px] lg:pb-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-d8020/30 bg-d8020/10 px-3 py-1 text-xs font-medium text-d8020">
              <span className="h-2 w-2 rounded-full bg-d8020 shadow-[0_0_18px_var(--d8020-glow)]" />
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
                src="/official-story-tree.jpg"
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
        <div className="mb-6 flex items-center gap-3">
          <div className="h-1 w-8 rounded-full bg-d8020" />
          <h2 className="text-xl font-bold text-foreground">Video Center</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <VideoEmbed
            videoId={videos[0].id}
            title={`Directive 8020 ${videos[0].title}`}
            caption={`${videos[0].title}: ${videos[0].caption}`}
          />
          <div className="grid gap-4">
            {videos.slice(1).map((video) => (
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
              src: '/official-mimic-scene.jpg',
              title: 'Mimic decisions',
              body: 'The main enemy can imitate the crew. Every isolated return, urgent rescue request, and contradiction matters.',
            },
            {
              src: '/official-story-tree.jpg',
              title: 'Branch control',
              body: 'Turning Points and the Story Tree are the foundation for endings, trophies, and save-everyone recovery.',
            },
            {
              src: '/official-young-character.jpg',
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
