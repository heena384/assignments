//23. Create a grading system:
//• 90–100 → A
//• 80–89 → B
//• 70–79 → C
//• 60–69 → D
//• Below 60 → F

let marks = 80;

if (marks < 60) {
  console.log("Grade F");
} else if (marks >= 60 && marks <= 69) {
  console.log("Grade D");
} else if (marks >= 70 && marks <= 79) {
  console.log("Grade C");
} else if (marks >= 90 && marks <= 100) {
  console.log("Grade A");
} else if (marks >= 80 && marks <= 89) {
  console.log("Grade B");
}
