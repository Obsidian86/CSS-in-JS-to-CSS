import "normalize-css";

const text = document.getElementById("translate");
const submit = document.getElementById("submit");
const outPut = document.getElementById("output");

submit.addEventListener("click", ()=>{
  let value = text.value; 

  value = value.replace(/,/g, ";");
  value = value.replace(/"/g, "");
  
  let newString = "";
  
  const filters = {
    ":": true,
    "#": true,
    ";": true,
    "%": true,
    "-": true, 
    "(": true,
    ")": true,
    "{": true,
    "}": true,
    ".": true,
    "$": true,
    "`": true
  }
  
  const valProcess = (item) => {
    if(item === '`') return "";
    if( item === item.toUpperCase() && isNaN(item) && filters[item] === undefined ){ 
      return("-" + item.toLowerCase()); 
    } 
    return item;
  }

  for(let le of value){ 
    newString += valProcess(le);
  } 
  outPut.innerText = newString;
  outPut.style.display = "block";
});
