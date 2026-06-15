import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd, generateVideoGameSchema, generateWebPageSchema } from "@/components/json-ld";
import { sellLemons } from "@/lib/games";

const title = "Sell Lemons Guide Hub: Beginner Route, Keys, Badges & Money Fast";
const description =
 "Sell Lemons guide hub for Roblox players: beginner route, money fast tips, Sewer Key, UFO Key, Cosmic Farmer, Good Samaritan, upgrades, and codes status.";
const canonical = "/games/sell-lemons";

export const metadata: Metadata = {
 title: { absolute: title },
 description,
 alternates: { canonical },
 keywords: [
 "Sell Lemons guide",
 "Sell Lemons Roblox",
 "Sell Lemons beginner guide",
 "Sell Lemons Sewer Key",
 "Sell Lemons UFO Key",
 "Sell Lemons money fast",
 ],
 openGraph: {
 title,
 description,
 url: canonical,
 images: [sellLemons.heroImage],
 type: "website",
 siteName: "Enjoy4Game Guides",
 },
 twitter: {
 card: "summary_large_image",
 title,
 description,
 images: [sellLemons.heroImage],
 },
};

const guideGroups = [
 {
  title: "Start Here",
  links: [
   {
    href: "/games/sell-lemons/beginner-guide",
    label: "Beginner Guide + Money Fast",
    body: "Use this first if you are still clicking manually, choosing upgrades randomly, or waiting too long before automation.",
   },
  ],
 },
 {
  title: "Keys and Badges",
  links: [
   {
    href: "/games/sell-lemons/sewer-key-cosmic-farmer",
    label: "Sewer Key + Cosmic Farmer",
    body: "Colored lever sequence, Sewer Gate unlock, Cosmic Cash Vine access, and what to do if the maze state feels wrong.",
   },
   {
    href: "/games/sell-lemons/ufo-key-good-samaritan",
    label: "UFO Key + Good Samaritan",
    body: "Lever order for the UFO Key path, alien room unlock, Good Samaritan badge route, and reset checks.",
   },
  ],
 },
];

const quickAnswers = [
 ["Best first goal", "Get automation online, then push the newest activity you unlocked."],
 ["Money fast", "Buy manager upgrades when they appear and use high-multiplier events instead of only clicking."],
 ["Codes", "There are no useful code steps to do right now; check the hub before wasting time hunting fake codes."],
 ["First secret route", "Do Sewer Key before badge cleanup if you are still learning the maze."],
];

const decisionRows = [
 ["Income feels slow", "Beginner Guide", "Automate first, then push the newest activity.", "/games/sell-lemons/beginner-guide"],
 ["Need a first secret route", "Sewer Key", "Shorter lever route and better practice before UFO Key.", "/games/sell-lemons/sewer-key-cosmic-farmer"],
 ["Need Good Samaritan", "UFO Key", "Longer lever route that requires the full Red-Green-Red finish.", "/games/sell-lemons/ufo-key-good-samaritan"],
 ["Looking for codes", "Check status here", "Do not build your run around codes unless active rewards appear.", ""],
 ["Unsure what to ignore", "Stay on income", "Skip distractions and focus on cash, automation, keys, and badges.", ""],
];

const faqs = [
 {
  q: "What should I do first in Sell Lemons?",
  a: "Get your first automation online, then spend on the newest income activity you unlock. Do not spend your whole first session manually clicking if a manager upgrade is close.",
 },
 {
  q: "Should I spend time looking for Sell Lemons codes?",
  a: "Not before your income loop is stable. Codes can be checked quickly, but they should not replace automation, newer activities, key routes, or badge progress.",
 },
 {
  q: "Should I do Sewer Key or UFO Key first?",
  a: "Do Sewer Key first. The route is shorter, teaches the lever rhythm, and makes the longer UFO Key route easier to follow.",
 },
 {
  q: "Why is there no review or system requirements page?",
  a: "Sell Lemons is a Roblox idle tycoon. Players need progression, money, key, badge, and upgrade help; platform/spec pages do not solve the main problem.",
 },
 {
  q: "When should I care about best upgrades?",
  a: "Care about upgrades immediately, but use a simple rule early: buy automation first, then the newest income activity, then broad multipliers. Detailed min-maxing matters later.",
 },
];

function GuideCard({ href, label, body }: { href: string; label: string; body: string }) {
 return (
  <Link href={href} className="rounded-lg border border-border bg-white p-5 transition-colors hover:border-dribbble-pink">
   <h3 className="text-base font-bold text-foreground">{label}</h3>
   <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
  </Link>
 );
}

export default function SellLemonsHubPage() {
 return (
  <>
   <JsonLd data={generateVideoGameSchema(sellLemons)} />
   <JsonLd data={generateWebPageSchema({ title, description, url: canonical, siteName: "Enjoy4Game Guides" })} />
   <main className="site-shell py-8">
    <Breadcrumb items={[{ label: "Games", href: "/games" }, { label: "Sell Lemons" }]} />

    <section className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
     <div>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.12px] text-dribbble-pink">Roblox guide hub</p>
      <h1 className="text-[34px] font-bold leading-[1.08] tracking-[-0.8px] text-foreground sm:text-[48px]">
       Sell Lemons Guide Hub
      </h1>
      <div className="mt-4 rounded-lg border border-border bg-white p-4">
       <h2 className="text-base font-bold text-foreground">Quick Answer</h2>
       <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Start with automation and money flow, then run the Sewer Key route, then run the UFO Key route. Codes, reviews, release status, and platform pages are not the main path for this game because they do not help you earn faster or unlock badges.
       </p>
      </div>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
       Sell Lemons is an idle tycoon game where the important decisions are simple: automate early, push your newest income source, and save the sewer routes for focused runs. Start with the beginner route if your income feels slow, then move to the Sewer Key and UFO Key badge paths.
      </p>
      <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground">
       Source note: This guide uses official game information, in-game badge and route signals, community questions, gameplay video review, and screenshot review.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
       {quickAnswers.map(([label, value]) => (
        <div key={label} className="rounded-md border border-border bg-mist/30 px-4 py-3">
         <span className="text-xs font-bold uppercase text-muted-foreground">{label}</span>
         <p className="mt-1 text-sm leading-relaxed text-foreground">{value}</p>
        </div>
       ))}
      </div>
     </div>
     <figure className="overflow-hidden rounded-xl border border-border bg-white">
      <div className="relative aspect-square bg-mist">
       <Image src={sellLemons.heroImage} alt="Sell Lemons Roblox game icon" fill priority className="object-cover" sizes="320px" />
      </div>
     <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground">
       Use the hub as a route map: income first, then keys, then badges.
      </figcaption>
     </figure>
    </section>

    <section className="mt-10">
     <h2 className="text-2xl font-bold text-foreground">Guide Library</h2>
     <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
      Pick the guide that matches your current blocker. If nothing is blocked yet, follow the beginner route until passive income is stable.
     </p>
     <div className="mt-5 grid gap-6">
      {guideGroups.map((group) => (
       <div key={group.title}>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.12px] text-muted-foreground">{group.title}</h3>
        <div className="grid gap-4 md:grid-cols-2">
         {group.links.map((link) => (
          <GuideCard key={link.href} {...link} />
         ))}
        </div>
       </div>
      ))}
     </div>
    </section>

    <section className="mt-10">
     <h2 className="text-2xl font-bold text-foreground">Pick Your Next Route</h2>
     <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-white">
      <table className="w-full text-left text-sm">
       <thead className="bg-mist/50 text-xs uppercase text-muted-foreground">
        <tr>
         <th className="px-4 py-3">Situation</th>
         <th className="px-4 py-3">Do Next</th>
         <th className="px-4 py-3">Why</th>
         <th className="px-4 py-3">Open</th>
        </tr>
       </thead>
       <tbody>
        {decisionRows.map(([situation, next, why, href]) => (
         <tr key={situation} className="border-t border-border">
          <td className="px-4 py-3 font-semibold text-foreground">{situation}</td>
          <td className="px-4 py-3 text-muted-foreground">{next}</td>
          <td className="px-4 py-3 text-muted-foreground">{why}</td>
          <td className="px-4 py-3 text-muted-foreground">
           {href ? <Link href={href} className="font-semibold text-foreground underline">Guide</Link> : "Stay here"}
          </td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>
    </section>

    <section className="mt-10 rounded-lg border border-border bg-white p-5">
     <h2 className="text-xl font-bold text-foreground">Recommended Order</h2>
     <ol className="mt-4 grid gap-3 md:grid-cols-4">
      {["Automate the stand", "Push the newest activity", "Run Sewer Key", "Run UFO Key"].map((step, index) => (
       <li key={step} className="rounded-md bg-mist/40 p-4">
        <span className="text-xs font-bold uppercase text-dribbble-pink">Step {index + 1}</span>
        <p className="mt-1 text-sm font-semibold text-foreground">{step}</p>
       </li>
     ))}
     </ol>
    </section>

    <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
     <div className="prose-game">
     <h2>How to Use This Hub</h2>
     <p>
       Use the beginner guide when you are still deciding what to buy next. Use the Sewer Key guide when you can step away from your stand without losing too much momentum. Use the UFO Key guide after you understand that the same colored lever can matter more than once in a sequence.
      </p>
     <p>
      The wrong way to play is to treat every topic as equal. Codes sound useful, but they do not create a stable route. Cosmetic upgrades may be required later, but they should not beat automation early. Badge routes are valuable, but they should not interrupt the first income loop before you have passive cash running.
     </p>
      <h3>What to Ignore Early</h3>
      <p>
       Ignore anything that does not improve income, unlock a route, or complete a badge. That means code hunting, broad browsing, and visual upgrades can wait unless they directly unlock a useful button or reward.
      </p>
     <h3>When to Start the Sewer</h3>
     <p>
      Start sewer routes after automation is running. The maze takes focus, and a wrong lever state can cost time. If your stand still needs constant clicking, finish your income loop first.
     </p>
      <h3>What to Check After Each Update</h3>
      <p>
       After a game update, check whether codes were added, whether the sewer route changed, and whether new upgrade buttons or badge conditions appeared. If none of those changed, the core route stays the same: automate, upgrade the newest activity, then run key paths with a checklist.
      </p>
      <h3>How to Decide Your Next Click</h3>
      <p>
       If you are standing at your plot and do not know what to do next, choose the action that removes friction. Buy the automation that reduces clicking, upgrade the newest activity that earns faster, or open the route that unlocks a permanent objective. Skip anything that only sounds useful because it is searchable but does not change your current run.
      </p>
     </div>
     <figure className="overflow-hidden rounded-lg border border-border bg-white">
      <div className="relative aspect-video bg-mist">
       <Image src="/games/sell-lemons/beginner-route.svg" alt="Sell Lemons beginner route diagram" fill className="object-cover" sizes="320px" />
      </div>
      <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground">
       Route flow: basic cash, automation, newest activity, then key routes.
      </figcaption>
     </figure>
    </section>

    <section className="mt-10">
     <h2 className="text-2xl font-bold text-foreground">FAQ</h2>
     <div className="mt-4 grid gap-4 md:grid-cols-2">
     {faqs.map((faq) => (
       <section key={faq.q} className="rounded-lg border border-border bg-white p-5">
        <h3 className="text-base font-bold text-foreground">{faq.q}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
      </section>
     ))}
      <section className="rounded-lg border border-border bg-white p-5">
       <h3 className="text-base font-bold text-foreground">What should I read after the beginner guide?</h3>
       <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Read Sewer Key next if you want a shorter route with a badge payoff. Read UFO Key after that because its sequence repeats colors and is easier to break by memory.</p>
      </section>
      <section className="rounded-lg border border-border bg-white p-5">
       <h3 className="text-base font-bold text-foreground">Should I chase every badge immediately?</h3>
       <p className="mt-2 text-sm leading-relaxed text-muted-foreground">No. Badges are useful goals, but early income matters first. Run badge routes when your stand can earn while you are away from the main loop.</p>
      </section>
      <section className="rounded-lg border border-border bg-white p-5">
       <h3 className="text-base font-bold text-foreground">Why do the key guides focus on lever order?</h3>
       <p className="mt-2 text-sm leading-relaxed text-muted-foreground">The key routes fail because of lever state, not because the player lacks cash. A clean order table solves the actual blocker faster than a long story about the game.</p>
      </section>
      <section className="rounded-lg border border-border bg-white p-5">
       <h3 className="text-base font-bold text-foreground">What should I ignore when stuck?</h3>
       <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Ignore broad browsing and focus on the blocker: income speed, upgrade order, lever state, key location, or badge trigger.</p>
      </section>
      <section className="rounded-lg border border-border bg-white p-5">
       <h3 className="text-base font-bold text-foreground">What is the safest route for a new player?</h3>
       <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Beginner route first, Sewer Key second, UFO Key third. That order teaches income, then short maze logic, then the longer badge route without wasting early progress.</p>
      </section>
     </div>
    </section>
   </main>
  </>
 );
}
