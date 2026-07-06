import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { FAQSection } from "@/components/faq-section";
import { ArticleImage, VideoEmbed } from "@/components/article-media";
import {
 JsonLd,
 generateArticleSchema,
 generateFAQSchema,
 generateVideoGameSchema,
} from "@/components/json-ld";
import { RelatedGuides, SourceCheckTable } from "@/components/guide-blocks";
import { deltarune } from "@/lib/games";
import {
 deltaruneImages,
 deltaruneLastModified,
 deltaruneSourceRows,
 deltaruneVideos,
 getDeltaruneRelated,
} from "@/lib/deltarune";

interface FAQItem {
 question: string;
 answer: string;
}

interface DeltaruneArticleProps {
 title: string;
 description: string;
 canonical: string;
 label: string;
 heroImage?: string;
 heroAlt: string;
 faqs: FAQItem[];
 children: ReactNode;
 showSources?: boolean;
 showOfficialVideo?: boolean;
}

export function DeltaruneArticle({
 title,
 description,
 canonical,
 label,
 heroImage = deltarune.heroImage,
 heroAlt,
 faqs,
 children,
 showSources = true,
 showOfficialVideo = true,
}: DeltaruneArticleProps) {
 const breadcrumbItems =
  canonical === deltarune.hubPath
   ? [
      { label: "Games", href: "/games" },
      { label: "DELTARUNE", href: canonical },
     ]
   : [
      { label: "Games", href: "/games" },
      { label: "DELTARUNE", href: deltarune.hubPath },
      { label, href: canonical },
     ];

 return (
  <>
   <JsonLd data={generateVideoGameSchema(deltarune)} />
   <JsonLd
    data={generateArticleSchema({
     title,
     description,
     url: canonical,
     datePublished: deltarune.releaseDate,
     dateModified: deltaruneLastModified,
     imageUrl: heroImage,
     game: deltarune,
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

    {showOfficialVideo && (
     <section className="my-10">
      <h2 className="mb-4 text-xl font-bold text-foreground">
       Official Video Reference
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
       <VideoEmbed {...deltaruneVideos.chapter5} />
       <VideoEmbed {...deltaruneVideos.reveal} />
      </div>
     </section>
    )}

    {showSources && (
     <>
      <ArticleImage
       src={deltaruneImages.screenshot1}
       alt="DELTARUNE official screenshot used for source and route checks"
       caption="This guide separates official facts from working route notes. Official pages cover chapter status, platforms, price, demo saves, and future chapter plans; route-specific secrets need gameplay proof before they are treated as final."
      />
      <SourceCheckTable
       title="Official Links and Player Notes"
       rows={deltaruneSourceRows}
      />
     </>
    )}

    <ArticleImage
     src={deltaruneImages.screenshot2}
     alt="DELTARUNE related guide navigation image"
     caption="Use the related guides to move from current chapter status to spoiler-light beginner help or the Chapter 5 walkthrough and secrets page."
    />
    <RelatedGuides guides={getDeltaruneRelated(canonical)} />
    <FAQSection faqs={faqs} />
   </article>
  </>
 );
}
