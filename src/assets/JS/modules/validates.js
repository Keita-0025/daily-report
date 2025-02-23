const validateFromData = ({ name, work, comment }) => {
    let errors = [];
    if (!name || !work || !comment) {
      errors.push('すべてのフィールドに入力してください');
    }
    if (name.length > 3) {
      errors.push('名前は50文字以内で入力してください');
    }
    if (work.length > 2) {
      errors.push('作業内容は200文字以内で入力してください');
    }
    if (comment.length > 2) {
      errors.push('コメントは200文字以内で入力してください');
    }
    return errors.length > 0 ? errors : null;
  }

  export default validateFromData;