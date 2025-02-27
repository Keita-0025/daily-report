
const getFormData = (event) => {

    const formData = new FormData(event.currentTarget);
  
    const name = formData.get('name');
    const work = formData.get('work');
    const comment = formData.get('comment');
  
    return { name, work, comment };
  };

  export default getFormData;