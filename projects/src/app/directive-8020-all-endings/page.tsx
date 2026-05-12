import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage } from '@/components/article-media';

export const metadata: Metadata = {
  title: 'Directive 8020 All Endings Guide - Story Tree & Best Ending Route',
  description:
    'Directive 8020 all endings guide: how endings are likely structured, how to use Turning Points and the Story Tree, best ending principles, bad ending triggers, and spoiler-safe tracking tips.',
  alternates: {
    canonical: '/directive-8020-all-endings',
  },
};

const faqs = [
  {
    question: 'How many endings does Directive 8020 have?',
    answer:
      'The final ending count should be verified through the Story Tree after launch. Directive 8020 is built around multiple endings, hidden paths, character deaths, and Turning Points, so ending routes are expected to depend on both survival and major story choices.',
  },
  {
    question: 'What is the best ending in Directive 8020?',
    answer:
      'The safest best-ending assumption is to keep the crew alive, verify the mimic before trusting isolated characters, preserve useful relationships, and avoid choices that sacrifice Earth or the Cassiopeia crew without proof.',
  },
  {
    question: 'Can I see every ending without replaying the full game?',
    answer:
      'Directive 8020 introduces the Turning Points story tree, which is designed to help players revisit key decisions, unlock hidden paths, and save crew members from previous deaths without always starting from the beginning.',
  },
  {
    question: 'Should I use an endings guide on my first playthrough?',
    answer:
      'If you care about story impact, play blind first and use this page as a spoiler-safe tracking framework. If you care about trophies or the best ending, start logging Turning Points and deaths from chapter one.',
  },
];

const endingFactors = [
  ['Crew survival', 'Who lives, who dies, and whether deaths remove later options.'],
  ['Mimic identification', 'Whether you correctly identify impostors before trusting them.'],
  ['Mission outcome', 'Whether choices protect the crew, the ship, Earth, or only one survivor.'],
  ['Relationships', 'Whether characters are willing to warn, rescue, or sacrifice for each other.'],
  ['Evidence found', 'Whether clues give you safer options during late-game trust checks.'],
  ['Turning Points explored', 'Whether hidden branches have been unlocked in the Story Tree.'],
];

export default function AllEndingsPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 All Endings Guide - Story Tree & Best Ending Route',
          description:
            'Directive 8020 all endings guide with Story Tree tracking, Turning Points strategy, best ending principles, and ending route checklist.',
          url: '/directive-8020-all-endings',
          datePublished: '2026-05-12',
          dateModified: '2026-05-12',
          imageUrl: '/official-story-tree.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'All Endings' }]} />
        <PageHero src="/official-story-tree.jpg" alt="Directive 8020 official Story Tree screenshot" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020: All Endings Guide
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          This is a launch-day endings guide built around Directive 8020&apos;s
          actual structure: survival routes, mimic trust checks, Turning Points,
          and the Story Tree. It avoids inventing unverified ending names while
          giving you a useful route map from your first playthrough.
        </p>

        <div className="rounded-lg border border-d8020/40 bg-d8020/10 p-5 mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-d8020 mb-2">
            Spoiler-Aware Launch Note
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The exact ending count should be confirmed from the in-game Story
            Tree after release. Until then, the valuable work is mapping the
            systems that decide endings, so your first run creates useful data
            instead of random guesses.
          </p>
        </div>

        <div className="prose-game">
          <h2>What Determines an Ending?</h2>
          <p>
            In Directive 8020, an ending should not be treated as one final
            choice. Supermassive&apos;s anthology structure usually builds endings
            from accumulated conditions: who is alive, what they know, how they
            relate to each other, and which late-game branches remain available.
            Directive 8020 adds one more layer: whether you correctly handle a
            creature that can imitate the crew.
          </p>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <tbody>
              {endingFactors.map(([factor, meaning]) => (
                <tr key={factor} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 text-foreground font-medium w-44">{factor}</td>
                  <td className="px-4 py-3 text-muted-foreground">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>Best Ending Route: Safe Principles</h2>
          <p>
            A verified best-ending route requires full chapter testing, but the
            safest principles are clear from the game&apos;s systems. You want the
            most living characters, the strongest evidence base, and the fewest
            decisions made from panic or blind trust.
          </p>

          <ArticleImage
            src="/official-cassiopeia-crew.jpg"
            alt="Directive 8020 official crew screenshot for ending routes"
            caption="Most Directive 8020 endings should be read through crew state: who survives, who trusts whom, who has evidence, and who reaches the finale."
          />
          <ul>
            <li><strong>Keep characters together when possible:</strong> isolation creates mimic risk and missed witnesses.</li>
            <li><strong>Verify before trusting:</strong> do not follow an isolated character without a reason.</li>
            <li><strong>Preserve relationships:</strong> hostile crews are less likely to rescue each other.</li>
            <li><strong>Explore optional clues:</strong> evidence can unlock safer dialogue and accusation options later.</li>
            <li><strong>Pass QTEs and stealth checks:</strong> mechanical failures can close ending routes immediately.</li>
          </ul>

          <h2>Bad Ending and Worst Ending Triggers</h2>
          <p>
            The worst routes in this style of game usually come from cascading
            failures. One death removes a witness, the missing witness makes a
            later trust decision harder, and a bad trust decision creates
            another death. When testing endings, treat these as likely red flags:
          </p>
          <ul>
            <li>Trusting a character who recently returned from isolation with no verification.</li>
            <li>Choosing speed over evidence before a major accusation or rescue.</li>
            <li>Letting two characters with poor relationships decide each other&apos;s fate.</li>
            <li>Ignoring a route that lets the crew communicate or regroup.</li>
            <li>Failing late-game action sequences after a long survival chain.</li>
          </ul>

          <h2>How to Use the Story Tree Efficiently</h2>
          <p>
            The Story Tree is the main reason Directive 8020&apos;s ending hunt
            should be less painful than older anthology entries. After every
            chapter, look for branches that are locked, deaths that appear
            connected to earlier choices, and paths that have not been explored.
          </p>
          <ol>
            <li>Finish a chapter, then check which branch the Story Tree marked as a Turning Point.</li>
            <li>Write down the choice, the character state, and whether a death or relationship shift followed.</li>
            <li>Only rewind to the earliest relevant Turning Point, not the most recent scene.</li>
            <li>Change one variable at a time, so you know what actually altered the route.</li>
            <li>Save full alternate branches for after your first complete ending.</li>
          </ol>

          <h2>Ending Tracker Template</h2>
          <p>
            Use this simple structure while playing. It turns your first run
            into a route map you can reuse for best ending, bad ending, and
            trophy cleanup.
          </p>
          <ul>
            <li><strong>Chapter / scene:</strong> where the branch happened.</li>
            <li><strong>Turning Point:</strong> the exact decision or action sequence.</li>
            <li><strong>Choice made:</strong> what you selected.</li>
            <li><strong>Immediate result:</strong> death, relationship change, clue, or route change.</li>
            <li><strong>Long-term result:</strong> what changed by the end of the chapter.</li>
          </ul>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
