function findMax(arr){
    let fristNum = 0
    for(let i=0; i<arr.length;i++){
        if(fristNum<arr[i]){
            fristNum =arr[i]
        }
        
    }
    return fristNum
}

const ary = [1,2,3,4,6,7,88,44,33,55,4,]
console.log(findMax(ary))