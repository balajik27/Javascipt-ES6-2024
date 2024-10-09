// fetch("https://dummyjson.com/c/3029-d29f-4014-9fb4")


//  await


async function apiCall(){

    console.log("hello")
    try{
        const response = await fetch("https://dummyjson.com/c/3029-d29f-4014-9fb4",{
            method : "POST"
        }, {
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                id : 'ed243'
            })
        })
        const responseJson = await response.json()
        console.log("responseJson = " , responseJson)
    } catch(err){
        console.log("Err " , err)
    } 
}

apiCall()

// application programmable interface - api

// link 

https://openweathermap.org/api - frontend

https://openwfgathermap.org/apigfd - backend - Json data , image


// frontend and backend communication

// get - data fetch , post - data send , put - data update , delete  - delete data

// CRUD - create , read , update , delete 