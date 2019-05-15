//const workbox = require('workbox');

module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{css,ico,png,svg,html,js,json,txt}"
  ],
  "swDest": "dist/sw.js",
  "swSrc": "dist/sw.js"
};

/*workbox.routing.registerRoute(
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
)*/