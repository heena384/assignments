//60. Create a function that accepts a number and returns whether it is even or odd.

const evenOdd = (num) => {
  if (num % 2 == 0) {
    return console.log("Even");
  } else {
    return console.log("Odd");
  }
};

evenOdd(4);
