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
import { ArticleImage } from "@/components/article-media";
import { RelatedGuides, SourceCheckTable } from "@/components/guide-blocks";
import { catMailCo } from "@/lib/games";
import {
  catMailCoImages,
  catMailCoLastModified,
  catMailCoSourceRows,
  getCatMailCoRelated,
} from "@/lib/cat-mail-co";

interface FAQItem {
  question: string;
  answer: string;
}

interface CatMailCoArticleProps {
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

export function CatMailCoArticle({
  title,
  description,
  canonical,
  label,
  heroImage = catMailCo.heroImage,
  heroAlt,
  faqs,
  children,
  showSources = true,
}: CatMailCoArticleProps) {
  const breadcrumbItems =
    canonical === catMailCo.hubPath
      ? [
          { label: "Games", href: "/games" },
          { label: "Cat Mail Co.", href: canonical },
        ]
      : [
          { label: "Games", href: "/games" },
          { label: "Cat Mail Co.", href: catMailCo.hubPath },
          { label, href: canonical },
        ];

  return (
    <>
      <JsonLd data={generateVideoGameSchema(catMailCo)} />
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: canonical,
          datePublished: catMailCo.releaseDate,
          dateModified: catMailCoLastModified,
          imageUrl: heroImage,
          game: catMailCo,
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
          Last updated: {new Date(catMailCoLastModified).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {children}

        <ArticleImage
          src={catMailCoImages.sortingRoom}
          alt="Cat Mail Co. package sorting room with labeled parcels ready for delivery"
          caption="The core loop: weigh, label, and sort parcels by destination before loading them onto the outgoing boat."
        />

        {showSources && (
          <SourceCheckTable
            title="Official Links and Source Checks"
            rows={catMailCoSourceRows}
          />
        )}
        <RelatedGuides guides={getCatMailCoRelated(canonical)} />
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
