self.addEventListener('install', function (event) {
  console.log('[ServiceWorker] Installed');
});

self.addEventListener('activate', function (event) {
  console.log('[ServiceWorker] Activated');
});

self.addEventListener('fetch', function (event) {
  // Ini hanya mendengarkan semua fetch, tapi tidak melakukan cache
  console.log('[ServiceWorker] Fetching:', event.request.url);
});
