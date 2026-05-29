import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { RomesteadArticle } from '@/components/romestead-article';
import {
  createRomesteadMetadata,
  romesteadCoopRows,
  romesteadImages,
} from '@/lib/romestead';

const title = 'Romestead Co-op & Multiplayer Guide — 1–8 Players, Online, LAN';
const description =
  'Romestead co-op multiplayer guide: 1–8 players, online and LAN support, group roles, split-screen status, host-save tips, and launch-day testing notes.';
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

      <section className="prose-game">
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

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Feature</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current answer</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {romesteadCoopRows.map(([feature, answer, confidence]) => (
              <tr key={feature} className="border-b border-border/30 last:border-0">
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
    </RomesteadArticle>
  );
}
