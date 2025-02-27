import { collection, getDocs } from 'firebase/firestore';

// Get a list of reports from your database
const fetchReports = async (db, historyTbody) => {
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
        <td><button class='btn js-btn' data-id = ${doc.id}>delete</button></td>
        <td><button class='btn js-btn' data-id = ${doc.id}>update</button></td>
        </tr>`
    });
    historyTbody.innerHTML = tags;
}

export default fetchReports;