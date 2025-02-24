import { db } from './config/firebaseconfig.js';
import fetchReports from './services/fetchHistoryData.js'
import addReport from './services/submitHistoryData.js'
import './handler/deleteEventHandler.js'


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









