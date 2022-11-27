import readline from "readline";
import {students, availableFemaleNames, availableMaleNames, calculateRandomNumber, isNumber, chooseName, displayOptions, getAverageAge} from "./utils.js";


// Code to get user input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

// Async process managed by a promise to ask user for input. They must enter a valid value, which will be validated using the imported isNumber function.
function getUserInput() {
    const promise = new Promise((resolve, reject) => {
        rl.question('Elige una opción: ', num => {
            rl.pause();
        if (isNumber(num)) {
            num = Number.parseInt(num);
            resolve(num);
        } else {
            reject('Tienes que introducir un número válido');
        }
    })

})

return promise;
}

// do while loop with a a switch block of code that returns the data the user wants to see. The loop will run till the user enters an out of range number.
async function manageUserInput() {
    let userInput;
    let femaleStudents;
    let maleStudents;

    do {
        try {
            displayOptions();
            userInput = await getUserInput();
        } catch(error) {
            console.error('Se ha producido un error.');
            process.exit(0);
        }

        switch(userInput) {
            case 1:
                // Show all students in table format.
                console.table(students);
                break;
            case 2:
                // Show the number of students in the group.
                console.log(`La clase tiene ${students.length} estudiantes.`);
                break;
            case 3:
                // Show all student names.
                console.log('Los nombres de los estudiantes son:');
                students.map(student => console.log(student.name));
                break;
            case 4:
                // Delete the last student of the group
                function removeLastStudent(input) {
                    input.pop();
                    return input
                }
                
                console.table(removeLastStudent(students));
                break;
            case 5:
                // Delete a random student from the group.
                students.splice((Math.random() * students.length), 1);

                console.log('\nEstudiantes restantes:\n');
                console.table(students);
                break;
            case 6:
                // Show all female students' data.
                femaleStudents = students.filter(student => student.gender === "female");
                const girls = femaleStudents.length > 0 ? console.table(femaleStudents) : 'No hay alumnas en la clase.'
                break;
            case 7:
                // Show the number of boys and the number of girls in the group.
                maleStudents = students.filter(student => student.gender === "male");
                femaleStudents = students.filter(student => student.gender === "female");

                console.log(`Número de chicos: ${maleStudents.length}\nNúmero de chicas: ${femaleStudents.length}`)
                break;
            case 8:
                // Return true if all students are girls, false if they are not.
                if (students.length > 0) {
                    let allFemaleGirls = students.every(student => student.gender === 'female');
                    console.log(`¿En la clase solo hay alumnas?: ${allFemaleGirls}`);
                } else {
                    console.log('La clase está vacía.')
                }
                break;
            case 9:
                // Show the name of all 20 to 25 yo students
                let ageFilter = students.filter(student => student.age >= 20 && student.age <= 25);
                if (ageFilter.length > 0) {
                    console.table(ageFilter);
                } else {
                    console.log('No hay estudiantes en este rango de edad.')
                }
                break;
            case 10:
                /* Add a new student with the following properties: random name, random age (20-50), random gender (must match the name), empty examScore.*/
                const newStudent = new Object();
            
                newStudent.age = calculateRandomNumber(50, 20);
                newStudent.examScores = [];
                newStudent.name = chooseName(availableMaleNames, availableFemaleNames);
                newStudent.gender = availableMaleNames.includes(newStudent.name) ? newStudent.gender = 'male' : newStudent.gender = 'female';
                students.push(newStudent);

                console.table(students);
                break;
            case 11:
                // Show the youngest student.
                let youngestStudent = students.reduce((previous, current) => {
                    return current.age < previous.age ? current : previous;
                });

                console.log(`El estudiante más joven es: ${youngestStudent.name}`);
                break;
            case 12:
                // Show the average age of all students.
                console.log(`La edad media de la clase es de ${getAverageAge(students).toFixed(2)} años.`);
                break;
            case 13:
                //  Show the average age of all female students.
                femaleStudents = students.filter(student => student.gender ==='female');
                console.log(`La edad media de las alumnas es de ${getAverageAge(femaleStudents)} años.`);
                break;
            case 14:
                // Add a new random examScore (0-10) value to all students.
                students.forEach(student => student.examScores.push(calculateRandomNumber(0, 10)));

                console.table(students);
                break;
            case 15:
                // Sort the array alphabetically.
                let sortedTable = students.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);

                console.table(sortedTable);
                break;
            case 16:
                // Show the student with the best grades.
                const studentGrades = Array.from(students.map(student => student.examScores));
                const studentGradesSum = [];

                for (let student = 0; student < studentGrades.length; student++) {
                    let sum = studentGrades[student].reduce((a, b) => a + b, 0);
                    studentGradesSum.push(sum);
                }

                const bestStudentIndex = studentGradesSum.indexOf(Math.max(...studentGradesSum));
                const bestStudent = students[bestStudentIndex].name;
                
                const consoleMsg = students.length > 0 ? console.log(`Las mejores notas de la clase son de ${bestStudent}.`) : console.log(`La lista de alumnos está vacía.`)
                break;
        }

    } while (userInput > 0 && userInput <=18)
}

manageUserInput();
