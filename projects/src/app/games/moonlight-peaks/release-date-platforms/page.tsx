import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { MoonlightPeaksArticle } from "@/components/moonlight-peaks-article";
import { createMoonlightPeaksMetadata, moonlightPeaksImages } from "@/lib/moonlight-peaks";

const title = "Moonlight Peaks Release Date, Platforms & Price: Everything Confirmed";
const description =
  "Moonlight Peaks released July 7, 2026 on PC, Nintendo Switch, Switch 2, and Android. Here is the confirmed platform list, pricing by edition, the free demo, and what's not announced (PS5, Xbox, iOS).";
const canonical = "/games/moonlight-peaks/release-date-platforms";

export const metadata = createMoonlightPeaksMetadata({
  title,
  description,
  canonical,
  image: moonlightPeaksImages.siteHero,
});

const faqs = [
  {
    question: "What platforms is Moonlight Peaks on?",
    answer:
      "PC via Steam, Nintendo Switch, Nintendo Switch 2, and Android via Google Play — all launched simultaneously on July 7, 2026. No PlayStation, Xbox, or iOS version has been announced.",
  },
  {
    question: "How much does Moonlight Peaks cost on each platform?",
    answer:
      "The standard edition (PC and original Nintendo Switch) is $34.99. The dedicated Nintendo Switch 2 Edition, with higher-resolution assets and smoother frame rates, is $39.99. A 15% discount applies during launch week, and regional pricing may vary.",
  },
  {
    question: "Is the Moonlight Peaks demo still available after launch?",
    answer:
      "The free demo has remained available on Steam and the Nintendo eShop through launch. It covers character creation and a slice of cozy activities (fishing, flower arranging, embroidery) plus early resident interactions. No save carryover into the full game has been confirmed.",
  },
  {
    question: "Does Moonlight Peaks support Steam Deck?",
    answer:
      "It releases on Steam for PC, so it is playable on Steam Deck, but Valve's official Deck Verified rating was still pending as of launch. As a stylized 2D top-down life-sim, it is expected to run comfortably given its modest visual scope.",
  },
  {
    question: "What languages does Moonlight Peaks support?",
    answer:
      "Steam listings point to six supported interface/subtitle languages, commonly reported as English, German, Japanese, Korean, Simplified Chinese, and Traditional Chinese. Check the Steam store page directly for the authoritative, current list.",
  },
];

const searchIntentRows = [
  {
    query: "Moonlight Peaks platforms",
    answer: "PC (Steam), Nintendo Switch, Nintendo Switch 2, and Android — simultaneous launch, July 7, 2026.",
    href: "#platform-table",
    label: "Platforms",
  },
  {
    query: "Moonlight Peaks price",
    answer: "$34.99 standard (PC/Switch); $39.99 Switch 2 Edition; 15% off during launch week.",
    href: "#pricing",
    label: "Price",
  },
  {
    query: "Is Moonlight Peaks on PS5 or Xbox",
    answer: "No — neither has been announced. Only PC, Switch, Switch 2, and Android are confirmed.",
    href: "#not-confirmed",
    label: "Not confirmed",
  },
];

const jumpLinks = [
  { href: "#platform-table", label: "Platforms" },
  { href: "#pricing", label: "Pricing" },
  { href: "#not-confirmed", label: "Not confirmed" },
  { href: "#demo", label: "Demo" },
];

const platformRows: [string, string][] = [
  ["PC (Steam)", "Confirmed — released July 7, 2026, $34.99 standard edition"],
  ["Nintendo Switch", "Confirmed — released July 7, 2026, $34.99"],
  ["Nintendo Switch 2", "Confirmed — dedicated edition, $39.99, higher-res assets and smoother frame rates"],
  ["Android (Google Play)", "Confirmed — released July 7, 2026, day-one mobile release"],
  ["Steam Deck", "Playable via Steam (PC release); official Deck Verified status was pending at launch"],
  ["PlayStation 5 / Xbox", "Not announced"],
  ["iOS", "Not announced — Android is the only confirmed mobile platform"],
];

export default function MoonlightPeaksReleaseDatePage() {
  return (
    <MoonlightPeaksArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Release Date & Platforms"
      heroImage={moonlightPeaksImages.siteHero}
      heroAlt="Moonlight Peaks release date and platforms"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What platforms and price does Moonlight Peaks have?"
        answer="Moonlight Peaks released July 7, 2026 simultaneously on PC (Steam), Nintendo Switch, Nintendo Switch 2, and Android. It's $34.99 standard ($39.99 for the Switch 2 Edition), with a 15% launch-week discount. No PS5, Xbox, or iOS version has been announced."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Short Answer">
        <p>
          <strong>Five platforms, one launch day, no staggered rollout.</strong> That is unusual for an indie
          life-sim and signals real publisher support from XSEED Games and Marvelous. If you want to try before
          buying, the free demo is still available on Steam and the Nintendo eShop.
        </p>
      </BlufBox>

      <section id="platform-table">
        <h2 className="mb-4 text-xl font-bold text-foreground">Platform Status</h2>
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

      <section id="pricing" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Pricing by Edition</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          The standard edition — PC via Steam and the original Nintendo Switch — is $34.99. The Nintendo Switch 2
          Edition is a dedicated $39.99 release with higher-resolution assets and smoother frame rates rather than
          a simple price bump for the same build. A 15% discount applied during the first week after launch, and
          regional pricing can vary — always confirm the exact figure on your local storefront.
        </p>
      </section>

      <section id="not-confirmed" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">What's Not Confirmed</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          No PlayStation, Xbox, or iOS release has been announced for Moonlight Peaks. If you only own those
          platforms, there is currently no official way to play. We will update this page if that changes —
          nothing here is an assumption about future ports.
        </p>
      </section>

      <section id="demo" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">The Free Demo</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          A free demo remains available on Steam and the Nintendo eShop. It includes character creation and a
          slice of cozy activities — fishing, flower arranging, and embroidery — plus early interactions with
          town residents. No save carryover into the full game has been confirmed, so treat the demo as a tone
          and control check rather than a head start.
        </p>
      </section>
    </MoonlightPeaksArticle>
  );
}
