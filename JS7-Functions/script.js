// Learning Functions in js 
// Function is a block of code that performs specific task 
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("World");
greet();


function myFunction(){
    console.log("Welcome to world of coding");
    console.log("Learning JS");
}
myFunction();
myFunction();
myFunction();
myFunction();


function new_function(msg,n){
    //parameter - input 
    console.log(msg,n);
}
new_function("I love js","haha") //argument 



// creating a function to sum two numbers 
function sum(a,b){
    console.log(a+b)
}
sum(1,9);


// creating a function to find modulo of two numbers , and returning the output  
function find_modulo(x,y){
    // parameters act as local variables , they have block scope , here x and y !!
    s = (x%y)
    return s
}
let value = find_modulo(1033,10);
console.log(value)



// Learning Arrow function
const arrowGreet = (name) => {
    console.log("Hello from arrow function, " + name + "!");
};

arrowGreet("World");


// sum function 
function sum(a,b){
    console.log(a+b)
}
sum(1,9);

// sum arrow function 

const arrow_sum = (a,b) => {
    console.log(a+b);
};
arrow_sum(10,5);


// multiplication arrow function 
const multiplication = (c,d) =>{
    console.log(c*d);
};
multiplication(2,3)
// here multiplication is a function variable 


// division arrow function returning the value 
const division = (g,h) =>{
    return g/h
};
division(300,300)

const printHello = () =>{
    console.log("Say Hello To Me")
};
printHello() ;




