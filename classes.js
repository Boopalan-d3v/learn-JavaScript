/* function Person (name, birthYear){
    this.name = name 
    this.birthYear = birthYear 

    this.getDetails = function () {
        return `Name : ${this.name} and Birth year: ${this.birthYear}`
    }
}  */

class Person {
    constructor(name, birthYear){
        this.name= name 
        this.yearOfBirth = birthYear
    }

    getDetails = () => {
        return `Name: ${this.name} and Age: ${2024 - this.yearOfBirth}`
    }
}

let Ashi = new Person('Ashi', 1997)
console.log(Ashi.getDetails())