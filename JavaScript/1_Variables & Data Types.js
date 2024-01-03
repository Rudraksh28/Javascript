//Question

// 1. How to print nul value.

//Javascript is a dynamically type language means we don't need to tell what type of data we are storing in variable.
//console.log() function is commonly used for debugging purposes to print messages, values, or information to the browser's console.

console.log("Hmm OK");
console.log("I am learning JavaScript");
console.log("OKOKOKOKOK");

G = 5;
g = 10;

console.log(G);
console.log(g);

// Variable Rules
// • Variable names are case sensitive; "a" & "A" is different.
// • Only letters, digits, underscore( _ ) and S is allowed. (not even space)
// • Only a letter, underscore(-) or S should be 1st character.
// • Reserved words cannot be variable names.

Your_name = "Tony Stark"
console.log("\nYour Name :" , Your_name);

age = 24;
console.log("\nYou Age = " , age);

price = 145.23;
console.log("\nTotal Price = " , price);

//Bollean (True or false)
isFollow = false;
console.log(isFollow);

//Null is special value and it has null value and know what the value is
x = null;
console.log("\n" , x);

//In Underfined we don't know what it contain.
y = undefined;
console.log("\n" , y);

// let, const & var

// var : Variable can be re-declared & updated. A global scope variable.
// let : Variable cannot be re-declared but can be updated. A block scope variable.
// const : Variable cannot be re-declared or updated. A block scope variable.

// var : Variable can be re-declared & updated. A global scope variable.
//It is not a good option to store a variable.
var age = 24;
var age = 59;
var age = 86;
console.log("\n");
console. log (age);

// let : Variable cannot be re-declared but can be updated. A block scope variable.
let Age = 24
Age = 59;
Age = 86;
console.log("\n");
console. log (Age);

// const : Variable cannot be re-declared or updated. A block scope variable.
const aGe = 18;

//We cannot re-declared and update.
//Must intialize a value otherwise it give error.
// aGe = 59;
// aGe = 86;

console.log("\n");
console.log (aGe) ;


let a;
console.log("\n");
console.log(a); //It will give output undefined.


//Data Types in JS (JavaScript)
//Number, String, Boolean, Undefined, Null, Biglnt, Symbol (Primitive types)

//Non Primitive Types are :- 

//Objects

//Objects are a collections of different values.

// And objects sub categories are :- (Arrays, Functions)

let agE = 24; //Number
let pricE = 1444.45;
//You can print the output just by writing agE in broswer console.
//You can check the type of data type using :-
//typeof variable_name.

let name = "tony" //String

let you = false; //Boolean

let z; //undefined
//typeof z is object.

//BigInt 
let ab = BigInt(65487); //Can be only written a number.
console.log(ab);
//Output will be 123n

let sy = Symbol("Hello"); //Can be only written Strings.
//Output will be Symbol(Hello!)


//We can access the object in two ways 

//First :-
//obj: key

//Second :-
//obj["key"]


//Non primitive types example are:-
const student = {
fullName: "Tony Stank",
age: 20,
cgpa: 8.2,
isPass: true,
};

console.log("\n");
console.log(student);

console.log("\n");
console.log(student.age);

console.log("\n");
console.log(student["age"]);

console.log("\n");
console.log(student["cgpa"]);


//Practice Question Q-1

//Create a const object called "product" to store information shown in the picture.

const product = {
    productName: "Ball Pen",
    productRating: 4,
    productIsdeal: true,
    productPrice: 270,
    productOffer: 5,
    };
    
    console.log("\n");
    console.log(product);
    console.log("Type of Product is :" , typeof product);

//Practice Question Q-2
//Create a const object called "profile" to store information shown in the picture(Instagram).

const instagram = {
    userName: "shradhakhapra",
    profile_isFollow: true,
    post: 195,
    follower: 569,
    following: 4,
    profileName: "Shradha Khapra",
    link: "@shradhakhapra",
    profession: "Enterpreneur",
    detail: "Apna College",

};

    console.log("\n");
    console.log(instagram);

    console.log("\n");
    console.log(typeof instagram);

    console.log("\n");
    console.log(typeof instagram["userName"]);