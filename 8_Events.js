// Events in JS

// The change in the state of an object is known as an Event

// Events are fired to notify code of "interesting changes" that may affect code execution.


// Mouse events (click, double click etc.)

// Keyboard events (keypress, keyup, keydown)

// Form events (submit etc.)

// Print Events & many more

//Inline Events is in 8_events.html...


// External Events in JS.....[My own words.... Same like external css....... We write css in different fil...]

// node.event = () =>
// {
//     //handle here
// }

let btn1 = document.querySelector("#btn1");

btn1.onclick = (e) =>
{
    console.log(e);
    //When you the expand the console.log(e). Output in brosweer. You can see all this properties......
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
    console.log("Button was Clicked.");
};

let btn2 = document.querySelector("#btn2");

btn2.ondblclick = () =>
{
    console.log("Button Was Clicked 2 Times");
};

let div = document.querySelector("div");

div.onmouseover = (e) =>
{
    console.log("You are Inside Div");
    console.log(e); 
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
};


// If we write the same event for any node in

// Inline handle           Js Handle

//Priority will be given to the JS Handle.

// The event we written in JS Handle will be run not Inline Handle.......




// Event Object

// It is a special object that has details about the event.

// All event handlers have access to the Event Object's properties and methods.

// node.event = (e) => {
    //     //handle here
//     e.target, e.type, e.clientX, e.clientY
// }

//Example is in line 30.........


//Inline Handler disadvantage is it's look very much messy.....

//JS handler disadvantage is if we write the JS handler two times it will be overiiden.

///Example


//Now the above btn2.ondblclick function will not perform. 

// This is the diadvantage of JS Handler

btn2.ondblclick = () =>
{
    console.log("I clicked the button 2 times.");
};

//TO overcome this we use Event Listeners....(In event listerner we can perform both function.....)



// Event Listeners

// node.addEventListener( event, callback ) //callback is a function.

// node.removeEventListener( event, callback )

// *Note : the callback reference should be same to remove

let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", (evt) => {
    console.log("Button 3 Was Clicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);    
});

btn3.addEventListener("click", (evt) => {
    console.log("\nButton 3 Was Clicked handler 2");    
});

const  handler3 = () => { //can't use let.......
    console.log("\nButton 3 Was Clicked handler 3");    
};

btn3.addEventListener("click",handler3); 

//this is how to remove..............................................

btn3.removeEventListener("click", handler3);


console.log("\n");
console.log("\n");
console.log("\n");

// Practice Question


// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.


btn4 = document.querySelector("#btn4");

let current_mode = "light";

// let body = document.querySelector("body");

// const mode = () => 
// {
//     if(current_mode === "light")
//     {
//         current_mode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }
//     else
//     {
//         current_mode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }

//     console.log(current_mode);

// }

//OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR OR 

//Using ClassList

let body = document.querySelector("body");

const mode = () => 
{
    if(current_mode === "light")
    {
        current_mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else
    {
        current_mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(current_mode);

}

btn4.addEventListener("click", mode);





//Homework 2


let body2 = document.querySelector("body");

const mode2 = () => 
{
    if(current_mode === "light")
    {
        current_mode = "dark";
        body2.classList.add("dark");
        body2.classList.remove("light");
    }
    else
    {
        current_mode = "light";
        body2.classList.add("light");
        body2.classList.remove("dark");
    }

    console.log(current_mode);

}

div.addEventListener("mouseover", mode2);