const sections = document.querySelectorAll('section')
for(const section of sections ){
    section.style.border = '2px solid steelblue'
    section.style.padding ="20px"
    section.style.marginBottom = '20px'
    section.style.borderRadius = "10px"
    section.style.backgroundColor = "lightblue"
}

const plases = document.getElementById("plases")
plases.classList.add('bg-lightgreen')
