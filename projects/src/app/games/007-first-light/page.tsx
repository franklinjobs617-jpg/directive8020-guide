import Image from 'next/image';
import Link from 'next/link';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { BlufBox, StatusPanel } from '@/components/guide-blocks';
import { FirstLightArticle } from '@/components/007-first-light-article';
import { firstLight007 } from '@/lib/games';
import {
 createFirstLightMetadata,
 firstLightImages,
 firstLightQuickFacts,
 firstLightTrendRows,
 firstLightVideos,
} from '@/lib/007-first-light';

const title = '007 First Light Guide Hub: Reviews, Release Time, Denuvo & PC Specs';
const description =
 '007 First Light guide hub for reviews, review embargo status, release date, release time, preload, PS5, Steam Deck caution, Denuvo, PC specs, and spoiler-light beginner tips.';
const canonical = '/games/007-first-light';

export const metadata = createFirstLightMetadata({
 title,
 description,
 canonical,
 image: firstLightImages.hero,
});

const faqs = [
 {
 question: 'When does 007 First Light release?',
 answer:
 'Steam lists 007 First Light for May 27, 2026. Check your platform countdown for the exact local unlock time.',
 },
 {
 question: 'Does 007 First Light have early access?',
 answer:
 'Yes. Steam store and news copy listed a free Deluxe Edition upgrade with 24-hour early access for pre-orders before standard launch.',
 },
 {
 question: 'Is 007 First Light on PS5?',
 answer:
 'Yes. The PlayStation Store lists 007 First Light for PS5. Check your region for price and local unlock timing.',
 },
 {
 question: 'Is 007 First Light single-player?',
 answer:
 'Yes. Steam lists 007 First Light as single-player and does not list co-op or multiplayer features.',
 },
];

function getGuideImage(href: string) {
 if (href.includes('early')) return firstLightImages.deluxe;
 if (href.includes('review')) return firstLightImages.background;
 if (href.includes('mission')) return firstLightImages.missionBriefing;
 if (href.includes('system')) return firstLightImages.header;
 if (href.includes('beginner')) return firstLightImages.hero;
 return firstLightImages.card;
}

export default function FirstLightHubPage() {
 return (
 <FirstLightArticle
 title={title}
 description={description}
 canonical={canonical}
 label="007 First Light"
 heroImage={firstLightImages.hero}
 heroAlt="007 First Light agent close-up guide image"
 faqs={faqs}
 >
 <BlufBox title="Launch Answer">
 <p>
 <strong>007 First Light is a May 27, 2026 release, and the strongest
 current player demand is reviews and review embargo status.</strong>
 The next most useful checks are Denuvo, Steam user reviews, Steam Deck
 reports, preload, PS5 status, PC requirements, and whether to start
 stealth-first or loud.
 </p>
 </BlufBox>

 <StatusPanel
 items={firstLightQuickFacts.map(([label, value]) => ({
 label,
 value,
 status: 'verified' as const,
 }))}
 />

 <section className="my-10">
 <h2 className="mb-4 text-xl font-bold text-foreground">007 First Light Guide Map</h2>
 <ArticleImage
 src={firstLightImages.header}
 alt="007 First Light city stealth guide map image"
 caption="Start with release timing if you need early access or preload, reviews if you are deciding whether to buy, specs if you are on PC, or beginner tips if you want a spoiler-light first session."
 />
 <div className="grid gap-4 sm:grid-cols-2">
 {firstLight007.guideLinks.map((guide) => (
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
 <h2>Fast Answers From Current Player Questions</h2>
 <p>
 Most launch searches are practical: when early access starts, whether
 preload is available, whether the review embargo has lifted, whether
 Denuvo or Steam Deck changes the buying decision, whether PS5 is
 listed, and what the PC version needs. Use the table below to jump to
 the right guide instead of digging through every page.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player question</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Direct answer</th>
 </tr>
 </thead>
 <tbody>
 {firstLightTrendRows.map(([question, answer]) => (
 <tr key={question} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="my-10">
 <h2 className="mb-4 text-xl font-bold text-foreground">Official Video References</h2>
 <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
 Use the launch trailer for tone and the first gameplay video only if
 you are comfortable seeing the opening mission before playing.
 </p>
 <div className="grid gap-4 md:grid-cols-2">
 {firstLightVideos.map((video) => (
 <VideoEmbed
 key={video.id}
 videoId={video.id}
 title={video.title}
 caption={video.caption}
 />
 ))}
 </div>
 </section>
 </FirstLightArticle>
 );
}
