import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';

export const metadata: Metadata = {
  title: 'Directive 8020 Deluxe Edition - Bonus Mission, Outfits & Soundtrack',
  description:
    'Directive 8020 Deluxe Edition guide: Digital Deluxe upgrade contents, Heirlooms Retrieval bonus mission, Dark Pictures Outfit Pack, filters, artbook, soundtrack, and whether it is worth it.',
  alternates: {
    canonical: '/directive-8020-deluxe-edition',
  },
};

const faqs = [
  {
    question: 'What is included in Directive 8020 Digital Deluxe Edition?',
    answer:
      'Steam lists The Dark Pictures Outfit Pack, The Dark Pictures Heirlooms Retrieval bonus mission, three cinematic filter packs, a digital artbook, and the exclusive soundtrack.',
  },
  {
    question: 'Is the Heirlooms Retrieval mission important?',
    answer:
      'It is a bonus mission focused on hidden dolls and relics from earlier Dark Pictures games. It may matter for collectible hunters, lore fans, and possibly achievement completion depending on the final achievement list.',
  },
  {
    question: 'Are the Deluxe filters gameplay content?',
    answer:
      'The filters are visual customization items inspired by 60s, 70s, and 80s space-mission aesthetics. They change presentation rather than core story routes.',
  },
  {
    question: 'Should I buy the Deluxe Edition?',
    answer:
      'It is most valuable if you care about anthology references, collectibles, bonus missions, concept art, soundtrack, and replay presentation. If you only want the main story once, the base game is likely enough.',
  },
];

const deluxeItems = [
  {
    name: 'The Dark Pictures Outfit Pack',
    value: 'Cosmetic costumes inspired by earlier anthology characters, used aboard the Cassiopeia.',
  },
  {
    name: 'Heirlooms Retrieval bonus mission',
    value: 'A secret assignment about hidden dolls and relics from Man of Medan, Little Hope, House of Ashes, and The Devil in Me.',
  },
  {
    name: 'Cinematic Filter Pack',
    value: '60s black-and-white, 70s film-grain, and 80s VHS-style filters for replay atmosphere.',
  },
  {
    name: 'Digital artbook',
    value: 'Concept art for Tau Ceti f, the Cassiopeia, and creature/body-horror designs.',
  },
  {
    name: 'Exclusive soundtrack',
    value: 'Music and soundscape content for players who want the full production package.',
  },
];

export default function DeluxeEditionPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Deluxe Edition - Bonus Mission, Outfits & Soundtrack',
          description:
            'Directive 8020 Deluxe Edition guide covering Digital Deluxe content, Heirlooms Retrieval, outfits, filters, artbook, soundtrack, and value.',
          url: '/directive-8020-deluxe-edition',
          datePublished: '2026-05-12',
          dateModified: '2026-05-12',
          imageUrl: '/official-ship-interior.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Deluxe Edition' }]} />
        <PageHero src="/official-ship-interior.jpg" alt="Directive 8020 Deluxe Edition guide screenshot" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Deluxe Edition Guide
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          The Digital Deluxe content is not just a generic skin bundle. It adds
          anthology outfits, a bonus mission, cinematic filters, an artbook, and
          soundtrack content, which makes it relevant for collectible hunters
          and Dark Pictures fans.
        </p>

        <VideoEmbed
          videoId="gaQkzfA14G4"
          title="Directive 8020 official video for Deluxe Edition context"
          caption="Watch the official trailer first if you are deciding whether the Deluxe Edition extras match the tone and replay style you want."
        />

        <div className="prose-game">
          <h2>Digital Deluxe Contents</h2>
          <p>
            The Steam page lists the following Digital Deluxe content. The most
            gameplay-relevant item is the Heirlooms Retrieval bonus mission,
            because it gives completionists another route to check for hidden
            collectibles and anthology references.
          </p>
        </div>

        <div className="grid gap-4 my-6">
          {deluxeItems.map((item) => (
            <section key={item.name} className="rounded-lg border border-border/50 bg-card/30 p-5">
              <h2 className="text-base font-bold text-foreground mb-2">{item.name}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.value}</p>
            </section>
          ))}
        </div>

        <div className="prose-game">
          <h2>Who Should Get Deluxe?</h2>
          <p>
            Deluxe is easiest to recommend for players who already care about
            The Dark Pictures Anthology. The outfit pack and heirloom mission
            are built around earlier games, while the filters and artbook make
            more sense for players planning multiple runs.
          </p>
          <ul>
            <li><strong>Worth it:</strong> collectors, lore fans, trophy hunters, screenshot creators, and repeat players.</li>
            <li><strong>Less essential:</strong> players who only want one blind main-story playthrough.</li>
            <li><strong>Check first:</strong> whether bonus mission content affects achievements on your platform.</li>
          </ul>

          <ArticleImage
            src="/official-story-tree.jpg"
            alt="Directive 8020 Deluxe route planning screenshot"
            caption="If Deluxe content adds collectible or mission objectives, track it alongside Story Tree progress so cleanup does not become messy."
          />
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
