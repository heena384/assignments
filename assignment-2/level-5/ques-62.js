//62. Create a function that calculates the factorial of a number.

const calcFactorial = (num) => {
  let factorial = 1;

  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

console.log(calcFactorial(5));
