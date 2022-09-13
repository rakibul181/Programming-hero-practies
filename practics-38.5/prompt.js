const mgs = prompt('enter a numver')
const numMgs =parseFloat(mgs)
console.log(numMgs)

if(isNaN(numMgs)){
    console.log(numMgs)
    alert('plese enter a number')
}
else{ 
    const  addnumMgs = numMgs +200
    alert(addnumMgs)
}

isNaN(numMgs)  