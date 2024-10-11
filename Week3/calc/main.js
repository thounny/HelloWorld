// calc

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calc(a, b, operation) {
  let result = 0;
  // TODO do the real work
  // call the right function based on the operation
  if ("add" === operation) {
    result = add(a, b);
  } else if ("subtract" === operation) {
    result = subtract(a, b);
  } else if ("multiply" === operation) {
    result = multiply(a, b);
  } else if ("divide" === operation) {
    result = divide(a, b);
  }
  return result;
}

function calculator(a, b, operation) {
  switch (operator) {
    case "add":
      return a + b;
      break;
    case "subtract":
      return a - b;
      break;
    case "multiply":
      return a * b;
      break;
    case "divide":
      return a / b;
      break;
  }
}

console.log(calc(6, 7, "add"));
console.log(calc(6, 7, "subtract"));
console.log(calc(6, 7, "multiply"));
console.log(calc(6, 7, "divide").toFixed(2));
