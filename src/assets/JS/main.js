import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import fetchReports from './modules/fetchHistoryData.js'
import addReport from './modules/submitData.js'
import deleteReport from './modules/deleteHistoryData'

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
    addReport(db, event)
    $form.reset();
  });
}

const $delBtn = document.querySelectorAll('.delBtn');
console.log($delBtn)
document.addEventListener('click', async (e) => {
  if (e.target.classList.contains('delBtn')) {
    const reportId = e.target.getAttribute('data-id');
    if (!reportId) {
      return
    }
    console.log(`削除対象ID, ${reportId}`);

    const isConfirmed = window.confirm('本当に削除してもよろしいですか？');
    if (!isConfirmed) {
      return;
    }

    await deleteReport(db, reportId);
    e.target.closest('tr').remove();

  }
});



