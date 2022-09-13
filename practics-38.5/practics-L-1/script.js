const getValueFromID = (id)=>{
    const value = document.getElementById(id)
    const getValue = value.value
    value.value = ''
    return getValue
}

document.getElementById('add-ls').addEventListener('click',function(){
    const key = getValueFromID('property')
    const value = getValueFromID('value')
    setItemInLocalstroge(key,value)
})

document.getElementById('all-clear').addEventListener('click',function(){
    localStorage.clear()
})

const storetedItem = () =>{
    const saveData = localStorage.getItem('property')
    let data = {}
    if(saveData){
        data = JSON.parse(saveData)
    }
    return data
}

const setItemInLocalstroge =(key, value)=>{
    const stored = storetedItem()
    stored[key]=value
    const stringfied = JSON.stringify(stored)
    localStorage.setItem('property',stringfied)

      
}

document.getElementById('remove-ls').addEventListener('click',function(){
    const removeItem = getValueFromID('remove-property')
    if(removeItem){
        localStorage.removeItem(removeItem)
    }
    else{
        alert('There are no property name as you Enter')
    }
})