// Spread Operation can be use on Array and objects

// 1.Using on Array

let mArray = [1, 2, 3, 4, 'hello']
mArray.push('world')

console.log(mArray)

let mArray2 =[...mArray] //...mArray - copies the array elements from the mArray
console.log(mArray2) //it's copying the push values from the mArray

let array1 = ['1','2','3','4']
let array2 = ['5','6','7','8']

//let array = array1.concat(array2) //This method also used to concat two arrays

let array =  [...array1, ...array2]  //concat array1 and array2

console.log(array)

// 2. Using on Objects

let myObject = {
    name:'Ashi singh',
    proffession:'actor',
    movieCount: 4
}

let myObject2 = {
    serial:'Yen un dino ki bhat hai'
}

let myObject3={
    ...myObject,...myObject2
}

console.log(myObject3)