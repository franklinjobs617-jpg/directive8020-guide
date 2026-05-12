import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';

const contactEmail = 'admin@enjoy4game.com';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms of Use for Directive 8020 Guide Hub, including fan-site status, acceptable use, guide accuracy, third-party links, and copyright notices.',
  alternates: {
    canonical: '/terms-of-use',
  },
};

export default function TermsOfUsePage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ label: 'Terms of Use' }]} />

      <h1 className="mb-4 text-3xl font-black leading-tight text-foreground sm:text-4xl">
        Terms of Use
      </h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Last updated: May 12, 2026
      </p>

      <div className="prose-game">
        <h2>Acceptance of Terms</h2>
        <p>
          By using Directive 8020 Guide Hub, you agree to these Terms of Use. If
          you do not agree, please do not use the site.
        </p>

        <h2>Fan-Made Guide Site</h2>
        <p>
          Directive 8020 Guide Hub is an unofficial fan-made website. It is not
          affiliated with, endorsed by, sponsored by, or operated by Supermassive
          Games, Bandai Namco, or any other rightsholder connected to Directive
          8020 or The Dark Pictures Anthology. Game titles, character names,
          logos, screenshots, trailers, and related marks belong to their
          respective owners.
        </p>

        <h2>Content Purpose</h2>
        <p>
          Site content is provided for guide, review, commentary, news,
          educational, and reference purposes. We aim to write original
          explanations, route notes, checklists, and analysis rather than
          republishing official material or copying third-party articles. Any
          referenced third-party material should be limited, attributed where
          appropriate, and used only to support commentary or player guidance.
        </p>

        <h2>Guide Accuracy</h2>
        <p>
          We work to keep guide information useful and accurate, especially
          around launch windows when patches, platform information, scores, and
          community discoveries can change quickly. However, we cannot guarantee
          that every route, trophy condition, ending trigger, or performance
          note is complete or error-free. Always verify critical purchase,
          platform, and account information with official storefronts and
          publisher sources.
        </p>

        <h2>Acceptable Use</h2>
        <p>
          You may use this site for personal, non-commercial reading and
          reference. You may not attempt to disrupt the site, scrape it at
          abusive scale, misrepresent our content as official publisher material,
          upload malware through contact channels, or use the site in a way that
          violates applicable law.
        </p>

        <h2>Third-Party Links and Embeds</h2>
        <p>
          The site may link to or embed content from platforms such as YouTube,
          Steam, OpenCritic, Metacritic, Reddit, official publisher websites, and
          other gaming resources. We do not control those services and are not
          responsible for their content, policies, availability, or accuracy.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          Original text, layouts, checklists, tables, and guide structures
          created for this site are protected by applicable intellectual property
          laws. Game-related trademarks, official assets, and third-party media
          remain the property of their respective owners. If you believe material
          on this site infringes your rights, please use the copyright
          infringement process described on our Copyright Infringement page.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          The site is provided as-is. To the fullest extent permitted by law, we
          are not liable for losses arising from use of the site, reliance on
          guide information, third-party links, platform availability, or changes
          made by game developers, publishers, storefronts, or ad providers.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{' '}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
      </div>
    </article>
  );
}
