importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.precaching.precacheAndRoute([]);

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