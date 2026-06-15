import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "About Enjoy4Game — Who We Are & How We Write Guides",
  description:
    "Enjoy4Game covers Steam new releases and early access games with practical walkthroughs, builds, and tools. Learn how guides are written, what games we cover, and how to contact us.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="site-shell py-8">
      <Breadcrumb items={[{ label: "About", href: "/about" }]} />

      <h1 className="mb-4 text-[42px] font-bold leading-[1.08] tracking-[-1.39px] text-foreground sm:text-[54px]">
        About Enjoy4Game
      </h1>

      <div className="max-w-3xl space-y-10 text-base leading-7 text-foreground">

        {/* ── What this site is ── */}
        <section>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
            What Enjoy4Game is
          </h2>
          <p className="text-muted-foreground">
            Enjoy4Game is a game guide hub focused on Steam releases — new
            launches, early access titles, and games that don't yet have deep
            coverage elsewhere. The goal is simple: give players the practical
            information they need, written clearly and updated as the game
            changes.
          </p>
          <p className="mt-3 text-muted-foreground">
            Coverage spans survival games, RPGs, story-driven horror, life sims,
            strategy titles, and indie releases. For each game, guides cover
            release facts, beginner routes, builds, endings, trophies, Steam
            Deck compatibility, and troubleshooting — whatever players actually
            search for when they're stuck or deciding whether to buy.
          </p>
        </section>

        {/* ── How guides are made ── */}
        <section>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
            How guides are written
          </h2>
          <p className="text-muted-foreground">
            Each guide starts from the game itself — launch builds, developer
            patch notes, official Steam pages, and community feedback. Where
            possible, information is verified in-game before publication.
            Pre-release coverage (release dates, system requirements, platform
            notes) is sourced from official Steam listings and developer
            announcements, and updated when the live build changes things.
          </p>
          <p className="mt-3 text-muted-foreground">
            Guides are updated after patches and version changes. If something
            is out of date or wrong, the contact form below is the fastest way
            to flag it.
          </p>
        </section>

        {/* ── Games covered ── */}
        <section>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
            Games currently covered
          </h2>
          <p className="text-muted-foreground">
            Active guide hubs include Directive 8020, Fatekeeper, Project: Mist,
            Starminer, Paralives, Romestead, Luna Abyss, Voidling Bound,
            Enginefall, Mina the Hollower, JUMP KING QUEST, Warhammer 40,000:
            Mechanicus II, ZERO PARADES, Thick As Thieves, and Gate Guard
            Simulator, among others. New games are added around launch or early
            access release. The full list is on the{" "}
            <a href="/games" className="underline underline-offset-2">
              Games page
            </a>
            .
          </p>
        </section>

        {/* ── Who runs it ── */}
        <section>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
            Who runs this site
          </h2>
          <p className="text-muted-foreground">
            Enjoy4Game is an independently run guide site. It is not affiliated
            with any game developer, publisher, or platform. Coverage decisions
            and guide content are made editorially, not by commercial arrangement
            with game studios.
          </p>
          <p className="mt-3 text-muted-foreground">
            The site runs Google AdSense and Ezoic to support ongoing
            maintenance and coverage of new releases. No sponsored content or
            paid placements are published without clear disclosure.
          </p>
        </section>

        {/* ── Contact ── */}
        <section>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground">
            Contact
          </h2>
          <p className="text-muted-foreground">
            For corrections, guide requests, or partnership enquiries, reach out
            at{" "}
            <a
              href="mailto:contact@enjoy4game.com"
              className="underline underline-offset-2"
            >
              contact@enjoy4game.com
            </a>
            . Game-specific feedback (wrong data, outdated info, missing content)
            is especially welcome — it helps keep guides accurate after patches.
          </p>
        </section>

      </div>
    </div>
  );
}
