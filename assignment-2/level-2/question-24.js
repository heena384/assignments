//Check whether a character is a vowel or consonant.
let char = "A";

let newChar = char.toLowerCase(char);

let vowels = ["a", "e", "i", "o", "u"];

if (vowels.includes(newChar)) {
  console.log("It is vowels");
} else {
  console.log("not a vowel");
}
