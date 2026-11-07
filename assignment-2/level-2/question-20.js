//20. Find the largest of three numbers.

let a = 10;
b = 6;
c = 12;

let largest;

if (a > b && a > c) {
  largest = a;
} else if (b > a && b > c) {
  largest = b;
} else largest = c;

console.log("largest number is", largest);
