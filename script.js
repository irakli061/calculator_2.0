let number1;
let number2;
let savedOperation;
let result_text = document.getElementById("result");

function addSymbol(symbol) {
  result_text.innerHTML = result_text.innerHTML + symbol;
}

function setOperation(operation) {
  savedOperation = operation;
  number1 = Number(result_text.innerHTML);
  result_text.innerHTML = "";
}

function calculate() {
  number2 = Number(result_text.innerHTML);
  if (savedOperation === "+") {
    let result = number1 + number2;
    result_text.innerHTML = result.toFixed(3);
  }
  if (savedOperation === "-") {
    let result = number1 - number2;
    result_text.innerHTML = result.toFixed(3);
  }
  if (savedOperation === "*") {
    let result = number1 * number2;
    result_text.innerHTML = result.toFixed(3);
  }
  if (savedOperation === "/") {
    let result = number1 / number2;
    result_text.innerHTML = result.toFixed(3);
  }
}

function setOperationClear(operation) {
  savedOperation = operation;
  number1 = Number(result_text.innerHTML);
  result_text.innerHTML = "";
}

function backspace() {
  result_text.innerHTML = result_text.innerHTML.slice(0, -1);
}