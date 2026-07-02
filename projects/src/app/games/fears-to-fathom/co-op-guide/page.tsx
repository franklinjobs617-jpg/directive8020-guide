import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { JsonLd, generateFAQSchema } from '@/components/json-ld';
import { createFearsToFathomMetadata, fearsToFathomImages } from '@/lib/fears-to-fathom';

const title = 'Can You Play Fears to Fathom: Scratch Creek Solo? Co-op Only Answer';
const description =
 'No, Fears to Fathom: Scratch Creek cannot be played solo. Learn how online co-op works, whether there is an AI companion, how to find a partner, and what happens if someone disconnects.';
const canonical = '/games/fears-to-fathom/co-op-guide';

export const metadata = createFearsToFathomMetadata({
 title,
 description,
 canonical,
 image: fearsToFathomImages.screenshot2,
});

const coopAnswerRows = [
 ['Solo / single-player', 'No', 'Scratch Creek is built around two-player online co-op. Do not buy it expecting a normal solo episode.'],
 ['AI companion', 'No', 'There is no AI partner that replaces the second player.'],
 ['Online co-op', 'Yes', 'You need another real player online. Each player should own Scratch Creek on Steam.'],
 ['Local split-screen', 'No', 'Plan for separate PCs, not couch split-screen.'],
 ['Crossplay', 'No console crossplay', 'Scratch Creek is a PC Steam release, so there is no PlayStation/Xbox crossplay route.'],
 ['Partner disconnects', 'Host save matters', 'Use the host save as the recovery point and re-invite the partner when connection issues happen.'],
];

const partnerRows = [
 ['Friend invite', 'Best choice', 'Use this if you want reliable communication, pacing, and ending decisions.'],
 ['In-game matchmaking', 'Use when available', 'Good for a quick session, but wait time and partner quality can vary.'],
 ['Looking-for-group channels', 'Good backup', 'Useful if matchmaking is slow or you want someone using voice chat.'],
 ['Random public partner', 'Riskier', 'Works for sampling the game, but story choices and stealth sections are easier with a coordinated partner.'],
];

const beforeBuyingRows = [
 ['Buying for yourself only', 'Wait or choose another episode', 'Scratch Creek does not provide a solo route, so a one-person purchase will not give you the normal Fears to Fathom experience.'],
 ['Buying for two friends', 'Safe choice', 'Both players should plan to play online at the same time and coordinate story decisions.'],
 ['Expecting couch co-op', 'Do not buy for that use case', 'The page should be treated as online co-op, not local split-screen.'],
 ['Expecting random matchmaking', 'Check availability first', 'Matchmaking and partner quality can vary; a friend invite is the cleaner route.'],
 ['Worried about disconnects', 'Use the host save carefully', 'Stop at a safe moment, re-invite the partner, and avoid forcing major choices after a disconnect.'],
];

const faqRows = [
 { q: 'Can I play Fears to Fathom: Scratch Creek alone?', a: 'No. Scratch Creek does not have a solo mode. You need another real player online.' },
 { q: 'Is Scratch Creek co-op only?', a: 'Yes. Treat it as an online co-op episode, not a solo Fears to Fathom chapter.' },
 { q: 'Does Scratch Creek have an AI companion?', a: 'No. There is no AI partner that fills the second-player role.' },
 { q: 'Is there local split-screen?', a: 'No. The co-op route is online, so each player needs their own setup.' },
 { q: 'Does Scratch Creek have crossplay?', a: 'No console crossplay route is available because the episode is a PC Steam release.' },
 { q: 'What happens if my partner disconnects?', a: 'Use the host save as the recovery point, then re-invite the partner. For a cleaner run, stop at a safe moment instead of pushing through story choices alone.' },
];

export default function FearsToFathomCoopGuidePage() {
 return (
  <>
  <JsonLd data={generateFAQSchema(faqRows.map(({ q, a }) => ({ question: q, answer: a })))} />
  <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>

   <p className="mt-4 text-base font-semibold text-foreground">
    No. Fears to Fathom: Scratch Creek cannot be played solo. It is online co-op only, with no single-player mode and no AI companion, so you need another real player before starting.
   </p>
   <p className="mt-3 text-sm text-muted-foreground">Last updated: June 18, 2026.</p>

   <ArticleImage
    src={fearsToFathomImages.screenshot2}
    alt="Fears to Fathom: Scratch Creek co-op gameplay screenshot"
    caption="Scratch Creek is designed for online co-op. Check the table below before buying it for a solo session."
   />

   <section className="mt-8 overflow-x-auto rounded-lg border border-border bg-white">
    <table className="w-full text-sm">
     <thead>
      <tr className="border-b border-border bg-mist">
       <th className="px-4 py-3 text-left font-medium text-muted-foreground">Question</th>
       <th className="px-4 py-3 text-left font-medium text-muted-foreground">Answer</th>
       <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it means</th>
      </tr>
     </thead>
     <tbody>
      {coopAnswerRows.map(([question, answer, meaning]) => (
       <tr key={question} className="border-b border-border last:border-0">
        <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
        <td className="px-4 py-3 text-muted-foreground">{answer}</td>
        <td className="px-4 py-3 text-muted-foreground">{meaning}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">How Co-op Works</h2>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
     Treat Scratch Creek as a two-player episode from the start. One player cannot fill the second role later, and there is no AI partner to cover missing objectives. If you want the usual solo Fears to Fathom rhythm, play another episode first and come back when you have a partner ready.
    </p>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Before You Buy on Steam</h2>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
     Use this as the purchase check: Scratch Creek is a two-player online episode. If your plan depends on solo play, local split-screen, or an AI partner, it does not fit that use case.
    </p>
    <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead>
       <tr className="border-b border-border bg-mist">
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Your plan</th>
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Buy decision</th>
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Reason</th>
       </tr>
      </thead>
      <tbody>
       {beforeBuyingRows.map(([plan, decision, reason]) => (
        <tr key={plan} className="border-b border-border last:border-0">
         <td className="px-4 py-3 font-semibold text-foreground">{plan}</td>
         <td className="px-4 py-3 text-muted-foreground">{decision}</td>
         <td className="px-4 py-3 text-muted-foreground">{reason}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">How to Find a Partner</h2>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
     The hardest part is not the controls; it is finding someone who can stay through the whole session. Use this order:
    </p>
    <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-white">
     <table className="w-full text-sm">
      <thead>
       <tr className="border-b border-border bg-mist">
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Partner route</th>
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Use case</th>
        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best for</th>
       </tr>
      </thead>
      <tbody>
       {partnerRows.map(([route, useCase, bestFor]) => (
        <tr key={route} className="border-b border-border last:border-0">
         <td className="px-4 py-3 font-semibold text-foreground">{route}</td>
         <td className="px-4 py-3 text-muted-foreground">{useCase}</td>
         <td className="px-4 py-3 text-muted-foreground">{bestFor}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Common Questions</h2>
    <div className="mt-4 space-y-4">
     {faqRows.map((faq) => (
      <div key={faq.q} className="border-b border-border pb-3">
       <h3 className="text-sm font-bold text-foreground">{faq.q}</h3>
       <p className="mt-1 text-sm text-muted-foreground">{faq.a}</p>
      </div>
     ))}
    </div>
   </section>

   <section className="mt-8 rounded-lg border border-border bg-mist p-4">
    <h2 className="text-lg font-bold text-foreground">Related Fears to Fathom Guides</h2>
    <div className="mt-3 flex flex-wrap gap-3 text-sm">
     <Link href="/games/fears-to-fathom" className="font-semibold text-foreground hover:underline">
      Fears to Fathom hub
     </Link>
     <Link href="/games/fears-to-fathom/all-endings" className="font-semibold text-foreground hover:underline">
      All endings guide
     </Link>
     <Link href="/games/fears-to-fathom/walkthrough" className="font-semibold text-foreground hover:underline">
      Scratch Creek walkthrough
     </Link>
    </div>
   </section>

   <p className="mt-10 text-xs text-muted-foreground">
    Recheck the Steam page after major patches or platform updates if you are buying specifically for crossplay, matchmaking, or a different co-op setup.
   </p>
  </main>
  </>
 );
}
