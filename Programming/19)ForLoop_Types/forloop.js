// for(initialization , condition , increment/decrement){
// }


// object = {} - Key value pair 

const Person = {
    name : "balaji",
    age : 22,
    email : "3hR9S@example.com",
}

// console.log(Person["name"])


// for(let key in Person){
//     console.log(key , Person[key])
// }

let arr = [3,4,46,56,5,53,4345]

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// for(let index in arr){ // index , number
//     console.log(arr[index] )
// }


// for(let value of arr){// number
//     console.log(value)
// }

let str = "Hello"

// for(let s of str){
//     console.log(s)
// }



// [3,4,46,56,5,53,4345]
// (3 , 0 , [3,4,46,56,5,53,4345] )
// Modification in whole array
arr.forEach((number , index , wholeArray) => {
    wholeArray[index] = number + 5;
})

console.log(arr)



// for..in

// for .. of

// forEach