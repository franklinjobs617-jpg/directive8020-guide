import Image from 'next/image';
import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel, StatusPanel } from '@/components/guide-blocks';
import { LunaAbyssArticle, LunaInfoTable } from '@/components/luna-abyss-article';
import { LunaProgressChecklist } from '@/components/tools/luna-progress-checklist';
import { lunaAbyss } from '@/lib/games';
import {
 createLunaAbyssMetadata,
 lunaAbyssFeatureRows,
 lunaAbyssImages,
 lunaAbyssNextRunSteps,
 lunaAbyssQuickFacts,
 lunaAbyssReleaseRows,
 lunaAbyssSearchRows,
} from '@/lib/luna-abyss';

const title = 'Luna Abyss Guide Hub: Game Pass, Steam Deck, Achievements & Walkthrough';
const description =
 'Luna Abyss guide hub for Game Pass, Steam Deck settings, achievements, system requirements, walkthrough, ending explained, crash fixes, and buying advice.';
const canonical = '/games/luna-abyss';

export const metadata = createLunaAbyssMetadata({
 title,
 description,
 canonical,
 image: lunaAbyssImages.hero,
});

const faqs = [
 {
 question: 'Is Luna Abyss out now?',
 answer:
 'Yes. Luna Abyss released on May 21, 2026 and is available on PC, PlayStation 5, Xbox Series X|S, Xbox Cloud, and Game Pass according to current storefront data.',
 },
 {
 question: 'What kind of game is Luna Abyss?',
 answer:
 'Luna Abyss is a single-player story-driven action-adventure FPS with first-person platforming, bullet-hell combat, boss pressure, and a sci-fi mystery set beneath the mimic moon Luna.',
 },
 {
 question: 'What should I check first before playing Luna Abyss?',
 answer:
 'Check your platform, confirm Game Pass or price status, set subtitles and sensitivity, then use the beginner guide before reading achievements or the ending explanation.',
 },
 {
 question: 'Does Luna Abyss have achievements?',
 answer:
 'Yes. Steam has 45 public achievement rows visible on Steam Community as of May 28, 2026.',
 },
 {
 question: 'Is Luna Abyss good on Steam Deck?',
 answer:
 'Use the Steam Deck guide first. Third-party testing gives useful settings, but Deck comfort should be treated as reported guidance rather than an official guarantee.',
 },
];

const jumpLinks = [
 { href: '#search-answer', label: 'Search answer' },
 { href: '#guide-map', label: 'Guide map' },
 { href: '#next-run', label: 'Next run' },
 { href: '#features', label: 'Features' },
];

function getGuideImage(href: string) {
 if (href.includes('game-pass')) return lunaAbyssImages.screenshot1;
 if (href.includes('worth')) return lunaAbyssImages.screenshot2;
 if (href.includes('system')) return lunaAbyssImages.screenshot3;
 if (href.includes('steam-deck')) return lunaAbyssImages.screenshot4;
 if (href.includes('beginner')) return lunaAbyssImages.screenshot5;
 if (href.includes('walkthrough')) return lunaAbyssImages.screenshot6;
 if (href.includes('achievements')) return lunaAbyssImages.screenshot7;
 if (href.includes('ending')) return lunaAbyssImages.hero;
 return lunaAbyssImages.screenshot1;
}

export default function LunaAbyssHubPage() {
 return (
 <LunaAbyssArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Luna Abyss"
 heroImage={lunaAbyssImages.hero}
 heroAlt="Luna Abyss official Steam screenshot"
 faqs={faqs}
 >
 <BlufBox title="Current Answer">
 <p>
 <strong>Luna Abyss is a live post-launch guide target, not a one-day
 release query.</strong> Start with Game Pass or platform choice, then
 move to Steam Deck settings, achievements, walkthrough, ending notes,
 or crash fixes depending on the problem that brought you here.
 </p>
 </BlufBox>

 <section id="search-answer">
 <SearchAnswerPanel
 title="What Luna Abyss page do you need?"
 answer="Most current searches fall into platform choice, worth-it reviews, Steam Deck setup, achievements, walkthrough help, ending interpretation, or crash fixes. Pick the route below and keep the checklist for your next session."
 intentRows={lunaAbyssSearchRows.map(([query, answer, href]) => ({
 query,
 answer,
 href,
 }))}
 jumpLinks={jumpLinks}
 />
 </section>

 <StatusPanel
 items={lunaAbyssQuickFacts.slice(0, 8).map(([label, value]) => ({
 label,
 value,
 status: 'verified' as const,
 }))}
 />

 <section id="guide-map" className="my-10">
 <h2 className="mb-4 text-xl font-bold text-foreground">Luna Abyss Guide Map</h2>
 <ArticleImage
 src={lunaAbyssImages.screenshot1}
 alt="Luna Abyss guide map screenshot"
 caption="Use the hub as a router: platform first, comfort settings second, story and completion pages after you have played."
 />
 <div className="grid gap-4 sm:grid-cols-2">
 {lunaAbyss.guideLinks.map((guide) => (
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

 <section id="next-run">
 <LunaProgressChecklist title="Keep Your Luna Abyss Next Run" steps={lunaAbyssNextRunSteps} />
 </section>

 <ActionTable rows={lunaAbyssReleaseRows} />

 <section id="features" className="prose-game">
 <h2>What Makes This Hub Useful After Launch</h2>
 <p>
 Luna Abyss searches are no longer just about the release date. Players
 are deciding whether to play through Game Pass, whether Steam Deck is
 comfortable, how to handle 45 achievements, and when to read ending
 interpretation without spoiling the first route.
 </p>
 </section>

 <LunaInfoTable columns={['Feature', 'Current status']} rows={lunaAbyssFeatureRows} />
 </LunaAbyssArticle>
 );
}
