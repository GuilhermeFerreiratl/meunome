const CACHE = "meupg-v1";
const URLS = [
  "/meunome/",
  "/meunome/index.html",
  "/meunome/style.css",
  "/meunome/script.js",
  "/meunome/manifest.json",
  "/meunome/logo.png",
  "/meunome/icon-192.png",
  "/meunome/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(URLS)));
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
