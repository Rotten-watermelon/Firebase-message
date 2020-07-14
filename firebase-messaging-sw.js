



importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBH7HOnP4CKSyBLtScSiDvZ3QYt8bw9Ns8",
  authDomain: "push-notifier-73b71.firebaseapp.com",
  databaseURL: "https://push-notifier-73b71.firebaseio.com",
  projectId: "push-notifier-73b71",
  storageBucket: "push-notifier-73b71.appspot.com",
  messagingSenderId: "56280728680",
  appId: "1:56280728680:web:dab72a8a65f1887ca4e7dd"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener('install', async event => {
  console.log('install event')
});

self.addEventListener('fetch', async event => {
  console.log('fetch event')
});


const staticSave = "TosHopBay";
const assets = [
  "index.html",
  "main.css",
  "script1.js",
  "images/icons/icon-72x72.png",
  "images/icons/icon-96x96.png",
  "images/icons/icon-128x128.png",
  "images/icons/144.png",
  "images/icons/icon-152x152.png",
  "images/icons/icon-192x192.png",
  "images/icons/icon-384x384.png",
  "images/icons/icon-512x512.png",
  "firebase-messaging.js"
]

self.addEventListener('install', async event => {
  const cache = await caches.open(staticSave);
  await cache.addAll(assets);
});