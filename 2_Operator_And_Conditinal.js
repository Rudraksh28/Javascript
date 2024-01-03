/*Operators in JS

Used to perform some operation on data

Arithmetic Operators

+,-,*,/

• Modulus [%] (Answer will be remainder) 
• Exponentiation [**] (2 raised to 3 = 8)
• Increment [++] (a = a + 1) Two types of increment post-increment and pre-increment.
• Decrement [--] (a = a - 1) Two types of increment post-decrement and pre-decrement.

In post-...... - first assign the value then increment or decrement the value.

In pre-....... - first increment or decrement the value then assign the value. 

a and b are operands
+ is a operator

*/

let a = 5;
let b = 2;

console.log("\nArithmetic Operator");

console.log("\n Value of a = 5 and b = 2");
console.log("\n a + b = " , (a + b));
console.log("\n a - b = " , (a - b));
console.log("\n a * b = " , (a * b));
console.log("\n a / b = " , (a / b));
console.log("\n a % b = " , (a % b));
console.log("\n a ** b = " , (a ** b));

console.log("\n a++ = " , ( a++ ));
console.log("\n Value of a is :", a);

console.log("\n a-- = " , ( a-- ));
console.log("\n Value of a is :", a);


//Assignment Operators

// =    +=      -=      *=      %=      **= 

console.log("\nAssignment Operator");

console.log("\n Value of a = 5 and b = 2");

a += 4; //a = a + 4
console.log("\n a += ", a); 

a -= 4; //a = a - 4
console.log("\n a -= ", a); 

a *= 4; //a = a * 4
console.log("\n a *= ", a); 

a %= 4; //a = a % 4
console.log("\n a %= ", a); 

a **= 4; //a = a ** 4
console.log("\n a **= ", a); 


//Comparisn Operators

// Equal to [==]      Not Equal to [!=]       Equal to & type [===]           Not equal to & type [!==]

console.log("\nComparison Operator");

console.log("\n Value of a = 0 and b = 2");

console.log("\na == b : ", a == b);

console.log("\na != b : ", a != b);

console.log("\na === b : ", a === b);

console.log("\na !== b : ", a !== b);


//Logical Operator

//Logical AND [&&]          Logical OR [||]                 Logical NOT [!]

console.log("\nLogical Operator");

console.log("\n Value of a = 0 and b = 2");

let condition1 = a < b;

let condition2 = a == 0;

console.log("\ncondition1 && condition2 : ", condition1 && condition2);

console.log("\ncondition1 || condition2 : ", condition1 || condition2);

console.log("!condition1 : ", !condition1);



////Conditional

//if statement        if-else statement     if-else_if statement      Switch Statement

console.log("\nConditional Statement");

let age = 25;

if(age > 18)
{
    console.log("\nYou can vote");
}
else
{
    console.log("\nYou cannot vote");
}

console.log("\n\n");

let mode = "dark";
let color;

if(mode == "dark")
{
    console.log("Black");
}

if(mode == "light")
{
    console.log("Light");
}

console.log(color);


//Switch Statement

// switch (expression) {
//     case caseExpression1:
//     statements
//     case caseExpressior2:
//     statements
// .....
//     default: 
//     statements
// }


//Practice Question

// Ql. Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.

// console.log("\n\n");

// let number = prompt("Enter a Number : ");

// if(number % 5 == 0)
// {
//     console.log(number, ", It's a multiple of 5");
// }
// else
// {
//     console.log(number, ", It's not a multiple of 5");
// }

// Qs2. Write a code which can give grades to students according to their scores:
// 80-100, A
// 70-89, B
// 60-69, c
// 50-59, D
// 0-49, F

let marks = prompt("Enter Marks : ");
let grade;

switch(true)
{
    case (marks >= 80 && marks <= 100):
        grade = 'A';
        break;
    
    case (marks >= 70 && marks < 80):
        grade = 'B';
        break;

    case (marks >= 60 && marks < 70):
        grade = 'C';
        break;
    
    case (marks >= 50 && marks < 60):
        grade = 'D';
        break;

    case (marks >= 0 && marks < 50):
        grade = 'F';
        break;

    default:
        grade = "Invalid Score";
}

console.log("Grade : ", grade);
