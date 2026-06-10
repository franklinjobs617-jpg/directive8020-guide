import type { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { BlufBox, RelatedGuides, StatusPanel } from '@/components/guide-blocks';
import { crewPortraitHero, directiveCharacters } from '@/lib/directive-8020-characters';

export const metadata: Metadata = {
 title: 'Directive 8020 Cast and Actors - Brianna Young, Stafford, Eisele & Crew',
 description:
 'Directive 8020 cast and actors guide covering Lashana Lynch as Brianna Young, Danny Sapani as Stafford, the five playable Cassiopeia crew members, and voice cast verification.',
 alternates: {
 canonical: '/directive-8020-cast-actors',
 },
};

const faqs = [
 {
 question: 'Who plays Brianna Young in Directive 8020?',
 answer:
 'Lashana Lynch plays Brianna Young in Directive 8020. Young is a pilot and one of the central playable crew members aboard the Cassiopeia.',
 },
 {
 question: 'Who plays Stafford in Directive 8020?',
 answer:
 'Danny Sapani is reported as Commander Nolan Stafford in Directive 8020. Stafford is the Cassiopeia commander and one of the five playable protagonists.',
 },
 {
 question: 'How many playable characters are in Directive 8020?',
 answer:
 'Directive 8020 has five playable Cassiopeia crew members: Brianna Young, Nolan Stafford, Laura Eisele, Samantha Cooper, and Josef Cernan.',
 },
 {
 question: 'Is the full Directive 8020 voice cast confirmed?',
 answer:
 'The full Directive 8020 voice cast should be treated as partially confirmed unless a role is backed by official or trusted platform data. Lashana Lynch as Brianna Young is the clearest official cast signal.',
 },
 {
 question: 'Why does the Directive 8020 cast matter for gameplay?',
 answer:
 'The cast matters because character survival, relationships, trust checks, and mimic suspicion can change routes, deaths, endings, and trophy cleanup.',
 },
];

const playableCrew = directiveCharacters;

const widerCrew = [
 ['Noah Mitchell', 'Pilot / flight crew', 'Non-playable or supporting status should be verified in route capture.'],
 ['Zoe Anders', 'Science officer', 'Useful for science, samples, and ethical discovery decisions.'],
 ['Tomas Carter', 'Hypersleep technician', 'Useful for hypersleep operations and early ship-state context.'],
 ['Pari Simms', 'Hypersleep technician', 'Useful for crew logs, support systems, and long-journey context.'],
 ['LaMarcus Williams', 'Corinth CEO / corporate backer', 'Useful for mission motive, Earth stakes, and corporate pressure.'],
];

const castVerificationRows = [
 ['Official platform copy', 'Use for playable character names, crew roles, platform features, and story premise.'],
 ['Official trailer or game page', 'Use for visible character context, premise, and relationship framing.'],
 ['Review coverage', 'Use for reported cast details only when the review clearly names the actor and role.'],
 ['Database or community pages', 'Use as a lead, not a final authority, unless the same role is confirmed elsewhere.'],
];

const sourceChecks = [
 ['Official PlayStation page', 'Lists five playable Cassiopeia crew members and describes Stafford, Eisele, Cooper, Cernan, and Young.', 'https://store.playstation.com/en-us/concept/10010841'],
 ['Steam store page', 'Confirms platforms, Movie Night, Turning Points, and the game premise around a mimic threat.', 'https://store.steampowered.com/app/2255370/Directive_8020/'],
 ['TechRadar review coverage', 'Useful for PS5 review context, Lashana Lynch / Brianna Young references, and Turning Points coverage.', 'https://www.techradar.com/gaming/directive-8020-review'],
 ['GameWatcher cast coverage', 'Separates confirmed Lashana Lynch information from other actors that still need confirmation.', 'https://www.gamewatcher.com/news/directive-8020-voice-actors-cast-list'],
 ['IMDb title page', 'Useful as a secondary cast database signal, but role-level claims still need stronger confirmation.', 'https://www.imdb.com/title/tt33211363/'],
];

const castStatusRows = [
 ['Playable crew', 'Five Cassiopeia crew members are treated as playable because current platform copy lists them together.'],
 ['Confirmed lead', 'Lashana Lynch as Brianna Young is the strongest role-level cast confirmation.'],
 ['Pending roles', 'Remaining actor rows stay cautious until official credits, platform pages, or trusted coverage confirm the role.'],
];

export default function CastActorsPage() {
 return (
 <>
 <JsonLd
 data={generateArticleSchema({
 title: 'Directive 8020 Cast and Actors - Brianna Young, Stafford, Eisele & Crew',
 description:
 'Directive 8020 cast and actors guide covering Lashana Lynch as Brianna Young, Danny Sapani as Stafford, the five playable Cassiopeia crew members, and voice cast verification.',
 url: '/directive-8020-cast-actors',
 datePublished: '2026-05-12',
 dateModified: '2026-05-13',
 imageUrl: crewPortraitHero,
 })}
 />
 <JsonLd data={generateFAQSchema(faqs)} />

 <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
 <Breadcrumb items={[{ label: 'Cast and Actors' }]} />
 <PageHero src={crewPortraitHero} alt="Directive 8020 official Cassiopeia playable crew portraits" />

 <h1 className="mb-4 text-[42px] font-bold leading-[1.08] tracking-[-1.39px] text-foreground sm:text-[54px]">
 Directive 8020 Cast and Actors
 </h1>
 <p className="text-lg text-muted-foreground leading-relaxed mb-8">
 This Directive 8020 cast and actors guide tracks the confirmed
 Cassiopeia crew, known actor information, playable characters, and the
 roles that matter for survival routes, endings, and mimic suspicion.
 </p>

 <BlufBox>
 <p>
 <strong>Short answer:</strong> Lashana Lynch plays Brianna Young,
 the clearest confirmed lead cast member. Directive 8020 has five
 playable crew members: Brianna Young, Nolan Stafford, Laura Eisele,
 Samantha Cooper, and Josef Cernan.
 </p>
 </BlufBox>

 <StatusPanel
 items={[
 { label: 'Lead actor', value: 'Lashana Lynch as Brianna Young is the strongest confirmed cast detail.', status: 'verified' },
 { label: 'Playable crew count', value: 'Five playable Cassiopeia crew members are listed in official platform copy.', status: 'verified' },
 { label: 'Stafford actor', value: 'Danny Sapani is reported as Commander Nolan Stafford in current coverage.', status: 'working' },
 { label: 'Remaining actors', value: 'Several character actors should remain pending until role-level confirmation is captured.', status: 'needs-check' },
 ]}
 />

 <VideoEmbed
 videoId="cdmKOH4RIWU"
 title="Directive 8020 story trailer featuring the Cassiopeia crew"
 caption="The story trailer is useful for cast context because it shows crew tension, mission pressure, and how trust breaks down around the mimic threat."
 />

 <div className="prose-game">
 <h2>Playable Cast and Character Table</h2>
 <p>
 The table below helps you separate confirmed crew information from
 roles that still need stronger actor confirmation. Each row covers
 the character, current actor status, crew role, and gameplay reason
 the character matters.
 </p>
 </div>

 <div className="my-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
 {playableCrew.map((member) => (
 <section key={member.id} className="overflow-hidden rounded-lg border border-border bg-white">
 <div className="relative aspect-square bg-black">
 <Image
 src={member.avatar}
 alt={member.alt}
 fill
 className="object-cover"
 sizes="(max-width: 1024px) 50vw, 180px"
 />
 </div>
 <div className="p-3">
 <h2 className="text-sm font-bold text-foreground">{member.character}</h2>
 <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12px] text-foreground">{member.status}</p>
 <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{member.role}</p>
 </div>
 </section>
 ))}
 </div>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Character</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Actor</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Crew role</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Guide note</th>
 </tr>
 </thead>
 <tbody>
 {playableCrew.map((member) => (
 <tr key={member.character} className="border-b border-border last:border-0">
 <td className="px-4 py-3 align-top">
 <div className="flex items-center gap-3">
 <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-border bg-black">
 <Image src={member.avatar} alt={member.alt} fill className="object-cover" sizes="48px" />
 </div>
 <div>
 <p className="font-semibold text-foreground">{member.character}</p>
 <p className="mt-1 text-[10px] uppercase tracking-[0.12px] text-foreground">{member.status}</p>
 </div>
 </div>
 </td>
 <td className="px-4 py-3 align-top text-muted-foreground">{member.actor}</td>
 <td className="px-4 py-3 align-top text-muted-foreground">{member.role}</td>
 <td className="px-4 py-3 align-top text-muted-foreground">{member.guideValue}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2>Lashana Lynch as Brianna Young</h2>
 <p>
 Lashana Lynch is the public-facing star of Directive 8020 and plays
 Brianna Young, a pilot aboard the Cassiopeia. Young is important for
 search intent because players often look for the actor first and
 then need the character role, route value, and survival implications.
 </p>
 <p>
 For gameplay, treat Young as a central route-tracking character.
 Record when she makes command decisions, when she separates from
 other crew members, and when she witnesses information that can
 verify or challenge a later trust choice.
 </p>

 <ArticleImage
 src="/characters/brianna-young-portrait.webp"
 alt="Directive 8020 Brianna Young character image"
 caption="Brianna Young is the strongest confirmed cast anchor for Directive 8020 searches, so her actor, role, and route value should stay consistent across character pages."
 />

 <h2>Supporting Cassiopeia Crew</h2>
 <p>
 Directive 8020 also includes wider Cassiopeia crew and mission
 figures. These names are useful for route notes, but pages should
 distinguish supporting characters from the five playable
 protagonists unless a route capture proves otherwise.
 </p>
 </div>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Supporting name</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Known role</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
 </tr>
 </thead>
 <tbody>
 {widerCrew.map(([name, role, detail]) => (
 <tr key={name} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{name}</td>
 <td className="px-4 py-3 text-muted-foreground">{role}</td>
 <td className="px-4 py-3 text-muted-foreground">{detail}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2>Why Cast and Characters Matter for Routes</h2>
 <p>
 Directive 8020 is not only a cast list. Character identity becomes a
 survival mechanic because the alien threat can mimic its prey. A
 character who appears safe may still need verification through
 memory, location, witnesses, and behavior.
 </p>
 <ul>
 <li><strong>Survival routes:</strong> each playable character can affect deaths, rescues, and late-game options.</li>
 <li><strong>Relationship routes:</strong> prior choices can change whether one crew member helps another.</li>
 <li><strong>Mimic suspicion:</strong> isolated returns, vague answers, and missing witnesses should be logged.</li>
 <li><strong>Movie Night:</strong> up to five players can assign crew members, so character control affects group decisions.</li>
 <li><strong>Trophy cleanup:</strong> character-specific outcomes often become missable achievements.</li>
 </ul>

 <h2>Source and Verification Notes</h2>
 <p>
 Cast pages are high-risk for misinformation because preview sites,
 databases, and platform pages may update at different times. This
 guide uses verification status labels so role-level claims can be
 updated without rewriting the whole page.
 </p>
 </div>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Source type</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">How this page uses it</th>
 </tr>
 </thead>
 <tbody>
 {castVerificationRows.map(([source, rule]) => (
 <tr key={source} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{source}</td>
 <td className="px-4 py-3 text-muted-foreground">{rule}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2>Cast Status Summary</h2>
 <p>
 Cast information changes as official pages, credits, and trusted
 coverage publish role-level details. Use this summary to separate
 confirmed performers from names that still need stronger evidence.
 </p>
 </div>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Cast area</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current status</th>
 </tr>
 </thead>
 <tbody>
 {castStatusRows.map(([area, status]) => (
 <tr key={area} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{area}</td>
 <td className="px-4 py-3 text-muted-foreground">{status}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="prose-game">
 <h2>Sources Used for Cast Verification</h2>
 <p>
 These links support the cast, character, and platform claims on this
 page. Actor rows marked as pending should not be upgraded until one
 of these sources or another trusted source confirms the role.
 </p>
 </div>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Source</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it verifies</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Link</th>
 </tr>
 </thead>
 <tbody>
 {sourceChecks.map(([source, use, href]) => (
 <tr key={source} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{source}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 <td className="px-4 py-3">
 <a href={href} className="text-foreground underline underline-offset-4 hover:text-foreground" target="_blank" rel="noreferrer">
 Open source
 </a>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <RelatedGuides
 guides={[
 {
 href: '/directive-8020-characters',
 title: 'Characters & Crew Roles',
 description: 'Use the character guide for survival notes, mimic checks, and Movie Night assignment.',
 },
 {
 href: '/directive-8020-how-to-save-everyone',
 title: 'How to Save Everyone',
 description: 'Apply cast and crew knowledge to character survival routes.',
 },
 {
 href: '/directive-8020-choices-consequences',
 title: 'Choices & Consequences',
 description: 'Track trust choices and relationship changes by character.',
 },
 {
 href: '/directive-8020-trophy-list',
 title: 'Trophy List',
 description: 'Plan character-specific trophies and achievement cleanup.',
 },
 ]}
 />

 <FAQSection faqs={faqs} />
 </article>
 </>
 );
}
