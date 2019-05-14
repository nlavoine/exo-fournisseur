/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "babel.config.js",
    "revision": "547f815e2c510d12b863f6f494359966"
  },
  {
    "url": "dist/css/app.10e65c8f.css",
    "revision": "905f9c0e7b02ceae61d04435beec3fca"
  },
  {
    "url": "dist/css/chunk-vendors.3641674e.css",
    "revision": "bd10a690cdaf46a048cd00e16d26f0f7"
  },
  {
    "url": "dist/favicon.ico",
    "revision": "1ba2ae710d927f13d483fd5d1e548c9b"
  },
  {
    "url": "dist/img/icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "dist/img/icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "dist/img/icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "dist/img/icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "dist/img/icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "dist/img/icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "dist/img/icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "dist/img/icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "dist/img/icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "dist/img/icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "dist/img/icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "dist/img/icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "dist/img/icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "dist/img/logo.82b9c7a5.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "dist/index.html",
    "revision": "100ebc449fbd360f335cffd55293bb9d"
  },
  {
    "url": "dist/js/app.58bbf138.js",
    "revision": "a50cf5a10115340f0e1f727bca602e5f"
  },
  {
    "url": "dist/js/chunk-vendors.7331817b.js",
    "revision": "85963a8f4b80c5cc140b4f6bdf72057f"
  },
  {
    "url": "dist/manifest.json",
    "revision": "96c189ed210af6c3c731ce2711ba85e5"
  },
  {
    "url": "dist/precache-manifest.ec5c21e6f759cbf00413ec38af4b2cf3.js",
    "revision": "ec5c21e6f759cbf00413ec38af4b2cf3"
  },
  {
    "url": "dist/robots.txt",
    "revision": "b6216d61c03e6ce0c9aea6ca7808f7ca"
  },
  {
    "url": "package-lock.json",
    "revision": "60c9c3569aaa8056c7116a0b022d2e99"
  },
  {
    "url": "package.json",
    "revision": "7449d8f0dde6b4d7f8dae78d8f633288"
  },
  {
    "url": "public/favicon.ico",
    "revision": "1ba2ae710d927f13d483fd5d1e548c9b"
  },
  {
    "url": "public/img/icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "public/img/icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "public/img/icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "public/img/icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "public/img/icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "public/img/icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "public/img/icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "public/img/icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "public/img/icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "public/img/icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "public/img/icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "public/img/icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "public/img/icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "public/index.html",
    "revision": "414b419eaa6c33318496fb37931640ed"
  },
  {
    "url": "public/manifest.json",
    "revision": "96c189ed210af6c3c731ce2711ba85e5"
  },
  {
    "url": "public/robots.txt",
    "revision": "b6216d61c03e6ce0c9aea6ca7808f7ca"
  },
  {
    "url": "README.md",
    "revision": "24865050a6e328c6306a40bd453af05f"
  },
  {
    "url": "src/App.vue",
    "revision": "e42351c1aa3e69bdea285a0ed690d25e"
  },
  {
    "url": "src/assets/logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "src/components/AddSupplier.vue",
    "revision": "f77a24ef4a95698fa998d4a99379ff76"
  },
  {
    "url": "src/components/EditSupplier.vue",
    "revision": "34b9a51a3083c38727eab2585237ade0"
  },
  {
    "url": "src/components/HelloWorld.vue",
    "revision": "ac6786c0c02a4b82ff22799d521a13f9"
  },
  {
    "url": "src/components/Supplier.vue",
    "revision": "1e524b50d30bb01331913e21d389e537"
  },
  {
    "url": "src/components/SuppliersList.vue",
    "revision": "0156a5db2b5ac1a2c2bdf131415b8d90"
  },
  {
    "url": "src/components/SuppliersMap.vue",
    "revision": "0f50062af661b309f412bf6884f828ed"
  },
  {
    "url": "src/main.js",
    "revision": "8b313e00ba99c4fd46ce25bf58206e24"
  },
  {
    "url": "src/registerServiceWorker.js",
    "revision": "17692e48fd0c161001ca28d491e6fd4d"
  },
  {
    "url": "src/router/index.js",
    "revision": "a8ee291847dc0360bb7485e014091ab3"
  },
  {
    "url": "vue.config.js",
    "revision": "f873c398d8febaa481717be159ccef52"
  },
  {
    "url": "workbox-config.js",
    "revision": "e4bf64bb0f040127328e87d0db6e7417"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
