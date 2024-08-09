let mArr = [1,2,3,4,5,6,7,8,9,10]
console.log(mArr)

let result = mArr.filter(item => {
    return item % 2 == 0
})

console.log(result)

//Using Filter in objects

let mObj = [{
    name:'Veera',
    location:'Madurai',
    age:18
}, {
    name:'Leo Das',
    location:'Mumbai',
    age:18
},{
    name:'Lallu',
    location:'Kerala',
    age:18
},{
    name:'Zara',
    location:'Mumbai',
    age:17
}]

let minor = mObj.filter(item => {
    return item.age < 18
})

console.log(minor)