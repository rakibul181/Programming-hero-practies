const randomUser = () =>{
    fetch('https://randomuser.me/api/?results=500')
    .then(res =>res.json())
    .then(users => displayUser(users.results))
}

const displayUser = (users => {
    const userContainer = document.getElementById('users')
    for(const user of users){
     const userDiv =    document.createElement('div')
     userDiv.classList.add('user')
     userDiv.innerHTML = `
     <img src="${user.picture.large}" alt="User Photo">
     <h3>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
     <p>User Name: ${user.login.username}</p>
     <p>ID: ${user.id.value}</p>
     <h3>Gender: ${user.gender}</h3>
     <h3>Age: ${user.dob.age}</h3>
     <h3>Email: ${user.email}</h3>
     <p>Phone: ${user.phone}</p>
     <p>Location: ${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}</p>
 
        `

        userContainer.appendChild(userDiv)
        console.log(user)

    }
})
randomUser()