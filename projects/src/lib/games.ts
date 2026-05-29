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
  platforms: ["PC", "PlayStation 5"],
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
  availability: "https://schema.org/PreOrder",
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
  availability: "https://schema.org/PreOrder",
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
  availability: "https://schema.org/PreOrder",
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
  availability: "https://schema.org/PreOrder",
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
  availability: "https://schema.org/PreOrder",
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
