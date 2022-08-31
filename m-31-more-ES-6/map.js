const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 44, 54, 56, 65, 67]

console.log(arry.map(a => Math.sqrt(a)))

const map = Array.prototype.map

const strMap = map.call('hello world , Here is Rakibul Hasan',(a)=> a.charCodeAt(0))

console.log(strMap)

// console.log(arry.map(x => ))