var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/ion-dex-progressive/index.html',
    '/ion-dex-progressive/build/pages/page1/page1.html',
    '/ion-dex-progressive/build/pages/page2/page2.html',
    '/ion-dex-progressive/build/js/app.bundle.js'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});