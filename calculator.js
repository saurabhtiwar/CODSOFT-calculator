let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}


