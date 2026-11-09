// Check whether a string is a palindrome.
//Example:
//"madam"

let str = "madam";
let revStr = "";

for (i = str.length - 1; i >= 0; i--) {
  revStr += str[i];
}

if (str === revStr) {
  console.log("palindrome");
} else {
  console.log("Not a palindrome");
}
