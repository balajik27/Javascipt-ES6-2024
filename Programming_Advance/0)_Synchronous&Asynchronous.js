// Synchronous & Asynchronous - execution method , technique , way


// Synchronous:
// sequential(one by one , step by step) manner 

console.log("start") 
console.log("middle") 
console.log("end")

// result = 2 + 3
// ans = result + 5

// 2 sec 

console.log("end")
console.log("end")
console.log("end")

function add(){
    console.log("hello")
}



add()


// Asynchrnous - event , delay 
// it executes parallely

// Event handling

let name = document.getElementById('demo')

console.log(name)

name.addEventListener('click' , function(){
    console.log("hello")
}) // asynchrnous 

// callback 
// Promise
// async / await
// fetch , axios 
// file read , write

