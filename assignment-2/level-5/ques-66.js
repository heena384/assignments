//66. Create a function called calculate() that accepts two numbers and an operator (+, -, *, /) and returns the
//calculated result.

const calculate = (a, b, operator) => {
  if (operator == "+") {
    return a + b;
  } else if (operator == "-") {
    return a - b;
  } else if (operator == "*") {
    return a * b;
  } else if (operator == "/") {
    return a / b;
  }
};

console.log(calculate(2, 3, "*"));
