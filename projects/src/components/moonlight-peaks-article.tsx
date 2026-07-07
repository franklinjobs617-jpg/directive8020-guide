import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { FAQSection } from "@/components/faq-section";
import {
  JsonLd,
  generateArticleSchema,
  generateFAQSchema,
  generateVideoGameSchema,
} from "@/components/json-ld";
import { RelatedGuides, SourceCheckTable } from "@/components/guide-blocks";
import { moonlightPeaks } from "@/lib/games";
import {
  moonlightPeaksLastModified,
  moonlightPeaksSourceRows,
  getMoonlightPeaksRelated,
} from "@/lib/moonlight-peaks";

interface FAQItem {
  question: string;
  answer: string;
}

interface MoonlightPeaksArticleProps {
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

export function MoonlightPeaksArticle({
  title,
  description,
  canonical,
  label,
  heroImage = moonlightPeaks.heroImage,
  heroAlt,
  faqs,
  children,
  showSources = true,
}: MoonlightPeaksArticleProps) {
  const breadcrumbItems =
    canonical === moonlightPeaks.hubPath
      ? [
          { label: "Games", href: "/games" },
          { label: "Moonlight Peaks", href: canonical },
        ]
      : [
          { label: "Games", href: "/games" },
          { label: "Moonlight Peaks", href: moonlightPeaks.hubPath },
          { label, href: canonical },
        ];

  return (
    <>
      <JsonLd data={generateVideoGameSchema(moonlightPeaks)} />
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: canonical,
          datePublished: moonlightPeaks.releaseDate,
          dateModified: moonlightPeaksLastModified,
          imageUrl: heroImage,
          game: moonlightPeaks,
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
          Last updated: {new Date(moonlightPeaksLastModified).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {children}

        {showSources && (
          <SourceCheckTable
            title="Official Links and Source Checks"
            rows={moonlightPeaksSourceRows}
          />
        )}
        <RelatedGuides guides={getMoonlightPeaksRelated(canonical)} />
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
