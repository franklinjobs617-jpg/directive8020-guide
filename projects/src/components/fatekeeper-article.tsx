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
import { RelatedGuides } from "@/components/guide-blocks";
import { fatekeeper } from "@/lib/games";
import {
  fatekeeperLastModified,
  getFatekeeperRelated,
} from "@/lib/fatekeeper";

interface FAQItem {
  question: string;
  answer: string;
}

interface FatekeeperArticleProps {
  title: string;
  description: string;
  canonical: string;
  label: string;
  heroImage?: string;
  heroAlt: string;
  faqs: FAQItem[];
  children: ReactNode;
}

export function FatekeeperArticle({
  title,
  description,
  canonical,
  label,
  heroImage = fatekeeper.heroImage,
  heroAlt,
  faqs,
  children,
}: FatekeeperArticleProps) {
  const breadcrumbItems =
    canonical === fatekeeper.hubPath
      ? [
          { label: "Games", href: "/games" },
          { label: "Fatekeeper", href: canonical },
        ]
      : [
          { label: "Games", href: "/games" },
          { label: "Fatekeeper", href: fatekeeper.hubPath },
          { label, href: canonical },
        ];

  return (
    <>
      <JsonLd data={generateVideoGameSchema(fatekeeper)} />
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: canonical,
          datePublished: fatekeeper.releaseDate,
          dateModified: fatekeeperLastModified,
          imageUrl: heroImage,
          game: fatekeeper,
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <Breadcrumb items={breadcrumbItems} />
        <PageHero src={heroImage} alt={heroAlt} />
        <h1 className="mb-4 text-3xl font-black leading-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>

        {children}

        <RelatedGuides guides={getFatekeeperRelated(canonical)} />
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
