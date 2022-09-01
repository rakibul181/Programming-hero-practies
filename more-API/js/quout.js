
const loadQuotes =() =>{
    fetch('https://api.kanye.rest')
    .then(resp => resp.json())
    .then(data => quoet(data))
}
const loadQuote = document.getElementById('quoet')
function quoet(data){
    console.log(data)
    loadQuote.innerText = data.quote
}