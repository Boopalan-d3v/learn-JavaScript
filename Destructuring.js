//Destructuring means unpack the array and objects
// 1. Destructuring in Array

let fullName = 'Boopalan Ashisingh'

let name = fullName.split(" ")

console.log(name)

//let firstName = name[0]
//let lastName = `${name[1]}`

// let [firstName, ,lastName] = name *here leaving blank space between two variables to avoid the value from the name

let [firstName,lastName] = name  //Assigning array values to the variables

console.log(firstName)
console.log(lastName)

// 2. Destructuring in Objects

let myObject = {
    fName:'Ashisingh Boopalan',
    proffesion:'actor'
}

// Split values and storing on variables *variable name must be as key name 

let {fName, proffesion} = myObject

console.log(fName)
console.log(proffesion)

let Name = 'Ashi singh'
let husbandName = 'Boopalan'
let Dob ='12/08/2024'

//Grouping all variables to form a object

let Details = {
    Name,
    husbandName,
    Dob
}

console.log(Details)