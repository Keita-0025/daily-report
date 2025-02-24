
const removeRow = (reportId) => {
  const row = document.querySelector(`[data-id = "${reportId}"]`).closest('tr');
  if (row) {
    row.remove();
  } else {
    console.error('削除対象の行が見つかりませんでした。');
    alert('削除対象の行が見つかりませんでした。');
  }
}

export default removeRow;