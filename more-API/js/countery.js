const loadCountry =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(rez => rez.json())
    .then(data => displayCountry(data))
}

const countryCont = document.getElementById('country-container')

const displayCountry = (countrys =>{
    countrys.forEach(cnty => {
        // console.log(cnty)

    
        const cntyDIv = document.createElement('div')
        cntyDIv.classList.add('country')
        cntyDIv.innerHTML =`
        <h1>Name: ${cnty.name.common} </h1>
        <p>Capital: ${cnty.capital}</p>
        <button onclick="dilpalyConuntryDtails('${cnty.cca2}')">Details</button>
        `
        countryCont.appendChild(cntyDIv)
    });
} )

const dilpalyConuntryDtails = (code) =>{
    const url =`https://restcountries.com/v3.1/name/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => contryInfomation(data[0]))
    
}
const countryInfo = document.getElementById('country-info')
const contryInfomation = (data) => {
    console.log(data)
    // const infoDiv = document.createElement('div')

    countryInfo.innerHTML =`
    <img src="${data.flags.png}" alt="">
    <h3>Name: ${data.name.common} </h3>
    <p>Capital: ${data.capital}</p>
    `
    countryInfo.appendChild(infoDiv)

}
loadCountry()