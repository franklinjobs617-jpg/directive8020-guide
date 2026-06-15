import Link from 'next/link';
import Image from 'next/image';
import { createGAG2Metadata, gag2Images } from '@/lib/grow-a-garden-2';

const title = 'Grow a Garden 2 Wheelbarrow Guide: What It Does, How to Get It & Is It Worth 500K?';
const description =
 'What does the Wheelbarrow do in Grow a Garden 2? How to get it (500,000 Sheckles or 129 Robux), how to use it to carry players, and whether it is worth buying compared to pets and other gears.';
const canonical = '/games/grow-a-garden-2/wheelbarrow';

export const metadata = createGAG2Metadata({ title, description, canonical });

export default function GAG2WheelbarrowPage() {
 return (
  <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>

   <div className="mt-4 rounded-lg border-2 border-yellow-200 bg-yellow-50 p-4">
    <p className="text-sm font-bold text-yellow-900">🔥 Trending</p>
    <p className="mt-1 text-sm text-yellow-800">This is currently the #1 most searched Grow a Garden 2 topic — a Breakout trend on Google.</p>
   </div>

   <div className="mt-6 overflow-hidden rounded-lg border border-border bg-white">
    <Image src={gag2Images.gear('wheelbarrow-gag-2')} alt="Grow a Garden 2 Wheelbarrow gear" width={200} height={200} className="mx-auto" />
    <p className="border-t border-border bg-mist px-4 py-2 text-xs text-muted-foreground text-center">The Wheelbarrow — Legendary gear (500K Sheckles / 129 Robux)</p>
   </div>

   <section className="mt-6">
    <h2 className="text-xl font-bold text-foreground">What the Wheelbarrow Does</h2>
    <div className="mt-3 space-y-2 text-sm text-muted-foreground">
     <p>The Wheelbarrow has <strong>two uses</strong>:</p>
     <ol className="ml-4 space-y-2 list-decimal">
      <li><strong>Pick up other players</strong> — Equip the Wheelbarrow and run into another player to scoop them up. Useful for moving thieves away from your garden, carrying friends, or just messing around.</li>
      <li><strong>Ride it as a vehicle</strong> — Place it on the ground and hop in for a <strong>small movement speed boost</strong>. This helps during night raids or when escaping with stolen crops.</li>
     </ol>
    </div>
   </section>

   <section className="mt-6">
    <h2 className="text-xl font-bold text-foreground">How to Get the Wheelbarrow</h2>
    <ol className="mt-3 space-y-2">
     {[
      'Go to the <strong>Gear Shop</strong> in the center of the map (look for NPC <strong>George</strong>).',
      'The shop inventory <strong>rotates every 5 minutes</strong> — the Wheelbarrow is not always in stock.',
      'Keep checking back until it appears. There is no guaranteed spawn time.',
      'Purchase for <strong>500,000 Sheckles</strong> (in-game currency) or <strong>129 Robux</strong>.',
     ].map((step, i) => (
      <li key={i} className="flex gap-3">
       <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground text-[11px] font-bold text-white">{i + 1}</span>
       <span className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: step }} />
      </li>
     ))}
    </ol>
   </section>

   <section className="mt-6">
    <h2 className="text-xl font-bold text-foreground">Is the Wheelbarrow Worth Buying?</h2>
    <div className="mt-3 grid gap-3 sm:grid-cols-2">
     <div className="rounded-lg border border-red-200 bg-red-50 p-4">
      <h3 className="text-sm font-bold text-red-900">Skip It If…</h3>
      <ul className="mt-2 space-y-1 text-xs text-red-800">
       <li>• You are still building your farm income</li>
       <li>• You do not have defensive pets yet (Bee = 1M)</li>
       <li>• 500K Sheckles is a significant amount for you</li>
       <li>• You are a solo player (no friends to carry)</li>
      </ul>
     </div>
     <div className="rounded-lg border border-green-200 bg-green-50 p-4">
      <h3 className="text-sm font-bold text-green-900">Buy It If…</h3>
      <ul className="mt-2 space-y-1 text-xs text-green-800">
       <li>• You play with friends and want to mess around</li>
       <li>• You want the speed boost for night raids</li>
       <li>• You are a collector who wants all Legendary items</li>
       <li>• 500K is pocket change for your farm</li>
      </ul>
     </div>
    </div>
    <p className="mt-3 text-sm text-muted-foreground">
     <strong>Verdict:</strong> The Wheelbarrow is mostly a <strong>novelty/fun item</strong>. For practical defense, invest in a Bee (1M Sheckles) or Black Dragon instead. For speed, the Speed Mushroom (1,500 Sheckles) gives a temporary boost at a fraction of the cost.
    </p>
   </section>

   <div className="mt-8 rounded-lg border border-border bg-mist p-5">
    <h3 className="mb-3 text-sm font-bold text-foreground">More Guides</h3>
    <div className="flex flex-wrap gap-3">
     <Link href="/games/grow-a-garden-2" className="text-sm text-foreground underline hover:no-underline">Guide Hub</Link>
     <Link href="/games/grow-a-garden-2/pets" className="text-sm text-foreground underline hover:no-underline">All Pets</Link>
     <Link href="/games/grow-a-garden-2/gears" className="text-sm text-foreground underline hover:no-underline">All Gears</Link>
    </div>
   </div>
  </main>
 );
}
