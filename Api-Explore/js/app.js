function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>  console.log(data))
}

function loadData2(){
     fetch('https://jsonplaceholder.typicode.com/photos')
     .then(ref => ref.json())
     .then(data => console.log(data))
}
function showData(data){
    console(data)
}