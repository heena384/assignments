//Count the number of vowels in a string.

const vowels = ["a", "e", "i", "o", "u"];

let str = "Hello";
let count = 0;

for (let char of str) {
  let lowerChar = char.toLocaleLowerCase();

  if (vowels.includes(lowerChar)) {
    count++;
  }
}

console.log(count);
