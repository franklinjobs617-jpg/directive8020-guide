import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { createFearsToFathomMetadata, fearsToFathomImages } from '@/lib/fears-to-fathom';

const title = 'Fears to Fathom Scratch Creek Walkthrough: All 7 Chapters, Puzzles, Choices & Endings';
const description =
 'Complete step-by-step walkthrough for Fears to Fathom: Scratch Creek. Covers all 7 chapters with puzzle solutions, key decisions, character choices, how to unlock every ending, and co-op tips for both Marcus and Tessa.';
const canonical = '/games/fears-to-fathom/walkthrough';

export const metadata = createFearsToFathomMetadata({ title, description, canonical, image: fearsToFathomImages.screenshot3 });

const chapters = [
 {
  num: '1',
  title: 'The Crash',
  steps: [
   'The game opens with Tessa and Marcus driving through Oregon. A deer runs into the road — swerve or brake? Either choice triggers the same crash cutscene.',
   'After the crash, you wake up in the car. Your partner is next to you. Exit the vehicle and look around.',
   'Check the trunk of the car for a flashlight and a map. The map marks Scratch Creek as the nearest town.',
   'Follow the road toward Scratch Creek. Stick together — if you wander too far from your partner, the screen darkens and warning sounds play.',
  ],
 },
 {
  num: '2',
  title: 'Arrival at Scratch Creek',
  steps: [
   'Enter Scratch Creek. The town is abandoned and run-down. Most buildings are locked.',
   'A payphone rings when you approach it. Answer it — a cryptic voice tells you to "leave before dark."',
   'Search the gas station (unlocked). Inside you find: a lighter, a note from "Jeremiah," and a locked cash register that cannot be opened.',
   'The note hints that someone named "Elias" lives at the farmhouse on the hill. This is your next objective.',
  ],
 },
 {
  num: '3',
  title: 'The Farmhouse',
  steps: [
   'Follow the path up the hill to the farmhouse. The front door is unlocked.',
   'Inside, search the kitchen. You find: a photograph of Elias and a woman, a key to the basement, and a radio playing static.',
   'The basement key opens the door under the stairs. Go down together — one player should hold the flashlight while the other reads documents.',
   'In the basement you find newspaper clippings about missing people in Scratch Creek. The dates span 20 years.',
   'A loud bang comes from upstairs. Go back up to investigate. The front door is now open and the radio is playing a message: "You should not have come here."',
  ],
 },
 {
  num: '4',
  title: 'Julia\u2019s House',
  steps: [
   'The objective updates: find Julia\u2019s house. It is marked on the map from the car trunk.',
   'Julia\u2019s house is on the east side of town. The door is locked. Look for a spare key under the flowerpot on the porch.',
   'Inside, Julia\u2019s house is warm and lived-in — someone is clearly staying here. Search the living room for a diary.',
   'Julia\u2019s diary reveals that she was a researcher studying the town\u2019s disappearances. Her last entry mentions "the thing in the church basement."',
   'The phone rings. Answer it — it is Julia. She warns you to leave Scratch Creek immediately. She says she is hiding in the church.',
  ],
 },
 {
  num: '5',
  title: 'The Church',
  steps: [
   'The church is at the north end of town. The main doors are barred from inside. Find the side entrance through the cemetery.',
   'The cemetery is dark. Use your flashlight. One player may trigger a jump scare when examining a specific grave — this is scripted.',
   'Enter the church through the side door. The interior is filled with occult symbols and strange markings on the walls.',
   'In the basement, you find Julia\u2019s body. She has been dead for several days. A note in her hand reads: "The ritual must be stopped. Burn the totems."',
   'There are three totems in the basement. Both players must interact with them simultaneously to destroy them. Coordinate with your partner via voice chat.',
   'After all three totems are destroyed, the ground shakes. A door that was previously locked creaks open. Go through it.',
  ],
 },
 {
  num: '6',
  title: 'The Choice',
  steps: [
   'You enter a large underground chamber with a central altar. This is where the disappearances originated.',
   'On the altar is a journal belonging to Elias. It explains that the town\u2019s founder made a deal with a dark entity — sacrifice strangers to keep the town alive.',
   'Two options appear, both players must vote:',
   '<strong>Option A — Destroy the altar:</strong> Smash the altar to break the cycle. This will collapse the chamber. You and your partner must run for the exit.',
   '<strong>Option B — Perform the ritual:</strong> Complete the ritual to gain the entity\u2019s power. The entity offers to let you leave if you bring it a new sacrifice.',
  ],
 },
 {
  num: '7',
  title: 'Endings',
  steps: [
   '<strong>Ending A — Escape:</strong> You destroy the altar and run. A chase sequence follows — both players must navigate a collapsing tunnel. If both reach the exit, you escape Scratch Creek. The final shot shows the town from a distance as the sun rises. Julia\u2019s voice narrates: "Some places should stay buried."',
   '<strong>Ending B — The Deal:</strong> You accept the entity\u2019s offer. The screen fades to black. You wake up outside town with no memory of what happened. A news report plays on the radio: "Two more people have gone missing in Scratch Creek." The cycle continues.',
   'After completing either ending, you unlock the credits. There is no post-credits scene.',
  ],
 },
];

const coopRoleRows = [
 ['Navigation lead', 'Carries the map, calls the next objective, and keeps both players on the same route.', 'Arrival, farmhouse route, town traversal, church route'],
 ['Interaction lead', 'Reads notes, checks doors, handles inventory prompts, and confirms puzzle clues before moving on.', 'Gas station, farmhouse, Julia house, church basement'],
 ['Light holder', 'Keeps the flashlight on the active objective while the other player reads or interacts.', 'Basement searches, cemetery, church'],
 ['Decision caller', 'Pauses before major choices and confirms both players agree before voting.', 'Chapter 6 ending choice'],
];

const recoveryRows = [
 ['Players split up', 'Stop moving forward and regroup at the last clear landmark.', 'Do not keep triggering objectives while one player is lost.'],
 ['A partner disconnects', 'Return to the host save or safe checkpoint before continuing.', 'Avoid making ending or puzzle choices while the second player is gone.'],
 ['Missed a note or clue', 'Backtrack before starting the next chapter objective if the area is still accessible.', 'Notes mainly help route understanding; do not restart unless an objective is blocked.'],
 ['Totem timing fails', 'Reset both players at the totems, count down, and interact together.', 'One player should call the timing over voice chat.'],
 ['Wrong ending vote', 'Replay from the latest pre-choice save or chapter checkpoint if available.', 'Keep one clean save before the Chapter 6 decision if you want both endings.'],
];

export default function FearsToFathomWalkthroughPage() {
 return (
  <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>

   <p className="mt-4 text-base leading-relaxed text-muted-foreground">
    Fears to Fathom: Scratch Creek has 7 chapters and takes approximately 2-3 hours to complete. There are two endings. Below is the full chapter-by-chapter walkthrough. The game is co-op only — both players must participate in key decisions.
   </p>

   <ArticleImage
    src={fearsToFathomImages.screenshot3}
    alt="Fears to Fathom: Scratch Creek walkthrough screenshot"
    caption="Scratch Creek has 7 chapters, two endings, and takes 2-3 hours. Both players must vote on the ending choice."
   />

   <div className="mt-8 space-y-6">
    {chapters.map((chapter) => (
     <section key={chapter.num} className="rounded-lg border border-border bg-white">
      <div className="border-b border-border bg-mist/40 px-5 py-3">
       <h2 className="text-base font-bold text-foreground">Chapter {chapter.num}: {chapter.title}</h2>
      </div>
      <ol className="space-y-3 px-5 py-4">
       {chapter.steps.map((step, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
         <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mist text-xs font-bold text-foreground">{i + 1}</span>
         <span dangerouslySetInnerHTML={{ __html: step }} />
        </li>
       ))}
      </ol>
     </section>
    ))}
   </div>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Co-op Tips for the Walkthrough</h2>
    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
     <li className="flex gap-2"><span className="text-foreground">\u2022</span> Stick together — the game penalizes players who wander apart with screen darkening and audio cues.</li>
     <li className="flex gap-2"><span className="text-foreground">\u2022</span> Both players need to interact with the totems simultaneously in Chapter 5. Coordinate this over voice chat.</li>
     <li className="flex gap-2"><span className="text-foreground">\u2022</span> The ending choice in Chapter 6 requires both players to vote. If you disagree, the game defaults to Ending A.</li>
     <li className="flex gap-2"><span className="text-foreground">\u2022</span> One player should hold the flashlight while the other reads documents — this is not required but makes the experience smoother.</li>
    </ul>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Co-op Role Split</h2>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
     Scratch Creek is easier when both players have a job. Use this split if you are playing with a friend and want fewer missed clues, cleaner navigation, and less confusion during simultaneous interactions.
    </p>
    <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead>
       <tr className="border-b border-border bg-mist">
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Role</th>
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Job</th>
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best chapters</th>
       </tr>
      </thead>
      <tbody>
       {coopRoleRows.map(([role, job, chapters]) => (
        <tr key={role} className="border-b border-border last:border-0">
         <td className="px-4 py-3 font-semibold text-foreground">{role}</td>
         <td className="px-4 py-3 text-muted-foreground">{job}</td>
         <td className="px-4 py-3 text-muted-foreground">{chapters}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">If Something Goes Wrong</h2>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
     Most failed runs come from separation, missed timing, or continuing after a disconnect. Use this recovery table before restarting the whole episode.
    </p>
    <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead>
       <tr className="border-b border-border bg-mist">
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Problem</th>
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Recovery</th>
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Avoid this</th>
       </tr>
      </thead>
      <tbody>
       {recoveryRows.map(([problem, recovery, avoid]) => (
        <tr key={problem} className="border-b border-border last:border-0">
         <td className="px-4 py-3 font-semibold text-foreground">{problem}</td>
         <td className="px-4 py-3 text-muted-foreground">{recovery}</td>
         <td className="px-4 py-3 text-muted-foreground">{avoid}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </section>

   <div className="mt-8 rounded-lg border border-border bg-mist p-5">
    <h3 className="mb-3 text-sm font-bold text-foreground">More Scratch Creek Guides</h3>
    <div className="flex flex-wrap gap-3">
     <Link href="/games/fears-to-fathom" className="text-sm text-foreground underline hover:no-underline">Guide Hub</Link>
     <Link href="/games/fears-to-fathom/co-op-guide" className="text-sm text-foreground underline hover:no-underline">Co-op & Solo FAQ</Link>
     <Link href="/games/fears-to-fathom/achievements" className="text-sm text-foreground underline hover:no-underline">Achievements</Link>
     <Link href="/games/fears-to-fathom/is-it-worth-it" className="text-sm text-foreground underline hover:no-underline">Is It Worth It?</Link>
    </div>
   </div>

   <p className="mt-10 text-xs text-muted-foreground">
    Source note: This guide uses official store information, route references, and player-facing chapter checks. Last updated June 11, 2026.
   </p>
  </main>
 );
}
