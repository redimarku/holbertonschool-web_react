const getCurrentYear = () => {
    return new Date().getFullYear();
}

const getFooterCopy = (isIndex) => {
    if(isIndex === true){
        return "Holberton School main dashboard";
    } else {
        return "Holberton School";
    }
}

export { getCurrentYear, getFooterCopy }