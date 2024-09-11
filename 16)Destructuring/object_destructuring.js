

// Data from backend to frontend
let stud = {
    name : "Balaji",
    age : 23,
    city : "Chennai"
}

let studName = stud.name;
let studAge = stud.age;

// console.log(studName , studAge);

// console.log(stud)


let productData = {
    productName : "Laptop",
    price : 45000,
    brand : "Dell",
    modal : "Dell-1234"
}

productData.price = 35000;


productData = {...productData , price : 35000 , productName : "sajin" ,  price : 4300 }

let { productName , brand } = productData;

console.log(productName , brand)

// Spread Operator - Takes the copy