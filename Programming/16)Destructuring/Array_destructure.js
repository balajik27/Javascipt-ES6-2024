let arr = [4,5,45,55,65,6576]

// console.log(arr[0])

let [first,,, second, ...last] = arr;
 
console.log(first , second , last)