import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { RomesteadArticle } from '@/components/romestead-article';
import {
  createRomesteadMetadata,
  romesteadImages,
  romesteadSpecRows,
} from '@/lib/romestead';

const title = 'Romestead Steam Deck & System Requirements — PC Specs and Performance';
const description =
  'Romestead Steam Deck compatibility, official minimum and recommended PC specs, Windows 10 requirements, performance test checklist, and co-op frame pacing notes.';
const canonical = '/games/romestead/system-requirements';

export const metadata = createRomesteadMetadata({
  title,
  description,
  canonical,
  image: romesteadImages.screenshot4,
});

const faqs = [
  {
    question: 'What are the Romestead minimum system requirements?',
    answer:
      'Romestead minimum specs list Windows 10, Intel Core i5, 8 GB RAM, DirectX 11, broadband internet for online play, and 2 GB available storage.',
  },
  {
    question: 'What are the Romestead recommended system requirements?',
    answer:
      'Recommended specs list Windows 10, Intel Core i7, 16 GB RAM, DirectX 11, broadband internet, and 4 GB available storage.',
  },
  {
    question: 'Does Romestead require Windows 10?',
    answer:
      'The official Steam requirements list Windows 10 for both minimum and recommended specs.',
  },
  {
    question: 'How much storage does Romestead need?',
    answer:
      'Steam lists 2 GB available space minimum and 4 GB available space recommended.',
  },
  {
    question: 'Is Romestead Steam Deck verified?',
    answer:
      'Steam Deck Verified status is not confirmed at this check, so Deck-first players should wait for launch testing.',
  },
  {
    question: 'Does Romestead need internet?',
    answer:
      'Broadband internet is listed in the requirements, and online co-op needs a stable connection. Solo play behavior should be checked after unlock if offline play matters to you.',
  },
];

export default function RomesteadSystemRequirementsPage() {
  return (
    <RomesteadArticle
      title={title}
      description={description}
      canonical={canonical}
      label="System Requirements"
      heroImage={romesteadImages.screenshot4}
      heroAlt="Romestead PC performance and settlement screenshot"
      faqs={faqs}
    >
      <BlufBox title="Spec Snapshot">
        <p>
          <strong>Romestead lists a modest Windows 10 baseline: Intel Core i5,
          8 GB RAM, DirectX 11, broadband internet, and 2 GB storage.</strong>
          The recommended tier moves to Intel Core i7, 16 GB RAM, and 4 GB
          storage. Steam Deck compatibility and controller comfort should still
          be treated as launch-test questions rather than confirmed buying
          promises.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Official PC Requirements</h2>
        <ArticleImage
          src={romesteadImages.screenshot2}
          alt="Romestead PC requirements settlement screenshot"
          caption="The official PC requirements are light on GPU detail, so players should test frame pacing, settlement density, and co-op stability early in the refund window."
        />
        <p>
          The requirements are simple, but that does not guarantee identical
          performance for every settlement. Survival town builders can become
          heavier as the base grows, workers increase, enemies attack at night,
          and co-op players spread across the world. Use the official specs as
          the entry point, then test the situations that matter to your run.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Spec</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Minimum</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Recommended</th>
            </tr>
          </thead>
          <tbody>
            {romesteadSpecRows.map(([spec, minimum, recommended]) => (
              <tr key={spec} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{spec}</td>
                <td className="px-4 py-3 text-muted-foreground">{minimum}</td>
                <td className="px-4 py-3 text-muted-foreground">{recommended}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Steam Deck, Controller and Co-op Performance Checks</h2>
        <ArticleImage
          src={romesteadImages.screenshot3}
          alt="Romestead Steam Deck and controller testing screenshot"
          caption="Handheld and controller comfort should be verified after unlock because store feature labels alone do not prove readable UI, stable controls, or late-game comfort."
        />
        <p>
          If Steam Deck is your main platform, wait for verified compatibility
          or strong player reports. Check text readability, camera control,
          inventory navigation, building placement, combat responsiveness, and
          battery-friendly settings. If co-op is your main reason to buy, test
          invites, reconnects, host saves, LAN behavior, and frame pacing while
          multiple players are active.
        </p>
      </section>

      <section className="prose-game">
        <h2>First 30 Minutes Performance Test</h2>
        <ArticleImage
          src={romesteadImages.screenshot6}
          alt="Romestead first 30 minutes performance test screenshot"
          caption="A good launch-window performance check should include gathering, crafting, building placement, night combat, inventory work, and at least one co-op connection test if you plan to play with friends."
        />
        <ul>
          <li>Check frame pacing while moving through your starting area.</li>
          <li>Place early buildings and watch for stutter during previews or construction.</li>
          <li>Open storage and crafting menus repeatedly to test UI responsiveness.</li>
          <li>Fight or observe night pressure before committing to a long run.</li>
          <li>Test cloud saves before switching machines.</li>
        </ul>
      </section>
    </RomesteadArticle>
  );
}
