import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { createFearsToFathomMetadata, fearsToFathomImages, fearsToFathomQuickFacts } from '@/lib/fears-to-fathom';

const title = 'Fears to Fathom: Scratch Creek Guide - Solo, Co-op, Walkthrough, Endings & Achievements';
const description =
 'Start here for Fears to Fathom: Scratch Creek answers: whether you can play alone, how online co-op works, full walkthrough, endings, achievements, length, and buying advice.';
const canonical = '/games/fears-to-fathom';

export const metadata = createFearsToFathomMetadata({ title, description, canonical });

const quickAnswerRows = [
 ['Can you play alone?', 'No. Scratch Creek is online co-op only, with no solo mode and no AI partner.', '/games/fears-to-fathom/co-op-guide'],
 ['How many players?', 'Plan for two real players online. Do not buy it expecting couch co-op or a normal solo episode.', '/games/fears-to-fathom/co-op-guide'],
 ['How long is it?', 'Plan around 2-3 hours for one story run, longer if you replay endings or clean up achievements.', '/games/fears-to-fathom/length'],
 ['How many endings?', 'Use the endings guide before replaying, especially if you want both Marcus and Tessa outcomes.', '/games/fears-to-fathom/all-endings'],
 ['Should I buy it?', 'Buy only if you have a partner ready. Solo players should pick another Fears to Fathom episode first.', '/games/fears-to-fathom/is-it-worth-it'],
];

const guideMap = [
 ['/games/fears-to-fathom/co-op-guide', 'Can You Play Alone? + Co-op Guide', 'The first page to read: solo mode, online co-op, AI partner, split-screen, crossplay, disconnects, and partner setup.'],
 ['/games/fears-to-fathom/walkthrough', 'Full Walkthrough', 'Chapter route, puzzle notes, story choices, co-op pacing, and recovery points for a cleaner first run.'],
 ['/games/fears-to-fathom/all-endings', 'All Endings', 'Ending requirements, choice points, replay route, and what to check before starting a second run.'],
 ['/games/fears-to-fathom/achievements', 'All Achievements', 'Achievement list, missable goals, cleanup order, and 100% completion planning.'],
 ['/games/fears-to-fathom/length', 'Game Length', 'How long one run takes, how much endings and achievements add, and when a replay is worth it.'],
 ['/games/fears-to-fathom/is-it-worth-it', 'Is It Worth It?', 'Buying advice for solo players, co-op pairs, horror fans, price-sensitive players, and series newcomers.'],
];

const startRows = [
 ['Solo player', 'Do not start with this episode unless you have a partner. Scratch Creek does not offer a normal solo route.'],
 ['Two-player group', 'Read the co-op guide, decide who hosts, and keep communication clear before major story choices.'],
 ['Story-first player', 'Use the walkthrough only when stuck, then check endings after the first natural run.'],
 ['Completionist', 'Open achievements and endings before replaying so you do not waste a second run.'],
 ['Buyer on the fence', 'Use the worth-it page if the co-op-only design, short length, or price is your main concern.'],
];

export default function FearsToFathomHubPage() {
 return (
  <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>

   <p className="mt-4 text-base font-semibold leading-relaxed text-foreground">
    Start here if you are deciding whether Scratch Creek fits your setup: it is online co-op only, cannot be played alone, and works best when two players are ready for the full session.
   </p>
   <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
    This hub routes you to the right guide for solo questions, co-op setup, walkthrough help, endings, achievements, length, and buying advice.
   </p>

   <ArticleImage
    src={fearsToFathomImages.screenshot1}
    alt="Fears to Fathom: Scratch Creek gameplay screenshot showing the town"
    caption="Scratch Creek is a two-player online horror episode. Read the solo and co-op answer before buying it for yourself."
   />

   <section className="my-8 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player question</th>
       <th className="px-4 py-3 text-left font-medium text-muted-foreground">Direct answer</th>
       <th className="px-4 py-3 text-left font-medium text-muted-foreground">Open guide</th>
      </tr>
     </thead>
     <tbody>
      {quickAnswerRows.map(([question, answer, href]) => (
       <tr key={question} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
        <td className="px-4 py-3 text-muted-foreground">{answer}</td>
        <td className="px-4 py-3">
         <Link href={href} className="font-medium text-foreground underline decoration-border hover:decoration-foreground">
          Read more
         </Link>
        </td>
       </tr>
      ))}
     </tbody>
    </table>
   </section>

   <section className="mt-10">
    <h2 className="text-xl font-bold text-foreground">Scratch Creek Guide Map</h2>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
     Pick the page that matches the problem in front of you. Most players should start with the co-op answer, then move to walkthrough, endings, or achievements only when needed.
    </p>
    <div className="mt-4 grid gap-4 sm:grid-cols-2">
     {guideMap.map(([href, itemTitle, desc]) => (
      <Link key={href} href={href} className="rounded-lg border border-border bg-white p-5 transition-colors hover:border-muted-foreground">
       <h3 className="text-base font-bold text-foreground">{itemTitle}</h3>
       <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </Link>
     ))}
    </div>
   </section>

   <section className="mt-10">
    <h2 className="text-xl font-bold text-foreground">Start Here by Player Type</h2>
    <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead>
       <tr className="border-b border-border bg-mist">
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player type</th>
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best next step</th>
       </tr>
      </thead>
      <tbody>
       {startRows.map(([playerType, nextStep]) => (
        <tr key={playerType} className="border-b border-border last:border-0">
         <td className="px-4 py-3 font-semibold text-foreground">{playerType}</td>
         <td className="px-4 py-3 text-muted-foreground">{nextStep}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </section>

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

   <section className="mt-10">
    <h2 className="text-xl font-bold text-foreground">Common Questions</h2>
    {[
     { q: 'Can I play Fears to Fathom: Scratch Creek solo?', a: 'No. Scratch Creek is online co-op only with no solo mode and no AI partner. You need another real player online.' },
     { q: 'Is Scratch Creek crossplay?', a: 'No console crossplay route is available because the episode is a PC Steam release.' },
     { q: 'What should I read first?', a: 'Read the co-op guide first, then use the walkthrough only when stuck. Save endings and achievements for replay planning.' },
    ].map((faq) => (
     <section key={faq.q} className="mt-6 border-b border-border pb-4">
      <h3 className="text-base font-bold text-foreground">{faq.q}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
     </section>
    ))}
   </section>

   <p className="mt-10 text-xs text-muted-foreground">
    Last updated June 18, 2026.
   </p>
  </main>
 );
}
