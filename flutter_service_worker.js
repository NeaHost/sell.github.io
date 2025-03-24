'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a91b2a66d8d0b4a47d6c451b6a1989f5",
".git/config": "08c017306a92eb31b0127b4c180cf990",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a21118c14f3644df14e1d6f5f4833eee",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5b84db692e8584a08cf6e0669815737c",
".git/logs/refs/heads/main": "de83728e32e9b64d37b0666330babc06",
".git/logs/refs/remotes/origin/main": "85296dff6f64879672569d0bc253b287",
".git/objects/01/1a03e9e8f0fba82759987ab136712f4b1f8927": "4d9c904a243d89f4b24c5da48d6dd781",
".git/objects/02/a1c6b2dfc7c13daaf1f5b11c21a721bfe974ba": "bbd3effd8728ec223e57f1754a75814d",
".git/objects/05/58a53c5f15ba93c3acd09f5dd2684ed7f48c45": "1fa9c9172d4b7e614f2938c3fe9593b2",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/dc6da0207cde1cdeb0454d6b8fe420151f54ba": "8c4eeb101718982bd7f7704f73328056",
".git/objects/08/82d8751756a4620bb959eec867d5e9f1cba67f": "fb288c5a4482de8a35576d2ffbfbfa98",
".git/objects/09/0b985fc4e58a80023e41fdc5653d340d30f97d": "69de5385d4f8b7818c0db72b6aa35dab",
".git/objects/0c/107689132012976cd73718eddd738f4c9d7227": "644b70f4a4923f08299a955bcd3a6c27",
".git/objects/0e/91384c02f12dde98f5efd8e7539377935b0856": "d3a337411abc85f39fbd163ce0b70029",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/80b405836ea606a4defceede6b688406186f1b": "24c3ccf5ce398b936b3d1c8bfd4bf627",
".git/objects/12/119a538f78cc98ba539b432d5c2e880bec846c": "49ffdc2aa16690a378a06b635fb9e7bc",
".git/objects/12/3ef092710952b5b058483d4b1199efb8827549": "24c63c2835914f6e74dde10d359fab7b",
".git/objects/14/f968bcd73bcf0f7b9997b6de9b43c8d52c805b": "25bc558a20da0b47287bbc31efe670e7",
".git/objects/15/0ab0c45c048aaebaeeeb96dbf7e011786f89d1": "24bf0b33d93038b7df6b579e487e2f87",
".git/objects/15/dc5b1b2cc7d567528de1f2a2bc0d3f30d8e93f": "4a1c3f663b352b66737e06ccdd8bb6ab",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/26f8b36c300b7fb2b1efc9746484af596b54f7": "1cac2161a8a9ae0692d368c209f4136b",
".git/objects/19/9b4e391e958b574249b09ec97e60a0e3f7ab72": "4395369278fb076f59270d6226ee7119",
".git/objects/1a/b92b7347a16a5cfe9004cd0c7055f284c97e7e": "ebc080d8c34b4615871e1f7f43269307",
".git/objects/1e/177f8b2083a3723e0876e93b1ed62c6bd462e6": "78c36ade3263ceb97af4a338d44770e9",
".git/objects/1e/98c7ffa005473ba973f1353fb97258937876d6": "00533ec0a7fe2a189e14e41cc51e7661",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/1427b6a8fef94f9f3f9f4b628f8421464297df": "b5ff23cee8e08fe3b39354101d2ebedd",
".git/objects/23/03f4f531f4784baa7251700acccc5a3ec9711f": "499e51b59cd36f56e691b55b94e88e13",
".git/objects/23/3a3139fa587c016bff24d28d90245b5d09e68c": "307cf1ae9cb1ef474dd8edc58d786098",
".git/objects/24/1e97c9179a0f79749c041685b1bb5e7a949571": "9ef3a59cb87f669ab3d030acca3e506b",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/72fcf18c06adf61a44fb72b84f0aa613ca629d": "37b3e4c9d6acdc1daca44cb6d106dab3",
".git/objects/30/2d327dc87325d8a74a5f0e19550db92472c376": "98ac163039ecf5535ea6f29176b1697a",
".git/objects/30/531bd1de742d9a61b41e070524876e11d64958": "906861b50fd68f22435636d1654b984e",
".git/objects/34/98a19f1e757a3b1c906242d684b37c35b49451": "cc84f248ad54fe6ffd6ecd9990e9e14e",
".git/objects/35/2b5a64d8f8fb6f56241db015424fb139352af9": "00e5301f73000d7a54785aba3c1b03c8",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/b46b55403710ca5b732789a59e6d23e76c3e9b": "d3a69ddfcd63ead20998bc1a3623fd63",
".git/objects/3d/0411f327ab2e531f6fe6b0c09e865ec417e574": "c06fcadb552571f4fb8ca1e4871008e6",
".git/objects/3f/4dbbedfea3a481e121b9dc4ff686f62b78a189": "40f098b055bf7e97c0bdfa2ca8685aad",
".git/objects/42/6b8d309b8eca328122db05fbba50295cf552c5": "ba7a3ee1408cfa28c68bc3480548bc8f",
".git/objects/45/81a2a128005739852df3a4dd4700b7ff16a368": "631543261517646d5da3635f1ef6887e",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/d3998976b990a2d097b50e7b90ab8a6ac329dd": "39f491f167ff0ac7f4667244d2d2abae",
".git/objects/4b/c1073a3db424c20da809f5fd25b6243d231be7": "fd1151a05af94072ba9998a5f071c6c7",
".git/objects/4d/469b6d57983ca39c1077fb9a4f7d1e3de40db2": "22eb799f9ef7366634777d14156d7ef2",
".git/objects/4d/c883f1651dd21cf0cf63958a5bfd5c21470e4c": "2ca899f2e944b5654e5693c81bd10d5a",
".git/objects/4f/ad58fbd6345c4c28594ce5f8528d4761ec8c12": "c4c493ac7bc7443da18a289a38e2ceb8",
".git/objects/50/5c8cd7a218e128fb313a1976427856945a71a3": "a2d05dd34a49fba5a789fbec12dcd2db",
".git/objects/50/7adccff3be8a7486b10ad8a0b4379cfc248655": "bb0102899e7abd360e5dbb805e46dcc9",
".git/objects/52/2bee5c3644b22274e0fa8d35348dd9427eabc2": "3575c621bd1a51a57328c3348de320c8",
".git/objects/53/d1c61b9b8b65104ef4196e88f3cb45dc637f86": "77ec91b9c4385e8ccbfd0ef7dd37101e",
".git/objects/56/647d2c26549e1c6af0a5c1db828b80ade2667b": "908060fc78303146171b317d1b7f49a4",
".git/objects/57/3973a9faf86a6ef47a8890e08d410d42369d20": "074192169f8147e47130ecb7b02732ef",
".git/objects/58/1d978e9eead663e56da1796df7f0307abb5e84": "17fd6ea8d5ec8d2c8682f88833bac033",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/fef2b9fb3a320b26110c27ae87d29b2beb17bb": "da2239796fc3e843c91e183c5532ad05",
".git/objects/59/9425bbad292d7c90c33554363c733b8c888dff": "b7cd5d01f18192efcd0db29bf0fcbd01",
".git/objects/5b/ec3e1cafe79a0b61d6c2bc1e51d1c28db304b5": "6f4779fa87e7aaa129764a4cce7994c1",
".git/objects/5c/f88d94e954367271f8daf5d03c8e830154e2cf": "8505f3b171e79047f7d9d5abeaf56de8",
".git/objects/5d/5419aa6e2a166b22cbff0327815f9fb8fd32f0": "bcdb015cfbdad849c1fb7fa0288a5e30",
".git/objects/61/cb2774443fe0a3718aaa5062d4d3fea8c5ff0c": "d993fd81782e8c671853a011f02b4db7",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/3278958d278ba926521ce9bdf347dc31e31a4a": "b50a7caa129e9f308672c64274c31cdc",
".git/objects/65/a66a72354331f4105a8fb62a74e54534c5279e": "e117c2eece5b6f71551ac464777c93fb",
".git/objects/66/0d9f5de6493764ff69d9a48e474ba969d0d13d": "df0f83deeab5abf06b84da4a373f8940",
".git/objects/66/78c5425c3d4b984a140a92ff7eb0a0a5fa05ec": "1938336e6c2b416ee86f213af564b57b",
".git/objects/68/f1920692f1de4bb30534466722e16a18253005": "46a0c36d4c88afbbf2660db05405d796",
".git/objects/6c/6702a0ef1d0a6cb8a38a147ecfd81ca8ba3dab": "e5606e0e949a830922242aea268e783a",
".git/objects/6c/fcb1e34b8d9865bcf06365bd8e2b1e0a30faf5": "5c39257265919e6ae738273f62466956",
".git/objects/70/9394e896fafb2d11780d43f383e33849239f2d": "2b9ecb59d267c8698d8fc9f5a3d78c61",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/522985fe921abae3a2342a3f9cf62a27c80f3a": "9e27f04522f8d3a3511253098cc5372b",
".git/objects/75/796ac3ace30d2558bb51a779df4081a4e0cabe": "623780ea255fa01d3f792ead56cb1ac2",
".git/objects/7f/920464f8045a8af468467b60e1b870edf8379c": "7351617a5578eccd571072e4a881a723",
".git/objects/80/d85eba1e0d6cb25e83dc997396a619b7f21cc2": "ae8dc72f631fab55e1e704c674b8df44",
".git/objects/87/53488f1c599d4d96bcb7fd585e0b90e6ace746": "d6d57446ca505e63e1a16d4588a72c84",
".git/objects/89/8ba79323f9b005aebc7d48f5ff321fc8ca3e98": "c1e36098e10dbeb8eda5256949a81f9a",
".git/objects/8e/04229b6bd5677e8d5bee942f53ccd731d7b09d": "ba3c317fdc396aef662ba7638af36175",
".git/objects/90/cb9da138959e8c27a284bc20c75eec8068c2c8": "c8e6cb4d57d8e85e859f41a1294e9639",
".git/objects/92/673b7316d0454aeb2f396bc29911c07ab5ce7f": "06043e4256461fb283852abfa5a39d0e",
".git/objects/93/cb00d41ed4c166e90a01daba0f5d1b70063d40": "cedcf3b16eb83469e8052b9cd6622eac",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/9b21a0603b77ae302b40e4facb80edd8e5e1dd": "12f3a545597d298c6cf4ff733c79e730",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/901afecf21975158a0566d18730dd5d372b53f": "072d847b63c07e6bae9e8a77a60ce062",
".git/objects/97/fae57b4b006e963cf193de9d1c7c64146db4c9": "e7483d6aee67822992be2408b90864a4",
".git/objects/98/21cc6a790a9523b720260e274eea4fdc4109c2": "3fc177aae508c58cc1ddfb1678e8a27d",
".git/objects/99/2bf4c856fec653a70fcafc793984613161af94": "4651751bfb03f4b47f755591ad776c1a",
".git/objects/9a/0deca6aebe59634567c9714ff5a31644bc1996": "df8926add4b11b244d79d8d8b4084d66",
".git/objects/9a/325f815451837c78040c4300104f2a686b0b08": "843017905d7929fb45be0857a3dd98a1",
".git/objects/9c/0b662af044f3b30bfba5107c77292877ce1432": "ef0be6a5e161b899b5d7d7ab93b13410",
".git/objects/9e/907a2c5a2eef6cd47c0707d8b299f2d5e0ac23": "2306b4799968aa856c413669b4ec6d1b",
".git/objects/a1/827fccc33eb334002d6fea56b8c46ae6fb855f": "1d332d10aeb0064fc20bd9b78f4983ea",
".git/objects/a2/c22ef408d7a72fdec4b8835caf9c878bd86256": "f19db8dae944c50083c1162e871632a7",
".git/objects/a4/cfaee8902fdcd97f255af9defd218cd27cdb70": "d12d525c1720d2ff0d5058a00dff9265",
".git/objects/a5/1c169566638e2ab6c6732db5e2f9d3561dbb2d": "16ba2e19e7be17728af7db56ad02785e",
".git/objects/a6/5c13324c5b2d019b46d883d379d5ccc1c3f7bc": "338550499052e9a5abd37ee83149b1e6",
".git/objects/a6/73ca14f874949a37afb0444f2fd530b7409ba1": "523ccdbc869bde44292ca7d18fe72875",
".git/objects/a7/a0acd51a9dcc552ed244c4724d7124fe97c51f": "e41a55426d00133e5794f689cb3305cb",
".git/objects/a9/63bcc20d2d0ce3565ad248b26981e3c548b2f2": "967b03b987af0058565ee7d6043f1f41",
".git/objects/aa/96793d8dac58ac27f13af5161b3304496ab2b1": "df8eb1f8b9aabff89c1e3ad3f3897b77",
".git/objects/ac/e71842afd563885dec727ce631fa64acefca85": "3fe85063fe7843636644d523eb08ada2",
".git/objects/ad/89c858729a9772a5bad85106a3d3c28732e742": "8ab5d93325d2c1666cb39465c7b58544",
".git/objects/b1/510d6b310842304991fba65d14b3a4f83bbdf1": "b5c6ea324d8e20deeaecab7497b96d72",
".git/objects/b3/11cee58533794bf69fd3b9566b15d4b2820030": "99481b8af4dacca89871e1686e233ddf",
".git/objects/b3/6601bd632c80d4c5185edbf17bfca66604e662": "fbbf7dfbe6570c00594ca76b29115c9b",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/0d234daf00fc93f822da3af0f9f795b970e436": "27222b4cb67a7bc1e25ded2b76605e7b",
".git/objects/b6/e56ffe22684a9719a36e1821274e81276db3e6": "97e62beba3a2e2920e59de52012251e3",
".git/objects/be/0fc91a78975c0893bd94686b20245c36ad0f92": "eb20fbd881b6d94329810bcbcf7f39c1",
".git/objects/be/b64e5a04141886e7dd3b3c3f97de0c9db54e05": "0f44e89bc4b43ff8fb91ab20e528ee64",
".git/objects/bf/cd9779a1046b313f7fef930555141561bc780f": "374baec42bf5928592ae5debdd85489e",
".git/objects/c4/63d4b051dec0fd94a7bd1fd7d67582d87425e6": "f86b4781f9b27a5914a1aecb472ced94",
".git/objects/c4/f07b9d6b8d448105d3891ff8dfc5c5075a3c27": "7b6a2cec005dbd4eee46bede1c54df6a",
".git/objects/c6/3b48cd395b52ee29bfe23dba1ae5d964d2d717": "1767271b5f40d5d4eccac00ce48cec60",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/9d3e2b2a9d239ae41fe7643bb68ffac76274e9": "015d31ad7c73b6465306b6f6c37dfa38",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/461246f4c8c6678fcd1df01b35ab38ec0d0be8": "27cf68f2d8bd311b1887c22ad2e882db",
".git/objects/ca/88af560e2d3cf9f26d36b199e2c5b22bf7a55a": "34ffab5dedbe74a67d462f83986f23c1",
".git/objects/cb/d32a795d3fccf58a1aa22bcccc13ed8eeef2ed": "7aa47d4b35c39e39751c7bbd383d9c3d",
".git/objects/ce/4a00d600bbf52afbb007895a5ad99cba06ae04": "23a1fed163e47fe537454e2929572357",
".git/objects/ce/a457146e42c2fda4822e7dbbf5e00bf8db7bd0": "915dffd25334aabd840ab70c387097b4",
".git/objects/d0/45e735d7a8e9f2c14e8a3f035a09be8d34a9fa": "d9dd2884138d7dbc7c4f5f69cd20cda6",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/f9dc2a4d0e395f5dfac75b0177b4acbebbe17b": "5e6aa3c980f38f984e7d69dd87ace296",
".git/objects/d2/5cd1212f8a4c0bd37e0456761178c90545676d": "4af35fe6b69d7ea4e6265829c77a6586",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/65ecb4932780f60b2e8648554818d687ff201e": "09dd3169ed42d66dcd5c2116a7320e46",
".git/objects/d5/c9a40b5d6b20b5c8e23158a21caa678a3b86dd": "669487e52827cf7a8bb5976a30421beb",
".git/objects/d6/d27881e74adbff536b42ba8d003a47032bbd16": "fa3e7da3de052f2b58aa53065a89aa8b",
".git/objects/d7/acfa064316aa9044d0613eda5969fda12a3a6f": "29ee0813d451df7c123c21a659d8e916",
".git/objects/d8/e22ab03f622f087e1e78612a648feec6037e27": "e865475a2ab2f54f01f26c6438ab05cc",
".git/objects/d9/5521934945db23fcf417489a28ce079f790d35": "b896cb130ff15268fe64e7cd490caae4",
".git/objects/db/95d5e13dccff55e138d150722d42365bdee235": "452a951cce8260f49ad2fc9828fd9961",
".git/objects/df/3446188f86a967d21132e8c2b25a1ec56c25e7": "43f3c47de87c6303a336ec744aeb34ff",
".git/objects/e0/6cc090f31a035bca2487fde1544abe4d917dc4": "050998ad71ac124cb7c327303a8537a3",
".git/objects/e1/173751dec2aacb205cedd6f90cb822c24eb175": "b812d8badf267bd8eea4feeaf615a789",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/e3/dcc7d855352862e2541cf2a6eba4840fd99014": "80e48aa2991ec11204ceece5b342c912",
".git/objects/e3/e948521343c1edff4cd621c15e93b234293a20": "5bc1c967b3f64a955281b86b95152c33",
".git/objects/e4/e38169a24cd37715b8471ca8160b370104b324": "dfb3c76301cf726057091a80640f584c",
".git/objects/e5/75c40ef4a6c411af701758c07af99f672fd681": "f81906302f95ff49404664625640ca52",
".git/objects/e8/0ae656783f82b5b7c31207e6dfd046b022755b": "3681d359789804073e6ae11d10e36977",
".git/objects/e8/689c5dc195c6223f14bb7eec05dca4727cbd0d": "5dc89148c5e474f5b01e2db6876dacdd",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/ee/0330b0306814ff115b113a9fdae820fb27e910": "0aac598f5b3526f547bb70acd6adf38a",
".git/objects/ee/0761b360e7e7b8b951a1d047d2fa169b134e19": "95fc29294763aec1a1342c3d8bb20391",
".git/objects/ee/208ad376e442353a83604c6b735e905f9d2904": "d7792109f12bc606954b557f836a6c0d",
".git/objects/f0/e89edfa2387679782fefadcd96aaee1b12abc2": "704ea3b2b40c25515ac7b9f4e20c7e01",
".git/objects/f1/e22ea8fff871d0eab83423782cb361ef6e1fb8": "d80ee297acfb923601d47a84dff3bdf5",
".git/objects/f1/e37d8008506e66b07a333776906d5dd32bdbf3": "4cbed0a22f80d51d94a0ad5516c46d44",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/c6d0a63df0c3d6211753d59a399b907c28eff4": "34e708a454f4ff5dadd5ec7573a516d3",
".git/objects/fa/f384f6c1c4cdd23173696b4a5fd2f8901bef87": "b253a5d48919a3397e9ef7bbe33e4fa1",
".git/objects/fc/b082ce7f96603057dabc5127362a3d435570e2": "c2d1f2a70082b258ca85e9f7b4eea0bd",
".git/objects/fe/4fdda2ae780e86356b700253b072ddf74bce5b": "ce97a339e0ae157c0325a0e7f25910e7",
".git/refs/heads/main": "7c15078264fa21274dec67696d1a23b4",
".git/refs/remotes/origin/main": "7c15078264fa21274dec67696d1a23b4",
"assets/AssetManifest.bin": "acabf6051a90d7ed671745f78cb0e9c9",
"assets/AssetManifest.bin.json": "02f49dd3f944f241bfddffe3f59a9d7c",
"assets/AssetManifest.json": "b48372fe40e31e785e5886719d2e8307",
"assets/assets/dynamic_field.json": "01ae3867438795ca8608cccdc8eedd64",
"assets/assets/fonts/Akatab-Black.ttf": "1b84fb40869a7db271054baf402d77df",
"assets/assets/fonts/Akatab-Bold.ttf": "0b73465f09f35f06f45ef7ed0f45217c",
"assets/assets/fonts/Akatab-ExtraBold.ttf": "cc09e8478f1d502f89562adea728000e",
"assets/assets/fonts/Akatab-Medium.ttf": "13a42eea125842f28de2b6db99718ee0",
"assets/assets/fonts/Akatab-Regular.ttf": "be3b6163ebea6e45254ed19ebc65eb95",
"assets/assets/fonts/Akatab-SemiBold.ttf": "b1e500cc3fe8ef5afb7a942d38067829",
"assets/assets/icons/auth/ic_eye.svg": "91d00849f1a1ea41398c384cda4ae9d5",
"assets/assets/icons/auth/ic_eye_close.svg": "e8fd3a5c70fce214eb9a0728f0bd6cf3",
"assets/assets/icons/auth/ic_mail.svg": "66a0ccd8a47aeb3975dd642164f3626c",
"assets/assets/icons/auth/ic_ph.svg": "b847c0de45d95307556e4f957bc01863",
"assets/assets/icons/auth/ic_telegram.svg": "c5d6e68fbd8e2997e5e4ee3275fb5713",
"assets/assets/icons/category.png": "f5d9c87fde0a8762bc061a9795b65325",
"assets/assets/icons/delivery.png": "2ed16f13045301fae60e229edaa990f8",
"assets/assets/icons/en.png": "44f6e2752eaaf29883a10a81ba04f9fb",
"assets/assets/icons/ic_cancel.svg": "e9b9b421adb2adb98ea96207117e1795",
"assets/assets/icons/ic_error.svg": "d1d8e440de95a1e97751252370f17f9a",
"assets/assets/icons/ic_eye.svg": "91d00849f1a1ea41398c384cda4ae9d5",
"assets/assets/icons/ic_eye_close.svg": "e8fd3a5c70fce214eb9a0728f0bd6cf3",
"assets/assets/icons/ic_order.svg": "3995edf79fe7a39c4b034a2dc86aa724",
"assets/assets/icons/ic_success.svg": "73c3c09f87877a4540d30ee544c9bf02",
"assets/assets/icons/km.png": "af166c8186b8c4f949cfb3f10e35cbde",
"assets/assets/icons/order.png": "efbc9ecffc366f46501225fdd0477c1d",
"assets/assets/icons/order_from.png": "e4b9ab4cfec57dfff579a2a3c7807f0c",
"assets/assets/icons/order_info.png": "ad0f1131bb532def7b6eb1fd1a543155",
"assets/assets/icons/product.png": "4d072e207c4b59712ec1948a36fca7ec",
"assets/assets/icons/pymType.png": "7559dace32fc8e06def7f4a18e552323",
"assets/assets/icons/through.png": "828ad28022b91467d3da651252c14c51",
"assets/assets/icons/user.png": "7aa56bc3696af1e82230f7329e2316e1",
"assets/assets/images/cart.png": "6f5aeed5aac654a511e1cacd057538e9",
"assets/assets/images/clouds.png": "37ea893c5560bd31b2c705df3eb281f2",
"assets/assets/images/copy.png": "2257f328119a400a5b2d660a8142d48c",
"assets/assets/images/fb.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/images/log.svg": "cfd120cd57ecc7e309112bc55467b974",
"assets/assets/images/messenger.png": "84ff46e62aa52831dc80c1dfd8ed3031",
"assets/assets/images/mey.jpg": "bfc93119a3a87a5d7edc94aba264c547",
"assets/assets/images/moon.png": "cf4a8fe9fd5ae8417585e28243d3f660",
"assets/assets/images/no-content.png": "96a72285b9ff86039103e6910fb3ff2b",
"assets/assets/images/noimg.jpg": "3ea266799ac28909d4bbe79898e39485",
"assets/assets/images/pen.png": "99a8c857ae57104f982804d84e512379",
"assets/assets/images/pwd.png": "a59d86a5e7fab3a47c3fc34990732034",
"assets/assets/images/shop.png": "1ddcae767a7f263ee53757ad47ecd58e",
"assets/assets/images/stars.png": "6e029d65160db74b64fc5564587191d1",
"assets/assets/images/sun.png": "c166557bc4c9193b439e2e184d8327b2",
"assets/assets/images/telegram.png": "b37d6df3b36a74748a9bda890b3ba550",
"assets/assets/images/trash.png": "02c4053bff2835712d55b071d0221871",
"assets/assets/images/waiting.gif": "3ca3e51a9965491eae2ee31c09643897",
"assets/assets/splash_screen.json": "7d9db972ffe2b369ac15ebf13a4e4876",
"assets/assets/svg/burn.svg": "1092e8ea17523e4a64cf04d56d45dd89",
"assets/assets/svg/cart.svg": "ad7c0cfde92da1ea4cc30a1dcdb708c8",
"assets/assets/svg/distance.svg": "b4d02069d64d82363e7b511e777b4703",
"assets/assets/svg/exercise.svg": "a6289fddba5275f82b411a2d39c482b2",
"assets/assets/svg/filter.svg": "74007a8b614b895c50d2dd3beee060f2",
"assets/assets/svg/history.svg": "9feef16414bc28c927c0b05b8f4d4b8a",
"assets/assets/svg/home.svg": "cc9e59a115d9b73d8e20494ede08f7a8",
"assets/assets/svg/ic_delete.svg": "35c416d41526e2d583e35d1eaad0c8cd",
"assets/assets/svg/ic_filter.svg": "65a2f15437c20ef592329f9515091ff4",
"assets/assets/svg/ic_order.svg": "3995edf79fe7a39c4b034a2dc86aa724",
"assets/assets/svg/ic_pen.svg": "229f3ff9607daba6d614fe408110bf50",
"assets/assets/svg/ic_ph.svg": "b847c0de45d95307556e4f957bc01863",
"assets/assets/svg/ic_up.svg": "4bc798e1f4788f94e0dd583e56b13173",
"assets/assets/svg/lock.svg": "981c499da97b6a1153a80e9fd3f74ec5",
"assets/assets/svg/menubar.svg": "21fec5826e39d8781f17f6707d457040",
"assets/assets/svg/more.svg": "4d37592c7894253910b8dfa105dc4992",
"assets/assets/svg/profile.svg": "5b882f7482eea8a5af6a2af2b438b56a",
"assets/assets/svg/qr.svg": "48895686df1d71eb551c2ea8df8baedf",
"assets/assets/svg/search.svg": "af02da1f5e58690fd6ac4b1161a20a48",
"assets/assets/svg/setting.svg": "fccde2bb62dfc8654c2861f882c3de88",
"assets/assets/svg/signout.svg": "5e89bf15d17d54e4247c3cf4ee4e530b",
"assets/assets/svg/sleep.svg": "b4bf451ff1ba1a96c7c3ce9bd9677752",
"assets/assets/svg/steps.svg": "0a620e25b583f94a561c1cc51a6674e3",
"assets/FontManifest.json": "d162193ba30c0a4b573ad5d8b25a1696",
"assets/fonts/MaterialIcons-Regular.otf": "423bbe7a8f76e30191d4d17e5a83a126",
"assets/NOTICES": "2f875e4a64e040a78718abdc479a86b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1c8c195f437e8e417f70246602372b2e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "6c48dae020a65e5947756b8a4757fb03",
"favicon.png": "96c830f3f6df0beaac580552e6f74cc1",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "bd6acc86127cdbb7b4fc633f06c9132d",
"icons/Icon-192.png": "831bf344a0a142e9061275a355afa911",
"icons/Icon-512.png": "8c4b054feb416236449235a01f370b7b",
"icons/Icon-maskable-192.png": "831bf344a0a142e9061275a355afa911",
"icons/Icon-maskable-512.png": "8c4b054feb416236449235a01f370b7b",
"index.html": "7f1de8fe05da83a6993c4b01fd67f256",
"/": "7f1de8fe05da83a6993c4b01fd67f256",
"main.dart.js": "47e0723bfe3cd2c54e91a2e9561aeeee",
"manifest.json": "be69db5ad45f6e74a12907ab99acf7d6",
"splash/img/dark-1x.gif": "23017c3c859eb7e442fc1a31e057b49d",
"splash/img/dark-2x.gif": "75f300c6a19411b646e24c4099b072b1",
"splash/img/dark-3x.gif": "09b1669fd05508eaf58ead12c3214058",
"splash/img/dark-4x.gif": "dc0d43860d6230cacd0bcc55c64fc0cf",
"splash/img/light-1x.gif": "23017c3c859eb7e442fc1a31e057b49d",
"splash/img/light-2x.gif": "75f300c6a19411b646e24c4099b072b1",
"splash/img/light-3x.gif": "09b1669fd05508eaf58ead12c3214058",
"splash/img/light-4x.gif": "dc0d43860d6230cacd0bcc55c64fc0cf",
"version.json": "cc39af40c297351e16debb3461f83805"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
