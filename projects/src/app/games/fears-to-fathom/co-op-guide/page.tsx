import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { createFearsToFathomMetadata, fearsToFathomImages } from '@/lib/fears-to-fathom';

const title = "Fears to Fathom Scratch Creek Co-Op Guide — Setup, Matchmaking & Partner Tips";
const description =
 "Fears to Fathom: Scratch Creek is online co-op only. No solo mode, no AI companion. How to find a partner via Steam, Discord, and matchmaking. Voice chat, progress sharing, and crossplay explained.";
const canonical = '/games/fears-to-fathom/co-op-guide';

export const metadata = createFearsToFathomMetadata({ title, description, canonical, image: fearsToFathomImages.screenshot2 });

export default function FearsToFathomCoopGuidePage() {
 return (
  <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>

   <p className="mt-4 text-base text-foreground font-semibold">
    No. Fears to Fathom: Scratch Creek is co-op only. There is no single player mode, no AI companion, and no offline mode. You must play with another person online.
   </p>

   <ArticleImage
    src={fearsToFathomImages.screenshot2}
    alt="Fears to Fathom: Scratch Creek co-op gameplay screenshot"
    caption="Scratch Creek is designed exclusively for two-player online co-op. There is no single player option."
   />

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">How Co-op Works</h2>
    <div className="mt-4 space-y-4">
     {[
      ['Matchmaking', 'The game has built-in matchmaking. You can queue to find a random partner, or invite a friend via Steam friends list. There is no local split-screen co-op.'],
      ['Voice Chat', 'The game features spatial voice chat and NPC text messaging. You can send in-game messages to your partner and voice chat is positional based on your in-game location.'],
      ['Progress', 'Both players share story progression. Key decisions are made together — both players need to agree on choices that affect the ending. If one player disconnects, the host\u2019s save is preserved.'],
      ['Communication', 'The game has player voice detection. If you speak into your mic, NPCs in the game world may react to your voice. This is a core mechanic in some sections.'],
     ].map(([title, desc]) => (
      <div key={title} className="rounded-lg border border-border bg-white p-4">
       <h3 className="text-sm font-bold text-foreground">{title}</h3>
       <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
     ))}
    </div>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">How to Find a Partner</h2>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
     Since the game requires a partner, finding someone to play with is the biggest barrier. Here are the best ways:
    </p>
    <ol className="mt-4 space-y-3">
     <li className="flex gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-bold text-white">1</span>
      <div>
       <strong className="text-sm text-foreground">Steam Friends</strong>
       <p className="text-sm text-muted-foreground">Invite a Steam friend directly. The game supports direct invites through the Steam overlay. This is the most reliable way.</p>
      </div>
     </li>
     <li className="flex gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-bold text-white">2</span>
      <div>
       <strong className="text-sm text-foreground">Steam Community Hub</strong>
       <p className="text-sm text-muted-foreground">Post in the Fears to Fathom Steam discussions. Multiple players are actively looking for partners there — several threads were posted within 24 hours of launch.</p>
      </div>
     </li>
     <li className="flex gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-bold text-white">3</span>
      <div>
       <strong className="text-sm text-foreground">Discord Servers</strong>
       <p className="text-sm text-muted-foreground">The Fears to Fathom community Discord and the Rayll Studios Discord have dedicated looking-for-group channels.</p>
      </div>
     </li>
     <li className="flex gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-bold text-white">4</span>
      <div>
       <strong className="text-sm text-foreground">In-Game Matchmaking</strong>
       <p className="text-sm text-muted-foreground">Use the built-in matchmaking system to queue with a random player. Wait times vary depending on time of day.</p>
      </div>
     </li>
    </ol>
   </section>

   <section className="mt-8">
    <h2 className="text-xl font-bold text-foreground">Common Questions</h2>
    <div className="mt-4 space-y-4">
     {[
      { q: 'Can I play solo?', a: 'No. There is no single player mode. You must play with another player online.' },
      { q: 'Is there local split-screen co-op?', a: 'No. Co-op is online only. Both players need their own copy of the game and a Steam account.' },
      { q: 'What happens if my partner disconnects?', a: 'The host continues playing. Your partner can rejoin if they reconnect within the same session. Progress is saved to the host.' },
      { q: 'Does the game have crossplay?', a: 'No. Fears to Fathom: Scratch Creek is PC only via Steam. There is no crossplay with consoles.' },
      { q: 'Can I play with someone who owns a different episode?', a: 'Steam stores list them as separate apps. You both need to own Scratch Creek to play together.' },
     ].map((faq) => (
      <div key={faq.q} className="border-b border-border pb-3">
       <h3 className="text-sm font-bold text-foreground">{faq.q}</h3>
       <p className="mt-1 text-sm text-muted-foreground">{faq.a}</p>
      </div>
     ))}
    </div>
   </section>

   <p className="mt-10 text-xs text-muted-foreground">
    Data source: Steam store page, Steam Community discussions, developer store listing. Last updated June 11, 2026.
   </p>
  </main>
 );
}
