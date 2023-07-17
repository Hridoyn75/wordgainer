self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('wordgainer-v1').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/script.js',
          '/icon.png',
          '/logo.png',
          '/background.png'
          // Add other static files that need to be cached
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  