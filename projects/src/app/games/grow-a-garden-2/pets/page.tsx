import Link from 'next/link';
import Image from 'next/image';
import { createGAG2Metadata, gag2Pets, gag2Images } from '@/lib/grow-a-garden-2';

const title = 'Grow a Garden 2 All Pets Guide: Prices, Abilities, Rarities & Tier List';
const description =
 'Complete database of all 12 pets in Grow a Garden 2. Every pet with price (Sheckles), ability, rarity, tier ranking, how to get them, which pets to buy first, and best pets for defense/income/speed.';
const canonical = '/games/grow-a-garden-2/pets';

export const metadata = createGAG2Metadata({ title, description, canonical, image: gag2Images.pet('bunny') });

const rarityColors: Record<string, string> = {
 Common: 'bg-gray-100 text-gray-700',
 Uncommon: 'bg-green-100 text-green-700',
 Rare: 'bg-blue-100 text-blue-700',
 Legendary: 'bg-purple-100 text-purple-700',
 Mythic: 'bg-pink-100 text-pink-700',
 Super: 'bg-orange-100 text-orange-700',
};

const tierColors: Record<string, string> = {
 S: 'bg-yellow-100 text-yellow-800',
 A: 'bg-green-100 text-green-700',
 B: 'bg-blue-100 text-blue-700',
 C: 'bg-gray-100 text-gray-600',
};

export default function GAG2PetsPage() {
 return (
  <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>
   <p className="mt-3 text-base text-muted-foreground leading-relaxed">
    There are <strong>12 pets</strong> in Grow a Garden 2. Pets spawn randomly in the lobby with a countdown timer —
    buy them before they despawn. Other players can outbid you by paying double. After purchase,
    escort the pet to your garden to finalize ownership. You start with <strong>3 pet slots</strong>.
    Slot 4 costs 200,000 Sheckles, Slot 5 costs 1,000,000.
   </p>

   <section className="mt-6">
    <h2 className="text-lg font-bold text-foreground">Quick Picks</h2>
    <div className="mt-2 grid gap-2 sm:grid-cols-3">
     {[
      { label: 'Best First Pet', pet: 'Bunny (20K)', reason: '+5 Speed for escaping thieves' },
      { label: 'Best Value', pet: 'Deer (50K)', reason: '+10% growth stacks infinitely' },
      { label: 'Best Defense', pet: 'Bee (1M)', reason: 'Auto-defends at low cost' },
     ].map((pick) => (
      <div key={pick.label} className="rounded-lg border border-border bg-mist p-3">
       <span className="text-[10px] font-bold text-muted-foreground uppercase">{pick.label}</span>
       <p className="text-sm font-bold text-foreground">{pick.pet}</p>
       <p className="text-xs text-muted-foreground">{pick.reason}</p>
      </div>
     ))}
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">All Pets Database</h2>
    <div className="mt-3 overflow-x-auto rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead>
       <tr className="border-b border-border bg-mist">
        <th className="px-3 py-3 text-left font-medium text-muted-foreground w-10">#</th>
        <th className="px-3 py-3 text-left font-medium text-muted-foreground">Pet</th>
        <th className="px-3 py-3 text-left font-medium text-muted-foreground">Rarity</th>
        <th className="px-3 py-3 text-left font-medium text-muted-foreground">Price</th>
        <th className="px-3 py-3 text-left font-medium text-muted-foreground">Ability</th>
        <th className="px-3 py-3 text-center font-medium text-muted-foreground w-12">Tier</th>
       </tr>
      </thead>
      <tbody>
       {gag2Pets.map((pet, i) => (
        <tr key={pet.name} className="border-b border-border last:border-0 hover:bg-mist/50">
         <td className="px-3 py-3 text-center">
          {pet.imageKey ? (
           <Image src={gag2Images.pet(pet.imageKey)} alt={pet.name} width={32} height={32} className="rounded" />
          ) : (
           <span className="text-lg">{pet.emoji}</span>
          )}
         </td>
         <td className="px-3 py-3 font-semibold text-foreground">{pet.name} <span className="text-base">{pet.emoji}</span></td>
         <td className="px-3 py-3"><span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${rarityColors[pet.rarity]}`}>{pet.rarity}</span></td>
         <td className="px-3 py-3 text-foreground font-medium">{pet.costSheckles}</td>
         <td className="px-3 py-3 text-muted-foreground text-xs leading-relaxed">{pet.ability}</td>
         <td className="px-3 py-3 text-center"><span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${tierColors[pet.tier]}`}>{pet.tier}</span></td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Tier List</h2>
    <div className="mt-3 grid gap-2">
     {(['S', 'A', 'B', 'C'] as const).map((tier) => {
      const pets = gag2Pets.filter((p) => p.tier === tier);
      return (
       <div key={tier} className="flex items-start gap-3 rounded-lg border border-border bg-white p-3">
        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${tierColors[tier]}`}>{tier}</span>
        <div className="flex flex-wrap gap-2">
         {pets.map((p) => (
          <span key={p.name} className="text-sm text-foreground">{p.emoji} {p.name}<span className="text-xs text-muted-foreground ml-1">({p.category})</span></span>
         ))}
        </div>
       </div>
      );
     })}
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">How to Get Pets</h2>
    <div className="mt-3 space-y-3 text-sm text-muted-foreground">
     <p><strong>1. Pets spawn randomly in the lobby.</strong> There is no pet shop. Each spawn has a visible countdown timer — buy before it expires or the pet despawns.</p>
     <p><strong>2. Other players can outbid you.</strong> If someone else buys the pet first, you can contest it by paying <strong>double the base price</strong>. This creates bidding wars for rare pets.</p>
     <p><strong>3. Escort the pet to your garden.</strong> After purchase, you must physically walk the pet back to your garden. During this walk, other players can still steal it.</p>
     <p><strong>4. Pet slots are limited.</strong> You start with 3 slots. Slot 4 costs <strong>200,000 Sheckles</strong>. Slot 5 costs <strong>1,000,000 Sheckles</strong>. Max: <strong>5 equipped pets</strong>.</p>
     <p><strong>5. Higher rarity = lower spawn chance.</strong> Legendary and Mythic pets trigger a server-wide alert when they spawn, so expect competition.</p>
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">FAQ</h2>
    <div className="mt-3 space-y-3">
     {[
      { q: 'What does the Deer do in Grow a Garden 2?', a: 'The Deer (50,000 Sheckles, Rare) makes plants grow <strong>10% faster</strong>. This effect stacks if you have multiple Deer — making it one of the best value pets in the game.' },
      { q: 'What does the Owl do in Grow a Garden 2?', a: 'The Owl (25,000 Sheckles, Uncommon) extends your <strong>night vision by 12.5%</strong> and hoots when a rare pet spawns nearby. It is more of a utility/alert pet than a farming pet.' },
      { q: 'What does the Gnome do in Grow a Garden 2?', a: 'In Grow a Garden 2, the <strong>Gnome is a Gear</strong> (50,000 Sheckles, Epic), not a pet. It blows away intruders who try to steal from your garden at night. See the <Link href="/games/grow-a-garden-2/gears" className="underline">Gears guide</Link> for details.' },
      { q: 'Which pet should I buy first?', a: 'Start with the <strong>Bunny</strong> (20,000 Sheckles) for the +5 speed boost — it helps you escape thieves. Then save for the <strong>Deer</strong> (50,000 Sheckles) for the 10% growth boost. The <strong>Bee</strong> (1,000,000 Sheckles) should be your first major purchase for automatic defense.' },
     ].map((faq) => (
      <div key={faq.q} className="rounded-lg border border-border bg-white p-4">
       <h3 className="text-sm font-bold text-foreground">{faq.q}</h3>
       <p className="mt-1 text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.a }} />
      </div>
     ))}
    </div>
   </section>

   <div className="mt-8 rounded-lg border border-border bg-mist p-5">
    <h3 className="mb-3 text-sm font-bold text-foreground">More Grow a Garden 2 Guides</h3>
    <div className="flex flex-wrap gap-3">
     <Link href="/games/grow-a-garden-2" className="text-sm text-foreground underline hover:no-underline">Guide Hub</Link>
     <Link href="/games/grow-a-garden-2/wheelbarrow" className="text-sm text-foreground underline hover:no-underline">Wheelbarrow</Link>
     <Link href="/games/grow-a-garden-2/gears" className="text-sm text-foreground underline hover:no-underline">All Gears</Link>
     <Link href="/games/grow-a-garden-2/seeds" className="text-sm text-foreground underline hover:no-underline">Seeds & Plants</Link>
     <Link href="/games/grow-a-garden-2/codes" className="text-sm text-foreground underline hover:no-underline">Codes</Link>
    </div>
   </div>
  </main>
 );
}
