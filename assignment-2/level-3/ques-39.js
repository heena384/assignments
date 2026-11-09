//39. Reverse a number.

let num = 12345;

let numTostr = String(num);
let revStr = "";

for (i = numTostr.length - 1; i >= 0; i--) {
  revStr += numTostr[i];
}

revNum = Number(revStr);
console.log("🚀 ~ revNum:", revNum);
