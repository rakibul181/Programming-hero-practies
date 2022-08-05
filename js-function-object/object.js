const shoppingCart ={
    book: 4,
    sunglass: 3 ,
    keyboard : 1,
    mouse: 1,
    pen: 12,
}

let penCart = shoppingCart.pen
console.log(penCart)

let  prop = Object.keys(shoppingCart)
let propV = Object.values(shoppingCart)

console.log(prop)
console.log(propV)
