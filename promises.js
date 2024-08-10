// Promises - Syntax
// const mPromise = new Promise((resolve, reject) => {
//  Promise body
//  call resolve()  call when the operation is completed
//  call reject()   call when the operation is failed
//    })

const dataListPromise = new Promise((resolve, reject) => {
    $.get('https://images.app.goo.gl/xcnZJ9CKCCBSP7cD7',(data => {
        console.log('Data fetched')
        resolve(data)
    }).fail(err =>{
        reject(err)
    }))
})

dataListPromise
.then((data) => {           //here the value for data get from resolve()
    console.log('Call is success')
    console.log(data)
})
.catch((error) => {         //here the value for error get from reject()
    console.log('Call is failed')
    console.log(error)
})
