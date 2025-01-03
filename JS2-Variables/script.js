// variables in js 
let nam_of_person = "vanshika";
let x = null;
let y = undefined;
let isallowed= true;
let isnotallowed= false;
console.log(nam_of_person);
console.log(x);
console.log(y);
console.log(isallowed);
console.log(isnotallowed);


// let , var and const are used to declare variables, but they have different behaviors and scopes.

// 1. **`var`**:  
//    - Old way to declare variables.  
//    - Can be updated and re-declared.  
//    - Has **function scope** (accessible inside the function where it's defined).  
//    - Doesn't respect block scope (can "leak" outside of blocks like `if` or `for`).  

// 2. **`let`**:  
//    - Modern way to declare variables.  
//    - Can be updated but **not re-declared** in the same scope.  
//    - Has **block scope** (only accessible within `{}` where it's defined).  

// 3. **`const`**:  
//    - Used to declare constants (values that don't change).  
//    - Cannot be updated or re-declared.  
//    - Has **block scope**, like `let`.  

// Use `let` and `const` for modern, safer code!



// below example shows that variables can be re-declared using var keyword
var student_name = "vanshika";
var student_name = "vansh";
var student_name = "vanshi";
console.log(student_name);

// let can not be re-declared , below example shows error
// let student_name1 = "vanshika";
// let student_name1 = "vansh";

// example of updation of variable using let keyword
let student_name2 = "vanshika";
student_name2 = "vansh";
student_name2 = "vanshikaaaa";
console.log(student_name2);

// const can not be updated nor re-declared , below example shows error
// const student_name3 = "vanshika";
// student_name3 = "vansh";
// console.log(student_name3);

// correct example of const
const pi = 3.14;
console.log(pi);

// let declarations may not be initialized with a value, but they can be assigned a value later on. , but const must be initialized with a value.

// example of let

// let a:
// console.log(a); // undefined

let a;
a = 100;
console.log(a); // 100

// example of const
// const b:
// b = 199
// console.log(b);

// Primitive data types in JavaScript

// String
let greeting = "Hello, world!";
console.log(greeting); // Output: Hello, world!

// Number
let age = 25;
console.log(age); // Output: 25

// Boolean
let isJavaScriptFun = true;
console.log(isJavaScriptFun); // Output: true

// Null
// type of null is object 
let emptyValue = null;
console.log(emptyValue); // Output: null

// Undefined
let notAssigned;
console.log(notAssigned); // Output: undefined

// Symbol
let uniqueId = Symbol("id");
console.log(uniqueId); // Output: Symbol(id)



// Object data types in JavaScript
const person = {
    firstName: "Vanshika",
    lastName: "Yadav",
    age:19,
    isStudent: true
};


console.log(person); // Output: { firstName: 'Vanshika', lastName: 'Yadav', age: 19, isStudent: true }
console.log(person.firstName); // Output: Vanshika
console.log(person['firstName']); // Output: Vanshika
person.age = 20; // Update the age property
console.log(person.age); // Output: 20

// type of null is object
console.log(typeof null); // Output: object

