// console.log("Hello World");

// 234432 - 234432 - palindrome

// 567 - 765 - not a palindrome

// mind = 230


// 1. 0 + 2 = 2 , 2 * 10 = 20
// 2. 20 + 3 = 23 , 23 * 10 = 230
// 3. 230 + 4 = 234 , 234 * 10 = 2340
// 4. 2340 + 4 = 2344 , 2344 * 10 = 23440
// 5. 23440 + 3 = 23443 , 23443 * 10 = 234430
// 6. 234430 + 2 = 234432 , 234432 * 10 = 2344320

// 0 * 10 = 0 , 0 + 2 = 2
// 2 * 10 = 20 , 20 + 3 = 23
// 23 * 10 = 230 , 230 + 4 = 234
// 234 * 10 = 2340 , 2340 + 4 = 2344
// 2344 * 10 = 23440 , 23440 + 3 = 23443
// 23443 * 10 = 234430 , 234430 + 2 = 234432



let number = 234432;
let reverse = 0;

// i = 2344

for(let i = number; i > 0;){
    let unitDig = i % 10;
    reverse = reverse * 10 + unitDig; // 2
    i = Math.trunc(i / 10)
}

// console.log(number)
// console.log(reverse)

// if(number == reverse){
//     console.log("Palindrome")
// }else{
//     console.log("Not Palindrome")
// }


let num = 234432;

let temporary = num.toString();

// console.log(temporary)

// console.log(typeof temporary);

// let name = 'malayalam';


let nameLetters = temporary.split('');
let reverseArray = nameLetters.reverse();
let reverseString = reverseArray.join('');

let reverseNum = Number(reverseString)



if(num == reverseNum){
    console.log("Palindrome")
}else{
    console.log("Not Palindrome")
}


// console.log(reverseString)






//2
//23443

//23
//2344



// let removedVar = Math.floor(234432 / 10)
// console.log(removedVar)
