import {collection, addDoc} from 'firebase/firestore';

//Create new data
const getFormData = () => ({
    name: document.getElementById('name').value,
    date: new Date(),
    work: document.getElementById('work').value,
    comment: document.getElementById('comment').value,
  });
  
  
  const addReport = async (db) => {
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

  export default addReport;