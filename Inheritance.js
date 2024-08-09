/* Inheritance in class

Syntax - class ChildClass{
//class body
}
class Childclass extends ParentClass{
//class body
} */

class Person {
    constructor(name, birthYear){
        this.name = name 
        this.yearOfBirth = birthYear 
    }

    getDetails = () => {
        return ` Name: ${this.name} and Age: ${2024 - this.yearOfBirth}`
    }
}

class Actor extends Person{
    constructor(name, birthYear, experience, hits, flops){
        super(name, birthYear)
        this.experience = experience 
        this.noHits = hits
        this.noFlops = flops
    }
    getData = () => {
        return `${this.getDetails()} and Experience: ${this.experience} and No.ofHits: ${this.noHits} and No.Of.Flops: ${this.noFlops}`
    }
}

let Ashi = new Actor('Ashisingh', 1997,4,4,0)

let Boopalan = new Actor('Boopalan',2001,5, 4,0)

console.log(Boopalan.getData())

