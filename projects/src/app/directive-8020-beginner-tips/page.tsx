import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';

export const metadata: Metadata = {
  title: 'Directive 8020 Beginner Tips - Spoiler-Free Survival Guide',
  description:
    'Directive 8020 beginner tips and spoiler-free survival guide: first playthrough advice, mimic clues, QTEs, stealth, Story Tree, collectibles, and settings.',
  alternates: {
    canonical: '/directive-8020-beginner-tips',
  },
};

const faqs = [
  {
    question: 'Should I play Directive 8020 blind first?',
    answer:
      'Yes, if you care about horror tension and story surprise. Use spoiler-free tips for settings, exploration, and survival logic, then use full guides after your first ending.',
  },
  {
    question: 'What should beginners focus on first?',
    answer:
      'Focus on subtitles, brightness, QTE comfort, exploring safe rooms, tracking who was isolated, and checking the Story Tree after chapters.',
  },
  {
    question: 'How do I avoid missing important clues?',
    answer:
      'Search before objective exits, inspect terminals and personal spaces, listen to dialogue, and record whether a clue appears before a trust decision.',
  },
  {
    question: 'What is the most important beginner rule?',
    answer:
      'Do not blindly trust a character who recently returned from isolation. Directive 8020 is built around a mimic threat, so verification is survival.',
  },
];

const tips = [
  'Turn on subtitles and set brightness so dark corridors are readable without washing out the image.',
  'Use headphones if possible; dialogue, sound cues, and atmosphere matter in a mimic horror game.',
  'Explore before leaving safe areas, especially terminals, crew rooms, labs, and medical spaces.',
  'Treat every isolated character as unverified until the story gives evidence.',
  'Do not mash through dialogue; small contradictions can become survival clues.',
  'Keep relationships stable unless you have a concrete reason to accuse someone.',
  'Check the Story Tree after each chapter, even if you do not plan to rewind yet.',
  'If a character dies, write down the last three major choices before using Turning Points.',
];

export default function BeginnerTipsPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Beginner Tips - Spoiler-Free Survival Guide',
          description:
            'Spoiler-free Directive 8020 beginner tips for first playthrough survival, mimic clues, QTEs, stealth, collectibles, Story Tree, and settings.',
          url: '/directive-8020-beginner-tips',
          datePublished: '2026-05-12',
          dateModified: '2026-05-12',
          imageUrl: '/d8020-screenshot-02.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Beginner Tips' }]} />
        <PageHero src="/d8020-screenshot-02.jpg" alt="Directive 8020 beginner tips corridor screenshot" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Beginner Tips
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          This is the spoiler-free guide to read before your first run. It helps
          you survive the Cassiopeia without naming late-game deaths, endings,
          or major twists.
        </p>

        <VideoEmbed
          videoId="gaQkzfA14G4"
          title="Directive 8020 official trailer for beginners"
          caption="Start with the official trailer if you want tone and mechanics without reading route spoilers: colony ship, mimic threat, stealth, and branching horror."
        />

        <div className="prose-game">
          <h2>Before You Start</h2>
          <p>
            Directive 8020 is best when you can read faces, hear dialogue, and
            react cleanly to QTEs. Spend two minutes on settings before the
            first chapter so technical issues do not cause bad story outcomes.
          </p>
          <ul>
            <li>Enable subtitles, especially for co-op or low-volume play.</li>
            <li>Adjust brightness so shadows are dark but navigation remains readable.</li>
            <li>Test controller prompts before action scenes become serious.</li>
            <li>Turn off distracting overlays or notifications.</li>
          </ul>

          <ArticleImage
            src="/d8020-screenshot-09.jpg"
            alt="Directive 8020 beginner exploration screenshot"
            caption="For beginners, the safest habit is slow exploration. Terminals, objects, and ship interiors can hold context that changes later decisions."
          />

          <h2>Spoiler-Free Survival Tips</h2>
          <ul>
            {tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>

          <h2>How to Read the Mimic Threat</h2>
          <p>
            The mimic is not just a monster reveal. It changes how you read
            every scene. A character who asks for help may be genuine, but a
            character who appears after isolation and avoids details should be
            treated as a risk until verified.
          </p>
          <ul>
            <li>Ask whether anyone witnessed where the character came from.</li>
            <li>Look for memory gaps or unnatural urgency.</li>
            <li>Prefer group-safe choices over one-on-one isolation.</li>
            <li>Use evidence before accusation when the game gives you time.</li>
          </ul>

          <h2>When to Use Guides</h2>
          <p>
            Use spoiler-free pages during your first run. Save full endings,
            all choices, and trophy cleanup pages for after you have seen one
            ending or after a character dies and you decide to rewind.
          </p>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
