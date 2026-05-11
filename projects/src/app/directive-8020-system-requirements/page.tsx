import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Directive 8020 System Requirements - Minimum & Recommended PC Specs',
  description:
    'Can your PC run Directive 8020? Check the minimum and recommended system requirements, storage space, GPU, CPU, and RAM specs for optimal performance.',
  alternates: {
    canonical: '/directive-8020-system-requirements',
  },
};

const faqs = [
  {
    question: 'Can I run Directive 8020 on a low-end PC?',
    answer:
      'Directive 8020 requires at least a modern mid-range system to run. If your PC meets the minimum requirements, you can play at low settings at 1080p/30fps. For the best cinematic experience, you will want hardware that meets or exceeds the recommended specs.',
  },
  {
    question: 'Does Directive 8020 support ray tracing?',
    answer:
      'Official details on ray tracing support will be confirmed closer to launch. Previous Supermassive Games titles have offered optional ray tracing features. We will update this page as soon as more information is available.',
  },
  {
    question: 'How much storage space does Directive 8020 need?',
    answer:
      'Storage requirements have not been officially confirmed yet. Based on previous Dark Pictures games (which typically required 30-50 GB), expect Directive 8020 to need approximately 50-70 GB of storage space. An SSD is strongly recommended for faster loading times.',
  },
  {
    question: 'Is Directive 8020 available on PS4 or Xbox One?',
    answer:
      'No. Directive 8020 is only releasing on PlayStation 5, Xbox Series X|S, and PC (Steam). It will not be available on last-generation consoles.',
  },
];

export default function SystemRequirementsPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 System Requirements - Minimum & Recommended PC Specs',
          description:
            'Can your PC run Directive 8020? Check the minimum and recommended system requirements for optimal performance.',
          url: '/directive-8020-system-requirements',
          datePublished: '2026-05-10',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'System Requirements' }]} />
        <PageHero src="/system-card.jpg" alt="Directive 8020 system requirements and PC specs" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 System Requirements
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Can your PC run Directive 8020? Here are the minimum and recommended
          specs to survive the Cassiopeia.
        </p>

        <div className="prose-game">
          <h2>Minimum Requirements</h2>
          <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['OS', 'Windows 10 64-bit'],
                  ['Processor', 'Intel Core i5-8400 / AMD Ryzen 5 2600'],
                  ['Memory', '8 GB RAM'],
                  ['Graphics', 'NVIDIA GeForce GTX 1060 / AMD Radeon RX 580'],
                  ['DirectX', 'Version 12'],
                  ['Storage', 'SSD recommended'],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-border/30 last:border-0">
                    <td className="px-4 py-3 text-muted-foreground font-medium w-40">{label}</td>
                    <td className="px-4 py-3 text-foreground">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Meeting minimum requirements will let you play at <strong>1080p / 30
            FPS on Low settings</strong>. This is the baseline experience — the
            game will run, but visual fidelity and smoothness will be limited.
          </p>

          <h2>Recommended Requirements</h2>
          <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['OS', 'Windows 10/11 64-bit'],
                  ['Processor', 'Intel Core i7-9700K / AMD Ryzen 7 3700X'],
                  ['Memory', '16 GB RAM'],
                  ['Graphics', 'NVIDIA GeForce RTX 2070 / AMD Radeon RX 5700 XT'],
                  ['DirectX', 'Version 12'],
                  ['Storage', 'SSD required'],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-border/30 last:border-0">
                    <td className="px-4 py-3 text-muted-foreground font-medium w-40">{label}</td>
                    <td className="px-4 py-3 text-foreground">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Meeting recommended requirements will give you <strong>1080p / 60
            FPS on High settings</strong>. This is the ideal way to experience
            Directive 8020&apos;s cinematic horror with smooth performance and full
            visual detail.
          </p>

          <h2>Performance Tips</h2>
          <ul>
            <li>
              <strong>Use an SSD:</strong> Loading times on HDD will be
              significantly longer. An SSD is essential for smooth scene
              transitions in this cinematic game.
            </li>
            <li>
              <strong>Close background apps:</strong> Free up RAM and CPU
              resources before launching. Browser tabs and background software
              can cause stuttering during cutscenes.
            </li>
            <li>
              <strong>Update your GPU drivers:</strong> Make sure you have the
              latest NVIDIA or AMD drivers installed. Day-1 driver updates
              often include optimizations for new game releases.
            </li>
            <li>
              <strong>Lower shadow quality first:</strong> If you need better
              performance, shadow settings typically have the biggest impact on
              FPS with the least visual sacrifice in dark scenes.
            </li>
            <li>
              <strong>Disable motion blur if sensitive:</strong> Some players
              experience discomfort with motion blur. It can be disabled in the
              graphics settings without affecting performance.
            </li>
          </ul>

          <h2>Steam Page</h2>
          <p>
            You can check the latest system requirements and pre-order Directive
            8020 on the official Steam page. Requirements may be updated closer
            to launch as the developers finalize optimizations.
          </p>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
