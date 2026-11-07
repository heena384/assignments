//Check whether a given year is a leap year

let year = 1900;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(year + " is leap year");
} else {
  console.log("not a leap year");
}
