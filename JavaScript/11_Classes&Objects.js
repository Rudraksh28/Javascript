// Classes and Object.

// A javaScript object is an entity having state and behavior (properties and method).

// JS objects have a special property called prototype.

// We can set prototype using __ proto __

// *If object & prototype have same method, objects method will be used.



// A javaScript object is an entity having state and behavior (properties and method).
//Create Direct way of Object

const student = 
{
    fullName : "John", //Properties
    marks: 94.4,
    printMarks: function() //Methods.
    {
        console.log("Marks = ", this.marks); //this.marks means student.marks...
    },
};

console.log(student);
console.log(student.fullName);
console.log(student.marks);
console.log(student.printMarks());



// JS objects have a special property called prototype.

//Create array & see in the broswer you will list of your item, below length you will see Prototype.
// In that protoype you will see many methods of array
// But we never define any of the method in our array
// Many method are defined in prototype and object inherits the method from them, by default.
// JS objects have a special property called prototype.

let arr = ["apple", "mango", "orange"];
console.log(arr);
console.log(typeof arr);



// We can set prototype using __ proto __

const employee = 
{
    calcTax()
    {
        console.log("Tax rate is 10%");
    },
};

const karanArjun =
{
    salary: 50000,   
};

const karanArjun2 =
{
    salary: 60000,   
};
const karanArjun3 =
{
    salary: 70000,   
};
const karanArjun4 =
{
    salary: 80000,   
};

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;

//In broswer maximize the karanarjun you will calcTax function. 
console.log(karanArjun);
console.log(karanArjun.calcTax());



// *If object & prototype have same method, objects method will be used.

const karanArjun5 =
{
    salary: 90000,   
    calcTax()
    {
        console.log("Tax rate is 20%");
    },
};

karanArjun5.__proto__ = employee;

console.log(karanArjun5);
console.log(karanArjun5.calcTax());







// Classes in JS 

// Class is a program-code template for creating objects. [Blueprint]

// Those objects will have some state (variables) & some behaviour (functions) inside it.

// class MyClass {

// constructor() {...}

// myMethod( ) {...} 

// }


// letmyObj = new MyClass();    


class toyotaCar
{
    constructor()
    {
        console.log("Creating new object.");
    }
    start()
    {
        console.log("Start");
    }
    
    stop()
    {
        console.log("Stop");
    }

    setBrand(brand)
    {
        this.brand = brand;
    }

    getBrand()
    {
        console.log(this.brand);
    }
}

let fortuner = new toyotaCar(); //constructor
let lexus = new toyotaCar(); //constructor

// console.log("setBrand demo done...");  
// fortuner.setBrand("Fortuner");

// console.log("\ngetBrand demo");  
// fortuner.getBrand();



// Constructor( ) method is :

// • automatically invoked by new

// • initializes object

// class MyClass {

// constructor() {...}

// myMethod() {..}
// }

//...................................................Learn More about constructor..............................


// Inheritance in JS

// inheritance is passing down properties & methods from parent class to child class.

// class Parent {

// }

// class Child extends Parent {

// }


// If child and parent have same method, child's method will be used. [Method Overridingl


class Person
{
    constructor()
    {
        this.species = "Homo Sapiens";
    }
    eat()
    {
        console.log("Eat");
    }
    
    sleep()
    {
        console.log("Sleep");
    }

    work()
    {
        console.log("Do Nothing");
    }

}

class Engineer extends Person 
{
    constructor()
    {
        super(); //to invoke parent class constructor 
    }
    //we can also use super for a variable.
    work()
    {
        super.eat(); //to invoke parents method.
        console.log("Solve problems, build something.");
    }    
}

let obj = new Engineer;
console.log(obj.work());
console.log(obj.eat());
console.log(obj.sleep());


// super Keyword

// The super keyword is used to call the constructor of its parent class to access the parent's
// properties and methods.

// super( args ) // calls Parent's constructor

// super.parentMethod( args )

// Demo of super is in 219-234.

console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");

// Practice Question

// You are creating a for your college. Create a class User with 2 properties, name & email. 

// It also has a method called viewData( ) that allows user to view website data.

class User
{
    constructor(name, email)
    {
        this.name = name;
        this.email = email;
    }   
    
    viewData()
    {
        console.log("Name :", this.name);
        console.log("Email :",this.email);
    }
}

let Student1 = new User("John", "john234@gmail.com");
let Student2 = new User("Salman", "salman123@gmail.com");

console.log(Student1.viewData());
console.log(Student2.viewData());


console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");

// Practice Question Number 2

// Create a new class called Admin which inherits from User. 
// Add a new method called editData to Admin that allows it to edit website data.


class Admin extends User
{
    constructor(name, email)
    {
        super(name, email);
    }
    editData()
    {
        console.log("Data Change");
    }
}

let main = new Admin("hello", "hello123@gmail.com");





// Error Handling

// try-catch

// try {
    // ... normal code

//  } catch ( err ) { //err is error object
    // ... handling error

// }

let a = 5;
let b = 10;

console.log("a = ",a);
console.log("b = ",b);
console.log("a + b = ",a + b);

try
{
    console.log("a + b = ",a + c);
}

catch(err)
{
    console.log(err);
}

console.log("a = ",a);
console.log("b = ",b);
console.log("a + b = ",a + b);