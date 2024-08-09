let mArr = [1,2,3,4,5]
console.log(mArr)

let res = mArr.reduce((accName, item) => {
    
    //console.log(item)
    //console.log(accName)
    return accName + item   
}, 0)

console.log(`The sum of the mArr is ${res}`)


//Trying reduce() in objects

let mObj = [{
    name:'Veera',
    location:'Madurai',
    age:15
}, {
    name:'Leo Das',
    location:'Mumbai',
    age:15
},{
    name:'Lallu',
    location:'Kerala',
    age:15
},{
    name:'Zara',
    location:'Mumbai',
    age:14
}]

console.log(mObj)

let Detail = (mObj.reduce((accN,item) => {
    
    //console.log(item.name)
    return accN + item.age
    //return item
},0))

console.log(Detail)



