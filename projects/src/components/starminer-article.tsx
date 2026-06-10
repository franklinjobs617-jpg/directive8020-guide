import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { FAQSection } from "@/components/faq-section";
import { ArticleImage } from "@/components/article-media";
import {
 JsonLd,
 generateArticleSchema,
 generateFAQSchema,
 generateVideoGameSchema,
} from "@/components/json-ld";
import { RelatedGuides, SourceCheckTable } from "@/components/guide-blocks";
import { starminer } from "@/lib/games";
import {
 getStarminerRelated,
 starminerImages,
 starminerLastModified,
 starminerSourceRows,
} from "@/lib/starminer";

interface FAQItem {
 question: string;
 answer: string;
}

interface StarminerArticleProps {
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

export function StarminerArticle({
 title,
 description,
 canonical,
 label,
 heroImage = starminer.heroImage,
 heroAlt,
 faqs,
 children,
 showSources = true,
}: StarminerArticleProps) {
 const breadcrumbItems =
 canonical === starminer.hubPath
 ? [
 { label: "Games", href: "/games" },
 { label: "Starminer", href: canonical },
 ]
 : [
 { label: "Games", href: "/games" },
 { label: "Starminer", href: starminer.hubPath },
 { label, href: canonical },
 ];

 return (
 <>
 <JsonLd data={generateVideoGameSchema(starminer)} />
 <JsonLd
 data={generateArticleSchema({
 title,
 description,
 url: canonical,
 datePublished: starminer.releaseDate,
 dateModified: starminerLastModified,
 imageUrl: heroImage,
 game: starminer,
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
 src={starminerImages.frontier}
 alt="Starminer official sources and Early Access reference image"
 caption="Starminer is an Early Access systems sandbox, so release timing, price, reviews, compatibility, and planned features should be checked against official sources before making long-session decisions."
 />
 <SourceCheckTable
 title="Starminer Official Links and Source Checks"
 rows={starminerSourceRows}
 />
 </>
 )}
 <ArticleImage
 src={starminerImages.logistics}
 alt="Starminer related guide navigation image"
 caption="Use the related guides to move from launch facts to first-hour planning, ship building, mining logistics, defense, feature status, and buying advice."
 />
 <RelatedGuides guides={getStarminerRelated(canonical)} />
 <ArticleImage
 src={starminerImages.station}
 alt="Starminer FAQ and guide hub image"
 caption="Starminer rewards connected planning: ships, stations, resources, research, heat, and defenses all affect the next decision."
 />
 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
