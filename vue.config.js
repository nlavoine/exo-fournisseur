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
            //swSrc: 'service-worker.js',
            //manifestPath: '/public/manifest.json'
        }
    }
}
