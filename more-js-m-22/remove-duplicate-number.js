function removeDuplicateNumbe(ary) {
    let uniqeAry = []
    for(let i = 0; i < arry.length; i++) {
        if (uniqeAry.includes(ary[i]) !== true) {
            uniqeAry.push(ary[i])
        }

    }
  return uniqeAry
}

const arry = [223, 45, 36, 78, 456, 34, 56, 35, 46, 37, 54, 67, 54, 33, 22, 44, 66, 77, 22, 21, 33, 44, 55, 54,]
console.log(removeDuplicateNumbe(arry))