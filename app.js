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
    let selectedBgColor = document.getElementById('chooseCardBgColor');
    let card = document.getElementById('card');
    let choosenBgColor=  selectedBgColor.value;
    card.style.backgroundColor =getColorNameFromValue(choosenBgColor)

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

    function changeTextColor() {
        let selectedBgColor = document.getElementById('chooseCardTextColor');
        let card = document.getElementById('card');
        let choosenBgColor=  selectedBgColor.value;
        card.style.color =getColorNameFromValue(choosenBgColor)
    
      }
    

  }
  