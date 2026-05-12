import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { ActionTable, BlufBox, RelatedGuides, StatusPanel } from '@/components/guide-blocks';

export const metadata: Metadata = {
  title: 'Directive 8020 Trophy List - Achievements, PS5 Trophies & Platinum',
  description:
    'Directive 8020 trophy list and achievements hub for Steam, PS5, Xbox, Platinum planning, missable trophies, collectibles, endings, and Story Tree cleanup.',
  alternates: {
    canonical: '/directive-8020-trophy-list',
  },
};

const faqs = [
  {
    question: 'Does Directive 8020 have a trophy list?',
    answer:
      'Directive 8020 has Steam achievements listed on its Steam page, but the full public PS5 trophy list and individual trophy names should be verified from platform data before publishing exact names.',
  },
  {
    question: 'Does Directive 8020 have a Platinum trophy on PS5?',
    answer:
      'A PS5 Platinum trophy should be treated as pending verification until the PlayStation trophy list is captured from a trusted platform source. Use this page as a Platinum roadmap, not as a final name list.',
  },
  {
    question: 'Are Directive 8020 achievements missable?',
    answer:
      'Yes, many Directive 8020 achievements are likely to be missable because the game is built around deaths, endings, collectibles, character survival, and branching choices.',
  },
  {
    question: 'What is the fastest way to clean up Directive 8020 trophies?',
    answer:
      'The fastest cleanup method is to finish one complete route, keep a clean save-everyone branch, then use Turning Points in the Story Tree to replay endings, deaths, collectibles, and route-specific choices.',
  },
  {
    question: 'Should I chase trophies on my first Directive 8020 playthrough?',
    answer:
      'Most players should finish one story route first. Trophy hunters can still track collectibles, deaths, endings, and Turning Points during the first run without forcing every branch immediately.',
  },
];

const platformRows = [
  ['Steam achievements', 'Confirmed store feature', 'Steam lists Steam Achievements for Directive 8020. Exact public names still need platform capture.'],
  ['PS5 trophies', 'Needs capture', 'Use PlayStation trophy data before writing exact Bronze, Silver, Gold, or Platinum names.'],
  ['Xbox achievements', 'Needs capture', 'Use Xbox achievement data before writing exact score values or unlock names.'],
  ['Platinum trophy', 'Needs capture', 'Plan for a Platinum route, but do not claim the final PS5 Platinum name until verified.'],
];

const verificationRows = [
  ['Exact trophy name', 'Wait for platform list capture', 'Do not publish a Bronze, Silver, Gold, Platinum, or achievement name from guesses.'],
  ['Unlock condition', 'Use in-game or platform evidence', 'Write the exact action only when the condition is visible in platform data or verified play.'],
  ['Missable status', 'Verify by route testing', 'A trophy is missable only when a Story Tree branch, death, relationship, or collectible state can block it.'],
  ['Platinum time', 'Estimate after list capture', 'Avoid hour estimates until the final trophy count, collectibles, and replay requirements are known.'],
];

const likelyTrophyTypes = [
  ['Story completion', 'Finish chapters, reach the finale, and complete at least one ending.'],
  ['Survivor routes', 'Keep specific characters alive or complete an everyone-lives route.'],
  ['Death routes', 'Trigger character deaths, failed rescues, or all-deaths style outcomes.'],
  ['Ending routes', 'Unlock best, bad, worst, hidden, or alternate finale outcomes.'],
  ['Collectibles', 'Find logs, evidence, secrets, Heirlooms, and lore objects across the Cassiopeia.'],
  ['Choice outcomes', 'Make specific trust, accusation, rescue, sacrifice, or mission decisions.'],
  ['Modes and replay', 'Use Movie Night, Turning Points, Story Tree branches, or challenge-style routes if trophies require them.'],
];

const platinumPlan = [
  {
    step: 'Run 1',
    doThis: 'Complete one natural route, collect obvious evidence, and record every death, collectible, ending, and Turning Point.',
    why: 'The first completed route creates the Story Tree map needed for efficient cleanup.',
  },
  {
    step: 'Run 2',
    doThis: 'Build a save-everyone route from the earliest relevant Turning Points.',
    why: 'A clean survival route is the safest base for best ending and character-specific trophies.',
  },
  {
    step: 'Run 3',
    doThis: 'Branch into endings and death scenes from late-game Turning Points.',
    why: 'Route-specific trophies are faster when you change one finale condition at a time.',
  },
  {
    step: 'Final cleanup',
    doThis: 'Finish collectibles, Heirlooms, Movie Night, platform-specific trophies, and hidden branch checks.',
    why: 'Cleanup is more reliable once route locks and collectible persistence are known.',
  },
];

const sources = [
  ['Steam store page', 'Confirms Steam Achievements, platforms, Movie Night, Deluxe content, and official feature framing.', 'https://store.steampowered.com/app/2255370/Directive_8020/'],
  ['PlayStation store page', 'Confirms PS5 platform context and official feature positioning for PlayStation players.', 'https://store.playstation.com/en-us/concept/10010841'],
  ['Destructoid review coverage', 'Reports 60 collectibles, 8 episodes, Destinies, and 5 substantial endings.', 'https://www.destructoid.com/reviews/directive-8020-review/'],
  ['PC Gamer review coverage', 'Reports 44 death scenes and reinforces the branching horror route structure.', 'https://www.pcgamer.com/games/horror/directive-8020-review-one-giant-leap-for-sci-fi-body-horror/'],
  ['TechRadar review coverage', 'Useful for PS5 review context, Turning Points, and launch-day player experience.', 'https://www.techradar.com/gaming/directive-8020-review'],
];

const updateLog = [
  ['2026-05-12', 'Created platform-status trophy list page from GSC demand for trophies, trophy list, achievements, PS5 trophies, and Platinum queries.'],
  ['2026-05-12', 'Added verified completion signals: 5 substantial endings, 44 death scenes, 60 collectibles, and 8 episodes.'],
  ['2026-05-12', 'Marked exact PS5 trophy names, Xbox achievement values, and Platinum name as pending platform capture.'],
];

export default function TrophyListPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Trophy List - Achievements, PS5 Trophies & Platinum',
          description:
            'Directive 8020 trophy list and achievements hub for Steam, PS5, Xbox, Platinum planning, missable trophies, collectibles, endings, and Story Tree cleanup.',
          url: '/directive-8020-trophy-list',
          datePublished: '2026-05-12',
          dateModified: '2026-05-12',
          imageUrl: '/d8020-screenshot-06.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Trophy List' }]} />
        <PageHero src="/d8020-screenshot-06.jpg" alt="Directive 8020 Story Tree used for trophy list cleanup" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Trophy List and Achievements
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          This Directive 8020 trophy list hub tracks Steam achievements, PS5
          trophies, Xbox achievements, Platinum planning, missable routes, and
          Story Tree cleanup. It separates verified platform facts from trophy
          names that still need direct capture.
        </p>

        <BlufBox>
          <p>
            <strong>Short answer:</strong> Steam lists achievements for
            Directive 8020. The full PS5 trophy list, Xbox achievement list,
            exact trophy names, and Platinum name should be verified from
            platform data before they are treated as final.
          </p>
        </BlufBox>

        <StatusPanel
          items={[
            { label: 'Steam achievements', value: 'Confirmed as a Steam store feature for Directive 8020.', status: 'verified' },
            { label: 'PS5 trophy list', value: 'Needs trusted PlayStation trophy capture before exact names are final.', status: 'needs-check' },
            { label: 'Platinum route', value: 'Roadmap can be planned from endings, deaths, collectibles, and Turning Points.', status: 'working' },
            { label: 'Completion data', value: 'Review coverage reports 5 substantial endings, 44 death scenes, and 60 collectibles.', status: 'verified' },
          ]}
        />

        <div className="prose-game">
          <h2>Platform Trophy Status</h2>
          <p>
            Players search for Directive 8020 trophies in different ways:
            Steam achievements, PS5 trophies, Xbox achievements, and Platinum
            trophy. The safest SEO and GEO structure is to answer each platform
            separately instead of pretending every platform list is already
            identical.
          </p>
        </div>

        <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Platform query</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current status</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to use this page for</th>
              </tr>
            </thead>
            <tbody>
              {platformRows.map(([platform, status, detail]) => (
                <tr key={platform} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{platform}</td>
                  <td className="px-4 py-3 text-muted-foreground">{status}</td>
                  <td className="px-4 py-3 text-muted-foreground">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <VideoEmbed
          videoId="S1wyl5-8E7E"
          title="Directive 8020 Turning Points and Story Tree trailer for trophy cleanup"
          caption="Turning Points matter for trophies because they let players revisit key choices, recover deaths, and test alternate endings without replaying every scene from the start."
        />

        <div className="prose-game">
          <h2>Likely Trophy and Achievement Categories</h2>
          <p>
            Exact names should wait for platform capture, but the completion
            categories are clear from the game structure. Directive 8020 is a
            branching survival horror game with endings, deaths, collectibles,
            character states, and replayable Turning Points.
          </p>
        </div>

        <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Category</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">What the trophy usually requires</th>
              </tr>
            </thead>
            <tbody>
              {likelyTrophyTypes.map(([category, detail]) => (
                <tr key={category} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{category}</td>
                  <td className="px-4 py-3 text-muted-foreground">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>Platinum Roadmap</h2>
          <p>
            A good Directive 8020 Platinum route should minimize full replays.
            The best pattern is one natural route, one survival route, one
            endings-and-deaths cleanup route, and one final collectible or mode
            cleanup pass.
          </p>
          <ActionTable rows={platinumPlan} />

          <h2>Missable Trophy Checklist</h2>
          <p>
            Treat a trophy as missable if it depends on a character being alive,
            a character being dead, a specific relationship state, a collectible
            found before a scene, or a branch visible in the Story Tree. Track
            these items during every episode.
          </p>
          <ul>
            <li><strong>Survivor state:</strong> who is alive, injured, separated, or suspected.</li>
            <li><strong>Death state:</strong> who died, where they died, and which Turning Point can prevent it.</li>
            <li><strong>Ending state:</strong> which finale outcome was reached and which crew members survived.</li>
            <li><strong>Collectible state:</strong> which of the reported 60 collectibles were found before irreversible exits.</li>
            <li><strong>Branch state:</strong> which Story Tree paths remain hidden or locked.</li>
          </ul>

          <ArticleImage
            src="/d8020-screenshot-09.jpg"
            alt="Directive 8020 collectible area used for achievement cleanup"
            caption="Collectible cleanup should be tracked by episode, room, nearby objective, and whether the item persists after a Turning Point rewind."
          />

          <h2>Evidence and Source Notes</h2>
          <p>
            This page uses source-aware status labels so players and AI systems
            can distinguish confirmed facts from checklist planning. Exact
            trophy names should be added only after platform-level verification.
          </p>
        </div>

        <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Claim type</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Verification rule</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Publishing note</th>
              </tr>
            </thead>
            <tbody>
              {verificationRows.map(([claim, rule, note]) => (
                <tr key={claim} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{claim}</td>
                  <td className="px-4 py-3 text-muted-foreground">{rule}</td>
                  <td className="px-4 py-3 text-muted-foreground">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>Update Log</h2>
          <p>
            The trophy list should change as platform data becomes available.
            Each update should name what changed, what source verified it, and
            whether old route advice needs revision.
          </p>
        </div>

        <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Update</th>
              </tr>
            </thead>
            <tbody>
              {updateLog.map(([date, update]) => (
                <tr key={update} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{date}</td>
                  <td className="px-4 py-3 text-muted-foreground">{update}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>Sources Used for Trophy Verification</h2>
          <p>
            These links are used to verify platform features, completion scale,
            and route systems. They should be checked again before exact trophy
            names or unlock requirements are published.
          </p>
        </div>

        <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Source</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it verifies</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Link</th>
              </tr>
            </thead>
            <tbody>
              {sources.map(([source, use, href]) => (
                <tr key={source} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{source}</td>
                  <td className="px-4 py-3 text-muted-foreground">{use}</td>
                  <td className="px-4 py-3">
                    <a href={href} className="text-d8020 underline underline-offset-4 hover:text-d8020/80" target="_blank" rel="noreferrer">
                      Open source
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <RelatedGuides
          guides={[
            {
              href: '/directive-8020-trophy-guide',
              title: 'Trophy Guide',
              description: 'Use the full strategy page for 100% route planning and cleanup order.',
            },
            {
              href: '/directive-8020-all-endings',
              title: 'All Endings',
              description: 'Ending-related trophies should be tested from late Story Tree branches.',
            },
            {
              href: '/directive-8020-death-scenes-guide',
              title: 'All 44 Death Scenes',
              description: 'Death trophies should be cleaned up after the save-everyone route.',
            },
            {
              href: '/directive-8020-collectibles-heirlooms',
              title: 'Collectibles & Heirlooms',
              description: 'Track the reported 60 collectibles and Deluxe Heirlooms content.',
            },
          ]}
        />

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
