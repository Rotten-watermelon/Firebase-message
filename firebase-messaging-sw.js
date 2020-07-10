



importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

 firebase.initializeApp({
    apiKey: "AIzaSyC9QPvOHTJQQ2Dg4lqOH6tpm2dVGFwS8U0",
    authDomain: "push-notifier-9971c.firebaseapp.com",
    databaseURL: "https://push-notifier-9971c.firebaseio.com",
    projectId: "push-notifier-9971c",
    storageBucket: "push-notifier-9971c.appspot.com",
    messagingSenderId: "235658779446",
    appId: "1:235658779446:web:95addf4f38459273f4f197",
    measurementId: "G-SDTDX2MBZ5"
 });

 const messaging = firebase.messaging();
 
messaging.setBackgroundMessageHandler(function(payload) {
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