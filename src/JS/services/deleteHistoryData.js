import { deleteDoc, doc } from 'firebase/firestore';

/**
 * Firestoreからレポートを削除する関数
 * @param {Object} db - Firestoreインスタンス
 * @param {string} userId - 削除対象のレポートID
 */
const deleteReportWithRetry = async (db, userId, retries = 3, delay = 1000) => {
    if (!db || typeof db !== "object") {
        console.error("Firestore instance is required.");
        return false;
    }
    if (!userId || typeof userId !== "string") {
        console.error("Invalid userId provided.");
        return false;
    }

    for (let attempt = 0; attempt < retries; attempt++) {
        try {
            await deleteDoc(doc(db, "reports", userId));
            console.log(`User ${userId} deleted successfully!`);
            return true;
        } catch (error) {
            console.error(`Attempt${attempt + 1}Error deleting document:`, error);
            if (attempt < retries - 1) {
                console.log(`Retrying in ${delay}ms...`);
                await new Promise((resolve) => setTimeout(resolve, delay))
            } else {
                console.error("All retry attempts failed.");
                return false;
            }
        }

    }
};

export default deleteReportWithRetry

