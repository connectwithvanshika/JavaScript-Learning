
// *My code
// calculate sum of numbers from 1 to 5;
let sum = 0;
for(let i = 1;i<=5;i++){
    sum+=i;
}
console.log(sum);


// calculate sum of numbers from 1 to n 
let sumnum = 0;
let n = 6;
for (let i = 1;i<=n;i++){
    sumnum+=i;
}
console.log(sumnum); 

// i is defined only till block code when used with let keyword.

// while loop in js
// i = 1 ;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// do while loop in js - runs at least once
let i = 1;
do{
    console.log(i);
    i++;

}
while(i<=5);
// in do while we put a semicolon after while statement


// for of loop 
// used to loop on arrays and strigs 

let str = "Vanshika";
for (let i of str){
    console.log(i);
}

// finding length of string 
let str1 = "Vanshika";
let size = 0;
for(let i of str1){
    console.log(i)
    size ++;
}
console.log(size);


// for in loop in js 
// used to loop through objects and arrays

let student  = {
    namee : "Vansh",
    standard : "seventh",
    rollno : 1234,
}

for (let key in student) {
    console.log(key)
}


let shoppingbag = {
    item1:"Shoes",
    item2:"Dress",
    item3:"Vegetables"
}
for (let key in shoppingbag){
    console.log(key)
}


// Print all even number from 0 to 100

// Method 1 
for (i=0;i<=100;i+=2){
    console.log(i)
}

// Method 2
for(i=0;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
}

// Print all odd numbers from 0 to 100
for (i=0;i<=100;i++){
    if(i%2!=0){
        console.log(i)
    }
}

let student_marks = {
    vanshika :100,
    vansh : 10000,
    bhuvi : 10000000
}
for (let keys in student_marks){
    console.log(student_marks[keys])
}



let student_marks1 = {
    vanshika :100,
    vansh : 10000,
    bhuvi : 10000000
}
for (let keys in student_marks1){
    console.log(keys)
}

