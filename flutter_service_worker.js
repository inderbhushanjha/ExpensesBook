'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b8bd723e313b4e99419c7a9e7f1375e8",
".git/config": "404dde9132498cfc1eb8512edb9d8fea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "bc2e6279fd4d27e8ad034d6b63763f8b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fca1cf5407d718ed69a741c024d4d4a2",
".git/logs/refs/heads/main": "fca1cf5407d718ed69a741c024d4d4a2",
".git/logs/refs/remotes/origin/main": "6db237a8e70dc75a4c8a2eaaf5f8a0fb",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/3ecab3de1c2fd3432c36f53fd026dcc5cdc5da": "6e59f7e103d6b7823c5d0baf3f54832a",
".git/objects/0b/5b68d1c29aca3403f47c656087d5471f6e94da": "8cf430e8ceb9892a82cccc1f80a0fc32",
".git/objects/0c/67c3599d2b1501b0a915f69269ca919d4ad40a": "47636ae246f0849487cc293c669863a5",
".git/objects/2f/13f7d83c19b4646f951b9872b860e894924d7d": "d568832d5a9d5be74fe7387e6d4b8aba",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/40/7f34a96091df4921790d4c878a8f8b6544ca94": "2f57b846a3a52a09e55da40e7a057453",
".git/objects/41/c4b5799b5315579e9bee97f4102148b9b1ac67": "8b8217400974935072877e0a7415faa8",
".git/objects/46/1d3a63985c1ddb8eb589a120d717983eb67856": "ed816911a0d9c58867d4d2e86ec09743",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/a496ce769d81d8b84bd4c2cdd4a9bab4d8ed96": "305ae8931de933f762dbe8a825ade743",
".git/objects/54/ee60438aeaca712ed2cc8614278ef996386648": "680c22ea7aad6d63d023f06cb514cc6d",
".git/objects/66/c31b0a9582fbf2eb0865bff91302d53072c498": "c2c018e36416db8c536eb335cc67cdf9",
".git/objects/74/ad42820279480fe57687ea6bc3c654569dbdee": "92074f65dbb791b8ffcbf925fd6a7f81",
".git/objects/75/deab708a18e89e4fcbd99f020cdae045f8f884": "bfd2aeabcaa3e72d9e599e5ab2389544",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/d8a6aa5eb5970043dc5c3324bacd0abc16cf4a": "28cc7945a34a469ac9ce4a3bd85d5376",
".git/objects/80/0b447bd2406e0b76f885d5dbf697c2c7e5b0c0": "4d1e87e2d14d06b549f6a9549516a410",
".git/objects/80/56b37fad6eee7309ecfa4ebe2751521e47b95d": "f6390015fe39b45aca341dd713c688de",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/201a3ec8b804eba9fa7d3ba33c8c9e77d23f7c": "ba11df5beb97b2f4e7b6f98c8ceca1c7",
".git/objects/9d/b7d3a6d8984492db929572db79b06a0e049257": "1ea7196537c299e54002dc2ba6e8fb1c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/20d9b31c6f7b2d30c8620679c03f12cca39548": "683fd2f4b129313a7a8b4db108f8a982",
".git/objects/ad/07618a50cc215ce7a6a2dc296286028ed73135": "f1ee71a4b56958c5f39077d6eb05e120",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/cef694656357aecacd9a5959268c7d449560b9": "8a0c07963677885057abe8d6821c0f19",
".git/objects/ce/afb4e8d33660fc518f52266f14f5caec83f621": "91eca8f1dc82bfd5c3cbc0348a305483",
".git/objects/d1/1c61214cd11b7a6fb5f26615f4def87d603a63": "31dd286d2623f5d5200dea8b8f7745e6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/46894e6c147b238a4f4958ab20cab71164c84c": "303f58e19ccdd9c9cf834e8fa7d5c3df",
".git/refs/heads/main": "bdc50630d11e0020d697d05d14098682",
".git/refs/remotes/origin/main": "bdc50630d11e0020d697d05d14098682",
"assets/AssetManifest.json": "caa1468a8ccd9d16b652c8fb95115afb",
"assets/assets/fonts/OpenSans-Bold.ttf": "d0d2737060b43dd07326a00e97bf4ee6",
"assets/assets/fonts/OpenSans-Regular.ttf": "ebe0fbcd13a1e4b1cea24fa992f28fbb",
"assets/assets/fonts/Quicksand-Light.ttf": "10ce81d2a0fc09f271edf43e66d80301",
"assets/assets/fonts/Quicksand-Medium.ttf": "db0ad2fc713ab72ea682687be4bd1021",
"assets/assets/fonts/Quicksand-Regular.ttf": "6cbafd2cb6e973c96ade779edc39c62a",
"assets/assets/images/waiting.png": "1e2257e67a9ce0d764fefd5bf669755a",
"assets/FontManifest.json": "f634c509170e481f45fb60d8bbccb1bc",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "af1fc98592f544cae0c5df042a1af6e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3118e48fa4d666cb7b5f848ec9a5b37d",
"/": "3118e48fa4d666cb7b5f848ec9a5b37d",
"main.dart.js": "1b2d17f4b830e7efa0584c5775881440",
"manifest.json": "8d2363b87cbb084842bbc250aa7c7b3c",
"version.json": "e6f21ab8ec7809f948f59af2f82e0bb2"
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
