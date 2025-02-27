import { collection, addDoc, Timestamp } from 'firebase/firestore';
import validateFormData from './validates';
import getFormData from '../utils/formHelpers';



const prepareFormData = (event) => {
  const { name, work, comment } = getFormData(event)
  const errors = validateFormData({ name, work, comment });

  if (errors) {
    return { errors }
  }
  return { name, work, comment, date: Timestamp.fromDate(new Date()), errors: null };
};


const addReport = async (db, event) => {
  try {
    const { name, work, comment, date, errors } = prepareFormData(event);
    if (errors) {
      alert(errors.join('\n'));
      return
    }

    const docRef = await addDoc(collection(db, "reports"), {
      date,
      name,
      work,
      comment
    });
    console.log(date, name, work, comment);
    console.log("Document written with ID: ", docRef.id);
    window.location.href = "history.html";
  } catch (error) {
    alert('データの追加に失敗しました。もう一度お試しください。')
    console.error("Error adding document: ", error);
  }
}

export default addReport;