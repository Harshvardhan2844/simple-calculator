let display = document.querySelector('#display');

function appendCharacter(char) {
    display.value += char;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0,-1);
}

function calculateResult() {
    try{
        display.value = math.evaluate(display.value);
    } catch {
        display.value = 'error';
    }
}

function toggleNegation() {
    if(display.value !== ''){
        if(display.value.startsWith('-')){
            display.value = display.value.substring(1);
        } else {
            display.value = '-' + display.value;
        }
    }
}

