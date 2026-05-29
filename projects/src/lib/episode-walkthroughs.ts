import type { EpisodeWalkthroughData } from "@/components/episode-walkthrough-page";

const commonWarnings = [
  "Do not change multiple route variables during a replay; test one choice, QTE result, or exploration path at a time.",
  "Check the Story Tree after the episode before assuming the final visible choice caused the outcome.",
  "If a character was isolated, treat later trust prompts as route-critical until evidence proves otherwise.",
];

export const episodeWalkthroughs: Record<string, EpisodeWalkthroughData> = {
  "directive-8020-little-star-walkthrough": {
    slug: "directive-8020-little-star-walkthrough",
    title: "Directive 8020 Little Star Walkthrough",
    metaTitle: "Directive 8020 Little Star Walkthrough - Episode 1 Guide",
    description:
      "Directive 8020 Little Star walkthrough for Episode 1: first-run route priorities, QTE setup, crew baseline, collectibles, Turning Points, and spoiler-safe tracking.",
    h1: "Directive 8020 Episode 1: Little Star Walkthrough",
    episodeNumber: "Episode 1",
    episodeName: "Little Star",
    heroImage: "/review/episode_1_little_star.png",
    alt: "Directive 8020 Little Star episode walkthrough image",
    videoId: "gaQkzfA14G4",
    intro:
      "Little Star is Episode 1 of Directive 8020. Set aboard the survey vessel Cassiopeia en route to Tau Ceti f, this chapter introduces the playable astronaut Brianna Young, the ship's Oracle system, and a critical hull breach. Note that Carter and Simms have scripted deaths in this chapter and cannot be saved.",
    bluf: "Calibrate your QTE sensitivity and subtitles first. Focus on learning the scanner mechanics to trace electrical wiring and route details, and understand that early crew deaths (Carter and Simms) are inevitable.",
    verifiedSummary:
      "GamesRadar lists Little Star as Episode 1 in the eight-episode structure.",
    routeFocus:
      "Tutorial, QTE calibration, scanner introduction, and scripted crew baseline.",
    spoilerNote:
      "This guide details specific survival routes without spoiling the post-credit endings.",
    facts: [
      { label: "Episode position", value: "Episode 1 of 8." },
      {
        label: "Primary purpose",
        value:
          "Tutorial, scanner tutorial, crew introduction, and scripted story setups.",
      },
      {
        label: "Scripted deaths",
        value:
          "Carter and Simms are scripted to die in this chapter; do not waste rewinds trying to save them.",
      },
      {
        label: "Best first-run goal",
        value:
          "Calibrate QTE settings, get used to the scanner mechanics, and collect early logs.",
      },
      {
        label: "Image / video",
        value: "Uses official Episode 1 key art and gameplay reveal trailer.",
      },
    ],
    checklist: [
      {
        step: "QTE calibration",
        doThis:
          "Enable large QTE prompts or adjust timing in settings before fixing the hull breach.",
        why: "Correct settings prevent accidental, avoidable deaths in later high-pressure action scenes.",
      },
      {
        step: "Scanner tutorial",
        doThis:
          "Activate your scanner tool to track wire layouts and locate the terminal breach before repairs.",
        why: "Scanning reveals environmental secrets and is required to unlock locked paths later.",
      },
      {
        step: "Simms and Carter scene",
        doThis:
          "Follow the narrative prompts to witness the initial mimic encounter. Do not attempt to save them.",
        why: "Their deaths are scripted events to introduce the shape-shifting alien threat.",
      },
      {
        step: "Post-chapter check",
        doThis:
          "Open your Story Tree to verify that your basic tutorial branches have been registered.",
        why: "Ensuring the first Turning Point is saved creates a clean baseline for future branches.",
      },
    ],
    collectibles: [
      "Simms Recording #1: Check the drawer in the crew quarters before heading to the deck breach.",
      "Cassiopeia Log #1: Located on the main computer terminal in the briefing room.",
      "O Death Curator Clue: Scan the wall panel immediately after the hull breach event.",
    ],
    routeWarnings: commonWarnings,
    faqs: [
      {
        question: "What episode is Little Star in Directive 8020?",
        answer: "Little Star is Episode 1 of Directive 8020.",
      },
      {
        question: "Can you save Carter and Simms in Episode 1?",
        answer:
          "No, both Carter and Simms suffer scripted deaths as part of the prologue and cannot be saved by any choice.",
      },
      {
        question: "What is the key mechanic introduced in Little Star?",
        answer:
          "The scanner tool is the core mechanic introduced, allowing players to trace cables, analyze anomalies, and locate collectibles.",
      },
    ],
  },
  "directive-8020-best-laid-plans-walkthrough": {
    slug: "directive-8020-best-laid-plans-walkthrough",
    title: "Directive 8020 Best Laid Plans Walkthrough",
    metaTitle: "Directive 8020 Best Laid Plans Walkthrough - Episode 2",
    description:
      "Directive 8020 Best Laid Plans walkthrough for Episode 2: relationship tracking, evidence-first decisions, QTEs, early branches, and Story Tree notes.",
    h1: "Directive 8020 Episode 2: Best Laid Plans Walkthrough",
    episodeNumber: "Episode 2",
    episodeName: "Best Laid Plans",
    heroImage: "/review/episode_2_best_laid_plans.png",
    alt: "Directive 8020 Best Laid Plans episode walkthrough image",
    videoId: "cdmKOH4RIWU",
    intro:
      "Best Laid Plans is Episode 2. This chapter centers on relationship state, crew arguments, and a critical ship system decision. You must choose which system to disable to stabilize the Cassiopeia.",
    bluf: "Choose to disable the Landing Computer instead of the Fire Control system. Keeping Fire Control active is highly recommended because it is required to save Mitchell later.",
    verifiedSummary: "GamesRadar lists Best Laid Plans as Episode 2.",
    routeFocus:
      "Critical ship system choices, relationship management, and saving Mitchell pre-requisite.",
    spoilerNote:
      "Keeps ending details hidden while explaining the exact choices needed for the optimal route.",
    facts: [
      { label: "Episode position", value: "Episode 2 of 8." },
      {
        label: "Primary purpose",
        value:
          "Determine which ship subsystem to sacrifice to stabilize the reactor.",
      },
      {
        label: "Critical choice",
        value:
          "Disable the Landing Computer. Sacrifice flight coordinates to keep fire suppression systems active.",
      },
      {
        label: "Long-term impact",
        value:
          "Keeping Fire Control online makes saving Mitchell significantly easier in Episode 5.",
      },
    ],
    checklist: [
      {
        step: "Disagreements",
        doThis:
          "Choose calm, logical responses to de-escalate blame when Stafford and Young argue.",
        why: "Maintaining high relationship levels ensures characters cooperate during crisis events.",
      },
      {
        step: "System Choice",
        doThis:
          "When prompted at the central console, select 'Disable Landing Computer' instead of 'Disable Fire Control'.",
        why: "This choice is vital to keep the fire suppressors online, protecting crew members in later chapters.",
      },
      {
        step: "Room sweep",
        doThis:
          "Search the engineering sub-alcoves before committing to the system choice.",
        why: "Engineering rooms contain logs that explain the ship's failure and add context to Oracle's behavior.",
      },
    ],
    collectibles: [
      "Cassiopeia Log #2: Found on the terminal next to the main engineering console.",
      "Crew Log #1: Pick up the datapad on the metal desk in the auxiliary power room.",
    ],
    routeWarnings: commonWarnings,
    faqs: [
      {
        question: "What episode is Best Laid Plans?",
        answer: "Best Laid Plans is Episode 2 of Directive 8020.",
      },
      {
        question: "Should I disable Landing Computer or Fire Control?",
        answer:
          "Disable the Landing Computer. Keeping Fire Control active is required to safely rescue Mitchell in Episode 5 without losing Anders.",
      },
      {
        question: "Do dialogue choices matter here?",
        answer:
          "Yes, choosing diplomatic options between Young and Stafford prevents early relationship decay, keeping rescue paths open.",
      },
    ],
  },
  "directive-8020-the-sample-walkthrough": {
    slug: "directive-8020-the-sample-walkthrough",
    title: "Directive 8020 The Sample Walkthrough",
    metaTitle: "Directive 8020 The Sample Walkthrough - Episode 3 Guide",
    description:
      "Directive 8020 The Sample walkthrough for Episode 3: Food Storage code 0402, lab evidence, specimen choices, mimic suspicion, collectibles, QTE tracking, and Story Tree cleanup.",
    h1: "Directive 8020 Episode 3: The Sample Walkthrough",
    episodeNumber: "Episode 3",
    episodeName: "The Sample",
    heroImage: "/review/episode_the_sample.png",
    alt: "Directive 8020 The Sample episode walkthrough image",
    videoId: "oeiMw0KD7w0",
    intro:
      "The Sample is Episode 3. In this chapter, the Cassiopeia crashes on Tau Ceti f. You will explore lab containment zones, search the food storage area, and manage your first survival-critical QTEs.",
    bluf: "When the ship crashes, choose to 'Stay Seated and Buckle In' for Stafford. To unlock the food storage keypad containing a collectible doll, use the code 0402.",
    verifiedSummary: "GamesRadar lists The Sample as Episode 3.",
    routeFocus:
      "Keypad puzzles, crash survival QTEs, and early specimen isolation.",
    spoilerNote:
      "Focuses on route-critical actions and item codes while avoiding ending spoilers.",
    facts: [
      { label: "Episode position", value: "Episode 3 of 8." },
      {
        label: "Primary purpose",
        value: "Survive the crash landing and investigate the alien sample.",
      },
      {
        label: "Food Storage Code",
        value:
          "The keypad code to enter the locked storage unit is 0402.",
      },
      {
        label: "Stafford Crash Rule",
        value:
          "Choose 'Stay Seated and Buckle In'. Getting up will lead to Stafford's immediate death.",
      },
    ],
    checklist: [
      {
        step: "Crash sequence",
        doThis:
          "Choose 'Buckle In' when Stafford is prompted during the cabin depressurization.",
        why: "Refusing or failing to buckle in results in Stafford dying instantly during impact.",
      },
      {
        step: "Food Storage Code",
        doThis:
          "Locate the keypad at the back of the mess hall and input 0402 to unlock the door.",
        why: "This room contains a Dark Pictures Doll and a crucial recording needed for 100% completion.",
      },
      {
        step: "Lab containment",
        doThis:
          "Activate the backup power generators before attempting to inspect the sample chamber.",
        why: "Without power, you cannot retrieve the logs or safely secure the containment unit.",
      },
    ],
    evidenceRows: [
      {
        claim: "Food Storage Keypad Code is 0402.",
        source: "Community Verified Guides",
        status: "verified",
        note: "Input 0402 to unlock the food storage room containing the collectible doll.",
      },
      {
        claim: "Stafford will die if he doesn't buckle in.",
        source: "In-game testing",
        status: "verified",
        note: "Ensure Stafford buckles in; standing up is a fatal trap choice.",
      },
    ],
    collectibles: [
      "Dark Pictures Doll: Found inside the food storage room (Keypad Code: 0402).",
      "Simms Recording #2: On the lab desk beside the containment cylinder.",
      "Cassiopeia Log #3: Scan the computer in the crashed cockpit room.",
    ],
    routeWarnings: commonWarnings,
    faqs: [
      {
        question: "What episode is The Sample?",
        answer: "The Sample is Episode 3 of Directive 8020.",
      },
      {
        question: "What is the food storage code in Episode 3?",
        answer:
          "The code is 0402. Inputting it unlocks the door containing a collectible doll and supply loot.",
      },
      {
        question: "How do I save Stafford during the crash?",
        answer:
          "You must choose 'Stay Seated and Buckle In' when the alert sounds. Any other choice leads to his death.",
      },
    ],
  },
  "directive-8020-dragnet-walkthrough": {
    slug: "directive-8020-dragnet-walkthrough",
    title: "Directive 8020 Dragnet Walkthrough",
    metaTitle: "Directive 8020 Dragnet Walkthrough - Episode 4 Stealth Guide",
    description:
      "Directive 8020 Dragnet walkthrough for Episode 4: stealth priorities, scanner use, chase routes, collectibles, QTEs, and Story Tree replay notes.",
    h1: "Directive 8020 Episode 4: Dragnet Walkthrough",
    episodeNumber: "Episode 4",
    episodeName: "Dragnet",
    heroImage: "/review/episode_dragnet.png",
    alt: "Directive 8020 Dragnet episode walkthrough image",
    videoId: "4a_VXgNSfME",
    intro:
      "Dragnet is Episode 4. This chapter introduces active enemy patrol units in the crashed ship corridors. You must use stealth mechanics, crouch-walking, and the scanner tool to avoid detection.",
    bluf: "Never run unless the game forces a chase scene. Use your scanner to track the enemy's visual cones through walls, and hide in locker alcoves when they approach.",
    verifiedSummary: "GamesRadar lists Dragnet as Episode 4.",
    routeFocus:
      "Stealth patrol patterns, hide spot locations, and scanner visual cones.",
    spoilerNote: "Focuses entirely on stealth survival without revealing final outcomes.",
    facts: [
      { label: "Episode position", value: "Episode 4 of 8." },
      {
        label: "Primary purpose",
        value: "Navigate the maintenance decks while avoiding active patrols.",
      },
      {
        label: "Stealth Tip",
        value:
          "Keep crouched at all times; running makes noise that alerts the hunter instantly.",
      },
      {
        label: "Scanner application",
        value:
          "Scan the corridor corners to highlight enemy patrol paths and visual cones.",
      },
    ],
    checklist: [
      {
        step: "Crouch movement",
        doThis:
          "Press the crouch toggle as soon as you enter the maintenance deck and move slowly.",
        why: "Running alerts the mimic, triggering an immediate chase sequence that is highly dangerous.",
      },
      {
        step: "Visual tracking",
        doThis:
          "Activate your scanner while behind cover to watch the hunter's red patrol path.",
        why: "This allows you to plan your movement when they turn their back.",
      },
      {
        step: "Locker hiding",
        doThis:
          "If the hunter approaches, enter a nearby locker and pass the 'Hold Breath' mini-game QTE.",
        why: "Failing the breath QTE causes the character to panic, leading to immediate capture.",
      },
    ],
    collectibles: [
      "Cassiopeia Log #4: Found on a desk in the security monitoring room.",
      "Crew Log #2: Located inside the locker room next to the first stealth encounter.",
    ],
    routeWarnings: commonWarnings,
    faqs: [
      {
        question: "What episode is Dragnet?",
        answer: "Dragnet is Episode 4 of Directive 8020.",
      },
      {
        question: "How do I avoid the hunter in the corridors?",
        answer:
          "Stay crouched, use the scanner to see the creature's patrol paths, and hide in lockers if it walks in your direction.",
      },
      {
        question: "What happens if I fail the breath mini-game?",
        answer:
          "Failing the breath mini-game will blow your cover, forcing you into a chase sequence with high-difficulty QTEs.",
      },
    ],
  },
  "directive-8020-mr-williams-walkthrough": {
    slug: "directive-8020-mr-williams-walkthrough",
    title: "Directive 8020 Mr. Williams Walkthrough",
    metaTitle: "Directive 8020 Mr. Williams Walkthrough - Episode 5 Guide",
    description:
      "Directive 8020 Mr. Williams walkthrough for Episode 5: mid-game route audit, survivor state, NPC death risks, collectibles, and Turning Points.",
    h1: "Directive 8020 Episode 5: Mr. Williams Walkthrough",
    episodeNumber: "Episode 5",
    episodeName: "Mr. Williams",
    heroImage: "/review/mid_game_ep5_7.png",
    alt: "Directive 8020 Mr. Williams mid-game walkthrough image",
    videoId: "7nTCMOt_-Bw",
    intro:
      "Mr. Williams is Episode 5. The crew is scattered and a massive fire breaks out. You will need to make a critical choice to rescue either Anders or Mitchell, depending on your choices in Episode 2.",
    bluf: "If you kept Fire Control online in Episode 2 (disabled Landing Computer), you can easily save Anders. If you disabled Fire Control in Episode 2, you MUST choose to rescue Mitchell here.",
    verifiedSummary: "GamesRadar lists Mr. Williams as Episode 5.",
    routeFocus:
      "Fire rescue choices, saving Mitchell vs Anders, and mid-game state auditing.",
    spoilerNote:
      "Explains the exact requirements to keep both Mitchell and Anders alive.",
    facts: [
      { label: "Episode position", value: "Episode 5 of 8." },
      {
        label: "Primary purpose",
        value: "Navigate the burning decks and make a split-second rescue decision.",
      },
      {
        label: "Mitchell Rescue Rule",
        value:
          "If Fire Control is offline, prioritize Mitchell. If Fire Control is online, save Anders.",
      },
      {
        label: "Turning Point impact",
        value:
          "Your choice in Episode 2 dictates the difficulty and path of the fire rescue scene here.",
      },
    ],
    checklist: [
      {
        step: "Fire Audit",
        doThis:
          "Verify your ship status. If Fire Control is online, the sprinkler system will suppress the main flames.",
        why: "This allows you to split up and save Anders while the sprinklers protect Mitchell.",
      },
      {
        step: "Split Choice",
        doThis:
          "If Fire Control is offline, choose 'Save Mitchell' when prompted at the split path.",
        why: "Mitchell will die if left in the un-suppressed fire; Anders can survive the auxiliary path.",
      },
      {
        step: "QTE Success",
        doThis:
          "Complete all jumping and sliding QTEs during the escape from the burning reactor deck.",
        why: "Failing a QTE here results in severe injury, locking you out of the 'Everyone Lives' achievement.",
      },
    ],
    collectibles: [
      "Simms Recording #3: Found on a cart in the burning laboratory vestibule.",
      "O Death Secret #1: Scan the melted server rack in the server room before the fire escape.",
    ],
    routeWarnings: commonWarnings,
    faqs: [
      {
        question: "What episode is Mr. Williams?",
        answer: "Mr. Williams is Episode 5 of Directive 8020.",
      },
      {
        question: "How do I save both Mitchell and Anders?",
        answer:
          "You must have disabled the Landing Computer in Episode 2 (keeping Fire Control online). This allows the sprinklers to save Mitchell, freeing you to rescue Anders.",
      },
      {
        question: "What if I disabled Fire Control in Episode 2?",
        answer:
          "You must choose to save Mitchell in the fire. Failing to do so will result in Mitchell's death.",
      },
    ],
  },
  "directive-8020-hostile-takeover-walkthrough": {
    slug: "directive-8020-hostile-takeover-walkthrough",
    title: "Directive 8020 Hostile Takeover Walkthrough",
    metaTitle: "Directive 8020 Hostile Takeover Walkthrough - Episode 6",
    description:
      "Directive 8020 Hostile Takeover walkthrough for Episode 6: late-game branching, survivor-dependent scenes, choices, QTEs, collectibles, and endings setup.",
    h1: "Directive 8020 Episode 6: Hostile Takeover Walkthrough",
    episodeNumber: "Episode 6",
    episodeName: "Hostile Takeover",
    heroImage: "/review/hydroponics_bay.png",
    alt: "Directive 8020 Hostile Takeover episode walkthrough image",
    videoId: "9CtX9O7nZeQ",
    intro:
      "Hostile Takeover is Episode 6. Suspicions run high as the crew suspects Williams of being a mimic. Additionally, you must verify the identity of Laura Eisele during a tense confrontation.",
    bluf: "Do not shoot Williams when Stafford aims at him; choose to 'Stand Down'. During Eisele's mimic test, choose to 'Test' her and identify the newcomer as the real Eisele.",
    verifiedSummary: "GamesRadar lists Hostile Takeover as Episode 6.",
    routeFocus:
      "Williams survival choice, Eisele mimic test, and trust verification.",
    spoilerNote:
      "Provides exact choices for the imposter test and standoff without spoiling the end scenes.",
    facts: [
      { label: "Episode position", value: "Episode 6 of 8." },
      {
        label: "Primary purpose",
        value: "De-escalate the standoff with Williams and identify the true Eisele.",
      },
      {
        label: "Williams Standoff",
        value:
          "Choose 'Stand Down'. Bio-scanners will verify he is human; shooting kills him.",
      },
      {
        label: "Eisele Identity Test",
        value:
          "Select 'Test' instead of shooting. The newcomer who just arrived is the real Eisele.",
      },
    ],
    checklist: [
      {
        step: "Williams Standoff",
        doThis:
          "Select 'Stand Down' or 'Lower Weapon' when Stafford points the rifle at Williams.",
        why: "Shooting Williams kills him, failing the 'Everyone Lives' run. Lowering the weapon lets the bio-scanner verify his humanity.",
      },
      {
        step: "Eisele Imposter",
        doThis:
          "Choose to 'Test' Eisele. When identifying the real one, select the newcomer.",
        why: "Shooting the wrong Eisele or failing the test will result in Eisele's immediate death.",
      },
      {
        step: "Door Override",
        doThis:
          "Complete the bypass wiring puzzle on the hydroponics lock before the timer runs out.",
        why: "Succeeding prevents the mimic from breaking through, avoiding a risky combat QTE.",
      },
    ],
    collectibles: [
      "Cassiopeia Log #5: Found on the main terminal in the hydroponics control room.",
      "Crew Log #3: Pick up the PDA on the soil-growing bed in the greenhouse sector.",
    ],
    routeWarnings: commonWarnings,
    faqs: [
      {
        question: "What episode is Hostile Takeover?",
        answer: "Hostile Takeover is Episode 6 of Directive 8020.",
      },
      {
        question: "How do I pass the Eisele imposter test?",
        answer:
          "Choose to 'Test' her, then identify the newcomer (the one who arrives second) as the real Eisele.",
      },
      {
        question: "Should I shoot Williams in Episode 6?",
        answer:
          "No, choose to 'Stand Down'. Williams is human, and the bio-scanner will confirm this if you don't shoot him.",
      },
    ],
  },
  "directive-8020-revelation-walkthrough": {
    slug: "directive-8020-revelation-walkthrough",
    title: "Directive 8020 Revelation Walkthrough",
    metaTitle: "Directive 8020 Revelation Walkthrough - Episode 7 Guide",
    description:
      "Directive 8020 Revelation walkthrough for Episode 7: late choices, survivor state, ending setup, collectibles, 50-50 decisions, and Story Tree replay.",
    h1: "Directive 8020 Episode 7: Revelation Walkthrough",
    episodeNumber: "Episode 7",
    episodeName: "Revelation",
    heroImage: "/review/final_episode.png",
    alt: "Directive 8020 Revelation episode walkthrough image",
    videoId: "S1wyl5-8E7E",
    intro:
      "Revelation is Episode 7. The crew learns the cloning cycles and prepares a search party to find Anders. You must also decide whether to send a distress signal or keep radio silence.",
    bluf: "During the search party path split, choose the right path to rescue the real Anders. Send the distress call to unlock the Beacon ending variation.",
    verifiedSummary: "GamesRadar lists Revelation as Episode 7.",
    routeFocus:
      "Anders search path split, distress call decision, and late-game collectibles.",
    spoilerNote:
      "Details the split path requirements for Anders without spoiling the finale.",
    facts: [
      { label: "Episode position", value: "Episode 7 of 8." },
      {
        label: "Primary purpose",
        value: "Locate the missing crew members and choose the broadcast strategy.",
      },
      {
        label: "Search Party Split",
        value:
          "Choose the Right Path. The left path is a trap containing a mimic that will kill Anders.",
      },
      {
        label: "Distress Call",
        value:
          "Send the distress call to activate the Beacon epilogue; keep silent for stealth variations.",
      },
    ],
    checklist: [
      {
        step: "Search Party Split",
        doThis:
          "Take the 'Right Path' when prompted at the fork in the maintenance tunnels.",
        why: "Choosing the left path leads to finding a mimic copy instead, resulting in the real Anders' death.",
      },
      {
        step: "Distress Signal",
        doThis:
          "Initiate the broadcast to send the distress call from the primary antenna console.",
        why: "This unlocks the Beacon ending path, though it changes the post-credits epilogue constraints.",
      },
      {
        step: "Scanner sweep",
        doThis:
          "Scan the wreckage before activating the elevator to retrieve the last normal secrets.",
        why: "Once the elevator is activated, you enter a point of no return for Episode 7 collectibles.",
      },
    ],
    collectibles: [
      "Simms Recording #4: Found on the metal crate near the broadcast antenna elevator.",
      "O Death Secret #2: Scan the neural array inside the research chamber before the search party split.",
    ],
    routeWarnings: commonWarnings,
    faqs: [
      {
        question: "What episode is Revelation?",
        answer: "Revelation is Episode 7 of Directive 8020.",
      },
      {
        question: "Which path should I take to find Anders?",
        answer:
          "Take the right path at the split. Taking the left path will result in Anders being killed by a mimic.",
      },
      {
        question: "Should I send the distress call?",
        answer:
          "Yes, if you want the Beacon ending variation. Sending the signal alerts rescuers but changes the final epilogue options.",
      },
    ],
  },
  "directive-8020-come-true-walkthrough": {
    slug: "directive-8020-come-true-walkthrough",
    title: "Directive 8020 Come True Walkthrough",
    metaTitle: "Directive 8020 Come True Walkthrough - Episode 8 Finale",
    description:
      "Directive 8020 Come True walkthrough for Episode 8: finale route priorities, endings setup, Cycle 13 and Booster Ring context, collectibles, and Story Tree cleanup.",
    h1: "Directive 8020 Episode 8: Come True Walkthrough",
    episodeNumber: "Episode 8",
    episodeName: "Come True",
    heroImage: "/review/come_true.png",
    alt: "Directive 8020 Come True finale walkthrough image",
    videoId: "S1wyl5-8E7E",
    intro:
      "Come True is Episode 8 and the finale chapter. The survivors must escape Tau Ceti f and return to the Booster Ring. This chapter requires flawless execution of escape QTEs and critical final decisions.",
    bluf: "Take Williams with you, let Mitchell inside the hatch, choose to help Stafford when he falls, and complete the QTE to detonate the oxygen container to stop the mimic.",
    verifiedSummary:
      "GamesRadar lists Come True as Episode 8 and the final chapter.",
    routeFocus:
      "Final QTE sequences, crew rescue decisions, and escape endings setup.",
    spoilerNote:
      "Contains final chapter walkthrough details including ending names.",
    facts: [
      { label: "Episode position", value: "Episode 8 of 8." },
      {
        label: "Primary purpose",
        value: "Escape Tau Ceti f and stop the mimic threat.",
      },
      {
        label: "Williams Rule",
        value:
          "Choose 'Take Williams'. Leaving him behind results in his immediate death.",
      },
      {
        label: "Stafford Rescue",
        value:
          "Choose 'Help Stafford' when he trips during the corridor chase. Pass the follow-up QTEs.",
      },
    ],
    checklist: [
      {
        step: "Williams Decision",
        doThis:
          "Select 'Take Williams' when given the choice during the cockpit prep.",
        why: "Leaving him behind violates the 'Everyone Lives' run conditions.",
      },
      {
        step: "Mitchell Hatch",
        doThis:
          "Choose 'Let Mitchell Inside' when he bangs on the airlock window.",
        why: "Keeping the door locked leaves Mitchell to die outside on the launch pad.",
      },
      {
        step: "Stafford Rescue",
        doThis:
          "Select 'Help Stafford' instead of running when he falls, then succeed at the QTEs.",
        why: "Choosing to run will leave Stafford to be caught and killed by the creature.",
      },
      {
        step: "Oxygen Detonation",
        doThis:
          "Pass the final QTE prompt to shoot and detonate the oxygen container.",
        why: "Failing this QTE allows the mimic to breach the ship, killing the remaining crew.",
      },
    ],
    collectibles: [
      "O Death Secret #3: Located on the shelf inside the escape shuttle cockpit.",
      "Cassiopeia Log #6: Found on the server terminal near the shuttle airlock.",
    ],
    routeWarnings: [
      "Come True is the finale chapter; ensure you have backup saves if you fail QTEs.",
      "Ensure Eisele's Sympathetic trait has been boosted if you want the Humanitarian epilogue.",
      ...commonWarnings,
    ],
    faqs: [
      {
        question: "What episode is Come True?",
        answer: "Come True is Episode 8 and the finale of Directive 8020.",
      },
      {
        question: "How do I save Stafford at the end?",
        answer:
          "When Stafford falls during the escape, choose 'Help Stafford' and successfully complete the button prompts.",
      },
      {
        question: "Should I take Williams with me?",
        answer:
          "Yes, you must choose to take Williams. Leaving him behind results in his death.",
      },
    ],
  },
};
