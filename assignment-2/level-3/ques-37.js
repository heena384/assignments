//37. Find the factorial of a number.

let num = 5;
let factorial = 1;

for (i = num; i >= 1; i--) {
  factorial *= i;
}

console.log(factorial);
