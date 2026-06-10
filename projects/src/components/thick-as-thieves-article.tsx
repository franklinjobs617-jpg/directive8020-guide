import type { ReactNode } from 'react';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { ArticleImage } from '@/components/article-media';
import { JsonLd, generateArticleSchema, generateFAQSchema, generateVideoGameSchema } from '@/components/json-ld';
import { RelatedGuides, SourceCheckTable } from '@/components/guide-blocks';
import { thickAsThieves } from '@/lib/games';
import {
 getThickAsThievesRelated,
 thickAsThievesImages,
 thickAsThievesLastModified,
 thickAsThievesSourceRows,
} from '@/lib/thick-as-thieves';

interface FAQItem {
 question: string;
 answer: string;
}

interface ThickAsThievesArticleProps {
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

export function ThickAsThievesArticle({
 title,
 description,
 canonical,
 label,
 heroImage = thickAsThieves.heroImage,
 heroAlt,
 faqs,
 children,
 showSources = true,
}: ThickAsThievesArticleProps) {
 const breadcrumbItems =
 canonical === thickAsThieves.hubPath
 ? [
 { label: 'Games', href: '/games' },
 { label: 'Thick As Thieves', href: canonical },
 ]
 : [
 { label: 'Games', href: '/games' },
 { label: 'Thick As Thieves', href: thickAsThieves.hubPath },
 { label, href: canonical },
 ];

 return (
 <>
 <JsonLd data={generateVideoGameSchema(thickAsThieves)} />
 <JsonLd
 data={generateArticleSchema({
 title,
 description,
 url: canonical,
 datePublished: thickAsThieves.releaseDate,
 dateModified: thickAsThievesLastModified,
 imageUrl: heroImage,
 game: thickAsThieves,
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

 {showSources && (
 <>
 <ArticleImage
 src={thickAsThievesImages.screenshot1}
 alt="Thick As Thieves official links and launch notes image"
 caption="Steam details, official FAQ answers, community expectations, and trailer-observed details help set realistic launch-day expectations."
 />
 <SourceCheckTable title="Thick As Thieves Official Links and References" rows={thickAsThievesSourceRows} />
 </>
 )}
 <ArticleImage
 src={thickAsThievesImages.screenshot2}
 alt="Thick As Thieves related guide image"
 caption="Use the related guides to move from release facts to co-op, stealth basics, contracts, PC specs, gear, and roadmap expectations."
 />
 <RelatedGuides guides={getThickAsThievesRelated(canonical)} />
 <ArticleImage
 src={thickAsThievesImages.screenshot3}
 alt="Thick As Thieves FAQ image"
 caption="Check release status, platform support, co-op limits, price guidance, and first-heist expectations before buying."
 />
 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
