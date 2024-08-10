let Input = [6,-5,7,-2,4,6,-1]  //find the sum of positive numbers only

let fValue = Input.filter((data) => {return data > 0})

let result = fValue.reduce((data,sum) => {return data +sum},0)

console.log(result)
