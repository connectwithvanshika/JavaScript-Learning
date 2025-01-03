// Array practice question 

// Task to do 
// 1. remove 1st company 
// 2. remove uber and add ola
// 3. add amazon at end 

companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"]
companies.splice(0,1);
console.log(companies);

companies.splice(1,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);

