// Inside vue.config.js
module.exports = {

    pwa: {
        name: 'exo-fournisseur',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            //swSrc: '/dist/service-worker.js',
            //manifestPath: '/public/manifest.json'
        }
    }
}
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

