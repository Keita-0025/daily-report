
const removeRow = (reportId) => {
    const row = document.querySelector(`[data-id = "${reportId}"]`).closest('tr');
    if(row){
      row.remove();
    }
  }

  export default removeRow;