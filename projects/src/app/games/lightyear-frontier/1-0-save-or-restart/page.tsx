import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { FAQSection } from "@/components/faq-section";
import { JsonLd, generateFAQSchema } from "@/components/json-ld";

const title = "Lightyear Frontier 1.0: Keep Your Save or Start Fresh?";
const description =
  "Old Lightyear Frontier saves work in 1.0. Compare continuing and restarting, including achievements, progression, automation and mech changes.";
const canonical = "/games/lightyear-frontier/1-0-save-or-restart";
const faqUrl = "https://lightyearfrontier.com/1-0-frequently-asked-questions/";
const launchUrl = "https://lightyearfrontier.com/lightyear-frontier-1-0-out-now/";

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
    question: "Do I have to restart Lightyear Frontier for 1.0?",
    answer:
      "No. The official FAQ says old saves remain playable. Starting fresh is recommended for a more natural progression and balance experience, but it is optional.",
  },
  {
    question: "Can I earn the new 1.0 achievements on an old save?",
    answer:
      "Yes. The developer explicitly confirms that the new achievements work with old saves. This is not a reason to restart by itself.",
  },
  {
    question: "What happens to my mech equipment when I continue?",
    answer:
      "The November 4 launch post says no reset is required: Mods carry over, and existing players receive Parts equivalent to their current highest Tier. This does not mean the old customization layout stays unchanged.",
  },
  {
    question: "Does 1.0 change the Legacy branch?",
    answer:
      "The official FAQ says 1.0 does not update or change the Legacy branch. It does not provide a verified step-by-step Legacy save migration procedure.",
  },
];

const decisions = [
  {
    situation: "You finished the Automation Update and want the story conclusion.",
    keep: "Strong fit: the FAQ says 1.0 picks up where that update left off, so caught-up players can head into the endgame.",
    restart: "Choose this if replaying the revised early progression matters more than reaching new content quickly.",
  },
  {
    situation: "You want to keep a farm you spent time building.",
    keep: "Keeps your existing save in use. Allow time to review the changed automation and mech systems.",
    restart: "Fits only if a fresh progression run is worth rebuilding to you; compatibility does not require it.",
  },
  {
    situation: "You left early or want to learn the revised progression from the beginning.",
    keep: "Still supported, but you will be returning partway through systems that have changed.",
    restart: "Best match for the developer's recommendation of a more natural, better-flowing overall experience.",
  },
  {
    situation: "Your main concern is the new achievements.",
    keep: "Supported: the developer confirms new achievements work with old saves.",
    restart: "Optional preference, not an achievement requirement.",
  },
];

export default function LightyearSaveDecisionPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(faqs)} />
      <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
        <div className="[&_ol]:flex-wrap">
          <Breadcrumb items={[{ label: "Games", href: "/games" }, { label: "Lightyear Frontier save decision", href: canonical }]} />
        </div>
        <header className="mb-8 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Lightyear Frontier · 1.0</p>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">Lightyear Frontier 1.0: Keep Your Save or Start Fresh?</h1>
          <p className="text-sm leading-7 text-muted-foreground">
            Sources checked <time dateTime="2026-11-05">November 5, 2026</time>. Version 1.0 released on November 4 for Steam and Xbox,
            according to the <a href={launchUrl} className="underline">official launch post</a>.
            This guide uses developer statements; it does not claim hands-on save migration testing.
          </p>
        </header>

        <section aria-labelledby="quick-answer" className="mb-8 rounded-lg border border-border bg-mist p-5">
          <h2 id="quick-answer" className="mb-3 text-xl font-bold text-foreground">The short answer: restarting is optional</h2>
          <p className="text-sm leading-7 text-muted-foreground">
            <strong className="text-foreground">Keep your existing save if preserving your farm and continuing toward the endgame is your priority.</strong>{" "}
            Start fresh if you want to experience the rebalanced progression from the beginning.
            The <a href={faqUrl} className="underline">official 1.0 FAQ</a> confirms old saves remain playable and can earn the new achievements.
            Its recommendation to restart is about the overall experience, not a mandatory reset.
          </p>
        </section>

        <nav aria-label="On this page" className="mb-10 flex flex-wrap gap-x-5 gap-y-3 text-sm underline">
          <a href="#decision-table">Compare your options</a>
          <a href="#version-changes">Changes that matter</a>
          <a href="#checklist">Before you choose</a>
          <a href="#sources">Sources and limits</a>
        </nav>

        <section id="decision-table" className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Keep Existing Save vs Start Fresh</h2>
          <p className="mb-4 text-sm leading-7 text-muted-foreground">These choices are editorial guidance based on the official FAQ and launch notes, rather than results from a tested playthrough.</p>
          <p className="mb-3 text-xs text-muted-foreground">On small screens, scroll the table sideways to compare all columns.</p>
          <div role="region" aria-label="Save decision comparison, horizontally scrollable" tabIndex={0} className="overflow-x-auto rounded-lg border border-border bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">Which save option fits your situation in Lightyear Frontier 1.0?</caption>
              <thead className="border-b border-border bg-mist">
                <tr>{["Your situation", "Keep Existing Save", "Start Fresh"].map((label) => <th key={label} scope="col" className="w-1/3 px-4 py-3 font-semibold">{label}</th>)}</tr>
              </thead>
              <tbody>{decisions.map((row) => (
                <tr key={row.situation} className="border-b border-border align-top last:border-0">
                  <th scope="row" className="px-4 py-4 font-semibold leading-6">{row.situation}</th>
                  <td className="px-4 py-4 leading-6 text-muted-foreground">{row.keep}</td>
                  <td className="px-4 py-4 leading-6 text-muted-foreground">{row.restart}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </section>

        <section id="version-changes" className="mb-10 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-foreground">What changed enough to affect the decision?</h2>
          <p className="mb-4 text-sm leading-7 text-muted-foreground">The <a href={launchUrl} className="underline">November 4 release notes</a> explain why a compatible old save may still feel different:</p>
          <ul className="list-disc space-y-4 pl-5 text-sm leading-7 text-muted-foreground">
            <li><strong className="text-foreground">Progression and deliveries were rebalanced.</strong> Existing Milestones were overhauled, and Milestones 13 and 14 were added. A restart lets you follow the revised sequence from its beginning.</li>
            <li><strong className="text-foreground">Automation starts earlier and works differently.</strong> It begins at Milestone 4; Automation Pipes replace Automators, with resources available directly from Storage. Continuing players should review their setup rather than assume every old arrangement works identically.</li>
            <li><strong className="text-foreground">Mech customization has new upgrade paths.</strong> Tools and Parts now upgrade along dedicated paths. The developer says Mods carry over and equivalent highest-Tier Parts are supplied, so this redesign does not itself require a reset.</li>
            <li><strong className="text-foreground">The main story now has an ending.</strong> Sandswept Highlands and Hollow Marsh are added, with new main and neighbor missions. This gives caught-up players a reason to continue rather than replay everything first.</li>
          </ul>
        </section>

        <section id="checklist" className="mb-10 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Before you choose</h2>
          <ol className="list-decimal space-y-4 pl-5 text-sm leading-7 text-muted-foreground">
            <li><strong className="text-foreground">Check the version and branch you are using.</strong> These recommendations concern the 1.0 release. The FAQ says the Legacy branch receives no changes; it does not establish a Legacy-to-1.0 migration procedure.</li>
            <li><strong className="text-foreground">Choose your goal.</strong> Prioritize keeping an established farm and reaching new endgame content, or prioritize relearning the revised progression. Neither choice is required just to earn the new achievements.</li>
            <li><strong className="text-foreground">If continuing, read the automation and mech sections first.</strong> Save compatibility is confirmed; an unchanged layout or identical behavior for every old setup is not.</li>
            <li><strong className="text-foreground">If restarting, treat it as a preference.</strong> A new run follows the developer&apos;s experience recommendation. Nothing in that recommendation instructs you to delete your existing save.</li>
          </ol>
        </section>

        <section id="sources" className="mb-10 rounded-lg border border-border p-5">
          <h2 className="mb-4 text-xl font-bold text-foreground">Official sources and what remains unverified</h2>
          <ul className="list-disc space-y-3 pl-5 text-sm leading-7 text-muted-foreground">
            <li><a href={faqUrl} className="underline">1.0 Frequently Asked Questions — October 26, 2026</a>: save compatibility, optional restart, achievements, Automation Update continuity and Legacy branch status.</li>
            <li><a href={launchUrl} className="underline">Lightyear Frontier 1.0 OUT NOW! — November 4, 2026</a>: release confirmation, progression changes and equipment carryover details. Use this newer post for release-day changes.</li>
            <li><a href="https://store.steampowered.com/app/1677110/Lightyear_Frontier/" className="underline">Official Steam listing</a>: store and platform reference. The November 4 launch date follows the developer&apos;s official 1.0 release announcement linked above.</li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-muted-foreground"><strong className="text-foreground">Not tested:</strong> an actual old-save upgrade, individual achievement triggers, platform-specific save handling, cloud conflicts or a later hotfix. No manual file-copy, backup-directory or conversion steps are verified here. Check newer official notes if your installed build differs or a specific save fails.</p>
        </section>
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
