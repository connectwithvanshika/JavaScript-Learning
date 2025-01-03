// DOM 

// Dom tree nodes 
// 1. text node 
// 2. comment nodes 
// 3. element nodes

// read about 
// 1. first child
// 2 . last child 
// 3  children 


console.dir(window.document)
console.dir(document.body)
console.dir(document.head)
console.dir(document.fonts)
console.dir(document.body.childNodes)


// changes made in console window on web 
// document.body.style.background = "pink";
// 'pink'

// Change the background color of the body
// document.body.style.backgroundColor = "lightblue";

// Change the text content of an element with id "header"
// document.getElementById("header").textContent = "Hello, World!";

// Add a new paragraph to the body
// let newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a new paragraph.";
// document.body.appendChild(newParagraph);

// Change the font size of all elements with class "text"
// let textElements = document.getElementsByClassName("text");
// for (let element of textElements) {
    // element.style.fontSize = "20px";
// }

// Hide an element with id "footer"
// document.getElementById("footer").style.display = "none";


// DOM manipulation 

// 1. selectiong with Id 
let para = document.getElementById("para")
console.dir(para)


//2. selectiong with Class 
let classpara = document.getElementsByClassName("classPara")
console.dir(classpara)

//3. selectiong with tag name 
let tag = document.getElementsByTagName("p")
console.dir(tag)

//  DOM manipulation by Query selector 

//1. Accessing by tag 
let firstElement = document.querySelector("p")
console.dir(firstElement)

// by using all , it will return a node
let allelements = document.querySelectorAll("p")
console.dir(allelements)


// 2.BY class - Use (.)followed by the class name.
const button = document.querySelector('.btn');
console.dir(button)

// 3. BY ID - Use # followed by the ID name. 
let myid = document.querySelectorAll("#para")
console.dir(myid)

// DOM Manipulation Properties 

// 1. tagname - returns tag for element node
// 2. innerText - returns the text content of its element and all its children 
// 3. innerHTML - returns the plain text or HTML contents in the element 
// 4. textContent - returns textual content even for hidden elements 

let flowers = document.querySelector(".flowers")
console.log(flowers)
