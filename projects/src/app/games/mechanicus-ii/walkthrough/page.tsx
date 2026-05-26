import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { MechanicusIIArticle } from '@/components/mechanicus-ii-article';
import {
  createMechanicusIIMetadata,
  mechanicusIIImages,
  mechanicusIIWalkthroughRows,
} from '@/lib/mechanicus-ii';

const title = 'Warhammer 40,000: Mechanicus II Walkthrough';
const description =
  'Spoiler-light Mechanicus II walkthrough for first campaign flow, mission objectives, green consoles, leader safety, resources, replayability, and early progression problems.';
const canonical = '/games/mechanicus-ii/walkthrough';

export const metadata = createMechanicusIIMetadata({
  title,
  description,
  canonical,
  image: mechanicusIIImages.screenshot4,
});

const faqs = [
  {
    question: 'Is this a full Mechanicus II mission-by-mission walkthrough?',
    answer:
      'Not yet. This is a spoiler-light launch walkthrough for campaign flow, objective reading, leader safety, and early progression. Full mission routes should wait for completed campaign verification.',
  },
  {
    question: 'What should I check first when stuck in a Mechanicus II mission?',
    answer:
      'Check the objective text, highlighted green tiles or consoles, leader position, interactable range, turn order, and whether a specialist is required to trigger the next step.',
  },
  {
    question: 'Can I replay missions in Mechanicus II?',
    answer:
      'Treat replayability carefully until your own campaign confirms the rules. Expect story-driven mission structure and use manual notes before assuming every objective can be freely replayed.',
  },
  {
    question: 'Should I follow a best-build walkthrough now?',
    answer:
      'No. Use role-based guidance during launch week. Final best-unit and best-build claims need more completed campaigns and patch context.',
  },
];

export default function MechanicusIIWalkthroughPage() {
  return (
    <MechanicusIIArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Walkthrough"
      heroImage={mechanicusIIImages.screenshot4}
      heroAlt="Warhammer 40,000 Mechanicus II walkthrough tactical battlefield image"
      faqs={faqs}
    >
      <BlufBox title="Walkthrough Route">
        <p>
          <strong>Use this as a spoiler-light campaign walkthrough, not a final
          mission script.</strong> Mechanicus II players should read objectives,
          protect named leaders, check green consoles or highlighted tiles,
          track faction resources, and record failed attempts before chasing
          unverified best builds.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Mission Flow Checklist</h2>
        <ArticleImage
          src={mechanicusIIImages.screenshot3}
          alt="Warhammer 40,000 Mechanicus II mission walkthrough combat image"
          caption="Most early mission problems come from objective reading, leader exposure, interactable range, or spending resources before checking the next enemy turn."
        />
        <p>
          Mechanicus II is easiest to read when you separate the battle into
          phases. Before the mission, check the faction resource and leader.
          On the opening turn, identify safe cover and objective markers. During
          the fight, keep enough action economy to protect the unit that must
          interact with the next objective.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Walkthrough moment</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do</th>
            </tr>
          </thead>
          <tbody>
            {mechanicusIIWalkthroughRows.map(([moment, action]) => (
              <tr key={moment} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{moment}</td>
                <td className="px-4 py-3 text-muted-foreground">{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Green Consoles, Marked Tiles, and Objective Confusion</h2>
        <p>
          If a mission appears stuck, do not immediately assume it is bugged.
          First check whether a green console, highlighted tile, or objective
          marker needs a specific unit to stand close enough to interact. Then
          verify line of sight, action points, and whether the leader or
          specialist is still alive.
        </p>

        <h2>Leader Safety Comes Before Damage</h2>
        <p>
          Some missions are built around named leaders and story roles. Until a
          mission proves otherwise, treat leader exposure as a fail condition:
          keep the leader behind cover, avoid ending turns in open lanes, and
          spend resources defensively if the next enemy activation can collapse
          the route.
        </p>

        <h2>Where to Go Next</h2>
        <p>
          If you need first-session habits, use the{' '}
          <Link href="/games/mechanicus-ii/beginner-guide" className="text-d8020 hover:underline">
            Mechanicus II beginner guide
          </Link>
          . If the problem is faction choice or unit roles, use the{' '}
          <Link href="/games/mechanicus-ii/factions" className="text-d8020 hover:underline">
            Mechanicus II factions guide
          </Link>
          . If the game feels rough on your machine, check the{' '}
          <Link href="/games/mechanicus-ii/steam-deck-performance" className="text-d8020 hover:underline">
            Steam Deck and performance guide
          </Link>
          .
        </p>
      </section>
    </MechanicusIIArticle>
  );
}
