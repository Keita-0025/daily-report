import { db } from "../config/firebaseconfig.js";
import deleteReportWithRetry from "../services/deleteHistoryData.js";
import rowCtrl from "../utils/uiHelpers.js";



const deleteHandler = async (reportId, action) => {

    console.log(`削除対象ID, ${reportId}`);
    console.log('action->', action);
    console.log('reportId->', reportId);

    const isConfirmed = window.confirm('本当に削除してもよろしいですか？');
    if (!isConfirmed) {
        return;
    }

    const success = await deleteReportWithRetry(db, reportId);
    if (success) {
        rowCtrl.removeRow(reportId);
        alert('データの削除が完了しました。')
        console.log('データ削除完了')
    } else {
        alert('データの削除に失敗しました')
        console.log('データ削除することができませんでした。')
    }
}

export default deleteHandler



