const buttonsEl = document.querySelector("button");

const inputFieldEl = document.getElementById("result");

for( let i = 0; i < buttonsEl.length; i++){
  buttonsEl[i].addEventListener("click", ()=>{
    const buttonValue = buttonsEl[i].textContent;
    console.log(buttonValue);
    if(buttonValue ==="C"){
      clearResult();
    }else if(buttonValue ==="="){
      calculateResult();
    }else{
      appendValue(buttonValue)
    }

  });
}
function clearResult(){

}
function calculateResult(){

}
function appendValue(buttonValue){
inputFieldEl.value += buttonValue;
}