
const loadPlayer=(keyword)=>{
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${keyword}`
    fetch(url)
    .then(res => res.json())
    .then(data => playerdisply(data.player))
}

const playerdisply = (data)=>{

    console.log(data)
    for(const player of data){
        console.log(player)
        const displayContainer = document.getElementById('player-container')
        const playerDiv  = document.createElement('div')
        // // onclick="mealInfo(${meal.idMeal})"
        // displayContainer.innerText = ''
        const playerImg = (img) =>{
            if(img.strCutout != null){
                return img.strCutout
            }
            else if(img.strThumb != null){
                return img.strThumb
            }
            else{
                const url = `https://ibb.co/ZJF18Ct`
                return URL(url)
            }

        }
        const img = player.strCutout != null ? player.strCutout : player.strThumb
        const description = player.strDescriptionEN != null? player.strDescriptionEN.slice(0, 200): "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, eos asperiores dolorem quam veniam soluta nihil rem excepturi doloribus magni dicta, nesciunt quaerat provident accusantium." 
        console.log(description)
        playerDiv.innerHTML = `
        <div  class="card h-100">
        <img src="${playerImg(player)}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${player.strPlayer}</h5>
            <p class="card-text">${description}</p>
        </div>
        </div>
        `

        displayContainer.appendChild(playerDiv)
    }
    // data.map(player => {
    //     console.log(player)
    //     const displayContainer = document.getElementById('player-container')
    //     const playerDiv  = document.createElement('div')
    //     // onclick="mealInfo(${meal.idMeal})"
    //     displayContainer.innerText = ''
    //     const img = player.strCutout != null ? player.strCutout : player.strThumb
    //     playerDiv.innerHTML = `
    //     <div  class="card h-100">
    //     <img src="${img}" class="card-img-top" alt="...">
    //     <div class="card-body">
    //         <h5 class="card-title">${player.strPlayer}</h5>
    //         <p class="card-text">${player.strDescriptionEN.slice(0,200)}</p>
    //     </div>
    //     </div>
    //     `

    //     displayContainer.appendChild(playerDiv)
    // });
}

const playerSearch = () => {
    const playarInput = document.getElementById('player-input')
     const playarName =  playarInput.value
    loadPlayer(playarName)
    playarInput.value = ``
}