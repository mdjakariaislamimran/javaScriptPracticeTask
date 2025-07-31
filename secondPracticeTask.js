// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.


const mathMarks = 85;
const biologyMarks = 90;
const chemistryMarks = 78;
const physicsMarks = 88;    
const banglaMarks = 92;

const totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
const averageMarks = totalMarks / 5;
console.log("The average marks of the student is: " + averageMarks.toFixed(2) + " out of 100");