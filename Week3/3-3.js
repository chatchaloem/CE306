const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 90 },
  { name: "jo", grade: 78 }];


students.forEach((student, index) => {
  console.log(`Student [${index}]: ${student.name}, Grade: ${student.grade}`);});

function showStudentCount() {
  console.log(`Total students: ${students.length}`);
}

showStudentCount();