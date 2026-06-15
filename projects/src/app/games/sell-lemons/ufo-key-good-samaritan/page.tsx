import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd, generateArticleSchema, generateFAQSchema } from "@/components/json-ld";
import { sellLemons } from "@/lib/games";

const title = "Sell Lemons UFO Key Guide: Good Samaritan Badge Route";
const description =
 "How to get the UFO Key in Sell Lemons, follow the sewer lever order, reach the alien, and unlock the Good Samaritan badge.";
const canonical = "/games/sell-lemons/ufo-key-good-samaritan";
const datePublished = "2026-06-12";

export const metadata: Metadata = {
 title: { absolute: title },
 description,
 alternates: { canonical },
 openGraph: { title, description, url: canonical, images: [sellLemons.heroImage], type: "article", siteName: "Enjoy4Game Guides" },
 twitter: { card: "summary_large_image", title, description, images: [sellLemons.heroImage] },
};

const route = [
 ["1", "Sewer entrance", "Enter the sewer from a manhole.", "You are in the maze."],
 ["2", "Blue lever", "Pull Blue.", "Blue is active."],
 ["3", "Red lever", "Pull Red.", "Red is active."],
 ["4", "Green lever", "Pull Green.", "Green is active."],
 ["5", "Red lever", "Pull Red again.", "The route advances."],
 ["6", "Purple lever", "Pull Purple.", "Purple is active."],
 ["7", "Red lever", "Pull Red again.", "The UFO Key route opens."],
 ["8", "Green lever", "Pull Green again.", "Alien room path advances."],
 ["9", "Red lever", "Pull Red again.", "Final lock state is set."],
 ["10", "UFO Key path", "Collect the UFO Key, then reach the alien.", "Good Samaritan unlocks after the alien interaction."],
];

const decisionRows = [
 ["Do UFO Key before Sewer Key", "Medium", "Not ideal", "The shorter Sewer Key route is better practice."],
 ["Use the lever rail", "Low", "Recommended", "The route repeats Red and Green near the end."],
 ["Stop after Purple", "High", "Avoid", "The last Red, Green, Red section is required."],
 ["Reset after messy lever states", "Low", "Recommended", "A clean state beats guessing."],
];

const faqs = [
 { question: "What is the UFO Key lever order in Sell Lemons?", answer: "Blue, Red, Green, Red, Purple, Red, Green, Red." },
 { question: "How do I unlock Good Samaritan?", answer: "Get the UFO Key route open, then reach and interact with the alien inside the sewer maze." },
 { question: "Why can I not reach the alien?", answer: "The later Red and Green lever states are probably wrong. Repeat the final Red, Green, Red sequence carefully." },
 { question: "Is UFO Key the same as Sewer Key?", answer: "No. The routes share colored levers, but the UFO Key order is longer and uses a different final sequence." },
 { question: "What should I do if the route breaks?", answer: "Use a clean maze state and restart from Blue instead of trying to repair several unknown lever states." },
];

export default function SellLemonsUfoKeyPage() {
 return (
  <>
   <JsonLd data={generateArticleSchema({ title, description, url: canonical, datePublished, game: sellLemons, imageUrl: sellLemons.heroImage })} />
   <JsonLd data={generateFAQSchema(faqs)} />
   <main className="site-shell py-8">
    <Breadcrumb items={[{ label: "Games", href: "/games" }, { label: "Sell Lemons", href: "/games/sell-lemons" }, { label: "UFO Key" }]} />
    <article className="prose-game max-w-4xl">
     <h1>{title}</h1>
     <div className="not-prose rounded-lg border border-border bg-white p-4">
      <h2 className="text-base font-bold text-foreground">Quick Answer</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
       Use this UFO Key lever order: Blue, Red, Green, Red, Purple, Red, Green, Red. After the route opens, collect the UFO Key, reach the alien area, and interact with the alien to complete the Good Samaritan route.
      </p>
     </div>
     <p>
      The UFO Key route is longer than the Sewer Key route and easier to break by memory. The repeated Red and Green pulls are the part that trips players up. Keep the rail visible, finish the entire sequence, and do not stop after Purple.
     </p>
     <p>
      Source note: This guide uses official game information, in-game badge and route signals, community questions, gameplay video review, and screenshot review.
     </p>

     <figure className="not-prose my-8 overflow-hidden rounded-lg border border-border bg-white">
      <div className="relative aspect-video bg-mist">
       <Image src="/games/sell-lemons/ufo-key-route.svg" alt="Sell Lemons UFO Key lever order diagram" fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
      </div>
      <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground">
       UFO Key route: Blue, Red, Green, Red, Purple, Red, Green, Red.
      </figcaption>
     </figure>

     <h2>Before You Start</h2>
     <p>
      Run Sewer Key first if you have not learned the sewer layout yet. UFO Key uses the same idea of colored lever states, but the order is longer and has more repeated steps. If your income is still weak, finish the beginner route first so you are not losing progress while learning the maze.
     </p>
     <h3>Best Time to Run This Route</h3>
     <p>
      Run UFO Key after you have already practiced the sewer with a shorter route. The path has more repeated colors, so it punishes half-remembered instructions. If you are still checking every corner of the maze, do Sewer Key first and come back when the lever rhythm is familiar.
     </p>
     <h3>What Makes UFO Key Harder</h3>
     <p>
      The hard part is not the first Blue, Red, Green section. The hard part is finishing after Purple. Many players stop too early because Purple feels like the final special lever. It is not. The route still needs Red, Green, and Red again before the alien path is ready.
     </p>

     <h2>Steps</h2>
     <div className="not-prose overflow-x-auto rounded-lg border border-border bg-white">
      <table className="w-full text-left text-sm">
       <thead className="bg-mist/50 text-xs uppercase text-muted-foreground">
        <tr><th className="px-4 py-3">Step</th><th className="px-4 py-3">Landmark</th><th className="px-4 py-3">Action</th><th className="px-4 py-3">Checkpoint</th></tr>
       </thead>
       <tbody>
        {route.map(([step, landmark, action, checkpoint]) => (
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
      <li>Enter the sewer maze from a manhole on the main street.</li>
      <li>Pull Blue, then Red, then Green.</li>
      <li>Return to Red and pull it again.</li>
      <li>Pull Purple after the first Blue-Red-Green-Red setup is complete.</li>
      <li>Pull Red again, then pull Green again.</li>
      <li>Pull Red one last time to finish the lock state.</li>
      <li>Collect the UFO Key once the route opens.</li>
      <li>Reach the alien area and interact with the alien to finish the badge route.</li>
     </ol>

     <h2>Why This Route Feels Confusing</h2>
     <p>
      The route repeats Red several times, and Green also appears near the end. That makes it easy to think you already completed a step when you only completed an earlier version of the same color. Count positions, not colors. "Red at step two" and "Red at step eight" are not interchangeable.
     </p>
     <p>
      A clean way to remember it is: first build the base with Blue, Red, Green; then confirm Red; then use Purple; then finish with Red, Green, Red. If you remember only the colors without the phases, you will probably stop in the wrong place.
     </p>
     <p>
      This is why the route should be read as a sequence of positions, not a collection of colors. Red appears several times, but each Red pull belongs to a different phase. If you skip one Red because you already pulled Red earlier, the final lock state will not match the route.
     </p>

     <h2>When Not to Run UFO Key</h2>
     <p>
      Do not run UFO Key as your first sewer objective. It is longer than Sewer Key and easier to confuse. If your goal is simply to learn how sewer levers work, start with the shorter route. Save UFO Key for a session where you can focus on the full checklist.
     </p>
     <p>
      Also avoid running the route while an income event is active or while you are close to a major automation purchase. The reward matters, but losing your early money rhythm makes the run feel worse.
     </p>

     <h2>Route Cleanup After You Finish</h2>
     <p>
      After you reach the alien area and finish the interaction, leave the maze and return to progression. Do not keep pulling levers just because the route worked once. The next objective should be income, upgrades, or another badge checklist, not random sewer exploration.
     </p>
     <p>
      If the badge does not trigger immediately, check the last three lever steps first. The end of this route is the easiest part to miss because players often relax after Purple. The route is not complete until Red, Green, and Red are done after Purple.
     </p>

     <h2>Reverse Search Problems This Solves</h2>
     <ul>
      <li><strong>Alien room blocked:</strong> The final Red, Green, Red sequence was likely missed.</li>
      <li><strong>UFO Key not appearing:</strong> Repeat the full rail from Blue instead of mixing it with Sewer Key.</li>
      <li><strong>Good Samaritan not unlocking:</strong> Make sure you reach the alien area after the key path opens.</li>
      <li><strong>Lever route feels wrong:</strong> Start from a clean maze state and count positions, not colors.</li>
     </ul>

     <h2>If You Get Lost or Stuck</h2>
     <ul>
      <li>Use the lever rail above as your checklist. Do not rely on memory inside the maze.</li>
      <li>If the alien path is still blocked, repeat the final Red, Green, Red section.</li>
      <li>If the maze state is messy, move to a clean server and start from Blue.</li>
      <li>Do not mix the Sewer Key order with the UFO Key order. They look similar but are not the same.</li>
     </ul>

     <h2>Common Mistakes</h2>
     <ul>
      <li>Stopping after Purple and forgetting the last three lever pulls.</li>
      <li>Running the shorter Sewer Key order when trying to unlock the UFO route.</li>
      <li>Leaving the maze before collecting the key.</li>
      <li>Looking for the alien before the final Red lever state is set.</li>
     </ul>

     <h2>FAQ</h2>
     {faqs.map((faq) => (
      <section key={faq.question}>
       <h3>{faq.question}</h3>
       <p>{faq.answer}</p>
      </section>
     ))}
     <section>
      <h3>Why does the UFO Key route repeat Red so much?</h3>
      <p>Red appears in multiple positions because the route depends on state changes, not just visiting each color once.</p>
     </section>
     <section>
      <h3>What should I do before starting UFO Key?</h3>
      <p>Finish the beginner route, get passive income stable, and read the Sewer Key route first if you have not practiced the maze.</p>
     </section>
     <section>
      <h3>What should I do after Good Samaritan?</h3>
      <p>Return to progression and upgrades. If another badge route becomes a priority, start it with a clean checklist instead of continuing from unknown lever states.</p>
     </section>
     <section>
      <h3>Can I run this route without doing Sewer Key?</h3>
      <p>You can, but it is not the best learning path. Sewer Key is shorter and makes the lever-state idea easier before you try the longer UFO sequence.</p>
     </section>
     <section>
      <h3>Why does this route fail near the end?</h3>
      <p>Most failures happen after Purple because the route still needs Red, Green, and Red. Stopping at Purple leaves the final path unfinished.</p>
     </section>
    </article>
    <div className="mt-8 flex flex-wrap gap-4 text-sm">
     <Link href="/games/sell-lemons" className="font-semibold text-foreground underline">Sell Lemons hub</Link>
     <Link href="/games/sell-lemons/beginner-guide" className="font-semibold text-foreground underline">Beginner guide</Link>
     <Link href="/games/sell-lemons/sewer-key-cosmic-farmer" className="font-semibold text-foreground underline">Sewer Key route</Link>
    </div>
   </main>
  </>
 );
}
