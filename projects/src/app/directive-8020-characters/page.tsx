import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { RelatedGuides, SearchAnswerPanel } from '@/components/guide-blocks';
import { crewPortraitHero, directiveCharacters } from '@/lib/directive-8020-characters';

export const metadata: Metadata = {
 title: 'Directive 8020 Characters, Cast, Actors & Face Models Guide',
 description:
 'Directive 8020 character guide with the playable Cassiopeia crew, cast and actor notes, face model cautions, crew roles, survival relevance, mimic clues, and Movie Night assignment tips.',
 alternates: {
 canonical: '/directive-8020-characters',
 },
};

const faqs = [
 {
 question: 'Who are the playable characters in Directive 8020?',
 answer:
 'The five playable Cassiopeia crew members tracked on this page are Brianna Young, Nolan Stafford, Laura Eisele, Dr. Samantha Cooper, and Josef Cernan.',
 },
 {
 question: 'Who plays Brianna Young in Directive 8020?',
 answer:
 'Lashana Lynch is confirmed as Young, a major astronaut character in Directive 8020. Official store copy highlights her role in the game.',
 },
 {
 question: 'Is the full Directive 8020 cast confirmed?',
 answer:
 'No. The page separates listed actor information from roles that are not named here yet, so character facts do not get mixed with uncredited actor or face model claims.',
 },
 {
 question: 'Are Directive 8020 face models confirmed?',
 answer:
 'Do not assume face models from visual similarity. Use official portraits and credited cast sources only, and treat uncredited face model claims as unconfirmed.',
 },
];

const suspicionChecklist = [
 'A character appears immediately after being separated from the group.',
 'Someone gives a vague answer to a detail they should know.',
 'A crew member pushes for isolation, speed, or secrecy without a clear reason.',
 'A person discourages checking evidence or contacting the rest of the crew.',
 'Two characters report conflicting versions of the same event.',
];

const characterQuickRows = [
 ['Brianna Young', 'Lashana Lynch', 'Yes', 'Pilot / co-pilot', 'Use credited cast and official portraits only', 'Leadership choices, trust, and survival route planning'],
 ['Nolan Stafford', 'Danny Sapani', 'Yes', 'Commander', 'Do not infer a separate face model without credits', 'Command decisions, crew tension, and rescue outcomes'],
 ['Laura Eisele', 'Not listed here yet', 'Yes', 'Senior Mission Officer', 'Not confirmed', 'Ship systems, evidence checks, and technical route locks'],
 ['Dr. Samantha Cooper', 'Not listed here yet', 'Yes', 'Medical specialist', 'Not confirmed', 'Injury outcomes, medical choices, and rescue routes'],
 ['Josef Cernan', 'Not listed here yet', 'Yes', 'Technical engineer', 'Not confirmed', 'Repairs, access routes, and mechanical route locks'],
];

const characterSearchRows = [
 ['Main character', 'Brianna Young is the clearest lead signal because Lashana Lynch is the confirmed headline performer and Young anchors much of the official story framing.'],
 ['Playable characters', 'The core playable Cassiopeia crew is Young, Stafford, Eisele, Cooper, and Cernan. Movie Night supports assigning crew members to different players.'],
 ['Samantha Cooper actress', 'Treat Samantha Cooper actor information as unnamed unless a platform page, credits capture, or trusted cast source clearly names the performer.'],
 ['Face models', 'Use official portraits and credited cast sources only. Do not assume a face model from visual similarity.'],
 ['Who can die?', 'Any survival route should track the five core crew members first, then supporting characters separately. Deaths can depend on QTEs, trust, relationships, and evidence.'],
];

const movieNightRows = [
 ['Action-focused player', 'Assign to the crew member most likely to handle chases, QTEs, stealth pressure, or urgent rescue decisions.'],
 ['Investigation-focused player', 'Assign to a character who often reads evidence, checks terminals, or makes trust decisions.'],
 ['Group leader', 'Give this player Stafford or Young if your group wants one person to coordinate chapter notes and Turning Point checks.'],
 ['Careful note-taker', 'Have this player track mimic suspicion, separated characters, and who returns with unverifiable information.'],
];

const searchIntentRows = [
 {
 query: 'Who are the playable characters?',
 answer: 'The core playable Cassiopeia crew tracked here is Brianna Young, Nolan Stafford, Laura Eisele, Dr. Samantha Cooper, and Josef Cernan.',
 href: '#character-table',
 label: 'Quick answer',
 },
 {
 query: 'Who plays Brianna Young?',
 answer: 'Lashana Lynch is the confirmed headline performer for Brianna Young.',
 href: '#cast-status',
 label: 'Confirmed',
 },
 {
 query: 'Who are the actors and cast?',
 answer: 'Lashana Lynch and Danny Sapani are listed here for the lead roles; other actor entries stay unnamed until a clear role credit is available.',
 href: '/directive-8020-cast-actors',
 label: 'Cast page',
 },
 {
 query: 'Are face models confirmed?',
 answer: 'Do not infer face models from visual similarity. Treat face model claims as unconfirmed unless an official credit backs them.',
 href: '#character-table',
 label: 'Caution',
 },
 {
 query: 'Can these characters die?',
 answer: 'Track the five core crew first; deaths can depend on QTEs, trust, relationships, evidence, and mimic suspicion.',
 href: '/directive-8020-death-scenes-guide',
 label: 'Deaths',
 },
];

const jumpLinks = [
 { href: '#character-table', label: 'Character table' },
 { href: '#cast-status', label: 'Cast status' },
 { href: '#mimic-roles', label: 'Mimic clues' },
 { href: '#survival-roles', label: 'Survival roles' },
 { href: '#movie-night', label: 'Movie Night' },
 { href: '/directive-8020-cast-actors', label: 'Actors' },
];

export default function CharactersPage() {
 return (
 <>
 <JsonLd
 data={generateArticleSchema({
 title: 'Directive 8020 Characters, Cast, Actors and Face Models Guide',
 description:
 'Directive 8020 character guide with the playable Cassiopeia crew, cast and actor notes, face model cautions, crew roles, survival relevance, mimic clues, and Movie Night assignment tips.',
 url: '/directive-8020-characters',
 datePublished: '2026-05-10',
 dateModified: '2026-06-18',
 imageUrl: crewPortraitHero,
 })}
 />
 <JsonLd data={generateFAQSchema(faqs)} />

 <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
 <Breadcrumb items={[{ label: 'Characters' }]} />
 <PageHero src={crewPortraitHero} alt="Directive 8020 official playable Cassiopeia crew portraits" />

 <h1 className="mb-4 text-[42px] font-bold leading-[1.08] tracking-[-1.39px] text-foreground sm:text-[54px]">
 Directive 8020 Characters, Cast, Actors and Face Models
 </h1>
 <p className="text-lg text-muted-foreground leading-relaxed mb-8">
 Directive 8020 has five core playable Cassiopeia crew members to
 track: <strong className="text-foreground">Brianna Young</strong>,
 <strong className="text-foreground"> Nolan Stafford</strong>,
 <strong className="text-foreground"> Laura Eisele</strong>,
 <strong className="text-foreground"> Dr. Samantha Cooper</strong>,
 and <strong className="text-foreground">Josef Cernan</strong>. This
 guide gives the character list first, then explains cast status,
 actor credits, face model cautions, survival roles, Movie Night
 assignment, and mimic suspicion clues.
 </p>
 <p className="mb-8 text-sm font-medium text-muted-foreground">
 Last updated: June 18, 2026.
 </p>

 <SearchAnswerPanel
 title="Who are the main Directive 8020 characters?"
 answer="Directive 8020 centers on five playable Cassiopeia crew members: Brianna Young, Nolan Stafford, Laura Eisele, Dr. Samantha Cooper, and Josef Cernan. Lashana Lynch plays Brianna Young, Danny Sapani is listed here for Nolan Stafford, and uncredited face model claims should not be treated as fact."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <div id="character-table" className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Character</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Actor status</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Playable?</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Crew role</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Face model status</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
 </tr>
 </thead>
 <tbody>
 {characterQuickRows.map(([character, actor, playable, role, faceModel, verification]) => (
 <tr key={character} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{character}</td>
 <td className="px-4 py-3 text-muted-foreground">{actor}</td>
 <td className="px-4 py-3 text-muted-foreground">{playable}</td>
 <td className="px-4 py-3 text-muted-foreground">{role}</td>
 <td className="px-4 py-3 text-muted-foreground">{faceModel}</td>
 <td className="px-4 py-3 text-muted-foreground">{verification}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <VideoEmbed
 videoId="gaQkzfA14G4"
 title="Directive 8020 official character and story trailer"
 caption="The official trailer is useful for reading character tone: watch how the crew reacts under pressure, who appears isolated, and how the game frames trust before the mimic reveal."
 />

 <div className="prose-game">
 <h2>Quick Character Answers</h2>
 <p>
 Start with the practical facts: who the main character is, which
 crew members are playable, which actor names are listed, whether
 face model information is credited, and how each character matters
 in a survival route. For a deeper role-by-role source check,
 use the{' '}
 <Link href="/directive-8020-cast-actors" className="text-foreground hover:underline">
 Directive 8020 cast and actors
 </Link>{' '}
 page.
 </p>
 </div>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player question</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player-facing answer</th>
 </tr>
 </thead>
 <tbody>
 {characterSearchRows.map(([need, answer]) => (
 <tr key={need} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{need}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2 id="cast-status">Confirmed Cast and Character Information</h2>
 <p>
 The most important cast detail for most players is <strong>Lashana
 Lynch as Brianna Young</strong>. Official Steam copy describes Young as a
 ground-breaking astronaut and uses her role to frame the game&apos;s
 cinematic storytelling. Because Directive 8020 is choice-driven,
 expect Young&apos;s route to be central to both story decisions and
 survival outcomes.
 </p>
 <p>
 <strong>Danny Sapani</strong> is listed here for Nolan Stafford, the
 Cassiopeia commander. For Eisele, Cooper, and Cernan, this page keeps
 the actor field unnamed until a clear role credit is available. That
 is especially important for face model searches, because visual
 similarity is not the same as a credited performer or model.
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
 className="overflow-x-auto rounded-lg border border-border bg-white"
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
 <span className="w-fit rounded border border-border bg-mist px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12px] text-foreground">
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

 <section className="my-8 rounded-lg border border-border bg-mist p-5">
 <h2 id="mimic-roles" className="text-lg font-bold text-foreground">The Mimic</h2>
 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
 Treat the mimic like a route variable, not a normal enemy entry.
 Every trust choice should record what the suspect knew, where they
 appeared, who witnessed them, and whether they were alone before
 the scene.
 </p>
 </section>

 <div className="prose-game">
 <h2 id="survival-roles">How Character Survival Works</h2>
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

 <h2 id="movie-night">Movie Night Character Assignment Tips</h2>
 <p>
 Since Steam lists Movie Night couch co-op for up to five players,
 character assignment can affect how your group experiences the
 story. Give action-heavy characters to players who are comfortable
 with QTEs, and give major decision makers to players who like
 tracking clues and relationships.
 </p>
 </div>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player type</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best assignment habit</th>
 </tr>
 </thead>
 <tbody>
 {movieNightRows.map(([player, habit]) => (
 <tr key={player} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{player}</td>
 <td className="px-4 py-3 text-muted-foreground">{habit}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <ul>
 <li>Assign one person to keep a suspicion log for mimic behavior.</li>
 <li>Do not let one loud player override every trust decision.</li>
 <li>After each chapter, review who split up and who returned with unverifiable information.</li>
 <li>Use Turning Points later if a co-op disagreement causes a major death.</li>
 </ul>
 </div>

 <RelatedGuides
 guides={[
 {
 href: '/directive-8020-cast-actors',
 title: 'Cast & Actors',
 description: 'Check role-level actor status, credited performers, and cast details that are not named here yet.',
 },
 {
 href: '/directive-8020-death-scenes-guide',
 title: 'All Death Scenes',
 description: 'Track which character routes can fail and how to avoid deaths.',
 },
 {
 href: '/directive-8020-how-to-save-everyone',
 title: 'How to Save Everyone',
 description: 'Use character survival rules to build a clean best-ending base.',
 },
 {
 href: '/directive-8020-mimic-detection-survival-guide',
 title: 'Mimic Detection',
 description: 'Use suspicion clues before trusting returned or isolated crew.',
 },
 {
 href: '/directive-8020-movie-night-multiplayer',
 title: 'Movie Night',
 description: 'Assign characters to players without losing route control.',
 },
 ]}
 />

 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
