// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result
// Print the result.


const ary = ['Abul', 'Babul', 'Cabul', 'Dabul' ,'Ebul'," Fubul", "Rakinul"]
console.log(ary.filter((vlaue)=> vlaue.length%2!=0))