//Callback
//event loop
//event queue

//promises - object*
//3 Stages - Pending, fullfilled, rejected

function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data fetched')
        },5000)
    })
}
/*getData()
    .this(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
*/

async function fetchData(){
    try{
        const result = await getData()
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}

fetchData()