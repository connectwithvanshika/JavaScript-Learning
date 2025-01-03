// In JavaScript, a Promise is like a "promise" to do something in the future. It is used for handling asynchronous operations, like reading a file, fetching data from a server, or waiting for an event to happen. A promise can be in three states:

// Pending: The promise is still waiting for the operation to complete.
// Fulfilled: The operation completed successfully, and the promise is "resolved."
// Rejected: The operation failed, and the promise is "rejected."


// resolve(): This is called when the operation is successful.
// reject(): This is called when the operation fails.
// then(): This method is used to handle the result of a fulfilled promise.
// catch(): This method is used to handle errors if the promise gets rejected.
// finally(): This method is called when the promise is settled, whether it is fulfilled or rejected.

let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Yes i am done")
        resolve('Promise 1 resolved');
    }, 3000);
})

prom1.then((a) => {
    console.log(a)
})




let myPromise = new Promise((resolve, reject) => {
    let success = true; // This can be any condition
  
    if (success) {
      resolve("The operation was successful!");
    } else {
      reject("Something went wrong.");
    }
  });
  
  myPromise.then((message) => {
    console.log(message);  // If the promise is fulfilled, this will run.
  }).catch((error) => {
    console.log(error);    // If the promise is rejected, this will run.
  });
  