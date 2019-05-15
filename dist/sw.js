importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.precaching.precacheAndRoute([
  {
    "url": "css/app.10e65c8f.css",
    "revision": "905f9c0e7b02ceae61d04435beec3fca"
  },
  {
    "url": "css/chunk-vendors.6e05e35b.css",
    "revision": "66fbc18b7f54fb970ce3163468e52dbb"
  },
  {
    "url": "img/icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "img/icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "img/icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "img/icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "img/icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "img/icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "img/icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "img/icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "img/icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "img/icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "img/icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "img/icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "img/icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "img/logo.82b9c7a5.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "js/app.9316ac3c.js",
    "revision": "55eb5fe599a58055453509d942b3ec48"
  },
  {
    "url": "js/chunk-vendors.76926d53.js",
    "revision": "edc0f747f7241078731c96e7f69d6435"
  },
  {
    "url": "precache-manifest.8b751ce2c3da3f1a403a636251b5e923.js",
    "revision": "8b751ce2c3da3f1a403a636251b5e923"
  },
  {
    "url": "service-worker.js",
    "revision": "2d85e2b34349ab8f2336a6c656b5933b"
  }
]);

    workbox.routing.registerRoute(
        new RegExp('^https://api-suppliers.herokuapp.com/api/suppliers'),
        new workbox.strategies.CacheFirst({
            cacheName: 'API-cache',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200],
                })
            ]
        })
    );

} else {
    console.log(`Boo! Workbox didn't load 😬`);
}