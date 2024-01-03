//Functions

// Block of code that performs a specific task, can be invoked whenever needed.

// function is a reserved keyword

// Function Definition                                 Function Call or Function invoked


// function functionName()                                 functionName();
// {
// //do some work
// }

// function functionName( paraml, param2 ...) 
// {
// //do some work
// }

function myfunction()
{
    console.log("Function Call");
    console.log("YEYEYYEY");
}

myfunction();
myfunction();


function myfunction2(msg) //Here msg is parameter -> input
{
    console.log(msg);
}

myfunction2("\nI am learnning JS"); //Arguments


// Function to calculate sum

function addition(num1 , num2)
{
    // num1 and num2 are local variable.
    sum = (Number(num1) + Number(num2));
    return sum;
    console.log("I can't write anything after this hmmmmmmmmmmmmmmmmmm.")
}

// let a = prompt("Enter A Number :");
// let b = prompt("Enter A Number :");

let val = addition(10,20);

console.log("\nAddition of Value is : " , val);


console.log("\n");


// Arrow Functions

// Compact way of writing a function

// const functionName = ( paraml, param2 .) => {
    //do some work
// }

console.log("Arrow Function : ");

const arrowSum = ( a, b ) => {
    console.log(a + b);
};

arrowSum(10, 10);


const arrowMul = ( a, b ) => {
    console.log(a * b);
};

arrowMul(10,10);


// Practice Question

// Create a function using the "function" keyword that takes a String as an argument &
// returns the number of vowels in the string.

function countVowels(str)
{
    let count = 0;
    for(const char of str)
    {
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U')
        {
            count++; 
        }
    }
    console.log(count);;
}

console.log("\n");

countVowels("Iron Man");

console.log("\n");

countVowels("AEIOU aeiou");
// let str = prompt("Enter a String : ");

console.log("\n");


console.log("\n");

// forEach Loop in Arrays (It is only used for arrays not for strings) 

// Three Parameter
// value index array val idx arr

// arr.forEach( callBackFunction )

// CallbackFunction : Here, it is a function to execute for each element in the array

// A callback is a function passed as an argument to another function.

// arr.forEach( ( val ) {
    //     console.log(val);
    //  })
    
    
let arr = [1, 2, 3, 4, 5];
    
arr.forEach(function printValue(val) //val meanning Value of each index
{
    console.log(val);
})

console.log("\n");

let arr2 = ["gujarat","Rajasthan","pune", "Jammu Kashmir"];

arr2.forEach(function printValue(val) //val meanning Value of each index
{
    console.log(val.toUpperCase());
})  

console.log("\n");

arr2.forEach(function printValue(val, idx) //val meanning Value of each index
{
    console.log(val.toUpperCase() , idx);
})  

console.log("\n");

arr2.forEach(function printValue(val, idx, arr) //val meanning Value of each index
{
    console.log(val.toUpperCase() , idx , arr);
})  

console.log("\n");


//ForEach Loop is a High Order Function/Methods.

// High Order Function/Methods Meanning we take another functions as a paramter or return.

//In above example function printValue use toUpperCase function.....


console.log("\n");
console.log("\n");
console.log("\n");

// Practice Question
// For a given array of numbers, print the square of each value using the forEach loop.

let number = [1,2,3,4,5,6,7,8,9];

number.forEach((num) => 
{
    console.log(num * num);
})  

console.log("\n");
//OR

let calcSquare = (num) => 
{
    console.log(num * num);
}  

number.forEach(calcSquare);



console.log("\n");
console.log("\n");
console.log("\n");

// Some More Arrays Methods

// Map

// Filter

//Reduce

// Map is similar to forEach loop.

// The difference between the Map and ForEach loop is Map create the new array

// Creates a new array with the results of some operation. 
// The value its callback returns are used to form new array


// arr.map( callbackFnx( value, index, array ) )

let nums = [1,2,3,4];

nums.map((val) => 
{
    console.log(val);
});

// When you are using returns store it in a variable and then call it.

let newVal = nums.map((val) => 
{
    return val * val;
});

//Map doesn't change the original array.
console.log(newVal);
console.log(nums);



console.log("\n");
console.log("\n");
console.log("\n");


// Filter Methods 

// Creates a new array of elements that give true for a conditionlfilter.
// Eg: all even elements

let evenArr = arr.filter( ( val ) => 
{
    return val % 2 === 0;
})

console.log(evenArr);


console.log("\n");
console.log("\n");
console.log("\n");

// Reduce

// Performs some operations & reduces the array to a single value. It returns that single value.

const output = arr.reduce((res, curr) => 
{
    return res + curr;
})

console.log(output);



console.log("\n");
console.log("\n");
console.log("\n");

// Practice Question
// We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks = [15,84,52,4,5,90,91,92,100,45,105,45,92,94,96,93];

let topper = marks.filter((val) => 
{
    return val > 90;
})

console.log(topper);

console.log("\n");
console.log("\n");
console.log("\n");

// Take a number n as input from user. Create an array of numbers from 1 to n.

// Use the reduce method to calculate sum of all numbers in the array.

// Use the reduce method to calculate product of all numbers in the array.


let n = prompt("Enter a number");

let ar = [];

for(let i = 1; i <= n ; i++)
{
    ar[i-1] = i;
}

console.log(ar);

console.log("\n");

let sum_array = ar.reduce((res, curr) => 
{
    return res + curr;
})

console.log("Sum Of Array : " , sum_array);

console.log("\n");

let mul_array = ar.reduce((res, curr) => 
{
    return res * curr;
})

console.log("Multiplication Of Array : " , mul_array);