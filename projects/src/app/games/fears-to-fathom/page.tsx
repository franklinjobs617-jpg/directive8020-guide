import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { createFearsToFathomMetadata, fearsToFathomImages, fearsToFathomQuickFacts } from '@/lib/fears-to-fathom';

const title = 'Fears to Fathom: Scratch Creek Guide — Walkthrough, Co-op Tips & Is It Worth It?';
const description =
 'Fears to Fathom: Scratch Creek is a co-op only psychological horror game released June 10, 2026. Find the full walkthrough, co-op guide, achievements, system requirements, and buying advice.';
const canonical = '/games/fears-to-fathom';

export const metadata = createFearsToFathomMetadata({ title, description, canonical });

export default function FearsToFathomHubPage() {
 return (
  <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>

   <p className="mt-4 text-base leading-relaxed text-muted-foreground">
    Fears to Fathom: Scratch Creek is the latest chapter in the Fears to Fathom series, released June 10, 2026. It is a <strong>co-op only</strong> psychological horror walking simulator — there is no single player mode. You play as Tessa or Marcus, a young couple stranded in the creepy town of Scratch Creek. Game length is about 2-3 hours. The game costs HK$48 (~$6.14 USD).
   </p>

   <div className="mt-6 grid gap-4 sm:grid-cols-2">
    {[
     ['/games/fears-to-fathom/co-op-guide', 'Can I Play Solo? + Co-op Guide', 'Fears to Fathom: Scratch Creek is co-op only with no single player. Learn how matchmaking works, how to find a partner, and what to expect from the co-op experience.'],
     ['/games/fears-to-fathom/walkthrough', 'Full Walkthrough', 'Chapter-by-chapter walkthrough covering every puzzle, key decision, and ending. Includes co-op specific notes and achievement tracking.'],
     ['/games/fears-to-fathom/achievements', 'All Achievements', 'Full achievement list with unlock conditions, secret achievements, and 100% completion guide for Fears to Fathom: Scratch Creek.'],
     ['/games/fears-to-fathom/is-it-worth-it', 'Is It Worth It?', 'Buying guide covering the co-op only controversy, price, game length, horror level, Steam reviews, and who should buy.'],
    ].map(([href, itemTitle, desc]) => (
     <Link key={href} href={href} className="rounded-lg border border-border bg-white p-5 transition-colors hover:border-muted-foreground">
      <h2 className="text-base font-bold text-foreground">{itemTitle}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
     </Link>
    ))}
   </div>

   <ArticleImage
    src={fearsToFathomImages.screenshot1}
    alt="Fears to Fathom: Scratch Creek gameplay screenshot showing the creepy town"
    caption="Scratch Creek is a co-op only psychological horror walking simulator from Rayll Studios, released June 10, 2026."
   />

   <section className="mt-10">
    <h2 className="text-xl font-bold text-foreground">Quick Facts</h2>
    <div className="mt-3 grid gap-2 sm:grid-cols-2">
     {fearsToFathomQuickFacts.map(([label, value]) => (
      <div key={label} className="rounded-md border border-border bg-mist/30 px-4 py-3">
       <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</span>
       <p className="mt-1 text-sm text-foreground">{value}</p>
      </div>
     ))}
    </div>
   </section>

   {[
    { q: 'Can I play Fears to Fathom: Scratch Creek solo?', a: 'No. Scratch Creek is co-op only with no single player mode. You must play with another player online. There is no AI partner or offline mode.' },
    { q: 'How long is Fears to Fathom: Scratch Creek?', a: 'Approximately 2-3 hours for a single playthrough. Getting both endings and all achievements will take 4-5 hours.' },
    { q: 'Does Fears to Fathom: Scratch Creek have multiple endings?', a: 'Yes. There are two endings based on key decisions during the story. See the walkthrough for exact choice points.' },
   ].map((faq) => (
    <section key={faq.q} className="mt-6 border-b border-border pb-4">
     <h3 className="text-base font-bold text-foreground">{faq.q}</h3>
     <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
    </section>
   ))}

   <p className="mt-10 text-xs text-muted-foreground">
    Data source: Steam store page, Fears to Fathom Fandom Wiki, in-game verification. Last updated June 11, 2026.
   </p>
  </main>
 );
}
