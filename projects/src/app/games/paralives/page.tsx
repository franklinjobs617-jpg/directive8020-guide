import Image from 'next/image';
import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { BlufBox, StatusPanel } from '@/components/guide-blocks';
import { ParalivesArticle } from '@/components/paralives-article';
import { paralives } from '@/lib/games';
import {
 createParalivesMetadata,
 paralivesImages,
 paralivesQuickFacts,
} from '@/lib/paralives';

const title = 'Paralives Guide Hub: Early Access, Character Creation, Build Mode & Mods';
const description =
 'Find Paralives guides for build mode, character creation, Early Access, Mac support, Steam Deck, mods, and life-sim comparisons with Sims 4 and inZOI.';
const canonical = '/games/paralives';

export const metadata = createParalivesMetadata({
 title,
 description,
 canonical,
 image: paralivesImages.hero,
});

const faqs = [
 {
 question: 'Is Paralives out now?',
 answer:
 'Yes. Paralives launched on Steam Early Access on May 25, 2026 for Windows PC and Mac.',
 },
 {
 question: 'What is Paralives?',
 answer:
 'Paralives is a sandbox life simulation game about building homes, creating Parafolks, exploring an open-world town, forming relationships, raising families, and sharing content through Steam Workshop.',
 },
 {
 question: 'Does Paralives have character creation?',
 answer:
 'Yes. The Paramaker character creator lets players adjust height, face and body features, outfits, and personalities for Parafolks.',
 },
 {
 question: 'Does Paralives have build mode?',
 answer:
 'Yes. Paralives includes grid-less building, curved walls, split-level floors, object resizing, recoloring, stacking, and free object placement.',
 },
 {
 question: 'Is Paralives on Mac or Steam Deck?',
 answer:
 'Mac support is official for Apple silicon. Steam Deck support is not yet Verified based on the checked Steam data.',
 },
 {
 question: 'Does Paralives support mods and custom content?',
 answer:
 'Yes. Steam describes an in-game modding interface and Steam Workshop support for community-made mods, houses, and Parafolks.',
 },
];

function getGuideImage(href: string) {
 if (href.includes('character')) return paralivesImages.paramaker;
 if (href.includes('build')) return paralivesImages.build;
 if (href.includes('steam-deck')) return paralivesImages.home;
 if (href.includes('mac')) return paralivesImages.town;
 if (href.includes('mods')) return paralivesImages.life;
 if (href.includes('sims')) return paralivesImages.hero;
 return paralivesImages.header;
}

export default function ParalivesHubPage() {
 return (
 <ParalivesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Paralives"
 heroImage={paralivesImages.hero}
 heroAlt="Paralives sandbox life simulation town and home screenshot"
 faqs={faqs}
 >
 <BlufBox title="Launch Snapshot">
 <p>
 <strong>Paralives is now in Steam Early Access for Windows and Mac.</strong>{' '}
 The strongest player questions are not only whether it is out, but how
 complete it feels: Paramaker depth, build-mode freedom, Mac support,
 Steam Deck comfort, Workshop content, pets, babies, and whether it is
 a better fit than The Sims 4 or inZOI.
 </p>
 </BlufBox>

 <StatusPanel
 items={paralivesQuickFacts.map(([label, value]) => ({
 label,
 value,
 status:
 label.includes('Steam Deck') || label.includes('Future')
 ? 'needs-check'
 : 'verified',
 }))}
 />

 <section className="my-10">
 <h2 className="mb-4 text-xl font-bold text-foreground">Paralives Guide Map</h2>
 <ArticleImage
 src={paralivesImages.header}
 alt="Paralives guide hub official header image"
 caption="Start with the question you are trying to answer: Early Access scope, Paramaker, build tools, Mac setup, Steam Deck testing, Workshop content, or life-sim comparisons."
 />
 <div className="grid gap-4 sm:grid-cols-2">
 {paralives.guideLinks.map((guide) => (
 <Link
 key={guide.href}
 href={guide.href}
 className="group overflow-hidden rounded-lg border border-border bg-white transition-colors hover:border-border"
 >
 <div className="relative aspect-video">
 <Image
 src={getGuideImage(guide.href)}
 alt={guide.title}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-105"
 sizes="(max-width: 768px) 100vw, 50vw"
 />
 <div className="absolute inset-0 opacity-30" />
 </div>
 <div className="p-5">
 <h3 className="text-base font-bold text-foreground group-hover:text-foreground">
 {guide.title}
 </h3>
 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
 {guide.description}
 </p>
 </div>
 </Link>
 ))}
 </div>
 </section>

 <section className="prose-game">
 <h2>What to Check First</h2>
 <ArticleImage
 src={paralivesImages.build}
 alt="Paralives build mode grid-less home building screenshot"
 caption="Start with the practical launch questions: build freedom, Paramaker tools, Mac support, Deck testing, Workshop content, and Early Access roadmap limits."
 />
 <p>
 Paralives is strongest when you approach it as a customization-heavy
 Early Access life sim. Build a small household, test one practical
 home, try Paramaker, make a clean save, then decide whether you want a
 long household now or would rather wait for roadmap systems such as
 pets, weather, seasons, vehicles, pools, family tree, gardening,
 fishing, and town editing.
 </p>
 </section>
 </ParalivesArticle>
 );
}
