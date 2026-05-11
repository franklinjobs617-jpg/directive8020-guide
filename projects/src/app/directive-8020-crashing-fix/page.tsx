import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Directive 8020 Crashing, Black Screen & Performance Fix',
  description:
    'Fix Directive 8020 crashing on startup, black screen, stuttering, low FPS, and other technical issues. Complete troubleshooting guide for PC, PS5, and Xbox.',
  alternates: {
    canonical: '/directive-8020-crashing-fix',
  },
};

const faqs = [
  {
    question: 'Why does Directive 8020 crash on startup?',
    answer:
      'Common causes include outdated GPU drivers, missing Visual C++ redistributables, antivirus interference, or corrupted game files. Try updating your drivers first, then verify game file integrity through Steam.',
  },
  {
    question: 'How do I fix the black screen in Directive 8020?',
    answer:
      'Black screen issues are often caused by resolution mismatches or fullscreen mode conflicts. Try pressing Alt+Enter to switch to windowed mode, or add "-windowed" to the Steam launch options.',
  },
  {
    question: 'Why is Directive 8020 stuttering on my PC?',
    answer:
      'Stuttering can be caused by insufficient VRAM, background applications using resources, or running the game from an HDD. Make sure you are using an SSD, close background apps, and lower texture quality if you have limited VRAM.',
  },
];

export default function CrashingFixPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Crashing, Black Screen & Performance Fix',
          description:
            'Fix Directive 8020 crashing, black screen, stuttering, and other technical issues on PC, PS5, and Xbox.',
          url: '/directive-8020-crashing-fix',
          datePublished: '2026-05-12',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Crash Fix' }]} />
        <PageHero src="/crashing-card.jpg" alt="Directive 8020 crashing and performance fix guide" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020: Crashing, Black Screen &amp; Performance Fix
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Complete troubleshooting guide for Day-1 technical issues. Fix
          crashes, black screens, stuttering, and more.
        </p>

        <div className="prose-game">
          <h2>Quick Fixes (Try These First)</h2>
          <ul>
            <li><strong>Update GPU drivers:</strong> Download the latest NVIDIA or AMD drivers. Day-1 driver updates often include game-specific fixes.</li>
            <li><strong>Verify game files:</strong> In Steam, right-click the game &rarr; Properties &rarr; Local Files &rarr; Verify integrity of game files.</li>
            <li><strong>Run as Administrator:</strong> Right-click the game executable and select &ldquo;Run as administrator.&rdquo;</li>
            <li><strong>Disable fullscreen optimization:</strong> Right-click the .exe &rarr; Properties &rarr; Compatibility &rarr; Check &ldquo;Disable fullscreen optimizations.&rdquo;</li>
            <li><strong>Close overlay apps:</strong> Disable Steam overlay, Discord overlay, GeForce Experience overlay, and any screen recording software.</li>
          </ul>

          <h2>Fix: Game Crashes on Startup</h2>
          <ol>
            <li>Update your GPU drivers to the latest version</li>
            <li>Verify game file integrity through Steam</li>
            <li>Install the latest Visual C++ Redistributables (x64)</li>
            <li>Temporarily disable your antivirus and add the game to exceptions</li>
            <li>Delete the game&apos;s config file in %LOCALAPPDATA% and relaunch</li>
            <li>Try launching with &ldquo;-windowed&rdquo; in Steam launch options</li>
          </ol>

          <h2>Fix: Black Screen on Launch</h2>
          <ol>
            <li>Press Alt+Enter to toggle between fullscreen and windowed mode</li>
            <li>Add &ldquo;-windowed -w 1920 -h 1080&rdquo; to Steam launch options</li>
            <li>Delete the graphics configuration file to reset display settings</li>
            <li>Disconnect secondary monitors and try launching again</li>
            <li>Update your monitor&apos;s refresh rate to a standard value (60Hz or 144Hz)</li>
          </ol>

          <h2>Fix: Stuttering &amp; Low FPS</h2>
          <ol>
            <li>Move the game to an SSD if currently on an HDD</li>
            <li>Lower texture quality (biggest VRAM impact)</li>
            <li>Disable ray tracing if available and enabled</li>
            <li>Set shadow quality to Medium or Low</li>
            <li>Close all background applications (browser, Discord, etc.)</li>
            <li>Cap your FPS to your monitor&apos;s refresh rate to reduce frame variance</li>
            <li>Enable DLSS or FSR if your GPU supports it</li>
          </ol>

          <h2>Fix: Audio Issues</h2>
          <ol>
            <li>Set your audio output to the correct default device in Windows</li>
            <li>Disable any virtual audio devices (Voicemeeter, etc.)</li>
            <li>Update your audio drivers</li>
            <li>Try setting audio quality to 16-bit 48000Hz in Windows sound settings</li>
          </ol>

          <h2>Console Fixes (PS5 / Xbox)</h2>
          <ul>
            <li><strong>Restart the console:</strong> Fully power off (not rest mode) and restart</li>
            <li><strong>Clear cache:</strong> Hold the power button until you hear two beeps (PS5), then rebuild the database in Safe Mode</li>
            <li><strong>Reinstall:</strong> Uninstall and redownload the game if issues persist</li>
            <li><strong>Check for system updates:</strong> Make sure your console firmware is up to date</li>
          </ul>
        </div>

        <div className="mt-8 rounded-lg border border-border/50 bg-card/30 p-4">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Note:</strong> This guide will
            be updated with game-specific fixes on launch day. If you&apos;re
            experiencing an issue not listed here, check the game&apos;s Steam
            community forums or official social media for the latest patches and
            hotfixes.
          </p>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
