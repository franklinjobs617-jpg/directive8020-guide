import Link from 'next/link';
import Image from 'next/image';
import { createGAG2Metadata, gag2Codes, gag2Images } from '@/lib/grow-a-garden-2';

const title = 'Grow a Garden 2 Codes (June 2026): All Active Codes & How to Redeem';
const description =
 'All working Grow a Garden 2 codes for June 2026. TEAMGREENBEAN gives 3Ã Green Bean Seeds. How to redeem codes, where new codes are announced (Discord, X/Twitter, YouTube), and expired codes list. Updated daily.';
const canonical = '/games/grow-a-garden-2/codes';

export const metadata = createGAG2Metadata({ title, description, canonical });

export default function GAG2CodesPage() {
 return (
  <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>

   <div className="mt-6 flex items-center gap-4 rounded-lg border border-border bg-gradient-to-r from-green-50 to-blue-50 p-5">
    <Image src={gag2Images.icon} alt="Grow a Garden 2" width={64} height={64} className="rounded-xl" />
    <div>
     <p className="text-sm font-bold text-foreground">Codes checked June 15, 2026</p>
     <p className="text-xs text-muted-foreground">Codes are case-sensitive. Redeem quickly â?they can expire without notice.</p>
    </div>
   </div>

   <section className="mt-6">
    <h2 className="text-lg font-bold text-foreground">â?Active Codes</h2>
    <div className="mt-3 overflow-hidden rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead>
       <tr className="border-b border-border bg-mist">
        <th className="px-4 py-2 text-left font-medium text-muted-foreground">Code</th>
        <th className="px-4 py-2 text-left font-medium text-muted-foreground">Reward</th>
        <th className="px-4 py-2 text-left font-medium text-muted-foreground">Verified</th>
       </tr>
      </thead>
      <tbody>
       {gag2Codes.map((c) => (
        <tr key={c.code} className="border-b border-border last:border-0 bg-green-50">
         <td className="px-4 py-2 font-mono font-bold text-green-800 text-base">{c.code}</td>
         <td className="px-4 py-2 text-green-800">{c.reward}</td>
         <td className="px-4 py-2 text-xs text-muted-foreground">{c.verified}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </section>

   <section className="mt-6">
    <h2 className="text-lg font-bold text-foreground">How to Redeem Codes</h2>
    <ol className="mt-2 space-y-2">
     {[
      'Launch <strong>Grow a Garden 2</strong> on Roblox.',
      'Click the <strong>Settings cog</strong> (gear icon) in the top-left corner.',
      'Type or paste the code into the <strong>code box</strong>. Codes are case-sensitive â?copy exactly.',
      'Click <strong>Claim!</strong> to receive your reward.',
     ].map((step, i) => (
      <li key={i} className="flex gap-3">
       <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground text-[11px] font-bold text-white">{i + 1}</span>
       <span className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: step }} />
      </li>
     ))}
    </ol>
   </section>

   <section className="mt-6">
    <h2 className="text-lg font-bold text-foreground">Where New Codes Are Announced</h2>
    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
     <li>â?<strong>Official Discord Server</strong> â?announcements channel (primary source)</li>
     <li>â?<strong>X/Twitter:</strong> @GrowaGardenRblx</li>
     <li>â?<strong>YouTube:</strong> @GrowaGarden</li>
     <li>â?<strong>Roblox Group:</strong> The Garden Game</li>
    </ul>
    <p className="mt-3 text-xs text-muted-foreground">
     This page was last checked on June 15, 2026. Codes can expire without notice â?redeem them ASAP.
     Bookmark this page and check back for updates.
    </p>
   </section>

   <div className="mt-8 rounded-lg border border-border bg-mist p-5">
    <h3 className="mb-3 text-sm font-bold text-foreground">More Guides</h3>
    <div className="flex flex-wrap gap-3">
     <Link href="/games/grow-a-garden-2" className="text-sm text-foreground underline hover:no-underline">Guide Hub</Link>
     <Link href="/games/grow-a-garden-2/pets" className="text-sm text-foreground underline hover:no-underline">All Pets</Link>
     <Link href="/games/grow-a-garden-2/seeds" className="text-sm text-foreground underline hover:no-underline">Seeds & Plants</Link>
     <Link href="/games/grow-a-garden-2/guild" className="text-sm text-foreground underline hover:no-underline">Guilds</Link>
    </div>
   </div>
  </main>
 );
}
