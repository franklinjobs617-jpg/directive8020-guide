import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { createFearsToFathomMetadata, fearsToFathomImages } from '@/lib/fears-to-fathom';

const title = 'Fears to Fathom Scratch Creek All Endings: True Ending, Secret Endings & Death Scenes';
const description =
 'Every ending in Fears to Fathom: Scratch Creek explained. How to get the True Ending, both early endings (Interstate & Backroads), all death scenes at 3:33 AM and Bill\'s House, and which choices change the finale.';
const canonical = '/games/fears-to-fathom/all-endings';

export const metadata = createFearsToFathomMetadata({ title, description, canonical, image: fearsToFathomImages.finalChase });

const endings = [
 {
  name: 'True Ending â?Escape & Call the Police',
  type: 'Good',
  chapter: 'Finale â?Bill\'s House',
  steps: [
   'Crouch by the tree at the edge of Bill\'s yard. Wait for Bill to finish talking to the truck driver and go inside.',
   'Watch the patrolman\'s route. When he moves to the front of the house, sprint to the trailer and both get inside.',
   'Close the trailer doors. Wait for the man to enter the house.',
   'Both jump out. One player MUST unhook the trailer (approach the hitch between car and trailer). The other gets in the driver\'s seat.',
   'If you skip unhooking: the trailer weight stalls the car and you\'re caught â?instant death.',
   'Once unhooked, both get in the car and drive away. Reach the main road and call the police.',
  ],
  result: 'You escape Scratch Creek. The police are notified. Both Marcus and Tessa survive.',
 },
 {
  name: 'Interstate Ending â?"We Arrived Late, But Safely"',
  type: 'Alternate Good',
  chapter: 'Interstate â?7:40 PM',
  steps: [
   'During the highway driving section, the passenger uses the NavGo app to give directions.',
   'When the traffic warning appears, do NOT reroute the GPS. Stay on 5 North.',
   'This skips the backroads entirely. You arrive at your destination late but avoid the cult encounter entirely.',
  ],
  result: 'An early "good" ending. You never reach Scratch Creek, but both characters are safe.',
 },
 {
  name: 'Backroads Ending â?"We Took a Wrong Turn..."',
  type: 'Alternate Good',
  chapter: 'Backroads â?8:08 PM',
  steps: [
   'After the fallen tree scene, you reach a fork in the road.',
   'The GPS says turn RIGHT onto Roseburg Road. The road sign points LEFT.',
   'Ignore the GPS. Follow the road sign (left toward Roseburg).',
  ],
  result: 'An alternate good ending. You get lost but eventually find the highway again, avoiding the cult.',
 },
 {
  name: 'Death â?3:33 AM at Miss Julia\'s',
  type: 'Death',
  chapter: 'Miss Julia\'s House â?3:33 AM',
  steps: [
   'As Marcus: opening the bathroom door (instant death â?a man is inside).',
   'As Marcus: hiding in the wardrobe instead of under the bed (you will be found).',
   'During the chase: running to the church (the door is locked â?you get cornered).',
   'During the chase: not hiding in the coffins when C. Hawkins enters the room.',
   'Getting caught during any part of the escape sequence.',
  ],
  result: 'Game over. You must restart from the 3:33 AM checkpoint.',
 },
 {
  name: 'Death â?Bill\'s House Finale',
  type: 'Death',
  chapter: 'Finale â?Bill\'s House',
  steps: [
   'Getting spotted by Bill or his accomplice during the escape.',
   'Running to the car instead of hiding in the trailer first.',
   'Driving away without unhooking the trailer (car stalls).',
   'Running into the woods or down the road on foot instead of using the car.',
  ],
  result: 'Game over. Restart from the Bill\'s House checkpoint.',
 },
];

const faqs = [
 {
  question: 'How many endings does Scratch Creek have?',
  answer:
   'Fears to Fathom: Scratch Creek has 5 distinct endings: 1 True Ending (escape by car), 2 alternate good endings (Interstate & Backroads), and 2 death endings (3:33 AM and Bill\'s House).',
 },
 {
  question: 'What is the True Ending in Scratch Creek?',
  answer:
   'The True Ending requires surviving both the 3:33 AM escape and the Bill\'s House finale. You must unhook the trailer before driving away â?this is the step most players miss because the game does not tell you to do it.',
 },
 {
  question: 'Can you get all endings in one playthrough?',
  answer:
   'No. The Interstate and Backroads endings happen early and skip the rest of the game. To see all endings, use checkpoints: trigger the Interstate ending first, reload, then continue the main story. The 3:33 AM and Bill\'s House deaths can be experienced naturally by failing those sections.',
 },
 {
  question: 'Is there a secret ending?',
  answer:
   'There is no hidden/secret ending beyond the 5 documented ones. Some guides refer to the Interstate and Backroads endings as "secret" because they are easy to miss, but they are not hidden â?they are alternate early endings triggered by specific navigation choices.',
 },
];

export default function FearsToFathomAllEndingsPage() {
 return (
  <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>

   <p className="mt-4 text-base text-muted-foreground leading-relaxed">
    Scratch Creek has <strong>5 distinct endings</strong>: one True Ending, two alternate early endings,
    and two death endings. The True Ending is missable because the game never tells you to unhook the trailer â?    this guide covers every step so you do not miss it.
   </p>

   <ArticleImage
    src={fearsToFathomImages.finalChase}
    alt="Fears to Fathom: Scratch Creek final chase at Bill's House"
    caption="The True Ending requires unhooking the trailer before driving away â?a step the game never tells you about."
   />

   {endings.map((ending, i) => (
    <section key={ending.name} className="mt-8">
     <div className="flex items-center gap-3 mb-3">
      <span className={`rounded-full px-3 py-1 text-xs font-bold ${
       ending.type === 'Good' ? 'bg-green-100 text-green-800' :
       ending.type === 'Alternate Good' ? 'bg-blue-100 text-blue-800' :
       'bg-red-100 text-red-800'
      }`}>
       {ending.type}
      </span>
      <span className="text-xs text-muted-foreground">{ending.chapter}</span>
     </div>
     <h2 className="text-xl font-bold text-foreground">
      {i + 1}. {ending.name}
     </h2>
     <ol className="mt-3 space-y-2">
      {ending.steps.map((step, j) => (
       <li key={j} className="flex gap-3">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground text-[11px] font-bold text-white">{j + 1}</span>
        <span className="text-sm text-muted-foreground">{step}</span>
       </li>
      ))}
     </ol>
     {ending.result && (
      <p className="mt-3 rounded-lg border border-border bg-mist p-3 text-sm font-medium text-foreground">
       {ending.result}
      </p>
     )}
    </section>
   ))}

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Ending FAQ</h2>
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
     <Link href="/games/fears-to-fathom/marcus-vs-tessa" className="text-sm text-foreground underline hover:no-underline">Marcus vs Tessa</Link>
    </div>
   </div>

   <p className="mt-10 text-xs text-muted-foreground">
    Reference note: in-game testing, TheGamer, ShowGamer, FuxoLogy, and player discussions. Last updated June 15, 2026.
   </p>
  </main>
 );
}
