// Const, var, let
// let and const where strict then var

//const, let - Block scoped
//var - Funtion scoped

//lexical scope

//Higher-order functions

/*function add (a,b){
    return a+b;
} 
console.log(add())
console.log(add(0,7))*/

let sum = (a,b) => a+b //Arrow function

let minus = function (a,b){
    return a-b;
}

function operate(operationFunc, a, b){
    return operationFunc(a,b);
}

console.log(operate(sum,2,3))
console.log(operate(minus,4,5))
