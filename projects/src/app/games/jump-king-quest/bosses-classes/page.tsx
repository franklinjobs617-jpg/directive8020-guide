import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { JumpKingQuestArticle } from "@/components/jump-king-quest-article";
import {
  createJumpKingQuestMetadata,
  jumpKingQuestBossRows,
  jumpKingQuestImages,
} from "@/lib/jump-king-quest";

const title = "JUMP KING QUEST All Bosses & Best Class Guide";
const description =
  "JUMP KING QUEST boss fights and best starting class guide. Attack patterns, openings, Redfin customization tips, and build recommendations for climbing, combat, and survivability.";
const canonical = "/games/jump-king-quest/bosses-classes";

export const metadata = createJumpKingQuestMetadata({
  title,
  description,
  canonical,
  image: jumpKingQuestImages.combat,
});

const faqs = [
  {
    question: "How do boss fights work in JUMP KING QUEST?",
    answer:
      "Unlike the original Jump King, QUEST adds combat encounters with bosses. You fight while managing platforming positioning — falling during a boss fight means climbing back up while the boss recovers. Specific boss names and patterns need verification through gameplay.",
  },
  {
    question: "What's the best starting class or build?",
    answer:
      "Balance climbing speed with survivability for your first run. Pure combat builds get stuck on platforming sections. Pure speed builds die to enemies. Redfin customization lets you adjust — lean toward balanced stats until you know which sections give you trouble.",
  },
  {
    question: "How does Redfin customization work?",
    answer:
      "Steam describes the Redfin as customizable with progression choices that affect how you climb, fight, and survive. Think of it as a build direction rather than fixed classes — your stat choices determine whether you're nimble or tanky, aggressive or cautious.",
  },
];

const searchIntentRows = [
  {
    query: "Jump King Quest boss guide",
    answer: "QUEST adds combat bosses to the platforming formula. We're still documenting specific bosses — community reports are the current source.",
    href: "#bosses",
    label: "Bosses",
  },
  {
    query: "Jump King Quest best class",
    answer: "Balance climbing and survivability for your first run. Redfin customization is flexible — adjust based on what kills you most.",
    href: "#classes",
    label: "Classes",
  },
  {
    query: "Jump King Quest Redfin build",
    answer: "Redfin customization covers climbing, combat, and survivability. Balanced stats recommended for first playthrough.",
    href: "#redfin",
    label: "Build",
  },
];

const jumpLinks = [
  { href: "#bosses", label: "Bosses" },
  { href: "#classes", label: "Best class" },
  { href: "/games/jump-king-quest/phantom-tower", label: "Phantom Tower" },
  { href: "/games/jump-king-quest/beginner-guide", label: "Beginner guide" },
];

export default function JumpKingQuestBossesPage() {
  return (
    <JumpKingQuestArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Bosses & Classes"
      heroImage={jumpKingQuestImages.combat}
      heroAlt="JUMP KING QUEST combat encounter with boss and platforming"
      faqs={faqs}
      showSources={false}
    >
      <BlufBox title="BLUF">
        JUMP KING QUEST adds combat bosses to the climbing loop. Specific boss
        names and patterns are still being documented — the info below is from
        Steam store details and community reports, not our own clears yet. For
        your first run, balance climbing speed with survivability. Pure combat
        builds hit hard but fall harder.
      </BlufBox>

      <SearchAnswerPanel
        title="Bosses & Best Class Guide"
        answer="QUEST adds combat bosses on top of platforming. Balance your Redfin for climbing + survivability on a first run. Specific boss data from community reports — we're working through fights firsthand."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <section id="bosses">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Boss Fights</h2>
        <ActionTable rows={jumpKingQuestBossRows} />
      </section>

      <section id="classes" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Best Starting Builds</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Balanced (Recommended first run)",
              stats: "Even split between climbing speed, combat power, survivability",
              desc: "You don't know which sections will kill you yet. A balanced Redfin doesn't excel at anything but doesn't hard-wall on anything either. Adjust after you see what's killing you.",
            },
            {
              title: "Climber (Speed focus)",
              stats: "Prioritize climbing speed and jump precision",
              desc: "For players confident in combat. You'll clear platforming sections fast but die quickly to enemies. Good for a second run when you know enemy positions.",
            },
            {
              title: "Brawler (Combat focus)",
              stats: "Prioritize damage output and health",
              desc: "Bosses die faster but you'll struggle on technical platforming sections. Only pick this if combat is your bottleneck, not climbing.",
            },
            {
              title: "Survivor (Tank focus)",
              stats: "Prioritize health, fall recovery, and defensive buffs",
              desc: "Forgiving build for learning the game. You won't clear fast, but you'll survive mistakes that would kill other builds. Good for co-op support role.",
            },
          ].map((build) => (
            <div key={build.title} className="rounded-lg border border-d8020/25 bg-d8020/5 p-5">
              <h3 className="text-base font-bold text-foreground">{build.title}</h3>
              <p className="mt-1 text-xs text-d8020">{build.stats}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{build.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </JumpKingQuestArticle>
  );
}
