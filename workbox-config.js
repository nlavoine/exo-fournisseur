

module.exports = {
  "globDirectory": "public/",
  "globPatterns": [
    "**/*.{ico,png,svg,html,json,txt}"
  ],
  "swDest": "dist/sw.js",
  "swSrc": 'public/sw.js',
};

const workbox = require('workbox');

/*workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
    'https://api-suppliers.herokuapp.com/api/suppliers',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'api-cache',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          headers: {
            'X-Is-Cacheable': 'true',
          },
        })
      ]
    })
);*/
new workbox.GenerateSW({
  swDest: 'sw.js',
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: new RegExp('/'),
      handler: 'staleWhileRevalidate',
    },
    {
      urlPattern: new RegExp('https://api/'),
      handler: 'cacheFirst',
      options: {
        cacheName: 'api',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 72 * 60 * 60
        },
        cacheableResponse: { statuses: [0, 200] },
      }
    },
  ]
})