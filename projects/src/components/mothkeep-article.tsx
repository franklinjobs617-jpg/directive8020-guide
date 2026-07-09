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
import { mothkeep } from "@/lib/games";
import {
  mothkeepImages,
  mothkeepLastModified,
  mothkeepSourceRows,
  getMothkeepRelated,
} from "@/lib/mothkeep";

interface FAQItem {
  question: string;
  answer: string;
}

interface MothkeepArticleProps {
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

export function MothkeepArticle({
  title,
  description,
  canonical,
  label,
  heroImage = mothkeep.heroImage,
  heroAlt,
  faqs,
  children,
  showSources = true,
}: MothkeepArticleProps) {
  const breadcrumbItems =
    canonical === mothkeep.hubPath
      ? [
          { label: "Games", href: "/games" },
          { label: "Mothkeep", href: canonical },
        ]
      : [
          { label: "Games", href: "/games" },
          { label: "Mothkeep", href: mothkeep.hubPath },
          { label, href: canonical },
        ];

  return (
    <>
      <JsonLd data={generateVideoGameSchema(mothkeep)} />
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: canonical,
          datePublished: mothkeep.releaseDate,
          dateModified: mothkeepLastModified,
          imageUrl: heroImage,
          game: mothkeep,
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
        <Breadcrumb items={breadcrumbItems} />
        <PageHero src={heroImage} alt={heroAlt} />
        <h1 className="mb-4 text-[36px] font-bold leading-[1.06] tracking-[-1.1px] text-foreground sm:text-[54px] sm:leading-[1.08] sm:tracking-[-1.39px]">
          {title}
        </h1>
        <p className="mb-2 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
        <p className="mb-8 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Last updated: {new Date(mothkeepLastModified).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {children}

        <ArticleImage
          src={mothkeepImages.journal}
          alt="Mothkeep player journal showing documented moth species"
          caption="Every discovered moth gets a hand-drawn journal entry — the core loop is observation and documentation, not combat or competition."
        />

        {showSources && (
          <SourceCheckTable
            title="Official Links and Source Checks"
            rows={mothkeepSourceRows}
          />
        )}
        <RelatedGuides guides={getMothkeepRelated(canonical)} />
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
