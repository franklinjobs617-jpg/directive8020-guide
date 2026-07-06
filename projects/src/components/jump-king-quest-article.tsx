import type { ReactNode } from 'react';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import {
 JsonLd,
 generateArticleSchema,
 generateFAQSchema,
 generateVideoGameSchema,
} from '@/components/json-ld';
import { RelatedGuides, SourceCheckTable } from '@/components/guide-blocks';
import { jumpKingQuest } from '@/lib/games';
import {
 getJumpKingQuestRelated,
 jumpKingQuestImages,
 jumpKingQuestLastModified,
 jumpKingQuestSourceRows,
 jumpKingQuestVideos,
} from '@/lib/jump-king-quest';

interface FAQItem {
 question: string;
 answer: string;
}

interface JumpKingQuestArticleProps {
 title: string;
 description: string;
 canonical: string;
 label: string;
 heroImage?: string;
 heroAlt: string;
 faqs: FAQItem[];
 children: ReactNode;
 showSources?: boolean;
}

export function JumpKingQuestArticle({
 title,
 description,
 canonical,
 label,
 heroImage = jumpKingQuest.heroImage,
 heroAlt,
 faqs,
 children,
 showSources = true,
}: JumpKingQuestArticleProps) {
 const breadcrumbItems =
 canonical === jumpKingQuest.hubPath
 ? [
 { label: 'Games', href: '/games' },
 { label: 'JUMP KING QUEST', href: canonical },
 ]
 : [
 { label: 'Games', href: '/games' },
 { label: 'JUMP KING QUEST', href: jumpKingQuest.hubPath },
 { label, href: canonical },
 ];

 return (
 <>
 <JsonLd data={generateVideoGameSchema(jumpKingQuest)} />
 <JsonLd
 data={generateArticleSchema({
 title,
 description,
 url: canonical,
 datePublished: jumpKingQuest.releaseDate,
 dateModified: jumpKingQuestLastModified,
 imageUrl: heroImage,
 game: jumpKingQuest,
 })}
 />
 <JsonLd data={generateFAQSchema(faqs)} />

 <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
 <Breadcrumb items={breadcrumbItems} />
 <PageHero src={heroImage} alt={heroAlt} />
 <h1 className="mb-4 text-[36px] font-bold leading-[1.06] tracking-[-1.1px] text-foreground sm:text-[54px] sm:leading-[1.08] sm:tracking-[-1.39px]">
 {title}
 </h1>
 <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
 {description}
 </p>

 {children}

 <section className="my-10">
 <h2 className="mb-4 text-xl font-bold text-foreground">Official Video Reference</h2>
 <div className="grid gap-4 md:grid-cols-2">
 {jumpKingQuestVideos.slice(0, 2).map((video) => (
 <VideoEmbed
 key={video.id}
 videoId={video.id}
 title={video.title}
 caption={video.caption}
 />
 ))}
 </div>
 </section>

 {showSources && (
 <>
 <ArticleImage
 src={jumpKingQuestImages.phantom}
 alt="JUMP KING QUEST official player reference image"
 caption="Use official Steam pages, Steam news, and player discussions for release timing, platform labels, feature support, and launch-week questions."
 />
 <SourceCheckTable
 title="Official Links and Player Notes"
 rows={jumpKingQuestSourceRows}
 />
 </>
 )}
 <ArticleImage
 src={jumpKingQuestImages.combat}
 alt="JUMP KING QUEST related guide image"
 caption="Use the related guides to move from release facts to beginner guidance, multiplayer checks, controller support, and buying advice."
 />
 <RelatedGuides guides={getJumpKingQuestRelated(canonical)} />
 <ArticleImage
 src={jumpKingQuestImages.climb}
 alt="JUMP KING QUEST FAQ image"
 caption="Check release status, co-op, PvP, controller support, and player concerns before deciding whether to start a long climb."
 />
 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
