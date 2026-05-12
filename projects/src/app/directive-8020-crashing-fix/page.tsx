import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage } from '@/components/article-media';

export const metadata: Metadata = {
  title: 'Directive 8020 Crashing, Black Screen & Performance Fix',
  description:
    'Fix Directive 8020 crashing, black screen, stuttering, low FPS, audio issues, controller problems, and launch-day PC/PS5/Xbox troubleshooting.',
  alternates: {
    canonical: '/directive-8020-crashing-fix',
  },
};

const faqs = [
  {
    question: 'Why does Directive 8020 crash on startup?',
    answer:
      'The most common PC launch causes are outdated GPU drivers, corrupted files, overlay conflicts, antivirus interference, missing redistributables, or running below the official minimum spec. Start by updating drivers and verifying Steam files.',
  },
  {
    question: 'How do I fix black screen in Directive 8020?',
    answer:
      'Try Alt+Enter, launch in windowed mode, reset graphics settings, disconnect extra monitors, disable overlays, and make sure your display refresh rate is set to a standard value.',
  },
  {
    question: 'Why is Directive 8020 stuttering?',
    answer:
      'Stuttering can come from shader compilation, HDD loading, VRAM pressure, overlays, background apps, or unstable frame caps. Use an SSD, cap FPS, lower shadows and reflections, and close background programs.',
  },
  {
    question: 'What are the official PC minimum specs?',
    answer:
      'Steam lists Windows 10/11 64-bit, Intel Core i5-8500 or Ryzen 5 3500, 16 GB RAM, RTX 2060 or RX 5700, and 40 GB storage, with SSD recommended.',
  },
];

const quickFixes = [
  'Update NVIDIA or AMD GPU drivers before first launch.',
  'Verify game files in Steam after installation or patching.',
  'Disable Steam, Discord, GeForce, recording, and monitoring overlays for testing.',
  'Run the game from an SSD and keep extra free space beyond the 40 GB install.',
  'Cap FPS to 60 if frame time is unstable.',
  'Reboot after installing drivers or redistributables.',
];

export default function CrashingFixPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Crashing, Black Screen & Performance Fix',
          description:
            'Fix Directive 8020 crashing, black screen, stuttering, low FPS, audio issues, controller problems, and launch-day troubleshooting.',
          url: '/directive-8020-crashing-fix',
          datePublished: '2026-05-12',
          dateModified: '2026-05-12',
          imageUrl: '/d8020-screenshot-02.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Crash Fix' }]} />
        <PageHero src="/d8020-screenshot-02.jpg" alt="Directive 8020 official dark corridor performance fix guide" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020: Crashing, Black Screen &amp; Performance Fix
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Launch-day technical issues are easiest to solve when you isolate one
          variable at a time. This guide covers startup crashes, black screens,
          stuttering, low FPS, audio problems, controller issues, and console
          troubleshooting.
        </p>

        <div className="prose-game">
          <h2>Quick Fixes to Try First</h2>
          <p>
            Start here before changing advanced settings. These fixes solve the
            majority of launch issues across story-heavy Unreal/PC releases and
            are safe to reverse if they do not help.
          </p>
          <ul>
            {quickFixes.map((fix) => (
              <li key={fix}>{fix}</li>
            ))}
          </ul>

          <h2>Fix: Crashes on Startup</h2>
          <ol>
            <li>Confirm your PC meets the official minimum: RTX 2060 / RX 5700, 16 GB RAM, and Windows 10/11 64-bit.</li>
            <li>Update your GPU driver, then reboot before launching again.</li>
            <li>In Steam, right-click the game, open Properties, then verify installed files.</li>
            <li>Disable overlays and monitoring tools for one clean test launch.</li>
            <li>Add the game folder to antivirus exceptions if security software is blocking the executable.</li>
            <li>Install or repair the latest Microsoft Visual C++ Redistributables.</li>
            <li>Try launching in windowed mode if the crash happens during display initialization.</li>
          </ol>

          <h2>Fix: Black Screen or No Video</h2>
          <p>
            Black screens are usually caused by display mode, refresh rate,
            overlay, or driver conflicts. Work through these in order:
          </p>
          <ol>
            <li>Press Alt+Enter to toggle between fullscreen and windowed mode.</li>
            <li>Disconnect secondary monitors for one launch attempt.</li>
            <li>Set Windows display refresh rate to 60Hz or your monitor&apos;s native stable refresh.</li>
            <li>Disable HDR temporarily if the screen stays black but audio plays.</li>
            <li>Remove launch options or graphics overrides from previous tests.</li>
            <li>Delete or reset the local graphics configuration if the game created one.</li>
          </ol>

          <h2>Fix: Stuttering and Low FPS</h2>
          <p>
            Directive 8020&apos;s recommended spec lists an RTX 3070 Ti or RX
            6800, so players near the minimum should prioritize stable frame
            pacing over maximum visuals.
          </p>

          <ArticleImage
            src="/d8020-screenshot-04.jpg"
            alt="Directive 8020 PC stuttering and performance screenshot"
            caption="Ship interiors combine dark lighting, reflections, post-processing, and cinematic camera work. If performance is uneven, lower visual effects before sacrificing readability."
          />
          <ul>
            <li>Move the game to an SSD if it is installed on an HDD.</li>
            <li>Cap FPS to 60 or 30 to reduce frame-time spikes.</li>
            <li>Lower shadows, volumetrics, reflections, and post-processing first.</li>
            <li>Lower textures if your GPU is running out of VRAM.</li>
            <li>Close browsers, launchers, capture apps, and RGB/controller utilities for testing.</li>
            <li>Let the game sit for a minute after first launch if shader compilation causes early stutter.</li>
          </ul>

          <h2>Fix: Audio, Dialogue, or Desync Problems</h2>
          <p>
            Audio matters in a mimic-focused horror game because dialogue and
            environmental cues can affect decisions. Fix audio issues before a
            serious playthrough.
          </p>
          <ol>
            <li>Set the correct Windows default output device before launching.</li>
            <li>Disable virtual devices or unused HDMI audio outputs.</li>
            <li>Set audio format to 24-bit or 16-bit 48000Hz in Windows sound settings.</li>
            <li>Turn off spatial audio temporarily if dialogue sounds distant or broken.</li>
            <li>Restart the game after changing audio devices.</li>
          </ol>

          <h2>Fix: Controller or Input Issues</h2>
          <p>
            Steam lists full controller support, but controller profiles and
            third-party tools can still conflict at launch.
          </p>
          <ul>
            <li>Enable or disable Steam Input for the game and test both states.</li>
            <li>Disconnect extra controllers, wheels, flight sticks, or virtual input devices.</li>
            <li>Use a wired connection for QTE-heavy sections if wireless input feels delayed.</li>
            <li>Check button prompts before starting a serious save-everyone run.</li>
          </ul>

          <h2>Console Troubleshooting: PS5 and Xbox Series X|S</h2>
          <ul>
            <li>Restart the console fully instead of using rest mode or quick resume.</li>
            <li>Install the latest system update and game patch.</li>
            <li>Move the game to internal storage if running from external storage.</li>
            <li>Clear cache with a full power cycle.</li>
            <li>Reinstall only after patch checks and restarts fail.</li>
          </ul>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
