import Link from 'next/link';
import { createGAG2Metadata } from '@/lib/grow-a-garden-2';

const title = 'Grow a Garden 2 Guilds Guide: How to Create, Join & Earn Rewards';
const description =
 'Complete guilds guide for Grow a Garden 2. How to create a guild (99 Robux), how to join (invite-only via mailbox), guild roles (Owner/Elder/Member), weekly competitions, and how guild scoring works.';
const canonical = '/games/grow-a-garden-2/guild';

export const metadata = createGAG2Metadata({ title, description, canonical });

export default function GAG2GuildPage() {
 return (
  <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>

   <section className="mt-6">
    <h2 className="text-lg font-bold text-foreground">How to Create a Guild</h2>
    <ol className="mt-2 space-y-2">
     {[
      'Go to the central hub and speak to <strong>Gilbert</strong> at the Guild Stand.',
      'Choose a <strong>Guild Name</strong>, <strong>Guild Tag</strong>, and <strong>Description</strong>.',
      'Pick custom colors for your guild name and tag.',
      'Pay <strong>99 Robux</strong> to create the guild.',
      '<strong>Default member limit: 20.</strong> Max: 50 (expand with additional Robux).',
     ].map((step, i) => (
      <li key={i} className="flex gap-3">
       <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground text-[11px] font-bold text-white">{i + 1}</span>
       <span className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: step }} />
      </li>
     ))}
    </ol>
   </section>

   <section className="mt-6">
    <h2 className="text-lg font-bold text-foreground">How to Join a Guild</h2>
    <div className="mt-2 rounded-lg border-2 border-red-200 bg-red-50 p-4">
     <p className="text-sm font-bold text-red-900">⚠️ Common Confusion</p>
     <p className="mt-1 text-sm text-red-800">
       There is <strong>no public guild browser</strong>. Joining is <strong>invite-only</strong>.
       And the invite <strong>goes to your garden mailbox</strong>, not to Gilbert at the Guild Stand.
       This is the #1 reason players cannot figure out how to join.
     </p>
    </div>
    <ol className="mt-3 space-y-2">
     {[
      'Get invited by a guild <strong>Owner</strong> or <strong>Elder</strong> through their guild menu.',
      'Go to the <strong>mailbox in front of your garden</strong> (NOT the Guild Stand).',
      'Open the <strong>Mail</strong> tab and click <strong>Join</strong>.',
     ].map((step, i) => (
      <li key={i} className="flex gap-3">
       <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground text-[11px] font-bold text-white">{i + 1}</span>
       <span className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: step }} />
      </li>
     ))}
    </ol>
   </section>

   <section className="mt-6">
    <h2 className="text-lg font-bold text-foreground">Guild Roles</h2>
    <div className="mt-2 overflow-hidden rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead><tr className="border-b border-border bg-mist"><th className="px-3 py-2 text-left font-medium text-muted-foreground">Role</th><th className="px-3 py-2 text-left font-medium text-muted-foreground">Permissions</th><th className="px-3 py-2 text-left font-medium text-muted-foreground">Limit</th></tr></thead>
      <tbody>
       {[{role:'Owner',perm:'Founder — invite, promote, disband guild',limit:'1'},{role:'Elder',perm:'Officer — can invite new players',limit:'Max 5'},{role:'Member',perm:'Standard — cannot invite',limit:'Up to 20-50'}].map(r=>(<tr key={r.role} className="border-b border-border last:border-0"><td className="px-3 py-2 font-semibold text-foreground">{r.role}</td><td className="px-3 py-2 text-xs text-muted-foreground">{r.perm}</td><td className="px-3 py-2 text-xs text-foreground">{r.limit}</td></tr>))}
      </tbody>
     </table>
    </div>
   </section>

   <section className="mt-6">
    <h2 className="text-lg font-bold text-foreground">Weekly Rewards</h2>
    <p className="mt-2 text-sm text-muted-foreground">
      Each week, guilds compete in rankings based on the <strong>combined weight of every member's heaviest crop</strong>
      (1 point per gram). Higher placements earn better rewards. This encourages teamwork and active farming.
    </p>
   </section>

   <div className="mt-8 rounded-lg border border-border bg-mist p-5">
    <h3 className="mb-3 text-sm font-bold text-foreground">More Guides</h3>
    <div className="flex flex-wrap gap-3">
     <Link href="/games/grow-a-garden-2" className="text-sm text-foreground underline hover:no-underline">Guide Hub</Link>
     <Link href="/games/grow-a-garden-2/codes" className="text-sm text-foreground underline hover:no-underline">Codes</Link>
     <Link href="/games/grow-a-garden-2/seed-packs" className="text-sm text-foreground underline hover:no-underline">Seed Packs</Link>
    </div>
   </div>
  </main>
 );
}
