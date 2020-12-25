self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("test").then(function (cache) {
      return cache.addAll(["/v2ex-daily-hot-topic-web/"]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
