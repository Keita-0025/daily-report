// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
console.log(app)
// const analytics = getAnalytics(app);

const $history = document.getElementById('js-history');

const db = getFirestore(app);
console.log(db)
// Get a list of reports from your database
const fetchReports = async () => {
  //Get Collection
  const reportSnapshot = await getDocs(collection(db, 'reports'));
  console.log(reportSnapshot)
  let tags = '';
  reportSnapshot.forEach(doc => {
    console.log('id=>', doc.id)
    tags += `<tr>
      <td>${doc.data().date}</td>
      <td>${doc.data().name}</td>
      <td>${doc.data().work}</td>
      <td>${doc.data().comment}</td>
      </tr>`
  });
  $history.innerHTML = tags;
}

if ($history) {
  fetchReports();
}



//Create new data

const getFormData = () => ({
  name: document.getElementById('name').value,
  date: new Date(),
  work: document.getElementById('work').value,
  comment: document.getElementById('comment').value,
});


const addReport = async () => {
  try {
    const { name, work, comment, date } = getFormData()
    const docRef = await addDoc(collection(db, "reports"), {
      date,
      name,
      work,
      comment
    });
    console.log(date,name,work,comment);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
} 


const $form = document.getElementById('js-form');

if($form){
  $form .addEventListener('click', (e) => {
    e.preventDefault();
    addReport()
    $form .reset();
  });
}


