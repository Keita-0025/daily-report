const rowCtrl = {
  getRow: (reportId) => {
    const row = document.querySelector(`[data-id='${reportId}']`)?.closest("tr");
    if (!row) {
      console.error("対象のデータが見つかりません。");
    }
    return row;
  },

  removeRow: (reportId) => {
    const row = rowCtrl.getRow(reportId);
    if (row) {
      row.remove();
    } else {
      console.error('削除対象の行が見つかりませんでした。');
      alert('削除対象の行が見つかりませんでした。');
    }
  }
};

export default rowCtrl;