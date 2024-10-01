

// 1. map  - 10
// 2. filter - 5
// 3. reduce - 1

// for each 
// 1. traverse / iterate
// 2. modify the original array 

// arr.forEach((num , index , wh_arr)=>{ 
//     console.log(num)
// })

// map()

// 

// [8 ,]

// arr.push(2)

// let result = arr.map((num , index , wh_arr)=>{
//     num = num*3;
//     return num + 2 // 8
// }) 


// let arr = [2,3,4,6,7,3,4,6]

// map - length of the original array = length of the copy array
// [4,5,45,46,5,57,6]


// let result = [] // mind

// for(let i=0;i <arr.length; i++){
//     if(arr[i] % 2 == 0){
//         result.push(arr[i])
//     }
// }

// console.log(result)


// Filter 
let arr = [2,3,4,6,7,3,4,6]

// [2 , 4 , 6 , 4 , 6]

let result = arr.filter((num)=>{
    return num % 2==0;
})

// console.log(result)


// chaining

function add(num){
    return Math.trunc(num + (Math.random() * 14)) ;
}
function checkEven(num){
    return num%2 ==0;
}


let ans = arr.map(add).filter(checkEven)

// console.log(ans)


// [2,3,4,5,56]
// new var

// let mind = 0;

// let count = 0;

// accumulator = [4 , 5];

// arr = [2,3,4,6,7,3,4,6]

// single value 3 , 4 [3,4,5] , not array

// let ans_value = arr.reduce((accumulator , num , index, wh_arr)=>{
//     accumulator.push(num +2)
//     return accumulator;
// } , [])


// console.log("Outside =" , ans_value)