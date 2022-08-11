function changeNumber(n){
    for(let i = 0; i<= n ; i++){
        if((i%3 ===0) && (i%5 ===0)){
            console.log('FooBar')
        }
        else if(i%3 ===0){
            console.log("Foo")
        }
        else if(i%5 ===0){
            console.log("Bar")
        }
        else{
            console.log(i)
        }
    }
    
}
changeNumber(100)