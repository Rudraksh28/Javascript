// Both are same window.document and document

//Dir is used to print it properties and method.

//If you write a window.console.log("Hello"); It will give the same output as it give with console.log("Hello");

//Window object is global.



// console.dir(window.document);

// console.dir(document);

// console.log(window.document);

// console.log("\n");

// window.console.log("HEllo");


//Not Working Here.......But work in broswer console. 

//If you script tag in head tag then it will print the value null or it give will give error.

// So to access elements of body you need to write script tag in body tag.

console.dir(document.body);

console.log(document.body);

console.log(document.body.childNodes[1]); //This will print the first node. In my case first node is <h1>DOM Learnning</h1>

document.body.style.background = "yellow"; //To change the background color using JS.

// document.body.childNodes[1].innerText = "Hmmmm";  //To change the text in the first tag or node.

console.log("\n");
console.log("\n");

//DOM Manipulation

// Selecting with id (Element) beacuse id is unique.

// document.getElementById("myId")

console.log("Id");

let heading = document.getElementById("Heading");

console.dir(heading);

console.log(heading);

console.log("\n");
console.log("\n");


// Selecting with class (Elements) because class is not unique.

// document.getEIementsByClassName("myCIass")

console.log("Class");

let class_demo = document.getElementsByClassName("Demo");

console.dir(class_demo);

console.log(class_demo);


console.log("\n");
console.log("\n");


// Selecting with tag

// document.getElementsByTagName("p");

console.log("Tag");

let tag_demo = document.getElementsByTagName("p");

console.dir(tag_demo);

console.log(tag_demo);



console.log("\n");
console.log("\n");


// Query Selector [In this we can passs id class tag. just write querySelector and we an access it.]

// document.querySeIector("myld I myCIass I tag")

// returns first element

// document.querySelectorAIl("myld I myCIass I tag")

// returns a NodeList

console.log("Query First Elements Demo");

let query_elements = document.querySelector("p"); //returns first element

console.dir(query_elements);

console.log(query_elements);


console.log("\n");


console.log("Query All Elements Demo");

let query_elements_all = document.querySelectorAll("p"); //returns first element

console.dir(query_elements_all);

console.log(query_elements_all);


console.log("\n");



console.log("Query Class Demo"); //to acces the class in the query class we have to write using [.]

let query_class = document.querySelector(".Demo"); //returns first element

console.dir(query_class);

console.log(query_class);



console.log("\n");



console.log("Query All Class Demo");

let query_class_all = document.querySelectorAll(".Demo"); //returns first element

console.dir(query_elements_all);

console.log(query_class_all);

console.log("\n");

console.log("\n");
console.log("\n");
//For Id there we use # in querySelector


console.log("Query ID Demo"); //to acces the class in the query class we have to write using [.]

let query_id = document.querySelector("#Heading"); //returns first element

console.dir(query_id);

console.log(query_id);



console.log("\n");
console.log("\n");


// Properties

// • tagName : returns tag for element nodes
// • innerText : returns the text content of the element and all its children
// • innerHTML : returns the plain text or HTML contents in the element
// • textContent : returns textual content even for hidden elements


// • tagName : returns tag for element nodes

console.log("Tag Name Demo");

console.log(query_id.tagName);


console.log("\n");


// • innerText : returns the text content of the element and all its children

console.log("Inner Text Demo");

console.log("\n");

let div = document.querySelector("div");

console.dir(div.innerText);


console.log("\n");

// • innerHTML : returns the plain text or HTML contents in the element

console.log("Inner HTML Demo");

console.log("\n");

let div2 = document.querySelector("div");

console.dir(div2.innerHTML);


console.log("\n");


console.log("[We can also change the data of a text using innerText]");

console.log("\n");

console.dir(div.innerText = "Thor ka beta");


console.log("[We can also change the data of a HTML using innerHTML we can the the tag, we can add styles and more.]");

console.log("\n");

console.dir(div.innerHTML = "<div>Captain America</div>");



console.log("\n");
console.log("\n");


// • textContent : returns textual content even for hidden elements (It returns the content of hidden text.)


let hiddenText = document.querySelector("h1");

console.log(hiddenText.textContent);



console.log("\n");
console.log("\n");


// Practice Question

// Create a H2 heading - "Hello JavaScript". Append "from Apna College students" to this text using JS.

let h2_Heading = document.querySelector("h2");

console.dir(h2_Heading.innerText = "Hello JavaScript from apna college students.");

//Giving Output :- [object HTMLHeadingElement] Hello JavaScript from apna college student.
// h2_Heading.innerText = h2_Heading + " Hello JavaScript from apna college student.";


console.log("\n");
console.log("\n");


//Practice Question
// Question 2

// Create 3 divs with common class name - "box". Access them & add some unique text to each of them.


let div_demo = document.querySelectorAll(".box");

// console.log(div_demo);

// console.log(div_demo[0].innerText = "First Div Change");

// console.log(div_demo[1].innerText = "Second Div Change");

// console.log(div_demo[2].innerText = "Third Div Change");



// OR OR OR OR OR OR OR OR OR

let idx = 1;

for(div of div_demo)
{
    div.innerText = `New inner text ${idx}`;
    idx++;
}