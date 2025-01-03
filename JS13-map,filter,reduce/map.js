// Learning Maps 

// The map() function is a built-in method in JavaScript that belongs to the Array prototype. It is used to create a new array by applying a given function to each element of an existing array.

// Return Value: map() returns a new array, containing the results of applying the callback function to each element of the original array. It does not modify the original array.



// Question 1 - adding 10 in each number 

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers.map((num) => num+10)
console.log(newNums)


// Question 2 - // Using map() to multiply each number by 2
const myNumbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums1 = myNumbers.map((num) => 
    { return num * 2}
);
console.log(newNums1); 


// chaining the map()
// chaining the map() function to perform multiple transformations on an array:

const Numbersx = [22,33,44,55,66,77,88,99]
const returnNums = Numbersx
.map((num) => num*10)
.map((num) => num + 1)
.filter ((num) => num>221)


console.log(returnNums)


// Explanation of the above Code:
// map() - First Transformation (Multiply by 10):

// Each number in the Numbersx array is multiplied by 10.
// Input: [22, 33, 44, 55, 66, 77, 88, 99]
// Output after first map(): [220, 330, 440, 550, 660, 770, 880, 990]
// map() - Second Transformation (Add 1):

// Each number from the previous step has 1 added to it.
// Input (after first map()): [220, 330, 440, 550, 660, 770, 880, 990]
// Output after second map(): [221, 331, 441, 551, 661, 771, 881, 991]
// filter() - Filter Numbers Greater Than 22:

// The filter() method returns only the numbers that are greater than 22 from the result of the second map().
// Input (after second map()): [221, 331, 441, 551, 661, 771, 881, 991]
// Since all the numbers in the array are greater than 22, none of them are filtered out.
// Output after filter(): [221, 331, 441, 551, 661, 771, 881, 991]

