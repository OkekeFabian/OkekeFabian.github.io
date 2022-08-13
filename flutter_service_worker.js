'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "a96105787136b4ee8b3e0d3ff7de93ca",
"/": "a96105787136b4ee8b3e0d3ff7de93ca",
"main.dart.js": "9500ff94f0c7388d9f5926ba6b7e4741",
"README.md": "87b6e310d0e2686a2b98677f9a4378f3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
".git/ORIG_HEAD": "2c84a391d4d62f2d406949624cf1c9c3",
".git/config": "b25a504d3afd7d549fc39cf254070d7f",
".git/objects/61/a5b9a11c4d5fa856fcff2bfd45fba686f67ead": "329310ef059f8d0436103fe61c3509e9",
".git/objects/0d/c36570e06b5c352c1038bfb16f718a6bd0f16a": "3a2e43b589a14660f3dc80feadfe4171",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/648031c812fa95801d5b4603b26cc283801c46": "f1fc1b9698a61da9d99bd8128fc809bb",
".git/objects/0d/42f201503934876c29e1b925264abd63474678": "a34acb2cf76c361ba16201df86769eb7",
".git/objects/59/57f0fa919cb7eb631cb80184a53386868492fd": "582328f999a9117e81f707fe03d5164d",
".git/objects/92/b36fd28590eddaf74c373bc3100f70b5cf1783": "13563605d7828c0fd31e40d84ca0fb9e",
".git/objects/92/0f57907d148b317924c47fc714f514bf7f23c3": "ae3849518783596e154256ddfdaf4599",
".git/objects/66/a8b8b942c89137c900a410eb562d64bd8ecbd3": "6e8aa68d59efb19da8110f864f19fe40",
".git/objects/3e/9d948599c42108ffdaf4d10d2fb2eff01247a4": "205b661c135313cd878ca7f072acbd8e",
".git/objects/68/bbacba12c4c0b18325bf5df21b63d52487c673": "3e86b2694d60f11c4f8c2cd18c57f4dd",
".git/objects/3b/f0833e1518b9fa9199ab5d80256d52afafe6c7": "c44a171b63fbcc8b4ff915b820b65303",
".git/objects/3b/2405ca1f9814edef69266eb07731f5ec55b6f0": "bbd317028341801cd4b390ac77316160",
".git/objects/03/5f4af992ca049e8691e081f4c76a2e531982e3": "16d1ffaa69ea4fec78446cd78801b933",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/73b65a97f536fd59a9a6711314a1dc18a29ab5": "7e80867390f97964e47d30a4e11bbc1b",
".git/objects/9e/d0aac46b9316ff721af99d7f4b0a48aea593e2": "d34035d33d408f141164152bb82754bb",
".git/objects/9e/c095d9c4fb1c86eac90cc1b51348df88411da9": "617dcb6f5512d0c11dfddc40603808f1",
".git/objects/04/b595ac18d749484e953cbcc6273d4331b8e269": "4d6a9ae33694fea97625423acf162fba",
".git/objects/35/0219d1fa0beac349d075612a4e0ab817033762": "f6c7bdaac81aca96d874dcb663615ef2",
".git/objects/35/4cfa597d5260f1589746a028e4e8afcd1398d7": "28916e74a591e082bcb24c5309a8b201",
".git/objects/3c/542c6c6f01beeff1e9d07b14df1852c5b585f4": "7720e4d831fb581f491ed4b840f9ea96",
".git/objects/56/3ef34361ac0257b84142fc21df71fe48bf5c0d": "ff9c38dbf8e017bfa1d5769a88934a6c",
".git/objects/56/593feb052dfc35908ce00470a9c84014eb0d06": "ecae10afb9e143be4d1b4c5e2fd70a42",
".git/objects/3d/a3ef921e4a2bf2e6881c7893553a2c0e7d0f55": "07530910976c1b65801bd996f86c0a60",
".git/objects/3d/adaa955c78b11d2d7286cd723a41b8f65677c8": "98f765778c9d60159aadc8ec69c3ca0e",
".git/objects/0b/31c16ef408240f4ecb87b6b433e6f5cbfed6f6": "9f3783873483d3a4ce0fd9f6cf78ed42",
".git/objects/93/38f490670f6b87324ab7de37b257237c0e776e": "2b4c56c9e6104f2e0d7f0faa12ac050e",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/94/f12b06b498d388efe84feddd9f765d3ba2867f": "b31ac1b2334a2167790d2fa7f386e81e",
".git/objects/94/203d32c90ab1b869be1021b9a3ee70fb0d0b87": "79e27741754e06ffe90b9f75ffde6926",
".git/objects/5f/c9c27bc593290f4d830be03070588807a113ab": "5a7cca1e1c828396cdcdc10bc26f63d5",
".git/objects/5f/e5c6913b269d524eb42c1f58ca445aa013a8f7": "11ab728ea4f84f005feb4d2ec2d09bbb",
".git/objects/33/1306830891ae200992bd63e86b4517d4caaef1": "0a5f24ad151c8c106faf176ca40bfb31",
".git/objects/9d/453c5bdf523c1cf1fc002e4879f31cecbc1b95": "01c0074ebbb6f3e9575002981593d4a7",
".git/objects/9c/7cf654309bd4166d49a86b8e1a0e6f1bcad3ae": "d9dcdffd519e40c12b95599770c50ec7",
".git/objects/9c/44a0a6b1132b7995366407791c7b8a03dd666f": "8f68987737147b1d28af9b3cfff547b4",
".git/objects/02/46226685450fdd58c580e12929a9a7f544eb76": "6572ec976f310150bf4228c7272df4af",
".git/objects/a4/fdf063f765027a4a3e6c29b234bfef7e58ca31": "c3202705b665034d471a390ef7128466",
".git/objects/a4/2b86fabfdacf3aa764174a8c8b4bb0df15617e": "3445152056ea04b815542bd0021790dc",
".git/objects/b5/49e5f4fc923b3e5c3501b05712c3d9d50285cb": "b3944175c7de102eee7760bf963773f5",
".git/objects/b5/bc0c1b0fda7b451ffff3a355f2f91564e89fb7": "d0813d7127eafce7c8c6cbe48be6c64a",
".git/objects/ac/13384818d3b73395bf6fda4b876b21a3e693e9": "8b87ed31ede29b8291f7ab9936c393cd",
".git/objects/ac/cf4fba3189530dccf3d7e6107d946c25f22f60": "1aff3beaea1f7db4ba1e2f2108d27943",
".git/objects/ad/9fc4bbdc2dd3896283225f2231d682c8e90815": "f9310cd1f4474c4c64621c985bdf8b51",
".git/objects/a5/c1b6155e15d584e4661e2c13af273e8d0df548": "dfc08cca4f58187b96a9dc70d8e407c4",
".git/objects/bd/7fc0bec088ff8c6e7fb951674b78c4fbd36e90": "6d34b55bdd6eafba5e3f9c20fb08f64d",
".git/objects/d1/9064bb1b99fbcab13aed3e7b00f7f5042f40b1": "68992951741532a8cc96c1a1b76b6968",
".git/objects/d6/47a87f3b225cb96ff3ba01f6e4d93db4598bb4": "fb32319225adbcd3a458509c79edb4eb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/1e4bef0e7ce6636a7427817eaf7bad74f37e95": "8e65ad2e2264273db1b808a2a9eb9fed",
".git/objects/ae/19c06b90018034a0bf04a81c0935eddefd8b03": "601851ee8e1b91142c30d81fa5bd09c6",
".git/objects/ae/17e6706dc13f3ac489cc55addcf0a1d7166eb3": "880cba01587d83f851f5d5cbf6568a2a",
".git/objects/d8/b185a993a1ef6b27c72f9b2053d67ac6d3f32e": "23eb5189bf36c03ed69aa577477379bb",
".git/objects/d8/fc6a202c63abaec28eaf9a2e95510a17c8277d": "a7f6d80498e36fea3d62b8a0332ee2e2",
".git/objects/ab/34e3d710cb1afe013acce4400d799c954c502e": "7bfd5a3b88b223e88461fd8ef5ba946c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/377adcd6535fd5c201c826771ff8d0f658399c": "feb463bf0c45b7e16ea9e3e060074110",
".git/objects/e2/53e0688171affd78e88263383534576c53bddd": "8c55dc8b1f8a365e3e005431b8839926",
".git/objects/f4/74a43433ccc4dcaf18005405c8e3742391306f": "e46939893f8acb84e1798e26ff185f23",
".git/objects/f3/006d7c4f3cbd1386f9718f6fce92c73c7fc98f": "d2100cd075fcb8a3791d4c7d4e47f4c9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/0d99ba1d6f2d808500320b363866875a6fb8e7": "294b72fa0a2d2cb48c17ac32f2d4d0f4",
".git/objects/c9/5f52e509fa93f49499d2c8fc6b4296c871ee99": "c19f013898d4353dd331b92cc5425ff6",
".git/objects/fc/47fb5982d4b8e267249e19838800abf248fc4e": "d0c0528391e1adffd6feb87d2f4e3475",
".git/objects/fc/f34a32d4603ec4b394e1f0d0bbb2a612c0dc14": "22e2b4ee4940eafd56b3fac6a3c3b0ee",
".git/objects/fd/da6652e76aa39cfc404ca9761239cb79e860a9": "8f11d4a39991926847fb9f888a6ad81b",
".git/objects/c8/e8543ea75f9780d8a410314b596e9ac1c7ccf1": "06ccb0da8479992fc0d172b95be18f80",
".git/objects/fb/d601a67b55e4bc2d7b2268b9a7d919c876f3d6": "d1b43fadb4b9e4f370b4b55aeebd0b97",
".git/objects/c6/e2fa74367fb88510bbab07e201812ec26e7e23": "30e1c1f252f3d706a30dad1d83b824de",
".git/objects/ec/8542e0950fe24bb5560000569d3ebf6e252ac7": "20184f0b16e6114de534de51a41dfd36",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/11/42d6e81ae168b9906e6c89997c817f23ecda67": "debd579957a59e75acf3957aafe6371d",
".git/objects/7c/76a9a93694d5fc4a6ae0e1eba61bfc8b046f7e": "8e18bf1247b521bfe3d3ae47f2040bd0",
".git/objects/45/4b87911093dcad2f7764bc071cd58e4fe6d297": "57da8d19ea53c44e3826b5c9ca039dfd",
".git/objects/80/49030f52e985a67fb8f958d8448e1b10921fa5": "4290c62cab226b3ae95693da82c60a74",
".git/objects/80/9c5d8bc39ec456310613f0767e64de7f6694d0": "056a88b25be89c06a331e118ca0b693b",
".git/objects/28/a70118e4cbe14f3b788177d61b8e4543d9ea91": "2e78398af59b622ee2295061fbd23e67",
".git/objects/17/bbb76a15d3ac8391a98f0a91d9b215de149a16": "4a0036d84e728fa1f663c6eb991f6536",
".git/objects/17/9357efedad28f9124b19167b718ccde0d899c9": "d7aac851fe708907e2b615f0666b98e9",
".git/objects/8a/6ea6d1811b3a6b1922cdbaea9c63a4b7162a74": "2ac846492a264a18d31c62c9b20cfa25",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/ec919196b492a8bfdafd3392d807729de7ab20": "2390dc55bd554179e810db0ff09e6313",
".git/objects/7e/9984d7216375c2150b8d39c6652151e3e207d1": "7b81b64632e165a13eb1393dc5b9d676",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/75/d1dec29c464442bc51e9e8ed5d72daa9795783": "527a3e76a988215caf96f020403a7f52",
".git/objects/86/bb7976e45f4f609886a5864dcacb847e768496": "c6d3bbd2dd52ff0bed6240e497e4d94b",
".git/objects/86/33b57befc0aff0947fd61e75afbb7fb41af291": "a724666d81d8ba8b3a4ec9daada6577d",
".git/objects/86/18d932f5f80969f49eb0ca81722be119547116": "5995dd4fa4d83f8236dd9ff6fd8cb863",
".git/objects/2f/3276887d8df4dba11370b27b163d77faa633a1": "48ac860537d385bd3298488b8ff52492",
".git/objects/2f/f53da928acfab7c61311d6fdea41b5b55288c2": "217f07d163634b53997d3a3670f3f954",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/8b76a376e76676d54fee3fcbdde313afc1ef1e": "1e14c1f9f55cfdba28777e2cf558592f",
".git/objects/9f/a650ae07d509dfc0255e30dc46d0043e228cd9": "96ba9095c7bcfe95f28eccf070572429",
".git/objects/6b/5c61ef30f93cd92aef3a9c256cd335f60090d4": "850ea17925a960b83cff48f041110e09",
".git/objects/07/536c182ee5811f3fc3f8496a4ea4322f53fc29": "c898bcfb4248a87808357cfb6950f0b1",
".git/objects/38/f1819537af0ca1774400502bc55646f42916b1": "56bdf2841acb698c463f6cdb79cd93f3",
".git/objects/00/faa772ebfadd5e72cf8e6dc225627ba73bd391": "a0eb1dccaa1cfcaa7c21d7457a3a1e6e",
".git/objects/00/f1bbe0a019d4b3e8021148d1eeca8956c11e8e": "0178f34b7bb840543f224c5d421048ad",
".git/objects/31/7241df2beda5c7ffe6d9a2ca4ae89011dd6b76": "77a51f9704f99474801aef1f37034d82",
".git/objects/62/78a51e6f5879592a8acf7ffa0c92b33edeeee6": "25241b50262b3305c944bd1374f647fe",
".git/objects/62/b35e68b4d6e212133ba0401cc1dcec0d2f6339": "6a4afc858aa72c6e78797f235449fa5d",
".git/objects/98/de4395d8d99a2095249e852b95518b935f5a96": "4fc6a5e6bc7c8dbd8028b3338c23986e",
".git/objects/5b/e5db861181a0e2421b29fbb15ad7908aeee1f3": "ea050b9fd271a3145e673d4a7737d0b7",
".git/objects/37/616eef863b26ef2645882d89d4f78356093344": "29bd60f80f55d9cf39616a383f8e9458",
".git/objects/37/a1126940f8915470cd5a0a9dffea5958f03b2c": "460b70607970233411ad19e8ab50ead0",
".git/objects/37/a3ca068fa845ef692022ef82aa60c95ce37afd": "22aa1884e8e4d76d17f4342dab65b6b5",
".git/objects/01/72826122bfc4315cefead1b081e73dfad28d57": "34e573134637c8c6609f29176a57a07f",
".git/objects/6c/657ac85e05b5c0f498d6db6c512d7635016c06": "a7f2c345f326ba7ba4dd79d5088fd28f",
".git/objects/39/4eb517e41374f0dd5088c96cf55c77348c778e": "e7fa10edd32eafd27519826e1dcc0235",
".git/objects/99/4f0bb656460d710e4ccb175b22c30829eb52e4": "358bc6ae16d6f7de4e9f21ccf9319cd8",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/52/84c023af7f6d009deca186046dc8872210b578": "186f9607175c5082d6ff76780aa7a6f5",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/97/a561d3bba7254d28317787475ef43b28508d41": "e186551c75f3f47db9146181612e3d3a",
".git/objects/97/149e55f741364ed84c8ef5ef583d83a99507b0": "bebeb84932fedfd964ed26276be805fd",
".git/objects/63/8f4e27fa4f9861444acdb591d576eb63bc8c2c": "c0cec6504a70edd830ad3ba323a39000",
".git/objects/63/ed545373b3e861c0c5b935e783f4b3b7247e80": "71efa1e9cfc4db16f22cd8787febe76f",
".git/objects/0f/04dca7696275b9cf39cea5dcd028206e23cb9f": "7ca018b3baaf07744cc22fcac9bb8dc1",
".git/objects/0a/d55b7176d59be29bc2b684df12c7a207399de1": "73d0773ad165388e297af827d6197e8c",
".git/objects/64/5cf9f78655acbc2885f1018a1c769ddbe459f1": "dcaaf3a349b2ea71e673b45201cda55b",
".git/objects/90/1e5e200ba1475c844128e7dc1ff266e8d88a50": "0ce8f3c83bec6c76a50fdf7d7cba3d97",
".git/objects/90/11f4f36823ad8858900f2c41a729692ee83ad7": "c8a4b65cdf6b28f1c92becd842b36bfe",
".git/objects/d3/944accc7af7667d930fb24c72ab73c804b822d": "6891fbe79484cc440e0393f6f9b73fcf",
".git/objects/d4/9b2d1d4c999147b5f14496f9be15603bfd8bae": "a6546db6063b5c0c986136507dd8bcf6",
".git/objects/ba/d56fcffa6b91104a3dbb4f44151b8f39d6c400": "3d7c3cab24e17436c6ddec1a68e6b1a7",
".git/objects/a0/7f3f2c68d16b7e978b8cf28edc20e92614e0e2": "6c01d646ddd2444910d05a4a40cf042b",
".git/objects/a0/31e742c0388a6088a6fd37b0ac561c14c5f1ba": "d933e45b3ba176b482811e6b5035952c",
".git/objects/b8/a4299e33f3e869baa7a1e8e4514506cc2ef5b3": "e05863cd62356e86d60618650f1338a0",
".git/objects/b8/e5310854aa434f4c34d9cb243404e11324ecce": "d17a1121d06f04dd604bf24afa6ab16f",
".git/objects/b1/c6791e6b033716a23f06f2dc8e308d72834e1f": "b674ec7b8b1483076b8083d65f3bc773",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/a9/8ebf1b010c2ec08150f89052db0b29fc1726ac": "b7b8f9390f2480140fe8e7eb02973f41",
".git/objects/d5/3fc01eb64f95ad09577aacd9a266f51964eee4": "101466c79270f39a8ab005208bf3d5cc",
".git/objects/d5/6ec40d8c6e21425af224f9eaeac6c62cdc7153": "0a352a5bb635eb7a58f9805ed607f21a",
".git/objects/d2/dc4487abc9a402a3ba651772b069d60f552bb0": "3f42c56795eab3481223b05df9b2f8df",
".git/objects/d2/8bc201d3c4ff9d5e41fd20031d3ae68ac00b12": "807508bfdc51508e3878df7431c7b234",
".git/objects/aa/b1ed7cd4ff73bed100de3b5eff515dc9e8f6ae": "be4f4a2c471688dc1e870176e4eeca4c",
".git/objects/aa/8c9d8006e5613a15efe308210b7975e0ce0f06": "4ad54888ac40c4a6fb264c9a6ebb8a09",
".git/objects/af/6c19154a0887fd9615f918acaa5bcbc0e9add4": "51b4e09130b11bc0985f5cd5c69426af",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/ef14c5805c8a2051e38bc6a67486d7917073d4": "08589479523870087ba3bafa46ae706d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/31f437902df42b73f44109968ac1e337f77a4c": "1f8764c6ce61700e2d0c2906910e8ec8",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/e1/49c94b7cffd2441346629ac0287ac1cecff7a0": "e3b6bea1940b14e75fd05815c3ebb707",
".git/objects/cd/95aab1223a6df9c0506880bda66ba05f611b02": "f15e84f9f3045b3ca1d3cc396d649738",
".git/objects/cc/ddfa89bed2964dd9d3946aa7d8e74851fa6d6b": "7635b664f053d14d0ae42454bd44ae92",
".git/objects/cc/f44210c6dcb08704b7fc27856f28b1ae566792": "367c15726b51b46f0458cde21b412455",
".git/objects/f9/fa5d6050742dd0504d6d7a4eb39628c967717b": "bf1b21bfa3638042a27549a79c82628a",
".git/objects/f0/eccd9b1f2d63faade3db9857e943431ac1879f": "1db86729a65b2c8145af0971dc8a731d",
".git/objects/fa/f9536229d4d7d75f4290b19cf81aac9d84d879": "3879cc2ffe6d7f213266ec6e0e6422b4",
".git/objects/ff/3ae02f7159cfccfbe1749065fe140c8f9a09ee": "cefecc991f5edeff164bf4f1445be680",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/489d6472fdd2caa97bc31c1ef41b7015755151": "4d92799b73e0d2219838a3b19043f37d",
".git/objects/f1/1383b91cc0a8f2ad587359fb9bb9f65e7397d0": "6e79ac413b83651ec9397fcd3bf997a2",
".git/objects/f1/ac28e04977a3e6b0630c3da7b9ef2c1d061b1e": "242e0159d5400245e42772c17ec95b0c",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/e7/bdfd0b64259c8210a0791fdc407970820537ff": "620bf24b9c648914767ea8349696d1c3",
".git/objects/cb/ac86f2f307a42eb6e7f719bcb124b442de5987": "20b709504d83052e438144dfbb7bdddd",
".git/objects/cb/12477e95b943b27e6f14600b0c4b1fb9348740": "4e6b513bb392051c79d85ed70939b637",
".git/objects/e0/9f875f87c01670d04cd636b8687db2ae741acb": "b5a3949e3fc568e69d093d31eeb00aa9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/1176676d969e6576ebabaf59f3932b5b085166": "272c5e4a8ea5aa780becb9525b9def98",
".git/objects/2c/3c303383d5e676fcd20198cc9559e470ab7cf9": "9869c7ff0586e1ee8b0dd66fde775461",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/420680d7f2ffe8fcff7ac260ad5a5d71d3cb84": "0fa35fd3f51bcbfe446d55243fffff36",
".git/objects/1b/a904ef4bd0aef11e175eb3b10ef5363f5db0c3": "f07652cb6dc7b9aa12ba65abf1e4f721",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/15/e3cd33d86e2b2ad20e762e83eea7df6cd6ca5e": "489d58ccb7f83bc7c683de15db264ffd",
".git/objects/12/641758467cf0a9441ae18dfe0b2554bededc06": "939d412442748aa584d8552adc25c150",
".git/objects/8c/15cfec6ae3474b4f180e36d383af9a831e76bf": "4e89e278651b26164eb23a45c557bbe7",
".git/objects/85/0977e2cbbe3640a4c8aa50aaaaa0d20d79728a": "a39282e22e0aff97a9dee15a1f2a47e9",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/40/f27f0b4f5281b873a5e8909d4cbbf9b94876b7": "e16323900224965336e334dcd21fd4d0",
".git/objects/2e/f75159d48519ebcf514a0ef465a9f3db77e4d2": "b663897eb1431828a729b29bb77b9f89",
".git/objects/2e/9903b760bc7cfd30079968f6b847218b0db038": "1d106289078d79bb1f4bc852d9eab439",
".git/objects/2b/df0650ef323fb921943387f9ff77e10b85c2c8": "9d205a0876f87213b2e8e114eb65aaa4",
".git/objects/2b/a2faad6e5cc4a80124ae1360c253a49048ce6f": "302f4fc188cd3c76f6a885d747e15fd5",
".git/objects/78/6a475a2c1cdda9a33a59e87601ca0b575fba03": "fe93719e2558d59a83b6d23af535d6ff",
".git/objects/7f/101591dbbf71ded565f7c4b4f967a62fdca971": "5870dea0c59d4030a7bc952dd5011fd3",
".git/objects/8e/61c563120b68f97e73caf1350cfc9381fe213b": "1792e2ab039fe235db8fbe9b549d3bff",
".git/objects/22/5b7620d12044910a34a6f528bf124313828826": "251e22397e6c959e095ea2e4aa53cb70",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "eb4d8be8771575e5ed116feba2510dbe",
".git/logs/refs/heads/main": "1f8696c567d03c445012cc8a80d24b55",
".git/logs/refs/remotes/origin/main": "bd4b4782f7708c8e374cfdce5ca87a1e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2c84a391d4d62f2d406949624cf1c9c3",
".git/refs/remotes/origin/main": "2c84a391d4d62f2d406949624cf1c9c3",
".git/index": "3dffbb2f8fbdb77f2d56aa0aff8ceda4",
".git/COMMIT_EDITMSG": "74313317ecb13af606bc0e0edca638cc",
".git/FETCH_HEAD": "8e50f9712f69a9a884a0a7011d08e300",
"assets/images/pic114.png": "17beab7c354f1e71ff2801109b8f0edb",
"assets/images/pic101.png": "e2bed538041a197d6c44537b30d1a26d",
"assets/images/monitor_first.png": "31e3e3ac45f15d328f178620b086e596",
"assets/images/pic115.png": "550c98a93dd1c3125e4614ee3151e3ea",
"assets/images/pic103.png": "a0d5184f8ba106025f0e3a2a168db839",
"assets/images/pic117.png": "7e928df851c015cc5f450da2f48411ec",
"assets/images/pic506.png": "3c62dca1da5ea47cee95324888147879",
"assets/images/pic1.jpeg": "f7e0c7d62056cc3137bc0cc17f6bc57c",
"assets/images/pic106.png": "c2b2c7bd15ba676b42b146cf0257a8e9",
"assets/images/pic105.png": "96385896ceff1f85b15ed6984a1be730",
"assets/images/pic501.png": "4b16cfe4e55171a08a01126ba4495ef2",
"assets/images/pic104.png": "fed0d69678a987180c5f88908bc0d978",
"assets/images/pic109.jfif": "0631080de0efd9d3fc49852662e783cc",
"assets/images/pic9.jpg": "3afc29061b7096887276615bde19a7b0",
"assets/images/pathway-2.jpg": "7723cf03c0b31402fbb4a9bc98387235",
"assets/images/pic8.jpg": "29041bd87a06ac88a870978d0ff531ae",
"assets/images/pic10.jpg": "018ba627ba61a1f9f56bd8bb52a9a387",
"assets/images/pic113.jfif": "2befdab3740fa4cbe2de3dc7a798a49f",
"assets/images/pic11.jpg": "59ba0916147e71c5ad34eacb4e2d7df7",
"assets/images/drawer_profile.jpeg": "e9ec58fa00ca12cc2de2f9300d7bfaea",
"assets/images/pic112.jfif": "fdf64ddd6b3459eca1afc9bc5902e270",
"assets/images/pic108.jfif": "ccd28b4c096d1977d027f14708e0e7a7",
"assets/images/comb_intro1.png": "dcdd052c79331259fb9f794537b71d36",
"assets/images/situation_area.png": "fbdfa04a5a63c26850106156fcc1d985",
"assets/images/pic118.jpeg": "8d44ad2ab33d538cba0efac7852b5f6b",
"assets/images/pic3.png": "14b61ff3fbf71e2aa236380ee44a2d85",
"assets/images/pic2.jpg": "93e932fcbb9c1db1e0a5829686bb746c",
"assets/images/pic102.gif": "c0224f6324f10974e0482820b1fe8a9d",
"assets/images/pic107.jfif": "a20876a9adbf141c66610b7852422e8a",
"assets/images/pic6.jpg": "b4c58c2d54b612e2c83596b109a71793",
"assets/images/pic110.jfif": "886435a9874555d371649e0bddf26eff",
"assets/images/pic7.jpg": "67944bdffd3e281e1750a4b89f312fe1",
"assets/images/pic119.jpeg": "6d49ab73d023784d5036c78c45ab3967",
"assets/images/profile.jpeg": "954e1c8cde0a441d404c59aa731ec557",
"assets/images/pic111.gif": "88612f94478814faac69b0c63a4780fb",
"assets/images/pic5.jpg": "ecddcb730edf455705e72a6b66130033",
"assets/images/pic4.jpg": "62faf8feb0638161021fb8f822453071",
"assets/images/pic121.png": "1f3bbe6d1220201e931afd6b91970a8f",
"assets/images/BIODATA.pdf": "0098a2c4f561807c9f0064ccb22dd185",
"assets/images/pic120.png": "ea39b948bcc12495cc2825782b9e645f",
"assets/images/piang.jpg": "e5d661ce35acbb9547bddf8a55a95aff",
"assets/images/deedy_resume.pdf": "7abb4d1961631143d23600178b3cb8f5",
"assets/images/pic116.jfif": "fef16bfc930bbb9e3eb2553ed1da8b6c",
"assets/AssetManifest.json": "6754a1d2c6b339cccfb28cc37b10fccf",
"assets/NOTICES": "442bc0e36f293a3f454032991ca92544",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
