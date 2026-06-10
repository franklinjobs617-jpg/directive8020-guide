import type { ReactNode } from 'react';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { ArticleImage } from '@/components/article-media';
import { JsonLd, generateArticleSchema, generateFAQSchema, generateVideoGameSchema } from '@/components/json-ld';
import { RelatedGuides, SourceCheckTable } from '@/components/guide-blocks';
import { gateGuardSimulator } from '@/lib/games';
import {
 gateGuardImages,
 gateGuardLastModified,
 gateGuardSourceRows,
 getGateGuardRelated,
} from '@/lib/gate-guard-simulator';

interface FAQItem {
 question: string;
 answer: string;
}

interface GateGuardArticleProps {
 title: string;
 description: string;
 canonical: string;
 label: string;
 heroImage?: string;
 heroAlt: string;
 faqs: FAQItem[];
 children: ReactNode;
 dateModified?: string;
 showSources?: boolean;
}

export function GateGuardArticle({
 title,
 description,
 canonical,
 label,
 heroImage = gateGuardSimulator.heroImage,
 heroAlt,
 faqs,
 children,
 dateModified = gateGuardLastModified,
 showSources = true,
}: GateGuardArticleProps) {
 const breadcrumbItems =
 canonical === gateGuardSimulator.hubPath
 ? [
 { label: 'Games', href: '/games' },
 { label: 'Gate Guard Simulator', href: canonical },
 ]
 : [
 { label: 'Games', href: '/games' },
 { label: 'Gate Guard Simulator', href: gateGuardSimulator.hubPath },
 { label, href: canonical },
 ];

 return (
 <>
 <JsonLd data={generateVideoGameSchema(gateGuardSimulator)} />
 <JsonLd
 data={generateArticleSchema({
 title,
 description,
 url: canonical,
 datePublished: gateGuardSimulator.releaseDate,
 dateModified,
 imageUrl: heroImage,
 game: gateGuardSimulator,
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
 src={gateGuardImages.decision}
 alt="Gate Guard Simulator source check and decision screen"
 caption="Because Gate Guard Simulator is not fully released, the source table separates confirmed Steam facts from third-party media and demand signals."
 />
 <SourceCheckTable title="Gate Guard Simulator Sources and Verification" rows={gateGuardSourceRows} />
 </>
 )}
 <ArticleImage
 src={gateGuardImages.gate}
 alt="Gate Guard Simulator related guide image"
 caption="Use this pre-release hub for status and planning until playtest or launch data supports deeper guide pages."
 />
 <RelatedGuides guides={getGateGuardRelated(canonical)} />
 <ArticleImage
 src={gateGuardImages.tools}
 alt="Gate Guard Simulator FAQ image"
 caption="The current high-value questions are release date, playtest access, PC specs, platforms, and gameplay identity."
 />
 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
