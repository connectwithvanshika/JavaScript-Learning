// let element = document.getElementById('myElement');
// let attributeValue = element.getAttribute('attributeName');
// console.log(attributeValue);


// Attributes 
// 1. getAttribute(attr) - to getv the value of attribute
// 2. setAttribute(attr,value) - to set the value of attribute 

// style 
// node.style 

// commands to get the attribute value 
let div = document.querySelector("div")
console.dir(div);

let id = div.getAttribute("id")
console.log(id)

let namee = div.getAttribute("name");
console.dir(namee);

let para = document.querySelector("p");
console.dir(para.getAttribute("class"));


// commands to set the attribute value

let set_value = document.querySelector("p")
console.dir(para.setAttribute("class", "newclass"));
// we can do above change dynamically also 

// commands to access style value 
let div1 = document.querySelector("div")
console.dir(div1)
console.log(div1.style)

div.style.backgroundColor = "purple"
div.style.fontSize = "40px"
div.innerText = "Hello, Vanshika "
// div.style.visibility = "hidden"

// console.log(div1.style) - will get inline style list 








