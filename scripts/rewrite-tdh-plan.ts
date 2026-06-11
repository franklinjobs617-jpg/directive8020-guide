// TDH Rewrite Plan - Phase 1
// For each game, rewrite title + description to focus on specific search intent.
// Hub pages: only rewrite description (TDH locked)
// Subpages: rewrite title + description

// FORMAT:
// Old title -> New title
// Old description -> New description

const REWRITE_PLAN = {
  romestead: {
    hub: {
      desc: 'Find Romestead guides for multiplayer co-op, best profession, beginner tips, settlement building, system requirements, Steam Deck, and early access buying advice for 2026.'
    },
    'beginner-guide': {
      title: 'Romestead Beginner Guide: Best Profession, First Day Survival & Tips 2026',
      desc: 'Start Romestead with the best profession, survive your first day, gather resources, build a base, assign jobs, and prepare night defense. Complete beginner guide for 2026 Early Access.'
    },
    'best-profession-class': {
      title: 'Romestead Best Profession: All 8 Classes Compared & Which to Pick First',
      desc: 'Compare all 8 Romestead starting professions: Scholar, Legionary, Gladiator, and more. Find which class fits your playstyle, co-op role, and first-day strategy.'
    },
    'is-it-worth-it': {
      desc: 'Is Romestead worth buying in 2026 Early Access? Compare co-op value, Steam Deck risk, demo availability, and 1.0 expectations before you buy.'
    },
    'multiplayer-coop': {
      title: 'Romestead Multiplayer Guide: 1-8 Player Co-op, LAN, Split Screen & Crossplay',
      desc: 'Learn how Romestead multiplayer works: 1-8 player online co-op, LAN, split-screen status, crossplay support, host saves, and group role assignments.'
    },
    'settlement-building-citizens': {
      title: 'Romestead Settlement Building Guide: Base Layout, Citizens & Night Defense',
      desc: 'Build and manage your Romestead settlement: compact base layout, workstations, citizen jobs, food automation, and night defense strategies.'
    },
    'tips-and-tricks': {
      title: 'Romestead Tips and Tricks: First Day Route, Resources, Base & Night Defense 2026',
      desc: 'Romestead tips and tricks for first-day routing, early resources, compact base layouts, survivors, co-op jobs, profession choice, and night defense.'
    }
  },
  'mina-the-hollower': {
    hub: {
      desc: 'Find Mina the Hollower guides for beginner tips, trinkets, bosses, trophy guide, system requirements, Steam Deck, release date, and buying advice for 2026.'
    },
    'beginner-guide': {
      desc: 'Spoiler-light Mina the Hollower beginner guide for first sessions: burrowing, Nightstar whip combat, sidearms, trinkets, secrets, bosses, saves, and exploration habits.'
    },
    'trophy-guide': {
      title: 'Mina the Hollower Trophy Guide: All 60 Trinkets, Full Achievement Checklist & 100% Roadmap',
      desc: 'Complete Mina the Hollower trophy and achievement guide. All 60 trinket locations, secret bosses, sidearm unlocks, Steam achievements, and 100% completion roadmap.'
    },
    'release-date': {
      desc: 'Mina the Hollower released May 29, 2026 on Steam. Check PC, Mac, Linux, PS5, Xbox, Switch, and Switch 2 platform status and unlock timing.'
    }
  },
  starminer: {
    hub: {
      desc: 'Find Starminer guides for beginner tips, ship building, mining, resources, tech tree, game modes, blueprints, and how to make money fast in 2026 Early Access.'
    },
    'make-money': {
      title: 'Starminer How to Make Money Fast: Credits, Trade Routes & Debt Clearing 2026',
      desc: 'Earn credits fast in Starminer. Best resources to sell (Cobalt 72/unit, Thorium 360/unit), mission efficiency, automated trade routes, debt clearing, and passive income.'
    },
    'beginner-guide': {
      desc: 'Starminer beginner guide for the first hour: Campaign start, starter station, power, heat, mass, mining, storage, blueprints, defenses, and what to avoid in Early Access.'
    }
  },
  'project-mist': {
    hub: {
      desc: 'Find Project Mist guides for beginner tips, boss fights, train base building, weapons crafting, co-op, system requirements, crashing fixes, and Early Access buying advice.'
    },
    'all-bosses': {
      title: 'Project Mist Bosses Guide: Chomper, Spider & Facility Boss Fight Strategies',
      desc: 'Complete Project Mist boss guide. Prep, weak points, Gravity Gun use, co-op roles, ammo planning, and safe retries for every Early Access boss.'
    }
  },
  'thick-as-thieves': {
    hub: {
      desc: 'Find Thick As Thieves guides for beginner stealth, gear loadouts, contracts, co-op, system requirements, roadmaps, and buying advice for the 2026 launch.'
    },
    'beginner-stealth-guide': {
      title: 'Thick As Thieves Beginner Stealth Guide: First Heist Tips, Routes & Gadgets',
      desc: 'Thick As Thieves beginner stealth guide for first heists: route planning, gadgets, co-op roles, alert recovery, and launch-day mistakes to avoid.'
    },
    'gear-loadouts': {
      title: 'Thick As Thieves Gear Guide: Best Loadouts & First Unlock Priorities',
      desc: 'Thick As Thieves gear guide for launch day: all 6 gear pieces ranked, loadout roles, information tools, recovery tools, co-op support, and unlock order.'
    }
  },
  'luna-abyss': {
    hub: {
      desc: 'Find Luna Abyss guides for beginner tips, walkthrough, achievements, weapon builds, Game Pass, system requirements, Steam Deck settings, and crashing fixes.'
    },
    'beginner-guide': {
      title: 'Luna Abyss Beginner Guide: First Hour Tips, Weapon Builds & Color Shield Strategies',
      desc: 'Spoiler-light Luna Abyss beginner guide for weapon builds, color-coded shield strategies, dash timing, bullet-hell combat, and first secrets.'
    }
  },
  'zero-parades': {
    hub: {
      desc: 'Find ZERO PARADES guides for beginner tips, best build, walkthrough, game length, system requirements, Steam Deck, controller support, and buying advice.'
    },
    'best-build': {
      title: 'ZERO PARADES Best Build Guide: Skills, Archetypes & First-Run Strategy 2026',
      desc: 'Best ZERO PARADES builds compared: four archetypes with specific skill picks, Conditioning tips, and first-playthrough strategy for Hershel Wilk.'
    }
  },
  '007-first-light': {
    hub: {
      desc: 'Find 007 First Light guides for beginner tips, weapons, system requirements, mission list, reviews, release time, and buying advice for the 2026 launch.'
    },
    'beginner-guide': {
      title: '007 First Light Beginner Guide: First Mission, Stealth, Gadgets & Weapon Tips',
      desc: 'Spoiler-light 007 First Light beginner guide: stealth, gadgets, bluffing, firefights, driving, weapons, mission replay, and first-hour priorities.'
    }
  },
  'jump-king-quest': {
    hub: {
      desc: 'Find JUMP KING QUEST guides for beginner tips, Phantom Tower, bosses, best class, multiplayer, controller support, release date, and buying advice.'
    },
    'bosses-classes': {
      title: 'JUMP KING QUEST All Bosses & Best Class Guide: Attack Patterns & Builds',
      desc: 'Every JUMP KING QUEST boss fight guide with attack patterns, openings, Redfin customization tips, and best starting class recommendations.'
    },
    'phantom-tower': {
      title: 'JUMP KING QUEST Phantom Tower Guide: All Floors, Enemies, Bosses & Rewards',
      desc: 'Complete Phantom Tower guide for JUMP KING QUEST 1.0. Floor layouts, enemy types, boss fights, trap strategies, co-op tips, and Redfin preparation.'
    }
  },
  'mechanicus-ii': {
    hub: {
      desc: 'Find Mechanicus II guides for beginner tips, best units, factions, walkthrough, unit tier list, system requirements, Steam Deck, and buying advice.'
    }
  }
};
