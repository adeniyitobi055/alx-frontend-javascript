export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const updateGrades = newGrades.find((grade) => grade.studentId === student.id);
      const grade = updateGrades ? updateGrades.grade : 'N/A';
      return { ...student, grade };
    });
}
