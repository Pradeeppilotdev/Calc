// simple calculator
const display = document.getElementById('display')

function appendToDisplay(input){
    // Check if the last character in the display is an operator
    const lastChar = display.value[display.value.length - 1];
    const operators = ['+', '-', '/'];
    const multiply =['*'];
    const last2char = display.value.slice(-2);
    if (multiply.includes(input) && multiply.includes(last2char[0]) && multiply.includes(last2char[1])){
        return
    }

    // Allow appending only if the last character is not an operator
    if (operators.includes(input) && operators.includes(lastChar)) {
        return; // Do not append if the last character is also an operator
    }
    if ((display.value == "Oops Error") && ((operators.includes(input)) || (display.includes(input)) || (multiply.includes(input)))){
        return; // This returns the value entered in the display if we try to enter anything after the error
    }
    if (operators.includes(last2char[0]) && multiply.includes(last2char[1])){
        return;
    }
    if (multiply.includes(last2char[0]) && operators.includes(last2char[1]) ){
        return;
    }

    display.value += input;
}

function ClearDisplay(){
    display.value="";

}


function Calculate(){
    try{
        display.value = eval(display.value).toFixed(3);
    }
    catch{
        display.value = "Oops Error"
    }
    
}