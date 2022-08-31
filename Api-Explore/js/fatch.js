// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => console.log(response))
// //   .then(json => console.log(json))



fetch('https://jsonplaceholder.typicode.com/todos')
    .then(Response => Response.json())
    .then(json => console.log(json))