const getQueryParam = (key) => {

    const allowedKeys = ["name", "work", "comment", "edit", "id"];
    
    if (!allowedKeys.includes(key)) {
        console.error(`Invalid query parameter key: ${key}`);
        return null;
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}

export default getQueryParam