import Link from "next/link";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { PalworldArticle } from "@/components/palworld-article";
import { createPalworldMetadata, palworldImages } from "@/lib/palworld";

const title = "Palworld Save Data & 1.0: Backup Checklist, Dedicated Servers & Mod Compatibility";
const description =
  "No, Palworld 1.0 does not force-wipe saves. Here's the backup checklist before you update, what happens to dedicated servers, whether mods still work, and whether a fresh start is worth it.";
const canonical = "/games/palworld/save-data-1-0";

export const metadata = createPalworldMetadata({
  title,
  description,
  canonical,
  image: palworldImages.siteHero,
});

const faqs = [
  {
    question: "Palworld 1.0 wipe — does it happen?",
    answer:
      "No wipe. Palworld's 1.0 update on July 10, 2026 does not force-wipe existing saves, worlds, or dedicated servers. This has been confirmed by Pocketpair — a fresh start is optional, not required.",
  },
  {
    question: "Will I lose my Palworld save when 1.0 releases?",
    answer:
      "No. Multiple official sources confirm existing worlds and dedicated servers are not force-wiped by the 1.0 update on July 10, 2026. Your base, Pals, and progress will still be there after updating.",
  },
  {
    question: "Why does Pocketpair recommend starting fresh anyway?",
    answer:
      "1.0 overhauls progression systems, tower boss encounters, and wildlife sanctuaries, and adds new early-to-mid-game content tied to the World Tree region. Loading an old, high-level save can skip past content that was designed to be experienced in order, and some players may find an endgame character feels disconnected from the reworked early game.",
  },
  {
    question: "Should I back up my save before updating to 1.0?",
    answer:
      "Yes. Even though no wipe is planned, Pocketpair and third-party server hosts both recommend backing up your save or server data before any major version update, since large patches can occasionally cause unexpected issues with older save files.",
  },
  {
    question: "What happens to my dedicated server when 1.0 launches?",
    answer:
      "Existing dedicated servers update to 1.0 automatically — you do not need to set up a new server. If you migrate a local or co-op world onto a dedicated server, note that the host's own character data does not transfer in that process, only the world and other players' characters.",
  },
  {
    question: "Do mods still work after the 1.0 update?",
    answer:
      "Not guaranteed. Mod compatibility is typically one of the first things to break after a major patch. If you run a modded save or server, check each mod for a 1.0-compatible update before relying on it, and be prepared for a period where some mods are temporarily broken.",
  },
];

const searchIntentRows = [
  {
    query: "Does Palworld 1.0 wipe saves",
    answer: "No — existing worlds and dedicated servers carry over without a forced wipe.",
    href: "#facts",
    label: "Wipe?",
  },
  {
    query: "Should I start a new Palworld save for 1.0",
    answer: "Optional. Recommended by Pocketpair for the cleanest experience of reworked systems, but not required.",
    href: "#fresh-vs-carryover",
    label: "Fresh start?",
  },
  {
    query: "Palworld 1.0 dedicated server update",
    answer: "Existing dedicated servers update automatically to 1.0 — no new server setup needed.",
    href: "#dedicated-servers",
    label: "Servers",
  },
];

const jumpLinks = [
  { href: "#facts", label: "Facts" },
  { href: "#fresh-vs-carryover", label: "Fresh vs. carry over" },
  { href: "#dedicated-servers", label: "Servers" },
  { href: "#backup-checklist", label: "Backup checklist" },
  { href: "/games/palworld/1-0-release-date", label: "1.0 release" },
];

const saveFacts = [
  ["Forced Wipe?", "No — not planned for 1.0"],
  ["Fresh Start Required?", "No — optional, but recommended by Pocketpair"],
  ["Dedicated Servers", "Update automatically to 1.0, no new server needed"],
  ["Mod Compatibility", "Not guaranteed — check each mod after updating"],
  ["Backup Recommended?", "Yes — before any major version update"],
];

export default function PalworldSaveDataPage() {
  return (
    <PalworldArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Save Data & 1.0"
      heroImage={palworldImages.hero}
      heroAlt="Palworld save data and 1.0 update guidance"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="Does Palworld 1.0 wipe your save?"
        answer="No. Existing worlds and dedicated servers carry over to the July 10, 2026 1.0 update without a forced wipe. Pocketpair recommends starting fresh to experience the reworked progression and new World Tree content as designed, but this is optional, not required."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Short Answer">
        <p>
          <strong>Your save is safe, but back it up anyway.</strong> No wipe is planned, existing progress carries
          over, and starting fresh is a recommendation for a cleaner experience — not a requirement.
        </p>
      </BlufBox>

      <section id="facts">
        <StatusPanel
          items={saveFacts.map(([label, value]) => ({
            label,
            value,
            status: "verified" as const,
          }))}
        />
      </section>

      <section id="fresh-vs-carryover" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Fresh Start vs. Carrying Your Save Over</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Carrying your save over means you keep your base, your Pal roster, and your progress exactly as it is,
          and simply gain access to new content as you reach it. The tradeoff is that 1.0 reworks progression,
          tower bosses, and wildlife sanctuaries — an endgame character may blow past early- and mid-game content
          that was redesigned around a specific pacing. Starting fresh means experiencing the reworked systems as
          Pocketpair intended, at the cost of losing none of your old world (it stays available, you simply are
          not playing on it). Neither choice is wrong; it depends on whether you value your existing progress or
          a from-scratch look at the reworked game more.
        </p>
      </section>

      <section id="dedicated-servers" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">What Happens to Dedicated Servers</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Existing dedicated servers update to 1.0 automatically — there is no need to spin up a new server
          instance. If you are migrating a local or co-op world onto a dedicated server around the same time as
          the update, note that only the world and other players&apos; characters transfer in that process; the
          host&apos;s own character data does not. Server Clustering, new in 1.0, lets communities link multiple
          server instances together, which is a separate, optional setup step for larger player counts.
        </p>
      </section>

      <section id="backup-checklist" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Backup Checklist Before July 10</h2>
        <ul className="mt-2 space-y-3 text-sm leading-relaxed text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-1 text-foreground font-bold">1.</span>
            <span><strong>Back up your save file</strong> (or rely on your server host&apos;s automatic backups) before updating, even though no wipe is planned.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-foreground font-bold">2.</span>
            <span><strong>Decide fresh start vs. carry over</strong> — see the comparison above — before you update, so you are not deciding mid-download.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-foreground font-bold">3.</span>
            <span><strong>Check your mods.</strong> If you run any, look for 1.0-compatible updates before relying on a modded save or server.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-foreground font-bold">4.</span>
            <span><strong>Confirm your server host&apos;s update plan</strong> if you play on a dedicated or rented server, since some hosts schedule updates rather than applying them instantly at launch.</span>
          </li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          See our{" "}
          <Link href="/games/palworld/1-0-release-date" className="text-foreground underline">
            1.0 release date guide
          </Link>{" "}
          for exact timing and platform details.
        </p>
      </section>
    </PalworldArticle>
  );
}
