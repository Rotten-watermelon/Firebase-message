window.addEventListener('load', e => {
   // new PWAConfApp();
    registerSW(); 
  });
  

async function registerSW() { 
   // if ('serviceWorker' in navigator) { 
      try {
        await navigator.serviceWorker.register('/firebase-messaging-sw.js'); 
      } catch (e) {
        alert('ServiceWorker registration failed.'); 
      }
   
  }