import { db } from './config/firebaseconfig.js';
import fetchReports from './services/fetchHistoryData.js'
import addReport from './services/submitHistoryData.js'
import './handler/eventHandler.js'
import updateReport from './services/updateHistoryData.js';
import initForm from './utils/initForm.js';


const $history = document.getElementById('js-history');
if ($history) {
  fetchReports(db, $history);
}

const $form = document.getElementById('js-form');
if ($form) {
  $form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (document.querySelector(".btn").textContent === 'Submit') {
      addReport(db, event)
      $form.reset();
    } else {
      updateReport(db, event);
    }
  });
}

initForm();









