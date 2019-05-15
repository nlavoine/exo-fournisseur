module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{css,ico,png,jpg,gif,svg,html,js,json,txt}"
  ],
  "swDest": "dist/service-worker.js",
  "swSrc": "src/service-worker.js",
};

/*const workbox = require('workbox');
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
)*/