import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import fetchReports from './modules/fetchHistoryData.js'
import addReport from './modules/submitData.js'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const $history = document.getElementById('js-history');

if ($history) {
  fetchReports(db, $history);
}

const $form = document.getElementById('js-form');

if ($form) {
  $form.addEventListener('submit', (event) => {
    event.preventDefault();
    addReport(db,event)
    $form.reset();
  });
}


