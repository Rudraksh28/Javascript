// Loops in JS

// Loops are used to execute a piece of code again & again

// for Loop

for(let i = 1; i <= 5; i++)
{
    console.log("YEYEYYE");
}

console.log("\n\n");

//Calculate sum 1 to 5

console.log("Calculate sum 1 to 5");

let sum = 0;

for(let s = 1; s <= 5; s++)
{
    sum = sum + s;
}

console.log(sum);

console.log("\n\n");


//Print 1 to 5

console.log("Print 1 to 5 Number");

for(let i = 1; i <= 5; i++)
{
    console.log(i);
}


//Infinite Loop
// for(let i = 1; i >= 0; i++)
// {
//     console.log(i);
// }

//While  Loop

//while(condition)
// {
        //do some work
// }
console.log("\n");
console.log("While Loop");
console.log("\n");
let z = 1;
while(z <= 5)
{
    console.log("z = ",z);
    z++;
}


//Do-while Loop

//do 
//{
      //do some work
// }
// while(condition);


let a = 50;
do
{
    console.log("TOony Stank");
    a++;
}
while(a <= 10);

console.log("\n");console.log("\n");console.log("\n");

//for-of loop [It use in string and in arrays] (It check each value example tony , it will each word t, o, n, y.)

// for(let val of strVar)
// {
        //do some work
// }

// It use in string and in arrays [It doesn't use for object].

//We don't need to worry about intialization, condition and updation.

//It's done automatically by for-of loop

console.log("For-Of Loop");

console.log("\n");

let str = "Tony Stark";

let size = 0;

for(let i of str)
{
    console.log("i = ", i);
    size++;
}

console.log("Total Length : ", size); 

console.log("\n");console.log("\n");console.log("\n");



//for-in loop 

//It used for object.

console.log("For-In Loop");

console.log("\n");

let student = {
name: "Rahul Kumar",
age: 20,
cgpa: 7.9,
isPass: true,
}

for (let key in student)
{
    console. log ("Key = ", key, "Value = ", student[key]);
}

console.log("\n\n\n");



// Practice Questions
// Ql. Print all even numbers from 0 to 100.

//Print all Number 0 to 100

for(let i = 0; i <= 100; i++)
{
    console.log(i);
}

console.log("\n\n\n");
console.log("\n\n\n");




for(let i = 0; i <= 100; i++)
{
    if(i % 2 == 0)
    {
        console.log("Even Number = ", i);
    }
}


console.log("\n\n\n");


// Qs2.Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.

let gameNumber = 25;

let Number = prompt("Guess the Game Number :");

while(gameNumber != Number)
{
    Number = prompt(" Wrong! Guess the Game Number :");
}

console.log("YESSSS You Entered the Right GameNumber");

console.log("\n\n\n");




// Strings in JS

// String is a sequence of characters used to represent text

// Create String

// let str = "Apna College";

// String Length

// str.length

// String Indices

// str[0], str[1], str[2]

console.log("\n\n\n");

//Template Literals
let specialString = `This is template literal ${64+3+2}`;
console.log(specialString);

console.log("\n");

let obj = {
    item: "pen",
    price: 10,
};

//Template Literal [` `] advantage
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log("\n");

//Without using template literals

console.log("The cost of", obj.item, "is", obj.price, "Rupees");


console.log("\n\n\n");


//String Methods in JS

// These are built-in functions to manipulate a string

// • str.toUpperCase( )
// • str.toLowerCase( )
// • str.trim( ) removes whitespaces


let string = "  Tony STack     JS                  ";

console.log("Original String : ", string);

console.log("\nUpperCase : " , string.toUpperCase());

console.log("\n");

console.log("Lowercase :", string.toLowerCase());

console.log("\n");

console.log("Trim : ", string.trim());

//String Method

// • str.slice(start, end?) returns part of string
// • strl.concat( str2 ) joins str2 with strl
// • str.replace( searchVaI, newVaI )
// • str.charAt( idx )

console.log("\n\n\n");

//Practice Questions

// Qsl. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.
// eg: user name = "shradhakhapra" , username should be "@shradhakhapra13"

let fullName = prompt("Enter a Full Name : ");

let userName = "@" + fullName + fullName. length;
console.log(userName);    

// console.log("FullName is ", userName);

// console.log("\n");

// console.log(`UserName is : @${userName}`);

// console.log(`\nLength of FullName is ${userName.length}`);