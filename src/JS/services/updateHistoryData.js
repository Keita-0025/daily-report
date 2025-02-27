import { doc, updateDoc } from "firebase/firestore";
import getFormData from "../utils/formHelpers";
import getQueryParam from "../utils/URLSearchParam";


const updateReport = async(db,event) => {
    const id = getQueryParam('id');
    if(!id){
        alert("更新するデータのIDが見つかりません。");
        return;
    }
    const formData = getFormData(event);

    try {
        const reportRef = doc(db, "reports", id);

        await updateDoc(reportRef, formData);

        alert("データの更新が完了しました。");
        window.location.href = "history.html";
      } catch (error) {
        console.error("データの更新に失敗しました:", error);
        alert("データの更新に失敗しました。");
      }
}

export default updateReport;