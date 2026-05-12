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
    href: '/directive-8020-overview',
    title: 'What is Directive 8020?',
    description: 'Story, mimic threat, survival gameplay, Turning Points, Story Tree, and official video overview.',
    tag: 'Available',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/official-cassiopeia-crew.jpg',
  },
  {
    href: '/directive-8020-system-requirements',
    title: 'System Requirements',
    description: 'Official Steam PC specs, storage, SSD advice, and performance settings explained.',
    tag: 'Available',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/official-corridor-threat.jpg',
  },
  {
    href: '/directive-8020-release-time',
    title: 'Release Time & Deluxe Content',
    description: 'Steam unlock time by region, platform notes, Digital Deluxe contents, and launch checklist.',
    tag: 'Available',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/official-ship-interior.jpg',
  },
  {
    href: '/directive-8020-characters',
    title: 'Characters, Cast & Crew Roles',
    description: 'Lashana Lynch as Young, Cassiopeia crew survival roles, mimic clues, and Movie Night tips.',
    tag: 'Available',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/official-young-character.jpg',
  },
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
    description: 'Spoiler-safe survival rules for mimic trust checks, QTEs, relationships, and recovery after deaths.',
    tag: 'Launch Guide',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/official-mimic-scene.jpg',
  },
  {
    href: '/directive-8020-choices-consequences',
    title: 'Choices & Consequences',
    description: 'Decision types, consequence tracking, trust logic, and how to map branches without guessing.',
    tag: 'Launch Guide',
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
    title: 'Crashing & Performance Fix',
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

export default function GuidesPage() {
  const available = allGuides.filter((g) => g.tag === 'Available');
  const launchGuides = allGuides.filter((g) => g.tag !== 'Available');

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
