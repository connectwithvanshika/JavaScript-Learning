// Loops in JS 
// For loop
for (let i = 0; i < 5; i++) {
    console.log('For loop iteration:', i);
}

// While loop
let j = 0;
while (j < 5) {
    console.log('While loop iteration:', j);
    j++;
}

// Do-while loop
let k = 0;
do {
    console.log('Do-while loop iteration:', k);
    k++;
} while (k < 5);

// For-of loop (used with arrays)
const array = ['a', 'b', 'c'];
for (const element of array) {
    console.log('For-of loop element:', element);
}

// For-in loop (used with objects)
const object = {a: 1, b: 2, c: 3};
for (const key in object) {
    console.log(key);
}

// *My code
// For loop 
for (let i = 0; i<100; i++){
    console.log(i);
}

// for in loop 
let obj = {
    name:"Vanshika" , 
    role : " Web Developer",
    company : "Microsoft"
}


// prints both keys and values 
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key , element)
        
    }
}
// prints only keys 
for (const key in obj){
    console.log(key)
}

// for of loop 
for (const i of "Vanshika") {
    console.log(i)  
}

// while loop 

let i = 0;
while (i<=10){
    console.log(i);
    i++;
}

// do while loop 
let z = 10;
do {
    console.log(z);
    i++;
} while (z<6);