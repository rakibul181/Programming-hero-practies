// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result
// Print the result.

const arr1 =[1, 23, 44, 23, 45, 67,45 ,46,56]
const arr2 =[23, 45, 67,89, 34,78,90,09,89,97]

const compareTow = (arr1, arr2) =>(Math.max(...arr1,...arr2))

console.log(compareTow(arr1,arr2))
