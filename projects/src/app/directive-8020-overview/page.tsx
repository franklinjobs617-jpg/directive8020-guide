import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'What is Directive 8020? - Story, Gameplay & New Mechanics',
  description:
    'Everything we know about Directive 8020: story, gameplay mechanics, Turning Points system, Story Tree, stealth mechanics, and how it evolves The Dark Pictures Anthology.',
  alternates: {
    canonical: '/directive-8020-overview',
  },
};

const faqs = [
  {
    question: 'Is Directive 8020 a sequel to Until Dawn?',
    answer:
      'Directive 8020 is not a direct sequel to Until Dawn, but it is made by the same developer, Supermassive Games. It is the newest entry in The Dark Pictures Anthology series. It shares the same interactive drama DNA—branching narratives where your choices determine who survives—but introduces new mechanics like Turning Points and the Story Tree.',
  },
  {
    question: 'What are Turning Points in Directive 8020?',
    answer:
      'Turning Points are a new mechanic in Directive 8020 that allow players to rewind to key decision moments and experience different story branches. This is the first time this feature has appeared in The Dark Pictures Anthology, giving players more control over exploring different outcomes without replaying the entire game.',
  },
  {
    question: 'What is the Story Tree in Directive 8020?',
    answer:
      'The Story Tree is a visual map of your decisions and their consequences throughout the game. It lets you see which paths you have taken and which branches remain unexplored. Combined with Turning Points, it gives players a comprehensive overview of the narrative structure.',
  },
  {
    question: 'Does Directive 8020 have multiplayer?',
    answer:
      'Based on the Dark Pictures Anthology tradition, Directive 8020 is expected to include multiplayer modes similar to previous entries, such as Shared Story mode (online co-op) and Movie Night mode (local pass-the-controller). Official details will be confirmed closer to launch.',
  },
  {
    question: 'How long is Directive 8020?',
    answer:
      'While official playtime has not been confirmed, previous Dark Pictures games typically take 5-7 hours for a single playthrough. With multiple endings, the Turning Points system, and collectibles, completionists can expect significantly more time to see everything the game has to offer.',
  },
];

export default function OverviewPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'What is Directive 8020? - Story, Gameplay & New Mechanics',
          description:
            'Everything we know about Directive 8020: story, gameplay mechanics, Turning Points system, Story Tree, and how it evolves The Dark Pictures Anthology.',
          url: '/directive-8020-overview',
          datePublished: '2026-05-10',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Overview' }]} />
        <PageHero src="/overview-card.jpg" alt="Directive 8020 game overview - sci-fi horror space station" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          What is Directive 8020?
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Everything we know about Supermassive Games&apos; cinematic sci-fi
          survival horror — story, gameplay, and the new mechanics that change
          everything.
        </p>

        <div className="prose-game">
          <h2>The Story</h2>
          <p>
            Earth is dying. Humanity&apos;s last hope lies 12 light-years away on a
            planet orbiting Tau Ceti f. The colony ship <strong>Cassiopeia</strong> is
            dispatched to establish a new home for mankind. But when the crew
            crash-lands on the planet, they quickly discover they are not alone.
          </p>
          <p>
            A deadly alien organism — one that can <strong>perfectly mimic its
            prey</strong> — begins hunting the survivors. Trust between crew
            members collapses. Paranoia spreads. And every decision you make
            determines who lives and who dies.
          </p>
          <p>
            The tagline says it all: <strong>&ldquo;Trust No One.&rdquo;</strong>
          </p>

          <h2>Gameplay &amp; Mechanics</h2>
          <p>
            Directive 8020 builds on the foundation of The Dark Pictures
            Anthology but introduces significant evolutions to the formula:
          </p>
          <ul>
            <li>
              <strong>Stealth Mechanics:</strong> For the first time in the
              series, players can actively hide and sneak past threats using
              cover and environmental objects. This adds a survival-horror layer
              beyond the typical QTE-driven action.
            </li>
            <li>
              <strong>Real-Time Decision Making:</strong> Choices are no longer
              just dialogue prompts. You must make split-second decisions under
              pressure while threats are actively present.
            </li>
            <li>
              <strong>The Mimic Threat:</strong> The alien can disguise itself as
              any crew member. This means the person standing next to you might
              not be who they appear to be — creating a constant state of
              uncertainty and tension.
            </li>
          </ul>

          <h2>Turning Points System</h2>
          <p>
            The biggest new feature in Directive 8020 is the <strong>Turning
            Points</strong> system. This is a first for The Dark Pictures
            Anthology and addresses one of the most common player complaints:
            having to replay the entire game to see different outcomes.
          </p>
          <p>
            With Turning Points, you can <strong>rewind to key decision
            moments</strong> and choose a different path. This allows you to:
          </p>
          <ul>
            <li>Explore different story branches without a full replay</li>
            <li>Undo a character&apos;s death and try to save them</li>
            <li>Discover hidden narrative paths you might have missed</li>
            <li>Work toward the best possible ending systematically</li>
          </ul>

          <h2>Story Tree</h2>
          <p>
            Working hand-in-hand with Turning Points, the <strong>Story
            Tree</strong> gives you a visual overview of every decision you&apos;ve
            made and every branch the narrative can take. Think of it as a
            flowchart of the entire story — showing you which paths you&apos;ve
            explored and which remain hidden.
          </p>
          <p>
            This is particularly valuable for completionists who want to see
            every possible outcome and find every secret the game has to offer.
          </p>

          <h2>Survivor Mode</h2>
          <p>
            For players who want the classic Dark Pictures experience, Survivor
            Mode removes the Turning Points safety net. Every decision is
            permanent, and you must live with the consequences — just like the
            earlier games in the series. This mode is recommended for veterans
            seeking maximum tension.
          </p>

          <h2>How It Compares to Previous Dark Pictures Games</h2>
          <p>
            Directive 8020 represents the most significant evolution of The Dark
            Pictures formula since the series began:
          </p>
          <ul>
            <li><strong>More agency:</strong> Stealth and real-time decisions give players more direct control over survival</li>
            <li><strong>More replayability:</strong> Turning Points and the Story Tree make exploring branches faster and more intuitive</li>
            <li><strong>Bigger scale:</strong> The sci-fi setting and colony ship premise allow for larger, more varied environments</li>
            <li><strong>Higher stakes:</strong> The mimic mechanic means you can never be sure who to trust</li>
          </ul>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
