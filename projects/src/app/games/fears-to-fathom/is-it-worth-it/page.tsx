import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { createFearsToFathomMetadata, fearsToFathomImages } from '@/lib/fears-to-fathom';

const title = 'Is Fears to Fathom: Scratch Creek Worth It in 2026? Co-op Only, Price & Reviews';
const description =
 'Is Fears to Fathom: Scratch Creek worth buying? Co-op only analysis, HK$48 price, 2-3 hour length, horror level, Steam reviews, and who should buy or wait.';
const canonical = '/games/fears-to-fathom/is-it-worth-it';

export const metadata = createFearsToFathomMetadata({ title, description, canonical, image: fearsToFathomImages.hero });

export default function FearsToFathomWorthItPage() {
 return (
  <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>

   <p className="mt-4 text-base leading-relaxed text-foreground font-semibold">
    Fears to Fathom: Scratch Creek is a short co-op horror experience priced at HK$48 (~$6.14 USD). The biggest factor in your buying decision is whether you have a partner to play with.
   </p>

   <ArticleImage
    src={fearsToFathomImages.hero}
    alt="Fears to Fathom: Scratch Creek header image"
    caption="Scratch Creek costs HK$48 and takes 2-3 hours. The co-op only requirement is the biggest factor in whether it\u2019s worth buying."
   />

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Buying Decision Matrix</h2>
    <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead>
       <tr className="border-b border-border bg-mist/40">
        <th className="px-4 py-3 text-left font-semibold text-foreground">You should buy if...</th>
        <th className="px-4 py-3 text-left font-semibold text-foreground">You should wait if...</th>
       </tr>
      </thead>
      <tbody>
       {[
        ['You have a friend who also owns or will buy the game', 'You want to play solo \u2014 there is no single player mode'],
        ['You enjoy walking simulator horror games', 'You expect action or combat gameplay'],
        ['You are a fan of the Fears to Fathom series', 'You need more than 3 hours of content for $6'],
        ['You and your partner enjoy shared horror experiences', 'You have an unstable internet connection (co-op required)'],
        ['You want a short, atmospheric experience you can finish in one evening', 'You are looking for replay value beyond two endings'],
       ].map(([buy, wait]) => (
        <tr key={buy} className="border-b border-border last:border-0 hover:bg-mist/30">
         <td className="px-4 py-3 text-muted-foreground">{buy}</td>
         <td className="px-4 py-3 text-muted-foreground">{wait}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Price & Value</h2>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
     At HK$48 (~$6.14 USD), the price is low but so is the content length. 2-3 hours for one playthrough, 4-5 hours for 100% completion. That works out to roughly $2-3 per hour of entertainment, which is reasonable for a horror walking simulator. The Fears to Fathom Bundle (5 games at 10% off for HK$221.40) is better value if you are new to the series.
    </p>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">The Co-op Only Controversy</h2>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
     The biggest criticism of Scratch Creek is the co-op only requirement. Multiple Steam discussion threads complain about the lack of single player. This is a legitimate concern. If you do not have a reliable co-op partner, the game is unplayable. The matchmaking system exists but finding random partners may be difficult depending on the player count at your playtime.
    </p>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Verdict</h2>
    <div className="mt-4 rounded-lg border-2 border-emerald-200 bg-emerald-50 p-5">
     <p className="text-sm leading-relaxed text-emerald-900">
      <strong>Buy if you have a co-op partner.</strong> Fears to Fathom: Scratch Creek delivers a solid 2-3 hour horror experience with atmospheric environments, decent jump scares, and an interesting story. The co-op twist on the Fears to Fathom formula is well-executed.
     </p>
     <p className="mt-2 text-sm leading-relaxed text-emerald-900">
      <strong>Skip if you want to play solo.</strong> There is no single player mode, and the game is not designed for it. Wait for a sale or check if the developer adds solo support in a future update.
     </p>
    </div>
   </section>

   <div className="mt-8 flex gap-4">
    <Link href="/games/fears-to-fathom/achievements" className="text-sm text-foreground underline hover:no-underline">&larr; Achievements</Link>
   </div>

   <p className="mt-10 text-xs text-muted-foreground">
    Reference note: Steam store page, Steam Community discussions, Fears to Fathom Fandom Wiki. Last updated June 11, 2026.
   </p>
  </main>
 );
}
