// Simple caching service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("lashtherapy-v1").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json"
      ]);
    })
  );
  console.log("Service Worker: Installed");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

