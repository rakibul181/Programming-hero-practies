const myPlascs = document.getElementById('plases')
const liadd = document.createElement('p')
liadd.innerText = 'Ami sob jaygay jete cai but amar Taka nai'

myPlascs.append(liadd)

const mainCont = document.getElementById("main-cont")

const section = document.createElement('section')
const heading = document.createElement('h1')
heading.innerText ="My Courses on 2nd Year"
const ulist = document.createElement('ul')
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
const li4 = document.createElement('li')
const li5 = document.createElement('li')
const li6 = document.createElement('li')
const li7 = document.createElement('li')
const li8 = document.createElement('li')
li1.innerText =" Optics"
li2.innerText =" Thermal Physiscs"
li3.innerText =" Classical Mach"
li4.innerText =" Math. Method in Physis part-2 "
li5.innerText =" Numarical Method"
li6.innerText =" Physical Chemistry"
li7.innerText =" Basics Eletronics"
li8.innerText =" Fundamental of Fortran Programming"

ulist.appendChild(li1)
ulist.appendChild(li2)
ulist.appendChild(li3)
ulist.appendChild(li4)
ulist.appendChild(li5)
ulist.appendChild(li6)
ulist.appendChild(li7)
ulist.appendChild(li8)
section.appendChild(heading)
section.appendChild(ulist)
mainCont.appendChild(section)


