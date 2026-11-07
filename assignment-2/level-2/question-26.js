//26. Create a simple calculator using if/else or switch.
let num1 = 12;
let num2 = 4;
let operator = "/";
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "Cannot divide by zero";
    }
    break;
  default:
    result = "Err";
}

console.log(`${num1} ${operator} ${num2} = ${result}`);
