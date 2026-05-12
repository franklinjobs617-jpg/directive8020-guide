import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { JsonLd, generateWebPageSchema } from '@/components/json-ld';

const contactEmail = 'admin@enjoy4game.com';
const pageTitle = 'Privacy Policy';
const pageDescription =
  'Privacy Policy for Directive 8020 Guide Hub covering analytics, ads, cookies, contact data, and user choices.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <JsonLd
        data={generateWebPageSchema({
          title: pageTitle,
          description: pageDescription,
          url: '/privacy-policy',
        })}
      />
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      <h1 className="mb-4 text-3xl font-black leading-tight text-foreground sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Last updated: May 12, 2026
      </p>

      <div className="prose-game">
        <p>
          Directive 8020 Guide Hub is a fan-made guide website for players who
          want practical walkthroughs, review context, survival routes, trophy
          planning, and troubleshooting information. This Privacy Policy explains
          what information may be collected when you use this site and how that
          information is handled.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We do not require account registration to read guides. When you visit
          the site, standard technical information may be collected automatically,
          including browser type, device type, pages viewed, approximate location
          derived from IP address, referrer URL, and interaction events such as
          page views. If you contact us by email, we may receive your email
          address, message content, and any files or details you choose to send.
        </p>

        <h2>Analytics and Advertising</h2>
        <p>
          This site may use analytics tools such as Google Analytics to understand
          which pages are useful, where errors occur, and how visitors discover
          the site. This site may also display advertising through Google
          AdSense or similar ad platforms. These services may use cookies or
          similar technologies to measure performance, prevent abuse, and deliver
          relevant ads.
        </p>

        <h2>Cookies</h2>
        <p>
          Cookies are small files stored by your browser. They may be used for
          analytics, ad measurement, security, or remembering basic preferences.
          You can block or delete cookies through your browser settings. Some
          site features or advertising functions may work differently if cookies
          are disabled.
        </p>

        <h2>How We Use Information</h2>
        <p>
          Information is used to operate the website, improve guide quality,
          diagnose technical problems, respond to messages, understand content
          demand, prevent spam or abuse, and comply with legal obligations. We do
          not sell personal contact messages to third parties.
        </p>

        <h2>Third-Party Content</h2>
        <p>
          Pages may embed or link to third-party services such as YouTube, Steam,
          OpenCritic, Metacritic, official publisher pages, or social platforms.
          Those services operate under their own privacy policies. Visiting or
          interacting with embedded content may allow those third parties to
          collect information according to their own terms.
        </p>

        <h2>Data Retention</h2>
        <p>
          Analytics data is retained according to the settings of the analytics
          provider. Email messages may be retained as long as needed to respond,
          resolve a dispute, document an abuse report, or comply with a legal
          obligation.
        </p>

        <h2>Your Choices</h2>
        <p>
          You can use browser controls to limit cookies, use advertising
          preference tools provided by ad networks, or contact us to request
          deletion of email correspondence you sent to us, unless retention is
          necessary for legal, security, or abuse-prevention reasons.
        </p>

        <h2>Contact</h2>
        <p>
          Privacy questions can be sent to{' '}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
      </div>
    </article>
  );
}
