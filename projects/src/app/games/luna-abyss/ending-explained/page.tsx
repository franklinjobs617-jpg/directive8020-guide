import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, StatusPanel } from '@/components/guide-blocks';
import { LunaAbyssArticle, LunaInfoTable } from '@/components/luna-abyss-article';
import {
  createLunaAbyssMetadata,
  lunaAbyssEndingRows,
  lunaAbyssImages,
} from '@/lib/luna-abyss';

const title = 'Luna Abyss Ending Explained - Fawkes, Aylin, Greymont & the Abyss';
const description =
  'Spoiler-aware Luna Abyss ending explained guide for Fawkes, Aylin, Greymont, the mimic moon, the Abyss, the Scourge, and replay cleanup.';
const canonical = '/games/luna-abyss/ending-explained';

export const metadata = createLunaAbyssMetadata({
  title,
  description,
  canonical,
  image: lunaAbyssImages.hero,
});

const faqs = [
  {
    question: 'When should I read the Luna Abyss ending explained page?',
    answer:
      'Read it after finishing one route. The page discusses final interpretation topics such as Fawkes, Aylin, Greymont, the mimic moon, and the Abyss.',
  },
  {
    question: 'What is the Luna Abyss ending mainly about?',
    answer:
      'Use the ending through the relationship between Fawkes, Aylin, the prison sentence, Greymont, the Abyss, and the older forces named by the game.',
  },
  {
    question: 'Does Luna Abyss have a secret ending?',
    answer:
      'Treat secret-ending claims as needs-testing unless a route is verified in-game or from platform achievement behavior.',
  },
  {
    question: 'What should I do after finishing Luna Abyss?',
    answer:
      'Move to achievements, walkthrough cleanup, secrets, and any unresolved lore terms you recorded during the first run.',
  },
];

const interpretationRows = [
  ['Fawkes', 'Read the ending through the prisoner role, agency, and what the journey through the Abyss changes.'],
  ['Aylin', 'Separate guard, guide, observer, and possible unreliable narrator roles.'],
  ['Greymont', 'Use colony history as the practical context for the final mystery.'],
  ['The Scourge', 'Track whether the ending treats it as event, force, infection, or belief system.'],
  ['All-Father and Collective', 'Record how faction language reframes the final decision and earlier whispers.'],
];

export default function LunaAbyssEndingExplainedPage() {
  return (
    <LunaAbyssArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Ending Explained"
      heroImage={lunaAbyssImages.hero}
      heroAlt="Luna Abyss ending explained screenshot"
      faqs={faqs}
    >
      <BlufBox title="Spoiler Warning">
        <p>
          <strong>Finish Luna Abyss once before using this page.</strong> The
          useful interpretation is not only what happens at the end, but how the
          prisoner setup, Aylin, Greymont, the Scourge, and the Abyss change the
          meaning of the route you just completed.
        </p>
      </BlufBox>

      <StatusPanel
        items={[
          { label: 'Spoiler level', value: 'Full-story interpretation after one completed route.', status: 'working' },
          { label: 'Secret ending claims', value: 'Needs route testing before being treated as final.', status: 'needs-check' },
          { label: 'Best next page', value: 'Use achievements and walkthrough pages for cleanup after reading.', status: 'working' },
          { label: 'Source posture', value: 'Official copy confirms premise terms; exact route outcomes should be tested in-game.', status: 'verified' },
        ]}
      />

      <LunaInfoTable columns={['Ending topic', 'How to read it']} rows={interpretationRows} />

      <ActionTable rows={lunaAbyssEndingRows} />

      <ArticleImage
        src={lunaAbyssImages.screenshot2}
        alt="Luna Abyss ending interpretation screenshot"
        caption="The strongest replay path after the ending is a focused cleanup list: secrets, achievements, lore terms, and boss or route outcomes."
      />
    </LunaAbyssArticle>
  );
}
