import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { JsonLd, generateWebPageSchema } from '@/components/json-ld';

const contactEmail = 'admin@enjoy4game.com';
const pageTitle = 'Copyright Infringement Policy';
const pageDescription =
  'Copyright infringement and DMCA-style contact policy for Directive 8020 Guide Hub, including takedown notice requirements.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/copyright-infringement',
  },
};

export default function CopyrightInfringementPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <JsonLd
        data={generateWebPageSchema({
          title: pageTitle,
          description: pageDescription,
          url: '/copyright-infringement',
        })}
      />
      <Breadcrumb items={[{ label: 'Copyright Infringement' }]} />

      <h1 className="mb-4 text-3xl font-black leading-tight text-foreground sm:text-4xl">
        Copyright Infringement Policy
      </h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Last updated: May 12, 2026
      </p>

      <div className="prose-game">
        <h2>Our Content Policy</h2>
        <p>
          Directive 8020 Guide Hub is an unofficial fan-made guide and review
          site. We aim to publish original writing, route analysis, tables,
          checklists, and player-focused explanations. Game-related screenshots,
          trailers, names, and marks may appear only in a limited editorial
          context such as commentary, review, guide illustration, comparison, or
          news-style reference. We do not claim ownership of official game
          assets or third-party media.
        </p>

        <h2>Rights Ownership</h2>
        <p>
          Directive 8020, The Dark Pictures Anthology, related artwork,
          characters, screenshots, videos, logos, and trademarks belong to their
          respective owners, including Supermassive Games, Bandai Namco, and any
          other applicable rightsholders. This site is not official and does not
          imply endorsement by those owners.
        </p>

        <h2>Requesting Removal or Correction</h2>
        <p>
          If you are a rights owner or an authorized representative and believe
          material on this site infringes your copyright, please email{' '}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a> with a clear
          notice. We will review complete notices and remove, replace, credit, or
          otherwise resolve disputed material when appropriate.
        </p>

        <h2>What to Include in a Notice</h2>
        <p>
          To help us act quickly, please include the following information:
        </p>
        <ul>
          <li>Your legal name and, if applicable, the organization you represent.</li>
          <li>Your contact email address.</li>
          <li>The URL of the page containing the disputed material.</li>
          <li>A description of the copyrighted work you claim is infringed.</li>
          <li>The specific material you want removed, credited, or changed.</li>
          <li>A statement that you are the rights owner or authorized to act for the rights owner.</li>
          <li>A statement that the information in your notice is accurate.</li>
        </ul>

        <h2>Review Process</h2>
        <p>
          After receiving a complete notice, we may temporarily remove or disable
          access to the disputed material while reviewing the claim. We may also
          request clarification if the notice does not identify the material or
          ownership basis clearly. Our goal is to resolve legitimate rights
          concerns quickly while preserving lawful commentary, review, guide, and
          reference uses.
        </p>

        <h2>Good-Faith Editorial Use</h2>
        <p>
          Some pages may discuss public trailers, official screenshots, store
          pages, review scores, gameplay features, or community questions. These
          references are intended to support original editorial content and help
          players understand the game. If a rights owner prefers that a specific
          asset not be used, contact us and we will review the request promptly.
        </p>

        <h2>Contact Email</h2>
        <p>
          Copyright and infringement requests should be sent to{' '}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
      </div>
    </article>
  );
}
