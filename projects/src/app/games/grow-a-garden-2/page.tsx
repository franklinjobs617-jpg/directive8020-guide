import Link from 'next/link';
import Image from 'next/image';
import { createGAG2Metadata, gag2QuickFacts, gag2Images } from '@/lib/grow-a-garden-2';

const title = 'Grow a Garden 2 Guide: Pets, Codes, Seeds, Gears & Beginner Tips';
const description =
 'Complete Grow a Garden 2 guide hub for Roblox. All pets with prices and abilities, active codes, best seeds, all gears, guild system, seed packs, and beginner tips for making Sheckles fast.';
const canonical = '/games/grow-a-garden-2';

export const metadata = createGAG2Metadata({ title, description, canonical });

const guideCards = [
 { title: 'All Pets Guide', href: '/games/grow-a-garden-2/pets', desc: '12 pets with prices, abilities, rarities, and tier rankings.', emoji: '🐾' },
 { title: 'Wheelbarrow Guide', href: '/games/grow-a-garden-2/wheelbarrow', desc: 'What it does, how to get it, and is it worth 500K?', emoji: '🛒' },
 { title: 'All Gears Guide', href: '/games/grow-a-garden-2/gears', desc: '20+ gears: Sprinklers, Mushrooms, Gnome, Teleporter, more.', emoji: '🔧' },
 { title: 'Seeds & Plants Guide', href: '/games/grow-a-garden-2/seeds', desc: 'Carrot to Dragon\'s Breath. Best crops for every stage.', emoji: '🌱' },
 { title: 'Active Codes', href: '/games/grow-a-garden-2/codes', desc: 'TEAMGREENBEAN and more. Updated daily.', emoji: '🎫' },
 { title: 'Guilds Guide', href: '/games/grow-a-garden-2/guild', desc: 'Create, join, rewards, roles, weekly competitions.', emoji: '🏛️' },
 { title: 'Seed Packs Guide', href: '/games/grow-a-garden-2/seed-packs', desc: 'Ghost Pepper Pack: odds, costs, exclusive seeds.', emoji: '📦' },
];

export default function GAG2HubPage() {
 return (
  <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
   <div className="flex items-center gap-4 mb-4">
    <Image src={gag2Images.icon} alt="Grow a Garden 2 icon" width={80} height={80} className="rounded-xl" />
    <div>
     <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>
     <p className="mt-1 text-sm text-muted-foreground">
      By <strong>Jandel</strong> (The Garden Game) · Released June 12, 2026 · 124M+ Visits · Roblox
     </p>
    </div>
   </div>
   <p className="mt-3 text-base text-muted-foreground leading-relaxed">
    Grow a Garden 2 is a Roblox farming simulator and idle tycoon. Plant seeds, harvest crops for
    Sheckles, collect pets with unique abilities, join guilds to compete for weekly rewards, upgrade
    your garden with gears, and steal from other players at night. This guide hub covers every system.
   </p>

   <div className="mt-6 grid gap-3 sm:grid-cols-2">
    {gag2QuickFacts.map(([label, value]) => (
     <div key={label} className="rounded-lg border border-border bg-white p-3">
      <span className="text-xs text-muted-foreground">{label}</span>
      <p className="text-sm font-semibold text-foreground">{value}</p>
     </div>
    ))}
   </div>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Guides</h2>
    <div className="mt-3 grid gap-3 sm:grid-cols-2">
     {guideCards.map((card) => (
      <Link key={card.href} href={card.href} className="rounded-lg border border-border bg-white p-4 hover:border-foreground/20 transition-colors">
       <span className="text-2xl">{card.emoji}</span>
       <h3 className="mt-2 text-sm font-bold text-foreground">{card.title}</h3>
       <p className="mt-1 text-xs text-muted-foreground">{card.desc}</p>
      </Link>
     ))}
    </div>
   </section>

   <p className="mt-10 text-xs text-muted-foreground">
    Data verified across 12 sources. Last updated June 15, 2026. Game launched June 12, 2026 — 124M+ visits.
   </p>
  </main>
 );
}
