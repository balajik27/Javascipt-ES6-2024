

// Math.random()

// Class 
//     - blueprint , template
//     - variable - function(action)
//     - data and methods(function)
//     - properties(data) & behaviour(actions)

// Car 
//     properties - wheels, engine , color , modal - data
//     behaviour - start , stop , move , refuel  - functions

//OOPS - Object oriented programming - 4 principles

// AUDI , BMW , maruthi - object

// let name = "hello";

// class - keyword 

// ES6 ECMASCRIPT 6 - 2015



class Car {
    constructor(){
        this.books = [];
        this.engine = 3;
        this.color;
        this.modal;
    }
    //Default constructor
    // constructor(){
    // }

    EngineStart(num) {
        this.engine = num;
        console.log("engine started...")
    }
   
}

// Car.books


// Object creation - class & Objects
// 1 . It calls Constructor -> Create the object
// AUDI(object variable)
let AUDI = new Car(); // it calls the Car constructor
let BMW = new Car(); // it calls the Car constructor

//DATA ACCESS

// array = arr[0] , arr[1] - indexing 

// "hello" . str.charAt(0) , str[0] 

// Class data Access?
// 1. We cant directly access data in class.apply
// 2. Create object for that class , then access data using the object. 
// 3. Using dot operator. objectName.propertyName

AUDI.wheels = 4;
AUDI.engine = 2;
AUDI.color = "Blue";
AUDI.modal = "Audi-8956";

BMW.engine = 1;
BMW.color = "Red";
BMW.modal = "BMW-8956";

console.log(BMW)

AUDI.EngineStart(5);

// console.log(AUDI.engine)
// console.log(AUDI)


// data in objects - key values pairs

// { 
//     wheels(key): 4(value),
//     engine: 2,
//     color: 'Blue', 
//     modal: 'Audi-8956' 
// }


// let num = 10;
// console.log(num)
// [3,4,5,56]


// constructor(keyword) - special function - Used to create object for the class ( variables )


// ES20

//library & students


// Method 2 for Object creation - OBJECT LITERAL (without class)


let student = { firstName : "balaji", lastName : "K", email : "3hR9S@example.com",


    fullName : function(){
        return this.firstName + " " + this.lastName
    }
}

// Registration form

let firstName = "balaji";

let lastName = "k";

let email = "3hR9S@example.com";

// ["balaji","k","3hR9S@example.com"]

class Student{
    constructor(firstName , lastName , email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    fullName(){
        return this.firstName + " " + this.lastName
    }
}

let student1 = new Student("balaji" , "k" , "3hR9S@example.com");
// let student1 = new Student("balaji" , "k" , "3hR9S@example.com");

student1.firstName = "balaji";
student.firstName = "balajik";

// console.log(student1)


let obj = {
    firstName : "balajik",
    lastName,
    email
}

// sendingtobackedn(obj)

// console.log(obj)


// Accessing data in class

// 1. Using object 

// 2. If Static data, then we can access through the class

class Fruit{

    static color = "red";

    static name() {
        console.log("hello")
    }

}

console.log(Fruit.color)
Fruit.name()