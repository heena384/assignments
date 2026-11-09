//58. Check whether a string contains a particular word.

let str = "Check whether a string contains a particular word";

let lowerStr = str.toLocaleLowerCase();

let charToFound = "o";
count = 0;

for (let char of lowerStr) {
  if (char == charToFound) {
    count++;
  }
}

console.log(count > 0 ? `true ${count} times` : "false");
