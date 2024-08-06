//Execution context
//1. Memory phase - variable environment
//2. Code phase - threads of execution

//Hoisting - it means executing line before initializing value to the variable 

createCourse('mongoDB')

function createCourse(course){
    console.log('creating ' + course + ' course')
}

createCourse('hacking')

