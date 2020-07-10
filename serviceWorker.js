self.addEventListener('install', async event => {
    console.log('install event')
  });

self.addEventListener('fetch', async event => {
    console.log('fetch event')
  });

const staticSave = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/main.css",
  "/script1.js",
  "images/icons/icon-72x72.png",
  "images/icons/icon-96x96.png",
  "images/icons/icon-128x128.png",
  "images/icons/icon-144x123.png",
  "images/icons/icon-152x152.png",
  "images/icons/icon-192x192.png",
  "images/icons/icon-384x384.png",
  "images/icons/icon-512x512.png"
]

self.addEventListener('install', async event => {
    const cache = await caches.open(staticSave); 
    await cache.addAll(assets); 
  });
  /*

self.addEventListener("install", async Event => {
    installEvent.waitUntil(
      caches.open(staticSave).then(cache => {
        cache.addAll(assets)
      })
    )
  })

  */