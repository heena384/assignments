//41. Check whether a number is a palindrome.
//Example:
//121
//Expected:
//Palindrome

let num = 121;
let numTostr = String(num);
let revStr = "";

for (i = numTostr.length - 1; i >= 0; i--) {
  revStr += numTostr[i];
}

if (num == Number(revStr)) {
  console.log("Palindrome");
} else {
  console.log("Not a palindrome");
}
