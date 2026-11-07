//Check whether three sides can form a valid triangle.

let a = 7;
let b = 10;
let c = 5;

if (a + b > c && a + c > b && b + c > a) {
  console.log("Valid");
} else {
  console.log("invalid");
}
