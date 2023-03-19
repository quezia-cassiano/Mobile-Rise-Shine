var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/fontawesome-all.min.css',

        './assets/css/main.css',

        './assets/js/breakpoint.min.js',

        './assets/js/browser.min.js',

        './assets/js/jquery.dropotron.min.js',

        './assets/js/jquery.min.js',

        './assets/js/main.js',

        './assets/js/util.js',

        './assets/img/29.png',
        './assets/img/40.png',
        './assets/img/57.png',
        './assets/img/60.png',
        './assets/img/80.png',
        './assets/img/58.png',
        './assets/img/87.png',
        './assets/img/114.png',
        './assets/img/120.png',
        './assets/img/180.png',
        './assets/img/1024.png'
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});