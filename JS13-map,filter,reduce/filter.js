// For each loop of arrays(basic example)- does not return any value , shown in below example

const codingLanguages = ["js" , "swift" , "python" , "ruby" , "java"]
const values = codingLanguages.forEach((items) => {
    console.log(items)
    return items
})
console.log(values)


const vegetables = ["tomato" , "potatao" , "pea"]
const nameOfVeggie = vegetables.forEach((items) => {
    console.log(items)
    return items
})


// Filter - has a callback function , condition is given and value is returned acc to the condition 
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums  = myNums.filter( (num) => {
    return num>4
})
console.log(newNums)


// Filtering Even Numbers from an Array 
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];

const Numbers = array1.filter((num) => {
    if (num % 2 == 0) {
        return true; // Return true to keep the even numbers
    }
    return false; // Return false to exclude odd numbers
});

console.log(Numbers); // Output: [2, 4, 6, 8, 20]



// Doing same example by using for each - in this example we will make an empty array and push the numbers in that because for each does not return the values 
const newNumss = []
myNums.forEach((num) => {

    if(num>4){
        newNumss.push(num)
    }

})
console.log(newNums)


// Solving one example of books array 


const books = [
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        edition: "50th Anniversary Edition",
        publicationYear: 1960
    },
    {
        title: "1984",
        genre: "Dystopian",
        edition: "Penguin Modern Classics",
        publicationYear: 1949
    },
    {
        title: "Moby-Dick",
        genre: "Adventure",
        edition: "Norton Critical Edition",
        publicationYear: 1851
    },
    {
        title: "Pride and Prejudice",
        genre: "Romance",
        edition: "Penguin Classics",
        publicationYear: 1813
    },
    {
        title: "The Great Gatsby",
        genre: "Classic",
        edition: "Scribner Edition",
        publicationYear: 1925
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        genre: "Fantasy",
        edition: "Scholastic Edition",
        publicationYear: 1997
    },
    {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        edition: "Little, Brown and Company Edition",
        publicationYear: 1951
    },
    {
        title: "The Lord of the Rings",
        genre: "Fantasy",
        edition: "HarperCollins Edition",
        publicationYear: 1954
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        edition: "HarperCollins Edition",
        publicationYear: 1937
    },
    {
        title: "The Chronicles of Narnia",
        genre: "Fantasy",
        edition: "HarperCollins Complete Collection",
        publicationYear: 1950
    }
];

// console.log(books);


const neededBooks = books.filter((i) => i.genre === "Fantasy")
console.log(neededBooks)

const neededBooks1 = books.filter((a) => a.publicationYear == "1813")
console.log(neededBooks1)

const Bookyear = books.filter((a) => { 
    return a.publicationYear > "1813" && a.edition == "HarperCollins Edition"})
console.log(Bookyear)




