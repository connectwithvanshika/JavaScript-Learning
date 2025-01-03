// Learning about inserting elements in js 

// 1. node.append() - adds at the end of node
// 2. node.prepend() - adds at the start of node
// 3. node.before() = adds before the node
// 4. node.after() - adds after the node

// Learning about deleting elements in js 
// 1. node.remove()

// First we create the element then we add it in dom 
let newbtn = document.createElement("button");
newbtn.innerText = "hello"
console.dir(newbtn);


// adding the elements 
let div = document.querySelector("div");
div.append(newbtn);


let div1 = document.querySelector(".mediv1");
div1.prepend(newbtn);

let div2 = document.querySelector(".mediv2");
div2.before(newbtn);

let newHeading = document.createElement("h1");
newHeading.innerText = "Introduction To Divs!!";

let body = document.querySelector("body")
body.prepend(newHeading)

// deleting the elements - here deleting a para 

let para = document.querySelector("p")
para.remove();


// read about append child and remove child 






