import type { Metadata } from 'next';
import { ProjectMistArticle } from '@/components/project-mist-article';
import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { projectMistImages } from '@/lib/project-mist';

const title = 'Project: Mist Crashing, Black Screen, Low FPS & Co-op Fix';
const description =
  'Project: Mist crashing and performance fix guide for Early Access: startup crashes, black screen, low FPS, stutter, online co-op issues, Steam files, and drivers.';
const canonical = '/games/project-mist/crashing-fix';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};

const faqs = [
  {
    question: 'Why does Project: Mist crash on startup?',
    answer:
      'Common Early Access startup crash causes include outdated GPU drivers, corrupted Steam files, overlay conflicts, antivirus blocking, missing redistributables, or running below the official minimum spec.',
  },
  {
    question: 'How do I fix Project: Mist black screen?',
    answer:
      'Try Alt+Enter, disable overlays, update GPU drivers, reset graphics settings, disconnect extra monitors, and verify Steam files.',
  },
  {
    question: 'How do I improve Project: Mist low FPS?',
    answer:
      'Start with low settings, close background apps, cap FPS, reduce shadows and effects, and confirm your PC meets the GTX 750 / Radeon HD 7770 and 8 GB RAM minimum.',
  },
  {
    question: 'How do I fix Project: Mist co-op connection issues?',
    answer:
      'Check Steam status, restart Steam, verify both players are on the same build, test firewall permissions, and try a fresh host session.',
  },
];

const fixes = [
  'Update NVIDIA or AMD GPU drivers, then reboot before testing again.',
  'Verify installed files in Steam after downloading or patching.',
  'Disable Steam, Discord, capture, monitoring, and GPU overlays for one clean launch.',
  'Confirm the PC meets the official minimum requirements before treating the issue as a bug.',
  'Install or repair Microsoft Visual C++ Redistributables if the game fails before the main menu.',
  'For co-op issues, make sure every player is on the same Steam build before troubleshooting network settings.',
];

export default function ProjectMistCrashingFixPage() {
  return (
    <ProjectMistArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Crashing Fix"
      heroImage={projectMistImages.screenshot6}
      heroAlt="Project: Mist performance troubleshooting image"
      faqs={faqs}
    >
      <BlufBox title="Early Access Troubleshooting">
        <p>
          <strong>Start with reversible PC fixes before reinstalling.</strong>{' '}
          Project: Mist is an Early Access PC release, so separate driver,
          overlay, file, and hardware issues from real game bugs before changing
          saves or deleting local data.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Quick Fixes to Try First</h2>
        <ArticleImage
          src={projectMistImages.screenshot6}
          alt="Project: Mist quick troubleshooting image"
          caption="Early Access crash pages should start with reversible checks: drivers, files, overlays, minimum specs, and build version."
        />
        <ul>
          {fixes.map((fix) => (
            <li key={fix}>{fix}</li>
          ))}
        </ul>

        <h2>Fix Startup Crash or Black Screen</h2>
        <ArticleImage
          src={projectMistImages.screenshot8}
          alt="Project: Mist black screen troubleshooting image"
          caption="If the game fails before the main menu, isolate display mode, overlay, driver, and redistributable issues first."
        />
        <ol>
          <li>Update your GPU driver from NVIDIA or AMD, then reboot.</li>
          <li>Open Steam, right-click Project: Mist, and verify installed files.</li>
          <li>Disable overlays and monitoring tools for one clean test launch.</li>
          <li>Temporarily allow the game through antivirus or controlled folder access.</li>
          <li>Press Alt+Enter or remove custom launch options if the screen stays black.</li>
        </ol>

        <h2>Fix Low FPS or Stutter</h2>
        <ArticleImage
          src={projectMistImages.screenshot7}
          alt="Project: Mist low FPS troubleshooting image"
          caption="Open-world traversal, physics, creatures, and co-op can create spikes even when minimum specs look modest."
        />
        <ul>
          <li>Start with low settings and raise one setting at a time.</li>
          <li>Cap FPS if frame time jumps during combat or facility exploration.</li>
          <li>Close browsers, launchers, recording apps, and RGB utilities.</li>
          <li>Lower shadows, effects, and view distance before lowering resolution.</li>
        </ul>

        <h2>Gameplay Comfort Issues Are Not Always Bugs</h2>
        <ArticleImage
          src={projectMistImages.firstSteps}
          alt="Project: Mist movement and comfort troubleshooting image"
          caption="If movement feels slow or heavy, check stamina, gear weight, upgrades, input settings, and frame pacing before treating it as a bug."
        />
        <p>
          If the character feels slow or heavy, that may be game feel rather
          than a broken install. Check stamina upgrades, equipment weight, input
          method, frame pacing, FOV or camera options, and patch notes before
          reinstalling.
        </p>

        <h2>Fix Online Co-op Problems</h2>
        <ArticleImage
          src={projectMistImages.multiplayer}
          alt="Project: Mist online co-op troubleshooting image"
          caption="Co-op troubleshooting should check Steam status, build mismatch, firewall access, and host stability before blaming saves."
        />
        <ul>
          <li>Restart Steam and confirm both players have the latest update.</li>
          <li>Have the most stable connection host the session.</li>
          <li>Allow the game through Windows Firewall.</li>
          <li>Test a new session instead of repeatedly reconnecting to a broken one.</li>
        </ul>
      </section>
    </ProjectMistArticle>
  );
}
