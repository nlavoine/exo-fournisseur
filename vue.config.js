// Inside vue.config.js
module.exports = {

    pwa: {
        name: 'exo-fournisseur',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: '/dist/service-worker.js',
            globPatterns: [
                "**/*.{css,ico,png,svg,html,js,json,txt}"
            ],
            //manifestPath: '/public/manifest.json'
        }
    }
}


