//Execution context
//1. Memory phase - variable environment
//2. Code phase - threads of execution

//Hoisting - it means executing line before initializing value to the variable 

console.log(x)

var x = 10

console.log(x)
console.log(this.x)
console.log(window.x)