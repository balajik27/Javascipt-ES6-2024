let num = 465489;
let newNum = num.toString();

console.log(newNum.length);

// Method 2

let num2 = 465489;
let length = 0

for(let i = num2; i>0; ){
    length++;
    i = Math.trunc(i/10) 
}

console.log(length);
