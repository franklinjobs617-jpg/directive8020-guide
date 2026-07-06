import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { FAQSection } from "@/components/faq-section";
import {
 JsonLd,
 generateArticleSchema,
 generateBreadcrumbSchema,
 generateFAQSchema,
 generateVideoGameSchema,
} from "@/components/json-ld";
import { RelatedGuides, SourceCheckTable } from "@/components/guide-blocks";
import { taskBarHero } from "@/lib/games";
import {
 getTaskBarHeroRelated,
 taskBarHeroImages,
 taskBarHeroLastModified,
 taskBarHeroSourceRows,
} from "@/lib/task-bar-hero";

interface FAQItem {
 question: string;
 answer: string;
}

interface TaskBarHeroArticleProps {
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

export function TaskBarHeroArticle({
 title,
 description,
 canonical,
 label,
 heroImage = taskBarHeroImages.hero,
 heroAlt,
 faqs,
 children,
 showSources = true,
}: TaskBarHeroArticleProps) {
 const breadcrumbItems =
  canonical === taskBarHero.hubPath
   ? [
      { label: "Games", href: "/games" },
      { label: "TBH: Task Bar Hero", href: canonical },
     ]
   : [
      { label: "Games", href: "/games" },
      { label: "TBH: Task Bar Hero", href: taskBarHero.hubPath },
      { label, href: canonical },
     ];

 return (
  <>
   <JsonLd data={generateVideoGameSchema(taskBarHero)} />
   <JsonLd
    data={generateBreadcrumbSchema(
     breadcrumbItems.map((item) => ({
      name: item.label,
      url: item.href,
     })),
    )}
   />
   <JsonLd
    data={generateArticleSchema({
     title,
     description,
     url: canonical,
     datePublished: taskBarHero.releaseDate,
     dateModified: taskBarHeroLastModified,
     imageUrl: heroImage,
     game: taskBarHero,
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
     <SourceCheckTable
      title="Official Links and Player Notes"
      rows={taskBarHeroSourceRows}
     />
    )}
    <RelatedGuides guides={getTaskBarHeroRelated(canonical)} />
    <FAQSection faqs={faqs} />
   </article>
  </>
 );
}
