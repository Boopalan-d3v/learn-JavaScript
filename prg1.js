// Const, var, let
// let and const where strict then var

//const, let - Block scoped
//var - Funtion scoped

//lexical scope
//Higher-order functions
//Function + Lexical Scope = Closure
let a =10

function outer(){
    count = 0
    function inner(){
        count++;
        console.log(count)
    }
    return inner;
}

let incrementCounter = outer();

incrementCounter();
incrementCounter();
