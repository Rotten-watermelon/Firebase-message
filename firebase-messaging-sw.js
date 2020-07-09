// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
//importScripts('/__/firebase/7.15.0/firebase-app.js');
//importScripts('/__/firebase/7.15.0/firebase-messaging.js');
//importScripts('/__/firebase/init.js');

//const messaging = firebase.messaging();


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
