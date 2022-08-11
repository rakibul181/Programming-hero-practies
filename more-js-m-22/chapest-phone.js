const phone  =[
    {brand:"apple", price:"99000", color: "dark"},
    {brand:"Samsung", price:"22000", color: "blue dark"},
    {brand:"Realme", price:"62000", color: "dark"},
    {brand:"Walton", price:"52000", color: "dark"},
    {brand:"Redme", price:"22000", color: "dark"},
]

function cheaPhone(arry){
    let cheapest  = phone[0]
    for (let i=0;i<arry.length;i++){
        if(cheapest.price>phone[i].price){
            cheapest =phone[1]
        }
    }
    return cheapest.price
}

console.log(cheaPhone(phone))