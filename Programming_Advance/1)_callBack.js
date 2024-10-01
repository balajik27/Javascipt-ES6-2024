

// Callback - i'll call u back 


// Event , Or Some time later 

// passing function as a argument - Callback 


// Synchronous 
function add(num1 , num2, func){
    console.log(num1 + num2)
    func()
}

function print(){
    console.log("World")
}

add(1, 2 , print)


// Synchronous

// 1.forEach 

let arr = [2,3,4,43,6,7]


arr.forEach((num , index, wholeArray)=>{

})  


// Asynchrnous callback

// 1. addEventListener
// 2. setTimeout()


