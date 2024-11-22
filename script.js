let display = document.getElementById('display');
let buttons = document.querySelectorAll('button[type="button"]');

let currentOperation = '';
let previousOperation = '';
let currentNumber = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.value;

    if (value === 'C') {
      currentOperation = '';
      previousOperation = '';
      currentNumber = '';
      display.value = '';
    } else if (value === '=') {
      try {
        let result = eval(currentOperation);
        display.value = result;
        currentOperation = result;
        previousOperation = '';
        currentNumber = '';
      } catch (e) {
        display.value = 'Error';
      }
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      if (previousOperation && previousOperation !== value) {
        currentOperation = currentOperation.replace(previousOperation, value);
      } else {
        currentOperation += value;
      }
      previousOperation = value;
      currentNumber = '';
    } else {
      currentNumber += value;
      currentOperation += value;
    }

    display.value = currentOperation;
  });
});
