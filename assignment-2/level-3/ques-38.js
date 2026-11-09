//Count how many digits are in a number.

let num = 1001;
let count = 0;

while (num > 0) {
  count++;
  num = Math.floor(num / 10);
}

console.log(count);
