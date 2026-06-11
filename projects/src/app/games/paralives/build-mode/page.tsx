import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { BlufBox, SearchAnswerPanel } from '@/components/guide-blocks';
import { ParalivesArticle } from '@/components/paralives-article';
import {
 createParalivesMetadata,
 paralivesBuildRows,
 paralivesImages,
} from '@/lib/paralives';

const title = 'Paralives Build Mode Guide: Roof Styles, Curved Walls, Split Levels & Build Tips';
const description =
 'Paralives build mode guide for gridless homes, roof style comparisons, curved walls, split-level floors, Paramaker, Steam Workshop, object resizing, recoloring, and build tips for first-time builders.';
const canonical = '/games/paralives/build-mode';

export const metadata = createParalivesMetadata({
 title,
 description,
 canonical,
 image: paralivesImages.build,
});

const faqs = [
 {
 question: 'Does Paralives have grid-less building?',
 answer:
 'Yes. Steam describes Paralives as supporting truly grid-less construction. You can place walls and objects freely without snapping to a tile grid.',
 },
 {
 question: 'Can you build curved walls in Paralives?',
 answer:
 'Yes. Curved walls are listed as an official building feature. Plan the exterior curve first, then place furniture after the room shape is locked.',
 },
 {
 question: 'Can you make split-level floors?',
 answer:
 'Yes. Split-level floors are part of the building toolset. Use them after the main footprint is complete to avoid rebuilding stairs and room flow later.',
 },
 {
 question: 'Does Paralives support Steam Workshop for builds?',
 answer:
 'Steam Workshop is part of the official feature set for sharing houses, Parafolks, and custom content. Check the live Early Access build for upload and browser behavior.',
 },
 {
 question: 'What roof styles are available in Paralives?',
 answer:
 'Paralives supports flat roofs, pitched roofs, gable roofs, and custom roof shapes. Each style suits a different architectural look and build approach.',
 },
 {
 question: 'What is Paramaker in Paralives?',
 answer:
 'Paramaker is the character-creation side of Paralives. Build mode and Paramaker connect through shared homes, households, styles, and Workshop sharing.',
 },
 {
 question: 'Are all roadmap build features available now?',
 answer:
 'Not all features are available at launch. Check the live Early Access build for current tools, build limits, and performance before planning around a promised feature.',
 },
 {
 question: 'Can objects be resized and recolored?',
 answer:
 'Yes. Resizing, recoloring, stacking, and freely placing furniture, decor, and clutter objects are all supported in the current build.',
 },
];

const searchIntentRows = [
 {
 query: 'Paralives build mode',
 answer: 'Build mode focuses on gridless construction, curved walls, split levels, object resizing, recoloring, stacking, and free placement.',
 href: '#build-features',
 label: 'Build',
 },
 {
 query: 'Paralives roof styles',
 answer: 'Paralives supports flat, pitched, gable, and custom roof styles. Choose based on the architectural look and build complexity you want.',
 href: '#roof-styles',
 label: 'Roof styles',
 },
 {
 query: 'Gridless building',
 answer: 'Plan the shape first, then test room flow before using curved walls, split levels, and heavy clutter.',
 href: '#first-house',
 label: 'Layout',
 },
 {
 query: 'Paralives curved walls and split levels',
 answer: 'Use curved walls for the exterior shape, then add split-level floors after the main footprint is locked. This avoids rebuilding room flow later.',
 href: '#build-tips',
 label: 'Curved walls',
 },
 {
 query: 'Paramaker and build mode',
 answer: 'Paramaker handles Parafolks, while build mode creates homes; both matter for households and shared Workshop creations.',
 href: '#paramaker-workshop',
 label: 'Creation',
 },
 {
 query: 'Paralives build limits',
 answer: 'Check the live Early Access build for current limits, performance behavior, and roadmap-only tools.',
 href: '#live-vs-roadmap',
 label: 'Limits',
 },
];

const jumpLinks = [
 { href: '#build-features', label: 'Build tools' },
 { href: '#roof-styles', label: 'Roof styles' },
 { href: '#build-tips', label: 'Build tips' },
 { href: '#first-house', label: 'First house' },
 { href: '#paramaker-workshop', label: 'Paramaker' },
 { href: '#live-vs-roadmap', label: 'Live vs roadmap' },
 { href: '/games/paralives/mods-cc', label: 'Mods and CC' },
 { href: '/games/paralives/early-access', label: 'Early Access' },
];

const roofStyleRows = [
 ['Flat roof', 'Modern and minimalist homes. Easy to build with a simple roof cap.', 'Best for contemporary designs. Can be used as a rooftop terrace or garden space.'],
 ['Pitched roof', 'Traditional sloped roof for classic house shapes. Sheds rain and snow naturally.', 'Requires more planning for interior ceiling height. Works well with rectangular floor plans.'],
 ['Gable roof', 'Triangular roof section with two sloping sides. A versatile middle ground.', 'Good for most home styles. Provides attic space without complex framing.'],
 ['Custom roof', 'Free-form roof shapes built with the gridless tools. Complete creative control.', 'Best for experienced builders. Start with a simple shape and add complexity in passes.'],
];

const buildTipRows = [
 ['Curved walls', 'Build the curved exterior shape first, then place rooms inside the curve before adding windows and doors.', 'Curved rooms can make furniture placement tricky if the floor space is too narrow. Keep curved rooms wider than 3 tiles for comfortable pathing.'],
 ['Split-level floors', 'Add split levels after the main footprint is complete. Use half-steps instead of full floor transitions for a natural flow.', 'Split levels create visual interest but add pathing complexity. Test stair and ramp reach before decorating the upper level.'],
 ['Object resizing', 'Resize objects from the base dimensions upward. Oversized furniture can block movement paths and door access.', 'Keep a consistent resize ratio across a room to maintain visual harmony. Avoid mixing extreme sizes in the same space.'],
 ['Color and material', 'Pick a core palette of 3-4 colors per room, then use accent pieces for contrast.', 'Too many colors in one room creates visual noise. Use the recolor tool to match furniture to the wall and floor tones.'],
 ['Stack and free-place', 'Do a function pass first (beds, tables, chairs), then a clutter pass (decor, plants, books) last.', 'Function-first ordering prevents cluttered layouts where key pathing is blocked by decorative objects.'],
];

const liveVsRoadmapRows = [
 ['Available now', 'Gridless placement, curved walls, split-level planning, resizing, recoloring, object stacking, basic home flow, flat and pitched roof styles.'],
 ['Check before relying on it', 'Workshop upload flow, current object limits, performance with clutter-heavy homes, and mod browser behavior.'],
 ['Roadmap features', 'Expanded build limits, additional roof styles, and advanced building tools planned for future Early Access updates.'],
 ['Best player habit', 'Build one compact test home first, then scale after pathing, readability, and performance feel stable.'],
];

export default function ParalivesBuildModePage() {
 return (
 <ParalivesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Build Mode"
 heroImage={paralivesImages.build}
 heroAlt="Paralives build mode grid-less home screenshot"
 faqs={faqs}
 >
 <SearchAnswerPanel
 title="What can you do in Paralives build mode right now?"
 answer="Paralives build mode is built around flexible home creation: gridless construction, curved walls, split-level floors, multiple roof styles, object resizing, recoloring, stacking, and free placement. Check the live Early Access build for current Workshop behavior, build limits, and roadmap-only tools."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <BlufBox title="Build Mode Answer">
 <p>
 <strong>Paralives build mode is built around flexibility.</strong>{' '}
 Plan the shape first, then place rooms, stairs, and daily-use objects
 before decorating. Grid-less tools, curved walls, split levels,
 resizing, recoloring, and object stacking are powerful, but they work
 best when the house still has a readable floor plan.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2 id="build-features">First House Checklist</h2>
 <ArticleImage
 src={paralivesImages.build}
 alt="Paralives build mode flexible home design screenshot"
 caption="The first build should prove the tools: one compact home, clear movement paths, readable rooms, and only then detailed clutter and color work."
 />
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Build feature</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Use it for</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Beginner caution</th>
 </tr>
 </thead>
 <tbody>
 {paralivesBuildRows.map(([feature, use, caution]) => (
 <tr key={feature} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{feature}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 <td className="px-4 py-3 text-muted-foreground">{caution}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <h2 id="roof-styles" className="mb-3 mt-10 text-2xl font-bold tracking-[-0.29px] text-foreground">
 Roof Style Comparison
 </h2>
 <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
 Paralives supports multiple roof styles. Choose based on the
 architectural look you want and the build complexity you are comfortable
 with.
 </p>
 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Roof style</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best use</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Build note</th>
 </tr>
 </thead>
 <tbody>
 {roofStyleRows.map(([style, use, note]) => (
 <tr key={style} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{style}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 <td className="px-4 py-3 text-muted-foreground">{note}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <ArticleImage
 src={paralivesImages.paraBuild}
 alt="Paralives build mode roof and exterior design screenshot"
 caption="Choose a roof style that matches the architectural look of your home. Flat roofs work for modern builds while pitched and gable roofs suit traditional designs."
 />

 <h2 id="build-tips" className="mb-3 mt-10 text-2xl font-bold tracking-[-0.29px] text-foreground">
 Build Mode Tips for First-Time Players
 </h2>
 <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
 These practical tips cover curved walls, split-level floors, object
 resizing, color palettes, and clutter placement to help you build
 comfortable homes faster.
 </p>
 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Technique</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to use it</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Watch out for</th>
 </tr>
 </thead>
 <tbody>
 {buildTipRows.map(([technique, howTo, watch]) => (
 <tr key={technique} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{technique}</td>
 <td className="px-4 py-3 text-muted-foreground">{howTo}</td>
 <td className="px-4 py-3 text-muted-foreground">{watch}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <ArticleImage
 src={paralivesImages.paraParamaker}
 alt="Paralives Paramaker character creation screenshot"
 caption="Paramaker and build mode work together. Create Parafolks first, then build a home that fits their daily routines and personality."
 />

 <section className="prose-game">
 <h2 id="first-house">Best First Build Order</h2>
 <p>
 Start with a small one-story home, then add a curved exterior or split
 level after the main rooms work. Test bedrooms, kitchen, bathroom,
 living space, and door flow before adding clutter. Once the house
 functions, use recolors and resizing to make each room feel personal
 without breaking the layout.
 </p>

 <h2 id="paramaker-workshop">Paramaker, Workshop, and Shared Homes</h2>
 <p>
 Paramaker is where Parafolks take shape; build mode is where their
 home becomes playable. If you care about shared creations, read the{' '}
 <Link href="/games/paralives/mods-cc">mods and custom content guide</Link>{' '}
 after your first test home works. Workshop support is useful, but the
 current Early Access build determines how much you can rely on shared
 uploads, downloads, and large decorated houses.
 </p>

 <h2 id="live-vs-roadmap">Available Now Versus Roadmap Features</h2>
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player takeaway</th>
 </tr>
 </thead>
 <tbody>
 {liveVsRoadmapRows.map(([status, takeaway]) => (
 <tr key={status} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{status}</td>
 <td className="px-4 py-3 text-muted-foreground">{takeaway}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </ParalivesArticle>
 );
}
