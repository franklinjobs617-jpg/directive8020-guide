import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, StatusPanel } from '@/components/guide-blocks';
import { LunaAbyssArticle, LunaInfoTable } from '@/components/luna-abyss-article';
import {
  createLunaAbyssMetadata,
  lunaAbyssImages,
  lunaAbyssQuickFacts,
  lunaAbyssWorthRows,
} from '@/lib/luna-abyss';

const title = 'Luna Abyss Review: Is It Worth It on Game Pass or Steam?';
const description =
  'Luna Abyss worth-it guide using Steam Very Positive signal, Metacritic context, Game Pass access, launch discount, Steam Deck risk, and player fit.';
const canonical = '/games/luna-abyss/is-it-worth-it';

export const metadata = createLunaAbyssMetadata({
  title,
  description,
  canonical,
  image: lunaAbyssImages.screenshot2,
});

const faqs = [
  {
    question: 'Is Luna Abyss worth playing?',
    answer:
      'Luna Abyss is worth trying if you want a focused single-player FPS with fast movement, bullet-hell combat, boss pressure, and surreal sci-fi story. Game Pass makes it an easier test.',
  },
  {
    question: 'Is Luna Abyss worth buying on Steam?',
    answer:
      'Buy on Steam if you want Steam achievements, Steam Cloud, Deck testing, or permanent library ownership. Check the live discount and refund window before buying.',
  },
  {
    question: 'What is the Luna Abyss Steam review signal?',
    answer:
      'Steam review data returned Very Positive with 368 total reviews as of May 28, 2026.',
  },
  {
    question: 'Should Steam Deck players wait?',
    answer:
      'Steam Deck players should read handheld settings first. Third-party testing is useful, but comfort depends on your FPS target, battery tolerance, and controller setup.',
  },
];

const decisionRows = [
  ['Best reason to play now', 'Game Pass access, strong early Steam user signal, and a compact single-player FPS premise.'],
  ['Best reason to wait', 'Need more player reports for Deck comfort, crash fixes, completion time, or exact trophy cleanup.'],
  ['Best audience', 'Players who like movement-heavy shooters, surreal sci-fi, boss pressure, and focused campaigns.'],
  ['Weak fit', 'Players seeking co-op, open-world RPG systems, live-service loot, or long sandbox progression.'],
];

export default function LunaAbyssWorthItPage() {
  return (
    <LunaAbyssArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Worth It"
      heroImage={lunaAbyssImages.screenshot2}
      heroAlt="Luna Abyss review and worth-it screenshot"
      faqs={faqs}
    >
      <BlufBox title="Worth-It Answer">
        <p>
          <strong>Luna Abyss is easiest to recommend through Game Pass.</strong>{' '}
          Buying on Steam makes more sense if you care about Steam achievements,
          cloud saves, Steam Deck testing, and permanent ownership. Wait if
          performance reports or exact completion data are more important than
          playing during the launch window.
        </p>
      </BlufBox>

      <StatusPanel
        items={[
          { label: 'Steam user signal', value: lunaAbyssQuickFacts[3][1], status: 'verified' },
          { label: 'Game Pass', value: lunaAbyssQuickFacts[2][1], status: 'verified' },
          { label: 'Achievements', value: lunaAbyssQuickFacts[4][1], status: 'verified' },
          { label: 'Steam Deck', value: 'Use third-party settings and your own comfort test before a long handheld run.', status: 'working' },
        ]}
      />

      <LunaInfoTable columns={['Decision', 'What it means']} rows={decisionRows} />

      <ActionTable rows={lunaAbyssWorthRows} />

      <ArticleImage
        src={lunaAbyssImages.screenshot3}
        alt="Luna Abyss combat and traversal screenshot"
        caption="The value question depends on whether you enjoy movement-heavy combat and first-person platforming, not only on the review score."
      />
    </LunaAbyssArticle>
  );
}
