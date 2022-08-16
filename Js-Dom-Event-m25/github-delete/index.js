  document.getElementById("delete-text").addEventListener("keyup" ,function(event){
    const input = event.target.value
    const deleteBtn = document.getElementById("delete-btn")
    if(input === 'delete'){
        deleteBtn.removeAttribute('disabled')
    }
    else{
        deleteBtn.setAttribute('disabled', true)
    }
    deleteBtn.addEventListener('click' ,function(){
        document.getElementById("secret-text").style.display='none'
        event.target.value = ''
    })
})

