// Try , catch and errors 

// try and catch works synchronously 
let a = prompt("Enter first number")
let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)){
    throw SyntaxError("Enter a valid number")
}

let sum = parseInt(a) + parseInt(b)

function main(){
    let x = 1
try {
    console.log(sum*x)
    return true
} catch (error) {
    console.log("Error- x is not defined")
    return false
    // alert("Alert - error")
}
finally{
    console.log("Flies are now closed")
}
}
let c = main()

// why finally is used - interview question 

// finally code will get executed even after return statement is used in function - so finally always runsThe finally block in JavaScript is used to execute code after a try...catch block, regardless of whether an error was thrown or not.
