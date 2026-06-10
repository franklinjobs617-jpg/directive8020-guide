import type { ReactNode } from 'react';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { ArticleImage } from '@/components/article-media';
import { JsonLd, generateArticleSchema, generateFAQSchema, generateVideoGameSchema } from '@/components/json-ld';
import { RelatedGuides, SourceCheckTable } from '@/components/guide-blocks';
import { minaTheHollower } from '@/lib/games';
import {
 getMinaRelated,
 minaImages,
 minaLastModified,
 minaSourceRows,
} from '@/lib/mina-the-hollower';

interface FAQItem {
 question: string;
 answer: string;
}

interface MinaArticleProps {
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

export function MinaArticle({
 title,
 description,
 canonical,
 label,
 heroImage = minaTheHollower.heroImage,
 heroAlt,
 faqs,
 children,
 showSources = true,
}: MinaArticleProps) {
 const breadcrumbItems =
 canonical === minaTheHollower.hubPath
 ? [
 { label: 'Games', href: '/games' },
 { label: 'Mina the Hollower', href: canonical },
 ]
 : [
 { label: 'Games', href: '/games' },
 { label: 'Mina the Hollower', href: minaTheHollower.hubPath },
 { label, href: canonical },
 ];

 return (
 <>
 <JsonLd data={generateVideoGameSchema(minaTheHollower)} />
 <JsonLd
 data={generateArticleSchema({
 title,
 description,
 url: canonical,
 datePublished: minaLastModified,
 dateModified: minaLastModified,
 imageUrl: heroImage,
 game: minaTheHollower,
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
 src={minaImages.screenshot9}
 alt="Mina the Hollower official links and platform notes image"
 caption="Steam details, official Yacht Club Games updates, platform reporting, and community questions help clarify what to expect at launch."
 />
 <SourceCheckTable title="Mina the Hollower Official Links and References" rows={minaSourceRows} />
 </>
 )}
 <ArticleImage
 src={minaImages.screenshot10}
 alt="Mina the Hollower related guide image"
 caption="Use the related guides to move from release timing to specs, Steam Deck readiness, beginner advice, and buying decisions."
 />
 <RelatedGuides guides={getMinaRelated(canonical)} />
 <ArticleImage
 src={minaImages.screenshot8}
 alt="Mina the Hollower FAQ image"
 caption="Check the date, platforms, PC specs, Steam Deck outlook, and day-one buying fit before launch."
 />
 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
