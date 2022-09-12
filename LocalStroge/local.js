addLc('name','name-feild','set-ls')
// addLc('age','name-feild','set-ls')
removeLc('name','remove-ls')

function removeLc(key,id){
    document.getElementById(id).addEventListener('click', function(){
        localStorage.removeItem(key)
    })
}
function addLc(key,input,btnId){
    document.getElementById(btnId).addEventListener('click',function(){
        const nameValue =  document.getElementById(input).value 
        localStorage.setItem(key, nameValue)
     })
}