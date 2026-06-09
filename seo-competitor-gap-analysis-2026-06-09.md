# enjoy4game GSC + Competitor Content Gap Analysis

Date: 2026-06-09

## Direct conclusion

This site should not add pages for every GSC query. That logic is wrong because it creates thin pages and duplicate intent.

The correct rule is:

1. Update an existing page when the query is a synonym or sub-question of the current URL.
2. Create a new page when competitors rank with a dedicated page and the current site only answers it as a subsection.
3. Defer a page when neither GSC nor competitor structure shows independent intent.

## Highest ROI new pages

| Priority | Game | New page | Why this is worth doing | Existing coverage problem |
|---:|---|---|---|---|
| 1 | Romestead | `/games/romestead/settlement-building-citizens` | Competitor wikis are winning with settlement, citizens, storage, food, jobs, automation, and build-order content. | Current site has beginner/tips/profession/multiplayer, but no dedicated town-management page. |
| 2 | Fatekeeper | `/games/fatekeeper/first-boss-guide` | Reddit and competitors show high pain around first boss difficulty, potions, skill points, stamina, melee vs alchemy, and reset risk. | Current boss page is broad; this deserves a specific problem-solving page. |
| 3 | Mechanicus II | `/games/mechanicus-ii/leaders-guide` | GSC has `mechanicus 2 leaders` and `necron leaders`; Reddit demand focuses on leaders, leader death, unit pools, and faction-specific value. | Current factions/unit pages mention leaders, but do not own the leader intent. |
| 4 | Starminer | `/games/starminer/resources-cobalt-thorium-eonite` | GSC already has `where to get cobalt`; competitors cover resource reference tables and repair materials. | Mining/logistics is too broad for resource-location intent. |
| 5 | Project: Mist | `/games/project-mist/blood-orbs-upgrades` | Competitors and Steam copy emphasize Blood Vials/Orbs, upgrade stations, Gravity Gun upgrades, and character progression. | Current pages cover crafting/weapons/train/map, but not progression currency as its own task. |
| 6 | ZERO PARADES | `/games/zero-parades/skill-checks-conditioning` | Competitors are building around skill checks, stress meters, Exertion, Conditioning, and build math. | Current best-build/walkthrough pages are close, but no dedicated mechanics page. |
| 7 | Thick As Thieves | `/games/thick-as-thieves/exfil-clues-contracts` or update `/contracts-maps` | Competitors rank with contracts, exfil, clue chains, stash, and stuck scenarios. | Existing `contracts-maps` may be enough if expanded; do not split unless it becomes too dense. |
| 8 | Directive 8020 | `/directive-8020-face-models` or update cast/characters | GSC shows `directive 8020 face models`; competitors cover cast/characters heavily. | There is no dedicated face-model page; cast/characters can absorb it if kept focused. |

## Update instead of new page

| Game | Intent | Reason |
|---|---|---|
| Directive 8020 | platinum, trophy, all endings, walkthrough, all deaths | Dedicated pages already exist. Improve answer blocks, tables, and internal links, not new URLs. |
| Fatekeeper | how long to beat / length | Existing `/games/fatekeeper/length` owns it. Do not duplicate. |
| Romestead | multiplayer / co-op / split screen | Existing `/games/romestead/multiplayer-coop` owns it. Update only. |
| Project: Mist | map / facilities | New page already added: `/games/project-mist/map-facilities`. |
| Thick As Thieves | roadmap | Existing `/games/thick-as-thieves/roadmap-console` owns it. Update only. |
| Mechanicus II | units / best units | Existing `unit-tier-list` and `best-units-builds` own it. Add leader page separately. |
| ZERO PARADES | controller / Steam Deck / GOG / PS5 | Existing hub and support pages mostly own this. Update current pages first. |

## Competitor findings by game

### Directive 8020

Main competitors found:

- GamesRadar: save everyone and endings pages.
- directive8020.org: hub, deaths, choices, save-everyone structure.
- directive-8020.wiki: endings, save everyone, spoiler-aware wiki patterns.
- 100P Guides / GAMES.GG style pages: collectibles, secrets, trophy cleanup.

Missing or weak content:

- Face models / cast likeness intent is not owned by a dedicated URL.
- Internal link architecture is weaker than specialist hubs. The site has many Directive pages, but `guideLinks` only exposes the big three in shared config.
- Collectibles and save-everyone pages need stronger cross-links from death scenes, endings, and trophy pages.

Action:

- Do not create more broad Directive pages first.
- Update `cast-actors` or create `face-models` only if GSC keeps growing.
- Strengthen hub/internal links around save everyone, all deaths, collectibles, turning points, and trophy cleanup.

### Fatekeeper

Main competitors found:

- GAMES.GG: beginner guide, weapons/relics/spells, starting builds.
- Whisper of the House: best builds, best weapons, best spells, boss guide.
- Fatekeeper wiki-style sites: broad build, weapon, spell, alchemy, item coverage.
- Reddit: first boss difficulty, potion timing, alchemy, controller, boss pathing.

Missing or weak content:

- First boss / hard boss page.
- Dedicated best weapons page.
- Dedicated best spells page.
- Skill tree / node order page.
- Steam Deck/controller should be monitored because Reddit demand exists.

Action:

- Create first boss guide first because it solves a painful post-launch task.
- Split weapons/spells only if impressions appear or current combined page cannot rank.

### Romestead

Main competitors found:

- romestead.wiki: full guide covering resources, crafting, combat, bosses, gods, citizens, co-op, roadmap.
- romesteadguide.com: build order, gods, offerings, upgrades, jobs, patch tracker.
- romesteadwiki.wiki: release, settlement, resources, biomes, gods, roadmap modules.
- wiki.gg/Fandom-style pages: class setups and database intent.

Missing or weak content:

- Settlement building and citizens.
- Resources, crafting, food logistics, storage, farming chain.
- Gods, offerings, skills, technology tree.
- Biomes, dungeons, bosses.
- Roadmap / patch tracker.

Action:

- Create `settlement-building-citizens` first.
- Then create `gods-skills-offerings`.
- Then create `resources-crafting-logistics`.

### Mechanicus II

Main competitors found:

- GameStrategyHub: Necron campaign, AdMech campaign, early upgrades, leaders, lords, resources, Dominion, Cognition.
- GamePressure: database page explaining two campaigns, two factions, units, skills, and different fighting styles.
- Reddit: live discussion around favorite leaders, leader death, unit pools, and faction-specific unit value.

Missing or weak content:

- Leaders guide: AdMech vs Necron leaders, leader death, leader perks, unit pool differences.
- Unit selection/recruitment pool explanation.
- Campaign-side choice page can be improved but does not need a separate page yet.

Action:

- Create `/games/mechanicus-ii/leaders-guide`.
- Add internal links from factions, necron-guide, unit-tier-list, and beginner-guide.

### Project: Mist

Main competitors found:

- TposeGaming: first-hour walkthrough, vitals/stamina, Gravity Gun, lockpicking, blood orbs, train, greenhouse, Chomper.
- Steam store/news: official systems, facilities, train base, Blood Vials, upgrade stations, 1-4 co-op.
- GamePressure/Game8: database and overview pages.

Missing or weak content:

- Blood Orbs / Blood Vials / upgrade stations / character progression.
- Cooking / food / hunger / thirst / best early food.
- Chomper boss as a dedicated page.
- Patch notes / update tracker.

Action:

- `map-facilities` was the right first new page.
- Next best page is `blood-orbs-upgrades`.
- Chomper can be a subsection inside all-bosses until GSC proves it deserves a standalone page.

### Starminer

Main competitors found:

- starminer.wiki: complete resource, module, ship, heat, mining, FAQ coverage.
- starminer-guide.vercel.app: controls, money, research, combat, starter ships.
- GamesHorizon: ship movement guide.
- Reddit: beginner tips, starter ship upgrade, selling resources, cobalt/resources.

Missing or weak content:

- Resource-specific page: cobalt, thorium, eonite, silicates, water ice.
- Controls / ship movement / 6DOF navigation.
- Low Energy / power troubleshooting.
- Starter ship upgrade route.
- Campaign walkthrough is valid but lower priority because GSC volume is tiny.

Action:

- Create `resources-cobalt-thorium-eonite` first.
- Then `controls-ship-movement` if impressions appear.

### Thick As Thieves

Main competitors found:

- GameStrategyHub: contracts, exfil, clues, Chameleon, security tools, Constables Guildhouse.
- GAMES.GG: beginner, stealth, gadgets, mission/loadout patterns.
- Reddit: review threads, difficulty, map repetition, performance/config issues.

Missing or weak content:

- Exfil/clues/stuck contract troubleshooting.
- Chameleon unlock.
- Security tools: hauntstables, turrets, magic eyes, Slithersap, Smoke Bomb, Pickpocket Fairy.
- Map-specific pages such as Constables Guildhouse.

Action:

- Update `contracts-maps` first with exfil/clues/stuck scenarios.
- Create Chameleon only after query demand appears.

### ZERO PARADES

Main competitors found:

- zeroparadesguide.wiki: builds, skill checks, tools, endings, character/database approach.
- GAMES.GG: beginner guide with safe house, Exertion, stress, builds.
- Whisper of the House: best build.
- zeroparadesguide.com / zeroparadeswiki.com: items, characters, tasks, factions, quick-save, Act 1.

Missing or weak content:

- Skill checks / Exertion / Conditioning mechanics.
- Safe house opening route.
- Quick save and branch save guide.
- Characters / factions / Sick Crew database.
- Ending guide.

Action:

- Create `skill-checks-conditioning` first.
- Then create `safe-house-opening` or `quick-save-branch-saves` depending on GSC.

### Low priority for now

Paralives, Mina the Hollower, 007 First Light, Jump King Quest, and Luna Abyss have existing pages but weak current GSC demand in the provided exports. Do not spread effort there until query volume appears or release timing changes.

## Implementation order

1. Romestead settlement/citizens page.
2. Fatekeeper first boss page.
3. Mechanicus II leaders guide.
4. Starminer resources page.
5. Project: Mist blood-orbs/upgrades page.
6. ZERO PARADES skill-checks/conditioning page.
7. Thick As Thieves contracts/exfil update.
8. Directive 8020 face-models decision after another GSC check.

## Sources checked

- https://www.gamesradar.com/games/horror/directive-8020-save-everyone/
- https://directive8020.org/
- https://directive8020.org/deaths-guide/
- https://directive8020.org/choices/
- https://www.100pguides.com/guides/directive-8020-all-collectibles
- https://games.gg/fatekeeper/guides/fatekeeper-weapons-relics-and-spells-guide/
- https://www.whisperofthehouse.com/fatekeeper/best-build
- https://www.whisperofthehouse.com/fatekeeper/boss-guide
- https://fatekeeper.wiki/
- https://romestead.wiki/
- https://romesteadguide.com/
- https://www.romesteadwiki.wiki/
- https://romesteadguide.top/
- https://gamestrategyhub.com/games/warhammer-40000/necron-campaign-tips/
- https://gamestrategyhub.com/games/warhammer-40000/adeptus-mechanicus-campaign-tips/
- https://gamestrategyhub.com/games/warhammer-40000/best-early-upgrades-and-resources/
- https://www.gamepressure.com/games/warhammer-40000-mechanicus-ii/z869fc
- https://tposegaming.com/project-mist-guide/
- https://store.steampowered.com/app/2383130/Project_Mist/
- https://steamcommunity.com/app/2383130
- https://starminer.wiki/
- https://starminer-guide.vercel.app/
- https://gameshorizon.com/guides/starminer-the-complete-guide-to-ship-movement/
- https://gamestrategyhub.com/games/thick-as-thieves-game/
- https://gamestrategyhub.com/games/thick-as-thieves-game/contracts-exfil-difficulty-guide/
- https://games.gg/thick-as-thieves/guides/thick-as-thieves-beginners-guide/
- https://zeroparadesguide.wiki/
- https://zeroparadesguide.com/
- https://zeroparadeswiki.com/
- https://games.gg/zero-parades-for-dead-spies/guides/zero-parades-for-dead-spies-beginner-guid/
- https://www.whisperofthehouse.com/zero-parades/best-build
