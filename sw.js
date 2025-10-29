// tiny service worker for offline shell
const CACHE = 'lash-v1';
const ASSETS = ['/', '/index.html','/book.html','/appointments.html','/preferences.html','/manifest.json'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });
