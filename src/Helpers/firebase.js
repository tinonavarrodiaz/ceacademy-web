// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBF8mgsh_xVVjUp8e_jMelxJAubELlfRq8',
  authDomain: 'ceacademy-9cbc9.firebaseapp.com',
  projectId: 'ceacademy-9cbc9',
  storageBucket: 'ceacademy-9cbc9.appspot.com',
  messagingSenderId: '249013732369',
  appId: '1:249013732369:web:04fc45c4b7e2d8b186ddb0',
  measurementId: 'G-MWVNG84S88',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
