//53. Count how many times a particular character appears in a string.

let str = "Count how many times a particular character appears in a string";
let lowerCaseStr = str.toLocaleLowerCase();

let charToFound = "o";
let lowerCaseChar = charToFound.toLocaleLowerCase();

let count = 0;

for (let char of lowerCaseStr) {
  if (lowerCaseChar == char) {
    count++;
  }
}

console.log(count);
