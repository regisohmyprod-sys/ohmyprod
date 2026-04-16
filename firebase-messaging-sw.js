importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDykNi68rFEo2raplohOmif2Gx6L_EluoQ",
  authDomain: "oh-my-prod.firebaseapp.com",
  projectId: "oh-my-prod",
  storageBucket: "oh-my-prod.firebasestorage.app",
  messagingSenderId: "651166585451",
  appId: "1:651166585451:web:a7fc7d0c6034d15509972e"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Background message:', payload);
  const notificationTitle = payload.notification.title || 'OH MY PROD';
  const notificationOptions = {
    body: payload.notification.body || '',
    icon: '/assets/omp-icon-200.jpg',
    badge: '/assets/omp-icon-200.jpg'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
