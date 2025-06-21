// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC6Y4TVF5ooMaWqtk9kOb_jQ4Hkwt9dWWc',
  authDomain: 'highnsky-cee8e.firebaseapp.com',
  projectId: 'highnsky-cee8e',
  storageBucket: 'highnsky-cee8e.firebasestorage.app',
  messagingSenderId: '92651538104',
  appId: '1:92651538104:web:61261d3011d908765ed64d',
  measurementId: 'G-LN4ML1YJ4L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
