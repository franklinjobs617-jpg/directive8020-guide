import Image from 'next/image';
import Link from 'next/link';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { MinaArticle } from '@/components/mina-the-hollower-article';
import { minaTheHollower } from '@/lib/games';
import {
 createMinaMetadata,
 minaBeginnerRows,
 minaFeatureRows,
 minaImages,
 minaLaunchCheckRows,
 minaQuickFacts,
 minaVideos,
} from '@/lib/mina-the-hollower';

const title = 'Mina the Hollower Guide Hub: Beginner Route, Trinkets, Bosses, Trophies and Steam Deck';
const description =
 'Start with the right Mina the Hollower guide: beginner tips, trinkets, bosses, trophies and achievements, Steam Deck, system requirements, platforms, and buying advice.';
const canonical = '/games/mina-the-hollower';

export const metadata = createMinaMetadata({
 title,
 description,
 canonical,
 image: minaImages.hero,
});

const faqs = [
 {
 question: 'Is Mina the Hollower out?',
 answer:
 'Yes. Mina the Hollower is in its 2026 launch window. Steam lists May 28, 2026, while Yacht Club Games uses May 29, 2026 in official launch messaging; use your storefront for local timing.',
 },
 {
 question: 'What type of game is Mina the Hollower?',
 answer:
 'Mina the Hollower is a gothic action-adventure game with 8-bit Game Boy Color-style visuals, burrowing, whip combat, sidearms, trinkets, secrets, and boss fights.',
 },
 {
 question: 'Is Mina the Hollower single-player?',
 answer:
 'Yes. Steam lists Mina the Hollower as single-player and does not list co-op or multiplayer.',
 },
 {
 question: 'Is Mina the Hollower Steam Deck compatibility?',
 answer:
 'Check the live Steam Deck badge before buying for handheld play, then test text size, controller comfort, battery, and suspend/resume in a short first session.',
 },
];

const minaTaskRows = [
 ['I just bought it', 'Start with beginner tips: burrow timing, Nightstar range, sidearm use, and early trinket habits.', '/games/mina-the-hollower/beginner-guide', 'Beginner guide'],
 ['I want 100%', 'Use the trophy guide first, then track achievements, secrets, bosses, and missable cleanup separately.', '/games/mina-the-hollower/trophy-guide', 'Trophy guide'],
 ['I play on handheld', 'Check Steam Deck readability, controls, battery, cloud saves, and suspend/resume before a long run.', '/games/mina-the-hollower/steam-deck', 'Steam Deck'],
 ['I am deciding whether to buy', 'Check current reviews, platform fit, price, and whether a compact action-adventure is what you want.', '/games/mina-the-hollower/is-it-worth-it', 'Worth it'],
 ['I need PC checks', 'Confirm Windows, macOS, Linux specs, storage, controller support, and cloud saves before installing.', '/games/mina-the-hollower/system-requirements', 'System requirements'],
];

function getGuideImage(href: string) {
 if (href.includes('release')) return minaImages.screenshot1;
 if (href.includes('system')) return minaImages.screenshot2;
 if (href.includes('steam-deck')) return minaImages.screenshot3;
 if (href.includes('beginner')) return minaImages.screenshot4;
 if (href.includes('worth')) return minaImages.screenshot5;
 return minaImages.hero;
}

export default function MinaHubPage() {
 return (
 <MinaArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Mina the Hollower"
 heroImage={minaImages.hero}
 heroAlt="Mina the Hollower key art"
 faqs={faqs}
 showSources={false}
 >
 <BlufBox title="Start Here">
 <p>
 <strong>If you are starting Mina the Hollower, pick the guide by what
 blocks you now.</strong> New players should start with burrowing,
 Nightstar, sidearms, and trinkets. Completion players should use the
 trophy guide. Handheld players should check Steam Deck comfort before
 committing to a long session.
 </p>
 </BlufBox>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player goal</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best next step</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Guide</th>
 </tr>
 </thead>
 <tbody>
 {minaTaskRows.map(([goal, nextStep, href, label]) => (
 <tr key={goal} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{goal}</td>
 <td className="px-4 py-3 text-muted-foreground">{nextStep}</td>
 <td className="px-4 py-3">
 <Link href={href} className="font-semibold text-foreground hover:underline">
 {label}
 </Link>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Quick fact</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player answer</th>
 </tr>
 </thead>
 <tbody>
 {minaQuickFacts.map(([label, value]) => (
 <tr key={label} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{label}</td>
 <td className="px-4 py-3 text-muted-foreground">{value}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="my-10">
 <h2 className="mb-4 text-xl font-bold text-foreground">Mina the Hollower Guide Map</h2>
 <ArticleImage
 src={minaImages.background}
 alt="Mina the Hollower guide hub background"
 caption="Start with the guide that matches your current problem: first-hour survival, trophies, platform checks, or buying clarity."
 />
 <div className="grid gap-4 sm:grid-cols-2">
 {minaTheHollower.guideLinks.map((guide) => (
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
 <h2>What Players Need to Know First</h2>
 <ArticleImage
 src={minaImages.screenshot6}
 alt="Mina the Hollower first things to know"
 caption="The core player loop is action-adventure exploration: burrow through hazards, use Nightstar, test sidearms, equip trinkets, and search for secrets."
 />
 <p>
 Mina the Hollower should be approached as a skill-based action-adventure,
 not a survival sandbox or co-op RPG. Steam and official copy focus on a
 cursed island, burrowing, whip combat, sidearms, trinkets, secrets,
 boss fights, and interconnected level design.
 </p>
 </section>

 <section className="prose-game">
 <h2>Steam Feature Checklist</h2>
 <ArticleImage
 src={minaImages.screenshot7}
 alt="Mina the Hollower Steam feature checklist"
 caption="The Steam page confirms practical player features like achievements, full controller support, Steam Cloud, Remote Play, and Family Sharing."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Feature</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current status</th>
 </tr>
 </thead>
 <tbody>
 {minaFeatureRows.map(([feature, status]) => (
 <tr key={feature} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{feature}</th>
 <td className="px-4 py-3 text-muted-foreground">{status}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="my-10">
 <h2 className="mb-4 text-xl font-bold text-foreground">Official Video References</h2>
 <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
 These videos are embedded for visual context. The guide only uses
 official or storefront-visible information for factual claims.
 </p>
 <div className="grid gap-4 md:grid-cols-2">
 {minaVideos.map((video) => (
 <VideoEmbed
 key={video.id}
 videoId={video.id}
 title={video.title}
 caption={video.caption}
 />
 ))}
 </div>
 </section>

 <section className="prose-game">
 <h2>Spoiler-Light Beginner Priorities</h2>
 <ArticleImage
 src={minaImages.screenshot4}
 alt="Mina the Hollower beginner priorities"
 caption="Before chasing secrets or bosses, learn burrowing timing, Nightstar range, sidearm use, and trinket effects."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Priority</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player habit</th>
 </tr>
 </thead>
 <tbody>
 {minaBeginnerRows.map(([priority, habit]) => (
 <tr key={priority} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{priority}</th>
 <td className="px-4 py-3 text-muted-foreground">{habit}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Current Purchase Checks</h2>
 <ArticleImage
 src={minaImages.screenshot5}
 alt="Mina the Hollower launch-week checklist"
 caption="Before buying or starting a long run, verify the live storefront date, local price, Steam Deck badge, review status, and any demo-save wording."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Check</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to check</th>
 </tr>
 </thead>
 <tbody>
 {minaLaunchCheckRows.map(([check, value]) => (
 <tr key={check} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{check}</th>
 <td className="px-4 py-3 text-muted-foreground">{value}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </MinaArticle>
 );
}

