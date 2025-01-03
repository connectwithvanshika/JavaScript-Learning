// JavaScript Demo: Array.reduce() 
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);



// Question 1 - sum of values in arrays 
const myNums = [1,2,3]
const total = myNums.reduce(function (accumulator,currentValue) {
    console.log( `accumulator-value: ${accumulator} and current-value : ${currentValue}`)
    return accumulator + currentValue
},0)
console.log(total)
// value of accumulator is 0 
// and currentValue is 1



// doing same question by arrow function 
const nums = [1,2,3]
const totalValue = nums.reduce((acc,curr) => { return acc+curr},0)
console.log(totalValue)


// Question.2 // Using reduce() to calculate the sum of the numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);  // Output: 15




const shoppingList = [
    {
        item: "Smartphone",
        brand: "Apple",
        category: "Electronics",
        price: 999,
        quantity: 1
    },
    {
        item: "Laptop",
        brand: "Dell",
        category: "Computers",
        price: 799,
        quantity: 1
    },
    {
        item: "Wireless Earbuds",
        brand: "Sony",
        category: "Audio",
        price: 150,
        quantity: 2
    },
    {
        item: "Smart Watch",
        brand: "Samsung",
        category: "Wearables",
        price: 199,
        quantity: 1
    },
    {
        item: "Bluetooth Speaker",
        brand: "JBL",
        category: "Audio",
        price: 120,
        quantity: 1
    },
];

// console.log(shoppingList);

const result = shoppingList.reduce((acc , item) => ( acc + item.price),0)

console.log(result)




