let str3 = "Hello, World!"

console.log(str3.toUpperCase())
console.log(str3.toLowerCase())
console.log(str3.includes("World"))
console.log(str3.startsWith("Hello"))
console.log(str3.endsWith("!"))
console.log(str3.indexOf("o"))
console.log(str3.lastIndexOf("o"))
console.log(str3.charAt(1))
console.log(str3.substring(0, 5))
console.log(str3.slice(0, 5))
console.log(str3.split(", "))
console.log(str3.replace("World", "JavaScript"))
console.log(str3.trim())
console.log(str3.repeat(2))


// Concatenation of string 
let str4 = "Hello";
let str5 = "World";
let concatenatedStr = str4.concat(", ", str5, "!");
console.log(concatenatedStr);

// *Learning Stings in JS 
// *My code 

let str1 = "Vanshika"
let str2 = 'Vanshii'
let strn = "Bhuvi and Pari"
console.log(str1[0]);
console.log(str2.length);
console.log(strn.length);
console.log(strn[10]);


// Example of template literals and their uses

let name = "Vanshika";
let age = 25;
let city = "New York";

// Using template literals to create a string with embedded expressions
let introduction = `My name is ${name}, I am ${age} years old and I live in ${city}.`;
console.log(introduction);

// Template Literal 
let special_string = `This is a template literal ${100/5} ${100+5} ${100%5} ${10**5} `;
console.log(special_string)
// we can perform mathematical operations in template literals 


// interview question 
// define template literals and string interpolation 


// Escape characters in JavaScript

// Newline
let newlineExample = "Hello,\nWorld!";
console.log(newlineExample);

// Backslash
let backslashExample = "This is a backslash: \\";
console.log(backslashExample);

// Single quote
let singleQuoteExample = 'It\'s a beautiful day!';
console.log(singleQuoteExample);

// Double quote
let doubleQuoteExample = "He said, \"Hello!\"";
console.log(doubleQuoteExample);

// Carriage return
let carriageReturnExample = "Hello,\rWorld!";
console.log(carriageReturnExample);

// Tab
let tabExample = "Hello,\tWorld!";
console.log(tabExample);

// Unicode
let unicodeExample = "Unicode character: \u263A";
console.log(unicodeExample);

// Backspace
let backspaceExample = "Hello,\bWorld!";
console.log(backspaceExample);

// Form feed
let formFeedExample = "Hello,\fWorld!";
console.log(formFeedExample);


// escape character is counted as single element - (\t) = single element = (1)

// Methods in strings 
let str8 = "javascript"
let newstr8 = str8.toUpperCase()
console.log(newstr8)


let str9 = "javascript"
let newstr9 = str9.toLowerCase()
console.log(newstr9)

// **** toUpperCase , toLowerCase does  not make change in original string , it returns changes in new string ***** , as strings are immutable so original string does not gets change !! 


let str10 = "   java    script     "
let newstr10 = str10.trim()
console.log(newstr10)

// trim - removes starting and ending spaces 
