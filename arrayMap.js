let myArray = [1,2,3]
console.log(myArray)

/* let result = () =>{
let newArray =[]
for (i=0; i<myArray.length; i++){
    newArray.push(myArray[i]*2)
}
console.log(newArray)
}
result(myArray)*/

/* let doubledValues = (item) => {
    return item * 2
}
let newArray =[]
for (i=0; i<myArray.length; i++){
    newArray.push(doubledValues(myArray[i]))
}
console.log(newArray) */

let newArray = myArray.map((item) => item *2)
console.log(newArray)

//now trying the same thing but now inserting object in array

let mArr = [{name:'Ashi singh', Dob:'12/08/1997', type:'major'},
    {name:'Boopalan', Dob:'01/06/2001', type:'major'},
    {name:'Ayesha', Dob:'01/08/2026', type:'minor'}]

let newArr = mArr.map((item) => {
    return {
        name:item.name,
        Dob:item.Dob
    }
})
console.log(newArr)

console.log(mArr)
