
//Method -1

// let date = "04-05-2024"

// console.log(date);

// let newDate = '/';

// let replacedDate = date.split('-').join(newDate);

// console.log(replacedDate);


//Method -2

// let date1 = "04-05-2024";

// console.log(date);

// let newDate1 = "04/05/2024";

// let replacedDate1 = date1.replace(date1, newDate1);

// console.log(replacedDate1);

//Method - 3

let date = "04-05-2024"

let newDate = "";

for(let i = 0; i < date.length; i++){
    if(date[i] == "-"){
        newDate = newDate + "/";
    } else {
        newDate = newDate + date[i];
    }
}

console.log(newDate)
