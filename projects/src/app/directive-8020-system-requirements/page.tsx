import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';

export const metadata: Metadata = {
 title: 'Directive 8020 PC Specs - Minimum, Recommended & Steam Deck',
 description:
 'Official Directive 8020 PC specs: minimum and recommended system requirements, RTX 2060 and RTX 3070 Ti GPU targets, 16 GB RAM, 40 GB storage, SSD advice, and Steam Deck caution.',
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
 question: 'Can Directive 8020 run on Steam Deck?',
 answer:
 'Directive 8020 is more demanding than typical Steam Deck targets. The official minimum GPU is RTX 2060 or RX 5700, so Steam Deck users should check current compatibility reports before buying for handheld play.',
 },
 {
 question: 'Is Directive 8020 available on low-end GPUs like GTX 1060?',
 answer:
 'The official minimum GPU is RTX 2060 or RX 5700, so a GTX 1060 is below the listed minimum. It may not provide a stable or supported experience.',
 },
];

const quickAnswerRows = [
 ['Minimum GPU', 'RTX 2060 / RX 5700', 'Below this, expect unsupported or unstable performance.'],
 ['Recommended GPU', 'RTX 3070 Ti / RX 6800', 'Best target for higher visual settings and steadier cinematic scenes.'],
 ['RAM', '16 GB', 'Listed for both minimum and recommended specs.'],
 ['Storage', '40 GB', 'Keep extra free space for patches, shader cache, and Steam unpacking.'],
 ['Steam Deck', 'Not a safe assumption', 'Official minimum GPU is far above Deck-class hardware; verify current reports.'],
];

function SpecTable({ rows }: { rows: string[][] }) {
 return (
 <div className="rounded-lg border border-border bg-white overflow-hidden mb-6">
 <table className="w-full text-sm">
 <tbody>
 {rows.map(([label, value]) => (
 <tr key={label} className="border-b border-border last:border-0">
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
 title: 'Directive 8020 PC Specs - Minimum, Recommended & Steam Deck',
 description:
 'Official Directive 8020 PC system requirements from Steam with minimum, recommended, storage, Steam Deck, and performance advice.',
 url: '/directive-8020-system-requirements',
 datePublished: '2026-05-10',
 dateModified: '2026-05-21',
 imageUrl: '/d8020-screenshot-02.jpg',
 })}
 />
 <JsonLd data={generateFAQSchema(faqs)} />

 <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
 <Breadcrumb items={[{ label: 'System Requirements' }]} />
 <PageHero src="/d8020-screenshot-02.jpg" alt="Directive 8020 official corridor horror screenshot" />

 <h1 className="mb-4 text-[42px] font-bold leading-[1.08] tracking-[-1.39px] text-foreground sm:text-[54px]">
 Directive 8020 PC Specs: Minimum, Recommended and Steam Deck Notes
 </h1>
 <p className="text-lg text-muted-foreground leading-relaxed mb-8">
 Directive 8020&apos;s official Steam specs start at an RTX 2060 or RX
 5700 with 16 GB RAM and 40 GB storage. That makes low-end GPU and
 Steam Deck searches risky: check the minimum before assuming the game
 will run smoothly.
 </p>

 <BlufBox title="PC Specs Answer">
 <p>
 <strong>Minimum:</strong> i5-8500 / Ryzen 5 3500, 16 GB RAM, RTX
 2060 / RX 5700, 40 GB storage, SSD recommended. <strong>Recommended:</strong>{' '}
 i5-12400F / Ryzen 5 5600X, 16 GB RAM, RTX 3070 Ti / RX 6800, and
 40 GB storage.
 </p>
 </BlufBox>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Question</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Answer</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player impact</th>
 </tr>
 </thead>
 <tbody>
 {quickAnswerRows.map(([question, answer, impact]) => (
 <tr key={question} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 <td className="px-4 py-3 text-muted-foreground">{impact}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

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
 src="/d8020-screenshot-04.jpg"
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

 <h2>Steam Deck and Below-Minimum Hardware</h2>
 <p>
 Steam Deck, GTX 1060, and older laptop GPU searches need a direct
 warning. The listed minimum starts at RTX 2060 / RX 5700, which is
 well above many handheld and older desktop targets. If you still
 want to try it, verify recent Proton or player reports, use the
 lowest preset first, cap FPS, and stay within Steam refund timing.
 </p>
 </div>

 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
