const students = [
{ id: 1, name: "Amina", year: 3, grades: [9, 8, 10],
contact: { github: "amina-dev" } },
{ id: 2, name: "Emir", year: 2, grades: [6, 7, 7] },
{ id: 3, name: "Lejla", year: 3, grades: [10, 9, 9],
contact: { github: "lejla-codes" } },
{ id: 4, name: "Tarik", year: 3, grades: [7, 6, 8] },
];

// --- Task 1 ---
const greet = (student) => `Hello, ${student.name}! You are in year ${student.year}.`;

students.forEach((student) => {
  console.log(greet(student));
});

// --- Task 2 ---
const studentNames = students.map((student) => student.name);
console.log(studentNames);

// --- Task 3 ---
const thirdYearNames = students
  .filter((student) => student.year === 3)
  .map((student) => student.name);

console.log(thirdYearNames);

// --- Task 4 ---
const average = (grades) =>
  grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

const studentsWithAverage = students.map((student) => ({
  ...student,
  average: average(student.grades),
}));

studentsWithAverage.forEach((student) => {
  console.log(`${student.name}: ${student.average.toFixed(2)}`);
});

// --- Task 5 ---
const updatedStudents = students.map((student) =>
  student.name === "Emir" ? { ...student, year: 3 } : student
);

const originalEmir = students.find((student) => student.name === "Emir");
const updatedEmir = updatedStudents.find((student) => student.name === "Emir");

console.log(`Original: Emir is in year ${originalEmir.year}`);
console.log(`Updated: Emir is in year ${updatedEmir.year}`);

// --- Task 6 ---
students.forEach((student) => {
  const github = student.contact?.github ?? "no GitHub";
  console.log(`${student.name}: ${github}`);
});

// --- Task 7 ---
async function loadUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const user = await response.json();
    console.log(`User ${id}: ${user.name}`);
  } catch (error) {
    console.log(`Could not load user ${id}`);
  }
}

loadUser(1);

