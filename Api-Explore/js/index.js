function showUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => showData(data))
}

function showData(data){
    const userList = document.getElementById('user-list')
    
    for(const user of data){
        const list = document.createElement('li')
        list.innerText = user.name
        userList.appendChild(list)
    }
    
}