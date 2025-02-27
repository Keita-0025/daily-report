import getRowData from "../utils/rowDataUtils";
import rowCtrl from "../utils/uiHelpers";



const updateHandler = (reportId) =>{

    const row = rowCtrl.getRow(reportId);

    const {name, work, comment} = getRowData(row);



    const url = `index.html?edit=true&id=${reportId}&name=${encodeURIComponent(name)}&work=${encodeURIComponent(work)}&comment=${encodeURIComponent(comment)}`;
    window.location.href = url;

}

export default updateHandler;