const countValue = ()=>{
    const countValue = localStorage.getItem("count")
    let initailCount = 0
    if(count){
        initailCount = JSON.parse(countValue)
    }
    document.getElementById('count').innerText= initailCount
    return initailCount
}

document.getElementById('plus').addEventListener('click',function(){
    let count = countValue()
    count++
    localStorage.setItem('count',count)
    document.getElementById('count').innerText= count

})
document.getElementById('minus').addEventListener('click',function(){
    let count = countValue()
    count--
    localStorage.setItem('count',count)
    document.getElementById('count').innerText= count

})
countValue()


 