//63. Create a function that reverses a string.

const revString = (str) => {
  let tempStr = "";
  for (let char of str) {
    tempStr = char + tempStr;
  }
  return tempStr;
};

console.log(revString("hello"));
