import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectMistArticle } from '@/components/project-mist-article';
import { ArticleImage } from '@/components/article-media';
import { BlufBox, StatusPanel } from '@/components/guide-blocks';
import { projectMist } from '@/lib/games';
import {
  projectMistDemoLootRows,
  projectMistDemoRiskRows,
  projectMistDemoRouteRows,
  projectMistImages,
  projectMistQuickFacts,
} from '@/lib/project-mist';

const title = 'Project: Mist Guide Hub - Early Access, Co-op, Gravity Gun & Train Base';
const description =
  'Project: Mist guide hub for Steam Early Access facts, co-op, Gravity Gun, moving train base, system requirements, beginner tips, and crash fixes.';
const canonical = '/games/project-mist';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [projectMistImages.hero],
  },
  alternates: {
    canonical,
  },
};

const faqs = [
  {
    question: 'What is Project: Mist?',
    answer:
      'Project: Mist is an open-world survival horror game from Chicken Launcher about surviving a hostile island with mysterious facilities, giant creatures, crafting, a Gravity Gun, and a moving train base.',
  },
  {
    question: 'When does Project: Mist release?',
    answer:
      'Steam lists Project: Mist with a 19 May, 2026 release date and Early Access status.',
  },
  {
    question: 'Does Project: Mist have multiplayer?',
    answer:
      'Yes. Steam lists multi-player, co-op, and online co-op, and Steam page copy describes seamless 1-4 player co-op.',
  },
  {
    question: 'What should I read first?',
    answer:
      'Start with release date, system requirements, multiplayer, and beginner guide pages before treating any route or creature advice as final.',
  },
];

export default function ProjectMistHubPage() {
  return (
    <ProjectMistArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Project: Mist"
      heroImage={projectMistImages.hero}
      heroAlt="Project: Mist official Steam key art"
      faqs={faqs}
    >
      <BlufBox title="Early Access Snapshot">
        <p>
          <strong>Project: Mist is a PC Early Access survival horror game.</strong>{' '}
          Steam confirms solo play, online co-op, Gravity Gun, moving train
          base, abandoned facilities, giant creatures, crafting, hunting, Steam
          Achievements, Steam Cloud, and an official demo.
        </p>
      </BlufBox>

      <StatusPanel
        items={projectMistQuickFacts.map(([label, value]) => ({
          label,
          value,
          status: 'verified' as const,
        }))}
      />

      <section className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Project: Mist Guide Map</h2>
        <ArticleImage
          src={projectMistImages.feature}
          alt="Project: Mist guide hub feature image"
          caption="Start with the guide that matches your problem: release status, PC specs, multiplayer, first-day survival, or troubleshooting."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {projectMist.guideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group overflow-hidden rounded-lg border border-border/50 bg-card/30 transition-colors hover:border-emerald-400/40"
            >
              <div className="relative aspect-video">
                <Image
                  src={
                    guide.href.includes('system')
                      ? projectMistImages.facilities
                      : guide.href.includes('multiplayer')
                        ? projectMistImages.multiplayer
                        : guide.href.includes('beginner')
                          ? projectMistImages.beginner
                          : guide.href.includes('crashing')
                            ? projectMistImages.screenshot6
                            : projectMistImages.release
                  }
                  alt={guide.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-foreground group-hover:text-emerald-300">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {guide.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="prose-game">
        <h2>Core Systems to Understand First</h2>
        <ArticleImage
          src={projectMistImages.gravityGun}
          alt="Project: Mist Gravity Gun guide image"
          caption="The Gravity Gun is the clearest identity system: use physics, debris, positioning, and object control before assuming direct damage is the best answer."
        />
        <p>
          Project: Mist should be approached as a survival loop first. Steam
          describes a hostile island, abandoned facilities, boss-scale threats,
          critter catching, gear upgrades, and a train base that moves with your
          run. That means the strongest early pages are practical: what is
          confirmed, what your PC needs, how co-op works, and how to avoid rough
          first-session mistakes.
        </p>

        <h2>Community and Video Signals</h2>
        <ArticleImage
          src={projectMistImages.demo}
          alt="Project: Mist demo and player-count guide image"
          caption="Steam Community and video coverage point to the same early questions: demo access, co-op, performance, Gravity Gun, and train-base progression."
        />
        <p>
          Steam Community launch news adds useful context beyond the store page:
          the updated demo, multiplayer testing, feedback collection, and a
          large wishlist milestone all indicate active launch-day interest. Video
          coverage reinforces the same themes players search for first: demo
          availability, Early Access timing, Gravity Gun combat, creatures, and
          the mobile train base.
        </p>

        <h2>Demo Gameplay Takeaways</h2>
        <ArticleImage
          src={projectMistImages.firstSteps}
          alt="Project: Mist first-hour gameplay findings image"
          caption="The demo footage gives practical route signals: starter room, train objective, mech part, greenhouse, facility hazards, and boss preparation."
        />
        <p>
          Early gameplay footage is useful because it shows where a new player
          actually hesitates: how to start, when the train objective opens, why
          the greenhouse matters, what facility loot is worth checking, and when
          a creature encounter becomes too expensive. Treat those notes as demo
          guidance because Early Access balance can still change.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Demo segment</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do</th>
            </tr>
          </thead>
          <tbody>
            {projectMistDemoRouteRows.map(([segment, takeaway]) => (
              <tr key={segment} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{segment}</td>
                <td className="px-4 py-3 text-muted-foreground">{takeaway}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>What to Track During the Demo</h2>
        <ArticleImage
          src={projectMistImages.crafting}
          alt="Project: Mist demo loot and upgrade findings image"
          caption="Facility exploration appears to reward careful room clearing with crafting, water, gear, blueprints, and upgrade options."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Observed item or system</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
            </tr>
          </thead>
          <tbody>
            {projectMistDemoLootRows.map(([item, value]) => (
              <tr key={item} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{item}</td>
                <td className="px-4 py-3 text-muted-foreground">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>What Can Change in Early Access</h2>
        <ArticleImage
          src={projectMistImages.creatures}
          alt="Project: Mist creature guide image"
          caption="Creature weaknesses, map routes, exact crafting costs, and best upgrades can change as Early Access patches arrive."
        />
        <p>
          Do not lock your whole run around a single early build. Boss behavior,
          map routes, recipes, damage values, movement feel, and upgrade costs
          may shift as Chicken Launcher updates the game. Use this hub for safe
          first decisions, then check back before a long co-op run.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Risk signal</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Safer player habit</th>
            </tr>
          </thead>
          <tbody>
            {projectMistDemoRiskRows.map(([risk, guidance]) => (
              <tr key={risk} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{risk}</td>
                <td className="px-4 py-3 text-muted-foreground">{guidance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ProjectMistArticle>
  );
}
