
const getCurrentYear = () =>{
    const currentYear = new Date().getFullYear(); 
    return currentYear;
}

const getFooterCopy = (isIndex) =>{
    if(isIndex === true){
        return `Holberton School`
    } else{
       return `Holberton School main dashboard`
    }
}

export {getCurrentYear, getFooterCopy}