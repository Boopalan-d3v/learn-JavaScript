//common higher-order functions
//1. Map
//2. Filter

//Map
const nums = [1, 2, 3, 4, 5]
console.log(nums)
const doubledNums = nums.map((num) => 2*num)
console.log(doubledNums)

//filter
const val = [1, 2, 3, 4, 5]
console.log(val)
const evenNum = val.filter((even) => (even%2)==0)
console.log(evenNum)

//reduce
const values = [1, 2, 3, 4, 5]
console.log(values)
const sumNums = values.reduce((storeVal,sum) => storeVal + sum,0)
console.log(sumNums)

