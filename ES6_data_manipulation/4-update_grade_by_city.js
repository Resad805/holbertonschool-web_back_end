export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // 1. Find if this student has a new grade in the newGrades array
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

      // 2. Return a new object with the updated grade or 'N/A'
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
