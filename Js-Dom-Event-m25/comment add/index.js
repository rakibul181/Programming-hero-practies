document.getElementById("addComment").addEventListener("click", function (){
    const text = document.getElementById("comment-text")
    const textValu = text.value
    const p =  document.createElement('p')
    p.innerText =textValu
    const para = document.getElementById("paragarap")
    para.append(p)
    text.value = ''
})