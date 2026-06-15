import Link from 'next/link';
import Image from 'next/image';
import { createGAG2Metadata, gag2Images } from '@/lib/grow-a-garden-2';

const title = 'Grow a Garden 2 Beginner Guide: First Hour Walkthrough & How to Make Sheckles Fast';
const description =
 'New to Grow a Garden 2? Complete beginner walkthrough for your first hour: how to start, best first seeds, how to make Sheckles fast, which pets to buy first, and how to avoid common beginner mistakes.';
const canonical = '/games/grow-a-garden-2/beginner-guide';

export const metadata = createGAG2Metadata({ title, description, canonical });

export default function GAG2BeginnerGuidePage() {
 return (
  <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
   <div className="flex items-center gap-4 mb-4">
    <Image src={gag2Images.icon} alt="Grow a Garden 2" width={64} height={64} className="rounded-xl" />
    <div>
     <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>
     <p className="mt-1 text-sm text-muted-foreground">Your first hour: from 0 Sheckles to a thriving garden</p>
    </div>
   </div>

   <section className="mt-6">
    <h2 className="text-xl font-bold text-foreground">Step-by-Step First Hour</h2>
    <div className="mt-3 space-y-3">
     {[
      { title: '1. Claim Your Garden Plot', steps: 'When you first join, you get a free garden plot. Walk to your plot — this is your home base. Everything you plant, harvest, and defend starts here.' },
      { title: '2. Redeem the Code: TEAMGREENBEAN', steps: 'Click the Settings cog (top-left) → enter TEAMGREENBEAN → Claim! This gives you 3 free Green Bean seeds — free starting crops.' },
      { title: '3. Buy Your First Seeds', steps: 'Go to the Seed Shop (center of map). For your first purchase, buy <strong>Strawberry (5 Sheckles)</strong> or <strong>Blueberry (10 Sheckles)</strong>. These are Multi-harvest — they keep producing after you pick them. The shop refreshes every 5 minutes.' },
      { title: '4. Plant and Water', steps: 'Place seeds in your garden plot. Buy a <strong>Common Watering Can (2,000 Sheckles)</strong> from George at the Gear Shop — it makes crops grow 3× faster for 10 seconds.' },
      { title: '5. Harvest and Sell', steps: 'When crops are ready, harvest them. Sell at the shop for Sheckles. Use profits to buy more seeds. <strong>Always reinvest in Multi-harvest seeds first.</strong>' },
      { title: '6. Buy Your First Pet: Bunny (20,000 Sheckles)', steps: 'Pets spawn randomly in the lobby with countdown timers. Look for a <strong>Bunny</strong> (20,000 Sheckles). The +5 speed boost helps you move faster between shops, escape thieves, and do everything more efficiently.' },
      { title: '7. Prepare for Night', steps: 'Night is when other players can steal your crops. Harvest everything valuable before the night countdown ends. Buy a <strong>Gnome (50,000 Sheckles)</strong> from the Gear Shop for cheap automatic defense.' },
     ].map((s) => (
      <div key={s.title} className="rounded-lg border border-border bg-white p-4">
       <h3 className="text-sm font-bold text-foreground">{s.title}</h3>
       <p className="mt-1 text-sm text-muted-foreground">{s.steps}</p>
      </div>
     ))}
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Beginner Spending Priority</h2>
    <div className="mt-2 overflow-hidden rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead><tr className="border-b border-border bg-mist"><th className="px-3 py-2 text-left font-medium text-muted-foreground">Priority</th><th className="px-3 py-2 text-left font-medium text-muted-foreground">What to Buy</th><th className="px-3 py-2 text-left font-medium text-muted-foreground">Cost</th><th className="px-3 py-2 text-left font-medium text-muted-foreground">Why</th></tr></thead>
      <tbody>
       {[
        ['1', 'Strawberry or Blueberry Seeds', '5-10', 'Multi-harvest = infinite ROI'],
        ['2', 'Common Watering Can', '2,000', '3× growth speed, use repeatedly'],
        ['3', 'Bamboo Seeds', '700 each', 'Best mid-game value crop'],
        ['4', 'Bunny Pet', '20,000', '+5 speed for everything'],
        ['5', 'Deer Pet', '50,000', '+10% growth, stacks infinitely'],
        ['6', 'Gnome Gear', '50,000', 'Automatic night defense'],
        ['7', 'Bee Pet', '1,000,000', 'Best affordable auto-defense'],
       ].map((r) => (
        <tr key={r[0]} className="border-b border-border last:border-0">
         <td className="px-3 py-2 font-bold text-foreground">{r[0]}</td>
         <td className="px-3 py-2 font-semibold text-foreground text-xs">{r[1]}</td>
         <td className="px-3 py-2 text-xs text-foreground font-medium">{r[2]}</td>
         <td className="px-3 py-2 text-xs text-muted-foreground">{r[3]}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Common Beginner Mistakes</h2>
    <div className="mt-2 grid gap-2 sm:grid-cols-2">
     {[
      { mistake: 'Buying Single-harvest seeds first', fix: 'Always start with Multi-harvest (Strawberry, Blueberry, Bamboo)' },
      { mistake: 'Ignoring the night countdown', fix: 'Harvest everything valuable before night. Thieves will take it.' },
      { mistake: 'Skipping pets', fix: 'Bunny (20K) pays for itself in speed. Deer (50K) grows your income 10% faster.' },
      { mistake: 'Spending all Sheckles at once', fix: 'Always keep some cash to buy pets when they randomly spawn with a timer.' },
      { mistake: 'Buying expensive gears early', fix: 'Common Watering Can (2K) + Gnome (50K) are all you need early. Skip the 500K Wheelbarrow.' },
      { mistake: 'Not joining a guild', fix: 'Guilds give free weekly rewards just for farming. Join any active guild — it costs 0 Robux.' },
     ].map((m) => (
      <div key={m.mistake} className="rounded-lg border border-red-100 bg-red-50 p-3">
       <p className="text-xs font-bold text-red-800">❌ {m.mistake}</p>
       <p className="mt-1 text-xs text-red-700">✅ {m.fix}</p>
      </div>
     ))}
    </div>
   </section>

   <div className="mt-8 rounded-lg border border-border bg-mist p-5">
    <h3 className="mb-3 text-sm font-bold text-foreground">More Guides</h3>
    <div className="flex flex-wrap gap-3">
     <Link href="/games/grow-a-garden-2" className="text-sm text-foreground underline hover:no-underline">Guide Hub</Link>
     <Link href="/games/grow-a-garden-2/pets" className="text-sm text-foreground underline hover:no-underline">All Pets</Link>
     <Link href="/games/grow-a-garden-2/seeds" className="text-sm text-foreground underline hover:no-underline">Seeds & Plants</Link>
     <Link href="/games/grow-a-garden-2/night-stealing" className="text-sm text-foreground underline hover:no-underline">Night Stealing</Link>
    </div>
   </div>
  </main>
 );
}
