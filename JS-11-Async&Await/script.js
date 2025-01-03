// async function getData() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data loaded")
//             resolve('Data loaded');
//         }, 2000);
//     })
// }

// settle means resolve or reject 
// resolve - promise has settled successfully 
// reject - promise has not settled successfully 


// JSON (JavaScript Object Notation) is a lightweight data format used to exchange data between the client and the server. It is often used when sending or receiving data in web applications.

// Types of HTTP Requests 
// GET: Retrieve data from the server.
// POST: Send data to create a resource.
// PUT: Replace an existing resource.
// PATCH: Partially update an existing resource.
// DELETE: Delete a resource.
// HEAD: Retrieve only headers (no body).
// OPTIONS: Get information about the available communication options.

async function getData() {
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  let data = await x.json()
  console.log(data)
}

async function main() {

    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data")

    let data = await getData()

    console.log(data)

    console.log("process data ")

    console.log("Display data")

}
main()



// data.then((v) =>{
//     console.log(data)
//     console.log("process data ")
//     console.log("Display data")
// })


