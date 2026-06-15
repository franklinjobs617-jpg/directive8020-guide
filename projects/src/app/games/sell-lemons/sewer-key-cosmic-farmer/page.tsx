import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd, generateArticleSchema, generateFAQSchema } from "@/components/json-ld";
import { sellLemons } from "@/lib/games";

const title = "Sell Lemons Sewer Key Guide: Cosmic Farmer Badge Route";
const description =
 "How to get the Sewer Key in Sell Lemons, unlock the Sewer Gate, follow the lever order, and claim the Cosmic Farmer badge route.";
const canonical = "/games/sell-lemons/sewer-key-cosmic-farmer";
const datePublished = "2026-06-12";

export const metadata: Metadata = {
 title: { absolute: title },
 description,
 alternates: { canonical },
 openGraph: { title, description, url: canonical, images: [sellLemons.heroImage], type: "article", siteName: "Enjoy4Game Guides" },
 twitter: { card: "summary_large_image", title, description, images: [sellLemons.heroImage] },
};

const leverSteps = [
 ["1", "Sewer entrance", "Enter a manhole from the main street.", "You are inside the sewer maze."],
 ["2", "Blue lever", "Pull Blue.", "Blue is active."],
 ["3", "Red lever", "Pull Red.", "Red is active."],
 ["4", "Green lever", "Pull Green.", "Green is active."],
 ["5", "Red lever", "Switch Red off.", "Red is no longer active."],
 ["6", "Blue lever", "Switch Blue off.", "Blue is no longer active."],
 ["7", "Purple lever", "Pull Purple.", "Purple is active."],
 ["8", "Red lever", "Pull Red again, then collect the Sewer Key.", "The key path opens."],
 ["9", "Sewer Gate", "Use the Sewer Key at the gate.", "The Cosmic Cash Vine area opens."],
 ["10", "Cosmic Cash Vine", "Harvest the vine.", "Cosmic Farmer unlocks."],
];

const decisionRows = [
 ["Do the route before automation", "High", "Not recommended", "You lose early income while wandering."],
 ["Do the route after managers", "Low", "Recommended", "Passive cash keeps moving while you focus on the maze."],
 ["Use a written lever checklist", "Low", "Recommended", "Prevents wrong lever states."],
 ["Randomly pull levers after a mistake", "High", "Avoid", "Makes the route harder to diagnose."],
];

const faqs = [
 { question: "What is the Sewer Key lever order in Sell Lemons?", answer: "Blue, Red, Green, Red off, Blue off, Purple, then Red again." },
 { question: "Where do I use the Sewer Key?", answer: "Use it on the Sewer Gate after the lever sequence opens the key path." },
 { question: "Why is the sewer route blocked?", answer: "A lever is probably in the wrong state. Reset the maze state, then repeat the sequence from the beginning." },
 { question: "Should I do Sewer Key before UFO Key?", answer: "Yes. Sewer Key is the better first route because the sequence is shorter and teaches the lever-state pattern." },
 { question: "Can I fix the route after pulling the wrong lever?", answer: "Sometimes, but it is usually faster to reset the route state and restart with the checklist open." },
];

export default function SellLemonsSewerKeyPage() {
 return (
  <>
   <JsonLd data={generateArticleSchema({ title, description, url: canonical, datePublished, game: sellLemons, imageUrl: sellLemons.heroImage })} />
   <JsonLd data={generateFAQSchema(faqs)} />
   <main className="site-shell py-8">
    <Breadcrumb items={[{ label: "Games", href: "/games" }, { label: "Sell Lemons", href: "/games/sell-lemons" }, { label: "Sewer Key" }]} />
    <article className="prose-game max-w-4xl">
     <h1>{title}</h1>
     <div className="not-prose rounded-lg border border-border bg-white p-4">
      <h2 className="text-base font-bold text-foreground">Quick Answer</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
       Enter the sewer and use this lever order: Blue, Red, Green, Red off, Blue off, Purple, Red. Then collect the Sewer Key, open the Sewer Gate, and harvest the Cosmic Cash Vine.
      </p>
     </div>
     <p>
      The Sewer Key route is a lever-state puzzle. The biggest mistake is treating every lever as a simple one-time pull. Red and Blue must be switched off before Purple, and Red must be pulled again after Purple to open the key path.
     </p>
     <p>
      Source note: This guide uses official game information, in-game badge and route signals, community questions, gameplay video review, and screenshot review.
     </p>

     <figure className="not-prose my-8 overflow-hidden rounded-lg border border-border bg-white">
      <div className="relative aspect-video bg-mist">
       <Image src="/games/sell-lemons/sewer-key-route.svg" alt="Sell Lemons Sewer Key lever order diagram" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
      </div>
      <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground">
       Sewer Key route: Blue, Red, Green, Red off, Blue off, Purple, Red.
      </figcaption>
     </figure>

     <h2>Before You Start</h2>
     <p>
      Start this route when your income is no longer fully dependent on manual clicking. The sewer sequence is not hard because of enemies; it is hard because wrong lever states create confusion. If you are still trying to afford your first automation, finish that first.
     </p>
     <p>
      Keep the sequence visible while you run. The off steps are real steps. If you skip them, the route can look almost finished while still blocking the key path.
     </p>
     <h3>Best Time to Run This Route</h3>
     <p>
      The best time to run Sewer Key is after your stand has enough automation that leaving the main area does not feel expensive. If you are still clicking for every purchase, the maze will feel worse than it needs to. Finish the beginner route first, then use this page as a checklist.
     </p>
     <h3>What Makes This Route Different</h3>
     <p>
      This route is not just "find every color." It is about setting the right final state. Blue and Red are both used early, but they also need to be switched off before Purple. That is the part most players forget because the route feels like it should be over once Green is active.
     </p>

     <h2>Steps</h2>
     <div className="not-prose overflow-x-auto rounded-lg border border-border bg-white">
      <table className="w-full text-left text-sm">
       <thead className="bg-mist/50 text-xs uppercase text-muted-foreground">
        <tr><th className="px-4 py-3">Step</th><th className="px-4 py-3">Landmark</th><th className="px-4 py-3">Action</th><th className="px-4 py-3">Checkpoint</th></tr>
       </thead>
       <tbody>
        {leverSteps.map(([step, landmark, action, checkpoint]) => (
         <tr key={step} className="border-t border-border">
          <td className="px-4 py-3 font-bold text-foreground">{step}</td>
          <td className="px-4 py-3 font-semibold text-foreground">{landmark}</td>
          <td className="px-4 py-3 text-muted-foreground">{action}</td>
          <td className="px-4 py-3 text-muted-foreground">{checkpoint}</td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>

     <h2>Risk and Recommendation Table</h2>
     <div className="not-prose overflow-x-auto rounded-lg border border-border bg-white">
      <table className="w-full text-left text-sm">
       <thead className="bg-mist/50 text-xs uppercase text-muted-foreground">
        <tr><th className="px-4 py-3">Choice</th><th className="px-4 py-3">Risk</th><th className="px-4 py-3">Recommendation</th><th className="px-4 py-3">Best Scenario</th></tr>
       </thead>
       <tbody>
        {decisionRows.map(([choice, risk, recommendation, scenario]) => (
         <tr key={choice} className="border-t border-border">
          <td className="px-4 py-3 font-semibold text-foreground">{choice}</td>
          <td className="px-4 py-3 text-muted-foreground">{risk}</td>
          <td className="px-4 py-3 text-muted-foreground">{recommendation}</td>
          <td className="px-4 py-3 text-muted-foreground">{scenario}</td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>

     <h2>Written Route</h2>
     <ol>
      <li>Enter the sewer from a manhole on the main street.</li>
      <li>Pull the Blue lever first. If travel backtracking is slow, return to the surface and re-enter the sewer between lever runs.</li>
      <li>Pull the Red lever, then pull the Green lever.</li>
      <li>Return to Red and switch it off. Then return to Blue and switch it off.</li>
      <li>Pull the Purple lever.</li>
      <li>Pull Red again. This is the final state that opens the path toward the Sewer Key.</li>
      <li>Pick up the Sewer Key and use it on the Sewer Gate.</li>
      <li>Harvest the Cosmic Cash Vine after the gate opens.</li>
     </ol>

     <h2>Why the Order Works</h2>
     <p>
      The route depends on final lever states. That is why the order includes Red off and Blue off before Purple. If you only pull Blue, Red, Green, Purple, and Red, you are skipping the state changes that open the correct path.
     </p>
     <p>
      Think of the route as two phases. Phase one sets up Blue, Red, and Green. Phase two cleans up Red and Blue, then uses Purple and Red to open the key path. If you mix those phases, the gate logic becomes confusing.
     </p>

     <h2>When Not to Run Sewer Key</h2>
     <p>
      Do not run this route while you are trying to catch an event, while you are one purchase away from a key automation upgrade, or while you are still learning basic income flow. The key route is useful, but it should not interrupt your first money engine.
     </p>
     <p>
      Also avoid running it from memory if you already failed once. A failed attempt usually means at least one lever is in a state you did not track. Restarting with the checklist is faster than guessing.
     </p>

     <h2>Route Cleanup After You Finish</h2>
     <p>
      After you collect the Sewer Key and open the gate, do not keep changing levers unless you are deliberately starting another route. Leave the maze and return to your income loop. The purpose of the route is to unlock the gate and vine reward, not to keep exploring a half-changed lever state.
     </p>
     <p>
      If you plan to do UFO Key next, treat it as a separate run. The UFO sequence looks similar, but it is not the same route. Starting it from a messy Sewer Key state is one of the easiest ways to waste time.
     </p>

     <h2>Reverse Search Problems This Solves</h2>
     <ul>
      <li><strong>Sewer Gate not opening:</strong> Red or Blue was probably not switched off before Purple.</li>
      <li><strong>Cannot find Sewer Key:</strong> The final Red pull may not have been completed.</li>
      <li><strong>Cosmic Farmer not unlocking:</strong> Open the gate first, then interact with the vine reward area.</li>
      <li><strong>Maze feels broken:</strong> Stop guessing and restart the route with a clean sequence.</li>
     </ul>

     <h2>If You Get Lost or Stuck</h2>
     <ul>
      <li>Stop changing random levers. Random pulls make the maze harder to diagnose.</li>
      <li>Reset the route if you already used a different key path in the same server.</li>
      <li>Write the lever order in a note before entering: Blue, Red, Green, Red off, Blue off, Purple, Red.</li>
      <li>If a gate stays shut, check whether Red and Blue were turned off before Purple.</li>
      <li>If you cannot remember your current state, reset instead of trying to repair it from memory.</li>
     </ul>

     <h2>Common Mistakes</h2>
     <ul>
      <li>Pulling Purple before turning Red and Blue off.</li>
      <li>Forgetting to pull Red again after Purple.</li>
      <li>Leaving the maze mid-sequence and then forgetting which levers are active.</li>
      <li>Trying to use the Sewer Gate before collecting the key.</li>
      <li>Assuming the UFO Key order works for the Sewer Key route.</li>
     </ul>

     <h2>FAQ</h2>
     {faqs.map((faq) => (
      <section key={faq.question}>
       <h3>{faq.question}</h3>
       <p>{faq.answer}</p>
      </section>
     ))}
     <section>
      <h3>Can I use this route after doing UFO Key?</h3>
      <p>You can, but a messy lever state can make the route confusing. If the maze does not behave as expected, reset the route state and start fresh.</p>
     </section>
     <section>
      <h3>Why does Red appear twice?</h3>
      <p>Red first helps set up the early path, then Red is switched off, and later Red is pulled again after Purple to finish the key route.</p>
     </section>
     <section>
      <h3>What should I do after Cosmic Farmer?</h3>
      <p>Return to income upgrades or move to UFO Key if you want the next sewer badge route. Do not keep changing levers without a new checklist.</p>
     </section>
     <section>
      <h3>Why should I not rush this route?</h3>
      <p>The route takes focus. If your income is not automated yet, every wrong turn costs progress and makes the maze feel worse than it is. Build passive income first, then run the checklist calmly.</p>
     </section>
    </article>
    <div className="mt-8 flex flex-wrap gap-4 text-sm">
     <Link href="/games/sell-lemons" className="font-semibold text-foreground underline">Sell Lemons hub</Link>
     <Link href="/games/sell-lemons/beginner-guide" className="font-semibold text-foreground underline">Beginner guide</Link>
     <Link href="/games/sell-lemons/ufo-key-good-samaritan" className="font-semibold text-foreground underline">UFO Key route</Link>
    </div>
   </main>
  </>
 );
}
