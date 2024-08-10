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

const listPromise = () => new Promise ((resolve, reject) => {
    $.get('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fisheries.noaa.gov%2Ffeature-story%2Fsharpen-your-shark-facts&psig=AOvVaw10U-oXZurUSg0zlpGN9gLm&ust=1723354187233000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCEgefY6YcDFQAAAAAdAAAAABAE',data => {
        resolve(data)
    }).fail(error =>{
        reject(error)
    })
})
dataListPromise
.then(listPromise)
.then((data) => {           //here the value for data get from resolve()
    console.log('Call is success')
    console.log(data)
})
.catch((error) => {         //here the value for error get from reject()
    console.log('Call is failed')
    console.log(error)
})

