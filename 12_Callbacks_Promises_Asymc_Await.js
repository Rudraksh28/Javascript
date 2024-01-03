// Topic To be covered
// async await >> promise chains >> callback hell


// Sync in JS

// Synchronous

// Synchronous means the code runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.

// Asynchronous

// Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, 
// which causes a delay in the Ul.

// Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.


// Synchronous Example
console.log("One");
console.log("Two");
console.log("Three");

// Output will be 
// One
// Two
// Three

// Asynchronous Example

// function hello()
// {
//     console.log("Hello");
// }

//Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or

// setTimeout(() =>
// {
//     console.log("Hello World!");
// }, 3000);

// setTimeout(hello, 2000); //timeout 2s = 2000ms

console.log("Four");
console.log("Five");
console.log("Six");

// Output will be 
// One
// Two
// Three
// Four
// Five
// Six
// After 2 second print
// hello


// Callbacks

// A callback is a function passed as an argument to another function.

// function sum(a, b)
// {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallBack)
// {
//     sumCallBack(a, b);
// }

// calculator(1, 2, sum); //Don't pass with function "()"...... in callbacks.

console.log("\n");
console.log("\n");
console.log("\n");

// Callback Hell

// Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
// (Pyramid of Doom)

// This style of programming becomes difficult to understand & manage.

// function getData(dataId, getNextData) 
// {
//     //2s
//     setTimeout(() => 
//     {
//         console.log("Data", dataId);
//         if (getNextData) 
//         {
//             getNextData () ;
//         }
//     },2000);
// }


//callback hell
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4) ;
//         });
//     });
// });

//This above the  code becomes diffcult to understand & manage.
//To solve this we use promises.

console.log("\n");
console.log("\n");
console.log("\n");

// Promises

// Promise is for "eventual" completion of task. It is an object in JS. 

// It is a solution to callback hell.

// let promise = new Promise( (resolve, reject) => {..})

//                          Function with 2 handlers

//  Resolve & reject are callbacks provided by JSON.

// Promise is Object.

// Write promise in object you will notice PromiseState, PromiseResult...

// Promise have 3 state 

// 1. Pending state

// 2. Fullfilled state [Resolved]

// 3. Rejected State 


// let promise = new Promise((resolve, reject) => //This resolve and reject functions are in-built in javascript.
// {
//     console.log("I am A Promise");
//     // resolve("Success");
//     // resolve(123);
//     reject("Some Error Occurred");
// })



// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     console. log ("data", dataId) ;
//     resolve ("success");
//     if(getNextData) {
//         getNextData();
//     }
//     }, 5000);
// });
// }

// let promise = getData(123);

// .then( ) & .catch( )

// promise.then( ( res ) => {...}) //the promise.then will only will exceute when it promise is fullfilled.

// promise.catch( ( err ) ) => {...}) //the prmouse.catch will only will execute when it promise is reject.

// const getPromise = () =>
// {
//     return new Promise((resolve, reject) => 
//     {
//         console.log("I am A Promise");
//         // resolve("Success");
//         reject("Error");
//     })
// }

// let promise = getPromise();

// promise.then((res) =>
// {
//     console.log("Promise Fullfilled", res);
// })
 
// promise.catch((err) =>
// {
//     console.log("Rejected", err);
// })

// Promise Chain 

function asyncFunc1()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            console.log("Data 1");
            resolve("Success");
        },4000);
    });
}

function asyncFunc2()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            console.log("Data 2");
            resolve("Success");
        },4000);
    });
}

// console.log("Fetching Data 1");

// let p1 = asyncFunc1();

// p1.then((res) =>
// {
//     console.log("Fetching Data 2");
//     let p2 = asyncFunc2();
//     p2.then((res) =>
//     {

//     })
// })

// Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or Or

// console.log("Fetching Data 1");
// asyncFunc1().then((res) =>
// {
//     console.log("Fetching Data 2");
//     asyncFunc2().then((res) =>{});
// });


function getData(dataId) 
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => 
        {
            console.log("Data", dataId);
            resolve("Success");
        },2000);
    });
}

getData(1).then((res) =>
{
    console.log(res);
    getData(2).then((res) =>{
        console.log(res);
        getData(3).then((res) =>{
            console.log(res);
            getData(4).then((res) =>{
                console.log(res);
            });
        });
    });
});




// Async-Await

// async function always returns a promise.

// async function myFunc() {...}

// await pauses the execution of its surrounding async function until the promise is settled.


async function hello()
{
    console.log("Hello World");
}


function api()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            console.log("Weather Data");
            resolve(200);
        },2000);
        
    });
}

async function getWeatherData()
{
    await api(); //1st call
    await api(); //2nd call
    await api(); //3rd call
}



function getData2(dataId) 
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => 
        {
            console.log("Data", dataId);
            resolve("Success");
        },2000);
    });
}

async function getdata4()
{
    console.log("Getting Data 200");
    await getData2(200);
    console.log("Getting Data 300");
    await getData2(300);
    console.log("Getting Data 400");
    await getData2(400);
}


// IIFE : Immediately Invoked Function Expression

// IIFE is a function that is called immediately as soon as it is defined.

// This will exceute automatically.

//This is used to called once and it is mostly used for async......await.

(async function ()
{
    console.log("Getting Data 1000");
    await getData2(1000);
    console.log("Getting Data 2000");
    await getData2(2000);
    console.log("Getting Data 3000");
    await getData2(3000);
})(); 




