'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d271c105040f264806c93e8e4c3a0296",
".git/config": "684c6daf46494eca3946680c45c8fe99",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "381e3338b0b84af9a836244857d2f2f3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "967bb4d9c1ef58ab1ecbd7819ee98589",
".git/logs/refs/heads/main": "dead4ecc4e62e6d1bf4cad54df19f1cf",
".git/logs/refs/remotes/origin/main": "e5f4c3ce2c5d61d739370767903e4643",
".git/objects/07/8177b760cfdfbb48a0ed08bb0f73d038299b3e": "88973f8b969f768f0742debacabbc153",
".git/objects/09/59e69e1aace29fcc77443c361b417060e093b4": "cbec7b218d51689d51e5264dbd934854",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/d2fa186e3d196f1c26205192b5f00d71996ec4": "160efac7d1b510a0bb18c7a4b84e4972",
".git/objects/1c/1c9225ac0cee9c7f666d745aa10e329bba93c3": "18b30ec807766f3b73488ef8549a0370",
".git/objects/1e/c80049cdbbbef7b13448530cd903d0df27a5ce": "e379a6ba4383259bd182561bdc47341a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/4d21c5b12b0c43f1d5120c1947d0779330c2eb": "a186132f0f75820efc090b760351b4b6",
".git/objects/22/d29c41ff74112d42b505b0a3e71de667dca796": "692e43421dfed893394e497e17d5fcb9",
".git/objects/27/4fe245e8cbd92215e57b515f290a11aa8fb5a5": "accb410fc7251e516a198774d90fef21",
".git/objects/32/6ea1b6132367d845b5db4ffb764c26e014280f": "6fd7cb800d628c3a8981d40c7305a88e",
".git/objects/3c/aeb9472603fc3fc05c3a80176aa2f6144e3481": "3ec632842c7f6b610b4d8e1adc908e0e",
".git/objects/3d/b1834bc2681cb0a3260824a89d2e0a8f306d3a": "b67a621afc186ae637329473727f63fa",
".git/objects/41/62ecb97931ce78010b56848f486e65b90f69e9": "4b461f8d71fb30082606b2e9a25f774b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/c05cd108eaba7cd2e1a254270d0915071f52de": "b9ee6a1604d4b3a9becec8093b5c80fd",
".git/objects/50/17f216cb1d5542a9a574a27a6a9dbd2b32ef84": "a47e36aeb24d192f9647103acbdf46ba",
".git/objects/50/68c7b047288be0665b96b17f60b43fe88aba6a": "e45886a56340bb6f1b831ec4f0413110",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/61/c4357ab316d0cf7ca924fcbef0811792eedf88": "e15aa86a0c2645924190404487576190",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/69/d413f8e3116d10f9bbeb527fb8c37cc7b2b918": "26844e56bde5e03be09eb91a28b362b8",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/74/67c03e80fea8c9d9304f2ca266f2a77c8267cd": "e2039f9d266c91da94b8c4a9ec8cc1e8",
".git/objects/74/f377329dcd862b5038adfb945731dbd4a1e1fc": "ff89cc4204b6196adabab93d0d2edf98",
".git/objects/7e/b0063f584b07860689b3e5ba111bcfb647eb6c": "442325aa3f56a805bc095d40a9d49406",
".git/objects/7f/506e21b5c75140b97c870af4c4d2c208966689": "5af3be6edf7f81684e99b56b5220d0ec",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/87/a5f3f6c0b33898ba8bad484a88441a2396903b": "9958318646bfce1a6222f7c21c8f6212",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/b2fa8befb756231db53d8aab6efe170d96cab2": "0fe530b4f1eba5f11f5c1d3e118c3599",
".git/objects/9c/b0a8b5c3d84fa7421302af41b63e8635e5267c": "e1ceb1d824d9fdba57c1d88a803567ce",
".git/objects/ac/f75bb0e9d6326a6909f2a23db781c1547ec33b": "8a9aae3be232fdb889751b9c26ed069b",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/395d8ebf2a855502bf6dae9e2871ac9090c12d": "8e74c4b17b7101b26f027a8def1935ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/50b8858962b27a6a200351e98154052d5df32d": "40a6015f890ac04de4ea2e3fdec3e2ea",
".git/objects/d5/98f48a861e1b99df95667ed63f6a67ef1602c4": "12ee4cddab17e8c0692bc4236de937cf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e4/910d78294e033f9bdd2297ce234bdf70c5933c": "db3b5abe5c3eb8d30bc434439e433dcf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/774fffc4c87ddac80199828aefc3398f6094d0": "391bb189a75b1f8760f3799e76a42af1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/710a6d6f503f3ef38964302e0dfa2a272460a2": "fe6a68250c7738997b0daf66915a9753",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/refs/heads/main": "10ce683a5f748d85fe4af31439545afb",
".git/refs/remotes/origin/main": "10ce683a5f748d85fe4af31439545afb",
"assets/AssetManifest.bin": "034252480834d598e0e5f8f9bfee25b5",
"assets/AssetManifest.bin.json": "2b3033f0388669b69f58bfcd65843a4f",
"assets/AssetManifest.json": "9ba8e1f7efea91b41a1fce2a73ffdcd6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d58aa8986b3b85369ba7219d59dd594c",
"assets/lib/assets/gif/crabGIF.gif": "669e40aad069097ec59203079e98affe",
"assets/lib/assets/images/brown.png": "5acb0328b91082e8b9d99fffb8ba50c5",
"assets/lib/assets/images/crabLogo.png": "6ad495f1db77d3609c2f5811654ef53d",
"assets/lib/assets/images/crabs/cardisomaCarnifex.jpg": "a9aa81298bcfe496c6eb28a4fba18602",
"assets/lib/assets/images/crabs/metopograpsusSp.jpeg": "531e6942fa6a710a4a166c480d723ddc",
"assets/lib/assets/images/crabs/portunosPelagicus.jpg": "40b877dc17ca48a90495857495bc1536",
"assets/lib/assets/images/crabs/scyllaSerrata.jpg": "22f3176925e890660c213b5de666f91f",
"assets/lib/assets/images/crabs/venitusLatreillei.jpeg": "2aa69990118a214c00352d7694bdca1d",
"assets/lib/assets/images/darkgray.png": "e86dcae8b3854eb316b163762bcc46f1",
"assets/lib/assets/images/green.png": "f6b4745dea6e658bd38e1301fc6eff30",
"assets/lib/assets/images/info.png": "66678833592d39e36174eaf441abda48",
"assets/lib/assets/images/loginbackground.png": "bf68fcc41b73bdc9d609af38351b5c48",
"assets/lib/assets/images/orange.png": "9d46673227d1a93ad2bbf70bf406d32e",
"assets/lib/assets/images/purple.png": "db9b9f9b54ba348b263864c01e734223",
"assets/lib/assets/images/yellow.png": "e6ec4612069e1b478c68ad551fa55905",
"assets/NOTICES": "66d84a9a1972144cfae821794bd564f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
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
"favicon.ico": "d96e499b88475af6a3fe5d3a5efd8a43",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "169fa338de638bfe6f44cbc5b20faec7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "27bd49d6917f9ccef9f652ad6aa876e7",
"/": "27bd49d6917f9ccef9f652ad6aa876e7",
"main.dart.js": "f6eea9bd5dcd52712b3cff327010a85d",
"manifest.json": "564b8035cad875004831e4fabdb83e58",
"version.json": "b0146393fad3514fbcd6b92213fa77b4"};
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
