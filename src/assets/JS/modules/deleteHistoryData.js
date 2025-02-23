import { deleteDoc, doc } from 'firebase/firestore';

const deleteReport = async (db, userId) => {
  try {
    await deleteDoc(doc(db, "reports", userId));
    console.log(`User ${userId} deleted successfully!`);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};

export default deleteReport