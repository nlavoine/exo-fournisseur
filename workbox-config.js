
const workbox = require('workbox');

module.exports = {
  "globDirectory": "public/",
  "globPatterns": [
    "**/*.{ico,png,svg,html,json,txt}"
  ],
  "swDest": "public/sw.js"
};

workbox.routing.registerRoute(
    new RegExp('https://api-suppliers.herokuapp.com/api/suppliers'),
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