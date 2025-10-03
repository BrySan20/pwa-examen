const CACHE_NAME = "mi-universidad";
const APP_SHELL = [
  "/", 
  "/index.html",
  "/styles.css",
  "/app.js",
  "/manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener("activate", e => {
  console.log("Service Worker activo");
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
