import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Enjoy4Game. Read the terms governing your use of our game guide website.',
  alternates: {
    canonical: '/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const lastUpdated = 'June 12, 2026';

  return (
    <div className="site-shell py-8">
      <Breadcrumb items={[{ label: 'Terms of Service', href: '/terms' }]} />

      <h1 className="mb-2 text-[36px] font-bold leading-tight tracking-tight text-foreground sm:text-[44px]">
        Terms of Service
      </h1>
      <p className="mb-10 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

      <div className="max-w-3xl space-y-10 text-base leading-7 text-foreground">

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">1. Acceptance of terms</h2>
          <p className="text-muted-foreground">
            By accessing or using Enjoy4Game (<strong>enjoy4game.com</strong>), you agree
            to be bound by these Terms of Service. If you do not agree, please do not use
            this site. We reserve the right to update these terms at any time. Continued
            use of the site after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">2. About this site</h2>
          <p className="text-muted-foreground">
            Enjoy4Game is an independent game guide website that publishes walkthroughs,
            builds, endings, trophies, system requirements, and release coverage for Steam
            games. We are not affiliated with any game developer, publisher, or platform.
            All game names, titles, and related assets are the property of their respective
            owners.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">3. Use of content</h2>
          <p className="text-muted-foreground">
            All original content on this site — including guide text, page structure, and
            editorial commentary — is owned by Enjoy4Game. You may not reproduce, republish,
            or redistribute our original content without written permission.
          </p>
          <p className="mt-3 text-muted-foreground">
            Game screenshots, trailers, and official assets remain the property of their
            respective developers and publishers, and are used here for editorial and
            informational purposes under fair use principles.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">4. Accuracy of information</h2>
          <p className="text-muted-foreground">
            We make reasonable efforts to ensure guide content is accurate and up to date.
            However, game content changes with patches and updates. Information may become
            outdated. We do not guarantee that any guide is complete, current, or error-free.
            Use guides at your own discretion.
          </p>
          <p className="mt-3 text-muted-foreground">
            If you notice an error or outdated information, please contact us at{' '}
            <a href="mailto:support@enjoy4game.com" className="underline underline-offset-2">
              support@enjoy4game.com
            </a>{' '}
            so we can correct it promptly.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">5. Advertising</h2>
          <p className="text-muted-foreground">
            This site displays advertisements served by Google AdSense and Ezoic. These ads
            help fund free guide content. We do not control the specific ads displayed and
            are not responsible for third-party advertiser content. Ad targeting is governed
            by Google's and Ezoic's respective privacy and advertising policies.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">6. External links</h2>
          <p className="text-muted-foreground">
            This site links to external websites including Steam, YouTube, and game
            developer pages. These links are provided for convenience. We are not
            responsible for the content, accuracy, or practices of external sites.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">7. Disclaimer of warranties</h2>
          <p className="text-muted-foreground">
            This site is provided "as is" without warranties of any kind, either express or
            implied. We do not warrant that the site will be uninterrupted, error-free, or
            free of harmful components. Your use of the site is at your own risk.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">8. Limitation of liability</h2>
          <p className="text-muted-foreground">
            To the fullest extent permitted by law, Enjoy4Game shall not be liable for any
            indirect, incidental, special, or consequential damages arising from your use of
            this site or reliance on any guide content.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">9. Contact</h2>
          <p className="text-muted-foreground">
            For questions about these terms, contact us at:
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
