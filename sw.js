const staticAssets = [
  './',
  './app.js',
  './gray.png',
  './pink.png'
];

self.addEventListener('install', async () => {
  const cache = await caches.open('new-static');

  cache.addAll(staticAssets);
});

self.addEventListener('fetch', e => {
  const req = e.request;

  e.respondWith(cacheFirst(req));
});

const cacheFirst = async req => {
  const cachedResponse = await caches.match(req);

  return cachedResponse || fetch(req);
};
