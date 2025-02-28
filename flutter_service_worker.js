'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5123da0fd82ae79d20cb7ff37d4db3ef",
"assets/AssetManifest.bin.json": "6c2be056602d82b9782792ea1549ae88",
"assets/AssetManifest.json": "e303f88e661c812eab47352862f1b466",
"assets/FontManifest.json": "70e45008542dd1fab4e210275f757783",
"assets/fonts/MaterialIcons-Regular.otf": "b0f60e7ba9d7fa81d428f83125dbc9b4",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/lib/assets/gif/crabGIF.gif": "669e40aad069097ec59203079e98affe",
"assets/lib/assets/images/blue.png": "7e1cad945bf9fa2f4830762ef8b96ca9",
"assets/lib/assets/images/brown.png": "5acb0328b91082e8b9d99fffb8ba50c5",
"assets/lib/assets/images/crabLogo.png": "6ad495f1db77d3609c2f5811654ef53d",
"assets/lib/assets/images/crabs/cardisomaCarnifex.jpg": "a9aa81298bcfe496c6eb28a4fba18602",
"assets/lib/assets/images/crabs/metopograpsusSp.jpeg": "531e6942fa6a710a4a166c480d723ddc",
"assets/lib/assets/images/crabs/portunosPelagicus.jpg": "40b877dc17ca48a90495857495bc1536",
"assets/lib/assets/images/crabs/scyllaSerrata.jpg": "22f3176925e890660c213b5de666f91f",
"assets/lib/assets/images/crabs/unclassified.jpg": "5b3abf668d1feae5eea9b35b9e023ad6",
"assets/lib/assets/images/crabs/venitusLatreillei.jpeg": "2aa69990118a214c00352d7694bdca1d",
"assets/lib/assets/images/green.png": "f6b4745dea6e658bd38e1301fc6eff30",
"assets/lib/assets/images/headerfooter.png": "fc3ff2a9822d1388b03001bf42d1257c",
"assets/lib/assets/images/info.png": "66678833592d39e36174eaf441abda48",
"assets/lib/assets/images/loginbackground.png": "bf68fcc41b73bdc9d609af38351b5c48",
"assets/lib/assets/images/orange.png": "9d46673227d1a93ad2bbf70bf406d32e",
"assets/lib/assets/images/purple.png": "db9b9f9b54ba348b263864c01e734223",
"assets/lib/assets/images/unclassified.jpg": "5b3abf668d1feae5eea9b35b9e023ad6",
"assets/lib/assets/images/yellow.png": "e6ec4612069e1b478c68ad551fa55905",
"assets/lib/assets/svg/empty-data.svg": "81e9c845fbd2ae2dd18d92146c1fb12e",
"assets/NOTICES": "fe6708f185e9b5627a9b03b71c5211e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.ico": "d96e499b88475af6a3fe5d3a5efd8a43",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8ea991b9b006da7ace7b6462d726f982",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "50a34a1d9b0715914fa30b15e445c6e4",
"/": "50a34a1d9b0715914fa30b15e445c6e4",
"main.dart.js": "a35e470ee8e8b7543a0d668d8d61a4e3",
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
