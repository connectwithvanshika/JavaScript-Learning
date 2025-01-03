// alert("Error occured in script.js");


// code below is just for feel 
function showMessage() {
    document.getElementById('message').innerText = 'Hello, JavaScript is working!';
  }
  

// see this code in console(browser)
console.log('Hello, JavaScript is working!');
console.log('Hello');
console.log('JavaScript is working!');


var a = prompt('Enter a number')
var istrue = confirm('Are you sure you want to leave this page?');

if(istrue){
    console.log("You are leaving this page");
}
else{
    console.log("You are staying on this page");
}

console.log("Your number is: " + a);


// displays the title of the document
document.title = "Hello, JavaScript!";


// add inline css by js in website 
document.body.style.backgroundColor = 'lightblue';




// diffence btw node js and script js 
// **Node.js**:
// - Runs on the server
// - Uses `require` to include modules
// - Can read/write files, handle network requests
// - Has global objects like `global` and `process`

// **Script.js**:
// - Runs in the browser
// - Uses `import` to include modules
// - Can interact with the web page (DOM)
// - Has global objects like `window` and `document`




