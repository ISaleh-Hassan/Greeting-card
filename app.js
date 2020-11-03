const nameTextInput              = document.querySelector("#nameTextinput");
const greetingTextInput          = document.querySelector("#greetingTextinput");
const nameTextLabel              = document.querySelector("#nameTextLabel");
const greetingTextLabel          = document.querySelector("#greetingTextLabel");


document.addEventListener('DOMContentLoaded', function() {
    console.log("Onload")
}, false);

nameTextInput.addEventListener('input', updateNameValue);
function updateNameValue(e) {
    nameTextLabel.textContent = e.target.value;
}

greetingTextInput.addEventListener('input', updateGreetingTextValue);
function updateGreetingTextValue(e) {
    greetingTextLabel.textContent = e.target.value;
}

function changeBgColor() {
    const selectedBgColor = document.getElementById('chooseCardBgColor');
    const card = document.getElementById('card');
    let choosenBgColor=  selectedBgColor.value;
    card.style.backgroundColor =getColorNameFromValue(choosenBgColor)

  }

  function changeTxtColor() {
    const selectedBgColor = document.getElementById('chooseCardTextColor');
    const card = document.getElementById('card');
    let choosenBgColor=  selectedBgColor.value;
    card.style.color = getColorNameFromValue(choosenBgColor)
  }

  function changeTxtSize() {debugger;
    const selectedBgColor = document.getElementById('chooseCardTextSize');
    const card = document.getElementById('card');
    let choosenBgColor=  selectedBgColor.value;
    card.style.fontSize = getSizeFromValue(choosenBgColor)
  }

  function chooseCardTextFamily() {
    const selectedBgColor = document.getElementById('chooseCardTextFamily');
    const card = document.getElementById('card');
    let choosenBgColor=  selectedBgColor.value;
    card.style.fontFamily= getFontFamilyFromValue(choosenBgColor)
  }

  function getSizeFromValue(value){    
    if(value==1){
        return "15px";
    }
    else if(value==2){
        return "20px"
    }
    else if(value==3){
        return "25px"
    }
  }

  function getFontFamilyFromValue(value){    
    if(value==1){
        return "Times New Roman";
    }
    else if(value==2){
        return "Arial"
    }
    else if(value==3){
        return "Courier New"
    }
    else if(value==4){
        return "Lucida Console"
    }
  }

  function getColorNameFromValue(value){    
    if(value==1){
        return "blue";
    }
    else if(value==2){
        return "black"
    }
    else if(value==3){
        return "grey"
    }
    else if(value==4){
        return "white"
    }  
  }
  