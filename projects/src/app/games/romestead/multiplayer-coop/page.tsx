import { ArticleImage } from '@/components/article-media';
import {
  ActionTable,
  BlufBox,
  SearchAnswerPanel,
  SourceCheckTable,
  StatusPanel,
} from '@/components/guide-blocks';
import { RomesteadArticle } from '@/components/romestead-article';
import {
  createRomesteadMetadata,
  rmCoopActionRows,
  rmCoopJumpLinks,
  rmCoopSearchIntent,
  rmCoopSourceRows,
  rmCoopStatusItems,
  romesteadCoopRows,
  romesteadImages,
} from '@/lib/romestead';

const title = 'Romestead Multiplayer Guide: 1-8 Player Co-op, LAN, Split Screen & Crossplay';
const description =
 'Learn how Romestead multiplayer works: 1-8 player online co-op, LAN, split-screen status, crossplay support, host saves, and group role assignments.';
const canonical = '/games/romestead/multiplayer-coop';

export const metadata = createRomesteadMetadata({
 title,
 description,
 canonical,
 image: romesteadImages.screenshot3,
});

const faqs = [
 {
 question: 'How many players is Romestead?',
 answer:
 'The official Steam description lists 1-8 players.',
 },
 {
 question: 'Does Romestead have online co-op?',
 answer:
 'Yes. Steam feature labels list Online Co-op.',
 },
 {
 question: 'Does Romestead have LAN co-op?',
 answer:
 'Yes. Steam feature labels list LAN Co-op.',
 },
 {
 question: 'Is Romestead split-screen or couch co-op?',
 answer:
 'Split-screen and couch co-op are not confirmed in current Steam feature labels.',
 },
 {
 question: 'Is Romestead local co-op?',
 answer:
 'Romestead lists LAN Co-op, which means local-network co-op is confirmed. Couch co-op and split-screen are different features and are not confirmed.',
 },
 {
 question: 'Does Romestead have crossplay?',
 answer:
 'Crossplay is not confirmed right now because PC via Steam is the only verified public platform.',
 },
 {
 question: 'Who should host a Romestead co-op world?',
 answer:
 'Host-save behavior needs launch testing. Until it is verified, let the most reliable player host and avoid switching machines without checking save behavior.',
 },
];

export default function RomesteadMultiplayerCoopPage() {
 return (
 <RomesteadArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Multiplayer Co-op"
 heroImage={romesteadImages.screenshot3}
 heroAlt="Romestead multiplayer co-op exploration screenshot"
 faqs={faqs}
 >
 <BlufBox title="Co-op Answer">
 <p>
 <strong>Romestead supports 1-8 players, Online Co-op, and LAN Co-op
 according to official Steam information.</strong> Split-screen,
 couch co-op, console crossplay, dedicated servers, and exact host-save
 rules are not confirmed in the current public feature labels. For a
 first launch-window group, 2-4 players is the safest practical start
 until resource sharing, scaling, save ownership, and stability are
 better documented.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Romestead Co-op Quick Answer"
 answer="Romestead supports 1-8 players, Online Co-op, and LAN Co-op per official Steam info. Split-screen, crossplay, dedicated servers, and host-save rules are not confirmed. Start with 2-4 players for a first world."
 intentRows={rmCoopSearchIntent}
 jumpLinks={rmCoopJumpLinks}
 />

 <StatusPanel items={rmCoopStatusItems} />

 <section id="player-count" className="prose-game">
 <h2>Confirmed and Unconfirmed Co-op Features</h2>
 <ArticleImage
 src={romesteadImages.screenshot5}
 alt="Romestead co-op settlement screenshot"
 caption="Co-op should be planned around confirmed Steam features first: 1-8 players, Online Co-op, and LAN Co-op. Other session rules need launch testing."
 />
 <p>
 Romestead is built around work that naturally divides between players:
 gathering, crafting, building, scouting, defending, farming, and
 dungeon preparation. The official player-count answer is useful, but
 a good co-op session also depends on save ownership, reconnects,
 loot sharing, world persistence, and whether difficulty scales cleanly
 with group size. Those details should be tested after unlock.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Feature</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current answer</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Confidence</th>
 </tr>
 </thead>
 <tbody>
 {romesteadCoopRows.map(([feature, answer, confidence]) => (
 <tr key={feature} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{feature}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 <td className="px-4 py-3 text-muted-foreground">{confidence}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Best Co-op Role Split for a First Settlement</h2>
 <ArticleImage
 src={romesteadImages.screenshot1}
 alt="Romestead settlement role split screenshot"
 caption="A good first co-op run gives every player a clear job so the group does not waste the first night duplicating the same work."
 />
 <p>
 For two players, split into builder-manager and scout-gatherer. For
 three or four players, add a defender and a farmer-crafter. Larger
 groups should avoid scattering across the map before the settlement
 has food, storage, tools, and defenses. The goal is not to rush the
 biggest build immediately; it is to keep the shared base stable while
 each player learns a different part of the loop.
 </p>
 </section>

 <section className="prose-game">
 <h2>Launch-Window Co-op Checklist</h2>
 <ArticleImage
 src={romesteadImages.screenshot4}
 alt="Romestead launch co-op checklist screenshot"
 caption="Before a long group session, test invites, reconnects, save loading, cloud sync, LAN behavior, and whether important resources are shared or player-bound."
 />
 <ul>
 <li>Have the most reliable connection host the first world.</li>
 <li>Test joining, leaving, and rejoining before a long session.</li>
 <li>Check whether progress is host-bound, player-bound, or both.</li>
 <li>Agree on storage rules so rare resources do not disappear into private inventories.</li>
 <li>Do a short night-defense test before expanding the settlement.</li>
 </ul>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Co-op Setup Plan</h2>
 <ActionTable rows={rmCoopActionRows} />

 <section id="split-screen" className="prose-game">
 <h2>Split-screen, Couch Co-op, and Crossplay</h2>
 <p>
 Split-screen and couch co-op are not in the current Steam feature
 labels, even though LAN Co-op is. Crossplay is also not confirmed
 because only PC via Steam is verified right now. Do not assume
 couch co-op or crossplay works until the developer announces it or
 Steam updates its feature list.
 </p>
 </section>

 <section id="host-saves" className="prose-game">
 <h2>Host Saves, Reconnects, and Resource Sharing</h2>
 <p>
 Host-save behavior and rejoin rules need launch testing. For a
 first long settlement, have the most stable player host, agree on
 shared storage rules, and test reconnecting after a network blip
 before investing many hours. This is the cleanest way to avoid
 losing progress to a launch-window co-op issue.
 </p>
 </section>

 <section id="crossplay" className="prose-game">
 <h2>Crossplay and Console Co-op Status</h2>
 <p>
 Console versions (Xbox, PlayStation) are not confirmed in current
 official store data. Crossplay is therefore not confirmed, because
 there is no second verified platform to play across. Wait for an
 official announcement before buying for cross-platform play.
 </p>
 </section>

 <SourceCheckTable title="Romestead Co-op Sources" rows={rmCoopSourceRows} />
 </RomesteadArticle>
 );
}
