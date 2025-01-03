console.log("Learning operators and conditional statements in js")


// if else if else stataments in js 
// *My code
let a =19;

if(a>18)
    {
    console.log("You can go to the party");
}
else{
    console.log("You can not go to the party");
}

// if else else if ladder in js 
// *My code
let age = 25;

if (age < 13) {
    console.log("You are a child");
}
 else if (age >= 13 && age < 20) {
    console.log("You are a teenager");
}
 else if (age >= 20 && age < 65) {
    console.log("You are an adult");
}
else if (age == 25) {
    console.log("Null");
}

 else {
    console.log("You are a senior");
}


// notes on operators in js 
// Arithmetic Operators
let x = 10;
let y = 5;
console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Modulus

// Comparison Operators
console.log(x === y); // Strict equal to
// === also compares type of value along with the value itself 
// used to match both value and type 

let n ="vanshika";
let m = 98;
console.log(n === m);
// this code is returning false because type of value n and value m is not same 

console.log(x !== y); // Strict not equal to-not equal value and not equal type
console.log(x == y); // Equal to
console.log(x != y); // Not equal to
console.log(x > y); // Greater than
console.log(x < y); // Less than
console.log(x >= y); // Greater than or equal to
console.log(x <= y); // Less than or equal to

// Logical Operators
console.log(x > 5 && y < 10); // Logical AND
console.log(x > 5 || y > 10); // Logical OR
console.log(!(x > 5)); // Logical NOT

// Assignment Operators
let z = 10;
z += 5; // Equivalent to z = z + 5
console.log(z);
z -= 5; // Equivalent to z = z - 5
console.log(z);
z *= 5; // Equivalent to z = z * 5
console.log(z);
z /= 5; // Equivalent to z = z / 5
console.log(z);
z %= 5; // Equivalent to z = z % 5
console.log(z);


// Unary Operators

let num = 5;
console.log(num); // 5

// Unary plus (+)
let plusNum = +num;
console.log(plusNum); // 5

// Unary negation (-)
let negNum = -num;
console.log(negNum); // -5

// Increment (++)
num++;
console.log(num); // 6

// Decrement (--)
num--;
console.log(num); // 5

// Logical NOT (!)
let isTrue = true;
console.log(!isTrue); // false

// Typeof
console.log(typeof num); // "number"

// Delete
let obj = { name: "John", age: 30 };
delete obj.age;
console.log(obj); // { name: "John" }

let b = 5;
let v = 8;
console.log ("b-- = " , --b);