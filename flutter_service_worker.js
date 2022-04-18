'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "87f9dbff5f6991f319af386262df4722",
"index.html": "59e0050cce5d3b4e223262ca4ac4169b",
"/": "59e0050cce5d3b4e223262ca4ac4169b",
"favicon.png": "f34b06ffdaf6cc7496513391e7bfa506",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/AssetManifest.json": "a3ab34aaed61ed1ebdbb024be2a889cc",
"assets/FontManifest.json": "291d3ebbe747f26cbf3e2476dc202dad",
"assets/assets/fonts/SCDream-Regular.otf": "8be5836258dabb5c226e34e53a4c2c37",
"assets/assets/fonts/SCDream-Bold.otf": "3bd0c8cad0d8fa056ff66afb70c53b69",
"assets/assets/images/bowlogScreenshot2.png": "dccb9ca2e5d5039e90f3cc7ec0393377",
"assets/assets/images/lottoLifeScreenshot2.png": "3176f04f2ffda461089ded546c0ccfd4",
"assets/assets/images/3x/bowlogScreenshot2.png": "d848f0a61a306f29b2e8cc84d0b7d9b7",
"assets/assets/images/3x/lottoLifeScreenshot2.png": "1fc79a68c5fecd526bb15c5e2ec3066e",
"assets/assets/images/3x/blogIcon.png": "4836b10d5103d87192d74886e8925623",
"assets/assets/images/3x/lottoLifeLogo.png": "57b19ff1339b7c3c4c9737cab5c5131d",
"assets/assets/images/3x/colorGameScreenshot2.png": "811c5fc3abe49ea3b2684036e426d490",
"assets/assets/images/3x/colorGameLogo.png": "09e0da56792586e0fb81f5df6b51a35d",
"assets/assets/images/3x/bowlogScreenshot1.png": "908b5eb5c1c48f94ab74a54d3569d025",
"assets/assets/images/3x/lottoLifeScreenshot1.png": "296ec70604cff04402f677ae6e37a9fe",
"assets/assets/images/3x/dartIcon.png": "31b269ae4b7c1e5d16e9cc959c031980",
"assets/assets/images/3x/bowlogScreenshot3.png": "1b2bb2b55dc0c77ed8e140150d96ba79",
"assets/assets/images/3x/colorGameScreenshot3.png": "070012d6a28cd9ff2e5d2c1b805be3b9",
"assets/assets/images/3x/colorGameScreenshot1.png": "265c2626ea189791ae22daf46b561dfb",
"assets/assets/images/3x/lottoLifeScreenshot3.png": "09b25f13cbc2a01e280fbaf653e02342",
"assets/assets/images/3x/appleIcon.png": "6e2080db7f99766cb47f7c9b96b2bc29",
"assets/assets/images/3x/androidIcon.png": "761aecd39c3007ae2b6d3a3dafe95f8c",
"assets/assets/images/3x/bowlogLogo.png": "57ae3c692dfe4bbda4567cb4aa91e6e0",
"assets/assets/images/3x/profile.png": "8ba464ee2d24aa8a98062d6967c3270c",
"assets/assets/images/blogIcon.png": "506b724096cbe96da68dcd684a271530",
"assets/assets/images/lottoLifeLogo.png": "5d1a2d584ae5ebc5b425b8dac0f1cbbf",
"assets/assets/images/colorGameScreenshot2.png": "6f6a0a40ad43de2ccef4f8cfae165dda",
"assets/assets/images/colorGameLogo.png": "1f803e319175df77bfaf08db445cefe2",
"assets/assets/images/bowlogScreenshot1.png": "704334f8d727a80e8ac75601c6eb0e2b",
"assets/assets/images/lottoLifeScreenshot1.png": "7c6905cbcfd5037d58a8215a7fa85fac",
"assets/assets/images/dartIcon.png": "426f9d48855065d9df130efc8544f257",
"assets/assets/images/bowlogScreenshot3.png": "7cc95d2d2550ca10f857e3f27e759124",
"assets/assets/images/2x/bowlogScreenshot2.png": "529dc20486b05d54d79350e17b30453f",
"assets/assets/images/2x/lottoLifeScreenshot2.png": "c998b569914f4186089d9dcdd7e2b513",
"assets/assets/images/2x/blogIcon.png": "73c931a836204b09b8582e4b175cab9b",
"assets/assets/images/2x/lottoLifeLogo.png": "83a50cd3155f318d6bfe2755f2a6e994",
"assets/assets/images/2x/colorGameScreenshot2.png": "9264b3090280bf05990136bee685fbb7",
"assets/assets/images/2x/colorGameLogo.png": "1957977f8debb4aaaedd02297760f298",
"assets/assets/images/2x/bowlogScreenshot1.png": "a57f83f464e540f485db45fcc35c133e",
"assets/assets/images/2x/lottoLifeScreenshot1.png": "2697f9e7ca9c57a1d4f5d8031008a5b5",
"assets/assets/images/2x/dartIcon.png": "87ddd60f5f3408ac89eab52b0a727d70",
"assets/assets/images/2x/bowlogScreenshot3.png": "2bc60431da50caf1b0e062596adde4b7",
"assets/assets/images/2x/colorGameScreenshot3.png": "7ef0bea9bfa2024fb9214838cad563e5",
"assets/assets/images/2x/colorGameScreenshot1.png": "df7004b4a7c7d49e42022ac920a12ebd",
"assets/assets/images/2x/lottoLifeScreenshot3.png": "367519a82ccee7c0ae39fba8cf7a5839",
"assets/assets/images/2x/appleIcon.png": "ab88f95b907403b4bed31979cdb89b98",
"assets/assets/images/2x/androidIcon.png": "ab1eea8e9d0d4716544ae81130112a7a",
"assets/assets/images/2x/bowlogLogo.png": "8cfd5c4ddb34400501523a5020f04d59",
"assets/assets/images/2x/profile.png": "c4e07f1582f6333ed6c23983ce91295c",
"assets/assets/images/colorGameScreenshot3.png": "dd05abd99231f8633d3163b0414c5047",
"assets/assets/images/colorGameScreenshot1.png": "0eadf573d11c9648a6ccc4298c818439",
"assets/assets/images/lottoLifeScreenshot3.png": "2f33cf9b2a791db98b019b91f3da106c",
"assets/assets/images/appleIcon.png": "ad8052ab5e6c6c2b9255ae820bcee9e9",
"assets/assets/images/androidIcon.png": "84017a0aa461999a4c52d72459e8f3ef",
"assets/assets/images/bowlogLogo.png": "f2ed1b032c109105adde64c4e3caef22",
"assets/assets/images/profile.png": "1b40be42fbe88a654868c8b6486f2520",
"assets/assets/svgs/btnBackBlack.svg": "49782aed92abe044d9d9a590cda8b170",
"assets/assets/svgs/btnCancelBlack.svg": "770b6a59d55f5f8c9e1e29a9e97dcc39",
"assets/NOTICES": "76ffbf7bfdb0312b27d6eb9e5ef58afe",
"icons/Icon-192.png": "54b509974449fca6b675c05618ba9723",
"icons/Icon-512.png": "507598cb7f12d7a4c16e61c3eb9c52d7",
"manifest.json": "c71d2c6800d36af6d0fcfd10de738a72",
"version.json": "2b21362556beb5df79b179121b7f890a",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487"
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
