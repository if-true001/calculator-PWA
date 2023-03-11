const staticCache = "static v:00002";
const assets = [
    "./app/app.html",
    "./app/app.css",
    "./app/app.js",
    "./app/icons/calc64.png",
    "./app/icons/calc144.png",
    "./app/icons/calc512.png",
    "./app/icons/calc-maskable950.png",
    "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
];

//installing service worker
self.addEventListener("install", event => {
    //caching assets
    event.waitUntil(
        caches.open("staticCache").then(cache => {
            return cache.addAll(assets);
        })
    )
})

self.addEventListener('activate', event => {
    event.waitUntil(
        //updating cache
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(staticCache => {
                })
                    .map(staticCache => {
                        return caches.delete(keys);
                    })
            );
        }),
    );
})

//fetch assets
self.addEventListener("fetch", event => {
    //response to requests from cache if available else fetch from server
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
})