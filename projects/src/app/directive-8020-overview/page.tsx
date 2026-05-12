import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';

export const metadata: Metadata = {
  title: 'What is Directive 8020? - Story, Gameplay & New Mechanics',
  description:
    'Everything we know about Directive 8020: story, gameplay mechanics, Turning Points system, Story Tree, stealth mechanics, Movie Night co-op, and how it evolves The Dark Pictures Anthology.',
  alternates: {
    canonical: '/directive-8020-overview',
  },
};

const faqs = [
  {
    question: 'Is Directive 8020 part of The Dark Pictures Anthology?',
    answer:
      'Yes. Directive 8020 is the next entry in The Dark Pictures Anthology from Supermassive Games, moving the series into a sci-fi horror setting aboard the colony ship Cassiopeia.',
  },
  {
    question: 'What is the story of Directive 8020?',
    answer:
      'Earth is dying, and the colony ship Cassiopeia is sent toward Tau Ceti f, a planet 12 light years from home. After the ship crash lands, the crew is hunted by an alien organism that can mimic its prey.',
  },
  {
    question: 'What are Turning Points in Directive 8020?',
    answer:
      'Turning Points are key moments in the story tree that let players revisit decisions, explore hidden paths, unlock multiple endings, and try to save crew members from deaths they previously triggered.',
  },
  {
    question: 'Does Directive 8020 have co-op?',
    answer:
      'The Steam page lists Movie Night couch co-op for up to five players. Players choose which crew members to control and pass decisions between friends during the story.',
  },
  {
    question: 'Who stars in Directive 8020?',
    answer:
      'Lashana Lynch stars as Young, a major astronaut character in the story. She is known for Bob Marley: One Love and The Woman King, among other roles.',
  },
];

const quickFacts = [
  ['Release date', 'May 12, 2026'],
  ['Developer / Publisher', 'Supermassive Games'],
  ['Platforms', 'PlayStation 5, Xbox Series X|S, PC'],
  ['Series', 'The Dark Pictures Anthology'],
  ['Setting', 'The colony ship Cassiopeia and Tau Ceti f'],
  ['Main threat', 'An alien organism that mimics its prey'],
  ['New systems', 'Turning Points and Story Tree'],
  ['Co-op', 'Movie Night couch co-op for up to five players'],
];

export default function OverviewPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'What is Directive 8020? - Story, Gameplay & New Mechanics',
          description:
            'Everything we know about Directive 8020: story, gameplay mechanics, Turning Points, Story Tree, Movie Night co-op, and how it evolves The Dark Pictures Anthology.',
          url: '/directive-8020-overview',
          datePublished: '2026-05-10',
          dateModified: '2026-05-12',
          imageUrl: '/d8020-screenshot-01.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Overview' }]} />
        <PageHero src="/d8020-screenshot-01.jpg" alt="Directive 8020 official screenshot of the Cassiopeia crew" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          What is Directive 8020?
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Directive 8020 is Supermassive Games&apos; sci-fi horror entry in The
          Dark Pictures Anthology: a branching survival story about a desperate
          colony mission, an alien mimic, and a crew that can no longer trust
          what it sees.
        </p>

        <VideoEmbed
          videoId="gaQkzfA14G4"
          title="Directive 8020 official trailer"
          caption="Official Directive 8020 video from Supermassive / The Dark Pictures. Watch this first if you want the tone, setting, mimic threat, and cinematic presentation without reading late-game spoilers."
        />

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden mb-8">
          <table className="w-full text-sm">
            <tbody>
              {quickFacts.map(([label, value]) => (
                <tr key={label} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 text-muted-foreground font-medium w-44">{label}</td>
                  <td className="px-4 py-3 text-foreground">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>The Premise: A Colony Mission Becomes a Trust Test</h2>
          <p>
            Directive 8020 begins with a familiar survival-horror pressure
            point: Earth is running out of time. Tau Ceti f, 12 light years from
            home, becomes humanity&apos;s possible escape route, and the colony ship
            <strong> Cassiopeia</strong> is sent to secure that future. The
            mission collapses when the ship crash lands and the crew discovers
            that the planet is not empty.
          </p>
          <p>
            The central threat is not just a monster in the corridor. It is an
            alien organism that can <strong>perfectly imitate its prey</strong>.
            That changes the normal Dark Pictures tension: a wrong choice can
            kill someone, but a wrong act of trust can also put the entire crew
            in danger.
          </p>

          <ArticleImage
            src="/d8020-screenshot-05.jpg"
            alt="Directive 8020 official mimic threat screenshot"
            caption="The mimic premise is the core keyword and gameplay hook: Directive 8020 is not only a space horror game, but a trust and identity horror story where any crew member can become a suspect."
          />

          <h2>Why the Mimic Matters for Gameplay</h2>
          <p>
            The mimic premise gives Directive 8020 a stronger deduction layer
            than many earlier anthology entries. Players are not simply choosing
            kind, aggressive, or cautious dialogue. They are judging whether a
            crew member&apos;s behavior, timing, memory, and emotional response
            still fit the person they claim to be.
          </p>
          <ul>
            <li><strong>Dialogue becomes evidence:</strong> evasive answers and inconsistent memories may matter.</li>
            <li><strong>Relationships become risky:</strong> trusting a close ally can be correct or fatal.</li>
            <li><strong>Separation is dangerous:</strong> isolated characters are easier targets and harder to verify.</li>
            <li><strong>Observation matters:</strong> the safest player is not always the fastest player.</li>
          </ul>

          <h2>Survival Gameplay, Stealth, and Improvised Weapons</h2>
          <p>
            Official store copy describes Directive 8020 as combining cinematic
            storytelling with more active survival gameplay. The crew must evade
            threats in the dark corridors of the ship, use stealth, react under
            pressure, and rely on improvised weapons when escape is not enough.
          </p>
          <p>
            For players coming from Man of Medan, Little Hope, House of Ashes,
            or The Devil in Me, the important shift is that Directive 8020 looks
            less passive. Choices still drive the story, but moment-to-moment
            survival now has more room for movement, hiding, and immediate
            threat management.
          </p>

          <ArticleImage
            src="/d8020-screenshot-02.jpg"
            alt="Directive 8020 official corridor survival gameplay screenshot"
            caption="Dark corridors, stealth, improvised weapons, and reflex checks make Directive 8020 more active than a pure dialogue-driven interactive drama."
          />

          <h2>Turning Points and the Story Tree</h2>
          <p>
            The biggest structural feature is the <strong>Turning Points story
            tree</strong>. Instead of forcing every player to replay the entire
            game from the beginning, the story tree is built around revisiting
            major branch points, unlocking hidden paths, and changing the fate
            of crew members.
          </p>
          <p>
            That is useful for three different audiences: players who want all
            endings, trophy hunters who need specific branches, and casual
            players who lose a character and want to understand which decision
            caused the death.
          </p>

          <ArticleImage
            src="/d8020-screenshot-06.jpg"
            alt="Directive 8020 official Turning Points Story Tree screenshot"
            caption="The Story Tree and Turning Points are important for all endings, save everyone routes, trophy cleanup, and choice consequence testing."
          />

          <h2>Movie Night Co-op</h2>
          <p>
            Directive 8020 keeps the social side of The Dark Pictures formula
            through Movie Night couch co-op. Steam lists support for up to five
            players, with each person assigned crew members to control. This is
            a good mode for first runs because the mimic premise creates natural
            debate: who is lying, who should be trusted, and who should take the
            risk in a dangerous scene?
          </p>
          <p>
            The official Dark Pictures site also notes that online multiplayer
            is planned as a post-launch update. For launch-day players, treat
            Movie Night as the confirmed co-op mode and online play as a feature
            to check after patches arrive.
          </p>

          <h2>How to Approach Your First Playthrough</h2>
          <p>
            If you care about story impact, play the first run with minimal
            spoilers and only use guides for mechanics, collectibles, or
            non-spoiler survival principles. If you care about trophies or the
            best ending, use the Story Tree and Turning Points after each major
            chapter to identify the branch that created a bad outcome.
          </p>
          <ul>
            <li>For immersion: play blind, accept deaths, then replay branches later.</li>
            <li>For best ending: prioritize trust verification, group safety, and successful QTEs.</li>
            <li>For completion: document every Turning Point and unexplored branch.</li>
            <li>For co-op: assign cautious players to key decision makers and fast-reacting players to action-heavy characters.</li>
          </ul>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
