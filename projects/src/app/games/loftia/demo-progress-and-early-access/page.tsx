import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { FAQSection } from "@/components/faq-section";
import { JsonLd, generateFAQSchema } from "@/components/json-ld";

const title = "Loftia Demo Progress: What Carries Into Early Access?";
const description =
  "Loftia Demo progress and names carry into Early Access. Check the name retention window, Demo Banner account requirements and unconfirmed crossplay details.";
const canonical = "/games/loftia/demo-progress-and-early-access";
const demoNews = "https://store.steampowered.com/news/app/2320980/view/699903960312447744";
const faqUrl = "https://loftia.gg/faq/";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonical, type: "article", siteName: "Enjoy4Game" },
  twitter: { card: "summary", title, description },
};

const faqs = [
  {
    question: "Does Loftia Demo progress carry into Early Access?",
    answer:
      "Yes. The developer's October 8 Demo announcement says gameplay progress carries over, including what you complete or collect, and that your character name carries over too. This is official confirmation, not a hands-on migration test.",
  },
  {
    question: "How long is my Demo character name reserved?",
    answer:
      "The announcement says that a name claimed during the Steam Next Fest Demo becomes available to others if you do not log into Early Access during the three months between November 3, 2026 and February 3, 2027. It does not specify an exact cutoff time or say that all gameplay progress is deleted.",
  },
  {
    question: "Is playing the Demo enough to save the Demo Banner reward?",
    answer:
      "No. The announcement ties the reward to first entering the Player Neighborhood during the Demo event, then linking your email address and claiming the reward on the Loftia website so it is saved for Early Access. Late claims after the Demo event have not been verified here.",
  },
  {
    question: "Can Steam and Epic players definitely play together?",
    answer:
      "Crossplay is not confirmed by the official FAQ checked on November 5, 2026. It says crossplay is being researched and tested, without a promise of support. Availability on multiple stores does not confirm crossplay or shared saves.",
  },
];

const carryover = [
  ["Completed quests and collected items", "Carry over", "The Demo announcement says anything completed or collected stays with your character when Early Access begins."],
  ["Gameplay / character progress", "Carry over", "Officially confirmed for the Steam Next Fest Demo. This does not establish transfers between different accounts."],
  ["Character name", "Carry over, with a retention condition", "Log into Early Access during the November 3, 2026–February 3, 2027 window to avoid the announced name release condition."],
  ["Demo Banner", "Conditional reward", "The event required entering the Player Neighborhood, linking your email and claiming the reward on the Loftia website."],
  ["Cross-store saves, account merges or manual imports", "UNKNOWN", "The cited sources do not verify these procedures. Do not assume a different account or store will automatically receive the same character."],
];

export default function LoftiaDemoContinuityPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(faqs)} />
      <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
        <div className="[&_ol]:flex-wrap">
          <Breadcrumb items={[{ label: "Games", href: "/games" }, { label: "Loftia Demo progress", href: canonical }]} />
        </div>
        <header className="mb-8 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Loftia · Early Access</p>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">Loftia Demo Progress: What Carries Into Early Access?</h1>
          <p className="text-sm leading-7 text-muted-foreground">
            Sources checked <time dateTime="2026-11-05">November 5, 2026</time>. According to the{" "}
            <a href={faqUrl} className="underline">official developer FAQ</a>, Loftia entered Early Access on November 3, 2026 at 1 p.m. EST.
            The rules below come from official announcements; account linking and migration have not been tested in-game for this guide.
          </p>
        </header>

        <section aria-labelledby="quick-answer" className="mb-8 rounded-lg border border-border bg-mist p-5">
          <h2 id="quick-answer" className="mb-3 text-xl font-bold text-foreground">Your Demo progress and character name carry over</h2>
          <p className="text-sm leading-7 text-muted-foreground">
            The <a href={demoNews} className="underline">developer&apos;s October 8 Demo announcement</a> confirms that what you complete or collect stays with your character in Early Access.
            Your name carries over too, but the announcement says it becomes available to others if you do not log into Early Access during the three months between November 3, 2026 and February 3, 2027.
            <strong className="text-foreground"> That is a name reservation rule, not a statement that all progress will be deleted.</strong>
          </p>
        </section>

        <nav aria-label="On this page" className="mb-10 flex flex-wrap gap-x-5 gap-y-3 text-sm underline">
          <Link href="#carryover">What carries over</Link>
          <Link href="#name-window">Name retention window</Link>
          <Link href="#account-checklist">Account and rewards checklist</Link>
          <Link href="#platforms">Servers and platforms</Link>
          <Link href="#sources">Sources and limits</Link>
        </nav>

        <section id="carryover" className="mb-10 scroll-mt-20">
          <h2 className="mb-4 text-2xl font-bold text-foreground">What carries over, and what needs a check?</h2>
          <p className="mb-4 text-sm leading-7 text-muted-foreground">The <a href={demoNews} className="underline">Demo announcement</a> supports the progress, name and reward rows below. It described one character per account during the Demo and multiple characters after Early Access began; it did not give a current numeric character limit.</p>
          <p className="mb-3 text-xs text-muted-foreground">On small screens, scroll the table sideways to compare all columns.</p>
          <div role="region" aria-label="Demo carryover comparison, horizontally scrollable" tabIndex={0} className="overflow-x-auto rounded-lg border border-border bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">Loftia Demo to Early Access carryover and its limits</caption>
              <thead className="border-b border-border bg-mist"><tr>{["Data or feature", "Official status", "Limit or action"].map((label) => <th key={label} scope="col" className="px-4 py-3 font-semibold">{label}</th>)}</tr></thead>
              <tbody>{carryover.map(([item, status, limit]) => (
                <tr key={item} className="border-b border-border align-top last:border-0">
                  <th scope="row" className="px-4 py-4 font-semibold leading-6">{item}</th>
                  <td className="px-4 py-4 leading-6 text-muted-foreground">{status}</td>
                  <td className="px-4 py-4 leading-6 text-muted-foreground">{limit}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </section>

        <section id="name-window" className="mb-10 max-w-3xl scroll-mt-20">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Protect your name during the announced window</h2>
          <p className="mb-4 text-sm leading-7 text-muted-foreground">If you claimed a name during the Steam Next Fest Demo and want to keep it, plan to log into Early Access well before <time dateTime="2027-02-03">February 3, 2027</time>. The official window begins on <time dateTime="2026-11-03">November 3, 2026</time>.</p>
          <p className="text-sm leading-7 text-muted-foreground"><strong className="text-foreground">UNKNOWN:</strong> the exact cutoff time, timezone, treatment of a login on the final boundary, and a recovery process after a name is released. The announcement does not say that a website login alone satisfies the Early Access login condition. Do not apply this deadline to every item, quest or reward.</p>
        </section>

        <section id="account-checklist" className="mb-10 max-w-3xl scroll-mt-20">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Account and Demo reward checklist</h2>
          <p className="mb-4 text-sm leading-7 text-muted-foreground">The Demo ran October 19–26, 2026. The announcement&apos;s event requirements describe eligibility during that period; they are not a promise that a new player can unlock an exclusive Demo reward now.</p>
          <ol className="list-decimal space-y-4 pl-5 text-sm leading-7 text-muted-foreground">
            <li><strong className="text-foreground">Identify the account holding your Demo character.</strong> Check which account you used and which email you linked before using a different account. Cross-account transfer, account merging and relinking rules are not verified by the cited sources.</li>
            <li><strong className="text-foreground">Separate progress from reward claims.</strong> Progress carryover is confirmed. For the Demo Banner specifically, the announcement required first entering the Player Neighborhood during the event, linking an email address and claiming the reward on <a href="https://loftia.gg/" className="underline">the official Loftia website</a>.</li>
            <li><strong className="text-foreground">Check whether you completed both account actions.</strong> Email linking and the website claim are separate stated requirements. A <a href="https://store.steampowered.com/news/app/2320980/view/714541927145411938" className="underline">later Demo patch note</a> mentions the “Link Your Email” button, but it does not verify today&apos;s full menu flow or allow a late claim. If either action was missed, ask official support whether anything can still be done.</li>
            <li><strong className="text-foreground">Log into Early Access during the name retention window.</strong> Do this well before February 3 if you want the Demo name. The sources do not give a verified manual save-file import or server migration procedure.</li>
          </ol>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">For unresolved account or reward issues, use the support contact linked in the <a href={faqUrl} className="underline">official FAQ</a>. Late reward eligibility, recovery of a released name and account-link changes remain UNKNOWN here.</p>
        </section>

        <section id="platforms" className="mb-10 max-w-3xl scroll-mt-20">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Servers, platforms and crossplay are separate questions</h2>
          <ul className="list-disc space-y-4 pl-5 text-sm leading-7 text-muted-foreground">
            <li><strong className="text-foreground">Online access is required.</strong> The <a href={faqUrl} className="underline">FAQ</a> says Loftia needs an internet connection even when playing solo.</li>
            <li><strong className="text-foreground">Friends must be on the same server to play together.</strong> The FAQ also says players are not locked to a server. It does not provide verified server selection, migration, capacity or region-switching steps.</li>
            <li><strong className="text-foreground">Multiple stores do not establish crossplay.</strong> The FAQ lists Steam and Epic on PC/Mac, plus Steam Deck support, but still describes crossplay as being researched and tested without a promise. Cross-store character access and shared saves remain unverified.</li>
            <li><strong className="text-foreground">Check hardware requirements separately.</strong> The <a href="https://store.steampowered.com/app/2320980/Loftia/" className="underline">Steam listing</a> lists Windows and macOS; its Mac requirements specify Apple Silicon and exclude Intel Macs. The FAQ describes Switch as a future 2027 plan, not a currently verified release.</li>
          </ul>
        </section>

        <section id="sources" className="mb-10 rounded-lg border border-border p-5 scroll-mt-20">
          <h2 className="mb-4 text-xl font-bold text-foreground">Official sources and verification limits</h2>
          <ul className="list-disc space-y-3 pl-5 text-sm leading-7 text-muted-foreground">
            <li><a href={demoNews} className="underline">Developer Steam Next Fest Demo announcement — October 8, 2026</a>: progress, items, character names, the three-month name condition and Demo Banner requirements.</li>
            <li><a href="https://store.steampowered.com/news/app/2320980/view/714541927145411938" className="underline">Developer Demo patch notes #2 — October 23, 2026</a>: the Demo email-link button, rather than a verified current account-linking procedure.</li>
            <li><a href={faqUrl} className="underline">Loftia official FAQ</a>: online play, servers, platform plans and the unconfirmed crossplay position.</li>
            <li><a href="https://loftia.gg/demo/" className="underline">Official Demo URL</a>: now redirects to the <a href="https://loftia.gg/early-access/" className="underline">Early Access page</a>. The earlier Demo rules remain available in the linked developer announcement.</li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-muted-foreground"><strong className="text-foreground">Official confirmation is not a current-version test.</strong> No account linking, reward claim, save continuity, multiplayer connection or platform performance was tested in-game for this guide. Exact installed build and hotfix behavior are unverified. Check newer official notices if your account behaves differently.</p>
        </section>
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
