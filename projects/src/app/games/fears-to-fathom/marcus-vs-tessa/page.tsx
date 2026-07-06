import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { createFearsToFathomMetadata, fearsToFathomImages } from '@/lib/fears-to-fathom';

const title = 'Fears to Fathom Scratch Creek: Marcus vs Tessa â?Which Character Should You Pick?';
const description =
 'Marcus vs Tessa character guide for Fears to Fathom: Scratch Creek. Compare scare levels, individual tasks, unique scenes, and which character each player should choose for the best co-op experience.';
const canonical = '/games/fears-to-fathom/marcus-vs-tessa';

export const metadata = createFearsToFathomMetadata({ title, description, canonical, image: fearsToFathomImages.hiding });

const comparisonRows = [
 ['Scare level', 'ð´ Higher â?more dangerous solo sections', 'ð¢ Lower â?tense but less frightening'],
 ['Horror style', 'Direct threats, chase sequences, hiding', 'Atmospheric tension, eavesdropping, stealth'],
 ['Key solo scene', 'Church basement towel run. Bathroom encounter at 3:33 AM.', 'Downstairs for water. Overhearing the cult conversation.'],
 ['Chase role', 'Hides under the bed. Unlocks door for Tessa.', 'Knocks on the door. Leads the run to the tunnel.'],
 ['Finale role', 'Either can unhook trailer or drive', 'Either can unhook trailer or drive'],
 ['Story perspective', 'Boyfriend moving for career. Primary cult target.', 'Girlfriend who moved states to support him.'],
 ['Best for...', 'Players comfortable with horror who want intensity', 'Players who prefer atmosphere over jump scares'],
];

const tessaSoloScenes = [
 'Bath scene at Miss Julia\'s â?running water while alone in the bathroom.',
 'Going downstairs for water at 3:33 AM â?overhearing the cult conversation.',
 'Signing the guest book at the desk near the stairs.',
 'Getting water from the kitchen while separated from Marcus.',
];

const marcusSoloScenes = [
 'Church basement â?retrieving towels alone in the dark.',
 'Door locks behind you â?finding the secret tunnel alone.',
 '3:33 AM bathroom encounter â?a man is inside. Do NOT open the door.',
 'Hiding under the bed â?waiting for Tessa to knock while the stalker checks the wardrobe.',
];

const faqs = [
 {
  question: 'Can both players pick the same character?',
  answer:
   'No. Scratch Creek requires one player as Marcus and one as Tessa. You cannot play through the game with both players as the same character. This is enforced by the game.',
 },
 {
  question: 'Which character has the scarier experience?',
  answer:
   'Marcus has the scarier individual sections. His solo tasks involve direct threats: the dark church basement, the locked door trap, the bathroom encounter, and hiding from the stalker. Tessa\'s solo sections are more atmospheric â?eavesdropping, stealth, and tension without direct confrontation.',
 },
 {
  question: 'Can you swap characters mid-game?',
  answer:
   'No. Once you start a save file, character assignments are locked. If you want to experience the other character\'s perspective, you need to start a new game and swap roles.',
 },
 {
  question: 'Does the ending change based on which character you pick?',
  answer:
   'No. The endings are the same regardless of who plays Marcus or Tessa. Both characters must survive together to reach any of the good endings. Character choice affects the gameplay experience (who does which tasks) but not the story outcome.',
 },
];

export default function FearsToFathomMarcusVsTessaPage() {
 return (
  <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>

   <p className="mt-4 text-base text-muted-foreground leading-relaxed">
    Scratch Creek requires <strong>two players</strong> â?one as Marcus Reed, one as Tessa Langley.
    Each character has unique solo scenes, different scare levels, and distinct responsibilities.
    Here is how to decide who plays which role.
   </p>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Quick Recommendation</h2>
    <div className="mt-3 grid gap-4 sm:grid-cols-2">
     <div className="rounded-lg border border-red-200 bg-red-50 p-5">
      <h3 className="text-base font-bold text-red-900">Pick Marcus if you...</h3>
      <ul className="mt-2 space-y-1 text-sm text-red-800">
       <li>â?Enjoy direct horror and chase sequences</li>
       <li>â?Are comfortable with hiding and stealth</li>
       <li>â?Want the more intense experience</li>
       <li>â?Have played horror games before</li>
      </ul>
     </div>
     <div className="rounded-lg border border-green-200 bg-green-50 p-5">
      <h3 className="text-base font-bold text-green-900">Pick Tessa if you...</h3>
      <ul className="mt-2 space-y-1 text-sm text-green-800">
       <li>â?Prefer atmospheric tension over jump scares</li>
       <li>â?Get scared easily</li>
       <li>â?Want the slightly safer experience</li>
       <li>â?Are new to horror games</li>
      </ul>
     </div>
    </div>
   </section>

   <ArticleImage
    src={fearsToFathomImages.hiding}
    alt="Fears to Fathom: Scratch Creek â?Marcus and Tessa hiding during the escape sequence"
    caption="Marcus (left) faces more direct threats, while Tessa (right) experiences more atmospheric tension."
   />

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Full Comparison</h2>
    <div className="mt-4 overflow-hidden rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead>
       <tr className="border-b border-border bg-mist">
        <th className="px-4 py-3 text-left font-medium text-muted-foreground w-1/4">Category</th>
        <th className="px-4 py-3 text-left font-medium text-foreground">Marcus Reed</th>
        <th className="px-4 py-3 text-left font-medium text-foreground">Tessa Langley</th>
       </tr>
      </thead>
      <tbody>
       {comparisonRows.map((row) => (
        <tr key={row[0]} className="border-b border-border last:border-0">
         <td className="px-4 py-3 font-semibold text-foreground">{row[0]}</td>
         <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
         <td className="px-4 py-3 text-muted-foreground">{row[2]}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Marcus's Unique Solo Scenes</h2>
    <ul className="mt-3 space-y-2">
     {marcusSoloScenes.map((scene, i) => (
      <li key={i} className="flex gap-3 rounded-lg border border-red-100 bg-red-50 p-3">
       <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-200 text-[11px] font-bold text-red-800">{i + 1}</span>
       <span className="text-sm text-red-900">{scene}</span>
      </li>
     ))}
    </ul>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Tessa's Unique Solo Scenes</h2>
    <ul className="mt-3 space-y-2">
     {tessaSoloScenes.map((scene, i) => (
      <li key={i} className="flex gap-3 rounded-lg border border-green-100 bg-green-50 p-3">
       <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-200 text-[11px] font-bold text-green-800">{i + 1}</span>
       <span className="text-sm text-green-900">{scene}</span>
      </li>
     ))}
    </ul>
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
     <Link href="/games/fears-to-fathom/co-op-guide" className="text-sm text-foreground underline hover:no-underline">Co-op & Solo FAQ</Link>
     <Link href="/games/fears-to-fathom/all-endings" className="text-sm text-foreground underline hover:no-underline">All Endings</Link>
    </div>
   </div>

   <p className="mt-10 text-xs text-muted-foreground">
    Reference note: TheGamer, player discussions, Steam reviews, playthrough checks. Last updated June 15, 2026.
   </p>
  </main>
 );
}
