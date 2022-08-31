
function userPost(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => post(data))
}
const postContainer = document.getElementById('post-container')
function post(users){
    for(const user of users){
        console.log(user)
        const postDiv = document.createElement('div')
        postDiv.innerHTML =`
        <h3>Titel: ${user.title}</h3>
        <h5> User Id: ${user.id}
        <br>
        <img src='${user.thumbnailUrl}'>

        `
        postDiv.classList.add('post')
        postContainer.appendChild(postDiv)
    }
}
userPost()