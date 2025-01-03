// one-liner list of asynchronous functions 

// setInterval(), setTimeout(), Promises, fetch(), setImmediate(), requestAnimationFrame(), Web Workers, Async/Await, File Reading (Node.js), Event Listeners.


console.log("Vanshika is a good girl")

// First statement: console.log("Vanshika is a good girl") – This is a synchronous operation, so it runs immediately . 


console.log("haha a is a good girl")


// Second statement: console.log("haha a is a good girl") – This also runs synchronously 


setTimeout(()=> {
    console.log("I am inside set timeout")
},2000);

// This is an asynchronous operation. setTimeout will set up a timer to wait for 2000 milliseconds (2 seconds) before executing the callback function.
// Important: Even though setTimeout is called here, the rest of the code doesn't wait for it. JavaScript continues executing the next line of code.


// The setTimeout function doesn’t block the rest of the code. It sets up a timer for 2 seconds and then moves to the next line, executing the console.log("THE END") immediately. 


console.log("THE END")

// Since this is synchronous, it runs immediately after the previous synchronous code.


const callback = (arg) => {
    console.log(arg)
}


const loadScript = (src,callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Vanshika");
    document.head.append(sc)
 }

loadScript("https://www.computerscience.org/resources/what-is-coding-used-for/" , callback)
