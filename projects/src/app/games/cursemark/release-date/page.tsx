import { CursemarkArticle } from "@/components/cursemark-article";
import { createCursemarkMetadata, cursemarkImages } from "@/lib/cursemark";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { ArticleImage } from "@/components/article-media";
import Link from "next/link";

const title = "Cursemark Release Date: Early Access Launch, Steam Unlock Time & Developer Info";
const description =
  "Cursemark release date guide for the dark fantasy action roguelite from CLYDE Games. June 8, 2026 Early Access launch on Steam, $14.99 price (15% launch discount to $12.74), Windows and Linux support.";
const canonical = "/games/cursemark/release-date";

const faqs = [
  {
    question: "When exactly did Cursemark release?",
    answer:
      "Cursemark, the dark fantasy action roguelite from CLYDE Games, launched into Steam Early Access on June 8, 2026. Steam does not always unlock at midnight in every region — the game went live at the standard Steam store refresh time of 10 AM Pacific / 1 PM Eastern / 6 PM BST.",
  },
  {
    question: "How much does Cursemark cost?",
    answer:
      "Cursemark is priced at $14.99 USD on Steam. A 15% launch discount brought the price to $12.74 during the first week. Regional pricing varies — check your local Steam store for the exact price in your currency.",
  },
  {
    question: "Is Cursemark available on consoles or Mac?",
    answer:
      "No. Cursemark is currently PC-only, available on Windows and Linux via Steam. There are no announced plans for PlayStation, Xbox, Nintendo Switch, or Mac at this time. The solo developer CLYDE Games has stated that ports may be considered after the full 1.0 release depending on Early Access success.",
  },
  {
    question: "Who developed and published Cursemark?",
    answer:
      "Cursemark was developed by CLYDE Games, a solo developer, and published by Mad Mushroom. This is CLYDE Games' debut title. Mad Mushroom is known for publishing indie roguelites and action games.",
  },
  {
    question: "How long will Cursemark be in Early Access?",
    answer:
      "CLYDE Games has not announced a specific 1.0 release date. Based on the current 3-biome scope and the developer's stated roadmap of adding more biomes, enemies, runes, and bosses, the full release is expected sometime in 2027. The developer provides regular updates through Steam announcements and the official Discord.",
  },
];

export const metadata = createCursemarkMetadata({
  title,
  description,
  canonical,
  image: cursemarkImages.siteHero,
});

export default function Page() {
  return (
    <CursemarkArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Release Date"
      heroImage={cursemarkImages.hero}
      heroAlt="Cursemark release date and Early Access launch guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="When did Cursemark release?"
        answer="Cursemark, the dark fantasy action roguelite from CLYDE Games, launched into Steam Early Access on June 8, 2026. It is priced at $14.99 with a 15% launch discount bringing it to $12.74. The game is available on Windows PC and Linux via Steam."
        intentRows={[
          {
            query: "Cursemark price and discount",
            answer: "$14.99 base price (currently $12.74 with 15% launch discount). Regional pricing available on Steam.",
            href: "/games/cursemark/release-date",
            label: "Price",
          },
          {
            query: "Cursemark platforms and consoles",
            answer: "Windows and Linux only. No console or Mac versions currently planned until after 1.0.",
            href: "/games/cursemark/release-date",
            label: "Platforms",
          },
        ]}
        jumpLinks={[
          { href: "#facts", label: "Release facts" },
          { href: "#platforms", label: "Platforms" },
          { href: "#price", label: "Price" },
          { href: "#developer", label: "Developer" },
        ]}
      />

      <BlufBox>
        <p>
          <strong>Cursemark is a solo-developed roguelite by CLYDE Games, published by Mad Mushroom.</strong>{" "}
          The $14.99 price point reflects its Early Access scope of 3 biomes — expect more content throughout Early Access.
          This is NOT related to Elden Ring's Cursemark of Death — Cursemark is a standalone dark fantasy action roguelite
          from CLYDE Games.
        </p>
      </BlufBox>

      <section id="facts">
        <StatusPanel
          items={[
            { label: "Release Date", value: "June 8, 2026 (Steam Early Access).", status: "verified" as const },
            { label: "Developer", value: "CLYDE Games (solo developer).", status: "verified" as const },
            { label: "Publisher", value: "Mad Mushroom.", status: "verified" as const },
            { label: "Price", value: "$14.99 ($12.74 with 15% launch discount).", status: "verified" as const },
            { label: "Platforms", value: "Windows PC + Linux via Steam. No console or Mac.", status: "verified" as const },
            { label: "Early Access Scope", value: "3 biomes, ~6 hours unique content.", status: "working" as const },
            { label: "1.0 Release", value: "TBA (expected 2027 based on roadmap).", status: "working" as const },
            { label: "Steam Reviews", value: "Very Positive (90%+ positive).", status: "working" as const },
          ]}
        />
      </section>

      <section id="platforms" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Platform Availability</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Cursemark is a PC-first title and will remain so throughout Early Access. Here is the current platform status:
        </p>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Platform</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-semibold text-foreground">Windows PC</td>
                <td className="px-4 py-3 text-green-600 font-medium">Confirmed</td>
                <td className="px-4 py-3 text-muted-foreground">Windows 10/11 64-bit required. Available now on Steam.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-semibold text-foreground">Linux / SteamOS</td>
                <td className="px-4 py-3 text-green-600 font-medium">Confirmed</td>
                <td className="px-4 py-3 text-muted-foreground">Ubuntu 16.04+ supported natively. Works on Steam Deck via Proton or native.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-semibold text-foreground">Mac</td>
                <td className="px-4 py-3 text-red-600 font-medium">Not available</td>
                <td className="px-4 py-3 text-muted-foreground">No Mac build planned during Early Access. May be considered post-1.0.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-semibold text-foreground">PlayStation 5</td>
                <td className="px-4 py-3 text-orange-600 font-medium">Not announced</td>
                <td className="px-4 py-3 text-muted-foreground">No console ports announced. Solo developer is focused on PC Early Access first.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-foreground">Nintendo Switch</td>
                <td className="px-4 py-3 text-orange-600 font-medium">Not announced</td>
                <td className="px-4 py-3 text-muted-foreground">Extremely low system requirements make a Switch port technically feasible, but no announcement has been made.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="price" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Price and Launch Discount</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Cursemark is priced at <strong>$14.99 USD</strong> as its base Early Access price. The game launched with a
          15% discount, bringing the price to <strong>$12.74</strong> during the first week. This is standard Steam
          launch discount practice and the price will return to $14.99 after the discount period ends.
        </p>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Given that Cursemark is a solo-developed title with approximately 6 hours of unique content across 3 biomes,
          the $14.99 price point is competitive with similar roguelites in Early Access. As more biomes, enemies, runes,
          and bosses are added throughout Early Access, the value proposition will continue to improve.
        </p>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          For full buying advice including whether the price is justified for the current content scope, see our{" "}
          <Link href="/games/cursemark/is-it-worth-it" className="text-foreground underline hover:no-underline">
            Is Cursemark Worth It?
          </Link>{" "}
          guide.
        </p>
      </section>

      <section id="developer" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Developer Background</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Cursemark is the debut title of <strong>CLYDE Games</strong>, a solo developer. The game is published by{" "}
          <strong>Mad Mushroom</strong>, an indie publisher that has supported several roguelite and action game launches.
        </p>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          As a solo developer project, updates and patches may come at a slower pace compared to larger studio titles.
          However, CLYDE Games has been active in communicating through Steam announcements and the official Discord
          server, sharing development progress and addressing player feedback throughout the Early Access period.
        </p>
        <ArticleImage
          src={cursemarkImages.hero}
          alt="Cursemark dark fantasy action roguelite Steam store page"
          caption="Cursemark is available now on Steam for $14.99. Search for 'Cursemark CLYDE Games' on Steam — make sure you find the roguelite, not Elden Ring content about the Cursemark of Death."
        />
      </section>

      <section className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Related Guides</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Now that you know when Cursemark launched and what it costs, check whether your PC can run it and decide if
          it is worth buying:
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <Link href="/games/cursemark/system-requirements" className="text-foreground underline hover:no-underline">
              Cursemark System Requirements
            </Link>{" "}
            — minimum and recommended specs, Linux support details, and known performance issues.
          </li>
          <li>
            <Link href="/games/cursemark/is-it-worth-it" className="text-foreground underline hover:no-underline">
              Is Cursemark Worth It?
            </Link>{" "}
            — full buying guide with pros/cons, price vs content analysis, and buy/wait/skip verdict.
          </li>
          <li>
            <Link href="/games/cursemark/beginner-guide" className="text-foreground underline hover:no-underline">
              Cursemark Beginner Guide
            </Link>{" "}
            — first run tips, best starting weapon, and essential survival advice.
          </li>
        </ul>
      </section>
    </CursemarkArticle>
  );
}
