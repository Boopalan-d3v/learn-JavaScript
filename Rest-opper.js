let add = (a,b,...args) => {  //...args - represents all arguments and it mentioned on last not beginning 
    console.log(a)
    console.log(b)
    console.log(a+b)
    let sum = 0
    for(i=0; i<args.length; i++){
        sum += args[i]       
    }
    return sum
}
let result=(add(1,2,3,4))
console.log(result)