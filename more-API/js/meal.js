const loadMealDB = (keyword) =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayMeals(data.meals))
}
const displayMeals = (data) =>{
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerText = ""
    data.forEach(meal => {
        // console.log(meal)
        // mealDiv.innerHTM = ``
        const mealDiv = document.createElement('div')
        
        mealDiv.classList.add('col')
        mealDiv.innerHTML =`
        <div onclick="mealInfo(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
        </div>
        `
        mealsContainer.appendChild(mealDiv)

    });
}
const mealInfo = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealInfo(data.meals[0]))
}

const displayMealInfo = (meal) =>{
    console.log(meal)

    const displayContainer = document.getElementById('displayMealinfo')
    displayContainer.innerHTML = `` 
    const displayDiv = document.createElement('div')
    displayDiv.innerHTML =`
    <div class='mb-4'>
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h3>${meal.strMeal}</h3>
        <p class="card-text">${meal.strInstructions}</p>
    </div>
    </div>
    `
    displayContainer.appendChild(displayDiv)
}

const mealSearch =()=>{
   const inputData = document.getElementById('meal-input')
   const inputDataValue = inputData.value
   console.log(inputDataValue)
   loadMealDB(inputDataValue)
   inputData.value =''
}
