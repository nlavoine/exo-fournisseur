module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{css,js,jpg,png,svg}",
  ],
  "swDest": "dist/sw.js",
  "swSrc": "src/sw.js",
  "globIgnores": [
    "./workbox-config.js"
  ]
};