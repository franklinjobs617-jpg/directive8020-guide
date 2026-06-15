import Link from 'next/link';
import Image from 'next/image';
import { createGAG2Metadata, gag2Images } from '@/lib/grow-a-garden-2';

const title = 'Grow a Garden 2 Night Stealing Guide: How to Steal Crops & Defend Your Garden';
const description =
 'Complete night stealing guide for Grow a Garden 2. How the night system works, when the countdown starts, best stealing strategies, how to defend against thieves with pets and gears, and how to maximize profit from night raids.';
const canonical = '/games/grow-a-garden-2/night-stealing';

export const metadata = createGAG2Metadata({ title, description, canonical });

export default function GAG2NightStealingPage() {
 return (
  <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
   <div className="flex items-center gap-4 mb-4">
    <Image src={gag2Images.icon} alt="Grow a Garden 2" width={64} height={64} className="rounded-xl" />
    <div>
     <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>
     <p className="mt-1 text-sm text-muted-foreground">Night is when the real game begins — crops are vulnerable and thieves roam</p>
    </div>
   </div>

   <section className="mt-6">
    <h2 className="text-xl font-bold text-foreground">How the Night System Works</h2>
    <p className="mt-2 text-sm text-muted-foreground">
     Grow a Garden 2 has a <strong>day/night cycle</strong>. During the day, your garden is safe — other players cannot steal your crops.
     At night, the rules change: any player can enter your garden and steal unharvested crops. A countdown timer warns you when night is approaching,
     giving you time to harvest valuable crops before dark.
    </p>
    <div className="mt-3 grid gap-3 sm:grid-cols-2">
     {[
      { phase: '☀️ Daytime', rules: 'Safe to plant and grow. No stealing. Best time to buy seeds, upgrade, and prepare defenses.' },
      { phase: '🌅 Dusk Warning', rules: 'Countdown appears. Harvest your most valuable crops NOW. Position defensive pets.' },
      { phase: '🌙 Nighttime', rules: 'Stealing is active. Any unharvested crop can be taken. Defenses (pets, gears, props) engage automatically.' },
      { phase: '🌄 Dawn', rules: 'Night ends. Check what was stolen. Replant. Repair defenses.' },
     ].map((p) => (
      <div key={p.phase} className="rounded-lg border border-border bg-white p-3">
       <span className="text-xs font-bold text-foreground">{p.phase}</span>
       <p className="mt-1 text-xs text-muted-foreground">{p.rules}</p>
      </div>
     ))}
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">How to Steal from Other Gardens</h2>
    <ol className="mt-3 space-y-3">
     {[
      '<strong>Wait for night.</strong> You cannot steal during the day. Watch the countdown timer.',
      '<strong>Equip speed gear.</strong> Speed Mushroom (1,500 Sheckles) gives a 1-minute speed boost — essential for quick raids. Bunny pet (+5 speed) also helps.',
      '<strong>Scout empty gardens.</strong> Look for gardens with unharvested crops and no defensive pets visible. Gardens with Bee, Black Dragon, or Ice Serpent are high risk.',
      '<strong>Grab and run.</strong> You have limited time before the owner returns or defenses activate. Prioritize high-value crops (Moon Bloom, Dragon\'s Breath, Venus Fly Trap).',
      '<strong>Use the Raccoon pet.</strong> (5M-15M Sheckles) increases your steal limit by +25 — the best stealing pet in the game.',
      '<strong>Escape quickly.</strong> The Bunny pet\'s +5 speed and Speed Mushrooms help you outrun angry garden owners.',
     ].map((step, i) => (
      <li key={i} className="flex gap-3">
       <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground text-[11px] font-bold text-white">{i + 1}</span>
       <span className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: step }} />
      </li>
     ))}
    </ol>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">How to Defend Your Garden at Night</h2>
    <div className="mt-3 overflow-hidden rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead><tr className="border-b border-border bg-mist"><th className="px-3 py-2 text-left font-medium text-muted-foreground">Defense</th><th className="px-3 py-2 text-left font-medium text-muted-foreground">Type</th><th className="px-3 py-2 text-left font-medium text-muted-foreground">Cost</th><th className="px-3 py-2 text-left font-medium text-muted-foreground">How It Protects You</th></tr></thead>
      <tbody>
       {[
        ['Bee', 'Pet', '1M Sheckles', 'Swarms intruders automatically — best early defense'],
        ['Gnome', 'Gear', '50K Sheckles', 'Blows away thieves at night. Cheap and effective.'],
        ['Venus Fly Trap', 'Crop', '~7M Sheckles', 'Eats thieves who try to steal it. Defense + income.'],
        ['Black Dragon', 'Pet', '~1M Sheckles', 'Breathes fire on intruders — lethal area defense'],
        ['Ice Serpent', 'Pet', '20M Sheckles', 'Freezes intruders solid — ultimate defense'],
        ['Dragon\'s Breath', 'Crop', '~90M Sheckles', 'Fires lasers at thieves. Endgame crop defense.'],
        ['Moon Bloom', 'Crop', '~65M Sheckles', 'Anti-gravity effect disorients thieves.'],
       ].map((d) => (
        <tr key={d[0]} className="border-b border-border last:border-0">
         <td className="px-3 py-2 font-semibold text-foreground">{d[0]}</td>
         <td className="px-3 py-2 text-xs text-muted-foreground">{d[1]}</td>
         <td className="px-3 py-2 text-xs text-foreground font-medium">{d[2]}</td>
         <td className="px-3 py-2 text-xs text-muted-foreground">{d[3]}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Stealing Risk vs Reward</h2>
    <div className="mt-2 grid gap-3 sm:grid-cols-3">
     {[
      { risk: '🟢 Low Risk', target: 'New players with no pets, Common crops (Carrot, Blueberry)', profit: 'Low' },
      { risk: '🟡 Medium Risk', target: 'Mid-game gardens with no Bee/Dragon, Epic crops (Mango, Acorn)', profit: 'Medium' },
      { risk: '🔴 High Risk', target: 'Endgame gardens with Black Dragon/Ice Serpent, Super crops', profit: 'Very High' },
     ].map((r) => (
      <div key={r.risk} className="rounded-lg border border-border bg-mist p-3">
       <span className="text-xs font-bold text-foreground">{r.risk}</span>
       <p className="mt-1 text-xs text-muted-foreground">{r.target}</p>
       <p className="mt-1 text-[10px] text-muted-foreground">Profit: {r.profit}</p>
      </div>
     ))}
    </div>
   </section>

   <div className="mt-8 rounded-lg border border-border bg-mist p-5">
    <h3 className="mb-3 text-sm font-bold text-foreground">More Guides</h3>
    <div className="flex flex-wrap gap-3">
     <Link href="/games/grow-a-garden-2" className="text-sm text-foreground underline hover:no-underline">Guide Hub</Link>
     <Link href="/games/grow-a-garden-2/pets" className="text-sm text-foreground underline hover:no-underline">All Pets</Link>
     <Link href="/games/grow-a-garden-2/gears" className="text-sm text-foreground underline hover:no-underline">All Gears</Link>
     <Link href="/games/grow-a-garden-2/seeds" className="text-sm text-foreground underline hover:no-underline">Seeds & Plants</Link>
    </div>
   </div>
  </main>
 );
}
