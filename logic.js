var inputField = document.querySelector("h1");

var valueBtn = document.querySelectorAll(".value");

var operator = "";
var operatorSelected = false;

for(var i = 0; i < valueBtn.length; i++){
    valueBtn[i].addEventListener("click", function(){
        startAnimation(this);
        if(operatorSelected){
            inputField.innerText = "";
            operatorSelected = false;
        }
        var input = this.innerText;
        var inputFieldText = inputField.innerText;
        if(inputFieldText.includes(".") && input == "."){
            return;
        }
        if(inputFieldText.length == 16){
            return;
        }
        inputField.innerText = inputField.innerText + input;
    });
}

document.querySelector(".delete").addEventListener("click", function(){
    startAnimation(this);
    var inputFieldText = inputField.innerText;
    if(inputFieldText.length == 0){
        return;
    }
    inputField.innerText = inputFieldText.slice(0, inputFieldText.length-1);
});

var operatorBtn = document.querySelectorAll(".operator");

var valueOne = 0;

for(var i = 0; i < operatorBtn.length; i++){
    operatorBtn[i].addEventListener("click", function(){
        startAnimation(this);
        operator = this.innerText;
        var inputFieldText = inputField.innerText;
        if(!operatorSelected){
            if(inputFieldText.length == 0){
                return;
            }
            valueOne = parseFloat(inputFieldText);
        }
        inputField.innerText = operator;
        operatorSelected = true;
    });
}

document.querySelector(".equal").addEventListener("click", function(){
    startAnimation(this);
    var inputFieldText = inputField.innerText;
    var valueTwo = 0;
    if(inputFieldText.length != 0){
        valueTwo = parseFloat(inputFieldText);
    }
    var result = 0;
    switch(operator){
        case "+": result = valueOne + valueTwo; break;
        case "-": result = valueOne - valueTwo; break;
        case "x": result = valueOne * valueTwo; break;
        case "/": result = valueOne / valueTwo; break;
        default:
            result = "Invalid Syntax"; break;
    }
    inputField.innerText = result;
});

document.querySelector(".reset").addEventListener("click", function(){
    startAnimation(this);
    inputField.innerText = "";
    operator = "";
    operatorSelected = false;
    valueOne = 0;
});

function startAnimation(element){
    element.classList.add("pressed-anim");
    setTimeout(function(){
        element.classList.remove("pressed-anim");
    }, 100);
}