import type { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { crewPortraitHero, directiveCharacters } from '@/lib/directive-8020-characters';

export const metadata: Metadata = {
  title: 'Directive 8020 Characters - Cast, Crew & Survival Roles',
  description:
    'Meet the Directive 8020 characters and Cassiopeia crew. Confirmed cast, Lashana Lynch as Young, crew roles, mimic threat, and survival-guide notes.',
  alternates: {
    canonical: '/directive-8020-characters',
  },
};

const faqs = [
  {
    question: 'Who is the lead actor in Directive 8020?',
    answer:
      'Lashana Lynch is confirmed as Young, a major astronaut character in Directive 8020. Official store copy highlights her role in the game.',
  },
  {
    question: 'How many players can join Movie Night in Directive 8020?',
    answer:
      'The Steam page lists Movie Night couch co-op for up to five players, with players choosing which crew members to control.',
  },
  {
    question: 'Can all characters die in Directive 8020?',
    answer:
      'Directive 8020 follows The Dark Pictures Anthology structure, where character survival depends on choices, QTEs, relationships, and branching outcomes. The Turning Points story tree is designed to help players revisit deaths and hidden paths.',
  },
  {
    question: 'Why are characters harder to trust in Directive 8020?',
    answer:
      'The main alien threat can mimic its prey, so a character who looks human may not actually be human. That makes behavior, timing, and memory details important survival clues.',
  },
];

const suspicionChecklist = [
  'A character appears immediately after being separated from the group.',
  'Someone gives a vague answer to a detail they should know.',
  'A crew member pushes for isolation, speed, or secrecy without a clear reason.',
  'A person discourages checking evidence or contacting the rest of the crew.',
  'Two characters report conflicting versions of the same event.',
];

export default function CharactersPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Characters - Cast, Crew & Survival Roles',
          description:
            'Meet the Directive 8020 characters and Cassiopeia crew, including Lashana Lynch as Young, crew roles, mimic threat, and survival notes.',
          url: '/directive-8020-characters',
          datePublished: '2026-05-10',
          dateModified: '2026-05-13',
          imageUrl: crewPortraitHero,
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Characters' }]} />
        <PageHero src={crewPortraitHero} alt="Directive 8020 official playable Cassiopeia crew portraits" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Characters
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Directive 8020&apos;s cast matters because the central enemy can wear a
          human face. This guide tracks confirmed character information,
          survival roles, and the clues you should watch before trusting anyone
          aboard the Cassiopeia.
        </p>

        <VideoEmbed
          videoId="gaQkzfA14G4"
          title="Directive 8020 official character and story trailer"
          caption="The official trailer is useful for reading character tone: watch how the crew reacts under pressure, who appears isolated, and how the game frames trust before the mimic reveal."
        />

        <div className="prose-game">
          <h2>Confirmed Cast and Character Information</h2>
          <p>
            The most clearly confirmed cast detail is <strong>Lashana Lynch as
            Brianna Young</strong>. Official Steam copy describes Young as a
            ground-breaking astronaut and uses her role to frame the game&apos;s
            cinematic storytelling. Because Directive 8020 is choice-driven,
            expect Young&apos;s route to be central to both story decisions and
            survival outcomes.
          </p>
          <p>
            The wider cast is the crew of the <strong>Cassiopeia</strong>, a
            colony ship sent toward Tau Ceti f after Earth begins running out of
            time. Unlike a normal monster story, the crew itself becomes part of
            the threat model: anyone can be a victim, a witness, a suspect, or a
            copy.
          </p>

          <ArticleImage
            src={crewPortraitHero}
            alt="Directive 8020 official Cassiopeia playable crew portraits"
            caption="The Cassiopeia crew is the center of every survival route. For character guides, record who is present, who leaves, and who returns with unverifiable information."
          />
        </div>

        <div className="my-8 grid gap-4 sm:grid-cols-2">
          {directiveCharacters.map((char) => (
            <section
              key={char.id}
              className="overflow-hidden rounded-lg border border-border/50 bg-card/30"
            >
              <div className="grid sm:grid-cols-[140px_1fr]">
                <div className="relative min-h-40 bg-black">
                  <Image
                    src={char.avatar}
                    alt={char.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 140px"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-foreground">{char.character}</h2>
                      <p className="text-xs text-muted-foreground">{char.role}</p>
                    </div>
                    <span className="w-fit rounded border border-d8020/30 bg-d8020/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-d8020">
                      {char.actor}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {char.guideValue}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="my-8 rounded-lg border border-d8020/40 bg-d8020/10 p-5">
          <h2 className="text-lg font-bold text-foreground">The Mimic</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Treat the mimic like a route variable, not a normal enemy entry.
            Every trust choice should record what the suspect knew, where they
            appeared, who witnessed them, and whether they were alone before
            the scene.
          </p>
        </section>

        <div className="prose-game">
          <h2>How Character Survival Works</h2>
          <p>
            The Dark Pictures formula usually treats survival as a chain, not a
            single choice. A death can come from an obvious failed QTE, but it
            can also come from an earlier relationship decision, a hidden clue
            you missed, or a moment where one character refused to help another.
            Directive 8020 adds the mimic threat on top of that chain.
          </p>
          <ul>
            <li><strong>Immediate danger:</strong> QTEs, stealth failures, chase scenes, and combat choices.</li>
            <li><strong>Relationship danger:</strong> characters may help or abandon each other based on prior choices.</li>
            <li><strong>Information danger:</strong> missing evidence can make a later trust choice harder.</li>
            <li><strong>Mimic danger:</strong> trusting the wrong person can turn a safe route into a fatal one.</li>
          </ul>

          <h2>Mimic Suspicion Checklist</h2>
          <p>
            Use this checklist during your first run. It is spoiler-safe, but it
            gives you a practical way to evaluate character behavior before a
            high-pressure decision.
          </p>
          <ul>
            {suspicionChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Movie Night Character Assignment Tips</h2>
          <p>
            Since Steam lists Movie Night couch co-op for up to five players,
            character assignment can affect how your group experiences the
            story. Give action-heavy characters to players who are comfortable
            with QTEs, and give major decision makers to players who like
            tracking clues and relationships.
          </p>
          <ul>
            <li>Assign one person to keep a suspicion log for mimic behavior.</li>
            <li>Do not let one loud player override every trust decision.</li>
            <li>After each chapter, review who split up and who returned with unverifiable information.</li>
            <li>Use Turning Points later if a co-op disagreement causes a major death.</li>
          </ul>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
