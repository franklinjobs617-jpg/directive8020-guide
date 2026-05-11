import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Directive 8020 Characters - Full Cast & Crew of the Cassiopeia',
  description:
    'Meet the crew of the Cassiopeia in Directive 8020. Complete character profiles, cast details, and what we know about each survivor in Supermassive Games sci-fi horror.',
  alternates: {
    canonical: '/directive-8020-characters',
  },
};

const faqs = [
  {
    question: 'How many playable characters are in Directive 8020?',
    answer:
      'While the full character count has not been officially confirmed, previous Dark Pictures games typically feature 5 playable characters. Directive 8020 follows the crew of the colony ship Cassiopeia, each with their own story arcs and potential fates determined by player choices.',
  },
  {
    question: 'Can all characters die in Directive 8020?',
    answer:
      'Yes. Like previous Supermassive Games titles, every character in Directive 8020 can potentially die based on your decisions. The game features a branching narrative where your choices directly impact each character\'s survival.',
  },
  {
    question: 'Who plays the lead role in Directive 8020?',
    answer:
      'Lashana Lynch (Captain Marvel, No Time to Die) has been confirmed as part of the cast. Full cast details will be revealed as we get closer to launch.',
  },
];

const characters = [
  {
    name: 'Cassiopeia Crew',
    role: 'Colonists',
    description:
      'The crew of the colony ship Cassiopeia — humanity\'s last hope. Sent to Tau Ceti f to establish a new home, they instead find an alien threat that can mimic any living thing. Trust between crew members is the first casualty.',
    status: 'Multiple playable characters',
  },
];

export default function CharactersPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Characters - Full Cast & Crew of the Cassiopeia',
          description:
            'Meet the crew of the Cassiopeia in Directive 8020. Complete character profiles, cast details, and survival info.',
          url: '/directive-8020-characters',
          datePublished: '2026-05-10',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Characters' }]} />
        <PageHero src="/characters-lineup.jpg" alt="Directive 8020 characters and cast" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Characters
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Meet the crew of the Cassiopeia. Every character profile, actor, and
          what we know before launch.
        </p>

        <div className="prose-game">
          <h2>The Crew of the Cassiopeia</h2>
          <p>
            In Directive 8020, you control the crew of the colony ship
            Cassiopeia — a group of specialists sent to establish a new home for
            humanity on Tau Ceti f. When they crash-land and discover a deadly
            alien threat, the crew must navigate not only physical danger but
            the collapse of trust among themselves.
          </p>
          <p>
            The alien organism can <strong>perfectly mimic any crew member</strong>,
            meaning the person standing next to you might be the creature in
            disguise. This creates a pervasive atmosphere of paranoia where
            every interaction could be a trap.
          </p>
        </div>

        {/* Character Cards */}
        <div className="my-8 space-y-4">
          {characters.map((char) => (
            <div
              key={char.name}
              className="rounded-lg border border-border/50 bg-card/30 p-6"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-foreground">
                  {char.name}
                </h3>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border text-d8020 bg-d8020/15 border-d8020/30">
                  {char.status}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{char.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {char.description}
              </p>
            </div>
          ))}
        </div>

        <div className="prose-game">
          <h2>Confirmed Cast</h2>
          <p>
            <strong>Lashana Lynch</strong> has been confirmed as part of the
            cast. Known for her roles in Captain Marvel and No Time to Die,
            Lynch brings significant star power to the production. Full cast
            details for all characters will be revealed closer to launch.
          </p>

          <h2>How Character Survival Works</h2>
          <p>
            In the Dark Pictures series, every character can live or die based
            on the choices you make throughout the story. Directive 8020
            continues this tradition with even higher stakes:
          </p>
          <ul>
            <li>
              <strong>Direct choices:</strong> Some decisions explicitly put a
              character at risk — choose wrong and they die.
            </li>
            <li>
              <strong>QTEs (Quick Time Events):</strong> Failing action
              sequences can lead to a character&apos;s death.
            </li>
            <li>
              <strong>Relationships:</strong> How characters feel about each
              other affects whether they help or hinder each other in critical
              moments.
            </li>
            <li>
              <strong>The mimic:</strong> Trusting the wrong &ldquo;person&rdquo; — who
              might actually be the alien — can have deadly consequences.
            </li>
          </ul>
          <p>
            The new <strong>Turning Points</strong> system allows you to rewind
            to key moments and try different choices, making it easier to save
            characters who died in your first playthrough.
          </p>
        </div>

        <div className="mt-8 rounded-lg border border-d8020/30 bg-d8020/5 p-4">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Coming May 12:</strong> Full
            character profiles with individual survival guides will be
            published on launch day. Check back for detailed guides on how to
            save each character.
          </p>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
