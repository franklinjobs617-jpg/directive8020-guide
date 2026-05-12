import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GuideCard } from '@/components/guide-card';
import { FAQSection } from '@/components/faq-section';
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

const day0Guides = [
  {
    href: '/directive-8020-beginner-tips',
    title: 'Beginner Tips',
    description: 'Spoiler-free first-run advice for settings, mimic clues, QTEs, stealth, and Story Tree habits.',
    tag: 'Start Here',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/official-corridor-threat.jpg',
  },
  {
    href: '/directive-8020-system-requirements',
    title: 'System Requirements & PC Specs',
    description: 'Official Steam PC specs, storage, SSD advice, and performance settings explained.',
    tag: 'Ready',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/official-corridor-threat.jpg',
  },
  {
    href: '/directive-8020-release-time',
    title: 'Release Time & Deluxe Content',
    description: 'Steam unlock time by region, platform notes, Digital Deluxe contents, and launch-day checklist.',
    tag: 'Ready',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/official-ship-interior.jpg',
  },
  {
    href: '/directive-8020-characters',
    title: 'Characters, Cast & Crew Roles',
    description: 'Lashana Lynch as Young, Cassiopeia crew survival roles, mimic suspicion clues, and co-op tips.',
    tag: 'Ready',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/official-young-character.jpg',
  },
  {
    href: '/directive-8020-overview',
    title: 'What is Directive 8020?',
    description: 'Story, mimic threat, survival gameplay, Turning Points, Story Tree, and Movie Night co-op explained.',
    tag: 'Ready',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/official-cassiopeia-crew.jpg',
  },
];

const day1Guides = [
  {
    href: '/directive-8020-all-endings',
    title: 'All Endings Guide',
    description: 'Story Tree route tracking, best ending principles, bad ending triggers, and Turning Points cleanup.',
    tag: 'Launch Guide',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/official-story-tree.jpg',
  },
  {
    href: '/directive-8020-how-to-save-everyone',
    title: 'How to Save Everyone',
    description: 'Spoiler-safe survival rules for mimic trust checks, QTEs, relationships, and death recovery.',
    tag: 'Launch Guide',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/official-mimic-scene.jpg',
  },
  {
    href: '/directive-8020-choices-consequences',
    title: 'All Choices & Consequences',
    description: 'Decision types, consequence tracking, trust logic, and how to map branches without guessing.',
    tag: 'Launch Guide',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/official-ship-interior.jpg',
  },
  {
    href: '/directive-8020-turning-points-story-tree',
    title: 'Turning Points & Story Tree',
    description: 'How rewind, hidden paths, branch testing, all endings, and save-everyone cleanup work.',
    tag: 'Core Mechanic',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/official-story-tree.jpg',
  },
  {
    href: '/directive-8020-movie-night-multiplayer',
    title: 'Movie Night Multiplayer',
    description: 'Couch co-op setup, character assignment, online multiplayer note, and group survival rules.',
    tag: 'Co-op',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/official-cassiopeia-crew.jpg',
  },
  {
    href: '/directive-8020-deluxe-edition',
    title: 'Deluxe Edition Content',
    description: 'Bonus mission, outfit pack, filters, artbook, soundtrack, and whether Deluxe is worth it.',
    tag: 'Edition Guide',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/official-ship-interior.jpg',
  },
  {
    href: '/directive-8020-trophy-guide',
    title: 'Trophy & Achievement Guide',
    description: 'Steam achievements, missable planning, collectibles, endings, and 100% cleanup strategy.',
    tag: 'Launch Guide',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/official-story-tree.jpg',
  },
  {
    href: '/directive-8020-crashing-fix',
    title: 'Crashing, Black Screen & Performance Fix',
    description: 'Startup crashes, black screen, stuttering, audio, controller, and console troubleshooting.',
    tag: 'Updated',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/official-corridor-threat.jpg',
  },
  {
    href: '/directive-8020-walkthrough',
    title: 'Full Chapter Walkthrough',
    description: 'Spoiler-safe first run route, chapter template, collectibles, QTEs, and Story Tree planning.',
    tag: 'Launch Guide',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/official-corridor-threat.jpg',
  },
];

const quickFacts = [
  ['Release', 'May 12, 2026'],
  ['Steam unlock', '14:00 UTC'],
  ['Platforms', 'PS5, Xbox Series X|S, PC'],
  ['Developer', 'Supermassive Games'],
  ['Threat', 'Alien mimic'],
  ['Core systems', 'Turning Points, Story Tree'],
];

const homeFaqs = [
  {
    question: 'What is Directive 8020?',
    answer:
      'Directive 8020 is a cinematic sci-fi survival horror game developed and published by Supermassive Games, the creators of Until Dawn and The Dark Pictures Anthology. Set aboard the colony ship Cassiopeia, players must survive an alien threat that can perfectly mimic its prey. The game features branching narratives where your choices determine who lives and who dies.',
  },
  {
    question: 'When does Directive 8020 release?',
    answer:
      'Directive 8020 releases on May 12, 2026 for PlayStation 5, Xbox Series X|S, and PC. The Steam unlock is listed for 14:00 UTC, and Steam lists a limited-time Digital Deluxe upgrade.',
  },
  {
    question: 'Is Directive 8020 part of The Dark Pictures Anthology?',
    answer:
      'Yes, Directive 8020 is the latest entry in The Dark Pictures Anthology series by Supermassive Games. It introduces new mechanics like the Turning Points system and the Story Tree, which allow players to revisit and explore different decision paths.',
  },
  {
    question: 'How many endings does Directive 8020 have?',
    answer:
      'Like previous Dark Pictures games, Directive 8020 features multiple endings determined by your choices throughout the story. The Story Tree and Turning Points systems help players revisit branches, test alternate decisions, and work toward best or worst outcomes.',
  },
  {
    question: 'Can you save everyone in Directive 8020?',
    answer:
      'Based on the series tradition, it should be possible to keep the main crew alive or at least directly track survival branches. Focus on mimic verification, successful QTEs, stable relationships, evidence gathering, and careful use of Turning Points.',
  },
  {
    question: 'Does Directive 8020 have multiplayer?',
    answer:
      'Steam lists Movie Night couch co-op for up to five players. The official Dark Pictures site also notes that online multiplayer is planned as a post-launch update, so check current patch notes before planning remote co-op.',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(homeFaqs)} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-banner.jpg"
            alt="Directive 8020 - Dark sci-fi horror space station"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-d8020 bg-d8020/10 border border-d8020/25 rounded-full px-3 py-1 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-d8020 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-d8020"></span>
              </span>
              Launching May 12, 2026
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight mb-4">
              Directive 8020
              <span className="block text-d8020 glow-text">Complete Guide</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
              Every ending, every choice, every consequence. Survive the
              Cassiopeia and save your crew with our comprehensive guides.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/directive-8020-beginner-tips"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-md bg-d8020 text-d8020-foreground hover:bg-d8020/85 transition-colors"
              >
                Start Spoiler-Free
              </Link>
              <Link
                href="/directive-8020-turning-points-story-tree"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-md border border-border hover:border-d8020/40 hover:bg-card/50 transition-colors text-foreground"
              >
                Story Tree Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Official Trailer + Quick Facts */}
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-1 w-8 rounded-full bg-d8020" />
            <h2 className="text-xl font-bold text-foreground">Official Trailer</h2>
          </div>
          <VideoEmbed
            videoId="gaQkzfA14G4"
            title="Directive 8020 official trailer"
            caption="Watch the official Directive 8020 video before choosing a guide path. It introduces the Cassiopeia, the mimic threat, cinematic survival gameplay, and the story tone without needing a spoiler-heavy walkthrough."
          />
        </div>

        <aside className="rounded-lg border border-border/50 bg-card/30 p-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-d8020">
            Quick Facts
          </p>
          <div className="space-y-4">
            {quickFacts.map(([label, value]) => (
              <div key={label} className="border-b border-border/30 pb-3 last:border-0 last:pb-0">
                <dt className="text-xs text-muted-foreground">{label}</dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">{value}</dd>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-2">
            <Link
              href="/directive-8020-release-time"
              className="rounded-md border border-border px-3 py-2 text-sm text-foreground transition-colors hover:border-d8020/40 hover:bg-card/60"
            >
              Check release time
            </Link>
            <Link
              href="/directive-8020-deluxe-edition"
              className="rounded-md border border-border px-3 py-2 text-sm text-foreground transition-colors hover:border-d8020/40 hover:bg-card/60"
            >
              Compare Deluxe content
            </Link>
          </div>
        </aside>
      </section>

      {/* Recommended Paths */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-1 w-8 bg-d8020 rounded-full" />
          <h2 className="text-xl font-bold text-foreground">Choose Your Guide Path</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'First Playthrough',
              body: 'Stay spoiler-free. Tune settings, understand mimic clues, explore safely, and check the Story Tree only after chapters.',
              href: '/directive-8020-beginner-tips',
              cta: 'Read beginner tips',
            },
            {
              title: 'Best Ending Run',
              body: 'Track relationships, evidence, crew states, QTEs, and Turning Points so every death can be traced and repaired.',
              href: '/directive-8020-how-to-save-everyone',
              cta: 'Save everyone',
            },
            {
              title: 'Completion Route',
              body: 'Use the Story Tree to map choices, endings, collectibles, achievements, Deluxe mission content, and cleanup branches.',
              href: '/directive-8020-trophy-guide',
              cta: 'Plan 100%',
            },
          ].map((path) => (
            <div key={path.title} className="rounded-lg border border-border/50 bg-card/30 p-5">
              <h3 className="mb-2 text-lg font-bold text-foreground">{path.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{path.body}</p>
              <Link
                href={path.href}
                className="text-sm font-semibold text-d8020 underline-offset-4 hover:underline"
              >
                {path.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Available Now Guides */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-1 w-8 bg-green-400 rounded-full" />
          <h2 className="text-xl font-bold text-foreground">Available Now</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {day0Guides.map((guide) => (
            <GuideCard key={guide.href} {...guide} />
          ))}
        </div>
      </section>

      {/* Visual Guide Highlights */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-1 w-8 bg-d8020 rounded-full" />
          <h2 className="text-xl font-bold text-foreground">Visual Guide Highlights</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              src: '/official-mimic-scene.jpg',
              title: 'Mimic Threat',
              body: 'Trust choices are the heart of Directive 8020. If someone returns from isolation, verify before following or rescuing.',
            },
            {
              src: '/official-story-tree.jpg',
              title: 'Story Tree',
              body: 'Use Turning Points to test branches, save characters, unlock hidden paths, and reduce full replay time.',
            },
            {
              src: '/official-cassiopeia-crew.jpg',
              title: 'Crew Survival',
              body: 'Every ending route starts with crew state: who is alive, who has evidence, and who still trusts each other.',
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

      {/* Launch Day Guides */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-1 w-8 bg-d8020 rounded-full" />
          <h2 className="text-xl font-bold text-foreground">
            Launch Day Guides
          </h2>
          <span className="text-xs text-muted-foreground">May 12</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {day1Guides.map((guide) => (
            <GuideCard key={guide.href} {...guide} />
          ))}
        </div>
      </section>

      {/* Game Info Card */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="rounded-lg border border-border/50 bg-card/30 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground mb-4">
            About Directive 8020
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <dt className="text-muted-foreground mb-1">Developer</dt>
              <dd className="text-foreground font-medium">
                Supermassive Games
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground mb-1">Publisher</dt>
              <dd className="text-foreground font-medium">
                Supermassive Games
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground mb-1">Release Date</dt>
              <dd className="text-foreground font-medium">May 12, 2026</dd>
            </div>
            <div>
              <dt className="text-muted-foreground mb-1">Platforms</dt>
              <dd className="text-foreground font-medium">
                PS5, Xbox Series X|S, PC
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground mb-1">Genre</dt>
              <dd className="text-foreground font-medium">
                Survival Horror, Interactive Drama
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground mb-1">Series</dt>
              <dd className="text-foreground font-medium">
                The Dark Pictures Anthology
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground mb-1">New Feature</dt>
              <dd className="text-foreground font-medium">
                Turning Points + Story Tree
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground mb-1">Steam</dt>
              <dd className="text-foreground font-medium">
                $49.99 / Digital Deluxe Upgrade
              </dd>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={homeFaqs} />
    </>
  );
}
