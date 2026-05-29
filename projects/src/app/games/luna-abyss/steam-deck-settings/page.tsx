import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, StatusPanel } from '@/components/guide-blocks';
import { LunaAbyssArticle, LunaInfoTable } from '@/components/luna-abyss-article';
import {
  createLunaAbyssMetadata,
  lunaAbyssDeckRows,
  lunaAbyssImages,
} from '@/lib/luna-abyss';

const title = 'Luna Abyss Steam Deck Settings - 30 FPS, Controls & Battery';
const description =
  'Luna Abyss Steam Deck settings guide with 30 FPS target, control comfort checks, text size, battery expectations, Steam Cloud, and reported handheld caveats.';
const canonical = '/games/luna-abyss/steam-deck-settings';

export const metadata = createLunaAbyssMetadata({
  title,
  description,
  canonical,
  image: lunaAbyssImages.screenshot4,
});

const faqs = [
  {
    question: 'Is Luna Abyss playable on Steam Deck?',
    answer:
      'Third-party testing reports playable handheld guidance, but players should treat Steam Deck performance as reported rather than an official guarantee and test their own comfort.',
  },
  {
    question: 'What FPS target should I use on Steam Deck?',
    answer:
      'Start with a stable 30 FPS cap, then only raise the target if combat arenas and platforming remain smooth.',
  },
  {
    question: 'Should I change Proton for Luna Abyss?',
    answer:
      'Start with the default Proton path first. Change Proton versions only after you have a reproducible launch or performance issue.',
  },
  {
    question: 'What should I test first on Deck?',
    answer:
      'Test text size, stick sensitivity, dash and jump comfort, battery drain, and frame pacing during the first combat arena.',
  },
];

const settingRows = [
  ['FPS cap', 'Start at 30 FPS for stability.'],
  ['Graphics', 'Start medium or low-heavy, then raise one setting at a time.'],
  ['Controls', 'Tune stick sensitivity, dash, jump, interact, and weapon swap before a boss.'],
  ['Text', 'Use adjustable text size if subtitles or prompts feel small.'],
  ['Saves', 'Confirm Steam Cloud before moving between Deck and desktop.'],
];

export default function LunaAbyssSteamDeckSettingsPage() {
  return (
    <LunaAbyssArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Steam Deck Settings"
      heroImage={lunaAbyssImages.screenshot4}
      heroAlt="Luna Abyss Steam Deck settings screenshot"
      faqs={faqs}
    >
      <BlufBox title="Deck Answer">
        <p>
          <strong>Use a stability-first Steam Deck setup.</strong> Begin with a
          30 FPS cap, conservative graphics, default Proton, and a control
          comfort test before committing to a long run. Luna Abyss is fast
          enough that unstable frame pacing can feel worse than lower settings.
        </p>
      </BlufBox>

      <StatusPanel
        items={[
          { label: 'Official Steam feature', value: 'Full controller support and Steam Cloud are listed.', status: 'verified' },
          { label: 'Deck settings', value: 'Third-party reported guidance, not official certification language.', status: 'working' },
          { label: 'Best starting target', value: '30 FPS cap with conservative settings.', status: 'working' },
          { label: 'First test area', value: 'Use a combat arena, not only a menu or safe corridor.', status: 'working' },
        ]}
      />

      <LunaInfoTable columns={['Setting', 'Starting point']} rows={settingRows} />

      <ActionTable rows={lunaAbyssDeckRows} />

      <ArticleImage
        src={lunaAbyssImages.screenshot5}
        alt="Luna Abyss handheld performance screenshot"
        caption="Do the real Deck test in motion: dash, jump, aim, and dodge while the screen is busy."
      />
    </LunaAbyssArticle>
  );
}
