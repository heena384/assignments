//64. Create a function that checks whether a number is prime.

const isPrime = (num) => {
  if (num <= 1) return false;

  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(19));
