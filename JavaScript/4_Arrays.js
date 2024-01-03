//Question Below the array is right?
    // let info = [ "rahul", 86, "Delhi" ];


// Arrays in JS
// It is Collections of items

// Create Array

// let heroes = [ "ironman", "hulk", "thor", "batman"];
// let marks = [96, 75, 48, 83, 66 1];
// const student_name = ["John", "Meet"]; 

//Print without using loop

let marvel = ["ironman", "thor", "hulk", "captain america"];
console .log(marvel);

console.log("\n");

console.log("Accessing first SuperHero usin indices(index) ");
console.log(marvel[0]);

console.log("\n");

//Array are mutable but strings are not mutable.

str = "hello";
console.log(str);

console.log("\n");
console.log("No Change in String because string are immutable");
console.log("str[0] = y");
str[0] = "y";
console.log(str);


console.log("\n");

//We can change Array Value using index.

marvel[0] = "Vision";
console.log(marvel);


//Print all elements of array //using for loop
console.log("\n\n");

console.log("Using For Loop");

console.log("\n");

let heroes= ["ironman", "thor", "hulk", "captain america"];

for( let i = 0; i < heroes. length; i++)
{
    console. log (heroes[i]);
}

console.log("\n");

//Print all elements of array //using for-of loop

console.log("Using For-If Loop");

for( let hero of heroes)
{
    console. log(hero);
}

console.log("\n");
//We can also use methods in for-of loop.
for( let hero of heroes)
{
    console.log(hero.toUpperCase());
}

console.log("\n");
console.log("\n");

//Practice Question

// Q-1. For a given array with marks of students -> [85, 97, 44, 37, 76, 601
// Find the average marks of the entire class.

let marks = [85,97,44,37,76,60];

let sum = 0;

for(let value of marks)
{
    sum = sum + value;
}

console.log("Total Marks", sum);

console.log("\n");

let avg = sum / marks.length;

console.log("Average : ", avg);

console.log("\n");
console.log("\n");
console.log("\n");




// Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let items = [250,645,300,900,50];

// for example first value is 300. 10%off is the offer. So 300/10 = 30. then minus 300 - 30 = 270.
// 270 is the answer.

let i = 0;
//Using for-of loop
console.log("Using For-Of Loop \n");
for(let val of items)
{
    // console.log(`Value of index  ${i} = ${val}`);
    let offer = val / 10; //Here 10 is a offer.
    items[i] = items[i] - offer; //After applying offer minus with the original value.
    console.log(`\n Value After Offer at index ${i} = ${items[i]}`);
    console.log("\nFinal Output\n")
    console.log("\n", items);
    i++;
}

// Using for loop

// for(let i = 0;i < items. length; i++)
// {
//     let offer = val / 10; //Here 10 is a offer.
//     items[i] = items[i] - offer; //After applying offer minus with the original value.
//     console.log(`\n Value After Offer at index ${i} = ${items[i]}`); 
// }

console.log("\n\n");

// Array Methods

// Push( ) : add to end

// Pop( ) : delete from end & return

// toString( ) : converts array to string

//Push

let foodItems = ["Apple","Orange","Mango"];

foodItems.push("Litchi","Tomato","Burger"); //We can add multiple elements ....

console.log("Push Operation [FoodItems] : ", foodItems);

//Pop

foodItems.pop(); // it will delete one element from end.

console.log("\nPop Operation [FoodItems] : ", foodItems);

// toString() 
console.log("\n");
console.log("toString() Demo : ",foodItems.toString());


// Concat( ) : joins multiple arrays & returns result

// unshift ( ) : add to start (Add to start [In push it add to end])

// shift( ) : delete from start & return (Remove from start [In pop it remove from end])

//Concat( )

console.log("\n");

let marvel_hero = ["Thor", "SpiderMan", "IronMan"];

let dc_hero = ["SuperMan","Batman","Flash"];

let hero = marvel_hero.concat(dc_hero);

console.log("Hero List : [Concat Demo] ", hero);

console.log("\n");

console.log(hero.toString());


// shift ( ) delete from start and return

console.log("\n");

let starts = marvel_hero.shift();

console.log("Delete from start : [Shift Demo] ", starts);

//Unshift() Add to start.

console.log("\n");

marvel_hero.unshift("Shaktiman");

console.log(marvel_hero);


marvel_hero.unshift("Speed");
marvel_hero.unshift("Wanda");
marvel_hero.unshift("Venom");
console.log("\n\n");
console.log(marvel_hero.toString());


// Slice( ) : returns a piece of the array [Don't change the original array]

    // slice( startldx, endldx )


// Splice( ) : change original array (add, remove, replace)

    // splice( startldx, delCount, newE11... )

console.log("\nSlice Demo don't change original array");
console.log("\nSlice Demo : " , marvel_hero.slice(1 , 3));
console.log("\nSlice Demo : " , marvel_hero.slice(0));


console.log("\nSplice Demo [change original array]");
console.log("\nSlice Demo : " , marvel_hero.splice(2 , 2, "Rocket", "ShangChi")); //Index Location 2 delete 2 elements add 2 elements.
console.log(marvel_hero);

//Add Elements
console.log("\n");
marvel_hero.splice(2 , 0, "Odin");
console.log(marvel_hero);

//Delete Elements
console.log("\n");
marvel_hero.splice(2 , 1);
console.log(marvel_hero);

//Replace Elements
console.log("\n");
marvel_hero.splice(2 , 1, "Odin ka beta");
console.log(marvel_hero);

//If we don't write anything in splice() nothing will be change. The array will be same as before. marvel_hero.splice().

console.log("\n");
console.log("\n");
console.log("\n");


// Practice Question

console.log("Practice Question")
console.log("\n");

// Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

// a. Remove the first company from the array

// b. Remove Uber & Add Ola in its place

// c. Add Amazon at the end 


// Remove the first company from the array

console.log("Remove the first company from the array");

let company = ["Bloommberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log("\nOriginal Array : " , company.toString());

console.log("\nUsing Shift");

console.log("\n");

console.log("Deleted Item : " , company.shift());

console.log("\nFinal Output Using Shift : " , company.toString());

console.log("\n");

console.log(company.unshift("Blommberg"));
console.log(company.toString());

console.log("\n");

console.log("Using Splice");

console.log("Deleted Items : " , company.splice(0 , 1));

console.log("\nFinal Output Using Splice : " , company.toString());

console.log("\n");

console.log(company.unshift("Blommberg"));
console.log(company.toString());

console.log("\n");
console.log("\n");
console.log("\n");

// b. Remove Uber & Add Ola in its place

console.log("Remove Uber & Add Ola in its place");

console.log(company.splice(2 , 1, "Ola"));

console.log("\nOutput : " , company.toString());

console.log("\n");
console.log("\n");
console.log("\n");


// c. Add Amazon at the end 
console.log("Add Amazon at the end");

console.log("\nAdd Using Push : " , company.push("Amazon"));

console.log("\nOutput : " , company.toString());

//We can also using splice.....