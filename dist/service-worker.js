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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/precache-manifest.b3d89a93c843f91f1c4226e912b8d782.js"
);

workbox.core.setCacheNameDetails({prefix: "exo-fournisseur"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

self.__precacheManifest = [].concat(self.__precacheManifest || []);
self.precaching.precacheAndRoute([
  {
    "url": "css/app.10e65c8f.css",
    "revision": "905f9c0e7b02ceae61d04435beec3fca"
  },
  {
    "url": "css/chunk-vendors.6e05e35b.css",
    "revision": "66fbc18b7f54fb970ce3163468e52dbb"
  },
  {
    "url": "favicon.ico",
    "revision": "1ba2ae710d927f13d483fd5d1e548c9b"
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
    "url": "index.html",
    "revision": "416d0fd9a900cb23eb46a75de3efd4b0"
  },
  {
    "url": "js/app.f6445d4c.js",
    "revision": "8b55c6e9b3bcd1a060bcf52af5bcf60d"
  },
  {
    "url": "js/chunk-vendors.59b55bd9.js",
    "revision": "2e4a3973877b272a82d7741bfce7e4fa"
  },
  {
    "url": "manifest.json",
    "revision": "96c189ed210af6c3c731ce2711ba85e5"
  },
  {
    "url": "precache-manifest.27a2a4064af6a470b88ecc5cea418af7.js",
    "revision": "27a2a4064af6a470b88ecc5cea418af7"
  },
  {
    "url": "robots.txt",
    "revision": "b6216d61c03e6ce0c9aea6ca7808f7ca"
  }
]);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


