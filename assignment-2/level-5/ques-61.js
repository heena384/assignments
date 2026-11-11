//61. Create a function that accepts three numbers and returns the largest number.

const isLargest = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else return c;
};

console.log(`Largest number is ${isLargest(2, 4, 5)}`);
