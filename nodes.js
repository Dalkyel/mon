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
    desc: 'Director of the Penhew Foundation and high priest of the London Brotherhood of the Black Pharaoh. Receives Yithian technology from Australia, reverse-engineers it into rocket components, and ships them to Penhew in Shanghai. Rival: Zahra Shafik.',
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
    desc: 'Spice dealer and rival high priestess to Gavigan in the London Brotherhood of the Black Pharaoh. May use investigators as pawns to eliminate Gavigan, offering useful information in exchange.',
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
    desc: 'Friend of Jackson Elias and publisher of The Scoop, a scurrilous London tabloid. Useful early contact for underground information in England and cult activity linked to the Penhew Foundation.',
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
    desc: 'The Penhew Foundation in London, directed by Edward Gavigan. Front for the Brotherhood of the Black Pharaoh. Receives Yithian technology from Huston in Australia, reverse-engineers it into rocket components, and ships them to Penhew in Shanghai.',
    star: null
  },
  {
    id: 'misr-house', label: 'Misr House', group: 'LUGAR', type: 'Location — London',
    desc: 'The London operational headquarters of the Brotherhood of the Black Pharaoh, run by Edward Gavigan. Site of British ceremonies and the planned supporting Great Rite on January 14, 1926.',
    star: null
  },
  {
    id: 'red-pyramid', label: 'Red / Bent Pyramid', group: 'LUGAR', type: 'Location — Egypt',
    desc: 'The Red and Bent Pyramids at Dahshur, Egypt. Site of an ancient Elder Ward broken by the Carlyle Expedition, allowing the Black Pharaoh to appear and tempt them — the first critical step of the Great Plan.',
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
  {
    id: 'lesser-edale', label: 'Lesser Edale', group: 'LUGAR', type: 'Location — England (Sidetrack)',
    desc: 'A village in Derbyshire, England. Setting of a sidetrack scenario involving the cursed Vane family. Not directly connected to the main cult network.',
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



  // ── HANDOUTS — PERU ──────────────────────────────────────────────────────────
  {
    id: 'ho-peru1', label: 'CP Peru #1', group: 'HANDOUT', type: 'Handout — Peru',
    desc: 'Newspaper article: "Search for Ancient Pyramid in Peru." Explorer Augustus Larkin announces an expedition to the southern highlands to find a pyramid. He is currently in Lima recruiting companions and backers. Published Lima, January 12 [1921].',
    star: null
  },
  {
    id: 'ho-peru2', label: 'CP Peru #2', group: 'HANDOUT', type: 'Handout — Peru',
    desc: 'Telegram from Augustus Larkin: "THANK YOU FOR JOINING THE EXPEDITION STOP PLEASE JOIN ME IN LIMA STOP HAVE BOOKED YOU ROOM AT HOTEL MAURY STOP MEET 18 MARCH AT 7 PM AT BAR CORDANO, JIRÓN ANCASH 202, DISTRITO DE LIMA." The investigators\' formal summons to the prologue.',
    star: null
  },
  {
    id: 'ho-peru3', label: 'CP Peru #3', group: 'HANDOUT', type: 'Handout — Peru',
    desc: 'Trinidad Rizo\'s notes on the Final Confessions of Gaspar Figueroa (1543). Documents Figueroa\'s expedition southwest of Lake Titicaca with Ruiz, Garrido, de Mendoza, and de Velasco; their discovery of the gold-inlaid pyramid tunnels; the infection of his companions after prying out the gold; de Mendoza\'s attack; Figueroa\'s escape and death in Lima one day after completing his confessions. A priest\'s postscript confirms his last words were an entreaty for forgiveness.',
    star: null
  },

  // ── HANDOUTS — THE EXPEDITION ────────────────────────────────────────────────
  {
    id: 'ho-exp1', label: 'CP Exp #1', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'Radiogram from Jackson Elias, January 1925: "HAVE INFORMATION CONCERNING CARLYLE EXPEDITION STOP NEED RELIABLE INVESTIGATIVE TEAM STOP MEET JANUARY 15 NEW YORK STOP JACKSON ELIAS." The message that begins the main campaign.',
    star: null
  },
  {
    id: 'ho-exp2', label: 'CP Exp #2', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'Background on Jackson Elias for Peru prologue players. Describes Elias as a self-educated African-American orphan from Connecticut; friendly, tough, multilingual, secretive until a final draft is in hand. Lists his published works 1910–1923 including The Hungry Dead (1923) about the Peruvian kharisiri cult. Notes that his skepticism was shaken by what he witnessed in Peru.',
    star: null
  },
  {
    id: 'ho-exp3', label: 'CP Exp #3', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'Background on Jackson Elias for players who did not do the Peru prologue. Same core description as #2 but omits the Peru-specific detail. Lists published works 1910–1921. Notes Elias is a confirmed skeptic who has never found incontrovertible proof of the supernatural.',
    star: null
  },
  {
    id: 'ho-exp4', label: 'CP Exp #4', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'New York Pillar/Riposte gossip column, April 4, 1919: playboy Roger Carlyle quietly leaving tomorrow to "check out the tombs of Egypt." Mentions Carlyle\'s reputation for finding attractive company at New York nightspots.',
    star: null
  },
  {
    id: 'ho-exp5', label: 'CP Exp #5', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'New York Pillar/Riposte, April 5, 1919: "Carlyle Expedition Embarks for England." Expedition departs on SS Imperial Standard for Southampton. Names Sir Aubrey Penhew (assistant leader, excavations), Dr. Robert Huston (psychologist, pictographs research), Hypatia Masters (photographer/archivist), and Jack Brady (general factotum). Notes expedition will stop at the Penhew Foundation in London before continuing to Egypt.',
    star: null
  },
  {
    id: 'ho-exp6', label: 'CP Exp #6', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'New York Pillar/Riposte, July 4, 1919: "Carlyle Departs Egypt." Sir Aubrey Penhew (speaking for the expedition) says they are heading to East Africa for a "well-earned rest" and denies finding King Solomon\'s mines. Roger Carlyle is described as recovering from "sunstroke" — the cover story for his mental breakdown in Egypt.',
    star: null
  },
  {
    id: 'ho-exp7', label: 'CP Exp #7', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'New York Pillar/Riposte, July 31, 1919: "Important Visitors." Expedition arrives in Mombasa on holiday from Egyptian digs. Undersecretary Royston Whittingdon hosts a welcoming dinner. Names Penhew, Roger Carlyle, Huston, and Hypatia Masters. Party leaves for Nairobi and hunting.',
    star: null
  },
  {
    id: 'ho-exp8', label: 'CP Exp #8', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'New York Pillar/Riposte, October 15, 1919: "Carlyle Expedition Feared Lost." Uplands police ask for public assistance — no word from the party in nearly two months. Names Roger Carlyle, Sir Aubrey Penhew, and four other Americans. Last known departure point: Nairobi, August 3, heading for the Great Rift Valley.',
    star: null
  },
  {
    id: 'ho-exp9', label: 'CP Exp #9', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'New York Pillar/Riposte, March 11, 1920: "Erica Carlyle Arrives in Africa." Erica arrives in Mombasa on the Egyptian vessel Fount of Life with a large search expedition. Kikuyu village reports of a massacre of whites near the Aberdare Forest. She departs for Nairobi to search for her brother.',
    star: null
  },
  {
    id: 'ho-exp10', label: 'CP Exp #10', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'New York Pillar/Riposte, May 24, 1920: "Carlyle Massacre Confirmed." Police confirm the massacre. Roger Carlyle counted among the dead. Hostile Nandi tribesmen blamed. Remains of at least two dozen found in a remote area of the Aberdare Forest. Erica Carlyle is confirmed as heir.',
    star: null
  },
  {
    id: 'ho-exp11', label: 'CP Exp #11', group: 'HANDOUT', type: 'Handout — Expedition',
    desc: 'New York Pillar/Riposte, June 19, 1920: "Murderers Hanged." Five Nandi tribesmen executed for the massacre after a short trial. They refused to explain their motive. The verdict was based on racial framing by the prosecution. The actual killers — the Bloody Tongue — are never named.',
    star: null
  },

  // ── HANDOUTS — AMERICA ───────────────────────────────────────────────────────
  {
    id: 'ho-am1', label: 'CP Am #1', group: 'HANDOUT', type: 'Handout — America',
    desc: 'Letter found in Room 410. From Warren Besart, Cairo, March 3, 1919, to Roger Carlyle: identifies antiquities dealer Faraz Najjar in the Street of Jackals who has "singular curios" of great interest. Besart offers to act as purchasing agent. Points directly to Cairo, the Street of Jackals, and the artifacts (including the black statue and map) that triggered the expedition\'s Egypt phase.',
    star: null
  },
  {
    id: 'ho-am2', label: 'CP Am #2', group: 'HANDOUT', type: 'Handout — America',
    desc: 'Business card found in Room 410: "Edward Gavigan, Director — The Penhew Foundation, 35 Tottenham Court Road, London W.1." Points directly to London, the Penhew Foundation, and Gavigan.',
    star: null
  },
  {
    id: 'ho-am3', label: 'CP Am #3', group: 'HANDOUT', type: 'Handout — America',
    desc: 'Matchbook found in Room 410: Stumbling Tiger Bar, 10 Lantern Street, Shanghai. "Shanghai Fun & Friends." Points to Shanghai and the bar where Elias first met Jack Brady.',
    star: null
  },
  {
    id: 'ho-am5', label: 'CP Am #5', group: 'HANDOUT', type: 'Handout — America',
    desc: 'Business card found in Room 410: Emerson Imports, 648 West 47th Street, New York. Elias wrote on the reverse: "Silas N\'Kwane." Points to Emerson Imports, Silas N\'Kwane, and Ju-Ju House in Harlem.',
    star: null
  },
  {
    id: 'ho-am6', label: 'CP Am #6', group: 'HANDOUT', type: 'Handout — America',
    desc: 'Letter found in Room 410. From Miriam Atwright, Harvard University Library, Nov. 7, 1924, to Jackson Elias c/o Prospero House: the book he requested (Africa\'s Dark Sects) is no longer in their collection, but related information may be found in other volumes. She offers assistance when Elias arrives. Points to Harvard library and Atwright as a research resource.',
    star: null
  },
  {
    id: 'ho-am7', label: 'CP Am #7', group: 'HANDOUT', type: 'Handout — America',
    desc: 'Handbill found in Room 410: "TONIGHT ONLY — The Cult of Darkness in Polynesia & the Southwest Pacific — Prof. Anthony Cowles, Ph.D., University of Sydney / Miskatonic University — Schuyler Hall, New York University, 8 PM." Points to Prof. Cowles, Australia, and ultimately the Yithian city.',
    star: null
  },
  {
    id: 'ho-am9', label: 'CP Am #9', group: 'HANDOUT', type: 'Handout — America',
    desc: 'New York Times article, January 16, 1925, by Rebecca Shosenburg: "Author Murdered by Brutal Killers — Body found in Hotel Chelsea. Possible connection to Harlem murders." Names Lt. Poole as investigating and mentions Hilton Adams\' conviction. Links Elias\' murder to the prior Harlem cult killings.',
    star: null
  },
  {
    id: 'ho-am10', label: 'CP Am #10', group: 'HANDOUT', type: 'Handout — America',
    desc: 'Elias\' final note — read at the will reading by Carlton Ramsey: "Greetings from beyond the grave! I\'ve been pulling threads all over the world… Carlton and Jonah can fill in more details… Follow my investigation to its bloody end, and seek out the truth." Formally charges investigators with continuing his work.',
    star: null
  },
  {
    id: 'ho-am11', label: 'CP Am #11', group: 'HANDOUT', type: 'Handout — America',
    desc: 'Elias\' initial letter to Jonah Kensington, August 8, 1924, from Nairobi: "Big news! There is a possibility that not all of the members of the Carlyle Expedition died. I have a lead. Though the authorities here deny the cult angle, the natives sing a different tune." Establishes that Elias began uncovering the truth in Kenya.',
    star: null
  },
  {
    id: 'ho-am12', label: 'CP Am #12', group: 'HANDOUT', type: 'Handout — America',
    desc: 'Elias\' Nairobi Notes (8 sets). Key findings: official massacre account is false; massacre site is barren and shunned — "cursed by the God of the Black Wind"; Johnstone Kenyatta says the Bloody Tongue cult is responsible and its high priestess "is part of the Mountain of the Black Wind"; "Nails" Nelson saw Jack Brady alive in Hong Kong; no Caucasians were found among the massacre dead. Contacts listed: Sam Mariga, Neville Jermyn, Dr. Starret, Lt. Selkirk, Col. Endicott.',
    star: null
  },
  {
    id: 'ho-am13', label: 'CP Am #13', group: 'HANDOUT', type: 'Handout — America',
    desc: 'Elias\' London Notes (40 fragmentary pages, stitched together): "Many names, many forms, but all the same and toward one end… Need Help… Too big, too ghastly… Check that psychoanalyst\'s files… All of them survived! They\'ll open the gate… Many threads beginning… The books are in Carlyle\'s safe… Coming for me." Confirms the global conspiracy and points to Huston\'s patient files and the Carlyle safe.',
    star: null
  },
  {
    id: 'ho-am14', label: 'CP Am #14', group: 'HANDOUT', type: 'Handout — America',
    desc: 'Excerpt from Life as a God (Crompton\'s diary) found in Carlyle\'s hidden safe: describes approaching a jewelled throne of Darkness through a twisted door, six lights, and the appearance of "He" in splendour. Refers to the Black Pharaoh\'s sanctum inside the Bent Pyramid — the capstone throne room investigatable in Egypt.',
    star: null
  },
  {
    id: 'ho-am15', label: 'CP Am #15', group: 'HANDOUT', type: 'Handout — America',
    desc: 'Main points of Prof. Cowles\' NYU lecture: (1) An ancient bat cult among Australian Aboriginals worshipped the Father of All Bats through human sacrifice; (2) An Aboriginal song cycle describes enormous non-human beings who built vast underground structures in western Australia; (3) Four overexposed glass slides of enormous eroded stone blocks near Cuncudgerie in the Great Sandy Desert; (4) A tale of Sand Bat being trapped by Rainbow Snake. Points to the Cult of the Sand Bat, the Yithian city, and Huston.',
    star: null
  },
  {
    id: 'ho-am16', label: 'CP Am #16', group: 'HANDOUT', type: 'Handout — America',
    desc: 'Huston\'s patient notes on Roger Carlyle (Jan 11 1918 – Dec 3 1918). Documents Roger\'s recurring dream: a tall, gaunt, dark figure with an inverted ankh on his forehead offers his palms — one showing Roger\'s face, the other an unusual pyramid. Roger feels drawn into a pulsating yellow ball and hears "become with me a god." Later entries note M\'Weru ("Anastasia") as a rival to Huston\'s authority, and Huston\'s fear/ambition: "If I do not go, C. threatens exposure. If I do go… what then will be my role?" The files are referenced by Elias in his London Notes.',
    star: null
  },

  // ── HANDOUTS — ENGLAND ───────────────────────────────────────────────────────
  {
    id: 'ho-eng1', label: 'CP Eng #1', group: 'HANDOUT', type: 'Handout — England',
    desc: 'The Scoop: "Shocking Canvases Craze — Local Artist\'s Monstrous Scenes Mock Surrealists." Miles Shipley\'s paintings — depicting ravished maidens, monsters, and alien landscapes — are selling for up to £300. Shipley claims to render visions from "other dimensions." Points to Shipley, his paintings (which depict Mythos truths), and the serpent person Ssathasaa who controls him.',
    star: null
  },
  {
    id: 'ho-eng2', label: 'CP Eng #2', group: 'HANDOUT', type: 'Handout — England',
    desc: 'The Scoop: "Police Baffled by Monstrous Murders! Killer Beast Shot but Still Alive?" Farmer George Osgood and resident Lydia Perkins torn to shreds on consecutive nights in Lesser Edale, Derbyshire. Harold Short nearly killed but drove off a "grisly creature." Police shot a rabid dog and closed the case. Residents still hear wailing on full moon nights. Points to the Lesser Edale sidetrack scenario.',
    star: null
  },
  {
    id: 'ho-eng3', label: 'CP Eng #3', group: 'HANDOUT', type: 'Handout — England',
    desc: 'The Scoop: "Slaughter Continues! Reward Offered!" An unidentified foreigner found floating in the Thames, stabbed through the heart. Inspector James Barrington of Scotland Yard refuses to comment. The "Egyptian Murders" — at least three years of similar cult killings in London — are connected to the Brotherhood of the Black Pharaoh\'s operations through Misr House.',
    star: null
  },
  {
    id: 'ho-eng4', label: 'CP Eng #4', group: 'HANDOUT', type: 'Handout — England',
    desc: 'Proceedings of the Antiquities Service of Lower Egypt, 1905: denies any evidence for a "Black Pharaoh" who ruled during the Third Dynasty, calling it garbled folk tales. The Sakkara incident involved French tourists of a possible occult society and led to Howard Carter\'s resignation as Chief Inspector. An official denial that ironically confirms investigators are on the right track.',
    star: null
  },
  {
    id: 'ho-eng5', label: 'CP Eng #5', group: 'HANDOUT', type: 'Handout — England',
    desc: 'Telegram found at the Penhew Foundation: from Dr. H. Clive, Cairo, November 6, 1924, to (presumably Gavigan): "GIZA DIG WELL STOP ALL AS PLANNED STOP WORK APACE AT MYCERINUS STOP THANK YOU FOR YOUR ASSISTANCE." Points to the Clive Expedition at the Giza pyramids, the Penhew Foundation\'s support of it, and the Brotherhood\'s plan to use Clive to resurrect Nitocris.',
    star: null
  },
  {
    id: 'ho-eng6', label: 'CP Eng #6', group: 'HANDOUT', type: 'Handout — England',
    desc: 'Receipt from Ernest Whitfield & Co, Birmingham (1922): cast iron walk-in safe (£108) delivered and fitted at Henson Manufacturing, Derby (£24). Total £132. Henson Manufacturing is the firm reverse-engineering Yithian technology for the Penhew Foundation — the same firm mentioned in the Gavigan-to-Penhew letter. Points to the London supply chain for the rocket components.',
    star: null
  },
  {
    id: 'ho-eng7', label: 'CP Eng #7', group: 'HANDOUT', type: 'Handout — England',
    desc: 'Business card: "Empire Spices, 76 Wardour Street, Soho, London W1F." The legitimate-seeming business of Zahra Shafik, rival high priestess of the Brotherhood of the Black Pharaoh. A contact card that introduces investigators to Zahra as a possible source of information against Gavigan.',
    star: null
  },
  {
    id: 'ho-eng8', label: 'CP Eng #8', group: 'HANDOUT', type: 'Handout — England',
    desc: 'The Scoop: "It Almost Had Me!" A Glasgow resident encountered an invisible monster — a nothing with "hideous life," smelling of smouldering hair, filling his lungs and choking him. A hunting horror encountered in Scotland. Atmospheric clue hinting at the dangerous Mythos entities active in the British Isles.',
    star: null
  },
  {
    id: 'ho-eng9', label: 'CP Eng #9', group: 'HANDOUT', type: 'Handout — England',
    desc: 'A reverend\'s first-person account: while returning home on a full-moon night, he saw a huge dark shape in the mist with burning red eyes that let out a bloodcurdling cry. Points to the creature stalking Lesser Edale (likely the cursed Vane family transformation or an entity summoned there).',
    star: null
  },
  {
    id: 'ho-eng10', label: 'CP Eng #10', group: 'HANDOUT', type: 'Handout — England',
    desc: 'Shipping label: "RANDOLPH SHIPPING CO., DARWIN, AUSTRALIA." Found at the Penhew Foundation or Misr House. Points to the Australia chapter — Randolph Shipping is the company used to send supplies and Yithian technology artifacts between Australia and London.',
    star: null
  },
  {
    id: 'ho-eng11', label: 'CP Eng #11', group: 'HANDOUT', type: 'Handout — England',
    desc: 'Letter from Omar al-Shakti to Gavigan, January 1925, Cairo: "IN HIS NAME DO WE SERVE. As the work of our lord and master grows ever nearer to completion… the return of that which your predecessor acquired from us under less than honest circumstances… the return of the bust to its true home would be a gesture of goodwill." Confirms al-Shakti and Gavigan are co-conspirators, reveals friction between the London and Cairo branches, and mentions a stolen bust.',
    star: null
  },
  {
    id: 'ho-eng12', label: 'CP Eng #12', group: 'HANDOUT', type: 'Handout — England',
    desc: 'Penhew Foundation ledger entries (1924): prototypes shipped to "Pale Viper" c/o Ho Fang Shanghai; Yithian schematics forwarded to Henson Manufacturing Derby; "ancient machine parts" from Huston Australia to Henson; golden statuette to Huston via Randolph Shipping Darwin; "Red Diary of Anselm de Montfort" to al-Shakti Cairo; astronomical charts and Bloody Tongue statue to Ahja Singh, Kilindini Harbor Mombasa. The complete logistics map of the Great Plan\'s supply chain.',
    star: '★★ The single most incriminating document in London — connects every continent and every cult leader.'
  },
  {
    id: 'ho-eng13', label: 'CP Eng #13', group: 'HANDOUT', type: 'Handout — England',
    desc: 'Unfinished letter found at Misr House or Penhew Foundation: "For the attn. Pale Viper [Penhew] — Elias has been dealt with by our friends in New York. Now we must turn to our other problem, namely Jack Brady. I understand that he may be in Shanghai and ask if you would direct your resources to hunting him down. It is stupefying that this troubling man has evaded us for so long. He may become an obstacle to our Great Plan. If you wish, I will—" [ends]. Confirms Gavigan ordered Elias\' murder and that Brady is being hunted.',
    star: null
  },

  // ── HANDOUTS — KENYA ─────────────────────────────────────────────────────────
  {
    id: 'ho-kny2', label: 'CP Kenya #2', group: 'HANDOUT', type: 'Handout — Kenya',
    desc: 'Sgt. Bumption\'s statement about the massacre site: "Bodies everywhere… Not bodies, but bits o\' bodies. An \'ead \'ere, an arm there, torn to shreds like you would a newspaper… You woulda thought the jackals and buzzards woulda et \'em down to the bone by the time we arrived, but the animals wouldn\'t touch the free meal." Corroborates the supernatural nature of the massacre and the barren, cursed ground.',
    star: null
  },
  {
    id: 'ho-kny3', label: 'CP Kenya #3', group: 'HANDOUT', type: 'Handout — Kenya',
    desc: 'Prophecy translated from the Hindi version of the Black Tome: "And then shall the gate be opened, as the sun is blotted out. Thus, the Small Crawler will awaken those who dwell beyond and bring them." References the Great Gate opening during the solar eclipse and the role of Nyarlathotep as the "Small Crawler" bringing the Old Ones. Directly describes the Great Rite and the January 14, 1926 eclipse.',
    star: null
  },
  {
    id: 'ho-kny4', label: 'CP Kenya #4', group: 'HANDOUT', type: 'Handout — Kenya',
    desc: 'Old Bundari\'s information: The Bloody Tongue cult massacred the Carlyle party using summoned beasts. The Mountain of the Black Wind is the dwelling place of a dread god with no face — only a blood-red tongue. Once per year the god appears, killing and maddening. M\'Weru is the god\'s priestess. She prophesied the birth of the god\'s child — part human, part monster — "who is soon to soak the land with blood." Ancient tales mention the Eye of Light and Darkness as a sign that could chain the god, but "men were tricked into destroying it a few years ago."',
    star: null
  },

  // ── HANDOUTS — AUSTRALIA ─────────────────────────────────────────────────────
  {
    id: 'ho-aus1', label: 'CP Aus #1', group: 'HANDOUT', type: 'Handout — Australia',
    desc: 'Arthur MacWhirr\'s diary (1921): In the Great Sandy Desert (22°3\'14" S by 125°0\'39" E), MacWhirr\'s party is followed by Aboriginals, a man dies covered in hundreds of small punctures, and they discover "remnants of an ancient city rising from the shifting sands" — blocks more than 10,000 years old. That night four camels are killed by attackers including shapes "much bigger than men." MacWhirr plans to return with Robert Mackenzie. Locates and describes the City of the Great Race.',
    star: null
  },
  {
    id: 'ho-aus2', label: 'CP Aus #2', group: 'HANDOUT', type: 'Handout — Australia',
    desc: 'Jeremy Grogan\'s statement: Hired by "John Carver" (Huston) near Cuncudgerie with 20+ men to dig at a precise desert location. After the money ran out, Huston disappeared for a day and returned "wild and evil-like." That night he summoned a great winged creature with talon-like ropes that killed two men and cowed the rest. Grogan fled into the desert. Directly establishes Huston as the cult leader at the Yithian site and describes his dark powers.',
    star: null
  },
  {
    id: 'ho-aus3', label: 'CP Aus #3', group: 'HANDOUT', type: 'Handout — Australia',
    desc: 'Memo from "R.H." to Acolytes of the Great Sand Bat: "We still have not found our last two-legged deer. There is utterly no excuse for not being able to find an unarmed human…" Confirms Huston and the Sand Bat cult are actively hunting escaped witnesses. Reveals the cult\'s casual cruelty and Huston\'s authority.',
    star: null
  },
  {
    id: 'ho-aus4', label: 'CP Aus #4', group: 'HANDOUT', type: 'Handout — Australia',
    desc: 'Gavigan\'s letter to Huston (1925), Grosvenor Street, London: "How go the excavations? And how are preparations proceeding for the Big Event? I\'m not sure how much help al-Shakti and his bunch in Cairo are likely to be… as long as you keep things up at your end… Sir Aubrey is expecting a progress report from you by end of the month." Confirms the London–Australia–Shanghai chain of command and the deadline pressure.',
    star: null
  },
  {
    id: 'ho-aus5', label: 'CP Aus #5', group: 'HANDOUT', type: 'Handout — Australia',
    desc: 'Huston\'s document "Gods of Reality": dismisses al-Shakti as narrow-minded and too focused on the past. Notes that Yithian weapons found at the city have been used to hold off "piping monstrosities that lurk in the depths." States: "Gray Dragon Island and the Mountain of the Black Wind should be approaching readiness now… When that clock sounds on January 14th 1926, all creation shall quake, and our names will never be forgotten." Huston\'s megalomaniacal manifesto.',
    star: null
  },

  // ── HANDOUTS — CHINA ─────────────────────────────────────────────────────────
  {
    id: 'ho-chi1', label: 'CP China #1', group: 'HANDOUT', type: 'Handout — China',
    desc: 'Shanghai newspaper: "Seamen\'s Club Damaged." A portion of the Seamen\'s Club collapsed, causing over £8,000 in damage. Revelers report "strange creatures" emerging from the water just before the building came down. Atmospheric clue establishing the Mythos presence in Shanghai\'s waterways.',
    star: null
  },
  {
    id: 'ho-chi2', label: 'CP China #2', group: 'HANDOUT', type: 'Handout — China',
    desc: 'Shanghai newspaper: "Fire on Chin-Ling Road." Three respected scholar-monks found dead in a pavilion fire at the Garden of the Purple Clouds of Autumn — fire leapt "in an uncanny fashion" chasing the monks. A European was seen leaving the area. Points to cult activity in Shanghai and a possible Order of the Bloated Woman action against scholars of a competing spiritual tradition.',
    star: null
  },
  {
    id: 'ho-chi3', label: 'CP China #3', group: 'HANDOUT', type: 'Handout — China',
    desc: 'Shanghai newspaper: "Violent Incident on Lantern Street." Two murdered at 88 Lantern Street after midnight — one witness identified the killer as "a giant bat." Lantern Street is where the Stumbling Tiger Bar is located (10 Lantern Street). Points to the Sand Bat cult\'s presence in Shanghai and the danger around Brady\'s last contact point.',
    star: null
  },
  {
    id: 'ho-chi4', label: 'CP China #4', group: 'HANDOUT', type: 'Handout — China',
    desc: 'Handbill: "THE STARS ARE RIGHT! Do not allow dark fate to overwhelm you! Consult the Heavenly Stem and the Earthly Branch to peer behind the mask and uncover what is lost. Contact Shanghai\'s Famous Astrologer, Mister Lung, 129 Kaoyang St." Lung Yun the astrologer is a key Shanghai contact who can provide information about Ho Fang and Gray Dragon Island.',
    star: null
  },
  {
    id: 'ho-chi5', label: 'CP China #5', group: 'HANDOUT', type: 'Handout — China',
    desc: 'Excerpts from historical Order of the Bloated Woman records spanning centuries of the Great Goddess\' manifestations: a 1556 earthquake in Shensi; a famine under the Kuang-hsu Emperor; the sinking of enemy ships. The final entry describes the Pale Viper\'s rocket plan in prophetic terms: "On the day the sun grows dark, the silver bird shall take wing. Its fiery death proclaims the opening of the way for our Mistress… All shall see, and burn." Directly describes the eclipse rocket plan.',
    star: null
  },
  {
    id: 'ho-chi6', label: 'CP China #6', group: 'HANDOUT', type: 'Handout — China',
    desc: 'The Prediction: "In the hunt, / The wise king uses beaters / On three sides only, / Forgoing game that runs ahead, / The quarry chooses its own fate." An I Ching-style fortune message — possibly from Lung Yun the astrologer. Philosophically relevant to the investigators\' situation: Nyarlathotep does not pursue from all sides; some paths remain open if investigators choose wisely.',
    star: null
  },
  {
    id: 'ho-chi8', label: 'CP China #8', group: 'HANDOUT', type: 'Handout — China',
    desc: 'Jack Brady\'s full statement: covers his time in London (Roger obsessed with Besart\'s Najjar artifacts — a black statue and a map); Roger\'s deterioration in Egypt; his climbing the Red Pyramid and destroying the Elder Ward ("The eye is gone, Jack — now we can be gods"); the gang entering the Bent Pyramid and emerging changed; the desert ceremony with creatures eating Arabs; Brady\'s escape from Kenya with a drugged Roger; Roger\'s recovery en route to Mombasa; their escape via Zanzibar to Durban to Perth; Brady spotting Penhew on the Dark Mistress in Shanghai. The single most complete account of the Great Plan.',
    star: '★★ The most information-dense handout in the campaign. Brady\'s statement connects every chapter.'
  },
  {
    id: 'ho-chi9', label: 'CP China #9', group: 'HANDOUT', type: 'Handout — China',
    desc: 'Translation from the Seven Cryptical Books of Hsan: instructions for creating the Eye of Light and Darkness. Must be inscribed in a natural hard substance. Must be placed within 30 li (~10 miles) of the evil site. Created the afternoon before a full moon; blood of an innocent fills the pupil from moonrise to moonset while chanting "sa-ma, sa-ma, te-yo, sa-ma." Only one Eye per location. All chanters must detest evil. Once complete, the Eye wards and guards the site indefinitely.',
    star: '★★ The how-to guide for the campaign\'s most powerful countermeasure. Found only in the Seven Cryptical Books of Hsan in Shanghai.'
  },
  {
    id: 'ho-chi10', label: 'CP China #10', group: 'HANDOUT', type: 'Handout — China',
    desc: 'Letter from Edward Gavigan, Grosvenor Street, London, December 1923, to Sir Aubrey: latest prototypes shipped; the men at Henson Manufacturing are "fascinated and perplexed" by the Yithian schematics and may not have achieved the required tolerances. Gavigan asks for confirmation or further instructions for Marshall\'s men. Confirms the London→Shanghai component pipeline and the difficulty of adapting Yithian technology.',
    star: null
  },
  {
    id: 'ho-chi11', label: 'CP China #11', group: 'HANDOUT', type: 'Handout — China',
    desc: 'Telegram from Robert Huston to "Alfred Penhurst" [Penhew] c/o Ho Fang Import/Export, Shanghai, October 3, 1923: "HIT A SNAG STOP DOWNING TOOLS DOWN UNDER STOP WILL CONTACT AGAIN ONCE WORK RESUMES APOLOGIES STOP HUSTON." Confirms Hustons alias use, his Australia→Shanghai reporting chain to Penhew through Ho Fang\'s address, and a temporary halt in the Yithian excavation.',
    star: null
  },
  {
    id: 'ho-chi12', label: 'CP China #12', group: 'HANDOUT', type: 'Handout — China',
    desc: 'Excerpts from Sir Aubrey Penhew\'s diaries (1921–1925): June 1921 — arrives Gray Dragon Island "to begin the task of my lord and master, the Black Pharaoh"; Aug 1921 — Huston sends plans; Sept 1921 — first Yithian shipments arrive; Jan 1922 — first phase complete; Apr 1923 — "rods have been drawn, but more knowledge is needed"; Oct 1923 — work halted, Huston must open a deeper level; Jan 1924 — work resumes; Sept 1924 — warns of a traitor (Brady?) and considers summoning Children of Cthulhu; Feb 1925 — warhead and trigger complete but guidance system unresolved. A month-by-month progress log of the rocket\'s construction.',
    star: null
  },
];
