import Link from 'next/link';
import Image from 'next/image';
import { createGAG2Metadata, gag2Gears, gag2Images } from '@/lib/grow-a-garden-2';

const gearImageMap: Record<string, string> = {
 'Common Watering Can': 'common-watering-can',
 'Super Watering Can': 'super-watering-can-gag-2',
 'Common Sprinkler': 'common-sprinkler',
 'Uncommon Sprinkler': 'uncommon-sprinkler-gear-gag-2',
 'Rare Sprinkler': 'rare-sprinkler-gag-2',
 'Legendary Sprinkler': 'legendary-sprinkler-gag-2',
 'Super Sprinkler': 'super-sprinkler-gag-2',
 'Speed Mushroom': 'speed-mushroom-gag-2',
 'Jump Mushroom': 'jump-mushroom-gag-2',
 'Shrink Mushroom': 'shrink-mushroom-gag-2',
 'Supersize Mushroom': 'supersize-mushroom-gag-2',
 'Invisibility Mushroom': 'invisibility-mushroom-gag-2',
 'Wheelbarrow': 'wheelbarrow-gag-2',
 'Gnome': 'gnome-gag-2',
 'Flashbang': 'flashbang-gag-2',
 'Trowel': 'trowel-gear-gag-2',
 'Lantern': 'lantern-gag-2',
 'Sign (Hello Sign)': 'sign-full',
 'Teleporter': 'teleporter-gag-2',
};

const title = 'Grow a Garden 2 All Gears Guide: Prices, Effects & Best Gears to Buy';
const description =
 'Every gear in Grow a Garden 2 with prices and effects. Watering Cans, Sprinklers (Common to Super), Mushrooms (Speed, Jump, Shrink, Supersize, Invisibility), Gnome, Flashbang, Basic Pot, Wheelbarrow, Trowel, Lantern, Teleporter, and Robux-only gears (Rainbow Carpet, Vine Wrapper, Freeze Ray, Power Hose).';
const canonical = '/games/grow-a-garden-2/gears';

export const metadata = createGAG2Metadata({ title, description, canonical });

const categories = [
 {
  name: 'Watering Tools',
  desc: 'One-time use items that accelerate crop growth.',
  gears: gag2Gears.filter((g) => g.category === 'Watering'),
 },
 {
  name: 'Sprinklers',
  desc: 'Placeable area-effect watering. Place on the ground near crops for continuous growth boost.',
  gears: gag2Gears.filter((g) => g.category === 'Sprinkler'),
 },
 {
  name: 'Mushrooms',
  desc: 'Consumable buffs that last about 1 minute each.',
  gears: gag2Gears.filter((g) => g.category === 'Mushroom'),
 },
 {
  name: 'Defense',
  desc: 'Protect your garden from thieves and intruders.',
  gears: gag2Gears.filter((g) => g.category === 'Defense'),
 },
 {
  name: 'Utility',
  desc: 'Miscellaneous tools for gardening, movement, and communication.',
  gears: gag2Gears.filter((g) => g.category === 'Utility'),
 },
];

const robuxGears = [
 { name: 'Rainbow Carpet', emoji: '🪄', cost: '599 Robux', effect: 'Fly anywhere on the map' },
 { name: 'Vine Wrapper', emoji: '🌿', cost: '499 Robux', effect: 'Wraps players in vines, immobilizing them' },
 { name: 'Freeze Ray', emoji: '❄️', cost: '749 Robux', effect: 'Freezes a player into an ice cube' },
 { name: 'Power Hose', emoji: '🔫', cost: '299 Robux', effect: 'Sprays and pushes players away' },
];

const faqs = [
 {
  q: 'What is "Speed Hub" in Grow a Garden 2?',
  a: '"Speed Hub" does not exist as a gear or item. Players searching for this are almost certainly looking for the <strong>Speed Mushroom</strong> (1,500 Sheckles), which increases walk speed for about 1 minute. Buy it from George at the Gear Shop.',
 },
 {
  q: 'Is there a Magnet in Grow a Garden 2?',
  a: 'No. There is no Magnet gear or pet ability in Grow a Garden 2. This may be confusion with another Roblox game or a feature from the original Grow a Garden. No gear or pet collects items automatically via magnetism.',
 },
 {
  q: 'What is the best gear for beginners?',
  a: 'The <strong>Common Watering Can</strong> (2,000 Sheckles) and <strong>Common Sprinkler</strong> (3,000 Sheckles) are the best early purchases. They accelerate crop growth dramatically for minimal cost. Skip expensive gears until you have a stable income.',
 },
 {
  q: 'How often does the Gear Shop restock?',
  a: 'The Gear Shop (NPC George) rotates its inventory every <strong>5 minutes</strong>. If the item you want is not available, wait and check back. There is no way to force a restock.',
 },
];

export default function GAG2GearsPage() {
 return (
  <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>

   <p className="mt-3 text-base text-muted-foreground leading-relaxed">
    Gears are purchased from <strong>George</strong> at the Gear Shop in the central hub.
    The shop <strong>rotates every 5 minutes</strong> — not all gears are available at once.
    Some gears can also be bought with <strong>Robux</strong>. There are <strong>{gag2Gears.length} Sheckles-purchasable gears</strong> plus 4 Robux-only gears.
   </p>

   <div className="mt-4 rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
    <p className="text-sm font-bold text-blue-900">🔍 Search Note</p>
    <p className="mt-1 text-sm text-blue-800">
     Players searching for "Speed Hub" or "Magnet" — these items <strong>do not exist</strong> in Grow a Garden 2.
     "Speed Hub" is likely the <strong>Speed Mushroom</strong>. "Magnet" is not a feature in this game.
    </p>
   </div>

   <div className="mt-6 grid gap-2 sm:grid-cols-3">
    {[
     { label: 'Best Early Buy', item: 'Common Sprinkler (3K)', reason: '2 min of 1.5× growth' },
     { label: 'Best Value', item: 'Speed Mushroom (1.5K)', reason: 'Cheap speed for night raids' },
     { label: 'Best Defense', item: 'Gnome (50K)', reason: 'Auto-defends at night' },
    ].map((pick) => (
     <div key={pick.label} className="rounded-lg border border-border bg-mist p-3">
      <span className="text-[10px] font-bold text-muted-foreground uppercase">{pick.label}</span>
      <p className="text-sm font-bold text-foreground">{pick.item}</p>
      <p className="text-xs text-muted-foreground">{pick.reason}</p>
     </div>
    ))}
   </div>

   {categories.map((cat) => (
    <section key={cat.name} className="mt-8">
     <h2 className="text-xl font-bold text-foreground">{cat.name}</h2>
     <p className="mb-2 text-sm text-muted-foreground">{cat.desc}</p>
     <div className="overflow-x-auto rounded-lg border border-border bg-white">
      <table className="w-full text-sm">
       <thead>
        <tr className="border-b border-border bg-mist">
         <th className="px-3 py-2 text-left font-medium text-muted-foreground">Gear</th>
         <th className="px-3 py-2 text-left font-medium text-muted-foreground">Rarity</th>
         <th className="px-3 py-2 text-left font-medium text-muted-foreground">Price</th>
         <th className="px-3 py-2 text-left font-medium text-muted-foreground">Effect</th>
        </tr>
       </thead>
       <tbody>
        {cat.gears.map((g) => (
         <tr key={g.name} className="border-b border-border last:border-0 hover:bg-mist/50">
          <td className="px-3 py-2">
           <div className="flex items-center gap-3">
            {gearImageMap[g.name] ? (
             <Image src={gag2Images.gear(gearImageMap[g.name])} alt={g.name} width={36} height={36} className="rounded" />
            ) : (
             <span className="text-xl">{g.emoji}</span>
            )}
            <span className="font-semibold text-foreground">{g.name}</span>
           </div>
          </td>
          <td className="px-3 py-2 text-xs text-muted-foreground">{g.rarity}</td>
          <td className="px-3 py-2 text-xs text-foreground font-medium">{g.costSheckles}{g.costRobux ? ` / ${g.costRobux} Robux` : ''}</td>
          <td className="px-3 py-2 text-xs text-muted-foreground">{g.effect}</td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>
    </section>
   ))}

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Robux-Only Gears</h2>
    <p className="mb-2 text-sm text-muted-foreground">These gears can only be purchased with Robux and are always available.</p>
    <div className="overflow-x-auto rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead>
       <tr className="border-b border-border bg-mist">
        <th className="px-3 py-2 text-left font-medium text-muted-foreground">Gear</th>
        <th className="px-3 py-2 text-left font-medium text-muted-foreground">Cost</th>
        <th className="px-3 py-2 text-left font-medium text-muted-foreground">Effect</th>
       </tr>
      </thead>
      <tbody>
       {robuxGears.map((g) => (
        <tr key={g.name} className="border-b border-border last:border-0">
         <td className="px-3 py-2 font-semibold text-foreground">{g.emoji} {g.name}</td>
         <td className="px-3 py-2 text-xs text-foreground font-medium">{g.cost}</td>
         <td className="px-3 py-2 text-xs text-muted-foreground">{g.effect}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">FAQ</h2>
    <div className="mt-3 space-y-3">
     {faqs.map((faq) => (
      <div key={faq.q} className="rounded-lg border border-border bg-white p-4">
       <h3 className="text-sm font-bold text-foreground">{faq.q}</h3>
       <p className="mt-1 text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.a }} />
      </div>
     ))}
    </div>
   </section>

   <div className="mt-8 rounded-lg border border-border bg-mist p-5">
    <h3 className="mb-3 text-sm font-bold text-foreground">More Guides</h3>
    <div className="flex flex-wrap gap-3">
     <Link href="/games/grow-a-garden-2" className="text-sm text-foreground underline hover:no-underline">Guide Hub</Link>
     <Link href="/games/grow-a-garden-2/pets" className="text-sm text-foreground underline hover:no-underline">All Pets</Link>
     <Link href="/games/grow-a-garden-2/wheelbarrow" className="text-sm text-foreground underline hover:no-underline">Wheelbarrow</Link>
     <Link href="/games/grow-a-garden-2/seeds" className="text-sm text-foreground underline hover:no-underline">Seeds & Plants</Link>
    </div>
   </div>

   <p className="mt-8 text-xs text-muted-foreground">
    Data verified across TheGamer, IGN, ProGameGuides, TechWiser, AllThingsHow, Beebom, and Roonby. Last updated June 15, 2026.
   </p>
  </main>
 );
}
