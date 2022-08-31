// Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.


const multifly = (a,b,c) => a*b*c

console.log(multifly(2,3,4))

// Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.

const sum = (a, b=6) => a+b

console.log(sum(1,2))