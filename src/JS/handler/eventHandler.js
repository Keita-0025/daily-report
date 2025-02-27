import deleteHandler from "./deleteEventHandler";
import updateHandler from "./updateEventHandler";

document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('js-btn')) {
        return
    }
    const action = e.target.textContent.trim().toLowerCase();
    const reportId = e.target.getAttribute('data-id');


    if(!reportId){
        return
    }

    if(action === 'delete') {
        deleteHandler(reportId);
    } else if(action === 'update'){
        updateHandler(reportId);
    }

});