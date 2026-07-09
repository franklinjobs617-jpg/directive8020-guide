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
import { theMoundOmenOfCthulhu } from "@/lib/games";
import {
  theMoundImages,
  theMoundLastModified,
  theMoundSourceRows,
  getTheMoundRelated,
} from "@/lib/the-mound-omen-of-cthulhu";

interface FAQItem {
  question: string;
  answer: string;
}

interface TheMoundArticleProps {
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

export function TheMoundArticle({
  title,
  description,
  canonical,
  label,
  heroImage = theMoundOmenOfCthulhu.heroImage,
  heroAlt,
  faqs,
  children,
  showSources = true,
}: TheMoundArticleProps) {
  const breadcrumbItems =
    canonical === theMoundOmenOfCthulhu.hubPath
      ? [
          { label: "Games", href: "/games" },
          { label: "The Mound: Omen of Cthulhu", href: canonical },
        ]
      : [
          { label: "Games", href: "/games" },
          { label: "The Mound: Omen of Cthulhu", href: theMoundOmenOfCthulhu.hubPath },
          { label, href: canonical },
        ];

  return (
    <>
      <JsonLd data={generateVideoGameSchema(theMoundOmenOfCthulhu)} />
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: canonical,
          datePublished: theMoundOmenOfCthulhu.releaseDate,
          dateModified: theMoundLastModified,
          imageUrl: heroImage,
          game: theMoundOmenOfCthulhu,
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
          Last updated: {new Date(theMoundLastModified).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {children}

        <ArticleImage
          src={theMoundImages.expedition}
          alt="The Mound: Omen of Cthulhu expedition party exploring the cursed jungle"
          caption="A four-player expedition pushes deeper into the jungle — every step raises the risk of hallucination and ambush."
        />

        {showSources && (
          <SourceCheckTable
            title="Official Links and Source Checks"
            rows={theMoundSourceRows}
          />
        )}
        <RelatedGuides guides={getTheMoundRelated(canonical)} />
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
