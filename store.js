const animals = [
  {
    "name": "koala",
    "habitat": ["rainforest", "temperate forest"],
    "type": "mammal",
    "src": "https://media.mnn.com/assets/images/2019/05/koala.jpg.653x0_q80_crop-smart.jpg",
    "alt": "A happy koala in a tree"
  },
  {
    "name": "narwhal",
    "habitat": ["ocean"],
    "type": "mammal",
    "src": "https://www.si.edu/sites/default/files/newsdesk/press_releases/narwhal_thumbnail.jpg",
    "alt": "A narwhal and his horn"
  },
  {
    "name": "orca",
    "habitat": ["ocean"],
    "type": "mammal",
    "src": "https://www.thenorthernview.com/wp-content/uploads/2018/07/12736180_web1_copy_Orca-Valdes.jpg",
    "alt": "A leaping orca"
  },
  {
    "name": "horse",
    "habitat": ["grassland", "temperate forest"],
    "type": "mammal",
    "src": "https://cdn.pixabay.com/photo/2017/02/13/20/21/horse-2063672__340.jpg",
    "alt": "A galloping white horse"
  },
  {
    "name": "skunk",
    "habitat": ["grassland", "temperate forest", "desert"],
    "type": "mammal",
    "src": "https://media.mnn.com/assets/images/2018/04/LItSL_4.jpg.990x0_q80_crop-smart.jpg",
    "alt": "A sloth hanging from a branch"
  },
  {
    "name": "sloth",
    "habitat": ["rainforest"],
    "type": "mammal",
    "src": "https://www.varmentguard.com/wp-content/uploads/2018/07/skunks-stink-600x400.jpg",
    "alt": "A skunk"
  },
  {
    "name": "walrus",
    "habitat": ["ocean"],
    "type": "mammal",
    "src": "https://upload.wikimedia.org/wikipedia/commons/2/22/Pacific_Walrus_-_Bull_%288247646168%29.jpg",
    "alt": "A walrus bull"
  },
  {
    "name": "zebra",
    "habitat": ["grassland"],
    "type": "mammal",
    "src": "https://img.purch.com/rc/300x200/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAzNy8xNTMvb3JpZ2luYWwvemVicmEuanBn",
    "alt": "A zebra looking at the camera"
  },
  {
    "name": "platypus",
    "habitat": ["freshwater"],
    "type": "mammal",
    "src": "https://gifts.worldwildlife.org/gift-center/Images/large-species-photo/large-Duck-billed-Platypus-photo.jpg",
    "alt": "A swimming duck-billed platypus"
  },
  {
    "name": "aardvark",
    "habitat": ["grassland", "desert"],
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/470x370/aardvark_1.jpg",
    "alt": "An aardvark"
  },
  {
    "name": "elephant",
    "habitat": ["grassland", "rainforest"],
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/470x370/african_bush_elephant12.jpg",
    "alt": "An African Elephant"
  },
  {
    "name": "Penguin",
    "habitat": ["polar", "ocean"],
    "type": "bird",
    "src": "https://a-z-animals.com/media/animals/images/180x170/adelie_penguin3.jpg",
    "alt": "An Adelie Penguin"
  },
  {
    "name": "frog",
    "habitat": ["grassland", "rainforest", "freshwater"],
    "type": "amphibian",
    "src": "https://a-z-animals.com/media/animals/images/180x170/african_clawed_frog5.jpg",
    "alt": "An African Clawed Frog"
  },
  {
    "name": "Dog",
    "habitat": "grassland",
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/180x170/african_wild_dog1.jpg",
    "alt": "An African Wild Dog"
  },
  {
    "name": "Albatross",
    "habitat": "ocean",
    "type": "bird",
    "src": "https://a-z-animals.com/media/animals/images/180x170/albatross.jpg",
    "alt": "Flying Albatross"
  },
  {
    "name": "tortoise",
    "habitat": ["grassland", "rainforest", "desert"],
    "type": "reptile",
    "src": "https://a-z-animals.com/media/animals/images/180x170/aldabra_giant_tortoise2.jpg",
    "alt": "An Aldabra Giant Tortoise"
  },
  {
    "name": "Alligator",
    "habitat": "freshwater",
    "type": "reptile",
    "src": "https://a-z-animals.com/media/animals/images/180x170/alligator_8.jpg",
    "alt": "An alligator"
  },
  {
    "name": "angelfish",
    "habitat": "ocean",
    "type": "fish",
    "src": "https://www.aqua.org/-/media/Images/blog/2017/Animals/blog-animal-update-freshwater-angelfish-640x800.ashx?la=en&hash=10BD39A5FAB46EECF765BE367657A953E65A591A",
    "alt": "An angelfish"
  },
  {
    "name": "ant",
    "habitat": "temperate-forest",
    "type": "invertebrate",
    "src": "https://a-z-animals.com/media/animals/images/180x170/ant1.jpg",
    "alt": "An ant"
  },
  {
    "name": "anteater",
    "habitat": ["grassland", "desert", "temperate forest", "rainforest"],
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/180x170/anteater.jpg",
    "alt": "African Anteater"
  },
  {
    "name": "Antelope",
    "habitat": "grassland",
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/180x170/antelope5.jpg",
    "alt": "An antelope"
  },
  {
    "name": "fox",
    "habitat": ["polar", "temperate forest"],
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/180x170/arctic_fox9.jpg",
    "alt": "A baby arctic fox"
  },
  {
    "name": "Rabbit",
    "habitat": ["polar", "temperate forest", "grassland", "rainforest"],
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/180x170/arctic_hare4.jpg",
    "alt": "An arctic hare"
  },
  {
    "name": "Wolf",
    "habitat": ["polar", "temperate forest"],
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/470x370/arctic_wolf2.jpg",
    "alt": "An arctic wolf"
  },
  {
    "name": "bear",
    "habitat": ["rainforest", "temperate forest", "polar"],
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/180x170/asian_black_bear_4.jpg",
    "alt": "Asiatic Black Bear"
  },
  {
    "name": "Axolotl",
    "habitat": "freshwater",
    "type": "amphibian",
    "src": "https://a-z-animals.com/media/animals/images/180x170/axolotl1.jpg",
    "alt": "Axolotl in the water"
  },
  {
    "name": "Aye Aye",
    "habitat": ["rainforest", "temperate forest"],
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/470x370/aye_aye_.jpg",
    "alt": "Aye aye with glowing eyes"
  },
  {
    "name": "Baboon",
    "habitat": ["grassland", "rainforest"],
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/180x170/baboon1.jpg",
    "alt": "A baboon family"
  },
  {
    "name": "Hippopotamus",
    "habitat": ["grassland"],
    "type": "mammal",
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3QcFcxOOmjbcUTKf56NmMTrl964eg30shBQxx9Vn80_91Sptv",
    "alt": "A hippo"
  },
  {
    "name": "Badger",
    "habitat": ["temperate-forest", "grassland"],
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/470x370/badger2.jpg",
    "alt": "A badger"
  },
  {
    "name": "ladybug",
    "habitat": ["rainforest", "temperate forest", "grassland", "desert"],
    "type": "invertebrate",
    "src": "https://www.farmersalmanac.com/wp-content/uploads/2009/10/iStock_3405593_LadyBug.jpg",
    "alt": "A close up ladybug"
  },
  {
    "name": "octupus",
    "habitat": ["ocean"],
    "type": "invertebrate",
    "src": "https://media.treehugger.com/assets/images/2015/03/octopus-facts.jpg.860x0_q70_crop-scale.jpg",
    "alt": "An octopus"
  },
  {
    "name": "scorpion",
    "habitat": ["rainforest", "temperate forest", "grassland", "desert"],
    "type": "invertebrate",
    "src": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Scorpion_Photograph_By_Shantanu_Kuveskar.jpg",
    "alt": "An orange scorpioh"
  },
  {
    "name": "squid",
    "habitat": ["ocean"],
    "type": "invertebrate",
    "src": "https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2019/squidteamfin.jpg",
    "alt": "A red squid"
  },
  {
    "name": "moth",
    "habitat": ["rainforest", "temperate forest", "grassland", "desert"],
    "type": "invertebrate",
    "src": "https://www.audubon.org/sites/default/files/styles/hero_image/public/sfw_moth_aud0514_m12.jpg?itok=CKm7aJY0",
    "alt": "A pale green moth"
  },
  {
    "name": "jellyfish",
    "habitat": ["ocean"],
    "type": "invertebrate",
    "src": "https://upload.wikimedia.org/wikipedia/commons/4/44/Jelly_cc11.jpg",
    "alt": "A yellow and orange jellyfish"
  },
  {
    "name": "manatee",
    "habitat": ["ocean", "freshwater"],
    "type": "mammal",
    "src": "http://animalsking.com/wp-content/uploads/2018/10/manatee-animal-description-features-lifestyle-and-manatee-habitat-1.jpg",
    "alt": "A manatee"
  },
  {
    "name": "meerkat",
    "habitat": ["grassland", "desert"],
    "type": "mammal",
    "src": "https://animalcorner.co.uk/wp-content/uploads/2015/02/meerkat-2.jpg",
    "alt": "A meerkat"
  },
  {
    "name": "gila monster",
    "habitat": ["grassland", "desert",],
    "type": "reptile",
    "src": "https://www.nationalgeographic.com/content/dam/kids/photos/animals/Reptiles/A-G/gila-monster-emerging-ground.ngsversion.1411231972045.adapt.1900.1.jpg",
    "alt": "A gila monster"
  },
  {
    "name": "crocodile",
    "habitat": ["freshwater",],
    "type": "reptile",
    "src": "http://animalstime.com/wp-content/uploads/2012/05/nt-2004.1083979560.2_crocodile.jpg",
    "alt": "A crocodile"
  },
  {
    "name": "praying mantis",
    "habitat": ["rainforest", "desert", "grassland"],
    "type": "invertebrate",
    "src": "https://upload.wikimedia.org/wikipedia/commons/2/22/Praying_mantis_india.jpg",
    "alt": "A praying mantis"
  },
  {
    "name": "Bandicoot",
    "habitat": ["rainforest", "grassland"],
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/470x370/bandicoot.jpg",
    "alt": "A bandicoot"
  },
  {
    "name": "raccoon",
    "habitat": ["temperate forest"],
    "type": "mammal",
    "src": "https://animalcorner.co.uk/wp-content/img/racoon.jpg",
    "alt": "A raccoon"
  },
  {
    "name": "hawk",
    "habitat": ["temperate forest", "desert", "grassland"],
    "type": "bird",
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Red-tailed_Hawk.jpg/220px-Red-tailed_Hawk.jpg",
    "alt": "A hawk"
  },
  {
    "name": "Barb",
    "habitat": "ocean",
    "type": "fish",
    "src": "https://a-z-animals.com/media/animals/images/180x170/barb.png",
    "alt": "Two Barbs",
  },
  {
    "name": "owl",
    "habitat": ["temperate-forest", "desert", "grassland", "polar", "rainforest"],
    "type": "bird",
    "src": "https://a-z-animals.com/media/animals/images/470x370/barn_owl1.jpg",
    "alt": "A barn owl"
  },
  {
    "name": "Barracuda",
    "habitat": "ocean",
    "type": "fish",
    "src": "https://a-z-animals.com/media/animals/images/470x370/barracuda4.jpg",
    "alt": "A barracuda"
  },
  {
    "name": "shark",
    "habitat": "ocean",
    "type": "fish",
    "src": "https://a-z-animals.com/media/animals/images/470x370/basking_shark.jpg",
    "alt": "A basking shark"
  },
  {
    "name": "Bat",
    "habitat": ["temperate-forest", "rainforest", "grassland", "desert"],
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/180x170/bat2.jpg",
    "alt": "A hanging bat"
  },
  {
    "name": "Bearded Dragon",
    "habitat": "grassland",
    "type": "reptile",
    "src": "https://a-z-animals.com/media/animals/images/180x170/bearded_dragon4.jpg",
    "alt": "A bearded dragon"
  },
  {
    "name": "Beaver",
    "habitat": "temperate-forest",
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/180x170/beaver8.jpg",
    "alt": "A beaver"
  },
  {
    "name": "Beetle",
    "habitat": ["temperate-forest", "desert", "rainforest", "grassland"],
    "type": "invertebrate",
    "src": "https://a-z-animals.com/media/animals/images/180x170/beetle1.jpg",
    "alt": "A beetle"
  },
  {
    "name": "tiger",
    "habitat": ["rainforest", "grassland", "temperate forest"],
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/180x170/bengal_tiger3.jpg",
    "alt": "A bengal tiger"
  },
  {
    "name": "Binturong",
    "habitat": "rainforest",
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/180x170/binturong_10.jpg",
    "alt": "A binturong"
  },
  {
    "name": "Birds Of Paradise",
    "habitat": "rainforest",
    "type": "bird",
    "src": "https://a-z-animals.com/media/animals/images/180x170/birds_of_paradise1.jpg",
    "alt": "A bird of paradise"
  },
  {
    "name": "Bison",
    "habitat": ["temperate-forest", "grassland"],
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/180x170/bison.jpg",
    "alt": "A bison"
  },
  {
    "name": "rhinoceros",
    "habitat": ["grassland", "desert"],
    "type": "mammal",
    "src": "https://a-z-animals.com/media/animals/images/180x170/black_rhinoceros2.jpg",
    "alt": "A black rhinoceros badger"
  },
  {
    "name": "spider",
    "habitat": ["temperate-forest", "desert", "rainforest", "grassland"],
    "type": "invertebrate",
    "src": "https://a-z-animals.com/media/animals/images/180x170/black_widow_spider3.jpg",
    "alt": "A black widow spider"
  },
  {
    "name": "whale",
    "habitat": "ocean",
    "type": "mammal",
    "src": "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/MA_00925211_gwnvzd.jpg",
    "alt": "A blue whale"
  },
  {
    "name": "Bonobo",
    "habitat": "rainforest",
    "type": "mammal",
    "src": "https://c402277.ssl.cf1.rackcdn.com/photos/15180/images/hero_small/_MA_8993.JPG?1518449593",
    "alt": "A bonobo"
  },
  {
    "name": "Orangutan",
    "habitat": "rainforest",
    "type": "mammal",
    "src": "https://www.lifegate.com/app/uploads/Oranghi-nella-foresta.jpg",
    "alt": "An orangutan and her baby"
  },
  {
    "name": "dolphin",
    "habitat": ["ocean", "freshwater"],
    "type": "mammal",
    "src": "https://www.illumina.com/content/dam/illumina-marketing/images/company/featured-articles/bottlenose_dolphin.png",
    "alt": "A bottlenose dolphin"
  },
  {
    "name": "Budgerigar",
    "habitat": ["grassland", "rainforest"],
    "type": "mammal",
    "src": "https://www.thesprucepets.com/thmb/PQADJeGVONTlPHLkC-u6cNeMAME=/3696x2448/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-budgerigars-perching-on-branch-909976322-5b4bf18746e0fb005bc62377.jpg",
    "alt": "Four budgerigars"
  },
  {
    "name": "Bumblebee",
    "habitat": ["temperate-forest", "desert", "rainforest", "grassland"],
    "type": "invertebrate",
    "src": "https://a-z-animals.com/media/animals/images/470x370/bumble_bee4.jpg",
    "alt": "A bumblebee"
  },
  {
    "name": "Butterfly",
    "habitat": ["temperate-forest", "desert", "rainforest", "grassland"],
    "type": "invertebrate",
    "src": "https://a-z-animals.com/media/animals/images/180x170/butterfly1.jpg",
    "alt": "A butterfly"
  },
  {
    "name": "Butterfly Fish",
    "habitat": "ocean",
    "type": "fish",
    "src": "https://a-z-animals.com/media/animals/images/180x170/butterfly_fish6.jpg",
    "alt": "A butterfly fish"
  },
  {
    "name": "eagle",
    "habitat": ["temperate-forest", "desert", "rainforest", "grassland"],
    "type": "bird",
    "src": "https://www.snopes.com/tachyon/2017/05/bald_eagle_hunting_fb.jpg?resize=865,452",
    "alt": "bald-eagle flying"
  },
  {
    "name": "squirrel",
    "habitat": ["temperate-forest", "rainforest", "grassland", "desert", "polar"],
    "type": "mammal",
    "src": "https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAyNS8yMjEvb3JpZ2luYWwvc3F1aXJyZWwuanBn",
    "alt": "squirrel eating a nut"
  },
  {
    "name": "lion",
    "habitat": "grassland",
    "type": "mammal",
    "src": "https://timedotcom.files.wordpress.com/2018/12/lion-conservators-center.jpg?quality=85&w=1012&h=569&crop=1",
    "alt": " a lion"
  },
  {
    "name": "porcupine",
    "habitat": ["grassland", "desert", "temperate forest"],
    "type": "mammal",
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/PorcupineCabelasSpringfield0511.jpg/220px-PorcupineCabelasSpringfield0511.jpg",
    "alt": " a porcupine"
  },
  {
    "name": "porcupine",
    "habitat": ["grassland", "desert", "temperate forest"],
    "type": "mammal",
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/PorcupineCabelasSpringfield0511.jpg/220px-PorcupineCabelasSpringfield0511.jpg",
    "alt": " a porcupine"
  },
  {
    "name": "snake",
    "habitat": ["grassland", "desert", "temperate forest", "rainforest"],
    "type": "reptile",
    "src": "https://ichef.bbci.co.uk/news/660/cpsprodpb/1486F/production/_105597048_snakes8.jpg",
    "alt": "an Australian Rough-Scaled snake"
  },
  {
    "name": "cat",
    "habitat": ["grassland", "desert", "temperate forest", "rainforest"],
    "type": "mammal",
    "src": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Manoel.jpg",
    "alt": "Pallas' Cat"
  },
  {
    "name": "parrot",
    "habitat": ["temperate forest", "rainforest"],
    "type": "bird",
    "src": "https://chumley.barstoolsports.com/wp-content/uploads/2019/04/25/Screen-Shot-2019-04-25-at-12.18.22-PM.png",
    "alt": "Parrot"
  },
  {
    "name": "sheep",
    "habitat": "grassland",
    "type": "mammal",
    "src": "http://www.petworlds.net/wp-content/uploads/2018/06/corriedale-sheep-pic.jpg",
    "alt": "a bunch of sheep"
  },
  {
    "name": "crow",
    "habitat": ["grassland", "desert"],
    "type": "bird",
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Corvus_corone_-near_Canford_Cliffs%2C_Poole%2C_England-8.jpg/220px-Corvus_corone_-near_Canford_Cliffs%2C_Poole%2C_England-8.jpg",
    "alt": "a crow"
  },
  {
    "name": "goose",
    "habitat": ["grassland", "freshwater"],
    "type": "bird",
    "src": "https://forum.americanexpedition.us/images/canadian-goose/canada-goose-sitting-on-nest.jpg",
    "alt": "a swimming goose"
  },
  {
    "name": "jackal",
    "habitat": ["grassland", "desert"],
    "type": "mammal",
    "src": "https://www.awf.org/sites/default/files/media/gallery/wildlife/Jackal/jackal_Billy.jpg",
    "alt": "some jackals"
  },
  {
    "name": "turkey",
    "habitat": "temperate forest",
    "type": "bird",
    "src": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/11/15/16/turkey-tail.jpg?w968h681",
    "alt": "a turkey"
  },
  {
    "name": "pelican",
    "habitat": "ocean",
    "type": "bird",
    "src": "https://www.allaboutbirds.org/guide/assets/photo/70589291-480px.jpg",
    "alt": "a turkey"
  },
  {
    "name": "sea lion",
    "habitat": "ocean",
    "type": "mammal",
    "src": "https://upload.wikimedia.org/wikipedia/commons/7/74/California_sea_lion_in_La_Jolla_%2870568%29.jpg",
    "alt": "a sea lion"
  },
  {
    "name": "mongoose",
    "habitat": ["desert", "grassland", "rainforest", "temperate forest"],
    "type": "mammal",
    "src": "https://animals.net/wp-content/uploads/2018/09/Mongoose-1-650x425.jpg",
    "alt": "a mongoose"
  },
  {
    "name": "deer",
    "habitat": "temperate forest",
    "type": "mammal",
    "src": "https://blog.humanesociety.org/wp-content/uploads/2017/07/RRE_9574_183341-e1499797561973-1220x815.jpg",
    "alt": "an adult and a baby deer"
  },
  {
    "name": "swan",
    "habitat": "freshwater",
    "type": "bird",
    "src": "https://ichef.bbci.co.uk/news/660/cpsprodpb/64BC/production/_99888752_gettyimages-607743716.jpg",
    "alt": "a Windsor Swan"
  },
  {
    "name": "vulture",
    "habitat": ["desert", "grassland"],
    "type": "bird",
    "src": "https://cdn.britannica.com/s:300x300/02/162502-004-3B45E1E7.jpg",
    "alt": "a vulture"
  },
  {
    "name": "crane",
    "habitat": ["freshwater", "grassland"],
    "type": "bird",
    "src": "https://friendsofthewildwhoopers.org/wp-content/uploads/2014/01/900x600_family_aransas.jpg",
    "alt": "two whooping cranes"
  },
  {
    "name": "kangaroo",
    "habitat": ["desert", "grassland"],
    "type": "mammal",
    "src": "https://media.australianmuseum.net.au/media/dd/images/eastern_grey_kangaroo.8d02488.width-800.cdc7286.jpg",
    "alt": "an eastern grey kangaroo"
  },
  {
    "name": "cardinal",
    "habitat": ["temperate forest"],
    "type": "bird",
    "src": "https://www.allaboutbirds.org/guide/assets/photo/63667361-480px.jpg",
    "alt": "a cardinal"
  },
  {
    "name": "duck",
    "habitat": ["freshwater"],
    "type": "bird",
    "src": "https://images.unsplash.com/photo-1459682687441-7761439a709d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "alt": "a duck"
  },
  {
    "name": "peacock",
    "habitat": ["temperate forest", "rainforest"],
    "type": "bird",
    "src": "https://i0.wp.com/www.whats-your-sign.com/wp-content/uploads/2018/02/PeacockSymbolism.jpg?fit=1600%2C1059&ssl=1",
    "alt": "a peacock"
  },
  {
    "name": "otter",
    "habitat": ["freshwater", "ocean"],
    "type": "mammal",
    "src": "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/group/otter-group-thumb.ngsversion.1550790000350.adapt.1900.1.jpg",
    "alt": "a sea otter"
  },
  {
    "name": "pig",
    "habitat": ["grassland", "temperate forest"],
    "type": "mammal",
    "src": "https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2017/01/pig_AdobeStock_2747487-1024x683.jpeg",
    "alt": "a pig"
  },
  {
    "name": "camel",
    "habitat": ["desert"],
    "type": "mammal",
    "src": "https://rangerrick.org/wp-content/uploads/2018/07/Camels-by-Roland-Seitre-Minden-1156x650.jpg",
    "alt": "a camel"
  },
  {
    "name": "cheetah",
    "habitat": ["temperate forest", "desert", "grassland"],
    "type": "mammal",
    "src": "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwMi8yOTQvb3JpZ2luYWwvY2hlZXRhaDEuanBn",
    "alt": "a cheetah"
  },
  {
    "name": "chameleon",
    "habitat": ["rainforest", "desert", "grassland"],
    "type": "reptile",
    "src": "https://cdn0.wideopenpets.com/wp-content/uploads/2016/01/rsz_chameleon-03-770x405.jpg",
    "alt": "a chameleon"
  },
  {
    "name": "chimpanzee",
    "habitat": ["rainforest", "temperate forest"],
    "type": "mammal",
    "src": "https://c402277.ssl.cf1.rackcdn.com/photos/1255/images/hero_small/Chimpanzee-1600x600px.jpg?1345590038",
    "alt": "a thinking chimpanzee"
  },
  {
    "name": "ostrich",
    "habitat": ["desert", "grassland"],
    "type": "bird",
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-lPxEtgSNNSI_kB84ECBJEfGVZR_BonAeCCq9bR5IpLwFQZxl7A",
    "alt": "a standing ostrich"
  },
  {
    "name": "flamingo",
    "habitat": ["freshwater"],
    "type": "bird",
    "src": "http://www.exploringlasvegas.com/attractions/images/flamingo-wildlife-habitat/flamingo-wildlife-habitat-vegas.jpg",
    "alt": "a whole lot of flamingoes"
  },
  {
    "name": "cow",
    "habitat": ["grassland", "temperate forest"],
    "type": "mammal",
    "src": "https://www.ucdavis.edu/sites/default/files/styles/panopoly_image_full/public/home-site/blogs/one-health/blog-posts/2018/cow-field-one-health-uc-davis.jpg?itok=lrz5mpyq",
    "alt": "a cow"
  },
  {
    "name": "mouse",
    "habitat": ["grassland", "temperate forest", "desert", "rainforest"],
    "type": "mammal",
    "src": "https://images.theconversation.com/files/265294/original/file-20190322-36283-1me4pb6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3772%2C3342&q=45&auto=format&w=926&fit=clip",
    "alt": "a mouse"
  },
]