function findMin(arr){
    let minNum = arr[0]
    for(let i=0; i<arr.length;i++){
        if(minNum>arr[i]){
            minNum =arr[i]
        }
        
    }
    return minNum
}

const ary = [11,23,344,4,6,7,88,44,33,55,4,]
console.log(findMin(ary))