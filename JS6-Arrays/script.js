// Learning Arrays in JS 

// Arrays are used to store multiple values in a single variable.
// An array is a special variable, which can hold more than one value at a time.
// You can create an array using the array literal syntax or the Array constructor.



// Property are used to hold data or describe the state of the object,while method do some work 

// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Define an array of strings
let fruits = ["apple", "banana", "cherry"];

// Define a mixed array
let mixedArray = [1, "apple", true, null];

// Log the arrays to the console
console.log(numbers);
console.log(fruits);
console.log(mixedArray);

//**MY CODE**
// This is how we define arrays 
let marks = [99,98,97,96,100]
console.log(marks)
console.log(marks.length)
// index matters in arrays 

// Defining array of strings 
let princess = ["bella" , "cinderella" , "snow-white"]
console.log(princess)
console.log(typeof princess)

// type of array is object only 

// Array indices 
// arrays are mutable , can update the value while strigs are immutable 
let array1 = [97,98,99,90,55,23,79];
console.log(array1[2])
console.log(array1[3])
console.log(array1[4])
console.log(array1[5])
// updating array 
array1[4] = 100
console.log(array1[4])

// Looping over an array , or iterating over an array using for loop !!
for (let z = 0;z< array1.length;z++)
{
    console.log(array1[z]);
}

// Looping over an array using for of loop 
for (const i of princess) {
    console.log(i.toUpperCase());
}

// Example of iterating over an array using a for loop
let colors = ["red", "green", "blue", "yellow"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Example of iterating over an array using a for...of loop
let animals = ["cat", "dog", "elephant", "tiger"];
for (const animal of animals) {
    console.log(animal);
}

// Find avg of given marks 

let student_marks = [85,97,44,37,76,60];
let sum0 = 0
for (let value of student_marks){
    sum0+=value
   
}
let average = sum0/student_marks.length
console.log(`average marks of student is: ${average}`)



// Most frequently used array methods

// 1. push() - Adds one or more elements to the end of an array
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); // Output: [1, 2, 3, 4]

// 2. pop() - Removes the last element from an array
let arr2 = [1, 2, 3, 4];
arr2.pop();
console.log(arr2); // Output: [1, 2, 3]

// 3. shift() - Removes the first element from an array
let arr3 = [1, 2, 3, 4];
arr3.shift();
console.log(arr3); // Output: [2, 3, 4]

// 4. unshift() - Adds one or more elements to the beginning of an array
let arr4 = [2, 3, 4];
arr4.unshift(1);
console.log(arr4); // Output: [1, 2, 3, 4]

// 5. concat() - Merges two or more arrays
let arr5 = [1, 2];
let arr6 = [3, 4];
let arr7 = arr5.concat(arr6);
console.log(arr7); // Output: [1, 2, 3, 4]

// 6. slice() - Returns a shallow copy of a portion of an array
let arr8 = [1, 2, 3, 4];
let arr9 = arr8.slice(1, 3);
console.log(arr9); // Output: [2, 3]

// 7. splice() - Adds/Removes elements from an array
let arr10 = [1, 2, 3, 4];
arr10.splice(2, 1, 'a', 'b');
console.log(arr10); // Output: [1, 2, 'a', 'b', 4]

// 8. forEach() - Executes a provided function once for each array element
let arr11 = [1, 2, 3, 4];
arr11.forEach(element => console.log(element * 2)); // Output: 2, 4, 6, 8

// 9. map() - Creates a new array with the results of calling a provided function on every element
let arr12 = [1, 2, 3, 4];
let arr13 = arr12.map(element => element * 2);
console.log(arr13); // Output: [2, 4, 6, 8]

// 10. filter() - Creates a new array with all elements that pass the test implemented by the provided function
let arr14 = [1, 2, 3, 4];
let arr15 = arr14.filter(element => element > 2);
console.log(arr15); // Output: [3, 4]

// 11. reduce() - Executes a reducer function on each element of the array, resulting in a single output value
let arr16 = [1, 2, 3, 4];
let sum = arr16.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10

// 12. find() - Returns the value of the first element that satisfies the provided testing function
let arr17 = [1, 2, 3, 4];
let found = arr17.find(element => element > 2);
console.log(found); // Output: 3

// 13. findIndex() - Returns the index of the first element that satisfies the provided testing function
let arr18 = [1, 2, 3, 4];
let foundIndex = arr18.findIndex(element => element > 2);
console.log(foundIndex); // Output: 2

// 14. includes() - Determines whether an array includes a certain value among its entries
let arr19 = [1, 2, 3, 4];
let hasThree = arr19.includes(3);
console.log(hasThree); // Output: true

// 15. sort() - Sorts the elements of an array in place and returns the array
let arr20 = [4, 2, 3, 1];
arr20.sort();
console.log(arr20); // Output: [1, 2, 3, 4]



//**My Code**
// Push - add to end 
let wildanimals = ["pig" , "lion" , "tiger","rabbit" , "vanshika"];
wildanimals.push("vansh");
console.log(wildanimals);
wildanimals.push("Elephant")
console.log(wildanimals)

// POP - deletes last value and returns it 
let deleted_element = wildanimals.pop();
console.log(wildanimals);
let deleted_element2 = wildanimals.pop()
console.log(deleted_element);

// To strings - convert array to strings , does not make change in original array
console.log(wildanimals.toString())

// Concat Method - to join multiple arrays and return the result - it does not make changes in original array!!

let marvel = ["thor" , "spiderman" , "ironman" , "hulk"]
let dc = ["superman" , "batman","aquaman" , "wonder women"]

c_array = marvel.concat(dc)
console.log(c_array)
console.log(marvel)
console.log(dc)

// Unshift method - works like push - this will add element in starting of array
// push adds elements to the end of an array, while unshift adds elements to the beginning.
marvel.unshift("antman")
console.log(marvel)

// Shift method -(deletes from start and return the value ) works like pop and returns the value
let removed_element = dc.shift();
console.log(dc)
// this method has removed 1st element in array while pop removes last element of array 
console.log(removed_element)


// Slice method - returns a piece of array , does not make change in original array

let disney_princesses = ["elsa", "aana","Jasmine","moana" , "Rapunzel" ,"Belle" ,"Cinderella" , "snow-white" , "Aurora"]
console.log(disney_princesses)
console.log(disney_princesses.slice(1,4));
console.log(disney_princesses.slice(0,6));

// Splice method - changes the original array(add, remove,replace)

let musical_instruments = ["piano" , "guitar" , "flute" , "violin" , "sitar" , "harmonica", "cello"]
// console.log(musical_instruments(starting_index,number of elements i want to delete,new elements if we want to add));

console.log(musical_instruments.splice(2,4,"Oboe"));
console.log(musical_instruments);


// 2 - starting from index 2 
// 4 - delete 4 elements from index 2 including all 1,2,3,4 element , last element is not get ignored 
// oboe - add this value at index 2 

// add element 
musical_instruments.splice(1, 0, "Drums");
console.log(musical_instruments);

// delete element 
musical_instruments.splice(3,1);
console.log(musical_instruments);

// replace element 
musical_instruments.splice(3,1,"Xylophone");
console.log(musical_instruments);

// If you pass only the first value to the splice method in JavaScript, it removes all elements from the specified starting index to the end of the array.



// Question : function that returns the total number of even numbers in an array:


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function countEvenNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log(countEvenNumbers(arr)) 


// function which returns the sum of all the numbers in an array:

let arr55 = [1, 2, 3, 4, 5]

const sunUsingFor = () => {

    let sum = 0
    for(let i = 0; i < arr1.length; i++) {
        sum += arr55[i]
    }
    console.log(sum)
    

}
sunUsingFor(arr55)

// function to reverse an array 

let a = [2,3,4,5]
const reverseArr1 = (a)=>{
    for(let i = 0; i < a.length; i++){
        let element = a.pop();
        a.unshift(element)
    }
    return a;
}
console.log(reverseArr1(a))

// const reverseArr = (arr66)=>{
//     for(let i = 0; i < reverseArr.length; i++){
//           let element = arr66.pop()
//           arr66.unshift(element)
//     }

//     return arr66;
// }

// let arr66 = ["akhilesh", "darsh", "chinki", "monjulika"];

// console.log(reverseArr(arr66));