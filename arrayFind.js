//Array function - find and findIndex
// 1. Find
let mArr = [1,2,'yoyo',4,'Bingo',6,7,8,9,10]
console.log(mArr)

/*let result = mArr.find(item => {
    //console.log(item)
    return item.length == 5    
}) */

let result = mArr.findIndex(item => {
    return item =='Bingo'
})
console.log(result)


