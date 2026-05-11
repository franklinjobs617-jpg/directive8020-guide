import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GuideCard } from '@/components/guide-card';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateFAQSchema } from '@/components/json-ld';

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
    href: '/directive-8020-system-requirements',
    title: 'System Requirements & PC Specs',
    description: 'Minimum and recommended PC specs, storage space, and performance tips before you launch.',
    tag: 'Ready',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/system-card.jpg',
  },
  {
    href: '/directive-8020-release-time',
    title: 'Release Time & Pre-Load Guide',
    description: 'Exact unlock times for every region, how to pre-load, and which edition to buy.',
    tag: 'Ready',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/release-time-card.jpg',
  },
  {
    href: '/directive-8020-characters',
    title: 'Characters & Cast',
    description: 'Meet the crew of the Cassiopeia. Every character profile, actor, and what we know so far.',
    tag: 'Ready',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/characters-card.jpg',
  },
  {
    href: '/directive-8020-overview',
    title: 'What is Directive 8020?',
    description: 'Everything we know about the game: story, gameplay mechanics, Turning Points, and the Story Tree system.',
    tag: 'Ready',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/overview-card.jpg',
  },
];

const day1Guides = [
  {
    href: '/directive-8020-all-endings',
    title: 'All Endings Guide',
    description: 'Every ending explained, how to unlock each one, and the requirements for the best and worst outcomes.',
    tag: 'Coming May 12',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/endings-card.jpg',
  },
  {
    href: '/directive-8020-how-to-save-everyone',
    title: 'How to Save Everyone',
    description: 'Step-by-step guide to keeping all characters alive through every chapter and decision point.',
    tag: 'Coming May 12',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/save-everyone-card.jpg',
  },
  {
    href: '/directive-8020-choices-consequences',
    title: 'All Choices & Consequences',
    description: 'Every major decision mapped out. Know exactly what happens before you choose.',
    tag: 'Coming May 12',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/choices-card.jpg',
  },
  {
    href: '/directive-8020-trophy-guide',
    title: 'Trophy & Achievement Guide',
    description: 'Full list of all trophies and achievements, with tips for unlocking every single one.',
    tag: 'Coming May 12',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/trophy-card.jpg',
  },
  {
    href: '/directive-8020-crashing-fix',
    title: 'Crashing, Black Screen & Performance Fix',
    description: 'Fix launch crashes, black screens, stuttering, and other common Day-1 technical issues.',
    tag: 'Coming May 12',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/crashing-card.jpg',
  },
  {
    href: '/directive-8020-walkthrough',
    title: 'Full Chapter Walkthrough',
    description: 'Complete step-by-step walkthrough covering every chapter, collectible, and hidden secret.',
    tag: 'Coming May 12',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/walkthrough-card.jpg',
  },
];

const homeFaqs = [
  {
    question: 'What is Directive 8020?',
    answer:
      'Directive 8020 is a cinematic sci-fi survival horror game developed by Supermassive Games, the creators of Until Dawn and The Dark Pictures Anthology. Set aboard the colony ship Cassiopeia, players must survive an alien threat that can perfectly mimic its prey. The game features branching narratives where your choices determine who lives and who dies.',
  },
  {
    question: 'When does Directive 8020 release?',
    answer:
      'Directive 8020 is scheduled for release on May 12, 2026. It will be available on PlayStation 5, Xbox Series X|S, and PC (Steam). Pre-orders are open now with a free Deluxe Edition upgrade for a limited time.',
  },
  {
    question: 'Is Directive 8020 part of The Dark Pictures Anthology?',
    answer:
      'Yes, Directive 8020 is the latest entry in The Dark Pictures Anthology series by Supermassive Games. It introduces new mechanics like the Turning Points system and the Story Tree, which allow players to revisit and explore different decision paths.',
  },
  {
    question: 'How many endings does Directive 8020 have?',
    answer:
      'Like previous Dark Pictures games, Directive 8020 features multiple endings determined by your choices throughout the story. Each character can survive or die based on your decisions, creating many possible outcome combinations. Our full endings guide will be available on launch day.',
  },
  {
    question: 'Can you save everyone in Directive 8020?',
    answer:
      'Based on the series tradition, it is possible to keep all characters alive, but it requires making the correct choices at critical moments. The new Turning Points mechanic may make this easier by allowing you to revisit key decisions. Our complete save-everyone guide will be published on May 12.',
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
              Releasing May 12, 2026
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
                href="/directive-8020-all-endings"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-md bg-d8020 text-d8020-foreground hover:bg-d8020/85 transition-colors"
              >
                All Endings Guide
              </Link>
              <Link
                href="/directive-8020-system-requirements"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-md border border-border hover:border-d8020/40 hover:bg-card/50 transition-colors text-foreground"
              >
                System Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Available Now Guides */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-1 w-8 bg-green-400 rounded-full" />
          <h2 className="text-xl font-bold text-foreground">Available Now</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {day0Guides.map((guide) => (
            <GuideCard key={guide.href} {...guide} />
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
                Bandai Namco Entertainment
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
                Available for Pre-Order
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
