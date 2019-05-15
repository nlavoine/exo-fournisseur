importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.precaching.precacheAndRoute([]);
    workbox.routing.registerRoute(
        'https://api-suppliers.herokuapp.com/api/suppliers',
        new workbox.strategies.NetworkFirst(),
    );

} else {
    console.log(`Boo! Workbox didn't load 😬`);
}