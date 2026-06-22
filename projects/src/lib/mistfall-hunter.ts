import type { Metadata } from 'next';
import type { GameGuideLink, GameSchemaConfig } from '@/lib/games';

export type MistfallTableRow = string[];

export interface MistfallSection {
 id: string;
 title: string;
 image?: string;
 imageAlt?: string;
 imageCaption?: string;
 paragraphs: string[];
 columns?: string[];
 rows?: MistfallTableRow[];
 checklist?: string[];
}

export interface MistfallPageData {
 title: string;
 description: string;
 canonical: string;
 label: string;
 heroImage: string;
 heroAlt: string;
 heroCaption: string;
 quickAnswer: string;
 updatedNote: string;
 sourceNote: string;
 sections: MistfallSection[];
 faqs: {
  question: string;
  answer: string;
 }[];
 related: GameGuideLink[];
}

export const mistfallHunterLastModified = '2026-06-22';
export const mistfallHunterSteamUrl = 'https://store.steampowered.com/app/3282300/Mistfall_Hunter/';
export const mistfallHunterDemoSteamUrl = 'https://store.steampowered.com/app/4282490/Mistfall_Hunter_Demo/';
export const mistfallHunterOfficialUrl = 'https://mistfallhunter.com/';

export const mistfallHunterImages = {
 header: '/games/mistfall-hunter/hero.webp',
 capsule: '/games/mistfall-hunter/capsule.webp',
 demoHeader: '/games/mistfall-hunter/demo-header.webp',
 screenshot1: '/games/mistfall-hunter/screenshot-1.webp',
 screenshot2: '/games/mistfall-hunter/screenshot-2.webp',
 screenshot3: '/games/mistfall-hunter/screenshot-3.webp',
 screenshot4: '/games/mistfall-hunter/screenshot-4.webp',
 screenshot5: '/games/mistfall-hunter/screenshot-5.webp',
};

export const mistfallHunterGame: GameSchemaConfig = {
 id: 'mistfall-hunter',
 name: 'Mistfall Hunter',
 guidePublisher: 'Enjoy4Game Guides',
 description:
  'A dark fantasy third-person PvPvE extraction ARPG with solo or three-player squad play, class builds, high-stakes loot, and extraction through Returner Woodling systems.',
 platforms: ['PC via Steam'],
 genres: ['Action RPG', 'Extraction', 'PvPvE', 'Dark Fantasy', 'Multiplayer'],
 developer: 'Bellring Games',
 publisher: 'Bellring Games',
 releaseDate: '2026-07-29',
 operatingSystem: 'Windows',
 url: mistfallHunterSteamUrl,
 availability: 'https://schema.org/PreOrder',
};

export const mistfallHunterGuideLinks: GameGuideLink[] = [
 {
  title: 'Mistfall Hunter Guide Hub',
  href: '/games/mistfall-hunter',
  description:
   'Release date, demo status, solo play, classes, extraction basics, and the best first guide to read.',
 },
 {
  title: 'Beginner Guide',
  href: '/games/mistfall-hunter/beginner-guide',
  description:
   'First run checklist, loot priorities, combat discipline, extraction timing, and common beginner mistakes.',
 },
 {
  title: 'How to Extract',
  href: '/games/mistfall-hunter/how-to-extract',
  description:
   'Returner Woodling, Soul of Return, safe extraction steps, death risk, and what to do when a run goes bad.',
 },
 {
  title: 'Solo Guide',
  href: '/games/mistfall-hunter/solo-guide',
  description:
   'Can you play alone, solo versus trio trade-offs, PvP avoidance, early exits, and survival habits.',
 },
 {
  title: 'Best Classes',
  href: '/games/mistfall-hunter/best-classes',
  description:
   'Beginner, solo, trio, and PvP class picks for the demo and launch-window period without final-meta claims.',
 },
];

export function getMistfallRelated(excludeHref: string) {
 return mistfallHunterGuideLinks.filter((guide) => guide.href !== excludeHref).slice(0, 4);
}

const sharedSourceNote =
 'Source note: This guide uses official store information, official game descriptions, public demo-era player questions, and current storefront feature text.';

const sharedFaqs = [
 {
  question: 'When does Mistfall Hunter release?',
  answer:
   'Steam lists Mistfall Hunter for July 29, 2026. The demo has been available before launch, so check the live Steam page before planning a session.',
 },
 {
  question: 'Is Mistfall Hunter solo or co-op?',
  answer:
   'The official Steam description supports solo play and three-player squad play. Solo is possible, but the game is still built around PvPvE extraction pressure.',
 },
 {
  question: 'Is Mistfall Hunter PvE only?',
  answer:
   'No PvE-only mode is listed in the current official store description. Mistfall Hunter is presented as a PvPvE extraction ARPG, so other players are part of the risk.',
 },
 {
  question: 'How many classes are in Mistfall Hunter?',
  answer:
   'The official Steam description describes six distinct classes, with two weapon stances per class, talent trees, and gem affixes.',
 },
];

export function createMistfallHunterMetadata({
 title,
 description,
 canonical,
 image = mistfallHunterImages.header,
}: {
 title: string;
 description: string;
 canonical: string;
 image?: string;
}): Metadata {
 return {
  title: { absolute: title },
  description,
  keywords: [
   'Mistfall Hunter guide',
   'Mistfall Hunter beginner guide',
   'Mistfall Hunter how to extract',
   'Mistfall Hunter solo guide',
   'Mistfall Hunter best classes',
   'Mistfall Hunter Returner Woodling',
   'Mistfall Hunter Soul of Return',
   'Mistfall Hunter release date',
  ],
  authors: [{ name: 'Enjoy4Game Guides' }],
  alternates: { canonical },
  openGraph: {
   title,
   description,
   url: canonical,
   images: [image],
   type: 'article',
   siteName: 'Enjoy4Game Guides',
  },
  twitter: {
   card: 'summary_large_image',
   title,
   description,
   images: [image],
  },
 };
}

export const mistfallHunterPages = {
 hub: {
  title: 'Mistfall Hunter Guide: Release Date, Demo, Classes, Solo Play, and Extraction Tips',
  description:
   'Mistfall Hunter guide hub for release date, demo status, solo play, classes, Returner Woodling extraction, beginner tips, and launch-window route planning.',
  canonical: '/games/mistfall-hunter',
  label: 'Mistfall Hunter Guide',
  heroImage: mistfallHunterImages.header,
  heroAlt: 'Mistfall Hunter official Steam header artwork',
  heroCaption:
   'Mistfall Hunter is a dark fantasy PvPvE extraction ARPG, so the first useful decision is which guide solves your next run problem.',
  quickAnswer:
   'Mistfall Hunter is scheduled for July 29, 2026 on Steam. If you are trying the demo or preparing for launch, start with the beginner loop, learn extraction before chasing fights, and choose classes by role instead of copying a fixed final tier list.',
  updatedNote:
   'Last updated June 22, 2026. Update after release-date changes, demo changes, class balance updates, or new official patch notes.',
  sourceNote: sharedSourceNote,
  related: getMistfallRelated('/games/mistfall-hunter'),
  sections: [
   {
    id: 'status',
    title: 'Quick Status',
    image: mistfallHunterImages.demoHeader,
    imageAlt: 'Mistfall Hunter demo Steam header artwork',
    imageCaption:
     'Use the demo period to learn the extraction loop, not to lock in final class assumptions before launch.',
    paragraphs: [
     'Mistfall Hunter is a dark fantasy third-person PvPvE extraction ARPG. The official Steam page lists a July 29, 2026 release date, a pre-launch demo, solo play, three-player squad support, six classes, weapon stances, talent trees, gem affixes, and high-stakes loot extraction.',
     'The practical route is simple: learn how loot turns into value, learn how extraction protects that value, then decide whether you want to play solo, squad, or class-focused PvP.',
    ],
    columns: ['Question', 'Current answer', 'Best next page'],
    rows: [
     ['Is it released?', 'Steam lists July 29, 2026.', 'Use this hub for status, then check Steam before launch.'],
     ['Can I try it?', 'A Steam demo has been available before release.', 'Start with the beginner guide.'],
     ['Can I play solo?', 'Solo play is listed, but the game remains PvPvE.', 'Read the solo guide before queueing alone.'],
     ['What should I learn first?', 'Loot, combat restraint, and extraction timing.', 'Read how to extract.'],
    ],
   },
   {
    id: 'start-here',
    title: 'Start Here: Pick the Guide That Matches Your Problem',
    image: mistfallHunterImages.screenshot1,
    imageAlt: 'Mistfall Hunter official screenshot showing dark fantasy combat',
    imageCaption:
     'A good first route is not about clearing everything. It is about getting value, surviving contact, and leaving before the run collapses.',
    paragraphs: [
     'Use the hub as a route selector. Mistfall Hunter combines action combat, loot pressure, class planning, and PvP risk, so each page should answer one clear player task.',
    ],
    columns: ['If you need', 'Read this', 'What you get'],
    rows: [
     ['A first-session plan', 'Beginner Guide', 'Checklist, loot priorities, combat habits, and mistakes to avoid.'],
     ['A safe way out', 'How to Extract', 'Returner Woodling, Soul of Return, extraction route, and failure recovery.'],
     ['A solo plan', 'Solo Guide', 'Solo vs trio trade-offs, PvP avoidance, and early-exit rules.'],
     ['A class pick', 'Best Classes', 'Beginner, solo, trio, and PvP class decision matrix.'],
    ],
   },
  ],
  faqs: [
   ...sharedFaqs,
   {
    question: 'What Mistfall Hunter guide should I read first?',
    answer:
     'Read the beginner guide first if you have not played. Read how to extract next, then use the solo guide or class guide depending on whether your next problem is survival or character choice.',
   },
  ],
 } satisfies MistfallPageData,
 beginner: {
  title: 'Mistfall Hunter Beginner Guide: First Run, Loot, Combat, and Extraction Tips',
  description:
   'Start Mistfall Hunter with a first-run checklist, loot priority table, combat discipline, extraction timing, and common mistakes to avoid.',
  canonical: '/games/mistfall-hunter/beginner-guide',
  label: 'Mistfall Hunter Beginner Guide',
  heroImage: mistfallHunterImages.screenshot1,
  heroAlt: 'Mistfall Hunter official screenshot for beginner combat planning',
  heroCaption:
   'The safest first run teaches the loop: enter with a goal, collect value, avoid unnecessary fights, and extract while you still can.',
  quickAnswer:
   'Your first Mistfall Hunter run should not be a full-map clear. Learn the loot to fight to extract loop, take only fights that protect value, and leave once you have enough to make the run matter.',
  updatedNote:
   'Last updated June 22, 2026. Update after launch, tutorial changes, loot economy changes, or class balance patches.',
  sourceNote: sharedSourceNote,
  related: getMistfallRelated('/games/mistfall-hunter/beginner-guide'),
  sections: [
   {
    id: 'first-run',
    title: 'First Run Checklist',
    image: mistfallHunterImages.screenshot2,
    imageAlt: 'Mistfall Hunter official screenshot showing dungeon exploration',
    imageCaption:
     'A clean beginner route is about learning exits, inventory pressure, and fight selection before trying to dominate PvP.',
    paragraphs: [
     'Treat the first session as a systems lesson. Mistfall Hunter punishes greedy runs because death can strip spoils, and the extraction loop only matters if you leave alive with value.',
    ],
    checklist: [
     'Pick a class for readability, not final meta.',
     'Enter with a small goal: learn one route, one enemy pattern, and one extraction option.',
     'Loot enough to make the run valuable, then stop adding risk.',
     'Avoid third-party fights unless they block your exit.',
     'Extract early once your inventory has value you do not want to lose.',
    ],
   },
   {
    id: 'loot-priority',
    title: 'Loot Priority for New Players',
    image: mistfallHunterImages.screenshot3,
    imageAlt: 'Mistfall Hunter official screenshot for loot and combat pressure',
    imageCaption:
     'Loot priority should answer one question: does this item help the current run, the next run, or neither?',
    paragraphs: [
     'Do not rank every item before launch. Instead, sort loot by function. Keep items that improve survival, extraction value, class growth, or immediate combat. Drop low-value clutter when it slows your exit.',
    ],
    columns: ['Loot type', 'Beginner priority', 'Why it matters'],
    rows: [
     ['Survival tools', 'High', 'Healing, escape support, and recovery tools keep the run alive.'],
     ['Class upgrades', 'High', 'Talent, stance, or build-related value can shape future runs.'],
     ['High-value treasure', 'Medium to high', 'Worth taking if you still have a realistic exit path.'],
     ['Random clutter', 'Low', 'Inventory space has risk cost in extraction games.'],
    ],
   },
   {
    id: 'mistakes',
    title: 'Beginner Mistakes That Lose Runs',
    image: mistfallHunterImages.screenshot4,
    imageAlt: 'Mistfall Hunter official screenshot showing high-risk fantasy combat',
    imageCaption:
     'Most early losses come from overextending after the run is already profitable.',
    paragraphs: [
     'The early mistake pattern is predictable: players chase one more fight, one more chest, or one more room after the run already has value. In PvPvE, that extra minute can invite another player, a bad monster pull, or a panicked exit.',
    ],
    columns: ['Mistake', 'Why it hurts', 'Better habit'],
    rows: [
     ['Full-clearing every area', 'It extends exposure after you already have loot.', 'Set an exit threshold before entering.'],
     ['Taking every PvP sound as an invitation', 'Other players can drain resources before extraction.', 'Fight only for route control or clear advantage.'],
     ['Ignoring extraction until late', 'A good run can become a forced fight.', 'Identify exit options early.'],
     ['Copying one global class tier', 'Class value changes by solo, trio, and patch state.', 'Pick by role and comfort first.'],
    ],
   },
  ],
  faqs: [
   ...sharedFaqs,
   {
    question: 'What is the best beginner goal in Mistfall Hunter?',
    answer:
     'The best beginner goal is to learn one route, collect useful loot, identify an extraction option, and leave before the run becomes a forced fight.',
   },
   {
    question: 'Should beginners fight other players in Mistfall Hunter?',
    answer:
     'Only when the fight protects your route or you have a clear advantage. Beginners usually gain more by extracting value than by gambling on every PvP encounter.',
   },
  ],
 } satisfies MistfallPageData,
 extract: {
  title: 'How to Extract in Mistfall Hunter: Returner Woodling and Soul of Return',
  description:
   'Learn how extraction works in Mistfall Hunter, including Returner Woodling, Soul of Return, safe exit steps, death risk, and recovery when a run goes bad.',
  canonical: '/games/mistfall-hunter/how-to-extract',
  label: 'How to Extract in Mistfall Hunter',
  heroImage: mistfallHunterImages.screenshot2,
  heroAlt: 'Mistfall Hunter official screenshot for extraction route planning',
  heroCaption:
   'Extraction is the difference between finding loot and keeping loot. Learn the exit flow before chasing deeper fights.',
  quickAnswer:
   'To extract in Mistfall Hunter, play around the Returner Woodling and Soul of Return systems, identify an exit path before your inventory is full, and leave before PvP or monster pressure forces a bad fight.',
  updatedNote:
   'Last updated June 22, 2026. Update after extraction UI, Returner Woodling, Soul of Return, or death-penalty changes.',
  sourceNote: sharedSourceNote,
  related: getMistfallRelated('/games/mistfall-hunter/how-to-extract'),
  sections: [
   {
    id: 'route',
    title: 'Step-by-Step Extraction Route',
    image: mistfallHunterImages.screenshot5,
    imageAlt: 'Mistfall Hunter official screenshot for dungeon route pressure',
    imageCaption:
     'A good extraction route begins before panic. Know what makes the run worth saving and where you will go when risk rises.',
    paragraphs: [
     'Exact map routing can change during the demo and launch window, but the extraction discipline stays the same. Decide what value you are protecting, keep a route in mind, and do not wait until every enemy and player has collapsed onto your path.',
    ],
    columns: ['Step', 'Do this', 'Why it matters'],
    rows: [
     ['1. Enter with a value goal', 'Know what loot or progress makes the run worth saving.', 'You cannot time extraction if you never define success.'],
     ['2. Watch route pressure', 'Track enemy pulls, player sounds, and resource use.', 'Extraction gets harder when you are low on health or escape tools.'],
     ['3. Find the extraction mechanism', 'Play around Returner Woodling and Soul of Return related exits.', 'These systems are central to keeping loot.'],
     ['4. Leave before collapse', 'Extract once the reward is worth more than the next room.', 'The safest exit is often earlier than your greed wants.'],
    ],
   },
   {
    id: 'failure',
    title: 'If the Extraction Goes Bad',
    image: mistfallHunterImages.screenshot3,
    imageAlt: 'Mistfall Hunter official screenshot for failed extraction recovery',
    imageCaption:
     'Recovery is about reducing loss. A bad route can still become a useful lesson if you identify why the exit failed.',
    paragraphs: [
     'Mistfall Hunter is high stakes. If you die, assume the run can lose spoils unless the current build or mode says otherwise. The right recovery mindset is to diagnose why extraction failed, then make the next route shorter and cleaner.',
    ],
    columns: ['Problem', 'Likely cause', 'Next-run fix'],
    rows: [
     ['Died with valuable loot', 'Stayed after the run was already profitable.', 'Set an extraction threshold before entering.'],
     ['Could not reach exit', 'No route plan before pressure spiked.', 'Identify extraction direction early.'],
     ['Lost fight near exit', 'Took PvP while carrying value.', 'Avoid noise and rotate earlier.'],
     ['Panic after low resources', 'Used health or escape tools too early.', 'Leave when your recovery tools are gone.'],
    ],
   },
  ],
  faqs: [
   ...sharedFaqs,
   {
    question: 'What is Returner Woodling in Mistfall Hunter?',
    answer:
     'Returner Woodling is part of the official extraction language around leaving with loot. Treat it as a key system to learn early, and check the live game prompts for exact interaction details.',
   },
   {
    question: 'Do you lose loot when you die in Mistfall Hunter?',
    answer:
     'The official game description frames Mistfall Hunter around high-stakes loot extraction where death can strip spoils. Plan routes as if dying with valuable loot is costly.',
   },
  ],
 } satisfies MistfallPageData,
 solo: {
  title: 'Mistfall Hunter Solo Guide: Can You Play Alone and Survive PvPvE?',
  description:
   'Mistfall Hunter solo guide covering whether you can play alone, solo versus trio trade-offs, PvP avoidance, extraction timing, and survival rules.',
  canonical: '/games/mistfall-hunter/solo-guide',
  label: 'Mistfall Hunter Solo Guide',
  heroImage: mistfallHunterImages.screenshot4,
  heroAlt: 'Mistfall Hunter official screenshot for solo survival planning',
  heroCaption:
   'Solo play is possible, but solo survival depends on restraint, route control, and early extraction discipline.',
  quickAnswer:
   'Yes, you can play Mistfall Hunter solo. The catch is that it remains a PvPvE extraction game, so solo players should avoid fair fights against squads, take smaller wins, and extract earlier than a trio would.',
  updatedNote:
   'Last updated June 22, 2026. Update after matchmaking, squad-size, class balance, or solo queue changes.',
  sourceNote: sharedSourceNote,
  related: getMistfallRelated('/games/mistfall-hunter/solo-guide'),
  sections: [
   {
    id: 'solo-vs-trio',
    title: 'Solo vs Trio: What Changes',
    image: mistfallHunterImages.screenshot1,
    imageAlt: 'Mistfall Hunter official screenshot showing fantasy combat for solo and squad planning',
    imageCaption:
     'Solo players need cleaner decisions because there is no teammate to cover a bad pull, revive pressure, or a greedy exit.',
    paragraphs: [
     'The official store description supports solo and three-player squad play. That does not mean the risk profile is equal. A trio can split roles, trade aggro, cover loot, and pressure exits. A solo player wins by reading danger sooner.',
    ],
    columns: ['Situation', 'Solo reality', 'Trio advantage'],
    rows: [
     ['Looting', 'Faster decisions, less room for mistakes.', 'More bodies can cover and carry.'],
     ['PvP', 'Avoid fair squad fights unless positioning is excellent.', 'Can trade pressure and revive momentum.'],
     ['Extraction', 'Leave earlier and quieter.', 'Can hold space around an exit.'],
     ['Class choice', 'Needs self-sufficiency and escape value.', 'Can specialize into damage, control, or support.'],
    ],
   },
   {
    id: 'survival',
    title: 'Solo Survival Checklist',
    image: mistfallHunterImages.screenshot5,
    imageAlt: 'Mistfall Hunter official screenshot for solo route planning',
    imageCaption:
     'The solo checklist is built around not giving squads the fight they want.',
    paragraphs: [
     'A solo run should feel controlled. If every decision is reactive, the route is already too loud or too greedy.',
    ],
    checklist: [
     'Choose a class that can disengage, survive mistakes, or finish fights quickly.',
     'Take quieter routes when possible instead of contesting obvious hotspots.',
     'Do not open a fight unless you know your exit direction.',
     'Extract after one meaningful win rather than chasing a second jackpot.',
     'Rotate away from prolonged noise because other players may arrive late.',
    ],
   },
   {
    id: 'avoid-pvp',
    title: 'How Solo Players Should Handle PvP',
    image: mistfallHunterImages.screenshot3,
    imageAlt: 'Mistfall Hunter official screenshot for PvP risk management',
    imageCaption:
     'Solo PvP should be selective. The best solo fight is often the one that secures escape, not the one that proves skill.',
    paragraphs: [
     'PvP is part of the game, but solo players should treat PvP as a resource decision. If a fight spends health, escape tools, and time without protecting your route, it may be a bad trade even if you win.',
    ],
    columns: ['PvP signal', 'Solo response', 'Reason'],
    rows: [
     ['Distant fight sounds', 'Rotate around or wait.', 'Let other players spend resources first.'],
     ['Enemy blocks exit', 'Fight only if no safer route exists.', 'The fight has a clear purpose.'],
     ['Squad sees you first', 'Break line of sight and reset.', 'Fair squad fights are rarely fair for solo.'],
     ['You already have valuable loot', 'Prioritize extraction.', 'Banked value beats ego fights.'],
    ],
   },
  ],
  faqs: [
   ...sharedFaqs,
   {
    question: 'Can you play Mistfall Hunter alone?',
    answer:
     'Yes. The official Steam description lists solo play, but solo players still face PvPvE risk and should use safer routes and earlier extraction timing.',
   },
   {
    question: 'Is Mistfall Hunter better solo or with friends?',
    answer:
     'It depends on your goal. Solo is better for cautious learning and self-paced route practice. Trio play is stronger for contested fights, role coverage, and holding extraction space.',
   },
  ],
 } satisfies MistfallPageData,
 classes: {
  title: 'Mistfall Hunter Best Classes: Solo, PvP, Trio, and Beginner Picks',
  description:
   'Choose Mistfall Hunter classes by beginner comfort, solo survival, trio role, and PvP purpose instead of relying on one final tier list.',
  canonical: '/games/mistfall-hunter/best-classes',
  label: 'Mistfall Hunter Best Classes',
  heroImage: mistfallHunterImages.screenshot3,
  heroAlt: 'Mistfall Hunter official screenshot for class and build planning',
  heroCaption:
   'Class value depends on what you are trying to survive: first run learning, solo extraction, trio role coverage, or PvP pressure.',
  quickAnswer:
   'Do not choose Mistfall Hunter classes from one global tier list yet. For the demo and launch window, pick by task: beginner comfort, solo self-sufficiency, trio role coverage, or PvP engagement style.',
  updatedNote:
   'Last updated June 22, 2026. Update after official class notes, balance patches, launch build changes, or stable player data.',
  sourceNote: sharedSourceNote,
  related: getMistfallRelated('/games/mistfall-hunter/best-classes'),
  sections: [
   {
    id: 'class-matrix',
    title: 'Class Decision Matrix',
    image: mistfallHunterImages.screenshot2,
    imageAlt: 'Mistfall Hunter official screenshot for class decision matrix',
    imageCaption:
     'Use the class matrix to pick a role direction first. Exact rankings should wait for stable launch balance.',
    paragraphs: [
     'The official description says Mistfall Hunter has six distinct classes, two weapon stances per class, talent trees, and gem affixes. That is enough to plan by role, but not enough to claim a permanent final meta.',
    ],
    columns: ['Player goal', 'Prioritize', 'Avoid'],
    rows: [
     ['First-time beginner', 'Readable skills, forgiving defense, simple extraction value.', 'Complex burst setups that punish missed timing.'],
     ['Solo extraction', 'Self-sustain, mobility, escape tools, reliable dueling.', 'Pure support roles that need teammates.'],
     ['Trio play', 'Role synergy: frontline, damage, control, or support.', 'Three players duplicating the same narrow job.'],
     ['PvP focus', 'Engage or disengage tools, burst windows, crowd control.', 'Slow plans that cannot reset bad fights.'],
    ],
   },
   {
    id: 'pick-by-role',
    title: 'How to Pick Without a Final Tier List',
    image: mistfallHunterImages.screenshot4,
    imageAlt: 'Mistfall Hunter official screenshot for combat role planning',
    imageCaption:
     'The best class is the one whose risk pattern you understand before the fight starts.',
    paragraphs: [
     'A launch-window class guide should help players make decisions, not pretend balance has stopped changing. Start by deciding whether your next problem is survival, damage, control, team support, or extraction security.',
    ],
    columns: ['Role need', 'Good sign', 'Bad sign'],
    rows: [
     ['Survival', 'You can recover from a mistake without losing the whole run.', 'The class collapses if one combo misses.'],
     ['Damage', 'You can secure kills or clear threats before resources run dry.', 'Damage requires perfect setup every fight.'],
     ['Control', 'You can create space for looting, healing, or extraction.', 'Control does nothing when outnumbered.'],
     ['Support', 'Your trio benefits from your kit every fight.', 'Your kit loses value when queueing solo.'],
    ],
   },
   {
    id: 'update-caution',
    title: 'Why Final Meta Claims Are Risky Before Launch',
    image: mistfallHunterImages.screenshot5,
    imageAlt: 'Mistfall Hunter official screenshot for launch-window balance caution',
    imageCaption:
     'Class recommendations should change when launch balance, talent values, or weapon stances change.',
    paragraphs: [
     'Mistfall Hunter is still in its demo and launch-window period. Talent numbers, stance behavior, gem affixes, matchmaking pressure, and common player routes can all change. Use role-based class advice now, then update exact rankings after stable patch data exists.',
    ],
    checklist: [
     'Check whether the guide names the current patch or launch window.',
     'Separate beginner comfort from high-skill PvP value.',
     'Separate solo value from trio value.',
     'Do not spend all progression around a build you do not enjoy piloting.',
    ],
   },
  ],
  faqs: [
   ...sharedFaqs,
   {
    question: 'What is the best Mistfall Hunter class for beginners?',
    answer:
     'The safest beginner class is the one with readable skills, forgiving defense, and reliable extraction value. Avoid complex builds until you understand enemy pressure and exit timing.',
   },
   {
    question: 'Should I follow a Mistfall Hunter tier list before launch?',
    answer:
     'Use tier lists cautiously before launch. Class balance, talents, weapon stances, and gem affixes can change, so role-based advice is more reliable than fixed rankings.',
   },
  ],
 } satisfies MistfallPageData,
};
