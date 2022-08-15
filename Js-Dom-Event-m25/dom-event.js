console.log("DOm ami Ready")

function makeRed(){
    document.body.style.backgroundColor = 'red'
}

const makeBlue =document.getElementById("make-blue")
makeBlue.onclick = makeBlueBg

function makeBlueBg(){
    document.body.style.backgroundColor ='blue'
}


document.getElementById('make-pink').addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink'
})