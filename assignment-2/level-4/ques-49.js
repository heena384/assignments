//49. Reverse a string.
//Example:
//"hello"
//Expected:
//"olleh"

let str = "hello";
let revStr = "";

for (i = str.length - 1; i >= 0; i--) {
  revStr += str[i];
}
console.log(revStr);
