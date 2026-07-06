export interface GameGuideLink {
 title: string;
 href: string;
 description: string;
}

export interface GameSchemaConfig {
 id?: string;
 name: string;
 guidePublisher: string;
 description: string;
 platforms: string[];
 genres: string[];
 developer: string;
 publisher: string;
 releaseDate: string;
 operatingSystem: string;
 url: string;
 availability?: string;
}

export interface GameConfig extends GameSchemaConfig {
 id: string;
 slugPrefix: string;
 hubPath: string;
 heroImage: string;
 guideLinks: GameGuideLink[];
}

export const directive8020: GameConfig = {
 id: "directive-8020",
 slugPrefix: "directive-8020",
 hubPath: "/",
 name: "Directive 8020",
 guidePublisher: "Directive 8020 Guide Hub",
 description:
 "A cinematic sci-fi survival horror adventure from Supermassive Games. When a colony ship reaches a distant planet, the crew discovers a deadly alien threat that can perfectly mimic its prey.",
 platforms: ["PlayStation 5", "Xbox Series X|S", "PC"],
 genres: ["Survival Horror", "Interactive Drama", "Adventure"],
 developer: "Supermassive Games",
 publisher: "Supermassive Games",
 releaseDate: "2026-05-12",
 operatingSystem: "Windows, PlayStation 5, Xbox Series X|S",
 url: "https://store.steampowered.com/app/2255370/Directive_8020/",
 availability: "https://schema.org/InStock",
 heroImage: "/hero-banner.jpg",
 guideLinks: [
 {
 title: "Full Walkthrough",
 href: "/directive-8020-walkthrough",
 description:
 "All 8 episodes, collectibles, QTEs, stealth, and Story Tree planning.",
 },
 {
 title: "All Endings",
 href: "/directive-8020-all-endings",
 description:
 "Ending routes, Cycle 13 context, best ending priorities, and cleanup.",
 },
 {
 title: "Trophy Guide",
 href: "/directive-8020-trophy-guide",
 description:
 "Achievement cleanup, missable planning, collectibles, and survival routes.",
 },
 ],
};

export const projectMist: GameConfig = {
 id: "project-mist",
 slugPrefix: "project-mist",
 hubPath: "/games/project-mist",
 name: "Project: Mist",
 guidePublisher: "Enjoy4Game Guides",
 description:
 "An open-world survival horror game from Chicken Launcher with solo play, online co-op, a Gravity Gun, a moving train base, giant creatures, crafting, hunting, and mysterious island facilities.",
 platforms: ["PC"],
 genres: [
 "Action",
 "Adventure",
 "Indie",
 "Simulation",
 "Early Access",
 "Survival Horror",
 ],
 developer: "Chicken Launcher",
 publisher: "Chicken Launcher",
 releaseDate: "2026-05-19",
 operatingSystem: "Windows 10/11 64-bit",
 url: "https://store.steampowered.com/app/2383130/Project_Mist/",
 availability: "https://schema.org/InStock",
 heroImage: "/games/project-mist/hero.webp",
 guideLinks: [
 {
 title: "Release Date & Early Access",
 href: "/games/project-mist/release-date",
 description:
 "Steam release date, Early Access status, demo, and price notes.",
 },
 {
 title: "System Requirements",
 href: "/games/project-mist/system-requirements",
 description:
 "Official minimum PC specs and what the missing recommended spec means.",
 },
 {
 title: "Multiplayer & Co-op",
 href: "/games/project-mist/multiplayer-co-op",
 description:
 "Online co-op, 1-4 player support, solo play, and what is not confirmed.",
 },
 {
 title: "Beginner Guide",
 href: "/games/project-mist/beginner-guide",
 description:
 "Day-one survival priorities for Gravity Gun, train base, resources, and co-op.",
 },
 {
 title: "Map & Facilities Guide",
 href: "/games/project-mist/map-facilities",
 description:
 "Route planning for map markers, facilities, the train base, greenhouse, loot rooms, and safe returns.",
 },
 {
 title: "Crashing & Performance Fix",
 href: "/games/project-mist/crashing-fix",
 description:
 "Early Access startup crashes, black screen, low FPS, and online troubleshooting.",
 },
 {
 title: "Lockpick & Chests",
 href: "/games/project-mist/lockpick-chests",
 description:
 "How lockpicking works, how to open chests, and what to do if the minigame feels unclear.",
 },
 {
 title: "Train Door Key",
 href: "/games/project-mist/train-door-key",
 description:
 "Train door key route notes, boss-gate checks, and launch-window missing-key troubleshooting.",
 },
 {
 title: "Demo Saves & Transfer",
 href: "/games/project-mist/save-demo-transfer",
 description:
 "Demo save behavior, infinite loading reports, Steam Cloud checks, and safe save handling.",
 },
 {
 title: "Train Base Building",
 href: "/games/project-mist/building-train-base",
 description:
 "Moving train base priorities, storage, defenses, building limits, and what is still being patched.",
 },
 {
 title: "Is Project: Mist Worth It?",
 href: "/games/project-mist/is-it-worth-it",
 description:
 "Launch-window buying advice using price, reviews, Early Access risk, co-op, demo, and content fit.",
 },
 {
 title: "All Bosses & Giant Creatures Guide",
 href: "/games/project-mist/all-bosses",
 description:
 "Every boss and giant creature fight: attack patterns, weaknesses, recommended gear, and survival strategies for solo and co-op.",
 },
 {
 title: "Weapons, Crafting & Best Gear",
 href: "/games/project-mist/weapons-crafting",
 description:
 "Complete weapons list, crafting recipes, best early gear, Gravity Gun unlocks, and material farming locations.",
 },
 ],
};

export const thickAsThieves: GameConfig = {
 id: "thick-as-thieves",
 slugPrefix: "thick-as-thieves",
 hubPath: "/games/thick-as-thieves",
 name: "Thick As Thieves",
 guidePublisher: "Enjoy4Game Guides",
 description:
 "A first-person stealth-action heist game from OtherSide Entertainment and Megabit Publishing set in the gaslit city of Kilcairn, playable solo or in online co-op with one partner.",
 platforms: ["PC"],
 genres: ["Action", "Indie", "Simulation", "Stealth", "Heist"],
 developer: "OtherSide Entertainment",
 publisher: "Megabit Publishing",
 releaseDate: "2026-05-20",
 operatingSystem: "Windows 10 / Windows 11",
 url: "https://store.steampowered.com/app/3341000/Thick_As_Thieves/",
 availability: "https://schema.org/InStock",
 heroImage: "/games/thick-as-thieves/hero.webp",
 guideLinks: [
 {
 title: "Release Date & Unlock",
 href: "/games/thick-as-thieves/release-date",
 description:
 "May 20, 2026 Steam release status, unlock checks, price notes, platform facts, and launch-day verification.",
 },
 {
 title: "Solo & Co-op",
 href: "/games/thick-as-thieves/solo-coop",
 description:
 "Solo versus two-player online co-op, host checks, session planning, and what is not confirmed.",
 },
 {
 title: "Beginner Stealth Guide",
 href: "/games/thick-as-thieves/beginner-stealth-guide",
 description:
 "First-run stealth habits for route planning, information gathering, clean exits, and partner coordination.",
 },
 {
 title: "Contracts, Maps & Replayability",
 href: "/games/thick-as-thieves/contracts-maps",
 description:
 "Official 2-map, 16-mission, at least 4-hour introductory campaign scope and replay expectations.",
 },
 {
 title: "System Requirements",
 href: "/games/thick-as-thieves/system-requirements",
 description:
 "Official minimum and recommended PC specs, SSD requirement, controller support, and Steam Cloud notes.",
 },
 {
 title: "Gear & Loadouts",
 href: "/games/thick-as-thieves/gear-loadouts",
 description:
 "How to think about stealth gear, first loadouts, progression, and unverified launch details.",
 },
 {
 title: "Roadmap, Console & Live Service",
 href: "/games/thick-as-thieves/roadmap-console",
 description:
 "What official FAQ says about live service status, post-launch content, console plans, and buyer expectations.",
 },
 {
 title: "Is Thick As Thieves Worth It?",
 href: "/games/thick-as-thieves/is-it-worth-it",
 description:
 "Buyer-focused launch advice using price, short campaign scope, co-op, PC focus, PvPvE pivot, and wait-or-buy signals.",
 },
 ],
};

export const zeroParades: GameConfig = {
 id: "zero-parades",
 slugPrefix: "zero-parades",
 hubPath: "/games/zero-parades",
 name: "ZERO PARADES: For Dead Spies",
 guidePublisher: "Enjoy4Game Guides",
 description:
 "An espionage RPG from ZA/UM about Hershel Wilk, alias CASCADE, a burnt-out operant recalled for one desperate assignment in a city of informants, adversaries, political factions, and psychic pressure.",
 platforms: ["PC", "PlayStation 5"],
 genres: ["RPG", "Indie", "Espionage", "Narrative RPG"],
 developer: "ZA/UM",
 publisher: "ZA/UM",
 releaseDate: "2026-05-21",
 operatingSystem: "Windows 10 / Windows 11",
 url: "https://store.steampowered.com/app/2863680/ZERO_PARADES_For_Dead_Spies/",
 availability: "https://schema.org/InStock",
 heroImage: "/games/zero-parades/hero.jpg",
 guideLinks: [
 {
 title: "Release Date & Platforms",
 href: "/games/zero-parades/release-date",
 description:
 "PC launch status, Steam/Epic/GOG notes, PS5 timing, languages, price checks, and storefront cautions.",
 },
 {
 title: "Beginner Guide",
 href: "/games/zero-parades/beginner-guide",
 description:
 "Spoiler-light first-session advice for skills, Conditioning, Exertion, pressure, and dialogue choices.",
 },
 {
 title: "System Requirements",
 href: "/games/zero-parades/system-requirements",
 description:
 "Official minimum and recommended PC specs, GTX 1060 baseline, RAM, DirectX 11, and setup notes.",
 },
 {
 title: "Steam Deck Guide",
 href: "/games/zero-parades/steam-deck",
 description:
 "Steam Deck Verified context, controller support, text readability, saves, and handheld checks.",
 },
 {
 title: "Is ZERO PARADES Worth It?",
 href: "/games/zero-parades/is-it-worth-it",
 description:
 "Buying advice for Disco Elysium fans, narrative RPG players, PS5 users, and cautious launch buyers.",
 },
 {
 title: "Best Build Guide",
 href: "/games/zero-parades/best-build",
 description:
 "Four build archetypes, specific skill picks, Conditioning tips, and first-playthrough advice for Hershel Wilk.",
 },
 {
 title: "Walkthrough",
 href: "/games/zero-parades/walkthrough",
 description:
 "Assignment progression, key decision points, skill checks, missable content, and route guidance.",
 },
 {
 title: "Controller Support",
 href: "/games/zero-parades/controller-support",
 description:
 "Partial controller support explained, keyboard vs controller comparison, and Steam Deck controller tips.",
 },
 {
 title: "Game Length & Time Limits",
 href: "/games/zero-parades/length",
 description:
 "How long to beat, time-sensitive mechanics, missable content, multiple endings, and completionist hours.",
 },
 ],
};

export const mechanicusII: GameConfig = {
 id: "mechanicus-ii",
 slugPrefix: "mechanicus-ii",
 hubPath: "/games/mechanicus-ii",
 name: "Warhammer 40,000: Mechanicus II",
 guidePublisher: "Enjoy4Game Guides",
 description:
 "A fast-paced turn-based tactics and strategy sequel from Bulwark Studios and Kasedo Games where players command either the Adeptus Mechanicus or Necron legions across linked campaigns, tactical battles, territory control, and resource management.",
 platforms: ["PC", "PlayStation 5", "Xbox Series X|S"],
 genres: ["Strategy", "Action", "RPG", "Turn-Based Tactics", "Warhammer 40K"],
 developer: "Bulwark Studios",
 publisher: "Kasedo Games",
 releaseDate: "2026-05-21",
 operatingSystem: "Windows 10 64-bit",
 url: "https://store.steampowered.com/app/2532480/Warhammer_40000_Mechanicus_II/",
 availability: "https://schema.org/InStock",
 heroImage: "/games/mechanicus-ii/hero.webp",
 guideLinks: [
 {
 title: "Release Date & Platforms",
 href: "/games/mechanicus-ii/release-date",
 description:
 "May 21 launch status, Steam price, PS5 and Xbox availability, review signal, languages, achievements, and edition notes.",
 },
 {
 title: "Beginner Guide",
 href: "/games/mechanicus-ii/beginner-guide",
 description:
 "Spoiler-light first-session advice for campaign choice, cover, terrain, resources, leaders, and early tactical habits.",
 },
 {
 title: "Walkthrough",
 href: "/games/mechanicus-ii/walkthrough",
 description:
 "Spoiler-light mission flow, green console checks, leader safety, objective reading, and campaign progression notes.",
 },
 {
 title: "Best Units & Builds",
 href: "/games/mechanicus-ii/best-units-builds",
 description:
 "Role-based unit value, safe first builds, faction resource pressure, leader protection, and launch-window build cautions.",
 },
 {
 title: "Tips and Tricks",
 href: "/games/mechanicus-ii/tips-and-tricks",
 description:
 "Practical tactics for cover, turn order, green consoles, campaign resources, leader safety, and avoiding early resets.",
 },
 {
 title: "Missions Walkthrough",
 href: "/games/mechanicus-ii/missions-walkthrough",
 description:
 "Mission routing help for objectives, marked tiles, interactables, failure diagnosis, and spoiler-light campaign progression.",
 },
 {
 title: "Factions Guide",
 href: "/games/mechanicus-ii/factions",
 description:
 "Adeptus Mechanicus versus Necrons, campaign identity, battlefield strengths, leaders, and what still needs testing.",
 },
 {
 title: "Leaders Guide",
 href: "/games/mechanicus-ii/leaders-guide",
 description:
 "Faustinius, Nefershah, leader safety, leader death risk, faction resources, and first-campaign decision rules.",
 },
 {
 title: "System Requirements",
 href: "/games/mechanicus-ii/system-requirements",
 description:
 "Official minimum and recommended PC specs, 12 GB RAM baseline, GTX 1660 / RX 5600 XT minimum, RTX 2070 / RX 6600 XT recommended, and performance cautions.",
 },
 {
 title: "Steam Deck & Performance",
 href: "/games/mechanicus-ii/steam-deck-performance",
 description:
 "Steam Deck unsupported status, PC performance checks, controller cautions, UI readability, cloud saves, and buyer advice.",
 },
 {
 title: "Is Mechanicus II Worth It?",
 href: "/games/mechanicus-ii/is-it-worth-it",
 description:
 "Buyer-focused guidance using price, Mixed Steam reviews, faction campaigns, platforms, performance risk, and Warhammer fit.",
 },
 {
 title: "Necron Campaign Guide",
 href: "/games/mechanicus-ii/necron-guide",
 description:
 "Complete Necron campaign guide: Dominion economy, unit roster, Reanimation Protocols, Canoptek Wraith bodyguard tactics, and mission-by-mission strategy.",
 },
 {
 title: "Unit Tier List & Best Builds",
 href: "/games/mechanicus-ii/unit-tier-list",
 description:
 "S-tier to C-tier ranking for every unit across both factions. Best squad compositions, counter picks, and what to avoid in your first campaign.",
 },
 ],
};

export const romestead: GameConfig = {
 id: "romestead",
 slugPrefix: "romestead",
 hubPath: "/games/romestead",
 name: "Romestead",
 guidePublisher: "Enjoy4Game Guides",
 description:
 "A Roman-inspired survival crafting and town-building game from Beartwigs and Three Friends where players build a settlement, recruit survivors, gather resources, fight undead at night, explore dungeons, and play solo or in co-op.",
 platforms: ["PC"],
 genres: [
 "Survival Crafting",
 "Town Building",
 "Open-World Survival",
 "Action RPG",
 "Colony Sim",
 "Early Access",
 ],
 developer: "Beartwigs",
 publisher: "Three Friends",
 releaseDate: "2026-05-25",
 operatingSystem: "Windows 10",
 url: "https://store.steampowered.com/app/1805320/Romestead/",
 availability: "https://schema.org/InStock",
 heroImage: "/games/romestead/hero.webp",
 guideLinks: [
 {
 title: "Release Date & Early Access",
 href: "/games/romestead/release-date",
 description:
 "Steam date, SteamDB unlock timing, Early Access status, platform facts, demo checks, and launch-window cautions.",
 },
 {
 title: "Beginner Guide",
 href: "/games/romestead/beginner-guide",
 description:
 "First-day priorities for resources, workstations, settlement layout, survivors, night defense, exploration, and god blessings.",
 },
 {
 title: "Steam Deck & Controller",
 href: "/games/romestead/steam-deck-controller",
 description:
 "Steam Deck status, controller checks, handheld setup, UI readability, co-op comfort, and launch-window cautions.",
 },
 {
 title: "Best Profession & Class",
 href: "/games/romestead/best-profession-class",
 description:
 "How to choose an early role by food, gathering, crafting, defense, exploration, co-op group needs, and settlement goals.",
 },
 {
 title: "Tips and Tricks",
 href: "/games/romestead/tips-and-tricks",
 description:
 "Beginner tips for first-day routing, early resources, compact bases, survivors, night defense, co-op, and safe expansion.",
 },
 {
 title: "Settlement Building & Citizens",
 href: "/games/romestead/settlement-building-citizens",
 description:
 "Settlement layout, storage, workstations, food flow, citizen jobs, compact expansion, and night-defense planning.",
 },
 {
 title: "Multiplayer & Co-op",
 href: "/games/romestead/multiplayer-coop",
 description:
 "1-8 player support, online co-op, LAN co-op, group roles, host-save questions, and what is not confirmed.",
 },
 {
 title: "System Requirements",
 href: "/games/romestead/system-requirements",
 description:
 "Official minimum and recommended PC specs, Windows 10, RAM, DirectX 11, storage, Steam Deck cautions, and setup checks.",
 },
 {
 title: "Is Romestead Worth It?",
 href: "/games/romestead/is-it-worth-it",
 description:
 "Early Access buying advice for solo players, co-op groups, town-builder fans, Steam Deck users, and players waiting for 1.0.",
 },
 ],
};

export const paralives: GameConfig = {
 id: "paralives",
 slugPrefix: "paralives",
 hubPath: "/games/paralives",
 name: "Paralives",
 guidePublisher: "Enjoy4Game Guides",
 description:
 "A sandbox life simulation game from Paralives Studio about building homes, creating Parafolks, exploring an open-world town, telling family stories, and sharing mods, houses, and characters through Steam Workshop.",
 platforms: ["PC", "Mac"],
 genres: ["Simulation", "Life Simulation", "Sandbox", "Early Access"],
 developer: "Paralives Studio",
 publisher: "Paralives Studio",
 releaseDate: "2026-05-25",
 operatingSystem: "Windows 10/11, macOS Big Sur 11 or newer on Apple silicon",
 url: "https://store.steampowered.com/app/1118520/Paralives/",
 availability: "https://schema.org/InStock",
 heroImage: "/games/paralives/hero.jpg",
 guideLinks: [
 {
 title: "Early Access Guide",
 href: "/games/paralives/early-access",
 description:
 "Release status, Early Access scope, free update pledge, missing roadmap features, reviews, price checks, and launch expectations.",
 },
 {
 title: "Character Creation",
 href: "/games/paralives/character-creation",
 description:
 "Paramaker basics for height, face and body details, outfits, personalities, family setup, and first Parafolk planning.",
 },
 {
 title: "Build Mode Guide",
 href: "/games/paralives/build-mode",
 description:
 "Grid-less building, curved walls, split-level floors, object resizing, recoloring, stacking, and early house planning.",
 },
 {
 title: "Steam Deck Guide",
 href: "/games/paralives/steam-deck",
 description:
 "Steam Deck compatibility cautions, control checks, graphics settings, cloud saves, and handheld buying advice.",
 },
 {
 title: "Mac Guide",
 href: "/games/paralives/mac",
 description:
 "Official Mac support, Apple silicon requirements, M2 and M3 targets, memory, settings, and what Intel Mac users should know.",
 },
 {
 title: "Mods & CC Guide",
 href: "/games/paralives/mods-cc",
 description:
 "In-game modding interface, Steam Workshop support, houses, Parafolks, custom content expectations, and safe launch checks.",
 },
 {
 title: "Paralives vs Sims 4 vs inZOI",
 href: "/games/paralives/paralives-vs-sims-4-inzoi",
 description:
 "Which life sim fits you: Paralives customization and Early Access, The Sims 4 content depth, or inZOI realism.",
 },
 ],
};

export const minaTheHollower: GameConfig = {
 id: "mina-the-hollower",
 slugPrefix: "mina-the-hollower",
 hubPath: "/games/mina-the-hollower",
 name: "Mina the Hollower",
 guidePublisher: "Enjoy4Game Guides",
 description:
 "A gothic action-adventure game from Yacht Club Games where Mina burrows beneath hazards, whips enemies with Nightstar, uses sidearms and trinkets, and explores a dark interconnected pixel-art world.",
 platforms: [
 "PC",
 "Mac",
 "Linux",
 "PlayStation 5",
 "Xbox Series X|S",
 "Nintendo Switch",
 "Nintendo Switch 2",
 ],
 genres: ["Action", "Adventure", "Gothic", "Pixel Art"],
 developer: "Yacht Club Games",
 publisher: "Yacht Club Games",
 releaseDate: "2026-05-29",
 operatingSystem: "Windows 8 or later, macOS 11 or later, Linux",
 url: "https://store.steampowered.com/app/1875580/Mina_the_Hollower/",
 availability: "https://schema.org/InStock",
 heroImage: "/games/mina-the-hollower/hero.jpg",
 guideLinks: [
 {
 title: "Release Date & Platforms",
 href: "/games/mina-the-hollower/release-date",
 description:
 "Steam date, announced console date, supported platforms, demo status, and launch-window checks.",
 },
 {
 title: "System Requirements",
 href: "/games/mina-the-hollower/system-requirements",
 description:
 "Official Windows, macOS, and Linux minimum specs, storage, controller support, and PC setup notes.",
 },
 {
 title: "Steam Deck Guide",
 href: "/games/mina-the-hollower/steam-deck",
 description:
 "Steam Deck Verified status, controls, cloud saves, display expectations, and pre-launch checks.",
 },
 {
 title: "Beginner Guide",
 href: "/games/mina-the-hollower/beginner-guide",
 description:
 "Spoiler-light first-session advice for burrowing, whip combat, sidearms, trinkets, and exploration.",
 },
 {
 title: "Trophy Guide",
 href: "/games/mina-the-hollower/trophy-guide",
 description:
 "Steam achievements, trophy-list cautions, 100% route planning, missable checks, and safe cleanup order.",
 },
 {
 title: "Is Mina the Hollower Worth It?",
 href: "/games/mina-the-hollower/is-it-worth-it",
 description:
 "Buyer-focused guidance using developer track record, genre fit, platform support, specs, and launch timing.",
 },
 ],
};

export const firstLight007: GameConfig = {
 id: "007-first-light",
 slugPrefix: "007-first-light",
 hubPath: "/games/007-first-light",
 name: "007 First Light",
 guidePublisher: "Enjoy4Game Guides",
 description:
 "A single-player James Bond origin story from IO Interactive where a young MI6 recruit uses stealth, gadgets, driving, dialogue, and action to earn the 007 number.",
 platforms: ["PC", "PlayStation 5"],
 genres: ["Action", "Adventure", "Stealth", "Third-Person Shooter"],
 developer: "IO Interactive A/S",
 publisher: "IO Interactive A/S",
 releaseDate: "2026-05-27",
 operatingSystem: "Windows 10/11 64-bit, PlayStation 5",
 url: "https://store.steampowered.com/app/3768760/007_First_Light/",
 availability: "https://schema.org/InStock",
 heroImage: "/games/007-first-light/hero.webp",
 guideLinks: [
 {
 title: "Early Access, Release Time & Preload",
 href: "/games/007-first-light/early-access-release-time",
 description:
 "May 27 release date, 24-hour early access history, preload cautions, local unlock timing, and Australia time-zone notes.",
 },
 {
 title: "Reviews, Denuvo & Worth It",
 href: "/games/007-first-light/review-embargo",
 description:
 "Review embargo status, current review checks, Steam user review timing, Denuvo concerns, Steam Deck caution, and who should buy or wait.",
 },
 {
 title: "Mission List, Chapters & Length",
 href: "/games/007-first-light/mission-list-chapters-length",
 description:
 "Spoiler-light mission list planning, chapter cautions, time-to-beat checks, replay modifiers, collectibles, and trophy cleanup notes.",
 },
 {
 title: "System Requirements",
 href: "/games/007-first-light/system-requirements",
 description:
 "Official minimum and recommended PC specs, 80 GB SSD requirement, DLSS notes, and performance checks.",
 },
 {
 title: "Beginner Guide",
 href: "/games/007-first-light/beginner-guide",
 description:
 "Spoiler-light first-session advice for stealth, gadgets, firefights, driving, mission replay, and opening spoilers.",
 },
 ],
};

export const jumpKingQuest: GameConfig = {
 id: "jump-king-quest",
 slugPrefix: "jump-king-quest",
 hubPath: "/games/jump-king-quest",
 name: "JUMP KING QUEST",
 guidePublisher: "Enjoy4Game Guides",
 description:
 "A punishment platforming action-adventure from Nexile where players climb, fight, explore, customize a Redfin, and tackle The Heights solo or through online co-op and PvP.",
 platforms: ["PC via Steam"],
 genres: [
 "Precision Platformer",
 "Action-Adventure",
 "Souls-like",
 "Metroidvania",
 "Multiplayer",
 ],
 developer: "Nexile",
 publisher: "Nexile",
 releaseDate: "2026-05-25",
 operatingSystem: "Windows",
 url: "https://store.steampowered.com/app/2317640/JUMP_KING_QUEST/",
 availability: "https://schema.org/InStock",
 heroImage: "/games/jump-king-quest/hero.webp",
 guideLinks: [
 {
 title: "Release Date & Phantom Update",
 href: "/games/jump-king-quest/release-date-and-phantom-update",
 description:
 "Full release date, Early Access history, 1.0 Phantom Update status, Steam features, launch discount, and review signal.",
 },
 {
 title: "Beginner Guide",
 href: "/games/jump-king-quest/beginner-guide",
 description:
 "Spoiler-light first-hour guidance for climbing, combat, exploration, solo play, co-op starts, and players coming from Jump King.",
 },
 {
 title: "Multiplayer & Controller",
 href: "/games/jump-king-quest/multiplayer-controller",
 description:
 "Steam-listed single-player, online co-op, online PvP, controller support, party setup cautions, and what still needs player-side checks.",
 },
 {
 title: "Is JUMP KING QUEST Worth It?",
 href: "/games/jump-king-quest/is-it-worth-it",
 description:
 "Launch-window buying advice using Steam reviews, 1.0 timing, multiplayer focus, difficulty, Jump King 1 expectations, and community concerns.",
 },
 {
 title: "Phantom Tower Guide",
 href: "/games/jump-king-quest/phantom-tower",
 description:
 "Complete Phantom Tower walkthrough: floor layout, enemy types, boss encounters, traps, rewards, and platforming strategies for the 1.0 endgame challenge.",
 },
 {
 title: "All Bosses & Best Class Guide",
 href: "/games/jump-king-quest/bosses-classes",
 description:
 "Every boss fight broken down with attack patterns and openings. Best starting class picks, Redfin customization tips, and build recommendations.",
 },
 ],
};

export const starminer: GameConfig = {
 id: "starminer",
 slugPrefix: "starminer",
 hubPath: "/games/starminer",
 name: "Starminer",
 guidePublisher: "Enjoy4Game Guides",
 description:
 "A PC Early Access interstellar mining sandbox from CoolAndGoodGames about modular ship and station construction, asteroid mining, production chains, heat pressure, pirates, alien attacks, and real-time fleet defense.",
 platforms: ["PC via Steam"],
 genres: ["Action", "Indie", "RPG", "Simulation", "Strategy", "Early Access"],
 developer: "CoolAndGoodGames",
 publisher: "CoolAndGoodGames",
 releaseDate: "2026-05-27",
 operatingSystem: "Windows 10 32-bit or newer",
 url: "https://store.steampowered.com/app/1116050/Starminer/",
 availability: "https://schema.org/InStock",
 heroImage: "/games/starminer/hero.webp",
 guideLinks: [
 {
 title: "Release Date & Early Access",
 href: "/games/starminer/release-date",
 description:
 "Steam date, SteamDB unlock timing, Early Access status, Epic listing, language, platform, and live store checks.",
 },
 {
 title: "Beginner Guide",
 href: "/games/starminer/beginner-guide",
 description:
 "First-hour planning for Campaign, Sandbox, starter stations, power, heat, mass, mining, storage, and defenses.",
 },
 {
 title: "System Requirements",
 href: "/games/starminer/system-requirements",
 description:
 "Official minimum PC specs, missing recommended specs, low-end setup cautions, DirectX 11, storage, and Steam Deck unknowns.",
 },
 {
 title: "Game Modes",
 href: "/games/starminer/game-modes",
 description:
 "Campaign, Sandbox, and Survival explained with first-run recommendations, replay value, and Early Access caveats.",
 },
 {
 title: "Ship Building",
 href: "/games/starminer/ship-building",
 description:
 "Modular construction, mass, thrust, power, tonnage, station size, mining ships, warships, and blueprint planning.",
 },
 {
 title: "Mining & Logistics",
 href: "/games/starminer/mining-logistics",
 description:
 "Asteroid extraction, refining, production chains, automated logistics, research, link gates, profit, and maintenance.",
 },
 {
 title: "Resources: Cobalt, Thorium & Eonite",
 href: "/games/starminer/resources-cobalt-thorium-eonite",
 description:
 "Where key resources fit into mining, selling, research, reactors, repairs, storage, and early expansion planning.",
 },
 {
 title: "Heat, Aliens & Defense",
 href: "/games/starminer/heat-aliens-defense",
 description:
 "Heat signature pressure, alien detection, pirate attacks, weapon placement, power distribution, and survival defense.",
 },
 {
 title: "Multiplayer, Mods & Blueprints",
 href: "/games/starminer/multiplayer-mods-blueprints",
 description:
 "Confirmed blueprint save and recall, plus planned multiplayer, modding, and community sharing without overstating launch features.",
 },
 {
 title: "Is Starminer Worth It?",
 href: "/games/starminer/is-it-worth-it",
 description:
 "Buyer-focused Early Access guidance for builders, logistics players, space sim fans, Steam Deck users, and cautious players.",
 },
 {
 title: "Ship Blueprints & Starter Designs",
 href: "/games/starminer/ship-blueprints",
 description:
 "5 proven starter ship designs: mining ship, hauler, patrol boat, research station, and defense platform — with module lists and build order.",
 },
 {
 title: "How to Make Money Fast",
 href: "/games/starminer/make-money",
 description:
 "Best resources to sell, mission efficiency, trade routes, debt clearing, and automated income strategies for early-game credits.",
 },
 {
 title: "Tech Tree & Research Guide",
 href: "/games/starminer/tech-tree-research",
 description:
 "How research works, optimal unlock order, Research Lab setup, leveling fast, and which modules to prioritize in each tech category.",
 },
 ],
};

export const fatekeeper: GameConfig = {
 id: "fatekeeper",
 slugPrefix: "fatekeeper",
 hubPath: "/games/fatekeeper",
 name: "Fatekeeper",
 guidePublisher: "Enjoy4Game Guides",
 description:
 "A first-person fantasy action RPG from Paraglacial and THQ Nordic about sword-and-sorcery combat, relics, spells, meaningful builds, handcrafted ruins, hidden lore, and focused Early Access exploration.",
 platforms: ["PC via Steam"],
 genres: ["Action", "RPG", "First-Person RPG", "Fantasy", "Early Access"],
 developer: "Paraglacial",
 publisher: "THQ Nordic",
 releaseDate: "2026-06-02",
 operatingSystem: "Windows 10 or 11 x64",
 url: "https://store.steampowered.com/app/2186990/Fatekeeper/",
 availability: "https://schema.org/PreOrder",
 heroImage: "/games/fatekeeper/hero.webp",
 guideLinks: [
 {
 title: "Release Date & Early Access",
 href: "/games/fatekeeper/release-date",
 description:
 "Steam date, Early Access scope, Windows platform status, console caveats, and launch-window checks.",
 },
 {
 title: "Beginner Guide",
 href: "/games/fatekeeper/beginner-guide",
 description:
 "First 30 minutes, combat basics, exploration rhythm, upgrades, relic habits, and beginner mistakes.",
 },
 {
 title: "Best Builds",
 href: "/games/fatekeeper/best-builds",
 description:
 "Safe beginner build, spellblade, heavy weapon, dagger-style agility, magic focus, and build caveats.",
 },
 {
 title: "Weapons & Spells",
 href: "/games/fatekeeper/weapons-spells",
 description:
 "How to choose early weapons, when to cast spells, upgrade priorities, loadout roles, and combat checks.",
 },
 {
 title: "Relics & Upgrades",
 href: "/games/fatekeeper/relics-upgrades",
 description:
 "Relic tracking, upgrade decisions, build synergy, inventory discipline, and safe Early Access assumptions.",
 },
 {
 title: "Bosses & Enemies",
 href: "/games/fatekeeper/bosses-enemies",
 description:
 "Enemy reading, boss preparation, pattern checks, first-boss habits, and no-spoiler route cautions.",
 },
 {
 title: "Steam Deck & Controller",
 href: "/games/fatekeeper/steam-deck-controller",
 description:
 "Steam Deck status, controller comfort, UI readability, performance checks, and refund-window testing.",
 },
 {
 title: "Is Fatekeeper Worth It?",
 href: "/games/fatekeeper/is-it-worth-it",
 description:
 "Buy-or-wait advice for Early Access scope, short launch content, RPG fit, PC specs, and cautious players.",
 },
 {
 title: "World & Exploration",
 href: "/games/fatekeeper/world-exploration",
 description:
 "Handcrafted world routing, hidden lore, relic checks, backtracking, caves, forests, and ruins.",
 },
 {
 title: "Alchemy & Crafting Guide",
 href: "/games/fatekeeper/alchemy-recipes",
 description:
 "How alchemy works, ingredient combinations, best early potions, weapon vials, handbombs, and recipe discovery.",
 },
 {
 title: "How Long to Beat & Save File",
 href: "/games/fatekeeper/length",
 description:
 "Current Early Access length, full-release target hours, save file location, and completionist notes.",
 },
 {
 title: "Crashing, Black Screen & Performance Fix",
 href: "/games/fatekeeper/crashing-fix",
 description:
 "Startup crashes, black screen, low FPS, UE5 settings, driver checks, and Early Access troubleshooting.",
 },
 ],
};

export const cursemark: GameConfig = {
  id: "cursemark",
  slugPrefix: "cursemark",
  hubPath: "/games/cursemark",
  name: "Cursemark",
  guidePublisher: "Enjoy4Game Guides",
  description:
    "A dark fantasy action roguelite from CLYDE Games and Mad Mushroom about rune crafting, soulslite combat, and build experimentation across three handcrafted biomes in Early Access.",
  platforms: ["PC via Steam"],
  genres: ["Action Roguelite", "Dark Fantasy", "Soulslite", "Early Access"],
  developer: "CLYDE Games",
  publisher: "Mad Mushroom",
  releaseDate: "2026-06-08",
  operatingSystem: "Windows 10/11 64-bit",
  url: "https://store.steampowered.com/app/3219180/Cursemark/",
  availability: "https://schema.org/InStock",
  heroImage: "/games/cursemark/hero.webp",
  guideLinks: [
    {
      title: "Release Date & Early Access",
      href: "/games/cursemark/release-date",
      description:
        "June 8, 2026 launch date, Early Access scope, 3-biome content, launch discount, and platform details.",
    },
    {
      title: "Beginner Guide",
      href: "/games/cursemark/beginner-guide",
      description:
        "First runs, best starting weapon (Divine Spear), rune basics, healing, and essential survival tips for new players.",
    },
    {
      title: "Rune Crafting Guide",
      href: "/games/cursemark/rune-crafting",
      description:
        "How the rune system works: socketing, upgrading, elemental synergies, and why rarity does not always equal power.",
    },
    {
      title: "Best Builds Guide",
      href: "/games/cursemark/best-builds",
      description:
        "Top weapon, rune, and talisman synergies. Embershot builds, Voltara chains, and class recommendations for every playstyle.",
    },
    {
      title: "Boss Guide",
      href: "/games/cursemark/boss-guide",
      description:
        "Every boss strategy: attack patterns, weaknesses, recommended runes, and phase-by-phase tactics for all 3 biomes.",
    },
    {
      title: "System Requirements",
      href: "/games/cursemark/system-requirements",
      description:
        "Official minimum and recommended PC specs, Windows and Linux support, and performance expectations.",
    },
    {
      title: "Steam Deck Guide",
      href: "/games/cursemark/steam-deck",
      description:
        "Steam Deck compatibility, performance settings, control setup, and handheld tips for Cursemark.",
    },
    {
      title: "Is Cursemark Worth It?",
      href: "/games/cursemark/is-it-worth-it",
      description:
        "Early Access buying advice: $14.99 price, ~6 hours of content, solo developer, Very Positive reviews, and who should buy or wait.",
    },
  ],
};

export const spacecraft: GameConfig = {
  id: "spacecraft",
  slugPrefix: "spacecraft",
  hubPath: "/games/spacecraft",
  name: "SpaceCraft",
  guidePublisher: "Enjoy4Game Guides",
  description:
    "An online space survival MMO from Shiro Games about ship construction, asteroid mining, factory automation, interstellar trading, and corporation management in a persistent player-driven galaxy.",
  platforms: ["PC via Steam"],
  genres: ["Space Survival MMO", "Automation", "Building", "Exploration", "Early Access"],
  developer: "Shiro Games",
  publisher: "Shiro Games",
  releaseDate: "2026-06-11",
  operatingSystem: "Windows 10/11 64-bit",
  url: "https://store.steampowered.com/app/3276050/SpaceCraft/",
  availability: "https://schema.org/InStock",
  heroImage: "/games/spacecraft/hero.webp",
  guideLinks: [
    {
      title: "Release Date & Early Access",
      href: "/games/spacecraft/release-date",
      description:
        "June 11, 2026 Early Access launch: price ($29.99), launch discount, server status, platforms, and Shiro Games roadmap.",
    },
    {
      title: "Beginner Guide",
      href: "/games/spacecraft/beginner-guide",
      description:
        "First hour priorities, starter ship building, early mining, resource management, faction safety, and common beginner mistakes to avoid.",
    },
    {
      title: "Ship Building Guide",
      href: "/games/spacecraft/ship-building",
      description:
        "Modular ship design: engines, weapons, cargo, shields, heat management. Best early-game ship builds and meta designs for 2026.",
    },
    {
      title: "Mining Guide",
      href: "/games/spacecraft/mining-guide",
      description:
        "Asteroid mining, resource scanning, mining lasers, best ores to sell, refinery chains, and mining ship loadouts.",
    },
    {
      title: "Factory & Automation",
      href: "/games/spacecraft/factory-automation",
      description:
        "Production lines, conveyor logistics, assembler ratios, power management, drone automation, and industrial scaling strategy.",
    },
    {
      title: "Trading & Economy",
      href: "/games/spacecraft/trading-economy",
      description:
        "Market routes, supply and demand, best items to sell, credit farming, station trading, and interstellar trading strategy.",
    },
    {
      title: "Factions Guide",
      href: "/games/spacecraft/factions-guide",
      description:
        "All faction reputations, alliance benefits, war mechanics, faction-specific ships, and which faction to join first.",
    },
    {
      title: "Combat Guide",
      href: "/games/spacecraft/combat-guide",
      description:
        "Ship-to-ship combat, weapon types (kinetic/thermal/ion), shield management, PvP tactics, and pirate defense strategies.",
    },
    {
      title: "Multiplayer & Co-op",
      href: "/games/spacecraft/multiplayer-server",
      description:
        "How to find servers, play with friends, join Corporations (guilds), PvP zones, safe sectors, and fleet operations.",
    },
    {
      title: "Base Building Guide",
      href: "/games/spacecraft/base-building",
      description:
        "Space station construction, defense turrets, storage depots, docking bays, and expansion strategy in hostile sectors.",
    },
    {
      title: "Tech Tree Guide",
      href: "/games/spacecraft/tech-tree",
      description:
        "Optimal research order, best early unlocks, blueprint acquisition, technology specialization, and Tech Point farming.",
    },
    {
      title: "System Requirements",
      href: "/games/spacecraft/system-requirements",
      description:
        "Minimum and recommended PC specs, performance optimization, FPS settings, and hardware compatibility.",
    },
    {
      title: "Steam Deck Guide",
      href: "/games/spacecraft/steam-deck",
      description:
        "Steam Deck compatibility, performance settings, control mapping, battery expectations, and MMO handheld viability.",
    },
    {
      title: "Crashing & Performance Fix",
      href: "/games/spacecraft/crashing-fix",
      description:
        "Startup crashes, server lag, FPS drops, driver fixes, and common Early Access troubleshooting for SpaceCraft.",
    },
    {
      title: "Is SpaceCraft Worth It?",
      href: "/games/spacecraft/is-it-worth-it",
      description:
        "Early Access buying advice: $29.99 price, Shiro Games track record, Mixed Steam reviews, content scope, and buy or wait verdict.",
    },
    {
      title: "Tips & Tricks",
      href: "/games/spacecraft/tips-and-tricks",
      description:
        "25 things to know before starting: hidden mechanics, power allocation tricks, efficient shortcuts, and advanced strategies.",
    },
    {
      title: "All Ships Database",
      href: "/games/spacecraft/all-ships",
      description:
        "Complete ship list with stats, unlock requirements, tier rankings (S to D), and recommended picks for mining, combat, trading, and exploration.",
    },
  ],
};

export const gateGuardSimulator: GameConfig = {
 id: "gate-guard-simulator",
 slugPrefix: "gate-guard-simulator",
 hubPath: "/games/gate-guard-simulator",
 name: "Gate Guard Simulator",
 guidePublisher: "Enjoy4Game Guides",
 description:
 "A medieval gate inspection simulation game from Redox Interactive and Forklift Interactive where players inspect seals, expose smugglers, reveal witches, and decide who enters the castle.",
 platforms: ["PC via Steam"],
 genres: ["Casual", "Indie", "Simulation", "Inspection Sim"],
 developer: "Redox Interactive",
 publisher: "Forklift Interactive",
 releaseDate: "2026",
 operatingSystem: "Windows 10 64-bit",
 url: "https://store.steampowered.com/app/4111570/Gate_Guard_Simulator/",
 availability: "https://schema.org/PreOrder",
 heroImage: "/games/gate-guard-simulator/screenshot-1.jpg",
 guideLinks: [
 {
 title: "Release Date, Playtest & Platforms",
 href: "/games/gate-guard-simulator",
 description:
 "Steam 2026 status, Playtest request, PC specs, platform caveats, gameplay facts, media signals, and whether it is worth covering before launch.",
 },
 ],
};

export const enginefall: GameConfig = {
 id: "enginefall",
 slugPrefix: "enginefall",
 hubPath: "/games/enginefall",
 name: "Enginefall",
 guidePublisher: "Enjoy4Game Guides",
 description:
 "A player-driven crafting shooter from Red Rover Interactive set on colossal post-apocalyptic megatrains, where Freerailers raid Titan Trains, craft gear, extract loot, and upgrade a Dagger shuttle home base.",
 platforms: ["PC via Steam"],
 genres: [
 "Action",
 "Adventure",
 "Indie",
 "Massively Multiplayer",
 "Crafting Shooter",
 "Extraction Shooter",
 ],
 developer: "Red Rover Interactive",
 publisher: "Red Rover Interactive",
 releaseDate: "2026",
 operatingSystem: "Windows 10 64-bit",
 url: "https://store.steampowered.com/app/2437390/Enginefall/",
 availability: "https://schema.org/PreOrder",
 heroImage: "/games/enginefall/hero.webp",
 guideLinks: [
 {
 title: "Release Date, Gameplay & Platforms",
 href: "/games/enginefall",
 description:
 "Steam status, official site, 2026 release window, Titan Trains, Dagger shuttle, Conductor role, PS5 and Xbox caveats, and guide map.",
 },
 {
 title: "Playtest, Demo, Key & Discord",
 href: "/games/enginefall-playtest",
 description:
 "June 2026 playtest and demo windows, Steam access, key questions, Discord, server-password searches, player count, and review caveats.",
 },
 {
 title: "Beginner Guide",
 href: "/games/enginefall-beginner-guide",
 description:
 "How to play your first run, what to loot, when to craft, how to extract, and how to survive PvP pressure.",
 },
 {
 title: "Conductor Guide",
 href: "/games/enginefall-conductor-guide",
 description:
 "C00 route, Breacher use, Control Room registration, Conductor powers, Fuel Cores, keycard printing, and extraction planning.",
 },
 {
 title: "Dagger Shuttle Guide",
 href: "/games/enginefall-dagger-guide",
 description:
 "Dagger shuttle role, personal rail base, fuel, storage, schematics, Dagger vs Dagger pressure, and raid preparation.",
 }

 ],
};

export const voidlingBound: GameConfig = {
 id: "voidling-bound",
 slugPrefix: "voidling-bound",
 hubPath: "/games/voidling-bound",
 name: "Voidling Bound",
 guidePublisher: "Enjoy4Game Guides",
 description:
 "A creature-collecting action RPG from Hatchery Games where players hatch, train, splice, evolve, and battle Voidlings across species, elements, rarity tiers, abilities, perks, breeding systems, and missions.",
 platforms: ["PC via Steam"],
 genres: ["Action", "Adventure", "RPG", "Creature Collector"],
 developer: "Hatchery Games",
 publisher: "Hatchery Games",
 releaseDate: "2026-06-09",
 operatingSystem: "Windows",
 url: "https://store.steampowered.com/app/2004680/Voidling_Bound/",
 availability: "https://schema.org/InStock",
 heroImage: "/games/voidling-bound/hero.webp",
 guideLinks: [
 {
 title: "Voidling Bound Guide Hub",
 href: "/games/voidling-bound",
 description:
 "Release status, Steam facts, platform caveats, database links, beginner path, evolutions, breeding, elements, and attributes.",
 },
 {
 title: "All Voidlings Database",
 href: "/games/voidling-bound/database",
 description:
 "Search and filter all wiki-derived Voidlings by species, rarity, element, ability slot, and local image availability.",
 },
 {
 title: "All Voidlings List",
 href: "/games/voidling-bound/voidlings",
 description:
 "Crawlable species-by-species list of Voidling evolutions with rarity, element, ability notes, and detail pages.",
 },
 {
 title: "Beginner Guide",
 href: "/games/voidling-bound/beginner-guide",
 description:
 "First-session route for hatching, training, missions, species choice, early fights, and when to use the database.",
 },
 {
 title: "Evolution Guide",
 href: "/games/voidling-bound/evolution-guide",
 description:
 "How to read evolution trees, rarity tiers, element branches, ability changes, and mutation endpoints without guessing.",
 },
 {
 title: "Breeding Guide",
 href: "/games/voidling-bound/breeding-guide",
 description:
 "Breeding, eggs, golden eggs, splicing, mutagens, and how to track lineage decisions using wiki-confirmed systems.",
 },
 {
 title: "Elements Guide",
 href: "/games/voidling-bound/elements-guide",
 description:
 "Organic, Pyro, Cryo, Plasma, Cyber, Neutral, status-effect reading, and how element searches connect to evolutions.",
 },
 {
 title: "Attributes Guide",
 href: "/games/voidling-bound/attributes-guide",
 description:
 "Agility, strength, vitality, level, nature, perks, modules, and what stats matter when comparing Voidlings.",
 },
 {
 title: "Controls Guide",
 href: "/games/voidling-bound/controls",
 description:
 "Default keyboard and controller controls, dodge mechanics, ability combos, Steam Deck setup, and how to remap keybinds.",
 },
 ],
};

export const lunaAbyss: GameConfig = {
 id: "luna-abyss",
 slugPrefix: "luna-abyss",
 hubPath: "/games/luna-abyss",
 name: "Luna Abyss",
 guidePublisher: "Enjoy4Game Guides",
 description:
 "A single-player story-driven action-adventure FPS from Kwalee Labs and Kwalee set beneath the surface of the mimic moon Luna, combining bullet-hell combat, first-person platforming, exploration, and a surreal sci-fi mystery.",
 platforms: ["PC", "PlayStation 5", "Xbox Series X|S", "Xbox Cloud Gaming"],
 genres: ["Action", "Adventure", "Indie", "First-Person Shooter", "Sci-Fi"],
 developer: "Kwalee Labs",
 publisher: "Kwalee",
 releaseDate: "2026-05-21",
 operatingSystem: "Windows 11 64-bit, PlayStation 5, Xbox Series X|S",
 url: "https://store.steampowered.com/app/1933000/Luna_Abyss/",
 availability: "https://schema.org/InStock",
 heroImage: "/games/luna-abyss/hero.jpg",
 guideLinks: [
 {
 title: "Game Pass, Release Date & Platforms",
 href: "/games/luna-abyss/release-date-game-pass",
 description:
 "May 21 launch status, Game Pass, Xbox Cloud, Play Anywhere, Steam price checks, PS5, Xbox, and PC availability.",
 },
 {
 title: "Review & Is It Worth It?",
 href: "/games/luna-abyss/is-it-worth-it",
 description:
 "Buying advice using Steam review signal, Metacritic context, Game Pass value, platform fit, and wait-or-play reasons.",
 },
 {
 title: "System Requirements",
 href: "/games/luna-abyss/system-requirements",
 description:
 "Official minimum and recommended PC specs, GTX 1060 / RX 580 baseline, GTX 1660 / RX 590 recommendation, and setup checks.",
 },
 {
 title: "Steam Deck Settings",
 href: "/games/luna-abyss/steam-deck-settings",
 description:
 "Steam Deck setup, 30 FPS target, control checks, battery expectations, and reported handheld performance caveats.",
 },
 {
 title: "Beginner Guide",
 href: "/games/luna-abyss/beginner-guide",
 description:
 "Spoiler-light first-hour route for platforming, dash timing, bullet-hell combat, accessibility settings, and exploration.",
 },
 {
 title: "Walkthrough",
 href: "/games/luna-abyss/walkthrough",
 description:
 "Spoiler-light progression plan for Greymont, the Abyss, combat arenas, movement gates, secrets, and boss prep.",
 },
 {
 title: "Achievements & Trophy Guide",
 href: "/games/luna-abyss/achievements-trophy-guide",
 description:
 "45 Steam achievements, PS5 trophy cleanup cautions, missable-style route planning, secrets, combat, and completion tracking.",
 },
 {
 title: "Ending Explained",
 href: "/games/luna-abyss/ending-explained",
 description:
 "Spoiler-aware ending interpretation for Fawkes, Aylin, Greymont, the mimic moon, the Abyss, and unresolved mystery threads.",
 },
 {
 title: "Crashing & Black Screen Fix",
 href: "/games/luna-abyss/crashing-fix",
 description:
 "Startup crashes, black screen, low FPS, stutter, controller issues, Steam file checks, and Game Pass install triage.",
 },
 ],
};

export const sellLemons: GameConfig = {
 id: "sell-lemons",
 slugPrefix: "sell-lemons",
 hubPath: "/games/sell-lemons",
 name: "Sell Lemons",
 guidePublisher: "Enjoy4Game Guides",
 description:
 "A Roblox idle tycoon game from BloxByte Games where players sell lemons, automate income, unlock new activities, solve sewer routes, collect keys, and chase badges.",
 platforms: ["Roblox"],
 genres: ["Idle Tycoon", "Roblox", "Simulation", "Progression", "Casual"],
 developer: "BloxByte Games",
 publisher: "BloxByte Games",
 releaseDate: "2026-05-16",
 operatingSystem: "Roblox",
 url: "https://www.roblox.com/games/79268393072444/Sell-Lemons",
 availability: "https://schema.org/InStock",
 heroImage: "/games/sell-lemons/icon.png",
 guideLinks: [
 {
 title: "Sell Lemons Guide Hub",
 href: "/games/sell-lemons",
 description:
 "Beginner route, money fast priorities, Sewer Key, UFO Key, badges, upgrades, and codes status.",
 },
 {
 title: "Beginner Guide + Money Fast",
 href: "/games/sell-lemons/beginner-guide",
 description:
 "First route, manager upgrades, newest activity priority, events, and common early mistakes.",
 },
 {
 title: "Sewer Key + Cosmic Farmer",
 href: "/games/sell-lemons/sewer-key-cosmic-farmer",
 description:
 "Colored lever sequence, Sewer Key route, Sewer Gate unlock, and Cosmic Farmer badge path.",
 },
 {
 title: "UFO Key + Good Samaritan",
 href: "/games/sell-lemons/ufo-key-good-samaritan",
 description:
 "UFO Key lever order, alien room route, Good Samaritan badge path, and stuck checks.",
 },
 ],
};

export const fearsToFathom: GameConfig = {
 id: "fears-to-fathom",
 slugPrefix: "fears-to-fathom",
 hubPath: "/games/fears-to-fathom",
 name: "Fears to Fathom: Scratch Creek",
 guidePublisher: "Enjoy4Game Guides",
 description:
 "Fears to Fathom: Scratch Creek is an episodic co-op psychological horror game from Rayll Studios. A young couple stranded in a creepy town must survive together. Co-op only — no single player.",
 platforms: ["PC via Steam"],
 genres: ["Adventure", "Horror", "Casual", "Walking Simulator", "Psychological Horror"],
 developer: "Rayll Studios",
 publisher: "Rayll Studios",
 releaseDate: "2026-06-10",
 operatingSystem: "Windows",
 url: "https://store.steampowered.com/app/4121170/Fears_to_Fathom__Scratch_Creek/",
 availability: "https://schema.org/InStock",
 heroImage: "/games/fears-to-fathom/hero.webp",
 guideLinks: [
 {
 title: "Fears to Fathom Hub",
 href: "/games/fears-to-fathom",
 description:
 "Co-op only horror game from Rayll Studios. Find walkthrough, co-op guide, endings, achievements, character guide, and buying advice for Scratch Creek.",
 },
 {
 title: "Can I Play Solo? + Co-op Guide",
 href: "/games/fears-to-fathom/co-op-guide",
 description:
 "Fears to Fathom: Scratch Creek is co-op only with no single player mode. Learn how co-op matchmaking works, how to find a partner, and how to play together.",
 },
 {
 title: "Full Walkthrough",
 href: "/games/fears-to-fathom/walkthrough",
 description:
 "Complete walkthrough for Fears to Fathom: Scratch Creek. Chapter-by-chapter guide covering every puzzle, key decision, final chase escape, and all endings.",
 },
 {
 title: "All Endings Guide",
 href: "/games/fears-to-fathom/all-endings",
 description:
 "Every ending in Fears to Fathom: Scratch Creek — True Ending, Interstate early ending, Backroads alternate ending, 3:33 AM deaths, and Bill's House finale deaths.",
 },
 {
 title: "All Achievements",
 href: "/games/fears-to-fathom/achievements",
 description:
 "Full achievement list for Fears to Fathom: Scratch Creek. All 10 unlock conditions, secret achievements, missable trophies, and 100% completion roadmap.",
 },
 {
 title: "Marcus vs Tessa Guide",
 href: "/games/fears-to-fathom/marcus-vs-tessa",
 description:
 "Which character should you pick in Scratch Creek? Compare Marcus and Tessa: scare levels, unique solo scenes, responsibilities, and who should play each role.",
 },
 {
 title: "How Long Is It?",
 href: "/games/fears-to-fathom/length",
 description:
 "Fears to Fathom: Scratch Creek takes 2.5-4 hours. Full length breakdown by playstyle and chapter, comparison to other Fears to Fathom episodes, and 100% completion time.",
 },
 {
 title: "Is It Worth It?",
 href: "/games/fears-to-fathom/is-it-worth-it",
 description:
 "Is Fears to Fathom: Scratch Creek worth buying? Co-op only analysis, price, length, horror level, Steam review summary, and who should play versus wait.",
 },
 {
 title: "Story & Ending Explained",
 href: "/games/fears-to-fathom/story-explained",
 description:
 "Full story breakdown of Scratch Creek: the cult, Miss Julia, the church basement, C. Hawkins (Ironbark Lookout) connection, and what every ending means for Marcus and Tessa.",
 },
 {
 title: "Troubleshooting & Bug Fixes",
 href: "/games/fears-to-fathom/troubleshooting",
 description:
 "Fix dark screen, VHS filter, matchmaking errors, stuck at final chase, crashes, voice chat issues, and achievement bugs in Fears to Fathom: Scratch Creek.",
 },
 ],
};

export const growAGarden2: GameConfig = {
 id: "grow-a-garden-2",
 slugPrefix: "grow-a-garden-2",
 hubPath: "/games/grow-a-garden-2",
 name: "Grow a Garden 2",
 guidePublisher: "Enjoy4Game Guides",
 description:
  "Grow a Garden 2 is a Roblox farming simulator and idle tycoon from Jandel. Plant seeds, harvest crops, collect pets with unique abilities, join guilds, and steal from rivals at night.",
 platforms: ["Roblox"],
 genres: ["Farming Simulator", "Idle Tycoon", "Roblox", "Casual", "Multiplayer"],
 developer: "Jandel (The Garden Game)",
 publisher: "The Garden Game",
 releaseDate: "2026-06-12",
 operatingSystem: "Roblox (PC, Mobile, Xbox)",
 url: "https://www.roblox.com/games/97598239454123/Grow-a-Garden-2",
 availability: "https://schema.org/InStock",
 heroImage: "/games/grow-a-garden-2/icon.webp",
 guideLinks: [
  {
   title: "All Pets Guide",
   href: "/games/grow-a-garden-2/pets",
   description:
    "Complete database of all 12 pets: prices, abilities, rarities, tier rankings, and which pets to buy first.",
  },
  {
   title: "Wheelbarrow Guide",
   href: "/games/grow-a-garden-2/wheelbarrow",
   description:
    "What does the Wheelbarrow do? How to get it (500K Sheckles / 129 Robux), and whether it's worth buying.",
  },
  {
   title: "All Gears Guide",
   href: "/games/grow-a-garden-2/gears",
   description:
    "Every gear: Watering Cans, Sprinklers, Mushrooms, Gnome, Flashbang, Basic Pot, Teleporter, Trowel, Lantern, and more.",
  },
  {
   title: "Seeds & Plants Guide",
   href: "/games/grow-a-garden-2/seeds",
   description:
    "All seeds ranked: Carrot to Dragon's Breath. Prices, harvest types, Acorn drop rate, Venus Fly Trap defense.",
  },
  {
   title: "Codes (Updated Daily)",
   href: "/games/grow-a-garden-2/codes",
   description:
    "All active Grow a Garden 2 codes. TEAMGREENBEAN and more. How to redeem, where new codes drop, expired codes.",
  },
  {
   title: "Guilds Guide",
   href: "/games/grow-a-garden-2/guild",
   description:
    "How to create and join guilds. Rewards, roles (Owner/Elder/Member), invite system, weekly competitions.",
  },
  {
   title: "Seed Packs Guide",
   href: "/games/grow-a-garden-2/seed-packs",
   description:
    "Ghost Pepper Seed Pack: 5 exclusive seeds with drop odds. Robux costs, roll amounts, and is it worth it?",
  },
  {
   title: "Night Stealing Guide",
   href: "/games/grow-a-garden-2/night-stealing",
   description:
    "How night stealing works in Grow a Garden 2: day/night cycle, best stealing strategies, how to defend with pets and gears, and risk vs reward by garden type.",
  },
  {
   title: "Beginner Guide",
   href: "/games/grow-a-garden-2/beginner-guide",
   description:
    "First hour walkthrough for new players: how to start, best first seeds, spending priority, how to make Sheckles fast, which pets to buy first, and common beginner mistakes.",
  },
 ],
};

export const taskBarHero: GameConfig = {
 id: "task-bar-hero",
 slugPrefix: "task-bar-hero",
 hubPath: "/games/task-bar-hero",
 name: "TBH: Task Bar Hero",
 guidePublisher: "Enjoy4Game Guides",
 description:
  "TBH: Task Bar Hero is a free single-player idle RPG on Steam where players push stages with heroes, gear, runes, Cube upgrades, boxes, drops, and Steam Market-linked items.",
 platforms: ["PC via Steam"],
 genres: ["Idle RPG", "RPG", "Loot", "Incremental", "Single-player"],
 developer: "Nugem Studio / Tesseract Studio",
 publisher: "Nugem Studio / Tesseract Studio",
 releaseDate: "2026-05-27",
 operatingSystem: "Windows",
 url: "https://store.steampowered.com/app/3678970/TBH_Task_Bar_Hero/",
 availability: "https://schema.org/InStock",
 heroImage: "/games/task-bar-hero/og-image.jpg",
 guideLinks: [
  {
   title: "Beginner Guide",
   href: "/games/task-bar-hero/beginner-guide",
   description:
    "First-hour route for heroes, upgrades, boxes, gold, EXP, third-slot planning, and early mistakes to avoid.",
  },
  {
   title: "Cube Guide",
   href: "/games/task-bar-hero/cube-guide",
   description:
    "How Cube leveling, synthesis, crafting, alchemy, materials, and common waste cases work in TBH.",
  },
  {
   title: "Act 2-10 and Act 3-10 Guide",
   href: "/games/task-bar-hero/act-2-10-act-3-10-guide",
   description:
    "Boss-wall checklist for team shape, gear, skills, Cube progress, damage pressure, and recovery when 2-10 or 3-10 blocks progression.",
  },
  {
   title: "Heroes and Builds",
   href: "/games/task-bar-hero/heroes-builds",
   description:
    "Knight, Ranger, Sorcerer, Priest, Hunter, and Slayer roles, team templates, stat priorities, and build limits.",
  },
 ],
};

export const deltarune: GameConfig = {
 id: "deltarune",
 slugPrefix: "deltarune",
 hubPath: "/games/deltarune",
 name: "DELTARUNE",
 guidePublisher: "Enjoy4Game Guides",
 description:
  "DELTARUNE is Toby Fox's chapter-based RPG set in a parallel story to UNDERTALE, with bullet-dodging battles, sparing, ACT choices, hidden bosses, and chapters released over time.",
 platforms: [
  "PC",
  "Mac",
  "Nintendo Switch",
  "Nintendo Switch 2",
  "PlayStation 4",
  "PlayStation 5",
 ],
 genres: ["RPG", "Story Rich", "Bullet Hell", "Pixel Graphics", "Episodic"],
 developer: "Toby Fox",
 publisher: "Toby Fox",
 releaseDate: "2025-06-04",
 operatingSystem: "Windows, macOS, Nintendo Switch, Nintendo Switch 2, PlayStation 4, PlayStation 5",
 url: "https://store.steampowered.com/app/1671210/DELTARUNE/",
 availability: "https://schema.org/InStock",
 heroImage:
  "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1671210/capsule_616x353.jpg",
 guideLinks: [
  {
   title: "DELTARUNE Guide Hub",
   href: "/games/deltarune",
   description:
    "Current chapter status, platforms, official links, save import notes, and the best guide to read first.",
  },
  {
   title: "Beginner Guide",
   href: "/games/deltarune/beginner-guide",
   description:
    "Spoiler-light first-run route for ACT, Spare, TP, equipment, saves, chapter order, and mistakes to avoid.",
  },
  {
   title: "Chapter 5 Walkthrough & Secrets",
   href: "/games/deltarune/chapter-5-walkthrough-secrets",
   description:
    "Chapter 5 route, checkpoints, secret checklist, Pink Coins, Mystery Key, secret boss, Egg, missables, weird route notes, and stuck fixes.",
  },
 ],
};

export const palworld: GameConfig = {
  id: "palworld",
  slugPrefix: "palworld",
  hubPath: "/games/palworld",
  name: "Palworld",
  guidePublisher: "Enjoy4Game Guides",
  description:
    "Palworld is Pocketpair's open-world creature-collector survival game where players catch, breed, and work alongside 'Pals' to fight, farm, build, and automate. Version 1.0 leaves Early Access on July 10, 2026 with the World Tree endgame region, a second island, Genetic Recombination breeding, and Server Clustering.",
  platforms: ["PC via Steam", "PlayStation 5", "Xbox Series X|S / Xbox One", "iOS/Android (mobile)"],
  genres: ["Creature Collector", "Survival", "Open World", "Multiplayer", "Automation", "Action"],
  developer: "Pocketpair",
  publisher: "Pocketpair",
  releaseDate: "2024-01-19",
  operatingSystem: "Windows 10 64-bit",
  url: "https://store.steampowered.com/app/1623730/Palworld/",
  availability: "https://schema.org/InStock",
  heroImage: "/games/palworld/hero.webp",
  guideLinks: [
    {
      title: "Palworld 1.0 Release Date & Time",
      href: "/games/palworld/1-0-release-date",
      description:
        "July 10, 2026 full release: exact time by region, platforms, price, and what changes when Early Access ends.",
    },
    {
      title: "System Requirements",
      href: "/games/palworld/system-requirements",
      description:
        "Official minimum and recommended PC specs, mobile/console support, and whether your rig can run the bigger 1.0 map.",
    },
    {
      title: "Does Palworld 1.0 Wipe Your Save?",
      href: "/games/palworld/save-data-1-0",
      description:
        "Whether existing worlds and dedicated servers carry over to 1.0, and why Pocketpair still recommends a fresh start.",
    },
    {
      title: "Everything New in Palworld 1.0",
      href: "/games/palworld/1-0-everything-new",
      description:
        "Full rundown of confirmed 1.0 additions: World Tree, Sky Islands, Wing Pack, PvP, Paint Mode, new Pals, Tower Boss rework, and Genetic Recombination breeding.",
    },
    {
      title: "World Tree & Sky Islands Preview",
      href: "/games/palworld/world-tree-sky-islands",
      description:
        "Deep dive on Palworld's new endgame region — the World Tree's story role, the Sky Islands, and what is confirmed vs. still unofficial.",
    },
  ],
};

