

// Arrow function

// it reduces the syntax 

const sum = (a,b)=>{
    console.log(a+b)
}

// sum(2,5)

const sum2 = (a,b)=>console.log(a+b)

// sum2(2,5)

function add(a){
    console.log(a+4)
}
// add(2)

const sum3 = a => console.log(a+4)
// sum3(2)

const sum4 = () => console.log("Hello World")
// sum4()

const sum5 = () => 5;
// console.log(sum5())

function add(){
    return 5;
}

console.log(add())



class Car{

    constructor(){
        this.books = "hello";
        this.engine = 3;
    }

    name() {
        this.books = "world";
    }

}

let obj = new Car();
// obj.name();

// console.log(obj.books)


const Person = {
    name : "balaji",
    age : 22,
    email : "3hR9S@example.com",

    greet1 : function(){
        let a = 10;
        console.log("hello" + this.name)
    },
    greet : ()=>{
        console.log("hello" + this.name)
    }
}

// Person.greet()

