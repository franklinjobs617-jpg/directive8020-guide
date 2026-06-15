import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Enjoy4Game. Learn how we collect, use, and protect your data, including our use of Google AdSense, Ezoic, and Google Analytics.',
  alternates: {
    canonical: '/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'June 12, 2026';

  return (
    <div className="site-shell py-8">
      <Breadcrumb items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />

      <h1 className="mb-2 text-[36px] font-bold leading-tight tracking-tight text-foreground sm:text-[44px]">
        Privacy Policy
      </h1>
      <p className="mb-10 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

      <div className="max-w-3xl space-y-10 text-base leading-7 text-foreground">

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">1. Who we are</h2>
          <p className="text-muted-foreground">
            Enjoy4Game (<strong>enjoy4game.com</strong>) is an independently operated game
            guide website. We publish walkthroughs, builds, endings, trophies, and release
            coverage for Steam games. We are not affiliated with any game developer,
            publisher, or platform.
          </p>
          <p className="mt-3 text-muted-foreground">
            For privacy-related questions, contact us at{' '}
            <a href="mailto:support@enjoy4game.com" className="underline underline-offset-2">
              support@enjoy4game.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">2. Information we collect</h2>
          <p className="text-muted-foreground">
            We do not require you to create an account or submit personal information to
            use this site. We collect limited data automatically when you visit:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              <strong className="text-foreground">Usage data:</strong> pages visited, time
              on page, referring URL, browser type, device type, and general geographic
              region (country / city level). This is collected via Google Analytics.
            </li>
            <li>
              <strong className="text-foreground">Advertising data:</strong> ad impressions,
              clicks, and interaction data collected by Google AdSense and Ezoic for the
              purpose of serving and measuring advertisements.
            </li>
            <li>
              <strong className="text-foreground">Cookies:</strong> small text files placed
              on your device by us and third-party services (see Section 4).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">3. How we use your information</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>To understand how visitors use the site and improve content quality.</li>
            <li>To serve advertisements that help fund free guide content.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <p className="mt-3 text-muted-foreground">
            We do not sell, rent, or trade your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">4. Cookies and third-party services</h2>
          <p className="mb-4 text-muted-foreground">
            This site uses cookies from the following third-party services:
          </p>

          <div className="space-y-5">
            <div className="rounded-lg border border-border bg-mist/40 p-5">
              <h3 className="mb-2 text-base font-bold text-foreground">Google AdSense</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                We use Google AdSense to display advertisements. Google uses cookies to
                serve ads based on your prior visits to this site and other sites. Google's
                use of advertising cookies enables it and its partners to serve ads based
                on your visit to our site and other sites on the internet. You may opt out
                of personalized advertising by visiting{' '}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline underline-offset-2"
                >
                  Google Ads Settings
                </a>
                . For more information, see{' '}
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline underline-offset-2"
                >
                  Google's advertising policy
                </a>
                .
              </p>
            </div>

            <div className="rounded-lg border border-border bg-mist/40 p-5">
              <h3 className="mb-2 text-base font-bold text-foreground">Ezoic</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                We use Ezoic to optimize ad placement and site performance. Ezoic may use
                cookies and similar tracking technologies to collect usage data for this
                purpose. Ezoic is GDPR and CCPA compliant and uses a consent management
                platform. For more information, see{' '}
                <a
                  href="https://www.ezoic.com/privacy-policy/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline underline-offset-2"
                >
                  Ezoic's Privacy Policy
                </a>
                .
              </p>
            </div>

            <div className="rounded-lg border border-border bg-mist/40 p-5">
              <h3 className="mb-2 text-base font-bold text-foreground">Google Analytics</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                We use Google Analytics to understand how visitors interact with the site.
                Google Analytics collects anonymized usage data and sets cookies on your
                device. You can opt out by installing the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline underline-offset-2"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">5. Your rights</h2>
          <p className="text-muted-foreground">
            Depending on your location, you may have rights under GDPR (European Union),
            CCPA (California), or other applicable laws, including the right to:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Object to or restrict certain types of processing.</li>
            <li>Opt out of the sale of your personal information (we do not sell data).</li>
          </ul>
          <p className="mt-3 text-muted-foreground">
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:support@enjoy4game.com" className="underline underline-offset-2">
              support@enjoy4game.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">6. Children's privacy</h2>
          <p className="text-muted-foreground">
            This site is not directed at children under the age of 13. We do not knowingly
            collect personal information from children. If you believe a child has provided
            us with personal information, please contact us and we will delete it promptly.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">7. External links</h2>
          <p className="text-muted-foreground">
            This site contains links to external websites (Steam, YouTube, game developer
            pages). We are not responsible for the privacy practices of those sites. We
            recommend reviewing their privacy policies before providing any personal
            information.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">8. Changes to this policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. The date at the top of
            this page indicates when the policy was last revised. Continued use of the site
            after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">9. Contact</h2>
          <p className="text-muted-foreground">
            For any privacy-related questions or requests, contact us at:
          </p>
          <p className="mt-3 text-muted-foreground">
            <strong className="text-foreground">Enjoy4Game</strong>
            <br />
            Email:{' '}
            <a href="mailto:support@enjoy4game.com" className="underline underline-offset-2">
              support@enjoy4game.com
            </a>
          </p>
        </section>

      </div>
    </div>
  );
}
