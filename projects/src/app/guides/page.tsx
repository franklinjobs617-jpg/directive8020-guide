import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { GuideCard } from '@/components/guide-card';
import { JsonLd, generateArticleSchema } from '@/components/json-ld';

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
    href: '/directive-8020-review',
    title: 'Review / Worth Buying?',
    description: 'Guide Hub verdict, media score roundup, pros and cons, performance, replay value, and buying advice.',
    tag: 'Review',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    image: '/d8020-screenshot-01.jpg',
  },
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
    href: '/directive-8020-cast-actors',
    title: 'Cast & Actors',
    description: 'Lashana Lynch as Brianna Young, Danny Sapani as Stafford, playable crew roles, and cast verification notes.',
    tag: 'Cast',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/characters-lineup.jpg',
  },
  {
    href: '/directive-8020-all-endings',
    title: 'All Endings Guide',
    description: 'Five reported endings, Cycle 13 and Booster Ring spoiler topics, best ending route, and Story Tree cleanup.',
    tag: 'Updated',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-06.jpg',
  },
  {
    href: '/directive-8020-how-to-save-everyone',
    title: 'How to Save Everyone',
    description: 'Everyone-lives route planning by episode, NPC death notes, mimic trust checks, and Turning Points recovery.',
    tag: 'Updated',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-05.jpg',
  },
  {
    href: '/directive-8020-choices-consequences',
    title: 'Do Choices Matter?',
    description: 'Community-focused answer for flavor choices vs route-changing Destinies, QTEs, trust checks, and endings.',
    tag: 'Updated',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-04.jpg',
  },
  {
    href: '/directive-8020-mimic-detection-survival-guide',
    title: 'Mimic Detection Survival Guide',
    description: 'Interactive suspicion tracker for isolation clues, memory gaps, Explorer Mode, and Survival Mode trust decisions.',
    tag: 'Tool',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/official-mimic-scene.jpg',
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
    description: '65 collectibles: 50 Secrets, 10 Simms Recordings, 5 O Death Secrets, Heirlooms, and trophy cleanup.',
    tag: 'Collectibles',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-04.jpg',
  },
  {
    href: '/directive-8020-o-death-secrets-curator',
    title: 'O Death Secrets & Curator',
    description: 'Five O Death Secrets, Curator context, 65-collectible breakdown, and cleanup method.',
    tag: 'Collectibles',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/review/review-endings-comparison-flowchart.webp',
  },
  {
    href: '/directive-8020-cycle-13-explained',
    title: 'Cycle 13 Explained',
    description: 'Spoiler-aware explanation for Cycle 13, Booster Ring, Cassiopeia outcome, and Eisele Destiny.',
    tag: 'Ending',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/review/review-final-episode.webp',
  },
  {
    href: '/directive-8020-how-long-to-beat',
    title: 'How Long to Beat',
    description: '8-hour main story, 30-hour completion estimate, 8 episodes, and replay planning.',
    tag: 'Length',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/review/review-episodes-1-4-turning-points-flowchart.webp',
  },
  {
    href: '/directive-8020-come-true-walkthrough',
    title: 'Come True Walkthrough',
    description: 'Episode 8 finale route priorities, final-state tracking, endings setup, and cleanup.',
    tag: 'Episode',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/review/come_true.png',
  },
  {
    href: '/directive-8020-trophy-guide',
    title: 'Trophy & Achievement Guide',
    description: 'Steam achievements, PS5 trophy sync issues, missable planning, collectibles, endings, and 100% cleanup.',
    tag: 'Updated',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-06.jpg',
  },
  {
    href: '/directive-8020-trophy-list',
    title: 'Trophy List, Achievements & Platinum',
    description: 'Steam achievements, PS5 trophies, Xbox achievements, Platinum status, and platform list verification.',
    tag: 'Trophy List',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-10.jpg',
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
    description: 'All 8 episodes from Little Star to Come True, collectibles, QTEs, stealth, and Story Tree planning.',
    tag: 'Updated',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/d8020-screenshot-02.jpg',
  },
  {
    href: '/directive-8020-little-star-walkthrough',
    title: 'Little Star Walkthrough',
    description: 'Episode 1 first-run setup, crew baseline, early QTEs, collectibles, and Story Tree notes.',
    tag: 'Episode',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/review/episode_1_little_star.png',
  },
  {
    href: '/directive-8020-best-laid-plans-walkthrough',
    title: 'Best Laid Plans Walkthrough',
    description: 'Episode 2 relationship tracking, evidence-first choices, mission pressure, and early branches.',
    tag: 'Episode',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/review/episode_2_best_laid_plans.png',
  },
  {
    href: '/directive-8020-the-sample-walkthrough',
    title: 'The Sample Walkthrough',
    description: 'Episode 3 lab evidence, specimen choices, mimic suspicion, collectibles, and route notes.',
    tag: 'Episode',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/review/episode_the_sample.png',
  },
  {
    href: '/directive-8020-dragnet-walkthrough',
    title: 'Dragnet Walkthrough',
    description: 'Episode 4 stealth priorities, scanner use, chase routes, QTEs, and collectible cleanup.',
    tag: 'Episode',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/review/episode_dragnet.png',
  },
  {
    href: '/directive-8020-mr-williams-walkthrough',
    title: 'Mr. Williams Walkthrough',
    description: 'Episode 5 mid-game route audit, survivor state, NPC death risks, and Turning Points.',
    tag: 'Episode',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/review/mid_game_ep5_7.png',
  },
  {
    href: '/directive-8020-hostile-takeover-walkthrough',
    title: 'Hostile Takeover Walkthrough',
    description: 'Episode 6 late-game branching, survivor-dependent scenes, stealth, and endings setup.',
    tag: 'Episode',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/review/hydroponics_bay.png',
  },
  {
    href: '/directive-8020-revelation-walkthrough',
    title: 'Revelation Walkthrough',
    description: 'Episode 7 late choices, final survivor state, ending setup, and route cleanup.',
    tag: 'Episode',
    tagColor: 'text-d8020 bg-d8020/15 border-d8020/30',
    image: '/review/final_episode.png',
  },
];

export default function GuidesPage() {
  const available = allGuides.filter((g) =>
    ['Available', 'Start Here', 'Platform', 'FAQ Hub', 'Review'].includes(g.tag)
  );
  const launchGuides = allGuides.filter(
    (g) => !['Available', 'Start Here', 'Platform', 'FAQ Hub', 'Review'].includes(g.tag)
  );

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
      <JsonLd
        data={generateArticleSchema({
          title: 'All Guides - Complete Directive 8020 Walkthrough & Tips',
          description:
            'Browse all Directive 8020 guides: endings, choices, character survival, trophies, system requirements, and more.',
          url: '/guides',
          datePublished: '2026-05-10',
          dateModified: '2026-05-13',
          imageUrl: '/d8020-screenshot-01.jpg',
        })}
      />
      <Breadcrumb items={[{ label: 'Guides', href: '/guides' }]} />

      <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
        All Guides
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Every guide for Directive 8020 in one place. From system requirements
        to all endings, this hub is built for post-launch players who want useful
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
            Updated Player Guides
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
