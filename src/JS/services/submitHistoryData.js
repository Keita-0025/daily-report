import { collection, addDoc, Timestamp } from 'firebase/firestore';
import validateFormData from './validates';

const getFormData = (event) => {

  const formData = new FormData(event.currentTarget);

  const name = formData.get('name');
  const work = formData.get('work');
  const comment = formData.get('comment');

  return { name, work, comment };
};

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
  } catch (error) {
    alert('データの追加に失敗しました。もう一度お試しください。')
    console.error("Error adding document: ", error);
  }
}

export default addReport;