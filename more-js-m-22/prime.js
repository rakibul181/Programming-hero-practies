function printPrime(n){
    for(let i = 1; i<=n;i++){
        if(i%i === 0){
            console.log(i)
        }
    }
    
}
printPrime(100)