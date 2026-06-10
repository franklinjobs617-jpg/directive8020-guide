import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { JumpKingQuestArticle } from "@/components/jump-king-quest-article";
import {
 createJumpKingQuestMetadata,
 jumpKingQuestPhantomRows,
 jumpKingQuestImages,
} from "@/lib/jump-king-quest";

const title = "JUMP KING QUEST Phantom Tower Guide: 1.0 Endgame Walkthrough";
const description =
 "Complete Phantom Tower guide for JUMP KING QUEST. Floor layout, enemy types, boss fights, trap strategies, co-op tips, and how to prepare your Redfin for the 1.0 endgame challenge.";
const canonical = "/games/jump-king-quest/phantom-tower";

export const metadata = createJumpKingQuestMetadata({
 title,
 description,
 canonical,
 image: jumpKingQuestImages.phantom,
});

const faqs = [
 {
 question: "What is the Phantom Tower in JUMP KING QUEST?",
 answer:
 "It's the 1.0 endgame challenge, added with the Phantom Update on May 25, 2026. A multi-floor gauntlet of platforming, combat, and bosses. Death resets you to the current floor entrance ?not the bottom.",
 },
 {
 question: "How do I prepare for the Phantom Tower?",
 answer:
 "Max your Redfin's core stats. Bring a build you know well ?the Tower doesn't forgive experimentation. Practice platforming under combat pressure in earlier areas before attempting it.",
 },
 {
 question: "Can I do the Phantom Tower in co-op?",
 answer:
 "Yes, online co-op is supported. One player can scout ahead while the other covers. Communication matters more than usual ?a mistimed jump in a tight section can pull both players down.",
 },
];

const searchIntentRows = [
 {
 query: "Jump King Quest Phantom Tower guide",
 answer: "Multi-floor endgame challenge from the 1.0 Phantom Update. Prepare with maxed stats and a build you know. Death resets per floor, not from the bottom.",
 href: "#phantom-tower",
 label: "Tower",
 },
 {
 query: "Jump King Quest endgame",
 answer: "The Phantom Tower is the 1.0 endgame. Platforming mixed with combat and bosses. Co-op changes the dynamic ?coordinate your jumps.",
 href: "#phantom-tower",
 label: "Endgame",
 },
 {
 query: "Jump King Quest Phantom Tower co-op",
 answer: "Online co-op works in the Tower. Scout + cover roles. Communication is critical ?desync kills in tight platforming sections.",
 href: "#coop",
 label: "Co-op",
 },
];

const jumpLinks = [
 { href: "#phantom-tower", label: "Tower guide" },
 { href: "#preparation", label: "How to prepare" },
 { href: "#coop", label: "Co-op tips" },
 { href: "/games/jump-king-quest/beginner-guide", label: "Beginner guide" },
 { href: "/games/jump-king-quest/multiplayer-controller", label: "Multiplayer" },
];

export default function JumpKingQuestPhantomPage() {
 return (
 <JumpKingQuestArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Phantom Tower"
 heroImage={jumpKingQuestImages.phantom}
 heroAlt="JUMP KING QUEST Phantom Tower endgame platforming challenge"
 faqs={faqs}
 showSources={false}
 >
 <BlufBox title="BLUF">
 The Phantom Tower is the 1.0 endgame. Multi-floor platforming, combat
 encounters, and bosses stacked together. Death drops you to the floor
 entrance ?you don't start over from the bottom. Max your Redfin stats
 first. Bring a build you trust. Co-op helps but requires coordination.{" "}
 <strong>Specific floor layouts and boss names below are from community
 reports ?we're still working through the Tower ourselves.</strong>
 </BlufBox>

 <SearchAnswerPanel
 title="Phantom Tower Guide"
 answer="1.0 endgame challenge. Multi-floor platforming + combat + bosses. Death resets per floor. Max your Redfin first. Co-op works but requires communication."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <section id="phantom-tower">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Phantom Tower</h2>
 <ActionTable rows={jumpKingQuestPhantomRows} />
 </section>

 <section id="preparation" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">How to Prepare</h2>
 <div className="grid gap-4 sm:grid-cols-2">
 {[
 { title: "Max your Redfin", desc: "Core stats matter more in the Tower than anywhere else. If you've been spreading points thin, respec before entering. Climbing speed and survivability are the priority." },
 { title: "Practice combat + platforming", desc: "The Tower combines both. If you've been avoiding fights during climbs, spend time in earlier areas mixing the two. You can't skip combat in the Tower." },
 { title: "Learn from deaths", desc: "Each floor resets at its entrance. Use this. Study the layout, enemy positions, and trap triggers. Don't rush ?the Tower rewards patience." },
 { title: "Bring a familiar build", desc: "Not the time to experiment. Use the Redfin build you've been running all game. The Tower punishes unfamiliar movement patterns." },
 ].map((item) => (
 <div key={item.title} className="rounded-lg border border-border bg-white p-5">
 <h3 className="text-base font-bold text-foreground">{item.title}</h3>
 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>

 <section id="coop" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Co-op in the Tower</h2>
 <p className="mb-4 leading-relaxed text-muted-foreground">
 Online co-op changes how the Tower plays. Two players means two hitboxes
 on tight platforms, two sets of jump timing, and two people who can panic
 and drag each other down. But it also means someone can scout ahead while
 the other covers from behind.
 </p>
 <div className="grid gap-3">
 {[
 "Scout + Cover: one player moves ahead, the other watches for enemies and calls out traps.",
 "Call your jumps. A surprise leap in co-op can knock your partner off a ledge.",
 "If one player falls, the other stays put. Don't chase ?wait for them to climb back.",
 "Assign roles before entering: who leads, who follows, who handles combat.",
 ].map((tip, i) => (
 <div key={i} className="flex gap-3 rounded-md border border-border bg-mist p-3">
 <span className="mt-0.5 text-xs font-bold text-foreground">0{i + 1}</span>
 <p className="text-sm leading-relaxed text-muted-foreground">{tip}</p>
 </div>
 ))}
 </div>
 </section>
 </JumpKingQuestArticle>
 );
}
