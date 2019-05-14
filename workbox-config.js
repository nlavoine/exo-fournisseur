module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{js,css,ico,png,svg,html,json,txt,md,vue}"
  ],
  "swDest": "./service-worker.js",
  "runtimeCaching": [{
    // Match any same-origin request that contains 'api'.
    urlPattern: 'https://api-suppliers.herokuapp.com/api/suppliers',
    // Apply a network-first strategy.
    handler: 'NetworkFirst',
    options: {
      // Fall back to the cache after 10 seconds.
      networkTimeoutSeconds: 10,
      // Use a custom cache name for this route.
      cacheName: 'my-api-cache',
      // Configure custom cache expiration.
      expiration: {
        maxEntries: 5,
        maxAgeSeconds: 60,
      },
      // Configure background sync.
      backgroundSync: {
        name: 'my-queue-name',
        options: {
          maxRetentionTime: 60 * 60,
        },
      },
      // Configure which responses are considered cacheable.
      cacheableResponse: {
        statuses: [0, 200],
        headers: {'x-test': 'true'},
      },
      // matchOptions and fetchOptions are used to configure the handler.
      fetchOptions: {
        mode: 'no-cors',
      },
      matchOptions: {
        ignoreSearch: true,
      },
    },
  }]
};

