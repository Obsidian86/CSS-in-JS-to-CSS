import "normalize-css";

const text = document.getElementById("translate");
const submit = document.getElementById("submit");
const outPut = document.getElementById("output");

submit.addEventListener("click", ()=>{
  let value = text.value;  
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

  let pertOpen = false
  let brackOpen = false
  for(let le of value){
    if(le === '{') brackOpen = true
    if(le === '}') brackOpen = false

    if (le === "(") pertOpen = true
    if (le === ")") pertOpen = false

    if  (le === ',') {
      const opt = pertOpen ? ',' : ';'
      newString += opt
    }
    else if (le === ':' && !brackOpen) newString += ''
    else if (le === '"') newString += ''
    else if (le === "'") newString += ''
    else if (!brackOpen) newString += le
    else newString += valProcess(le);
  } 
  outPut.innerText = newString;
  outPut.style.display = "block";
});
