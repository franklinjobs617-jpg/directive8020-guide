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
    description: 'Complete overview of the game: story, gameplay mechanics, Turning Points, and Story Tree.',
    tag: 'Available',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/overview-card.jpg',
  },
  {
    href: '/directive-8020-system-requirements',
    title: 'System Requirements',
    description: 'Minimum and recommended PC specs, storage space, and performance tips.',
    tag: 'Available',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/system-card.jpg',
  },
  {
    href: '/directive-8020-release-time',
    title: 'Release Time & Pre-Load',
    description: 'Exact unlock times for every region, pre-load info, and edition comparison.',
    tag: 'Available',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/release-time-card.jpg',
  },
  {
    href: '/directive-8020-characters',
    title: 'Characters & Cast',
    description: 'Meet the crew of the Cassiopeia. Every character profile and survival tips.',
    tag: 'Available',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/characters-card.jpg',
  },
  {
    href: '/directive-8020-all-endings',
    title: 'All Endings Guide',
    description: 'Every ending explained and how to unlock each one. Best and worst outcomes.',
    tag: 'May 12',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/endings-card.jpg',
  },
  {
    href: '/directive-8020-how-to-save-everyone',
    title: 'How to Save Everyone',
    description: 'Step-by-step guide to keeping all characters alive through every chapter.',
    tag: 'May 12',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/save-everyone-card.jpg',
  },
  {
    href: '/directive-8020-choices-consequences',
    title: 'Choices & Consequences',
    description: 'Every major decision mapped out. Know what happens before you choose.',
    tag: 'May 12',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/choices-card.jpg',
  },
  {
    href: '/directive-8020-trophy-guide',
    title: 'Trophy & Achievement Guide',
    description: 'Full trophy list with tips for unlocking every achievement.',
    tag: 'May 12',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/trophy-card.jpg',
  },
  {
    href: '/directive-8020-crashing-fix',
    title: 'Crashing & Performance Fix',
    description: 'Fix launch crashes, black screens, stuttering, and other Day-1 issues.',
    tag: 'May 12',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/crashing-card.jpg',
  },
  {
    href: '/directive-8020-walkthrough',
    title: 'Full Chapter Walkthrough',
    description: 'Complete step-by-step walkthrough covering every chapter and collectible.',
    tag: 'May 12',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/walkthrough-card.jpg',
  },
];

export default function GuidesPage() {
  const available = allGuides.filter((g) => g.tag === 'Available');
  const coming = allGuides.filter((g) => g.tag === 'May 12');

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
      <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
        All Guides
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Every guide for Directive 8020 in one place. From system requirements
        to all endings — we&apos;ve got you covered.
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
            Launch Day — May 12
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {coming.map((guide) => (
            <GuideCard key={guide.href} {...guide} />
          ))}
        </div>
      </section>
    </div>
  );
}
