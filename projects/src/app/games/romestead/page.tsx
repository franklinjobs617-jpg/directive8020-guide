import Image from 'next/image';
import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { RomesteadArticle } from '@/components/romestead-article';
import { romestead } from '@/lib/games';
import {
 createRomesteadMetadata,
 romesteadImages,
 romesteadQuickFacts,
} from '@/lib/romestead';

const title = 'Romestead Guide: Multiplayer, Split Screen & Co-op, Release Date, Best Profession & Tips';
const description =
 'Is Romestead split screen? Find guides for multiplayer co-op (up to 8 players), LAN play, best profession choices, beginner tips, settlement building, system requirements, Steam Deck compatibility, and early access buying advice for 2026.';
const canonical = '/games/romestead';

export const metadata = createRomesteadMetadata({
 title,
 description,
 canonical,
 image: romesteadImages.hero,
});

const faqs = [
 {
 question: 'What is Romestead?',
 answer:
 'Romestead is a Roman-inspired survival crafting and town-building game from Beartwigs and Three Friends with settlement building, survivor recruitment, exploration, dungeons, undead night attacks, and co-op.',
 },
 {
 question: 'When does Romestead release?',
 answer:
 'Steam displays May 25, 2026, while SteamDB unlock timing points to May 26, 2026 at 06:30 UTC. Check your local Steam page before planning a launch session.',
 },
 {
 question: 'Is Romestead Early Access?',
 answer:
 'Yes. Romestead is launching through Steam Early Access, and the developer expects roughly 1-2 years before the full 1.0 release.',
 },
 {
 question: 'How many players can play Romestead?',
 answer:
 'The official Steam description lists 1-8 players, and Steam feature labels include Online Co-op and LAN Co-op.',
 },
 {
 question: 'Is Romestead split screen or local co-op?',
 answer:
 'Current official feature labels confirm Online Co-op and LAN Co-op, but split screen is not confirmed. Plan multiplayer around separate devices unless an official split-screen feature appears.',
 },
 {
 question: 'Is Romestead on Xbox, PlayStation, or Steam Deck?',
 answer:
 'PC via Steam is the current public platform. Xbox and PlayStation versions are not announced in current store information, and Steam Deck-first players should check the current compatibility badge before buying.',
 },
 {
 question: 'What should beginners do first in Romestead?',
 answer:
 'Start with resources, food, storage, workstations, and a compact defensive settlement before pushing far into dungeons or distant biomes.',
 },
];

function getGuideImage(href: string) {
 if (href.includes('beginner')) return romesteadImages.screenshot1;
 if (href.includes('settlement')) return romesteadImages.screenshot2;
 if (href.includes('multiplayer')) return romesteadImages.screenshot3;
 if (href.includes('system')) return romesteadImages.screenshot4;
 if (href.includes('worth')) return romesteadImages.screenshot5;
 return romesteadImages.capsule;
}

const romesteadStartRows = [
 ['Start Here', 'Check release timing, Early Access state, player count, and whether your group plans Online Co-op or LAN Co-op.'],
 ['First Day Route', 'Gather food, wood, stone, and basic materials; place storage and workstations; keep the first settlement compact.'],
 ['Co-op Setup', 'Romestead supports solo play and 1-8 players, with Online Co-op and LAN Co-op listed. Plan separate roles before the first night.'],
 ['Best Profession Choice', 'Pick the role that fixes your first shortage: food, crafting, defense, scouting, or settlement flow.'],
 ['Settlement Building', 'Keep storage near workstations, leave readable paths, and build around food and defense before decoration.'],
 ['Night Defense', 'Prepare a compact layout before pushing into dungeons, distant biomes, or wide settlement expansion.'],
 ['Buying Risk', 'Buy now if Early Access town-building co-op is the draw; wait if you need a finished 1.0 release or console support.'],
];

const romesteadFeatureRows = [
 ['Players', 'Solo play and 1-8 players are listed in the Steam description.'],
 ['Multiplayer', 'Online Co-op and LAN Co-op are listed. Split-screen is not listed in current store labels.'],
 ['Platform', 'PC via Steam is the current public platform. Xbox and PlayStation versions are not announced.'],
 ['Steam Deck status', 'Check the current Steam Deck compatibility badge before buying for handheld-only play.'],
 ['Early Access', 'The developer expects roughly 1-2 years before the full 1.0 release.'],
];

export default function RomesteadHubPage() {
 return (
 <RomesteadArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Romestead"
 heroImage={romesteadImages.hero}
 heroAlt="Romestead Steam key art showing Roman-inspired survival town building"
 faqs={faqs}
 >
 <BlufBox title="Launch Snapshot">
 <p>
 <strong>Romestead is a Steam Early Access survival crafting and
 town-building game for PC.</strong> Steam shows May 25, 2026, while
 SteamDB unlock timing points to May 26, 2026 at 06:30 UTC. The safest
 player answer is to check your local Steam page before planning a
 co-op session. Official Steam information lists 1-8 players, Online
 Co-op, LAN Co-op, Steam Cloud, Family Sharing, and an Early Access
 window expected to last about 1-2 years.
 </p>
 </BlufBox>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Topic</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player answer</th>
 </tr>
 </thead>
 <tbody>
 {romesteadFeatureRows.map(([topic, answer]) => (
 <tr key={topic} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{topic}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 </tr>
 ))}
 {romesteadQuickFacts.slice(0, 4).map(([label, value]) => (
 <tr key={label} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{label}</td>
 <td className="px-4 py-3 text-muted-foreground">{value}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="my-10">
 <h2 className="mb-4 text-xl font-bold text-foreground">Romestead Guide Map</h2>
 <ArticleImage
 src={romesteadImages.capsule}
 alt="Romestead guide hub settlement image"
 caption="Start with the guide that matches the decision in front of you: release timing, first settlement steps, co-op setup, PC specs, or Early Access buying risk."
 />
 <div className="grid gap-4 sm:grid-cols-2">
 {romestead.guideLinks.map((guide) => (
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
 <ArticleImage
 src={romesteadImages.screenshot1}
 alt="Romestead early settlement building screenshot"
 caption="Official Romestead imagery shows the survival loop players need to understand first: gather, craft, organize the settlement, survive night pressure, then explore wider routes."
 />
 <p>
 Romestead is not just a Roman theme page. The useful launch questions
 are practical: whether the game is actually unlocked in your region,
 whether your group can play together, whether Early Access is worth
 buying now, what PC specs are needed, and which first-hour choices
 prevent a weak settlement from falling behind.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player question</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best current answer</th>
 </tr>
 </thead>
 <tbody>
 {[
 ['Is it out?', 'Steam shows May 25, 2026; SteamDB unlock timing points to May 26, 2026 at 06:30 UTC.'],
 ['Is it finished?', 'No. It is an Early Access game, with roughly 1-2 years expected before 1.0.'],
 ['Can I play with friends?', 'Yes, official info lists 1-8 players with Online Co-op and LAN Co-op.'],
 ['Is it on console?', 'Xbox and PlayStation versions are not announced in current store information. PC via Steam is the current public platform.'],
 ['Should I buy now?', 'Buy if Early Access town-building co-op is your thing; wait if you need polished 1.0, Deck proof, or console support.'],
 ].map(([question, answer]) => (
 <tr key={question} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Start Here</h2>
 <p>
 Romestead works best when you treat the first session as settlement
 planning, not just exploration. Use the table below to pick the guide
 or action that matches your next decision.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Task</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do</th>
 </tr>
 </thead>
 <tbody>
 {romesteadStartRows.map(([task, action]) => (
 <tr key={task} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{task}</td>
 <td className="px-4 py-3 text-muted-foreground">{action}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Settlement Planning Illustration</h2>
 <ArticleImage
 src={romesteadImages.planningFarmOverview}
 alt="Romestead-style settlement planning illustration"
 caption="Planning illustration for layout thinking: keep farms, animal pens, storage, and work areas readable before the settlement grows too wide."
 />
 <p>
 A good Romestead settlement should be easy to read at a glance. Keep
 animal pens, crops, storage, and workstations close enough that jobs
 make sense, but leave room for paths and defense. This illustration is
 for planning the layout idea; official screenshots should be used for
 exact in-game visuals.
 </p>
 </section>
 </RomesteadArticle>
 );
}
