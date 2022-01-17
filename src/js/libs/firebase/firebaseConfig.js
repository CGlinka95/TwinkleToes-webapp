// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAFwXvNPsAPlABDfVxDYqTcgW5HH21bt8",
  authDomain: "shoeshop-storefront-5737.firebaseapp.com",
  databaseURL: "https://shoeshop-storefront-5737-default-rtdb.firebaseio.com",
  projectId: "shoeshop-storefront-5737",
  storageBucket: "shoeshop-storefront-5737.appspot.com",
  messagingSenderId: "328927585423",
  appId: "1:328927585423:web:3172f26587e54c9365fcfa",
  measurementId: "G-8VXC2PMQVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app}