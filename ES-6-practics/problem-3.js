// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.

const avgSum = (arry) =>{
   const sqer =  arry.map((a) => a**2)
   console.log(sqer)

   const sumArr = sqer.reduce((priv, currnt) => priv+currnt)
   console.log(sumArr)

   const sumAvg = sumArr/sqer.length
   console.log(sumAvg)
   return sumAvg
}

ary = [1,2, 3,9]
avgSum(ary)