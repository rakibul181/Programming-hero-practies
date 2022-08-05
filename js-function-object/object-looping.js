const shoppingCart ={
    book: 4,
    sunglass: 3 ,
    keyboard : 1,
    mouse: 1,
    pen: 12,
    laptop: 5,
}
let CartKey = Object.keys(shoppingCart)

for(let i = 0; i<CartKey.length; i++){
    console.log(CartKey[i])
}
var movie = {name: 'Din-The Day'};
console.log(movie)

movie.name = 'Howa'
console.log(movie)
console.log(movie.name)

function moveie(){
    return "Din-The day";
    return "Poran";
    return "Hawa";
  }
  console.log(moveie());
  fu