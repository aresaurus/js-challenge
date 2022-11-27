//ORIGINAL ARRAYS WE WILL BE WORKING ON WITH STUDENT DATA

export const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  }]
  
export const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
export const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
export const availableGenders = ['male', 'female'];

// DISPLAY OPTIONS TEXT
export function displayOptions() {
    console.log("\n\nA continuación tienes un listado de números en el que cada número te da acceso a una acción distinta. Según la información que te interese, tendrás que introducir un número u otro. Recuerda que puedes salir del programa introduciendo un valor distinto al de las opciones contempladas, como '0'.\n\n1. Ver el listado de alumnos en formato tabla.\n2. Ver la cantidad de alumnos que hay en clase.\n3. Ver los nombres de todos los alumnos.\n4. Eliminar el último alumno de la lista.\n5. Eliminar un alumno aleatoriamente.\n6. Ver los datos de todas las alumnas.\n7. Ver la cantidad de alumnos y alumnas que hay en la clase.\n8. Comprobar si en la clase solo hay alumnas.\n9. Ver los nombres de los alumnos que tengan entre 20 y 25 años.\n10. Añadir un alumno nuevo con los siguientes datos:\n   - Nombre aleatorio.\n   - Edad aleatoria (entre 20 y 50 años).\n   - Género aleatorio en función del nombre obtenido.\n   - Boletín de notas vacío.\n11. Ver el nombre del estudiante más joven de la clase.\n12. Ver la edad media de todos los alumnos de la clase.\n13. Ver la edad media de las alumnas.\n14. Añadir una nota aleatoria del 1 al 10 al boletín de notas de cada alumno.\n15. Ordenar a los alumnos por orden alfabético.\n16. Ver el alumno con mejores notas.\n\n")
} 

//FUNCTIONS

export function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

export function isNumber(value) {
    const number = Number.parseInt(value);
    return !Number.isNaN(number) ? true : false;
}

   
export function chooseName(array1, array2) {
    const maleName = 1;
    const femaleName = 2;
    let newName;
    let newNameIndex;
    let nameList = calculateRandomNumber(1, 10);
    if (nameList > 0 && nameList <= 5) {
        newNameIndex = Math.floor(Math.random() * array1.length)
        newName = array1[newNameIndex]
    } else {
        newNameIndex = Math.floor(Math.random() * array2.length)
        newName = array2[newNameIndex]
    }
    return newName
} 

export function getAverageAge(input) {
    return input.reduce((total, current) =>
    total + current.age, 0) / input.length;
}
