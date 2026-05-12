import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage } from '@/components/article-media';

export const metadata: Metadata = {
  title: 'Directive 8020 System Requirements - Official PC Specs',
  description:
    'Official Directive 8020 PC system requirements from Steam: minimum and recommended CPU, GPU, RAM, storage, SSD advice, and launch-day performance settings.',
  alternates: {
    canonical: '/directive-8020-system-requirements',
  },
};

const minimumSpecs = [
  ['OS', 'Windows 10/11 64-bit'],
  ['Processor', 'Intel Core i5-8500 / AMD Ryzen 5 3500'],
  ['Memory', '16 GB RAM'],
  ['Graphics', 'NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700'],
  ['Storage', '40 GB available space'],
  ['Additional Notes', 'SSD recommended'],
];

const recommendedSpecs = [
  ['OS', 'Windows 10/11 64-bit'],
  ['Processor', 'Intel Core i5-12400F / AMD Ryzen 5 5600X'],
  ['Memory', '16 GB RAM'],
  ['Graphics', 'NVIDIA GeForce RTX 3070 Ti / AMD Radeon RX 6800'],
  ['Storage', '40 GB available space'],
];

const faqs = [
  {
    question: 'What are the official Directive 8020 minimum PC specs?',
    answer:
      'The Steam page lists Windows 10/11 64-bit, Intel Core i5-8500 or AMD Ryzen 5 3500, 16 GB RAM, NVIDIA GeForce RTX 2060 or AMD Radeon RX 5700, and 40 GB storage. An SSD is recommended.',
  },
  {
    question: 'What are the official Directive 8020 recommended PC specs?',
    answer:
      'The Steam page lists Windows 10/11 64-bit, Intel Core i5-12400F or AMD Ryzen 5 5600X, 16 GB RAM, NVIDIA GeForce RTX 3070 Ti or AMD Radeon RX 6800, and 40 GB storage.',
  },
  {
    question: 'Does Directive 8020 need an SSD?',
    answer:
      'Steam lists an SSD as recommended for the minimum configuration. Because Directive 8020 is a cinematic horror game with scene transitions, an SSD is the safer option even though the requirement line does not mark it as mandatory.',
  },
  {
    question: 'Is Directive 8020 available on low-end GPUs like GTX 1060?',
    answer:
      'The official minimum GPU is RTX 2060 or RX 5700, so a GTX 1060 is below the listed minimum. It may not provide a stable or supported experience.',
  },
];

function SpecTable({ rows }: { rows: string[][] }) {
  return (
    <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden mb-6">
      <table className="w-full text-sm">
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} className="border-b border-border/30 last:border-0">
              <td className="px-4 py-3 text-muted-foreground font-medium w-40">{label}</td>
              <td className="px-4 py-3 text-foreground">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SystemRequirementsPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 System Requirements - Official PC Specs',
          description:
            'Official Directive 8020 PC system requirements from Steam with minimum, recommended, storage, and performance advice.',
          url: '/directive-8020-system-requirements',
          datePublished: '2026-05-10',
          dateModified: '2026-05-12',
          imageUrl: '/official-corridor-threat.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'System Requirements' }]} />
        <PageHero src="/official-corridor-threat.jpg" alt="Directive 8020 official corridor horror screenshot" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 System Requirements
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          These are the official PC requirements listed on Steam, with practical
          notes for launch-day settings, storage, and what to lower first if
          the Cassiopeia is stuttering.
        </p>

        <div className="prose-game">
          <h2>Minimum Requirements</h2>
          <SpecTable rows={minimumSpecs} />
          <p>
            The biggest change from many pre-launch estimates is the baseline
            GPU: Directive 8020 lists an <strong>RTX 2060</strong> or{' '}
            <strong>RX 5700</strong> as the minimum, not older cards like the
            GTX 1060. Treat the minimum spec as the floor for a supported PC
            experience.
          </p>

          <h2>Recommended Requirements</h2>
          <SpecTable rows={recommendedSpecs} />
          <p>
            The recommended GPU target is much higher: <strong>RTX 3070 Ti</strong>{' '}
            or <strong>RX 6800</strong>. That suggests Supermassive is targeting
            a more demanding visual presentation than earlier anthology entries,
            especially in dark ship interiors, cinematic lighting, and creature
            encounters.
          </p>

          <h2>What the Specs Mean in Practice</h2>
          <p>
            Directive 8020 is not a competitive shooter, so consistent frame
            pacing is more important than chasing the highest possible FPS. The
            game depends on cutscenes, QTE timing, stealth movement, facial
            animation, and low-light readability. A stable 30 or 60 FPS is
            preferable to an unlocked frame rate that swings during tense scenes.
          </p>

          <ArticleImage
            src="/official-ship-interior.jpg"
            alt="Directive 8020 official ship interior screenshot for PC performance"
            caption="Directive 8020 relies on dark interiors, cinematic lighting, facial detail, and dense ship spaces. Stable frame pacing matters more than simply pushing the highest FPS."
          />
          <ul>
            <li>
              <strong>CPU:</strong> If you are near minimum, close browsers and
              capture software before playing. Cinematic transitions and scripted
              scenes can spike CPU usage.
            </li>
            <li>
              <strong>GPU:</strong> Start by lowering shadows, volumetrics, and
              reflections before lowering texture quality.
            </li>
            <li>
              <strong>RAM:</strong> 16 GB is listed for both minimum and
              recommended, so avoid running memory-heavy apps in the background.
            </li>
            <li>
              <strong>Storage:</strong> The game lists 40 GB. Keep additional
              free space for patches, shader cache, and Steam unpacking.
            </li>
          </ul>

          <h2>Recommended Launch Settings</h2>
          <p>
            If you want the safest first playthrough, start with settings that
            protect readability and input timing. The alien mimic premise makes
            small visual and audio cues important, so do not crush brightness or
            overuse motion blur on your first run.
          </p>
          <ul>
            <li>Use fullscreen or borderless fullscreen, whichever is more stable on your setup.</li>
            <li>Cap FPS to 60 if your frame time is uneven.</li>
            <li>Keep textures high only if your GPU has enough VRAM headroom.</li>
            <li>Disable heavy overlays if crashes or black screens appear.</li>
            <li>Use headphones or a clean stereo/surround profile for dialogue and threat cues.</li>
          </ul>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
