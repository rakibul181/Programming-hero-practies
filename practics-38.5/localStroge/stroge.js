function getValuFromID(id){
    const value = document.getElementById(id)
    const valueGet = value.value
    value.value = ""
    return valueGet
}

document.getElementById('add-item').addEventListener('click',function(){
   const  name = getValuFromID('name')
   const value = getValuFromID('value')
   setItemInLocalstroge(name, value)
   displayItem(name, value)
   console.log(name,value)

})
// document.getElementById('remove-item').addEventListener('click',function(){
//     const  name = getValuFromID('name')
//     localStorage.removeItem(name)
// })

function displayItem(product, quentity){
    const displayContainer  = document.getElementById("display-container")
    const list = document.createElement('li')
    list.innerText = `${product}: ${quentity}`
    displayContainer.appendChild(list)

}

const getShoppingCartFromlocalStroge = ()=>{
    let savedCart =  localStorage.getItem('cart')
    let cart = {}
    if(savedCart){
        cart = JSON.parse(savedCart)
    }   
    return cart
}

const setItemInLocalstroge =(product,quentity) =>{
    const cart = getShoppingCartFromlocalStroge()

    cart[product] =quentity

    const stringfiedCart = JSON.stringify(cart)

    localStorage.setItem('cart',stringfiedCart)
    
}

const displaySavedCart = ()=>{
    const savedCart = getShoppingCartFromlocalStroge()
    for(const product in savedCart){
        const quentity = savedCart[product]
        displayItem(product,quentity)
    }

}

displaySavedCart()