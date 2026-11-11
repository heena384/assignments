//65. Create a function that checks whether a string is a palindrome.

const isPalindrome = (str) => {
  let tempStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    tempStr += str[i];
  }

  if (str === tempStr) {
    return true;
  } else return false;
};

console.log(isPalindrome("hello"));
