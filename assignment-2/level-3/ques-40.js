//40. Find the sum of the digits of a number.
//Example:
//1234
//Expected:
//10

let num = 1234;
let sum = 0;
let numToStr = String(num);

for (i = numToStr.length - 1; i >= 0; i--) {
  sum += Number(numToStr[i]);
}
console.log(sum);
