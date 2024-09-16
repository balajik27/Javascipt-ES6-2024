
let num = 32;
for(intialization , condition , (increment / decrement )(updating)){
}

let number = 234432;
let reverse = 0;

// i = 2344

for(let i = number; i > 0;){
    let unitDig = i % 10;
    reverse = reverse * 10 + unitDig; // 2
    i = Math.trunc(i / 10)
}

// let number = 234432;
let i = number;
while(i>0){
    let unitDig = i % 10;
    reverse = reverse * 10 + unitDig; // 2

    i = Math.trunc(i / 10)
}

// 1 , 2 , 3 ... 10
let j = 1;
while(j<=10){
    console.log("hello")
    j++;
}

for(let i = 1; j<=10; j++){
    console.log("hello")
}