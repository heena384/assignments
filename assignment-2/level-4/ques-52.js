//52. Count the number of spaces in a string.

let str = "Count the number of spaces in a string ";
let count = 0;

for (let char of str) {
  if (char == " ") {
    count++;
  }
}

console.log(count);
