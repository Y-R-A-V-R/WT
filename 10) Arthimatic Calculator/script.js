const display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operator = '';

function updateDisplay(value) {
  currentNumber += value;
  display.value = currentNumber;
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  display.value = '0';
}

function calculate() {
  if (currentNumber === '' || previousNumber === '') return;
  const result = parseFloat(previousNumber) + parseFloat(currentNumber);
  display.value = result;
  previousNumber = result;
  currentNumber = '';
}

const buttons = document.querySelectorAll('.buttons-container button');
buttons.forEach(button => button.addEventListener('click', function() {
  const value = this.dataset.value;
  if (value === 'C') {
    clearDisplay();
  } else if (value === '=') {
    calculate();
  } else if (isNaN(value)) {
    operator = value;
  } else {
    updateDisplay(value);
  }
}));


function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return NaN;
    }
}