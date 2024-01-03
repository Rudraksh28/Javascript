// Attributes

// • getAttribute( attr ) to get the attribute value

// • setAttribute( attr, value ) to set the attribute val th

// Style
// • node.style


// • getAttribute( attr ) to get the attribute value
let div = document.querySelector("div");
console.log(div);
console.log("\n");

console.log("Div Id Attribute Name : ");
let id = div.getAttribute("id");
console.log(id);

console.log("Div PlaceHolder Attribute Name : ");
let aria_placeholder = div.getAttribute("aria-placeholder");
console.log(aria_placeholder);

console.log("Div Name Attribute Name : ");
// let name = div.getAttribute("name");
console.log(div.getAttribute("name"));

console.log("\n");
let p = document.querySelector("p");
console.log(p);

console.log("Paragraph class Attribute Name : ");
let para = p.getAttribute("class");
console.log(para);


// • setAttribute( attr, value ) to set the attribute val th

console.log("SetAttribute : ");
console.log(p.setAttribute("class", "Stank"));



// Style
// • node.style
console.log("Div Style");
console.log(div.style);


console.log("\nParagraph Style");
console.log(p.style);


//To modify the style....

let div2 = document.querySelector("div");

div2.style.backgroundColor = "green"; //Change background to green

div2.style.backgroundColor = "purple"; //Change background to purple

// div2.style.visibility = "hidden"; //Change visibility to hidden

div2.style.fontSize = "26px"; //change fontSize of div.

div2.innerText = "Hello"; //Modify the text.


// DOM Manipulation

// Insert Elements

// let el = document.createElement("div")

// • node.append( el )     //adds at the end of node (inside)
// • node.prepend( el )    //adds at the start of node (inside)
// • node.before( el )     //adds before the node (outside)
// • node.after( eI )      //adds after the node (outside)

let new_button = document.createElement("button");
new_button.innerText = "Send";
console.log(new_button);

let div3 = document.querySelector("div");

// div3.append(new_button);
// div3.prepend(new_button);
div3.before(new_button);
p.after(new_button);

let new_heading = document.createElement("h1");
new_heading.innerHTML = "<i>Hi How are you? </i>";

document.querySelector("body").prepend(new_heading);



// Delete Element

// node.remove() //Remove the node

div3.remove();

p.remove();

new_button.remove();

// new_heading.remove();


console.log("\n");
console.log("\n");
console.log("\n");

// Practice Question

// Question 1

// Create a new button element. Give it a text "click me", background color of red & text color of white.

// Insert the button as the first element inside the body tag.


let button = document.createElement("button");

button.innerText = "Click Me";

button.style.backgroundColor = "red";

button.style.color = "white";

document.querySelector("body").prepend(button);


// Question 2

// Create a <p> tag in html, give it a class & some styling.

// Now create a new class in CSS and try to append this class to the <p> element.

// Did you notice, how you overwrite the class name when you add a new one?

// Solve this problem using classList.

