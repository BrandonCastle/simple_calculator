display = document.getElementById('display');
operators = document.querySelectorAll('.operators')



let justEvaluated = false;

function appendToDisplay(input) {
    if (['+', '-', '*'].includes(input)){
        for (i = 0; i < operators.length; i++) {
            operators[i].disabled = true;
        }
    } else {
        for (i = 0; i < operators.length; i++) {
            operators[i].disabled = false;
        }
    }
    display.value += input;
    
}
 function calculate(){
    try {
            display.value = eval(display.value);
        }
    
    catch(error){
        display.value = "Err"
        justEvaluated = true;
    }
 }

function clearDisplay() {
    display.value = "";
}

function backspace() {
    if(justEvaluated) {
    display.value = "";
    justEvaluated = false;

    } else {
    if(['+', '-', '*'].includes(display.value.at(-1))) {
        for (i = 0; i < operators.length; i++) {
            operators[i].disabled = false;
        }
    }
    display.value = display.value.slice(0, -1);
    }
}