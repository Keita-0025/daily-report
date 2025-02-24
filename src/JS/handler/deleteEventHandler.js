import { db } from "../config/firebaseconfig.js";
import deleteReportWithRetry from "../services/deleteHistoryData.js";
import removeRow from '../utils /uiHelpers.js';


const deleteHandler = async (e) => {
    const reportId = e.target.getAttribute('data-id');
    if (!reportId) {
        return
    }
    console.log(`削除対象ID, ${reportId}`);

    const isConfirmed = window.confirm('本当に削除してもよろしいですか？');
    if (!isConfirmed) {
        return;
    }

    const success = await deleteReportWithRetry(db, reportId);
    if (success) {
        removeRow(reportId);
        alert('データの削除が完了しました。')
        console.log('データ削除完了')
    } else {
        alert('データの削除に失敗しました')
        console.log('データ削除することができませんでした。')
    }
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delBtn')) {
        deleteHandler(e);
    }
});

