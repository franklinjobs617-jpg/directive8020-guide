import Link from 'next/link';
import Image from 'next/image';
import { createGAG2Metadata, gag2TopSeeds, gag2Images } from '@/lib/grow-a-garden-2';

const title = 'Grow a Garden 2 Seeds & Plants Guide: Best Crops, Acorn, Venus Fly Trap & Dragon\'s Breath';
const description =
 'All seeds ranked in Grow a Garden 2: Carrot to Dragon\'s Breath. Prices, harvest types (Single vs Multi), Acorn drop rate (2.9%), Venus Fly Trap defense, Moon Bloom anti-gravity, and best crops for early, mid, and late game.';
const canonical = '/games/grow-a-garden-2/seeds';

export const metadata = createGAG2Metadata({ title, description, canonical });

export default function GAG2SeedsPage() {
 return (
  <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>
   <div className="mt-6 grid gap-4 sm:grid-cols-2">
    <div className="overflow-hidden rounded-lg border border-border bg-white">
     <Image src={gag2Images.seed('seed-shop')} alt="Grow a Garden 2 Seed Shop" width={600} height={338} className="w-full" />
     <p className="border-t border-border bg-mist px-3 py-2 text-xs text-muted-foreground text-center">The Seed Shop rotates every 5 minutes</p>
    </div>
    <div className="overflow-hidden rounded-lg border border-border bg-white">
     <Image src={gag2Images.seed('venus-fly-trap')} alt="Venus Fly Trap in Grow a Garden 2" width={600} height={338} className="w-full" />
     <p className="border-t border-border bg-mist px-3 py-2 text-xs text-muted-foreground text-center">Venus Fly Trap — Mythic, eats thieves, S-Tier</p>
    </div>
    <div className="overflow-hidden rounded-lg border border-border bg-white">
     <Image src={gag2Images.seed('mushroom-farm')} alt="Mushroom farming in Grow a Garden 2" width={600} height={338} className="w-full" />
     <p className="border-t border-border bg-mist px-3 py-2 text-xs text-muted-foreground text-center">Mushrooms provide temporary buffs — Speed, Jump, Shrink, Invisibility</p>
    </div>
    <div className="overflow-hidden rounded-lg border border-border bg-white">
     <Image src={gag2Images.seed('pineapple-plant')} alt="Pineapple plant in Grow a Garden 2" width={600} height={338} className="w-full" />
     <p className="border-t border-border bg-mist px-3 py-2 text-xs text-muted-foreground text-center">Pineapple — Rare Multi-harvest, 10K Sheckles</p>
    </div>
   </div>

   <p className="mt-4 text-base text-muted-foreground">
    Seeds are purchased from the <strong>Seed Shop</strong> in the center of the map. The shop
    <strong> rotates every 5 minutes</strong> — rare seeds have low stock chances.
    <strong>Multi-harvest</strong> crops keep producing after the first harvest (best value).
   </p>

   <div className="mt-6 grid gap-2 sm:grid-cols-3">
    {[
     { label: 'Early Game', crops: 'Carrot → Strawberry → Blueberry', tip: 'Cheap Multi-harvest first' },
     { label: 'Mid Game', crops: 'Tomato → Bamboo → Pineapple', tip: 'Bamboo (700¢) is best value' },
     { label: 'Late Game', crops: 'Acorn → Venus Fly Trap → Moon Bloom', tip: 'Mythic+ for max income' },
    ].map((s) => (
     <div key={s.label} className="rounded-lg border border-border bg-mist p-3">
      <span className="text-[10px] font-bold text-muted-foreground uppercase">{s.label}</span>
      <p className="text-sm font-bold text-foreground">{s.crops}</p>
      <p className="text-xs text-muted-foreground">{s.tip}</p>
     </div>
    ))}
   </div>

   <section className="mt-6">
    <h2 className="text-xl font-bold text-foreground">All Seeds</h2>
    <div className="mt-3 overflow-x-auto rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead>
       <tr className="border-b border-border bg-mist">
        <th className="px-3 py-2 text-left font-medium text-muted-foreground">Seed</th>
        <th className="px-3 py-2 text-left font-medium text-muted-foreground">Rarity</th>
        <th className="px-3 py-2 text-left font-medium text-muted-foreground">Price</th>
        <th className="px-3 py-2 text-left font-medium text-muted-foreground">Harvest</th>
        <th className="px-3 py-2 text-left font-medium text-muted-foreground">Notes</th>
       </tr>
      </thead>
      <tbody>
       {gag2TopSeeds.map((seed) => (
        <tr key={seed.name} className="border-b border-border last:border-0">
         <td className="px-3 py-2 font-semibold text-foreground">{seed.emoji} {seed.name}</td>
         <td className="px-3 py-2 text-xs text-muted-foreground">{seed.rarity}</td>
         <td className="px-3 py-2 text-xs text-foreground font-medium">{seed.costSheckles}</td>
         <td className="px-3 py-2 text-xs"><span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${seed.harvestType === 'Multi' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{seed.harvestType}</span></td>
         <td className="px-3 py-2 text-xs text-muted-foreground">{seed.notes}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Crop Mutations — How to Multiply Your Income</h2>
    <p className="mt-2 text-sm text-muted-foreground">
     Mutations transform a crop's sell value. They are applied randomly when harvesting, but certain pets
     (Golden Dragonfly, Unicorn) and gears increase your mutation chances.
    </p>
    <div className="mt-3 overflow-hidden rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead><tr className="border-b border-border bg-mist"><th className="px-3 py-2 text-left font-medium text-muted-foreground">Mutation</th><th className="px-3 py-2 text-left font-medium text-muted-foreground">Value Multiplier</th><th className="px-3 py-2 text-left font-medium text-muted-foreground">How to Boost</th></tr></thead>
      <tbody>
       {[
        ['Gold', '15× value', 'Golden Dragonfly pet doubles the chance'],
        ['Rainbow', '40× value', 'Unicorn pet doubles the chance'],
        ['Electric', '~40× value', 'Weather events (Midas Touch)'],
        ['Frozen', 'Moderate boost', 'Weather events'],
        ['Shiny', 'Small boost', 'Random on harvest'],
       ].map((m) => (
        <tr key={m[0]} className="border-b border-border last:border-0">
         <td className="px-3 py-2 font-semibold text-foreground">{m[0]}</td>
         <td className="px-3 py-2 text-foreground font-bold">{m[1]}</td>
         <td className="px-3 py-2 text-xs text-muted-foreground">{m[2]}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
    <p className="mt-2 text-xs text-muted-foreground">
     Example: A Venus Fly Trap sells for ~3,840 base. An Electric Venus Fly Trap = <strong>~159,000 Sheckles</strong>.
     Stack Unicorn + Golden Dragonfly for maximum mutation income.
    </p>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Best Crop Progression Path</h2>
    <div className="mt-2 overflow-hidden rounded-lg border border-border bg-white">
     {[
      { stage: 'Early (0-10K Sheckles)', crops: 'Carrot → Strawberry → Blueberry', tip: 'Multi-harvest crops give the best ROI early. Blueberry at 10 Sheckles pays back in 1 harvest.' },
      { stage: 'Mid (10K-500K)', crops: 'Tomato → Bamboo → Pineapple → Mango', tip: 'Bamboo (700 Sheckles) is the best value crop in the game. Buy 5-10 and let them grow.' },
      { stage: 'Late (500K-10M)', crops: 'Acorn → Venus Fly Trap → Pomegranate', tip: 'Acorn has only 2.9% stock chance — check Seed Shop every 5 min. Venus Fly Trap defends itself.' },
      { stage: 'Endgame (10M+)', crops: 'Moon Bloom → Dragon\'s Breath', tip: 'Super-tier crops cost 65-90M each but have built-in defense and massive sell values.' },
     ].map((s) => (
      <div key={s.stage} className="border-b border-border p-3 last:border-0">
       <span className="text-xs font-bold text-foreground">{s.stage}</span>
       <p className="mt-1 text-sm text-foreground"><strong>{s.crops}</strong></p>
       <p className="text-xs text-muted-foreground">{s.tip}</p>
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
     <Link href="/games/grow-a-garden-2/seed-packs" className="text-sm text-foreground underline hover:no-underline">Seed Packs</Link>
    </div>
   </div>
  </main>
 );
}
