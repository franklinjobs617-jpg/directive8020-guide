import type { ReactNode } from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { ArticleImage } from '@/components/article-media';
import { JsonLd, generateArticleSchema, generateFAQSchema, generateVideoGameSchema } from '@/components/json-ld';
import { RelatedGuides, SourceCheckTable } from '@/components/guide-blocks';
import { voidlingBound } from '@/lib/games';
import {
 getVoidlingBoundRelated,
 voidlingBoundImages,
 voidlingBoundLastModified,
 voidlingSourceRows,
 voidlingBoundWikiData,
} from '@/lib/voidling-bound';

interface FAQItem {
 question: string;
 answer: string;
}

interface VoidlingBoundArticleProps {
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

export function VoidlingBoundArticle({
 title,
 description,
 canonical,
 label,
 heroImage = voidlingBoundImages.hero,
 heroAlt,
 faqs,
 children,
 dateModified = voidlingBoundLastModified,
 showSources = true,
}: VoidlingBoundArticleProps) {
 const breadcrumbItems =
 canonical === voidlingBound.hubPath
 ? [
 { label: 'Games', href: '/games' },
 { label: 'Voidling Bound', href: canonical },
 ]
 : [
 { label: 'Games', href: '/games' },
 { label: 'Voidling Bound', href: voidlingBound.hubPath },
 { label, href: canonical },
 ];

 return (
 <>
 <JsonLd data={generateVideoGameSchema(voidlingBound)} />
 <JsonLd
 data={generateArticleSchema({
 title,
 description,
 url: canonical,
 datePublished: voidlingBound.releaseDate,
 dateModified,
 imageUrl: heroImage,
 game: voidlingBound,
 })}
 />
 <JsonLd data={generateFAQSchema(faqs)} />

 <article className="mx-auto max-w-[960px] px-4 py-10 sm:px-6">
 <Breadcrumb items={breadcrumbItems} />
 <PageHero src={heroImage} alt={heroAlt} />

 <h1 className="mb-4 max-w-3xl text-[36px] font-bold leading-[1.06] tracking-[-1.1px] text-foreground sm:text-[54px] sm:leading-[1.08] sm:tracking-[-1.39px]">
 {title}
 </h1>
 <p className="mb-8 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
 {description}
 </p>

 {children}

 {showSources && (
 <>
 <ArticleImage
 src={voidlingBoundImages.screenshot2}
 alt="Voidling Bound guide screenshot"
 caption="Voidling Bound pages use Steam for store facts and the wiki.gg database for species, evolutions, elements, and abilities."
 />
 <SourceCheckTable title="Voidling Bound Data Notes" rows={voidlingSourceRows} />
 </>
 )}

 <section className="my-8 rounded-lg border border-border bg-card p-5">
 <h2 className="mb-3 text-lg font-medium text-foreground">Data and Image Attribution</h2>
 <p className="text-sm leading-relaxed text-muted-foreground">
 Creature data and images are credited to the{' '}
 <Link href="https://voidlingbound.wiki.gg/wiki/Voidling_Bound_Wiki" target="_blank" rel="noreferrer" className="text-foreground underline decoration-border hover:decoration-foreground">
 Voidling Bound Wiki
 </Link>{' '}
 under the{' '}
 <Link href={voidlingBoundWikiData.wiki.licenseUrl} target="_blank" rel="noreferrer" className="text-foreground underline decoration-border hover:decoration-foreground">
 {voidlingBoundWikiData.wiki.license}
 </Link>
 . Steam images are used for store-level visual context.
 </p>
 </section>

 <RelatedGuides guides={getVoidlingBoundRelated(canonical)} />
 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
