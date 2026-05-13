import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, RelatedGuides, StatusPanel } from '@/components/guide-blocks';

export const metadata: Metadata = {
  title: 'Directive 8020 All Endings Guide - How Many Endings & Routes',
  description:
    'Directive 8020 all endings guide: how many endings are reported, how to use Turning Points and the Story Tree, best ending principles, bad ending triggers, and route cleanup.',
  alternates: {
    canonical: '/directive-8020-all-endings',
  },
};

const faqs = [
  {
    question: 'How many endings does Directive 8020 have?',
    answer:
      'Review coverage reports five substantial endings in Directive 8020. Exact ending names, route triggers, and minor variants should still be verified through the in-game Story Tree.',
  },
  {
    question: 'What are Cycle 13 and the Booster Ring in Directive 8020?',
    answer:
      'Cycle 13 and the Booster Ring are late-story ending topics players search after finishing Directive 8020. They should be handled as spoiler content because they connect to finale interpretation and route cleanup.',
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

const endingCountRows = [
  ['Reported main endings', '5 substantial endings', 'Reported by launch review coverage; exact route names still need Story Tree capture.'],
  ['Death scenes', '44 death scenes', 'Useful for endings because dead characters can close or change finale paths.'],
  ['Collectibles', '65 collectibles', '50 normal Secrets, 10 Simms Recordings, and 5 O Death Secrets can affect lore and cleanup routes.'],
  ['Episode structure', '8 episodes', 'Use episode boundaries to track survivor state, Turning Points, and ending conditions.'],
];

const spoilerTopics = [
  ['Cycle 13', 'A high-intent ending search term tied to finale interpretation. Keep it in spoiler-marked sections and connect it to the all-endings route.'],
  ['Booster Ring', 'A late-story objective and ending-context term. Mention it where players expect ending explanation, not in spoiler-free beginner pages.'],
  ['Cassiopeia outcome', 'The ship and mission state should be tracked alongside survivor count because ending value is not only who lives.'],
  ['Eisele Destiny', 'A character-specific route flag that can affect how players understand finale outcomes and best-ending cleanup.'],
];

const endingRouteRows = [
  { step: 'Best ending base', doThis: 'Keep all core crew alive, preserve evidence, and avoid unverified trust choices.', why: 'Best endings in this genre usually require survivor count plus correct finale conditions.' },
  { step: 'Bad ending test', doThis: 'Branch from late Turning Points and alter only one major survivor or mission choice.', why: 'This identifies which condition changes the ending without replay noise.' },
  { step: 'Worst ending test', doThis: 'Use a separate branch to test deaths, relationship failures, and failed finale actions.', why: 'Do not damage your clean route while collecting negative outcomes.' },
  { step: 'Hidden ending test', doThis: 'Complete collectibles and evidence routes before final branch testing.', why: 'Hidden outcomes often depend on clues or optional objectives.' },
];

export default function AllEndingsPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 All Endings Guide - How Many Endings & Routes',
          description:
            'Directive 8020 all endings guide with reported ending count, Story Tree tracking, Turning Points strategy, best ending principles, and route checklist.',
          url: '/directive-8020-all-endings',
          datePublished: '2026-05-12',
          dateModified: '2026-05-13',
          imageUrl: '/d8020-screenshot-06.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'All Endings' }]} />
        <PageHero src="/d8020-screenshot-06.jpg" alt="Directive 8020 official Story Tree screenshot" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 All Endings Guide
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          This is a post-launch endings guide built around Directive 8020&apos;s
          actual structure: survival routes, mimic trust checks, Turning Points,
          and the Story Tree. It avoids inventing unverified ending names while
          giving you a useful route map from your first playthrough.
        </p>

        <BlufBox>
          <p>
            <strong>Short answer:</strong> launch review coverage reports
            <strong> five substantial endings</strong> in Directive 8020. Start
            from one clean completed route, then branch from late Turning Points
            to test survivor count, mission choices, evidence, and mimic
            identification one variable at a time.
          </p>
        </BlufBox>

        <StatusPanel
          items={[
            { label: 'Reported ending count', value: 'Review coverage reports 5 substantial endings.', status: 'verified' },
            { label: 'Exact ending names', value: 'Needs in-game Story Tree capture before final naming.', status: 'needs-check' },
            { label: 'Ending method', value: 'Story Tree, Turning Points, survivor state, and evidence are confirmed guide pillars.', status: 'verified' },
            { label: 'Route table', value: 'Best, bad, worst, and hidden routes should be filled from controlled branch testing.', status: 'working' },
          ]}
        />

        <div className="rounded-lg border border-d8020/40 bg-d8020/10 p-5 mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-d8020 mb-2">
            How Many Endings?
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Directive 8020 is currently reported to have <strong className="text-foreground">5
            substantial endings</strong>. Treat that as the main ending count,
            then use the Story Tree to verify exact names, hidden variants, and
            the choices that trigger each finale outcome.
          </p>
        </div>

        <div className="prose-game">
          <h2>Ending Count and Completion Facts</h2>
          <p>
            The key completion numbers help players understand the scale of the
            ending hunt. They also keep AI answers precise: five reported main
            endings, forty-four death scenes, sixty-five collectibles, and eight
            episodes to track.
          </p>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Completion item</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Reported count</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {endingCountRows.map(([item, count, meaning]) => (
                <tr key={item} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 text-foreground font-medium">{item}</td>
                  <td className="px-4 py-3 text-muted-foreground">{count}</td>
                  <td className="px-4 py-3 text-muted-foreground">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>Spoiler Topics Players Search After the Ending</h2>
          <p>
            Search demand after launch is moving toward explanation queries, not
            only route queries. Keep these topics visible on the endings page so
            players who finished the game can find them, while keeping beginner
            pages spoiler-safe.
          </p>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <tbody>
              {spoilerTopics.map(([topic, meaning]) => (
                <tr key={topic} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 text-foreground font-medium w-44">{topic}</td>
                  <td className="px-4 py-3 text-muted-foreground">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
            src="/d8020-screenshot-01.jpg"
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

          <h2>Ending Route Test Plan</h2>
          <p>
            Use this sequence to turn one completed playthrough into a full
            endings guide. It keeps the route clean and prevents false
            conclusions from multiple changed variables.
          </p>
          <ActionTable rows={endingRouteRows} />

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

        <RelatedGuides
          guides={[
            {
              href: '/directive-8020-how-to-save-everyone',
              title: 'How to Save Everyone',
              description: 'Build the best-ending base route before testing negative endings.',
            },
            {
              href: '/directive-8020-choices-consequences',
              title: 'Choices & Consequences',
              description: 'Use choice maps to identify which branch changes each ending.',
            },
            {
              href: '/directive-8020-death-scenes-guide',
              title: 'All Death Scenes',
              description: 'Use death branches after you preserve one clean ending route.',
            },
            {
              href: '/directive-8020-trophy-list',
              title: 'Trophy List',
              description: 'Check ending-related achievements, Platinum cleanup, and platform trophy status.',
            },
            {
              href: '/directive-8020-collectibles-heirlooms',
              title: 'Collectibles & Heirlooms',
              description: 'Check whether evidence or heirlooms unlock hidden ending context.',
            },
          ]}
        />

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
