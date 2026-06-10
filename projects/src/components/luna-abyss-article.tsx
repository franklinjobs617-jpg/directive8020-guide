import type { ReactNode } from 'react';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { ArticleImage } from '@/components/article-media';
import { JsonLd, generateArticleSchema, generateFAQSchema, generateVideoGameSchema } from '@/components/json-ld';
import { RelatedGuides, SourceCheckTable } from '@/components/guide-blocks';
import { lunaAbyss } from '@/lib/games';
import {
 getLunaAbyssRelated,
 lunaAbyssImages,
 lunaAbyssLastModified,
 lunaAbyssSourceRows,
} from '@/lib/luna-abyss';

interface FAQItem {
 question: string;
 answer: string;
}

interface LunaAbyssArticleProps {
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

export function LunaInfoTable({
 columns,
 rows,
}: {
 columns: string[];
 rows: string[][];
}) {
 return (
 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 {columns.map((column) => (
 <th key={column} className="px-4 py-3 text-left font-medium text-muted-foreground">
 {column}
 </th>
 ))}
 </tr>
 </thead>
 <tbody>
 {rows.map((row) => (
 <tr key={row.join('-')} className="border-b border-border last:border-0">
 {row.map((cell, index) => (
 <td
 key={`${cell}-${index}`}
 className={index === 0 ? 'px-4 py-3 font-semibold text-foreground' : 'px-4 py-3 text-muted-foreground'}
 >
 {cell}
 </td>
 ))}
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 );
}

export function LunaAbyssArticle({
 title,
 description,
 canonical,
 label,
 heroImage = lunaAbyss.heroImage,
 heroAlt,
 faqs,
 children,
 showSources = true,
}: LunaAbyssArticleProps) {
 const breadcrumbItems =
 canonical === lunaAbyss.hubPath
 ? [
 { label: 'Games', href: '/games' },
 { label: 'Luna Abyss', href: canonical },
 ]
 : [
 { label: 'Games', href: '/games' },
 { label: 'Luna Abyss', href: lunaAbyss.hubPath },
 { label, href: canonical },
 ];

 return (
 <>
 <JsonLd data={generateVideoGameSchema(lunaAbyss)} />
 <JsonLd
 data={generateArticleSchema({
 title,
 description,
 url: canonical,
 datePublished: lunaAbyssLastModified,
 dateModified: lunaAbyssLastModified,
 imageUrl: heroImage,
 game: lunaAbyss,
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
 src={lunaAbyssImages.screenshot6}
 alt="Luna Abyss source check and platform reference screenshot"
 caption="Steam, Xbox, official site, review pages, and player reports should be separated so current facts do not get mixed with community troubleshooting signals."
 />
 <SourceCheckTable title="Luna Abyss Sources and Status" rows={lunaAbyssSourceRows} />
 </>
 )}

 <ArticleImage
 src={lunaAbyssImages.screenshot7}
 alt="Luna Abyss related guide screenshot"
 caption="Use the related guides to move from platform choice to settings, walkthroughs, achievements, ending notes, and crash fixes."
 />
 <RelatedGuides guides={getLunaAbyssRelated(canonical)} />

 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
