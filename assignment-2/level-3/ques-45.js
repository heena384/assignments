//45. Print this pattern:
//1
//12
//123
//1234
//12345

for (i = 1; i <= 5; i++) {
  let row = "";
  for (j = 1; j <= i; j++) {
    row += String(j);
  }

  console.log(row);
}
