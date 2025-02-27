const getTextContentFromRow = (row, index) => {
    return row.children[index].textContent.trim();
}

const getRowData = (row) => {
    return {
        name:getTextContentFromRow(row, 1),
        work:getTextContentFromRow(row, 2),
        comment:getTextContentFromRow(row, 3)
    }
}

export default getRowData