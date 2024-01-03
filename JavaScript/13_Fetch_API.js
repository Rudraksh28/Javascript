let para = document.querySelector(".hello");

let button = document.querySelector(".btn");

// API Stands for Application Programming Interface

// fetch API

// The Fetch API provides an interface for fetching (sendinglreceiving) resources.

// It uses Request and Response objects.

// The fetch() method is used to fetch a resource (data).



// let promise = fetch( url , [options] )


const url = "https://cat-fact.herokuapp.com/facts";

//Using Async
const getFacts = async() =>
{
    console.log("Getting Data.....");
    let response = await fetch(url);
    console.log(response); //JSON FORMAT
    console.log(response.status);
    let data = await response.json();
    console.log(data);
    console.log(data[0]);
    console.log(data[0].text);
    para.innerText = data[0].text;
    para.innerText = data[1].text;
    para.innerText = data[2].text;
}


// Using Promise Chainning
// function getFacts()
// {
//     fetch(url).then((response) =>
//     {
//         return response.json();
//     }).then((data) =>
//     {
//         console.log(data);
//         para.innerText = data[3].text;
//     })
// }

button.addEventListener("click", getFacts);

// Understanding Terms

// AJAX is Asynchronous JS & XML

// JSON is JavaScript Object Notation

// json() method : returns a second promise that resolves with the result of parsing the

// response body text as JSON. (Input is JSON, output is JS object)



// Requests & Response

// HTTP Verbs

// Response Status Code

// *HTTP response headers also contain details about the responses, such as content type, HTTP status code etc.


