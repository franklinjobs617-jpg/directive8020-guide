import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, StatusPanel } from '@/components/guide-blocks';
import { LunaAbyssArticle, LunaInfoTable } from '@/components/luna-abyss-article';
import {
  createLunaAbyssMetadata,
  lunaAbyssCrashRows,
  lunaAbyssImages,
} from '@/lib/luna-abyss';

const title = 'Luna Abyss Crashing Fix - Black Screen, Not Launching & Low FPS';
const description =
  'Luna Abyss crashing fix guide for black screen, not launching, low FPS, stutter, controller conflicts, Steam file checks, Game Pass repair, and GPU settings.';
const canonical = '/games/luna-abyss/crashing-fix';

export const metadata = createLunaAbyssMetadata({
  title,
  description,
  canonical,
  image: lunaAbyssImages.screenshot4,
});

const faqs = [
  {
    question: 'How do I fix Luna Abyss not launching on Steam?',
    answer:
      'Verify installed files, disable overlays, restart Steam, update GPU drivers, and test one clean launch before changing more settings.',
  },
  {
    question: 'How do I fix Luna Abyss black screen?',
    answer:
      'Force the dedicated GPU, try fullscreen or borderless, disable overlays, cap FPS, and launch with extra controllers disconnected.',
  },
  {
    question: 'How do I fix Luna Abyss Game Pass launch issues?',
    answer:
      'Repair the Xbox app install, check Gaming Services, confirm the install drive, and test from the Xbox app after a restart.',
  },
  {
    question: 'What should I do before asking support?',
    answer:
      'Collect your OS, CPU, GPU, driver version, storefront, crash timing, error text, and whether the problem happens before or after menus.',
  },
];

const triageRows = [
  ['Crash at startup', 'Verify files, update drivers, disable overlays, restart the storefront.'],
  ['Black screen', 'Force dedicated GPU, change fullscreen mode, disconnect extra input devices.'],
  ['Low FPS or stutter', 'Cap FPS, lower shadows, close capture tools, test with a clean reboot.'],
  ['Game Pass app issue', 'Repair Xbox app and Gaming Services, then relaunch from the library.'],
  ['Controller conflict', 'Disconnect extra devices and remappers for one clean test.'],
];

export default function LunaAbyssCrashingFixPage() {
  return (
    <LunaAbyssArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Crashing Fix"
      heroImage={lunaAbyssImages.screenshot4}
      heroAlt="Luna Abyss crashing and black screen fix screenshot"
      faqs={faqs}
    >
      <BlufBox title="Fix Order">
        <p>
          <strong>Fix Luna Abyss in a controlled order.</strong> Start with
          files, drivers, overlays, display mode, and GPU selection. If you are
          on Game Pass, repair the Xbox app path before reinstalling the whole
          game.
        </p>
      </BlufBox>

      <StatusPanel
        items={[
          { label: 'Steam path', value: 'Verify files and disable overlays before reinstalling.', status: 'working' },
          { label: 'Game Pass path', value: 'Repair Xbox app and Gaming Services before deleting data.', status: 'working' },
          { label: 'GPU requirement', value: 'Minimum GPU is GTX 1060 6GB / RX 580 on Steam.', status: 'verified' },
          { label: 'Support escalation', value: 'Collect reproducible device and error details.', status: 'working' },
        ]}
      />

      <LunaInfoTable columns={['Symptom', 'Try first']} rows={triageRows} />

      <ActionTable rows={lunaAbyssCrashRows} />

      <ArticleImage
        src={lunaAbyssImages.screenshot1}
        alt="Luna Abyss troubleshooting screenshot"
        caption="Change one variable at a time. The fastest fix route is the one that gives you a reproducible before and after."
      />
    </LunaAbyssArticle>
  );
}
