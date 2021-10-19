/* eslint-disable no-restricted-globals */
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("test").then(function (cache) {
      return cache.addAll(["/v2ex-dailyhot/"]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
