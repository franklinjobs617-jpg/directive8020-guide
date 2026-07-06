import Link from "next/link";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { PalworldArticle } from "@/components/palworld-article";
import { createPalworldMetadata, palworldImages } from "@/lib/palworld";

const title = "Palworld 1.0 Release Date: Exact Time, Platforms & What Changes";
const description =
  "Palworld 1.0 launches July 10, 2026 on PC, PlayStation 5, and Xbox. Here is the confirmed release timing, platform list, price, and what actually changes when Early Access ends.";
const canonical = "/games/palworld/1-0-release-date";

export const metadata = createPalworldMetadata({
  title,
  description,
  canonical,
  image: palworldImages.siteHero,
});

const faqs = [
  {
    question: "What time does Palworld 1.0 release?",
    answer:
      "Pocketpair is a Japan-based studio, so the update is expected to roll out based on Japan Standard Time, likely around 9 AM JST on July 10, 2026 (roughly 8 PM ET on July 9 for US players). Pocketpair has not published an official minute-by-minute time as of this writing — check the official Palworld Steam page and social accounts close to launch for the confirmed time.",
  },
  {
    question: "Is Palworld 1.0 releasing on all platforms at once?",
    answer:
      "Yes. Pocketpair has confirmed a simultaneous launch across PC (Steam), PlayStation 5, and Xbox Series X|S/Xbox One on July 10, 2026, with full crossplay support intact. There is no staggered platform rollout.",
  },
  {
    question: "Do I have to pay for the 1.0 update?",
    answer:
      "No. Palworld 1.0 is a free update for anyone who already owns the game. There is no separate purchase or DLC charge announced for the base 1.0 content.",
  },
  {
    question: "Is Palworld still on Xbox Game Pass?",
    answer:
      "Yes, Palworld has been available through Xbox Game Pass since its 2024 Early Access launch, and multiple sources confirm Game Pass access continues with the 1.0 release.",
  },
  {
    question: "What actually changes when Palworld leaves Early Access?",
    answer:
      "The Early Access label is removed and the game becomes eligible for full critical reviews and awards consideration for the first time. Content-wise, 1.0 adds the World Tree endgame region, a second major island, the largest Pal roster drop in the game's history, a new Genetic Recombination breeding system, PvP mode, and Server Clustering for dedicated servers — described by Pocketpair as the biggest update in the game's history, with 27 pages of patch notes.",
  },
];

const searchIntentRows = [
  {
    query: "Palworld 1.0 release date",
    answer: "July 10, 2026, confirmed by Pocketpair at Summer Game Fest 2026.",
    href: "#facts",
    label: "Date",
  },
  {
    query: "What time does Palworld 1.0 come out",
    answer: "No official minute-by-minute time confirmed yet; expect a JST-based rollout, likely evening ET on July 9 for US players.",
    href: "#facts",
    label: "Time",
  },
  {
    query: "Is Palworld 1.0 free",
    answer: "Yes — it is a free update for existing owners, not a separate purchase.",
    href: "#what-changes",
    label: "Price",
  },
  {
    query: "Palworld 1.0 platforms",
    answer: "PC (Steam), PlayStation 5, and Xbox Series X|S/Xbox One, all simultaneously, with full crossplay.",
    href: "#platform-status",
    label: "Platforms",
  },
];

const jumpLinks = [
  { href: "#facts", label: "Facts" },
  { href: "#platform-status", label: "Platforms" },
  { href: "#what-changes", label: "What changes" },
  { href: "/games/palworld/system-requirements", label: "Specs" },
  { href: "/games/palworld/save-data-1-0", label: "Save data" },
];

const releaseFacts = [
  ["Release Date", "July 10, 2026"],
  ["Announced", "Summer Game Fest 2026"],
  ["Exact Launch Time", "Not officially confirmed — likely JST-based rollout (evening ET on July 9 for US players)"],
  ["Price", "Free update for existing owners"],
  ["Platforms", "PC (Steam), PlayStation 5, Xbox Series X|S/Xbox One — simultaneous"],
  ["Crossplay", "Full crossplay across all platforms"],
  ["Xbox Game Pass", "Included (as with Early Access)"],
  ["Save Data", "Not wiped — see our save data guide"],
];

const platformRows = [
  ["PC (Steam)", "Confirmed — July 10, 2026"],
  ["PlayStation 5", "Confirmed — July 10, 2026, simultaneous with PC"],
  ["Xbox Series X|S / Xbox One", "Confirmed — July 10, 2026, includes Game Pass"],
  ["Mobile (iOS/Android)", "Listed on Pocketpair's official site — check the official page for current availability"],
  ["Mac / Linux / Switch", "Not announced"],
];

export default function PalworldReleaseDatePage() {
  return (
    <PalworldArticle
      title={title}
      description={description}
      canonical={canonical}
      label="1.0 Release Date"
      heroImage={palworldImages.hero}
      heroAlt="Palworld 1.0 release date announcement"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="When does Palworld 1.0 release and what platforms get it?"
        answer="Palworld 1.0 releases July 10, 2026, simultaneously on PC (Steam), PlayStation 5, and Xbox Series X|S/Xbox One, with full crossplay. It is a free update for existing owners — there is no separate purchase. Pocketpair has not published an exact launch time; expect a Japan Standard Time-based rollout."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Release Summary">
        <p>
          <strong>Mark July 10, 2026 — that is the confirmed date across every platform, and it costs nothing extra.</strong>{" "}
          Back up your save beforehand. Pocketpair has not locked in an exact time, so treat the date as the
          reliable fact and the hour as still unconfirmed until closer to launch.
        </p>
      </BlufBox>

      <section id="facts">
        <StatusPanel
          items={releaseFacts.map(([label, value]) => ({
            label,
            value,
            status: (label === "Exact Launch Time" ? "needs-check" : "verified") as "verified" | "needs-check",
          }))}
        />
      </section>

      <section id="platform-status" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Platform Status</h2>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          Unlike many early access-to-1.0 transitions, Palworld is not staggering its release across platforms —
          every confirmed platform gets 1.0 on the same day.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Platform</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {platformRows.map(([platform, status]) => (
                <tr key={platform} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{platform}</td>
                  <td className="px-4 py-3 text-muted-foreground">{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="what-changes" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">What Actually Changes at 1.0</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Beyond the Early Access label being removed, Pocketpair has confirmed 1.0 adds the World Tree endgame
          region, a second major island that roughly doubles the playable map, the largest single batch of new
          Pals in the game&apos;s history, a new Genetic Recombination breeding system, a proper PvP mode, and
          Server Clustering for dedicated servers. Pocketpair&apos;s publishing lead has described the patch notes
          as running 27 pages — this is being positioned as the biggest update the game has received. See our{" "}
          <Link href="/games/palworld/system-requirements" className="text-foreground underline">
            system requirements guide
          </Link>{" "}
          and{" "}
          <Link href="/games/palworld/save-data-1-0" className="text-foreground underline">
            save data guide
          </Link>{" "}
          before you dive in.
        </p>
      </section>
    </PalworldArticle>
  );
}
