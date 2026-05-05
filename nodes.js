// ═══════════════════════════════════════════════════════
// NODES — Masks of Nyarlathotep
// ═══════════════════════════════════════════════════════

const nodes = [

  // ── CENTER ──────────────────────────────────────────────────────────────────
  {
    id: 'nyarlathotep', label: 'Nyarlathotep', group: 'CENTER', type: 'Outer God',
    desc: 'The Crawling Chaos. One of the Outer Gods — messenger, heart, and soul of the True Gods of the cosmos. Unlike his imprisoned brethren, Nyarlathotep moves freely, appearing in a thousand forms, offering temptations of power and hidden knowledge, then twisting every promise to ruin. He cannot break Elder Wards directly — he requires the unwitting hand of humanity to destroy them, paving the way for the return of the Old Ones. His Great Plan, enacted through the Carlyle Expedition, attempts to open the Great Gate during the 1926 solar eclipse.',
    star: '★★ The ultimate antagonist. Never to be fought directly — to be avoided, outwitted, or endured. Even if the Great Plan fails, his mocking laughter echoes on.'
  },

  // ── CHAPTER LOCATIONS ───────────────────────────────────────────────────────
  {
    id: 'loc-peru', label: 'Peru (Lima) 1921', group: 'CHAPTER', type: 'Chapter — Prologue',
    desc: 'Optional prologue set in March 1921. Investigators are recruited by Augustus Larkin for a purported archaeological expedition to find a lost pyramid in the Andean highlands. In reality, Larkin — possessed by a fragment of Nyarlathotep — intends to use the investigators to break the golden ward imprisoning the Father of Maggots. Jackson Elias (in disguise as "Jesse Hughes") is also investigating Larkin, leading to the bond that draws investigators into the main campaign four years later. Key locations: Bar Cordano (first meeting), Hotel Maury (investigators), Hotel España (Larkin & de Mendoza), Universidad de San Marcos, the Pyramid in the highlands.',
    star: null
  },
  {
    id: 'loc-america', label: 'America (New York) 1925', group: 'CHAPTER', type: 'Chapter 1',
    desc: 'The main campaign begins here. Jackson Elias calls on investigators urgently, then is brutally murdered in his hotel room at the Chelsea before he can share his findings. His body bears markings of the Cult of the Bloody Tongue. Investigators are drawn to Harlem — an innocent man, Hilton Adams, has been framed for the cult\'s ritual murders by corrupt NYPD Captain Robson. Ju-Ju House in Harlem is the cult\'s temple. Key contacts: Jonah Kensington (publisher), Erica Carlyle (Roger\'s sister and heir), Carlton Ramsey (Elias\' lawyer).',
    star: '★★ The inciting chapter. The murder of Jackson Elias is the emotional hook that drives everything forward.'
  },
  {
    id: 'loc-england', label: 'England (London) 1925', group: 'CHAPTER', type: 'Chapter 2',
    desc: 'Most likely destination after New York. The Penhew Foundation, directed by cultist Edward Gavigan, serves as the Brotherhood of the Black Pharaoh\'s London base. Misr House is the cult\'s operational HQ. Sidetracks: the cursed village of Lesser Edale (Vane family curse) and the insane artist Miles Shipley, secretly controlled by the serpent person Ssathasaa. Key contacts: Mickey Mahoney (tabloid The Scoop), Yalesha Essam (Blue Pyramid nightclub).',
    star: null
  },
  {
    id: 'loc-egypt', label: 'Egypt (Cairo) 1925', group: 'CHAPTER', type: 'Chapter 3',
    desc: 'Often visited after London. Omar al-Shakti leads the Brotherhood of the Black Pharaoh in Cairo, pursuing the resurrection of evil ancient Queen Nitocris using the unwitting Clive Expedition as tools. The Black Pharaoh (Nyarlathotep) manifests at the Bent Pyramid. Key contacts: Dr. Ali Kafour (Egyptian Museum), Saleem Naziz (dragoman), Warren Besart (Carlyle\'s former agent, now a hashish addict).',
    star: 'Danger: If Nitocris is resurrected and survives the campaign, she will pursue investigators for the rest of their lives.'
  },
  {
    id: 'loc-kenya', label: 'Kenya (Nairobi) 1925', group: 'CHAPTER', type: 'Chapter 4',
    desc: 'Investigators are subjected to magical attacks by Taan Kaur while seeking the Mountain of the Black Wind. M\'Weru guards the doomed Hypatia Masters at the Mountain, where the Spawn of Nyarlathotep will be born during the eclipse. Old Bundari (via Sam Mariga → Johnstone Kenyatta) may provide crucial magical aid. Other contacts: Reggie Baines (Hampton House hotel), Natalie Smythe-Forbes (Nairobi Star), Neville Jermyn (White City sidetrack). Ahja Singh in Mombasa handles cult shipments.',
    star: '★★ The highest-value chapter (up to 10 cult points). Both M\'Weru and the Spawn must be stopped AND the Mountain warded with the Eye of Light and Darkness.'
  },
  {
    id: 'loc-australia', label: 'Australia (W. Australia) 1925', group: 'CHAPTER', type: 'Chapter 5',
    desc: 'Investigators travel to remote Western Australia to locate the City of the Great Race — a Yithian underground city in the Great Sandy Desert near Cuncudgerie. Dr. Robert Huston leads the Cult of the Sand Bat in plundering alien pre-human technology. The Yithian Kakakatak is physically imprisoned here. Key contacts: Prof. Cowles (Miskatonic U.), Prof. David Dodge (U. Sydney), Toddy Randolph (shipping). Hostiles: the Wycroft family, the Slattery family.',
    star: null
  },
  {
    id: 'loc-china', label: 'China (Shanghai) 1925', group: 'CHAPTER', type: 'Chapter 6 — Climax',
    desc: 'The climax of the campaign. Jack Brady hides in Shanghai (via Mu Hsien) — the single most important informant, who knows the full Great Plan. Roger Carlyle languishes insane in a Hong Kong sanitarium as "Randolph Carter." Sir Aubrey Penhew (now "The Pale Viper") builds his doomsday rocket on Gray Dragon Island. Ho Fang leads the Order of the Bloated Woman. Key contacts: Mu Hsien, Anthony Chang, Li Wen-Cheng, Lin Yenyu.',
    star: '★★ The decisive chapter. Destroying the rocket on Gray Dragon Island is worth up to 10 cult points — the highest single action in the campaign.'
  },

  // ── CULTS ────────────────────────────────────────────────────────────────────
  {
    id: 'cult-bt', label: 'Cult of the Bloody Tongue', group: 'CULT', type: 'Cult',
    desc: 'Kenyan cult dedicated to Nyarlathotep in his aspect as the Bloody Tongue. Founded and led by M\'Weru. A New York chapter operates from Ju-Ju House in Harlem, led by Mukunga M\'Dari — responsible for the murder of Jackson Elias. A Mombasan network run by Ahja Singh moves cult equipment across Africa. The Bloody Tongue tattoo placed on Larkin\'s chest by M\'Weru first introduces investigators to the cult\'s symbolism in Peru — a connection they will understand only later.',
    star: null
  },
  {
    id: 'cult-bp', label: 'Brotherhood of the Black Pharaoh', group: 'CULT', type: 'Cult',
    desc: 'Egyptian cult worshipping Nyarlathotep as the Black Pharaoh. London chapter directed by Edward Gavigan; Egyptian chapter led by Omar al-Shakti in Cairo. Seeks to resurrect ancient Queen Nitocris as a proxy ruler in service to Nyarlathotep. Zahra Shafik is a rival priestess who may attempt to seize control of the London branch.',
    star: null
  },
  {
    id: 'cult-sb', label: 'Cult of the Sand Bat', group: 'CULT', type: 'Cult',
    desc: 'Ancient Australian cult revived by Dr. Robert Huston. Operates in the outback near Cuncudgerie, Western Australia. The Wycroft family (Mortimer and daughters Gertie, Shula, Janice) are prominent cultists. Huston performs the Great Rite at the Purple Dome Temple in the underground Yithian city.',
    star: null
  },
  {
    id: 'cult-obw', label: 'Order of the Bloated Woman', group: 'CULT', type: 'Cult',
    desc: 'Chinese cult led by Ho Fang, based in Shanghai. Worships Nyarlathotep as the Bloated Woman. Controls operations on Gray Dragon Island in support of Sir Aubrey Penhew\'s rocket project. The ancient sorcerer Carl Stanford is a powerful guest of Ho Fang. Forms one of the three critical loci of the Great Rite on January 14, 1926.',
    star: null
  },

  // ── KHARISIRI CULT (PERU) ────────────────────────────────────────────────────
  {
    id: 'cult-kharisiri', label: 'Cult of the Kharisiri', group: 'CULT', type: 'Cult — Peru',
    desc: 'Loosely organized cult of deathless half-human monsters born when Gaspar Figueroa\'s companions were infected by larvae from the Father of Maggots in 1543. Over 30 kharisiri now stalk the Andean highlands near Lake Titicaca, sustaining their imprisoned god with offerings of body fat. Until recently little more than predatory animals, their human intelligence was restored by the fragment of Nyarlathotep inside Augustus Larkin, who commands them to grow their numbers. They lack the rituals and paraphernalia of other Nyarlathotep cults — each feeding is itself an act of worship. Known in local folklore as kharisiri, pishtaku, or ñakaq.',
    star: null
  },

  // ── THE GREAT PLAN ───────────────────────────────────────────────────────────
  {
    id: 'great-plan', label: 'The Great Plan', group: 'PLAN', type: 'Central Plot',
    desc: 'Nyarlathotep\'s scheme to open the Great Gate and allow the Old Ones to return to Earth. Requires simultaneous rituals (the Great Rite) at three critical loci — Kenya, Australia, and China — timed with exceedingly accurate marine chronometers to coincide with the total solar eclipse of January 14, 1926. Sir Aubrey\'s rocket provides the initial tear in spacetime. The investigators have roughly one year from the campaign\'s start to disrupt these preparations.',
    star: '★★ The campaign\'s central stakes. Every chapter advances or hinders this plan.'
  },
  {
    id: 'great-gate', label: 'The Great Gate', group: 'PLAN', type: 'Cosmic Threat',
    desc: 'A portal to dimensions of nightmare. Once opened, it allows the minions of Hastur, Cthugha, Shub-Niggurath, Cthulhu, and other Great Old Ones to pour through and reclaim the Earth. Sir Aubrey\'s rocket provides the initial breach; three simultaneous rituals widen and anchor it open. The Eye of Light and Darkness ward placed at each locus can prevent the Gate from opening there.',
    star: null
  },
  {
    id: 'great-rite', label: 'The Great Rite', group: 'PLAN', type: 'Ritual',
    desc: 'The simultaneous ritual performed at three loci (Kenya, Australia, China) at the exact moment of the January 14, 1926 solar eclipse. M\'Weru and the Spawn (Kenya), Huston (Australia), and Ho Fang / Sir Aubrey (China) each perform their part. Marine chronometers ensure split-second synchronization. Each locus contributes point values to the ultimate outcome.',
    star: null
  },

  // ── CARLYLE EXPEDITION ───────────────────────────────────────────────────────
  {
    id: 'carlyle-exp', label: 'Carlyle Expedition (1919)', group: 'EVENT', type: 'Historical Event',
    desc: 'Ostensibly led by millionaire playboy Roger Carlyle, the expedition traveled New York → London → Egypt → Kenya in 1919. In truth organized by Nyarlathotep through M\'Weru to carry out the preparatory phases of the Great Plan. Their bearers were sacrificed near Nairobi in 1920 — blamed on Nandi tribesmen. The principals were declared dead. The true fate of the expedition is the central mystery the investigators must unravel.',
    star: 'Understanding the true fate of the Carlyle Expedition is the key to comprehending the Great Plan.'
  },
  {
    id: 'roger-carlyle', label: 'Roger Carlyle', group: 'CARLYLE', type: 'Carlyle Expedition — Leader',
    desc: 'Millionaire playboy, age 24 at the time of the expedition. Seduced by M\'Weru and corrupted by Nyarlathotep\'s magically induced dreams. Currently confined insane in a Hong Kong sanitarium under the alias "Randolph Carter," placed there by Jack Brady. His sister Erica believes him dead.',
    star: null
  },
  {
    id: 'jack-brady', label: 'Jack Brady', group: 'CARLYLE', type: 'Carlyle Expedition — Bodyguard',
    desc: '"Brass" Brady. Mercenary soldier, weapons expert, and Carlyle\'s bodyguard. Uniquely immune to Nyarlathotep\'s dream commands. In Kenya, drugged Carlyle and spirited him away via Arab dhow to Shanghai. Informed Jackson Elias of the Great Plan when the author tracked him down. Now hiding in Mu Hsien\'s home in Shanghai.',
    star: '★★ The single most important NPC in the campaign. Investigators must find Brady to fully understand the Great Plan.'
  },
  {
    id: 'penhew', label: 'Sir Aubrey Penhew', group: 'CARLYLE', type: 'Carlyle Expedition — Antagonist',
    desc: 'Age 54. Egyptologist and former director of the Penhew Foundation. Now known as "The Pale Viper." Seduced by Nyarlathotep\'s promise he would rule as a pharaoh in ancient Egypt. Resides on Gray Dragon Island east of Shanghai, building the doomsday rocket using Yithian technology plundered by Huston.',
    star: null
  },
  {
    id: 'huston', label: 'Dr. Robert Huston', group: 'CARLYLE', type: 'Carlyle Expedition — Antagonist',
    desc: 'Age 52. Jungian psychoanalyst brought along to interpret Carlyle\'s dreams. Seduced by Nyarlathotep\'s promise he would rule the Earth. Now leads the revived Cult of the Sand Bat in Western Australia, overseeing the plunder of Yithian technology. Performs the Great Rite in Australia.',
    star: null
  },
  {
    id: 'hypatia', label: 'Hypatia Masters', group: 'CARLYLE', type: 'Carlyle Expedition — Victim',
    desc: 'Age 27. Society girl and photographer. Now the doomed, babbling incubator for the Spawn of Nyarlathotep at the Mountain of the Black Wind in Kenya. Her monstrous pregnancy will destroy her utterly when the Spawn is born.',
    star: null
  },
  {
    id: 'mweru', label: "M'Weru", group: 'CARLYLE', type: 'High Priestess — Bloody Tongue',
    desc: 'High priestess of the Cult of the Bloody Tongue and Nyarlathotep\'s chosen emissary. In 1916 led the first successful summoning of the Bloody Tongue in Kenya. Recruited, drugged, and tattooed Augustus Larkin in Kenya before dispatching him to Peru. In 1920 sent to New York to recruit Carlyle and the expedition principals. Now based at the Mountain of the Black Wind in Kenya awaiting the Great Rite and the birth of the Spawn.',
    star: null
  },

  // ── KEY ANTAGONISTS ──────────────────────────────────────────────────────────
  {
    id: 'mukunga', label: "Mukunga M'Dari", group: 'ENEMY', type: 'Antagonist — New York',
    desc: 'High priest of the New York Cult of the Bloody Tongue. His temple occupies the basement of Ju-Ju House in Harlem. Ordered the ritual murders — including the killing of Jackson Elias. Used corrupt NYPD Captain Robson to frame the innocent Hilton Adams.',
    star: null
  },
  {
    id: 'gavigan', label: 'Edward Gavigan', group: 'ENEMY', type: 'Antagonist — London',
    desc: 'Age 55. High priest of the London Brotherhood of the Black Pharaoh and director of the Penhew Foundation. Slim, superbly dressed, balding, manicured — a mask of charm hiding an insane ego. Sir Aubrey\'s protégé and successor in London, he defers to Penhew in all things. Manages the entire London operation: the Foundation as legitimate cover, Henson Manufacturing (Derby) reverse-engineering Yithian technology for the rocket, Chaudhary\'s warehouse (Limehouse) shipping components via the Ivory Wind to Ho Fang in Shanghai, and Misr House (Essex) for monthly Brotherhood rites. Ordered Elias\' murder in New York. Has a secret basement room at the Foundation for spell-casting. His arsenal: Two Scepters, Cloud Memory, Flesh Ward, Mindblast, Pharaoh\'s Breath, Pharaoh\'s Wrath, Shrivelling, can summon byakhee / dimensional shamblers / hunting horrors. Blind spot: he doesn\'t see Zahra Shafik\'s coming betrayal.',
    star: null
  },
  {
    id: 'al-shakti', label: 'Omar al-Shakti', group: 'ENEMY', type: 'Antagonist — Cairo',
    desc: 'Egyptian plantation owner and high priest of the Brotherhood of the Black Pharaoh in Cairo. Accompanied always by Hetep, his cat-demon. Supports the cult\'s attempt to resurrect Queen Nitocris.',
    star: null
  },
  {
    id: 'ho-fang', label: 'Ho Fang', group: 'ENEMY', type: 'Antagonist — Shanghai',
    desc: 'Importer/exporter and high priest of the Order of the Bloated Woman in Shanghai. Works closely with Penhew on the rocket project at Gray Dragon Island. The sorcerer Carl Stanford is his houseguest.',
    star: null
  },
  {
    id: 'stanford', label: 'Carl Stanford', group: 'ENEMY', type: 'Antagonist — Shanghai',
    desc: 'An ancient and extremely powerful sorcerer staying in Shanghai with Ho Fang. Interrogated and tortured Jack Brady\'s lover Choi Mei-ling. A significant magical threat to investigators in Shanghai.',
    star: null
  },
  {
    id: 'nitocris', label: 'Nitocris', group: 'ENEMY', type: 'Antagonist — Egypt',
    desc: 'Evil queen of Dynastic Egypt. The Brotherhood attempts to resurrect her using the Clive Expedition. If resurrected, uses the alias "Sharifa Rawash." Has divergent ambitions and will pursue investigators forever if she survives.',
    star: null
  },
  {
    id: 'zahra', label: 'Zahra Shafik', group: 'ENEMY', type: 'Antagonist — London',
    desc: 'Age 36. High priestess of the London Brotherhood and owner of Empire Spices (76 Wardour Street, Soho). Slender, long dark hair, enchanting green eyes — often described as resembling Cleopatra. Born in Egypt; recruited by Omar al-Shakti, who sent her to London as Gavigan\'s high priestess and as his spy. Controls day-to-day cult operations from Empire Spices and through the Blue Pyramid Club. Assisted the Carlyle Expedition\'s London preparation in 1919. Scheming to oust and kill Gavigan and take full control of the London Brotherhood — has 20 loyal cultists already recruited to her cause. May approach investigators and offer to use them as pawns against Gavigan. Can use Body Warping of Gorgoroth to disguise herself, Mental Suggestion to implant kill commands. Possesses the Mirror of Gal (ancient Mythos artifact). Served by Edjo. Can summon 8–16 cultists within 5 minutes.',
    star: null
  },
  {
    id: 'larkin', label: 'Augustus Larkin', group: 'ENEMY', type: 'Antagonist — Peru',
    desc: 'Age 32. Eldest son of a wealthy Kenyan colonial family. Encountered M\'Weru in Nairobi and was drawn into her orbit. She drugged him and placed a Bloody Tongue tattoo on his chest — a permanent channel to Nyarlathotep. The god possesses him at will (eyes turn black, voice deepens), his personality replaced by imperious mockery and threats. The ink\'s poison is slowly rotting him from inside; he manages the pain with heavy heroin use. In Lima recruiting a fake expedition to break the ward imprisoning the Father of Maggots. His warm, self-deprecating surface conceals a man who is essentially a prisoner in his own body. If freed from Nyarlathotep\'s control, he may thank investigators with his last breath.',
    star: 'His tattoo is investigators\' first encounter with the Bloody Tongue\'s symbolism — recognized only later in America and Kenya.'
  },
  {
    id: 'de-mendoza', label: 'Luis de Mendoza', group: 'MYTHOS', type: 'Kharisiri — Peru',
    desc: 'Appears 30, actually 402 years old. One of the original Spanish conquistadors who discovered the Andean pyramid in 1543. Infected by the Father of Maggots\' larvae that night and transformed into a deathless, fat-sucking kharisiri. Spent 370 years as a mindless predator until Nyarlathotep (through Larkin) restored his human intelligence. Now serves as Larkin\'s bodyguard and enforcer in Lima. Gaunt, with deep-set blue eyes and an archaic, formal Spanish accent — impossible to place regionally. Rarely speaks except to threaten. Fixes people with an unblinking predatory stare. Possesses the Golden Mirror, hidden under his mattress at Hotel España. Stalks Trinidad Rizo to the university storeroom to kill or convert her. Has taken a particular dislike to Jackson Elias, whom he recognized as a threat from their first meeting.',
    star: null
  },

  // ── KEY ALLIES ───────────────────────────────────────────────────────────────
  {
    id: 'jackson-elias', label: 'Jackson Elias', group: 'ALLY', type: 'Key NPC — Catalyst',
    desc: 'Globe-trotting author specializing in exposés of death cults. In Peru (1921), operating under the pseudonym "Jesse Hughes" and posing as a folklorist. Has spent months near Lake Titicaca tracking kharisiri legends and followed de Mendoza to Lima. Warns investigators that Larkin\'s expedition is dangerous. Introduces them to Prof. Sánchez. After Peru, investigates Larkin\'s Kenyan background, follows the trail to M\'Weru and the Carlyle Expedition, finds Jack Brady in Shanghai. Writes up Peru events in The Hungry Dead (1923) — gold from the pyramid funds Carlton Ramsey\'s investigative reserve. Murdered January 1925 by the Cult of the Bloody Tongue.',
    star: '★★ His murder is the emotional inciting event of the campaign. His research notes are among the most vital clues investigators can find.'
  },
  {
    id: 'erica-c', label: 'Erica Carlyle', group: 'ALLY', type: 'Key NPC — New York',
    desc: 'Sole heir to the Carlyle millions since Roger was declared dead. Initially protective and suspicious of investigators. Can be persuaded to provide access to Roger\'s personal papers — a treasure trove of clues. Has a tough bodyguard (Joe Corey) and lawyer (Bradley Grey).',
    star: null
  },
  {
    id: 'jonah-k', label: 'Jonah Kensington', group: 'ALLY', type: 'Key NPC — New York',
    desc: 'Owner and chief editor of Prospero House publishers, which released all of Jackson Elias\' books including The Hungry Dead (1923). Friend and early contact for investigators in New York. Has Elias\' recent correspondence and partial notes.',
    star: null
  },
  {
    id: 'bundari', label: 'Old Bundari', group: 'ALLY', type: 'Key NPC — Kenya',
    desc: 'African tribal magician of great power in Kenya. Possesses the magical Bundari\'s Fly Whisk. Reached via Sam Mariga → Johnstone Kenyatta. His knowledge of the Mountain of the Black Wind and its defenses is invaluable.',
    star: null
  },
  {
    id: 'mu-hsien', label: 'Mu Hsien', group: 'ALLY', type: 'Key NPC — Shanghai',
    desc: 'Retired assistant curator of the Shanghai Museum. Jack Brady lives hidden in a secret room in Mu\'s home. Finding Mu Hsien is the investigators\' primary path to locating Brady in Shanghai.',
    star: null
  },
  {
    id: 'choi-mei', label: 'Choi Mei-ling', group: 'ALLY', type: 'Key NPC — Shanghai',
    desc: 'Jack Brady\'s lover in Shanghai. Was captured and interrogated by the sorcerer Carl Stanford. Her rescue may serve as a plot hook, and her knowledge of Brady\'s situation may prove vital.',
    star: null
  },
  {
    id: 'cowles', label: 'Prof. Anthony Cowles', group: 'ALLY', type: 'Key NPC — Australia Link',
    desc: 'Professor from the University of Sydney, currently a Fellow at Miskatonic University. Has photographs of ancient ruins in Western Australia. Key contact linking investigators to the Australia chapter.',
    star: null
  },
  {
    id: 'mahoney', label: 'Mickey Mahoney', group: 'ALLY', type: 'Key NPC — London',
    desc: 'Age 43. Red-haired, cigar-smoking, grubby Irish-descent journalist. Editor-publisher of The Scoop — a weekly Fleet Street tabloid of gory murders, sex scandals, and weird happenings. Jackson Elias\' old friend; knew Elias was researching an evil London cult. Provides access to The Scoop\'s back issues (the three Elias-flagged stories: Shipley, Lesser Edale, Egyptian Murders) and can name Inspector Barrington as a contact. Has extensive underworld contacts. Referred by Jonah Kensington. If investigators provoke Gavigan, cultists may ritually murder Mahoney.',
    star: null
  },
  {
    id: 'mariga', label: 'Sam Mariga', group: 'ALLY', type: 'Key NPC — Kenya',
    desc: 'African nationalist in Nairobi who can direct investigators to Johnstone Kenyatta (the future Jomo Kenyatta), who in turn leads them to Old Bundari.',
    star: null
  },

  // ── PERU ALLIES ──────────────────────────────────────────────────────────────
  {
    id: 'sanchez', label: 'Prof. Nemesio Sánchez', group: 'ALLY', type: 'Key NPC — Lima',
    desc: 'Age 35. Professor of Archaeology at the Universidad Nacional Mayor de San Marcos. One of the first academics hired when its Museum of Archaeology and Anthropology opened in 1919. Has extensive knowledge of South American history. Tried repeatedly to offer expertise to Larkin\'s expedition but was ignored each time. Befriended Jackson Elias and is working with him and student Trinidad Rizo to research the pyramid and kharisiri legends. Has access to the Figueroa document and the golden inlay section held at the university. Targeted by de Mendoza, who plans to infect him with a larva to use as a disinformation agent.',
    star: null
  },
  {
    id: 'rizo', label: 'Trinidad Rizo', group: 'ALLY', type: 'Key NPC — Lima',
    desc: 'Age 19. Undergraduate student of Prof. Sánchez. Found the Final Confessions of Gaspar Figueroa in the archive and produced a detailed summary (Carlyle Papers Peru #3). Also located a section of the original golden inlay in the university storeroom — the piece needed to repair the broken pyramid ward. De Mendoza stalks her to the storeroom to kill or convert her. If investigators intervene, she survives and can share full knowledge of the Figueroa account. If she is killed, only her notes survive.',
    star: null
  },
  {
    id: 'nayra', label: 'Nayra', group: 'ALLY', type: 'Key NPC — Peru Highlands',
    desc: 'Age 76. A yatiri — traditional Aymara healer and wisewoman near Puno. Currently hiding among the Uru people on the floating islands of Lake Titicaca after attracting the kharisiri\'s attention by helping Jackson Elias research local legends. Has extensive knowledge of the kharisiri mythology, the area\'s history, and can help locate the pyramid. Elias and she became friends during his months of highland research.',
    star: null
  },

  // ── MYTHOS ENTITIES ──────────────────────────────────────────────────────────
  {
    id: 'spawn', label: 'Spawn of Nyarlathotep', group: 'MYTHOS', type: 'Mythos Entity — Kenya',
    desc: 'The monstrous entity gestating within the doomed Hypatia Masters at the Mountain of the Black Wind. Its birth will kill Hypatia. Gigantic, mindless, and utterly terrifying. Prophesied to participate in the Great Rite alongside M\'Weru during the January 14, 1926 eclipse.',
    star: null
  },
  {
    id: 'great-race', label: 'Great Race of Yith', group: 'MYTHOS', type: 'Mythos Entity',
    desc: 'An alien race that built the vast underground city in Western Australia millions of years ago. Masters of time travel through mind transference. Their ancient technology — plundered by Huston — was adapted to design Sir Aubrey\'s doomsday rocket.',
    star: null
  },
  {
    id: 'kakakatak', label: 'Kakakatak', group: 'MYTHOS', type: 'Mythos Entity — Australia',
    desc: 'A member of the Great Race of Yith, physically shifted into the present by Dr. Robert Huston and imprisoned in the City of the Great Race. Could aid the investigators if they gain her trust.',
    star: null
  },
  {
    id: 'black-pharaoh', label: 'Black Pharaoh', group: 'MYTHOS', type: 'Avatar of Nyarlathotep',
    desc: 'Nyarlathotep\'s avatar in Egypt. A tall, slim figure with the young face of an antique pharaoh, dressed in prismatic robes. Manifests in the Bent Pyramid at Dahshur to tempt investigators. Worshipped by the Brotherhood of the Black Pharaoh.',
    star: null
  },
  {
    id: 'bloody-tongue', label: 'The Bloody Tongue', group: 'MYTHOS', type: 'Avatar of Nyarlathotep',
    desc: 'Nyarlathotep as a primal, mindless force of destruction. A black vapour with a great red appendage in place of a face. Summoned at the Mountain of the Black Wind in Kenya. Revels in death and blood. The first successful summoning was in 1916.',
    star: null
  },
  {
    id: 'ssathasaa', label: 'Ssathasaa', group: 'MYTHOS', type: 'Mythos Entity — England',
    desc: 'A serpent person disguised as "Bertha Shipley," mother of insane artist Miles Shipley — the real Mrs. Shipley having been eaten. Controls Miles\' disturbing art and his life. England sidetrack; independent of the Great Plan.',
    star: null
  },
  {
    id: 'father-of-maggots', label: 'Father of Maggots', group: 'MYTHOS', type: 'Avatar of Nyarlathotep — Peru',
    desc: 'El Padre de los Gusanos. A lesser avatar of Nyarlathotep imprisoned for almost 3,000 years within an Andean pyramid. A semi-fluid seething mass of rotten white matter that writhes restlessly, with nodules of flesh that crawl like worms and are reabsorbed. Its prison floor is filled with maggots and the husks of their pupae. The stench is beyond human endurance (Extreme CON roll or incapacitated). It sustains itself through fat offerings brought by the kharisiri. Not to be encountered directly.',
    star: null
  },
  {
    id: 'kharisiri', label: 'The Kharisiri', group: 'MYTHOS', type: 'Mythos Creatures — Peru',
    desc: 'Deathless half-human monsters born when Figueroa\'s conquistador companions were infected by larvae from the Father of Maggots in 1543. Appear human but can extend their mouths into large tooth-ringed discs to suck the body fat from victims. Have sustained their god for over 350 years. Currently over 30 roam the Andean highlands. Known in local folklore as kharisiri, pishtaku, or ñakaq. Luis de Mendoza is the most intelligent.',
    star: null
  },

  // ── AMERICA ALLIES ───────────────────────────────────────────────────────────
  {
    id: 'lt-poole', label: 'Lt. Martin Poole', group: 'ALLY', type: 'Key NPC — New York',
    desc: 'Age 43. Homicide detective at NYPD Precinct 7a in Chelsea. A heavy-set, cynical veteran who has seen the worst New York has to offer. Arrives at Room 410 of the Hotel Chelsea 45 minutes after Elias\' murder is discovered. Investigates both Elias\' death and the prior string of cult murders. Suspects Captain Robson is corrupt and that Hilton Adams may be innocent, but is reluctant to say so openly to civilians. Becomes an ally if investigators earn his trust — shares key links between the murders and the Bloody Tongue cult. Can arrange access to Sing Sing, and is furious when Robson pulls the captured cultists out from under his jurisdiction.',
    star: null
  },
  {
    id: 'carlton-ramsey', label: 'Carlton Ramsey', group: 'ALLY', type: 'Key NPC — New York',
    desc: 'Age 54. Jackson Elias\' lawyer for as long as Elias was a professional writer. Small, wiry African-American man filled with nervous energy. Office at 124th Street and Lenox Avenue, Harlem. Executor of Elias\' estate: liquidates Elias\' assets — including gold from the Peru pyramid — into a fund of ~$50,000 for investigators to continue the research. Acts as central coordinator between investigators across continents, paying travel, accommodation, legal, and medical costs on receipt of invoices. Elias visited him the day before his death to update his will, clearly in fear of his life. Will read at Ramsey\'s office on January 19, 1925.',
    star: null
  },
  {
    id: 'rebecca-shosenburg', label: 'Rebecca Shosenburg', group: 'ALLY', type: 'Key NPC — New York',
    desc: 'Age 27. Junior crime reporter at the New York Times. Covered the eight ritual murders in Harlem, wrote the article linking Elias\' death to the prior murders (Carlyle Papers America #9), and attends his funeral. Believes Captain Robson is corrupt and that Hilton Adams is innocent. Offers to introduce investigators to Millie Adams and arrange visits to Hilton at Sing Sing. Has access to the full Times archive of related clippings. The story could make her career. Works from the NYT offices at 229 West 43rd Street.',
    star: null
  },
  {
    id: 'hilton-adams', label: 'Hilton Adams', group: 'ALLY', type: 'Key NPC — New York',
    desc: 'Age 29. Innocent man on death row at Sing Sing prison, convicted in October 1924 for the eight ritual murders committed by the Cult of the Bloody Tongue. A former Sergeant in the 369th Infantry "Harlem Hellfighters" — who used his military background to organize community patrols against the cult disappearances. Framed by corrupt Captain Robson after the cult complained. His wife Millie and old war friends are still trying to prove his innocence. Names Mukunga M\'Dari as the real killer. Can describe the cult\'s activities and Ju-Ju House. Becomes an excellent replacement investigator if exonerated.',
    star: 'Exonerating Adams requires destroying or exposing the cult and/or proving Robson\'s corruption. His execution is a ticking clock.'
  },
  {
    id: 'millie-adams', label: 'Millie Adams', group: 'ALLY', type: 'Key NPC — New York',
    desc: 'Age 27. Hilton Adams\' wife. Elegant African-American woman with quiet determination and impeccable appearance. Has been conducting her own dangerous surveillance of Ju-Ju House since her husband\'s arrest — tracking cult meeting nights (monthly, 1–1:30 a.m., 20–30 people) and the crates delivered beforehand. Too careful to enter Ransom Court herself. Met via Rebecca Shosenburg at the Lafayette Theater. Provides key operational intelligence on the cult\'s schedule in exchange for investigators\' commitment to prove Hilton\'s innocence.',
    star: null
  },
  {
    id: 'bradley-grey', label: 'Bradley Grey', group: 'ALLY', type: 'Key NPC — New York',
    desc: 'Age 41. Erica Carlyle\'s chief confidant and a partner at law firm Dunstan, Whittleby & Grey (West 57th Street). Did not like Roger Carlyle and knows nothing of M\'Weru\'s influence on him. Investigators must impress Grey to gain a meeting with Erica — by implying Roger may be alive, presenting sound credentials, promising a "favorable" account of the expedition, or a successful Persuade/Credit Rating roll. Can panic if publicly embarrassed. Present during all formal interviews with Erica.',
    star: null
  },
  {
    id: 'arthur-emerson', label: 'Arthur Emerson', group: 'ALLY', type: 'Key NPC — New York',
    desc: 'Age 53. Proprietor of Emerson Imports. Native New Yorker who turns a blind eye to shady shipments for material gain. His business card — with "Silas N\'Kwane" written on the back by Elias — is found in Room 410. Surprised and saddened by Elias\' death. Does not ask too many questions but dislikes N\'Kwane and is willing to point investigators toward Ju-Ju House and confirm the cult connection. Can also name Ahja Singh in Mombasa as a cult logistics contact.',
    star: null
  },
  {
    id: 'mordecai-lemming', label: 'Dr. Mordecai Lemming', group: 'ALLY', type: 'Key NPC — New York',
    desc: 'Age 62. Eccentric, self-styled folklorist staying at the Murray Hill Hotel (East 40th Street). Last scion of a wealthy New York Jewish family. No formal qualifications but encyclopaedic knowledge of folk beliefs. Named by both Lt. Poole and Shosenburg as having identified the Bloody Tongue cult symbol. Completely oblivious to the true nature of the cult or N\'Kwane\'s role. Unwittingly directs investigators to Ju-Ju House by referring them to "the helpful Mr. N\'Kwane." Garrulous, loves an audience, and will talk for hours if not escaped.',
    star: null
  },
  {
    id: 'miriam-atwright', label: 'Miriam Atwright', group: 'ALLY', type: 'Key NPC — New York',
    desc: 'Age 47. Reference librarian at Harvard University\'s Widener Library, specializing in anthropology. Her letter to Elias — found in Room 410 — concerns his request for a copy of Africa\'s Dark Sects, which has mysteriously vanished from the library. Unaware of Elias\' death until investigators tell her. Can assist with research on the Bloody Tongue symbol, death cults, and anthropological reference, and may be able to locate Mythos tomes. An excellent academic resource throughout the campaign.',
    star: null
  },
  {
    id: 'needham-johnson', label: 'Needham Johnson', group: 'ALLY', type: 'Key NPC — New York',
    desc: 'Age 30. Former Corporal in the 369th "Harlem Hellfighters," now a reporter at the New York Age. One of Hilton Adams\' closest friends — all of whom formed their own investigative group before Robson intimidated them into silence with threats to their families. Johnson has been pressured by his employers to distance himself from the cult story. Knows Adams is innocent but feels trapped. Can confirm details about Harlem disappearances and cult activity but is reluctant to get further involved without a clear path forward. Holds the Croix de Guerre.',
    star: null
  },

  // ── AMERICA ENEMIES ──────────────────────────────────────────────────────────
  {
    id: 'capt-robson', label: 'Capt. Walter Robson', group: 'ENEMY', type: 'Antagonist — New York',
    desc: 'Age 52. Corrupt NYPD Captain at the 14th Precinct in Harlem. Not a cult member — he thinks M\'Dari is simply a smuggler and is happy to take the cult\'s money like any other bribe. Framed Hilton Adams for the cult\'s murders when Adams became a danger to their operations. Will threaten investigators with trumped-up charges if they start making waves in Harlem. Tall, grey-haired, superficially charming with a ready smile, but quickly brutal when pressed. Can be flipped against the cult if investigators confront him with irrefutable evidence of its true nature.',
    star: null
  },
  {
    id: 'silas-nkwane', label: "Silas N'Kwane", group: 'ENEMY', type: 'Antagonist — New York',
    desc: 'Age 73. Skeletally thin, wizened manager of Ju-Ju House in Ransom Court, Harlem. Arrived from Kenya as part of M\'Weru\'s escort in 1917. Long insane from Bloody Tongue rites. Runs the shop as a front for the cult. Knows of the chakota but little else beyond cult operations. Cowardly by nature — will snivel and beg if threatened, while looking for the first chance to flee and raise the alarm. Directs Lemming and others to the shop; accepts shipments from Emerson Imports. Wears a bright red shuka in the shop; dresses in a suit when conducting external business.',
    star: null
  },

  // ── AMERICA MYTHOS ───────────────────────────────────────────────────────────
  {
    id: 'chakota', label: 'The Chakota', group: 'MYTHOS', type: 'Mythos Entity — New York',
    desc: 'The Spirit of Many Faces. A thickly cylindrical, worm-like mass of sickly purple-veined muscle — roughly 8 ft tall and 6 ft in diameter — studded with dozens of human faces that weep, shout, and cry out with great woeful feeling. Each face belongs to a consumed victim. Lives at the bottom of a 15 ft pit beneath the sacrificial chamber of Ju-Ju House, covered by a stone block that muffles its constant wailing. Once uncovered, it expects to be fed within 10 minutes. If not fed, its screams fill the room. Worshipped as a spirit subservient to the Bloody Tongue. A marine chronometer hangs on the wall above the priest\'s robes above the pit — identical to those in Cairo and Shanghai.',
    star: null
  },
  {
    id: 'ciimba', label: 'The Ciimba', group: 'MYTHOS', type: 'Mythos Creatures — New York',
    desc: 'Undead guardians stationed in the sacrificial chamber of Ju-Ju House by Mukunga M\'Dari. Reanimated cult victims, kept as guards and shock troops to defend the basement temple. Their presence in the chamber will be immediately noticed by M\'Dari on his daily inspection if disturbed. Their corpses — stored in packing crates — constitute evidence of the cult\'s crimes and could be transported to Lt. Poole or even Captain Robson. Defeating ciimba is worth +1D8 sanity; defeating the chakota +1D10.',
    star: null
  },

  // ── KEY LOCATIONS ────────────────────────────────────────────────────────────
  {
    id: 'ju-ju-house', label: 'Ju-Ju House', group: 'LUGAR', type: 'Location — New York',
    desc: 'A curio shop at Ransom Court, Harlem, run by Silas N\'Kwane as a front for the Cult of the Bloody Tongue. The enlarged basement houses the cult\'s sacrificial temple, where monthly rites are performed by 20–30 cultists during the dark of the moon (starting around 1:30 a.m.). The chakota pit is sealed by a stone block; the ciimba guard the chamber. M\'Dari\'s alcove contains a locked cash box (victims\' personal effects, potential evidence), leather sacrificial thongs, packing crates with dried blood, a marine chronometer set to GMT, a carved scepter granting magic points, and a Nodens headband protecting against nightgaunts. Deliveries of crated victims arrive an hour before ritual nights. N\'Kwane receives bribes via Emerson Imports\' supply chain.',
    star: null
  },
  {
    id: 'penhew-found', label: 'Penhew Foundation', group: 'LUGAR', type: 'Location — London',
    desc: 'High Victorian building on Devonshire Street (off Theobalds Road), Bloomsbury, London. Founded 1890 by Sir Aubrey Penhew. Ground floor: Gavigan\'s wood-paneled office (floor safe with marked banknotes as a trap; photograph of Misr House on desk; secret door to storage room); storage room with a hidden basement entrance (mummy case over electric-motor trapdoor). Basement secret room: Gavigan\'s spell-casting studio, bookcase with Mythos tomes (Équinoxe Divisé, Book of Dzyan, Liber Ivonis), cult artwork, ornate chest with enchanted daggers, five applications of Powder of Ibn-Ghazi, bundles of £2,000 in cash, false passports, receipts pointing to Henson Manufacturing and Chaudhary\'s warehouse, and the Bloated Woman statue crate marked for Ho Fang Shanghai. Second floor: Exhibit Hall (Egyptian antiquities). Receives Yithian technology from Huston in Australia → Henson Manufacturing → Chaudhary\'s warehouse → Ivory Wind → Ho Fang → Gray Dragon Island.',
    star: null
  },
  {
    id: 'misr-house', label: 'Misr House', group: 'LUGAR', type: 'Location — Essex',
    desc: 'Edward Gavigan\'s private country estate in the rural Essex countryside, northeast of London. A large three-story mansion on extensive grounds — photograph of it sits on Gavigan\'s Foundation office desk. The Brotherhood of the Black Pharaoh holds both Lesser Rites (monthly) and Grand Rites (new moon) here. A stone stele in the grounds serves as the focal point for ceremonies. Cultists are collected by vehicles from the Penhew Foundation and the Blue Pyramid Club and transported here. Captives are held in dungeon cells awaiting sacrifice. The Grand Rite involves inductions, chanting, sacrifices bludgeoned with spiked clubs, and the manifestation of a herald (hunting horror, shantaks, or Million Favored Ones). Gavigan\'s secret workroom here holds his ledger (Carlyle Papers England #12) naming his full network. One of the two critical rite locations in England (along with Henson); investigators must disrupt at least one major ceremony here to neutralize the London cult.',
    star: '★★ Chapter climax location. Disrupting the Grand Rite here is the decisive action of the England chapter.'
  },
  {
    id: 'lesser-edale', label: 'Lesser Edale', group: 'LUGAR', type: 'Location — England (Sidetrack)',
    desc: 'A beautiful village in the Edale Valley, Derbyshire Peak District, 170 miles north of London. Setting of the Derbyshire Horror sidetrack. Three months ago, farmer George Osgood and Lydia Perkins were torn to shreds on consecutive full-moon nights; Harold Short was badly injured but survived and has fled to Skegness to recuperate. Constable Hubert Tumwell shot a "rabid dog" and declared the matter closed. Key local NPCs: Constable Tumwell, Rev. Jeremy Stratton (glimpsed the creature), Bill Tatlock (Laughing Horse Inn owner), Lord Arthur Vane, Lawrence Vane. The Vane family ancestral curse is the true cause: Eloise Vane transforms into a ghoul on full-moon nights. Not directly connected to the main cult network but linked via Mahoney\'s Scoop article.',
    star: null
  },

  // ── ENGLAND LOCATIONS ────────────────────────────────────────────────────────
  {
    id: 'the-scoop', label: 'The Scoop', group: 'LUGAR', type: 'Location — London',
    desc: 'Mickey Mahoney\'s weekly tabloid newspaper, published from the third floor of a shabby building on Fleet Street near Ludgate Circus. Key entry point for investigators in London. Back-issue archive contains the three Elias-flagged stories: Carlyle Papers England #1 (Shipley / Chelsea Serpent sidetrack), #2 (Lesser Edale / Derbyshire Horror sidetrack), #3 (Egyptian Murders / Slaughter in Soho, pointing to Inspector Barrington). Research takes 1D4+1 hours (halved with Library Use roll). Mahoney offers £15 for the full cult story. If investigators alert Gavigan first, cultists may follow them to The Scoop and later murder Mahoney.',
    star: null
  },
  {
    id: 'limehouse-docks', label: 'Limehouse Docks', group: 'LUGAR', type: 'Location — London',
    desc: 'Grimy dockland district of East London, infamous for gambling, opium, and crime. Puneet Chaudhary\'s warehouse on Ropemakers Fields is the Brotherhood\'s London shipping hub: receives crates of Mythos artifacts and Henson Manufacturing rocket components from the Foundation, then forwards them to the Ivory Wind for shipment to Ho Fang Import/Export in Shanghai. Guarded by lascars — mercenary sailors from South and Southeast Asia. Crates found inside include the Bloated Woman statue (Ho Fang, Shanghai) and a Cthulhu statuette (Randolph Shipping, Darwin, Australia). The Ivory Wind is docked in the Regent\'s Canal Dock. Following a Foundation truck here is a key investigative thread.',
    star: null
  },
  {
    id: 'ivory-wind', label: 'The Ivory Wind', group: 'LUGAR', type: 'Location — London (Ship)',
    desc: 'A dilapidated 7,000-ton merchantman with Chinese registry docked at the Regent\'s Canal Dock, Limehouse. Captained by Lars Torvak (alcoholic Norwegian). Route: Marseilles → Malta → Port Said → Aden → Bombay → Singapore → Shanghai. Hauls both legitimate cargo and Gavigan\'s cult crates for Ho Fang Import/Export. Torvak knows he\'s transporting undocumented goods but believes they are rare antiquities. Has never opened the crates. Fears imprisonment and loss of his ship — the lever investigators can use to get him to cooperate. Investigators who stow away on the Ivory Wind can travel to Shanghai in approximately 6–12 weeks.',
    star: null
  },
  {
    id: 'henson-manuf', label: 'Henson Manufacturing', group: 'LUGAR', type: 'Location — Derby',
    desc: 'Small, out-of-the-way industrial workshop on Uttoxeter Road, Derby — owned by Edward Gavigan since 1921. Its 7 workers (engineers, mold maker, furnace workers, apprentice) believe they are doing top-secret War Office work. Their actual task: using Yithian technology crates from Australia to reverse-engineer and fabricate components for Sir Aubrey\'s rocket. A walk-in safe holds finished components and Yithian devices. The blueprints are signed "Pale Viper." 6 cult guards under Frank Marshall oversee operations. A final shipment to Shanghai is still pending. Gavigan visits monthly; investigators can follow him from St. Pancras Station to Derby.',
    star: null
  },
  {
    id: 'blue-pyramid', label: 'Blue Pyramid Club', group: 'LUGAR', type: 'Location — London',
    desc: 'Private members club at 12B Meard Street, Soho. Egyptian-themed ballroom, bar, coffee room, drawing room with belly dancers and musicians. Open 6 p.m.–1 a.m. nightly. Owned by Abdul Nawisha (intimidated into silence by Gavigan). De facto controlled by Zahra Shafik, who uses it as her operational HQ for the London Brotherhood. Up to 10 cultists present at any time. Monthly midnight pickup sends cultists to Misr House in Essex. Cellar holds captives before transport to Essex. Key contact: Yalesha Essam (belly dancer, will whisper leads to investigators). Barrington had the club watched but found no tangible evidence. Gavigan is listed in the membership register.',
    star: null
  },
  {
    id: 'empire-spices-loc', label: 'Empire Spices', group: 'LUGAR', type: 'Location — London',
    desc: 'Zahra Shafik\'s two-story spice shop at 76 Wardour Street, Soho. Legitimate front for the London Brotherhood\'s day-to-day operations. Ground floor: shop, office (above-board accounts), storeroom (Edjo\'s sleeping area), kitchen, cellar. Upper floor: Shafik\'s lavishly appointed flat, housing the Mirror of Gal (ancient Mythos artifact in a gilt frame) and statuettes of Egyptian gods. Gavigan visits weekly (same night as the investigators\' interview). The cult cellar can hold captive investigators until they are transferred to the Blue Pyramid Club or Misr House. Edjo can summon 8–16 cultists within 5 minutes. Inspector Barrington had Shafik watched for days but learned little.',
    star: null
  },
  {
    id: 'miles-shipley-home', label: "Shipley's Home (Chelsea)", group: 'LUGAR', type: 'Location — England (Sidetrack)',
    desc: '6 Holbein Mews, near Sloane Square, Chelsea SW1W. Home-studio of insane painter Miles Shipley and lair of the serpent person Ssathasaa (disguised as his elderly "mother" Bertha Shipley). Ssathasaa has been feeding Shipley visions of the serpent people\'s historical rule via hypnosis and the Plutonian Drug in exchange for food (human victims) and accommodation. Shipley\'s paintings depict Mythos truths with uncanny accuracy — sought after by collectors for up to £300 each. One painting (signed "M.S.") is packed at the Penhew Foundation, addressed to Ho Fang as a gift. An independent threat unrelated to Nyarlathotep\'s Great Plan.',
    star: null
  },

  // ── ENGLAND MYTHOS ───────────────────────────────────────────────────────────
  {
    id: 'thing-in-the-fog', label: 'Thing in the Fog', group: 'MYTHOS', type: 'Mythos Entity — London',
    desc: 'A fog-spawn — a being of animated London fog with "hideous life" that Gavigan can summon to pursue and kill investigators who have become too troublesome. Appears as a nothing possessing terrible form; smells of smouldering hair; fills its victims\' lungs and chokes them to death. Invisible except as a denser patch of fog. Can only operate in the London pea-soupers. Gavigan uses this entity as a last resort when cultist thugs have failed to eliminate the investigators.',
    star: null
  },
  {
    id: 'eloise-vane', label: 'Eloise Vane', group: 'MYTHOS', type: 'Mythos Entity — England (Sidetrack)',
    desc: 'Age 21. Heiress to the Vane family curse of Lesser Edale. Since her 21st birthday three months ago, she transforms into a ghoul during the three nights of the full moon — killing and consuming whatever she encounters. In human form: pretty, blonde, innocent-eyed, with no memory of her transformations. In ghoul form: hardened gray flesh, yellowed talons, razor-sharp teeth, dog-like animalistic features. Lord Arthur and Lawrence Vane drug her and lock her in the castle dungeon during full moons. Each month, the transformation period grows longer. The investigators face a moral dilemma: kill her, contain her, or let her go.',
    star: null
  },

  // ── ENGLAND ALLIES & NPCS ────────────────────────────────────────────────────
  {
    id: 'insp-barrington', label: 'Insp. Barrington', group: 'ALLY', type: 'Key NPC — London',
    desc: 'Age 53. Inspector James Barrington of New Scotland Yard — thin, clipped mustache, weary eyes, slightly shabby suit. Investigating the "Egyptian Murders": 19 victims over three years, all killed by a spike through the heart and bludgeoned with a spiked club. His predecessor Inspector Munden disappeared (murdered by the cult). Follows procedure by the book. Provides leads to Gavigan, the Blue Pyramid Club, and Zahra Shafik. Directed to investigators by Jonah Kensington (via Elias). Can be persuaded to raid Misr House with police backup if presented with compelling physical evidence. A wild card: helps or hinders depending on how investigators handle him.',
    star: null
  },
  {
    id: 'yalesha-essam', label: 'Yalesha Essam', group: 'ALLY', type: 'Key NPC — London',
    desc: 'Age 19. Young Egyptian belly dancer at the Blue Pyramid Club. Her boyfriend Badru was murdered by the Brotherhood. She seeks revenge. Will discreetly pass a note or whisper to investigators: "Meet me near the arches at midnight." Reveals the monthly midnight cult pickups from the club (Misr House, Essex) and confirms Zahra Shafik controls the club and owns Empire Spices on Wardour Street. If overheard by cult spies, she will be abducted and held in the Blue Pyramid cellar as a future sacrifice.',
    star: null
  },
  {
    id: 'thomas-kinnery', label: 'Thomas Kinnery', group: 'ENEMY', type: 'Minor NPC — London',
    desc: 'Age 36. Gavigan\'s obsequious private secretary at the Penhew Foundation. Small frame, pinstripe suit, pointed nose. Brotherhood member who accompanies Gavigan to Misr House rites but not to Derby. Acts as gatekeeper to Gavigan\'s appointments. If captured and interrogated, may inadvertently reveal the next rite date at Misr House or Gavigan\'s monthly Derby trips. Will give his life to protect Gavigan.',
    star: null
  },
  {
    id: 'puneet-chaudhary', label: 'Puneet Chaudhary', group: 'ENEMY', type: 'Minor NPC — London',
    desc: 'Age 44. Owner of the Limehouse warehouse on Ropemakers Fields. Not a Brotherhood member — purely financially motivated. Paid by Gavigan to ship Mythos artifacts and rocket components to Ho Fang in Shanghai aboard the Ivory Wind. Fearless and ruthless. Can be coerced using his fear of customs authorities.',
    star: null
  },
  {
    id: 'lars-torvak', label: 'Lars Torvak', group: 'ALLY', type: 'Minor NPC — London',
    desc: 'Age 54. Alcoholic Norwegian captain of the Ivory Wind. No knowledge of the Brotherhood. Paid by Chaudhary to ship undocumented goods to Ho Fang in Shanghai — believes they are rare antiquities. Fears imprisonment and losing his ship. Can be coerced into cooperating. Offers a potential route to Shanghai for investigators willing to stow away.',
    star: null
  },
  {
    id: 'frank-marshall', label: 'Frank Marshall', group: 'ENEMY', type: 'Minor NPC — Derby',
    desc: 'Age 36. Gavigan\'s loyal cult foreman at Henson Manufacturing, Derby. Tall, muscular, scar on left cheek. Oversees 6 cult guards while legitimate engineers unknowingly fabricate rocket components. Turns away all visitors; sends investigators to Misr House if captured.',
    star: null
  },
  {
    id: 'abdul-nawisha', label: 'Abdul Nawisha', group: 'ALLY', type: 'Minor NPC — London',
    desc: 'Age 48. Portly Egyptian owner of the Blue Pyramid Club. Not a Brotherhood member but terrified of the cult. Paid hush money by Gavigan to ignore the cult\'s use of his club and cellar. Will not cooperate with investigators without extreme pressure.',
    star: null
  },
  {
    id: 'miles-shipley', label: 'Miles Shipley', group: 'ALLY', type: 'Minor NPC — England (Sidetrack)',
    desc: 'Age 37. Insane painter at 6 Holbein Mews, Chelsea. Entrapped by Ssathasaa in 1923 via hypnosis and the Plutonian Drug, which sent his mind back to the era of serpent people rule. Now addicted, forced to procure victims for Ssathasaa, and filling canvases with uncanny Mythos visions. Torn between fear of Ssathasaa and guilt — could be turned to investigators\' side with sufficient time and effort.',
    star: null
  },

  // ── KEY LOCATIONS CONTINUED ───────────────────────────────────────────────────
  {
    id: 'red-pyramid', label: 'Red / Bent Pyramid', group: 'LUGAR', type: 'Location — Egypt',
    desc: 'The Red and Bent Pyramids at Dahshur, Egypt. Site of an ancient Elder Ward sealing Nyarlathotep\'s access. Roger Carlyle broke this ward at the Red Pyramid\'s summit, allowing the Black Pharaoh to appear and tempt the expedition — the first critical step of the Great Plan. The Bent Pyramid interior leads to Nyarlathotep\'s sanctum: a jewelled throne room described in Crompton\'s Life as a God. Investigators may attempt to replace the ward.',
    star: null
  },
  {
    id: 'mountain-bw', label: 'Mountain of the Black Wind', group: 'LUGAR', type: 'Location — Kenya',
    desc: 'A high Kenyan peak of ancient terrible power. Site of the first successful summoning of the Bloody Tongue (1916). M\'Weru\'s stronghold and prison of the dying Hypatia Masters. The Spawn will be born here during the eclipse. One of the three critical loci of the Great Rite — up to 10 cult points.',
    star: '★★ Most critical site in Kenya. Both M\'Weru and the Spawn must be stopped AND the ward placed here.'
  },
  {
    id: 'gray-dragon', label: 'Gray Dragon Island', group: 'LUGAR', type: 'Location — China',
    desc: 'A volcanic island in the China Sea, east of Shanghai. Sir Aubrey Penhew\'s base of operations and the launch site for the doomsday rocket. The rocket must be destroyed and/or the island warded to prevent the opening of the Great Gate.',
    star: '★★ The decisive target of the final chapter. Destroying the rocket here is the most impactful single action in the campaign.'
  },
  {
    id: 'yith-city', label: 'City of the Great Race', group: 'LUGAR', type: 'Location — Australia',
    desc: 'A vast underground city hidden beneath the Great Sandy Desert of Western Australia, built millions of years ago by the Great Race of Yith. Huston\'s cultists plunder it for pre-human technology. The Purple Dome Temple within forms the Australian locus for the Great Rite.',
    star: null
  },

  // ── PERU LOCATIONS ───────────────────────────────────────────────────────────
  {
    id: 'pyramid-peru', label: 'The Pyramid (Andes)', group: 'LUGAR', type: 'Location — Peru',
    desc: 'An ancient pyramid of unknown Tiwanaku origin in the southern Andean highlands southwest of Lake Titicaca. Its inner walls and surrounding tunnel system are inlaid with continuous gold warding designed to contain the Father of Maggots. In 1543, Figueroa\'s party removed a section of gold, weakening the ward and allowing larvae to escape — creating the first kharisiri. The Pool of Filth (broken section flooded with rancid fat and larvae) marks the gap. The Chamber near the base holds treasure accumulated by kharisiri. The golden ward must be repaired to re-imprison the god and kill all kharisiri.',
    star: null
  },
  {
    id: 'bar-cordano', label: 'Bar Cordano', group: 'LUGAR', type: 'Location — Lima',
    desc: 'Restaurant and bar at Jirón Ancash 202, Lima District. Venue for the expedition\'s first dinner on March 18, 1921. Larkin, de Mendoza, Jackson Elias ("Jesse Hughes"), and the investigators meet here. Larkin outlines his expedition and shows the gold artifacts (a Tiwanaku pendant and an Incan golden cup). A Psychology roll detects hostility between de Mendoza and Elias, and that Larkin\'s story about the farmer is not the complete truth.',
    star: null
  },
  {
    id: 'hotel-espana', label: 'Hotel España', group: 'LUGAR', type: 'Location — Lima',
    desc: 'Small, eccentrically decorated Lima hotel run by elderly Petronila Cupitina. Larkin and de Mendoza stay in neighboring rooms on the upper floor. Larkin\'s room is chaotic — clothes everywhere, a bottle of heroin on the nightstand. De Mendoza\'s room is antiseptically neat; he does not sleep. The Golden Mirror is hidden under de Mendoza\'s mattress. 10-minute walk from the investigators\' Hotel Maury.',
    star: null
  },
  {
    id: 'hotel-maury', label: 'Hotel Maury', group: 'LUGAR', type: 'Location — Lima',
    desc: 'One of Lima\'s finest hotels, in the city center. Larkin has arranged accommodation here for the investigators and Jackson Elias. Famous for its Pisco Sour cocktails. The investigators\' base of operations in Lima before departing for the highlands.',
    star: null
  },
  {
    id: 'univ-lima', label: 'Univ. San Marcos / Museum', group: 'LUGAR', type: 'Location — Lima',
    desc: 'Universidad Nacional Mayor de San Marcos (founded 1551, oldest university in the Americas) and its Museo de Arqueología y Antropología (opened 1919). Prof. Sánchez\'s office is here. The university archive holds the Final Confessions of Gaspar Figueroa (1543). The basement storeroom holds a section of the original gold warding recovered from the ruins — crucial for repairing the pyramid\'s broken ward. De Mendoza stalks here to kill or convert Trinidad Rizo.',
    star: null
  },
  {
    id: 'lake-titicaca', label: 'Lake Titicaca / Puno', group: 'LUGAR', type: 'Location — Peru Highlands',
    desc: 'The city of Puno on the shores of Lake Titicaca in the southern Andean highlands. Jump-off point for the expedition — Larkin plans to buy pack animals here. Elias spent months here researching kharisiri legends and befriended Nayra. The Uru people live on floating islands on the lake; Nayra hides among them. Travel beyond Puno to the pyramid is a multi-day trek across the highlands.',
    star: null
  },

  // ── AMERICA LOCATIONS ────────────────────────────────────────────────────────
  {
    id: 'hotel-chelsea', label: 'Hotel Chelsea', group: 'LUGAR', type: 'Location — New York',
    desc: 'The Hotel Chelsea at 222 West 23rd Street, Manhattan. Jackson Elias\' preferred New York hotel. Room 410 is the scene of his brutal murder on the night of January 15, 1925. The cultist killers — Iregi Kipkemboi, Colm Doyle, and Jimmy Jepleting — are caught mid-ritual when investigators knock. Key clues left in the room (or taken by fleeing killers): Warren Besart letter (→ Egypt), Gavigan business card (→ London), Stumbling Tiger matchbook (→ Shanghai), blurry yacht photo ("DAR_" → Dark Mistress/Shanghai), Emerson Imports card with "Silas N\'Kwane" on back (→ Harlem), Atwright letter (→ Harvard), Cowles handbill (→ Australia), Bloody Tongue rune carved into Elias\' forehead. Lt. Poole arrives 45 minutes after the murder.',
    star: '★★ The campaign\'s first scene. Every investigative thread in America radiates from Room 410.'
  },
  {
    id: 'prospero-house', label: 'Prospero House', group: 'LUGAR', type: 'Location — New York',
    desc: 'Jonah Kensington\'s publishing house on Lexington Avenue near 35th Street. Friendly and informal. Publishes books of occult and fantastic interest — all of Elias\' books. Contains Elias\' correspondence file with key research letters (Carlyle Papers America #11–13) including his fragmented final notes: "Many names, many forms, but all the same… All of them survived! They\'ll open the gate… The books are in Carlyle\'s safe…" Kensington is reluctant to share the final notes (they reflect poorly on Elias\' sanity) but can be persuaded. Also holds Mickey Mahoney\'s contact info (London) and Inspector James Barrington (Scotland Yard).',
    star: null
  },
  {
    id: 'carlyle-estate', label: 'Carlyle Estate', group: 'LUGAR', type: 'Location — New York',
    desc: 'Erica Carlyle\'s Westchester County estate, half an hour north of New York City on the Hudson River. Three-story mansion on five acres, surrounded by a 12 ft iron fence with armed gatekeepers and patrolling guard dogs. The mansion library contains a hidden wall safe (behind a bookcase, opened with the combination in Erica\'s copy of Poe\'s collected poems: R15 L14 R13 L12). The safe holds four Mythos tomes: The Pnakotic Manuscripts, Sélections de Livre D\'Ivon, Amongst the Stones, and Life as a God — the last referencing the Black Pharaoh\'s throne room in the Bent Pyramid. Cultists previously broke in attempting to recover the books.',
    star: null
  },
  {
    id: 'harlem', label: 'Harlem', group: 'LUGAR', type: 'Location — New York',
    desc: 'The culturally vibrant but police-brutalized neighborhood of Manhattan at the heart of the Harlem Renaissance (1924–1929). The Cult of the Bloody Tongue recruits heavily from its dockworkers, sailors, and vulnerable population. Scene of eight prior ritual murders going back two years before Elias\' death. Hilton Adams organized community patrols here; Captain Robson controls the 14th Precinct. Key sub-locations: Ju-Ju House (Ransom Court), Carlton Ramsey\'s office (124th St & Lenox Ave), Lafayette Theater (132nd St & 7th Ave), Teddy\'s saloon (Hellfighters\' meeting spot), and the local branches of the New York Public Library and New York Age.',
    star: null
  },
  {
    id: 'emerson-imports', label: 'Emerson Imports', group: 'LUGAR', type: 'Location — New York',
    desc: 'Arthur Emerson\'s import business. Supplies African tribal paraphernalia to Ju-Ju House and turns a deliberate blind eye to shady shipments. Emerson\'s business card — with "Silas N\'Kwane" written on the back by Elias — is a key clue found in Room 410. Emerson can confirm the connection to Ju-Ju House and identify N\'Kwane. Also the link to Ahja Singh, the cult\'s logistics contact in Mombasa, Kenya — a lead that directly connects New York to Africa.',
    star: null
  },
  {
    id: 'sing-sing', label: 'Sing Sing Prison', group: 'LUGAR', type: 'Location — New York',
    desc: 'Sing Sing Correctional Facility, Ossining, New York — where Hilton Adams awaits execution by electric chair for crimes committed by the Cult of the Bloody Tongue. Sub-warden George Brunton oversees Death House and is not fully convinced of Adams\' guilt — gives investigators more leeway than he should during interviews. Visits can be arranged by Rebecca Shosenburg or Lt. Poole. Visible from the road north of the city (investigators also glimpse it driving to the Carlyle Estate).',
    star: null
  },

  // ── KEY ARTIFACTS ────────────────────────────────────────────────────────────
  {
    id: 'rocket', label: "Penhew's Rocket", group: 'ARTIFACT', type: 'Artifact — Weapon',
    desc: 'A rocket of cosmic destruction designed by Sir Aubrey Penhew using Yithian technology. Its warhead tears open a portal to multiple dimensions of nightmare, providing the initial breach for the Great Gate. Constructed on Gray Dragon Island.',
    star: '★★ Destroying or sabotaging this rocket is the investigators\' ultimate goal in China. Worth up to 10 cult points.'
  },
  {
    id: 'chronometers', label: 'Marine Chronometers', group: 'ARTIFACT', type: 'Artifact — Tool',
    desc: 'Exceedingly accurate chronometers held by cult leaders at each of the three critical loci (Kenya, Australia, China). Used to synchronize the Great Rite to the exact moment of the January 14, 1926 solar eclipse. Destroying or tampering with one deducts 1 cult point per locus.',
    star: null
  },
  {
    id: 'eye-light', label: 'Eye of Light and Darkness', group: 'ARTIFACT', type: 'Artifact — Ward',
    desc: 'A powerful Elder Ward investigators can inscribe upon a ritual site to prevent its use for the Great Rite. Halves the cult\'s point score at that locus. Instructions in the Seven Cryptical Books of Hsan (China). Its principle — a warding inscription in natural substance near a place of evil — directly echoes the Golden Ward of the Peruvian pyramid; repairing that ward in the prologue foreshadows this key weapon.',
    star: null
  },
  {
    id: 'carlyle-docs', label: 'Carlyle Papers', group: 'ARTIFACT', type: 'Artifact — Evidence',
    desc: 'Documentary evidence concerning the Carlyle Expedition — Roger Carlyle\'s diary, Dr. Huston\'s patient records, and Elias\' research. Erica Carlyle controls access to her brother\'s personal papers. Among the first and most important clue sources in the America chapter.',
    star: null
  },

  // ── PERU ARTIFACTS ───────────────────────────────────────────────────────────
  {
    id: 'golden-ward', label: 'The Golden Ward', group: 'ARTIFACT', type: 'Artifact — Ward (Peru)',
    desc: 'An uninterrupted band of gold inlay hammered into the inner tunnel walls of the Andean pyramid, designed to contain the Father of Maggots. Damaged in 1543 when Figueroa\'s party removed a section. That missing piece was eventually recovered and stored in the university storeroom — Trinidad Rizo locates it. Returning the section to the pyramid repairs the ward, re-imprisons the god, and causes all kharisiri to wither and die. Direct thematic precursor to the Eye of Light and Darkness used in the main campaign.',
    star: null
  },
  {
    id: 'golden-mirror', label: 'Golden Mirror', group: 'ARTIFACT', type: 'Artifact — Vision Object',
    desc: 'A Tiwanaku gold mirror similar in design to Larkin\'s pendant, hidden under de Mendoza\'s mattress at Hotel España. Can grant investigators visions that foreshadow images and plot elements from later chapters of the campaign. Locatable with a Spot Hidden or Appraise roll in de Mendoza\'s room.',
    star: null
  },
  {
    id: 'figueroa-notes', label: "Figueroa's Final Confessions", group: 'ARTIFACT', type: 'Artifact — Evidence (Peru)',
    desc: 'Carlyle Papers Peru #3. Spanish document written by conquistador Gaspar Figueroa in 1543, summarized by Trinidad Rizo. Documents how five conquistadors (Figueroa, Ruiz, Garrido, de Mendoza, de Velasco) found the pyramid, removed gold from its walls, and were infected by larvae that night. Figueroa shot de Mendoza in the head and fled. He died in Lima one day after completing his Final Confessions. Establishes the identity and origin of the kharisiri, the pyramid\'s location, and the nature of the ward.',
    star: null
  },

  // ── AMERICA ARTIFACTS ────────────────────────────────────────────────────────
  {
    id: 'room410-clues', label: 'Room 410 Clues', group: 'ARTIFACT', type: 'Artifact — Evidence (New York)',
    desc: 'The cluster of key clues found in — or stolen from — Jackson Elias\' hotel room at the Chelsea (Room 410). Each points to a different chapter of the campaign: (1) Letter from Warren Besart → Egypt; (2) Business card for Edward Gavigan → London/Penhew Foundation; (3) Stumbling Tiger Bar matchbook → Shanghai/Jack Brady; (4) Blurry photo of yacht "DAR_" → Dark Mistress/Shanghai; (5) Emerson Imports card ("Silas N\'Kwane" on back) → Ju-Ju House/Harlem; (6) Atwright letter re: missing Africa\'s Dark Sects → Harvard; (7) Cowles\' NYU lecture handbill → Australia. Any documents taken by fleeing cultists can be recovered from the cash box in Ju-Ju House\'s basement.',
    star: '★★ The hub from which every investigative thread in the campaign departs. All roads lead out from Room 410.'
  },
  {
    id: 'carlyle-safe-books', label: "Carlyle's Safe Tomes", group: 'ARTIFACT', type: 'Artifact — Mythos Tomes',
    desc: 'Four Mythos books kept in a hidden wall safe in the Carlyle estate library (combination R15 L14 R13 L12, written by Erica in her copy of Poe\'s Collected Poems behind a false wall panel): (1) The Pnakotic Manuscripts — pre-human lore; (2) Sélections de Livre D\'Ivon — sorcery; (3) Amongst the Stones — earthen lore; (4) Life as a God — Montgomery Crompton\'s insane diary referencing the Black Pharaoh\'s throne room in the Bent Pyramid capstone (→ Egypt), and describing the short single-spiked clubs used by the Brotherhood (→ London). Jackson Elias\' final notes mention "the books are in Carlyle\'s safe." Cultists previously broke in attempting to retrieve them.',
    star: null
  },

  // ── KEY EVENTS ───────────────────────────────────────────────────────────────
  {
    id: 'elias-murder', label: 'Murder of Jackson Elias', group: 'EVENT', type: 'Key Event',
    desc: 'Jackson Elias is brutally murdered in his hotel room at the Chelsea, New York, in January 1925 — killed by agents of the Cult of the Bloody Tongue just as he is about to share his findings. His body bears ritual markings. Lt. Martin Poole (NYPD) investigates — linking his death to eight similar ritual killings.',
    star: '★★ The murder that begins everything. Investigators who witness it are personally committed from the first moment.'
  },
  {
    id: 'ken-massacre', label: '"Massacre" in Kenya, 1920', group: 'EVENT', type: 'Historical Event',
    desc: 'In early 1920, the Carlyle Expedition\'s 20 bearers were sacrificed near the Mountain of the Black Wind. The principals scattered to execute the Great Plan. The staged remains were blamed on Nandi tribesmen, who were tried and hanged. The truth — that the principals survived — is what investigators must uncover.',
    star: 'The false backstory investigators begin with. Unraveling what really happened is the early mystery of the campaign.'
  },
  {
    id: 'spawn-birth', label: 'Birth of the Spawn', group: 'EVENT', type: 'Key Event',
    desc: 'The monstrous entity within Hypatia Masters will be born at the Mountain of the Black Wind during the solar eclipse on January 14, 1926. Its birth will kill Hypatia. The Spawn then participates alongside M\'Weru in the Kenya Great Rite.',
    star: null
  },
  {
    id: 'eclipse-1926', label: 'Solar Eclipse, Jan 14 1926', group: 'EVENT', type: 'Key Event — Deadline',
    desc: 'A total solar eclipse over the Indian Ocean. The moment when all three Great Rites must fire simultaneously. The campaign\'s absolute deadline. Investigators have approximately one year from January 1925 to disrupt preparations across four continents.',
    star: '★★ The campaign\'s ticking clock. Every action the investigators take is measured against this date.'
  },

  // ── PERU EVENTS ──────────────────────────────────────────────────────────────
  {
    id: 'figueroa-1543', label: 'Figueroa Expedition (1543)', group: 'EVENT', type: 'Historical Event — Peru',
    desc: 'Five Spanish conquistadors — Gaspar Figueroa, Hernando Ruiz, Diego Garrido, Luis de Mendoza, and Pedro de Velasco — discovered the Andean pyramid while searching for treasure southwest of Lake Titicaca. They pried out a large section of the gold tunnel inlay. That night, larvae of the Father of Maggots infected Ruiz, Garrido, de Mendoza, and de Velasco, transforming them into the first kharisiri. Figueroa shot de Mendoza in the head and escaped. He died in Lima one day after completing his Final Confessions. The four transformed conquistadors became the founding kharisiri.',
    star: null
  },


  // HANDOUTS - PERU
  { id: 'ho-peru1', label: 'CP Peru #1', group: 'HANDOUT', type: 'Handout — Peru',
    desc: 'Newspaper article: "Search for Ancient Pyramid in Peru." Larkin announces an expedition to find a pyramid in the southern Peruvian highlands. Published Lima, January 12 [1921].',
    star: null },
  { id: 'ho-peru2', label: 'CP Peru #2', group: 'HANDOUT', type: 'Handout — Peru',
    desc: 'Telegram from Larkin: meet March 18 at 7 PM at Bar Cordano, Lima. Hotel Maury is booked for investigators. The formal summons to the Peru prologue.',
    star: null },
  { id: 'ho-peru3', label: 'CP Peru #3', group: 'HANDOUT', type: 'Handout — Peru',
    desc: "Trinidad Rizo's notes on Gaspar Figueroa's Final Confessions (1543). Five conquistadors found the gold-inlaid pyramid; pried out gold; companions infected by larvae; de Mendoza attacked Figueroa; Figueroa shot him and fled to Lima, dying one day after completing his confessions. Establishes pyramid location, kharisiri origin, and the nature of the ward.",
    star: null },

  // HANDOUTS - THE EXPEDITION
  { id: 'ho-exp1', label: 'CP Exp #1', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'Radiogram from Jackson Elias, January 1925: have information concerning Carlyle Expedition, need reliable investigative team, meet January 15 New York.',
    star: null },
  { id: 'ho-exp2', label: 'CP Exp #2', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: "Background on Jackson Elias for Peru players. Self-educated African-American orphan; multilingual, tough, secretive. Skepticism shaken by Peru. Lists published works 1910-1923 including The Hungry Dead (1923). All published by Prospero House, edited by Jonah Kensington.",
    star: null },
  { id: 'ho-exp3', label: 'CP Exp #3', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'Background on Jackson Elias for players who skipped Peru. Same core profile but confirmed skeptic who has never found proof of the supernatural. Works listed 1910-1921. All published by Prospero House.',
    star: null },
  { id: 'ho-exp4', label: 'CP Exp #4', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'NY Pillar/Riposte gossip column, April 4 1919: playboy Roger Carlyle quietly departing tomorrow to check out the tombs of Egypt.',
    star: null },
  { id: 'ho-exp5', label: 'CP Exp #5', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: "NY Pillar/Riposte, April 5 1919: Carlyle Expedition embarks on SS Imperial Standard. Names Penhew (assistant leader), Huston (psychologist), Hypatia Masters (photographer), Jack Brady (factotum). Notes the Penhew Foundation London stop before Egypt.",
    star: null },
  { id: 'ho-exp6', label: 'CP Exp #6', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: "NY Pillar/Riposte, July 4 1919: Carlyle Departs Egypt. Penhew says they head to East Africa for a rest. Roger Carlyle described as recovering from 'sunstroke' — cover for his mental breakdown in Egypt.",
    star: null },
  { id: 'ho-exp7', label: 'CP Exp #7', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'NY Pillar/Riposte, July 31 1919: expedition arrives Mombasa. Names Penhew, Roger Carlyle, Huston, and Hypatia Masters. Party departs for Nairobi.',
    star: null },
  { id: 'ho-exp8', label: 'CP Exp #8', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'NY Pillar/Riposte, October 15 1919: Carlyle Expedition Feared Lost. Police ask for public assistance. Last known departure from Nairobi, August 3, heading for the Great Rift Valley.',
    star: null },
  { id: 'ho-exp9', label: 'CP Exp #9', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'NY Pillar/Riposte, March 11 1920: Erica Carlyle Arrives in Africa on the Fount of Life. Kikuyu villages report a massacre of whites near the Aberdare Forest.',
    star: null },
  { id: 'ho-exp10', label: 'CP Exp #10', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'NY Pillar/Riposte, May 24 1920: Carlyle Massacre Confirmed. Roger Carlyle counted among the dead. Nandi tribesmen blamed. Remains of at least two dozen found in the Aberdare Forest. Erica confirmed as heir.',
    star: null },
  { id: 'ho-exp11', label: 'CP Exp #11', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'NY Pillar/Riposte, June 19 1920: Murderers Hanged. Five Nandi tribesmen executed. They refused to explain their motive. Prosecution used racial framing. The real killers — the Bloody Tongue — are never named.',
    star: null },

  // HANDOUTS - AMERICA
  { id: 'ho-am1', label: 'CP Am #1', group: 'HANDOUT', type: 'Handout — America',
    desc: "Letter from Warren Besart, Cairo, March 3 1919, to Roger Carlyle: identifies antiquities dealer Faraz Najjar in the Street of Jackals as having singular curios of great interest. Found in Room 410. Points to Cairo, Najjar, and the artifacts that triggered the expedition's Egypt phase.",
    star: null },
  { id: 'ho-am2', label: 'CP Am #2', group: 'HANDOUT', type: 'Handout — America',
    desc: "Business card found in Room 410: Edward Gavigan, Director, The Penhew Foundation, 35 Tottenham Court Road, London W.1. Points directly to London, the Foundation, and Gavigan.",
    star: null },
  { id: 'ho-am3', label: 'CP Am #3', group: 'HANDOUT', type: 'Handout — America',
    desc: "Matchbook found in Room 410: Stumbling Tiger Bar, 10 Lantern Street, Shanghai. The bar where Elias first met Jack Brady. Points to Shanghai.",
    star: null },
  { id: 'ho-am5', label: 'CP Am #5', group: 'HANDOUT', type: 'Handout — America',
    desc: "Business card found in Room 410: Emerson Imports, 648 West 47th Street, New York. Elias wrote 'Silas N'Kwane' on the reverse. Points to Emerson Imports, N'Kwane, and Ju-Ju House in Harlem.",
    star: null },
  { id: 'ho-am6', label: 'CP Am #6', group: 'HANDOUT', type: 'Handout — America',
    desc: "Letter found in Room 410 from Miriam Atwright, Harvard University Library, Nov 7 1924: the book Elias requested (Africa's Dark Sects) is no longer in the collection. She offers to assist when he arrives.",
    star: null },
  { id: 'ho-am7', label: 'CP Am #7', group: 'HANDOUT', type: 'Handout — America',
    desc: "Handbill found in Room 410: Tonight Only — The Cult of Darkness in Polynesia & the Southwest Pacific — Prof. Anthony Cowles, Miskatonic University — NYU, 8 PM. Points to Cowles and Australia.",
    star: null },
  { id: 'ho-am9', label: 'CP Am #9', group: 'HANDOUT', type: 'Handout — America',
    desc: "New York Times, January 16 1925, by Rebecca Shosenburg: Author Murdered by Brutal Killers — Body found in Hotel Chelsea. Names Lt. Poole and Hilton Adams. Links Elias' murder to prior Harlem cult killings.",
    star: null },
  { id: 'ho-am10', label: 'CP Am #10', group: 'HANDOUT', type: 'Handout — America',
    desc: "Elias' posthumous note read at the will reading: greetings from beyond the grave; Carlton and Jonah can fill in more details; follow my investigation to its bloody end. Formally charges investigators with continuing his work.",
    star: null },
  { id: 'ho-am11', label: 'CP Am #11', group: 'HANDOUT', type: 'Handout — America',
    desc: "Elias' initial letter to Jonah Kensington, August 8 1924, from Nairobi: big news — possibility that not all Carlyle Expedition members died. First confirmation that some expedition members survived.",
    star: null },
  { id: 'ho-am12', label: 'CP Am #12', group: 'HANDOUT', type: 'Handout — America',
    desc: "Elias' Nairobi Notes (8 sets). Key findings: official massacre account is false; site is barren and shunned; Kenyatta names the Bloody Tongue as responsible and M'Weru as the high priestess living in the Mountain of the Black Wind; Nails Nelson saw Jack Brady alive in Hong Kong; no Caucasians found among the dead. Lists Sam Mariga, Neville Jermyn, Dr. Starret, Lt. Selkirk, Col. Endicott as contacts.",
    star: null },
  { id: 'ho-am13', label: 'CP Am #13', group: 'HANDOUT', type: 'Handout — America',
    desc: "Elias' London Notes (40 fragmentary pages): many names many forms all the same toward one end; check that psychoanalyst's files; all of them survived; they'll open the gate; the books are in Carlyle's safe; coming for me. Confirms the global conspiracy; points to Huston's files and the Carlyle estate safe.",
    star: null },
  { id: 'ho-am14', label: 'CP Am #14', group: 'HANDOUT', type: 'Handout — America',
    desc: "Excerpt from Life as a God (Crompton's diary), found in Carlyle's hidden safe: describes the Black Pharaoh's throne room inside the Bent Pyramid capstone — a jewelled throne behind a twisted door, six lights lit, He arrives in all His splendour.",
    star: null },
  { id: 'ho-am15', label: 'CP Am #15', group: 'HANDOUT', type: 'Handout — America',
    desc: "Main points of Prof. Cowles' NYU lecture: (1) ancient Aboriginal bat cult worshipping the Father of All Bats through human sacrifice; (2) Aboriginal song cycle describes enormous non-human beings who built vast underground structures in western Australia; (3) four overexposed glass slides of enormous eroded stone blocks near Cuncudgerie; (4) Sand Bat was trapped by Rainbow Snake. Points to the Cult of the Sand Bat, the Yithian city, and Huston.",
    star: null },
  { id: 'ho-am16', label: 'CP Am #16', group: 'HANDOUT', type: 'Handout — America',
    desc: "Huston's patient notes on Roger Carlyle (Jan 11 to Dec 3 1918). Documents Roger's recurring dream: a tall dark figure extends palms showing Roger's face and an unusual pyramid then says become with me a god. Later entries name M'Weru (Anastasia) as a rival to Huston's authority and Huston's fear: if I do not go, C. threatens exposure.",
    star: null },

  // HANDOUTS - ENGLAND
  { id: 'ho-eng1', label: 'CP Eng #1', group: 'HANDOUT', type: 'Handout — England',
    desc: "The Scoop: Shocking Canvases Craze. Miles Shipley's alien-landscape paintings sell for up to 300 pounds. Shipley claims to render visions from other dimensions. Points to the England sidetrack involving Shipley and the serpent person Ssathasaa.",
    star: null },
  { id: 'ho-eng2', label: 'CP Eng #2', group: 'HANDOUT', type: 'Handout — England',
    desc: "The Scoop: Police Baffled by Monstrous Murders! Farmer and resident torn to shreds on consecutive nights in Lesser Edale, Derbyshire. A third victim drove off a grisly creature. Police shot a rabid dog and closed the case. Residents still hear wailing on full moon nights.",
    star: null },
  { id: 'ho-eng3', label: 'CP Eng #3', group: 'HANDOUT', type: 'Handout — England',
    desc: "The Scoop: Slaughter Continues! Reward Offered! Unidentified foreigner found floating in the Thames, stabbed through the heart. The Egyptian Murders — three years of cult killings in London connected to the Brotherhood of the Black Pharaoh.",
    star: null },
  { id: 'ho-eng4', label: 'CP Eng #4', group: 'HANDOUT', type: 'Handout — England',
    desc: "Proceedings of the Antiquities Service of Lower Egypt, 1905: officially denies any Black Pharaoh who ruled during the Third Dynasty. References the Sakkara incident that led to Howard Carter's resignation. An official denial that ironically confirms investigators are on the right track.",
    star: null },
  { id: 'ho-eng5', label: 'CP Eng #5', group: 'HANDOUT', type: 'Handout — England',
    desc: "Telegram at the Penhew Foundation from Dr. H. Clive, Cairo, November 6 1924: Giza dig going well, all as planned, work apace at Mycerinus. Points to the Clive Expedition at Giza and the Brotherhood's plan to use Clive to resurrect Nitocris.",
    star: null },
  { id: 'ho-eng6', label: 'CP Eng #6', group: 'HANDOUT', type: 'Handout — England',
    desc: "Receipt: cast iron walk-in safe delivered and fitted at Henson Manufacturing, Derby, 1922. Henson reverse-engineers Yithian technology from Australia into rocket components for the Penhew Foundation.",
    star: null },
  { id: 'ho-eng7', label: 'CP Eng #7', group: 'HANDOUT', type: 'Handout — England',
    desc: "Business card: Empire Spices, 76 Wardour Street, Soho, London W1F. The front business of Zahra Shafik, rival priestess of the Brotherhood of the Black Pharaoh in London.",
    star: null },
  { id: 'ho-eng8', label: 'CP Eng #8', group: 'HANDOUT', type: 'Handout — England',
    desc: "The Scoop: It Almost Had Me! A Glasgow resident encountered an invisible monster with hideous life, smelling of smouldering hair, filling his lungs. Points to a hunting horror in the British Isles.",
    star: null },
  { id: 'ho-eng9', label: 'CP Eng #9', group: 'HANDOUT', type: 'Handout — England',
    desc: "A reverend's account: a huge dark shape in the mist with burning red eyes let out a bloodcurdling cry on a full-moon night near Lesser Edale.",
    star: null },
  { id: 'ho-eng10', label: 'CP Eng #10', group: 'HANDOUT', type: 'Handout — England',
    desc: "Shipping label: RANDOLPH SHIPPING CO., DARWIN, AUSTRALIA. Found at the Penhew Foundation. Points to Randolph Shipping as the supply route for Yithian artifacts between Australia and London.",
    star: null },
  { id: 'ho-eng11', label: 'CP Eng #11', group: 'HANDOUT', type: 'Handout — England',
    desc: "Letter from Omar al-Shakti to Gavigan, January 1925: IN HIS NAME DO WE SERVE. Requests return of a bust taken by Gavigan's predecessor. Confirms London-Cairo cult alliance and reveals friction between the two branches.",
    star: null },
  { id: 'ho-eng12', label: 'CP Eng #12', group: 'HANDOUT', type: 'Handout — England',
    desc: "Penhew Foundation ledger entries (1924): prototypes to Pale Viper via Ho Fang Shanghai; Yithian schematics to Henson Derby; machine parts from Huston Australia; golden statuette to Huston via Randolph Darwin; Red Diary to al-Shakti Cairo; astronomical charts and Bloody Tongue statue to Ahja Singh, Kilindini Harbor Mombasa. The complete logistics map of the Great Plan supply chain.",
    star: "★★ The single most incriminating document in London — connects every continent and every cult leader." },
  { id: 'ho-eng13', label: 'CP Eng #13', group: 'HANDOUT', type: 'Handout — England',
    desc: "Unfinished letter Gavigan to Penhew: Elias has been dealt with by our friends in New York. Now we must turn to Jack Brady — he may be in Shanghai. He may become an obstacle to our Great Plan. Confirms Gavigan ordered Elias' murder and Brady is being hunted.",
    star: null },

  // HANDOUTS - KENYA
  { id: 'ho-kny2', label: 'CP Kenya #2', group: 'HANDOUT', type: 'Handout — Kenya',
    desc: "Sgt. Bumption's statement on the massacre site: bits of bodies everywhere, torn to shreds like newspaper. Animals refused to touch the remains. Corroborates the supernatural nature of the massacre.",
    star: null },
  { id: 'ho-kny3', label: 'CP Kenya #3', group: 'HANDOUT', type: 'Handout — Kenya',
    desc: "Prophecy from the Hindi Black Tome: the gate shall be opened as the sun is blotted out; the Small Crawler will awaken those who dwell beyond. Directly describes the Great Gate opening during the solar eclipse and Nyarlathotep's role.",
    star: null },
  { id: 'ho-kny4', label: 'CP Kenya #4', group: 'HANDOUT', type: 'Handout — Kenya',
    desc: "Old Bundari's information: the Bloody Tongue cult massacred the Carlyle party using summoned beasts. The Mountain of the Black Wind is the dwelling of a faceless god with a blood-red tongue. M'Weru is its priestess and prophesied the coming of the god's child — part human, part monster. Ancient tales speak of the Eye of Light and Darkness which could chain the god, but men were tricked into destroying it.",
    star: null },

  // HANDOUTS - AUSTRALIA
  { id: 'ho-aus1', label: 'CP Aus #1', group: 'HANDOUT', type: 'Handout — Australia',
    desc: "Arthur MacWhirr's diary (1921): at 22 degrees 3 minutes S by 125 degrees E in the Great Sandy Desert, the party finds enormous stone blocks more than 10,000 years old rising from the sand. A man found covered in hundreds of small punctures. Four camels killed in a night attack by shapes larger than men. MacWhirr plans to return with Robert Mackenzie. Locates and describes the City of the Great Race.",
    star: null },
  { id: 'ho-aus2', label: 'CP Aus #2', group: 'HANDOUT', type: 'Handout — Australia',
    desc: "Jeremy Grogan's statement: hired by John Carver (Huston) near Cuncudgerie to dig at an exact desert spot. After money ran out, Huston summoned a great winged creature with talons that killed two men and cowed the rest. Grogan fled. Identifies Huston as cult leader.",
    star: null },
  { id: 'ho-aus3', label: 'CP Aus #3', group: 'HANDOUT', type: 'Handout — Australia',
    desc: "Memo from R.H. to Acolytes of the Great Sand Bat: we still have not found our last two-legged deer. Confirms Huston commands the cult and is hunting escaped witnesses.",
    star: null },
  { id: 'ho-aus4', label: 'CP Aus #4', group: 'HANDOUT', type: 'Handout — Australia',
    desc: "Gavigan's letter to Huston, London, 1925: how go the excavations and how are preparations proceeding for the Big Event? Sir Aubrey is expecting a progress report. Confirms the London-Australia-Shanghai chain of command.",
    star: null },
  { id: 'ho-aus5', label: 'CP Aus #5', group: 'HANDOUT', type: 'Handout — Australia',
    desc: "Huston's manifesto Gods of Reality: dismisses al-Shakti as narrow-minded. Gray Dragon Island and the Mountain of the Black Wind should be approaching readiness. When that clock sounds on January 14th 1926, all creation shall quake. Huston's megalomaniacal vision.",
    star: null },

  // HANDOUTS - CHINA
  { id: 'ho-chi1', label: 'CP China #1', group: 'HANDOUT', type: 'Handout — China',
    desc: "Shanghai newspaper: Seamen's Club Damaged. Portion of the club collapsed; revelers report strange creatures emerging from the water just before. Establishes Mythos presence in Shanghai's waterways.",
    star: null },
  { id: 'ho-chi2', label: 'CP China #2', group: 'HANDOUT', type: 'Handout — China',
    desc: "Shanghai newspaper: Fire on Chin-Ling Road. Three scholar-monks found dead in a pavilion fire that leapt in an uncanny fashion chasing them. A European was seen leaving. Points to Order of the Bloated Woman activity.",
    star: null },
  { id: 'ho-chi3', label: 'CP China #3', group: 'HANDOUT', type: 'Handout — China',
    desc: "Shanghai newspaper: Violent Incident on Lantern Street. Two murdered at 88 Lantern Street; a witness identified the killer as a giant bat. Near the Stumbling Tiger Bar. Points to Sand Bat cult activity near Brady's last contact point.",
    star: null },
  { id: 'ho-chi4', label: 'CP China #4', group: 'HANDOUT', type: 'Handout — China',
    desc: "Handbill: THE STARS ARE RIGHT! Consult Shanghai's Famous Astrologer, Mister Lung, 129 Kaoyang St. Lung Yun is a key Shanghai contact who can provide intelligence on Ho Fang and Gray Dragon Island.",
    star: null },
  { id: 'ho-chi5', label: 'CP China #5', group: 'HANDOUT', type: 'Handout — China',
    desc: "Excerpts from the Order of the Bloated Woman's historical records. Final entry: on the day the sun grows dark, the silver bird shall take wing; its fiery death proclaims the opening of the way for our Mistress. Directly describes the eclipse rocket plan and the Great Rite.",
    star: null },
  { id: 'ho-chi6', label: 'CP China #6', group: 'HANDOUT', type: 'Handout — China',
    desc: "The Prediction: in the hunt, the wise king uses beaters on three sides only, forgoing game that runs ahead — the quarry chooses its own fate. Some paths remain open if investigators choose wisely.",
    star: null },
  { id: 'ho-chi8', label: 'CP China #8', group: 'HANDOUT', type: 'Handout — China',
    desc: "Jack Brady's full statement: London (Roger obsessed with Besart's Najjar artifacts — a black statue and a map); Roger climbing the Red Pyramid and destroying the Elder Ward; entering the Bent Pyramid; the desert ceremony with creatures eating Arabs; escape from Kenya with a drugged Roger; route via Zanzibar, Durban, Perth; spotting Penhew on the Dark Mistress in Shanghai. The most complete account of the Great Plan.",
    star: "★★ The most information-dense handout in the campaign. Brady's statement connects every chapter." },
  { id: 'ho-chi9', label: 'CP China #9', group: 'HANDOUT', type: 'Handout — China',
    desc: "Translation from the Seven Cryptical Books of Hsan: instructions for creating the Eye of Light and Darkness. Inscribe in hard natural substance within 30 li of the evil site. Created the afternoon before a full moon; blood of an innocent fills the pupil from moonrise to moonset while chanting sa-ma sa-ma te-yo sa-ma. Only one Eye per location. All chanters must detest evil.",
    star: "★★ The how-to guide for the campaign's most powerful countermeasure. Found only in Shanghai." },
  { id: 'ho-chi10', label: 'CP China #10', group: 'HANDOUT', type: 'Handout — China',
    desc: "Letter from Edward Gavigan, London, December 1923, to Sir Aubrey: latest rocket prototypes shipped; Henson Manufacturing men perplexed by Yithian schematics, may not have achieved required tolerances. Confirms the London to Shanghai component pipeline.",
    star: null },
  { id: 'ho-chi11', label: 'CP China #11', group: 'HANDOUT', type: 'Handout — China',
    desc: "Telegram from Robert Huston to Alfred Penhurst (Penhew) c/o Ho Fang Import/Export, Shanghai, October 3 1923: hit a snag, downing tools down under, will contact again once work resumes. Confirms Huston's alias, the Australia to Shanghai reporting chain, and a temporary halt in the Yithian excavation.",
    star: null },
  { id: 'ho-chi12', label: 'CP China #12', group: 'HANDOUT', type: 'Handout — China',
    desc: "Excerpts from Sir Aubrey Penhew's diaries (1921-1925): arrives Gray Dragon Island; Huston sends Yithian plans; first phase complete 1922; work halted then resumed 1923-1924; warns of a traitor (Brady?) September 1924; warhead and trigger complete but guidance system unresolved February 1925. Month-by-month rocket construction log.",
    star: null },

  // ── ENGLAND ALLIES ───────────────────────────────────────────────────────────
  { id: 'barrington', label: 'Insp. Barrington', group: 'ALLY', type: 'Key NPC — London',
    desc: "Inspector James Barrington, age 53. Scotland Yard detective leading the 'Egyptian Murders' investigation — 19 killings over three years, mostly Egyptian nationals, all stabbed through the heart with a spike and beaten with a nail-studded club. A methodical, by-the-book man. Directed toward Gavigan, the Blue Pyramid Club, and Empire Spices. If presented with strong evidence he can bring police support to a raid on Misr House. Jonah Kensington directs investigators to him. Predecessor Inspector Munden was eliminated by the Brotherhood. A wildcard who can help or hinder depending on investigators' conduct.",
    star: null },
  { id: 'yalesha', label: 'Yalesha Essam', group: 'ALLY', type: 'Key NPC — London',
    desc: "Age 19. Egyptian belly dancer at the Blue Pyramid Club in Soho. Her boyfriend Badru was abducted and killed by the Brotherhood when he threatened a cultist for making advances toward her. Fueled by grief and desire for revenge, she secretly approaches investigators at the club, whispering to meet her at the stone arches on Meard Street at midnight. Reveals that once a month around midnight a truck collects 20-plus Brotherhood members from the club and drives them somewhere outside London — to Misr House in Essex. Warns about Zahra Shafik's control of the club and the fear she inspires in owner Abdul Nawisha. If cult spies overhear, Yalesha is abducted and becomes a sacrifice candidate at Misr House.",
    star: null },
  { id: 'nawisha', label: 'Abdul Nawisha', group: 'ALLY', type: 'Key NPC — London',
    desc: "Age 48. Owner of the Blue Pyramid Club, 12B Meard Street, Soho. A large, portly, taciturn Egyptian man who knows exactly what the Brotherhood uses his club for and lives in daily terror of Zahra Shafik. Gavigan pays him hush money to ignore cult business, including the use of his cellar as a holding pen for captives before they are transported to Misr House. Not a cult member. Will double-cross investigators if Shafik pressures him. May be a cautious, frightened source if investigators can demonstrate they can neutralize Shafik.",
    star: null },

  // ── ENGLAND ENEMIES ──────────────────────────────────────────────────────────
  { id: 'kinnery', label: 'Thomas Kinnery', group: 'ENEMY', type: 'Antagonist — London',
    desc: "Age 36. Edward Gavigan's private secretary at the Penhew Foundation. Obsequious, devoted Brotherhood member who manages Gavigan's diary and guards access to his master. Present at most Misr House rites. Knows Gavigan makes monthly train trips to Derby (Henson Manufacturing) but not the full scope of the operation. A weak link: if captured and interrogated he may inadvertently reveal the date of the next Misr House rite or Gavigan's Derby visits. Will give his life to protect Gavigan.",
    star: null },
  { id: 'chaudhary', label: 'Puneet Chaudhary', group: 'ENEMY', type: 'Antagonist — London',
    desc: "Age 44. Owner of a goods warehouse on Queen Street near Limehouse Docks. A dangerous, amoral importer/exporter who ships rocket components from Henson Manufacturing to Ho Fang Import/Export in Shanghai aboard the Ivory Wind, captained by alcoholic Norwegian Lars Torvak. Knows nothing of the Brotherhood's religious aims — is purely in it for the money. Always carries a knife and garrote. Has Lascar guards at the warehouse. The physical link in the chain between Henson Manufacturing, the Penhew Foundation, and Shanghai.",
    star: null },
  { id: 'frank-marshall', label: 'Frank Marshall', group: 'ENEMY', type: 'Antagonist — Derby',
    desc: "Age 36. High-ranking Brotherhood member and cult foreman at Henson Manufacturing in Derby. Handpicked by Gavigan for loyalty and discretion. Runs six cultist guards at the works; lets the engineers get on with their work while ensuring tight security and secrecy. Holds one of the two keys to the massive walk-in safe containing Yithian components and finished rocket parts. Calm under pressure, cunning, devoted to Gavigan. If investigators show up at Henson, he will have them followed, captured, and sent to Misr House.",
    star: null },
  { id: 'lars-torvak', label: 'Lars Torvak', group: 'ENEMY', type: 'Antagonist — London',
    desc: "Age 54. Alcoholic Norwegian captain of the Ivory Wind, a ship docked at Limehouse. Paid by Puneet Chaudhary to transport undocumented machinery parts and Mythos artifacts to Ho Fang Import/Export in Shanghai. Has no knowledge of the Brotherhood of the Black Pharaoh and believes the cargo is rare antiquities. Fears imprisonment and loss of his ship — these fears make him the most pliable link in the London-to-Shanghai supply chain.",
    star: null },
  { id: 'lord-vane', label: 'Lord Arthur Vane', group: 'ENEMY', type: 'Antagonist — Derbyshire',
    desc: "The lord of Vane Castle in Lesser Edale, Derbyshire. Bearer of the Vane family curse, now manifest in his daughter Eloise. An elderly man of the English aristocracy, he and his son Lawrence have been drugging Eloise and locking her in the castle dungeon during the three nights of the full moon to prevent further killings. Desperate to conceal the scandal from the public and the law, he initially dismisses investigators. May eventually ask for their help when Eloise escapes during the full moon.",
    star: null },
  { id: 'eloise-vane', label: 'Eloise Vane', group: 'MYTHOS', type: 'Mythos Entity — England',
    desc: "Age 21. Eloise Vane is the heart of the Derbyshire Horror sidetrack. She transforms into a ghoul during the three nights of each full moon due to an ancient taint in the Vane bloodline, which manifested when she turned 21. Three months ago she murdered farmer George Osgood and resident Lydia Perkins during her first transformation. Her father and brother now drug her and lock her in the castle dungeon each full moon. She has no memory of her transformations. In human form she appears as a pretty, innocent young woman. The transformation is lengthening with each month — in time she will be permanently a ghoul. Investigators face a moral dilemma: kill her, leave her locked up, or find another way.",
    star: null },
  { id: 'miss-pink', label: 'Miss Jasmine Pink', group: 'ALLY', type: 'Key NPC — London (Optional)',
    desc: "Age 36. Psychic medium with ginger hair and pale complexion, found in Soho, Limehouse, or Chelsea. In pulp campaigns her gifts are real; in classic play the Keeper decides. She may attempt to contact the spirit of Jackson Elias, relaying missed clues or pointing investigators in the right direction. Elias' spirit is fragmented and speaks in cryptic non-sequiturs. Nyarlathotep may take control of the sitting to mock the investigators. She never accepts payment before a session. An optional atmospheric tool for the Keeper.",
    star: null },

  // ── ENGLAND LOCATIONS ────────────────────────────────────────────────────────
  { id: 'the-scoop', label: 'The Scoop (Fleet St)', group: 'LUGAR', type: 'Location — London',
    desc: "Mickey Mahoney's tabloid newspaper, third floor of a shabby building in Fleet Street near Ludgate Circus. First contact point for investigators following Jonah Kensington's tip. Mahoney provides The Scoop back issues containing three key stories: Carlyle Papers England #1 (Chelsea Serpent/Shipley), #2 (Derbyshire Horror/Lesser Edale), and #3 (Slaughter in Soho/Egyptian Murders). All three were flagged by Jackson Elias during his November 1924 visit. Mahoney can also point to Inspector Barrington and provide underworld contacts. If Gavigan learns investigators visited, he may send cultists to ritually murder Mahoney.",
    star: null },
  { id: 'blue-pyramid', label: 'Blue Pyramid Club', group: 'LUGAR', type: 'Location — London',
    desc: "Private members club at 12B Meard Street, Soho. A key Brotherhood of the Black Pharaoh meeting point. Egyptian-themed decor, belly dancers, singers, and food. Open 6 p.m. to 1 a.m. Owned by the terrified Abdul Nawisha and effectively controlled by Zahra Shafik. Four to ten cultists present at any time. The cellar is used to hold captives before transport to Misr House. Yalesha Essam is the dancer who will secretly tip off investigators. Once per month at midnight, a truck collects 20-plus Brotherhood members for the drive to Misr House in Essex. Inspector Barrington had the club under surveillance but found no evidence.",
    star: null },
  { id: 'empire-spices', label: 'Empire Spices', group: 'LUGAR', type: 'Location — London',
    desc: "Zahra Shafik's spice shop at 76 Wardour Street, Soho. Her legitimate front business and operational HQ. Ground floor: shop with spice-lined walls, back office, storeroom, and kitchen. Upper floor: Shafik's well-appointed flat with an ornate mirror (the Mirror of Gal — an ancient Mythos scrying weapon), a locked roll-top desk hiding ritual robes, a black inverted ankh, sandstone vials of extraterrestrial substances, a crumbling papyrus scroll, and a pair of black metal Two Scepters. Cellar: a shrine to the Black Pharaoh with a blood-stained altar block and Shafik's ceremonial spike-club; used to hold captives. Devoted servant Edjo sleeps in the storeroom.",
    star: null },
  { id: 'henson-mfg', label: 'Henson Manufacturing', group: 'LUGAR', type: 'Location — Derby',
    desc: "A secretive engineering works on Uttoxeter Road, Derby, owned by Edward Gavigan. Behind a 10-foot brick wall, seven civilian engineers (who believe they work for the War Office) reverse-engineer Yithian technology sent from Huston in Australia into rocket components for Sir Aubrey in Shanghai. Six Brotherhood cultists led by Frank Marshall provide security. The main workshop holds a giant walk-in iron safe (two keys: Marshall and Gavigan) containing Yithian components and finished parts. Office holds blueprints signed 'Pale Viper.' Shed contains a Randolph Shipping label linking to Darwin, Australia. Gavigan visits once a month by train from London.",
    star: null },
  { id: 'limehouse-docks', label: 'Limehouse Docks', group: 'LUGAR', type: 'Location — London',
    desc: "The Limehouse Docks area of East London. Puneet Chaudhary's warehouse on Queen Street near the docks receives crated rocket components and Mythos artifacts from Henson Manufacturing. The Ivory Wind, captained by Lars Torvak, is docked here and ships the cargo to Ho Fang Import/Export in Shanghai. Surveillance of Gavigan from the Penhew Foundation leads investigators here. Multiple crates in the warehouse are labeled 'Cairo Museum, Egypt' as a cover, but underneath bears the original label 'Ho Fang Import/Export, Kaoyang Street, Shanghai, China.'",
    star: null },
  { id: 'ivory-wind', label: 'The Ivory Wind', group: 'LUGAR', type: 'Location — London',
    desc: "A cargo vessel captained by Lars Torvak, docked at Limehouse. Paid by Puneet Chaudhary to transport undocumented machine parts and Mythos items to Ho Fang Import/Export in Shanghai. Connects London's supply chain directly to Sir Aubrey's rocket construction on Gray Dragon Island. If investigators can intercept a shipment, they directly impair the rocket's guidance system — but Gavigan will pursue them relentlessly.",
    star: null },
  { id: 'vane-castle', label: 'Vane Castle / Lesser Edale', group: 'LUGAR', type: 'Location — Derbyshire',
    desc: "Vane Castle stands above the village of Lesser Edale in the Derbyshire Peak District, 170 miles north of London. Home of Lord Arthur Vane and his children Lawrence and Eloise. The castle's dungeon is used to confine Eloise during the three nights of each full moon. The village features the Laughing Horse Inn (rooms and gossip), Pitchlock General Store, a church, and a veterinary clinic. Three months ago Eloise (in ghoul form) murdered farmer George Osgood and resident Lydia Perkins on consecutive nights. Constable Hubert Tumwell shot a dog and closed the case. Local clergyman Rev. Jeremy Stratton glimpsed the beast.",
    star: null },
  { id: 'essex-naze', label: 'The Naze, Essex (Misr House)', group: 'LUGAR', type: 'Location — Essex',
    desc: "Misr House is Edward Gavigan's remote country estate on a private island in the marshes of the Naze in Essex, approximately seven miles southwest of Harwich. Reached by a stone bridge over marsh and slough, accessible by road (3-4 hours from London by car) or boat. Dense forest surrounds the island. The mansion, built in the 16th century (originally 'Long View'), contains a secret room used to hide Catholic priests during Elizabeth I's religious purges. Gavigan holds the Brotherhood of the Black Pharaoh's grand and lesser rites here 13 times per year at the dark of the moon, with 20-60 cultists. The Naze Tower (built 1720) stands 1.5 miles away and may be used for surveillance.",
    star: null },

  // ── ENGLAND ARTIFACTS ─────────────────────────────────────────────────────────
  { id: 'mirror-of-gal', label: 'Mirror of Gal', group: 'ARTIFACT', type: 'Artifact — England',
    desc: "An ancient dark mirror in an ornate gilded frame with asymmetric, subtly wrong proportions and strange figures worked into the frame. Displayed prominently in Zahra Shafik's flat at Empire Spices. A Mythos scrying device and powerful weapon. Used in conjunction with obra'an (a syrupy red substance) and gabeshgal (black powder with rubbery crystals), both stored in Shafik's sandstone vials and extraterrestrial in origin. Both Brotherhood leaders (Gavigan and Shafik) own and prize such objects. Brotherhood members would kill or die to possess it.",
    star: null },
  { id: 'two-scepters', label: 'Two Scepters', group: 'ARTIFACT', type: 'Artifact — England',
    desc: "A pair of foot-long scepters made of unidentifiable black metal that appears almost organic, as if grown rather than forged. One ends in a crook; the other in an inverted ankh. Both Zahra Shafik and Edward Gavigan possess a pair each. Used during Brotherhood rites and as powerful weapons. See Appendix D: Artifacts for their specific powers. When either cult leader expects conflict, the scepters are kept ready to hand.",
    star: null },
  { id: 'equinoxe-divise', label: "L'Équinoxe Divisé", group: 'ARTIFACT', type: 'Artifact — Mythos Tome',
    desc: "A Mythos tome held by the Penhew Foundation (and referenced in the Foundation's secret basement room). One of the few documents that explicitly connects Nyarlathotep to the Cult of the Bloody Tongue, providing the link between the Brotherhood of the Black Pharaoh and the Kenyan cult that investigators may be unaware of at this stage. Can be found during a thorough search of the Foundation's restricted collection.",
    star: null },

];
