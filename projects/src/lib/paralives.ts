import type { Metadata } from 'next';
import { paralives, type GameGuideLink } from '@/lib/games';

export const paralivesLastModified = '2026-05-26';
export const paralivesSteamUrl =
 'https://store.steampowered.com/app/1118520/Paralives/';
export const paralivesOfficialUrl = 'https://www.paralives.com/';
export const paralivesRedditUrl = 'https://www.reddit.com/r/Paralives/';
export const paralivesWorkshopUrl =
 'https://steamcommunity.com/app/1118520/workshop/';

export const paralivesImages = {
 hero: '/games/paralives/hero.jpg',
 header: '/games/paralives/header.jpg',
 build: '/games/paralives/screenshot-build.jpg',
 paramaker: '/games/paralives/screenshot-paramaker.jpg',
 town: '/games/paralives/screenshot-town.jpg',
 life: '/games/paralives/screenshot-life.jpg',
 home: '/games/paralives/screenshot-home.jpg',
 paraBuild: '/games/paralives/para-build.webp',
 paraParamaker: '/games/paralives/para-paramaker.webp',
};

export const paralivesVideos = [
 {
 id: 'uvGPV6qQuQM',
 title: 'Paralives - Release Date Reveal',
 caption:
 'Official release date video reference for Paralives Early Access timing, life-sim scope, Paramaker, build tools, and town gameplay.',
 },
];

export const paralivesQuickFacts = [
 ['Release status', 'Paralives is available on Steam Early Access from May 25, 2026.'],
 ['Platforms', 'Steam lists Windows and Mac support. Linux is not listed.'],
 ['Developer / Publisher', 'Paralives Studio.'],
 ['Genre fit', 'Sandbox life simulation with building, character creation, careers, relationships, families, and town exploration.'],
 ['Character creator', 'Paramaker lets players adjust height, facial and body features, outfits, and personalities.'],
 ['Build mode', 'Official Steam copy highlights grid-less construction, curved walls, split-level floors, resizing, recoloring, stacking, and free object placement.'],
 ['Mods and CC', 'Steam lists an in-game modding interface plus Steam Workshop support for mods, houses, and Parafolks.'],
 ['Mac support', 'Official requirements require Apple silicon: M2 minimum and M3 recommended.'],
 ['Steam Deck', 'No Steam Deck Verified claim is available in the checked official Steam data; treat Deck play as a test-first setup.'],
 ['Future features', 'Weather, seasons, pets, cars, bikes, boats, pools, events, NPC story progression, family tree, gardening, fishing, town editing, and more traits are listed for Early Access updates.'],
];

export const paralivesSpecRows = [
 ['Windows OS', 'Windows 10', 'Windows 11'],
 ['Windows CPU', 'Intel Core i5 or AMD Ryzen 5 at 2.5 GHz', 'Intel Core i5 or AMD Ryzen 5 at 3.0 GHz'],
 ['Windows memory', '12 GB RAM', '16 GB RAM'],
 ['Windows graphics', 'GTX 1060 or RX 6600 XT', 'RTX 2060 or RX 7600 XT'],
 ['DirectX', 'Version 11', 'Version 11'],
 ['Storage', '8 GB available space', '8 GB available space'],
 ['Mac OS', 'macOS Big Sur 11 or newer', 'macOS Big Sur 11 or newer'],
 ['Mac processor', 'Apple M2', 'Apple M3'],
 ['Mac memory', '12 GB RAM', '16 GB RAM'],
];

export const paralivesEarlyAccessRows = [
 {
 step: 'Check what is in Early Access now',
 doThis:
 'Start with building, Paramaker, open-world town play, relationships, careers, needs, emotions, children, and Steam Workshop support.',
 why:
 'These are the strongest confirmed launch pillars and match the highest rising search intent.',
 },
 {
 step: 'Separate launch features from roadmap features',
 doThis:
 'Treat pets, weather, seasons, vehicles, pools, events, family tree, gardening, fishing, town editing, and more jobs or traits as Early Access additions.',
 why:
 'Players searching for babies, pets, and family play need a clear answer without overclaiming launch content.',
 },
 {
 step: 'Use reviews for stability, not only score',
 doThis:
 'Read recent Steam reviews for save issues, performance, build-mode comfort, Mac reports, and Steam Deck comments.',
 why:
 'Life sims can feel great in tools while still needing patches around simulation depth and long saves.',
 },
 {
 step: 'Test performance before committing to a huge save',
 doThis:
 'Lower resolution or graphics settings if FPS drops, then test a smaller home and one active household first.',
 why:
 'The official requirements repeat this settings advice for both Windows and Mac.',
 },
];

export const paralivesBuildRows = [
 ['Grid-less building', 'Use Paralives for flexible layouts instead of strict tile-only planning.', 'Good for curved rooms, angled layouts, and real-house recreations.'],
 ['Curved walls', 'Plan the exterior shape first, then place key rooms before decorating.', 'Curves can make furniture layout harder if rooms are too small.'],
 ['Split-level floors', 'Use split levels after the main footprint works.', 'It avoids rebuilding stair and room flow later.'],
 ['Resize and recolor', 'Pick a core palette, then resize only the objects that need emphasis.', 'Too many custom sizes can make a house look noisy.'],
 ['Stack and free-place objects', 'Decorate in passes: function first, clutter second, final color last.', 'This keeps creative freedom from turning into visual clutter.'],
];

export const paralivesParamakerRows = [
 ['Body and height', 'Set height and broad body shape before editing clothing.', 'Outfits read differently after proportions change.'],
 ['Face details', 'Work from large face structure to smaller features.', 'It is easier to preserve a character concept.'],
 ['Outfits', 'Create everyday looks first, then style extra outfits around the same identity.', 'A consistent wardrobe makes screenshots and households feel coherent.'],
 ['Personality', 'Choose traits and preferences that create story tension.', 'Paralives is strongest when a Parafolk has goals and friction.'],
 ['Household planning', 'Create relationships and roles before moving into a large build.', 'It helps you pick a house layout that fits the people using it.'],
];

export const paralivesDeckRows = [
 ['Verified status', 'No Steam Deck Verified claim is shown in the checked official Steam data.', 'Treat Deck support as unverified until Steam or players confirm it.'],
 ['Controls', 'Life sims often need pointer-heavy menus and build tools.', 'Test trackpad, mouse region, and community layouts before a long session.'],
 ['Performance', 'Windows minimum lists GTX 1060 / RX 6600 XT and 12 GB RAM.', 'Start with lower resolution and graphics settings if using Proton.'],
 ['Text and UI', 'Character creator, Workshop, and build tools can be menu-heavy.', 'Check text size and cursor precision before playing away from a keyboard.'],
 ['Best buying advice', 'Buy for Deck only if you are willing to test and refund within Steam rules if it fails your setup.', 'Official PC and Mac support is clearer than handheld support right now.'],
];

export const paralivesMacRows = [
 ['Mac support', 'Steam lists macOS support.', 'Confirmed'],
 ['Processor', 'Apple M2 minimum, Apple M3 recommended.', 'Confirmed'],
 ['Memory', '12 GB RAM minimum, 16 GB RAM recommended.', 'Confirmed'],
 ['Operating system', 'macOS Big Sur 11 or newer.', 'Confirmed'],
 ['Intel Mac', 'The Mac requirements say Apple processor is required.', 'Not supported by the listed requirements'],
 ['Settings advice', 'Lower display resolution and graphics settings if framerate is low.', 'Official requirement note'],
];

export const paralivesModsRows = [
 ['In-game modding', 'Official Steam copy lists an in-game modding interface to edit or add content.', 'Confirmed'],
 ['Steam Workshop', 'Steam copy lists community-made mods, houses, and Parafolks through Steam Workshop.', 'Confirmed'],
 ['Custom content', 'Treat CC as part of the modding and Workshop ecosystem, then check file-specific instructions.', 'Practical advice'],
 ['Launch caution', 'Workshop volume may take time to grow after Early Access launch.', 'Use recent items and ratings instead of old assumptions.'],
 ['Save safety', 'Keep a clean save before adding several mods at once.', 'Early Access updates can change compatibility.'],
];

export const paralivesComparisonRows = [
 ['Paralives', 'Customization-first life sim with grid-less building, Paramaker, Mac support, free-update pledge, and Early Access risk.', 'Players who want a fresh life sim and enjoy shaping an in-development game.'],
 ['The Sims 4', 'Mature ecosystem with years of expansions, large CC communities, and familiar systems.', 'Players who want the deepest existing content library right now.'],
 ['inZOI', 'Realistic visual direction and a different life-sim fantasy.', 'Players prioritizing visual realism and modern production values.'],
 ['Life by You', 'Useful as search context, but not a current buying alternative after cancellation.', 'Players comparing the wider life-sim market history.'],
];

export const paralivesSourceRows = [
 {
 claim: 'Is Paralives available now?',
 source: 'Steam store',
 status: 'verified' as const,
 href: paralivesSteamUrl,
 note:
 'Use Steam for the May 25, 2026 Early Access release status, supported platforms, system requirements, feature list, reviews, and Workshop links.',
 },
 {
 claim: 'What does the community ask about most?',
 source: 'r/Paralives',
 status: 'working' as const,
 href: paralivesRedditUrl,
 note:
 'Recent player discussion is useful for Steam Deck, Mac, Workshop, build-mode, and launch expectation questions, but official claims still need Steam or developer confirmation.',
 },
 {
 claim: 'Where are mods and custom content shared?',
 source: 'Steam Workshop',
 status: 'verified' as const,
 href: paralivesWorkshopUrl,
 note:
 'Steam lists Workshop support for mods, houses, and Parafolks. Check item dates, ratings, and compatibility before adding content to an important save.',
 },
 {
 claim: 'Where should roadmap claims come from?',
 source: 'Official website',
 status: 'verified' as const,
 href: paralivesOfficialUrl,
 note:
 'Use official channels for roadmap updates, free-update statements, and developer announcements during Early Access.',
 },
];

export const paralivesCharacterActionRows = [
 {
 step: '1. Start with the Parafolk concept',
 doThis: 'Decide the role, daily routine, and story before opening Paramaker sliders. Concept first, body second, outfit last.',
 why: 'A clear concept makes later height, face, and outfit changes coherent instead of random.',
 },
 {
 step: '2. Lock height and body shape before clothing',
 doThis: 'Set height and broad body shape first, then return to outfits and details after proportions stop moving.',
 why: 'Outfits read differently after proportions change. Setting body first prevents wardrobe rework.',
 },
 {
 step: '3. Work face from large structure to small features',
 doThis: 'Adjust face structure first, then smaller features like eyes, mouth, and details.',
 why: 'Large structure sets the silhouette. Smaller tweaks are easier to read on a stable shape.',
 },
 {
 step: '4. Build an everyday outfit first',
 doThis: 'Create an everyday look that matches the character concept, then add extra outfits around the same identity.',
 why: 'A consistent wardrobe makes screenshots and households feel coherent during gameplay.',
 },
 {
 step: '5. Plan personality and household roles',
 doThis: 'Set traits, wants, and needs that create story tension. Place the Parafolk in a household and home that supports the role.',
 why: 'Paralives is strongest when a household has clear goals, friction, and shared spaces.',
 },
];

export const paralivesCharacterStatusItems = [
 { label: 'Creator name', value: 'Paramaker is the official Paralives character creator.', status: 'verified' as const },
 { label: 'Height adjustment', value: 'Steam lists height as a Paramaker feature.', status: 'verified' as const },
 { label: 'Face and body features', value: 'Facial and body feature customization is listed on Steam.', status: 'verified' as const },
 { label: 'Outfits', value: 'Outfit design is listed on Steam as part of Paramaker.', status: 'verified' as const },
 { label: 'Personality layer', value: 'Traits, wants, needs, and emotions are part of the life-sim layer.', status: 'verified' as const },
 { label: 'Household planning', value: 'Relationships, careers, and family setup are part of the launch scope.', status: 'verified' as const },
];

export const paralivesCharacterSourceRows = [
 {
 claim: 'What is the Paralives character creator called?',
 source: 'Steam store description',
 status: 'verified' as const,
 href: paralivesSteamUrl,
 note: 'Steam copy calls the character creator Paramaker and lists height, facial, and body features.',
 },
 {
 claim: 'Can you customize outfits and personality?',
 source: 'Steam store description',
 status: 'verified' as const,
 href: paralivesSteamUrl,
 note: 'Steam lists outfit design, personality traits, skills, wants, needs, and emotions as part of Paramaker and life-sim scope.',
 },
 {
 claim: 'Where do roadmap and family-tree claims come from?',
 source: 'Official website',
 status: 'verified' as const,
 href: paralivesOfficialUrl,
 note: 'Use official channels for roadmap updates on pets, weather, family tree, and future traits during Early Access.',
 },
 {
 claim: 'What do players ask about most?',
 source: 'r/Paralives',
 status: 'working' as const,
 href: paralivesRedditUrl,
 note: 'Recent player discussion is useful for Paramaker comfort, household planning, and build-mode questions, but official claims still need Steam or developer confirmation.',
 },
];

export const paralivesCharacterSearchIntent = [
 {
 query: 'Paralives character creation',
 answer: 'Paramaker is the creator. Use it to set height, body, face, outfits, and personality before moving into a household and home.',
 href: '#character-workflow',
 label: 'Character creation',
 },
 {
 query: 'Paralives Paramaker',
 answer: 'Paramaker handles height, body, face, outfit, and personality customization. Concept first, body second, outfit last.',
 href: '#character-workflow',
 label: 'Paramaker',
 },
 {
 query: 'Paralives personality and traits',
 answer: 'Steam lists traits, skills, wants, needs, and emotions as part of the life-sim layer. Pick traits that create story tension.',
 href: '#character-personality',
 label: 'Personality',
 },
 {
 query: 'Paralives household planning',
 answer: 'Plan relationships, careers, and roles before moving into a large build. This keeps the home layout aligned with the people using it.',
 href: '#character-household',
 label: 'Household',
 },
];

export const paralivesCharacterJumpLinks = [
 { href: '#character-workflow', label: 'Paramaker workflow' },
 { href: '#character-personality', label: 'Personality' },
 { href: '#character-household', label: 'Household' },
 { href: '/games/paralives/build-mode', label: 'Build mode' },
 { href: '/games/paralives/mods-cc', label: 'Mods & CC' },
 { href: '/games/paralives/mac', label: 'Mac support' },
];

export const paralivesMacActionRows = [
 {
 step: '1. Confirm Apple silicon model',
 doThis: 'Open the Apple menu and check that the Mac is on Apple silicon, not Intel. Intel Macs are not supported by the listed requirements.',
 why: 'The Steam Mac requirements require an Apple processor. Intel hardware is not a valid Paralives path.',
 },
 {
 step: '2. Match the listed macOS version',
 doThis: 'Update to macOS Big Sur 11 or newer, then confirm the build number before launching Paralives for the first time.',
 why: 'macOS Big Sur 11 or newer is the listed floor. Older macOS releases are not part of the supported path.',
 },
 {
 step: '3. Check memory against the recommended target',
 doThis: 'Compare your RAM to the 12 GB minimum and 16 GB recommended target before building a large household.',
 why: 'Household size, build mode, and town density all benefit from 16 GB of memory on Apple silicon.',
 },
 {
 step: '4. Lower display and graphics settings if needed',
 doThis: 'If framerate drops, lower display resolution and graphics settings before changing anything else.',
 why: 'The official Mac requirements repeat this settings advice. Resolution and graphics settings are the first levers to try.',
 },
 {
 step: '5. Keep a Windows or Mac backup plan',
 doThis: 'Save in a clean folder, and keep a Windows PC plan in mind if your Mac is below the listed requirements.',
 why: 'Life sims can run for years. A small hardware upgrade path now saves frustration during major Early Access updates.',
 },
];

export const paralivesMacStatusItems = [
 { label: 'Mac support', value: 'Steam lists macOS support.', status: 'verified' as const },
 { label: 'Processor', value: 'Apple M2 minimum, Apple M3 recommended.', status: 'verified' as const },
 { label: 'Memory', value: '12 GB RAM minimum, 16 GB RAM recommended.', status: 'verified' as const },
 { label: 'Operating system', value: 'macOS Big Sur 11 or newer.', status: 'verified' as const },
 { label: 'Intel Mac', value: 'The Mac requirements say Apple processor is required. Intel Mac is not supported by the listed requirements.', status: 'verified' as const },
 { label: 'Settings advice', value: 'Lower display resolution and graphics settings if framerate is low.', status: 'verified' as const },
];

export const paralivesMacSourceRows = [
 {
 claim: 'Is Paralives available on Mac?',
 source: 'Steam store system requirements',
 status: 'verified' as const,
 href: paralivesSteamUrl,
 note: 'Steam lists Mac support and Apple silicon processors. Use the Steam page for the official requirements.',
 },
 {
 claim: 'What Mac hardware does Paralives require?',
 source: 'Steam store system requirements',
 status: 'verified' as const,
 href: paralivesSteamUrl,
 note: 'Minimum: Apple M2 and 12 GB RAM. Recommended: Apple M3 and 16 GB RAM. macOS Big Sur 11 or newer is required.',
 },
 {
 claim: 'Does Paralives work on Intel Mac?',
 source: 'Steam store system requirements',
 status: 'verified' as const,
 href: paralivesSteamUrl,
 note: 'The Mac requirements require an Apple processor, so Intel Macs are not supported by the listed requirements.',
 },
 {
 claim: 'What should I do if Paralives runs slowly on Mac?',
 source: 'Steam store system requirements note',
 status: 'verified' as const,
 href: paralivesSteamUrl,
 note: 'The official requirement note advises lowering display resolution and graphics settings if framerate is low.',
 },
 {
 claim: 'Where do Early Access Mac updates appear?',
 source: 'Official website',
 status: 'working' as const,
 href: paralivesOfficialUrl,
 note: 'Use the official site for Early Access Mac patches and known-issue notes. Community threads are useful but not official.',
 },
];

export const paralivesMacSearchIntent = [
 {
 query: 'Is Paralives on Mac',
 answer: 'Yes. Steam lists Mac support with an Apple M2 minimum, M3 recommended, and macOS Big Sur 11 or newer.',
 href: '#mac-support',
 label: 'Mac support',
 },
 {
 query: 'Paralives Apple silicon',
 answer: 'The official requirements require an Apple M2 minimum and recommend M3. Intel Mac is not in the listed support path.',
 href: '#mac-apple-silicon',
 label: 'Apple silicon',
 },
 {
 query: 'Paralives Intel Mac',
 answer: 'The Mac requirements say an Apple processor is required. Intel Mac users should not assume support.',
 href: '#mac-intel',
 label: 'Intel',
 },
 {
 query: 'Paralives Mac performance',
 answer: 'Lower display resolution and graphics settings if framerate drops. The official requirements repeat this advice.',
 href: '#mac-performance',
 label: 'Performance',
 },
];

export const paralivesMacJumpLinks = [
 { href: '#mac-support', label: 'Mac support' },
 { href: '#mac-apple-silicon', label: 'Apple silicon' },
 { href: '#mac-intel', label: 'Intel Mac' },
 { href: '#mac-performance', label: 'Performance' },
 { href: '/games/paralives/steam-deck', label: 'Steam Deck' },
 { href: '/games/paralives/character-creation', label: 'Character creation' },
];

export const paralivesModsActionRows = [
 {
 step: '1. Keep a clean save before adding mods',
 doThis: 'Back up your current save into a separate folder before subscribing to Workshop items or installing in-game mods.',
 why: 'Early Access updates can change compatibility. A clean save is the safest way to roll back if items break.',
 },
 {
 step: '2. Add mods a few at a time',
 doThis: 'Subscribe to a small batch of items, launch the game, and check for conflicts before adding the next batch.',
 why: 'Smaller batches make it easier to identify which item caused a crash, layout issue, or save error.',
 },
 {
 step: '3. Use recent and rated Workshop items',
 doThis: 'Sort Workshop content by recent and rating, and check the item date before installing on a save you care about.',
 why: 'Workshop volume may take time to grow after Early Access launch. Recent and rated items are the safer starting point.',
 },
 {
 step: '4. Read item notes for compatibility and load order',
 doThis: 'Open the Workshop item page and read the creator notes for required versions, dependencies, or load order advice.',
 why: 'Mods and CC sometimes need specific game versions or other items. Notes save trial-and-error time.',
 },
 {
 step: '5. Re-check after Early Access updates',
 doThis: 'After a major Early Access patch, re-test your Workshop and mod list and remove items that no longer load.',
 why: 'Early Access patches can change how items load. A quick re-test keeps saves stable.',
 },
];

export const paralivesModsStatusItems = [
 { label: 'In-game modding', value: 'Steam lists an in-game modding interface to edit or add content.', status: 'verified' as const },
 { label: 'Steam Workshop', value: 'Steam lists community-made mods, houses, and Parafolks through Steam Workshop.', status: 'verified' as const },
 { label: 'Custom content', value: 'Treat CC as part of the modding and Workshop ecosystem, then check file-specific instructions.', status: 'verified' as const },
 { label: 'Launch volume', value: 'Workshop volume may take time to grow after Early Access launch.', status: 'needs-check' as const },
 { label: 'Save safety', value: 'Keep a clean save before adding several mods at once.', status: 'working' as const },
];

export const paralivesModsSourceRows = [
 {
 claim: 'Does Paralives support mods and CC?',
 source: 'Steam store',
 status: 'verified' as const,
 href: paralivesSteamUrl,
 note: 'Steam describes an in-game modding interface and Steam Workshop support for mods, houses, and Parafolks.',
 },
 {
 claim: 'Where is the safe place to share mods and CC?',
 source: 'Steam Workshop',
 status: 'verified' as const,
 href: paralivesWorkshopUrl,
 note: 'Steam Workshop is the listed sharing space. Check item dates, ratings, and compatibility notes before adding content.',
 },
 {
 claim: 'Where do Early Access compatibility notes come from?',
 source: 'Official website',
 status: 'working' as const,
 href: paralivesOfficialUrl,
 note: 'Use the official site for Early Access patch notes that affect mods and CC compatibility.',
 },
 {
 claim: 'What do players report about Workshop items?',
 source: 'r/Paralives',
 status: 'working' as const,
 href: paralivesRedditUrl,
 note: 'Community threads are useful for player reports on which Workshop items are stable, not as final proof.',
 },
];

export const paralivesModsSearchIntent = [
 {
 query: 'Paralives mods',
 answer: 'Steam lists an in-game modding interface and Steam Workshop support for mods, houses, and Parafolks.',
 href: '#mods-overview',
 label: 'Mods',
 },
 {
 query: 'Paralives Steam Workshop',
 answer: 'Steam Workshop is the listed place to share and install community-made mods, houses, and Parafolks.',
 href: '#mods-workshop',
 label: 'Workshop',
 },
 {
 query: 'Paralives CC',
 answer: 'CC is part of the modding and Workshop ecosystem. Check file-specific instructions and recent updates before installing.',
 href: '#mods-cc',
 label: 'CC',
 },
 {
 query: 'Paralives mod safety',
 answer: 'Keep a clean save, add mods a few at a time, and re-test after Early Access updates. Remove outdated items when they break.',
 href: '#mods-safety',
 label: 'Safety',
 },
];

export const paralivesModsJumpLinks = [
 { href: '#mods-overview', label: 'Mods overview' },
 { href: '#mods-workshop', label: 'Steam Workshop' },
 { href: '#mods-cc', label: 'Custom content' },
 { href: '#mods-safety', label: 'Save safety' },
 { href: '/games/paralives/character-creation', label: 'Character creation' },
 { href: '/games/paralives/steam-deck', label: 'Steam Deck' },
];

export const paralivesComparisonActionRows = [
 {
 step: '1. Decide which dimension matters most',
 doThis: 'Pick the dimension you care about: building tools, content depth, visual realism, mod ecosystem, or Mac support, before comparing games.',
 why: 'A single dimension makes the choice clearer than trying to weigh every feature at once.',
 },
 {
 step: '2. Read Paralives strengths in their own words',
 doThis: 'Read Steam copy and the official site for Paralives building, Paramaker, Mac support, Workshop, and Early Access status.',
 why: 'Steam and the official site are the right source for what is in the game right now, not forum hype.',
 },
 {
 step: '3. Read Sims 4 strengths as the incumbent baseline',
 doThis: 'Treat The Sims 4 as the incumbent baseline: years of expansions, large CC community, familiar systems.',
 why: 'The Sims 4 is the safest pick for an established content library right now.',
 },
 {
 step: '4. Read inZOI strengths as a realism-focused option',
 doThis: 'Treat inZOI as a realism-focused option with a different production direction than Paralives or Sims 4.',
 why: 'inZOI is commonly searched for its realistic presentation. It is a different life-sim fantasy.',
 },
 {
 step: '5. Match the game to your tolerance for Early Access',
 doThis: 'Buy Paralives if you want to participate in Early Access and flexible building. Wait if you need years of expansions immediately.',
 why: 'Early Access players gain influence and accept risk. Players who want a finished content library should not pick the new project first.',
 },
];

export const paralivesComparisonStatusItems = [
 { label: 'Paralives status', value: 'Early Access on Steam from May 25, 2026.', status: 'verified' as const },
 { label: 'Paralives strengths', value: 'Paramaker, grid-less building, Mac support, Workshop, free-update pledge.', status: 'verified' as const },
 { label: 'Sims 4 status', value: 'Mature ecosystem with years of expansions and large CC communities.', status: 'verified' as const },
 { label: 'inZOI direction', value: 'Realistic visual direction and a different life-sim fantasy.', status: 'working' as const },
 { label: 'Life by You', value: 'Useful as search context, but not a current buying alternative after cancellation.', status: 'verified' as const },
 { label: 'Best-fit rule', value: 'Pick by dimension, not by hype: building, content depth, realism, mod ecosystem, or Mac support.', status: 'working' as const },
];

export const paralivesComparisonSourceRows = [
 {
 claim: 'Is Paralives a Sims 4 or inZOI alternative?',
 source: 'Steam store and official site',
 status: 'verified' as const,
 href: paralivesSteamUrl,
 note: 'Use Steam for Paralives feature list and Early Access status. Use the official site for roadmap and free-update framing.',
 },
 {
 claim: 'How deep is the Sims 4 content library?',
 source: 'Public community knowledge and Steam store',
 status: 'verified' as const,
 href: paralivesSteamUrl,
 note: 'The Sims 4 has years of expansions and large CC communities. Use Steam or the official EA channels for current expansion status.',
 },
 {
 claim: 'What is inZOI positioning?',
 source: 'Public community knowledge',
 status: 'working' as const,
 href: paralivesRedditUrl,
 note: 'inZOI is commonly searched for its realistic visual direction. Confirm current state on official channels before buying.',
 },
 {
 claim: 'Is Life by You a current alternative?',
 source: 'Public announcement history',
 status: 'verified' as const,
 href: paralivesOfficialUrl,
 note: 'Life by You is useful as search context but is not a current buying alternative after cancellation.',
 },
];

export const paralivesComparisonSearchIntent = [
 {
 query: 'Paralives vs Sims 4',
 answer: 'Paralives is the Early Access customization pick with Mac support and flexible building. Sims 4 is the mature content library pick.',
 href: '#comparison-strengths',
 label: 'Paralives vs Sims 4',
 },
 {
 query: 'Paralives vs inZOI',
 answer: 'Paralives leans into stylized customization and flexible building. inZOI is commonly searched for realistic presentation.',
 href: '#comparison-direction',
 label: 'Paralives vs inZOI',
 },
 {
 query: 'Should I buy Paralives or wait for Sims 4 expansions?',
 answer: 'Buy Paralives if you want to participate in Early Access and flexible building. Wait for Sims 4 if you want a finished content library.',
 href: '#comparison-fit',
 label: 'Buying',
 },
 {
 query: 'Is Life by You a Paralives alternative?',
 answer: 'Life by You is useful as search context but is not a current buying alternative after cancellation.',
 href: '#comparison-context',
 label: 'Context',
 },
];

export const paralivesComparisonJumpLinks = [
 { href: '#comparison-strengths', label: 'Strengths' },
 { href: '#comparison-direction', label: 'Direction' },
 { href: '#comparison-fit', label: 'Best fit' },
 { href: '#comparison-context', label: 'Market context' },
 { href: '/games/paralives/character-creation', label: 'Character creation' },
 { href: '/games/paralives/steam-deck', label: 'Steam Deck' },
];

export const paralivesDeckActionRows = [
 {
 step: '1. Treat Deck as unverified',
 doThis: 'Do not assume Steam Deck Verified status. The checked official Steam data does not show a Verified claim.',
 why: 'Treating Deck as unverified prevents wasted buys if Proton or controls do not match your setup.',
 },
 {
 step: '2. Test trackpad and mouse region first',
 doThis: 'Run a small household on Deck and test trackpad precision, gyro if available, and community layouts for build mode.',
 why: 'Life sims rely on pointer-heavy menus and build tools. Trackpad and gyro behavior is the first thing to confirm.',
 },
 {
 step: '3. Lower resolution and graphics settings',
 doThis: 'If framerate drops, lower display resolution and graphics settings before changing anything else.',
 why: 'Lower resolution is the most reliable way to keep life-sim tools responsive on Deck hardware.',
 },
 {
 step: '4. Plan a refund-window test',
 doThis: 'Use Steam refund rules to test a small save within the first two hours, then keep or refund based on controls and framerate.',
 why: 'Refund rules are the safest way to evaluate a precision-heavy life sim on handheld hardware.',
 },
 {
 step: '5. Keep a desktop plan as the safe path',
 doThis: 'If Deck testing fails, plan around a Windows PC or Apple silicon Mac as the supported target.',
 why: 'Official support is clearer for Windows and Mac than for Deck. A desktop plan is the safe path.',
 },
];

export const paralivesDeckStatusItems = [
 { label: 'Steam Deck Verified', value: 'No Steam Deck Verified claim is available in the checked official Steam data.', status: 'needs-check' as const },
 { label: 'Windows support', value: 'Steam lists Windows support with GTX 1060 / RX 6600 XT minimum and 12 GB RAM.', status: 'verified' as const },
 { label: 'Mac support', value: 'Steam lists Apple silicon support with M2 minimum and M3 recommended.', status: 'verified' as const },
 { label: 'Controls', value: 'Life sims often need pointer-heavy menus and build tools. Test trackpad, mouse region, and community layouts.', status: 'working' as const },
 { label: 'Performance', value: 'Start with lower resolution and graphics settings if using Proton.', status: 'working' as const },
 { label: 'Best buying advice', value: 'Buy for Deck only if willing to test and refund within Steam rules if it fails your setup.', status: 'working' as const },
];

export const paralivesDeckSourceRows = [
 {
 claim: 'Is Paralives Steam Deck Verified?',
 source: 'Steam store page and Steam Deck category',
 status: 'needs-check' as const,
 href: paralivesSteamUrl,
 note: 'The checked official Steam data does not show a Steam Deck Verified claim. Treat Deck support as unverified until Steam or reliable player reports confirm it.',
 },
 {
 claim: 'What are the official Windows and Mac requirements?',
 source: 'Steam store system requirements',
 status: 'verified' as const,
 href: paralivesSteamUrl,
 note: 'Windows: GTX 1060 / RX 6600 XT minimum, 12 GB RAM. Mac: Apple M2 minimum, 12 GB RAM. Recommended targets are higher on both platforms.',
 },
 {
 claim: 'What Deck control layouts exist?',
 source: 'Steam community',
 status: 'working' as const,
 href: paralivesWorkshopUrl,
 note: 'Community layouts can help with trackpad and gyro, but they are not official Deck support.',
 },
 {
 claim: 'Where do Early Access Deck reports appear?',
 source: 'r/Paralives',
 status: 'working' as const,
 href: paralivesRedditUrl,
 note: 'Use recent player discussion for real Deck reports, but treat community signal as a starting point, not final proof.',
 },
];

export const paralivesDeckSearchIntent = [
 {
 query: 'Paralives Steam Deck',
 answer: 'No Steam Deck Verified claim is available in the checked official Steam data. Treat Deck play as unverified and test within refund rules.',
 href: '#deck-status',
 label: 'Steam Deck',
 },
 {
 query: 'Paralives Deck controls',
 answer: 'Test trackpad, mouse region, and community layouts for build mode. Life sims rely on pointer precision.',
 href: '#deck-controls',
 label: 'Controls',
 },
 {
 query: 'Paralives Deck performance',
 answer: 'Lower display resolution and graphics settings first. The official requirements repeat this advice for Windows and Mac.',
 href: '#deck-performance',
 label: 'Performance',
 },
 {
 query: 'Should I buy Paralives for Steam Deck only?',
 answer: 'Only if you are willing to test quickly and use Steam refund rules if performance or controls do not work for your setup.',
 href: '#deck-buying',
 label: 'Buying',
 },
];

export const paralivesDeckJumpLinks = [
 { href: '#deck-status', label: 'Deck status' },
 { href: '#deck-controls', label: 'Controls' },
 { href: '#deck-performance', label: 'Performance' },
 { href: '#deck-buying', label: 'Buying advice' },
 { href: '/games/paralives/mac', label: 'Mac support' },
 { href: '/games/paralives/mods-cc', label: 'Mods & CC' },
];

export const paralivesRelatedGuides: GameGuideLink[] = [
 {
 title: 'Paralives Guide Hub',
 href: paralives.hubPath,
 description:
 'Start here for Early Access status, Paramaker, build mode, Mac, Steam Deck, mods, CC, and life-sim comparisons.',
 },
 ...paralives.guideLinks,
];

export function getParalivesRelated(excludeHref: string) {
 return paralivesRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const paralivesKeywords = [
 'Paralives',
 'Paralives guide',
 'Paralives early access',
 'Paralives character creation',
 'Paralives Paramaker',
 'Paralives build mode',
 'Paralives Steam Deck',
 'Paralives Mac',
 'Paralives mods',
 'Paralives CC',
 'Paralives vs Sims 4',
 'inZOI vs Paralives',
];

export function createParalivesMetadata({
 title,
 description,
 canonical,
 image = paralivesImages.hero,
}: {
 title: string;
 description: string;
 canonical: string;
 image?: string;
}): Metadata {
 return {
 title: { absolute: title },
 description,
 keywords: paralivesKeywords,
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
