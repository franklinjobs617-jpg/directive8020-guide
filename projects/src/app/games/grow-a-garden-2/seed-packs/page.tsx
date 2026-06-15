import Link from 'next/link';
import { createGAG2Metadata, gag2SeedPacks } from '@/lib/grow-a-garden-2';

const title = 'Grow a Garden 2 Seed Packs Guide: Ghost Pepper Pack, Odds & Is It Worth It?';
const description =
 'Ghost Pepper Seed Pack guide for Grow a Garden 2. All 5 exclusive seeds with drop rates (Baby Cactus 50%, Ghost Pepper 1%), Robux costs (99-4,449), and whether Seed Packs are worth buying vs the regular Seed Shop.';
const canonical = '/games/grow-a-garden-2/seed-packs';

export const metadata = createGAG2Metadata({ title, description, canonical });

export default function GAG2SeedPacksPage() {
 return (
  <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>

   <p className="mt-3 text-base text-muted-foreground leading-relaxed">
    Seed Packs are purchased with <strong>Robux only</strong> (not Sheckles).
    They contain <strong>exclusive seeds</strong> that cannot be bought from the regular Seed Shop.
    Each roll is random — there is no pity system.
   </p>

   <section className="mt-6">
    <h2 className="text-lg font-bold text-foreground">Ghost Pepper Seed Pack</h2>
    <div className="mt-2 overflow-hidden rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead><tr className="border-b border-border bg-mist"><th className="px-3 py-2 text-left font-medium text-muted-foreground">Rolls</th><th className="px-3 py-2 text-left font-medium text-muted-foreground">Cost (Robux)</th></tr></thead>
      <tbody>
       {[{rolls:'1 Roll',cost:'99'},{rolls:'3 Rolls',cost:'249'},{rolls:'10 Rolls',cost:'799'},{rolls:'50 Rolls',cost:'4,449'}].map(r=>(<tr key={r.rolls} className="border-b border-border last:border-0"><td className="px-3 py-2 font-semibold text-foreground">{r.rolls}</td><td className="px-3 py-2 font-mono text-foreground">{r.cost} Robux</td></tr>))}
      </tbody>
     </table>
    </div>
   </section>

   {gag2SeedPacks.map(pack => (
    <section key={pack.name} className="mt-6">
     <h2 className="text-lg font-bold text-foreground">Exclusive Seeds in {pack.name}</h2>
     <div className="mt-2 overflow-x-auto rounded-lg border border-border bg-white">
      <table className="w-full text-sm">
       <thead><tr className="border-b border-border bg-mist"><th className="px-3 py-2 text-left font-medium text-muted-foreground">Seed</th><th className="px-3 py-2 text-left font-medium text-muted-foreground">Rarity</th><th className="px-3 py-2 text-left font-medium text-muted-foreground">Drop Rate</th><th className="px-3 py-2 text-left font-medium text-muted-foreground">Harvest</th></tr></thead>
       <tbody>
        {pack.exclusiveSeeds.map(s => (
         <tr key={s.name} className={`border-b border-border last:border-0 ${s.name === 'Ghost Pepper' ? 'bg-yellow-50' : ''}`}>
          <td className="px-3 py-2 font-semibold text-foreground">{s.name} {s.name === 'Ghost Pepper' ? '🔥' : ''}</td>
          <td className="px-3 py-2 text-xs text-muted-foreground">{s.rarity}</td>
          <td className="px-3 py-2 text-xs font-mono font-bold text-foreground">{s.odds}</td>
          <td className="px-3 py-2 text-xs"><span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${s.harvestType === 'Multi' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{s.harvestType}</span></td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>
    </section>
   ))}

   <section className="mt-6">
    <h2 className="text-lg font-bold text-foreground">Is It Worth Buying Seed Packs?</h2>
    <div className="mt-2 grid gap-3 sm:grid-cols-2">
     <div className="rounded-lg border border-red-200 bg-red-50 p-4">
      <h3 className="text-sm font-bold text-red-900">Skip If…</h3>
      <ul className="mt-2 space-y-1 text-xs text-red-800">
       <li>• You do not want to spend real money (Robux only)</li>
       <li>• You are early game (focus on regular Seed Shop first)</li>
       <li>• You want the Ghost Pepper specifically (1% = ~100 rolls avg)</li>
      </ul>
     </div>
     <div className="rounded-lg border border-green-200 bg-green-50 p-4">
      <h3 className="text-sm font-bold text-green-900">Buy If…</h3>
      <ul className="mt-2 space-y-1 text-xs text-green-800">
       <li>• Baby Cactus (50%) is a great Multi-harvest starter</li>
       <li>• You are a collector who wants all exclusive seeds</li>
       <li>• You have spare Robux and want pack-only crops</li>
      </ul>
     </div>
    </div>
   </section>

   <div className="mt-8 rounded-lg border border-border bg-mist p-5">
    <h3 className="mb-3 text-sm font-bold text-foreground">More Guides</h3>
    <div className="flex flex-wrap gap-3">
     <Link href="/games/grow-a-garden-2" className="text-sm text-foreground underline hover:no-underline">Guide Hub</Link>
     <Link href="/games/grow-a-garden-2/seeds" className="text-sm text-foreground underline hover:no-underline">Seeds & Plants</Link>
     <Link href="/games/grow-a-garden-2/codes" className="text-sm text-foreground underline hover:no-underline">Codes</Link>
    </div>
   </div>
  </main>
 );
}
