const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 72 },
  { name: "jo", score: 60 },
  { name: "bas", score: 55 },
  { name: "pee", score: 90 },
  { name: "mos", score: 45 } ];

  function filterPassedStudents(){
    const passingScore = 60;

    students.forEach(student => {
    if (student.score >= passingScore) {
      console.log(`Student ${student.name} passed with score ${student.score}`);
    }
    });
  }

  filterPassedStudents();