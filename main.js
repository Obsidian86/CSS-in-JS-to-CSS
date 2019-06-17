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
    "-": true
  }
  
  for(let le of value){ 
    if( 
        le === le.toUpperCase() 
        && isNaN(le) 
        && filters[le] === undefined 
    ){ le = "-" + le.toLowerCase(); }
    newString += le;
  } 
  outPut.innerText = newString;
});
