import type { Metadata } from 'next';
import { GuideCard } from '@/components/guide-card';

export const metadata: Metadata = {
  title: 'All Guides - Complete Directive 8020 Walkthrough & Tips',
  description:
    'Browse all Directive 8020 guides: endings, choices, character survival, trophies, system requirements, and more. Everything you need to survive the Cassiopeia.',
  alternates: {
    canonical: '/guides',
  },
};

const allGuides = [
  {
    href: '/directive-8020-beginner-tips',
    title: 'Beginner Tips',
    description: 'Spoiler-free first-run advice for settings, mimic clues, QTEs, stealth, and Story Tree habits.',
    tag: 'Start Here',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/d8020-screenshot-02.jpg',
  },
  {
    href: '/directive-8020-overview',
    title: 'What is Directive 8020?',
    description: 'Story, mimic threat, survival gameplay, Turning Points, Story Tree, and official video overview.',
    tag: 'Available',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/d8020-screenshot-01.jpg',
  },
  {
    href: '/directive-8020-system-requirements',
    title: 'System Requirements',
    description: 'Official Steam PC specs, storage, SSD advice, and performance settings explained.',
    tag: 'Available',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/d8020-screenshot-02.jpg',
  },
  {
    href: '/directive-8020-steam-deck',
    title: 'Steam Deck & Low-End PC',
    description: 'Verified status, official specs, handheld expectations, best settings, and low-end PC advice.',
    tag: 'Platform',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/d8020-screenshot-04.jpg',
  },
  {
    href: '/directive-8020-community-questions',
    title: 'Community Questions',
    description: 'Answers for multiplayer, Steam Deck, blind runs, Turning Points, Deluxe, endings, and performance.',
    tag: 'FAQ Hub',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/d8020-screenshot-01.jpg',
  },
  {
    href: '/directive-8020-release-time',
    title: 'Release Time & Deluxe Content',
    description: 'Steam unlock time by region, platform notes, Digital Deluxe contents, and launch checklist.',
    tag: 'Available',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/d8020-screenshot-04.jpg',
  },
  {
    href: '/directive-8020-characters',
    title: 'Characters, Cast & Crew Roles',
    description: 'Lashana Lynch as Young, Cassiopeia crew survival roles, mimic clues, and Movie Night tips.',
    tag: 'Available',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/d8020-screenshot-03.jpg',
  },
  {
    href: '/directive-8020-all-endings',
    title: 'All Endings Guide',
    description: 'Story Tree route tracking, best ending principles, bad ending triggers, and Turning Points cleanup.',
    tag: 'Launch Guide',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-06.jpg',
  },
  {
    href: '/directive-8020-how-to-save-everyone',
    title: 'How to Save Everyone',
    description: 'Spoiler-safe survival rules for mimic trust checks, QTEs, relationships, and recovery after deaths.',
    tag: 'Launch Guide',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-05.jpg',
  },
  {
    href: '/directive-8020-choices-consequences',
    title: 'Choices & Consequences',
    description: 'Decision types, consequence tracking, trust logic, and how to map branches without guessing.',
    tag: 'Launch Guide',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-04.jpg',
  },
  {
    href: '/directive-8020-death-scenes-guide',
    title: 'All 44 Death Scenes',
    description: 'Death checklist with chapter triggers, victims, avoid methods, and Turning Points recovery.',
    tag: 'Death Guide',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-05.jpg',
  },
  {
    href: '/directive-8020-turning-points-story-tree',
    title: 'Turning Points & Story Tree',
    description: 'How rewind, hidden paths, branch testing, all endings, and save-everyone cleanup work.',
    tag: 'Core Mechanic',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-06.jpg',
  },
  {
    href: '/directive-8020-movie-night-multiplayer',
    title: 'Movie Night Multiplayer',
    description: 'Couch co-op setup, character assignment, online multiplayer note, and group survival rules.',
    tag: 'Co-op',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-01.jpg',
  },
  {
    href: '/directive-8020-deluxe-edition',
    title: 'Deluxe Edition Content',
    description: 'Bonus mission, outfit pack, filters, artbook, soundtrack, and whether Deluxe is worth it.',
    tag: 'Edition Guide',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-04.jpg',
  },
  {
    href: '/directive-8020-stealth-guide',
    title: 'Stealth Guide',
    description: 'Crouch-walking, hiding, sound discipline, pursuit routes, QTEs, and Dragnet-style encounters.',
    tag: 'Mechanics',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-02.jpg',
  },
  {
    href: '/directive-8020-collectibles-heirlooms',
    title: 'Collectibles & Heirlooms',
    description: 'Secrets, clues, premonitions, Heirlooms Retrieval, chapter tracking, and trophy cleanup.',
    tag: 'Collectibles',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-04.jpg',
  },
  {
    href: '/directive-8020-trophy-guide',
    title: 'Trophy & Achievement Guide',
    description: 'Steam achievements, missable planning, collectibles, endings, and 100% cleanup strategy.',
    tag: 'Launch Guide',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-06.jpg',
  },
  {
    href: '/directive-8020-crashing-fix',
    title: 'Crashing & Performance Fix',
    description: 'Startup crashes, black screen, stuttering, audio, controller, and console troubleshooting.',
    tag: 'Updated',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-02.jpg',
  },
  {
    href: '/directive-8020-walkthrough',
    title: 'Full Chapter Walkthrough',
    description: 'Spoiler-safe first run route, chapter template, collectibles, QTEs, and Story Tree planning.',
    tag: 'Launch Guide',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-02.jpg',
  },
];

export default function GuidesPage() {
  const available = allGuides.filter((g) =>
    ['Available', 'Start Here', 'Platform', 'FAQ Hub'].includes(g.tag)
  );
  const launchGuides = allGuides.filter(
    (g) => !['Available', 'Start Here', 'Platform', 'FAQ Hub'].includes(g.tag)
  );

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
      <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
        All Guides
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Every guide for Directive 8020 in one place. From system requirements
        to all endings, this hub is built for launch-day players who want useful
        routes, official facts, screenshots, and video references.
      </p>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-1 w-8 bg-green-400 rounded-full" />
          <h2 className="text-xl font-bold text-foreground">Available Now</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {available.map((guide) => (
            <GuideCard key={guide.href} {...guide} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-1 w-8 bg-d8020 rounded-full" />
          <h2 className="text-xl font-bold text-foreground">
            Launch Day Guides
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {launchGuides.map((guide) => (
            <GuideCard key={guide.href} {...guide} />
          ))}
        </div>
      </section>
    </div>
  );
}
