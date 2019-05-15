

module.exports = {
  "globDirectory": "public/",
  "globPatterns": [
    "**/*.{ico,png,svg,html,json,txt}"
  ],
  "swDest": "dist/sw.js",
  "swSrc": 'public/sw.js',
};

const workbox = require('workbox');

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
);