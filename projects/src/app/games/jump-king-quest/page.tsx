import Image from 'next/image';
import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { BlufBox, StatusPanel } from '@/components/guide-blocks';
import { JumpKingQuestArticle } from '@/components/jump-king-quest-article';
import { jumpKingQuest } from '@/lib/games';
import {
 createJumpKingQuestMetadata,
 jumpKingQuestImages,
 jumpKingQuestPlayerQuestionRows,
 jumpKingQuestQuickFacts,
} from '@/lib/jump-king-quest';

const title = 'JUMP KING QUEST Guide: 1.0 Release, Phantom Update, Multiplayer & Tips';
const description =
 'JUMP KING QUEST guide hub for the May 25, 2026 1.0 release: Phantom Update, Steam PC status, beginner tips, online co-op, online PvP, controller support, reviews, and buying advice.';
const canonical = '/games/jump-king-quest';

export const metadata = createJumpKingQuestMetadata({
 title,
 description,
 canonical,
 image: jumpKingQuestImages.hero,
});

const faqs = [
 {
 question: 'Is JUMP KING QUEST out now?',
 answer:
 'Yes. JUMP KING QUEST released on Steam PC on May 25, 2026 after entering Early Access on February 12, 2025.',
 },
 {
 question: 'What is the JUMP KING QUEST Phantom Update?',
 answer:
 'The Steam news hub frames the 1.0 full release as the Phantom Update, which moved the game out of Early Access.',
 },
 {
 question: 'Is JUMP KING QUEST multiplayer?',
 answer:
 'Yes. Steam lists Single-player, Online Co-op, and Online PvP.',
 },
 {
 question: 'Is JUMP KING QUEST the same as Jump King?',
 answer:
 'No. It keeps punishment platforming at the center, but Steam also describes combat, exploration, customization, online co-op, and online PvP.',
 },
 {
 question: 'Is JUMP KING QUEST worth buying?',
 answer:
 'It is worth considering if you want difficult climbing mixed with combat and multiplayer pressure. Wait if you need settled controller, balance, or party reports.',
 },
];

function getGuideImage(href: string) {
 if (href.includes('release')) return jumpKingQuestImages.phantom;
 if (href.includes('beginner')) return jumpKingQuestImages.climb;
 if (href.includes('multiplayer')) return jumpKingQuestImages.coop;
 if (href.includes('worth')) return jumpKingQuestImages.pvp;
 return jumpKingQuestImages.capsule;
}

export default function JumpKingQuestHubPage() {
 return (
 <JumpKingQuestArticle
 title={title}
 description={description}
 canonical={canonical}
 label="JUMP KING QUEST"
 heroImage={jumpKingQuestImages.hero}
 heroAlt="JUMP KING QUEST official Steam key art"
 faqs={faqs}
 >
 <BlufBox title="Launch Answer">
 <p>
 <strong>JUMP KING QUEST released on Steam PC on May 25, 2026 as the
 1.0 Phantom Update.</strong> It started Early Access on February 12,
 2025, and the current Steam page lists Single-player, Online Co-op,
 Online PvP, Steam Achievements, Steam Cloud, Family Sharing, Very
 Positive user reviews, and a 20% launch offer ending June 8, 2026 at
 the latest check.
 </p>
 </BlufBox>

 <StatusPanel
 items={jumpKingQuestQuickFacts.map(([label, value]) => ({
 label,
 value,
 status: label.includes('Controller') ? 'needs-check' : 'verified',
 }))}
 />

 <section className="my-10">
 <h2 className="mb-4 text-xl font-bold text-foreground">JUMP KING QUEST Guide Map</h2>
 <ArticleImage
 src={jumpKingQuestImages.capsule}
 alt="JUMP KING QUEST guide hub Steam image"
 caption="Start with release status if you need 1.0 timing, beginner tips if you are starting fresh, multiplayer if you are playing with friends, or buying advice if you are comparing the sequel with Jump King."
 />
 <div className="grid gap-4 sm:grid-cols-2">
 {jumpKingQuest.guideLinks.map((guide) => (
 <Link
 key={guide.href}
 href={guide.href}
 className="group overflow-hidden rounded-lg border border-border bg-white transition-colors hover:border-border"
 >
 <div className="relative aspect-video">
 <Image
 src={getGuideImage(guide.href)}
 alt={guide.title}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-105"
 sizes="(max-width: 768px) 100vw, 50vw"
 />
 <div className="absolute inset-0 opacity-30" />
 </div>
 <div className="p-5">
 <h3 className="text-base font-bold text-foreground group-hover:text-foreground">
 {guide.title}
 </h3>
 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
 {guide.description}
 </p>
 </div>
 </Link>
 ))}
 </div>
 </section>

 <section className="prose-game">
 <h2>What Players Need First</h2>
 <p>
 JUMP KING QUEST is not only a release-date page. The practical player
 questions are about whether 1.0 is out, what the Phantom Update means,
 how much the sequel changes the original Jump King formula, whether
 friends can play together, and whether a Very Positive Steam signal is
 enough to buy during launch week.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player question</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Direct answer</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Continue</th>
 </tr>
 </thead>
 <tbody>
 {jumpKingQuestPlayerQuestionRows.map(([question, answer, href]) => (
 <tr key={question} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 <td className="px-4 py-3 text-muted-foreground">
 <Link href={href} className="text-foreground hover:underline">
 Open guide
 </Link>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Current Community Questions</h2>
 <ArticleImage
 src={jumpKingQuestImages.coop}
 alt="JUMP KING QUEST official video frame showing map and online play context"
 caption="Community demand is clustering around the 1.0 update, multiplayer structure, difficulty, and how Quest differs from the original Jump King."
 />
 <p>
 Player discussion is useful as a demand signal, not as final proof.
 The questions worth answering now are focused on 1.0 status, Phantom
 Update scope, Souls-like framing, online play, and the difference
 between a pure climbing game and a climbing game with combat,
 progression, and player interaction.
 </p>
 </section>
 </JumpKingQuestArticle>
 );
}
