import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';

export const metadata: Metadata = {
  title: 'Directive 8020 Community Questions - Multiplayer, Deck, Story & Tips',
  description:
    'Directive 8020 community questions answered: Movie Night vs Shared Story, Steam Deck, Turning Points, beginner tips, Deluxe Edition, endings, and performance.',
  alternates: {
    canonical: '/directive-8020-community-questions',
  },
};

const faqs = [
  {
    question: 'Is Shared Story online co-op in Directive 8020 at launch?',
    answer:
      'Do not assume Shared Story-style online co-op is available at launch. Steam lists Movie Night couch co-op, and the official Dark Pictures site says online multiplayer is coming in a post-launch update.',
  },
  {
    question: 'Does Turning Points make choices less meaningful?',
    answer:
      'Turning Points make route testing easier, but the first playthrough still has tension if you choose not to rewind. For story impact, finish one ending before changing branches.',
  },
  {
    question: 'Is Directive 8020 good for new Dark Pictures players?',
    answer:
      'Yes. It is a new story with a sci-fi setting, so newcomers can start here. New players should read spoiler-free tips first, then use endings and trophy guides after finishing one route.',
  },
  {
    question: 'What should I check before buying on PC?',
    answer:
      'Check the official PC specs first. Minimum requirements list RTX 2060 or RX 5700, 16 GB RAM, and 40 GB storage, with SSD recommended.',
  },
];

const questions = [
  {
    q: 'Should I play blind or use a guide?',
    a: 'Play blind if you want fear and regret to land properly. Use spoiler-free beginner tips for settings and survival habits, then use route guides after your first ending.',
    href: '/directive-8020-beginner-tips',
  },
  {
    q: 'How do I save everyone?',
    a: 'Track mimic suspicion, keep relationships stable, pass QTEs, explore for evidence, and rewind to the earliest relevant Turning Point after a death.',
    href: '/directive-8020-how-to-save-everyone',
  },
  {
    q: 'Is Deluxe worth it?',
    a: 'Deluxe is best for anthology fans, collectible hunters, and replay-focused players because it adds outfits, a bonus heirlooms mission, filters, artbook, and soundtrack.',
    href: '/directive-8020-deluxe-edition',
  },
  {
    q: 'Can Steam Deck handle it?',
    a: 'Treat Deck support as unverified until Steam shows a rating. The official minimum GPU is above handheld-class hardware, so test with low settings and a 30 FPS cap.',
    href: '/directive-8020-steam-deck',
  },
];

export default function CommunityQuestionsPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Community Questions - Multiplayer, Deck, Story & Tips',
          description:
            'Directive 8020 community questions answered, including Movie Night, online multiplayer, Steam Deck, Turning Points, beginner tips, Deluxe Edition, endings, and performance.',
          url: '/directive-8020-community-questions',
          datePublished: '2026-05-12',
          dateModified: '2026-05-12',
          imageUrl: '/official-cassiopeia-crew.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Community Questions' }]} />
        <PageHero src="/official-cassiopeia-crew.jpg" alt="Directive 8020 community questions guide" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Community Questions
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          These are the questions players keep asking before and around launch:
          online co-op, Steam Deck, whether to play blind, how Turning Points
          work, and whether Deluxe content matters.
        </p>

        <VideoEmbed
          videoId="cdmKOH4RIWU"
          title="Directive 8020 official story trailer"
          caption="The official story trailer is a useful community reference because it shows tone, character conflict, and the mimic premise without needing an ending spoiler."
        />

        <div className="grid gap-4 my-8">
          {questions.map((item) => (
            <section key={item.q} className="rounded-lg border border-border/50 bg-card/30 p-5">
              <h2 className="text-lg font-bold text-foreground mb-2">{item.q}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.a}</p>
              <a href={item.href} className="text-sm font-semibold text-d8020 underline-offset-4 hover:underline">
                Read the full guide
              </a>
            </section>
          ))}
        </div>

        <div className="prose-game">
          <h2>Why These Questions Matter</h2>
          <p>
            Directive 8020 is launching with several systems that change how
            players approach a Dark Pictures game. Movie Night is confirmed,
            online multiplayer is described as post-launch, the Story Tree makes
            route testing more visible, and the PC requirements are higher than
            some players expected.
          </p>

          <ArticleImage
            src="/official-story-tree.jpg"
            alt="Directive 8020 community questions Story Tree screenshot"
            caption="Many community questions lead back to the Story Tree: endings, saving everyone, trophy cleanup, and whether rewinding changes the first-run experience."
          />
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
