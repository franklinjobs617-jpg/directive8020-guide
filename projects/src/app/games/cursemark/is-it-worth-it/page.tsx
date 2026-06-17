import { CursemarkArticle } from "@/components/cursemark-article";
import { createCursemarkMetadata, cursemarkImages } from "@/lib/cursemark";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { ArticleImage } from "@/components/article-media";
import Link from "next/link";

const title = "Is Cursemark Worth It? Early Access Review, Content Scope & Buy or Wait";
const description =
  "Is Cursemark worth buying? Early Access review of the dark fantasy action roguelite from CLYDE Games. $14.99 price, ~6 hours content, Very Positive reviews, solo developer, and buy/wait/skip verdict.";
const canonical = "/games/cursemark/is-it-worth-it";

const faqs = [
  {
    question: "Is Cursemark worth $14.99 in Early Access?",
    answer:
      "Yes, for the right player. At $14.99 ($12.74 with the launch discount), Cursemark offers approximately 6 hours of unique content across 3 handcrafted biomes, a deep rune crafting system with near-limitless build variety, and Very Positive Steam reviews (90%+ positive). If you enjoy roguelites with buildcrafting depth and Soulslike combat, it is easily worth the price. If you want a 50+ hour game, wait for more biomes to be added during Early Access.",
  },
  {
    question: "How much replay value does Cursemark have?",
    answer:
      "Cursemark's replay value comes from its rune system and build experimentation, not from procedural generation scale. While the 3 biomes remain structurally consistent, the rune combinations you discover create genuinely different play experiences. Completionists who want to unlock all sigils, discover every rune synergy, and beat every boss on all difficulties can expect 10-15 hours of gameplay. The developer CLYDE Games plans to add more biomes throughout Early Access, which will increase replay value over time.",
  },
  {
    question: "How are the Steam reviews for Cursemark?",
    answer:
      "Cursemark holds a Very Positive rating on Steam with over 90% positive reviews. Players consistently praise the rune crafting depth, the satisfaction of discovering hidden elemental synergies, and the fair but challenging Soulslike combat. Common criticisms mention the current content scope (3 biomes feels short for some players) and occasional performance dips during particle-heavy combat. Most negative reviews are from players who expected a roguelike (full reset on death) rather than a roguelite (permanent upgrades persist).",
  },
  {
    question: "Is Cursemark too short for the price?",
    answer:
      "At 6 hours for a full clear, Cursemark's dollar-per-hour ratio is $2.50/hour (or $2.12/hour at the launch sale price). For comparison, popular roguelites like Hades launched at $24.99 for a similar amount of unique content. Cursemark's value depends on how much you engage with the rune crafting system — players who experiment with different builds easily get 10-15 hours. If dollar-per-hour is your primary metric, wait for the full release with more biomes or a steeper sale.",
  },
  {
    question: "Is Cursemark related to Elden Ring's Cursemark of Death?",
    answer:
      "No. Cursemark is a completely standalone dark fantasy action roguelite from CLYDE Games and Mad Mushroom. It has no connection to Elden Ring, FromSoftware, or the Cursemark of Death item. The shared name is coincidental. Cursemark is its own game with original lore, characters, and world. If you found this guide searching for Elden Ring's Cursemark of Death, you are in the wrong place — Cursemark is a roguelite, not an Elden Ring quest item.",
  },
];

const prosCons = [
  { side: "Pro", point: "Deep rune crafting with hidden elemental synergies — no two runs feel the same." },
  { side: "Pro", point: "Very Positive Steam reviews (90%+) with a strong community." },
  { side: "Pro", point: "Extremely low system requirements — runs on almost any PC and Steam Deck." },
  { side: "Pro", point: "Solo developer CLYDE Games is active and communicative with the community." },
  { side: "Pro", point: "Excellent Steam Deck game — 4-5 hours of battery life at 60 FPS." },
  { side: "Pro", point: "Affordable at $14.99 with launch discount to $12.74." },
  { side: "Pro", point: "Soulslite combat with fair telegraphs — challenging but not punishing." },
  { side: "Con", point: "Only 3 biomes in Early Access — ~6 hours of unique content." },
  { side: "Con", point: "Occasional FPS drops during heavy particle effects (Ice Trail + Chain Lightning combos)." },
  { side: "Con", point: "Some rune descriptions are vague — hidden synergies require community knowledge or trial and error." },
  { side: "Con", point: "No console or Mac versions — PC only (Windows + Linux)." },
  { side: "Con", point: "Solo developer means slower update cadence compared to team studios." },
  { side: "Con", point: "Text in the rune crafting UI can be small on Steam Deck's 800p screen." },
];

const buyWaitSkip = [
  {
    verdict: "Buy If",
    condition: "You enjoy Hades, Dead Cells, or other action roguelites with buildcrafting depth.",
    reason: "Cursemark's rune system offers comparable build variety in a tighter, more focused scope. The combat feel is slightly slower and more deliberate, closer to Soulslike timing.",
  },
  {
    verdict: "Buy If",
    condition: "You want to support a solo developer making an ambitious debut title.",
    reason: "CLYDE Games is a single developer. Every purchase during Early Access directly supports content development for the full release. The developer is active in the community Discord and responsive to feedback.",
  },
  {
    verdict: "Buy If",
    condition: "You primarily play on Steam Deck or a low-spec PC.",
    reason: "Cursemark is one of the most accessible 2026 releases. It runs at 60 FPS on Steam Deck with 4-5 hours of battery life and requires no discrete GPU on desktop.",
  },
  {
    verdict: "Wait If",
    condition: "~6 hours of content for $14.99 feels too short.",
    reason: "More biomes, enemies, runes, and bosses are planned during Early Access. Waiting 6-12 months will likely get you significantly more content for the same price, plus a more polished experience.",
  },
  {
    verdict: "Wait If",
    condition: "You want a complete finished game, not an Early Access work-in-progress.",
    reason: "While Cursemark is stable and polished for Early Access, it is not feature-complete. The 1.0 release (expected 2027) will include more biomes and systems. If Early Access risk bothers you, wait.",
  },
  {
    verdict: "Wait If",
    condition: "You play on Mac, PlayStation, Xbox, or Switch.",
    reason: "Cursemark is PC-only (Windows + Linux) with no announced console or Mac plans. Waiting is the only option if you are not on PC. Console ports may be considered after the 1.0 release.",
  },
  {
    verdict: "Skip If",
    condition: "You dislike roguelite death mechanics — losing runes and items on death frustrates you.",
    reason: "Cursemark resets your runes and in-run items on death. While permanent sigil and stat upgrades persist, each death means rebuilding your rune setup. If permanent loss mechanics bother you even with roguelite progression, this game is not for you.",
  },
  {
    verdict: "Skip If",
    condition: "You want a story-driven linear experience with a clear ending.",
    reason: "Cursemark is a gameplay-first roguelite. There is lore and environmental storytelling, but no deep narrative campaign with cutscenes and character arcs. The story serves the gameplay, not the reverse.",
  },
  {
    verdict: "Skip If",
    condition: "You expected this to be about Elden Ring's Cursemark of Death.",
    reason: "This is a completely different game — a dark fantasy action roguelite from CLYDE Games. If you found this guide searching for Elden Ring content, check Elden Ring wikis instead. Cursemark the roguelite has no connection to FromSoftware.",
  },
];

const communitySentiments = [
  { sentiment: "Rune System Depth", summary: "Universally praised. Players consistently cite the rune crafting system as Cursemark's standout feature. Hidden synergies create genuine 'aha!' moments that keep players experimenting long after clearing all 3 biomes." },
  { sentiment: "Content Scope", summary: "Mixed. Hardcore roguelite fans with 100+ hours in Hades find the 3-biome scope thin. Players who value build experimentation over raw content volume are satisfied. The consensus is that more biomes are needed for long-term retention." },
  { sentiment: "Difficulty Balance", summary: "Positive. Most players find the difficulty curve fair — challenging but not frustrating. The Divine Spear + Embershot combination is flagged as potentially overtuned for the first two biomes. Boss difficulty spikes at Lucian are frequently mentioned." },
  { sentiment: "Developer Trust", summary: "Positive. CLYDE Games' solo developer status generates goodwill and patience from the community. Players cut more slack for a solo dev than they would for a studio. Communication frequency is praised; update speed is understood to be slower." },
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
      label="Is It Worth It?"
      heroImage={cursemarkImages.worthIt}
      heroAlt="Cursemark buying guide - is it worth it"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="Should I buy Cursemark?"
        answer="Buy Cursemark now if you enjoy deep buildcrafting, roguelite gameplay, and want to support a solo developer. At $14.99 ($12.74 launch sale), the 3-biome content (~6 hours unique, 10-15 hours completionist) is fair value. Wait if you want more content or polished performance. Skip if you dislike roguelite death mechanics or want a story-driven game. Steam reviews are Very Positive (90%+)."
        intentRows={[
          {
            query: "Is Cursemark worth $15?",
            answer: "Yes if you enjoy roguelites. ~6 hours unique content, 10-15 hours completionist. Very Positive Steam reviews.",
            href: "/games/cursemark/is-it-worth-it",
            label: "Value",
          },
          {
            query: "Cursemark vs Hades vs Dead Cells",
            answer: "Cursemark is a tighter, rune-focused roguelite. Less content than Hades, more build depth per hour. $14.99 is competitive.",
            href: "/games/cursemark/is-it-worth-it",
            label: "Compare",
          },
        ]}
        jumpLinks={[
          { href: "#pros-cons", label: "Pros & cons" },
          { href: "#verdict", label: "Buy/wait/skip" },
          { href: "#reviews", label: "Review quotes" },
          { href: "#community", label: "Community" },
        ]}
      />

      <BlufBox>
        <p>
          <strong>Verdict: BUY if you love Hades-style roguelites with Soulslike combat and deep buildcrafting.</strong>{" "}
          WAIT if ~6 hours of content feels too short for $14.99. SKIP if you want a linear non-repeating experience.
          This is a roguelite — you will die and restart many times. Cursemark, the dark fantasy action roguelite
          from CLYDE Games, is NOT related to Elden Ring's Cursemark of Death.
        </p>
      </BlufBox>

      <section id="pros-cons" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Pros and Cons</h2>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground w-16">Side</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Point</th>
              </tr>
            </thead>
            <tbody>
              {prosCons.map((item, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="px-4 py-3">
                    <span className={`inline-flex rounded px-2 py-0.5 text-xs font-bold ${
                      item.side === "Pro" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {item.side}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{item.point}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ArticleImage
        src={cursemarkImages.worthIt}
        alt="Cursemark gameplay showing the rune crafting system that defines the game's value"
        caption="Cursemark's depth comes from its rune system. The more you experiment, the more value you extract from the $14.99 price. 6 hours to clear, 10-15 hours to master."
      />

      <section id="verdict" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Buy If / Wait If / Skip If</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          The right purchasing decision depends on your preferences. Find your situation below:
        </p>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground w-24">Verdict</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">If You</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Why</th>
              </tr>
            </thead>
            <tbody>
              {buyWaitSkip.map((item, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="px-4 py-3">
                    <span className={`inline-flex rounded px-2 py-0.5 text-xs font-bold ${
                      item.verdict === "Buy If" ? "bg-green-100 text-green-800" :
                      item.verdict === "Wait If" ? "bg-amber-100 text-amber-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {item.verdict}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{item.condition}</td>
                  <td className="px-4 py-3 text-muted-foreground">{item.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="price" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Price vs Content Analysis</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          At $14.99 (or $12.74 with the launch discount), Cursemark costs approximately $2.50 per hour of unique
          content ($2.12/hour at the sale price). For comparison:
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <strong className="text-foreground">Hades (Early Access):</strong> Launched at $24.99 for roughly 10 hours
            of unique content — $2.50/hour. Cursemark matches this value ratio at $14.99.
          </li>
          <li>
            <strong className="text-foreground">Dead Cells (Early Access):</strong> Launched at $16.99 for roughly 8
            hours — $2.12/hour. Cursemark is slightly higher per hour but has deeper build variety per run.
          </li>
          <li>
            <strong className="text-foreground">Completionist value:</strong> If you experiment with 3-4 different
            builds and unlock all sigils, the value improves to $1.00-$1.50/hour — excellent for the genre.
          </li>
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          <strong>Bottom line:</strong> Cursemark is fairly priced for its Early Access scope. It is not a bargain
          bin value play — it is a quality-over-quantity purchase that rewards the time you put into learning its
          systems. Steam's 2-hour refund window is enough time to clear the first biome and decide whether the rune
          crafting clicks for you.
        </p>
      </section>

      <section id="reviews" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Critical Reception and Review Quotes</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-white p-5">
            <h3 className="mb-2 text-base font-bold text-foreground">PC Gamer</h3>
            <blockquote className="border-l-2 border-dribbble-pink pl-4 text-sm leading-relaxed text-muted-foreground italic">
              "Cursemark's rune system is the star of the show. The moment you realize your fire rune is igniting
              poison clouds into burning pyres, you understand what makes this roguelite special. Three biomes is
              not enough — but what is here is polished, satisfying, and refreshingly deep."
            </blockquote>
            <p className="mt-1 text-xs text-muted-foreground">Score: 82/100</p>
          </div>
          <div className="rounded-lg border border-border bg-white p-5">
            <h3 className="mb-2 text-base font-bold text-foreground">Hardcore Gamer</h3>
            <blockquote className="border-l-2 border-dribbble-pink pl-4 text-sm leading-relaxed text-muted-foreground italic">
              "For a solo-developed debut, Cursemark punches well above its weight. The combat is weighty and
              deliberate, rewarding patience over button-mashing. If CLYDE Games can deliver on the Early Access
              roadmap with more biomes and runes, this could become a roguelite staple."
            </blockquote>
            <p className="mt-1 text-xs text-muted-foreground">Score: 4/5</p>
          </div>
        </div>
      </section>

      <section id="community" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Community Sentiment Summary</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Based on Steam reviews, Reddit discussions, and the official Discord community as of June 2026:
        </p>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Topic</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Community Consensus</th>
              </tr>
            </thead>
            <tbody>
              {communitySentiments.map((item) => (
                <tr key={item.sentiment} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{item.sentiment}</td>
                  <td className="px-4 py-3 text-muted-foreground">{item.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Related Guides</h2>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <Link href="/games/cursemark/release-date" className="text-foreground underline hover:no-underline">
              Cursemark Release Date
            </Link>{" "}
            — launch date, price details, developer background, and platform availability.
          </li>
          <li>
            <Link href="/games/cursemark/system-requirements" className="text-foreground underline hover:no-underline">
              Cursemark System Requirements
            </Link>{" "}
            — check if your PC can run it before buying.
          </li>
          <li>
            <Link href="/games/cursemark/beginner-guide" className="text-foreground underline hover:no-underline">
              Cursemark Beginner Guide
            </Link>{" "}
            — first run tips so you can evaluate the game within Steam's 2-hour refund window.
          </li>
        </ul>
      </section>
    </CursemarkArticle>
  );
}
