import Link from 'next/link';
import { createFearsToFathomMetadata, fearsToFathomImages } from '@/lib/fears-to-fathom';

const title = 'How Long Is Fears to Fathom Scratch Creek? Game Length, Chapters & 100% Completion';
const description =
 'Fears to Fathom: Scratch Creek takes 2.5-4 hours for a standard playthrough. Full breakdown by playstyle, chapter-by-chapter times, how it compares to other Fears to Fathom episodes, and how long 100% achievement completion takes.';
const canonical = '/games/fears-to-fathom/length';

export const metadata = createFearsToFathomMetadata({ title, description, canonical, image: fearsToFathomImages.driving });

const playstyles = [
 { style: 'Main story (standard co-op)', time: '2.5–3 hours', note: 'Following objectives without exploring side areas.' },
 { style: 'Exploring everything', time: '3–4 hours', note: 'Reading all notes, searching every building, trying both character perspectives.' },
 { style: 'Achievement hunting (100%)', time: '4–5 hours', note: 'Includes Cow Clicker minigame grind (~30 min) and replaying sections for missable achievements.' },
 { style: 'Speedrun / replay', time: '1.5–2 hours', note: 'Skipping cutscenes, knowing all puzzle solutions, optimal routes.' },
];

const chapterTimes = [
 { chapter: 'Packing Up & Trailer Hookup', time: '15–20 min', note: 'Tutorial section. Largely unskippable.' },
 { chapter: 'Interstate Driving (7:40 PM)', time: '10–15 min', note: 'GPS navigation. Shorter if you take the early ending.' },
 { chapter: 'Backroads (8:08 PM) — Fallen Tree', time: '15–20 min', note: 'Tree puzzle, trailer tampering, road fork choice.' },
 { chapter: 'Buck\'s Repair Shop (8:52 PM)', time: '15–20 min', note: 'Meet Harry & Buck, drive to Bill\'s.' },
 { chapter: 'Bill\'s House & the Trail', time: '15–20 min', note: 'Conversations, trail walk to Miss Julia\'s.' },
 { chapter: 'Miss Julia\'s House (9:58 PM)', time: '30–40 min', note: 'Longest chapter: bath, church basement, towels, sleep.' },
 { chapter: '3:33 AM Escape Sequence', time: '20–30 min', note: 'Can take longer if you die repeatedly (no checkpoints mid-chase).' },
 { chapter: 'Bill\'s House Finale', time: '10–20 min', note: 'Patrol section + trailer unhook + drive away.' },
];

const episodeComparison = [
 { episode: 'Home Alone', time: '30–45 min', note: 'The shortest episode in the series.' },
 { episode: 'Norwood Hitchhike', time: '1–1.5 hrs', note: '' },
 { episode: 'Carson House', time: '1–2 hrs', note: '' },
 { episode: 'Ironbark Lookout', time: '1–2 hrs', note: 'Fan-favorite episode.' },
 { episode: 'Woodbury Getaway', time: '2–3 hrs', note: 'Previously the longest episode.' },
 { episode: 'Scratch Creek', time: '2.5–4 hrs', note: 'The longest episode — co-op adds length.' },
];

const faqs = [
 {
  question: 'How long is Fears to Fathom: Scratch Creek?',
  answer:
   'A standard co-op playthrough takes 2.5 to 3 hours. Exploring every area and reading all documents can extend this to 3–4 hours. Achievement hunters should budget 4–5 hours including replays for missable achievements.',
 },
 {
  question: 'Is Scratch Creek longer than other Fears to Fathom episodes?',
  answer:
   'Yes. Scratch Creek is the longest episode in the series at 2.5–4 hours. The previous longest was Woodbury Getaway at 2–3 hours. The co-op structure, driving sections, and larger environments contribute to the longer playtime.',
 },
 {
  question: 'How many chapters are in Scratch Creek?',
  answer:
   'There are 8 main sections: Packing Up, Interstate Driving, Backroads, Buck\'s Repair Shop, Bill\'s House, Miss Julia\'s House, the 3:33 AM Escape Sequence, and the Bill\'s House Finale. The game does not label them as numbered chapters, but the checkpoint system separates these sections.',
 },
 {
  question: 'Can you save mid-chapter?',
  answer:
   'The game uses automatic checkpoint saves. You can save and quit between chapters, but there is no manual save during a chapter. The 3:33 AM chase has no mid-sequence checkpoints — dying sends you back to the start of the chase.',
 },
];

export default function FearsToFathomLengthPage() {
 return (
  <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>

   <p className="mt-4 text-base text-muted-foreground leading-relaxed">
    A standard playthrough of Scratch Creek takes <strong>2.5 to 3 hours</strong> in co-op.
    It is the longest episode in the Fears to Fathom series. Below is a full breakdown by playstyle and chapter.
   </p>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Playtime by Playstyle</h2>
    <div className="mt-4 overflow-hidden rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead>
       <tr className="border-b border-border bg-mist">
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Playstyle</th>
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Time</th>
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Notes</th>
       </tr>
      </thead>
      <tbody>
       {playstyles.map((row) => (
        <tr key={row.style} className="border-b border-border last:border-0">
         <td className="px-4 py-3 font-semibold text-foreground">{row.style}</td>
         <td className="px-4 py-3 text-foreground font-medium">{row.time}</td>
         <td className="px-4 py-3 text-muted-foreground">{row.note}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Chapter-by-Chapter Times</h2>
    <div className="mt-4 overflow-hidden rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead>
       <tr className="border-b border-border bg-mist">
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Chapter</th>
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Time</th>
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Notes</th>
       </tr>
      </thead>
      <tbody>
       {chapterTimes.map((row) => (
        <tr key={row.chapter} className="border-b border-border last:border-0">
         <td className="px-4 py-3 font-semibold text-foreground">{row.chapter}</td>
         <td className="px-4 py-3 text-foreground font-medium">{row.time}</td>
         <td className="px-4 py-3 text-muted-foreground">{row.note}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Compared to Other Fears to Fathom Episodes</h2>
    <div className="mt-4 overflow-hidden rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead>
       <tr className="border-b border-border bg-mist">
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Episode</th>
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Playtime</th>
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Notes</th>
       </tr>
      </thead>
      <tbody>
       {episodeComparison.map((row) => (
        <tr key={row.episode} className={`border-b border-border last:border-0 ${row.episode === 'Scratch Creek' ? 'bg-blue-50' : ''}`}>
         <td className="px-4 py-3 font-semibold text-foreground">{row.episode}</td>
         <td className="px-4 py-3 text-foreground font-medium">{row.time}</td>
         <td className="px-4 py-3 text-muted-foreground">{row.note}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">FAQ</h2>
    <div className="mt-4 space-y-4">
     {faqs.map((faq) => (
      <div key={faq.question} className="rounded-lg border border-border bg-white p-4">
       <h3 className="text-sm font-bold text-foreground">{faq.question}</h3>
       <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
      </div>
     ))}
    </div>
   </section>

   <div className="mt-8 rounded-lg border border-border bg-mist p-5">
    <h3 className="mb-3 text-sm font-bold text-foreground">More Scratch Creek Guides</h3>
    <div className="flex flex-wrap gap-3">
     <Link href="/games/fears-to-fathom" className="text-sm text-foreground underline hover:no-underline">Guide Hub</Link>
     <Link href="/games/fears-to-fathom/walkthrough" className="text-sm text-foreground underline hover:no-underline">Full Walkthrough</Link>
     <Link href="/games/fears-to-fathom/all-endings" className="text-sm text-foreground underline hover:no-underline">All Endings</Link>
     <Link href="/games/fears-to-fathom/marcus-vs-tessa" className="text-sm text-foreground underline hover:no-underline">Marcus vs Tessa</Link>
    </div>
   </div>

   <p className="mt-10 text-xs text-muted-foreground">
    Data source: NerdsChalk, community playthrough reports, Steam reviews. Last updated June 15, 2026.
   </p>
  </main>
 );
}
