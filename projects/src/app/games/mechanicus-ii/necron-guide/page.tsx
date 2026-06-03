import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { MechanicusIIArticle } from "@/components/mechanicus-ii-article";
import {
  createMechanicusIIMetadata,
  mechanicusIINecronRows,
  mechanicusIIImages,
} from "@/lib/mechanicus-ii";

const title = "Mechanicus II Necron Campaign Guide: Dominion, Units & Strategy";
const description =
  "Complete Necron campaign guide for Warhammer 40,000: Mechanicus II. Dominion economy explained, unit roster breakdown, Reanimation Protocols, Canoptek Wraith bodyguard tactics, and mission strategy.";
const canonical = "/games/mechanicus-ii/necron-guide";

export const metadata = createMechanicusIIMetadata({
  title,
  description,
  canonical,
  image: mechanicusIIImages.screenshot2,
});

const faqs = [
  {
    question: "How do Necrons work in Mechanicus II?",
    answer:
      "Necrons use Dominion instead of Cognition. Deal damage to build Dominion — it fills an XP-like bar that grants escalating rank bonuses during the fight. Resets between missions. The faction is pure aggression: destroy enemy cover, push forward, use Reanimation Protocols instead of hiding.",
  },
  {
    question: "What are Reanimation Protocols?",
    answer:
      "Every Necron unit except Canopteks can resurrect after being downed. This is your defense — don't hide behind cover like Mechanicus does. But enemies can destroy the body to prevent resurrection, so don't leave downed units exposed.",
  },
  {
    question: "Should I play Necrons or Mechanicus first?",
    answer:
      "Play Mechanicus first. The Cognition economy and cover-based tactics are more forgiving while you learn the game. Necrons reward aggression but punish hesitation — the Dominion economy is harder to manage when you don't know enemy positions yet.",
  },
];

const searchIntentRows = [
  {
    query: "Mechanicus II Necron guide",
    answer: "Necrons use Dominion — build it by dealing damage, spend it on abilities. Aggressive faction: destroy cover, push forward, rely on Reanimation Protocols.",
    href: "#necron-guide",
    label: "Necrons",
  },
  {
    query: "Mechanicus II Dominion explained",
    answer: "Dominion fills by dealing damage. Resets each mission. Ranks give escalating buffs. Don't turtle — the longer you wait, the weaker you get.",
    href: "#dominion",
    label: "Dominion",
  },
  {
    query: "Mechanicus II Canoptek Wraith",
    answer: "Teleport bodyguard. Swaps positions with endangered allies. Keep mid-line near Nefershah. Not optional — hero death fails the mission.",
    href: "#wraith",
    label: "Wraith",
  },
];

const jumpLinks = [
  { href: "#necron-guide", label: "Necron guide" },
  { href: "#dominion", label: "Dominion" },
  { href: "/games/mechanicus-ii/unit-tier-list", label: "Unit tier list" },
  { href: "/games/mechanicus-ii/factions", label: "Factions compared" },
  { href: "/games/mechanicus-ii/beginner-guide", label: "Beginner guide" },
];

export default function MechanicusIINecronPage() {
  return (
    <MechanicusIIArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Necron Campaign"
      heroImage={mechanicusIIImages.screenshot2}
      heroAlt="Mechanicus II Necron tomb world tactical combat"
      faqs={faqs}
      showSources={false}
    >
      <BlufBox title="BLUF">
        Necrons don't hide. They break things. Dominion builds when you deal damage
        — wait too long and you're weaker than when you started. Use Canoptek
        Wraiths to bodyguard your leader. Destroy enemy cover on turn one. Rely on
        Reanimation Protocols instead of walls. Play Mechanicus first if you're
        new — Necrons punish every hesitation.{" "}
        <em>Source: Game Truth beginner guide (launch-weekend testing).</em>
      </BlufBox>

      <SearchAnswerPanel
        title="Necron Campaign Guide"
        answer="Dominion economy rewards aggression. Destroy cover, push forward, snowball ranks. Wraiths protect your leader. Reanimation Protocols are your defense. Don't turtle."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <section id="necron-guide">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Necron Campaign Strategy</h2>
        <ActionTable rows={mechanicusIINecronRows} />
      </section>

      <section id="dominion" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Dominion vs Cognition</h2>
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Aspect</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Necrons (Dominion)</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mechanicus (Cognition)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["How you get it", "Deal damage with any unit", "Unit-specific actions (Servitors take damage, Rangers shoot from range)"],
                ["Persistence", "Resets every mission", "Resets every mission"],
                ["Playstyle", "Aggressive — push forward, destroy cover, snowball", "Positional — use cover, time Canticles, protect specialists"],
                ["Defense", "Reanimation Protocols (get back up)", "Cover (40-50% damage reduction)"],
                ["Beginner friendly?", "No — punishing if you hesitate", "Yes — cover gives you breathing room"],
                ["Leader risk", "Vargard Nefershah mid-line with Wraith bodyguard", "Faustinius behind cover, never exposed"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{row[0]}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </MechanicusIIArticle>
  );
}
