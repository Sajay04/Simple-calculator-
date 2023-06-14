let expression = '';

function appendToExpression(value) {
  if (value === '*') {
    expression += '*';
    displayValue('×');
  } else {
    expression += value;
    displayValue(value);
  }
}

function displayValue(value) {
  const resultField = document.getElementById('result');
  resultField.value += value;
}

function clearExpression() {
  expression = '';
  document.getElementById('result').value = '';
}

function backspace() {
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1); 
    expression = resultField.value;
  }

function calculateResult() {
  let result;
  try {
    result = eval(expression);
  } catch (error) {
    result = 'Error';
  }
  document.getElementById('result').value = result;
  expression = '';
}
