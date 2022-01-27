const APP_PREFIX = 'PatChenPortfolio_';     
const VERSION = 'v01';
const CACHE_NAME = APP_PREFIX + VERSION;
const FILES_TO_CACHE = [
  "./index.html",
  ".assets/css/style.css",
  ".assets/images/icons/bootstrap-5-1.svg",
  ".assets/images/icons/css-3.svg",
  ".assets/images/icons/git-bash.svg",
  ".assets/images/icons/github-icon-1.svg",
  ".assets/images/icons/handlebars-1.svg",
  ".assets/images/icons/heroku-4.svg",
  ".assets/images/icons/html-1.svg",
  ".assets/images/icons/javascript-1.svg",
  ".assets/images/icons/jest-2.svg",
  ".assets/images/icons/mongodb-icon-1.svg",
  ".assets/images/icons/mysql-6.svg",
  ".assets/images/icons/nodejs-1.svg",
  ".assets/images/icons/npm.svg",
  ".assets/images/icons/react-2.svg",
  ".assets/images/profile/profile-pic-2.webp",
  ".assets/images/screenshots/open_fridge_screenshot.webp",
  ".assets/images/screenshots/run-buddy-screenshot.webp",
  ".assets/images/screenshots/trackend-screenshot.webp",
];

// Respond with cached resources
self.addEventListener('fetch', function (e) {
  console.log('fetch request : ' + e.request.url)
  e.respondWith(
    caches.match(e.request).then(function (request) {
      // if (request) { // if cache is available, respond with cache
      //   console.log('responding with cache : ' + e.request.url)
      //   return request
      // } else {       // if there are no cache, try fetching request
      //   console.log('file is not cached, fetching : ' + e.request.url)
      //   return fetch(e.request)
      // }

      // You can omit if/else for console.log & put one line below like this too.
      return request || fetch(e.request)
    })
  )
})

// Cache resources
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(FILES_TO_CACHE)
    })
  )
})

// Delete outdated caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      // `keyList` contains all cache names under your username.github.io
      // filter out ones that has this app prefix to create keeplist
      let cacheKeeplist = keyList.filter(function(key) {
        return key.indexOf(APP_PREFIX);
      });
      // add current cache name to keeplist
      cacheKeeplist.push(CACHE_NAME);

      return Promise.all(
        keyList.map(function(key, i) {
          if (cacheKeeplist.indexOf(key) === -1) {
            console.log('deleting cache : ' + keyList[i]);
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
});