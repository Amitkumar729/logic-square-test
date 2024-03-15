function generateStudentMarkSheets(students, details) {
    const studentsMarkSheets = [];
  
    // Iterate through each student
    students.forEach((student) => {
      const studentDetails = details.find((detail) => detail.Roll === student.Roll);
  
      // Calculate total marks for each student
      let totalMarks = 0;
      Object.values(studentDetails.subjects).forEach((mark) => {
        totalMarks += mark;
      });
  
      // Determine pass/fail status
      const status = totalMarks >= 200 ? "pass" : "fail";
  
      // Create the mark sheet object
      const markSheet = {
        name: student.name,
        Roll: student.Roll,
        ...studentDetails.subjects,
        total: totalMarks,
        status: status,
      };
  
      // Add the mark sheet to the array
      studentsMarkSheets.push(markSheet);
    });
  
    return studentsMarkSheets;
  }
  
  // Test the function
  const students = [
    { name: "Dhishan Debnath", Roll: 1 },
    { name: "Animesh Gupta", Roll: 2 },
    { name: "Tapas Sen", Roll: 3 },
    { name: "Misti Dutta", Roll: 4 },
    { name: "Chini Misra", Roll: 5 }
  ];
  
  const Details = [
    { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
    { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
    { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
    { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
    { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } }
  ];
  
  const studentsMarkSheets = generateStudentMarkSheets(students, Details);
  console.log(studentsMarkSheets);
  