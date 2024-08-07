//Callback
//event loop
//event queue

//promises - object*
//3 Stages - Pending, fullfilled, rejected

function fetchData(callback){
    setTimeout(() => {
       let data = 'fetched data'
       callback(data, null)
    },5000)
}
function handleData(data, error){
 if(error){
    console.error(error)
 }else{
    console.log(data)
 }
}
fetchData(handleData)