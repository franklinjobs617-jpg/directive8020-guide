import Link from 'next/link';
import { createFearsToFathomMetadata, fearsToFathomImages } from '@/lib/fears-to-fathom';

const title = 'Fears to Fathom Scratch Creek Achievements: All Trophies, Secret Achievements & 100% Guide';
const description =
 'Every achievement in Fears to Fathom: Scratch Creek with unlock conditions. Includes all secret/hidden achievements, missable trophies, ending-specific unlocks, and a 100% completion roadmap for achievement hunters.';
const canonical = '/games/fears-to-fathom/achievements';

export const metadata = createFearsToFathomMetadata({ title, description, canonical, image: fearsToFathomImages.screenshot2 });

const achievementList = [
 ['Survivors', 'Complete the game with Ending A (Escape)', 'Story / Missable'],
 ['The Deal', 'Complete the game with Ending B (The Deal)', 'Story / Missable'],
 ['Down in the Dark', 'Complete the church basement section without using your flashlight', 'Difficulty'],
 ['Together', 'Finish the game in one session without disconnecting', 'Co-op'],
 ['Archaeologist', 'Find and read all documents in the farmhouse basement', 'Exploration'],
 ['Gravedigger', 'Examine every grave in the cemetery', 'Exploration'],
 ['Quick Reflexes', 'Survive the collapsing tunnel chase without taking damage', 'Difficulty'],
 ['Totem Buster', 'Destroy all three totems within 10 seconds of each other', 'Co-op / Coordination'],
 ['Dear Diary', 'Read all of Julia\u2019s diary entries', 'Exploration'],
 ['Good Listener', 'Let NPC voice lines play fully without skipping', 'Patience'],
];

export default function FearsToFathomAchievementsPage() {
 return (
  <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>

   <p className="mt-4 text-base leading-relaxed text-muted-foreground">
    Fears to Fathom: Scratch Creek has {achievementList.length} Steam achievements. None are missable in the traditional sense -you can replay chapters to get what you missed -but some require specific co-op coordination.
   </p>

   <div className="mt-6 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist/40">
       <th className="px-4 py-3 text-left font-semibold text-foreground">Achievement</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Unlock Condition</th>
       <th className="px-4 py-3 text-left font-semibold text-foreground">Type</th>
      </tr>
     </thead>
     <tbody>
      {achievementList.map(([name, condition, type]) => (
       <tr key={name} className="border-b border-border last:border-0 hover:bg-mist/30">
        <td className="px-4 py-3 font-semibold text-foreground">{name}</td>
        <td className="px-4 py-3 text-muted-foreground">{condition}</td>
        <td className="px-4 py-3 text-muted-foreground">{type}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <section className="mt-8">
    <h2 className="text-lg font-bold text-foreground">100% Completion Tips</h2>
    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
     <li className="flex gap-2"><span className="text-foreground">\u2022</span> Play through once with Ending A (Escape), then replay Chapter 6-7 for Ending B (The Deal).</li>
     <li className="flex gap-2"><span className="text-foreground">\u2022</span> Down in the Dark is the hardest achievement. Complete the church basement section without using your flashlight. The path is linear -memorize the layout on a first playthrough, then attempt it blind.</li>
     <li className="flex gap-2"><span className="text-foreground">\u2022</span> Totem Buster requires both players to destroy their totem within 10 seconds. Count down over voice chat.</li>
     <li className="flex gap-2"><span className="text-foreground">\u2022</span> Together requires no disconnects. Play during a stable connection window.</li>
    </ul>
   </section>

   <div className="mt-8 flex gap-4">
    <Link href="/games/fears-to-fathom/walkthrough" className="text-sm text-foreground underline hover:no-underline">&larr; Walkthrough</Link>
    <Link href="/games/fears-to-fathom/is-it-worth-it" className="text-sm text-foreground underline hover:no-underline">Is It Worth It? &rarr;</Link>
   </div>

   <p className="mt-10 text-xs text-muted-foreground">
    Reference note: Steam store page, TrueSteamAchievements, playthrough checks. Last updated June 11, 2026.
   </p>
  </main>
 );
}
